var a = 0;
function alertFood() {
    var food = [
        "Pasta",
        "Pizza",
        "Salade"
    ];

    alert(food[a]);

    a++;
    if (a == 3) {
        a = 0;
    }
}

var plats = [
    { 'plat': 'pasta',  'prix': 10 },
    { 'plat': 'pizza',    'prix': 12 },
    { 'plat': 'salade', 'prix': 8 }
];

function showPrice(food) {
    $("#myFood").text(food);

    var index = _.findIndex(plats, function(o) { return o.plat == food; });
    alert(plats[index].prix);
}