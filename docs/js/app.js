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
let idx = 0;

function render() {
  if (!cards.length) {
    container.innerHTML = '<p>カードがありません</p>';
    return;
  }
  const c = cards[idx];
  container.innerHTML = `
    <div class="card">
      <div style="font-size:120px;margin:20px 0;">${c.icon}</div>
      <h2>${c.label}</h2>
      <div style="margin-top:8px;">
        ${c.audio ? `<button id="play">再生</button>` : ''}
        <button id="next">次へ</button>
      </div>
    </div>
  `;
  const next = document.getElementById('next');
  if (next) next.addEventListener('click', ()=> { idx = (idx+1) % cards.length; render(); });
  const play = document.getElementById('play');
  if (play) play.addEventListener('click', ()=> { new Audio(c.audio).play().catch(()=>{}); });
}

render();