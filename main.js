// NAV
const sideBarMenu = document.querySelectorAll('.side-bar__menu');

// message
const messages = document.querySelector('#message');
const rigthMessages = document.querySelector('.rigth-messages');
const message = messages.querySelectorAll('.messages-message');
const messageSeach = document.querySelector('#message-seach');

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

message.addEventListener('click', () =>{
    rigthMessages.style.boxShadow = '0 0 1rem var( --primary-color)';
    messages.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000);
})
