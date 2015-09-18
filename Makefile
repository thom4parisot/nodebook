BUILD_DIR=dist
GIT_REPO=oncletom/nodebook

adoc_files := index.adoc $(wildcard chapter-*/index.adoc) $(wildcard foreword/*.adoc)
html_files := $(adoc_files:%.adoc=$(BUILD_DIR)/%.html)

clean:
	rm -rf $(BUILD_DIR)

install:
	docker pull asciidoctor/docker-asciidoctor

$(html_files): $(adoc_files)
	$(eval ADOC_FILE = $(@:dist/%.html=%.adoc) )
	$(DOCKER_COMMAND) asciidoctor -a data-uri -D $(dir $@) -d book $(ADOC_FILE)

all: $(html_files)

deploy-html: $(html_files)
	git add dist && git commit -m 'Build HTML pages'
	git subtree push --prefix $(BUILD_DIR) https://$(GH_TOKEN)@github.com/$(GIT_REPO).git gh-pages

test:
	@exit 0

.PHONY: test install deploy-html
