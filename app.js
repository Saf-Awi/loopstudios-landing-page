const openMenu = document.getElementById('openMenu');
const sideBar = document.getElementById('sideNav');
const closeMenu = document.getElementById('closeMenu');

function openSideBar () {
    sideBar.style.display = 'flex';

}

function closeSideBar () {
    sideBar.style.display = 'none';
}

function returnDefault () {
    sideBar.style.display = 'none';
}


function handleWindowResize() {
    const windowWidth = window.innerWidth;

    if (windowWidth > 768) {
        openSideBar(); 
        openMenu.style.display = 'none'; 
        openMenu.removeEventListener('click', openSideBar);
    } else {
        returnDefault();
        openMenu.style.display = 'block';
        openMenu.addEventListener('click', openSideBar);
    }
}

handleWindowResize();

window.addEventListener('resize', handleWindowResize);
closeMenu.addEventListener('click', closeSideBar);



