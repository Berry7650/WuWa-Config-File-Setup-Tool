// ══════════════════════════════════════════════════
// ELEMENT + CHARACTER DATA
// ══════════════════════════════════════════════════
const ELEM_COLORS={
  fusion:  {r:'255,90,40',  accent:'#ff5a28',label:'🔥 FUSION'},
  aero:    {r:'50,220,130', accent:'#32dc82',label:'🌿 AERO'},
  spectro: {r:'210,190,70', accent:'#d2be46',label:'✨ SPECTRO'},
  havoc:   {r:'200,55,175', accent:'#c837af',label:'🌀 HAVOC'},
  glacio:  {r:'70,200,255', accent:'#46c8ff',label:'❄ GLACIO'},
  electro: {r:'150,75,255', accent:'#964bff',label:'⚡ ELECTRO'},
};
const CHARS = [
  // ===== HAVOC =====
  {name:'Rover (Havoc)',  elem:'havoc',   weapon:'sword',      role:'dps',     rarity:5, desc:'Main protagonist — dark form'},
  {name:'Danjin',        elem:'havoc',   weapon:'sword',      role:'dps',     rarity:4, desc:'HP sacrifice fighter'},
  {name:'Camellya',      elem:'havoc',   weapon:'sword',      role:'dps',     rarity:5, desc:'Elegant whirlwind fighter'},
  {name:'Cantarella',    elem:'havoc',   weapon:'rectifier',  role:'sub',     rarity:5, desc:'Mysterious off-field caster'},
  {name:'Roccia',        elem:'havoc',   weapon:'gauntlets',  role:'dps',     rarity:5, desc:'Chaos brawler'},
  {name:'Phrolova',      elem:'havoc',   weapon:'rectifier',  role:'sub',     rarity:5, desc:'Havoc resonance specialist'},
  {name:'Chisa',         elem:'havoc',   weapon:'broadblade', role:'dps',     rarity:5, desc:'Havoc broadblade slayer'},
  {name:'Taoqi',         elem:'havoc',   weapon:'broadblade', role:'support', rarity:4, desc:'Defensive shield guard'},
  {name:'Shouanren',     elem:'havoc',   weapon:'gauntlets',  role:'sub',     rarity:4, desc:'Frontline brawler'},

  // ===== SPECTRO =====
  {name:'Rover (Spectro)',elem:'spectro',weapon:'sword',      role:'dps',     rarity:5, desc:'Main protagonist — light form'},
  {name:'Verina',        elem:'spectro', weapon:'rectifier',  role:'support', rarity:5, desc:'Top sustain healer'},
  {name:'Jinhsi',        elem:'spectro', weapon:'broadblade', role:'dps',     rarity:5, desc:'Magistrate of Jinzhou'},
  {name:'Shorekeeper',   elem:'spectro', weapon:'rectifier',  role:'support', rarity:5, desc:'Tethys system AI'},
  {name:'Phoebe',        elem:'spectro', weapon:'rectifier',  role:'dps',     rarity:5, desc:'Dual-playstyle unit'},
  {name:'Zani',          elem:'spectro', weapon:'gauntlets',  role:'dps',     rarity:5, desc:'Spectro gauntlet fighter'},
  {name:'Lynae',         elem:'spectro', weapon:'pistols',    role:'sub',     rarity:5, desc:'Off-field Tune Break buffer'},
  {name:'Luuk Herssen',  elem:'spectro', weapon:'gauntlets',  role:'dps',     rarity:5, desc:'Spectro combo powerhouse'},

  // ===== GLACIO =====
  {name:'Lingyang',      elem:'glacio',  weapon:'gauntlets',  role:'dps',     rarity:5, desc:'Lion dancer close-range fighter'},
  {name:'Carlotta',      elem:'glacio',  weapon:'pistols',    role:'dps',     rarity:5, desc:'Cryo shotgun sniper'},
  {name:'Zhezhi',        elem:'glacio',  weapon:'rectifier',  role:'sub',     rarity:5, desc:'DoT imprint caster'},
  {name:'Hiyuki',        elem:'glacio',  weapon:'sword',      role:'dps',     rarity:5, desc:'Glacio combo swordswoman'},
  {name:'Sanhua',        elem:'glacio',  weapon:'sword',      role:'sub',     rarity:4, desc:'Jinhsi bodyguard'},
  {name:'Baizhi',        elem:'glacio',  weapon:'rectifier',  role:'support', rarity:4, desc:'Medic researcher'},
  {name:'Youhu',         elem:'glacio',  weapon:'gauntlets',  role:'support', rarity:4, desc:'RNG healer buffer'},

  // ===== FUSION =====
  {name:'Encore',        elem:'fusion',  weapon:'rectifier',  role:'dps',     rarity:5, desc:'Explosive girl'},
  {name:'Changli',       elem:'fusion',  weapon:'sword',      role:'dps',     rarity:5, desc:'Strategist of Jinzhou'},
  {name:'Brant',         elem:'fusion',  weapon:'sword',      role:'dps',     rarity:5, desc:'High DPS complex stat manager'},
  {name:'Lupa',          elem:'fusion',  weapon:'broadblade', role:'dps',     rarity:5, desc:'Fusion broadblade berserker'},
  {name:'Galbrena',      elem:'fusion',  weapon:'pistols',    role:'dps',     rarity:5, desc:'Fusion pistol specialist'},
  {name:'Mornye',        elem:'fusion',  weapon:'broadblade', role:'support', rarity:5, desc:'Stagger-based sustain support'},
  {name:'Aemeath',       elem:'fusion',  weapon:'sword',      role:'dps',     rarity:5, desc:'Complex top-tier Fusion DPS'},
  {name:'Denia',         elem:'fusion',  weapon:'rectifier',  role:'support', rarity:5, desc:'Fusion resonance caster'},
  {name:'Chixia',        elem:'fusion',  weapon:'pistols',    role:'dps',     rarity:4, desc:'Starter bullet-count DPS'},
  {name:'Mortefi',       elem:'fusion',  weapon:'pistols',    role:'sub',     rarity:4, desc:'Heavy attack off-field buffer'},

  // ===== ELECTRO =====
  {name:'Yinlin',        elem:'electro', weapon:'rectifier',  role:'sub',     rarity:5, desc:'Puppet master off-field DPS'},
  {name:'Calcharo',      elem:'electro', weapon:'broadblade', role:'dps',     rarity:5, desc:'Mercenary leader'},
  {name:'Xiangli Yao',   elem:'electro', weapon:'gauntlets',  role:'dps',     rarity:5, desc:'Electro liberation powerhouse'},
  {name:'Augusta',       elem:'electro', weapon:'broadblade', role:'dps',     rarity:5, desc:'Electro broadblade bruiser'},
  {name:'Lumi',          elem:'electro', weapon:'broadblade', role:'sub',     rarity:4, desc:'Dual-mode coordination buffer'},
  {name:'Yuanwu',        elem:'electro', weapon:'gauntlets',  role:'support', rarity:4, desc:'Defense buffer'},
  {name:'Buling',        elem:'electro', weapon:'rectifier',  role:'sub',     rarity:4, desc:'Electro off-field resonator'},

  // ===== AERO =====
  {name:'Jiyan',         elem:'aero',    weapon:'broadblade', role:'dps',     rarity:5, desc:'Midnight Ranger General'},
  {name:'Jianxin',       elem:'aero',    weapon:'gauntlets',  role:'support', rarity:5, desc:'Martial artist monk'},
  {name:'Ciaccona',      elem:'aero',    weapon:'pistols',    role:'dps',     rarity:5, desc:'Aero pistol dancer'},
  {name:'Rover (Aero)',  elem:'aero',    weapon:'sword',      role:'dps',     rarity:5, desc:'Main protagonist — wind form'},
  {name:'Cartethyia',    elem:'aero',    weapon:'sword',      role:'dps',     rarity:5, desc:'Aero swordswoman'},
  {name:'Iuno',          elem:'aero',    weapon:'gauntlets',  role:'support', rarity:5, desc:'Aero support brawler'},
  {name:'Qiuyuan',       elem:'aero',    weapon:'sword',      role:'dps',     rarity:5, desc:'Aero sword resonator'},
  {name:'Sigrika',       elem:'aero',    weapon:'gauntlets',  role:'dps',     rarity:5, desc:'Top Echo-DMG Aero DPS'},
  {name:'Yangyang',      elem:'aero',    weapon:'sword',      role:'sub',     rarity:4, desc:'Free spirit scout'},
  {name:'Aalto',         elem:'aero',    weapon:'pistols',    role:'sub',     rarity:4, desc:'Information broker'},
];

const IMG_EXTS=['png','jpg','jpeg','webp','gif','avif','bmp','svg'];
// 7 Ken Burns variants mapped to slide index mod 7
const KBV=['','v1','v2','v3','v4','v5','v6'];
const SLIDE_DUR=14000;
let _slides=[],_idx=0,_timer=null;

function tryLoadImg(name){
  // Generate many path/name variants to maximise image discovery
  const exts=IMG_EXTS;
  const variants=new Set();
  const add=(stem)=>{
    exts.forEach(ext=>{
      variants.add(`assets/images/characters/${stem}.${ext}`);
      variants.add(`images/${stem}.${ext}`);
      variants.add(`chars/${stem}.${ext}`);
      variants.add(`assets/${stem}.${ext}`);
      variants.add(`${stem}.${ext}`);
    });
  };
  // All the name transforms
  const raw=name;
  const lower=raw.toLowerCase();
  const noSpace=lower.replace(/\s+/g,'');
  const hyphen=lower.replace(/\s+/g,'-');
  const under=lower.replace(/\s+/g,'_');
  const noParens=lower.replace(/[()]/g,'').replace(/\s+/g,'');
  const noParensHyp=lower.replace(/[()]/g,'').trim().replace(/\s+/g,'-');
  const noParensUnd=lower.replace(/[()]/g,'').trim().replace(/\s+/g,'_');
  const firstWord=lower.split(' ')[0];
  // Original casing variants
  const rawNoSpace=raw.replace(/\s+/g,'');
  const rawHyphen=raw.replace(/\s+/g,'-');
  [noSpace,hyphen,under,noParens,noParensHyp,noParensUnd,firstWord,
   raw,rawNoSpace,rawHyphen,lower].forEach(add);
  const arr=[...variants];
  return new Promise(resolve=>{
    let tried=0;
    function next(){
      if(tried>=arr.length){resolve(null);return;}
      const src=arr[tried++];
      const img=new Image();
      img.onload=()=>resolve(src);
      img.onerror=next;
      img.src=src;
    }
    next();
  });
}

function showToast(msg){
  const el=document.getElementById('toast');
  if(!el)return;
  el.textContent=msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t=setTimeout(()=>el.classList.remove('show'),2000);
}

async function buildShowcase(){
  // Show loading state
  const root=document.getElementById('showcase-root');
  root.innerHTML='<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:var(--C);font-size:.7rem;color:rgba(0,212,232,.3);letter-spacing:.1em;">LOADING SHOWCASE...</div>';
  const firstBatch=await Promise.all(CHARS.slice(0, 2).map(c=>tryLoadImg(c.name)));
  const imgResults=[...firstBatch, ...Array(CHARS.length - 2).fill(null)];
  _buildSlides(imgResults);

  setTimeout(async () => {
    const restBatch=await Promise.all(CHARS.slice(2).map(c=>tryLoadImg(c.name)));
    const loaded=firstBatch.filter(Boolean).length + restBatch.filter(Boolean).length;
    for(let i=2;i<CHARS.length;i++){
      if(restBatch[i-2]&&_slides[i]){
        const bg=_slides[i].div.querySelector('.slide-bg');
        if(bg){
          const pos=(['center 8%','center 10%','center 5%','top center','center 15%','center 12%','center 8%'])[i%7];
          bg.style.cssText=`background-image:url('${restBatch[i-2]}');background-size:cover;background-position:${pos};z-index:1;`;
          const ec=_slides[i].ec;
          const tint=document.createElement('div');
          tint.style.cssText=`position:absolute;inset:0;pointer-events:none;z-index:1;background:radial-gradient(ellipse 55% 75% at 82% 25%,rgba(${ec.r},.16) 0%,transparent 55%),radial-gradient(ellipse 70% 50% at 50% 105%,rgba(${ec.r},.14) 0%,transparent 50%);`;
          _slides[i].div.insertBefore(tint,bg.nextSibling);
        }
      }
    }
    const logoBadge=document.getElementById('stat-badge');
    if(loaded>0&&logoBadge&&logoBadge.textContent==='● INIT'){
      console.log(`[Showcase] ${loaded}/${CHARS.length} images lazy loaded`);
    }
  },500);
}

function _buildSlides(imgUrls){
  const root=document.getElementById('showcase-root');
  const dotsWrap=document.getElementById('cdots-wrap');
  root.innerHTML='';dotsWrap.innerHTML='';_slides=[];
  // Show image load summary in console
  const loaded=imgUrls?imgUrls.filter(Boolean).length:0;
  console.log(`[Showcase] ${loaded}/${CHARS.length} character images loaded`);
  const gradients={
    fusion:`radial-gradient(ellipse 80% 120% at 80% -10%,rgba(255,150,80,.25) 0%,transparent 55%),radial-gradient(ellipse 60% 80% at 100% 60%,rgba(255,90,40,.18) 0%,transparent 50%),linear-gradient(135deg,#0a0208 0%,#1a0810 40%,#0d0405 100%)`,
    aero:`radial-gradient(ellipse 80% 120% at 75% -5%,rgba(80,255,160,.2) 0%,transparent 55%),radial-gradient(ellipse 60% 70% at 100% 50%,rgba(50,220,130,.15) 0%,transparent 50%),linear-gradient(135deg,#020a06 0%,#0a1e10 40%,#040d08 100%)`,
    spectro:`radial-gradient(ellipse 90% 110% at 78% -8%,rgba(255,240,120,.22) 0%,transparent 55%),radial-gradient(ellipse 55% 75% at 100% 55%,rgba(210,190,70,.15) 0%,transparent 50%),linear-gradient(135deg,#090801 0%,#1a1604 40%,#0c0b02 100%)`,
    havoc:`radial-gradient(ellipse 80% 120% at 82% -5%,rgba(220,60,200,.22) 0%,transparent 55%),radial-gradient(ellipse 60% 80% at 100% 58%,rgba(200,55,175,.16) 0%,transparent 50%),linear-gradient(135deg,#08020a 0%,#190810 40%,#0d0508 100%)`,
    glacio:`radial-gradient(ellipse 80% 120% at 78% -8%,rgba(100,220,255,.2) 0%,transparent 55%),radial-gradient(ellipse 60% 75% at 100% 55%,rgba(70,200,255,.15) 0%,transparent 50%),linear-gradient(135deg,#020810 0%,#081828 40%,#030c16 100%)`,
    electro:`radial-gradient(ellipse 80% 120% at 80% -6%,rgba(180,100,255,.22) 0%,transparent 55%),radial-gradient(ellipse 55% 80% at 100% 56%,rgba(150,75,255,.16) 0%,transparent 50%),linear-gradient(135deg,#050208 0%,#100618 40%,#080312 100%)`,
  };
  CHARS.forEach((c,i)=>{
    const ec=ELEM_COLORS[c.elem];
    const imgSrc=imgUrls?imgUrls[i]:null;
    const div=document.createElement('div');
    div.className='cslide '+KBV[i%7];
    div.dataset.idx=i;
    const bg=document.createElement('div');
    bg.className='slide-bg';
    if(imgSrc){
      // Smart positioning based on slide variant
      const pos=(['center 8%','center 10%','center 5%','top center','center 15%','center 12%','center 8%'])[i%7];
      bg.style.cssText=`background-image:url('${imgSrc}');background-size:cover;background-position:${pos};z-index:1;`;
      // Per-element colour tint layered on photo
      const tint=document.createElement('div');
      tint.style.cssText=`position:absolute;inset:0;pointer-events:none;z-index:1;`
        +`background:radial-gradient(ellipse 55% 75% at 82% 25%,rgba(${ec.r},.16) 0%,transparent 55%),`
        +`radial-gradient(ellipse 70% 50% at 50% 105%,rgba(${ec.r},.14) 0%,transparent 50%);`;
      div.appendChild(tint);
    } else {
      bg.style.background=gradients[c.elem];
    }
    div.appendChild(bg);
    const ov=document.createElement('div');ov.className='slide-overlay';div.appendChild(ov);
    // Three bloom layers — bigger and more impactful
    const bloom=document.createElement('div');
    bloom.className='slide-bloom';
    bloom.style.cssText=`right:-12%;bottom:-18%;width:750px;height:750px;z-index:1;`
      +`background:radial-gradient(circle,rgba(${ec.r},.14) 0%,transparent 58%);`;
    div.appendChild(bloom);
    const bloom2=document.createElement('div');
    bloom2.className='slide-bloom slide-bloom2';
    bloom2.style.cssText=`right:8%;top:-18%;width:620px;height:620px;`
      +`background:radial-gradient(circle,rgba(${ec.r},.14) 0%,transparent 60%);transition-delay:.8s`;
    div.appendChild(bloom2);

    // Particles
    const pc=document.createElement('div');
    pc.className='slide-particles';
    pc.style.cssText='position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:2;';
    _makeElemParticles(pc, c.elem, ec);
    div.appendChild(pc);
    // Decorative SVG lines (right side)
    const deco=document.createElement('div');
    deco.style.cssText=`position:absolute;right:0;top:0;bottom:0;width:55%;pointer-events:none;overflow:hidden;`;
    deco.innerHTML=`<svg style="position:absolute;inset:0;width:100%;height:100%;opacity:.07" viewBox="0 0 440 900" preserveAspectRatio="xMaxYMin slice">
      <defs>
        <linearGradient id="lg${i}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="rgba(${ec.r},1)"/>
          <stop offset="100%" stop-color="transparent"/>
        </linearGradient>
      </defs>
      <circle cx="310" cy="130" r="95" fill="none" stroke="url(#lg${i})" stroke-width="1"/>
      <circle cx="310" cy="130" r="65" fill="none" stroke="rgba(${ec.r},.45)" stroke-width=".5"/>
      <circle cx="310" cy="130" r="40" fill="none" stroke="rgba(${ec.r},.25)" stroke-width=".4"/>
      <line x1="220" y1="0" x2="440" y2="900" stroke="rgba(${ec.r},.3)" stroke-width=".5"/>
      <line x1="180" y1="0" x2="400" y2="900" stroke="rgba(${ec.r},.15)" stroke-width=".3"/>
      <path d="M 220 250 Q 380 360 220 560 Q 380 680 330 900" fill="none" stroke="rgba(${ec.r},.2)" stroke-width="1"/>
    </svg>`;
    div.appendChild(deco);
    root.appendChild(div);
    _slides.push({div,char:c,ec});
    const dot=document.createElement('div');
    dot.className='cdot'+(i===0?' active':'');
    dot.onclick=()=>_goTo(i);dot.title=c.name;
    dotsWrap.appendChild(dot);
  });
  _goTo(0);_startTimer();
}

