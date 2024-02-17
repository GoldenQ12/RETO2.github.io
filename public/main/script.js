// * Slider function

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const items = document.querySelectorAll('.items');
let index = 0;

prev.addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    UpdateSlider();
});

next.addEventListener('click', () => {
    index = (index + 1 + items.length) % items.length;
    UpdateSlider();
});

function UpdateSlider(){
    for (let i = 0; i < items.length; i++){
        items[i].classList.remove('active');
    }
    items[index].classList.add('active');
}

// * Loader 
function Loader(){
    const loader = document.getElementById('loading');
    let percentage = 0;
    const all = document.querySelector('.all');
    let interval = setInterval(() => {
        percentage += 10;
        loader.innerHTML = "Cargando...";
        if (percentage >= 100){
            clearInterval(interval);
            loader.innerHTML = "Cargando... 100%";
        }
        setTimeout(() => {
            document.querySelector('.logo-loader').style.display = "none";
            all.style.scale = "1";
        }, 200);
    }, 200);
};
// MOBILE SETTINGS
const showcase = document.querySelector('.showcase');
    function ShowItem (){
        const show = document.querySelector('.show');
        showcase.classList.toggle('active');
        show.classList.toggle('active');
    }
showcase.addEventListener('click', ShowItem)
console.log(showcase)
Loader();


