var clickTimes = 0

function sleep(number){
    var now = new Date();
    var exitTime = now.getTime() + number * 1000;
    while (true) {
        now = new Date();
        if(now.getTime() > exitTime)
        return
    }
}

function closeAll(){
    var cards = document.getElementsByClassName("jumpCard")
    for (i in cards){
        cards[i].id = "jumpCardDown";
    }
}

function jumpCardChange(cardName) {
    var cards = document.getElementsByClassName("jumpCard")
    var clickcard = document.getElementsByClassName(cardName)[0]
    var body = document.getElementsByTagName("body")[0]
    for (i in cards){
        if (cards[i] == clickcard){
            if (clickcard.id == "jumpCardDown"){
                clickcard.id = "jumpCardUp"
                body.style.overflow="hidden"
            }else{
                clickcard.id = "jumpCardDown";
                body.style.overflow="auto";
            }
        }else{
            cards[i].id = "jumpCardDown";
        }
    }
}

function myselfOpen(){
    var myself = document.getElementsByClassName("myself")[0]
    var body = document.getElementsByTagName("body")[0]
    topbar = document.getElementsByClassName("topbar")[0]
    if (myself.id == "myselfClose"){
        myself.id = "myselfOpen"
        body.style.overflow="hidden"
        topbar.id="close"
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }else{
        myself.id = "myselfClose";
        body.style.overflow="auto";
        topbar.id="open";
    }
}

function changeFold(className){
    console.log(className);
    fold = document.getElementsByClassName(className)[0]
    if (fold.id == "close"){
        fold.id = "open";
    }else{
        fold.id = "close";
    }
}


function getScrollOffset() {
    if (window.pageXOffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
            }
    } else {
        return {
        x: document.body.scrollLeft + document.documentElement.scrollLeft,
        y: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}


function pageScroll(){
    var myself = document.getElementsByClassName("myself")[0]
    var body = document.getElementsByTagName("body")[0]
    var topbar = document.getElementsByClassName("topbar")[0]
    var hidebody = document.getElementsByClassName("hidebody")[0]
    if (getScrollOffset().y == 0){
        clickTimes += 1
        body.id = "up";
        console.log(clickTimes);
        myself.id = "myselfClose";
        body.style.overflow="auto";
        topbar.id="open";
        hidebody.id = "close"
        closeAll()
        if (clickTimes == 5){
            body.id = "down";
            topbar.id="close";
            hidebody.id = "open"
            body.style.overflow="hidden";
            clickTimes = 0;
        }
    }else{
        hidebody.id = "close"
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        clickTimes = 0;
        body.id = "up";
        body.style.overflow="auto";
        topbar.id="open";
        closeAll()
    }
}