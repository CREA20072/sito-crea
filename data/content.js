/**
 * ================================================================
 *  CREA 20072 — FILE DATI DEL SITO
 *  Percorso: data/content.js
 * ================================================================
 *
 *  ✏️  QUESTO È L'UNICO FILE CHE DEVI MODIFICARE.
 *
 *  Come fare una modifica:
 *  1. Apri questo file su GitHub (o PagesCMS)
 *  2. Trova la sezione che ti interessa (es. "PROSSIMO EVENTO")
 *  3. Cambia solo il testo tra virgolette
 *  4. Salva
 *
 *  ⚠️  ATTENZIONE: non cancellare mai le virgole, le virgolette
 *      o le parentesi graffe. Modificare solo il testo all'interno.
 *
 * ================================================================
 */

window.DATA_STORE = {

    /* ============================================================
       IMPOSTAZIONI GENERALI
       ============================================================ */
    settings: {
        logo: "logo.png",                   // Nome del file logo (nella cartella principale)
        brandColor: "#E3A500",              // Colore giallo miele — non modificare
        formspreeUrl: ""                    // Lascia vuoto oppure incolla qui il tuo URL Formspree
                                            // es: "https://formspree.io/f/xyzabcde"
    },

    /* ============================================================
       COPERTINA (HERO)
       ============================================================ */
    hero: {
        title: "Non aspettiamo che succeda qualcosa. <span class='text-crea-honey whitespace-nowrap'>Lo organizziamo.</span>",
        subtitle: "Eventi, cultura e momenti per famiglie e cittadini che vogliono vivere davvero Pieve Emanuele.",
        cta: "Guarda cosa stiamo preparando 🔥",
        bg: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000&auto=format&fit=crop"
        // Per usare un'immagine tua: carica il file e scrivi solo il nome, es: bg: "hero.jpg"
    },

    /* ============================================================
       SEZIONE "CHI SIAMO"
       ============================================================ */
    about: {
        title: "Perché lo facciamo",
        text: "CREA 20072 nasce dalla voglia concreta di fare qualcosa per Pieve Emanuele. Siamo genitori, amici e cittadini che hanno scelto di organizzare ciò che spesso si dice manchi: occasioni per incontrarsi e stare insieme.",
        tagline: "Un progetto indipendente, costruito con le nostre forze.",
        pillars: [
            { icon: "users",    t: "Comunità",    d: "Creiamo occasioni per incontrarsi." },
            { icon: "sparkles", t: "Creatività",  d: "Trasformiamo idee in eventi." },
            { icon: "heart",    t: "Condivisione", d: "Costruiamo momenti che restano." }
        ]
    },

    /* ============================================================
       DECALOGO
       I valori di CREA 20072. Puoi modificare titolo e descrizione,
       ma mantieni sempre 10 elementi nell'elenco.
       ============================================================ */
    decalogo: {
        title: "Il Decalogo di CREA 20072",
        subtitle: "I valori che ci guidano ogni giorno",
        items: [
            { n: "01", t: "Rispettiamo gli spazi",    d: "Prendiamoci cura dei luoghi che ci ospitano, come fossero casa nostra.",         i: "home" },
            { n: "02", t: "Salutiamo con un sorriso", d: "La gentilezza è contagiosa: facciamola circolare.",                              i: "smile" },
            { n: "03", t: "I bambini al centro",      d: "Mettiamo i più piccoli al centro, perché da loro nasce il futuro.",              i: "baby" },
            { n: "04", t: "Collaboriamo",             d: "Ogni evento funziona meglio quando ognuno dà il proprio contributo.",            i: "handshake" },
            { n: "05", t: "Ascoltiamo con attenzione",d: "Le idee crescono quando ci ascoltiamo davvero.",                                 i: "ear" },
            { n: "06", t: "Rispettiamo gli orari",    d: "Piccole regole rendono i momenti insieme più sereni.",                           i: "clock" },
            { n: "07", t: "Telefoni con misura",      d: "Viviamo l'evento con presenza e attenzione, senza distrazioni.",                 i: "smartphone" },
            { n: "08", t: "Tono sereno, sempre",      d: "Le differenze si affrontano con calma, rispetto e dialogo.",                    i: "message-circle" },
            { n: "09", t: "Facciamo spazio a tutti",  d: "Una comunità vera include, accoglie e valorizza ogni persona.",                  i: "users" },
            { n: "10", t: "Torniamo migliori",        d: "Se stiamo bene insieme, stiamo costruendo qualcosa di importante.",              i: "award" }
        ]
    },

    /* ============================================================
       PROSSIMO EVENTO IN EVIDENZA
       ✏️  Questa è la sezione che aggiorni più spesso!
       ============================================================ */
    featuredEvent: {
        title: "Magic Show",                                // Nome dell'evento
        sub: "Mago Daniel",                                 // Sottotitolo / nome artista
        day: "01",                                          // Giorno (2 cifre: "01", "15", "28"...)
        month: "MAR",                                       // Mese abbreviato in maiuscolo
        fullDate: "Domenica 1 Marzo 2026 – Ore 16:00",     // Data completa
        place: "Auditorium Sant'Alessandro",                // Luogo
        prices: "10€ – Spettacolo + Merenda",              // Prezzi
        desc: "Preparati a restare a bocca aperta! Uno spettacolo magico per famiglie, dove l'impossibile diventa realtà e lo stupore è garantito per grandi e piccoli.",
        wa: "https://wa.me/393402231735",                  // Link WhatsApp prenotazioni
        img: "mago.png"                                    // Locandina (carica il file e scrivi il nome)
    },

    /* ============================================================
       ARCHIVIO EVENTI PASSATI
       Per aggiungere un evento: copia uno dei blocchi { ... },
       incollalo in fondo all'elenco (prima del ] finale),
       aggiungi una virgola dopo il blocco precedente
       e cambia l'"id" con un numero progressivo.
       
       Tag disponibili: "famiglie" | "tradizioni" | "spettacoli"
       ============================================================ */
    archive: [
        {
            id: 1,
            tag: "tradizioni",
            t: "Falò di Sant'Antonio",
            d: "Gennaio 2026",
            n: "150+ Partecipanti",
            desc: "La tradizione che scalda l'inverno.",
            fullDesc: "Una serata magica attorno al fuoco per riscoprire le antiche tradizioni contadine. Tra vin brulé, chiacchiere e il calore della comunità, abbiamo celebrato Sant'Antonio come si faceva una volta.",
            img: "falo.png",
            gallery: ["falo.png", "logo.png"]
        },
        {
            id: 2,
            tag: "famiglie",
            t: "Festa di Natale",
            d: "Dicembre 2025",
            n: "100 Bambini",
            desc: "Musica e gioia per i più piccoli.",
            fullDesc: "Un pomeriggio di festa dedicato ai più piccoli, con laboratori creativi, canti natalizi e l'arrivo a sorpresa di Babbo Natale che ha portato doni per tutti.",
            img: "natale.png",
            gallery: ["natale.png", "logo.png"]
        },
        {
            id: 3,
            tag: "spettacoli",
            t: "Serata Cinema",
            d: "Novembre 2025",
            n: "Sold Out",
            desc: "Cinema condiviso in Auditorium.",
            fullDesc: "Il cinema come momento di aggregazione. Abbiamo riempito l'auditorium per una proiezione speciale, seguita da un momento conviviale tra grandi e piccoli.",
            img: "cinema.png",
            gallery: ["cinema.png", "logo.png"]
        },
        {
            id: 4,
            tag: "famiglie",
            t: "Halloween Party",
            d: "Ottobre 2025",
            n: "120+ Maschere",
            desc: "La notte più spaventosa.",
            fullDesc: "Dolcetto o scherzetto? Una sfilata in maschera per le vie di Pieve Emanuele che ha colorato di allegria (e qualche brivido) il nostro quartiere.",
            img: "https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?w=800&q=70&auto=format",
            gallery: ["logo.png"]
        }
    ],

    /* ============================================================
       FOOTER
       ============================================================ */
    footer: {
        email: "accrea20072@gmail.com",
        quote: "Ogni evento è un passo in più per rendere Pieve Emanuele un luogo vivo, accogliente e partecipato.",
        socials: [
            { icon: "facebook",  url: "https://www.facebook.com/profile.php?id=61583120865063" },
            { icon: "instagram", url: "https://www.instagram.com/crea20072/" }
        ]
    }

};
