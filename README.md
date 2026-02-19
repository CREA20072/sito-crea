# CREA 20072 — Guida al Sito

## Struttura dei file

```
📁 Sito/
├── index.html          ← Il sito. NON modificare.
├── logo.png            ← Il logo dell'associazione
├── 📁 data/
│   └── content.js      ← ✏️ L'UNICO file che modifichi tu
```

## Come aggiornare i contenuti

### 1. Cambiare il prossimo evento
Apri `data/content.js` e cerca `PROSSIMO EVENTO IN EVIDENZA`.
Modifica solo i valori tra virgolette.

### 2. Aggiungere un evento all'archivio
Cerca `ARCHIVIO EVENTI PASSATI` in `data/content.js`.
Copia questo blocco e incollalo in fondo alla lista (prima del `]`):

```js
,{
    id: 5,                         // ← numero progressivo
    tag: "spettacoli",             // famiglie | tradizioni | spettacoli
    t: "Nome Evento",
    d: "Mese Anno",
    n: "Info extra (es. Sold Out)",
    desc: "Descrizione breve.",
    fullDesc: "Descrizione completa lunga.",
    img: "nomefile.png",           // carica il file nella cartella principale
    gallery: ["nomefile.png"]
}
```

### 3. Caricare le immagini
Carica i file immagine nella cartella principale del sito (stessa posizione di `logo.png`).
Poi scrivi solo il nome del file in `content.js`, es: `img: "mago.png"`.

---

## Attivare il form contatti (opzionale)

Il form è già funzionante come base: se un visitatore lo compila, si aprirà la sua app email.

Per ricevere i messaggi direttamente nella tua casella senza che il visitatore debba avere un client email:

1. Registrati su **https://formspree.io** (gratuito, 50 messaggi/mese)
2. Crea un nuovo form → copia il link (es: `https://formspree.io/f/xyzabcde`)
3. In `data/content.js` trova `formspreeUrl: ""` e incolla il link tra le virgolette

---

## Aggiungere una nuova categoria di eventi

In `data/content.js`, nel campo `tag` di ogni evento puoi usare:
- `"famiglie"` — eventi per bambini e famiglie
- `"tradizioni"` — eventi legati alle tradizioni locali
- `"spettacoli"` — spettacoli e serate

Se vuoi aggiungere una nuova categoria, scrivila nel `tag` e poi comunicamelo: aggiornerò anche i bottoni filtro in `index.html`.
