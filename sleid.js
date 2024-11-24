// слайдер вопросов
document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.js-doggel');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const containerId = this.getAttribute('data-container');
            const container = document.getElementById(containerId);

            if (container.classList.contains('active')) {
                container.classList.remove('active');
                container.style.maxHeight = '0';
            } else {
                container.classList.add('active');
                container.style.maxHeight = container.scrollHeight + 'px';
            }
        });
    });
});

// слайдер отзывов
var swiperreviewss = new Swiper(".reviewss", {
    slidesPerView: 3,
    spaceBetween: 67,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1440: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        425: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        }
    }
});

//модальное окно
document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.js-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const containerId = this.getAttribute('data-container');
            const container = document.getElementById(containerId);

            if (container.classList.contains('active')) {
                container.classList.remove('active');
                container.style.maxHeight = '0';
            } else {
                container.classList.add('active');
                container.style.maxHeight = container.scrollHeight + 'px';
            }
        });
    });
});

function setupModal(modalId, btnId) {
    var modal = document.getElementById(modalId);
    var btn = document.getElementById(btnId);
    var span = modal.getElementsByClassName("close")[0];

    btn.onclick = function (event) {
        event.preventDefault();
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Настройка модальных окон
setupModal("successModal1", "openModal1");
setupModal("successModal2", "openModal2");
setupModal("successModal3", "openModal3");
setupModal("successModal4", "openModal4");

// Функция для закрытия текущего модального окна и открытия нового
function openNewModal(currentModalId, newModalId) {
    var currentModal = document.getElementById(currentModalId);
    var newModal = document.getElementById(newModalId);

    currentModal.style.display = "none";
    newModal.style.display = "block";
}

// Настройка ссылки внутри модального окна для открытия нового модального окна
document.getElementById('openModal2').onclick = function (event) {
    event.preventDefault();
    openNewModal('successModal1', 'successModal2');
}

document.getElementById('applicationForm').addEventListener('submit', function(event) {
    var checkbox = document.getElementById('checkbox1');
    var errorMessage = document.getElementById('errorMessage');

    if (!checkbox.checked) {
        errorMessage.style.display = 'block';
        event.preventDefault(); // Предотвращаем отправку формы
    } else {
        errorMessage.style.display = 'none';
        // Здесь можно добавить код для отправки формы
        alert('Форма успешно отправлена!');
    }
});

