document.getElementById('signInBtn').onclick = function() {
    document.getElementById('loginModal').style.display = 'block';
}

document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('loginModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('loginModal')) {
        document.getElementById('loginModal').style.display = 'none';
    }
}







function toggleDescription() {
    var descriptionBox = document.getElementById("descriptionBox");
    if (descriptionBox.style.display === "none") {
        descriptionBox.style.display = "block";
    } else {
        descriptionBox.style.display = "none";
    }
}
