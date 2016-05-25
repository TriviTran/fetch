(function () {
    loader._rateUser = {
        data: {full_name: "Jane Doe", userId: 133, rate: 5},
        getData: function(){
            var dataSendBack = {
                full_name: data.full_name,
                userId: data.userId,
                rate: givenrate
            }
            return dataSendBack;
        },
        loadData: function (data) {

            $("#user-name_rateUser").empty();
            $('#user-image').data('src', "/placeholder/person.png");

            var separatedNames = data.full_name;
            document.getElementById("user-name_rateUser").innerHTML = separatedNames;


            var imageSrc = "Images/users/" + data.userId + ".png";

            if (imageSrc !== null) {
                $('#user-image').data('src', imageSrc);
            }
        }
    };

    $("#rate-user").click(function(){
       goToPage("_congratsTicketClosed");
    });

    var _rating = 0;
    var r1 = $('#rating-1'), r2 = $('#rating-2'), r3 = $('#rating-3'), r4 = $('#rating-4'), r5 = $('#rating-5');
    r1.hover(function () {
        r1.addClass("selected");
        r2.removeClass("selected");
        r3.removeClass("selected");
        r4.removeClass("selected");
        r5.removeClass("selected");
        _rating = 1;
    });
    r2.hover(function () {
        r1.addClass("selected");
        r2.addClass("selected");
        r3.removeClass("selected");
        r4.removeClass("selected");
        r5.removeClass("selected");
        _rating = 2;
    });
    r3.hover(function () {
        r1.addClass("selected");
        r2.addClass("selected");
        r3.addClass("selected");
        r4.removeClass("selected");
        r5.removeClass("selected");
        _rating = 3;
    });
    r4.hover(function () {
        r1.addClass("selected");
        r2.addClass("selected");
        r3.addClass("selected");
        r4.addClass("selected");
        r5.removeClass("selected");
        _rating = 4;
    });
    r5.hover(function () {
        r1.addClass("selected");
        r2.addClass("selected");
        r3.addClass("selected");
        r4.addClass("selected");
        r5.addClass("selected");
        _rating = 5;
    });


})();
/**
 * Created by juneruijiang on 5/24/16.
 */
