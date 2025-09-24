let title = document.getElementById("website_title");

console.log(title.innerHTML);

title.innerHTML = "Neuer Titel der Website";



document.getElementById("test_div").innerHTML = "test";

document.getElementById("button_div").innerHTML = '<button id="my_button">Klick mich</button>';


document.getElementById("test_div").classList.add("green_bg"); // fügt die Klasse green_bg hinzu
//document.getElementById("test_div").classList.remove("green_bg"); // entfernt die Klasse green_bg
//document.getElementById("test_div").classList.toogle("green_bg"); // fügt die Klasse green_bg hinzu, wenn sie nicht da ist, und entfernt sie, wenn sie da ist


document.getElementById("test_input").setAttribute("type", "text");

function toogleDNone(id){
    document.getElementById(id).classList.toggle('d_none');
}

document.getElementById("input_down").value;

document.getElementById("input_up").value;
