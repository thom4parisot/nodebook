BUILD_DIR=dist
GIT_REPO=oncletom/nodebook
DOCKER_IMAGE=oncletom/asciidoctor
DOCKER_COMMAND=docker run -i --rm -v $(CURDIR):/documents $(DOCKER_IMAGE)

ADOC_FILES = $(wildcard index.adoc chapter-*/index.adoc appendix-*/index.adoc foreword/*.adoc)
HTML_FILES = $(ADOC_FILES:%.adoc=$(BUILD_DIR)/%.html)
VIDEO_FILES := $(wildcard chapter-*/videos/*.mp4)
VIDEO_FILES_DIST := $(VIDEO_FILES:%=$(BUILD_DIR)/%)

clean:
	rm -rf $(BUILD_DIR)

install:
	docker pull $(DOCKER_IMAGE)

$(VIDEO_FILES_DIST): $(VIDEO_FILES)
	@mkdir -p $(dir $@)
	cp $< $@

$(HTML_FILES): $(ADOC_FILES)
	@mkdir -p $(dir $@)
	$(DOCKER_COMMAND) \
		-a data-uri \
		-a toc=macro \
		-a toclevels=4 \
		-a icons=font \
		-a lang=fr \
		-a env=ci \
		-a hide-uri-scheme \
		-a docinfo1 \
		-a experimental \
		-D $(dir $@) \
		-b html5 \
		-d book $(@:dist/%.html=%.adoc)

build-html: $(HTML_FILES) $(VIDEO_FILES_DIST)

deploy-html: $(VIDEO_FILES_DIST) $(HTML_FILES)
	rm -rf /tmp/deploy && cp -r $(BUILD_DIR) /tmp/deploy
	cd /tmp/deploy \
          && git init \
          && git remote add origin https://$(GH_TOKEN)@github.com/$(GIT_REPO).git \
          && git checkout --orphan gh-pages \
          && git add . \
          && git commit -am 'Build HTML book' \
          && git push -q -f origin gh-pages

.PHONY: build-html clean deploy-html install
.SILENT: deploy-html
