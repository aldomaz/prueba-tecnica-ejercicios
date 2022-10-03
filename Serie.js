const number = 9;

let result = -3;
let add = 1;

const recorrerSerie = (number) => {
    for(let i = 1; i < number; i++){
        result = result + add;
        add = add + 2;
    }

    return result;
}

console.log(recorrerSerie(number));