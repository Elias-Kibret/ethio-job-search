var show=false;
document.getElementsByClassName('menu')[0].addEventListener('click',function(event){
     if(!show){
        document.getElementById("menu").style.display="block";
        show=true;
     }
     else{
        document.getElementById("menu").style.display="none";
        show=false; 
     }
    
})