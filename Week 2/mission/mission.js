const themeSelector = document.getElementById('themeSelector')
function changeTheme() {
    const currentTheme = themeSelector.value;

    const body = document.body;
    let logo = document.querySelector('.logo'); 

    if (currentTheme == 'dark') {
        body.classList.add('dark');
        logo.src = 'byui_logo_black.png'
    }
    else {
        body.classList.remove('dark');
        logo.src = 'byui_logo_blue.webp'
    }
}

themeSelector.addEventListener('change', changeTheme);