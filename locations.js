/* For the variables/functions that are not meant to be accessed by the user, I have appended "_xyz_9753" to all variable/function names that are not needed by the user so that there is no conflict with user-defined names */

var locs_xyz_9753 = [];

var ggMap_xyz_9753 = {
    center: undefined,
    zoom: 5,
    loadMap: true
}

function setMapCenter(center) {
    ggMap_xyz_9753.center = center;
}

function getMapCenter() {
    return ggMap_xyz_9753.center;
}

function setMapZoom(zoom) {
    ggMap_xyz_9753.zoom = zoom;
}

function getMapZoom() {
    return ggMap_xyz_9753.zoom;
}

function setLoadMap(loadMap) {
    ggMap_xyz_9753.loadMap = loadMap;
}

function getLoadMap() {
    return ggMap_xyz_9753.loadMap;
}

function InfoImg_xyz_9753(url) {
    this.url = url;
    this.width = 300;
    this.order = 3;
}

function InfoTxt_xyz_9753(txt) {
    this.txt = txt;
    this.order = 1;
}

function InfoMore_xyz_9753(url) {
    this.url = url;
    this.txt = "More information";
    this.newWindow = true;
    this.order = 2;
}

function InfoBox_xyz_9753(title, txt, moreUrl, imgUrl) {
    this.markerLabel = undefined;
    this.infoTitle = title;
    this.infoImg = new InfoImg_xyz_9753(imgUrl);
    this.infoTxt = new InfoTxt_xyz_9753(txt);
    this.infoMore = new InfoMore_xyz_9753(moreUrl);
    this.maxWidth = 325;
}

function Loc_xyz_9753(address, title, txt, moreUrl, imgUrl) {
    this.address = address;
    this.setAddress = function(address) { this.address = address; };
    this.getAddress = function() { return this.address; };
    this.infoBox = new InfoBox_xyz_9753(title, txt, moreUrl, imgUrl);
    locs_xyz_9753.push(this);
    this.setMarkerLabel = function(label) { this.infoBox.markerLabel = label; };
    this.getMarkerLabel = function() { return this.infoBox.markerLabel; };
    this.setMaxWidth = function(width) { this.infoBox.maxWidth = width; };
    this.getMaxWidth = function() { return this.infoBox.maxWidth; };
    
    /* Below are set, get, and delete methods for the various fields in the info window */
    // Set, get, and delete methods for the info window title
    this.setTitle = function(title) { this.infoBox.infoTitle = title; };
    this.getTitle = function(title) { return this.infoBox.infoTitle; };
    this.delTitle = function() { this.infoBox.infoTitle = undefined; };
    
    // Set, get, and delete methods for the info window descriptive text
    this.setTxt = function(txt, order) {
        this.infoBox.infoTxt.txt = txt;
        this.infoBox.infoTxt.order = order || this.infoBox.infoTxt.order; 
    };
    this.setTxtOrder = function(order) { this.infoBox.infoTxt.order = order; };
    this.getTxt = function() { return this.infoBox.infoTxt.txt; };
    this.getTxtOrder = function() { return this.infoBox.infoTxt.order; };
    this.delTxt = function() { this.infoBox.infoTxt = new InfoTxt_xyz_9753(); };
    
    // Set, get, and delete methods for the additional information link in the info window
    this.setInfoLink = function(url, txt, order, newWindow) {
        this.infoBox.infoMore.url = url;
        this.infoBox.infoMore.txt = txt || this.infoBox.infoMore.txt;
        this.infoBox.infoMore.order = order || this.infoBox.infoMore.order;
        this.infoBox.infoMore.newWindow = newWindow || this.infoBox.infoMore.newWindow;
    };
    this.setInfoLinkTxt = function(txt) { this.infoBox.infoMore.txt = txt; };
    this.setInfoLinkOrder = function(order) { this.infoBox.infoMore.order = order; };
    this.setInfoLinkNew = function(newWindow) { this.infoBox.infoMore.newWindow = newWindow; };
    this.getInfoLinkUrl = function() { return this.infoBox.infoMore.url; };
    this.getInfoLinkTxt = function() { return this.infoBox.infoMore.txt; };
    this.getInfoLinkOrder = function() { return this.infoBox.infoMore.order; };
    this.getInfoLinkNew = function() { return this.infoBox.infoMore.newWindow; };
    this.delInfoLink = function() { this.infoBox.infoMore = new infoMore_xyz_9753; };
    
    // Set, get, and delete methods for the image in the info window
    this.setImg = function(url, order, width) {
        this.infoBox.infoImg.url = url;
        this.infoBox.infoImg.order = order || this.infoBox.infoImg.order;
        this.infoBox.infoImg.width = width || this.infoBox.infoImg.width;
    }
    this.setImgOrder = function(order) { this.infoBox.infoImg.order = order; };
    this.setImgWidth = function(width) { this.infoBox.infoImg.width = width; };
    this.getImgUrl = function() { return this.infoBox.infoImg.url; };
    this.getImgOrder = function() { return this.infoBox.infoImg.order; };
    this.getImgWidth = function() { return this.infoBox.infoImg.width; };
    this.delImg = function() { this.infoBox.infoImg = new infoImg_xyz_9753; };
}

function addLoc(address, title, txt, moreUrl, imgUrl) {
    loc = new Loc_xyz_9753(address, title, txt, moreUrl, imgUrl);
    return loc;
}

function delLoc(loc) {
    locs_xyz_9753 = locs_xyz_9753.filter(function(e) { return e != loc; });
    delete loc;
}