var textEl = document.getElementById("textarea");
var char01El = document.getElementById('l2');
var char02El = document.getElementById('l1');

textEl.addEventListener('keyup', () => {
    counter();
})

function counter(){
    char01El.innerText = textEl.value.length
    char02El.innerText = 100 - textEl.value.length
}