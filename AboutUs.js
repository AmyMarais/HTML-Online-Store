//hide() function used to hide <p> for aboutus.html
$(document).ready(function() {
    $("#hide").click(function() {
        $("p").hide(); 
    });
    //show() function to show <p> for aboutus.html
    $("#show").click(function() {
        $("p").show();
    });
});