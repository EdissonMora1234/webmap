var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Museos_1 = new ol.format.GeoJSON();
var features_Museos_1 = format_Museos_1.readFeatures(json_Museos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Museos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Museos_1.addFeatures(features_Museos_1);cluster_Museos_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Museos_1
});
var lyr_Museos_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Museos_1, 
                style: style_Museos_1,
                popuplayertitle: "Museos",
                interactive: true,
                title: '<img src="styles/legend/Museos_1.png" /> Museos'
            });
var format_salas_2 = new ol.format.GeoJSON();
var features_salas_2 = format_salas_2.readFeatures(json_salas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_salas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_salas_2.addFeatures(features_salas_2);cluster_salas_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_salas_2
});
var lyr_salas_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_salas_2, 
                style: style_salas_2,
                popuplayertitle: "salas",
                interactive: true,
                title: '<img src="styles/legend/salas_2.png" /> salas'
            });
var group_Equipamientos = new ol.layer.Group({
                                layers: [lyr_salas_2,],
                                fold: "open",
                                title: "Equipamientos"});
var group_Expocision = new ol.layer.Group({
                                layers: [lyr_Museos_1,],
                                fold: "open",
                                title: "Expocision"});
var group_base = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                fold: "open",
                                title: "base"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Museos_1.setVisible(true);lyr_salas_2.setVisible(true);
var layersList = [group_base,group_Expocision,group_Equipamientos];
lyr_Museos_1.set('fieldAliases', {'BARRIO': 'BARRIO', 'CARACTER': 'CARACTER', 'DIR_GEO': 'DIR_GEO', 'LOCALIDAD': 'LOCALIDAD', 'MUSEO': 'MUSEO', });
lyr_salas_2.set('fieldAliases', {'LOCACION': 'LOCACION', 'TIPO': 'TIPO', 'CINEMA': 'CINEMA', 'CARACTER': 'CARACTER', 'SALAS': 'SALAS', 'SILLAS': 'SILLAS', 'DIRECCION': 'DIRECCION', 'BARRIO': 'BARRIO', 'COD_BARRIO': 'COD_BARRIO', 'UPZ': 'UPZ', 'COD_UPZ': 'COD_UPZ', 'LOCALIDA_1': 'LOCALIDA_1', 'COD_LOCA_1': 'COD_LOCA_1', 'FUENTE': 'FUENTE', 'ACTUALIZAC': 'ACTUALIZAC', });
lyr_Museos_1.set('fieldImages', {'BARRIO': 'TextEdit', 'CARACTER': 'TextEdit', 'DIR_GEO': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'MUSEO': 'TextEdit', });
lyr_salas_2.set('fieldImages', {'LOCACION': 'TextEdit', 'TIPO': 'TextEdit', 'CINEMA': 'TextEdit', 'CARACTER': 'TextEdit', 'SALAS': 'TextEdit', 'SILLAS': 'TextEdit', 'DIRECCION': 'TextEdit', 'BARRIO': 'TextEdit', 'COD_BARRIO': 'TextEdit', 'UPZ': 'TextEdit', 'COD_UPZ': 'TextEdit', 'LOCALIDA_1': 'TextEdit', 'COD_LOCA_1': 'TextEdit', 'FUENTE': 'TextEdit', 'ACTUALIZAC': 'TextEdit', });
lyr_Museos_1.set('fieldLabels', {'BARRIO': 'no label', 'CARACTER': 'no label', 'DIR_GEO': 'no label', 'LOCALIDAD': 'no label', 'MUSEO': 'no label', });
lyr_salas_2.set('fieldLabels', {'LOCACION': 'no label', 'TIPO': 'no label', 'CINEMA': 'no label', 'CARACTER': 'no label', 'SALAS': 'no label', 'SILLAS': 'no label', 'DIRECCION': 'no label', 'BARRIO': 'no label', 'COD_BARRIO': 'no label', 'UPZ': 'no label', 'COD_UPZ': 'no label', 'LOCALIDA_1': 'no label', 'COD_LOCA_1': 'no label', 'FUENTE': 'no label', 'ACTUALIZAC': 'no label', });
lyr_salas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});