/**
 * Created by tylercuddy on 5/10/16.
 */
(function() {
// $(document).ready(function(){
    $("#submitPass").prop("disabled", true);
// });
    loader._passwordReset= {
        data:"", //Optional
        version: 0, //Must be 0
        getData:null,
        loadData: null,
    };
    window.checkPass = function() {
        //Store the password field objects into variables ...
        var pass1 = $('#pass1').val();
        var pass2 = $('#pass2').val();
        //Store the Confimation Message Object ...
        var message = document.getElementById('confirmMessage');
        //Set the colors we will be using ...
        var goodColor = "#66cc66";
        var badColor = "#ff6666";
        //Compare the values in the password field
        //and the confirmation field
        if (pass1 == pass2) {
            console.log(pass1);
            console.log(pass2);
            //The passwords match.
            //Set the color to the good color and inform
            //the user that they have entered the correct password

            // pass2.style.backgroundColor = goodColor;
            message.style.color = goodColor;
            message.innerHTML = "Passwords Match!";

            $("#submitPass").prop("disabled", false);
        } else {
            //The passwords do not match.
            //Set the color to the bad color and
            //notify the user.

            // pass2.style.backgroundColor = badColor;
            $("#submitPass").prop("disabled", true);
            message.style.color = badColor;
            message.innerHTML = "Passwords Do Not Match!"
        }
    }

    $('#submitPass').click(function () {
        sendNewPassword();
    });

    function sendNewPassword() {
        var info_to_send = {};
        info_to_send.password = $('#pass1').val();
        ;
        info_to_send.type = "send";

        //Actual
        $.ajax({
            type: "POST",
            url: "/_passwordReset",
            data: info_to_send,
            success: function (data) {
                //data is the object sent back on success (could also just be string)
            },
            error: function (data) {
                //data is the object send back on fail (could also just be string)
            }
        });
    }
})();