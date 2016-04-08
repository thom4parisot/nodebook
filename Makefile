BUILD_DIR=dist
GIT_REPO=oncletom/nodebook
DOCKER_IMAGE=oncletom/asciidoctor
DOCKER_COMMAND=docker run -i --rm -v $(CURDIR):/documents $(DOCKER_IMAGE)

adoc_files := index.adoc $(wildcard chapter-*/index.adoc) $(wildcard foreword/*.adoc) $(wildcard appendix-*/*.adoc)
html_files := $(adoc_files:%.adoc=$(BUILD_DIR)/%.html)

clean:
	rm -rf $(BUILD_DIR)

install:
	npm install --no-spin --no-progress
	docker pull $(DOCKER_IMAGE)

$(html_files): $(adoc_files)
	$(eval ADOC_FILE = $(@:dist/%.html=%.adoc) )

	$(DOCKER_COMMAND) \
            -a data-uri \
            -a toc=macro \
            -a toclevels=4 \
            -a icons=font \
            -a lang=fr \
            -a env=ci \
            -a hide-uri-scheme \
            -a docinfo1 \
            -D $(dir $@) \
            -b html5 \
            -d book $(ADOC_FILE)

build: $(html_files)

deploy-html: $(html_files)
	rm -rf /tmp/deploy && cp -r $(BUILD_DIR) /tmp/deploy
	cd /tmp/deploy \
          && git init \
          && git remote add origin https://$(GH_TOKEN)@github.com/$(GIT_REPO).git \
          && git checkout --orphan gh-pages \
          && git add . \
          && git commit -am 'Build HTML book' \
          && git push -q -f origin gh-pages

.PHONY: build clean deploy-html install
