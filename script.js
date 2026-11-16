/* =========================================================
   CONFIGURAÇÃO — edite aqui para atualizar o portfólio
   ========================================================= */
const CONFIG = {
  github: 'vitorhugoramosd',
  emailUser: 'vitorhugoramosdossantos',
  emailHost: 'gmail.com',
  linkedin: '', // cole aqui a URL do seu LinkedIn para o botão aparecer
  roles: [
    'desenvolvedor de software',
    'C# e VB.NET em ERP de grande porte',
    'caçador de bugs em código legado',
    'pesquisador de LLMs em manutenção de software',
    'ex-suporte: entendo a dor do cliente',
  ],
};

const STACK = [
  ['C#', '#9b6bff'], ['VB.NET', '#5b8def'], ['.NET', '#7c5cff'], ['LinqToDB', '#4fc3a1'],
  ['SQL', '#f2a65a'], ['PostgreSQL', '#5a9bd8'], ['Java', '#f0803c'], ['Spring Boot', '#6cc24a'],
  ['JavaScript', '#e8d44d'], ['TypeScript', '#3d8bff'], ['React', '#5ed3f3'], ['Electron', '#8fd3e8'],
  ['Python', '#4b8bbe'], ['Supabase', '#3ecf8e'], ['Git', '#f1502f'], ['Docker', '#2496ed'],
];

/* Para adicionar um projeto: copie um bloco e ajuste os campos.
   tags = usadas no filtro; novo: true marca o selo "novo". */
const PROJECTS = [
  {
    icon: '🐞', title: 'Caça-Bug', accent: '#6ef3c0', wide: true, novo: true,
    desc: 'Jogo criado para este portfólio: você recebe o relato de um defeito e um trecho de C#, e precisa apontar a linha culpada em até 3 palpites. No fim, sua pontuação sai em Top-1, Top-3 e MRR — as mesmas métricas que uso no TCC para avaliar os LLMs.',
    tech: ['JavaScript', 'HTML/CSS', 'C# (nos desafios)'], tags: ['JavaScript'],
    links: [['Jogar agora →', 'caca-bug/']],
  },
  {
    icon: '🔬', title: 'TCC · LLMs na localização de falhas', accent: '#c58bff',
    desc: 'Material completo da execução piloto: seleção de defeitos, consultas enviadas aos modelos, respostas, métricas e testes que conferem os números publicados.',
    tech: ['Python', 'C#', 'LLMs', 'MRR / Top-N'], tags: ['Python', 'C# / .NET'],
    links: [['Código ↗', 'https://github.com/vitorhugoramosd/tcc-llm-localizacao-falhas-csharp']],
  },
  {
    icon: '🎬', title: 'VibeMovies', accent: '#ff8a65',
    desc: 'Escolha filmes pelo “clima” do momento, veja onde assistir e mantenha um diário de bordo. Recomendação determinística via metadados do TMDB — sem API paga de IA.',
    tech: ['ASP.NET Core', 'Clean Architecture', 'EF Core', 'TypeScript', 'PostgreSQL'], tags: ['C# / .NET', 'TypeScript'],
    links: [['Código ↗', 'https://github.com/vitorhugoramosd/VibeMovies-']],
  },
  {
    icon: '🎮', title: 'Blade Dash', accent: '#7ddc5a',
    desc: 'Launcher de jogos para Windows navegável pelo controle. Detecta jogos da Steam, Epic, Ubisoft, EA e Xbox, baixa capas e conta o tempo de jogo.',
    tech: ['Electron', 'JavaScript', 'Gamepad API'], tags: ['JavaScript'],
    links: [['Código ↗', 'https://github.com/vitorhugoramosd/InterfaceXbox360']],
  },
  {
    icon: '🤖', title: 'J.A.R.V.I.S. pessoal', accent: '#5ed3f3',
    desc: 'Painel estilo HUD que abre junto com o Windows: saudação falada, notícias, futebol, clima, cotações, uso de CPU/RAM e um chat com Claude integrado.',
    tech: ['Electron', 'JavaScript', 'APIs públicas'], tags: ['JavaScript'],
    links: [['Código ↗', 'https://github.com/vitorhugoramosd/JarvisPessoal']],
  },
  {
    icon: '🥬', title: 'Freshly', accent: '#3ecf8e',
    desc: 'PWA contra o desperdício: cadastre alimentos, receba alertas de validade, veja receitas sugeridas e acompanhe quanto dinheiro economizou.',
    tech: ['React', 'Vite', 'Supabase', 'PWA'], tags: ['JavaScript'],
    links: [['Ver online ↗', 'https://freshly-blond.vercel.app'], ['Código ↗', 'https://github.com/vitorhugoramosd/Freshly']],
  },
  {
    icon: '📦', title: 'MeuERP', accent: '#9b6bff',
    desc: 'ERP desktop de estudo: cadastro de produtos e movimentação de estoque, em camadas (Models, Repositories, Services) sobre PostgreSQL.',
    tech: ['C# 12', '.NET 10', 'Windows Forms', 'PostgreSQL'], tags: ['C# / .NET'],
    links: [['Código ↗', 'https://github.com/vitorhugoramosd/MeuERP']],
  },
  {
    icon: '🎟️', title: 'Plataforma de Gestão de Eventos', accent: '#f2a65a', wide: true,
    desc: 'Blueprint de microsserviços cobrindo o ciclo completo: usuários, eventos, agendamento, inscrições, pagamentos e relatórios — com service discovery (Eureka), API Gateway e autenticação central por papéis.',
    tech: ['Java', 'Spring Cloud', 'Microsserviços', 'Eureka', 'Gateway'], tags: ['Java'],
    links: [['Código ↗', 'https://github.com/vitorhugoramosd/Sistema-de-Gestao-de-Eventos']],
  },
  {
    icon: '🎫', title: 'JoinUp · Ingressos', accent: '#ff6b81',
    desc: 'Sistema de compra de ingressos em Arquitetura Hexagonal (ports & adapters), com módulos de eventos, ingressos, organizadores e notificações por e-mail.',
    tech: ['Java 17', 'Spring Boot', 'JWT', 'Hexagonal'], tags: ['Java'],
    links: [['Código ↗', 'https://github.com/vitorhugoramosd/JoinUp-Vitor']],
  },
  {
    icon: '🏥', title: 'MedTime', accent: '#5a9bd8',
    desc: 'Agendamento de consultas médicas: cadastro de pacientes e médicos, especialidades e fluxo completo de marcação.',
    tech: ['Java 17', 'Spring Boot', 'JPA', 'Docker'], tags: ['Java'],
    links: [['Código ↗', 'https://github.com/vitorhugoramosd/MedTime---Sistema-de-Agendamento-de-Consultas']],
  },
];