// ══ ELEMENT PARTICLE GENERATOR ══
function _makeElemParticles(container, elem, ec){
  const R=ec.r;
  const uid=()=>Math.floor(Math.random()*999999);

  // ──────────────────────────────────────────────
  // SHAPE BUILDERS
  // ──────────────────────────────────────────────

  // ❄ Snowflake
  function snowflake(sz){
    const r=sz/2;
    const c=`rgba(${R},1)`, cb=`rgba(200,240,255,.75)`;
    let d='';
    for(let a=0;a<6;a++){
      const rad=(a*60-90)*Math.PI/180;
      const ex=r+r*.92*Math.cos(rad), ey=r+r*.92*Math.sin(rad);
      d+=`<line x1="${r}" y1="${r}" x2="${ex}" y2="${ey}" stroke="${c}" stroke-width="1.5"/>`;
      for(const f of [.42,.68]){
        const bx=r+r*f*Math.cos(rad), by=r+r*f*Math.sin(rad);
        for(const s of [-55,55]){
          const br=(a*60-90+s)*Math.PI/180;
          d+=`<line x1="${bx}" y1="${by}" x2="${bx+r*.28*Math.cos(br)}" y2="${by+r*.28*Math.sin(br)}" stroke="${cb}" stroke-width=".8"/>`;
        }
      }
    }
    return`<svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}">
      <circle cx="${r}" cy="${r}" r="${r*.16}" fill="white"/>${d}</svg>`;
  }

  // 🔥 FUSION — campfire SPARK DOT: tiny glowing orb
  function sparkDot(sz, hot){
    const id=uid();
    const c0=hot?'rgba(255,255,240,1)':'rgba(255,215,80,1)';
    const c1=hot?'rgba(255,170,30,1)':'rgba(255,90,10,1)';
    return`<svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}">
      <defs><radialGradient id="sd${id}" cx="40%" cy="38%" r="58%">
        <stop offset="0%" stop-color="${c0}"/>
        <stop offset="45%" stop-color="${c1}"/>
        <stop offset="100%" stop-color="rgba(200,30,0,0)"/>
      </radialGradient></defs>
      <circle cx="${sz/2}" cy="${sz/2}" r="${sz/2}" fill="url(#sd${id})"/>
    </svg>`;
  }

  // 🔥 FUSION — campfire SPARK STREAK: elongated flying fleck
  function sparkStreak(w, h){
    const id=uid();
    return`<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <defs><radialGradient id="ss${id}" cx="50%" cy="30%" r="55%">
        <stop offset="0%" stop-color="rgba(255,250,200,1)"/>
        <stop offset="40%" stop-color="rgba(255,140,20,.9)"/>
        <stop offset="100%" stop-color="rgba(200,30,0,0)"/>
      </radialGradient></defs>
      <ellipse cx="${w/2}" cy="${h*.35}" rx="${w*.42}" ry="${h*.5}" fill="url(#ss${id})"/>
    </svg>`;
  }

  // 🌿 AERO — leaf SVG shape
  function leaf(sz){
    const id=uid(); const w=sz, h=sz*1.6;
    return`<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <defs><linearGradient id="lf${id}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(60,220,120,1)"/>
        <stop offset="55%" stop-color="rgba(40,180,90,.88)"/>
        <stop offset="100%" stop-color="rgba(20,140,60,.45)"/>
      </linearGradient></defs>
      <path d="M${w*.5},${h*.02} C${w*.92},${h*.15} ${w*.96},${h*.44} ${w*.5},${h*.62}
               C${w*.04},${h*.44} ${w*.08},${h*.15} ${w*.5},${h*.02}Z"
        fill="url(#lf${id})"/>
      <line x1="${w*.5}" y1="${h*.06}" x2="${w*.5}" y2="${h*.58}"
        stroke="rgba(20,130,60,.55)" stroke-width="${sz*.055}"/>
    </svg>`;
  }

    // ✨ SPECTRO — DRAMATIC STAR with long spike rays (lens flare style)
  function shiningLight(sz){
    const id=uid(); const r=sz/2;
    const rays=[
      {a:  0, len:r*5.5, tw:sz*.09, op:1.0},
      {a:180, len:r*5.5, tw:sz*.09, op:1.0},
      {a: 90, len:r*5.0, tw:sz*.08, op:0.95},
      {a:270, len:r*5.0, tw:sz*.08, op:0.95},
      {a: 45, len:r*2.8, tw:sz*.045,op:0.68},
      {a:135, len:r*2.8, tw:sz*.045,op:0.68},
      {a:225, len:r*2.8, tw:sz*.045,op:0.68},
      {a:315, len:r*2.8, tw:sz*.045,op:0.68},
      {a: 22, len:r*1.5, tw:sz*.018,op:0.32},
      {a: 67, len:r*1.5, tw:sz*.018,op:0.32},
      {a:112, len:r*1.5, tw:sz*.018,op:0.32},
      {a:157, len:r*1.5, tw:sz*.018,op:0.32},
      {a:202, len:r*1.5, tw:sz*.018,op:0.32},
      {a:247, len:r*1.5, tw:sz*.018,op:0.32},
      {a:292, len:r*1.5, tw:sz*.018,op:0.32},
      {a:337, len:r*1.5, tw:sz*.018,op:0.32},
    ];
    const defs=rays.map((ray,k)=>{
      const rad=(ray.a-90)*Math.PI/180;
      const ex=(.5+ray.len/sz*Math.cos(rad)).toFixed(3);
      const ey=(.5+ray.len/sz*Math.sin(rad)).toFixed(3);
      return`<linearGradient id="sr${id}${k}" x1=".5" y1=".5" x2="${ex}" y2="${ey}" gradientUnits="objectBoundingBox"><stop offset="0%" stop-color="rgba(255,255,252,1)"/><stop offset="8%" stop-color="rgba(255,245,180,.9)"/><stop offset="40%" stop-color="rgba(${R},.45)"/><stop offset="100%" stop-color="rgba(${R},0)"/></linearGradient>`;
    }).join('');
    const rayPaths=rays.map((ray,k)=>{
      const rad=(ray.a-90)*Math.PI/180;
      const perp=rad+Math.PI/2; const tw=ray.tw;
      const tipX=(r+ray.len*Math.cos(rad)).toFixed(2);
      const tipY=(r+ray.len*Math.sin(rad)).toFixed(2);
      const lx=(r+tw*Math.cos(perp)).toFixed(2); const ly=(r+tw*Math.sin(perp)).toFixed(2);
      const rx=(r-tw*Math.cos(perp)).toFixed(2); const ry=(r-tw*Math.sin(perp)).toFixed(2);
      return`<path d="M${lx},${ly} L${tipX},${tipY} L${rx},${ry}Z" fill="url(#sr${id}${k})" opacity="${ray.op}"/>`;
    }).join('');
    const lsW=sz*3.8;
    return`<svg width="${sz}" height="${sz}" viewBox="${-sz*2} ${-sz*2} ${sz*6} ${sz*6}" overflow="visible"><defs>${defs}<radialGradient id="c${id}" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(255,255,255,1)"/><stop offset="22%" stop-color="rgba(255,250,200,.88)"/><stop offset="60%" stop-color="rgba(${R},.3)"/><stop offset="100%" stop-color="rgba(${R},0)"/></radialGradient><linearGradient id="ls${id}" x1="0" y1=".5" x2="1" y2=".5"><stop offset="0%" stop-color="rgba(${R},0)"/><stop offset="28%" stop-color="rgba(255,238,140,.4)"/><stop offset="50%" stop-color="rgba(255,255,235,.62)"/><stop offset="72%" stop-color="rgba(255,238,140,.4)"/><stop offset="100%" stop-color="rgba(${R},0)"/></linearGradient></defs><rect x="${r-lsW/2}" y="${r-sz*.022}" width="${lsW}" height="${sz*.044}" fill="url(#ls${id})" rx="${sz*.022}"/>${rayPaths}<circle cx="${r}" cy="${r}" r="${r*.65}" fill="url(#c${id})"/><circle cx="${r}" cy="${r}" r="${r*.13}" fill="white" opacity=".97"/></svg>`;
  }

  // SPAWN BY ELEMENT
  // ──────────────────────────────────────────────

  if(elem==='glacio'){
    for(let j=0;j<32;j++){
      const el=document.createElement('div'); el.className='ep';
      const sz=8+Math.random()*18;
      const sw=((Math.random()-.5)*30)+'px';
      el.innerHTML=snowflake(sz);
      el.style.cssText=`left:${48+Math.random()*50}%;top:${-5+Math.random()*35}%;`
        +`width:${sz}px;height:${sz}px;--sw:${sw};`
        +`filter:drop-shadow(0 0 ${sz*.5}px rgba(${R},.8));`
        +`animation:snow-fall ${10+Math.random()*12}s ${Math.random()*16}s linear infinite,`
        +`snow-sway ${3+Math.random()*3}s ${Math.random()*4}s ease-in-out infinite;`
        +`opacity:${.55+Math.random()*.4};`;
      container.appendChild(el);
    }

  } else if(elem==='fusion'){
    // 🔥 CAMPFIRE SPARKS
    for(let j=0;j<70;j++){
      const el=document.createElement('div'); el.className='ep';
      const hot=Math.random()<.18;
      const sz=hot?(1.8+Math.random()*2.8):(1+Math.random()*4);
      const bx=55+Math.random()*32, by=2+Math.random()*10;
      const upDist=-(20+Math.random()*35);
      const jx1=((Math.random()-.5)*30)+'px', jy1=(upDist*.35)+'vh';
      const jx2=((Math.random()-.5)*45)+'px', jy2=(upDist*.68)+'vh';
      const jx3=((Math.random()-.5)*60)+'px', jy3=upDist+'vh';
      const sa=(Math.random()*30-15)+'deg';
      el.innerHTML=sparkDot(sz,hot);
      el.style.cssText=`left:${bx}%;bottom:${by}%;width:${sz}px;height:${sz}px;`
        +`--sx1:${jx1};--sy1:${jy1};--sx2:${jx2};--sy2:${jy2};--sx3:${jx3};--sy3:${jy3};--sa:${sa};`
        +`filter:drop-shadow(0 0 ${hot?sz*3.5:sz*2}px rgba(${hot?'255,220,80':R},.9));`
        +`animation:spark-pop ${1.6+Math.random()*3.5}s ${Math.random()*15}s ease-out infinite;`
        +`opacity:0;`;
      container.appendChild(el);
    }
    // 🔥 SPARK STREAKS
    for(let j=0;j<30;j++){
      const el=document.createElement('div'); el.className='ep';
      const w=1.5+Math.random()*2, h=4+Math.random()*9;
      const bx=56+Math.random()*30, by=2+Math.random()*8;
      const upDist=-(18+Math.random()*32);
      const jx1=((Math.random()-.5)*22)+'px', jy1=(upDist*.45)+'vh';
      const jx2=((Math.random()-.5)*38)+'px', jy2=upDist+'vh';
      const sa=(-75+Math.random()*50)+'deg';
      el.innerHTML=sparkStreak(w,h);
      el.style.cssText=`left:${bx}%;bottom:${by}%;width:${w}px;height:${h}px;`
        +`--sx1:${jx1};--sy1:${jy1};--sx2:${jx2};--sy2:${jy2};--sa:${sa};`
        +`filter:drop-shadow(0 0 ${w*3}px rgba(255,180,30,.9));`
        +`animation:streak-shoot ${1.2+Math.random()*2.5}s ${Math.random()*14}s ease-out infinite;`
        +`opacity:0;`;
      container.appendChild(el);
    }

  } else if(elem==='spectro'){
    // ✨ Shining lens-flare lights
    const sizes=[
      // Hero giants — big dramatic stars
      56,48,42,36,
      // Large
      32,28,26,24,22,20,18,16,15,14,
      // Medium
      13,12,11,10,10,9,9,8,8,7,
      // Small fill
      7,7,6,6,6,5,5,5,5,4,4,4,4,3,3,3,3,3,3,3
    ];
    sizes.forEach((sz,j)=>{
      const el=document.createElement('div'); el.className='ep';
      const glow=sz*5.5;
      const sx1=((Math.random()-.5)*24)+'px', sx2=((Math.random()-.5)*38)+'px', sx3=((Math.random()-.5)*55)+'px';
      el.innerHTML=shiningLight(sz);
      el.style.cssText=`left:${50+Math.random()*46}%;bottom:${Math.random()*54}%;`
        +`width:${sz}px;height:${sz}px;`
        +`--sx1:${sx1};--sx2:${sx2};--sx3:${sx3};`
        +`--sg:${glow}px;--sc:${R};--sa:${.45+Math.random()*.45};`
        +`filter:drop-shadow(0 0 ${glow*.55}px rgba(255,215,30,.9)) drop-shadow(0 0 ${glow*.2}px rgba(${R},.45));`
        +`animation:spectro-float ${8+Math.random()*11}s ${Math.random()*16}s ease-in-out infinite,`
        +`twinkle ${.6+Math.random()*1.6}s ${Math.random()*3}s ease-in-out infinite;`
        +`opacity:${sz>14?.7:.5+Math.random()*.45};`;
      container.appendChild(el);
    });

  } else if(elem==='aero'){
    for(let j=0;j<28;j++){
      const el=document.createElement('div'); el.className='ep';
      const sz=6+Math.random()*18;
      // Wind direction: right-to-left or left-to-right
      const windDir=(Math.random()<0.5)?1:-1;
      const dist=60+Math.random()*160; // horizontal travel
      const bob=8+Math.random()*20;    // vertical oscillation
      // 4 waypoints along wind path
      const lx1=(windDir*dist*0.25)+'px', ly1=((Math.random()-.5)*bob)+'px', lr1=(windDir*15+Math.random()*20-10)+'deg';
      const lx2=(windDir*dist*0.50)+'px', ly2=((Math.random()-.5)*bob*1.2)+'px', lr2=(windDir*30+Math.random()*20-10)+'deg';
      const lx3=(windDir*dist*0.75)+'px', ly3=((Math.random()-.5)*bob)+'px', lr3=(windDir*45+Math.random()*20-10)+'deg';
      const lx4=(windDir*dist)+'px',      ly4=((Math.random()-.5)*bob*.5)+'px', lr4=(windDir*60+Math.random()*20-10)+'deg';
      el.innerHTML=leaf(sz);
      el.style.cssText=`left:${48+Math.random()*48}%;top:${5+Math.random()*80}%;`
        +`width:${sz}px;height:${sz*1.55}px;`
        +`--lx1:${lx1};--ly1:${ly1};--lr1:${lr1};`
        +`--lx2:${lx2};--ly2:${ly2};--lr2:${lr2};`
        +`--lx3:${lx3};--ly3:${ly3};--lr3:${lr3};`
        +`--lx4:${lx4};--ly4:${ly4};--lr4:${lr4};`
        +`filter:drop-shadow(0 0 ${sz*.35}px rgba(${R},.65));`
        +`animation:leaf-drift ${5+Math.random()*8}s ${Math.random()*12}s ease-in-out infinite;`
        +`opacity:${.5+Math.random()*.45};`;
      container.appendChild(el);
    }

  } else if(elem==='havoc'){
    // 🌸 FLOWERS + 🦋 PAPRI (butterflies) for HAVOC element

    // ── SVG BUILDERS ──

    // Small 5-petal flower SVG
    function smallFlower(sz,hue){
      const id=uid(); const r=sz/2;
      const pr=sz*.28; // petal radius
      let petals='';
      for(let i=0;i<5;i++){
        const a=(i/5)*Math.PI*2 - Math.PI/2;
        const px=r+Math.cos(a)*pr*1.4;
        const py=r+Math.sin(a)*pr*1.4;
        petals+=`<ellipse cx="${px.toFixed(2)}" cy="${py.toFixed(2)}" rx="${(pr).toFixed(2)}" ry="${(pr*.62).toFixed(2)}"
          transform="rotate(${(a*180/Math.PI+90).toFixed(1)},${px.toFixed(2)},${py.toFixed(2)})"
          fill="url(#fp${id}${i})" opacity=".88"/>`;
      }
      const defs=Array.from({length:5},(_,i)=>{
        const a=(i/5)*Math.PI*2-Math.PI/2;
        const h=(hue+i*18)%360;
        return`<radialGradient id="fp${id}${i}" cx="40%" cy="35%" r="62%">
          <stop offset="0%" stop-color="hsla(${h},90%,88%,1)"/>
          <stop offset="60%" stop-color="hsla(${h},75%,68%,.85)"/>
          <stop offset="100%" stop-color="hsla(${h},60%,50%,0)"/>
        </radialGradient>`;
      }).join('');
      return`<svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}" overflow="visible">
        <defs>${defs}
          <radialGradient id="fc${id}" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="rgba(255,250,200,1)"/>
            <stop offset="100%" stop-color="hsla(${hue},80%,65%,.6)"/>
          </radialGradient>
        </defs>
        ${petals}
        <circle cx="${r}" cy="${r}" r="${r*.28}" fill="url(#fc${id})"/>
        <circle cx="${r}" cy="${r}" r="${r*.12}" fill="white" opacity=".9"/>
      </svg>`;
    }

    // Butterfly SVG — top-down wings, symmetrical
    function butterfly(sz,hue){
      const id=uid(); const w=sz, h=sz*.85;
      const cx=w*.5, cy=h*.5;
      // Wing shape: two mirrored bezier wing pairs
      const topW=w*.48, botW=w*.35;
      const leftWingTop=`M${cx},${cy} C${cx-topW*.5},${cy-h*.4} ${cx-topW},${cy-h*.05} ${cx-topW*.25},${cy+h*.1} Z`;
      const leftWingBot=`M${cx},${cy} C${cx-botW*.5},${cy+h*.35} ${cx-botW},${cy+h*.15} ${cx-botW*.2},${cy-.02} Z`;
      const rightWingTop=`M${cx},${cy} C${cx+topW*.5},${cy-h*.4} ${cx+topW},${cy-h*.05} ${cx+topW*.25},${cy+h*.1} Z`;
      const rightWingBot=`M${cx},${cy} C${cx+botW*.5},${cy+h*.35} ${cx+botW},${cy+h*.15} ${cx+botW*.2},${cy-.02} Z`;
      return`<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" overflow="visible">
        <defs>
          <radialGradient id="bw${id}" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stop-color="hsla(${hue},95%,85%,.95)"/>
            <stop offset="50%" stop-color="hsla(${(hue+30)%360},80%,65%,.7)"/>
            <stop offset="100%" stop-color="hsla(${(hue+60)%360},70%,45%,.15)"/>
          </radialGradient>
          <radialGradient id="bb${id}" cx="40%" cy="40%" r="65%">
            <stop offset="0%" stop-color="hsla(${(hue+20)%360},90%,80%,.9)"/>
            <stop offset="100%" stop-color="hsla(${(hue+50)%360},70%,50%,.1)"/>
          </radialGradient>
        </defs>
        <path d="${leftWingTop}" fill="url(#bw${id})" stroke="hsla(${hue},60%,40%,.25)" stroke-width=".4"/>
        <path d="${leftWingBot}" fill="url(#bb${id})" stroke="hsla(${hue},60%,40%,.2)" stroke-width=".3"/>
        <path d="${rightWingTop}" fill="url(#bw${id})" stroke="hsla(${hue},60%,40%,.25)" stroke-width=".4"/>
        <path d="${rightWingBot}" fill="url(#bb${id})" stroke="hsla(${hue},60%,40%,.2)" stroke-width=".3"/>
        <line x1="${cx}" y1="${cy-h*.42}" x2="${cx}" y2="${cy+h*.45}" stroke="rgba(60,20,80,.6)" stroke-width=".8"/>
        <line x1="${cx-2}" y1="${cy-h*.42}" x2="${cx-8}" y2="${cy-h*.6}" stroke="rgba(60,20,80,.5)" stroke-width=".6"/>
        <line x1="${cx+2}" y1="${cy-h*.42}" x2="${cx+8}" y2="${cy-h*.6}" stroke="rgba(60,20,80,.5)" stroke-width=".6"/>
      </svg>`;
    }

    // Loose single petal (falling)
    function singlePetal(sz,hue){
      const id=uid(); const w=sz*.6, h=sz;
      return`<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" overflow="visible">
        <defs><radialGradient id="sp${id}" cx="40%" cy="30%" r="68%">
          <stop offset="0%" stop-color="hsla(${hue},90%,85%,1)"/>
          <stop offset="65%" stop-color="hsla(${hue},75%,65%,.8)"/>
          <stop offset="100%" stop-color="hsla(${hue},60%,50%,0)"/>
        </radialGradient></defs>
        <ellipse cx="${w*.5}" cy="${h*.5}" rx="${w*.48}" ry="${h*.46}" fill="url(#sp${id})"/>
      </svg>`;
    }

    // ── SPAWN FLOWERS ──
    for(let j=0;j<22;j++){
      const el=document.createElement('div'); el.className='ep';
      const sz=6+Math.random()*13; // small flowers
      const hue=290+Math.random()*80; // pink/purple/magenta range
      const bx=46+Math.random()*50; const by=5+Math.random()*85;
      // Drift path — gentle float up and sideways
      const fy1=(-8-Math.random()*15)+'vh', fx1=((Math.random()-.5)*60)+'px';
      const fy2=(-18-Math.random()*20)+'vh', fx2=((Math.random()-.5)*80)+'px';
      const fy3=(-30-Math.random()*25)+'vh', fx3=((Math.random()-.5)*100)+'px';
      const fy4=(-45-Math.random()*20)+'vh', fx4=((Math.random()-.5)*120)+'px';
      const fr=(Math.random()*360)+'deg';
      el.innerHTML=smallFlower(sz,hue);
      el.style.cssText=`left:${bx}%;top:${by}%;width:${sz}px;height:${sz}px;`
        +`--fr:${fr};--fx1:${fx1};--fy1:${fy1};--fx2:${fx2};--fy2:${fy2};`
        +`--fx3:${fx3};--fy3:${fy3};--fx4:${fx4};--fy4:${fy4};`
        +`filter:drop-shadow(0 0 ${sz*.5}px hsla(${hue},80%,70%,.6));`
        +`animation:flower-float ${6+Math.random()*10}s ${Math.random()*18}s ease-in-out infinite;`
        +`opacity:0;`;
      container.appendChild(el);
    }

    // ── SPAWN BUTTERFLIES (papri) ──
    for(let j=0;j<12;j++){
      const el=document.createElement('div'); el.className='ep';
      const sz=12+Math.random()*20;
      const hue=280+Math.random()*100;
      const bx=48+Math.random()*48; const by=10+Math.random()*75;
      // Butterfly wanders: wax and wane across screen
      const bwx=((Math.random()-.5)*80)+'px', bwy=((Math.random()-.5)*40)+'px';
      const bwx2=((Math.random()-.5)*120)+'px', bwy2=((Math.random()-.5)*60)+'px';
      const bwx3=((Math.random()-.5)*100)+'px', bwy3=((Math.random()-.5)*50)+'px';
      const br=(Math.random()*30-15)+'deg';
      const dur=4+Math.random()*7;
      el.innerHTML=butterfly(sz,hue);
      el.style.cssText=`left:${bx}%;top:${by}%;width:${sz}px;height:${sz*.85}px;`
        +`--bx:0px;--by:0px;--br:${br};`
        +`--bwx:${bwx};--bwy:${bwy};--bwx2:${bwx2};--bwy2:${bwy2};--bwx3:${bwx3};--bwy3:${bwy3};`
        +`filter:drop-shadow(0 0 ${sz*.45}px hsla(${hue},80%,75%,.55));`
        +`animation:butterfly-wander ${dur}s ${Math.random()*14}s ease-in-out infinite,`
        +`butterfly-fade ${dur}s ${Math.random()*14}s ease-in-out infinite;`
        +`opacity:0;`;
      container.appendChild(el);
    }

    // ── SPAWN LOOSE FALLING PETALS ──
    for(let j=0;j<30;j++){
      const el=document.createElement('div'); el.className='ep';
      const sz=4+Math.random()*9;
      const hue=290+Math.random()*90;
      const bx=48+Math.random()*50; const by=-5+Math.random()*30;
      const pa=(Math.random()*360)+'deg';
      const pfx1=((Math.random()-.5)*30)+'px', pfy1=(8+Math.random()*18)+'vh';
      const pfx2=((Math.random()-.5)*55)+'px', pfy2=(22+Math.random()*25)+'vh';
      const pfx3=((Math.random()-.5)*70)+'px', pfy3=(48+Math.random()*30)+'vh';
      el.innerHTML=singlePetal(sz,hue);
      el.style.cssText=`left:${bx}%;top:${by}%;width:${sz*.6}px;height:${sz}px;`
        +`--pa:${pa};--pfx1:${pfx1};--pfy1:${pfy1};--pfx2:${pfx2};--pfy2:${pfy2};--pfx3:${pfx3};--pfy3:${pfy3};`
        +`filter:drop-shadow(0 0 ${sz*.4}px hsla(${hue},75%,72%,.5));`
        +`animation:petal-fall ${5+Math.random()*8}s ${Math.random()*16}s ease-in linear infinite;`
        +`opacity:0;`;
      container.appendChild(el);
    }

    // ── PERIODIC FLOWER BLAST — radial explosion of flowers ──
    function spawnBlast(){
      if(!container.closest('.cslide.active')){
        setTimeout(spawnBlast, 1800+Math.random()*2200); return;
      }
      const bx=50+Math.random()*44;   // blast center x (% from left)
      const by=22+Math.random()*52;   // blast center y (% from top)
      const count=28+Math.floor(Math.random()*18);
      // blast shockwave ring
      const ring=document.createElement('div');
      ring.style.cssText=`position:absolute;left:${bx}%;top:${by}%;`
        +`width:${160+Math.random()*120}px;height:${30+Math.random()*24}px;`
        +`border-radius:50%;border:2px solid hsla(${300+Math.random()*60},85%,72%,.75);`
        +`box-shadow:0 0 18px hsla(${300+Math.random()*60},80%,65%,.45);`
        +`animation:blast-ring .85s ease-out forwards;pointer-events:none;`;
      container.appendChild(ring);
      setTimeout(()=>{ if(ring.parentNode)ring.parentNode.removeChild(ring); },900);

      for(let j=0;j<count;j++){
        const el=document.createElement('div'); el.className='ep';
        const angle=(j/count)*Math.PI*2+(Math.random()-.5)*.25;
        const dist=90+Math.random()*220;
        const dx=(Math.cos(angle)*dist).toFixed(1);
        const dy=(Math.sin(angle)*dist).toFixed(1);
        const sz=4+Math.random()*13;
        const hue=288+Math.random()*85;
        const brot=(Math.random()*720-360)+'deg';
        const dur=1.0+Math.random()*1.4;
        el.innerHTML=(Math.random()<.55)?smallFlower(sz,hue):singlePetal(sz,hue);
        el.style.cssText=`left:${bx}%;top:${by}%;width:${sz}px;height:${sz}px;`
          +`--bdx:${dx}px;--bdy:${dy}px;--brot:${brot};`
          +`filter:drop-shadow(0 0 ${sz*.6}px hsla(${hue},88%,74%,.85));`
          +`animation:flower-blast ${dur}s ease-out forwards;`
          +`opacity:0;`;
        container.appendChild(el);
        setTimeout(()=>{ if(el.parentNode)el.parentNode.removeChild(el); },(dur+.3)*1000);
      }
      const nextDelay=7500+Math.random()*10000;
      setTimeout(spawnBlast, nextDelay);
    }
    setTimeout(spawnBlast, 1200+Math.random()*3500);

    } else if(elem==='electro'){
    // ⚡ PURPLE LIGHTNING — canvas fractal bolts, charge → FLASH → afterglow
    const cvs=document.createElement('canvas');
    const CW=window.innerWidth, CH=window.innerHeight;
    cvs.width=CW; cvs.height=CH;
    cvs.style.cssText=`position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;`;
    container.appendChild(cvs);
    const ctx=cvs.getContext('2d');
    // Purple palette derived from element color
    const [pr,pg,pb]=R.split(',').map(Number); // ~150,75,255

    // ── Build fractal bolt into array of {pts, sw, alpha} branches ──
    function buildBolt(x, y, totalH, rootSW, maxDepth){
      const branches=[];
      function grow(cx,cy,angle,len,sw,a,depth){
        if(sw<0.15||len<5||depth>maxDepth||a<0.015) return;
        const segs=Math.max(3,Math.floor(len/15));
        let px=cx,py=cy;
        const pts=[[px,py]];
        for(let i=0;i<segs;i++){
          const jitter=(Math.random()-.5)*sw*9*(1-(i+1)/segs*.35);
          px += Math.cos(angle)*len/segs + jitter;
          py += Math.sin(angle)*len/segs;
          pts.push([px,py]);
        }
        branches.push({pts,sw,a});
        // splits
        const n = sw>rootSW*.6?3 : sw>rootSW*.28?2 : Math.random()<.55?2:1;
        [-0.48,-0.20,0.20,0.48,0.72,-0.72].sort(()=>Math.random()-.5).slice(0,n).forEach(sp=>{
          grow(px,py, angle+sp+(Math.random()-.5)*.12,
            len*(0.26+Math.random()*.36), sw*(0.27+Math.random()*.24),
            a*(0.48+Math.random()*.33), depth+1);
        });
      }
      grow(x,0, Math.PI/2+(Math.random()-.5)*.18, totalH, rootSW, 1.0, 0);
      // secondary smaller bolt
      if(Math.random()<.52)
        grow(x+(Math.random()-.5)*32, totalH*.04,
          Math.PI/2+(Math.random()-.5)*.4, totalH*.48, rootSW*.38, .68, 0);
      return branches;
    }

    // ── Draw all branches at given alpha ──
    function drawBolt(branches, alpha, rootSW){
      branches.forEach(({pts,sw,a:bA})=>{
        const a = bA*alpha;
        if(a<0.012) return;
        const draw=(lw,col,blur)=>{
          ctx.save();
          ctx.shadowColor=col; ctx.shadowBlur=blur;
          ctx.strokeStyle=col; ctx.lineWidth=lw;
          ctx.lineCap='round'; ctx.lineJoin='round';
          ctx.beginPath();
          pts.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));
          ctx.stroke(); ctx.restore();
        };
        const ratio = sw/rootSW;
        // 1. Outer purple haze
        draw(sw*8, `rgba(${pr},${pg},${pb},${a*.15})`, sw*18);
        // 2. Mid glow — blue-violet
        draw(sw*2.2, `rgba(${Math.min(255,pr+40)},${Math.min(255,pg+25)},255,${a*.72})`, sw*5);
        // 3. Body — gradient hot-white → purple
        const body = ratio>.55 ? `rgba(255,252,240,${a*.97})`
                   : ratio>.22 ? `rgba(235,215,255,${a*.92})`
                                : `rgba(${pr+30},${pg},255,${a*.86})`;
        draw(sw, body, 0);
        // 4. White-hot core on thick branches
        if(sw>1.0) draw(sw*.24, `rgba(255,255,255,${a*.9})`, 0);
      });
    }

    // ── Ground impact ──
    function drawImpact(x,y,sw,alpha){
      if(alpha<.15) return;
      const r=48+sw*12;
      const g=ctx.createRadialGradient(x,y,0,x,y,r);
      g.addColorStop(0, `rgba(255,252,240,${alpha*.72})`);
      g.addColorStop(.2, `rgba(200,160,255,${alpha*.55})`);
      g.addColorStop(.55, `rgba(${pr},${pg},${pb},${alpha*.22})`);
      g.addColorStop(1, `rgba(${pr},${pg},${pb},0)`);
      ctx.save(); ctx.fillStyle=g;
      ctx.beginPath(); ctx.ellipse(x,y,r,r*.24,0,0,Math.PI*2); ctx.fill();
      // spark arcs
      for(let i=0;i<10;i++){
        const a=i/10*Math.PI*2;
        const len=10+Math.random()*26;
        const mx=x+Math.cos(a)*len*.6+(Math.random()-.5)*6;
        const my=y+Math.sin(a)*len*.6+(Math.random()-.5)*6;
        ctx.save(); ctx.strokeStyle=`rgba(240,220,255,${alpha*.4})`;
        ctx.lineWidth=.3+Math.random()*.7; ctx.shadowColor=`rgba(${R},${alpha*.5})`; ctx.shadowBlur=4;
        ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(mx,my);
        ctx.lineTo(x+Math.cos(a)*len, y+Math.sin(a)*len*.28); ctx.stroke(); ctx.restore();
      }
      ctx.restore();
    }

    // ── Expanding shockwave ellipse ──
    class ShockRing{
      constructor(x,y,sw){ this.x=x;this.y=y;this.sw=sw;this.t=0;this.max=22+Math.floor(Math.random()*10);this.alive=true; }
      tick(){ if(++this.t>this.max)this.alive=false; }
      draw(){
        const p=this.t/this.max;
        const r=this.sw*22*Math.pow(p,.6);
        const a=(1-p)*.65;
        if(a<.01)return;
        ctx.save();
        ctx.shadowColor=`rgba(${R},${a*.55})`; ctx.shadowBlur=this.sw*4;
        ctx.strokeStyle=`rgba(210,185,255,${a})`; ctx.lineWidth=this.sw*.3*(1-p*.6)+.3;
        ctx.beginPath(); ctx.ellipse(this.x,this.y,r,r*.22,0,0,Math.PI*2); ctx.stroke();
        ctx.strokeStyle=`rgba(255,250,255,${a*.45})`; ctx.lineWidth=(this.sw*.12+.2)*(1-p);
        ctx.beginPath(); ctx.ellipse(this.x,this.y,r*.5,r*.1,0,0,Math.PI*2); ctx.stroke();
        ctx.restore();
      }
    }

    // ── Drifting energy wisp ──
    class Wisp{
      constructor(){ this.reset(true); }
      reset(init=false){
        this.x=CW*(.44+Math.random()*.53); this.y=init?Math.random()*CH:CH*(.1+Math.random()*.82);
        this.vx=(Math.random()-.5)*.42; this.vy=-(0.15+Math.random()*.5);
        this.r=1+Math.random()*3.2; this.hue=248+Math.random()*55;
        this.life=0; this.max=65+Math.random()*115;
        this.phase=Math.random()*Math.PI*2; this.phaseS=0.016+Math.random()*.018;
      }
      tick(){
        this.x+=this.vx+Math.sin(this.phase)*.35; this.y+=this.vy; this.phase+=this.phaseS; this.life++;
        if(this.life>this.max||this.y<-10) this.reset();
      }
      draw(){
        const t=this.life/this.max;
        const blink=.78+Math.sin(this.life*.19+this.phase)*.22;
        const a=(t<.12?t/.12:t>.75?(1-t)/.25:1)*.7*blink;
        if(a<.02) return;
        ctx.save();
        ctx.shadowColor=`rgba(${R},${a*.8})`; ctx.shadowBlur=this.r*10;
        ctx.fillStyle=`hsla(${this.hue},90%,80%,${a})`;
        ctx.beginPath(); ctx.arc(this.x,this.y,this.r,0,Math.PI*2); ctx.fill();
        // halo ring
        ctx.strokeStyle=`hsla(${this.hue},78%,68%,${a*.32})`; ctx.lineWidth=.35; ctx.shadowBlur=0;
        ctx.beginPath(); ctx.arc(this.x,this.y,this.r*2.4,0,Math.PI*2); ctx.stroke();
        ctx.restore();
      }
    }

    // ── Floating plasma orb ──
    class PlasmaOrb{
      constructor(idx){
        this.x=CW*(.46+idx*.2+Math.random()*.1); this.y=CH*(.03+Math.random()*.1);
        this.r=12+Math.random()*20; this.hue=250+Math.random()*45;
        this.phase=Math.random()*Math.PI*2; this.speed=.011+Math.random()*.011;
      }
      draw(ts){
        const pulse=.68+Math.sin(ts*this.speed+this.phase)*.32;
        const a=.25*pulse;
        const ox=Math.sin(ts*.009+this.phase*1.4)*16;
        const oy=Math.sin(ts*.007+this.phase)*this.r*.65;
        const x=this.x+ox, y=this.y+oy;
        const g=ctx.createRadialGradient(x,y,0,x,y,this.r*3*pulse);
        g.addColorStop(0,`hsla(${this.hue},92%,82%,${a*.92})`);
        g.addColorStop(.3,`rgba(${R},${a*.5})`);
        g.addColorStop(1,`rgba(${R},0)`);
        ctx.save(); ctx.fillStyle=g;
        ctx.beginPath(); ctx.arc(x,y,this.r*3*pulse,0,Math.PI*2); ctx.fill();
        ctx.shadowColor=`hsla(${this.hue},96%,86%,.92)`; ctx.shadowBlur=this.r*2.8;
        ctx.fillStyle=`hsla(${this.hue},96%,92%,${a*1.5})`;
        ctx.beginPath(); ctx.arc(x,y,this.r*.36*pulse,0,Math.PI*2); ctx.fill();
        ctx.restore();
      }
    }

    // ── Lightning Strike class ──
    class Strike{
      constructor(idx){ this.idx=idx; this._init(); }
      _init(){
        const hero=this.idx<2;
        this.hero=hero;
        this.x=CW*(hero?.50+Math.random()*.40:.45+Math.random()*.51);
        this.h=CH*(hero?.78+Math.random()*.18:.44+Math.random()*.40);
        this.sw=hero?4.5+Math.random()*3.0:.55+Math.random()*2.2;
        this.depth=hero?7:5;
        this.idleMax=Math.floor(hero?88+Math.random()*145:52+Math.random()*215);
        this.flashMax=Math.floor(5+Math.random()*5);
        this.lingerMax=Math.floor(hero?10:5);
        this.phase='idle'; this.t=Math.floor(Math.random()*this.idleMax);
        this.alpha=0; this.sf=0; this.tree=null;
      }
      spawn(){
        this.tree=buildBolt(this.x,0,this.h,this.sw,this.depth);
        // Vary x slightly each flash
        this.x=CW*(this.hero?.49+Math.random()*.41:.44+Math.random()*.52);
      }
      tip(){
        if(!this.tree||!this.tree[0]) return null;
        const pts=this.tree[0].pts;
        return pts[pts.length-1];
      }
      draw(a){
        if(!this.tree) return;
        drawBolt(this.tree, a, this.sw);
        // Entry charge orb
        if(a>.25){
          const cs=22+this.sw*4;
          const tg=ctx.createRadialGradient(this.x,0,0,this.x,0,cs*1.6);
          tg.addColorStop(0,`rgba(255,252,248,${a*.55})`);
          tg.addColorStop(.3,`rgba(200,175,255,${a*.42})`);
          tg.addColorStop(.7,`rgba(${R},${a*.18})`);
          tg.addColorStop(1,`rgba(${R},0)`);
          ctx.save(); ctx.shadowColor=`rgba(230,210,255,${a*.75})`; ctx.shadowBlur=cs*1.8;
          ctx.fillStyle=tg; ctx.beginPath(); ctx.arc(this.x,0,cs*1.6,0,Math.PI*2); ctx.fill(); ctx.restore();
        }
        // Hero ground impact
        if(this.hero&&a>.14){
          const tp=this.tip();
          if(tp) drawImpact(tp[0],tp[1],this.sw,a);
        }
        // Screen flash tint (subtle purple)
        if(this.hero&&this.sf>.02){
          ctx.save(); ctx.fillStyle=`rgba(${pr},${pg},${pb},${this.sf*.05})`;
          ctx.fillRect(0,0,CW,CH); ctx.restore();
        }
      }
      tick(){
        if(this.phase==='idle'){
          if(++this.t>=this.idleMax){ this.spawn(); this.phase='flash'; this.t=0; this.alpha=1; this.sf=this.hero?1:0; }
        } else if(this.phase==='flash'){
          this.t++;
          const f=this.t;
          // Triple flicker: BRIGHT → dim → bright → dim → settle
          this.alpha = f===1?1 : f===2?.04 : f===3?.96 : f===4?.03 : f===5?.88 : f===6?.02 : f<=this.flashMax?.75:0;
          this.sf=Math.max(0,this.sf-.18);
          if(this.t>this.flashMax){ this.phase='linger'; this.t=0; }
        } else {
          this.t++;
          this.alpha=Math.max(0,Math.pow(1-this.t/this.lingerMax,1.5)*.62);
          this.sf=0;
          if(this.t>=this.lingerMax){
            this.phase='idle'; this.t=0; this.alpha=0;
            this.idleMax=Math.floor(this.hero?90+Math.random()*150:58+Math.random()*220);
          }
        }
      }
    }

    // ── Setup ──
    const strikes=[0,1,2,3,4,5].map(i=>new Strike(i)); // 2 hero + 4 small
    const wisps=Array.from({length:36},()=>new Wisp());
    const plasmaOrbs=Array.from({length:4},(_,i)=>new PlasmaOrb(i));
    const shockRings=[];

    // Emit shockwave rings on hero flash
    strikes.filter(s=>s.hero).forEach(s=>{
      const origTick=s.tick.bind(s);
      s.tick=function(){
        const wasFlash=this.phase==='flash'&&this.t===0;
        origTick();
        if(wasFlash&&this.tree&&this.tree[0]){
          const tp=this.tip();
          if(tp){
            shockRings.push(new ShockRing(tp[0],tp[1],this.sw));
            shockRings.push(new ShockRing(tp[0],tp[1],this.sw*.5));
          }
        }
      };
    });

    // ── Render loop — 60fps ──
    let ltT=0;
    function loop(ts){
      if(!cvs.closest('.cslide.active')){requestAnimationFrame(loop);return;}
      if(ts-ltT<16){requestAnimationFrame(loop);return;}
      ltT=ts;
      ctx.clearRect(0,0,CW,CH);
      plasmaOrbs.forEach(o=>o.draw(ts));
      wisps.forEach(w=>{w.tick();w.draw();});
      for(let i=shockRings.length-1;i>=0;i--){
        shockRings[i].tick();shockRings[i].draw();
        if(!shockRings[i].alive)shockRings.splice(i,1);
      }
      strikes.forEach(s=>{s.tick();if(s.alpha>.008)s.draw(s.alpha);});
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }
}

