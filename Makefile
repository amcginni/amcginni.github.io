all: index.html links.html maps.html
docs/style.css:
	cp style.css docs/style.css
index.html: header.phtml docs/style.css
	cpp -P index.phtml -o docs/index.html
links.html: header.phtml docs/style.css
	cpp -P links.phtml -o docs/links.html
leaflet.js:
	cp maps/leaflet.js docs/leaflet.js
leaflet.permalink.min.js:
	cp maps/leaflet.permalink.min.js docs/leaflet.permalink.min.js
StreetViewButtons.js:
	cp maps/StreetViewButtons.js docs/StreetViewButtons.js
maps.html: maps/maps.phtml leaflet.js StreetViewButtons.js navbar.phtml style.css leaflet.permalink.min.js
	cpp -P maps/maps.phtml -o docs/maps.html
clean:
	rm -rf docs/*
