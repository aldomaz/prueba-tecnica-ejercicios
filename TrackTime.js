input = [65647440, 199644521]
let total = 0;
let days;
let hours;
let mins;
let secs;
let ms;

const trackTime = (input) => {
    input.forEach(element => {
        if(element < 0 || element === null ){
            element=0;
        }
        total = total + element;
    });

    days = Math.trunc(total/86400000);
    total = total - days * 86400000;
    
    hours = Math.trunc(total/3600000);
    total = total - hours * 3600000;

    mins = Math.trunc(total/60000);
    total = total - mins * 60000;

    secs = Math.trunc(total/1000);
    total = total - secs * 1000;

    ms=total;

    output = [ days, hours, mins, secs, ms];

    console.log(output);
}

trackTime(input);