const LANG_COLORS = { 'C#': '#9b6bff', Java: '#f0803c', JavaScript: '#e8d44d', TypeScript: '#3d8bff', Python: '#4b8bbe', HTML: '#ff6b81', Outros: '#8d93a8' };

/* ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const EMAIL = `${CONFIG.emailUser}@${CONFIG.emailHost}`;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* sem armazenamento */ } },
};

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ---------- tema ---------- */
function setTheme(t) {
  document.documentElement.dataset.theme = t;
  store.set('theme', t);
}
setTheme(store.get('theme') || 'dark');
$('#themeBtn').addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));

/* ---------- menu mobile + link ativo ---------- */
const navLinks = $('#navLinks');
$('#menuBtn').addEventListener('click', (e) => {
  const open = navLinks.classList.toggle('open');
  e.currentTarget.setAttribute('aria-expanded', open);
});
navLinks.addEventListener('click', () => navLinks.classList.remove('open'));
const spy = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) $$('a', navLinks).forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach((s) => spy.observe(s));

/* ---------- brilho que segue o cursor ---------- */
addEventListener('pointermove', (e) => {
  document.body.style.setProperty('--mx', e.clientX + 'px');
  document.body.style.setProperty('--my', e.clientY + 'px');
}, { passive: true });

/* ---------- texto digitado ---------- */
(function typed() {
  const el = $('#typed');
  if (reduced) { el.textContent = CONFIG.roles[0]; return; }
  let i = 0, j = 0, del = false;
  (function tick() {
    const word = CONFIG.roles[i];
    j += del ? -1 : 1;
    el.textContent = word.slice(0, j);
    let wait = del ? 28 : 55;
    if (!del && j === word.length) { del = true; wait = 1700; }
    else if (del && j === 0) { del = false; i = (i + 1) % CONFIG.roles.length; wait = 350; }
    setTimeout(tick, wait);
  })();
})();

