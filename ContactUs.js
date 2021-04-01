//.js file for contactus.html
//function with chained effects once button is clicked
$(document).ready(function () {
    $(".btn1").click(function () {
        $('body').css('background-color', 'peru'); //change backgroundcolor 
        $('h2').slideDown(500); //slide heading down
    });
    //code that will cause the gif to move
    $(document).keydown(function (key) {
        switch (parseInt(key.which, 10)) {
            //left arrow key pressed
            case 37:
                $('img').animate({
                    left: "-=20px"
                }, 'fast');
                break;
                //up arrow pressed
            case 38:
                $('img').animate({
                    top: "-=20px"
                }, 'fast');
                break;
                // right arrow pressed
            case 39:
                $('img').animate({
                    left: "+=20px"
                }, 'fast');
                break;
                //down arrow pressed
            case 40:
                $('img').animate({
                    top: "+=20px"
                }, 'fast');
                break;
        }
    });
});