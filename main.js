const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');
const actionBtn = document.querySelector('.info .actions button');
const actionIcon = document.querySelector('.info .actions button i');

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});

actionBtn.addEventListener('click', () => {
  actionIcon.classList.toggle('active');
});
