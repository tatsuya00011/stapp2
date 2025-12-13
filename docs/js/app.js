const container = document.getElementById('card-container');
let cards = [
  { id:1, label:'りんご', icon:'🍎', audio:'' },
  { id:2, label:'バナナ', icon:'🍌', audio:'' },
  { id:3, label:'みかん', icon:'🍊', audio:'' },
  { id:4, label:'ぶどう', icon:'🍇', audio:'' },
  { id:5, label:'いちご', icon:'🍓', audio:'' },
  { id:6, label:'スイカ', icon:'🍉', audio:'' },
  { id:7, label:'犬', icon:'🐕', audio:'' },
  { id:8, label:'猫', icon:'🐈', audio:'' },
  { id:9, label:'鳥', icon:'🐦', audio:'' },
  { id:10, label:'車', icon:'🚗', audio:'' }
];
let pageIdx = 0;

function render() {
  if (!cards.length) {
    container.innerHTML = '<p>カードがありません</p>';
    return;
  }
  const cardsPerPage = 3;
  const start = pageIdx * cardsPerPage;
  const end = start + cardsPerPage;
  const page = cards.slice(start, end);
  
  let html = '<div style="display:flex;gap:20px;justify-content:center;flex-wrap:wrap;">';
  page.forEach(c => {
    html += `
      <div class="card" style="text-align:center;width:150px;">
        <div style="font-size:80px;">${c.icon}</div>
        <h3>${c.label}</h3>
      </div>
    `;
  });
  html += '</div>';
  html += `<div style="text-align:center;margin-top:20px;">
    ${pageIdx > 0 ? `<button id="prev">前へ</button>` : ''}
    <button id="next">次へ</button>
    <p>ページ ${pageIdx + 1} / ${Math.ceil(cards.length / cardsPerPage)}</p>
  </div>`;
  
  container.innerHTML = html;
  
  const next = document.getElementById('next');
  if (next) next.addEventListener('click', ()=> {
    if ((pageIdx + 1) * 3 < cards.length) {
      pageIdx++;
      render();
    }
  });
  
  const prev = document.getElementById('prev');
  if (prev) prev.addEventListener('click', ()=> {
    if (pageIdx > 0) {
      pageIdx--;
      render();
    }
  });
}

render();