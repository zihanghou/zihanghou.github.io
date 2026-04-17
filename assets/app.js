function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
function uid() { return Math.random().toString(36).slice(2) + Date.now().toString(36); }
function round1(v) { return Math.round(Number(v) * 10) / 10; }
function num(v) { return Number(v); }
function byId(id) { return document.getElementById(id); }
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
function formatDateInput(date = new Date()) { return date.toISOString().slice(0, 10); }
