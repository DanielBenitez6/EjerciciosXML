let companias = "";
let n = document.getElementsByTagName("COMPANY").length;
for (let i = 0; i < n; i++) {
  companias += document.getElementsByTagName("COMPANY")[i].childNodes[0].nodeValue + "<br>";
}
document.getElementById("demo").innerHTML = companias;
