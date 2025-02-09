const toggleBtn = document.querySelector('.open-cta');
const cover = document.querySelector('.cover');
const card = document.querySelector('.card');
const nextPageBtn = document.querySelector('.cta-btn');

toggleBtn.addEventListener('click', () => {
  cover.classList.toggle('toggle');
  card.classList.toggle('toggle-rotate');
});

nextPageBtn.addEventListener('click', () => {
    window.location.href = 'playlist.html';
});

