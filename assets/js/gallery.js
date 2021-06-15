let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if(galleryImages) {
    galleryImages.forEach(function(image) {
        image.onclick = function() {
            alert("it works");
            //let getElementCss = window.getComputedStyle(image);
            //let getFullImgUrl = getElementCss.getPropertyValue("");
        }

    });
}