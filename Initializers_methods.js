let loaf = {
    flour:300,
    water:210,
    hydration:function(){
     return this.hydration=(this.water/this.flour) * 100;
    }

};

//loaf.hydration();
console.log("Hydration:", loaf.hydration());