document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    const currentDropdown = e.target.closest('[data-dropdown]');

    if (!isDropdownButton && !currentDropdown) {
        document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
            dropdown.classList.remove("active");
        });
        return;
    }

    if (isDropdownButton) {
        currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove("active");
    });
});
