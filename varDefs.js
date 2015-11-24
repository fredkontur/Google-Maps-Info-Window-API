var locations = [];

var ggMap = {
    center: undefined,
    zoom: 5,
    loadMap: true
}

function infoImg(url) {
    this.url = url;
    this.top = false;
    this.width = 300;
    this.order = 3;
}

function infoTxt(txt) {
    this.txt = txt;
    this.top = true;
    this.order = 1;
}

function infoMore(url) {
    this.url = url;
    this.txt = "More information";
    this.newWindow = true;
    this.order = 2;
}

function infoBox(address, infoTitle) {
    this.markerLabel = address;
    this.infoTitle = infoTitle;
    this.infoImg = new infoImg;
    this.infoTxt = new infoTxt;
    this.infoMore = new infoMore;
    this.maxWidth = 325;
}

function loc(address) {
    this.address = address;
    this.infoBox = new infoBox();
    locations.push(this);

}

function del(loc) {
    var newLocations = locations.filter(function(e) {return e != loc});
    locations = newLocations.slice();
    delete loc;
}