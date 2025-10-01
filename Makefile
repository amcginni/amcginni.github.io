all: index.xhtml links.xhtml maps.xhtml
docs/style.css:
	cp style.css docs/style.css
index.xhtml: header.phtml footer.phtml docs/style.css
	cpp -P index.phtml -o docs/index.xhtml
	ln -sf ./index.xhtml docs/index.html
links.xhtml: header.phtml footer.phtml docs/style.css
	cpp -P links.phtml -o docs/links.xhtml
	ln -sf ./links.xhtml docs/links.html
leaflet:
	cp -r maps/leaflet docs/leaflet
maps.js: maps/maps.js
	cp maps/maps.js docs/maps.js
maps.xhtml: maps/maps.phtml maps.js navbar.phtml footer.phtml style.css leaflet
	cpp -P maps/maps.phtml -o docs/maps.xhtml
	ln -sf ./maps.xhtml docs/maps.html
clean:
	rm -rf docs/*
