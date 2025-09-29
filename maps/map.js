var hillshade = L.tileLayer.wms('https://elevation.nationalmap.gov/arcgis/services/3DEPElevation/ImageServer/WMSServer?', {
  maxZoom: 19,
  layers: '3DEPElevation:Hillshade Multidirectional',
  format: 'image/png',
  transparent: true
});
 
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
   maxZoom: 19,
   attribution: '© OpenStreetMap'
});

var nationalmap = L.tileLayer.wms('https://basemap.nationalmap.gov:443/arcgis/services/USGSTopo/MapServer/WmsServer?', {
  maxZoom: 16,
  attributrion: 'U.S. Geological Survey',
  layers: 0,
  format: 'image/png',
  transparent: true
});

var topo = L.tileLayer('https://caltopo.s3.amazonaws.com/topo/{z}/{x}/{y}.png', {
  maxZoom: 16
});

var satellite = L.tileLayer('https://clarity.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 19
});

var usgs_satellite = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 16
});

var naip = L.tileLayer('https://gis.apfo.usda.gov/arcgis/rest/services/NAIP/USDA_CONUS_PRIME/ImageServer/tile/{z}/{y}/{x}', {
  maxZoom: 19
});

var goes_east = L.tileLayer.wms('https://geo.weather.gc.ca/geomet?service=WMS&version=1.3.0&request=GetCapabilities&layer=GOES-East_1km_NaturalColor', {
  layers: 'GOES-East_1km_NaturalColor'
});

 var goes_west = L.tileLayer.wms('https://geo.weather.gc.ca/geomet?service=WMS&version=1.3.0&request=GetCapabilities&layer=GOES-West_1km_NaturalColor', {
  layers: 'GOES-West_1km_NaturalColor'
 });

var contours = L.tileLayer.wms('https://elevation.nationalmap.gov/arcgis/services/3DEPElevation/ImageServer/WMSServer?', {
  maxZoom: 19,
  layers: '3DEPElevation:Contour 25',
  format: 'image/png',
  transparent: true
});

var usgs_hydrography = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSHydroCached/MapServer/tile/{z}/{y}/{x}', {
});

var osm_hydrography = L.tileLayer('https://api.mapbox.com/styles/v1/mcginnisa/clx871lrm08k401qlhbw471dl/tiles/256/{z}/{x}/{y}{r}?access_token=pk.eyJ1IjoibWNnaW5uaXNhIiwiYSI6ImNpaXl5c3dpeDAwMjZ1cm0wamU5MDZhcGYifQ.jKPmDEKSIyH-8lHt_z2_9Q', {
  maxZoom: 19
});

var locator = L.tileLayer('https://api.mapbox.com/styles/v1/openstreetmap/ckasmteyi1tda1ipfis6wqhuq/tiles/256/{z}/{x}/{y}{r}?access_token=pk.eyJ1IjoibWNnaW5uaXNhIiwiYSI6ImNpaXl5c3dpeDAwMjZ1cm0wamU5MDZhcGYifQ.jKPmDEKSIyH-8lHt_z2_9Q', {
  maxZoom: 19
});

var transportation = L.tileLayer('https://api.mapbox.com/styles/v1/mcginnisa/clx83f1ld01g201qo8vzzd839/tiles/256/{z}/{x}/{y}{r}?access_token=pk.eyJ1IjoibWNnaW5uaXNhIiwiYSI6ImNpaXl5c3dpeDAwMjZ1cm0wamU5MDZhcGYifQ.jKPmDEKSIyH-8lHt_z2_9Q', {
  maxZoom: 19
});

var placenames = L.tileLayer('https://api.mapbox.com/styles/v1/mcginnisa/clx867jlt08jx01qlcqe82xmy/tiles/256/{z}/{x}/{y}{r}?access_token=pk.eyJ1IjoibWNnaW5uaXNhIiwiYSI6ImNpaXl5c3dpeDAwMjZ1cm0wamU5MDZhcGYifQ.jKPmDEKSIyH-8lHt_z2_9Q', {
  maxZoom: 19
});

var bus_routes = L.tileLayer('https://tile.tracestrack.com/bus-route/{z}/{x}/{y}.png?key=3225210aa7a91cbd2ac1166a035e0589', {
  maxZoom: 19
});

var train_routes = L.tileLayer('https://tile.tracestrack.com/train-route/{z}/{x}/{y}.png?key=3225210aa7a91cbd2ac1166a035e0589', {
  maxZoom: 19
});

var subway_routes = L.tileLayer('https://tile.tracestrack.com/subway-route/{z}/{x}/{y}.png?key=3225210aa7a91cbd2ac1166a035e0589', {
  maxZoom: 19
});

var bicycle_routes = L.tileLayer('https://tile.tracestrack.com/bicycle-route/{z}/{x}/{y}.png?key=3225210aa7a91cbd2ac1166a035e0589', {
  maxZoom: 19
});

var mappos = L.Permalink.getMapLocation(10, [43, -76]);
 
var map = L.map('map', {
  center: mappos.center,
  zoom: mappos.zoom,
  layers: [hillshade,osm_hydrography,transportation,placenames]
});
L.Permalink.setup(map);

const popup = L.popup();

function onMapClick(e) {
  popup
   .setLatLng(e.latlng)
   .setContent(`<a href="https://www.google.com/maps?layer=c&cbll=${e.latlng.lat},${e.latlng.lng}">Google Street View</a><br/>
				<a href="https://www.bing.com/maps/?cp=${e.latlng.lat}~${e.latlng.lng}&style=x">Bing Street Side</a>`)
   .openOn(map);
};

map.on('click', onMapClick);


var baseMaps = {
  "Hillshade Gray": hillshade,
  "OpenStreetMap": osm,
  "USGS National Map": nationalmap,
  "USGS Scanned Topographic Maps": topo,
  "ESRI Imagery": satellite,
  "USGS Imagery": usgs_satellite,
  "National Agrigulature Imagery Program": naip,
  "GOES East": goes_east,
  "GOES West": goes_west
};

var overlayMaps = {
  "Locator Overlay": locator,
  "USGS Hydrography": usgs_hydrography,
  "OSM Hydrography": osm_hydrography,
  "Elevation Contours": contours,
  "Transportation": transportation,
  "Place Names and Borders": placenames,
  "FEMA Flood Zone Boundaries": floodplains,
  "Bus Routes": bus_routes,
  "Train Routes": train_routes,
  "Subway Routes": subway_routes,
  "Bicycle Routes": bicycle_routes
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

layer.bringToFront(transportation);
layer.bringToFront(placenames);
