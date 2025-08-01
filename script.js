
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('revealBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      document.getElementById('finalMessage').classList.remove('hidden');
      document.getElementById('extraMessage').classList.remove('hidden');
    });
  }
});