function _applySlide(i){
  if(!_slides.length)return;
  const prev=_slides[_idx];
  prev.div.classList.remove('active');
  prev.div.classList.add('leaving');
  setTimeout(()=>prev.div.classList.remove('leaving'),3500);
  _idx=i;const s=_slides[i];
  s.div.classList.add('active');
  const ec=s.ec,c=s.char;
  const nm=document.getElementById('clab-name');
  const em=document.getElementById('clab-elem-icon');
  const sub=document.getElementById('clab-sub');
  if(nm){nm.textContent=c.name.toUpperCase();nm.style.color=ec.accent;nm.style.textShadow=`0 0 40px rgba(${ec.r},.35),0 2px 4px rgba(0,0,0,.8)`;}
  if(em){em.textContent=ec.label;em.style.color=ec.accent;em.style.borderColor=`rgba(${ec.r},.25)`;em.style.background=`rgba(${ec.r},.06)`;}
  if(sub){
    const hasBg=s.div.querySelector('.slide-bg')?.style.backgroundImage?.includes('url');
    sub.textContent=c.desc+(hasBg?' · 📸':' · 🎨');
    sub.style.color=`rgba(${ec.r},.35)`;
  }
  // Progress indicator — slide N/total
  const progLabel=document.getElementById('slide-counter');
  if(progLabel)progLabel.textContent=`${_idx+1} / ${_slides.length}`;
  document.querySelectorAll('.cdot').forEach((d,j)=>{
    d.classList.toggle('active',j===i);
    d.style.background=j===i?ec.accent:'';
  });
  _startProg();
}
function _startProg(){
  const bar=document.getElementById('slide-prog');
  bar.style.transition='none';bar.style.width='0%';
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    bar.style.transition=`width ${SLIDE_DUR}ms linear`;bar.style.width='100%';
  }));
}
function _startTimer(){if(_timer)clearInterval(_timer);_timer=setInterval(()=>_goTo((_idx+1)%_slides.length),SLIDE_DUR);}
function _goTo(i){_applySlide(i);_startTimer();}

function searchChar(){
  const input=document.getElementById('char-search');
  if(!input)return;
  const term=input.value.toLowerCase();
  if(!term)return;
  const matchIdx=CHARS.findIndex(c=>c.name.toLowerCase().includes(term)||c.elem.toLowerCase().includes(term)||(c.weapon&&c.weapon.toLowerCase().includes(term)));
  if(matchIdx>=0&&matchIdx!==_idx)_goTo(matchIdx);
}

// ── DRAG-AND-DROP image assignment for current slide ──
(function(){
  const ov=document.getElementById('img-drop-overlay');
  let dragTimer=null;
  document.addEventListener('dragenter',e=>{
    if(e.dataTransfer&&e.dataTransfer.types.includes('Files')){
      if(ov)ov.style.display='flex';
      clearTimeout(dragTimer);
    }
  });
  document.addEventListener('dragleave',e=>{
    dragTimer=setTimeout(()=>{if(ov)ov.style.display='none';},120);
  });
  document.addEventListener('dragover',e=>e.preventDefault());
  document.addEventListener('drop',e=>{
    e.preventDefault();
    if(ov)ov.style.display='none';
    const files=[...e.dataTransfer.files];
    const imgFile=files.find(f=>f.type.startsWith('image/'));
    if(!imgFile||!_slides.length)return;
    const url=URL.createObjectURL(imgFile);
    const s=_slides[_idx];
    // Update background of current slide
    let bg=s.div.querySelector('.slide-bg');
    if(bg){
      bg.style.backgroundImage=`url('${url}')`;
      bg.style.backgroundSize='cover';
      bg.style.backgroundPosition='center 10%';
    }
    showToast(`📸 Image applied to ${s.char.name}!`);
  });
})();

// ══ SCREEN BADGE ══
function detectScreen(){
  const w=window.innerWidth,el=document.getElementById('screen-tag');
  if(!el)return;
  if(w<480)el.textContent='📱 MOBILE · '+w+'px';
  else if(w<768)el.textContent='📟 TABLET · '+w+'px';
  else if(w<1200)el.textContent='💻 LAPTOP · '+w+'px';
  else el.textContent='🖥️ DESKTOP · '+w+'px';
}
detectScreen();window.addEventListener('resize',detectScreen);

// ══ CONFIG LOGIC ══
let platform='android',activePreset='balanced',activeTab='engine';
let generated={engine:'',device:'',gus:'',input:''},logInfo={};
let hasUploadedLog=false;

// ══ BRAIN STATE ══
let brainEnabled=localStorage.getItem('p42brain')!=='false';
let brainApplied=false;
let brainData=null;

async function loadBrainData(){
  try{
    const resp=await fetch('data/brain-data.json');
    brainData=await resp.json();
    console.log('[Brain] Database loaded - v'+brainData._version);
    document.getElementById('brain-status').textContent='🧠 Smart Brain v'+brainData._version+' - Sources: GitHub, Reddit, Community';
  }catch(e){
    console.warn('[Brain] Could not load brain data:',e);
    document.getElementById('brain-status').textContent='🧠 Smart Brain - Offline mode';
  }
}
loadBrainData();

