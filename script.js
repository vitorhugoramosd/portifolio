/* =========================================================
   CONFIGURAÇÃO — edite aqui para atualizar o portfólio
   ========================================================= */
const CONFIG = {
  github: 'vitorhugoramosd',
  emailUser: 'vitorhugoramosdossantos',
  emailHost: 'gmail.com',
  linkedin: 'https://www.linkedin.com/in/vhrdossantos/',
};

const STACK = ['C#', 'VB.NET', '.NET', 'LinqToDB', 'SQL', 'PostgreSQL', 'Java', 'Spring Boot', 'JavaScript', 'TypeScript', 'React', 'Electron', 'Python', 'Git', 'Docker'];

/* Para adicionar um projeto: copie um bloco e ajuste os campos.
   tags = usadas no filtro; novo: true mostra a etiqueta "novo". */
const PROJECTS = [
  { t: 'Caça-Bug', kind: 'Jogo · feito para este portfólio', lang: 'JavaScript', novo: true, tags: ['JavaScript'],
    d: 'Leia o relato de um defeito, veja um trecho de C# e aponte a linha culpada em até 3 palpites. A pontuação sai em Top-1, Top-3 e MRR, as métricas do meu TCC.',
    links: [['Jogar →', 'caca-bug/']] },
  { t: 'TCC · LLMs e falhas em C#', kind: 'Pesquisa', lang: 'Python', tags: ['Python', 'C#'],
    d: 'Execução piloto completa: seleção dos defeitos, consultas enviadas aos modelos, respostas, métricas e os testes que conferem os números publicados.',
    links: [['Código ↗', 'https://github.com/vitorhugoramosd/tcc-llm-localizacao-falhas-csharp']] },
  { t: 'VibeMovies', kind: 'Projeto pessoal', lang: 'C# · TypeScript', tags: ['C#', 'TypeScript'],
    d: 'Escolha filmes pelo clima do momento e veja onde assistir. ASP.NET Core em Clean Architecture, com recomendação determinística sobre metadados do TMDB.',
    links: [['Código ↗', 'https://github.com/vitorhugoramosd/VibeMovies-']] },
  { t: 'Blade Dash', kind: 'Projeto pessoal', lang: 'Electron', tags: ['JavaScript'],
    d: 'Launcher de jogos para Windows navegável pelo controle. Detecta jogos da Steam, Epic, Ubisoft, EA e Xbox, baixa as capas e conta o tempo de jogo.',
    links: [['Código ↗', 'https://github.com/vitorhugoramosd/InterfaceXbox360']] },
  { t: 'J.A.R.V.I.S. pessoal', kind: 'Projeto pessoal', lang: 'Electron', tags: ['JavaScript'],
    d: 'Painel que abre junto com o Windows: saudação falada, notícias, futebol, clima, cotações, uso de CPU e memória e um chat com Claude integrado.',
    links: [['Código ↗', 'https://github.com/vitorhugoramosd/JarvisPessoal']] },
  { t: 'Freshly', kind: 'Projeto pessoal · no ar', lang: 'React', tags: ['JavaScript'],
    d: 'PWA contra o desperdício: cadastre alimentos, receba alertas de validade, veja receitas sugeridas e acompanhe quanto economizou. React, Vite e Supabase.',
    links: [['Ver online ↗', 'https://freshly-blond.vercel.app'], ['Código ↗', 'https://github.com/vitorhugoramosd/Freshly']] },
  { t: 'MeuERP', kind: 'Estudo', lang: 'C#', tags: ['C#'],
    d: 'ERP desktop de estudo: cadastro de produtos e movimentação de estoque, em camadas (Models, Repositories, Services) sobre PostgreSQL, com Windows Forms.',
    links: [['Código ↗', 'https://github.com/vitorhugoramosd/MeuERP']] },
  { t: 'Gestão de Eventos', kind: 'Acadêmico', lang: 'Java', tags: ['Java'],
    d: 'Microsserviços cobrindo usuários, eventos, agendamento, inscrições, pagamentos e relatórios, com service discovery, API Gateway e autenticação por papéis.',
    links: [['Código ↗', 'https://github.com/vitorhugoramosd/Sistema-de-Gestao-de-Eventos']] },
  { t: 'JoinUp · Ingressos', kind: 'Acadêmico', lang: 'Java', tags: ['Java'],
    d: 'Compra de ingressos em Arquitetura Hexagonal (ports & adapters), com módulos de eventos, ingressos, organizadores e notificações por e-mail.',
    links: [['Código ↗', 'https://github.com/vitorhugoramosd/JoinUp-Vitor']] },
];

