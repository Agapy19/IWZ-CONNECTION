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
        if (item.id != 'notifications') {
            document.querySelector('.container-notification').
            style.display = 'none';
        }
        else{
            document.querySelector('.container-notification').
            style.display = 'block';
            document.querySelector('#notifications .notification-count')
            .style.display = 'none';
        }
    })
})