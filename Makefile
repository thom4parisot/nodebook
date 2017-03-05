BUILD_DIR=dist
GIT_REPO=oncletom/nodebook

ADOC_FILES = $(wildcard index.adoc chapter-*/index.adoc appendix-*/index.adoc foreword/*.adoc)
HTML_FILES = $(ADOC_FILES:%.adoc=$(BUILD_DIR)/%.html)
VIDEO_FILES := $(wildcard chapter-*/videos/*.mp4)
VIDEO_FILES_DIST := $(VIDEO_FILES:%=$(BUILD_DIR)/%)

clean:
	rm -rf $(BUILD_DIR)

$(VIDEO_FILES_DIST): $(VIDEO_FILES)
	@mkdir -p $(dir $@)
	cp $< $@

build-html: $(VIDEO_FILES_DIST)
	npm run build:html

deploy-html: $(VIDEO_FILES_DIST) $(HTML_FILES)
	rm -rf /tmp/deploy && cp -r $(BUILD_DIR) /tmp/deploy
	cd /tmp/deploy \
          && git init \
          && git remote add origin https://$(GH_TOKEN)@github.com/$(GIT_REPO).git \
          && git checkout --orphan gh-pages \
          && git add . \
          && git commit -am 'Build HTML book' \
          && git push -q -f origin gh-pages

.PHONY: build-html clean deploy-html
.SILENT: deploy-html
