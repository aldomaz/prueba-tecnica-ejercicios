input = [ 3, 4, -7, 5, -6, 2, 5, -1, 8];
let sum;

const removeNodes = (input) => {
    for(let i=0; i < input.length; i++){
        j=i
        sum = 0;
        for(let j=0; j < input.length; j++){
            sum=sum+input[j];
            console.log(sum);
            if(sum===0){
                input.splice(i,j+1);
                i=j;
                j=input.length;
            }
        }
    }
}

removeNodes(input);
console.log(input);