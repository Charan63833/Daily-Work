var global = 10;
var Scopes = /** @class */ (function () {
    function Scopes() {
        this.instanceValue = 25;
    }
    Scopes.prototype.display = function () {
        var localValue = 35;
        console.log('Local :' + localValue);
        console.log('Instance :' + this.instanceValue);
        console.log('Static :' + Scopes.staticValue);
        console.log('Global :' + global);
    };
    Scopes.staticValue = 15;
    return Scopes;
}());
var obj = new Scopes();
obj.display();
