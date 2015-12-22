// For more check out zachsaucier.com

function magek() {
    var input = document.getElementById('input').value;
    var mod = "";
    
    for (var i = 0; i < input.length; i++) {
        mod += (i % 2)? input[i].toLowerCase() : input[i].toUpperCase();
    }    
    
    document.getElementById('output').value = mod;
}

function snek() {
    var win = window.open('https://www.reddit.com/r/sneks', '_blank')
    win.focus();
}

function test() {
    var win = window.open('https://www.youtube.com/watch?v=kJa2kwoZ2a4', '_blank')
    win.focus();
}
