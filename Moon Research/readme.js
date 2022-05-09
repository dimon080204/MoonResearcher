for (let inter = false; inter === false;) {
    inter = confirm('Всі матеріали взяті з вільних джерел');
    if (inter === false) {
        alert('Для доступу потрібне підтвердження');
    }
    else {
        alert('Все добре')
    }
}