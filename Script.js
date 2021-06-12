const closedFace = document.querySelector(".closed");
const openFace = document.querySelector(".open");
//add event listener

closedFace.addEventListener('click', () => {
    if (openFace.classList.contains('open')) {
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }
});

openFace.addEventListener('click', () => {
    if (closedFace.classList.contains('closed')) {
        closedFace.classList.add('active');
        openFace.classList.remove('active');
    }
});

//Thumbs up/down
const thumbsUp = document.querySelector(".up");
const thumbsDown = document.querySelector(".down");

thumbsUp.addEventListener('click', () => {
    if (thumbsDown.classList.contains('down')) {
        thumbsDown.classList.add('active');
        thumbsUp.classList.remove('active');
    }
});

thumbsDown.addEventListener('click', () => {
    if (thumbsUp.classList.contains('up')) {
        thumbsUp.classList.add('active');
        thumbsDown.classList.remove('active');
    }
});