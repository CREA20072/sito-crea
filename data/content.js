/**
 * DATA_STORE: Contenuti del sito.
 * Salva in: /data/content.js
 */

window.DATA_STORE = {
    settings: {
        logo: "logo.png", 
        brandColor: "#E3A500"
    },
    hero: {
        title: "Non aspettiamo che succeda qualcosa. <span class='text-honey whitespace-nowrap'>Lo organizziamo.</span>",
        subtitle: "Eventi, cultura e momenti per famiglie e cittadini che vogliono vivere davvero Pieve Emanuele.",
        cta: "Guarda cosa stiamo preparando 🔥",
        bg: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000&auto=format&fit=crop"
    },
    about: {
        title: "Perché lo facciamo",
        text: "CREA 20072 nasce dalla voglia concreta di fare qualcosa per Pieve Emanuele. Siamo genitori, amici e cittadini che hanno scelto di organizzare ciò che spesso si dice manchi: occasioni per incontrarsi e stare insieme.",
        tagline: "Un progetto indipendente, costruito con le nostre forze.",
        pillars: [
            { icon: "users", t: "Comunità", d: "Creiamo occasioni per incontrarsi." },
            { icon: "sparkles", t: "Creatività", d: "Trasformiamo idee in eventi." },
            { icon: "heart", t: "Condivisione", d: "Costruiamo momenti che restano." }
        ]
    },
    decalogo: {
        title: "Il Decalogo di CREA 20072",
        subtitle: "I valori che ci guidano ogni giorno",
        items: [
            { n: "01", t: "Rispettiamo gli spazi", d: "Prendiamoci cura dei luoghi che ci ospitano, come fossero casa nostra.", i: "home" },
            { n: "02", t: "Salutiamo con un sorriso", d: "La gentilezza è contagiosa: facciamola circolare.", i: "smile" },
            { n: "03", t: "I bambini al centro", d: "Mettiamo i più piccoli al centro, perché da loro nasce il futuro.", i: "baby" },
            { n: "04", t: "Collaboriamo", d: "Ogni evento funziona meglio quando ognuno dà il proprio contributo.", i: "handshake" },
            { n: "05", t: "Ascoltiamo con attenzione", d: "Le idee crescono quando ci ascoltiamo davvero.", i: "ear" },
            { n: "06", t: "Rispettiamo gli orari", d: "Piccole regole rendono i momenti insieme più sereni.", i: "clock" },
            { n: "07", t: "Telefoni con misura", d: "Viviamo l’evento con presenza e attenzione, senza distrazioni.", i: "smartphone" },
            { n: "08", t: "Tono sereno, sempre", d: "Le differenze si affrontano con calma, rispetto e dialogo.", i: "message-circle" },
            { n: "09", t: "Facciamo spazio a tutti", d: "Una comunità vera include, accoglie e valorizza ogni persona.", i: "users" },
            { n: "10", t: "Torniamo a casa migliori", d: "Se stiamo bene insieme, stiamo costruendo qualcosa di importante.", i: "award" }
        ]
    },
    featuredEvent: {
        title: "Magic Show",
        sub: "Mago Daniel",
        day: "01",
        month: "MAR",
        fullDate: "Domenica 1 Marzo - Ore 16:00",
        place: "Auditorium Sant'Alessandro",
        prices: "10€ bambini – 5€ adulti",
        desc: "Preparati a restare a bocca aperta! Uno spettacolo magico per famiglie, dove l'impossibile diventa realtà e lo stupore è garantito per grandi e piccoli.",
        wa: "https://wa.me/39123456789", 
        img: "" 
    },
    archive: [
        { tag: "tradizioni", t: "Falò di Sant'Antonio", d: "Gennaio 2026", n: "150+ Partecipanti", desc: "La tradizione che scalda l'inverno.", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=70&auto=format" },
        { id: 2, tag: "famiglie", t: "Festa di Natale", d: "Dicembre 2025", n: "100 Bambini", desc: "Musica e gioia per i piccoli.", img: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=800&q=70&auto=format" },
        { id: 3, tag: "spettacoli", t: "Serata Cinema", d: "Novembre 2025", n: "Sold Out", desc: "Cinema condiviso in Auditorium.", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=70&auto=format" },
        { id: 4, tag: "famiglie", t: "Halloween Party", d: "Ottobre 2025", n: "120+ Maschere", desc: "La notte più spaventosa.", img: "https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?w=800&q=70&auto=format" }
    ],
    footer: {
        email: "accrea20072@gmail.com",
        socials: [
            { icon: "facebook", url: "https://www.facebook.com/profile.php?id=61583120865063" },
            { icon: "instagram", url: "https://www.instagram.com/crea20072/" }
        ],
        quote: "Ogni evento è un passo in più per rendere Pieve Emanuele un luogo vivo, accogliente e partecipato."
    }
};