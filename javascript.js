let para = ["лаки","ягер", "миша", "лакки", "lucky", "laki", "lakki", "misha", "jager", "yaguer", "iager", "iaguer", "чук", "chuk", "чукхан", "чухан", "чукерхан", "chukerkhan", "chuckerchan", "lakky", "мишка", "ягерошка", "лакуська", "лакусик", "мишунчик", "мишон", "гера", "герка", "герошка", "герундий", "чукандопало", "лакерошка", "лакуся"];


let gest = prompt("наши собаки ");

let aper = gest.toLowerCase();

let truenetru = para.includes(aper);

let slic = aper.slice(0,1);
let slic2 = aper.slice(1,gest.length);

let lover = slic.toUpperCase() + slic2;

if (truenetru) {


    alert(lover + " наша собака!");
} else {
    alert("мы таких не знаем");
}
