const firstname = document.getElementById('firstname')
const speed = document.getElementById('speed');
const time = document.getElementById('time');
const output = document.getElementById('vystup');
const outputArray = document.getElementById('vystupPole')
const btnCalc = document.querySelector('[type=button]');

let posledniVysledek = [];

const calculationData = {
    name: '',
    speed: 0,
    time: 0,
    path: 0,
    updateData(name, speed, time, path) {
        this.name = name;
        this.speed = speed;
        this.time = time;
        this.path = path;
    }
};

btnCalc.addEventListener('click', function() {
    let path = speed.value * time.value;
    console.log(path);

    calculationData.updateData(firstname.value, speed.value, time.value, path);

    posledniVysledek.push(path);

    output.innerHTML = `Hello ${calculationData.name}, your path value based on speed and time is ${calculationData.path} meters.`;

    if (posledniVysledek.length > 1) {
        outputArray.innerHTML = `Your previous result was ${posledniVysledek[posledniVysledek.length - 2]} meters.`;
    } else {
        outputArray.innerHTML = `No previous results yet.`;
    }
});
