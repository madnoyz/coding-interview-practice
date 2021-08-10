var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = /** @class */ (function () {
    function Player(_name, _type) {
        this.name = _name;
        this.type = _type;
    }
    Player.prototype.introduction = function () {
        console.log("Hi I am " + this.name + ", I'm a " + this.type);
    };
    return Player;
}());
var Wizard = /** @class */ (function (_super) {
    __extends(Wizard, _super);
    function Wizard(name, type) {
        return _super.call(this, name, type) || this;
    }
    Wizard.prototype.play = function () {
        console.log("WEEEEEE I'm a " + this.type);
    };
    return Wizard;
}(Player));
var wizard1 = new Wizard("Melissa", "Angel");
var wizard2 = new Wizard("Clyde", "Sorcerer");
wizard1.introduction();
wizard2.introduction();
wizard1.play();
wizard2.play();