function initBrain(){
  const toggle=document.getElementById('brain-toggle');
  const track=document.getElementById('brain-track');
  const thumb=document.getElementById('brain-thumb');
  if(brainEnabled){
    toggle.classList.add('active');
    track.style.background='rgba(240,192,64,.25)';
    track.style.borderColor='var(--gd)';
    thumb.style.left='19px';
    thumb.style.background='var(--gd)';
    thumb.style.boxShadow='0 0 8px rgba(240,192,64,.5)';
  }
}
initBrain();

function toggleBrain(){
  brainEnabled=!brainEnabled;
  localStorage.setItem('p42brain',brainEnabled);
  const toggle=document.getElementById('brain-toggle');
  const track=document.getElementById('brain-track');
  const thumb=document.getElementById('brain-thumb');
  if(brainEnabled){
    toggle.classList.add('active');
    track.style.background='rgba(240,192,64,.25)';
    track.style.borderColor='var(--gd)';
    thumb.style.left='19px';
    thumb.style.background='var(--gd)';
    thumb.style.boxShadow='0 0 8px rgba(240,192,64,.5)';
  }else{
    toggle.classList.remove('active');
    track.style.background='rgba(240,192,64,.12)';
    track.style.borderColor='rgba(240,192,64,.18)';
    thumb.style.left='3px';
    thumb.style.background='var(--b2)';
    thumb.style.boxShadow='none';
  }
  if(brainEnabled&&logInfo.gpu){
    renderBrainRecommendations();
  }else{
    document.getElementById('brain-panel').style.display='none';
  }
}

function renderBrainRecommendations(){
  const panel=document.getElementById('brain-panel');
  const content=document.getElementById('brain-rec-content');
  const actions=document.getElementById('brain-rec-actions');
  if(!brainEnabled||!logInfo.gpu){
    panel.style.display='none';
    return;
  }
  const rec=getRecommendedPreset(logInfo);
  const perf=estimatePerformance(logInfo);
  let html='';

  // Data source indicator
  if(brainData){
    html+=`<div style="font-family:var(--C);font-size:.5rem;color:var(--gd);margin-bottom:6px;opacity:.7">🧠 Using brain data v${brainData._version}</div>`;
  }

  // FPS Score
  html+=`<div class="bp-score"><div class="bp-score-text">${perf.estimatedFPS} FPS</div><div class="bp-score-bar"><div class="bp-score-fill" style="width:${perf.score}%"></div></div></div>`;

  // GPU Profile check from brain data
  let gpuProfile=null;
  if(brainData&&brainData.gpu_profiles){
    const g=logInfo.gpu.toLowerCase();
    const platformKey=platform==='pc'?'pc':'android';
    const profiles=brainData.gpu_profiles[platformKey]||{};
    for(const[key,val] of Object.entries(profiles)){
      if(g.includes(key.replace('_',' '))||g.includes(key)){
        gpuProfile=val;
        break;
      }
    }
  }

  html+=`<div class="bp-rec-item"><span class="bp-rec-label">Recommended</span><span class="bp-rec-value">${rec.preset.toUpperCase()}</span></div>`;
  html+=`<div class="bp-rec-item"><span class="bp-rec-label">GPU Tier</span><span class="bp-rec-value">${perf.tierLabel}</span></div>`;
  html+=`<div class="bp-rec-item"><span class="bp-rec-label">Reason</span><span class="bp-rec-value">${rec.reason}</span></div>`;

  // GPU Profile specific notes
  if(gpuProfile&&gpuProfile.notes){
    html+=`<div class="bp-issue info">💡 ${gpuProfile.notes}</div>`;
  }

  // GPU OOM check
  if(logInfo.gpu_oom>0){
    html+=`<div class="bp-issue error">🔴 GPU OOM detected ×${logInfo.gpu_oom}</div>`;
  }

  // Vulkan status
  if(logInfo.vulkan_status==='available'){
    html+=`<div class="bp-issue info">✓ Vulkan supported</div>`;
  }else if(logInfo.vulkan_status==='failed'){
    html+=`<div class="bp-issue warning">⚠ Vulkan failed - using OpenGL ES</div>`;
  }

  // Missing settings from log analysis
  const missing=detectMissingSettings(logInfo);
  if(missing.warnings.length>0||missing.missing.length>0){
    html+=`<div class="bp-suggest"><div class="bp-suggest-label">⚡ SETTING RECOMMENDATIONS</div>`;
    missing.missing.forEach(m=>{
      html+=`<div class="bp-suggest-item">Enable ${m.k}=${m.v} (${m.reason})</div>`;
    });
    missing.warnings.forEach(w=>{
      html+=`<div class="bp-suggest-item">Consider ${w.k}=${w.v} (${w.reason})</div>`;
    });
    html+=`</div>`;
  }

  // Community tips from brain data
  if(brainData&&brainData.community_tips){
    const tips=brainData.community_tips[platform];
    if(tips&&tips.length>0){
      html+=`<div class="bp-suggest" style="margin-top:8px;border-left-color:rgba(0,212,232,.4)"><div class="bp-suggest-label" style="color:var(--cy)">💬 COMMUNITY TIPS</div>`;
      tips.slice(0,2).forEach(tip=>{
        html+=`<div class="bp-suggest-item">${tip}</div>`;
      });
      html+=`</div>`;
    }
  }

  // Forbidden CVars warning
  if(brainData&&brainData.forbidden_cvars){
    const fc=brainData.forbidden_cvars.forbidden;
    const fcKeys=Object.keys(fc);
    if(fcKeys.length>0){
      html+=`<div class="bp-suggest" style="margin-top:8px;border-left-color:rgba(255,64,96,.4)"><div class="bp-suggest-label" style="color:var(--rd)">🚫 FORBIDDEN CVARS (auto-removed)</div>`;
      fcKeys.slice(0,3).forEach(k=>{
        html+=`<div class="bp-suggest-item">${k} - ${fc[k].reason.split('.')[0]}</div>`;
      });
      html+=`</div>`;
    }
  }

  content.innerHTML=html;
  const presetCards=document.querySelectorAll('.preset-card');
  let applyText='APPLY';
  let alreadyApplied=false;
  presetCards.forEach(c=>{
    if(c.classList.contains('active')&&c.dataset.p===rec.preset){alreadyApplied=true;}
  });
  if(alreadyApplied)applyText='✓ APPLIED';
  actions.innerHTML=`<button class="bp-apply-btn" onclick="applyBrainRec('${rec.preset}')">${applyText}</button>`;
  panel.style.display='block';
  if(!brainEnabled){
    panel.style.display='none';
    return;
  }
  if(!brainApplied){
    applyBrainRec(rec.preset);
    brainApplied=true;
  }
}

function applyBrainRec(presetName){
  const grid=document.getElementById('preset-grid');
  if(!grid)return;
  let targetCard=null;
  grid.querySelectorAll('.preset-card').forEach(c=>{
    if(c.dataset.p===presetName){targetCard=c;}
  });
  if(targetCard){
    activePreset=presetName;
    grid.querySelectorAll('.preset-card').forEach(c=>c.classList.remove('active'));
    targetCard.classList.add('active');
    document.getElementById('brain-rec-actions').innerHTML=`<button class="bp-apply-btn" style="border-color:var(--gr);color:var(--gr);background:rgba(0,232,144,.08)">✓ APPLIED</button>`;
  }
}

const PRESETS={
  // Android: detail=0=low, 1=mid, 2=high | shadow=1-5 | screen not used (game controls it)
  performance:{screen:75, shadow:1,shadowRes:512, ssr:0,mipbias:1, streaming:1.0,vd:0.7,flod:1.0,detail:0,lod_bias:2, grasscull:8000},
  balanced:   {screen:100,shadow:2,shadowRes:1024,ssr:1,mipbias:0, streaming:2.0,vd:1.5,flod:2.0,detail:1,lod_bias:0, grasscull:15000},
  high:       {screen:100,shadow:4,shadowRes:2048,ssr:2,mipbias:0, streaming:3.0,vd:2.0,flod:2.5,detail:2,lod_bias:0, grasscull:20000},
  ultra:      {screen:100,shadow:5,shadowRes:2048,ssr:4,mipbias:-1,streaming:4.0,vd:3.0,flod:3.0,detail:2,lod_bias:-1,grasscull:30000},
  // PC: Based on AlteriaX WuWa-Configs
  pc1:{screen:100,shadow:5,shadowRes:2048,ssr:2,mipbias:0,streaming:2.0,vd:2.0,flod:3.0,detail:2,lod_bias:0,grasscull:26700,rt:1,poolSize:2300}, // RTX 5090-4080
  pc2:{screen:100,shadow:4,shadowRes:1024,ssr:1,mipbias:0,streaming:1.5,vd:1.5,flod:2.0,detail:2,lod_bias:0,grasscull:26700,rt:0,poolSize:1536}, // RTX 3070-2070
  pc3:{screen:100,shadow:3,shadowRes:1024,ssr:1,mipbias:0,streaming:1.5,vd:1.5,flod:1.5,detail:1,lod_bias:0,grasscull:17500,rt:0,poolSize:1536}, // GTX 1660-1070
  pc4:{screen:100,shadow:2,shadowRes:512,ssr:0,mipbias:0,streaming:1.0,vd:1.0,flod:1.0,detail:1,lod_bias:1,grasscull:10000,rt:0,poolSize:1024}, // GTX 1050-750
  pc5:{screen:100,shadow:1,shadowRes:256,ssr:0,mipbias:0,streaming:0.8,vd:0.8,flod:0.5,detail:0,lod_bias:2,grasscull:5000,rt:0,poolSize:512}, // Low end
};

const DEFAULTS={
  android:{'fps-sel':'60','manual-profile':'auto','opt-120fps':false,'opt-ultra':true,'opt-vsync':true,'opt-cool':true,'opt-vulkan':false,'opt-hzb':false,'opt-fog':false,'opt-ca':true,'opt-net':true},
  pc:{'pc-opt-hzb':true,'pc-opt-fog':true,'pc-opt-npc':true,'pc-opt-anim':true,'pc-opt-ca':true,'pc-opt-bloom':false,'pc-opt-lensflare':false,'pc-opt-stream':true,'pc-opt-reflex':false,'pc-opt-ultra':true,'pc-opt-mouse':true}
};

function setPlatform(p){
  const wasGenerated=generated.engine!=='';
  const prevPlatform=platform;
  platform=p;
  document.getElementById('plat-android').classList.toggle('active',p==='android');
  document.getElementById('plat-pc').classList.toggle('active',p==='pc');
  document.getElementById('opts-android').style.display=p==='android'?'':'none';
  document.getElementById('opts-pc').style.display=p==='pc'?'':'none';
  document.getElementById('opts-label').textContent='OPTIONS · '+(p==='android'?'ANDROID':'PC / WINDOWS');
  document.getElementById('install-path').textContent=p==='android'
    ?'📁 /Android/data/com.kurogame.wutheringwaves.global/.../Config/Android/'
    :'📁 ...\\Wuthering Waves Game\\Client\\Binaries\\Win64\\';
  document.getElementById('dz-hint').textContent=p==='android'
    ?'Android: Client/Saved/Logs/Client.log'
    :'PC: %LocalAppData%\\Wuthering Waves\\Saved\\Logs\\Client.log';
  document.getElementById('tab-device').style.display=p==='android'?'':'none';
  document.getElementById('tab-gus').style.display=p==='android'?'':'none';
  const guide=document.getElementById('guide-path');
  if(guide)guide.innerHTML=p==='android'
    ?'/storage/emulated/0/Android/data/<br>com.kurogame.wutheringwaves.global/files/<br>UE4Game/Client/Client/Saved/Config/Android/'
    :'..\\Wuthering Waves\\Wuthering Waves Game\\<br>Client\\Binaries\\Win64\\';
  document.getElementById('guide-files-android').style.display=p==='android'?'':'none';
  document.getElementById('guide-files-pc').style.display=p==='pc'?'':'none';
  document.getElementById('guide-step5-android').style.display=p==='android'?'':'none';
  document.getElementById('guide-step5-pc').style.display=p==='pc'?'':'none';
  document.getElementById('guide-step6-android').style.display=p==='android'?'':'none';
  document.getElementById('guide-step6-pc').style.display=p==='pc'?'':'none';
  // Update preset grid based on platform
  const grid=document.getElementById('preset-grid');
  if(p==='pc'){
    grid.innerHTML=`
      <div class="preset-card bal" data-p="pc1" onclick="selectPreset(this)"><span class="pname">PC 1</span><span class="psub">RTX 5090-4080</span></div>
      <div class="preset-card hi" data-p="pc2" onclick="selectPreset(this)"><span class="pname">PC 2</span><span class="psub">RTX 3070-2070</span></div>
      <div class="preset-card vh" data-p="pc3" onclick="selectPreset(this)"><span class="pname">PC 3</span><span class="psub">GTX 1660-1070</span></div>
      <div class="preset-card perf" data-p="pc4" onclick="selectPreset(this)"><span class="pname">PC 4</span><span class="psub">GTX 1050-750</span></div>
      <div class="preset-card bal" data-p="pc5" onclick="selectPreset(this)" style="grid-column:span 2"><span class="pname">PC 5</span><span class="psub">Low End / Integrated</span></div>
    `;
    activePreset='pc1';
    selectPreset(grid.querySelector('[data-p="pc1"]'));
  } else {
    grid.innerHTML=`
      <div class="preset-card perf" data-p="performance" onclick="selectPreset(this)"><span class="pname">PERF</span><span class="psub">Max FPS</span></div>
      <div class="preset-card bal active" data-p="balanced" onclick="selectPreset(this)"><span class="pname">BALANCED</span><span class="psub">FPS + Visual</span></div>
      <div class="preset-card hi" data-p="high" onclick="selectPreset(this)"><span class="pname">HIGH</span><span class="psub">Better visuals</span></div>
      <div class="preset-card vh" data-p="ultra" onclick="selectPreset(this)"><span class="pname">ULTRA/RT</span><span class="psub">Max quality</span></div>
    `;
    activePreset='balanced';
    selectPreset(grid.querySelector('[data-p="balanced"]'));
  }
  // ── FIX: If user switched platform after generating, clear old config ──
  if(wasGenerated){
    generated={engine:'',device:'',gus:'',input:''};
    document.getElementById('dl-bar').classList.remove('visible');
    document.getElementById('dl-info').textContent='';
    document.getElementById('tab-input').style.display='none';
    // Clear code views
    ['cv-engine','cv-device','cv-gus','cv-input'].forEach(id=>{
      const e=document.getElementById(id);
      if(e)e.innerHTML='<div class="empty-state"><div class="empty-icon">⚙</div><div class="empty-txt">Platform switched — Generate new config</div></div>';
    });
    switchTab('engine');
    const badge=document.getElementById('stat-badge');
    badge.textContent='● SWITCHED';badge.className='badge badge-init';
    showToast('⚠ Switched to '+p.toUpperCase()+' — Generate new config');
  }
  // Show input tab if PC has generated input
  if(p==='pc'&&generated.input)document.getElementById('tab-input').style.display='';
}

function selectPreset(el){
  activePreset=el.dataset.p;
  document.querySelectorAll('.preset-card').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
}

function resetAll(){
  activePreset='balanced';
  document.querySelectorAll('.preset-card').forEach(c=>c.classList.remove('active'));
  document.querySelector('.preset-card.bal').classList.add('active');
  const defs={...DEFAULTS.android,...DEFAULTS.pc};
  for(const[id,val] of Object.entries(defs)){
    const e=document.getElementById(id);if(!e)continue;
    if(e.tagName==='SELECT')e.value=val;else e.checked=val;
  }
  logInfo={};generated={engine:'',device:'',input:''};hasUploadedLog=false;
  document.getElementById('file-info-bar').style.display='none';
  document.getElementById('detected-section').style.display='none';
  document.getElementById('det-chips').innerHTML='';
  document.getElementById('det-hw').style.display='none';
  document.getElementById('det-sw').style.display='none';
  document.getElementById('det-net').style.display='none';
  document.getElementById('det-hw-rows').innerHTML='';
  document.getElementById('det-sw-rows').innerHTML='';
  document.getElementById('det-net-rows').innerHTML='';
  document.getElementById('det-iss-list').innerHTML='';
  document.getElementById('det-rtt-box').style.display='none';
  document.getElementById('dl-bar').classList.remove('visible');
  document.getElementById('tab-input').style.display='none';
  document.getElementById('brain-panel').style.display='none';
  brainApplied=false;
  ['cv-engine','cv-device','cv-gus','cv-input'].forEach(id=>{
    const e=document.getElementById(id);
    if(e)e.innerHTML='<div class="empty-state"><div class="empty-icon">⚙</div><div class="empty-txt">Reset — Generate a new config</div></div>';
  });
  const badge=document.getElementById('stat-badge');
  badge.textContent='● INIT';badge.className='badge badge-init';
  switchTab('engine');
  showToast('↺ Reset to defaults');
}

// ══ BUILDERS ══
const YT_LINK='https://www.youtube.com/@Player42_g';
const YT_TAG ='youtube.com/@Player42_g';

function getDeviceName(){
  if(!logInfo)return'General Config';
  // Priority: device_model → cpu_name → gpu → os snippet
  if(logInfo.device_model&&logInfo.device_model.length>1)return logInfo.device_model;
  if(logInfo.cpu_name&&logInfo.cpu_name.length>1)return logInfo.cpu_name.slice(0,40);
  if(logInfo.gpu&&logInfo.gpu.length>1)return logInfo.gpu.slice(0,40);
  if(logInfo.os&&logInfo.os.length>1)return logInfo.os.slice(0,40);
  return'General Config';
}

function configHeader(platform,preset){
  const dev=getDeviceName();
  const now=new Date().toISOString().slice(0,10);
  const forbidden_warn=logInfo.forbidden_cvars>0?`; ⚠ PREVIOUS CONFIG HAD ${logInfo.forbidden_cvars} FORBIDDEN CVARS — FIXED\n`:'';
  const texture_warn=logInfo.texture_errors>100?`; 📦 ${logInfo.texture_errors} TEXTURE ERRORS DETECTED — POOL SIZE INCREASED\n`:'';
  const vulkan_note=logInfo.vulkan_status?`; VULKAN: ${logInfo.vulkan_status.toUpperCase()}\n`:'';
  return[
    `; ════════════════════════════════════════════════`,
    `; ██████╗ ██╗  ██╗██████╗     TOOLKIT`,
    `; ██╔══██╗██║  ██║╚════██╗    Wuthering Waves Config`,
    `; ██████╔╝███████║ █████╔╝    ${YT_TAG}`,
    `; ██╔═══╝ ╚════██║██╔═══╝     Generated: ${now}`,
    `; ██║           ██║███████╗   Preset : ${preset.toUpperCase()}`,
    `; ╚═╝           ╚═╝╚══════╝   Device : ${dev}`,
    `; Platform : ${platform}`,
    forbidden_warn,
    texture_warn,
    vulkan_note,
    `; ════════════════════════════════════════════════`,
    ``,
  ].join('\n');
}

