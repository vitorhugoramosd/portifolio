/* =========================================================
   CONFIGURAÇÃO — edite aqui para atualizar o portfólio
   ========================================================= */
const CONFIG = {
  github: 'vitorhugoramosd',
  emailUser: 'vitorhugoramosdossantos',
  emailHost: 'gmail.com',
  linkedin: '', // cole aqui a URL do seu LinkedIn para o botão aparecer
};

const STACK = ['C#', 'VB.NET', '.NET', 'LinqToDB', 'SQL', 'PostgreSQL', 'Java', 'Spring Boot', 'JavaScript', 'TypeScript', 'React', 'Electron', 'Python', 'Git'];

/* Para adicionar um projeto: copie um bloco e ajuste os campos.
   tags = usadas no filtro; novo: true mostra a etiqueta "novo". */
const PROJECTS = [
  { t: 'Caça-Bug', lang: 'JavaScript', ano: 2026, novo: true, tags: ['JavaScript'],
    d: 'Jogo feito para este portfólio: você recebe o relato de um defeito e um trecho de C#, e tem 3 palpites para apontar a linha culpada. A pontuação sai em Top-1, Top-3 e MRR, as mesmas métricas do meu TCC.',
    tech: 'JavaScript · HTML · CSS · desafios em C#', links: [['Jogar →', 'caca-bug/']] },
  { t: 'TCC · LLMs e falhas em C#', lang: 'Python', ano: 2026, tags: ['Python', 'C#'],
    d: 'Material completo da execução piloto: seleção dos defeitos, consultas enviadas aos modelos, respostas recebidas, métricas e os testes que conferem os números publicados.',
    tech: 'Python · C# · LLMs · Top-N / MRR', links: [['Código ↗', 'https://github.com/vitorhugoramosd/tcc-llm-localizacao-falhas-csharp']] },
  { t: 'VibeMovies', lang: 'C# · TypeScript', ano: 2026, tags: ['C#', 'TypeScript'],
    d: 'Escolha filmes pelo clima do momento, veja onde assistir e mantenha um diário do que já viu. A recomendação é determinística, cruzando metadados do TMDB, sem API paga de IA.',
    tech: 'ASP.NET Core · Clean Architecture · EF Core · PostgreSQL · TypeScript', links: [['Código ↗', 'https://github.com/vitorhugoramosd/VibeMovies-']] },
  { t: 'Blade Dash', lang: 'JavaScript', ano: 2026, tags: ['JavaScript'],
    d: 'Launcher de jogos para Windows navegável pelo controle. Detecta jogos da Steam, Epic, Ubisoft, EA e Xbox, baixa as capas e conta o tempo de jogo.',
    tech: 'Electron · JavaScript · Gamepad API', links: [['Código ↗', 'https://github.com/vitorhugoramosd/InterfaceXbox360']] },
  { t: 'J.A.R.V.I.S. pessoal', lang: 'JavaScript', ano: 2026, tags: ['JavaScript'],
    d: 'Painel que abre junto com o Windows: saudação falada, notícias, futebol, clima, cotações, uso de CPU e memória e um chat com Claude integrado.',
    tech: 'Electron · JavaScript · APIs públicas', links: [['Código ↗', 'https://github.com/vitorhugoramosd/JarvisPessoal']] },
  { t: 'Freshly', lang: 'JavaScript', ano: 2026, tags: ['JavaScript'],
    d: 'PWA contra o desperdício: cadastre alimentos, receba alertas de validade, veja receitas sugeridas e acompanhe quanto dinheiro economizou.',
    tech: 'React · Vite · Supabase · PWA', links: [['Ver online ↗', 'https://freshly-blond.vercel.app'], ['Código ↗', 'https://github.com/vitorhugoramosd/Freshly']] },
  { t: 'MeuERP', lang: 'C#', ano: 2026, tags: ['C#'],
    d: 'ERP desktop de estudo: cadastro de produtos e movimentação de estoque, em camadas (Models, Repositories, Services) sobre PostgreSQL.',
    tech: 'C# 12 · .NET 10 · Windows Forms · PostgreSQL', links: [['Código ↗', 'https://github.com/vitorhugoramosd/MeuERP']] },
  { t: 'Gestão de Eventos', lang: 'Java', ano: 2025, tags: ['Java'],
    d: 'Microsserviços cobrindo o ciclo completo: usuários, eventos, agendamento, inscrições, pagamentos e relatórios, com service discovery, API Gateway e autenticação central por papéis.',
    tech: 'Java · Spring Cloud · Eureka · Gateway', links: [['Código ↗', 'https://github.com/vitorhugoramosd/Sistema-de-Gestao-de-Eventos']] },
  { t: 'JoinUp · Ingressos', lang: 'Java', ano: 2025, tags: ['Java'],
    d: 'Compra de ingressos em Arquitetura Hexagonal (ports & adapters), com módulos de eventos, ingressos, organizadores e notificações por e-mail.',
    tech: 'Java 17 · Spring Boot · JWT · Hexagonal', links: [['Código ↗', 'https://github.com/vitorhugoramosd/JoinUp-Vitor']] },
  { t: 'MedTime', lang: 'Java', ano: 2025, tags: ['Java'],
    d: 'Agendamento de consultas médicas: cadastro de pacientes e médicos, especialidades e o fluxo completo de marcação.',
    tech: 'Java 17 · Spring Boot · JPA · Docker', links: [['Código ↗', 'https://github.com/vitorhugoramosd/MedTime---Sistema-de-Agendamento-de-Consultas']] },
];

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

