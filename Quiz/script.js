let mesi = ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"];

let risposte=["SQL","2","St"]
function riempiMesi(){
    let s ="";
    for(let i=0;i<mesi.length;i++){
        s+="<option>"+mesi[i] +"</option>";
    }
    document.getElementById("txtMese").innerHTML=s;

}


function elaboraDati(){
    let punteggio=0;
    let rispsta1=document.getElementById("risp1").value;
    let risposta2=document.getElementById("txtRisp2").value;
    let rispota3;
    if(document.getElementById("radioS").value==true){
        
    }

}
riempiMesi()

