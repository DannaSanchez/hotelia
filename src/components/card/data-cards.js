import Habitacion1 from '../../img/habitaciones/habitacion1.png'

let habitaciones=[
    {
        id:1,
        name:"Habitación doble",
        price:"128.000",
        image:Habitacion1,
        category:"",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ornare dui, ante nisl. Lorem ipsumn",
        photo1: "https://i.postimg.cc/XqtGVqRJ/kirara1.png",
        photo2: "https://i.postimg.cc/brZSckFW/kirara2.png",
        photo3: "https://i.postimg.cc/wvfRG0FD/kirara3.png",
        state: "Activo"
    },

]

export function getAllHabitaciones(){
    return habitaciones;
}

export function getHabitaciones(id){
    return habitaciones.find((habitacion)=> habitacion.id===id)
}