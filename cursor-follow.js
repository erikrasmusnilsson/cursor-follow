function get(s) { return document.getElementById(s); }

let elements = document.getElementsByClassName("cursor-follow");
let originalPositions = [];

window.onload = () => {
    for (i = 0; i < elements.length; i++) {
        originalPositions[i] = {
            top: parseInt(elements[i].style.top, 10),
            left: parseInt(elements[i].style.left, 10)
        }
    }
}

window.onmousemove = (event) => {
    for (i = 0; i < elements.length; i++) {
        let element = elements[i];
        let magnitude = element.dataset.magnitude;
        let originalPosition = originalPositions[i];

        let topOffset = (event.clientY / window.innerHeight * magnitude) + originalPosition.top;
        let leftOffset = (event.clientX / window.innerWidth * magnitude) + originalPosition.left;
        
        elements[i].style["top"] = topOffset + "px";
        elements[i].style["left"] = leftOffset + "px";
    }
}