/* cores das miniaturas, em rodízio: [fundo, texto] */
const THUMBS = [['#2f3a8f', '#ffffff'], ['#f0cf6a', '#0d1024'], ['#0d1024', '#ffffff'], ['#e9ebf3', '#0d1024']];

/* ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const EMAIL = `${CONFIG.emailUser}@${CONFIG.emailHost}`;

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ---------- retrato dividido: arraste ou passe o mouse ---------- */
(function duo() {
  const el = $('#duo');
  const set = (clientX) => {
    const r = el.getBoundingClientRect();
    const pct = Math.max(4, Math.min(96, ((clientX - r.left) / r.width) * 100));
    el.style.setProperty('--cut', pct + '%');
  };
  el.addEventListener('pointermove', (e) => set(e.clientX));
  el.addEventListener('pointerdown', (e) => set(e.clientX));
  el.addEventListener('pointerleave', () => el.style.setProperty('--cut', '50%'));
})();

/* ---------- projetos ---------- */
const grid = $('#grid');
grid.innerHTML = PROJECTS.map((p, i) => {
  const [tb, tc] = THUMBS[i % THUMBS.length];
  return `
  <article class="card" data-i="${i}">
    <div class="thumb" style="--tb:${tb};--tc:${tc}">
      <div class="win" aria-hidden="true"><div class="win-bar"><i></i><i></i><i></i></div><div class="win-body"><b>${esc(p.t)}</b><u></u><u></u><u></u></div></div>
      <span class="lang">${esc(p.lang)}</span>
      ${p.novo ? '<span class="new">novo</span>' : ''}
    </div>
    <div class="card-body">
      <h3>${esc(p.t)}</h3>
      <div class="kind">${esc(p.kind)}</div>
      <p>${esc(p.d)}</p>
      <div class="card-links">${p.links.map(([l, u]) => `<a href="${esc(u)}"${u.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${esc(l)}</a>`).join('')}</div>
    </div>
  </article>`;
}).join('');

const tags = ['Todos', ...new Set(PROJECTS.flatMap((p) => p.tags))];
const filters = $('#filters');
filters.innerHTML = tags.map((t, i) => `<button class="filter" type="button" aria-pressed="${i === 0}" data-tag="${esc(t)}">${esc(t)}</button>`).join('');
filters.addEventListener('click', (e) => {
  const b = e.target.closest('.filter');
  if (!b) return;
  $$('.filter', filters).forEach((x) => x.setAttribute('aria-pressed', x === b));
  $$('.card', grid).forEach((c) => c.classList.toggle('hide', b.dataset.tag !== 'Todos' && !PROJECTS[c.dataset.i].tags.includes(b.dataset.tag)));
});

/* ---------- sobre ---------- */
$('#chips').innerHTML = STACK.map((s) => `<span>${esc(s)}</span>`).join('');

/* ---------- trajetória: arrastar e botões ---------- */
(function track() {
  const t = $('#track');
  const step = () => $('.panel', t).getBoundingClientRect().width;
  $('#prevBtn').addEventListener('click', () => t.scrollBy({ left: -step(), behavior: 'smooth' }));
  $('#nextBtn').addEventListener('click', () => t.scrollBy({ left: step(), behavior: 'smooth' }));
  let down = false, x0 = 0, s0 = 0;
  t.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') return; down = true; x0 = e.clientX; s0 = t.scrollLeft; t.classList.add('drag'); t.setPointerCapture(e.pointerId); });
  t.addEventListener('pointermove', (e) => { if (down) t.scrollLeft = s0 - (e.clientX - x0); });
  const up = () => { if (!down) return; down = false; t.classList.remove('drag'); };
  t.addEventListener('pointerup', up);
  t.addEventListener('pointercancel', up);
})();

/* ---------- simulador de MRR ---------- */
(function mrr() {
  const rows = $('#mrrRows');
  const picks = [1, 3, 0, 2]; // 0 = não encontrou
  function render() {
    rows.innerHTML = picks.map((pick, r) => `<div class="mrr-row"><span>bug ${r + 1}</span>${[1, 2, 3, 4, 5, 0].map((p) => `<button type="button" data-r="${r}" data-p="${p}" aria-pressed="${pick === p}" aria-label="bug ${r + 1}: ${p ? p + 'ª posição' : 'não encontrado'}">${p || '✕'}</button>`).join('')}</div>`).join('');
    const v = picks.reduce((s, p) => s + (p ? 1 / p : 0), 0) / picks.length;
    $('#mrrVal').textContent = v.toFixed(3).replace('.', ',');
    $('#mrrNote').textContent = `Top-1: ${picks.filter((p) => p === 1).length}/${picks.length} · Top-3: ${picks.filter((p) => p && p <= 3).length}/${picks.length} · média de 1/posição`;
  }
  rows.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    picks[+b.dataset.r] = +b.dataset.p;
    render();
  });
  render();
})();

