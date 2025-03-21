let para = ["лаки","ягер", "миша", "лакки", "lucky", "laki", "lakki", "misha", "jager", "yaguer", "iager"];


let gest = prompt("наши собаки ");

let aper = gest.toLowerCase;

let truenetru = para.includes(gest);

let slic = gest.slice(0,1);
let slic2 = gest.slice(1,gest.length);

let lover = slic.toUpperCase() + slic2;

if (truenetru) {


    alert(lover + " наша собака!");
} else {
    alert("мы таких не знаем");
}
