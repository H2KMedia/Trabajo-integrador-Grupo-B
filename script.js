/*--------------------------------------------------------autocompletado detalle pedido-------------------------------------------------------------*/


let bpedido1 = document.getElementById("bpedido1");
bpedido1.onclick = func1;
function func1(){
    let det1 = "Tarta de crema con frutillas.";
    detalle.innerHTML = det1;
    console.log(detalle);
    window.location.href ='#pedido';
    
}


let bpedido2 = document.getElementById("bpedido2");
bpedido2.onclick = func2;
function func2(){
    let det2 = "Pastel con salsa de caramelo y nueces.";
    detalle.innerHTML = det2;
    console.log(detalle);
    window.location.href ='#pedido';
    
}


let bpedido3 = document.getElementById("bpedido3");
bpedido3.onclick = func3;
function func3(){
    let det3 = "Pastel de chocolate con salsa de chocolate y chispas.";
    detalle.innerHTML = det3;
    console.log(detalle);
    window.location.href ='#pedido';
    
}

let bpedido4 = document.getElementById("bpedido4");
bpedido4.onclick = func4;
function func4(){
    let det4 = "Bizcochuelo de crema y frutos del bosque.";
    detalle.innerHTML = det4;
    console.log(detalle);
    window.location.href ='#pedido';
    
}


let bpedido5 = document.getElementById("bpedido5");
bpedido5.onclick = func5;
function func5(){
    let det5 = "Cupcake frutos tropicales.";
    detalle.innerHTML = det5;
    console.log(detalle);
    window.location.href ='#pedido';
    
}

let bpedido6 = document.getElementById("bpedido6");
bpedido6.onclick = func6;
function func6(){
    let det6 = "Tarta de crema y nueces.";
    detalle.innerHTML = det6;
    console.log(detalle);
    window.location.href ='#pedido';
    
}

/*------------------------------------------------------------fin autocompletado pedido--------------------------------------------------------------*/


window.jsPDF = window.jspdf.jsPDF;

$('#submit-btn').click(function(){
    
    let doc = new jsPDF();
        
    let button = document.getElementById('submit-btn');
    let nombre = $('#nombre').val();  
    let apellido = $('#apellido').val();
    let calle = $('#calle').val();
    let numero = $('#numero').val();
    let barrio = $('#barrio').val();
    let telefono = $('#tel').val();
    let detalle = $('#detalle').val();
  
    doc.setFontSize(14);
       
    doc.text(40, 30, nombre);
    doc.text(40, 40, apellido);
    doc.text(40, 50, calle);
    doc.text(40, 60, numero);
    doc.text(40, 70, barrio);
    doc.text(40, 80, telefono);
    doc.text(40, 90, detalle);  
  
    doc.save('pedido.pdf');
})

$('#btnContacto').click(function(){
    
    let doc = new jsPDF();
        // var content = document.getElementById('txtContent'),
        //let button = document.getElementById('btnDownload');
    let button = document.getElementById('btnContacto');
    let nombre = $('#nom').val();  
    let email = $('#email').val();
    let mensaje = $('#mensaje').val();
    
  
    doc.setFontSize(14);
        // doc.text(20, 20, content.textContent);
    doc.text(40, 30, nombre);
    doc.text(40, 40, email);
    doc.text(40, 50, mensaje);  
  
        //doc.text(35, 25, "Paranyan loves jsPDF");
        //doc.addImage(imgData, 'JPEG', 15, 40, 180, 160);
    doc.save('contacto.pdf');
})

window.addEventListener('load', () => {                    
    let validaFormulario = new FormValidator('user-form', [{
        
        name: 'nombre',
        display: 'Nombre',
        rules: 'required|min_length[4]|alpha'
    },

    {
        name: 'apellido',
        display: 'Apellido',
        rules: 'required|min_length[4]|alpha'
    },

    {
        name: 'calle',
        display: 'Calle',
        rules: 'required|min_length[5]|alpha'
    },

    {
        name: 'numero',
        display: 'Numero',
        rules: 'required|max_length[4]|numeric|integer'
    },

    {
        name: 'barrio',
        display: 'Barrio',
        rules: 'required|min_length[4]|alpha_numeric'
    },
    
    {
        name: 'telefono',
        display: 'Telefono',
        rules: 'required|max_length[15]|',
        RegExp: '[0-9]+\s[0-9]+\s[0-9]+'
    },

    {
        name: 'detalle',
        display: 'Detalle',
        rules: 'required|min_length[20]|alpha'
    }], function(err, ev){
        if(err.length){
            let mensaje = '';
            
            err.forEach(function(campo, indice, arreglo){
                mensaje += `${campo.message} <br/>`;
            });

            //document.querySelector('#resultadoValidacion').innerHTML = mensaje;//    
            
        }
    }) 

    
})