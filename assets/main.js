/* ============================================================
   FIIJA 2026 — Script partagé
   - Injection de l'en-tête (navigation) et du pied de page
   - Menu mobile, barre de progression, apparitions, compteurs
   - Onglets du programme, rotation des statistiques
   ============================================================ */
(function () {
    'use strict';

    const FORM_URL = 'https://forms.gle/igxkorvhSuzKMPHD8';
    const EMAIL = 'apecguinee2023@gmail.com';

    const PAGES = [
        { href: 'index.html',     label: 'Accueil',      key: 'accueil' },
        { href: 'apec.html',      label: 'À Propos',     key: 'apec' },
        { href: 'piliers.html',   label: 'Les Piliers',  key: 'piliers' },
        { href: 'edition.html',   label: 'Édition 2026', key: 'edition' },
        { href: 'programme.html', label: 'Programme',    key: 'programme' },
        { href: 'contact.html',   label: 'Contact',      key: 'contact' },
    ];

    const current = document.body.dataset.page || 'accueil';

    /* -------------------- En-tête -------------------- */
    const desktopLinks = PAGES.map(p => `
        <a href="${p.href}" class="${p.key === current ? 'text-[#C59B27]' : 'hover:text-[#C59B27]'} transition-colors"${p.key === current ? ' aria-current="page"' : ''}>${p.label}</a>`).join('');

    const mobileLinks = PAGES.map(p => `
        <a href="${p.href}" class="mobile-link rounded-xl px-4 py-3 ${p.key === current ? 'bg-white/10 text-[#C59B27]' : 'hover:bg-white/10'}">${p.label}</a>`).join('');

    const headerHTML = `
    <div id="scrollProgress" class="fixed left-0 top-0 z-[60] h-1 w-0 bg-[#C59B27] transition-[width] duration-150"></div>
    <header class="sticky top-0 z-50 bg-[#063227] text-white shadow-lg border-b border-b-[#C59B27]/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <a href="index.html" class="flex items-center gap-3 group">
                <img src="assets/logo.png" alt="Logo FIIJA" class="h-14 w-14 object-contain rounded-full border border-[#C59B27]" onerror="this.style.display='none'">
                <span class="font-serif text-2xl font-bold tracking-wider text-[#C59B27] group-hover:text-white transition-colors">FIIJA</span>
            </a>
            <nav class="hidden md:flex items-center gap-7 lg:gap-8 font-medium text-sm tracking-wide">${desktopLinks}</nav>
            <div class="flex items-center gap-4">
                <a href="${FORM_URL}" target="_blank" rel="noopener noreferrer" class="hidden sm:inline-flex bg-[#C59B27] text-[#063227] hover:bg-white hover:text-[#063227] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md">Participer</a>
                <button id="menuToggle" type="button" class="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#C59B27] transition hover:bg-white/10" aria-label="Ouvrir le menu" aria-controls="mobileMenu" aria-expanded="false">
                    <span class="menu-icon text-2xl leading-none">☰</span>
                </button>
            </div>
        </div>
        <div id="mobileMenu" class="mobile-menu md:hidden border-t border-white/10 bg-[#04221A]">
            <nav class="max-w-7xl mx-auto px-4 py-4 grid gap-2 text-sm font-semibold">${mobileLinks}
                <a href="${FORM_URL}" target="_blank" rel="noopener noreferrer" class="mt-2 rounded-xl bg-[#C59B27] px-4 py-3 text-center text-[#063227]">Participer</a>
            </nav>
        </div>
    </header>`;

    /* -------------------- Pied de page -------------------- */
    const footerHTML = `
    <footer class="bg-[#04221A] text-white pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
            <div>
                <div class="flex items-center gap-3 mb-4">
                    <img src="assets/logo.png" alt="Logo FIIJA" class="h-12 w-12 object-contain rounded-full border border-[#C59B27]" onerror="this.style.display='none'">
                    <span class="font-serif text-xl font-bold text-[#C59B27]">FIIJA</span>
                </div>
                <p class="text-sm text-gray-400 max-w-xs leading-relaxed">
                    Festival International de l'Intégration de la Jeunesse Africaine — une initiative d'APEC Internationale.
                </p>
                <p class="mt-4 font-serif italic text-sm text-[#e9d7a1]">« Une jeunesse intégrée pour une Afrique souveraine, pacifique et prospère. »</p>
            </div>
            <div>
                <h4 class="text-xs uppercase tracking-widest text-[#C59B27] font-bold mb-4">Navigation</h4>
                <ul class="space-y-2 text-sm text-gray-300">
                    ${PAGES.map(p => `<li><a href="${p.href}" class="hover:text-white transition-colors">${p.label}</a></li>`).join('')}
                </ul>
            </div>
            <div>
                <h4 class="text-xs uppercase tracking-widest text-[#C59B27] font-bold mb-4">Contacts Officiels</h4>
                <div class="text-sm text-gray-300 space-y-2">
                    <p>📧 <a href="mailto:${EMAIL}" class="text-white hover:underline break-all">${EMAIL}</a></p>
                    <p>📞 <a href="tel:+224628484784" class="text-white hover:underline">+224 628 48 47 84</a></p>
                    <p>📞 <a href="tel:+224627534249" class="text-white hover:underline">+224 627 53 42 49</a></p>
                    <p class="pt-2 text-gray-400">Conakry, République de Guinée 🇬🇳</p>
                </div>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between text-xs text-gray-500 gap-2">
            <p>© 2026 FIIJA &amp; APEC Internationale. Tous droits réservés.</p>
            <p>Reconnue N° 078/MATD/CAB/DNAPROMA — Guinée.</p>
        </div>
    </footer>`;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    /* -------------------- Menu mobile -------------------- */
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.querySelector('.menu-icon');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuIcon.textContent = isOpen ? '×' : '☰';
        });
        mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuIcon.textContent = '☰';
            });
        });
    }

    /* -------------------- Barre de progression -------------------- */
    const progress = document.getElementById('scrollProgress');
    function updateProgress() {
        if (!progress) return;
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        progress.style.width = `${percent}%`;
    }
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();

    /* -------------------- Apparition au défilement -------------------- */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    /* -------------------- Compteurs animés -------------------- */
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const counter = entry.target;
            const target = Number(counter.dataset.target);
            const duration = 1200;
            const start = performance.now();
            function tick(now) {
                const p = Math.min((now - start) / duration, 1);
                const value = Math.floor(target * (1 - Math.pow(1 - p, 3)));
                counter.textContent = `${value}+`;
                if (p < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
            counterObserver.unobserve(counter);
        });
    }, { threshold: 0.7 });
    document.querySelectorAll('.counter').forEach(counter => counterObserver.observe(counter));

    /* -------------------- Rotation des statistiques (héros) -------------------- */
    const highlightCards = document.querySelectorAll('.highlight-card');
    if (highlightCards.length) {
        let active = 0;
        setInterval(() => {
            highlightCards[active].classList.remove('is-active');
            active = (active + 1) % highlightCards.length;
            highlightCards[active].classList.add('is-active');
        }, 1800);
    }

    /* -------------------- Onglets du programme -------------------- */
    window.switchTab = function (tabId) {
        document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
        const panel = document.getElementById(tabId);
        if (panel) panel.classList.remove('hidden');
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('bg-[#C59B27]', 'text-white');
            btn.classList.add('bg-white', 'text-gray-600', 'hover:text-[#063227]');
            btn.setAttribute('aria-selected', 'false');
        });
        const activeBtn = document.getElementById('btn-' + tabId);
        if (activeBtn) {
            activeBtn.classList.add('bg-[#C59B27]', 'text-white');
            activeBtn.classList.remove('bg-white', 'text-gray-600', 'hover:text-[#063227]');
            activeBtn.setAttribute('aria-selected', 'true');
        }
    };

    document.querySelectorAll('.tab-btn').forEach((button, index, buttons) => {
        button.addEventListener('keydown', event => {
            if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
            event.preventDefault();
            const nextIndex = event.key === 'ArrowRight'
                ? (index + 1) % buttons.length
                : (index - 1 + buttons.length) % buttons.length;
            buttons[nextIndex].focus();
            window.switchTab(buttons[nextIndex].id.replace('btn-', ''));
        });
    });

    /* -------------------- Drapeaux fiables (Twemoji) --------------------
       Certains navigateurs (Chrome sous Linux/Windows) n'affichent pas les
       emojis-drapeaux. On les convertit en images SVG dans la section
       « Notre expansion » pour un rendu identique partout. */
    const expansion = document.getElementById('expansion');
    if (expansion) {
        const s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/@twemoji/api@15.1.0/dist/twemoji.min.js';
        s.crossOrigin = 'anonymous';
        s.onload = function () {
            if (window.twemoji) {
                window.twemoji.parse(expansion, { folder: 'svg', ext: '.svg', className: 'emoji' });
            }
        };
        document.head.appendChild(s);
    }
})();