/* ---------- rede de partículas do hero ---------- */
(function net() {
  const c = $('#net');
  const ctx = c.getContext('2d');
  let w, h, pts = [], mouse = { x: -999, y: -999 }, raf, visible = true;
  const color = () => getComputedStyle(document.documentElement).getPropertyValue('--a2').trim() || '#7c9bff';
  function size() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    w = c.clientWidth; h = c.clientHeight;
    c.width = w * dpr; c.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(90, Math.floor((w * h) / 16000));
    pts = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 }));
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    const col = color();
    ctx.fillStyle = col; ctx.strokeStyle = col;
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
      if (dm < 140) { p.x += (p.x - mouse.x) / dm * .8; p.y += (p.y - mouse.y) / dm * .8; }
      ctx.globalAlpha = .7;
      ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, 6.283); ctx.fill();
    }
    for (let i = 0; i < pts.length; i++) for (let k = i + 1; k < pts.length; k++) {
      const a = pts[i], b = pts[k], d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < 130) { ctx.globalAlpha = (1 - d / 130) * .28; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
    }
    ctx.globalAlpha = 1;
    if (!reduced && visible) raf = requestAnimationFrame(draw);
  }
  size(); draw();
  addEventListener('resize', () => { cancelAnimationFrame(raf); size(); draw(); });
  c.parentElement.addEventListener('pointermove', (e) => { const r = c.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
  c.parentElement.addEventListener('pointerleave', () => { mouse.x = mouse.y = -999; });
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; cancelAnimationFrame(raf); if (visible) draw(); }).observe(c);
})();

/* ---------- stack ---------- */
$('#stackChips').innerHTML = STACK.map(([n, c]) => `<span class="chip" style="--c:${c}"><i></i>${esc(n)}</span>`).join('');

/* ---------- projetos + filtro ---------- */
const grid = $('#projectGrid');
grid.innerHTML = PROJECTS.map((p, i) => `
  <article class="card reveal${p.wide ? ' wide' : ''}" style="--accent:${p.accent}" data-i="${i}">
    <div class="card-top"><div class="card-icon">${p.icon}</div>${p.novo ? '<span class="badge">novo</span>' : ''}</div>
    <h3>${esc(p.title)}</h3>
    <p>${esc(p.desc)}</p>
    <div class="mini-chips">${p.tech.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
    <div class="card-links">${p.links.map(([l, u]) => `<a href="${esc(u)}"${u.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${esc(l)}</a>`).join('')}</div>
  </article>`).join('');

const tags = ['Todos', ...new Set(PROJECTS.flatMap((p) => p.tags))];
const filters = $('#filters');
filters.innerHTML = tags.map((t, i) => `<button class="filter" aria-pressed="${i === 0}" data-tag="${esc(t)}">${esc(t)}</button>`).join('');
filters.addEventListener('click', (e) => {
  const b = e.target.closest('.filter');
  if (!b) return;
  $$('.filter', filters).forEach((x) => x.setAttribute('aria-pressed', x === b));
  const tag = b.dataset.tag;
  $$('.card', grid).forEach((c) => {
    const p = PROJECTS[c.dataset.i];
    c.classList.toggle('hide', tag !== 'Todos' && !p.tags.includes(tag));
  });
});

/* inclinação 3D + luz nos cards */
if (!reduced && matchMedia('(hover: hover)').matches) {
  $$('.card', grid).forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      card.style.setProperty('--px', x * 100 + '%');
      card.style.setProperty('--py', y * 100 + '%');
      card.style.transform = `perspective(900px) rotateX(${(.5 - y) * 5}deg) rotateY(${(x - .5) * 5}deg) translateY(-4px)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });
}

/* ---------- GitHub ao vivo ---------- */
(async function github() {
  const list = $('#ghList');
  try {
    let repos;
    const cached = sessionStorage.getItem('gh-repos');
    if (cached) repos = JSON.parse(cached);
    else {
      const res = await fetch(`https://api.github.com/users/${CONFIG.github}/repos?per_page=100&sort=pushed`);
      if (!res.ok) throw new Error(res.status);
      repos = (await res.json()).filter((r) => !r.fork).map((r) => ({ name: r.name, url: r.html_url, lang: r.language, pushed: r.pushed_at }));
      try { sessionStorage.setItem('gh-repos', JSON.stringify(repos)); } catch { /* ok */ }
    }
    const stat = $('#statRepos');
    stat.dataset.count = repos.length;
    if (stat.dataset.done) stat.textContent = repos.length;

    const counts = {};
    repos.forEach((r) => { if (r.lang) { const k = LANG_COLORS[r.lang] ? r.lang : 'Outros'; counts[k] = (counts[k] || 0) + 1; } });
    const langs = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    $('#langBar').innerHTML = langs.map(([l]) => `<span style="background:${LANG_COLORS[l]}"></span>`).join('');
    requestAnimationFrame(() => $$('#langBar span').forEach((s, i) => { s.style.flexGrow = langs[i][1]; }));
    $('#langLegend').innerHTML = langs.map(([l, n]) => `<span><i style="background:${LANG_COLORS[l]}"></i>${esc(l)} · ${n}</span>`).join('');

    const fmt = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
    list.innerHTML = repos.slice(0, 8).map((r) => `<li><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.name)}</a><small>${esc(r.lang || '—')} · ${fmt.format(new Date(r.pushed))}</small></li>`).join('');
  } catch {
    list.innerHTML = `<li class="muted">Não foi possível carregar agora. <a href="https://github.com/${CONFIG.github}" target="_blank" rel="noopener" style="color:var(--a1)">Abrir o GitHub ↗</a></li>`;
  }
})();

