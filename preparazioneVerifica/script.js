// [cite: 11-23] Dati degli articoli
var articoli = [
    { nome: "mouse", prezzo: 16.00 },
    { nome: "tastiera", prezzo: 25.00 },
    { nome: "stampante", prezzo: 350.00 },
    { nome: "scanner", prezzo: 200.00 }
];

// Funzione base per calcolare i totali 
function calcolaTotale() {
    // Recupero i valori semplici dalle caselle di testo
    let q1 = document.getElementById("qta1").value;
    let q2 = document.getElementById("qta2").value;
    let q3 = document.getElementById("qta3").value;
    let q4 = document.getElementById("qta4").value;

    // Calcolo i subtotali moltiplicando quantità * prezzo
    let t1 = q1 * articoli[0].prezzo;
    let t2 = q2 * articoli[1].prezzo;
    let t3 = q3 * articoli[2].prezzo;
    let t4 = q4 * articoli[3].prezzo;

    // Mostro i risultati nelle caselle "Totale" della tabella
    document.getElementById("tot1").value = t1 + "€";
    document.getElementById("tot2").value = t2 + "€";
    document.getElementById("tot3").value = t3 + "€";
    document.getElementById("tot4").value = t4 + "€";

    // Calcolo e mostro il totale finale
    let totaleF = t1 + t2 + t3 + t4;
    document.getElementById("totaleFinale").value = totaleF + "€";
    
    return totaleF;
}

// Funzione per azzerare tutto 
function resetModulo() {
    if (confirm("Vuoi azzerare tutto?")) {
        location.reload(); // Il modo più semplice per resettare tutto ai valori iniziali
    }
}

// Funzione per inviare l'ordine [cite: 5]
function inviaOrdine() {
    let totale = calcolaTotale();
    let email = document.getElementById("email").value;
    
    // Recupero il testo del pagamento selezionato
    let pag = document.getElementById("pagamento").value;
    
    // Controllo email semplificato (solo presenza @) 
    if (email.indexOf("@") == -1) {
        alert("Email non valida!");
        return;
    }

    // Messaggio finale [cite: 5]
    alert("Grazie per il suo ordine di " + totale + "€, il pagamento avverrà tramite " + pag + ". Riceverà notifiche all'indirizzo " + email);
}

// Colleghiamo la funzione al pulsante Invia presente nell'HTML
document.querySelector("button[type='button']").onclick = inviaOrdine;