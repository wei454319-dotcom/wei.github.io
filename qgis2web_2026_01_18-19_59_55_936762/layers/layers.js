var wms_layers = [];

var format___0 = new ol.format.GeoJSON();
var features___0 = format___0.readFeatures(json___0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___0.addFeatures(features___0);
var lyr___0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___0, 
                style: style___0,
                popuplayertitle: '中国_省',
                interactive: true,
                title: '<img src="styles/legend/__0.png" /> 中国_省'
            });
var format___1 = new ol.format.GeoJSON();
var features___1 = format___1.readFeatures(json___1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___1.addFeatures(features___1);
var lyr___1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___1, 
                style: style___1,
                popuplayertitle: '辽宁省_省',
                interactive: true,
                title: '<img src="styles/legend/__1.png" /> 辽宁省_省'
            });
var format_cityFDP_2 = new ol.format.GeoJSON();
var features_cityFDP_2 = format_cityFDP_2.readFeatures(json_cityFDP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cityFDP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cityFDP_2.addFeatures(features_cityFDP_2);
var lyr_cityFDP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cityFDP_2, 
                style: style_cityFDP_2,
                popuplayertitle: 'city FDP',
                interactive: true,
    title: 'city FDP<br />\
    <img src="styles/legend/cityFDP_2_0.png" /> 650 - 650<br />\
    <img src="styles/legend/cityFDP_2_1.png" /> 650 - 779<br />\
    <img src="styles/legend/cityFDP_2_2.png" /> 779 - 1153<br />\
    <img src="styles/legend/cityFDP_2_3.png" /> 1153 - 1560<br />\
    <img src="styles/legend/cityFDP_2_4.png" /> 1560 - 9027<br />\
    <img src="styles/legend/cityFDP_2_5.png" /> 9027 - 9517<br />' });
var format_guodao_3 = new ol.format.GeoJSON();
var features_guodao_3 = format_guodao_3.readFeatures(json_guodao_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_guodao_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_guodao_3.addFeatures(features_guodao_3);
var lyr_guodao_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_guodao_3, 
                style: style_guodao_3,
                popuplayertitle: 'guodao',
                interactive: true,
    title: 'guodao<br />\
    <img src="styles/legend/guodao_3_0.png" /> Guodao<br />' });
var group_Guodao = new ol.layer.Group({
                                layers: [lyr_guodao_3,],
                                fold: 'open',
                                title: 'Guodao'});

lyr___0.setVisible(true);lyr___1.setVisible(true);lyr_cityFDP_2.setVisible(true);lyr_guodao_3.setVisible(true);
var layersList = [lyr___0,lyr___1,lyr_cityFDP_2,group_Guodao];
lyr___0.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___1.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr_cityFDP_2.set('fieldAliases', {'name': 'name', 'gb': 'gb', 'gdp_value': 'gdp_value', '1_field_2': '1_field_2', });
lyr_guodao_3.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'OBJECTID': 'OBJECTID', 'GB': 'GB', 'RN': 'RN', 'NAME': 'NAME', 'RTEG': 'RTEG', 'TYPE': 'TYPE', 'Shape_Leng': 'Shape_Leng', });
lyr___0.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___1.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr_cityFDP_2.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', 'gdp_value': 'TextEdit', '1_field_2': 'TextEdit', });
lyr_guodao_3.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'OBJECTID': 'TextEdit', 'GB': 'TextEdit', 'RN': 'TextEdit', 'NAME': 'TextEdit', 'RTEG': 'TextEdit', 'TYPE': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr___0.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___1.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr_cityFDP_2.set('fieldLabels', {'name': 'inline label - visible with data', 'gb': 'inline label - visible with data', 'gdp_value': 'inline label - visible with data', '1_field_2': 'inline label - visible with data', });
lyr_guodao_3.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'OBJECTID': 'no label', 'GB': 'header label - visible with data', 'RN': 'inline label - visible with data', 'NAME': 'inline label - visible with data', 'RTEG': 'no label', 'TYPE': 'inline label - visible with data', 'Shape_Leng': 'no label', });
lyr_guodao_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});