function buildAndroidEngineIni(p,opts){
  const gpu=(logInfo.gpu||'').toLowerCase();
  const hasVulkan=logInfo.vulkan_status==='available';
  const isHighEnd=gpu.includes('adreno 7')||gpu.includes('adreno 8')||gpu.includes('mali-g7')||gpu.includes('mali-g6')||gpu.includes('mali-g615')||(logInfo.fps_cap&&logInfo.fps_cap>=60&&!gpu.includes('adreno 6'));
  const isMid=gpu.includes('adreno 6')||gpu.includes('mali-g5')||gpu.includes('mali-g57')||gpu.includes('mali-g68');

  const charOutline=p.detail>1?1200:p.detail>0?950:850;
  const charEyeDist=p.detail>1?700:p.detail>0?550:450;
  const charLODScale=p.detail>1?7.0:p.detail>0?6.0:5.0;
  const streamPool=isHighEnd?800:isMid?500:380;
  const niagQ=p.detail>1?2:1;
  const shadowCascade=p.shadow>=4?3:2;
  const shadowSkLOD=p.shadow>=4?1:2;
  const maxAniso=isHighEnd?16:isMid?8:4;
  const lodBiasStr=isHighEnd?'-1':isMid?'0':'1';
  const ismDist=isHighEnd?14000:isMid?10000:7000;
  const ismRad=isHighEnd?18000:isMid?13000:9000;
  const grassCull=isHighEnd?2000:isMid?1200:800;

  const lines=[
    configHeader('Android',activePreset),
    `[SystemSettings]`,``,
    `; ── CHARACTER QUALITY ─────────────────────────────────`,
    `r.Shadow.SkeletalMeshLODBias=${shadowSkLOD}`,
    `r.Kuro.SkeletalMesh.LODScreenSizeScale=${charLODScale}`,
    `r.Mobile.KuroPostprocess=1`,
    `r.Mobile.TonemapperFilm=1`,
    `r.Kuro.ToonOutlineDrawDistanceMobile=${charOutline}`,
    `r.Kuro.ToonEyeTransparentDrawDistanceMobile=${charEyeDist}`,
    `r.Kuro.ToonFaceShadowMeshDrawDistanceMobile=${charEyeDist}`,
    `r.Mobile.OutlineScale=${p.detail>1?'1.3':p.detail>0?'1.2':'1.1'}`,
    `r.Kuro.AutoExposure=1`,
    `r.Kuro.RadialBlur.MobileIntensityScalar=${p.detail>1?'0.9':p.detail>0?'0.75':'0.6'}`,
    `r.Mobile.TreeRimLight=1`,
    `r.Kuro.LandscapeCapture=1`,
    `r.Kuro.LandscapeCaptureDistance=${isHighEnd?8000:isMid?6000:4000}`,
    `r.Mobile.Kuro.LandscapeCaptureSize=${p.detail>0?2:1}`,
    ``,
    `; ── SCALABILITY ──────────────────────────────────────`,
    `sg.ShadowQuality=${p.shadow>=4?3:p.shadow>=2?2:1}`,
    `sg.TextureQuality=${p.detail>1?3:p.detail>0?2:1}`,
    `sg.PostProcessQuality=${p.detail>1?3:p.detail>0?2:1}`,
    `sg.EffectsQuality=${p.detail>1?2:1}`,
    `sg.AntiAliasingQuality=${p.detail>0?2:1}`,
    `sg.ViewDistanceQuality=${p.detail>1?3:p.detail>0?2:1}`,
    `sg.FoliageQuality=${p.detail>1?2:p.detail>0?1:0}`,
    ``,
    `; ── ANTI-ALIASING ────────────────────────────────────`,
    `r.PostProcessAAQuality=6`,
    `r.TemporalAA.Upsampling=1`,
    `r.DefaultFeature.AntiAliasing=2`,
    ``,
    `; ── POST PROCESSING ──────────────────────────────────`,
    `r.BloomQuality=${p.detail>1?4:p.detail>0?3:1}`,
    `r.EyeAdaptationQuality=2`,
    `r.MotionBlurQuality=0`,
    `r.DepthOfFieldQuality=${p.detail>1?2:p.detail>0?1:0}`,
    `r.LightShaftQuality=${p.detail>0?1:0}`,
    `r.LensFlareQuality=0`,
    `r.SceneColorFringeQuality=${opts.ca?0:1}`,
    `r.Tonemapper.GrainQuantization=0`,
    `r.DisableDistortion=${p.detail>1?0:1}`,
    `r.AmbientOcclusionLevels=${p.detail>1?1:0}`,
    `r.KuroTonemapping=3`,
    `r.Kuro.KuroBloomEnable=1`,
    ``,
    `; ── SHADOW ───────────────────────────────────────────`,
    `r.Shadow.KuroEnablePointLightShadow=${p.shadow>=3?1:0}`,
    `r.Shadow.CSM.MaxMobileCascades=${shadowCascade}`,
    `r.Shadow.RadiusThresholdFar=${p.shadow>=3?'0.06':'0.12'}`,
    `r.Shadow.UnbuiltPreviewInGame=1`,
    `r.Kuro.GlobalLightQuality_PC=${p.shadow>=4?4:p.shadow>=2?3:2}`,
    `r.Kuro.GlobalLightShadowQuality_PC=${p.shadow>=4?4:p.shadow>=2?3:2}`,
    ``,
    `; ── TEXTURE STREAMING ────────────────────────────────`,
    `r.TextureStreaming=1`,
    `r.Streaming.PoolSize=${streamPool}`,
    `r.Streaming.Boost=${p.detail>1?'1.2':p.detail>0?'1.0':'0.85'}`,
    `r.Streaming.MipBias=${p.detail>1?'0':'1'}`,
    `r.Streaming.LODBias=0`,
    `r.MaxAnisotropy=${maxAniso}`,
    `r.streaming.TexturePoolSizeMode=1`,
    `r.Streaming.KuroMinFOVFactorForStreaming=0.2`,
    `r.Streaming.GroupBoost.HugeMonsterTextureFactor=${p.detail>0?'0.9':'0.6'}`,
    `r.Streaming.GroupBoost.LargeMonsterTextureFactor=${p.detail>0?'1.2':'0.9'}`,
    `r.Streaming.GroupBoost.MediumMonsterTextureFactor=${p.detail>0?'1.5':'1.2'}`,
    `r.Streaming.GroupBoost.HugeNpcTextureFactor=${p.detail>0?'0.9':'0.6'}`,
    `r.Streaming.GroupBoost.LargeNpcTextureFactor=${p.detail>0?'1.2':'0.9'}`,
    `r.Streaming.GroupBoost.MediumNpcTextureFactor=${p.detail>0?'1.5':'1.2'}`,
    `r.Streaming.GroupBoost.HugeRocTextureFactor=${p.detail>0?'0.8':'0.55'}`,
    `r.Streaming.GroupBoost.LargeRocTextureFactor=${p.detail>0?'1.1':'0.85'}`,
    `r.Streaming.GroupBoost.MediumRocTextureFactor=${p.detail>0?'1.4':'1.1'}`,
    ``,
    `; ── EFFECTS / PARTICLES ──────────────────────────────`,
    `; ⚠ CRASH FIX March 2026 — MANDATORY`,
    `fx.KuroUseGPUParticles=0`,
    `Niagara.GPUDrawIndirectArgsBufferSlack=4096`,
    `fx.Niagara.QualityLevel=${niagQ}`,
    `r.EmitterSpawnRateScale=${p.detail>1?'1.0':p.detail>0?'0.8':'0.6'}`,
    ``,
    `; ── WATER / REFLECTION ───────────────────────────────`,
    `r.Mobile.WaterSSR=${(isHighEnd&&p.detail>0)?1:0}`,
    `r.Mobile.WaterSSRStep=${p.detail>1?12:8}`,
    `r.Mobile.SSR=${(isHighEnd&&p.detail>0)?1:0}`,
    `r.Mobile.SceneObjMobileSSR=${(isHighEnd&&p.detail>1)?1:0}`,
    `r.Kuro.EnablePlanarReflection=${(isHighEnd&&p.detail>1)?1:0}`,
    `r.DistanceFieldAO=0`,
    ``,
    `; ── ENVIRONMENT ──────────────────────────────────────`,
    opts.fog?`r.Fog=0
r.KuroVolumeCloudEnable=0`:`r.Fog=1`,
    `r.Kuro.SuperFarFogGlobalDistanceScale=${p.detail>1?1:0}`,
    `r.Kuro.LightFunction=1`,
    `foliage.LODOptimize=1`,
    `r.EnableAggressivePVS=1`,
    `r.Kuro.MobileISMDecideDistance=${ismDist}.0`,
    `r.Kuro.MobileISMMeshRadiusMax=${ismRad}.0`,
    `r.Kuro.Foliage.MobileGrassCullDistanceMax=${grassCull}`,
    `r.Kuro.Foliage.MobileGrass3_0CullDistanceMax=${grassCull}`,
    `r.Kuro.Foliage.MobileMiddleCullDistanceMin=${Math.round(grassCull*1.8)}`,
    `r.Kuro.Foliage.MobileMiddleCullDistanceMax=${Math.round(grassCull*2.2)}`,
    `r.Kuro.Foliage.MobileFarCullDistanceMin=${Math.round(grassCull*2.8)}`,
    `r.Kuro.Foliage.MobileFarCullDistanceMax=${Math.round(grassCull*3.2)}`,
    ``,
    `; ── NPC & WORLD ──────────────────────────────────────`,
    `r.Kuro.NpcDisappearDistance=${isHighEnd?15000:isMid?10000:7000}`,
    `r.Kuro.LandscapeReverseLODScaleFactor=${p.detail>1?2:3}`,
    `r.LandscapeLOD0ScreenSizeScale=2`,
    `r.KuroMaxFOVForLOD=${p.detail>1?85:80}`,
    `r.MDCFallback.EnabledLOD=1`,
    `r.BBM.LODBias=${p.detail>1?0:1}`,
    `lod.TemporalLag=1`,
    `r.RenderTargetPoolMin=${p.detail>0?100:50}`,
    `r.AllowPrecomputedVisibility=1`,
    `r.HZBOcclusion=${opts.hzb?1:0}`,
    ``,
    `; ── FRAME & DISPLAY ──────────────────────────────────`,
    `r.MobileHDR=1`,
    `r.VSync=${opts.vsync?1:0}`,
    `r.FramePace=${opts.fps||60}`,
    `r.SkinCache.SceneMemoryLimitInMB=${isHighEnd?384:isMid?256:192}`,
    `r.ShaderPipelineCache.Enabled=1`,
    `r.ShaderPipelineCache.PrecompileCheckCacheHash=1`,
    `r.ShaderPipelineCache.BatchSize=128`,
    `r.PSO.CompilationMode=0`,
    `r.kuro.LGUIBlurTexture.save=0`,
    ``,
    `; ── THERMAL & STABILITY ──────────────────────────────`,
    `r.Kuro.AutoCoolEnable=${opts.cool?1:0}`,
    hasVulkan||opts.vulkan?`r.Vulkan.RobustBufferAccess=1
r.Vulkan.DescriptorSetLayoutMode=2`:`; Vulkan not detected`,
    ``,
    `[/Script/Engine.StreamingSettings]`,
    `s.TimeLimitExceededMultiplier=1.5`,
    `s.AsyncLoadingThreadEnabled=1`,
    `s.EventDrivenLoaderEnabled=1`,
    ``,
    `[/Script/Engine.GarbageCollectionSettings]`,
    `gc.LowMemory.TimeBetweenPurgingPendingLevels=20`,
  ];
  return lines.join('\n');
}


function buildAndroidDeviceProfilesIni(p,opts){
  const gpu=(logInfo.gpu||'').toLowerCase();
  const socText=[logInfo.soc_name,logInfo.soc_code,logInfo.cpu_name,logInfo.device_model].filter(Boolean).join(' ').toLowerCase();
  const hasVulkan=logInfo.vulkan_status==='available';
  const isHighEnd=gpu.includes('adreno 7')||gpu.includes('adreno 8')||gpu.includes('mali-g7')||gpu.includes('mali-g6')||gpu.includes('mali-g615')||(logInfo.fps_cap&&logInfo.fps_cap>=60&&!gpu.includes('adreno 6'));
  const texBias=p.detail>1?80:p.detail>0?200:400;
  const charOutline=p.detail>1?1200:p.detail>0?950:850;
  const charEyeDist=p.detail>1?700:p.detail>0?550:450;
  const charLODScale=p.detail>1?7.0:p.detail>0?6.0:5.0;
  const ismDist=isHighEnd?14000:10000;
  const ismRad=isHighEnd?18000:13000;
  const grassCull=isHighEnd?2000:p.detail>0?1200:800;

  function sanitizeProfileName(name){
    if(!name||typeof name!=='string')return null;
    const clean=name.trim().replace(/[^A-Za-z0-9_]/g,'_');
    return clean&&clean.startsWith('Android_')?clean:null;
  }

  function profileFromChipset(){
    if(/snapdragon\s*8\s*elite|sm8750|adreno\s*830/.test(socText)||gpu.includes('adreno 830'))return'Android_Adreno830';
    if(/snapdragon\s*8\s*gen\s*3|sm8650|adreno\s*750/.test(socText)||gpu.includes('adreno 750'))return'Android_Adreno750';
    if(/snapdragon\s*8\s*gen\s*2|sm8550|adreno\s*740/.test(socText)||gpu.includes('adreno 740'))return'Android_Adreno740';
    if(/snapdragon\s*8\s*\+?\s*gen\s*1|sm8475|sm8450|adreno\s*730/.test(socText)||gpu.includes('adreno 730'))return'Android_Adreno7xx';
    if(/snapdragon\s*7|sm7\d{3}|adreno\s*7/.test(socText)||/adreno\s*7/.test(gpu))return'Android_Adreno7xx';
    if(/snapdragon\s*6|snapdragon\s*695|snapdragon\s*680|sm6\d{3}|adreno\s*6/.test(socText)||/adreno\s*6/.test(gpu))return'Android_Adreno6xx';
    if(/adreno\s*5/.test(socText)||/adreno\s*5/.test(gpu))return'Android_Adreno5xx';
    if(/adreno\s*4/.test(socText)||/adreno\s*4/.test(gpu))return'Android_Adreno4xx';
    if(/dimensity\s*94|mali-g925/.test(socText)||gpu.includes('mali-g925'))return'Android_Mali_G925';
    if(/dimensity\s*93|mali-g720/.test(socText)||gpu.includes('mali-g720'))return'Android_Mali_G720';
    if(/dimensity\s*92|mali-g715/.test(socText)||gpu.includes('mali-g715'))return'Android_Mali_G715';
    if(/dimensity\s*90|mali-g710/.test(socText)||gpu.includes('mali-g710'))return'Android_Mali_G710';
    if(/dimensity\s*8|mali-g61[0-9]|mali-g615/.test(socText)||gpu.includes('mali-g615'))return'Android_Mali_G615';
    if(/dimensity\s*7|mali-g6/.test(socText)||/mali-g6/.test(gpu))return'Android_Mali_G61x';
    if(/dimensity\s*6|mali-g57/.test(socText)||gpu.includes('mali-g57'))return'Android_Mali_G57';
    if(/exynos\s*24|xclipse\s*9/.test(socText)||/xclipse\s*9/.test(gpu))return'Android_Xclipse9xx';
    if(/exynos\s*13|xclipse\s*5/.test(socText)||/xclipse\s*5/.test(gpu))return'Android_Xclipse5xx';
    if(/kirin|maleoon/.test(socText)||gpu.includes('maleoon'))return'Android_Maleoon';
    return null;
  }

  const detectedProfile=sanitizeProfileName(logInfo.device_profile);
  const chipsetProfile=profileFromChipset();
  const presetBaseProfile={
    performance:'Android_Low',
    balanced:'Android_Mid',
    high:'Android_VeryHigh',
    ultra:'Android_ultra',
  }[activePreset]||'Android_Mid';

  function universalProfilesForPreset(){
    if(activePreset==='performance')return['Android_Low'];
    if(activePreset==='high')return['Android_VeryHigh'];
    if(activePreset==='ultra')return['Android_ultra'];
    return['Android_Mid'];
  }

  function getManualProfile(){
    const el=document.getElementById('manual-profile');
    if(!el||!el.value||el.value==='auto')return null;
    return sanitizeProfileName(el.value);
  }

  function profileCVarLines(){
    const lines=[
      `; Device tier — follows selected preset, not forced high`,
      `+CVars=r.Mobile.DeviceEvaluation=${activePreset==='performance'?1:activePreset==='balanced'?2:3}`,
      `+CVars=r.MobileContentScaleFactor=0.0`,
      `+CVars=r.SecondaryScreenPercentage.GameViewport=100`,
      ``,
      `; Texture LOD — sharp (late-register CVar, MUST be here)`,
      `+CVars=r.streaming.QualityExtraLODBiasSetting=${texBias}`,
      ``,
      `; Character quality`,
      `+CVars=r.Kuro.ToonOutlineDrawDistanceMobile=${charOutline}`,
      `+CVars=r.Kuro.ToonEyeTransparentDrawDistanceMobile=${charEyeDist}`,
      `+CVars=r.Kuro.ToonFaceShadowMeshDrawDistanceMobile=${charEyeDist}`,
      `+CVars=r.Kuro.SkeletalMesh.LODScreenSizeScale=${charLODScale}`,
      ``,
      `; Imposter — show real mesh ASAP`,
      `+CVars=r.imp.SSMbScaleLod0=0.0`,
      `+CVars=r.imp.SSMbScaleLod1=0.0`,
      ``,
      `; ISM draw distances`,
      `+CVars=r.Kuro.MobileISMDecideDistance=${ismDist}.0`,
      `+CVars=r.Kuro.MobileISMMeshRadiusMax=${ismRad}.0`,
      ``,
      `; Foliage cull`,
      `+CVars=r.Kuro.Foliage.MobileGrassCullDistanceMax=${grassCull}`,
      `+CVars=r.Kuro.Foliage.MobileGrass3_0CullDistanceMax=${grassCull}`,
      `+CVars=r.Kuro.Foliage.MobileMiddleCullDistanceMin=${Math.round(grassCull*1.8)}`,
      `+CVars=r.Kuro.Foliage.MobileMiddleCullDistanceMax=${Math.round(grassCull*2.2)}`,
      `+CVars=r.Kuro.Foliage.MobileFarCullDistanceMin=${Math.round(grassCull*2.8)}`,
      `+CVars=r.Kuro.Foliage.MobileFarCullDistanceMax=${Math.round(grassCull*3.2)}`,
      ``,
      `; FPS unlock`,
      `+CVars=r.Kuro.MaxFPS.ThirdParty60=1`,
    ];
    if(opts.unlock120)lines.push(`+CVars=r.Kuro.MaxFPS.ThirdParty120=1`);
    if(opts.unlockUltra)lines.push(`+CVars=r.Kuro.GraphicsQuality.ThirdPartyUltraEnable=1`);
    return lines;
  }

  if(!hasUploadedLog){
    const manualProfile=getManualProfile();
    const universalProfiles=manualProfile?[manualProfile]:universalProfilesForPreset();
    const rootProfile=universalProfiles[0];
    const rootBaseProfile=presetBaseProfile==='Android_ultra'?'Android_VeryHigh':'Android';
    const lines=[
      configHeader('Android',activePreset),
      `[DeviceProfiles]`,
      ...universalProfiles.map(pn=>`+DeviceProfileNameAndTypes=${pn},Android`),
      ``,
      `; ══════════════════════════════════════════════════════`,
      manualProfile?`; Manual Android profile — no Client.log uploaded`:`; Universal Android preset profile — no Client.log uploaded`,
      manualProfile?`; Manual profile: ${manualProfile}`:`; Manual profile: Auto preset`,
      `; Preset base profile: ${presetBaseProfile}`,
      `; ══════════════════════════════════════════════════════`,
      `[${rootProfile} DeviceProfile]`,
      `DeviceType=Android`,
      `BaseProfileName=${manualProfile?presetBaseProfile:rootBaseProfile}`,
      ``,
      ...profileCVarLines(),
      ``,
    ];
    if(!manualProfile){
      universalProfiles.slice(1).forEach(pn=>{
        lines.push(
          `[${pn} DeviceProfile]`,
          `DeviceType=Android`,
          `BaseProfileName=${rootProfile}`,
          ``
        );
      });
    }
    return lines.join('\n');
  }

  const profile=chipsetProfile||detectedProfile||presetBaseProfile;
  const baseProfile=chipsetProfile||detectedProfile?presetBaseProfile:'Android';

  const lines=[
    configHeader('Android',activePreset),
    `[DeviceProfiles]`,
    `+DeviceProfileNameAndTypes=${profile},Android`,
    ``,
    `; ══════════════════════════════════════════════════════`,
    `; Targeted Android profile — generated from detected SoC/chipset`,
    `; GPU: ${logInfo.gpu||'unknown'}`,
    `; SoC: ${logInfo.soc_name||logInfo.cpu_name||logInfo.soc_code||'unknown'}`,
    `; Selected game profile: ${logInfo.device_profile||'unknown'}`,
    `; Preset base profile: ${presetBaseProfile}`,
    `; ══════════════════════════════════════════════════════`,
    `[${profile} DeviceProfile]`,
    `DeviceType=Android`,
    `BaseProfileName=${baseProfile}`,
    ``,
    ...profileCVarLines(),
  ];
  lines.push(``);
  return lines.join('\n');
}


function buildPcEngineIni(p,opts){
  const isRT=p.rt===1;
  const shadowRes=p.shadowRes>=2048?2048:p.shadowRes>=1024?1024:p.shadowRes>=512?512:256;
  const shadowThresh=p.shadow>=4?'0.01':p.shadow>=3?'0.02':p.shadow>=2?'0.03':'0.06';
  const poolSize=p.poolSize||1536;
  const lines=[
    configHeader('PC / Windows',activePreset)+
    `; Install: ..\\Wuthering Waves Game\\Client\\Binaries\\Win64\\`,``,
    `; Based on AlteriaX WuWa-Configs`,``,
    `[SystemSettings]`,
    `r.ParallelFrustumCull=1`,
    `r.StaticMeshLODDistanceScale=${p.lod_bias<=0?'0.5':p.lod_bias<=1?'0.7':'0.7'}`,
    `r.ScreenSizeCullRatioFactor=${p.detail>=2?'1':p.detail>=1?'3':'10'}`,
    `r.SceneColorFringeQuality=0`,
    `r.Tonemapper.Quality=1`,
    `r.AODownsampleFactor=${p.detail>=2?'1':'2'}`,
    `r.AmbientOcclusion.Intensity=-1`,
    `r.AmbientOcclusionMaxQuality=100`,
    `r.Shadow.RadiusThreshold=${shadowThresh}`,
    `r.Shadow.PerObjectResolutionMax=${shadowRes}`,
    `r.Shadow.PerObjectResolutionMin=${shadowRes}`,
    `r.DetailMode=${p.detail>=2?2:p.detail>=1?2:1}`,
    `r.MaterialQualityLevel=${p.detail>=2?1:2}`,
    `r.KuroMaterialQualityLevel=${p.detail>=2?1:2}`,
    ``,
    `; ── View Distance`,
    `r.ViewDistanceScale=${p.vd}`,
    `foliage.LODDistanceScale=${p.flod}`,
    `r.Kuro.Foliage.GrassCullDistanceMax=${Math.round(p.grasscull)}`,
    `r.Kuro.Foliage.Grass3_0CullDistanceMax=${Math.round(p.grasscull*1.14)}`,
    `wp.Runtime.SoraGridBlackListHeight=${Math.round(p.vd*10000)}`,
    `wp.Runtime.PlannedLoadingRangeScale=${p.vd>=2?'1.0':p.vd>=1.5?'0.9':p.vd>=1.0?'0.6':'0.4'}`,
    ``,
    `; ── Reflections`,
    `r.SSR.MaxRoughness=1.0`,
    `r.SSR.HalfResSceneColor=0`,
    `r.SSR.Quality=${p.ssr}`,
    `r.Kuro.KuroTyndallScatteringsDownSampleFactor=${p.detail>=2?'1':'2'}`,
    `r.KuroVolumetricLight.ColorMaskDownSampleFactor=${p.detail>=2?'1':'2'}`,
    `r.KuroVolumetricLight.DownSampleFactor=${p.detail>=2?'1':'2'}`,
    `r.LightShaftDownSampleFactor=1`,
    `r.Upscale.Quality=3`,
    ``,
    `; ── Textures & Streaming`,
    `r.MaxAnisotropy=${p.detail>=2?16:16}`,
    `r.Streaming.MinBoost=${p.streaming}`,
    `r.Streaming.PoolSize=${poolSize}`,
    `r.streaming.MeshMaxKeepMips=15`,
    `r.streaming.TextureMaxKeepMips=15`,
    `r.Streaming.UsingKuroStreamingPriority=0`,
    ``,
    `; ── Animation Fix`,
    `a.URO.ForceAnimRate=1`,
    ``,
    `; ── VRS`,
    `r.VRS.EnableMaterial=false`,
    `r.VRS.EnableMesh=false`,
    ``,
    `; ── Fog`,
    `r.Fog=${opts.fog?0:1}`,
    `r.KuroVolumeCloudEnable=${opts.fog?0:1}`,
    ``,
    `[/Script/Engine.RendererSettings]`,
    `r.MaxAnisotropy=${p.detail>=2?16:4}`,
    `r.RayTracing.LoadConfig=${isRT?1:0}`,
  ];
  if(opts.ca)lines.splice(3,0,`r.SceneColorFringeQuality=0`);
  if(opts.npc)lines.push(``,`; ── NPC`,`r.Kuro.NpcDisappearDistance=20000`);
  if(opts.hzb)lines.push(``,`; ── Occlusion`,`r.HZBOcclusion=1`);
  if(opts.reflex)lines.push(``,`; ── NVIDIA Reflex`,`r.Streamline.DLSSG.RetainResourcesWhenOff=1`,`t.Streamline.Reflex.Enable=1`,`t.Streamline.Reflex.Mode=1`);
  if(opts.bloom)lines.push(``,`; ── Bloom`,`r.Kuro.KuroBloomEnable=1`);
  if(opts.lensflare)lines.push(``,`; ── Lens Flare`,`r.EnableLensflareSceneSample=0`);
  lines.push(``);
  return lines.join('\n');
}

