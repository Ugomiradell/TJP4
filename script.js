const dropdown = document.querySelector('.dropdown')
const links = document.querySelector('.dropdown-items')
const close = document.querySelector('.close')

dropdown.addEventListener('click', () => {
    links.classList.toggle('visible');
    dropdown.classList.add('hide');
    close.classList.add('visible');

})

close.addEventListener('click', () => {
    links.classList.remove('visible');
    dropdown.classList.remove('hide');
    close.classList.remove('visible');

})