/* ---------- tema ---------- */
$('#themeBtn').addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch { /* sem armazenamento */ }
});

/* ---------- relógio de Brasília ---------- */
(function clock() {
  $('#clock').textContent = new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo' }).format(new Date());
  setTimeout(clock, 15000);
})();

/* ---------- link ativo no menu ---------- */
const spy = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) $$('#navLinks a').forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach((s) => spy.observe(s));

/* ---------- faixa rolante ---------- */
$('#marquee').innerHTML = [...STACK, ...STACK].map((s) => `<span>${esc(s)}</span>`).join('');

/* ---------- projetos ---------- */
const plist = $('#plist');
plist.innerHTML = PROJECTS.map((p, i) => `
  <li data-i="${i}">
    <button class="prow" type="button" aria-expanded="false">
      <span class="i">${String(i + 1).padStart(2, '0')}</span>
      <span class="t">${esc(p.t)}${p.novo ? '<span class="new">novo</span>' : ''}</span>
      <span class="m">${esc(p.lang)} · ${p.ano}</span>
      <span class="x" aria-hidden="true">+</span>
    </button>
    <div class="pdet" hidden>
      <p>${esc(p.d)}</p>
      <div class="side">${esc(p.tech)}${p.links.map(([l, u]) => `<a href="${esc(u)}"${u.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${esc(l)}</a>`).join('')}</div>
    </div>
  </li>`).join('');

plist.addEventListener('click', (e) => {
  const row = e.target.closest('.prow');
  if (!row) return;
  const li = row.parentElement, det = $('.pdet', li);
  det.hidden = !det.hidden;
  li.classList.toggle('open', !det.hidden);
  row.setAttribute('aria-expanded', !det.hidden);
  peek.classList.remove('on');
});

const tags = ['Todos', ...new Set(PROJECTS.flatMap((p) => p.tags))];
const filters = $('#filters');
filters.innerHTML = tags.map((t, i) => `<button class="filter" type="button" aria-pressed="${i === 0}" data-tag="${esc(t)}">${esc(t)}</button>`).join('');
filters.addEventListener('click', (e) => {
  const b = e.target.closest('.filter');
  if (!b) return;
  $$('.filter', filters).forEach((x) => x.setAttribute('aria-pressed', x === b));
  $$('li', plist).forEach((li) => { li.hidden = b.dataset.tag !== 'Todos' && !PROJECTS[li.dataset.i].tags.includes(b.dataset.tag); });
});

/* resumo que acompanha o cursor (só com mouse, em tela larga) */
const peek = $('#peek');
if (matchMedia('(hover: hover) and (min-width: 901px)').matches) {
  plist.addEventListener('pointermove', (e) => {
    const row = e.target.closest('.prow');
    if (!row || row.parentElement.classList.contains('open')) { peek.classList.remove('on'); return; }
    const p = PROJECTS[row.parentElement.dataset.i];
    if (peek.dataset.i !== row.parentElement.dataset.i) {
      peek.dataset.i = row.parentElement.dataset.i;
      peek.innerHTML = `${esc(p.d)}<small>${esc(p.tech)} · clique para abrir</small>`;
    }
    const x = Math.min(e.clientX + 22, innerWidth - 322);
    const y = Math.min(e.clientY + 22, innerHeight - peek.offsetHeight - 12);
    peek.style.transform = `translate(${x}px, ${y}px)`;
    peek.classList.add('on');
  });
  plist.addEventListener('pointerleave', () => peek.classList.remove('on'));
  addEventListener('scroll', () => peek.classList.remove('on'), { passive: true });
}

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
    $('#nRepos').textContent = repos.length;
    $('#nLangs').textContent = langs.length;
    $('#langBar').innerHTML = langs.map(([, n], i) => `<i style="flex:${n};opacity:${Math.max(.22, 1 - i * .17)}"></i>`).join('');
    $('#legend').innerHTML = langs.map(([l, n]) => `<span>${esc(l)} ${n}</span>`).join('');
    const fmt = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
    list.innerHTML = repos.slice(0, 8).map((r) => `<li><a href="${esc(r.url)}" target="_blank" rel="noopener"><span>${esc(r.name)}</span><small>${esc(r.lang || '—')}</small><small>${fmt.format(new Date(r.pushed))}</small></a></li>`).join('');
  } catch {
    list.innerHTML = `<li><a href="https://github.com/${CONFIG.github}" target="_blank" rel="noopener"><span>Não deu para carregar agora. Abrir o GitHub ↗</span></a></li>`;
  }
})();

/* ---------- contato ---------- */
const mail = $('#mail');
mail.href = 'mailto:' + EMAIL;
mail.textContent = EMAIL;
$('#copyBtn').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(EMAIL); toast('E-mail copiado'); }
  catch { toast(EMAIL); }
});
if (CONFIG.linkedin) { const l = $('#li'); l.href = CONFIG.linkedin; l.hidden = false; }
$('#year').textContent = new Date().getFullYear();
