const entrada = document.getElementById("num");
const button = document.getElementById("button")

console.log(entrada)
console.log(button)

button.onclick = gerarLink;

function gerarLink() {    
    let valorIni = entrada.value;    
    let tratado = "";
    
    for(let i = 0 ; i < valorIni.length; i++) {
        if(valorIni[i] != "(" && valorIni[i] != ")" && valorIni[i]!= "/" && valorIni[i] != "°"){
           tratado += valorIni[i]           
        }
    }
    
    arrTratado = tratado.split(" ")    
    let newArr = [];

    for ( let i = 0; i< arrTratado.length; i++ ){
        
        if(arrTratado[i].length >1) {
            newArr.push(arrTratado[i])
        }
    }
    
    let num1 = newArr.slice(0,2).concat();  
    let number1 = num1[0]+num1[1] 
           
    let num2 = newArr.slice(2,4)
    let number2 = num2[0]+num2[1]

    let num3 = newArr.slice(4,6)
    let number3 = num3[0]+num3[1]

    

    showLink(number1,number2,number3)  
   
}

function showLink (n1,n2,n3) {
    const baseLink = "https://wa.me/55";
    let link1 = document.createElement("a");
    link1.value = `${baseLink}${n1}`
    link1.innerHTML = link1.value
    link1.href = link1.value
    console.log(link1.value)
    document.body.appendChild(link1)

    let link2 = document.createElement("a");
    link2.value = `${baseLink}${n2}`
    link2.innerHTML = link2.value
    link2.href = link2.value
    console.log(link2.value)
    document.body.appendChild(link2)

    let link3 = document.createElement("a");
    link3.value = `${baseLink}${n3}`
    link3.innerHTML = link3.value
    link3.href = link3.value
    console.log(link3.value)
    document.body.appendChild(link3)
}

