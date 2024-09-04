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

function sumaVector(){
    let ax = parseFloat(document.getElementById("PuntoAX").value);
    let ay = parseFloat(document.getElementById("PuntoAY").value);
    let az = parseFloat(document.getElementById("PuntoAZ").value);
 
    let bx = parseFloat(document.getElementById("PuntoBX").value);
    let by = parseFloat(document.getElementById("PuntoBY").value);
    let bz = parseFloat(document.getElementById("PuntoBZ").value);

    let vx = ax + bx,
    vy = ay + by,
    vz = az + bz;

    let vectorSuma = `(${vx},${vy},${vz})`;

    document.getElementById("resultSuma").innerHTML = vectorSuma;
}

function productoEscalar(){
    let ax = parseFloat(document.getElementById("PuntoAX").value);
    let ay = parseFloat(document.getElementById("PuntoAY").value);
    let az = parseFloat(document.getElementById("PuntoAZ").value);
 
    let bx = parseFloat(document.getElementById("PuntoBX").value);
    let by = parseFloat(document.getElementById("PuntoBY").value);
    let bz = parseFloat(document.getElementById("PuntoBZ").value);

    let escalar = (ax*bx)+(ay*by)+(az*bz);

    document.getElementById("resultEscalar").innerHTML = escalar;
}

function magnitudVector(){
    let ax = parseFloat(document.getElementById("PuntoAX").value);
    let ay = parseFloat(document.getElementById("PuntoAY").value);
    let az = parseFloat(document.getElementById("PuntoAZ").value);
 
    let bx = parseFloat(document.getElementById("PuntoBX").value);
    let by = parseFloat(document.getElementById("PuntoBY").value);
    let bz = parseFloat(document.getElementById("PuntoBZ").value);

    let magnitud = Math.sqrt((((bx-ax)*(bx-ax))+((by-ay)*(by-ay))+((bz-az)*(bz-az))));

    document.getElementById("resultMagnitud").innerHTML = magnitud;

}