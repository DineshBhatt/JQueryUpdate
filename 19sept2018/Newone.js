


console.log("this the firts step of my very first website");
//alert("welcome to my new website");

$(document).ready(FirstOne);
$(document).ready(SecondOne);
$(document).ready(ThirdOne);
$(document).ready(fourthOne);


function FirstOne() {
    $("#fifth").click(firstwo);
    $(".second").css("background", "aqua");
    $(".second").css("opecity", 0.3);

    function firstwo() {
        alert("this web site welcomes you to facebook login page");
    }
}

function SecondOne() {
    $("#sixth").click(secondtwo);

    function secondtwo() {
        alert("this website welcomes you to the log in page of twitter");
    }
}

function ThirdOne() {
    $("#seventh").click(Thirdtwo);


    function Thirdtwo() {
        alert("this website welcomes you to outlook")
    }
}

function fourthOne() {
    $("#eighth").click(fourthtwo);


    function fourthtwo() {
        alert("this website allow youy to search by your own mind");
    }
}