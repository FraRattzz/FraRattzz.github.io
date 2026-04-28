var articoli = [
    { nome: "mouse", prezzo: 16.00 },
    { nome: "tastiera", prezzo: 25.00 },
    { nome: "stampante", prezzo: 350.00 },
    { nome: "scanner", prezzo: 200.00 }
];

// Aggiorna il totale della riga in tempo reale
function aggiornaRiga(i) {
    let qta = parseInt(document.getElementById("qta" + (i + 1)).value) || 0;
    let tot = qta * articoli[i].prezzo;
    document.getElementById("tot" + (i + 1)).value = tot + "€";
}

// Calcola il totale complessivo con validazione 0-20
function calcolaTotale() {
    let q1 = parseInt(document.getElementById("qta1").value);
    let q2 = parseInt(document.getElementById("qta2").value);
    let q3 = parseInt(document.getElementById("qta3").value);
    let q4 = parseInt(document.getElementById("qta4").value);

    if (isNaN(q1) || q1 < 0 || q1 > 20) { alert("Quantità mouse non valida! Inserire un valore tra 0 e 20."); return; }
    if (isNaN(q2) || q2 < 0 || q2 > 20) { alert("Quantità tastiera non valida! Inserire un valore tra 0 e 20."); return; }
    if (isNaN(q3) || q3 < 0 || q3 > 20) { alert("Quantità stampante non valida! Inserire un valore tra 0 e 20."); return; }
    if (isNaN(q4) || q4 < 0 || q4 > 20) { alert("Quantità scanner non valida! Inserire un valore tra 0 e 20."); return; }

    let t1 = q1 * articoli[0].prezzo;
    let t2 = q2 * articoli[1].prezzo;
    let t3 = q3 * articoli[2].prezzo;
    let t4 = q4 * articoli[3].prezzo;

    document.getElementById("tot1").value = t1 + "€";
    document.getElementById("tot2").value = t2 + "€";
    document.getElementById("tot3").value = t3 + "€";
    document.getElementById("tot4").value = t4 + "€";

    let totaleF = t1 + t2 + t3 + t4;
    document.getElementById("totaleFinale").value = totaleF + "€";

    return totaleF;
}

// Azzera il modulo chiedendo conferma
function resetModulo() {
    if (confirm("Vuoi azzerare il modulo?")) {
        document.getElementById("qta1").value = 0;
        document.getElementById("qta2").value = 0;
        document.getElementById("qta3").value = 0;
        document.getElementById("qta4").value = 0;
        document.getElementById("tot1").value = 0;
        document.getElementById("tot2").value = 0;
        document.getElementById("tot3").value = 0;
        document.getElementById("tot4").value = 0;
        document.getElementById("totaleFinale").value = 0;
        document.getElementById("email").value = "";
        document.getElementById("pagamento").value = "contanti";
        document.getElementById("si").checked = true;
    }
}

// Invia l'ordine con messaggio riassuntivo
function inviaOrdine() {
    let totale = calcolaTotale();
    if (totale === undefined) return;

    let email = document.getElementById("email").value;
    let pag = document.getElementById("pagamento").value;

    // Validazione email
    if (email.indexOf("@") === -1) {
        alert("Email non valida: deve essere presente la @.");
        return;
    }
   
    alert("Grazie per il suo ordine di " + totale + "€, il pagamento avverrà tramite " + pag + ". Riceverà notifiche all'indirizzo " + email + ".");
}