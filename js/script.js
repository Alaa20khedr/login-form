let links=document.querySelector("#links")
let userinfo=document.querySelector("#user-info")
let user=document.querySelector("#user")



if(localStorage.getItem("username")){
    links.remove()
    userinfo.style.display="block"
    user.innerHTML=localStorage.getItem("username")

}