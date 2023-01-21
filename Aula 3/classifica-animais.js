let animais = [["vertebrado","baleia"],["vertebrado","pinguim"],["vertebrado","peixe-boi-da-amazônia"],["vertebrado","peixe-espada"],["vertebrado","arara"],["vertebrado","rato"],["vertebrado","cobra"],["vertebrado","lagarto"],["vertebrado","macaco"],["invertebrado","polvo"],["invertebrado","lula"],["invertebrado","ostras"],["invertebrado","caracóis"],["invertebrado","insetos"],["invertebrado","aracnídeos"],["invertebrado","crustáceos"]];

let vertebrado = [];
let invertebrado = [];

for (i=0; i<animais.length; i++) {
    if (animais[i][0] == "vertebrado") {
        vertebrado.push(animais[i]);
    } else {
        invertebrado.push(animais[i]);
    }
}

console.log(vertebrado);
console.log(invertebrado);