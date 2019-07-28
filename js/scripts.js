$(document).ready(function(){
    $("#lastform").submit(function(event){
        var name=$("input#input1").val();
        var email=$("input#input2").val();
        var outputarea=$("textarea#comment").val();
        alert(name + ",We have received your message.Thank you for reaching out us.");
        event.preventDefault();
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
});
