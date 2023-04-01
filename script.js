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

