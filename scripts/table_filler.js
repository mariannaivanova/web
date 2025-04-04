
function AddToLocalStorage()
 {
     localStorage.setItem("name", document.getElementById("name").value)
     localStorage.setItem("card_id", document.getElementById("card_id").value)
     localStorage.setItem("weekdays", document.getElementById("weekdays").value)
     localStorage.setItem("timetable", document.getElementById("timetable").value)
 }

 window.onload = function GetFromLocalStorage() {
    let namearea = document.getElementById("name");
    let cardarea = document.getElementById("card_id");
    namearea.value = localStorage.getItem("name");
    cardarea.value = localStorage.getItem("card_id");

 }

 function ClearData() {
     let namearea = document.getElementById("name");
     let cardarea = document.getElementById("card_id");
     namearea.value = ''
     cardarea.value = ''
 }