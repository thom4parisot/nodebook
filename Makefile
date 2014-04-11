ASCIIDOC_BACKEND = docbook
PANDOC_BACKEND = docbook
EXTENSION = xml

all: docbook
docbook: configure.docbook build clean
html: configure.html clean build clean

configure.docbook:
	$(eval ASCIIDOC_BACKEND = docbook)
	$(eval PANDOC_BACKEND = docbook)
	$(eval EXTENSION = xml)

configure.html:
	$(eval ASCIIDOC_BACKEND = html5)
	$(eval PANDOC_BACKEND = html)
	$(eval EXTENSION = html)

unzip:
	unzip -u book-${PANDOC_BACKEND}.odt -d tmp/

zip:
	rm -f book.odt
	cd tmp && zip -r ../book.odt ./

zip.clean:
	rm -rf tmp/

patch: unzip patch.odt zip

patch.odt:
	cat tmp/content.xml | node src/odt-filter/bin.js > tmp/content-tmp.xml
	cp tmp/content-tmp.xml tmp/content.xml
	rm tmp/content-tmp.xml

debug.build:
	pandoc -t native -f docbook chapters/00-book.xml

debug.patch:
	cat tmp/content.xml | node src/odt-filter/bin.js --silent

debug.odt:
	unzip -u book.odt -d tmp-final/

clean: zip.clean build.clean

build: build.odt patch

build.odt: build.asciidoc build.pandoc

build.asciidoc:
	asciidoc -b ${ASCIIDOC_BACKEND} -f src/eyrolles.conf -d book chapters/00-book.adoc

build.pandoc:
	pandoc -f ${PANDOC_BACKEND} --template src/template.xml chapters/00-book.${EXTENSION} -S --reference-odt=src/eyrolles.odt -o book-${PANDOC_BACKEND}.odt

build.clean:
	rm -f chapters/*.${EXTENSION} book-${PANDOC_BACKEND}.odt