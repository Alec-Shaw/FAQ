let cards = document.querySelectorAll('.box')


let tegs = document.getElementById("tegs");
let gfx = document.getElementById("gfx");
let chim = document.getElementById("chim");
let mountSauna = document.getElementById("accordion-faqmount");
let expoSauna = document.getElementById("accordion-faqexpo");
let problemSauna = document.getElementById("accordion-faqproblem");
let mountBah = document.getElementById("accordion-faqMountBah");
let exptBah = document.getElementById("accordion-expbah");




function mount() {

    mountSauna.classList.toggle('active');

}

function saunaexpo() {

    expoSauna.classList.toggle('active');

}

function saunaproblem() {

    problemSauna.classList.toggle('active');

}

function bahmount() {

    mountBah.classList.toggle('active');

}

function bahexp() {

    exptBah.classList.toggle('active');

}

tegs.addEventListener('click', function () {

    document.getElementById("searchbox").value = '';
    document.getElementById("searchbox").value += tegs.dataset.value;
    liveSearch()
});

gfx.addEventListener('click', function () {

    document.getElementById("searchbox").value = '';
    document.getElementById("searchbox").value += gfx.dataset.value;
    liveSearch()

});

chim.addEventListener('click', function () {

    document.getElementById("searchbox").value = '';
    document.getElementById("searchbox").value += chim.dataset.value;
    liveSearch()

});



function liveSearch() {

    let search_query = document.getElementById("searchbox").value;
    //Use innerText if all contents are visible
    //Use textContent for including hidden elements
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].textContent.toLowerCase()
            .includes(search_query.toLowerCase())) {
            cards[i].classList.remove("is-hidden");
            cards[i].classList.add("found");
            document.querySelector('.found').scrollIntoView({ block: 'center' });
            mountSauna.classList.remove('active');
            expoSauna.classList.remove('active');
            problemSauna.classList.remove('active');
            mountBah.classList.remove('active');
            exptBah.classList.remove('active');

        } else {
            cards[i].classList.add("is-hidden");
            cards[i].classList.remove("found");
            mountSauna.classList.add('active');
            expoSauna.classList.add('active');
            problemSauna.classList.add('active');
            mountBah.classList.add('active');
            exptBah.classList.add('active');
        }
    }
}

//A little delay
let typingTimer;
let typeInterval = 100;
let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
});