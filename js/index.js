document.getElementById('btn-login').addEventListener('click',function(){
    const userName=document.getElementById('user').value;
    const userPass=document.getElementById('pass').value;

    if(userName==='ABC' && userPass==="12345")
    {
        window.location.href = "home_page.html";
    }
    else{
        alert('wrong user pass/id');
    }
});