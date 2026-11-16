document.addEventListener('DOMContentLoaded', function () {
    
    // ==========================================
    // 1. МОБІЛЬНЕ МЕНЮ
    // ==========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            menuToggle.classList.toggle('is-active');
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                menuToggle.classList.remove('is-active');
                navMenu.classList.remove('active');
            });
        });
    }

    // ==========================================
    // 2. ЛОГІКА ПРОФІЛЮ
    // ==========================================
    const profileForm = document.getElementById('profileForm');
    const btnEdit = document.getElementById('btnEdit');

    if (profileForm && btnEdit) {
        
        // --- НАТИСКАННЯ НА "РЕДАГУВАТИ" ---
        btnEdit.addEventListener('click', () => {
            profileForm.classList.add('is-editing');
            document.getElementById('avatarWrapper').classList.add('editing');
        });

        // --- НАТИСКАННЯ НА "ЗБЕРЕГТИ" (Submit) ---
        profileForm.addEventListener('submit', (event) => {
            event.preventDefault(); 

            const formData = new FormData(profileForm);
            
            document.getElementById('displayName').textContent = formData.get('name');
            document.getElementById('viewCity').textContent = formData.get('city');
            document.getElementById('viewAge').textContent = formData.get('age');
            document.getElementById('viewMoon').textContent = formData.get('moon');
            document.getElementById('displayLooking').textContent = formData.get('looking');
            document.getElementById('displayAbout').textContent = formData.get('about');

            profileForm.classList.remove('is-editing');
            document.getElementById('avatarWrapper').classList.remove('editing');
        });

        // --- ЗАВАНТАЖЕННЯ ФОТО ---
        const avatarWrapper = document.getElementById('avatarWrapper');
        const avatarUpload = document.getElementById('avatarUpload');
        const avatarImage = document.getElementById('avatarImage');

        avatarWrapper.addEventListener('click', () => {
            if (avatarWrapper.classList.contains('editing')) {
                avatarUpload.click();
            }
        });

        avatarUpload.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    avatarImage.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // ==========================================
    // 3. ЛОГІКА СТОРІНКИ ПОШУКУ (ФІЛЬТРИ)
    // ==========================================
    const btnToggleFilters = document.getElementById('btnToggleFilters');
    const filtersPanel = document.getElementById('filtersPanel');

    if (btnToggleFilters && filtersPanel) {
        btnToggleFilters.addEventListener('click', () => {
            filtersPanel.classList.toggle('hidden');
            
            if (!filtersPanel.classList.contains('hidden')) {
                filtersPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    // --- ЛОГІКА СЛАЙДЕРІВ (Відстань) ---
    const distSlider = document.getElementById('distSlider');
    const distValue = document.getElementById('distValue');

    if (distSlider && distValue) {
        distSlider.addEventListener('input', function() {
            distValue.textContent = this.value + ' км';
        });
    }

    // --- ЛОГІКА КНОПОК ФАЗ МІСЯЦЯ ---
    const moonBtns = document.querySelectorAll('.moon-btn');
    moonBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            moonBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

}); // <--- ОСЬ ТУТ ЗАКРИВАЄТЬСЯ ГОЛОВНА ФУНКЦІЯ DOMContentLoaded