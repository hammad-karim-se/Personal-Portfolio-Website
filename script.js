let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');
const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}
const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}
if (darkmode === "active") enableDarkmode();
themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active"
        ? enableDarkmode()
        : disableDarkmode();
});


const texts = [
    "C/C++ Programmer",
    "Problem Solver"
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.getElementById("typing").textContent = letter;
    if (letter.length === currentText.length) {
        setTimeout(() => {
            index = 0;
            count++;
            type();
        }, 1500);
    } else {
        setTimeout(type, 150);
    }
})();


const mobileMenuBtn =
    document.querySelector('.mobile-menu-btn');
const nav =
    document.querySelector('nav');
mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    const icon =
        mobileMenuBtn.querySelector('i');
    if (nav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        const icon =
            mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});
function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement
        .style
        .setProperty('--vh', `${vh}px`);
}
setVH();
window.addEventListener('resize', setVH);
window.addEventListener('orientationchange', setVH);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement =
            document.querySelector(targetId);
        if (targetElement) {
            const headerHeight =
                document.querySelector('header').offsetHeight;
            const targetPosition =
                targetElement.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


(function () {
    emailjs.init("81jxB0GEKX9_fcx1I");
})();
function validateForm() {
    const nameRegex = /^[A-Za-z]{2,}$/;
    const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    const firstname =
        document.getElementById("firstname").value.trim();
    const lastname =
        document.getElementById("lastname").value.trim();
    const email =
        document.getElementById("email").value.trim();
    if (!nameRegex.test(firstname)) {
        alert("Invalid First Name!");
        return false;
    }
    if (!nameRegex.test(lastname)) {
        alert("Invalid Last Name!");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Invalid Email!");
        return false;
    }
    return true;
}
const contactForm =
    document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!validateForm()) return;
        const templateParams = {
            first_name:
                document.getElementById('firstname').value,
            last_name:
                document.getElementById('lastname').value,
            user_email:
                document.getElementById('email').value,
            message:
                document.getElementById('message').value
        };
        emailjs
            .send(
                'service_v458xcr',
                'template_kh50vxc',
                templateParams
            )
            .then(() => {
                alert(
                    'Thank you! Your message has been sent.'
                );
                contactForm.reset();
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                alert(
                    'Failed to send message. Please try again later.'
                );
            });
    });
}