const advice=document.getElementById('advice')
const btn=document.getElementById('advice_Btn')
const likeBtn=document.getElementById('like-btn')
const fav=document.getElementById('fav_list')

function fetchAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then(res=>res.json())
    .then(data=>{
        advice.textContent=data.slip.advice
    }).catch(error=>{
        console.error('error fetching advice',error);
    }) 

}fetchAdvice()

btn.addEventListener('click',fetchAdvice)


likeBtn.addEventListener('click',()=>{
    const newAdvice = advice.textContent.trim()
    if(newAdvice){
const li= document.createElement('li')
li.textContent = newAdvice
fav.appendChild(li)
const span=document.createElement('span')
span.textContent='x'
li.append(span)
    } saveAdvice()

})
fav.addEventListener('click',removeFav)
function removeFav(e){
    if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove()
        saveAdvice()
    }
}
// likeBtn.classList.add('activated')
// if(!likeBtn.classList.contains('activated')){
//     likeBtn.style.background='white'
// }else{
// likeBtn.style.background='red'
// }
function saveAdvice(){
    localStorage.setItem('advice',fav.innerHTML)
}
function saveFav(){
    fav.innerHTML=localStorage.getItem('advice')
}saveFav()