// NAV
const sideBarMenu = document.querySelectorAll('.side-bar__menu');

const changeActiveMenu = () =>{
    sideBarMenu.forEach(item =>{
        item.classList.remove('active');
    })
}

sideBarMenu.forEach(item =>{
    item.addEventListener('click', () =>{
        changeActiveMenu();
        item.classList.add('active');
        
    })
})