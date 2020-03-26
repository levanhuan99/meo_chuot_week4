let Cat=function (name,weight,speed) {
    this.name=name;
    this.weight=weight;
    this.speed=speed;
    this.status=true;
    this.sound=function () {
        alert("meow meow");

    }
    this.chasing=function (rat) {
        if(this.speed>rat.speed){
            alert(this.name+ " catched "+rat.name);
            rat.status=false;
        }
    }
    this.eatRat=function (rat) {
        if (rat.status===false){
            return this.weight+rat.weight;
        }
    }

}