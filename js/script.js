const customers = document.querySelector('.customers__inner');

const toggleMenu = document.querySelector('.header__toggle');

const signupBtn = document.querySelector('.header__register');
const signupForm = document.querySelector('.pop-up');
const signupClose = document.querySelector('.pop-up__close');

signupBtn.onclick = () => {
    signupForm.style.display = 'flex';
}

signupClose.onclick = () => {
    signupForm.style.display = 'none';
}

toggleMenu.onclick = () => {
    document.querySelector('.header__menu').classList.toggle('active');
}