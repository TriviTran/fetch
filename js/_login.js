
$('#login').prop('disabled',true);
$('#login_user_email, #login_user_pass').keyup(function(){
    if($('#login_user_email').val()&& $('#login_user_pass').val()) {
        $('#login').prop('disabled',false);
    }
    else{
        $('#login').prop('disabled',true);
    }
});
$('#login').click(function () {
    assholes();
});

function assholes() {
    var info_to_send = {};
    info_to_send.email = $('#login_user_email').val();
    info_to_send.password = $('#login_user_pass').val();
    info_to_send.type = "get";

    //Simulation (alert or console.log to check for yourself)
    alert(JSON.stringify(info_to_send));

    //Actual
    $.ajax({
        type: "POST",
        url: "/_login",
        data: info_to_send,
        success: function(data){
            //data is the object sent back on success (could also just be string)
            goToPage('_homePage');
            alert("Congrats!");
        },
        error: function(data){
            alert("fail");
            //data is the object send back on fail (could also just be string)
        }
    });
}





