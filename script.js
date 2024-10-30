const heading = document.getElementById('heading');
const keyInfo = document.getElementById('dynamic');

let combination = "";

document.addEventListener('keydown', (event) => {
    const sound = document.getElementById('key-press');
    sound.play();
    sound.volume = 1;
    const keyCode = event.keyCode;
    const key = event.key;

    if (keyCode === 32) {
        heading.innerText = `You have pressed Space`;
        keyInfo.innerText = keyCode;
        keyInfo.classList.add('slide');
        combination = "";
        return
    }

    if (key === 'Control' || key === 'Shift' || key === 'Alt' || key === 'AltGraph') {
        if (combination !== "" && combination.includes(key)) {
            heading.innerText = `You have pressed ${key}`;
            combination = '';
        }
        else if (combination !== "" && !combination.includes(key)) {
            heading.innerText = `You have pressed ${combination} + ${key}`;
            combination += ' + ';
        }
        else heading.innerText = `You have pressed ${key}`;
        combination += key;
    }
    else {
        if (combination !== "") heading.innerText = `You have pressed ${combination} + ${key}`;
        else heading.innerText = `You have pressed ${key}`;
        combination = "";
    }

    keyInfo.innerText = keyCode;
    keyInfo.classList.add('slide');
});