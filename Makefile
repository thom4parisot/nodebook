BUILD_DIR=dist
GIT_REPO=oncletom/nodebook
DOCKER_COMMAND=docker run -i --rm -v $(CURDIR):/documents asciidoctor/docker-asciidoctor

adoc_files := index.adoc $(wildcard chapter-*/index.adoc) $(wildcard foreword/*.adoc)
html_files := $(adoc_files:%.adoc=$(BUILD_DIR)/%.html)

clean:
	rm -rf $(BUILD_DIR)

install:
	docker pull asciidoctor/docker-asciidoctor

$(html_files): $(adoc_files)
	$(eval ADOC_FILE = $(@:dist/%.html=%.adoc) )
	$(DOCKER_COMMAND) sh -c "asciidoctor \
            -a data-uri \
            -a toc \
            -a icons=font \
            -a lang=fr \
            -a env=ci \
            -a hide-uri-scheme \
            -a docinfo1 \
            -D $(dir $@) \
            -b html5 \
            -d book $(ADOC_FILE)"

all: $(html_files)

deploy-html: $(html_files)
	rm -rf /tmp/deploy && cp -r $(BUILD_DIR) /tmp/deploy
	cd /tmp/deploy \
          && git init \
          && git remote add origin https://$(GH_TOKEN)@github.com/$(GIT_REPO).git \
          && git checkout --orphan gh-pages \
          && git add . \
          && git commit -am 'Build HTML book' \
          && git push -q -f origin gh-pages

test:
	@exit 0

.PHONY: test install deploy-html