/* ---------- GitHub ao vivo ---------- */
(async function github() {
  const list = $('#repos');
  try {
    let repos, cached = null;
    try { cached = sessionStorage.getItem('gh-repos'); } catch { /* ok */ }
    if (cached) repos = JSON.parse(cached);
    else {
      const res = await fetch(`https://api.github.com/users/${CONFIG.github}/repos?per_page=100&sort=pushed`);
      if (!res.ok) throw new Error(res.status);
      repos = (await res.json()).filter((r) => !r.fork).map((r) => ({ name: r.name, url: r.html_url, lang: r.language, pushed: r.pushed_at }));
      try { sessionStorage.setItem('gh-repos', JSON.stringify(repos)); } catch { /* ok */ }
    }
    const counts = {};
    repos.forEach((r) => { if (r.lang) counts[r.lang] = (counts[r.lang] || 0) + 1; });
    const langs = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const max = langs[0][1];
    $('#nRepos').textContent = repos.length;
    $('#nLangs').textContent = langs.length;
    $('#langs').innerHTML = langs.map(([l, n]) => `<li><span>${esc(l)}</span><i data-w="${(n / max) * 100}"></i><b>${n}</b></li>`).join('');
    setTimeout(() => $$('#langs i').forEach((i) => { i.style.width = i.dataset.w + '%'; }), 60);
    const fmt = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
    list.innerHTML = repos.slice(0, 7).map((r) => `<li><a href="${esc(r.url)}" target="_blank" rel="noopener"><span>${esc(r.name)}</span><small>${esc(r.lang || '—')}</small><small>${fmt.format(new Date(r.pushed))}</small></a></li>`).join('');
  } catch {
    list.innerHTML = `<li><a href="https://github.com/${CONFIG.github}" target="_blank" rel="noopener"><span>Não deu para carregar agora. Abrir o GitHub ↗</span></a></li>`;
  }
})();

/* ---------- menu: seção ativa ---------- */
const spy = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) $$('#navLinks a').forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach((s) => spy.observe(s));

/* ---------- entrada suave ---------- */
const rv = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); rv.unobserve(en.target); } });
}, { threshold: .1 });
$$('.rv').forEach((el) => rv.observe(el));
setTimeout(() => $$('.rv').forEach((el) => el.classList.add('in')), 4000); // garantia: nada fica invisível

/* ---------- contato ---------- */
const mail = $('#mail');
mail.href = 'mailto:' + EMAIL;
mail.textContent = EMAIL;
$('#copyBtn').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(EMAIL); toast('E-mail copiado'); }
  catch { toast(EMAIL); }
});
if (CONFIG.linkedin) { [$('#li'), $('#liIcon')].forEach((l) => { l.href = CONFIG.linkedin; l.hidden = false; }); }
$('#year').textContent = new Date().getFullYear();