/* ---------- revelar ao rolar + contadores ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add('in');
    $$('[data-count]', en.target).forEach(count);
    io.unobserve(en.target);
  });
}, { threshold: .12 });
$$('.reveal').forEach((el) => io.observe(el));

function count(el) {
  const start = performance.now();
  el.dataset.done = '1';
  if (reduced) { el.textContent = el.dataset.count; return; }
  (function step(now) {
    const k = Math.min(1, (now - start) / 1100);
    el.textContent = Math.round(+el.dataset.count * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(step);
  })(start);
}

/* ---------- demonstração do MRR ---------- */
(function mrr() {
  const rows = $('#mrrRows');
  const picks = [1, 3, 0, 2]; // 0 = não encontrou
  const labels = ['bug #1', 'bug #2', 'bug #3', 'bug #4'];
  function render() {
    rows.innerHTML = labels.map((l, r) => `<div class="mrr-row"><span>${l}</span>${[1, 2, 3, 4, 5, 0].map((p) => `<button data-r="${r}" data-p="${p}" aria-pressed="${picks[r] === p}" aria-label="${l}: ${p ? p + 'ª posição' : 'não encontrado'}">${p || '✕'}</button>`).join('')}</div>`).join('');
    const v = picks.reduce((s, p) => s + (p ? 1 / p : 0), 0) / picks.length;
    $('#mrrVal').textContent = v.toFixed(3);
    const top1 = picks.filter((p) => p === 1).length;
    $('#mrrNote').textContent = `Top-1: ${top1} de ${picks.length} · Top-3: ${picks.filter((p) => p && p <= 3).length} de ${picks.length}. Média de 1/posição — quanto mais perto de 1, mais cedo o modelo acerta.`;
  }
  rows.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    picks[+b.dataset.r] = +b.dataset.p;
    render();
  });
  render();
})();

