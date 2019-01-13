
function myFunction() {
    while (true) {
        var name = prompt("What is your name?");
        if (name) {
            alert(`Hello ${name} welcome to the Sparta Bar.`);
            break;
        } else {
            name = prompt("What is your name?");
        }
    }

    var drink = prompt("What would you like to drink?");
    if (drink.includes("vodka")) {
        drink = "vodka";
    } else if (drink.includes("whiskey")) {
        drink = "whiskey";
    } else if (drink.includes("rum")) {
        drink = "rum";
    } else if (drink.includes("gin")) {
        drink = "gin";
    }


    switch (drink) {
        case "beer":
            alert("good choice!")
            break;
        case "vodka":
            alert("hard day?")
            break;
        case "whiskey":
            alert("a man of culture I see!")
            break;
        case "gin":
            alert("Yummy!")
        default:
            alert(`I've never heard of ${drink}, is that safe to drink?`)
            break;
    }
}