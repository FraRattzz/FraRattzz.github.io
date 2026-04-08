let menu= document.getElementById("menu");
let annoCorrente=new Date().getFullYear();

function stampaSelezionto(){
    let selezionato= menu.ariaValueMax;
    console.log(selezionato);
    let testo= menu.options[menu.selected].text;
    console.log(testo);
    
}
function riempiConAnni(){
    let html="";
    for(let i=1990;i<=annoCorrente;i++){
        html+="<option value="+ i+ ">"+i+"</option>";
    }
    menu.innerHTML=html;
}
let txt1=document.getElementById("textBox1");
function stampaTextBox(){
    console.log(txt1.value);
}