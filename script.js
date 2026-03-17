// abrir os links
document.querySelectorAll('.btn-regiao').forEach(button => {
button.addEventListener('click', () => {
const url = button.getAttribute('data-link')
if(url){
window.open(url,'_blank')
}
})
})
// BUSCA DE SISTEMAS
const input = document.getElementById("buscarSistema")
const resultados = document.getElementById("resultadosBusca")
input.addEventListener("input", () => {
const valor = input.value.toLowerCase()
resultados.innerHTML=""
if(valor.length === 0){
resultados.style.display="none"
return
}
const filtrados = sistemas.filter(sistema =>
sistema.nome.toLowerCase().includes(valor)
)
filtrados.forEach(sistema => {
const item = document.createElement("div")
item.classList.add("resultado-item")
item.textContent = sistema.nome
item.addEventListener("click", () => {
window.open(sistema.link,"_blank")
})
resultados.appendChild(item)
})
resultados.style.display="block"
})


//link para buscas 

const sistemas = [
{nome:"SAP Maranhão", link:"http://unifica.equatorialenergia.com.br:9204/sap(bD1wdCZjPTQwMSZkPW1pbg==)/bc/bsp/sap/crm_ui_start/default.htm?sap-client=401&sap-language=PT"},
{nome:"SAP Pará", link:"http://unifica.equatorialenergia.com.br:9203/sap(bD1wdCZjPTQwMiZkPW1pbg==)/bc/bsp/sap/crm_ui_start/default.htm?sap-client=402&sap-language=PT"},
{nome:"SAP Piauí", link:"http://epispdccrm01.equatorial.corp:8000/sap/bc/bsp/sap/crm_ui_start/default.htm"},
{nome:"SAP Alagoas", link:"http://ealspdccrm01.equatorial.corp:8000/sap/bc/bsp/sap/crm_ui_start/default.htm"},
{nome:"SAP Amapá HANA", link:"https://ap-crm-prd.equatorial.corp:44301/sap(bD1wdCZjPTQwNQ==)/bc/bsp/sap/crm_ui_start/default.htm"},
{nome:"CBILL Goiás", link:"http://bm4e.equatorialenergia.com.br/cbill/"},
{nome:"CBILL Goiás 2", link:"http://bm4e.equatorialenergia.com.br/cbill/protected/home.do"},
{nome:"Backoffice Maranhão", link:"https://backoffice-ma.equatorialenergia.com.br"},
{nome:"Backoffice Pará", link:"https://backoffice-pa.equatorialenergia.com.br"},
{nome:"Backoffice Piaui", link:"https://backoffice-pi.equatorialenergia.com.br"},
{nome:"Backoffice Alagoas", link:"https://backoffice-al.equatorialenergia.com.br"},
{nome:"Backoffice Amapá", link:"https://backoffice-ap.equatorialenergia.com.br"},
{nome:"Backoffice Goiás", link:"https://backoffice-go.equatorialenergia.com.br"},
{nome:"Backoffice Rio Grande do Sul", link:"https://backoffice-rs.equatorialenergia.com.br"},
{nome:"Site Novo", link:"https://agenciavirtual.equatorialenergia.com.br/Backoffice"},
{nome:"Salesforce", link:"https://grupoequatorialenergia.my.salesforce.com/"},
{nome:"SICAP", link:"http://sistemassatelites.equatorial.corp"},
{nome:"CRM Plusoft", link:"http://10.1.1.191:8080/csicrm"},

{nome:"Portal do Colaborador", link:"https://portaldeservicos.equatorialenergia.com.br"},
{nome:"Universidade do Saber ", link:"https://equatorialenergia.learning.rocks/"},
{nome:"Genesys", link:"https://login.sae1.pure.cloud"},
{nome:"Sisfeedback", link:"https://sisfeedback.equatorialenergia.com.br"},
{nome:"Qulture.Rocks", link:"https://app.qulture.rocks/users/sign_in"},

{nome:"Carteiras MA", link:"carteiras-grupo-a/ma/ma.html"},
{nome:"Carteiras PA ", link:"carteiras-grupo-a/pa/pa.html"},
{nome:"Carteiras PI ", link:"carteiras-grupo-a/pi/PI.HTML"},
{nome:"Carteiras AL", link:"carteiras-grupo-a/al/al.html"},
{nome:"Carteiras AP", link:"carteiras-grupo-a/ap/ap.html"},
{nome:"Carteiras RS", link:"carteiras-grupo-a/rs/rs.html"},
{nome:"Carteiras GO", link:"carteiras-grupo-a/go/go.html"},
{nome:"Carteiras Grupo A", link:"carteiras-grupo-a/carteiras-grupo-a.html"},

{nome:"Contatos ", link:"contatos/geral.html"},
{nome:"E-mail", link:"contatos/email/email.html"},
{nome:"Telefones ", link:"contatos/telefone/telefone.html"},
{nome:"Script ", link:"script/script.html"},
{nome:"Orçamento de Conexão ", link:"script/CONEXÃO.pdf"},
{nome:"Parecer de Acesso ", link:"script/CONEXÃO.pdf"},
{nome:"Orçamento Estimado", link:"script/ESTIMADO.pdf"},
{nome:"Vistoria e Ligação", link:"script/VISTORIA.pdf"},
{nome:"Passo a Passo ", link:"passoapasso/geral.html"},
{nome:"Passo a Passo - SAP", link:"passoapasso/sap/sap.html"},
{nome:"Passo a Passo - CBILL", link:"passoapasso/cbill/cbill.html"},
{nome:"Configurações Sistemas ", link:"configuracao/index.html"},
{nome:"Configurações Sistemas - SAP LOGON", link:"configuracao/sap/CONFIGURAR SAP.pdf"},
{nome:"Configurações Sistemas - SAP (CODIGOS) ", link:"configuracao/sap/SAP.HTML"},
{nome:"Configurações Sistemas - CS ", link:"configuracao/cs/CS.pdf"},
{nome:"Configurações Sistemas - CRM PLUSOFT", link:"configuracao/crm/CONFIURAR PLUSOFT.pdf"},
{nome:"Sugestões ", link:"https://forms.office.com/r/9XcisMsN5x"},
{nome:"Aneel", link:"https://www2.aneel.gov.br/cedoc/ren20211000.html#_Toc195003907"},
{nome:"NT0020 ", link:"mais/NT.00020.EQTL-05-Conexao-de-Micro-e-Minigeracao-Distribuida-ao-Sistema-de-Distribuicao.pdf"},
{nome:"POP.00149 ", link:"mais/POP.01149.EQTL - 00 - POP.01149.EQTL- Solicitação de orçamento de conexão de MicroMinigeração Distribuída 1 1.pdf"},
{nome:"FLUXOGRAMA PLUSOFT ", link:"https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&target=blank&highlight=0000ff&edit=_blank&layers=1&nav=1&title=FLUXOGRAMA%20GD.html&dark=0#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1fo_8VFM9BiCJI-YMUb6Wz0AQ67D5_U1T%26export%3Ddownload#%7B%22pageId%22%3A%22Q93soQFbzneLG7lwXgAz%22%7D"},
{nome:"Passo a Passo - Cancelamento de SS CBILL", link:"passoapasso/cbill/ConCancelamento de SS.pdf"},
{nome:"Passo a Passo - LIGAÇÃO NOVA GRUPO A - CBILL", link:"passoapasso/cbill/LIGAÇÃO NOVA GRUPO A.pdf"},
{nome:"Passo a Passo - LIGAÇÃO NOVA BT (SEM VINCULO) CBILL", link:"passoapasso/cbill/LIGAÇÃO NOVA BT.pdf"},
{nome:"Passo a Passo - LIGAÇÃO NOVA BT(COM VINCULO) CBILL ", link:"passoapasso/cbill/LIGAÇÃO NOVA GD MICROGERAÇÃO.pdf"},
{nome:"Passo a Passo - Conexão Com Ligação Nova - SAP", link:"passoapasso/sap/Conexão Com Ligação Nova.pdf"},
{nome:"Passo a Passo - Comunicação Orçamento Conexão - SAP", link:"passoapasso/sap/Comunicação Orçamento Conexão.pdf"},
{nome:"Passo a Passo - Solicitação de Vistoria - SAP", link:"passoapasso/sap/Solicitação de Vistoria.pdf"},
{nome:"Passo a Passo - ATUALIZAÇÃO CADASTRAL - SAP", link:"passoapasso/sap/ATUALIZAÇÃO CADASTRAL.pdf"},
{nome:"Passo a Passo - CRIAÇÃO DE PARCEIRO DE NEGÓCIO E CC FICTÍCIA - SAP", link:"passoapasso/sap/CRIAÇÃO DE PARCEIRO DE NEGÓCIO E CC FICTÍCIA.pdf"},

//{nome:"nome do que que ", link:"link que quero incluir na pesquisa"}
]
input.addEventListener("keydown", e => {
if(e.key === "Enter"){
const primeiro = sistemas.find(s =>
s.nome.toLowerCase().includes(input.value.toLowerCase())
)
if(primeiro){
window.open(primeiro.link,"_blank")
}
}
})
/*paineis que interagem*/
function atualizarDashboard(){
  document.getElementById("demandasHoje").innerText = 58
  document.getElementById("conexoes").innerText = 6
  document.getElementById("vistorias").innerText = 7
  document.getElementById("orcamentos").innerText = 8
}
atualizarDashboard()
//deixar os numeros em movimentos
function animarNumero(id, valor){
let numero = 0
const elemento = document.getElementById(id)
const intervalo = setInterval(()=>{
numero++
elemento.innerText = numero
if(numero >= valor){
clearInterval(intervalo)
}
},20)
}
animarNumero("demandasHoje",58)
animarNumero("conexoes",6)
animarNumero("vistorias",7)
animarNumero("orcamentos",8)
// fazer a Galeria se movimentar 
const track = document.getElementById("galeriaTrack")
const slides = document.querySelectorAll(".slide")
const btnNext = document.getElementById("btnNext")
const btnPrev = document.getElementById("btnPrev")
const dotsContainer = document.getElementById("galeriaDots")
let index = 0
function slidesVisiveis(){
return window.innerWidth <= 768 ? 1 : 3
}
function criarDots(){
dotsContainer.innerHTML=""
let total = slides.length - slidesVisiveis() + 1
for(let i=0;i<total;i++){
const dot=document.createElement("div")
dot.classList.add("dot")
if(i===0) dot.classList.add("active")
dot.onclick=()=>irPara(i)
dotsContainer.appendChild(dot)
}
}
function atualizarDots(){
document.querySelectorAll(".dot").forEach((d,i)=>{
d.classList.toggle("active",i===index)
})
}
function irPara(i){
let max = slides.length - slidesVisiveis()
index=Math.max(0,Math.min(i,max))
let largura = slides[0].offsetWidth + 15
track.style.transform=`translateX(-${index*largura}px)`
atualizarDots()
}
btnNext.onclick=()=>{
let max = slides.length - slidesVisiveis()
index = index < max ? index+1 : 0
irPara(index)
}
btnPrev.onclick=()=>{
let max = slides.length - slidesVisiveis()
index = index > 0 ? index-1 : max
irPara(index)
}
// movimentar automaticamente
let autoplay=setInterval(()=>{
btnNext.click()
},2000)
//ONDE MODIFICA O TEMPO DE ROLAGEM AUTOMATICA 
track.addEventListener("mouseenter",()=>{
clearInterval(autoplay)
})
track.addEventListener("mouseleave",()=>{
autoplay=setInterval(()=>{
btnNext.click()
},2000)
})
window.addEventListener("resize",()=>{
criarDots()
irPara(0)
})
window.addEventListener("load",()=>{
criarDots()
})