let titulos = "";
let n = document.getElementsByTagName("TITLE").length;
for (let i = 0; i < n; i++) {
  titulos += document.getElementsByTagName("TITLE")[i].childNodes[0].nodeValue + "<br>";
}
document.getElementById("demo").innerHTML = titulos;
