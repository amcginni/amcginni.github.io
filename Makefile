all: index.html links.html maps.html
out/style.css:
	cp style.css out/style.css
index.html: header.phtml out/style.css
	cpp -P index.phtml -o out/index.html
links.html: header.phtml out/style.css
	cpp -P links.phtml -o out/links.html
leaflet.js:
	cp maps/leaflet.js out/leaflet.js
leaflet.permalink.min.js:
	cp maps/leaflet.permalink.min.js out/leaflet.permalink.min.js
StreetViewButtons.js:
	cp maps/StreetViewButtons.js out/StreetViewButtons.js
maps.html: maps/maps.phtml leaflet.js StreetViewButtons.js navbar.phtml style.css leaflet.permalink.min.js
	cpp -P maps/maps.phtml -o out/maps.html
clean:
	rm -rf out/*
