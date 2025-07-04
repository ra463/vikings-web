const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeLogin = document.getElementById('closeLogin');
const closeRegister = document.getElementById('closeRegister');
const getStartedBtn = document.getElementById('getStartedBtn');

loginBtn.onclick = () => loginModal.style.display = 'block';
registerBtn.onclick = () => registerModal.style.display = 'block';
closeLogin.onclick = () => loginModal.style.display = 'none';
closeRegister.onclick = () => registerModal.style.display = 'none';
window.onclick = (e) => {
  if (e.target === loginModal) loginModal.style.display = 'none';
  if (e.target === registerModal) registerModal.style.display = 'none';
};
getStartedBtn.onclick = () => registerModal.style.display = 'block';

document.getElementById('loginForm').onsubmit = e => {
  e.preventDefault();
  alert('Logged in! (Demo)');
  loginModal.style.display = 'none';
};
document.getElementById('registerForm').onsubmit = e => {
  e.preventDefault();
  alert('Registered! (Demo)');
  registerModal.style.display = 'none';
};

// Reserved for future interactivity