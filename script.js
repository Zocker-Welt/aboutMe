document.addEventListener("mousedown", function(event) {
    var rectangle = document.getElementById("myRectangle");

    if (event.target === rectangle) {
        // Calculate the new dimensions
        var originalWidth = rectangle.offsetWidth;
        var originalHeight = rectangle.offsetHeight;
        var newWidth = originalWidth * 1.05; // Increase width by 5%
        var newHeight = originalHeight * 1.05; // Increase height by 5%

        // Update the rectangle's dimensions
        rectangle.style.width = newWidth + "px";
        rectangle.style.height = newHeight + "px";
    }
});

document.addEventListener("mouseup", function(event) {
    var rectangle = document.getElementById("myRectangle");

    if (event.target === rectangle) {
        // Calculate the new dimensions
        var originalWidth = rectangle.offsetWidth;
        var originalHeight = rectangle.offsetHeight;
        var newWidth = originalWidth / 1.05; // Restore original width
        var newHeight = originalHeight / 1.05; // Restore original height

        // Update the rectangle's dimensions
        rectangle.style.width = newWidth + "px";
        rectangle.style.height = newHeight + "px";
    }
});