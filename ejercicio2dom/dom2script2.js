let precios = "";
let n = document.getElementsByTagName("PRICE").length;
for (let i = 0; i < n; i++) {
  precios += document.getElementsByTagName("PRICE")[i].childNodes[0].nodeValue + "€<br>";
}
document.getElementById("demo").innerHTML = precios;
