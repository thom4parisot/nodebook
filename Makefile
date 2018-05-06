BUILD_DIR=dist
GIT_REPO=oncletom/nodebook

ADOC_FILES := $(wildcard **/index.adoc foreword/*.adoc)
HTML_FILES := $(ADOC_FILES:%.adoc=$(BUILD_DIR)/%.html)
PKG_FILES := $(wildcard package.json */package.json)
VIDEO_FILES := $(wildcard **/videos/*.mp4)
IMAGE_FILES := $(wildcard cover.png **/images/*.png **/images/*.jpg **/images/*.svg)
VIDEO_FILES_DIST := $(VIDEO_FILES:%=$(BUILD_DIR)/%)
IMAGE_FILES_DIST := $(IMAGE_FILES:%=$(BUILD_DIR)/%)
PKG_FILES_DIST := $(PKG_FILES:%=$(BUILD_DIR)/%)

clean:
	rm -rf $(BUILD_DIR)

$(PKG_FILES_DIST): $(PKG_FILES)
	@mkdir -p $(dir $@)
	cp $(@:dist/%=%) $@

$(VIDEO_FILES_DIST): $(VIDEO_FILES)
	@mkdir -p $(dir $@)
	cp $(@:dist/%=%) $@

$(IMAGE_FILES_DIST): $(IMAGE_FILES)
	@mkdir -p $(dir $@)
	cp $(@:dist/%=%) $@

build-html: $(VIDEO_FILES_DIST) $(IMAGE_FILES_DIST) $(PKG_FILES_DIST)
	npm run build:html

build-docbook: $(VIDEO_FILES_DIST) $(IMAGE_FILES_DIST) $(PKG_FILES_DIST)
	npm run build:docbook

build-odt: $(VIDEO_FILES_DIST) $(IMAGE_FILES_DIST) $(PKG_FILES_DIST)
	npm run build:odt

.PHONY: clean build-html build-odt build-docbook
