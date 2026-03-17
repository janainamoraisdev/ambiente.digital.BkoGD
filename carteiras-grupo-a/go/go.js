const ESTADOS = {
  GO: { label: 'Goiás',        campo: 'municipio' },
};

let dados = null;
let estadoAtivo = 'GO';
let termoBusca = '';

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
    btn.onclick = () => { estadoAtivo = sigla; termoBusca = ''; document.getElementById('busca').value = ''; renderTabs(); renderTabela(); };
    container.appendChild(btn);
  });
}

function renderTabela() {
  const container = document.getElementById('conteudo');
  const info = ESTADOS[estadoAtivo];
  let lista = dados[estadoAtivo] || [];

  if (termoBusca) {
    const t = termoBusca.toLowerCase();
    lista = lista.filter(item => Object.values(item).some(v => v && v.toLowerCase().includes(t)));
  }

  document.getElementById('infoCount').textContent = `${lista.length} registro(s) encontrado(s) — ${estadoAtivo}`;

  if (estadoAtivo === 'AP') {
    container.innerHTML = `<div class="ap-grid">${lista.map(i => `
      <div class="ap-card">
        <h4>${i.carteira}</h4>
        <p>${i.observacao}</p>
      </div>`).join('')}</div>`;
    return;
  }

  if (!lista.length) {
    container.innerHTML = `<p class="nenhum">Nenhum resultado encontrado.</p>`;
    return;
  }

  const campoMunicipio = info.campo;
  const temPPM = lista[0].carteira_ppm !== undefined;
  const campoCarteira = lista[0].carteira_regional !== undefined ? 'carteira_regional' : 'carteira_grupo_a';

  container.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Município / Bairro</th>
          <th>Carteira Grupo A</th>
          ${temPPM ? '<th>Carteira PPM</th>' : ''}
        </tr>
      </thead>
      <tbody>
        ${lista.map(item => `
          <tr>
            <td>${item[campoMunicipio] || ''}</td>
            <td><span class="badge">${item[campoCarteira] || ''}</span></td>
            ${temPPM ? `<td><span class="badge badge-ppm">${item.carteira_ppm || ''}</span></td>` : ''}
          </tr>`).join('')}
      </tbody>
    </table>`;
}

document.getElementById('busca').addEventListener('input', e => {
  termoBusca = e.target.value;
  renderTabela();
});

carregarDados();