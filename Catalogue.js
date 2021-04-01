//.js file for catalogue.html
//animations for heading of page 
$(document).ready(function() {
    $("button").click(function(){
        $("h2").animate({
            height : 'toggle'
        });
    });
});