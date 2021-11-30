class Ground {
    //constructor con argumentos que pondremos en sketch
  constructor(x, y, w, h) {
      //propiedades para el cuerpo fisico
    let options = {
      isStatic:true
    }
    
    //crear el cruepo para el suelo "this se usa para referirse a las variables"
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;

    //agregar el cuerpo al mundo
    World.add(world, this.body);
  }
  show() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    stroke(255);
    fill(127);
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
}