/* Kairós — ES/EN. Persists in localStorage. No extra pages. */
(function () {
  var KEY = "kairos-lang";
  var dict = {
    es: {
      "nav.home": "Home",
      "nav.music": "Música",
      "nav.about": "Sobre",
      "nav.blog": "Blog",
      "nav.aria": "Principal",
      "home.title": "Kairós — The Kairos Rock",
      "home.desc": "Kairós. Rock crudo. El momento justo.",
      "home.tagline": "El momento justo. Amplificado.",
      "home.listen": "Escuchar",
      "home.who": "Quiénes somos",
      "home.now": "Ahora",
      "home.card1.title": "Rock sin filtros",
      "home.card1.body": "Guitarras densas. Voces al límite. Sin pose.",
      "home.card2.title": "Próximo álbum",
      "home.card2.body": "Thrash de los 80. Actualizado a Kairós. Detalles en el <a href=\"blog/index.html\">blog</a>.",
      "music.title": "Música — Kairós",
      "music.desc": "Escucha a Kairós en Spotify.",
      "music.h1": "Música",
      "music.lead": "Dale play. Sube el volumen.",
      "music.spotify": "Spotify — Kairós",
      "music.album": "Unmeasured — álbum",
      "about.title": "Sobre Kairós — The Kairos Rock",
      "about.desc": "Sobre el proyecto rock Kairós.",
      "about.h1": "Sobre Kairós",
      "about.lead": "Un instante. Una canción. Un golpe.",
      "about.name.title": "El nombre",
      "about.name.body": "Kairós: el momento oportuno. No el reloj. La chispa.",
      "about.sound.title": "El sonido",
      "about.sound.body": "Rock directo. Oscuro. Sin relleno. The Kairos Rock.",
      "about.idea.title": "La idea",
      "about.idea.body": "Menos palabras. Más distorsión. Escena propia.",
      "blog.title": "Blog — Kairós",
      "blog.desc": "Notas y golpes del proyecto Kairós.",
      "blog.h1": "Blog",
      "blog.lead": "Pocos posts. Mucho ruido.",
      "blog.back": "← Volver al blog",
      "blog.label": "Blog",
      "post.primer.title": "Primer ensayo a sangre — Blog Kairós",
      "post.primer.desc": "El primer ensayo de Kairós: crudo y necesario.",
      "post.primer.h1": "Primer ensayo a sangre",
      "post.primer.p1": "Cuatro paredes. Un amp al máximo. Ninguna canción lista.",
      "post.primer.p2": "Salimos rotos. Y con un riff que se queda.",
      "post.ruido.title": "Ruido en la sala — Blog Kairós",
      "post.ruido.desc": "Feedback, pedales y el sonido de Kairós.",
      "post.ruido.h1": "Ruido en la sala",
      "post.ruido.p1": "Feedback. Pedales. Un bajo que empuja.",
      "post.ruido.p2": "Eso es Kairós cuando nadie graba.",
      "post.espera.title": "Kairós no espera — Blog Kairós",
      "post.espera.desc": "El momento justo no se repite.",
      "post.espera.h1": "Kairós no espera",
      "post.espera.p1": "El momento justo no se repite.",
      "post.espera.p2": "Por eso tocamos ahora. O no tocamos.",
      "post.despues.title": "Después del ensayo — Blog Kairós",
      "post.despues.desc": "Cuando apagamos el amp, el riff sigue.",
      "post.despues.h1": "Después del ensayo",
      "post.despues.p1": "El local huele a cable quemado. Nadie habla.",
      "post.despues.p2": "Apagamos el amp. El riff se queda.",
      "post.unmeasured.title": "Unmeasured — Blog Kairós",
      "post.unmeasured.desc": "Hoy sale Unmeasured, el álbum de Kairós.",
      "post.unmeasured.h1": "Unmeasured",
      "post.unmeasured.p1": "Hoy sale el álbum. Se llama Unmeasured.",
      "post.unmeasured.p2": "Siete cortes. Sin relleno. El momento, medido a golpes.",
      "post.unmeasured.link": "Escúchalo en Spotify",
      "post.proximo.title": "El próximo álbum — Blog Kairós",
      "post.proximo.desc": "Kairós trabaja el próximo álbum: thrash de los 80, actualizado.",
      "post.proximo.h1": "El próximo álbum",
      "post.proximo.p1": "Estamos dentro del próximo álbum.",
      "post.proximo.p2": "Thrash de los 80. Actualizado a Kairós: más filo, menos pose.",
      "post.proximo.p3": "Hoy solo el aviso. El resto, a golpes.",
      "post.golpe.title": "Primer golpe — Blog Kairós",
      "post.golpe.desc": "El riff de apertura del próximo álbum ya está.",
      "post.golpe.h1": "Primer golpe",
      "post.golpe.p1": "Encajamos el riff de apertura.",
      "post.golpe.p2": "Downpicking seco. Sin estribillo. Solo el ataque.",
      "post.golpe.p3": "Unmeasured midió el momento. Esto carga.",
      "post.bateria.title": "La batería — Blog Kairós",
      "post.bateria.desc": "La batería contesta el riff de apertura.",
      "post.bateria.h1": "La batería",
      "post.bateria.p1": "La batería entra detrás del riff.",
      "post.bateria.p2": "Stomp seco. Sin click. El 2 suena en la sala.",
      "post.bateria.p3": "Todavía no hay estribillo. Solo el golpe que contesta.",
      "post.bajo.title": "El bajo — Blog Kairós",
      "post.bajo.desc": "El bajo se encaja bajo el riff y el stomp.",
      "post.bajo.h1": "El bajo",
      "post.bajo.p1": "El bajo se encaja bajo el riff y el stomp.",
      "post.bajo.p2": "Grueso. Un poco tarde. Casi sin ruido de púa.",
      "post.bajo.p3": "Sostiene el suelo para que las guitarras sigan secas. Todavía no hay estribillo.",
      "post.dos.title": "Dos guitarras — Blog Kairós",
      "post.dos.desc": "La segunda guitarra se encaja encima del riff.",
      "post.dos.h1": "Dos guitarras",
      "post.dos.p1": "Encajan la segunda guitarra encima del riff.",
      "post.dos.p2": "Misma púa. Misma cara. Un poco más ancha.",
      "post.dos.p3": "Sin lead. Sin estribillo. Solo el ataque en dos lados.",
      "date.primer": "12 ene 2026",
      "date.ruido": "3 mar 2026",
      "date.espera": "18 jun 2026",
      "date.despues": "7 sep 2026",
      "date.unmeasured": "11 sep 2026",
      "date.proximo": "14 sep 2026",
      "date.golpe": "14 sep 2026",
      "date.bateria": "15 sep 2026",
      "date.bajo": "16 sep 2026",
      "date.dos": "17 sep 2026"
    },
    en: {
      "nav.home": "Home",
      "nav.music": "Music",
      "nav.about": "About",
      "nav.blog": "Blog",
      "nav.aria": "Primary",
      "home.title": "Kairós — The Kairos Rock",
      "home.desc": "Kairós. Raw rock. The right moment.",
      "home.tagline": "The right moment. Amplified.",
      "home.listen": "Listen",
      "home.who": "Who we are",
      "home.now": "Now",
      "home.card1.title": "Rock with no filter",
      "home.card1.body": "Dense guitars. Voices at the edge. No pose.",
      "home.card2.title": "Next album",
      "home.card2.body": "80s thrash. Updated for Kairós. Details on the <a href=\"blog/index.html\">blog</a>.",
      "music.title": "Music — Kairós",
      "music.desc": "Listen to Kairós on Spotify.",
      "music.h1": "Music",
      "music.lead": "Hit play. Turn it up.",
      "music.spotify": "Spotify — Kairós",
      "music.album": "Unmeasured — album",
      "about.title": "About Kairós — The Kairos Rock",
      "about.desc": "About the Kairós rock project.",
      "about.h1": "About Kairós",
      "about.lead": "One instant. One song. One hit.",
      "about.name.title": "The name",
      "about.name.body": "Kairos: the opportune moment. Not the clock. The spark.",
      "about.sound.title": "The sound",
      "about.sound.body": "Direct rock. Dark. No filler. The Kairos Rock.",
      "about.idea.title": "The idea",
      "about.idea.body": "Fewer words. More distortion. Our own scene.",
      "blog.title": "Blog — Kairós",
      "blog.desc": "Notes and hits from the Kairós project.",
      "blog.h1": "Blog",
      "blog.lead": "Few posts. A lot of noise.",
      "blog.back": "← Back to the blog",
      "blog.label": "Blog",
      "post.primer.title": "First rehearsal, raw — Kairós Blog",
      "post.primer.desc": "Kairós’ first rehearsal: raw and necessary.",
      "post.primer.h1": "First rehearsal, raw",
      "post.primer.p1": "Four walls. An amp wide open. No song ready.",
      "post.primer.p2": "We left wrecked. And with a riff that stays.",
      "post.ruido.title": "Noise in the room — Kairós Blog",
      "post.ruido.desc": "Feedback, pedals, and the sound of Kairós.",
      "post.ruido.h1": "Noise in the room",
      "post.ruido.p1": "Feedback. Pedals. A bass that pushes.",
      "post.ruido.p2": "That’s Kairós when nobody is recording.",
      "post.espera.title": "Kairos doesn’t wait — Kairós Blog",
      "post.espera.desc": "The right moment does not repeat.",
      "post.espera.h1": "Kairos doesn’t wait",
      "post.espera.p1": "The right moment does not repeat.",
      "post.espera.p2": "That’s why we play now. Or we don’t play.",
      "post.despues.title": "After rehearsal — Kairós Blog",
      "post.despues.desc": "When we kill the amp, the riff stays.",
      "post.despues.h1": "After rehearsal",
      "post.despues.p1": "The room smells like burnt cable. Nobody talks.",
      "post.despues.p2": "We kill the amp. The riff stays.",
      "post.unmeasured.title": "Unmeasured — Kairós Blog",
      "post.unmeasured.desc": "Unmeasured, the Kairós album, is out today.",
      "post.unmeasured.h1": "Unmeasured",
      "post.unmeasured.p1": "The album is out today. It’s called Unmeasured.",
      "post.unmeasured.p2": "Seven tracks. No filler. The moment, measured in hits.",
      "post.unmeasured.link": "Listen on Spotify",
      "post.proximo.title": "The next album — Kairós Blog",
      "post.proximo.desc": "Kairós is working the next album: 80s thrash, updated.",
      "post.proximo.h1": "The next album",
      "post.proximo.p1": "We're inside the next album.",
      "post.proximo.p2": "80s thrash. Updated for Kairós: more edge, less pose.",
      "post.proximo.p3": "Today just the signal. The rest, hit by hit.",
      "post.golpe.title": "First hit — Kairós Blog",
      "post.golpe.desc": "The next album's opening riff is locked.",
      "post.golpe.h1": "First hit",
      "post.golpe.p1": "We locked the opening riff.",
      "post.golpe.p2": "Dry downpicking. No chorus yet. Just the attack.",
      "post.golpe.p3": "Unmeasured measured the moment. This one charges.",
      "post.bateria.title": "The drums — Kairós Blog",
      "post.bateria.desc": "The drums answer the opening riff.",
      "post.bateria.h1": "The drums",
      "post.bateria.p1": "The drums come in behind the riff.",
      "post.bateria.p2": "Dry stomp. No click. The 2 hits in the room.",
      "post.bateria.p3": "Still no chorus. Just the hit that answers.",
      "post.bajo.title": "The bass — Kairós Blog",
      "post.bajo.desc": "The bass locks under the riff and the stomp.",
      "post.bajo.h1": "The bass",
      "post.bajo.p1": "The bass locks under the riff and the stomp.",
      "post.bajo.p2": "Thick. Slightly late. Almost no pick noise.",
      "post.bajo.p3": "It holds the floor so the guitars stay dry. Still no chorus.",
      "post.dos.title": "Two guitars — Kairós Blog",
      "post.dos.desc": "The second guitar locks on top of the riff.",
      "post.dos.h1": "Two guitars",
      "post.dos.p1": "The second guitar locks on top of the riff.",
      "post.dos.p2": "Same pick. Same face. A little wider.",
      "post.dos.p3": "No lead. No chorus. Just the attack on both sides.",
      "date.primer": "12 Jan 2026",
      "date.ruido": "3 Mar 2026",
      "date.espera": "18 Jun 2026",
      "date.despues": "7 Sep 2026",
      "date.unmeasured": "11 Sep 2026",
      "date.proximo": "14 Sep 2026",
      "date.golpe": "14 Sep 2026",
      "date.bateria": "15 Sep 2026",
      "date.bajo": "16 Sep 2026",
      "date.dos": "17 Sep 2026"
    }
  };

  function getLang() {
    var stored = localStorage.getItem(KEY);
    if (stored === "en" || stored === "es") return stored;
    var nav = (navigator.language || "es").toLowerCase();
    return nav.indexOf("en") === 0 ? "en" : "es";
  }

  function apply(lang) {
    var pack = dict[lang] || dict.es;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!pack[key]) return;
      if (el.hasAttribute("data-i18n-html")) el.innerHTML = pack[key];
      else el.textContent = pack[key];
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var spec = el.getAttribute("data-i18n-attr").split(":");
      var attr = spec[0];
      var key = spec[1];
      if (pack[key]) el.setAttribute(attr, pack[key]);
    });
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      var on = btn.getAttribute("data-set-lang") === lang;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.classList.toggle("is-active", on);
    });
  }

  function setLang(lang) {
    localStorage.setItem(KEY, lang);
    apply(lang);
  }

  window.KairosI18n = { apply: apply, setLang: setLang, getLang: getLang };

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-set-lang]");
    if (!btn) return;
    e.preventDefault();
    setLang(btn.getAttribute("data-set-lang"));
  });

  apply(getLang());
})();
