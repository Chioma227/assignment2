let browser = prompt("");

if (browser == "Edge") {
    alert("You've got the Edge!")
}

else if (browser == "Chrome") {
    alert("Okay we support these browsers too.")
}
else if (browser == "Firefox") {
    alert("Okay we support these browsers too.")
}
else if (browser == "Safari") {
    alert("Okay we support these browsers too.")
}
else if (browser == "Opera") {
    alert("Okay we support these browsers too.")
}
else {
    alert("We hope that this page looks ok!")
}

let a = +prompt("a?", 2)

switch (a) {
    case 0:
        alert(0);
    case 1:
        alert(1)
    case 2:
    case 3:
        alert ("2,3")
}