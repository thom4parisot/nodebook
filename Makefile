all: docbook 
docbook: configure.docbook clean build.odt
html: configure.html clean build.odt

configure.docbook:
	$(eval ASCIIDOC_BACKEND = docbook)
	$(eval PANDOC_BACKEND = docbook)
	$(eval EXTENSION = xml)

configure.html:
	$(eval ASCIIDOC_BACKEND = html5)
	$(eval PANDOC_BACKEND = html)
	$(eval EXTENSION = html)

clean:
	rm -f chapters/*.${EXTENSION} book-${PANDOC_BACKEND}.odt

build.odt:
	asciidoc -b ${ASCIIDOC_BACKEND} -d book chapters/00-book.adoc
	pandoc -f ${PANDOC_BACKEND} --template template.xml chapters/00-book.${EXTENSION} -S --reference-odt=eyrolles.odt -o book-${PANDOC_BACKEND}.odt
