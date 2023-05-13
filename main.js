
if (window.matchMedia("(max-width: 480px)").matches) {
    document.getElementById("nav-responsive").addEventListener("click",function(){
        document.getElementById("nav-list").classList.toggle("hidden")
     })
  }
  