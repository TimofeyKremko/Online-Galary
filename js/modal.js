const button = document.querySelector('.button__form');
const emailInput = document.querySelector('.email__form');
const textInput = document.querySelector('.text__form');
const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z])$/;
button.addEventListener('click', (e) => {
if(emailInput.value && textInput.value && reg.test(emailInput.value) == true) {
        Swal.fire(
            'Отправлено',
            'Спасибо за вопрос. Мы ответим на него в ближайшее время.',
            'success'
          )
          emailInput.value = "";
          textInput.value = "";
    } else {
        Swal.fire(
            'Ошибка',
            'Сообщение не отправлено. Проверьте правильность введенных данных.',
            'error'
          )
    }
})

