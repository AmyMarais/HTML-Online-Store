//.js file for LookBook.html
//animations for the middle image of row 1  
$(document).ready(function () {
    $("button").click(function () {
        $("#animateme").animate({
            height: 'toggle' //'toggle' allows user to hide and show the image when button is clicked
        });
    });
});