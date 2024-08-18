function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');

    menuIcon.classList.toggle('open');
    menu.classList.toggle('show');
    overlay.classList.toggle('show');
}

// Fechar o menu quando clicar na área escurecida
document.getElementById('overlay').addEventListener('click', toggleMenu);
