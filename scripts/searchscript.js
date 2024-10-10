let cards = document.querySelectorAll('.box')


let tegs = document.getElementById("tegs");
let gfx = document.getElementById("gfx");
let chim = document.getElementById("chim");
let mountSauna = document.getElementById("accordion-faqmount");
let expoSauna = document.getElementById("accordion-faqexpo");
let problemSauna = document.getElementById("accordion-faqproblem");
let mountBah = document.getElementById("accordion-faqMountBah");
let exptBah = document.getElementById("accordion-expbah");
let problemtBah = document.getElementById("accordionFlushExample");



function mount() {

    mountSauna.classList.toggle('active');

    if (problemtBah.classList.contains('active') || exptBah.classList.contains('active') || problemSauna.classList.contains('active') || mountBah.classList.contains('active') || expoSauna.classList.contains('active')) {
        exptBah.classList.remove('active');
        problemSauna.classList.remove('active');
        expoSauna.classList.remove('active');
        mountBah.classList.remove('active');
        problemtBah.classList.remove('active');
    }

}

function saunaexpo() {

    expoSauna.classList.toggle('active');

    if (problemtBah.classList.contains('active') || exptBah.classList.contains('active') || problemSauna.classList.contains('active') || mountBah.classList.contains('active') || mountSauna.classList.contains('active')) {
        exptBah.classList.remove('active');
        problemSauna.classList.remove('active');
        mountSauna.classList.remove('active');
        mountBah.classList.remove('active');
        problemtBah.classList.remove('active');
    }

}

function saunaproblem() {

    problemSauna.classList.toggle('active');

    if (problemtBah.classList.contains('active') || exptBah.classList.contains('active') || expoSauna.classList.contains('active') || mountBah.classList.contains('active') || mountBah.classList.contains('active')) {
        exptBah.classList.remove('active');
        expoSauna.classList.remove('active');
        mountSauna.classList.remove('active');
        mountBah.classList.remove('active');
        problemtBah.classList.remove('active');
    }

}

function bahmount() {

    mountBah.classList.toggle('active');

    if (problemtBah.classList.contains('active') || exptBah.classList.contains('active') || expoSauna.classList.contains('active') || problemSauna.classList.contains('active') || mountSauna.classList.contains('active')) {
        exptBah.classList.remove('active');
        expoSauna.classList.remove('active');
        problemSauna.classList.remove('active');
        mountSauna.classList.remove('active');
        problemtBah.classList.remove('active');
    }

}

function bahexp() {

    exptBah.classList.toggle('active');

    if (problemtBah.classList.contains('active') || mountSauna.classList.contains('active') || expoSauna.classList.contains('active') || problemSauna.classList.contains('active') || mountBah.classList.contains('active')) {
        mountSauna.classList.remove('active');
        expoSauna.classList.remove('active');
        problemSauna.classList.remove('active');
        mountBah.classList.remove('active');
        problemtBah.classList.remove('active');
    }

}

function bahproblem() {

    problemtBah.classList.toggle('active');

    if (exptBah.classList.contains('active') || mountSauna.classList.contains('active') || expoSauna.classList.contains('active') || problemSauna.classList.contains('active') || mountBah.classList.contains('active')) {
        mountSauna.classList.remove('active');
        expoSauna.classList.remove('active');
        problemSauna.classList.remove('active');
        mountBah.classList.remove('active');
        exptBah.classList.remove('active');
    }


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

    if (!(search_query === "")) {
        problemtBah.style.display = "block";
        problemSauna.style.display = "block";
        mountBah.style.display = "block";
        expoSauna.style.display = "block";
        mountSauna.style.display = "block";
        exptBah.style.display = "block";
    } else {
        problemtBah.style.display = "";
        problemSauna.style.display = "";
        mountBah.style.display = "";
        expoSauna.style.display = "";
        mountSauna.style.display = "";
        exptBah.style.display = "";
    }

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
            problemtBah.classList.remove('active');

        } else {
            cards[i].classList.add("is-hidden");
            cards[i].classList.remove("found");
            mountSauna.classList.add('active');
            expoSauna.classList.add('active');
            problemSauna.classList.add('active');
            mountBah.classList.add('active');
            exptBah.classList.add('active');
            problemtBah.classList.add('active');
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
