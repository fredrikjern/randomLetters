function myRandomInts(quantity, max){ //Genererar en array med unika nummer, quantity
    const arr = []
    while(arr.length < quantity){
        var candidateInt = Math.floor(Math.random() * max) + 1
        if(arr.indexOf(candidateInt) === -1) arr.push(candidateInt) // Om siffran inte finns i arrayen redan (indexOf === -1), pusha siffran.
    }
    return(arr)
}
function randomLetters() {
    let items = document.querySelectorAll(".item"); // Alla boxar i flexbox-containern har klassen item
    randomArr = myRandomInts(items.length, items.length); 
    console.log(randomArr);
    items.forEach((item, i) => {
        item.className = "item"; //skriver över hela classListen med bara "item"
        item.classList.add(`order${randomArr[i]}`) // ger en random klass med order så dom sorterar om sig.
    });  
};
let button = document.getElementById("button");
button.addEventListener("click", ()=>{
    randomLetters();
});