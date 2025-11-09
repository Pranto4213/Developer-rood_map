document.getElementById('get-btn').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('sign_up').classList.remove('hidden')
    document.getElementById('banner-section').classList.add('hidden')

})


document.getElementById('sign').addEventListener('click', function(){
   const password= document.getElementById('pass').value;
//    const banner =document.getElementById('banner-section')
  
   const main =document.getElementById('main')
//    const signSection =document.getElementById('sign_up')

if(password==='123456'){
    document.getElementById('banner-section').classList.add('hidden');
    // signSection.classList.add('hidden');
    const signSection =document.getElementById('sign_up').classList.add('hidden')
    return;
}

else{
    alert("something was wrong")
}
 
})


document.getElementById('web-btn').addEventListener('click', function(){
    document.getElementById('web').classList.remove('hidden')
    document.getElementById('backend').classList.add('hidden')
    document.getElementById('game').classList.add('hidden')
    document.getElementById('app').classList.add('hidden')
})
document.getElementById('app-btn').addEventListener('click', function(){
    document.getElementById('web').classList.add('hidden')
    document.getElementById('backend').classList.add('hidden')
    document.getElementById('game').classList.add('hidden')
    document.getElementById('app').classList.remove('hidden')
})
document.getElementById('game-btn').addEventListener('click', function(){
    document.getElementById('web').classList.add('hidden')
    document.getElementById('backend').classList.add('hidden')
    document.getElementById('game').classList.remove('hidden')
    document.getElementById('app').classList.add('hidden')
})
document.getElementById('backend-btn').addEventListener('click', function(){
    document.getElementById('web').classList.add('hidden')
    document.getElementById('backend').classList.remove('hidden')
    document.getElementById('game').classList.add('hidden')
    document.getElementById('app').classList.add('hidden')
})