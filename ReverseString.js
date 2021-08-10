var ReverseString = /** @class */ (function () {
    function ReverseString() {
        this.reversedString = "Hi, This is Shady!";
    }
    ReverseString.prototype.reverseString = function () {
        this.reversedString = this.reversedString.split('').reverse().join('');
        console.log(this.reversedString);
    };
    return ReverseString;
}());
var reversedString = new ReverseString();
reversedString.reverseString();
