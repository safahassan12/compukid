document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        "en": {
            "startButton": "Start Now",
            "toggleLang": "العربية"
        },
        "ar": {
            "startButton": "ابدأ الآن",
            "toggleLang": "English"
        }
    };

    const button = document.querySelector(".start-button");
    const langToggleButton = document.getElementById("langToggle");

    // استرجاع اللغة المحفوظة أو تعيين العربية كلغة افتراضية
    let currentLang = localStorage.getItem("lang") || "ar";
    updateLanguage(currentLang);

    function updateLanguage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

        // تحديث جميع النصوص بناءً على `data-translate`
        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");
            element.textContent = translations[lang][key];
        });

        // حفظ اللغة في localStorage
        localStorage.setItem("lang", lang);
    }

    function toggleLanguage() {
        currentLang = currentLang === "en" ? "ar" : "en";
        updateLanguage(currentLang);
    }

    langToggleButton.addEventListener("click", toggleLanguage);
});

      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("service-worker.js")
          .then(() => console.log("Service Worker Registered"));
      }
    