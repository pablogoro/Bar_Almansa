function active(event) {
    console.log(event.target)
    remove();
    event.target.classList.add("active");
    event.target.setAttribute('id', 'active');


}

function remove() {
    document.getElementById("active").classList.remove("active");
    document.getElementById("active").removeAttribute("id");
}