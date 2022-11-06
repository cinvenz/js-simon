const contNumber = document.querySelector('.container-number')


const arrRandoms = [];
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
}, 5000)
    
const numUser = [];
setTimeout(function () {
    
    for(let i = 0; i<5; i++) {
        let insertNumber = parseInt(prompt('inserisci i numeri che ricordi'));
        if (!numUser.includes(insertNumber)){
            numUser.push(insertNumber);
        }

    
    }

    let getResult = function (arrRandoms, numUser) {
        let i = arrRandoms.length;
        if (i != numUser.length) return false;
     
        while (i--) {
          if (arrRandoms[i] !== numUser[i]) return false;
        }
        return true;
      };
     
    console.log("Comparing arrRandoms and numUser", getResult(arrRandoms, numUser));

    if (getResult = true) {
        alert("Hai indovinato " + numUser.length + " numeri. Esattamente i numeri: " + numUser)
        console.log(numUser)
    }
   
    
    
}, 6000)


