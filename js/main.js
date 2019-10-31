function myFunction() {
    while (true) {
        var name = prompt("What is your name?");
        if (name) {
            alert(`Hello ${name} welcome to the Sparta Bar.`);
            break;
        }
    }
    var money = prompt("how much money would you like for this story?");
    if (money === 0) {
        alert("you cannot afford to drink here!");
    } else {
        var drink = prompt("What would you like to drink?");
        drinkFunction(drink, money);
    }
}

function drinkFunction(drink, money) {
    var newMoney = money;
    var yesNo;
    var whatDrink;
    if (drink.includes("vodka")) {
        drink = "vodka";
    } else if (drink.includes("whiskey")) {
        drink = "whiskey";
    } else if (drink.includes("rum")) {
        drink = "rum";
    } else if (drink.includes("gin")) {
        drink = "gin";
    } else if (drink.includes("water")) {
        drink = "water";
    }

    switch (drink) {
        case "beer":
            if (newMoney >= 5) {
                alert("good choice, that will be 5£!");
                newMoney = newMoney - 5;
                console.log(newMoney);
                yesNo = prompt("would you like another drink? yes or no");
                if (yesNo === "yes") {
                    whatDrink = prompt("what would you like?");
                    drinkFunction(whatDrink, newMoney);
                } else if (yesNo === "no") {
                    break;
                }
            } else {
                alert("you can't afford this drink, get out!");
            }
            break;
        case "vodka":
            if (newMoney >= 7) {
                alert("hard day? That will be 7£!");
                newMoney = newMoney - 7;
                console.log(newMoney);
                yesNo = prompt("would you like another drink? yes or no");
                if (yesNo === "yes") {
                    whatDrink = prompt("what would you like?");
                    drinkFunction(whatDrink, newMoney);
                } else if (yesNo === "no") {
                    break;
                }
            } else {
                alert("you can't afford this drink, get out!");
            }
            break;
        case "whiskey":
            if (newMoney >= 8) {
                alert("a man of culture i see! That will be 8£!");
                newMoney = newMoney - 8;
                console.log(newMoney);
                yesNo = prompt("would you like another drink? yes or no");
                if (yesNo === "yes") {
                    whatDrink = prompt("what would you like?");
                    drinkFunction(whatDrink, newMoney);
                } else if (yesNo === "no") {
                    break;
                }
            } else {
                alert("you can't afford this drink, get out!")
            }
            break;
        case "gin":
            if (newMoney >= 8) {
                alert("yummy! That will be 7£!");
                newMoney = newMoney - 7;
                console.log(newMoney);
                yesNo = prompt("would you like another drink? yes or no");
                if (yesNo === "yes") {
                    whatDrink = prompt("what would you like?");
                    drinkFunction(whatDrink, newMoney);
                } else if (yesNo === "no") {
                    break;
                }
            } else {
                alert("you can't afford this drink, get out!");
            }
            break;
        case "water":
            alert("bit boring?")
            yesNo = prompt("are you sure you don't want something a bit stronger? yes or no");
            if (yesNo === "yes") {
                whatDrink = prompt("what would you like to drink instead?");
                drinkFunction(whatDrink, money);
            } else if (yesNo = "no") {
                alert("here is your drink then");
            }
            break;
        default:
            alert(`I've never heard of ${drink}, is that safe to drink?`);
            break;
    }
}

function anotherDrink(money) {
    var drink;
        
    return drink;
}