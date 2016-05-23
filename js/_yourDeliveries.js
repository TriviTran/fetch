//
// function _tickets_load() {
//     //Actual:
//     //loadFromServer();
//
//     //Simulation:
//     var simulated_user = {
//         pending_tickets: [{name: "wholeFoods", time: "12:00 pm", id: "123", state: "pending"}, {
//             name: "ralphs",
//             time: "5:00 pm",
//             state: "pending"
//         },
//             {name: "tjs", time: "6:00 pm", state: "pending"}, {
//                 name: "ralphs",
//                 time: "7:00 pm",
//                 state: "pending"
//             }, {name: "vons", time: "7:00 pm", state: "pending"},
//             {name: "wholeFoods", time: "1:00 pm", state: "pending"}, {
//                 name: "ralphs",
//                 time: "2:00 pm",
//                 state: "pending"
//             },
//             {name: "tjs", time: "3:00 pm", state: "pending"}, {
//                 name: "ralphs",
//                 time: "4:00 pm",
//                 state: "pending"
//             }, {name: "vons", time: "5:00 pm", state: "pending"}]
//     };
//     displayLoadedData(simulated_user);
//
//     loader._yourDeliveries.loadData = function displayLoadedData(data) {
//         var pending_tickets = [];
//         pending_tickets = data.pending_tickets;
//
//         var completed_tickets = [];
//         completed_tickets = data.completed_tickets;
//
//         function toName(nameString) {
//             var name = {};
//             name['wholeFoods'] = "WholeFoods";
//             name['ralphs'] = "Ralph's";
//             name['tjs'] = "Trader Joe's";
//             name['vons'] = "Vons";
//
//             return name[nameString];
//         }
//
//
//         for (var i = 0; i < pending_tickets.length; i++) {
//             var ticket = pending_tickets[i];
//
//             $("#pending_tickets").append('<li data-id =' + pending_tickets[i].name + ' data-state="' +
//                 pending_tickets[i].state + '" class = "yourDeliveries1 ' + pending_tickets[i].name + ' ticket" ' +
//                 ' ><div  >' + toName(pending_tickets[i].name) +
//                 ' <br> Estimate Deliver Time: ' + pending_tickets[i].time + '</div></li>');
//         }
//
//         for (var i = 0; i < completed_tickets.length; i++) {
//             $("#completed_tickets").append('<li class = "' + completed_tickets[i].name + ' ticket" ' +
//                 ' ><div id =' + completed_tickets[i].name + ' >' + toName(completed_tickets[i].name) +
//                 ' <br> Estimate Deliver Time: ' + completed_tickets[i].time + '</div></li>');
//         }
//
//
//         $('li.yourDeliveries').each(function () {
//             $(this).click(loader.loadTicket($(this).data("id"), $(this).data("state")));
//         });
//
//     }
// }
//
// _tickets_load();
// /**
//  * Created by juneruijiang on 5/17/16.
//  */
// =======
function _tickets_load() {
    //Actual:
    //loadFromServer();

    //Simulation:
    var simulated_user = {
        tickets: [{name: "wholeFoods", time: "12:00 pm", deliveryid: "123", state: "accepted"},
            {name: "ralphs", time: "1:00 pm", deliveryid: "234", state: "accepted"},
            {name: "tjs", time: "2:00 pm", deliveryid: "234", state: "accepted"},
            {name: "ralphs", time: "3:00 pm", deliveryid: "345", state: "shopped"},
            {name: "vons", time: "4:00 pm", deliveryid: "665", state: "shopped"},
            {name: "wholeFoods", time: "5:00 pm", deliveryid: "342", state: "shopped"},
            {name: "ralphs", time: "6:00 pm", deliveryid: "352", state: "shopped"},
            {name: "tjs", time: "7:00 pm", deliveryid: "525", state: "delivered"},
            {name: "ralphs", time: "8:00 pm", deliveryid: "532", state: "delivered"},
            {name: "vons", time: "9:00 pm", deliveryid: "864", state: "delivered"},
            {name: "vons", time: "10:00 pm", deliveryid: "864", state: "draft"}
        ]
    };
    displayLoadedData(simulated_user);
    //
    // loader._yourDeliveries.loadData =
    function displayLoadedData(data) {

        var tickets = [];
        tickets = data.tickets;

        var accepted_tickets = [];

        var shopped_tickets = [];

        var delivered_tickets = [];

        var extra = [];


        for (var i = 0; i < tickets.length; i++) {

            if (tickets[i].state == 'accepted') {
                accepted_tickets.push(tickets[i]);
                console.log('accept');
            }
            else if (tickets[i].state == 'shopped') {
                shopped_tickets.push(tickets[i]);
                console.log('shop');
            }
            else if (tickets[i].state == 'delivered') {
                delivered_tickets.push(tickets[i]);
                console.log('deliver');

            }
            else {
                extra.push(tickets[i]);
                console.log('extra');

            }
        }

        function toName(nameString) {
            var name = {};
            name['wholeFoods'] = "WholeFoods";
            name['ralphs'] = "Ralph's";
            name['tjs'] = "Trader Joe's";
            name['vons'] = "Vons";

            return name[nameString];
        }


        for (var i = 0; i < accepted_tickets.length; i++) {

            $("#yourDeliveries_accepted_tickets").append('<li data-id =' + accepted_tickets[i].name + ' data-state="' +
                accepted_tickets[i].state + ' data-state="' + accepted_tickets[i].deliveryid +
                '" class = "yourDeliveries1 ' + accepted_tickets[i].name + ' ticket" ' + ' ><div  >'
                + toName(accepted_tickets[i].name) + ' <br> Estimate Deliver Time: ' + accepted_tickets[i].time +
                '</div></li>');
        }

        for (var i = 0; i < shopped_tickets.length; i++) {

            $("#yourDeliveries_shopped_tickets").append('<li data-id =' + shopped_tickets[i].name + ' data-state="' +
                shopped_tickets[i].state + ' data-state="' + shopped_tickets[i].deliveryid +
                '" class = "yourDeliveries1 ' + shopped_tickets[i].name + ' ticket" ' + ' ><div  >'
                + toName(shopped_tickets[i].name) + ' <br> Estimate Deliver Time: ' + shopped_tickets[i].time +
                '</div></li>');
        }

        for (var i = 0; i < delivered_tickets.length; i++) {

            $("#yourDeliveries_delivered_tickets").append('<li data-id =' + delivered_tickets[i].name + ' data-state="' +
                delivered_tickets[i].state + ' data-state="' + delivered_tickets[i].deliveryid +
                '" class = "yourDeliveries1 ' + delivered_tickets[i].name + ' ticket" ' + ' ><div  >'
                + toName(delivered_tickets[i].name) + ' <br> Estimate Deliver Time: ' + delivered_tickets[i].time +
                '</div></li>');
        }

        $('li.yourDeliveries').each(function () {
            $(this).click(loader.loadTicket($(this).data("id"), $(this).data("state")));
        });

    }

    $('li').click(function () {
        loader.getTicket($(this).data("deliveryid"));
    });
}

_tickets_load();
// >>>>>>> 5bedbe45b38a2b3ac5e475729d528e300a1cef3c
