var boys = [];
var girls = [];

function makeBaby()
{
    var rand = Math.round(Math.random());
    var isMale = false;
    if (rand == 1) {
        isMale = true;
    }


    if (isMale) {
        boys.push(1);
    } else {
        girls.push(1);
        makeBaby();
    }
}

function reset() {
    boys = [];
    girls = [];
}

function simulate(iterations) {
    reset();
    for (var i = 0; i < iterations; i++) {
        makeBaby();
    }

    var total = boys.length + girls.length;
    var average = total / iterations;
    var boyRatio = ((boys.length / total) * 100).toFixed(2);
    var girlRatio = ((girls.length / total) * 100).toFixed(2);
    $("#results").append("<tr><td>"
     + boys.length + " (" + boyRatio + "%)</td><td>" 
     + girls.length + " (" + girlRatio + "%)</td><td>" + average + "</td></tr>");
}