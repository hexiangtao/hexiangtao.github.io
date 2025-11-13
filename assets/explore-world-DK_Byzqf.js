import{u as Ue,r as i,j as t,V as b}from"./react-vendor-Cax8SarP.js";import{A as Nt,S as Ne,Z as kt,a as ie,T as ce,C as St,X as ke,B as Oe,H as Mt,M as $t,b as Se,c as Ct,L as zt}from"./ui-vendor-ATY9YeZ9.js";const Ge="explore_world_data",Fe={score:0,collectedStars:[],achievements:[],totalPlayTime:0,lastVisitTime:Date.now(),visitCount:0,collectedItems:[],unlockedAreas:["starfield"],dataStreamItems:[],mysteryItems:[],rareStarsCollected:[],maxCombo:0,dailyTasks:[],lastDailyReset:0,collectionBook:{},powerUps:[],playerLevel:1,experience:0,skillPoints:0,unlockedSkills:[],ownedItems:[],totalScore:0,perfectHits:0,totalMisses:0},N=()=>{try{const d=localStorage.getItem(Ge);if(d){const c=JSON.parse(d);return{...Fe,...c}}}catch(d){console.error("Failed to load explore world data:",d)}return{...Fe}},S=d=>{try{localStorage.setItem(Ge,JSON.stringify(d))}catch(c){console.error("Failed to save explore world data:",c)}},F=d=>{const c=N();c.score=d,c.lastVisitTime=Date.now(),S(c)},Tt=d=>{const c=N();c.collectedStars.includes(d)||(c.collectedStars.push(d),c.lastVisitTime=Date.now(),S(c))},We=d=>{const c=N();c.achievements.includes(d)||(c.achievements.push(d),c.lastVisitTime=Date.now(),S(c))},Et=()=>{const d=N();d.visitCount+=1,d.lastVisitTime=Date.now(),S(d)},_e=d=>{const c=N();c.unlockedAreas.includes(d)||(c.unlockedAreas.push(d),c.lastVisitTime=Date.now(),S(c))},I=d=>N().unlockedAreas.includes(d),Dt=d=>{const c=N();c.dataStreamItems.includes(d)||(c.dataStreamItems.push(d),c.lastVisitTime=Date.now(),S(c))},At=d=>{const c=N();c.mysteryItems.includes(d)||(c.mysteryItems.push(d),c.lastVisitTime=Date.now(),S(c))},It=d=>{const c=N();c.rareStarsCollected.includes(d)||(c.rareStarsCollected.push(d),c.lastVisitTime=Date.now(),S(c))},Yt=d=>{const c=N();d>c.maxCombo&&(c.maxCombo=d,c.lastVisitTime=Date.now(),S(c))},Pt=(d,c)=>{const x=N();x.collectionBook[d]=(x.collectionBook[d]||0)+c,x.lastVisitTime=Date.now(),S(x)},Me=()=>{const d=new Date;d.setHours(0,0,0,0);const c=d.getTime(),x=N();if(x.lastDailyReset>=c&&x.dailyTasks.length>0)return x.dailyTasks;const y=[{id:"collect-10-stars",description:"收集10颗星星",target:10,progress:0,reward:20,completed:!1},{id:"collect-rare-star",description:"收集1颗稀有星星",target:1,progress:0,reward:30,completed:!1},{id:"play-5-minutes",description:"探索5分钟",target:300,progress:0,reward:25,completed:!1}];return x.dailyTasks=y,x.lastDailyReset=c,S(x),y},$e=(d,c)=>{const x=N(),y=x.dailyTasks.find(W=>W.id===d);y&&!y.completed&&(y.progress=Math.min(c,y.target),y.progress>=y.target&&(y.completed=!0,x.score+=y.reward),x.lastVisitTime=Date.now(),S(x))},Lt=()=>{const d=Ue(),[c,x]=i.useState(""),[y,W]=i.useState(0),[P,E]=i.useState(!0),[k,te]=i.useState(!1),[ae,z]=i.useState(!1),[de,L]=i.useState(0),[w,se]=i.useState(0),[K,_]=i.useState([]),[R,fe]=i.useState(0),[h,me]=i.useState([]),re=i.useRef(null),Z=["█","▓","▒","░","▄","▀","■","□","▌","▐","▲","▼"],D=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],X="[0x7F8A] 信号异常检测 协议栈未识别 架构映射失败 向量空间溢出 坐标系统未定义 进程标识符无效 观察者模式激活 量子纠缠检测中 维度边界突破 准备建立跨维度连接 ",[xe]=i.useState(()=>Array.from({length:30},()=>({x:Math.random()*100,y:Math.random()*100,size:Math.random()*2+.5,delay:Math.random()*2,duration:2+Math.random()*2})));i.useEffect(()=>{if(y<X.length){const g=80+Math.random()*60;if(Math.random()<.1&&y>5&&(se(2),setTimeout(()=>se(0),200)),Math.random()<.08&&y>10){z(!0),setTimeout(()=>z(!1),150);const Y=Array.from({length:4},()=>D[Math.floor(Math.random()*D.length)]).join("");_(q=>[...q.slice(-2),Y]),setTimeout(()=>_(q=>q.slice(1)),300)}const A=setTimeout(()=>{x(Y=>Y+X[y]),W(Y=>Y+1)},g);return()=>clearTimeout(A)}else te(!0)},[y,X,d,D]),i.useEffect(()=>{const m=setInterval(()=>{E(g=>!g)},530);return()=>clearInterval(m)},[]),i.useEffect(()=>{const m=setInterval(()=>{L(g=>Math.random()<.3?Math.random()*.03:0)},200);return()=>clearInterval(m)},[]),i.useEffect(()=>{const m=setInterval(()=>{Math.random()<.3&&me(g=>{const A={id:Date.now(),x:Math.random()*100,speed:20+Math.random()*30,opacity:.1+Math.random()*.1};return[...g.slice(-4),A]})},800);return()=>clearInterval(m)},[]),i.useEffect(()=>{if(k){const m=setInterval(()=>{fe(g=>{if(g>=100)return 100;const A=g+Math.random()*2+.5;return A>=100?(setTimeout(()=>{d("/explore-world",{replace:!0})},500),100):A})},300);return()=>clearInterval(m)}},[k,d]);const Q=()=>{d("/explore-world",{replace:!0})};return i.useEffect(()=>{const m=g=>{g.key==="Escape"||g.key==="Esc"?Q():g.key==="Enter"&&!k&&W(X.length)};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[k,X.length,d]),t.jsxs("div",{className:"fixed inset-0 w-screen h-screen bg-black flex items-center justify-center px-4 z-50",children:[t.jsxs("div",{className:"absolute inset-0 overflow-hidden bg-black",children:[xe.map((m,g)=>t.jsx("div",{className:"absolute rounded-full bg-white",style:{left:`${m.x}%`,top:`${m.y}%`,width:`${m.size}px`,height:`${m.size}px`,opacity:.15,animation:`twinkle ${m.duration}s ease-in-out infinite`,animationDelay:`${m.delay}s`}},g)),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.005] to-transparent animate-scan"}),t.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,opacity:de||.02,mixBlendMode:"screen"}}),K.map((m,g)=>t.jsx("div",{className:"absolute text-white/10 font-mono text-xs",style:{left:`${20+Math.random()*60}%`,top:`${20+Math.random()*60}%`,animation:"fade-out 1s ease-out forwards",animationDelay:"0s"},children:m},g)),h.map(m=>t.jsx("div",{className:"absolute text-green-400/20 font-mono text-xs",style:{left:`${m.x}%`,top:"-20px",opacity:m.opacity,animation:`data-stream ${m.speed/10}s linear forwards`},children:Array.from({length:8},()=>D[Math.floor(Math.random()*D.length)]).join(" ")},m.id))]}),t.jsx("div",{className:"relative z-10 max-w-6xl w-full px-4",children:t.jsxs("div",{className:"relative bg-black/90 backdrop-blur-sm p-8 md:p-12",children:[t.jsx("div",{className:"min-h-[350px] flex items-start justify-start",children:t.jsx("div",{ref:re,className:`text-white/70 text-base md:text-lg leading-relaxed font-mono text-left w-full transition-all duration-200 ${ae?"glitch-effect":""}`,style:{fontFamily:'"Orbitron", "Rajdhani", "Exo 2", "Audiowide", "Share Tech Mono", "Courier New", monospace',textShadow:"0 0 5px rgba(0, 255, 0, 0.2), 0 0 10px rgba(255, 255, 255, 0.1), 0 0 15px rgba(0, 0, 0, 0.8), 1px 1px 2px rgba(0, 0, 0, 0.9)",letterSpacing:"2px",fontWeight:500,filter:`contrast(1.4) brightness(0.85) blur(${w}px)`,textTransform:"uppercase",opacity:.85,fontStretch:"condensed"},children:t.jsxs("div",{className:"whitespace-normal break-words relative",children:[c.split("").map((m,g)=>{const A=(g*7+m.charCodeAt(0))%100,Y=A<5,q=A>=95;return t.jsx("span",{className:Y?"opacity-25":q?"opacity-100 text-green-400/40":"",style:{textShadow:q?"0 0 6px rgba(0, 255, 0, 0.4)":"none"},children:m},g)}),ae&&t.jsx("span",{className:"text-red-400/40 animate-pulse inline-block ml-1",children:Z[Math.floor(Math.random()*Z.length)]}),K.length>0&&t.jsx("span",{className:"text-green-400/20 font-mono text-xs ml-2",children:K[K.length-1]}),k&&t.jsxs("span",{className:"inline-block",children:[t.jsx("span",{className:"inline-block animate-connect-char animate-pulse-connect text-green-400/90",style:{"--pulse-delay":"0s"},children:"连"}),t.jsx("span",{className:"inline-block animate-connect-char animate-pulse-connect text-green-400/90",style:{"--pulse-delay":"0.3s"},children:"接"}),t.jsx("span",{className:"inline-block animate-connect-char animate-pulse-connect text-green-400/90",style:{"--pulse-delay":"0.6s"},children:"中"}),t.jsx("span",{className:"inline-block animate-bounce-dot text-green-400/80 ml-1",style:{animationDelay:"0.9s"},children:"."}),t.jsx("span",{className:"inline-block animate-bounce-dot text-green-400/80",style:{animationDelay:"1.1s"},children:"."}),t.jsx("span",{className:"inline-block animate-bounce-dot text-green-400/80",style:{animationDelay:"1.3s"},children:"."})]}),!k&&t.jsx("span",{className:P?"opacity-60 text-white/50 animate-pulse":"opacity-0",children:"█"})]})})}),t.jsxs("div",{className:"mt-8 pt-6",children:[k&&t.jsxs("div",{className:"mb-6",children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("span",{className:"text-white/50 text-xs font-mono",children:"连接进度"}),t.jsxs("span",{className:"text-green-400/70 text-xs font-mono",children:[Math.min(100,Math.round(R)),"%"]})]}),t.jsx("div",{className:"h-1 bg-black/50 rounded-full overflow-hidden border border-white/10",children:t.jsx("div",{className:"h-full bg-gradient-to-r from-green-400/50 to-green-500/70 transition-all duration-300",style:{width:`${Math.min(100,R)}%`}})})]}),!k&&t.jsx("div",{className:"flex justify-center",children:t.jsxs("button",{onClick:Q,className:"text-white/40 hover:text-white/60 text-xs transition-colors flex items-center gap-2 group font-mono",children:[t.jsx("span",{children:"[跳过]"}),t.jsx("span",{className:"text-white/30 text-[10px]",children:"(ESC)"}),t.jsx(Nt,{size:12,className:"group-hover:translate-x-1 transition-transform"})]})}),!k&&t.jsx("div",{className:"flex justify-center mt-4",children:t.jsx("span",{className:"text-white/20 text-[10px] font-mono",children:"按 Enter 加速 | 按 ESC 跳过"})})]})]})}),t.jsx("style",{children:`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fade-out {
          from {
            opacity: 0.1;
          }
          to {
            opacity: 0;
          }
        }
        @keyframes bounce-dot {
          0%, 100% {
            opacity: 0.4;
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 1;
            transform: translateY(-10px) scale(1.3);
          }
        }
        @keyframes connect-char {
          0% {
            opacity: 0;
            transform: translateY(5px) scale(0.8);
            textShadow: 0 0 0 rgba(0, 255, 0, 0);
          }
          50% {
            opacity: 1;
            transform: translateY(0) scale(1.1);
            textShadow: 0 0 10px rgba(0, 255, 0, 0.6);
          }
          100% {
            opacity: 0.9;
            transform: translateY(0) scale(1);
            textShadow: 0 0 8px rgba(0, 255, 0, 0.4);
          }
        }
        @keyframes pulse-connect {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1);
            textShadow: 0 0 8px rgba(0, 255, 0, 0.4);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
            textShadow: 0 0 15px rgba(0, 255, 0, 0.8), 0 0 25px rgba(0, 255, 0, 0.4);
          }
        }
        .animate-connect-char {
          animation: connect-char 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-pulse-connect {
          animation: pulse-connect 1.5s ease-in-out infinite;
          animation-delay: calc(0.6s + var(--pulse-delay, 0s));
        }
        @keyframes pulse-dot {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
        .animate-bounce-dot {
          animation: bounce-dot 1.2s ease-in-out infinite;
          display: inline-block;
          margin-left: 2px;
        }
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
        @keyframes data-stream {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          10% {
            opacity: 0.2;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        @keyframes glitch {
          0% {
            transform: translate(0);
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
          }
          20% {
            transform: translate(-2px, 2px);
            text-shadow: -2px 0 0 rgba(255, 0, 0, 0.5), 2px 0 0 rgba(0, 255, 255, 0.5);
          }
          40% {
            transform: translate(2px, -2px);
            text-shadow: 2px 0 0 rgba(255, 0, 0, 0.5), -2px 0 0 rgba(0, 255, 255, 0.5);
          }
          60% {
            transform: translate(-2px, -2px);
            text-shadow: -2px 0 0 rgba(255, 0, 0, 0.5), 2px 0 0 rgba(0, 255, 255, 0.5);
          }
          80% {
            transform: translate(2px, 2px);
            text-shadow: 2px 0 0 rgba(255, 0, 0, 0.5), -2px 0 0 rgba(0, 255, 255, 0.5);
          }
          100% {
            transform: translate(0);
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
          }
        }
        @keyframes text-glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.05);
          }
          50% {
            text-shadow: 0 0 15px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in;
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        .glitch-effect {
          animation: glitch 0.1s;
        }
      `})]})},Ft=Object.freeze(Object.defineProperty({__proto__:null,default:Lt},Symbol.toStringTag,{value:"Module"})),Rt=()=>{const d=Ue(),[c,x]=i.useState([]),[y,W]=i.useState([]),[P,E]=i.useState(0),[k,te]=i.useState([]),[ae,z]=i.useState(!1),[de,L]=i.useState(""),[w,se]=i.useState(null),[K,_]=i.useState(!1),[R,fe]=i.useState(0),[h,me]=i.useState("starfield"),[re,Z]=i.useState(!0),[D,X]=i.useState([]),[xe,Q]=i.useState([]),[m,g]=i.useState([]),[A,Y]=i.useState([]);i.useState(!1);const[q,Ce]=i.useState([]),[M,oe]=i.useState(0),[ne,Je]=i.useState(null),[Ke,ze]=i.useState(!1),[Ze,pe]=i.useState([]),[Qe,Te]=i.useState(!1),[Ee,De]=i.useState(null),[et,Xt]=i.useState([]),[C,he]=i.useState(null),[tt,ue]=i.useState(!1);i.useState(new Set),i.useState(new Set);const[u,Ae]=i.useState(null),[at,Ie]=i.useState(0),[Ye,st]=i.useState(0),[rt,Pe]=i.useState(!1),Le=["star","comet","meteor","planet","nebula","asteroid"],[ot,Re]=i.useState([]),[j,we]=i.useState({type:"magnet",ready:!0,cooldown:0}),[U,le]=i.useState(null),[Xe,ee]=i.useState([]),[nt,lt]=i.useState([]),[B,V]=i.useState(0);i.useState(null);const[qe,it]=i.useState(1),[ct,Be]=i.useState(0),[qt,dt]=i.useState(0);i.useState(!1),i.useState([]);const[ft,Bt]=i.useState([]),[Vt,Ve]=i.useState([]);i.useState([]),i.useState([]),i.useState(!1),i.useEffect(()=>{const e=N();se(e),E(e.score),W(e.collectedStars),te(e.achievements),Q(e.dataStreamItems||[]),Y(e.mysteryItems||[]),Et(),He(e),(()=>{const s=[5,15,25,35,45,55,65,75],r=["circle","star","diamond","cross"],o=Array.from({length:100},(n,l)=>{const f=s.includes(l),T=f?1.2:.8,O=Math.random()*.6,G=Math.random()<.4,je=Math.random()<.25,p=l<80?"star":Le[Math.floor(Math.random()*Le.length)];let v=1,$=.1;return p==="comet"?(v=.6,$=.15):p==="meteor"?(v=.5,$=.2):p==="planet"?(v=1.2,$=.05):p==="asteroid"&&(v=.7,$=.12),{x:Math.random()*100,y:Math.random()*100,size:T+O,delay:Math.random()*4,duration:f?1+Math.random()*2:2+Math.random()*3,id:l,collected:e.collectedStars.includes(l),rare:f,glowColor:f?l%2===0?"#60a5fa":"#a78bfa":void 0,shape:r[Math.floor(Math.random()*r.length)],brightness:.7+Math.random()*.3,vx:G?(Math.random()-.5)*$:0,vy:G?(Math.random()-.5)*$:0,disappearTime:je?Date.now()+8e3+Math.random()*15e3:void 0,type:p,clickable:!0,clickArea:v,missCount:0}});x(o)})(),e.score>10&&Math.random()<.3&&setTimeout(()=>{ue(!0)},5e3),I("datastream")&&be(e),I("mystery")&&ge()},[]),i.useEffect(()=>{if(h!=="starfield")return;const e=3+Math.floor(Math.random()*2);for(let s=0;s<e;s++)setTimeout(()=>{const r=Math.random();let o;r<.2?o="blackhole":r<.35?o="wormhole":r<.4?o="treasure":r<.5?o="supernova":r<.58?o="pulsar":r<.65?o="quasar":r<.72?o="darkmatter":r<.78?o="gravwave":r<.84?o="asteroidbelt":r<.9?o="cometcluster":r<.95?o="starcluster":r<.98?o="whitedwarf":o="neutronstar",ee(n=>[...n,{id:`special-${Date.now()}-${Math.random()}-${s}`,x:Math.random()*100,y:Math.random()*100,type:o,life:12e3}])},s*1500);const a=setInterval(()=>{if(Math.random()<.5){const r=Math.random()<.3?2:1;for(let o=0;o<r;o++){const n=Math.random();let l;n<.15?l="blackhole":n<.25?l="wormhole":n<.3?l="treasure":n<.4?l="supernova":n<.48?l="pulsar":n<.55?l="quasar":n<.62?l="darkmatter":n<.68?l="gravwave":n<.74?l="asteroidbelt":n<.8?l="cometcluster":n<.86?l="starcluster":n<.92?l="whitedwarf":l="neutronstar",ee(f=>f.length>=12?f:[...f,{id:`special-${Date.now()}-${Math.random()}-${o}`,x:Math.random()*100,y:Math.random()*100,type:l,life:12e3}])}}},6e3);return()=>clearInterval(a)},[h]),i.useEffect(()=>{w&&(h==="datastream"&&I("datastream")&&D.length===0&&be(w),h==="mystery"&&I("mystery")&&m.length===0&&ge())},[h,w,D.length,m.length]),i.useEffect(()=>{const e=Me();pe(e)},[]);const He=e=>{e.score>=20&&!I("datastream")&&(_e("datastream"),L("🔓 解锁新区域：数据流区！"),z(!0),setTimeout(()=>z(!1),3e3)),e.score>=50&&!I("mystery")&&(_e("mystery"),L("🔓 解锁新区域：神秘区！"),z(!0),setTimeout(()=>z(!1),3e3))},be=e=>{const a=Array.from({length:30},(s,r)=>{var l;const o=r%10===0,n=r===15;return{id:r,x:Math.random()*100,y:-10-Math.random()*20,speed:.5+Math.random()*1.5,text:n?"LEGENDARY":o?"RARE":mt(),collected:((l=e.dataStreamItems)==null?void 0:l.includes(r))||!1,type:n?"legendary":o?"rare":"normal"}});X(a)},ge=()=>{g([{id:"puzzle-1",x:20,y:30,type:"puzzle",hint:"寻找隐藏的线索"},{id:"easter-1",x:50,y:50,type:"easter-egg",hint:"点击神秘符号"},{id:"secret-1",x:80,y:70,type:"secret",hint:"探索未知"}])},mt=()=>Array.from({length:8},()=>Math.floor(Math.random()*16).toString(16)).join("").toUpperCase();i.useEffect(()=>{const e=setInterval(()=>{fe(a=>{const s=a+1;if(s%10===0&&w){const r=N();r.totalPlayTime+=10,S(r),$e("play-5-minutes",r.totalPlayTime+s);const o=Me();pe(o)}return s})},1e3);return()=>{if(clearInterval(e),w&&R>0){const a=N();a.totalPlayTime+=R,S(a)}}},[w,R]),i.useEffect(()=>{if(y.length>0||R>0){const e=Me();pe(e)}},[y.length,R]),i.useEffect(()=>{w&&(h==="datastream"&&I("datastream")&&D.length===0&&be(w),h==="mystery"&&I("mystery")&&m.length===0&&ge())},[h,w]),i.useEffect(()=>{if(h!=="datastream"||!I("datastream"))return;const e=setInterval(()=>{X(a=>a.map(r=>{if(r.collected)return r;let o=r.y+r.speed;return o>110?{...r,y:-10-Math.random()*20,x:Math.random()*100}:{...r,y:o}}))},50);return()=>clearInterval(e)},[h,D.length]);const ye=e=>{const a=[];e>=5&&!k.includes("star-collector")&&(a.push("star-collector"),L("⭐ 星星收集者 - 收集了5颗星星！"),z(!0)),e>=20&&!k.includes("star-master")&&(a.push("star-master"),L("🌟 星星大师 - 收集了20颗星星！"),z(!0)),e>=50&&!k.includes("star-legend")&&(a.push("star-legend"),L("✨ 星星传奇 - 收集了50颗星星！"),z(!0)),e>=80&&!k.includes("star-complete")&&(a.push("star-complete"),L("💫 星空征服者 - 收集了所有星星！"),z(!0)),a.length>0&&(te(s=>[...s,...a]),a.forEach(s=>We(s)),setTimeout(()=>z(!1),3e3)),w&&He({...w,score:e})},ve=(e,a,s)=>{const r=`${Date.now()}-${Math.random()}`;Ce(o=>[...o,{id:r,x:e,y:a,type:s}]),setTimeout(()=>{Ce(o=>o.filter(n=>n.id!==r))},1e3)},H=(e,a,s,r=20)=>{const o=[];for(let n=0;n<r;n++){const l=Math.PI*2*n/r,f=2+Math.random()*3;o.push({id:`particle-${Date.now()}-${n}`,x:e,y:a,vx:Math.cos(l)*f,vy:Math.sin(l)*f,color:s,life:60})}Re(n=>[...n,...o])};i.useEffect(()=>{const e=setInterval(()=>{Re(a=>a.map(s=>({...s,x:s.x+s.vx,y:s.y+s.vy,vy:s.vy+.1,life:s.life-1})).filter(s=>s.life>0&&s.x>-100&&s.x<window.innerWidth+100&&s.y>-100&&s.y<window.innerHeight+100))},16);return()=>clearInterval(e)},[]),i.useEffect(()=>{const e=setInterval(()=>{ee(a=>a.map(s=>({...s,life:s.life-100})).filter(s=>s.life>0))},100);return()=>clearInterval(e)},[]),i.useEffect(()=>{const e=setInterval(()=>{ee(a=>a.map(s=>s.life<3e3?{...s,life:s.life}:s))},500);return()=>clearInterval(e)},[]),i.useEffect(()=>{if(B>0){const e=setTimeout(()=>V(0),200);return()=>clearTimeout(e)}},[B]);const xt=e=>{const a=[...nt,e].slice(-5);if(lt(a),a.length>=3){if(a[a.length-1]===a[a.length-2]&&a[a.length-2]===a[a.length-3]){const s=a[a.length-1];le({active:!0,type:`triple-${s}`}),setTimeout(()=>le(null),2e3);const r=10;return E(o=>{const n=o+r;return F(n),n}),b.success(`🎯 三连组合！${s} +${r}分！`,{duration:2e3}),V(5),r}if(a.length===5&&new Set(a).size===5){le({active:!0,type:"rainbow"}),setTimeout(()=>le(null),2e3);const r=20;return E(o=>{const n=o+r;return F(n),n}),b.success(`🌈 彩虹组合！+${r}分！`,{duration:2e3}),V(10),H(window.innerWidth/2,window.innerHeight/2,"#ff00ff",50),r}}return 0},pt=()=>{if(!(!j.ready||j.cooldown>0)){if(j.type==="magnet")b.success("🧲 磁铁激活！",{duration:1500}),x(e=>e.map(a=>a.collected?a:{...a,vx:(a.x-50)*-.02,vy:(a.y-50)*-.02}));else if(j.type==="explosion"){b.success("💥 爆炸！",{duration:1500});const e=50,a=50,s=20;x(r=>r.map(o=>o.collected?o:Math.sqrt(Math.pow(o.x-e,2)+Math.pow(o.y-a,2))<s?(H(o.x/100*window.innerWidth,o.y/100*window.innerHeight,o.rare?"#60a5fa":"#ffffff",15),{...o,collected:!0}):o)),H(window.innerWidth/2,window.innerHeight/2,"#ff0000",100),V(15)}else j.type==="freeze"?(b.success("❄️ 时间冻结！",{duration:1500}),x(e=>e.map(a=>({...a,vx:0,vy:0})))):j.type==="multiply"&&b.success("✨ 分数倍增！",{duration:1500});we({...j,ready:!1,cooldown:3e4})}};i.useEffect(()=>{if(j.cooldown>0){const e=setInterval(()=>{we(a=>({...a,cooldown:Math.max(0,a.cooldown-1e3),ready:a.cooldown<=1e3}))},1e3);return()=>clearInterval(e)}},[j.cooldown]);const ht=(e,a)=>{const s=Xe.find(r=>r.id===e);if(s){if(s.type==="blackhole"){const r=c.filter(n=>!n.collected&&Math.sqrt(Math.pow(n.x-s.x,2)+Math.pow(n.y-s.y,2))<15).length;x(n=>n.map(l=>l.collected?l:Math.sqrt(Math.pow(l.x-s.x,2)+Math.pow(l.y-s.y,2))<15?(H(l.x/100*window.innerWidth,l.y/100*window.innerHeight,"#000000",10),{...l,collected:!0}):l));const o=r*3;E(n=>{const l=n+o;return F(l),l}),b.success(`🕳️ 黑洞吸收了${r}个元素！+${o}分！`,{duration:3e3}),V(10),H(a.clientX,a.clientY,"#000000",50)}else if(s.type==="wormhole")b.success("🌀 虫洞传送！",{duration:2e3}),x(r=>r.map(o=>({...o,x:Math.random()*100,y:Math.random()*100}))),H(a.clientX,a.clientY,"#9d4edd",40);else if(s.type==="treasure"){const r=50+Math.floor(Math.random()*50);E(l=>{const f=l+r;return F(f),f});const o=["技能冷却重置","连击+10","所有元素停止移动5秒"],n=o[Math.floor(Math.random()*o.length)];n==="技能冷却重置"?we({...j,ready:!0,cooldown:0}):n==="连击+10"?oe(l=>l+10):n==="所有元素停止移动5秒"&&(x(l=>l.map(f=>({...f,vx:0,vy:0}))),setTimeout(()=>{x(l=>l.map(f=>({...f,vx:f.vx||(Math.random()-.5)*.1,vy:f.vy||(Math.random()-.5)*.1})))},5e3)),b.success(`💎 宝藏！+${r}分！${n}！`,{duration:3e3}),H(a.clientX,a.clientY,"#ffd700",60),V(8)}ee(r=>r.filter(o=>o.id!==e))}};i.useEffect(()=>{if(ne&&clearTimeout(ne),M>0){ze(!0);const e=Math.max(2e3-M*50,1e3),a=setTimeout(()=>{oe(0),ze(!1)},e);Je(a)}return()=>{ne&&clearTimeout(ne)}},[M]),i.useEffect(()=>{if(h!=="starfield")return;const e=setInterval(()=>{x(a=>a.map(s=>{if(s.collected||!s.vx&&!s.vy)return s;let r=s.x+(s.vx||0),o=s.y+(s.vy||0);return r<0||r>100?{...s,vx:-(s.vx||0),x:Math.max(0,Math.min(100,r))}:o<0||o>100?{...s,vy:-(s.vy||0),y:Math.max(0,Math.min(100,o))}:{...s,x:r,y:o}}))},100);return()=>clearInterval(e)},[h,c.length]),i.useEffect(()=>{if(h!=="starfield")return;const e=setInterval(()=>{const a=Date.now();x(s=>s.map(r=>{if(r.collected||!r.disappearTime)return r;const o=r.disappearTime-a;if(o<=0)return{...r,x:Math.random()*100,y:Math.random()*100,disappearTime:Date.now()+1e4+Math.random()*2e4,warning:!1};const n=o<3e3;return{...r,warning:n}}))},500);return()=>clearInterval(e)},[h]),i.useEffect(()=>{if(M>0){const e=Math.min(100,M*5+at*.9);Ie(e)}else Ie(e=>Math.max(0,e*.95))},[M]),i.useEffect(()=>{if(h!=="starfield"||u!=null&&u.active)return;const e=setTimeout(()=>{if(Math.random()<.3&&P>5){const a=["bonus","rush","magnet"],s=a[Math.floor(Math.random()*a.length)];Ae({type:s,active:!0,timeLeft:s==="rush"?15e3:2e4}),s==="bonus"?b.success("🎁 奖励时间！所有星星分数翻倍！",{duration:2e3}):s==="rush"?b.success("⚡ 急速模式！星星移动更快！",{duration:2e3}):s==="magnet"&&b.success("🧲 磁力模式！星星自动靠近！",{duration:2e3})}},3e4+Math.random()*3e4);return()=>clearTimeout(e)},[h,u,P]),i.useEffect(()=>{if(!(u!=null&&u.active))return;const e=setInterval(()=>{Ae(a=>{if(!a)return null;const s=a.timeLeft-1e3;return s<=0?(b.info("事件结束",{duration:1e3}),null):{...a,timeLeft:s}})},1e3);return()=>clearInterval(e)},[u]),i.useEffect(()=>{if(!(C!=null&&C.active))return;const e=setInterval(()=>{he(a=>{if(!a)return null;const s=a.timeLeft-1;if(s<=0){if(a.collected>=a.target){const r=a.collected*2;E(o=>o+r),b.success(`🎉 挑战成功！获得${r}分奖励！`,{duration:3e3})}else b.error(`挑战失败！还差${a.target-a.collected}颗星星`,{duration:3e3});return null}return{...a,timeLeft:s}})},1e3);return()=>clearInterval(e)},[C]);const ut=()=>{ue(!1);const e=10+Math.floor(P/10),a=30;he({active:!0,timeLeft:a,target:e,collected:0}),b.success(`🎯 挑战开始！${a}秒内收集${e}颗星星！`,{duration:3e3})},wt=(e,a)=>{const s=a.target.getBoundingClientRect(),r=a.clientX,o=a.clientY,n=s.left+s.width/2,l=s.top+s.height/2,f=Math.sqrt(Math.pow(r-n,2)+Math.pow(o-l,2)),T=e.size*4*(e.clickArea||1)/2,O=T*.5,G=f<O;return e.vx||e.vy?{hit:f<T*.8,perfect:G&&f<O*.8}:{hit:f<T,perfect:G}};i.useEffect(()=>{const e=a=>{h==="starfield"&&Ve(s=>[...s,{id:`trail-${Date.now()}-${Math.random()}`,x:a.clientX,y:a.clientY,life:20}].slice(-10))};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},[h]),i.useEffect(()=>{const e=setInterval(()=>{Ve(a=>a.map(s=>({...s,life:s.life-1})).filter(s=>s.life>0))},16);return()=>clearInterval(e)},[]);const bt=e=>{if(!w)return;const a=ct+e,s=qe*100;if(a>=s){const r=qe+1,o=a-s;it(r),Be(o),dt(l=>l+1);const n=N();n.playerLevel=r,n.experience=o,n.skillPoints=(n.skillPoints||0)+1,S(n),b.success(`🎉 升级到 ${r} 级！获得1技能点！`,{duration:3e3}),V(8)}else{Be(a);const r=N();r.experience=a,S(r)}},gt=(e,a)=>{if(a.preventDefault(),a.stopPropagation(),y.includes(e)){b.error("已经收集过了！",{duration:500});return}const s=c.find(p=>p.id===e);if(!s||!s.clickable)return;const r=wt(s,a);if(!r.hit){const p=Ye+1;st(p),x($=>$.map(J=>J.id===e?{...J,missCount:(J.missCount||0)+1}:J)),M>0&&oe(Math.max(0,M-2));const v=Math.min(5,p);if(E($=>{const J=Math.max(0,$-v);return F(J),J}),Pe(!0),setTimeout(()=>Pe(!1),2e3),w){const $=N();$.totalMisses=($.totalMisses||0)+1,S($)}b.error(`❌ 未命中！-${v}分，连击-2`,{duration:1500,style:{background:"rgba(239, 68, 68, 0.9)",color:"white"}});return}if(r.perfect){if(w){const p=N();p.perfectHits=(p.perfectHits||0)+1,S(p)}b.success("💫 完美命中！",{duration:800})}const o=s.rare||!1,n=s.type||"star";let l=o?5:1;r.perfect&&(l=Math.floor(l*1.5)),ft.includes("more-points")&&(l=Math.floor(l*1.2)),n==="comet"?l=3:n==="meteor"?l=4:n==="planet"?l=2:n==="nebula"?l=6:n==="asteroid"&&(l=2);const f=M+1;oe(f),Yt(f),f%10===0?(l+=2,De({type:"combo",message:`🔥 ${f}连击！+2分奖励！`,duration:2e3})):f%5===0&&(l+=1,De({type:"combo",message:`⚡ ${f}连击！+1分奖励！`,duration:1500})),(u==null?void 0:u.type)==="bonus"&&u.active&&(l*=2),et.some(p=>p.type==="double"&&p.until>Date.now())&&(l*=2),Pt(n,1),xt(n),H(a.clientX,a.clientY,n==="comet"?"#60a5fa":n==="meteor"?"#fbbf24":n==="planet"?"#a78bfa":n==="nebula"?"#ec4899":n==="asteroid"?"#78716c":o?"#60a5fa":"#ffffff",n==="nebula"?30:20);const O=a.clientX,G=a.clientY;ve(O,G,o?"rare-star":"star"),(o||n==="nebula"||M>=10)&&V(3),W(p=>[...p,e]),Tt(e),C!=null&&C.active&&he(p=>p?{...p,collected:p.collected+1}:null),o?(It(e),b.success(`✨ 稀有星星 +${l}分！`,{duration:2e3,style:{background:"rgba(59, 130, 246, 0.9)",color:"white",fontSize:"16px"}}),$e("collect-rare-star",1)):b.success(`⭐ +${l}分`,{duration:1500,style:{background:"rgba(251, 191, 36, 0.9)",color:"white",fontSize:"16px"}});const je=y.length+1;$e("collect-10-stars",je),E(p=>{const v=p+l;if(F(v),ye(v),bt(l),w){const $=N();$.totalScore=($.totalScore||0)+l,S($)}return v}),x(p=>p.map(v=>v.id===e?{...v,collected:!0}:v)),(u==null?void 0:u.type)==="rush"&&u.active&&x(p=>p.map(v=>({...v,vx:v.vx?v.vx*2:(Math.random()-.5)*.2,vy:v.vy?v.vy*2:(Math.random()-.5)*.2})))},yt=(e,a)=>{if(xe.includes(e))return;const s=D.find(n=>n.id===e);if(!s)return;const r=s.type==="legendary"?10:s.type==="rare"?5:2,o=a.target.getBoundingClientRect();ve(o.left+o.width/2,o.top+o.height/2,`data-${s.type}`),Q(n=>[...n,e]),Dt(e),b.success(`⚡ 数据包 +${r}`,{duration:800}),E(n=>{const l=n+r;return F(l),ye(l),l}),X(n=>n.map(l=>l.id===e?{...l,collected:!0}:l))},vt=(e,a)=>{if(A.includes(e))return;const s=m.find(n=>n.id===e);if(!s)return;const r=s.type==="secret"?20:s.type==="easter-egg"?15:10,o=a.target.getBoundingClientRect();ve(o.left+o.width/2,o.top+o.height/2,`mystery-${s.type}`),Y(n=>[...n,e]),At(e),b.success(`🔮 神秘物品 +${r}`,{duration:1e3}),E(n=>{const l=n+r;return F(l),ye(l),l}),g(n=>n.map(l=>l.id===e?{...l,collected:!0}:l)),s.type==="secret"&&!k.includes("mystery-explorer")&&(We("mystery-explorer"),L("🔮 神秘探索者 - 发现了隐藏的秘密！"),z(!0),setTimeout(()=>z(!1),3e3))},jt=[{id:"starfield",name:"星空区",icon:Ne,description:"收集闪烁的星星",color:"text-yellow-400",bgColor:"bg-yellow-400/10",borderColor:"border-yellow-400/20",locked:!1},{id:"datastream",name:"数据流区",icon:kt,description:"探索数据流",color:"text-blue-400",bgColor:"bg-blue-400/10",borderColor:"border-blue-400/20",locked:!I("datastream"),unlockCondition:"收集20颗星星"},{id:"mystery",name:"神秘区",icon:ie,description:"未知的秘密",color:"text-purple-400",bgColor:"bg-purple-400/10",borderColor:"border-purple-400/20",locked:!I("mystery"),unlockCondition:"收集50颗星星"}];return t.jsxs("div",{className:"fixed inset-0 w-screen h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex z-50",style:{transform:B>0?`translate(${Math.random()*B-B/2}px, ${Math.random()*B-B/2}px)`:"none",transition:B>0?"none":"transform 0.1s"},children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 animate-gradient-shift"}),t.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-slow"}),t.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-slow-delay"}),t.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none z-30",children:h==="starfield"&&c.length>0&&c.map(e=>{const a=e.type||"star",s=a==="comet",r=a==="meteor",o=a==="planet",n=a==="nebula",l=a==="asteroid";let f="",T="";return s?(f="comet-element",T="☄️"):r?(f="meteor-element",T="🌠"):o?(f="planet-element",T="🪐"):n?(f="nebula-element",T="🌌"):l&&(f="asteroid-element",T="🪨"),t.jsx("div",{onClick:O=>gt(e.id,O),className:`absolute transition-all pointer-events-auto z-40 ${e.collected?"opacity-0 scale-0 pointer-events-none":a!=="star"?`${f} cursor-crosshair active:scale-200 hover:scale-150`:e.rare?"cursor-pointer active:scale-300 hover:scale-250":"bg-white cursor-pointer active:scale-200 hover:scale-150 rounded-full"}`,style:{left:`${e.x}%`,top:`${e.y}%`,width:a==="star"?`${e.size*4}px`:a==="comet"?`${e.size*8}px`:a==="meteor"?`${e.size*6}px`:a==="planet"?`${e.size*10}px`:a==="nebula"?`${e.size*12}px`:`${e.size*5}px`,height:a==="star"?`${e.size*4}px`:a==="comet"?`${e.size*3}px`:a==="meteor"?`${e.size*4}px`:a==="planet"?`${e.size*10}px`:a==="nebula"?`${e.size*12}px`:`${e.size*5}px`,minWidth:"2px",minHeight:"2px",padding:a==="star"?"3px":"0",margin:a==="star"?"-3px":"0",opacity:e.collected?0:(e.rare?.9:.7)*(e.brightness||1),backgroundColor:a==="star"?e.rare?e.glowColor:"white":"transparent",clipPath:a==="star"?e.shape==="star"?"polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)":e.shape==="diamond"?"polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)":e.shape==="cross"?"polygon(20% 0%, 80% 0%, 80% 20%, 100% 20%, 100% 80%, 80% 80%, 80% 100%, 20% 100%, 20% 80%, 0% 80%, 0% 20%, 20% 20%)":"none":"none",borderRadius:a==="star"&&e.shape==="circle"||a==="planet"||a==="nebula"?"50%":"0",boxShadow:e.warning?`0 0 ${e.size*3}px #ef4444, 0 0 ${e.size*6}px #ef4444, inset 0 0 ${e.size*2}px #ef4444`:s?`0 0 ${e.size*2}px #60a5fa, 0 0 ${e.size*4}px #60a5fa40`:r?`0 0 ${e.size*2}px #fbbf24, 0 0 ${e.size*4}px #fbbf2440`:o?`0 0 ${e.size*3}px #a78bfa, 0 0 ${e.size*6}px #a78bfa40`:n?`0 0 ${e.size*4}px #ec4899, 0 0 ${e.size*8}px #ec489940`:e.rare?`0 0 ${e.size*2}px ${e.glowColor}, 0 0 ${e.size*4}px ${e.glowColor}40`:a==="star"?`0 0 ${e.size*1.5}px rgba(255, 255, 255, 0.6), inset 0 0 ${e.size}px rgba(255, 255, 255, 0.2)`:"none",animationName:e.collected?"star-collected":e.warning?"star-warning":s?"comet-move":r?"meteor-trail":o?"planet-rotate":n?"nebula-pulse":e.rare?"twinkle-rare":"twinkle",animationDuration:e.collected?"0.5s":e.warning?"0.3s":s?"3s":r?"2s":o?"10s":n?"4s":`${e.duration}s`,animationTimingFunction:e.collected?"ease-out":e.warning||s||r?"linear":"ease-in-out",animationIterationCount:e.collected?1:"infinite",animationFillMode:e.collected?"forwards":"none",animationDelay:`${e.delay}s`,transform:e.collected?"scale(0) rotate(180deg)":s?"rotate(-45deg)":r?"rotate(45deg)":"none",zIndex:40,transition:e.vx||e.vy?"left 0.1s linear, top 0.1s linear":"none",fontSize:a!=="star"?`${e.size*6}px`:void 0},title:e.collected?void 0:e.warning?"⚠️ 即将消失！快点击！":s?"☄️ 彗星！点击收集 (+3分，难点击)":r?"🌠 流星！点击收集 (+4分，很难点击)":o?"🪐 行星！点击收集 (+2分，易点击)":n?"🌌 星云！点击收集 (+6分)":l?"🪨 小行星！点击收集 (+2分)":e.rare?"✨ 稀有星星！点击收集 (+5分)":"⭐ 点击收集 (+1分)",children:a!=="star"&&T},e.id)})}),h==="datastream"&&t.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:D.map(e=>t.jsx("div",{onClick:a=>yt(e.id,a),className:`absolute font-mono text-xs pointer-events-auto cursor-pointer transition-all ${e.collected?"opacity-0 scale-0":e.type==="legendary"?"text-yellow-400 font-bold text-sm":e.type==="rare"?"text-blue-400":"text-green-400"}`,style:{left:`${e.x}%`,top:`${e.y}%`,textShadow:e.type==="legendary"?"0 0 10px #fbbf24, 0 0 20px #fbbf24":e.type==="rare"?"0 0 5px #60a5fa":"none",animationName:e.collected?"none":"data-stream-fall",animationDuration:`${e.speed}s`,animationTimingFunction:"linear",animationIterationCount:e.collected?0:"infinite"},title:e.collected?void 0:`点击收集 ${e.type==="legendary"?"传奇":e.type==="rare"?"稀有":"普通"}数据包`,children:e.text},e.id))}),h==="mystery"&&t.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:m.map(e=>t.jsxs("div",{onClick:a=>vt(e.id,a),className:`absolute pointer-events-auto cursor-pointer transition-all ${e.collected?"opacity-0 scale-0":"opacity-70 hover:opacity-100 hover:scale-110"}`,style:{left:`${e.x}%`,top:`${e.y}%`,animationName:e.collected?"none":"mystery-pulse",animationDuration:"2s",animationTimingFunction:"ease-in-out",animationIterationCount:e.collected?0:"infinite"},title:e.collected?void 0:e.hint,children:[e.type==="puzzle"&&t.jsx("span",{className:"text-4xl",children:"🧩"}),e.type==="easter-egg"&&t.jsx("span",{className:"text-4xl",children:"🥚"}),e.type==="secret"&&t.jsx("span",{className:"text-4xl",children:"🔮"})]},e.id))}),q.map(e=>t.jsxs("div",{className:"fixed pointer-events-none z-[100]",style:{left:`${e.x}px`,top:`${e.y}px`,transform:"translate(-50%, -50%)",animation:"collect-popup 1.2s ease-out forwards"},children:[t.jsx("div",{className:`text-4xl font-bold drop-shadow-2xl ${e.type==="rare-star"?"text-blue-400":e.type==="data-legendary"?"text-yellow-400":e.type==="data-rare"?"text-blue-400":e.type==="mystery-secret"?"text-purple-400":"text-yellow-400"}`,style:{filter:"drop-shadow(0 0 10px currentColor)",textShadow:"0 0 20px currentColor, 0 0 40px currentColor"},children:e.type==="rare-star"?"✨":e.type==="data-legendary"||e.type==="data-rare"?"⚡":e.type==="mystery-secret"?"🔮":"⭐"}),t.jsx("div",{className:`text-lg font-bold mt-2 text-center ${e.type==="rare-star"?"text-blue-300":"text-yellow-300"}`,style:{textShadow:"0 0 10px currentColor"},children:e.type==="rare-star"?"+5":"+1"})]},e.id)),ae&&t.jsx("div",{className:"fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up",children:t.jsx("div",{className:"bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/50 rounded-xl px-6 py-4 shadow-2xl",children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(ce,{size:24,className:"text-yellow-400"}),t.jsx("span",{className:"text-white font-semibold",children:de})]})})}),Ke&&M>0&&t.jsx("div",{className:"fixed top-32 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up",children:t.jsx("div",{className:"bg-gradient-to-r from-orange-500/30 to-red-500/30 backdrop-blur-sm border border-orange-500/50 rounded-xl px-6 py-3 shadow-2xl",children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(ie,{size:20,className:"text-orange-400 animate-pulse"}),t.jsxs("span",{className:"text-white font-bold text-lg",children:[M," 连击",M>=10&&t.jsx("span",{className:"ml-2 text-orange-400",children:"🔥"}),M>=20&&t.jsx("span",{className:"ml-1 text-red-400",children:"⚡"})]})]})})}),Ee&&t.jsx("div",{className:"fixed top-44 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up",children:t.jsx("div",{className:"bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm border border-purple-500/50 rounded-xl px-6 py-3 shadow-2xl",children:t.jsx("span",{className:"text-white font-semibold",children:Ee.message})})}),tt&&t.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:t.jsxs("div",{className:"bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-md border border-orange-500/50 rounded-xl p-6 max-w-md w-full",children:[t.jsx("h3",{className:"text-2xl font-bold text-white mb-4 text-center",children:"🎯 挑战模式"}),t.jsxs("p",{className:"text-white/80 mb-6 text-center",children:["限时挑战！在30秒内收集尽可能多的星星！",t.jsx("br",{}),t.jsx("span",{className:"text-orange-400 font-semibold",children:"完成可获得双倍分数奖励！"})]}),t.jsxs("div",{className:"flex gap-3",children:[t.jsx("button",{onClick:ut,className:"flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all",children:"开始挑战"}),t.jsx("button",{onClick:()=>ue(!1),className:"px-6 py-3 bg-white/10 text-white/80 font-semibold rounded-lg hover:bg-white/20 transition-all",children:"稍后"})]})]})}),(C==null?void 0:C.active)&&t.jsx("div",{className:"fixed top-4 left-1/2 -translate-x-1/2 z-[60] bg-gradient-to-r from-red-500/30 to-orange-500/30 backdrop-blur-sm border border-red-500/50 rounded-xl px-6 py-3 shadow-2xl",children:t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-3xl font-bold text-white",children:C.timeLeft}),t.jsx("div",{className:"text-xs text-white/70",children:"秒"})]}),t.jsx("div",{className:"h-12 w-px bg-white/30"}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-2xl font-bold text-orange-400",children:C.collected}),t.jsxs("div",{className:"text-xs text-white/70",children:["/",C.target]})]}),t.jsx("div",{className:"flex-1 h-2 bg-white/20 rounded-full overflow-hidden ml-4",children:t.jsx("div",{className:"h-full bg-gradient-to-r from-orange-400 to-red-400 transition-all",style:{width:`${C.collected/C.target*100}%`}})})]})}),(u==null?void 0:u.active)&&t.jsx("div",{className:"fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm border border-purple-500/50 rounded-xl px-6 py-3 shadow-2xl",children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"text-2xl",children:u.type==="bonus"?"🎁":u.type==="rush"?"⚡":u.type==="magnet"?"🧲":""}),t.jsxs("div",{children:[t.jsx("div",{className:"text-white font-semibold",children:u.type==="bonus"?"奖励时间":u.type==="rush"?"急速模式":u.type==="magnet"?"磁力模式":""}),t.jsxs("div",{className:"text-white/70 text-xs",children:["剩余 ",Math.ceil(u.timeLeft/1e3),"秒"]})]}),t.jsx("div",{className:"w-24 h-2 bg-white/20 rounded-full overflow-hidden",children:t.jsx("div",{className:"h-full bg-purple-400 transition-all",style:{width:`${u.timeLeft/2e4*100}%`}})})]})}),rt&&t.jsx("div",{className:"fixed top-56 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up",children:t.jsx("div",{className:"bg-gradient-to-r from-red-500/30 to-orange-500/30 backdrop-blur-sm border border-red-500/50 rounded-xl px-6 py-3 shadow-2xl",children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"text-2xl",children:"❌"}),t.jsxs("span",{className:"text-white font-semibold",children:["未命中！连击-2，分数-",Math.min(5,Ye)]})]})})}),ot.map(e=>t.jsx("div",{className:"fixed pointer-events-none z-[100]",style:{left:`${e.x}px`,top:`${e.y}px`,width:"4px",height:"4px",backgroundColor:e.color,borderRadius:"50%",opacity:e.life/60,transform:`translate(-50%, -50%) scale(${e.life/60})`,boxShadow:`0 0 ${e.life/10}px ${e.color}`}},e.id)),Xe.map(e=>{const a=e.life<3e3,r=(n=>{const l={blackhole:{emoji:"🕳️",name:"黑洞",color:"#000000",animation:"blackhole-pulse",fastAnimation:"blackhole-pulse-fast"},wormhole:{emoji:"🌀",name:"虫洞",color:"#9d4edd",animation:"wormhole-rotate",fastAnimation:"wormhole-rotate-fast"},treasure:{emoji:"💎",name:"宝藏",color:"#ffd700",animation:"treasure-glow",fastAnimation:"treasure-glow-fast"},supernova:{emoji:"💥",name:"超新星",color:"#ff6b35",animation:"supernova-pulse",fastAnimation:"supernova-pulse-fast"},pulsar:{emoji:"📡",name:"脉冲星",color:"#00d4ff",animation:"pulsar-pulse",fastAnimation:"pulsar-pulse-fast"},quasar:{emoji:"🌟",name:"类星体",color:"#ffaa00",animation:"quasar-glow",fastAnimation:"quasar-glow-fast"},darkmatter:{emoji:"🌑",name:"暗物质",color:"#4a148c",animation:"darkmatter-pulse",fastAnimation:"darkmatter-pulse-fast"},gravwave:{emoji:"🌊",name:"引力波",color:"#00ff88",animation:"gravwave-ripple",fastAnimation:"gravwave-ripple-fast"},asteroidbelt:{emoji:"🪨",name:"小行星带",color:"#78716c",animation:"asteroidbelt-rotate",fastAnimation:"asteroidbelt-rotate-fast"},cometcluster:{emoji:"☄️",name:"彗星群",color:"#60a5fa",animation:"cometcluster-move",fastAnimation:"cometcluster-move-fast"},starcluster:{emoji:"✨",name:"星团",color:"#fbbf24",animation:"starcluster-twinkle",fastAnimation:"starcluster-twinkle-fast"},whitedwarf:{emoji:"⚪",name:"白矮星",color:"#ffffff",animation:"whitedwarf-glow",fastAnimation:"whitedwarf-glow-fast"},neutronstar:{emoji:"⚫",name:"中子星",color:"#00ffff",animation:"neutronstar-pulse",fastAnimation:"neutronstar-pulse-fast"}};return l[n]||l.treasure})(e.type),o=a?r.fastAnimation:r.animation;return t.jsx("div",{onClick:n=>ht(e.id,n),className:"fixed pointer-events-auto z-50 cursor-pointer",style:{left:`${e.x}%`,top:`${e.y}%`,transform:"translate(-50%, -50%)",animation:`${o} ${a?"0.5s":"1.5s"} ease-in-out infinite`,filter:a?"brightness(1.5) drop-shadow(0 0 20px currentColor)":"drop-shadow(0 0 10px currentColor)"},title:`${r.emoji} ${r.name}！点击互动${a?" (即将消失)":""}`,children:t.jsxs("div",{className:"text-5xl relative",style:{color:r.color},children:[r.emoji,a&&t.jsx("div",{className:"absolute inset-0 rounded-full animate-ping",style:{background:`radial-gradient(circle, ${r.color}40 0%, transparent 70%)`}})]})},e.id)}),(U==null?void 0:U.active)&&t.jsx("div",{className:"fixed inset-0 z-[70] pointer-events-none flex items-center justify-center",children:t.jsx("div",{className:`text-8xl font-bold ${U.type==="rainbow"?"animate-rainbow-text":"animate-pulse"}`,style:{textShadow:"0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor",filter:"drop-shadow(0 0 10px currentColor)"},children:U.type==="rainbow"?"🌈 彩虹组合！":U.type.startsWith("triple-")?`🎯 三连${U.type.split("-")[1]}！`:"✨"})}),t.jsx("div",{className:"fixed bottom-4 right-4 z-[60] flex flex-col gap-2",children:t.jsxs("button",{onClick:pt,disabled:!j.ready||j.cooldown>0,className:`px-4 py-2 rounded-lg font-semibold transition-all ${j.ready?"bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg":"bg-gray-600 text-gray-400 cursor-not-allowed"}`,title:j.type==="magnet"?"🧲 磁铁：吸引所有元素":j.type==="explosion"?"💥 爆炸：收集中心区域元素":j.type==="freeze"?"❄️ 冻结：停止所有元素移动":"✨ 倍增：下一个收集分数翻倍",children:[j.type==="magnet"?"🧲":j.type==="explosion"?"💥":j.type==="freeze"?"❄️":"✨",j.cooldown>0&&` (${Math.ceil(j.cooldown/1e3)}s)`]})}),t.jsx("div",{className:`relative z-20 transition-all duration-300 ${re?"w-64":"w-0"} overflow-hidden border-r border-white/10 bg-black/40 backdrop-blur-sm`,children:t.jsxs("div",{className:"h-full p-4 flex flex-col",children:[t.jsxs("div",{className:"flex items-center justify-between mb-6",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(St,{size:24,className:"text-purple-400"}),t.jsx("h3",{className:"text-white font-semibold",children:"探索区域"})]}),t.jsx("button",{onClick:()=>Z(!1),className:"text-white/50 hover:text-white transition-colors",children:t.jsx(ke,{size:18})})]}),t.jsx("div",{className:"space-y-2 flex-1",children:jt.map(e=>{const a=e.icon,s=h===e.id,r=e.locked;return t.jsx("button",{onClick:()=>!r&&me(e.id),disabled:r,className:`w-full p-3 rounded-lg border transition-all text-left ${s?`${e.bgColor} ${e.borderColor} border-2`:"bg-white/5 border-white/10 hover:bg-white/10"} ${r?"opacity-50 cursor-not-allowed":"cursor-pointer"}`,children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(a,{size:20,className:s?e.color:"text-white/60"}),t.jsxs("div",{className:"flex-1",children:[t.jsxs("div",{className:`font-medium ${s?"text-white":"text-white/70"}`,children:[e.name,r&&t.jsx("span",{className:"ml-2 text-xs text-white/40",children:"🔒"})]}),t.jsx("div",{className:"text-xs text-white/50 mt-0.5",children:r&&e.unlockCondition?`解锁条件：${e.unlockCondition}`:e.description})]})]})},e.id)})}),t.jsxs("div",{className:"mt-auto pt-4 border-t border-white/10 space-y-2",children:[t.jsx("button",{onClick:()=>_(!0),className:"w-full p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-left",children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(Oe,{size:18,className:"text-blue-400"}),t.jsx("span",{className:"text-white/80 text-sm",children:"查看统计"})]})}),t.jsx("button",{onClick:()=>d("/"),className:"w-full p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-left",children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(Mt,{size:18,className:"text-white/60"}),t.jsx("span",{className:"text-white/80 text-sm",children:"返回首页"})]})})]})]})}),t.jsxs("div",{className:"flex-1 relative overflow-hidden",children:[t.jsxs("div",{className:"absolute top-4 left-4 right-4 z-20 flex items-center justify-between",children:[!re&&t.jsx("button",{onClick:()=>Z(!0),className:"p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors",children:t.jsx($t,{size:20,className:"text-white"})}),t.jsxs("div",{className:"flex items-center gap-3 ml-auto",children:[M>0&&t.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-orange-500/20 backdrop-blur-sm rounded-lg border border-orange-500/30",children:[t.jsx(ie,{size:16,className:"text-orange-400"}),t.jsxs("span",{className:"text-white font-medium text-sm",children:[M,"x"]})]}),t.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-colors cursor-pointer",onClick:()=>_(!0),children:[t.jsx(Ne,{size:16,className:"text-yellow-400 fill-yellow-400"}),t.jsx("span",{className:"text-white font-medium text-sm",children:P})]}),t.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-colors cursor-pointer",onClick:()=>_(!0),children:[t.jsx(ce,{size:16,className:"text-yellow-400"}),t.jsx("span",{className:"text-white font-medium text-sm",children:k.length})]}),t.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-colors cursor-pointer",onClick:()=>Te(!0),children:[t.jsx(Se,{size:16,className:"text-blue-400"}),t.jsx("span",{className:"text-white font-medium text-sm",children:"任务"})]})]})]}),t.jsxs("div",{className:"h-full flex items-center justify-center p-4 relative z-10 pointer-events-none",children:[h==="starfield"&&t.jsxs("div",{className:"text-center max-w-2xl relative z-10 pointer-events-none",children:[t.jsx("h2",{className:"text-xl md:text-2xl font-light text-white/40 mb-2",children:"星空区"}),t.jsx("p",{className:"text-xs md:text-sm text-white/30 max-w-md mx-auto leading-relaxed mb-2",children:"点击闪烁的星星收集它们"}),t.jsx("div",{className:"text-xs text-white/25 space-y-0.5 mt-2",children:t.jsxs("div",{className:"flex items-center justify-center gap-3 flex-wrap",children:[t.jsx("span",{children:"⭐ +1分"}),t.jsx("span",{children:"✨ +5分"})]})}),c.length===0&&t.jsx("div",{className:"mt-4 text-white/40 text-xs",children:"正在加载..."})]}),h==="datastream"&&t.jsxs("div",{className:"text-center max-w-2xl relative z-10 pointer-events-none",children:[t.jsx("h2",{className:"text-xl md:text-2xl font-light text-white/40 mb-2",children:"数据流区"}),t.jsx("p",{className:"text-xs md:text-sm text-white/30 max-w-md mx-auto leading-relaxed mb-2",children:"点击数据包收集它们"}),t.jsxs("div",{className:"text-xs text-white/25 space-y-0.5",children:[t.jsx("div",{children:"普通 +2分"}),t.jsx("div",{children:"稀有 +5分"}),t.jsx("div",{children:"传奇 +10分"})]})]}),h==="mystery"&&t.jsxs("div",{className:"text-center max-w-2xl relative z-10 pointer-events-none",children:[t.jsx("h2",{className:"text-xl md:text-2xl font-light text-white/40 mb-2",children:"神秘区"}),t.jsx("p",{className:"text-xs md:text-sm text-white/30 max-w-md mx-auto leading-relaxed mb-2",children:"探索神秘物品"}),t.jsxs("div",{className:"text-xs text-white/25 space-y-0.5",children:[t.jsx("div",{children:"解谜 +10分"}),t.jsx("div",{children:"彩蛋 +15分"}),t.jsx("div",{children:"秘密 +20分"})]})]})]}),Qe&&t.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",children:t.jsxs("div",{className:"bg-slate-900/95 backdrop-blur-md border border-white/20 rounded-xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto",children:[t.jsxs("div",{className:"flex items-center justify-between mb-6",children:[t.jsxs("h3",{className:"text-xl font-semibold text-white flex items-center gap-2",children:[t.jsx(Se,{size:24,className:"text-blue-400"}),"每日任务"]}),t.jsx("button",{onClick:()=>Te(!1),className:"text-white/50 hover:text-white transition-colors",children:t.jsx(ke,{size:20})})]}),t.jsx("div",{className:"space-y-3",children:Ze.map(e=>t.jsxs("div",{className:`p-4 rounded-lg border ${e.completed?"bg-green-500/10 border-green-500/30":"bg-white/5 border-white/10"}`,children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("span",{className:`text-sm font-medium ${e.completed?"text-green-400":"text-white/80"}`,children:e.description}),e.completed&&t.jsx("span",{className:"text-green-400 text-xs",children:"✓ 完成"})]}),t.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[t.jsx("div",{className:"flex-1 h-2 bg-white/10 rounded-full overflow-hidden",children:t.jsx("div",{className:`h-full transition-all ${e.completed?"bg-green-400":"bg-blue-400"}`,style:{width:`${Math.min(e.progress/e.target*100,100)}%`}})}),t.jsxs("span",{className:"text-xs text-white/60",children:[e.progress,"/",e.target]})]}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("span",{className:"text-xs text-white/50",children:["奖励: +",e.reward,"分"]}),e.completed&&t.jsx("span",{className:"text-xs text-green-400",children:"已获得奖励"})]})]},e.id))})]})}),K&&w&&t.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",children:t.jsxs("div",{className:"bg-slate-900/95 backdrop-blur-md border border-white/20 rounded-xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto",children:[t.jsxs("div",{className:"flex items-center justify-between mb-6",children:[t.jsxs("h3",{className:"text-xl font-semibold text-white flex items-center gap-2",children:[t.jsx(Oe,{size:24,className:"text-blue-400"}),"探索统计"]}),t.jsx("button",{onClick:()=>_(!1),className:"text-white/50 hover:text-white transition-colors",children:t.jsx(ke,{size:20})})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[t.jsx(Ne,{size:18,className:"text-yellow-400"}),t.jsx("span",{className:"text-white/70 text-sm",children:"收集星星"})]}),t.jsx("div",{className:"text-2xl font-bold text-white",children:P}),t.jsx("div",{className:"text-xs text-white/50 mt-1",children:"共80颗"})]}),t.jsxs("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[t.jsx(ce,{size:18,className:"text-yellow-400"}),t.jsx("span",{className:"text-white/70 text-sm",children:"成就数量"})]}),t.jsx("div",{className:"text-2xl font-bold text-white",children:k.length}),t.jsx("div",{className:"text-xs text-white/50 mt-1",children:"已解锁"})]}),t.jsxs("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[t.jsx(Se,{size:18,className:"text-blue-400"}),t.jsx("span",{className:"text-white/70 text-sm",children:"探索时间"})]}),t.jsxs("div",{className:"text-2xl font-bold text-white",children:[Math.floor((w.totalPlayTime+R)/60),"分"]}),t.jsx("div",{className:"text-xs text-white/50 mt-1",children:"累计"})]}),t.jsxs("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[t.jsx(Ct,{size:18,className:"text-purple-400"}),t.jsx("span",{className:"text-white/70 text-sm",children:"访问次数"})]}),t.jsx("div",{className:"text-2xl font-bold text-white",children:w.visitCount}),t.jsx("div",{className:"text-xs text-white/50 mt-1",children:"次访问"})]})]}),k.length>0&&t.jsxs("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:[t.jsxs("h4",{className:"text-white/90 font-medium mb-3 flex items-center gap-2",children:[t.jsx(ce,{size:18,className:"text-yellow-400"}),"已解锁成就"]}),t.jsx("div",{className:"space-y-2",children:k.map((e,a)=>t.jsxs("div",{className:"flex items-center gap-2 text-sm text-white/70",children:[t.jsx("span",{className:"text-yellow-400",children:"✓"}),t.jsxs("span",{children:[e==="star-collector"&&"⭐ 星星收集者",e==="star-master"&&"🌟 星星大师",e==="star-legend"&&"✨ 星星传奇",e==="star-complete"&&"💫 星空征服者",e==="mystery-explorer"&&"🔮 神秘探索者"]})]},a))})]}),t.jsxs("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("span",{className:"text-white/70 text-sm",children:"收集进度"}),t.jsxs("span",{className:"text-white/70 text-sm",children:[Math.round(P/80*100),"%"]})]}),t.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:t.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-300",style:{width:`${P/80*100}%`}})})]}),t.jsxs("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[t.jsx(ie,{size:18,className:"text-orange-400"}),t.jsx("span",{className:"text-white/70 text-sm",children:"连击记录"})]}),t.jsx("div",{className:"text-2xl font-bold text-orange-400",children:w.maxCombo||0}),t.jsx("div",{className:"text-xs text-white/50 mt-1",children:"最大连击数"}),M>0&&t.jsxs("div",{className:"text-xs text-orange-400 mt-2",children:["当前: ",M," 连击"]})]}),w.collectionBook&&Object.keys(w.collectionBook).length>0&&t.jsxs("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:[t.jsxs("h4",{className:"text-white/90 font-medium mb-3 flex items-center gap-2",children:[t.jsx(zt,{size:18,className:"text-purple-400"}),"收集图鉴"]}),t.jsx("div",{className:"grid grid-cols-2 gap-2",children:Object.entries(w.collectionBook).map(([e,a])=>t.jsxs("div",{className:"flex items-center justify-between text-sm text-white/70 bg-white/5 rounded p-2",children:[t.jsx("span",{children:e==="rare-star"?"✨ 稀有星星":e==="circle"?"⭕ 圆形":e==="star"?"⭐ 五角星":e==="diamond"?"💎 菱形":e==="cross"?"➕ 十字":e}),t.jsx("span",{className:"text-white/90 font-medium",children:a})]},e))})]})]})]})})]}),t.jsx("style",{children:`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }
        
        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        @keyframes float-slow-delay {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-30px, 30px) scale(0.9);
          }
          66% {
            transform: translate(20px, -20px) scale(1.1);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes pulse-gentle {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        @keyframes twinkle-rare {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
        
        @keyframes data-stream-fall {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(110vh);
          }
        }
        
        @keyframes mystery-pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }
        
        @keyframes collect-popup {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0.3) rotate(0deg);
          }
          20% {
            opacity: 1;
            transform: translate(-50%, -80px) scale(1.5) rotate(180deg);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -120px) scale(1.2) rotate(360deg);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -180px) scale(0.5) rotate(540deg);
          }
        }
        
        @keyframes star-collected {
          0% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.8;
            transform: scale(2) rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
          }
        }
        
        @keyframes star-warning {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
            box-shadow: 0 0 10px #ef4444, 0 0 20px #ef4444;
          }
          50% {
            opacity: 0.7;
            transform: scale(1.3);
            box-shadow: 0 0 20px #ef4444, 0 0 40px #ef4444;
          }
        }
        
        @keyframes comet-move {
          0% {
            transform: translateX(0) translateY(0) rotate(-45deg);
            opacity: 0.8;
          }
          50% {
            transform: translateX(10px) translateY(-10px) rotate(-45deg);
            opacity: 1;
          }
          100% {
            transform: translateX(0) translateY(0) rotate(-45deg);
            opacity: 0.8;
          }
        }
        
        @keyframes meteor-trail {
          0% {
            transform: translateX(0) translateY(0) rotate(45deg);
            opacity: 0.6;
            filter: brightness(1);
          }
          50% {
            transform: translateX(-8px) translateY(8px) rotate(45deg);
            opacity: 1;
            filter: brightness(1.5);
          }
          100% {
            transform: translateX(0) translateY(0) rotate(45deg);
            opacity: 0.6;
            filter: brightness(1);
          }
        }
        
        @keyframes planet-rotate {
          0% {
            transform: rotate(0deg);
            filter: hue-rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
            filter: hue-rotate(360deg);
          }
        }
        
        @keyframes nebula-pulse {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1);
            filter: blur(2px);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
            filter: blur(4px);
          }
        }
        
        .comet-element {
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, transparent 100%);
          border-radius: 50% 0 0 50%;
          clip-path: polygon(0% 50%, 100% 0%, 100% 100%);
        }
        
        .meteor-element {
          background: linear-gradient(45deg, #fbbf24 0%, #f59e0b 50%, transparent 100%);
          border-radius: 0 50% 50% 0;
          clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
        }
        
        .planet-element {
          background: radial-gradient(circle, #a78bfa 0%, #8b5cf6 50%, #6d28d9 100%);
          border: 2px solid rgba(167, 139, 250, 0.5);
        }
        
        .nebula-element {
          background: radial-gradient(ellipse, #ec4899 0%, #be185d 50%, #831843 100%);
          filter: blur(3px);
        }
        
        .asteroid-element {
          background: linear-gradient(135deg, #78716c 0%, #57534e 50%, #44403c 100%);
          border-radius: 20%;
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
        }
        
        @keyframes blackhole-pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.9;
            filter: drop-shadow(0 0 15px rgba(0,0,0,0.8));
          }
          50% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 1;
            filter: drop-shadow(0 0 25px rgba(0,0,0,1));
          }
        }
        
        @keyframes blackhole-pulse-fast {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.9;
            filter: drop-shadow(0 0 20px rgba(255,0,0,0.8));
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 1;
            filter: drop-shadow(0 0 30px rgba(255,0,0,1));
          }
        }
        
        @keyframes wormhole-rotate {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
            filter: drop-shadow(0 0 15px rgba(157,78,221,0.6));
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) scale(1);
            filter: drop-shadow(0 0 15px rgba(157,78,221,0.6));
          }
        }
        
        @keyframes wormhole-rotate-fast {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
            filter: drop-shadow(0 0 20px rgba(255,0,0,0.8));
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) scale(1);
            filter: drop-shadow(0 0 20px rgba(255,0,0,0.8));
          }
        }
        
        @keyframes treasure-glow {
          0%, 100% {
            filter: drop-shadow(0 0 10px #ffd700) drop-shadow(0 0 20px #ffd700);
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            filter: drop-shadow(0 0 20px #ffd700) drop-shadow(0 0 40px #ffd700);
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
        
        @keyframes treasure-glow-fast {
          0%, 100% {
            filter: drop-shadow(0 0 15px #ffd700) drop-shadow(0 0 30px #ffd700) drop-shadow(0 0 15px rgba(255,0,0,0.8));
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            filter: drop-shadow(0 0 25px #ffd700) drop-shadow(0 0 50px #ffd700) drop-shadow(0 0 25px rgba(255,0,0,1));
            transform: translate(-50%, -50%) scale(1.15);
          }
        }
        
        @keyframes supernova-pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            filter: drop-shadow(0 0 20px #ff6b35) drop-shadow(0 0 40px #ff6b35);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.3);
            filter: drop-shadow(0 0 30px #ff6b35) drop-shadow(0 0 60px #ff6b35);
          }
        }
        
        @keyframes supernova-pulse-fast {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            filter: drop-shadow(0 0 25px #ff6b35) drop-shadow(0 0 50px #ff6b35) drop-shadow(0 0 20px rgba(255,0,0,0.8));
          }
          50% {
            transform: translate(-50%, -50%) scale(1.4);
            filter: drop-shadow(0 0 40px #ff6b35) drop-shadow(0 0 80px #ff6b35) drop-shadow(0 0 30px rgba(255,0,0,1));
          }
        }
        
        @keyframes pulsar-pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
            filter: drop-shadow(0 0 15px #00d4ff);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 1;
            filter: drop-shadow(0 0 30px #00d4ff) drop-shadow(0 0 60px #00d4ff);
          }
        }
        
        @keyframes pulsar-pulse-fast {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
            filter: drop-shadow(0 0 20px #00d4ff) drop-shadow(0 0 15px rgba(255,0,0,0.8));
          }
          50% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 1;
            filter: drop-shadow(0 0 40px #00d4ff) drop-shadow(0 0 30px rgba(255,0,0,1));
          }
        }
        
        @keyframes quasar-glow {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            filter: drop-shadow(0 0 20px #ffaa00) drop-shadow(0 0 40px #ffaa00);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.15);
            filter: drop-shadow(0 0 30px #ffaa00) drop-shadow(0 0 60px #ffaa00);
          }
        }
        
        @keyframes quasar-glow-fast {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            filter: drop-shadow(0 0 25px #ffaa00) drop-shadow(0 0 50px #ffaa00) drop-shadow(0 0 20px rgba(255,0,0,0.8));
          }
          50% {
            transform: translate(-50%, -50%) scale(1.25);
            filter: drop-shadow(0 0 40px #ffaa00) drop-shadow(0 0 80px #ffaa00) drop-shadow(0 0 30px rgba(255,0,0,1));
          }
        }
        
        @keyframes darkmatter-pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
            filter: drop-shadow(0 0 10px #4a148c) blur(1px);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.9;
            filter: drop-shadow(0 0 20px #4a148c) blur(0.5px);
          }
        }
        
        @keyframes darkmatter-pulse-fast {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.7;
            filter: drop-shadow(0 0 15px #4a148c) drop-shadow(0 0 15px rgba(255,0,0,0.8)) blur(0.5px);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 1;
            filter: drop-shadow(0 0 25px #4a148c) drop-shadow(0 0 25px rgba(255,0,0,1)) blur(0px);
          }
        }
        
        @keyframes gravwave-ripple {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            filter: drop-shadow(0 0 15px #00ff88);
          }
          25% {
            transform: translate(-50%, -50%) scale(1.1) rotate(5deg);
            filter: drop-shadow(0 0 25px #00ff88);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            filter: drop-shadow(0 0 35px #00ff88);
          }
          75% {
            transform: translate(-50%, -50%) scale(1.1) rotate(-5deg);
            filter: drop-shadow(0 0 25px #00ff88);
          }
        }
        
        @keyframes gravwave-ripple-fast {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            filter: drop-shadow(0 0 20px #00ff88) drop-shadow(0 0 15px rgba(255,0,0,0.8));
          }
          50% {
            transform: translate(-50%, -50%) scale(1.3);
            filter: drop-shadow(0 0 40px #00ff88) drop-shadow(0 0 30px rgba(255,0,0,1));
          }
        }
        
        @keyframes asteroidbelt-rotate {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) scale(1);
          }
        }
        
        @keyframes asteroidbelt-rotate-fast {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
            filter: drop-shadow(0 0 15px rgba(255,0,0,0.8));
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) scale(1);
            filter: drop-shadow(0 0 15px rgba(255,0,0,0.8));
          }
        }
        
        @keyframes cometcluster-move {
          0%, 100% {
            transform: translate(-50%, -50%) translateX(0) translateY(0);
            filter: drop-shadow(0 0 15px #60a5fa);
          }
          50% {
            transform: translate(-50%, -50%) translateX(5px) translateY(-5px);
            filter: drop-shadow(0 0 25px #60a5fa);
          }
        }
        
        @keyframes cometcluster-move-fast {
          0%, 100% {
            transform: translate(-50%, -50%) translateX(0) translateY(0);
            filter: drop-shadow(0 0 20px #60a5fa) drop-shadow(0 0 15px rgba(255,0,0,0.8));
          }
          50% {
            transform: translate(-50%, -50%) translateX(8px) translateY(-8px);
            filter: drop-shadow(0 0 35px #60a5fa) drop-shadow(0 0 25px rgba(255,0,0,1));
          }
        }
        
        @keyframes starcluster-twinkle {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
            filter: drop-shadow(0 0 15px #fbbf24);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 1;
            filter: drop-shadow(0 0 30px #fbbf24) drop-shadow(0 0 60px #fbbf24);
          }
        }
        
        @keyframes starcluster-twinkle-fast {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
            filter: drop-shadow(0 0 20px #fbbf24) drop-shadow(0 0 15px rgba(255,0,0,0.8));
          }
          50% {
            transform: translate(-50%, -50%) scale(1.25);
            opacity: 1;
            filter: drop-shadow(0 0 40px #fbbf24) drop-shadow(0 0 30px rgba(255,0,0,1));
          }
        }
        
        @keyframes whitedwarf-glow {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            filter: drop-shadow(0 0 20px #ffffff) drop-shadow(0 0 40px #ffffff);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            filter: drop-shadow(0 0 30px #ffffff) drop-shadow(0 0 60px #ffffff);
          }
        }
        
        @keyframes whitedwarf-glow-fast {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            filter: drop-shadow(0 0 25px #ffffff) drop-shadow(0 0 50px #ffffff) drop-shadow(0 0 20px rgba(255,0,0,0.8));
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            filter: drop-shadow(0 0 40px #ffffff) drop-shadow(0 0 80px #ffffff) drop-shadow(0 0 30px rgba(255,0,0,1));
          }
        }
        
        @keyframes neutronstar-pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            filter: drop-shadow(0 0 25px #00ffff) drop-shadow(0 0 50px #00ffff);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            filter: drop-shadow(0 0 40px #00ffff) drop-shadow(0 0 80px #00ffff);
          }
        }
        
        @keyframes neutronstar-pulse-fast {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            filter: drop-shadow(0 0 30px #00ffff) drop-shadow(0 0 60px #00ffff) drop-shadow(0 0 20px rgba(255,0,0,0.8));
          }
          50% {
            transform: translate(-50%, -50%) scale(1.3);
            filter: drop-shadow(0 0 50px #00ffff) drop-shadow(0 0 100px #00ffff) drop-shadow(0 0 35px rgba(255,0,0,1));
          }
        }
        
        @keyframes rainbow-text {
          0% { color: #ff0000; }
          16% { color: #ff8800; }
          33% { color: #ffff00; }
          50% { color: #00ff00; }
          66% { color: #0088ff; }
          83% { color: #8800ff; }
          100% { color: #ff0000; }
        }
        
        .animate-rainbow-text {
          animation: rainbow-text 1s linear infinite;
        }
        
        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-float-slow-delay {
          animation: float-slow-delay 25s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-fade-in-up-delay {
          animation: fade-in-up 1s ease-out 0.3s both;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `})]})},Wt=Object.freeze(Object.defineProperty({__proto__:null,default:Rt},Symbol.toStringTag,{value:"Module"}));export{Ft as E,Tt as a,We as b,Wt as c,Et as i,N as l,S as s,F as u};
