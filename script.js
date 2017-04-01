function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(a) {
    var cookie = getCookie(a);
    if (cookie != "") {
        return true;
    } else {
        return false;
    }
}

function updateScore(a) {
    if (checkCookie("score")) {
        console.log("score exsists");
        var temp = Number(getCookie("score"));
        console.log("temp: " + temp);
        temp += a;
        setCookie("score", temp, 1);
        console.log("temp: " + temp);
    }
    else {
        console.log("score did not exsist")
        setCookie("score", a, 1);
    }

    //Change score on page
    Score();
}

function getScore() {
    return getCookie("score");
}

//Compares answer to x. Updates status window. Updates Score
function checkAnswer(x) {
    var ans = Number(document.getElementById("ans").value);
    var stat = document.getElementById("status");
    

        //Compare answers
        if (ans == x) { //Correct
            stat.classList.remove("alert-info");
            stat.classList.remove("alert-danger");
            stat.classList.add("alert-success");
            updateScore(1);
            stat.innerHTML = "Correct!";
            document.getElementById("ans").disabled = true;
            document.getElementById("next").disabled = false;

        }
        else if (isNaN(ans)) { //answer is not valid
            stat.classList.remove("alert-info");
            stat.classList.remove("alert-danger");
            stat.classList.add("alert-warning");
            stat.innerHTML = "The answer must be a number, please try again!";
        }
        else { //Incorrect
            stat.classList.remove("alert-info");
            stat.classList.remove("alert-warning");
            stat.classList.add("alert-danger");
            stat.innerHTML = "Incorrect!";
        }
}

function Score() {
    document.getElementById("curScore").innerHTML = getCookie("score") + "/3";
}

function start() {
    setCookie("score", "0", 1);
    document.getElementById("ans").disabled = false;
    document.getElementById("ans").value = "";
}

function q2() {
    window.location.href = "q2.html";
}

function q3() {
    window.location.href = "q3.html";

}
