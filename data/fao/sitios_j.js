
var MarkerOptionsSitios = {
    radius: 8,
    fillColor: "#ff7f00",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

// // Contenido del popup para cada feature
function popupContentSitios(feature) {
    return (
        "<div id='Estilo1'><h3>Sitios para Modelos </h3></div>" +
        "<hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<div id='Estilo3a'>" +
        "<b> Nombre : </b>" + feature.properties.id + "<br>" +
        // "<b> Habitantes (Censo 2010): </b>" + feature.properties.HABITANTES + "<br>" +
        // "<b> Tipo de asentamiento: </b>" + feature.properties.tipo_asent + "<br>" +
        // "<br>" +
        // "<b> <i>Fuente de Información:  </b>  INDEC - Censo 2010<br>" +
        // "<b> Fecha de actualización:  </b> - </i>" +
        "</div>"
    )
};
// Función para generar la leyenda
function createLegendSitios() {
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend');
        var labels = [];
        var styles = [
            { label: 'Sitios seleccionados', color: '' },
            { label: ' ', color: '#ff7f00' },
                    
            // Agrega aquí el resto de estilos con su respectiva etiqueta y color
        ];

        // Genera el contenido HTML de la leyenda
        styles.forEach(function (style) {
            labels.push(
                '<i style="background:' + style.color + '"></i> ' + style.label
            );
        });

        div.innerHTML = labels.join('<br>');
        return div;
    };

    // Función para mostrar/ocultar la leyenda
    function toggleLegend() {
        if (map.hasLayer(SitiosSeleccionados)) {
            legend.addTo(map);
        } else {
            legend.remove();
        }
    }
// Eliminar la leyenda al inicio
legend.remove();
    // Escucha el cambio de estado de la capa
    map.on('overlayadd overlayremove', toggleLegend);
}


var sitios = 
{
    "type": "FeatureCollection",
    "name": "sitios_selec",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "id": 1.0, "x": -65.616160617399999, "y": -29.528862439299999, "fna": "Departamento Capayán", "nam": "Capayán", "NOMBRE_ECO": "Chaco Seco", "precipitac": 500.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -65.616160617394243, -29.528862439253771 ] } },
    { "type": "Feature", "properties": { "id": 2.0, "x": -65.987753045399998, "y": -28.611897861199999, "fna": "Departamento Capayán", "nam": "Capayán", "NOMBRE_ECO": "Chaco Seco", "precipitac": 500.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -65.987753045420149, -28.611897861236478 ] } },
    { "type": "Feature", "properties": { "id": 3.0, "x": -66.056742772700005, "y": -27.559697464300001, "fna": "Departamento Andalgalá", "nam": "Andalgalá", "NOMBRE_ECO": "Selva de las Yungas", "precipitac": 2000.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -66.056742772686363, -27.559697464272414 ] } },
    { "type": "Feature", "properties": { "id": 4.0, "x": -66.696928171600007, "y": -26.971474220800001, "fna": "Departamento Belén", "nam": "Belén", "NOMBRE_ECO": "Monte de Sierras y Bolsones", "precipitac": 400.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -66.696928171553438, -26.971474220817719 ] } },
    { "type": "Feature", "properties": { "id": 27.0, "x": -67.410958056300004, "y": -26.057949510699999, "fna": "Departamento Antofagasta de la Sierra", "nam": "Antofagasta de la Sierra", "NOMBRE_ECO": "Puna", "precipitac": 100.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -67.410958056331538, -26.057949510685024 ] } },
    { "type": "Feature", "properties": { "id": 30.0, "x": -65.363564641799996, "y": -28.1488902213, "fna": "Departamento Santa Rosa", "nam": "Santa Rosa", "NOMBRE_ECO": "Chaco Seco", "precipitac": 500.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -65.363564641808296, -28.148890221305628 ] } }
    ]
    }
    