/* ---------- terminal ---------- */
(function terminal() {
  const body = $('#termBody'), input = $('#termIn');
  const hist = []; let hi = 0;
  const link = (u, t) => `<a href="${u}"${u.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${t || u}</a>`;
  const cmds = {
    ajuda: () => `Comandos disponíveis:
  <span class="hl">sobre</span>      quem sou eu
  <span class="hl">stack</span>      tecnologias que uso
  <span class="hl">projetos</span>   lista de projetos
  <span class="hl">tcc</span>        minha pesquisa
  <span class="hl">contato</span>    como falar comigo
  <span class="hl">github</span>     abre meu GitHub
  <span class="hl">jogar</span>      abre o Caça-Bug
  <span class="hl">tema</span>       alterna claro/escuro
  <span class="hl">limpar</span>     limpa a tela`,
    sobre: () => 'Vitor Hugo Ramos — desenvolvedor de software na Prosyst Sistemas.\nComecei no suporte técnico do ERP e hoje atuo no código dele (C# / VB.NET).\nEstudante de Engenharia de Software na Univille.',
    stack: () => STACK.map(([n]) => n).join(' · '),
    projetos: () => PROJECTS.map((p, i) => `  ${String(i + 1).padStart(2, '0')}  ${p.icon} ${esc(p.title)}  ${link(p.links[0][1], '[abrir]')}`).join('\n'),
    tcc: () => `"Avaliação do desempenho de LLMs na localização de falhas em bases de código C#"\nUniville, 2026. Métricas: Top-N e MRR, por arquivo e por método.\n${link('https://github.com/vitorhugoramosd/tcc-llm-localizacao-falhas-csharp', 'ver repositório')}`,
    contato: () => `e-mail:  ${link('mailto:' + EMAIL, EMAIL)}\ngithub:  ${link('https://github.com/' + CONFIG.github, 'github.com/' + CONFIG.github)}`,
    github: () => { open('https://github.com/' + CONFIG.github, '_blank', 'noopener'); return 'Abrindo o GitHub…'; },
    jogar: () => { location.href = 'caca-bug/'; return 'Carregando o Caça-Bug… 🐞'; },
    tema: () => { $('#themeBtn').click(); return `Tema alterado para ${document.documentElement.dataset.theme === 'dark' ? 'escuro' : 'claro'}.`; },
    limpar: () => { body.innerHTML = ''; return null; },
    whoami: () => 'visitante — mas pode ficar à vontade.',
    sudo: () => '<span class="err">Permissão negada.</span> Boa tentativa, mas aqui só passa por Merge Request. 😄',
    ls: () => 'sobre.txt  stack.json  projetos/  tcc.pdf  contato.vcf',
    'git status': () => 'No ramo main\nnada a submeter, árvore de trabalho limpa ✨',
  };
  const alias = { help: 'ajuda', clear: 'limpar', cls: 'limpar', about: 'sobre', projects: 'projetos', contact: 'contato', play: 'jogar', theme: 'tema' };

  function print(html, cls = 'out') {
    const d = document.createElement('div');
    d.className = cls; d.innerHTML = html;
    body.appendChild(d);
    body.scrollTop = body.scrollHeight;
  }
  function run(raw) {
    const cmd = raw.trim().toLowerCase();
    print(`<span class="cmd">vitor@portfolio:~$</span> ${esc(raw)}`, 'line');
    if (!cmd) return;
    const key = alias[cmd] || cmd;
    const fn = cmds[key] || (key.startsWith('sudo') ? cmds.sudo : null);
    if (!fn) return print(`<span class="err">comando não encontrado:</span> ${esc(cmd)} — digite <span class="hl">ajuda</span>`);
    const out = fn();
    if (out != null) print(out);
  }
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const v = input.value; input.value = '';
      if (v.trim()) { hist.push(v); hi = hist.length; }
      run(v);
    } else if (e.key === 'ArrowUp') { e.preventDefault(); if (hi > 0) input.value = hist[--hi]; }
    else if (e.key === 'ArrowDown') { e.preventDefault(); input.value = hi < hist.length - 1 ? hist[++hi] : (hi = hist.length, ''); }
    else if (e.key === 'Tab') {
      e.preventDefault();
      const m = Object.keys(cmds).filter((k) => k.startsWith(input.value.toLowerCase()));
      if (m.length === 1) input.value = m[0];
    }
  });
  $('#term').addEventListener('click', (e) => { if (!e.target.closest('a') && !getSelection().toString()) input.focus({ preventScroll: true }); });
  print('Bem-vindo ao terminal do portfólio. Digite <span class="hl">ajuda</span> para ver os comandos.');
})();

/* ---------- contato ---------- */
$('#mailBtn').href = 'mailto:' + EMAIL;
$('#copyBtn').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(EMAIL); toast('E-mail copiado ✓'); }
  catch { toast(EMAIL); }
});
if (CONFIG.linkedin) { const l = $('#linkedinBtn'); l.href = CONFIG.linkedin; l.hidden = false; }
$('#year').textContent = new Date().getFullYear();
