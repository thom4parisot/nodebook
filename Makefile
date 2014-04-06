all: clean build

clean:
	rm -f chapters/*.xml book.odt

build: build.docbook build.odt

build.docbook:
	asciidoc -b docbook -d book chapters/00-book.adoc

build.odt:
	pandoc -f docbook -s chapters/00-book.xml -S --reference-odt=template.odt -o book.odt

