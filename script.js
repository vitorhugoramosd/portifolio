/* =========================================================
   CONFIGURAÇÃO — edite aqui para atualizar o portfólio
   ========================================================= */
const CONFIG = {
  github: 'vitorhugoramosd',
  emailUser: 'vitorhugoramosdossantos',
  emailHost: 'gmail.com',
  linkedin: '', // cole aqui a URL do seu LinkedIn para a linha aparecer
};

/* Para adicionar um projeto: copie uma linha e ajuste os campos.
   Lembre de corrigir o total "Itens neste documento" no index.html. */
const PROJECTS = [
  { t: 'Caça-Bug', lang: 'JavaScript', nat: 'Jogo', ano: 2026, novo: true,
    d: 'Jogo feito para este portfólio: você recebe o relato de um defeito e um trecho de C#, e tem 3 palpites para apontar a linha culpada. A pontuação sai em Top-1, Top-3 e MRR, as mesmas métricas do meu TCC.',
    tech: 'JavaScript · HTML · CSS · desafios em C#', links: [['Jogar', 'caca-bug/']] },
  { t: 'TCC · LLMs na localização de falhas', lang: 'Python', nat: 'Pesquisa', ano: 2026,
    d: 'Material completo da execução piloto: seleção dos defeitos, consultas enviadas aos modelos, respostas recebidas, métricas e os testes que conferem os números publicados.',
    tech: 'Python · C# · LLMs · Top-N / MRR', links: [['Código', 'https://github.com/vitorhugoramosd/tcc-llm-localizacao-falhas-csharp']] },
  { t: 'VibeMovies', lang: 'C# / TypeScript', nat: 'Pessoal', ano: 2026,
    d: 'Escolha filmes pelo clima do momento, veja onde assistir e mantenha um diário do que já viu. A recomendação é determinística, cruzando metadados do TMDB, sem API paga de IA.',
    tech: 'ASP.NET Core · Clean Architecture · EF Core · PostgreSQL · TypeScript', links: [['Código', 'https://github.com/vitorhugoramosd/VibeMovies-']] },
  { t: 'Blade Dash', lang: 'JavaScript', nat: 'Pessoal', ano: 2026,
    d: 'Launcher de jogos para Windows navegável pelo controle. Detecta jogos da Steam, Epic, Ubisoft, EA e Xbox, baixa as capas e conta o tempo de jogo.',
    tech: 'Electron · JavaScript · Gamepad API', links: [['Código', 'https://github.com/vitorhugoramosd/InterfaceXbox360']] },
  { t: 'J.A.R.V.I.S. pessoal', lang: 'JavaScript', nat: 'Pessoal', ano: 2026,
    d: 'Painel que abre junto com o Windows: saudação falada, notícias, futebol, clima, cotações, uso de CPU e memória e um chat com Claude integrado.',
    tech: 'Electron · JavaScript · APIs públicas', links: [['Código', 'https://github.com/vitorhugoramosd/JarvisPessoal']] },
  { t: 'Freshly', lang: 'JavaScript', nat: 'Pessoal', ano: 2026,
    d: 'PWA contra o desperdício: cadastre alimentos, receba alertas de validade, veja receitas sugeridas e acompanhe quanto dinheiro economizou.',
    tech: 'React · Vite · Supabase · PWA', links: [['Ver online', 'https://freshly-blond.vercel.app'], ['Código', 'https://github.com/vitorhugoramosd/Freshly']] },
  { t: 'MeuERP', lang: 'C#', nat: 'Estudo', ano: 2026,
    d: 'ERP desktop de estudo: cadastro de produtos e movimentação de estoque, em camadas (Models, Repositories, Services) sobre PostgreSQL.',
    tech: 'C# 12 · .NET 10 · Windows Forms · PostgreSQL', links: [['Código', 'https://github.com/vitorhugoramosd/MeuERP']] },
  { t: 'Plataforma de Gestão de Eventos', lang: 'Java', nat: 'Acadêmico', ano: 2025,
    d: 'Microsserviços cobrindo o ciclo completo: usuários, eventos, agendamento, inscrições, pagamentos e relatórios, com service discovery, API Gateway e autenticação central por papéis.',
    tech: 'Java · Spring Cloud · Eureka · Gateway', links: [['Código', 'https://github.com/vitorhugoramosd/Sistema-de-Gestao-de-Eventos']] },
  { t: 'JoinUp · Ingressos', lang: 'Java', nat: 'Acadêmico', ano: 2025,
    d: 'Compra de ingressos em Arquitetura Hexagonal (ports & adapters), com módulos de eventos, ingressos, organizadores e notificações por e-mail.',
    tech: 'Java 17 · Spring Boot · JWT · Hexagonal', links: [['Código', 'https://github.com/vitorhugoramosd/JoinUp-Vitor']] },
  { t: 'MedTime', lang: 'Java', nat: 'Acadêmico', ano: 2025,
    d: 'Agendamento de consultas médicas: cadastro de pacientes e médicos, especialidades e o fluxo completo de marcação.',
    tech: 'Java 17 · Spring Boot · JPA · Docker', links: [['Código', 'https://github.com/vitorhugoramosd/MedTime---Sistema-de-Agendamento-de-Consultas']] },
];

/* ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const EMAIL = `${CONFIG.emailUser}@${CONFIG.emailHost}`;
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* sem armazenamento */ } },
  del(k) { try { localStorage.removeItem(k); } catch { /* sem armazenamento */ } },
};
const pad = (n) => String(n).padStart(2, '0');
const fmtDate = (d) => `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => t.classList.remove('show'), 2400);
}

/* ---------- a folha "sai da impressora" (só se a aba estiver visível) ---------- */
(function feed() {
  const sheet = $('#sheet');
  if (document.hidden || scrollY > 0 || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  requestAnimationFrame(() => {
    sheet.classList.add('feeding');
    const off = () => sheet.classList.remove('feeding');
    sheet.addEventListener('animationend', off, { once: true });
    setTimeout(off, 2200);
  });
})();

/* ---------- datas, relógio, código de barras ---------- */
const now = new Date();
$('#recvDate').textContent = fmtDate(now);
$('#goodDate').textContent = fmtDate(now);
$('#badDate').textContent = `31/02/${now.getFullYear()}`;
$('#year').textContent = now.getFullYear();
(function clock() {
  const d = new Date();
  $('#clock').textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  setTimeout(clock, 1000);
})();
$('#bars').innerHTML = [...$('#chave').textContent.replace(/\s/g, '')].map((ch, i) => {
  const n = +ch;
  return `<i style="width:${1 + (n % 3)}px;margin-right:${1 + ((n + i) % 3)}px"></i><i style="width:${1 + ((n >> 1) % 2)}px;margin-right:${1 + (i % 2)}px"></i>`;
}).join('');

/* ---------- tabela de projetos ---------- */
$('#rows').innerHTML = PROJECTS.map((p, i) => `
  <tr class="item" data-i="${i}">
    <td>${String(i + 1).padStart(3, '0')}</td>
    <td><button type="button" class="tog" aria-expanded="false">${esc(p.t)}${p.novo ? '<span class="novo">novo</span>' : ''}</button></td>
    <td>${esc(p.lang)}</td>
    <td class="hide-m">${esc(p.nat)}</td>
    <td class="hide-m num">${p.ano}</td>
    <td class="pm no-print" aria-hidden="true">+</td>
  </tr>
  <tr class="det" hidden>
    <td></td>
    <td colspan="5">${esc(p.d)}
      <div class="tech">${esc(p.tech)}</div>
      ${p.links.map(([l, u]) => `<a href="${esc(u)}"${u.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${esc(l)} →</a>`).join('')}
    </td>
  </tr>`).join('');
$('#rows').addEventListener('click', (e) => {
  if (e.target.closest('a')) return;
  const tr = e.target.closest('tr.item');
  if (!tr) return;
  const det = tr.nextElementSibling;
  det.hidden = !det.hidden;
  $('.tog', tr).setAttribute('aria-expanded', !det.hidden);
  $('.pm', tr).textContent = det.hidden ? '+' : '−';
});

/* ---------- GitHub ao vivo ---------- */
(async function github() {
  const body = $('#ghRows');
  try {
    let repos;
    let cached = null;
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
    const total = langs.reduce((s, [, n]) => s + n, 0);
    $('#nRepos').textContent = repos.length;
    $('#nLangs').textContent = langs.length;
    $('#langRow').innerHTML = langs.map(([l, n]) => `<div class="b"><span class="l">Alíquota ${esc(l)}</span><div class="v r">${(n / total * 100).toFixed(1).replace('.', ',')}%</div></div>`).join('');
    body.innerHTML = repos.slice(0, 6).map((r) => `<tr class="item" style="cursor:default"><td>${fmtDate(new Date(r.pushed))}</td><td><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.name)}</a></td><td>${esc(r.lang || '—')}</td></tr>`).join('');
  } catch {
    body.innerHTML = `<tr><td colspan="3">Consulta indisponível agora. <a href="https://github.com/${CONFIG.github}" target="_blank" rel="noopener">Abrir o GitHub</a></td></tr>`;
  }
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

/* ---------- assinatura do recebedor ---------- */
const sign = $('#sign');
sign.value = store.get('assinatura') || '';
function applySign() { $('#destNome').textContent = sign.value.trim() || 'Você'; }
sign.addEventListener('input', () => { store.set('assinatura', sign.value); applySign(); });
applySign();

/* ---------- os 5 defeitos plantados ---------- */
(function qa() {
  const bugs = $$('.bug');
  const total = bugs.length;
  let found = (store.get('defeitos') || '').split(',').filter(Boolean);
  let start = +store.get('defeitos-inicio') || Date.now();
  store.set('defeitos-inicio', start);

  function render(animate) {
    bugs.forEach((b) => b.classList.toggle('found', found.includes(b.dataset.id)));
    const n = found.length;
    $('#qaCount').textContent = `${n}/${total}`;
    $('#nBugs').textContent = `${n}/${total}`;
    $('#log').innerHTML = bugs.map((b) => `<li class="${found.includes(b.dataset.id) ? 'ok' : ''}">${found.includes(b.dataset.id) ? esc(b.dataset.what) : 'defeito não localizado'}</li>`).join('');
    $('#resetBtn').hidden = n === 0;
    const done = n === total;
    $('#qa').classList.toggle('done', done);
    $('#hintBtn').hidden = done;
    if (done) {
      const secs = Math.max(1, Math.round(((+store.get('defeitos-fim') || Date.now()) - start) / 1000));
      const tempo = `${pad(Math.floor(secs / 60))}:${pad(secs % 60)}`;
      $('#qaMsg').innerHTML = '<b>Documento conferido.</b> Você localizou os 5 defeitos. É isso que eu faço o dia inteiro.';
      $('#stampSlot').innerHTML = `<div class="stamp"${animate ? '' : ' style="animation:none"'}>Conferido<small>${total}/${total} defeitos · tempo ${tempo}</small></div>`;
    } else {
      $('#qaMsg').innerHTML = `<b>Controle de qualidade:</b> este documento foi emitido com ${total} defeitos. Achou algo estranho? Clique em cima.`;
      $('#stampSlot').innerHTML = '';
    }
  }

  document.addEventListener('click', (e) => {
    const b = e.target.closest('.bug');
    if (!b || found.includes(b.dataset.id)) return;
    found.push(b.dataset.id);
    store.set('defeitos', found.join(','));
    const done = found.length === total;
    if (done) store.set('defeitos-fim', Date.now());
    render(true);
    toast(done ? 'Todos os defeitos localizados. Carimbo liberado.' : `Defeito localizado: ${found.length}/${total}`);
    if (done) $('#stampSlot').scrollIntoView({ block: 'center' });
  });

  $('#hintBtn').addEventListener('click', () => {
    const next = bugs.find((b) => !found.includes(b.dataset.id));
    if (!next) return;
    const area = next.closest('.b, th');
    area.scrollIntoView({ block: 'center' });
    area.classList.remove('flash');
    void area.offsetWidth;
    area.classList.add('flash');
    toast('Tem um defeito neste campo.');
  });

  $('#resetBtn').addEventListener('click', () => {
    found = []; start = Date.now();
    store.del('defeitos'); store.del('defeitos-fim'); store.set('defeitos-inicio', start);
    render(false);
    scrollTo({ top: 0 });
  });

  render(false);
})();

/* ---------- contato e impressão ---------- */
const mail = $('#mail');
mail.href = 'mailto:' + EMAIL;
mail.textContent = EMAIL;
$('#copyBtn').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(EMAIL); toast('E-mail copiado.'); }
  catch { toast(EMAIL); }
});
if (CONFIG.linkedin) { $('#li').href = CONFIG.linkedin; $('#liWrap').hidden = false; }
$('#printBtn').addEventListener('click', () => print());
