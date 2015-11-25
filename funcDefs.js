var geocoder = new google.maps.Geocoder();

function initMap(address, zoom) {
    geocoder.geocode({'address': address}, function(results, status) {
        var loc = results[0].geometry.location;
        map = new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: zoom
        });
    });
}

function createInfoBox(passedLoc) {
    geocoder.geocode({'address': passedLoc.address}, function(results, status) {
        var locCoords = results[0].geometry.location;
        var markerTitle = passedLoc.address;
        if(passedLoc.infoBox.markerLabel)
            markerTitle = passedLoc.infoBox.markerLabel;
        var marker = new google.maps.Marker({
            position: locCoords,
            map: map,
            title: markerTitle
            });
        
        var contentStrArr = [];
        var contentStr = "<div class='infoBox'>";
        if(passedLoc.infoBox.infoTxt.txt) {
            var txtStr = "<div class='infoTxt'><p>" + passedLoc.infoBox.infoTxt.txt + "</p></div>";
            var txtObj = {content: txtStr, order: passedLoc.infoBox.infoTxt.order};
            contentStrArr.push(txtObj);
        }
        if(passedLoc.infoBox.infoMore.url) {
            var moreStr = "<div class='infoMore'><p><a href='" + passedLoc.infoBox.infoMore.url + "'";
            if(passedLoc.infoBox.infoMore.newWindow)
                moreStr = moreStr + " target='_blank'";
            moreStr = moreStr + ">" + passedLoc.infoBox.infoMore.txt + "</a></p></div>";
            var moreObj = {content: moreStr, order: passedLoc.infoBox.infoMore.order};
            contentStrArr.push(moreObj)
        }
        if(passedLoc.infoBox.infoImg.url) {
            var imgStr = "<div class ='infoImg'><img src=" + passedLoc.infoBox.infoImg.url + " width='" + 
            passedLoc.infoBox.infoImg.width + "'></div>";
            var imgObj = {content: imgStr, order: passedLoc.infoBox.infoImg.order};
            contentStrArr.push(imgObj);
        }
        contentStrArr.sort(function(a, b) {return a.order > b.order});
        if(passedLoc.infoBox.infoTitle) {
            var titleStr = "<div class='infoTitle'><h1>" + passedLoc.infoBox.infoTitle + "</h1></div>"
            var titleArr = [{content: titleStr, order: 0}];
            contentStrArr = titleArr.concat(contentStrArr);
        }
        for(var n = 0; n < contentStrArr.length; n++) 
            contentStr = contentStr + contentStrArr[n].content;
        contentStr = contentStr + "</div>";
        
        var infoWindow = new google.maps.InfoWindow({
            content: contentStr,
            maxWidth: passedLoc.infoBox.maxWidth
        });
        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    });
}

function envelope() {
    var mapCenter = ggMap.center || locations[0];
    initMap(mapCenter.address, ggMap.zoom);
    
    for(var i = 0; i < locations.length; i++)
        createInfoBox(locations[i]);
}

if(ggMap.loadMap)
    google.maps.event.addDomListener(window, 'load', envelope());