let mesi = ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"];

function riempiMesi() {
    let s = "";
    for (let i = 0; i < mesi.length; i++) {
        s += "<option>" + mesi[i] + "</option>";
    }
    document.getElementById("txtMese").innerHTML = s;
}

function elaboraDati() {
    let punteggio = 0;

    // Domanda 1 – linguaggio per database (risposta: SQL)
    let risposta1 = document.getElementById("risp1").value.toUpperCase().trim();
    if (risposta1 === "SQL") {
        punteggio++;
    }

    // Domanda 2 – valori variabile booleana (risposta: 2)
    let risposta2 = document.getElementById("txtRisp2").value;
    if (risposta2 === "2") {
        punteggio++;
    }

    // Domanda 3 – librerie caricate a run-time (risposta: Dinamiche)
    let radioD = document.getElementById("radioD").checked;
    if (radioD) {
        punteggio++;
    }

    // Domanda 4 – parole chiave in C++ (corrette: void, char; sbagliata: integer)
    let checkVoid   = document.getElementById("checkVoid").checked;
    let checkIntegr = document.getElementById("checkIntegr").checked;
    let checkChar   = document.getElementById("checkChar").checked;
    if (checkVoid && !checkIntegr && checkChar) {
        punteggio++;
    }

    // Domanda 5 – 8 bit corrispondono a un... (risposta: BYTE)
    let rispBit = document.getElementById("rispBit").value.toUpperCase().trim();
    if (rispBit === "BYTE") {
        punteggio++;
    }

    document.getElementById("txtPunteggio").value = "Punteggio: " + punteggio + " / 5";
}

function cancellaDati() {
    document.getElementById("txtCognome").value = "";
    document.getElementById("txtNome").value = "";
    document.getElementById("txtGiorno").value = "";
    document.getElementById("txtMese").selectedIndex = 0;
    document.getElementById("txtAnno").value = "";
    document.getElementById("risp1").value = "";
    document.getElementById("txtRisp2").selectedIndex = 0;
    document.getElementById("radioS").checked = false;
    document.getElementById("radioD").checked = false;
    document.getElementById("checkVoid").checked = false;
    document.getElementById("checkIntegr").checked = false;
    document.getElementById("checkChar").checked = false;
    document.getElementById("rispBit").value = "";
    document.getElementById("txtPunteggio").value = "";
}

riempiMesi();

// Collega i bottoni
document.querySelectorAll("button")[0].addEventListener("click", elaboraDati);
document.querySelectorAll("button")[1].addEventListener("click", cancellaDati);