var modal = document.getElementById("imgModal");
var modalImg = document.getElementById("img01");

function loadmodal(img){
    var image = img.id
    modal.style.display = "block";
    modalImg.src = img.src;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
