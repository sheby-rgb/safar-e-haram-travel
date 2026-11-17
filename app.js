
const CONFIG={whatsapp:'923335511123',company:'SAFAR-E-HARAM TRAVEL AND TOURS (PRIVATE) LIMITED'};
const $=s=>document.querySelector(s);
const wa=(message)=>window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`,'_blank','noopener');
$('#year').textContent=new Date().getFullYear();
$('#menuToggle').addEventListener('click',()=>$('#navLinks').classList.toggle('mobile-open'));
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>$('#navLinks').classList.remove('mobile-open')));
$('#inquiryForm').addEventListener('submit',e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.currentTarget));const msg=`${CONFIG.company} — Website Inquiry\nName: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email||'Not provided'}\nService: ${d.service}\nDestination: ${d.destination||'Not provided'}\nTravel date: ${d.date||'Not provided'}\nTravellers: ${d.people||'Not provided'}\nMessage: ${d.message||'Not provided'}`;wa(msg);$('#formNotice').textContent='WhatsApp opened with your inquiry. Please press Send in WhatsApp to submit it.'});
$('#quickSearch').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);$('#service').value=d.get('service');$('#destination').value=d.get('destination')||'';document.querySelector('#contact').scrollIntoView({behavior:'smooth'});});
document.querySelectorAll('.faq button').forEach(b=>b.addEventListener('click',()=>b.parentElement.classList.toggle('open')));
const chat=$('#chatbox'),chatBody=$('#chatBody');$('#chatOpen').onclick=()=>chat.classList.add('show');$('#chatClose').onclick=()=>chat.classList.remove('show');
function botAnswer(text){const q=text.toLowerCase();
if(/salam|assalam|hello|hi\b/.test(q))return'Wa Alaikum Assalam! Welcome to Safar-e-Haram. Aap kis service ke bare mein maloomat chahte hain?';
if(/hajj|haj|umrah|umra/.test(q))return'Hajj aur Umrah planning ke liye expected travel date, travellers ki tadaad aur preferred package share karein. Package details, availability aur current charges team se confirm honge.';
if(/visa|student|work|business|visit|embassy|document/.test(q))return'Worldwide visa assistance ke liye destination country, travel purpose aur planned date batayein. Documents, fees aur processing times case aur embassy ke mutabiq change hote hain. Visa approval embassy ka decision hota hai aur guarantee nahi ki ja sakti.';
if(/flight|ticket|airfare|fare/.test(q))return'Flight inquiry ke liye departure city, destination, date aur passengers ki tadaad share karein. Live fares is demo chatbot mein available nahi; team se current fare confirm karein.';
if(/hotel|room|stay|reservation/.test(q))return'Hotel inquiry ke liye city, check-in/check-out dates aur guests/rooms ki tadaad bhejein. Availability aur final price confirm karna zaroori hai.';
if(/tour|trip|package|destination/.test(q))return'Tour planning ke liye destination, dates, budget range aur travellers ki tadaad batayein. Team suitable options discuss kar sakti hai.';
if(/contact|phone|number|whatsapp|call/.test(q))return'WhatsApp: 0333-5511123. Aap website inquiry form se bhi apni details bhej sakte hain.';
if(/price|cost|fee|charge|rate|kitna|paisa/.test(q))return'Exact charges service, destination, travel dates aur applicant details par depend karte hain. Current quote ke liye inquiry bhejein.';
return'Mujhe thori aur detail dein: kya aap Hajj/Umrah, visa, flight, hotel ya tour ke bare mein pooch rahe hain? Aap inquiry form se team ko message bhi bhej sakte hain.'}
function bubble(t,who){const el=document.createElement('div');el.className='bubble'+(who==='user'?' user':'');el.textContent=t;chatBody.appendChild(el);chatBody.scrollTop=chatBody.scrollHeight}
function ask(t){if(!t.trim())return;bubble(t,'user');setTimeout(()=>bubble(botAnswer(t),'bot'),150)}
$('#chatForm').addEventListener('submit',e=>{e.preventDefault();const input=$('#chatInput');ask(input.value);input.value=''});
document.querySelectorAll('[data-question]').forEach(b=>b.addEventListener('click',()=>ask(b.dataset.question)));
