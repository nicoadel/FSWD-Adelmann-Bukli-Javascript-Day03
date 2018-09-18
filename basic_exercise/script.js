temperature();
function temperature() {
    var randomNumber = (Math.floor(Math.random() * 31) - 5);
    if ((-5 <= randomNumber) && (randomNumber <= 10)) {
        document.write("The weather is cold");

    } else {
        document.write("The weather is moderate");
    }
}

function highestarray(array) {
    var number = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > number) { number = array[i] }
    }

}

function product(array) {
    var number = 1;
    for (var i = 0; i < array.length; i++) { number *= array[i] }

}

