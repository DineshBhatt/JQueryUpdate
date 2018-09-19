


console.log("this the first step of my very first website");
alert("welcome to my new website");

var x= 1, y=1, z=1; 
$(document).ready(function () {
    //$("#third").click(function () {
    //    console.log("welcome"+  x++ );

    //})

    //$(".head1").ready(){

    //}

    $(".head1").addClass(".p1");

    $(".div1").on("click", function () {
        $(".table2").slideToggle("slow");
    });
    $(".table2").css("background", "rgba(0, 100, 100, 0.4)");

    //$("#a1").on("click", function () {
    //    $(this).alert("this site have youtube.... ")
    //});

    //$("#a2").on("click", function () {
    //    $(this).alert("this site have prime video.... ")
    //});

    //$("#a3").on("click", function () {
    //    $(this).alert("this site take you to the tvf official site.... ")
    //});

    $("#a1").click(a1method);
    function a1method() {
        alert("this site have youtube.... ");
    }

    $("#a2").click(a2method);
    function a2method() {
        alert("this site have youtube.... ");
    }

    $("#a3").click(a3method);
    function a3method() {
        alert("this site have youtube.... ");
    }
    $(".first").on("click", function () {
        $(".second").slideToggle("slow");
    });

    $("#fifth").click(firstwo);
    $(".second").css("background", "rgba(0, 100, 100, 0.4)");
    $(".head1").css("color", "aqua");
    $(".head1").text("Index");
    //$(".head1").text("of my web site");
    //$(".second").css("opecity", 0.3);

    function firstwo() {
        x++;
        //alert("this web site welcomes you to facebook login page");
        alert("this web site welcomes you to facebook login page" + x);
        //console.log("number of time that entered is " + x);
    }


    $("#sixth").click(secondtwo);

    function secondtwo() {
        y++;
        alert("this website welcomes you to the log in page of twitter");
        //alert("this website welcomes you to the log in page of twitter" + y);
        //console.log("number of time that entered is " + y);
    }

    $("#seventh").click(Thirdtwo);


    function Thirdtwo() {
        z++;
        //aert("this website welcomes you to outlook")
        alert("this website welcomes you to outlook" + z);
        //console.log("number of time that entered is " + z);
    }

    $("#eighth").click(fourthtwo);


    function fourthtwo() {
        alert("this website allow youy to search by your own mind");
    }

    //if ($(".number1").val()>=0 && $(".number2").val()>=0){


    $("#button1").click(DisplayTheResult);
    function DisplayTheResult() {
        //alert("  ");
        //var sum1 = $("#number1").val();
        //var sum2 = $("#number2").val();
        var sum1 = parseInt($("#number1").val());
        var sum2 = parseInt($("#number2").val());
        var total = sum1 + sum2;
        alert(total);
    }
    //$(document).ready(FirstOne);
    //$(document).ready(SecondOne);
    //$(document).ready(ThirdOne);
    //$(document).ready(fourthOne);
    //$(document).ready(SumOperation);

    $(".label1").click(Scrollup);

    function Scrollup() {
        $("#parent1").fadeToggle();
        //$(".parent1").fadeTogle("slow");
        $(".label1").text("show details");
    }

    $(".p2").on("click", function () {
        $(this).hide();
    })
});

function FirstOne() {
    //$("#fifth").click(firstwo);
    //$(".second").css("background", "rgba(0, 100, 100, 0.4)");
    //$(".head1").css("background", "aqua");
    //$(".head1").text("there is only one div present in the webpage");
    ////$(".second").css("opecity", 0.3);

    //function firstwo() {
    //    x++;
    //    //alert("this web site welcomes you to facebook login page");
    //    alert("this web site welcomes you to facebook login page"+ x);
    //    //console.log("number of time that entered is " + x);
    //}
}

function SecondOne() {
    //$("#sixth").click(secondtwo);

    //function secondtwo() {
    //    y++;
    //    //alert("this website welcomes you to the log in page of twitter");
    //    alert("this website welcomes you to the log in page of twitter" + y);
    //    //console.log("number of time that entered is " + y);
    //}
}

function ThirdOne() {
    //$("#seventh").click(Thirdtwo);


    //function Thirdtwo() {
    //    z++;
    //    //aert("this website welcomes you to outlook")
    //    alert("this website welcomes you to outlook" + z);
    //    //console.log("number of time that entered is " + z);
    //}
}

function fourthOne() {
    //$("#eighth").click(fourthtwo);


    //function fourthtwo() {
    //    alert("this website allow youy to search by your own mind");
    //}
}

function SumOperation() {
   // //if ($(".number1").val()>=0 && $(".number2").val()>=0){
   // //var sum1 = parseInt($("#number1"));
   // //var sum2 = parseInt($("#number2"));
   // var sum1 = $("#number1").val();
   // var sum1 = $("#number2").val();
   // $(".button1").click(DisplayTheResult);
   // function DisplayTheResult()
   // {
   //     alert(sum1 + sum2);
   // }

   ///* var total =*/ 
    
}
