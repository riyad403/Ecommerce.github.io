/*Hamber*/
var hamber = document.querySelector('.hambar')
document.querySelector('.hambar').addEventListener('click', ()=>{
    document.querySelector('.nav-list').classList.toggle('list-resp')
    document.querySelector('.nav').classList.toggle('nav-resp')
})


document.querySelector('.searchbar').style.display = 'none'
var search = document.querySelector('.search')
document.querySelector('.search').addEventListener('click', ()=>{
    search.classList.toggle('.searchbar')
    if(search.classList.contains('.searchbar')){
        document.querySelector('.searchbar').style.display = 'inline'
    }
    else{
        document.querySelector('.searchbar').style.display = 'none'
    }
})
var favorite = document.querySelector('.love')
document.querySelector('.frgo').style.display = 'none'
document.querySelector('.love').addEventListener('click', ()=>{
    favorite.classList.toggle('.favorite')
    if(favorite.classList.contains('.favorite')){
        document.querySelector('.frgo').style.display = 'inline'    
    }
    else{
        document.querySelector('.frgo').style.display = 'none'
    }
})

document.querySelector('.login-none').style.display = 'none'
var login = document.querySelector('.login')
document.querySelector('.login').addEventListener('click', ()=>{
    login.classList.toggle('.login-none')
    if(login.classList.contains('.login-none')){
        document.querySelector('.login-none').style.display = 'inline'
    }
    else{
        document.querySelector('.login-none').style.display = 'none'
    }
})