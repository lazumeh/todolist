var nija = document.getElementById("lazmeh")
var input = document.getElementById("font")
var ul = document.querySelector("ul")

nija.addEventListener("click", function(){
    if (input.value !== ""){
        var x = document.createElement("li")
        x.appendChild(document.createTextNode(input.value))
        ul.appendChild(x)}
        input.value = ''
});
