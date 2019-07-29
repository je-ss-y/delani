$(document).ready(function(){
    $("#inputform").submit(function(event){
        var name=$("input#input1").val();
        var email=$("input#input2").val();
        var outputarea=$("textarea#comment").val();
        if((name==="")||(email==="")||(outputarea==="")){
            alert("Please enter the required information")
        } else {
        alert(name + ",We have received your message.Thank you for reaching out us.");
        event.preventDefault();
    }
    });
    $("#design").click(function(){
        $("img#designimage").toggle();
        $("h5#designimage").toggle();
        $("h6#designtext").toggle();
        $("p#designtext").toggle();
    })
    $("#development").click(function(){
        $("img#developmentimage").toggle();
        $("h5#developmentimage").toggle();
        $("h6#developmentext").toggle();
        $("p#developmentext").toggle();
    })
    $("#product").click(function(){
        $("img#productimage").toggle();
        $("h5#productimage").toggle();
        $("h6#productext").toggle();
        $("p#productext").toggle();
    })
    $("#image1").mouseover(function(){
        $("#phide1").show()

    })
    $("#image1").mouseleave(function(){
        $("#phide1").hide()
    })
    $("#image2").mouseover(function(){
        $("#phide2").show()

    })
    $("#image2").mouseleave(function(){
        $("#phide2").hide()
    })
    $("#image3").mouseover(function(){
        $("#phide3").show()

    })
    $("#image3").mouseleave(function(){
        $("#phide3").hide()
    })
    $("#image4").mouseover(function(){
        $("#phide4").show()

    })
    $("#image4").mouseleave(function(){
        $("#phide4").hide()
    })
    $("#image5").mouseover(function(){
        $("#phide5").show()

    })
    $("#image5").mouseleave(function(){
        $("#phide5").hide()
    })
    $("#image6").mouseover(function(){
        $("#phide6").show()

    })
    $("#image6").mouseleave(function(){
        $("#phide6").hide()
    })
    $("#image7").mouseover(function(){
        $("#phide7").show()

    })
    $("#image7").mouseleave(function(){
        $("#phide7").hide()
    })
    $("#image8").mouseover(function(){
        $("#phide8").show()

    })
    $("#image8").mouseleave(function(){
        $("#phide8").hide()
    })
});
