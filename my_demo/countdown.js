function countdown(time) {
    if (time > 0) {
        console.log(time--);
    } else {
        return;
    }
    var timer = setInterval(function() {
        if (time >= 0) {
            console.log(time--);
        } else {
            clearInterval(timer);
        }
    }, 1000);
}

function countdown2(time) {
    if (time > 0) {
        console.log(time--);
    } else {
        return;
    }

    var timer = setTimeout(function fn() {
        if (time >= 0) {
            console.log(time--);
            timer = setTimeout(fn, 1000);
        }  else {
            clearTimeout(timer);
        }
    }, 1000);
}

countdown2(10);