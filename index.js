class persona{

    constructor(nombre, apellido, edad, sexo, peso, altura){

        this.nombre=nombre;
        this.edad=edad;
        this.apellido=apellido;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
    }

    Saludar(){
        console.log(`hola soy ${this.nombre} y tengo ${this.edad} años ` );
    }
    
    setnombre(newnombre){
        this.nombre=newnombre;
    }

    getnombre(){
        return this.nombre
    }
    setedad(newedad){
        this.nombre=newedad;
    }

    getedad(){
        return this.nombre
    }

}


class estudiante extends persona{
    constructor(nombre, apellido, edad, carrera){
        super(nombre,apellido,edad);
        this.carrera=carrera;
    }

    Saludar(){
        console.log(`hola soy ${this.nombre}  ${this.apellido} tengo ${this.edad} años y soy ${this.carrera}` );
    }

}







let menone=new persona("juan", 20); 
menone.Saludar();
menone.setnombre("andres");
menone.Saludar();


const studentone = new estudiante("Edwar", "guaman", 20, "Development");
console.log(studentone.apellido);
console.log(studentone.carrera);
studentone.Saludar();