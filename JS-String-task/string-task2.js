let message = 'My nAme is RaihAn gazi and';
let countA = 0;
let count_a = 0;

for(let i = 0; i < message.length; i++) {
    if(message[i].includes('A')){
        countA+=1
    }
    else if(message[i].includes('a')) {
        count_a+=1
    }
}
console.log('A: has',countA);
console.log('a: has', count_a);