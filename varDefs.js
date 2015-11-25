var locations = [];

var ggMap = {
    center: undefined,
    zoom: 5,
    loadMap: true
}

function infoImg() {
    this.url = undefined;
    this.width = 300;
    this.order = 3;
}

function infoTxt() {
    this.txt = undefined;
    this.order = 1;
}

function infoMore() {
    this.url = undefined;
    this.txt = "More information";
    this.newWindow = true;
    this.order = 2;
}

function infoBox() {
    this.markerLabel = undefined;
    this.infoTitle = undefined;
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
    locations = locations.filter(function(e) {return e != loc});
    delete loc;
}