function buildPcDeviceProfilesIni(p,opts){
  return[`; WuWa DeviceProfiles.ini — P42 Toolkit (Based on AlteriaX)`,``,
    `; OPTIONAL: Unlocks Ultra Quality and 120 FPS on unsupported GPUs`,``,
    `[DeviceProfiles]`,
    `+DeviceProfileNameAndTypes=Windows_Default,Windows`,
    ``,
    `[Nvidia_RTX_50xx DeviceProfile]`,
    `BaseProfileName=Windows_Highest`,
    `DeviceScore=3300`,
    ``,
    `[Nvidia_RTX_40xx DeviceProfile]`,
    `BaseProfileName=Windows_Highest`,
    `DeviceScore=3300`,
    ``,
    `[Windows_RTX_30XX DeviceProfile]`,
    `BaseProfileName=Windows_Highest`,
    `DeviceScore=3300`,
    ``,
    `[Windows_AMD_7xxx DeviceProfile]`,
    `BaseProfileName=Windows_Highest`,
    `DeviceScore=3300`,
    ``,
    `[Windows_AMD_6xxx DeviceProfile]`,
    `BaseProfileName=Windows_Highest`,
    `DeviceScore=3300`,
    ``,
    `[Windows_AMD_High DeviceProfile]`,
    `BaseProfileName=Windows_Highest`,
    `DeviceScore=3300`,
    ``,
    `[Windows_IntelARCB580 DeviceProfile]`,
    `BaseProfileName=Windows_Highest`,
    `DeviceScore=3300`,
    ``,
    `[Windows_IntelARCB570 DeviceProfile]`,
    `BaseProfileName=Windows_Highest`,
    `DeviceScore=3300`,
    ``,
    `[Windows_IntelARCA770 DeviceProfile]`,
    `BaseProfileName=Windows_Highest`,
    `DeviceScore=3300`,
    ``,
    `[Windows_Default DeviceProfile]`,
    `DeviceType=Windows`,
    `BaseProfileName=`,
    `+CVars=r.Kuro.MaxFPS.ThirdParty120=1`,
    `+CVars=r.Kuro.MaxFPS.ThirdParty60=1`,
    `+CVars=r.Kuro.GraphicsQuality.ThirdPartyUltraEnable=1`,
  ].join('\n');
}

function buildPcInputIni(){
  return[`; WuWa PC Input.ini — Mouse smoothing fix · P42 Toolkit`,``,
    `[/Script/Engine.InputSettings]`,`bEnableMouseSmoothing=False`,`bViewAccelerationEnabled=False`,``].join('\n');
}

function buildAndroidGameUserSettingsIni(p,opts){
  const fps=opts.fps||60;
  const resQ=p.detail>1?100:p.detail>0?85:70;
  const viewQ=p.detail>1?3:p.detail>0?2:1;
  const shadowQ=p.shadow>=4?3:p.shadow>=2?2:1;
  const postQ=p.detail>1?3:p.detail>0?2:1;
  const texQ=p.detail>1?3:p.detail>0?2:1;
  const fxQ=p.detail>1?2:p.detail>0?1:0;
  const kuroQ=p.detail>1?3:2;
  const aaQ=p.detail>0?2:1;
  return[`; WuWa GameUserSettings.ini — P42 Toolkit`,``,
    `[ScalabilityGroups]`,
    `sg.ResolutionQuality=${resQ}`,
    `sg.ViewDistanceQuality=${viewQ}`,
    `sg.AntiAliasingQuality=${aaQ}`,
    `sg.ShadowQuality=${shadowQ}`,
    `sg.PostProcessQuality=${postQ}`,
    `sg.TextureQuality=${texQ}`,
    `sg.EffectsQuality=${fxQ}`,
    `sg.FoliageQuality=${p.detail>1?2:p.detail>0?1:0}`,
    `sg.ShadingQuality=${p.detail>1?3:2}`,
    `sg.KuroRenderQuality=${kuroQ}`,
    `sg.KuroLocalRenderQuality=0`,
    `sg.RayTracingQuality=0`,
    ``,
    `[/Script/Engine.GameUserSettings]`,
    `bUseVSync=${opts.vsync?'True':'False'}`,
    `bUseDynamicResolution=False`,
    `ResolutionSizeX=1280`,
    `ResolutionSizeY=720`,
    `LastUserConfirmedResolutionSizeX=1280`,
    `LastUserConfirmedResolutionSizeY=720`,
    `WindowPosX=-1`,
    `WindowPosY=-1`,
    `FullscreenMode=1`,
    `GameQualitySettingLevel=${kuroQ}`,
    `LastConfirmedFullscreenMode=1`,
    `PreferredFullscreenMode=0`,
    `Version=5`,
    `AudioQualityLevel=0`,
    `LastConfirmedAudioQualityLevel=0`,
    `FrameRateLimit=${fps}.000000`,
    `FramePace=${fps}`,
    `DesiredScreenWidth=1280`,
    `bUseDesiredScreenHeight=False`,
    `DesiredScreenHeight=720`,
    `LastUserConfirmedDesiredScreenWidth=1280`,
    `LastUserConfirmedDesiredScreenHeight=720`,
    `LastRecommendedScreenWidth=-1.000000`,
    `LastRecommendedScreenHeight=-1.000000`,
    `LastCPUBenchmarkResult=-1.000000`,
    `LastGPUBenchmarkResult=-1.000000`,
    `LastGPUBenchmarkMultiplier=1.000000`,
    `bUseHDRDisplayOutput=False`,
    `HDRDisplayOutputNits=1000`,
    ``,
    `[Internationalization]`,
    `Culture=en`,
    ``,
    `[ShaderPipelineCache.CacheFile]`,
    `LastOpened=Client`,
  ].join('\n');
}

function buildPcGameUserSettingsIni(p,opts){
  const fps=120;
  const resQ=p.detail>1?100:p.detail>0?85:70;
  const viewQ=p.detail>1?3:p.detail>0?2:1;
  const shadowQ=p.shadow>=4?3:p.shadow>=2?2:1;
  const postQ=p.detail>1?3:p.detail>0?2:1;
  const texQ=p.detail>1?3:p.detail>0?2:1;
  const fxQ=p.detail>1?2:p.detail>0?1:0;
  const kuroQ=p.detail>1?3:2;
  const aaQ=p.detail>0?2:1;
  return[`; WuWa GameUserSettings.ini — P42 Toolkit`,``,
    `[ScalabilityGroups]`,
    `sg.ResolutionQuality=${resQ}`,
    `sg.ViewDistanceQuality=${viewQ}`,
    `sg.AntiAliasingQuality=${aaQ}`,
    `sg.ShadowQuality=${shadowQ}`,
    `sg.PostProcessQuality=${postQ}`,
    `sg.TextureQuality=${texQ}`,
    `sg.EffectsQuality=${fxQ}`,
    `sg.FoliageQuality=${p.detail>1?2:p.detail>0?1:0}`,
    `sg.ShadingQuality=${p.detail>1?3:2}`,
    `sg.KuroRenderQuality=${kuroQ}`,
    `sg.KuroLocalRenderQuality=0`,
    `sg.RayTracingQuality=0`,
    ``,
    `[/Script/Engine.GameUserSettings]`,
    `bUseVSync=False`,
    `bUseDynamicResolution=False`,
    `ResolutionSizeX=2560`,
    `ResolutionSizeY=1440`,
    `LastUserConfirmedResolutionSizeX=2560`,
    `LastUserConfirmedResolutionSizeY=1440`,
    `WindowPosX=-1`,
    `WindowPosY=-1`,
    `FullscreenMode=1`,
    `GameQualitySettingLevel=${kuroQ}`,
    `LastConfirmedFullscreenMode=1`,
    `PreferredFullscreenMode=0`,
    `Version=5`,
    `AudioQualityLevel=0`,
    `LastConfirmedAudioQualityLevel=0`,
    `FrameRateLimit=${fps}.000000`,
    `FramePace=${fps}`,
    `DesiredScreenWidth=2560`,
    `bUseDesiredScreenHeight=False`,
    `DesiredScreenHeight=1440`,
    `LastUserConfirmedDesiredScreenWidth=2560`,
    `LastUserConfirmedDesiredScreenHeight=1440`,
    `LastRecommendedScreenWidth=-1.000000`,
    `LastRecommendedScreenHeight=-1.000000`,
    `LastCPUBenchmarkResult=-1.000000`,
    `LastGPUBenchmarkResult=-1.000000`,
    `LastGPUBenchmarkMultiplier=1.000000`,
    `bUseHDRDisplayOutput=False`,
    `HDRDisplayOutputNits=1000`,
    ``,
    `[Internationalization]`,
    `Culture=en`,
    ``,
    `[ShaderPipelineCache.CacheFile]`,
    `LastOpened=Client`,
  ].join('\n');
}

function generate(){
  const p=PRESETS[activePreset]||PRESETS.balanced;
  if(platform==='android'){
    const opts={
      fps:parseInt(document.getElementById('fps-sel').value),
      unlock120:document.getElementById('opt-120fps').checked,
      unlockUltra:document.getElementById('opt-ultra').checked,
      vsync:document.getElementById('opt-vsync').checked,
      cool:document.getElementById('opt-cool').checked,
      vulkan:document.getElementById('opt-vulkan').checked,
      hzb:document.getElementById('opt-hzb').checked,
      fog:document.getElementById('opt-fog').checked,
      ca:document.getElementById('opt-ca').checked,
      net:document.getElementById('opt-net').checked,
    };
    generated.engine=buildAndroidEngineIni(p,opts);
    generated.device=buildAndroidDeviceProfilesIni(p,opts);
    generated.gus=buildAndroidGameUserSettingsIni(p,opts);
    generated.input='';
    document.getElementById('tab-input').style.display='none';
  } else {
    const opts={
      hzb:document.getElementById('pc-opt-hzb').checked,
      fog:document.getElementById('pc-opt-fog').checked,
      npc:document.getElementById('pc-opt-npc').checked,
      animFix:document.getElementById('pc-opt-anim').checked,
      ca:document.getElementById('pc-opt-ca').checked,
      bloom:document.getElementById('pc-opt-bloom').checked,
      lensflare:document.getElementById('pc-opt-lensflare').checked,
      streaming:document.getElementById('pc-opt-stream').checked,
      reflex:document.getElementById('pc-opt-reflex').checked,
      unlockUltra:document.getElementById('pc-opt-ultra').checked,
      mouse:document.getElementById('pc-opt-mouse').checked,
    };
    generated.engine=buildPcEngineIni(p,opts);
    generated.device='';
    generated.gus='';
    generated.input=opts.mouse?buildPcInputIni():'';
    document.getElementById('tab-device').style.display='none';
    document.getElementById('tab-gus').style.display='none';
    if(generated.input)document.getElementById('tab-input').style.display='';
    else document.getElementById('tab-input').style.display='none';
  }
  if(platform==='android'){
    document.getElementById('tab-device').style.display='';
    document.getElementById('tab-gus').style.display='';
    renderCode('cv-device',generated.device);
    renderCode('cv-gus',generated.gus);
  }
  renderCode('cv-engine',generated.engine);
  if(generated.input)renderCode('cv-input',generated.input);
  switchTab('engine');
  const dlb=document.getElementById('dl-bar');dlb.classList.add('visible');
  const pcFiles=generated.input?'Engine.ini + Input.ini':'Engine.ini';
  const androidFiles='Engine.ini + DeviceProfiles.ini + GameUserSettings.ini';
  document.getElementById('dl-info').textContent=platform.toUpperCase()+' · '+activePreset.toUpperCase()+' — '+(platform==='android'?androidFiles:pcFiles)+' ready';
  const badge=document.getElementById('stat-badge');
  badge.textContent='● READY';badge.className='badge badge-ok';
  showToast('✅ Config generated!');
}

function renderCode(elId,text){
  const el=document.getElementById(elId);if(!el)return;
  const html=text.split('\n').map(line=>{
    if(!line.trim())return'<span> </span>';
    if(line.startsWith('; ═')||line.startsWith('; ──'))return`<span class="c-banner">${esc(line)}</span>`;
    if(line.startsWith(';'))return`<span class="c-comment">${esc(line)}</span>`;
    if(line.startsWith('['))return`<span class="c-section">${esc(line)}</span>`;
    if(line.includes('=')){const eq=line.indexOf('='),k=line.substring(0,eq),v=line.substring(eq+1);return`<span class="c-key">${esc(k)}</span><span class="c-equals">=</span><span class="${isNaN(parseFloat(v))?'c-val-str':'c-val-num'}">${esc(v)}</span>`;}
    return`<span>${esc(line)}</span>`;
  }).join('\n');
  el.innerHTML=`<div class="code-inner">${html}</div>`;
}

function switchTab(name){
  activeTab=name;
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
  const tb=document.getElementById('tab-'+name),tc=document.getElementById('content-'+name);
  if(tb)tb.classList.add('active');if(tc)tc.classList.add('active');
}

