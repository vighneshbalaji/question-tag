
var intAciertosCount = 0;
var intErroresCount = 0;
var intPreguntasCount = 0;
var intIntentosCount = 0;
var intAciertosWordsearchCount = 0;
var intTrampasCount = 0;
var intSeleccionadasCount = 0;
var intRightCount = 0;

function FP_getObjectByID(id,o) {
 var c,el,els,f,m,n; if(!o)o=document; if(o.getElementById) el=o.getElementById(id);
 else if(o.layers) c=o.layers; else if(o.all) el=o.all[id]; if(el) return el;
 if(o.id==id || o.name==id) return o; if(o.childNodes) c=o.childNodes; if(c)
 for(n=0; n<c.length; n++) { el=FP_getObjectByID(id,c[n]); if(el) return el; }
 f=o.forms; if(f) for(n=0; n<f.length; n++) { els=f[n].elements;
 for(m=0; m<els.length; m++){ el=FP_getObjectByID(id,els[n]); if(el) return el; } }
 return null;
}

function FP_changeProp() {//v1.0
 var args=arguments,d=document,i,j,id=args[0],o=FP_getObjectByID(id),s,ao,v,x;
 d.$cpe=new Array(); if(o) for(i=2; i<args.length; i+=2) { v=args[i+1]; s="o"; 
 ao=args[i].split("."); for(j=0; j<ao.length; j++) { s+="."+ao[j]; if(null==eval(s)) { 
  s=null; break; } } x=new Object; x.o=o; x.n=new Array(); x.v=new Array();
 x.n[x.n.length]=s; eval("x.v[x.v.length]="+s); d.$cpe[d.$cpe.length]=x;
 if(s) eval(s+"=v"); }
}

function aciertoWordsearch() {
intAciertosWordsearchCount++
}
function falloWordsearch() {
intErroresCount++;
intPreguntasCount++
}

function comprobarFormulario() {
intAciertosCount = intAciertosWordsearchCount;
intIntentosCount++;

for (w = 0; w < (document.images.length-1); w++) {
if (document.images[w].id.indexOf("acierto") > 0) {
intPreguntasCount++
}
}

for (i = 0; i < (document.formulario.elements.length); i++) {

if (document.formulario.elements[i].name == "casilla") {
if (document.formulario.elements[i].value == "right") {
intPreguntasCount = intPreguntasCount + 4;
intRightCount = intRightCount + 1;
}
if (document.formulario.elements[i].checked == 1) {
intSeleccionadasCount = intSeleccionadasCount + 1;
if (document.formulario.elements[i].value == "right") {
document.formulario.elements[i].style.backgroundColor='#72FE95';
intAciertosCount = intAciertosCount + 4;
}
else if (document.formulario.elements[i].value != "right") {
document.formulario.elements[i].style.backgroundColor='#ff8e8e';
intErroresCount = intErroresCount + 4;
}
}
}

if (document.formulario.elements[i].name == "select1") {
intPreguntasCount = intPreguntasCount+4;
    if (document.formulario.elements[i].value == "right") {
    intAciertosCount = intAciertosCount + 4;
    document.formulario.elements[i].style.backgroundColor='#72FE95'
    }
    else if (document.formulario.elements[i].value != "right") {
    intErroresCount = intErroresCount + 4;
    document.formulario.elements[i].style.backgroundColor='#ff8e8e'
    }
}


else {
if (document.formulario.elements[i].name != "youtube" && document.formulario.elements[i].name != "select1" && document.formulario.elements[i].name != "casilla") {
if( document.formulario.elements[i].name.indexOf("/",1) > 2 ) {
intPreguntasCount = intPreguntasCount + 4;
}
else {intPreguntasCount = intPreguntasCount + 1 }
textvalue = document.formulario.elements[i].value.toLowerCase();
textvalue = textvalue.replace("   "," ");
textvalue = textvalue.replace("  "," ");
//hacemos trim
textvalue = textvalue.replace(/^\s*|\s*$/g,"");
//quitamos los puntos finales
textvalue = textvalue.replace(/\s*[.]$/g,"");
textvalue = "/" + textvalue + "/"
if (document.formulario.elements[i].name.toLowerCase().indexOf(textvalue) == -1) {
document.formulario.elements[i].style.backgroundColor='#ff8e8e'
} 
if (document.formulario.elements[i].name.toLowerCase().indexOf(textvalue) > -1) {
document.formulario.elements[i].style.backgroundColor='#72FE95'
if( document.formulario.elements[i].name.indexOf("/",1) > 2 ) {
intAciertosCount = intAciertosCount + 4;
}
else {intAciertosCount = intAciertosCount + 1}
} 

}
}
}
document.formulario.sscr.style.backgroundColor='#0000cc';
document.formulario.sscr.style.fontSize='18pt';
document.formulario.sscr.value = ( intAciertosCount / 4 );
}



