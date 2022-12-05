function showLoading(){
    document.getElementById("loading").style.display = "flex"
}
function hideLoading(){
    const loadings = document.getElementsByClassName("loading");
    if (loadings.length){
        loadings[0].remove();
    }
}