async function downloadZip(){
  if(!generated.engine){showToast('⚠ Generate config first.');return;}
  const dev=getDeviceName().replace(/[^a-zA-Z0-9_\-]/g,'_').slice(0,30);
  const zip=new JSZip();
  zip.file('Engine.ini',generated.engine);
  zip.file('DeviceProfiles.ini',generated.device);
  if(platform==='android'&&generated.gus)zip.file('GameUserSettings.ini',generated.gus);
  if(generated.input)zip.file('Input.ini',generated.input);
  const gpuInfo=logInfo.gpu?`GPU     : ${logInfo.gpu}`:'';
  const vulkanInfo=logInfo.vulkan_status?`Vulkan  : ${logInfo.vulkan_status==='available'?'✅ Supported':'❌ Not available (OpenGL ES)'}`:'';
  const profileInfo=logInfo.device_profile?`Profile : ${logInfo.device_profile}`:'';
  const forbiddenInfo=logInfo.forbidden_cvars>0?`⚠ FIXED: Previous config had ${logInfo.forbidden_cvars} forbidden CVars.`:'';
  const readme=platform==='android'
    ?`╔══════════════════════════════════════════╗
║   WuWa Config v2 · P42 Toolkit          ║
║   ${YT_LINK}
╚══════════════════════════════════════════╝

Preset  : ${activePreset.toUpperCase()}
Device  : ${getDeviceName()}
Platform: Android
${gpuInfo}
${vulkanInfo}
${profileInfo}
${forbiddenInfo}

📁 INSTALL PATH (TWO Client folders!):
/storage/emulated/0/Android/data/
  com.kurogame.wutheringwaves.global/files/
  UE4Game/Client/Client/Saved/Config/Android/

STEPS:
1. Copy Engine.ini + DeviceProfiles.ini + GameUserSettings.ini to the path above
2. Launch Wuthering Waves
3. In-game: Graphics → Quality → Quality Priority (画质优先)
4. If issues, delete files and revert to default settings

KEY v2 FIXES APPLIED:
• fx.KuroUseGPUParticles=0 (crash fix Mar 2026)
• r.Mobile.KuroPostprocess=1 (character lighting ON)
• QualityExtraLODBias in DeviceProfiles (texture fix)
• Niagara crash buffer included
• No forbidden CVars

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Subscribe for more: ${YT_LINK}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
    :`╔══════════════════════════════════════════╗
║   WuWa Config · P42 Toolkit             ║
║   ${YT_LINK}
╚══════════════════════════════════════════╝

Preset  : ${activePreset.toUpperCase()}
Device  : ${getDeviceName()}
Platform: PC / Windows

📁 INSTALL PATH (Engine.ini):
..\\Wuthering Waves\\Wuthering Waves Game\\Client\\Binaries\\Win64\\
(Add -EngineIni=Engine.ini to Steam launch options)

📁 OPTIONAL (Input.ini / DeviceProfiles.ini):
..\\Wuthering Waves\\Wuthering Waves Game\\Client\\Saved\\Config\\WindowsNoEditor\\

STEPS:
1. Copy Engine.ini to Win64 folder (or add -EngineIni=Engine.ini to launch options)
2. Copy Input.ini to WindowsNoEditor if included (optional - mouse fix)
3. Launch Wuthering Waves
4. If issues, delete files and verify game files

NOTE: GameUserSettings.ini NOT needed for PC. DeviceProfiles.ini is optional.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Subscribe for more: ${YT_LINK}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
  zip.file('README_P42.txt',readme);
  const blob=await zip.generateAsync({type:'blob'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=`WuWa_${platform==='android'?'Android':'PC'}_${activePreset}_${dev}.zip`;
  a.click();
  showToast('⬇ Downloading — '+getDeviceName());
}

function copyActive(){
  const text=generated[activeTab]||generated.engine;
  if(!text){showToast('⚠ Generate config first.');return;}
  navigator.clipboard.writeText(text).then(()=>showToast('📋 Copied!'));
}

// ══ SMART GPU TIER DETECTION ══
function getGPUTier(gpu){
  if(!gpu)return'unknown';
  const g=gpu.toLowerCase();

  // Check brain data first for exact GPU match
  if(brainData&&brainData.gpu_profiles){
    const platformKey=platform==='pc'?'pc':'android';
    const profiles=brainData.gpu_profiles[platformKey]||{};
    for(const[key,val] of Object.entries(profiles)){
      if(g.includes(key.replace(/_/g,' '))||g.includes(key)){
        return val.tier;
      }
    }
  }

  // Fallback to regex matching
  // Snapdragon 8 Elite / Gen 4 - flagship
  if(/8[es]\s*elite|snapdragon\s*8\s*gen\s*4|snapdragon\s*8\s*gen\s*3/i.test(g))return'flagship';
  // Snapdragon 8 Gen 3 / 8 Gen 2
  if(/8\s*gen\s*3|8\s*gen\s*2|sm8650|sm8550/i.test(g))return'flagship';
  // Snapdragon 8+ Gen 1 / 8 Gen 1
  if(/8\s*\+\s*gen\s*1|8\s*gen\s*1|sm8475|sm8450/i.test(g))return'high';
  // Snapdragon 7+ Gen 3 / 7 Gen 3
  if(/7\s*\+\s*gen\s*3|7\s*gen\s*3|sd7gen3|sd7g3/i.test(g))return'high';
  // Snapdragon 7s Gen 3 / 7s Gen 2
  if(/7s\s*gen\s*3|7s\s*gen\s*2|sd7sgen3|sd7sgen2/i.test(g))return'mid_high';
  // Snapdragon 7+ Gen 2 / 7 Gen 2
  if(/7\s*\+\s*gen\s*2|7\s*gen\s*2|sd7gen2|sd7g2/i.test(g))return'mid_high';
  // Snapdragon 7 Gen 1 / 6 Gen 1
  if(/7\s*gen\s*1|6\s*gen\s*1|sd7gen1|sd6gen1/i.test(g))return'mid';
  // Snapdragon 6s Gen 3 / 6s Gen 2 / 695 / 690
  if(/6s\s*gen|695|690|sdm6/i.test(g))return'mid_low';
  // Snapdragon 4xx series
  if(/snapdragon\s*4[5-9]|snapdragon\s*4[0-4]/i.test(g))return'low';
  // Adreno 7xx (generic high)
  if(/adreno\s*7[5-9]\d|adreno\s*7[3-4]\d/i.test(g))return'high';
  // Adreno 7xx (mid-high)
  if(/adreno\s*7[0-2]\d|adreno\s*6[7-9]\d/i.test(g))return'mid_high';
  // Adreno 6xx (mid)
  if(/adreno\s*6[0-5]\d/i.test(g))return'mid';
  // Adreno 5xx / 6xx low
  if(/adreno\s*5\d{2}|adreno\s*6[0-5]\d/i.test(g))return'mid_low';
  // Adreno 4xx / 5xx low
  if(/adreno\s*[0-4]/i.test(g))return'low';
  // Mali-G9xx (Dimensity 9400, X925)
  if(/mali-g9[2-9]\d|mali-g9[0-9]{2}/i.test(g))return'flagship';
  // Mali-G8xx (Dimensity 9300, X1)
  if(/mali-g8[5-9]\d|mali-g8[1-4]\d/i.test(g))return'high';
  // Mali-G7xx (mid-high)
  if(/mali-g7[1-9]\d/i.test(g))return'mid_high';
  // Mali-G6xx (mid)
  if(/mali-g6[1-9]\d|mali-g6[0]\d/i.test(g))return'mid';
  // Mali-G5xx / G4xx (low-mid)
  if(/mali-g5[1-9]|mali-g[3-4]/i.test(g))return'mid_low';
  // Mali-Txx (old)
  if(/mali-t/i.test(g))return'low';
  // Samsung Xclipse
  if(/xclipse\s*9[5-9]|xclipse\s*9[0-9]{2}/i.test(g))return'flagship';
  if(/xclipse\s*9/i.test(g))return'high';
  if(/xclipse/i.test(g))return'mid';
  // PowerVR
  if(/powervr\s*g9/i.test(g))return'flagship';
  if(/powervr\s*g[7-8]/i.test(g))return'high';
  if(/powervr/i.test(g))return'mid';
  // PC GPUs
  if(/rtx\s*4[0-9]|rtx\s*5[0-9]/i.test(g))return'pc_flagship';
  if(/rtx\s*3[0-9]/i.test(g))return'pc_high';
  if(/rtx\s*2[0-9]/i.test(g))return'pc_high';
  if(/gtx\s*1[6-9]|gtx\s*2[0-9]/i.test(g))return'pc_high';
  if(/gtx\s*1[0-5]|rtx\s*2060/i.test(g))return'pc_mid';
  if(/radeon\s*rx\s*7|radeon\s*rx\s*8/i.test(g))return'pc_high';
  if(/radeon\s*rx\s*6/i.test(g))return'pc_mid';
  if(/intel\s*(arc|uhd|iris)/i.test(g))return'pc_low';
  return'unknown';
}

// ══ SMART PRESET RECOMMENDATION ══
function getRecommendedPreset(info){
  const tier=getGPUTier(info.gpu);
  const ramGB=info.physical_mem_mb?(info.physical_mem_mb/1024):(info.ram?parseFloat(info.ram):null);
  const vulkanOK=info.vulkan_status==='available';
  const hasOOM=info.gpu_oom>0;
  const isLowMem=info.is_low_mem_mobile===true;
  const hasIssues=info.forbidden_cvars>0||info.texture_errors>5||info.drop_frames>15;

  // Check brain data for GPU-specific recommendation first
  if(brainData&&brainData.gpu_profiles){
    const g=info.gpu?info.gpu.toLowerCase():'';
    const platformKey=platform==='pc'?'pc':'android';
    const profiles=brainData.gpu_profiles[platformKey]||{};
    for(const[key,val] of Object.entries(profiles)){
      if(g.includes(key.replace(/_/g,' '))||g.includes(key)){
        // Found a match - return GPU-specific recommendation
        if(!hasOOM&&!isLowMem){
          const score=tier==='flagship'||tier==='pc_flagship'?90:(tier==='high'||tier==='pc_high'?80:70);
          return{preset:val.recommended_preset,reason:`${val.name} - ${val.tier} GPU`,score:score};
        }
      }
    }
  }

  // Fallback to tier-based logic
  // OOM or low memory = performance
  if(hasOOM||isLowMem)return{preset:'performance',reason:'OOM/low memory detected',score:85};
  // Low tier GPU = performance
  if(tier==='low'||tier==='mid_low')return{preset:'performance',reason:'Low-end GPU detected',score:75};
  // Low RAM < 4GB = performance
  if(ramGB&&ramGB<4)return{preset:'performance',reason:'Low RAM ('+ramGB.toFixed(1)+'GB)',score:80};
  // Flagship with Vulkan = ultra
  if((tier==='flagship'||tier==='pc_flagship')&&vulkanOK)return{preset:'ultra',reason:'Flagship GPU + Vulkan',score:90};
  // Flagship without Vulkan = high
  if(tier==='flagship'||tier==='pc_flagship')return{preset:'high',reason:'Flagship GPU',score:82};
  // High-end with Vulkan = high
  if((tier==='high'||tier==='pc_high')&&vulkanOK)return{preset:'high',reason:'High-end GPU + Vulkan',score:78};
  // High-end = balanced
  if(tier==='high'||tier==='pc_high')return{preset:'balanced',reason:'High-end GPU',score:70};
  // Mid-high with issues = balanced
  if(hasIssues)return{preset:'balanced',reason:'Performance issues detected',score:65};
  // Mid-high = balanced
  if(tier==='mid_high')return{preset:'balanced',reason:'Mid-high GPU',score:60};
  // Mid = balanced
  if(tier==='mid'||tier==='pc_mid')return{preset:'balanced',reason:'Mid-range GPU',score:55};
  // Default
  return{preset:'balanced',reason:'Auto-detected',score:50};
}

// ══ PERFORMANCE ESTIMATOR ══
function estimatePerformance(info){
  const tier=getGPUTier(info.gpu);
  const fpsCap=info.fps_cap||60;
  const screenPct=info.screen_pct||100;
  const shadowQ=info.shadow_q||2;
  const vulkanOK=info.vulkan_status==='available';
  let baseScore=50;
  // GPU tier
  if(tier==='flagship'||tier==='pc_flagship')baseScore+=30;
  else if(tier==='high'||tier==='pc_high')baseScore+=20;
  else if(tier==='mid_high')baseScore+=10;
  else if(tier==='mid'||tier==='pc_mid')baseScore+=0;
  else if(tier==='mid_low')baseScore-=10;
  else baseScore-=20;
  // Vulkan bonus
  if(vulkanOK)baseScore+=8;
  // FPS cap
  if(fpsCap>=120)baseScore+=10;
  else if(fpsCap>=90)baseScore+=5;
  // Render scale
  if(screenPct>=100)baseScore+=5;
  else if(screenPct<80)baseScore-=10;
  // Shadow quality
  if(shadowQ>=3)baseScore-=5;
  else if(shadowQ<=1)baseScore+=5;
  // Penalties
  if(info.is_low_mem_mobile)baseScore-=15;
  if(info.gpu_oom>0)baseScore-=20;
  if(info.drop_frames>10)baseScore-=10;
  const estFPS=Math.min(fpsCap,Math.max(15,Math.round((baseScore/100)*fpsCap)));
  return{estimatedFPS:estFPS,score:Math.max(0,Math.min(100,baseScore)),tier,tierLabel:tier==='unknown'?'Unknown':tier.replace('_',' ').toUpperCase()};
}

// ══ THERMAL THROTTLE DETECTION ══
function detectThermalThrottle(lines){
  let throttleEvents=0;
  let tempSpikes=[];
  for(const line of lines){
    const ll=line.toLowerCase();
    if(/thermal|throttle|temp.*high|cpu.*hot|device.*hot/i.test(ll))throttleEvents++;
    const m=ll.match(/temp[erature]*\s*:?\s*(\d+)/);
    if(m)tempSpikes.push(parseInt(m[1]));
  }
  const avgTemp=tempSpikes.length?tempSpikes.reduce((a,b)=>a+b,0)/tempSpikes.length:null;
  const maxTemp=tempSpikes.length?Math.max(...tempSpikes):null;
  return{events:throttleEvents,avgTemp:avgTemp?Math.round(avgTemp):null,maxTemp,isThrottling:throttleEvents>3||(maxTemp&&maxTemp>48)};
}

// ══ NETWORK QUALITY SCORING ══
function scoreNetworkQuality(info){
  if(!info.avg_rtt)return null;
  const rtt=info.avg_rtt;
  const jitter=info.rtt_values.length>1?(info.max_rtt-info.min_rtt)/2:0;
  const loss=info.packet_loss;
  const reconnects=info.reconnects;
  let score=100;
  let issues=[];
  // RTT scoring
  if(rtt<50)score-=0;
  else if(rtt<100)score-=10;
  else if(rtt<150)score-=20;
  else if(rtt<250)score-=40;
  else{score-=60;issues.push('Critical latency');}
  // Jitter scoring
  if(jitter>100){score-=15;issues.push('High jitter');}
  // Packet loss
  if(loss>5){score-=20;issues.push('Packet loss');}
  // Reconnects
  if(reconnects>0){score-=reconnects*10;issues.push(reconnects+' disconnects');}
  return{score:Math.max(0,score),rating:score>70?'Good':score>40?'Fair':'Poor',issues};
}

// ══ MISSING SETTINGS DETECTOR ══
function detectMissingSettings(info){
  const missing=[];
  const warnings=[];
  // KuroPostprocess
  if(info.postprocess_on===0){missing.push({k:'r.Mobile.KuroPostprocess',v:'1',reason:'Character rim light missing'});}
  // HZB Occlusion
  if(info.hzb_occlusion===0){missing.push({k:'r.HZBOcclusion',v:'1',reason:'Fix cave artifacts'});}
  // Skeletal LOD
  if(info.skeletal_lod&&info.skeletal_lod>0){missing.push({k:'r.SkeletalMeshLODBias',v:'-1',reason:'Character quality reduced'});}
  // Texture bias (if blurry)
  if(info.texture_bias&&info.texture_bias>500){missing.push({k:'r.streaming.QualityExtraLODBiasSetting',v:'300',reason:'Textures too blurry'});}
  // VSync (gaming recommend off)
  if(info.vsync===1){warnings.push({k:'r.VSync',v:'0',reason:'Recommend OFF for lower input lag'});}
  // Screen percentage too low
  if(info.screen_pct&&info.screen_pct<70){warnings.push({k:'r.ScreenPercentage',v:'80',reason:'Very low render scale'});}
  return{missing,warnings};
}

// ══ LOG PARSE v3 (SMART) ══
function parseLog(text){
  const lines=text.split('\n');
  const info={
    gpu:null,ram:null,os:null,api:null,
    device_model:null,cpu_name:null,screen_hz:null,resolution:null,
    fps_cap:null,screen_pct:null,shadow_q:null,hzb_occlusion:null,
    ssr_quality:null,device_eval:null,log_date:null,game_version:null,
    char_name:null,server_region:null,vsync:null,
    rtt_values:[],avg_rtt:null,max_rtt:null,min_rtt:null,
    packet_loss:0,reconnects:0,texture_errors:0,gpu_oom:0,crash_hints:[],
    issues:[],platform:'Unknown',
    android_version:null,driver_version:null,total_vram:null,
    battery_temp:null,fps_actual:null,map_name:null,drop_frames:0,
    device_profile:null,vulkan_status:null,forbidden_cvars:0,
    physical_mem_mb:null,cpu_cores:null,quality_mode:null,
    skeletal_lod:null,postprocess_on:null,texture_bias:null,
    gl_version:null,is_low_mem_mobile:null,
    soc_name:null,soc_code:null,
    gpu_tier:null,estimated_fps:null,perf_score:null,
    thermal_throttle:null,network_score:null,net_rating:null,
    recommended_preset:null,missing_settings:[],setting_warnings:[],
  };
  let is_pc=false,is_android=false;

  for(const line of lines){
    const ll=line.toLowerCase();
    const tr=line.trim();

    if(!is_pc&&(ll.includes('windowsnoeditor')||ll.includes('ntdll.dll')||ll.includes('win64')))is_pc=true;
    if(!is_android&&(ll.includes('/data/data/')||ll.includes('android')||ll.includes('com.kurogame')))is_android=true;

    if(!info.log_date){const m=tr.match(/Log file open,\s*\[(\d{4}\.\d{2}\.\d{2}-\d{2}\.\d{2}\.\d{2})/);if(m)info.log_date=m[1].replace(/\./g,'-').replace(/-([0-9]{2})-([0-9]{2})-([0-9]{2})$/,' $1:$2:$3');}

    if(!info.game_version){
      let m=tr.match(/Kuro App Version\s+([\d.]+)/i);
      if(!m)m=tr.match(/CrashSight AppVersion:\s*([\d.]+)/i);
      if(!m)m=tr.match(/(?:GameVersion|ClientVersion)\s*[=:]\s*([\d]+\.[\d]+\.[\d.]+)/i);
      if(m)info.game_version=m[1];
    }

    if(!info.device_model){
      let m=tr.match(/K#DeviceModel\s*:\s*([^\r\n]+)/i);
      if(!m)m=tr.match(/DeviceModel\s*:\s*([^\r\n,\]]+)/i);
      if(m){const v=m[1].trim().replace(/['"]/g,'');if(v.length>2&&v.length<60&&!v.match(/^[XYZxyz=-]/)&&!v.match(/^[\d.-]+\s*[\d.-]+/))info.device_model=v;}
    }

    if(!info.cpu_name){
      let m=tr.match(/LogInit.*CPU:\s*([^,\r\n]+)/i);
      if(!m)m=tr.match(/(?:Snapdragon|Dimensity|Exynos|Kirin|MediaTek|Intel|AMD|Apple)\s[\w\s\-+]+/i);
      if(m)info.cpu_name=m[1]?m[1].trim().slice(0,55):m[0].trim().slice(0,55);
    }

    if(!info.soc_name){
      const m=tr.match(/(Snapdragon[\s\w+]+|Dimensity[\s\d+]+|Helio[\s\w]+|Exynos[\s\d]+|Kirin[\s\d]+|Unisoc[\s\w]+)/i);
      if(m)info.soc_name=m[1].trim().slice(0,40);
    }
    if(!info.soc_code){const m=tr.match(/rHn:(\w+)/);if(m)info.soc_code=m[1];}

    if(!info.cpu_cores){
      const m=tr.match(/(\d+)\s+cores\s+and\s+(\d+)\s+assignable/i);
      if(m)info.cpu_cores=m[2]+' / '+m[1]+' cores';
    }

    if(!info.gpu){
      let m=tr.match(/K#GPUFamily\s*:\s*([^\r\n]+)/i);
      if(!m)m=tr.match(/LogInit.*GPU:\s*([^,\r\n]+)/i);
      if(!m)m=tr.match(/(?:Adreno\s*\(TM\)\s*\d+|Mali-G\d+\w*|GeForce\s+[\w\s]+|Radeon\s+[\w\s]+)/i);
      if(m)info.gpu=m[1]?m[1].trim().slice(0,55):m[0].trim().slice(0,55);
    }

    if(!info.gl_version){const m=tr.match(/K#GLVersion\s*:\s*([^\r\n]+)/i);if(m)info.gl_version=m[1].trim().slice(0,60);}

    if(!info.api){
      if(tr.includes('VulkanRHI is available')||tr.includes('Vulkan capable device detected'))info.api='Vulkan';
      else if(/OpenGL ES/i.test(tr))info.api='OpenGL ES 3.2';
      else if(/DirectX|D3D12/i.test(tr))info.api='DirectX 12';
    }

    if(info.vulkan_status===null){
      if(/VulkanRHI is available|Vulkan capable device detected/i.test(tr))info.vulkan_status='available';
      else if(/Failed to init Vulkan|Vulkan.*driver.*less than/i.test(tr))info.vulkan_status='failed';
    }

    if(!info.ram){
      let m=tr.match(/Platform has ~\s*([\d.]+)\s*GB\s*\[([\d]+)\s*\/\s*([\d]+)/i);
      if(m){const u=Math.round(parseInt(m[2])/1073741824*10)/10;const t=Math.round(parseInt(m[3])/1073741824*10)/10;info.ram=u+' GB (total '+t+' GB)';}
      if(!info.ram){m=tr.match(/(?:PhysicalRAM|TotalPhysical|MemTotal)\s*[=:]\s*(\d+)/i);if(m){let v=parseInt(m[1]);if(v>0)info.ram=v>1073741824?Math.round(v/1073741824*10)/10+' GB':v>1048576?Math.round(v/1048576)+' MB':v+' MB';}}
    }

    if(!info.physical_mem_mb){const m=tr.match(/PhysicalMemoryMB:\s*(\d+)/i);if(m)info.physical_mem_mb=parseInt(m[1]);}
    if(info.is_low_mem_mobile===null){
      if(tr.includes('IsLowMemoryMobile: True'))info.is_low_mem_mobile=true;
      else if(tr.includes('IsLowMemoryMobile: False'))info.is_low_mem_mobile=false;
    }

    if(!info.os){
      let m=tr.match(/LogInit.*OS:\s*Android\s*\((\d+)\)/i);
      if(m){info.os='Android '+m[1];info.android_version=m[1];}
      else{m=tr.match(/OS\s*[=:]\s*([^\r\n]+)/i)||tr.match(/Windows\s+([\d.]+[^\r\n,]*)/i);if(m)info.os=m[1]?m[1].trim().slice(0,55):m[0].trim().slice(0,55);}
    }
    if(!info.android_version){const m=tr.match(/Android\s+\((\d+)\)/i)||tr.match(/Android\s+(\d+(?:\.\d+)?)/i);if(m)info.android_version=m[1];}

    if(!info.driver_version){
      let m=tr.match(/driver.*version\s+(0x[0-9a-f]+)/i);
      if(m)info.driver_version=m[1];
      else{m=tr.match(/(?:DriverVersion|Driver Version)\s*[=:]\s*([^\r\n,]+)/i);if(m)info.driver_version=m[1].trim().slice(0,30);}
    }

    if(!info.resolution){
      let m=tr.match(/ViewportSize\s+([\d.]+),\s*([\d.]+)\s+Resolution\s+(\d+),\s*(\d+)/i);
      if(m)info.resolution=m[3]+'×'+m[4];
      else{m=tr.match(/(?:Resolution|ViewportSize)\s*[=:,]\s*(\d{3,4})[xX×,]\s*(\d{3,4})/i);if(m)info.resolution=m[1]+'×'+m[2];}
    }

    if(!info.device_profile){const m=tr.match(/Selected Device Profile:\s*\[([^\]]+)\]/i);if(m)info.device_profile=m[1];}

    {const m=tr.match(/contained\s+(\d+)\s+forbidden\s+CVars/i);if(m)info.forbidden_cvars+=parseInt(m[1]);}

    if(!info.texture_bias){const m=tr.match(/CurrentQualityExtraLODBiasSetting\s+(\d+)/i);if(m)info.texture_bias=parseInt(m[1]);}

    const mfps=tr.match(/r\.FramePace\s*:\s*(?:requesting\s+\d+,\s*)?set\s*(?:as\s+)?(\d+)/i);
    if(mfps)info.fps_cap=parseInt(mfps[1]);
    if(!info.fps_cap){const m=tr.match(/MaxFPS\s*[=:]\s*(\d+)/i);if(m)info.fps_cap=parseInt(m[1]);}

    if(info.quality_mode===null){
      const m=tr.match(/sg\.KuroRenderQuality\s*=\s*"(\d+)"/i);
      if(m){const v=parseInt(m[1]);const names=['Extreme Perf','Performance','Balanced','Quality','Ultra'];info.quality_mode=(names[v]||'Level '+v)+' (Lv'+v+')'; }
    }

    if(tr.includes('Value remains')){
      const getV=()=>{const mm=tr.match(/Value remains\s+'([^']+)'/i);return mm?mm[1]:null;};
      const v=getV();
      if(v!==null){
        if(tr.includes('r.ScreenPercentage'))info.screen_pct=parseFloat(v);
        if(tr.includes('sg.ShadowQuality'))info.shadow_q=parseInt(v);
        if(tr.includes('r.HZBOcclusion'))info.hzb_occlusion=parseInt(v);
        if(tr.includes('r.SSR.Quality'))info.ssr_quality=parseInt(v);
        if(tr.includes('r.Mobile.DeviceEvaluation'))info.device_eval=parseInt(v);
        if(tr.includes('r.VSync'))info.vsync=parseInt(v);
        if(tr.includes('r.Mobile.KuroPostprocess'))info.postprocess_on=parseInt(v);
        if(tr.includes('r.SkeletalMeshLODBias'))info.skeletal_lod=parseInt(v);
      }
    }

    if(!info.screen_pct){const m=tr.match(/^r\.ScreenPercentage\s*=\s*"([\d.]+)"/);if(m)info.screen_pct=parseFloat(m[1]);}
    if(!info.fps_actual){const m=tr.match(/AverageFPS\s*[=:]\s*([\d.]+)/i);if(m)info.fps_actual=parseFloat(m[1]).toFixed(1);}

    if(!info.map_name){
      let m=tr.match(/UWorldPartition.*World\s*=.*\/([\w]+)\./i);
      if(!m)m=tr.match(/(?:LoadMap|MapName)\s*[=:\/]\s*([\w_\-]+)/i);
      if(m&&m[1].length>2)info.map_name=m[1];
    }

    {let m=tr.match(/(?:RTT|Latency|Ping)\s*[=:]\s*(\d+)/i);if(!m)m=tr.match(/\bping\b\D*(\d+)\s*ms/i);if(m){const v=parseInt(m[1]);if(v>=1&&v<9000)info.rtt_values.push(v);}}

    if(/packet[_\s]?loss|PacketLoss/i.test(tr))info.packet_loss++;
    if(/(?:Disconnect|NetWorkMaskView.*OpenViewAsync|Connection\s*Timeout)/i.test(tr))info.reconnects++;
    if(/(?:Error pixel format|non-streamed mips|failed to load texture)/i.test(tr))info.texture_errors++;
    if(/(?:out.?of.?memory|GPU.?OOM|VulkanOOM)/i.test(ll))info.gpu_oom++;
    if(/(?:frame.?drop|hitch|stutter)/i.test(ll))info.drop_frames++;
    if(/(?:Crash|Fatal|Assert|Unhandled Exception)/i.test(tr)&&!tr.includes('CrashSight')&&!tr.includes('CrashServer')&&info.crash_hints.length<4){const s=tr.slice(0,90);if(s&&!info.crash_hints.some(h=>h.includes(s.slice(0,30))))info.crash_hints.push(s);}

    if(!info.char_name){
      const m=tr.match(/BP_([A-Za-z]+?)_C[_\d\s]/);
      if(m){const MAP={Changli:'Changli',ChangLi:'Changli',Jinhsi:'Jinhsi',Camellya:'Camellya',Jiyan:'Jiyan',Carlotta:'Carlotta',Yinlin:'Yinlin',Shorekeeper:'Shorekeeper',Brant:'Brant',Phoebe:'Phoebe',Cantarella:'Cantarella',Roccia:'Roccia',Zani:'Zani',Ciaccona:'Ciaccona',Lumi:'Lumi',Yangyang:'Yangyang',Aalto:'Aalto',Baizhi:'Baizhi',Calcharo:'Calcharo',Danjin:'Danjin',Encore:'Encore',Rover:'Rover',Sanhua:'Sanhua',Taoqi:'Taoqi',Verina:'Verina',Chixia:'Chixia',Mortefi:'Mortefi',Yuanwu:'Yuanwu',Shouanren:'Shouanren'};if(MAP[m[1]])info.char_name=MAP[m[1]];}
    }
  }

  info.platform=is_pc?'PC / Windows':(is_android?'Android':'Unknown');
  if(info.rtt_values.length){info.avg_rtt=Math.round(info.rtt_values.reduce((a,b)=>a+b,0)/info.rtt_values.length);info.max_rtt=Math.max(...info.rtt_values);info.min_rtt=Math.min(...info.rtt_values);}

  const iss=[];
  if(info.forbidden_cvars>0)iss.push({cls:'red',txt:'🚫 '+info.forbidden_cvars+' forbidden CVar(s) removed from Engine.ini!'});
  if(info.vulkan_status==='failed')iss.push({cls:'yellow',txt:'⚠ Vulkan init failed — GPU driver outdated, running OpenGL ES'});
  else if(info.vulkan_status==='available')iss.push({cls:'green',txt:'✅ Vulkan supported — enable Vulkan option below'});
  if(info.is_low_mem_mobile===true)iss.push({cls:'yellow',txt:'🟡 Low memory device — game using reduced quality preset'});
  if(info.texture_bias&&info.texture_bias>500)iss.push({cls:'yellow',txt:'🟡 Texture LOD bias '+info.texture_bias+' (blurry) — target <400'});
  if(info.postprocess_on===0)iss.push({cls:'yellow',txt:'🟡 KuroPostprocess OFF — character rim light missing!'});
  if(info.skeletal_lod!==null&&info.skeletal_lod>0)iss.push({cls:'yellow',txt:'🟡 SkeletalMeshLODBias='+info.skeletal_lod+' — character quality reduced'});
  if(info.avg_rtt&&info.avg_rtt>300)iss.push({cls:'red',txt:'🔴 Critical ping — avg '+info.avg_rtt+'ms'});
  else if(info.avg_rtt&&info.avg_rtt>150)iss.push({cls:'yellow',txt:'🟡 High ping — avg '+info.avg_rtt+'ms'});
  else if(info.avg_rtt&&info.avg_rtt>0)iss.push({cls:'green',txt:'✅ Ping OK — avg '+info.avg_rtt+'ms'});
  if(info.reconnects>0)iss.push({cls:'red',txt:'🔴 '+info.reconnects+' disconnect event(s)'});
  if(info.gpu_oom>0)iss.push({cls:'red',txt:'🔴 '+info.gpu_oom+' GPU OOM — reduce shadow/resolution'});
  if(info.texture_errors>2)iss.push({cls:'yellow',txt:'🟡 '+info.texture_errors+' texture streaming errors'});
  if(info.drop_frames>10)iss.push({cls:'yellow',txt:'🟡 '+info.drop_frames+' frame drop events'});
  if(info.crash_hints.length>0)iss.push({cls:'red',txt:'🔴 Crash/Fatal indicator in log'});
  if(!iss.length)iss.push({cls:'green',txt:'✅ No issues detected'});
  info.issues=iss;

  // ══ SMART ANALYSIS ══
  info.gpu_tier=getGPUTier(info.gpu);
  const perf=estimatePerformance(info);
  info.estimated_fps=perf.estimatedFPS;
  info.perf_score=perf.score;

  const thermal=detectThermalThrottle(lines);
  info.thermal_throttle=thermal;
  if(thermal.isThrottling){
    iss.push({cls:'yellow',txt:'🟡 Thermal throttling detected — consider reducing quality'});
    info.issues=iss;
  }

  const net=scoreNetworkQuality(info);
  if(net){
    info.network_score=net.score;
    info.net_rating=net.rating;
    if(net.issues.length>0){
      iss.push({cls:net.score>40?'yellow':'red',txt:'🟡 Network: '+net.rating+' ('+net.issues.join(', ')+')'});
      info.issues=iss;
    }
  }

  const rec=getRecommendedPreset(info);
  info.recommended_preset=rec.preset;
  iss.push({cls:'cy',txt:'🤖 AI suggests '+rec.preset.toUpperCase()+' preset ('+rec.reason+')'});
  info.issues=iss;

  const missing=detectMissingSettings(info);
  info.missing_settings=missing.missing;
  info.setting_warnings=missing.warnings;
  missing.missing.forEach(m=>iss.push({cls:'yellow',txt:'⚠ Missing: '+m.k+'='+m.v+' — '+m.reason}));
  missing.warnings.forEach(w=>iss.push({cls:'cy',txt:'💡 Suggest: '+w.k+'='+w.v+' — '+w.reason}));
  info.issues=iss;

  return info;
}

function showDetected(info){
  document.getElementById('detected-section').style.display='block';

  function cell(k,v,cls,wide=false){
    if(v==null||v===''||v===false)return'';
    const vs=String(v);
    const short=vs.length>24?vs.slice(0,22)+'…':vs;
    return`<div class="det-cell${wide?' wide':''}"><span class="det-ck">${k}</span><span class="det-cv ${cls}" title="${vs}">${short}</span></div>`;
  }
  function normDisplay(v){
    return String(v||'').toLowerCase().replace(/[^a-z0-9]+/g,'').trim();
  }
  function sameDisplay(a,b){
    const na=normDisplay(a),nb=normDisplay(b);
    return na&&nb&&(na===nb||na.includes(nb)||nb.includes(na));
  }

  // ── STATUS CHIPS ──
  const chips=[];
  if(info.platform&&info.platform!=='Unknown')chips.push({t:info.platform,c:'gr'});
  if(info.game_version)chips.push({t:'v'+info.game_version,c:'cy'});
  if(info.gpu_tier)chips.push({t:info.gpu_tier.toUpperCase(),c:info.gpu_tier==='flagship'||info.gpu_tier==='pc_flagship'?'gr':info.gpu_tier==='high'||info.gpu_tier==='pc_high'?'cy':info.gpu_tier==='mid'||info.gpu_tier==='mid_high'?'gd':'rd'});
  if(info.vulkan_status==='available')chips.push({t:'Vulkan ✅',c:'gr'});
  else if(info.vulkan_status==='failed')chips.push({t:'Vulkan ✗',c:'gd'});
  if(info.fps_cap)chips.push({t:info.fps_cap+' FPS',c:'cy'});
  if(info.estimated_fps)chips.push({t:'Est '+info.estimated_fps+' FPS',c:info.perf_score>70?'gr':info.perf_score>40?'gd':'rd'});
  if(info.recommended_preset)chips.push({t:info.recommended_preset.toUpperCase(),c:'mg'});
  if(info.avg_rtt)chips.push({t:'Ping '+info.avg_rtt+'ms',c:info.avg_rtt>300?'rd':info.avg_rtt>150?'gd':'gr'});
  if(info.network_score)chips.push({t:'Net '+info.net_rating,c:info.network_score>70?'gr':info.network_score>40?'gd':'rd'});
  if(info.gpu_oom>0)chips.push({t:'GPU OOM ×'+info.gpu_oom,c:'rd'});
  if(info.reconnects>0)chips.push({t:'DC ×'+info.reconnects,c:'rd'});
  if(info.forbidden_cvars>0)chips.push({t:'⚠ '+info.forbidden_cvars+' Forbidden CVars',c:'rd'});
  if(info.drop_frames>10)chips.push({t:'Hitches ×'+info.drop_frames,c:'gd'});
  if(info.is_low_mem_mobile===true)chips.push({t:'Low RAM',c:'gd'});
  if(info.thermal_throttle&&info.thermal_throttle.isThrottling)chips.push({t:'🔥 HOT',c:'rd'});
  if(info.char_name)chips.push({t:'⚔ '+info.char_name,c:'mg'});
  document.getElementById('det-chips').innerHTML=chips.map(ch=>`<span class="det-stat-chip ${ch.c}">${ch.t}</span>`).join('');

  // ── HARDWARE ──
  let hwHtml='';
  const cpuDisplay=sameDisplay(info.cpu_name,info.device_model)?null:(info.soc_name||info.cpu_name);
  const osDisplay=(info.android_version&&sameDisplay(info.os,'Android '+info.android_version))?null:info.os;
  const driverDisplay=sameDisplay(info.driver_version,info.gl_version)?null:info.driver_version;
  hwHtml+=cell('Device',info.device_model,'wh',true);
  hwHtml+=cell('CPU',cpuDisplay,'wh',true);
  hwHtml+=cell('GPU',info.gpu,'cy',true);
  hwHtml+=cell('API',info.api||(info.vulkan_status==='available'?'Vulkan':info.vulkan_status==='failed'?'OpenGL ES (Vulkan failed)':null),info.vulkan_status==='available'?'gr':info.vulkan_status==='failed'?'gd':'cy');
  hwHtml+=cell('RAM',info.ram,info.ram&&parseInt(info.ram)<4?'gd':'gr');
  hwHtml+=cell('Resolution',info.resolution,'wh');
  if(info.cpu_cores)hwHtml+=cell('Cores',info.cpu_cores,'cy');
  if(info.android_version)hwHtml+=cell('Android',info.android_version,'sm');
  hwHtml+=cell('OS',osDisplay,'sm',true);
  if(driverDisplay)hwHtml+=cell('Driver',driverDisplay,'sm',true);
  if(info.gl_version)hwHtml+=cell('GL Ver',info.gl_version.slice(0,30),'sm',true);
  if(hwHtml){document.getElementById('det-hw').style.display='';document.getElementById('det-hw-rows').innerHTML=hwHtml;}
  else document.getElementById('det-hw').style.display='none';

  // ── ACTIVE IN-GAME SETTINGS ──
  let swHtml='';
  swHtml+=cell('FPS Cap',info.fps_cap?info.fps_cap+' FPS':null,'cy');
  swHtml+=cell('Render%',info.screen_pct!=null?info.screen_pct+'%':null,info.screen_pct&&info.screen_pct<80?'gd':'gr');
  swHtml+=cell('Shadow',info.shadow_q!=null?'Lv '+info.shadow_q:null,info.shadow_q===0?'gd':'gr');
  swHtml+=cell('KuroPost',info.postprocess_on!=null?(info.postprocess_on?'✓ ON':'✗ OFF — fix!'):null,info.postprocess_on?'gr':'rd');
  swHtml+=cell('SkeletalLOD',info.skeletal_lod!=null?info.skeletal_lod+(info.skeletal_lod>0?' (reduced)':' (best)'):null,info.skeletal_lod>0?'gd':'gr');
  if(info.texture_bias!=null)swHtml+=cell('TexBias',info.texture_bias+(info.texture_bias>500?' (blurry)':info.texture_bias>300?' (ok)':' (sharp)'),info.texture_bias>500?'rd':info.texture_bias>300?'gd':'gr');
  if(info.quality_mode)swHtml+=cell('Quality Mode',info.quality_mode,'cy',true);
  if(info.device_profile)swHtml+=cell('Device Profile',info.device_profile,'mg',true);
  swHtml+=cell('HZB',info.hzb_occlusion!=null?(info.hzb_occlusion?'✓ ON':'✗ OFF'):null,info.hzb_occlusion?'gr':'gd');
  swHtml+=cell('VSync',info.vsync!=null?(info.vsync?'ON':'OFF'):null,info.vsync?'gd':'gr');
  if(info.forbidden_cvars>0)swHtml+=cell('Forbidden CVars','⚠ '+info.forbidden_cvars+' removed','rd',true);
  if(info.map_name)swHtml+=cell('Last Map',info.map_name,'sm',true);
  if(swHtml){document.getElementById('det-sw').style.display='';document.getElementById('det-sw-rows').innerHTML=swHtml;}
  else document.getElementById('det-sw').style.display='none';

  // ── NETWORK ──
  let netHtml='';
  if(info.avg_rtt)netHtml+=cell('Avg Ping',info.avg_rtt+' ms',info.avg_rtt>300?'rd':info.avg_rtt>150?'gd':'gr');
  if(info.max_rtt)netHtml+=cell('Max Ping',info.max_rtt+' ms',info.max_rtt>400?'rd':'gd');
  if(info.min_rtt)netHtml+=cell('Min Ping',info.min_rtt+' ms','gr');
  if(info.rtt_values&&info.rtt_values.length)netHtml+=cell('Ping Samples',info.rtt_values.length+' readings','sm');
  if(info.reconnects>0)netHtml+=cell('Disconnects',info.reconnects+' event(s)','rd');
  if(info.packet_loss>2)netHtml+=cell('Pkt Loss',info.packet_loss+' events','rd');
  if(info.texture_errors>0)netHtml+=cell('Tex Errors',info.texture_errors+(info.texture_errors>5?' — increase pool':''),'gd');
  if(info.gpu_oom>0)netHtml+=cell('GPU OOM',info.gpu_oom+' events','rd');
  if(info.drop_frames>0)netHtml+=cell('Frame Drops',info.drop_frames,'gd');
  if(info.battery_temp)netHtml+=cell('Batt Temp',info.battery_temp+'°C',info.battery_temp>42?'rd':info.battery_temp>38?'gd':'gr');
  if(info.physical_mem_mb)netHtml+=cell('Phys RAM',info.physical_mem_mb+' MB',info.physical_mem_mb<4096?'gd':'gr');
  if(netHtml){document.getElementById('det-net').style.display='';document.getElementById('det-net-rows').innerHTML=netHtml;}
  else document.getElementById('det-net').style.display='none';

  // RTT alert
  const rttBox=document.getElementById('det-rtt-box');
  if(info.avg_rtt&&info.avg_rtt>150){
    rttBox.style.display='block';
    document.getElementById('det-rtt-val').textContent=`Avg ${info.avg_rtt}ms · Max ${info.max_rtt}ms · Min ${info.min_rtt||'?'}ms · ${info.rtt_values.length} samples · ${info.reconnects} DC(s)`;
  } else rttBox.style.display='none';

  // ── DIAGNOSTICS ──
  document.getElementById('det-iss-list').innerHTML=info.issues.map(iss=>{
    const c=iss.cls==='red'?'rd':iss.cls==='yellow'?'gd':'gr';
    return`<div class="det-diag-item ${c}">${iss.txt}</div>`;
  }).join('');

  // ── Smart suggestion badge ──
  const det=document.getElementById('det-badge');
  const totalFound=[info.device_model,info.gpu,info.ram,info.cpu_name,info.resolution,info.game_version,info.device_profile].filter(Boolean).length;
  det.textContent=totalFound>=5?'✓ FULL SCAN':totalFound>=3?'~ PARTIAL':'⚠ MINIMAL';
  det.style.color=totalFound>=5?'#00e890':totalFound>=3?'#f0c040':'#ff6070';

  // Auto-apply: FPS cap + Vulkan toggle + character slide
  if(info.fps_cap){const sel=document.getElementById('fps-sel');if(sel){const opt=[...sel.options].find(o=>parseInt(o.value)===info.fps_cap);if(opt)sel.value=info.fps_cap;}}
  if(info.vulkan_status==='available'){const vt=document.getElementById('opt-vulkan');if(vt)vt.checked=true;}
  if(info.char_name){const ci=CHARS.findIndex(c=>c.name.toLowerCase()===info.char_name.toLowerCase());if(ci>=0)_goTo(ci);}
}

// ══ FILE DROP ══
const dz=document.getElementById('drop-zone');
document.getElementById('file-input').addEventListener('change',function(){if(this.files[0])readLog(this.files[0]);});
dz.addEventListener('dragover',e=>{e.preventDefault();dz.classList.add('drag-over');});
dz.addEventListener('dragleave',()=>dz.classList.remove('drag-over'));
dz.addEventListener('drop',e=>{e.preventDefault();dz.classList.remove('drag-over');if(e.dataTransfer.files[0])readLog(e.dataTransfer.files[0]);});

function readLog(file){
  const r=new FileReader();
  r.onload=e=>{
    hasUploadedLog=true;
    logInfo=parseLog(e.target.result);

    // ── P42Brain: deep parse + Firebase upload + AI recommendation ──
    if(window.P42Brain){
      P42Brain.processText(e.target.result, file.name)
        .then(result=>{
          if(!result||!result.recommendation) return;
          const{parsed:p,recommendation:rec}=result;
          if(rec.preset){
            const el=document.querySelector(`.preset-card[data-p="${rec.preset}"]`);
            if(el&&!document.querySelector('.preset-card.active')) selectPreset(el);
          }
          _showBrainRec(rec, p);
        }).catch(e=>console.error('[readLog] P42Brain error:',e));
    }

    const kb=(file.size/1024).toFixed(1);
    const bar=document.getElementById('file-info-bar');
    bar.style.display='block';
    const vals=Object.keys(logInfo).filter(k=>logInfo[k]!=null&&logInfo[k]!==0&&!Array.isArray(logInfo[k])&&k!=='issues').length;
    bar.textContent=`✓ ${file.name} (${kb} KB) — ${vals} values`;
    const badge=document.getElementById('stat-badge');
    badge.textContent='● LOG OK';badge.className='badge badge-ok';
    showDetected(logInfo);

    // ── BRAIN: Local smart recommendations ──
    brainApplied=false;
    if(brainEnabled&&logInfo.gpu){
      renderBrainRecommendations();
      showToast('🧠 Smart brain applied recommendation');
    }

    // ── AUTO-DETECT PLATFORM FROM LOG ──
    const detectedPlatform=logInfo.platform?.toLowerCase();
    if(detectedPlatform==='android'||detectedPlatform==='pc'){
      if(platform!==detectedPlatform){
        setPlatform(detectedPlatform);
        showToast('📱 Auto-detected '+detectedPlatform.toUpperCase()+' from log');
      }
    }
  };
  r.readAsText(file);
}

function esc(s){return typeof s==='string'?s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'):'';}

// ══ REFERENCE FILTER ══
function searchRef(){
  const input=document.getElementById('ref-search');
  if(!input)return;
  const term=input.value.toLowerCase();
  document.querySelectorAll('.rf-btn').forEach(b=>b.classList.remove('active'));
  const allBtn=document.getElementById('rf-all');
  if(allBtn)allBtn.classList.add('active');

  document.querySelectorAll('#ref-table tr[data-cat]').forEach(row=>{
    const text=row.innerText.toLowerCase();
    row.style.display=text.includes(term)?'':'none';
  });
}

function filterRef(cat){
  const input=document.getElementById('ref-search');
  if(input)input.value='';
  document.querySelectorAll('.rf-btn').forEach(b=>b.classList.remove('active'));
  const btn=document.getElementById('rf-'+cat);
  if(btn)btn.classList.add('active');
  document.querySelectorAll('#ref-table tr[data-cat]').forEach(row=>{
    row.style.display=(cat==='all'||row.dataset.cat===cat)?'':'none';
  });
}

// ══════════════════════════════════════════════════
// REPORT ISSUE MODAL
// ══════════════════════════════════════════════════
let _selectedReportType=null;
function selectReportType(btn,type){document.querySelectorAll('.report-type-btn').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');_selectedReportType=type;}
function openReportIssue(){document.getElementById('report-modal').style.display='flex';_selectedReportType=null;document.querySelectorAll('.report-type-btn').forEach(b=>b.classList.remove('selected'));document.getElementById('report-fps').value='';document.getElementById('report-notes').value='';}
function closeReportModal(){document.getElementById('report-modal').style.display='none';_selectedReportType=null;}
function submitReport(){
  const type=_selectedReportType||'unknown';
  const fps=parseInt(document.getElementById('report-fps').value)||null;
  const notes=document.getElementById('report-notes').value.trim()||'';
  const data={feedback_type:type,fps_actual:fps,notes,preset:activePreset,gpu:logInfo.gpu,gpu_family:logInfo.gpu_family,platform};
  // Submit to Firebase via P42Brain
  if(window.P42Brain&&typeof window.P42Brain.submitFeedback==='function'){window.P42Brain.submitFeedback(data);}
  closeReportModal();
  showToast('📤 Report submitted — helps improve AI recommendations');
}

// ══════════════════════════════════════════════════
// P42Brain Result Handler — Enhanced UI
// ══════════════════════════════════════════════════
window.onP42BrainResult=function(parsed,rec){
  if(!rec)return;
  // Update stat badge with AI info
  const badge=document.getElementById('stat-badge');
  if(badge&&rec.preset){badge.textContent='● '+rec.preset.toUpperCase();badge.className='badge badge-ok';}
  // Update detected section with forbidden CVars
  if(rec.forbidden_cvars&&rec.forbidden_cvars.length>0){
    const diagList=document.getElementById('det-iss-list');
    if(diagList){
      const fHtml=`<div class="det-diag-item rd" style="margin-top:6px;border-top:1px solid rgba(255,64,96,.1);padding-top:6px">🚫 ${rec.forbidden_cvars.length} forbidden CVar(s) removed — config is now safe</div>`;
      diagList.innerHTML+=fHtml;
    }
  }
  // Update stability in detected info
  if(rec.stability&&rec.stability.issues&&rec.stability.issues.length>0){
    const diagList=document.getElementById('det-iss-list');
    if(diagList){
      rec.stability.issues.forEach(issue=>{diagList.innerHTML+=`<div class="det-diag-item ${rec.stability.score>=60?'gd':'rd'}">${issue}</div>`;});
    }
  }
};

// Track when user picks a preset (vs recommended) for feedback
let _recommendedPreset=null;
function selectPreset(el){
  activePreset=el.dataset.p;
  document.querySelectorAll('.preset-card').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  // If user picked different from recommended, log feedback
  if(_recommendedPreset&&_recommendedPreset!==activePreset&&window.P42Brain&&typeof window.P42Brain.submitFeedback==='function'){
    const feedbackData={feedback_type:'preset_selection',recommended_preset:_recommendedPreset,selected_preset:activePreset,gpu:logInfo.gpu,gpu_family:logInfo.gpu_family,fps_actual:logInfo.fps_actual,fps_cap:logInfo.fps_cap,crashes:(logInfo.gpu_oom||0)>0,platform};
    window.P42Brain.submitFeedback(feedbackData);
    console.log('[Feedback] User picked',activePreset,'instead of',_recommendedPreset);
  }
}

// ══ INIT ══
buildShowcase();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(err => console.log('SW reg failed: ', err));
  });
}
