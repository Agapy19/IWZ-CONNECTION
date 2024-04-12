// NAV
const sideBarMenu = document.querySelectorAll('.side-bar__menu');

// message
const messages = document.querySelector('#message');
const rigthMessages = document.querySelector('.rigth-messages');
const message = rigthMessages.querySelectorAll('.messages-message');
const messageSeach = document.querySelector('#message-seach');

// thème
const theme = document.querySelector('#themes');
const containerCustomize = document.querySelector('.container-customize');
const fontSizes = document.querySelectorAll('.font-size span');
var root = document.querySelector(':root');
const colors = document.querySelectorAll('.color span');
const theme1 = document.querySelector('.theme1');
const theme2 = document.querySelector('.theme2');
const theme3 = document.querySelector('.theme3');

// publication
const publicationSearch = document.querySelector("#search-publication");
const publication = document.querySelectorAll(".feed");



// invitations
const acceptButtons = document.querySelectorAll('.btn.btn-primary');
const rejectButtons = document.querySelectorAll('.btn:not(.btn-primary)');


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
sideBarMenu.forEach(item => {
    item.addEventListener('click', () => {
        rigthMessages.style.boxShadow = '0 0 1rem var( --primary-color)'
        item.classList.add('active');
        if (item.id != 'message') {
            document.querySelector('.rigth-messages').
                style.display = 'none';
        }
        else {
            document.querySelector('.rigth-messages').
                style.display = 'block';
            document.querySelector('#message .notification-count')
                .style.display = 'none';
        }
    })
})

// thème
// ouvrire le theme
const openTheme = () => {
    containerCustomize.style.display = "grid";
}

// fermer
const closeTheme = (e) => {
    if (e.target.classList.contains('container-customize')) {
        containerCustomize.style.display = 'none';
    }
}
containerCustomize.addEventListener('click', closeTheme);
theme.addEventListener('click', openTheme);




// fontSize
const deleteSizeSelector = () => {

    fontSizes.forEach(size => {
        size.classList.remove('active');

    })

}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        deleteSizeSelector();
        let fontSize;
        size.classList.toggle('active');


        if (size.classList.contains('font-size1')) {
            fontSize = "9px";
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');

        }
        else if (size.classList.contains('font-size2')) {
            fontSize = "13px";
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }
        else if (size.classList.contains('font-size3')) {
            fontSize = "16px";
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');

        }
        else if (size.classList.contains('font-size4')) {
            fontSize = "19px";
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');

        }
        else if (size.classList.contains('font-size5')) {
            fontSize = "22px";
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');

        }
        else if (size.classList.contains('font-size6')) {
            fontSize = "23px";
            root.style.setProperty('----sticky-top-left', '-13rem');
            root.style.setProperty('----sticky-top-right', '-36rem');

        }
        else if (size.classList.contains('font-size7')) {
            fontSize = "24px";
            root.style.setProperty('----sticky-top-left', '-3rem');
            root.style.setProperty('----sticky-top-right', '-18rem');

        }
        document.querySelector('html').style.fontSize = fontSize;
    });

})

const deleteColorSelector = () => {
    colors.forEach(colorActive => {
        colorActive.classList.remove('active');
    })
}

// couleurs
colors.forEach(color => {
    let primary;
    deleteColorSelector();
    color.addEventListener('click', () => {
        if (color.classList.contains('color-1')) {
            primary = '#E4405F';
            root.style.setProperty('--primary-color', '#E4405F');
        } else if (color.classList.contains('color-2')) {
            primary = 'hsl(252, 75%, 60%)'
            root.style.setProperty('--move-color', 'hsl(252, 75%, 60%)');
        } else if (color.classList.contains('color-3')) {
            primary = 'hsl(120, 95%, 65%)';
            root.style.setProperty('--green-color', 'hsl(120, 95%, 65%)');
        } else if (color.classList.contains('color-4')) {
            primary = 'hsl(202, 75%, 60%)';
            root.style.setProperty('--blue-color', 'hsl(202, 75%, 60%)');
        } else if (color.classList.contains('color-5')) {
            primary = '#f56781be';
            root.style.setProperty('--secondary-color', '#f56781be');
        } else if (color.classList.contains('color-6')) {
            primary = 'hsl(152, 75%, 60%)';
            root.style.setProperty('--green-clair-color', 'hsl(152, 75%, 60%)');
        } else if (color.classList.contains('color-7')) {
            primary = 'hsl(16, 75%, 50%))';
            root.style.setProperty('--orangee-color', 'hsl(16, 75%, 50%)');
        }

        color.classList.add('active');
        document.querySelector('html').style.color = primary;

    });
});

