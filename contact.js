function TextLenghthLimit() {
    var txtarea = document.getElementById("mail").value;       
    if (txtarea.length > 99) {
        document.getElementById("mail").value = txtarea.slice(0, 99);
        window.alert("The field must have  no more than 100 characters.");
        return false;
    }
}

function FormSubmit() {
    var elem = document.getElementById("form");
    elem.innerHTML="Το μήνυμα σας στάλθηκε με επιτυχία";
    elem.style.textAlign="center";
}