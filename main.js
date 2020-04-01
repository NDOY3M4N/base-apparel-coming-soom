const formSub = document.querySelector('#formSub');
const showIcon = document.querySelector('.show-icon');
const showText = document.querySelector('.show-text');
const inputForm = document.querySelector('.input-email');

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formSub.addEventListener('submit', e => {
  e.preventDefault();

  if(!inputForm.value.match(mailformat)) {
    showText.innerText = 'Please provide a valid email';
    showIcon.style.display = 'block';
    showIcon.src = 'images/icon-error.svg';
    showText.style.display = 'block';
    showText.style.color = 'hsl(0, 93%, 68%)';
    inputForm.style.borderColor = 'hsl(0, 93%, 68%)';
    inputForm.style.borderWidth = '2px';

    setTimeout(() => {
      showText.innerText = '';
      showIcon.style.display = 'none';
      showIcon.src = '';
      showText.style.display = 'none';
      inputForm.style.borderColor = 'hsl(0, 36%, 70%)';
      inputForm.style.borderWidth = '1px';
    }, 3000);
  } else {
    showText.innerText = 'This email is valid';
    showIcon.style.display = 'block';
    showIcon.src = 'images/icon-valid.svg';
    showText.style.display = 'block';
    showText.style.color = 'hsl(138, 67%, 57%)';

    setTimeout(() => {
      showText.innerText = '';
      showIcon.src = '';
      showIcon.style.display = 'none';
      showText.style.display = 'none';
    }, 3000);
  }

});
