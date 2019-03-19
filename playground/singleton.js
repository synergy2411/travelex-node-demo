var Singleton = (function(){
    var instance;

    function create(){
        var randomeNumber = Math.floor(Math.random() * 10);
        return randomeNumber;
    }

    return {
        getInstance : function(){
            if(!instance){
                instance = create();
            }
            return instance;
        }
    }
})();

var single1 = Singleton;
var single2 = Singleton;
console.log(single1.getInstance(), single2.getInstance());
