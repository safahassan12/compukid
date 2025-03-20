document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        "en": {
         
            "الاختبار 1 - المحاضرة 1": "Quiz 1 - Lecture 1",
            "الاختبار 2 - المحاضرة 2": "Quiz 2 - Lecture 2",
            "الاختبار 3 - المحاضرة 3": "Quiz 3 - Lecture 3",
            "الاختبار 4 - المحاضرة 4": "Quiz 4 - Lecture 4",
            "الاختبار 5 - المحاضرة 5": "Quiz 5 - Lecture 5",
            "الاختبار 6 - المحاضرة 6": "Quiz 6 - Lecture 6",
            "الاختبار 7 - المحاضرة 7": "Quiz 7 - Lecture 7"
        },
        "ar": {
           
            "Quiz 1 - Lecture 1": "الاختبار 1 - المحاضرة 1",
            "Quiz 2 - Lecture 2": "الاختبار 2 - المحاضرة 2",
            "Quiz 3 - Lecture 3": "الاختبار 3 - المحاضرة 3",
            "Quiz 4 - Lecture 4": "الاختبار 4 - المحاضرة 4",
            "Quiz 5 - Lecture 5": "الاختبار 5 - المحاضرة 5",
            "Quiz 6 - Lecture 6": "الاختبار 6 - المحاضرة 6",
            "Quiz 7 - Lecture 7": "الاختبار 7 - المحاضرة 7"
        }
    };

    function translatePage(lang) {
        document.querySelectorAll("*").forEach((el) => {
            if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
                let text = el.textContent.trim();
                if (translations[lang] && translations[lang][text]) {
                    el.textContent = translations[lang][text];
                }
            }
        });
        localStorage.setItem("selectedLanguage", lang);
    }

    // إنشاء زر الترجمة على شكل كرة أرضية
    const translateButton = document.createElement("button");
    translateButton.innerHTML = '<i class="fas fa-globe"></i>'; // أيقونة الكرة الأرضية
    translateButton.style.position = "fixed";
    translateButton.style.top = "15px";
    translateButton.style.right = "15px";
    translateButton.style.width = "50px";
    translateButton.style.height = "50px";
    translateButton.style.background="none";
    translateButton.style.color = "#333";
    translateButton.style.border = "none";
    translateButton.style.borderRadius = "50%"; // يجعل الزر دائري
    translateButton.style.cursor = "pointer";
    translateButton.style.display = "flex";
    translateButton.style.alignItems = "center";
    translateButton.style.justifyContent = "center";
    translateButton.style.fontSize = "24px";
  
    translateButton.style.transition = "0.3s";
    
    // تأثير عند تمرير الماوس
   

    

    document.body.appendChild(translateButton);

    // تحميل اللغة المحفوظة
    let currentLanguage = localStorage.getItem("selectedLanguage") || "en";
    translatePage(currentLanguage);

    // عند الضغط على الزر يتم التبديل بين اللغتين
    translateButton.addEventListener("click", function () {
        currentLanguage = currentLanguage === "en" ? "ar" : "en";
        translatePage(currentLanguage);
    });
});
