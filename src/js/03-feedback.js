import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(dataSave, 2000));

function dataSave() {
  const { email, message } = this.elements;

  const data = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

window.addEventListener('load', function () {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const data = JSON.parse(storedData);

    document.querySelector('[name="email"]').value = data.email;
    document.querySelector('[name="message"]').value = data.message;
  }
});

form.addEventListener('submit', clickSubmit);

function clickSubmit(event) {
  event.preventDefault();

  const { email, message } = event.currentTarget.elements;

  if (!email.value || !message.value) {
    alert('Заповніть всі поля форми!');
    return;
  }

  const data = {
    email: email.value,
    message: message.value,
  };

  console.log(data);
  localStorage.removeItem('feedback-form-state');
  form.reset();
}
