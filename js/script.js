const contNumber = document.querySelector('.container-number')


const arrRandoms = []
while(arrRandoms.length < 5) {
    let randomNumber = Math.round(Math.random()*100);
 
    if (!arrRandoms.includes(randomNumber)){
        arrRandoms.push(randomNumber);
    }
    
}
const eleSpan = document.createElement('span');
contNumber.append(eleSpan);
eleSpan.innerHTML += `<span">${arrRandoms}</span>`;

setTimeout(function () {
    contNumber.classList.add('hidden')
}, 4000)
    

// const numUser = [];
// for(let i = 0; i<5; i++) {
//     let insertNumber
// }