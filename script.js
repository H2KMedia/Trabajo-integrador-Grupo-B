window.jsPDF = window.jspdf.jsPDF;
// var content = document.getElementById('txtContent'),
button = document.getElementById('btnDownload');

function generatePDF(){
  var doc = new jsPDF();

  let nombre = $('#nombre').val();
  let email = $('#email').val();
  let mensaje = $('#mensaje').val();
  
  doc.setFontSize(14);
//   doc.text(20, 20, content.textContent);
  doc.text(80, 30, nombre);
  doc.text(80, 40, email);
  doc.text(80, 50, mensaje);
  
  
  //doc.text(35, 25, "Paranyan loves jsPDF");
  //doc.addImage(imgData, 'JPEG', 15, 40, 180, 160);
  doc.save('my.pdf');
}
window.jsPDF = window.jspdf.jsPDF;
// var content = document.getElementById('txtContent'),
button = document.getElementById('btnDownload');

function generatePDF(){
  var doc = new jsPDF();

  let nombre = $('#nombre').val();
  let email = $('#email').val();
  let mensaje = $('#mensaje').val();
  
  doc.setFontSize(14);
//   doc.text(20, 20, content.textContent);
  doc.text(80, 30, nombre);
  doc.text(80, 40, email);
  doc.text(80, 50, mensaje);
  
  
  //doc.text(35, 25, "Paranyan loves jsPDF");
  //doc.addImage(imgData, 'JPEG', 15, 40, 180, 160);
  doc.save('my.pdf');
}

button.addEventListener('click', generatePDF);