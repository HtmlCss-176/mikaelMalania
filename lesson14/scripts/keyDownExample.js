

function typeThis() {
    const typedInformation = document.getElementById("chatMessage").value;
    document.getElementById("resultHere").innerHTML = typedInformation
}

function removeThis() {
    document.getElementById("resultHere").innerHTML = "";
}