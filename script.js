const words = ["Discover", "Craft", "Savor"];
let index = 0;

setInterval(() => {
    const wordElement = document.getElementById("word");
    index = (index + 1) % words.length;
    wordElement.style.animation = 'none';
    wordElement.textContent = words[index];
    wordElement.offsetHeight;
    wordElement.style.animation = 'slide 2s infinite';
}, 2000);


const signupwindowbg = document.getElementById('signupwindowbg');
const signupContentWindow = document.getElementById('signupwindow');
const signpop = document.getElementById('signup');
const signpop1 = document.getElementById('signup1');

const loginwindowbg = document.getElementById('loginwindowbg');
const loginContentWindow = document.getElementById('loginwindow');
const loginpop = document.getElementById('login');

// Signup button click event
signpop.addEventListener('click', () => {
    signupwindowbg.classList.remove('hidden');
});

signpop1.addEventListener('click', () => {
    signupwindowbg.classList.remove('hidden');
});

// Close signup window when clicking outside the form
signupwindowbg.addEventListener('click', (event) => {
    if (!signupContentWindow.contains(event.target)) {
        signupwindowbg.classList.add('hidden');
    }
});

// Login button click event
loginpop.addEventListener('click', () => {
    console.log('Login button clicked');
    loginwindowbg.classList.remove('hidden');
});

// Close login window when clicking outside the form
loginwindowbg.addEventListener('click', (event) => {
    if (!loginContentWindow.contains(event.target)) {
        loginwindowbg.classList.add('hidden');
    }
});