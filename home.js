window.addEventListener("scroll",() => {
    document.querySelector("nav").classList.toggle
    ("sticky", window.scrollY > 0)
})





// ============================faq toggle==========================
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");

        const icon = faq.querySelector(".faq__icon i");
        if (icon.className === "fa-solid fa-plus") {
            icon.className = "fa-solid fa-minus"
        }else icon.className = "fa-solid fa-plus";
    })
});