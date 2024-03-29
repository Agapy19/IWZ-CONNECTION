// NAV
const sideBarMenu = document.querySelectorAll('.side-bar__menu');

// message
const messages = document.querySelector('#message');
const rigthMessages = document.querySelector('.rigth-messages');
const message = rigthMessages.querySelectorAll('.messages-message');
const messageSeach = document.querySelector('#message-seach');

// thème
const theme = document.querySelector('#theme');
const containerCustomize = document.querySelector('.container-customize');

const changeActiveMenu = () => {
    sideBarMenu.forEach(item => {
        item.classList.remove('active');
    })
}

sideBarMenu.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveMenu();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.container-notification').
                style.display = 'none';
        }
        else {
            document.querySelector('.container-notification').
                style.display = 'block';
            document.querySelector('#notifications .notification-count')
                .style.display = 'none';
        }
    })
})
// messages
const search = () =>{
    const valeur = messageSeach.value.toLowerCase();
    message.forEach(user =>{
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(valeur) != -1)  {
            user.style.display = 'flex';
        }
        else{
            user.style.display = 'none';

        }
    })
}

messageSeach.addEventListener('keyup', search);

message.addEventListener('click', () => {
    rigthMessages.style.boxShadow = '0 0 1rem var( --primary-color)';
    messages.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000);
})

// thème
const openContainerCustomize = () =>{
    containerCustomize.style.display = 'grid';
}

theme.addEventListener('click', openContainerCustomize
);
