BUILD_DIR=dist
GIT_REPO=oncletom/nodebook

ADOC_FILES := $(wildcard **/index.adoc foreword/*.adoc)
HTML_FILES := $(ADOC_FILES:%.adoc=$(BUILD_DIR)/%.html)
VIDEO_FILES := $(wildcard **/videos/*.mp4)
IMAGE_FILES := $(wildcard cover.png **/images/*.png **/images/*.jpg)
VIDEO_FILES_DIST := $(VIDEO_FILES:%=$(BUILD_DIR)/%)
IMAGE_FILES_DIST := $(IMAGE_FILES:%=$(BUILD_DIR)/%)

clean:
	rm -rf $(BUILD_DIR)

$(VIDEO_FILES_DIST): $(VIDEO_FILES)
	@mkdir -p $(dir $@)
	cp $(@:dist/%=%) $@

$(IMAGE_FILES_DIST): $(IMAGE_FILES)
	@mkdir -p $(dir $@)
	cp $(@:dist/%=%) $@

build-html: $(VIDEO_FILES_DIST) $(IMAGE_FILES_DIST)
	npm run build:html

deploy-html: $(VIDEO_FILES_DIST) $(IMAGE_FILES_DIST) $(HTML_FILES)
	rm -rf /tmp/deploy && cp -r $(BUILD_DIR) /tmp/deploy
	cd /tmp/deploy
  git init
  @git remote add origin https://$(GH_TOKEN):x-oauth-basic@github.com/$(GIT_REPO).git  >/dev/null 2>&1
  @git checkout --orphan gh-pages >/dev/null 2>&1
  git add .
  git commit -am "Build HTML book at $(TRAVIS_COMMIT)"
  @git push -q -f origin gh-pages >/dev/null 2>&1

.PHONY: build-html clean deploy-html
.SILENT: deploy-html
