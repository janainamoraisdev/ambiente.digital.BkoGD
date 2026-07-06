const ESTADOS = {
  PI:  { label: 'Piauí' }
};

let dados = null;
let estadoAtivo = 'PI';
let termoBusca = '';

// Remove acentos e deixa em minúsculas, para busca "fuzzy"
function normalizar(str) {
  return str
    ? String(str).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    : '';
}

async function carregarDados() {
  const resp = await fetch('carteiras.json');
  dados = await resp.json();
  renderTabs();
  renderTabela();
}

function renderTabs() {
  const container = document.getElementById('tabs');
  container.innerHTML = '';
  Object.entries(ESTADOS).forEach(([sigla, info]) => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (sigla === estadoAtivo ? ' ativo' : '');
    btn.textContent = info.label;
    btn.onclick = () => {
      estadoAtivo = sigla;
      termoBusca = '';
      document.getElementById('busca').value = '';
      renderTabs();
      renderTabela();
    };
    container.appendChild(btn);
  });
}

// Agrupa a lista (já filtrada) por CARTEIRA, preservando a ordem de chegada
function agruparPorCarteira(lista) {
  const grupos = new Map();
  lista.forEach(item => {
    const chave = item.carteira || '(sem carteira)';
    if (!grupos.has(chave)) {
      grupos.set(chave, { carteira: chave, descricao: item.descricao, regional: item.regional, pessoas: [] });
    }
    grupos.get(chave).pessoas.push(item);
  });
  return Array.from(grupos.values());
}

function badgeCargo(cargo) {
  const c = normalizar(cargo);
  const classe = c.includes('consult') ? 'badge-consultor'
               : c.includes('assist') ? 'badge-assistente'
               : 'badge';
  return `<span class="badge ${classe}">${cargo || '-'}</span>`;
}

function renderTabela() {
  const container = document.getElementById('conteudo');
  let lista = dados[estadoAtivo] || [];

  if (termoBusca) {
    const t = normalizar(termoBusca);
    lista = lista.filter(item =>
      Object.values(item).some(v => normalizar(v).includes(t))
    );
  }

  document.getElementById('infoCount').textContent =
    `${lista.length} registro(s) — ${ESTADOS[estadoAtivo].label}`;

  if (!lista.length) {
    container.innerHTML = `<p class="nenhum">Nenhum resultado encontrado.</p>`;
    return;
  }

  const grupos = agruparPorCarteira(lista);

  container.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Regional</th>
          <th>Carteira</th>
          <th>O que é</th>
          <th>Cargo</th>
          <th>Agente</th>
          <th>E-mail</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        ${grupos.map(grupo => grupo.pessoas.map((pessoa, idx) => `
          <tr>
            ${idx === 0 ? `
              <td rowspan="${grupo.pessoas.length}">${grupo.regional || ''}</td>
              <td rowspan="${grupo.pessoas.length}"><strong>${grupo.carteira}</strong></td>
              <td rowspan="${grupo.pessoas.length}">${grupo.descricao || ''}</td>
            ` : ''}
            <td>${badgeCargo(pessoa.cargo)}</td>
            <td>${pessoa.agente || '-'}</td>
            <td>${pessoa.email ? `<a href="mailto:${pessoa.email}">${pessoa.email}</a>` : '-'}</td>
            <td>${pessoa.telefone || '-'}</td>
          </tr>`).join('')).join('')}
      </tbody>
    </table>`;
}

document.getElementById('busca').addEventListener('input', e => {
  termoBusca = e.target.value;
  renderTabela();
});

carregarDados();

