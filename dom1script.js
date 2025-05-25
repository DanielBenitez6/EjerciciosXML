// Título del primer libro
xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;

// Precio del segundo libro
xmlDoc.getElementsByTagName("price")[1].childNodes[0].nodeValue;

// Todos los autores del tercer libro
let autores = xmlDoc.getElementsByTagName("book")[2].getElementsByTagName("author");
for (let i = 0; i < autores.length; i++) {
    console.log(autores[i].textContent);
}