// background
let darkColorLight;
let lightColorHue;
let whiteColorHue;

const changeTheme = () => {
    root.style.setProperty('--light-color-hue', lightColorHue);
    root.style.setProperty('--white-color-hue', whiteColorHue);
    root.style.setProperty('--dark-color-light', darkColorLight);


}
theme1.addEventListener('click', () =>{


    theme1.classList.add('active');
    theme2.classList.remove('active');
    theme3.classList.remove('active');
    window.location.reload();

});

theme2.addEventListener('click', () =>{
    darkColorLight = '95%';
    whiteColorHue = '20%';
    lightColorHue = '15%';

    theme2.classList.add('active');
    theme1.classList.remove('active');
    theme3.classList.remove('active');
    changeTheme();

});

theme3.addEventListener('click', () =>{
    darkColorLight = '95%';
    whiteColorHue = '10%';
    lightColorHue = '0%';

    theme3.classList.add('active');
    theme1.classList.remove('active');
    theme2.classList.remove('active');
    changeTheme();

});

// messages
const search = () => {
    const valeur = messageSeach.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(valeur) != -1) {
            user.style.display = 'flex';
        }
        else {
            user.style.display = 'none';

        }
    })
}

messageSeach.addEventListener('keyup', search);

// message.addEventListener('click', () => {
//     rigthMessages.style.boxShadow = '0 0 1rem var( --primary-color)';
//     messages.querySelector('.notification-count').style.display = 'none';
//     setTimeout(() => {
//         messages.style.boxShadow = 'none'
//     }, 2000);
// })
// Publication
const research = () => {
    const val = publicationSearch.value.toLowerCase();
    publication.forEach(user => {
        let name = user.querySelector('h3').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        }
        else{
            user.style.display = "none"
        }
    })

}
publicationSearch.addEventListener('keyup', research);

// like

let likeCount = 0;
let isLiked = false;

// Fonction pour incrémenter le compteur de likes et mettre à jour l'affichage
function addLike() {
    console.log("Like button clicked");
    if (!isLiked) {
        likeCount++;
        console.log("Like added");
        document.querySelector('#likeCount').textContent = likeCount;
        document.querySelector('#likeIcon').classList.add('likee');
        isLiked = true;
    } else {
        likeCount--;
        console.log("Like removed");
        document.getElementById('likeCount').textContent = likeCount;
        document.getElementById('likeIcon').classList.remove('likee');
        isLiked = false;
    }
}
console.log("Adding event listener to like icon");
document.getElementById('likeIcon').addEventListener('click', addLike);

// Abonnement
acceptButtons.forEach(button => {
    button.addEventListener('click', () => {
        const friendRequest = button.closest('.friend-request');
        const requestInfo = friendRequest.querySelector('.request-info');
        const friendName = requestInfo.querySelector('h5').textContent;
        
       
        friendRequest.parentElement.removeChild(friendRequest);
        
        alert(`Vous avez accepté l'invitation de ${friendName}`);
    });
});


rejectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const friendRequest = button.closest('.friend-request');
        const requestInfo = friendRequest.querySelector('.request-info');
        const friendName = requestInfo.querySelector('h5').textContent;
        
       
        friendRequest.parentElement.removeChild(friendRequest);
        
        alert(`Vous avez refusé l'invitation de ${friendName}`);
    });
});