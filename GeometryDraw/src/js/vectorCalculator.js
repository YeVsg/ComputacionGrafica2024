function vector(){
    //Obtener valores de los inputs
   let ax = document.getElementById("PuntoAX").value;
   let ay = document.getElementById("PuntoAY").value;
   let az = document.getElementById("PuntoAZ").value;

   let bx = document.getElementById("PuntoBX").value;
   let by = document.getElementById("PuntoBY").value;
   let bz = document.getElementById("PuntoBZ").value;

   
   //alert("("+bx+","+by+","+bz+")");

   let vx = bx-ax,
    vy = by - ay,
    vz = bz - az;

    let vectorFinal = `(${vx},${vy},${vz})`;

    document.getElementById("result").innerHTML = vectorFinal;

    //alert("("+vx+" , "+vy+" , "+vz+")");

}