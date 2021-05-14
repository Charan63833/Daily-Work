var global: number=10;
class scopes {
    static staticValue: number=15;
    instanceValue =25;

    display(): void{
        var localValue: number =35;
        console.log('Local :'+localValue);
        console.log('Instance :'+this.instanceValue);
        console.log('Static :' +scopes.staticValue);
        console.log('Global :' + global);
    }
    
}
var obj =new Scopes();
obj.display();