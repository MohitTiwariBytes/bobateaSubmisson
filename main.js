function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color; // that random color that is going to be the backround....
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

setInterval(changeBackgroundColor, 500); // chnage it to a random color evey 500 milisecond...

