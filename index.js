var read = document.getElementById("info-read");
var readmore = document.getElementById("info-read-more");
var readless = document.getElementById("info-read-less");

readmore.addEventListener("click", showRead);
readless.addEventListener("click", hideRead);

readless.style.display = "block";
readmore.style.display = "none";

function showRead(){
    read.style.display = "block";
    readmore.style.display = "none";
    readless.style.display = "block";
}

function hideRead(){
    readless.style.display = "none";
    read.style.display = "none";
    readmore.style.display = "block";
}
