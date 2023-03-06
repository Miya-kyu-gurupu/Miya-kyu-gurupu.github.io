const sidebar = document.querySelector('.sidebar');
const toggleButton = document.querySelector('#sidebar-toggle-button');

toggleButton.addEventListener('click', function() {
  sidebar.classList.toggle('active');
});
