// edit html
//cara menambahkan element

var el   = document.createElement('h2');
var text = document.createTextNode('Belajar programming online');
var box  = document.getElementById('box1');

el.appendChild(text);
box.appendChild(el);

//cara menghapus text element
// box.removeChild(el);

//mengedit element pada html
var el2   = document.createElement('h3');
var text2 = document.createTextNode('Belajar sekarang!');
el2.appendChild(text2);
var p1    = document.getElementById('p1');

box.replaceChild(el2, p1);