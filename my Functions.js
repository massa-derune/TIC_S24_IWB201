document.querySelectorAll('.toggleDetails').forEach(function(button) {
    button.addEventListener('click', function() {
        var details = this.parentElement.parentElement.nextElementSibling;
        if (details.classList.contains('hidden')) {
            details.classList.remove('hidden');
        } else {
            details.classList.add('hidden');
        }
    });
});

let radioBtns = document.querySelectorAll("input[name='radio']");
function findSelected() {
    let selected = document.querySelector("input[name='radio']:checked");
    console.log(selected ? selected.value : "لم يتم اختيار أي خيار");
}
radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("change", findSelected);
});

function submitForm() {
    alert("تم شراء الكتاب بنجاح!");
}

function validateForm() {
    // تحقق النموذج (نفس الكود أعلاه)
}

function generateCaptcha() {
    var captchaText = generateRandomString(6);
    document.getElementById("captcha-image").alt = captchaText;
}

function generateRandomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

document.addEventListener("DOMContentLoaded", generateCaptcha);