var Maor = /** @class */ (function () {
    function Maor() {
    }
    //methods - setter (height)
    Maor.prototype.setHeight = function (height) {
        if (height > 110) {
            this.height = height;
            console.log("Height was updated");
        }
        else {
            console.log("Height should be between 110-220");
        }
    };
    return Maor;
}());
var maor = new Maor();
maor.setHeight(0);
