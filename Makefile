all: index.xhtml links.xhtml maps.xhtml
docs/style.css:
	cp style.css docs/style.css
index.xhtml: header.phtml footer.phtml docs/style.css
	cpp -P index.phtml -o docs/index.xhtml
links.xhtml: header.phtml footer.phtml docs/style.css
	cpp -P links.phtml -o docs/links.xhtml
leaflet.css:
	cp maps/leaflet.css docs/leaflet.css
leaflet.js:
	cp maps/leaflet.js docs/leaflet.js
leaflet.permalink.min.js:
	cp maps/leaflet.permalink.min.js docs/leaflet.permalink.min.js
StreetViewButtons.js:
	cp maps/StreetViewButtons.js docs/StreetViewButtons.js
leaflet.measure.js:
	cp maps/leaflet.measure.js docs/leaflet.measure.js
leaflet.measure.css:
	cp maps/leaflet.measure.css docs/leaflet.measure.css
map.js:
	cp maps/map.js docs/map.js
maps.xhtml: maps/maps.phtml leaflet.js StreetViewButtons.js navbar.phtml footer.phtml style.css leaflet.permalink.min.js map.js leaflet.measure.css leaflet.measure.js
	cpp -P maps/maps.phtml -o docs/maps.xhtml
clean:
	rm -rf docs/*
