const firstname = document.getElementById('firstname')
const speed = document.getElementById('speed');
const time = document.getElementById('time');
const output = document.getElementById('vystup');
const outputArray = document.getElementById('vystupPole')
const btnCalc = document.querySelector('[type=button]');

let posledniVysledek = [];

btnCalc.addEventListener('click', function() {
    let path = speed.value * time.value ;
    console.log(path);
    posledniVysledek.push(path);
    output.innerHTML = `Hello ${firstname.value}, your path value based on speed and time is ${path} meters.`
    if (posledniVysledek.length > 1){
        outputArray.innerHTML = `Your previous answer was ${posledniVysledek[posledniVysledek.length - 2]} meters.`
    } else {
        outputArray.innerHTML = `No previous results yet.`;
    }
});

