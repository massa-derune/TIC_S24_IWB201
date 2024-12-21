document.querySelectorAll('.toggleDetails').forEach(function(button) {
    button.addEventListener('click', function() {
        var details = this.parentElement.parentElement.nextElementSibling; // نحصل على الصف التالي
        if (details.classList.contains('hidden')) {
            details.classList.remove('hidden');
        } else {
            details.classList.add('hidden');
        }
    });
});

                                                 /! end of script for details button / 

let radioBtns = document.querySelectorAll("input[name='radio']");
let findSelected= document.querySelector("input[name='radio'] :checked");
console.log(selected)
 radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("change" , findSelected);
    
});
                                                

  function submitForm() {
   
  alert("تم شراء الكتاب  بنجاح! ");}
    
    // الحصول على قيم المدخلات
    var name = document.getElementById("name").value;
    var id = document.getElementById("id").value;
    var date = document.getElementById("date").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var captcha = document.getElementById("captcha").value;
    // الحصول على قيمة الرمز captcha الحقيقية
    var captchaValue = document.getElementById("captcha-image").alt;
    // انشاء متغير للتحقق من الصحة
    var valid = true;
    // التحقق من الاسم اذا كان يحتوي على احرف هجائية فقط باللغة العربية
    var namePattern = /^[أ-ي\s]+$/;
    if (!namePattern.test(name)) {
        alert("الاسم يجب أن يحتوي على أحرف هجائية فقط باللغة العربية");
        valid = false;
    }
    // التحقق من الرقم الوطني اذا كان يحتوي على 11 خانة والخانتين الاوليتين ترمزان الى المحافظة
    var idPattern = /^(01|02|03|04|05|06|07|08|09|10|11|12|13|14)\d{9}$/;
    if (!idPattern.test(id)) {
        alert("الرقم الوطني يجب أن يحتوي على 11 خانة والخانتين الاوليتين ترمزان الى المحافظة");
        valid = false;
    }
    // التحقق من تاريخ الولادة اذا كان يأخذ الشكل dd-mm-yyyy
    var datePattern = /^\d{2}-\d{2}-\d{4}$/;
    if (!datePattern.test(date)) {
        alert("تاريخ الولادة يجب أن يأخذ الشكل dd-mm-yyyy");
        valid = false;
    }
    // التحقق من رقم الموبايل اذا كان يطابق أرقام شبكتي Syriatel و MTN
    var phonePattern = /^(09|094|095)\d{7}$/;
    if (!phonePattern.test(phone)) {
        alert("رقم الموبايل يجب أن يطابق أرقام شبكتي Syriatel و MTN");
        valid = false;
    }
    // التحقق من الايميل اذا كان يحتوي على @ و .
    var emailPattern = /@.*\./;
    if (!emailPattern.test(email)) {
        alert("الايميل يجب أن يحتوي على @ و .");
        valid = false;
    }
    // التحقق من الرمز captcha اذا كان يطابق الرمز الحقيقي
    if (captcha != captchaValue) {
        alert("الرمز captcha غير صحيح");
        valid = false;
    }

function showForm() {
    document.getElementById("purchaseForm").style.display = "block";
    generateCaptcha();
}

function validateForm() {
    var captchaInput = document.getElementById("captcha").value;}
    // قم بتنفيذ الكود الخاص بالتحقق من صحة رمز Captcha هنا
    

function generateCaptcha() {
    var captchaText = generateRandomString(6);
    document.getElementById("captcha").value = "";
    document.getElementById("captcha").placeholder = captchaText;
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

function changeCaptcha() {
    generateCaptcha();
}