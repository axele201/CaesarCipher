export function CaesarCipher(text, shift, mode = 'encrypt') {
  if (mode === 'decrypt') shift = -shift;
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (/[a-zA-Z]/.test(char)) {
      const base = char === char.toUpperCase() ? 65 : 97;
      const shifted = ((char.charCodeAt(0) - base + shift) % 26 + 26) % 26 + base;
      result += String.fromCharCode(shifted);
    } else {
      result += char;
    }
  }
  return result;
}

export function runCipher(mode) {
  const text = document.getElementById('inputText').value;
  const shift = parseInt(document.getElementById('shiftInput').value) || 0;
  const output = CaesarCipher(text, shift, mode);
  document.getElementById('outputText').value = output;

  const history = JSON.parse(localStorage.getItem('history')) || [];
  history.unshift({
    mode,
    shift,
    input: text,
    output,
    timestamp: new Date().toLocaleString()
  });
  if (history.length > 10) history.length = 10;
  localStorage.setItem('history', JSON.stringify(history));
  renderHistory();
}

export function renderHistory() {
  const history = JSON.parse(localStorage.getItem('history')) || [];
  const list = document.getElementById('historyList');
  if (!list) return;
  list.innerHTML = history.length === 0 ? '<li class="italic text-gray-400">Belum ada riwayat.</li>' : '';
  history.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="border-b border-gray-700 pb-2">
        <div><strong>${item.mode.toUpperCase()}</strong> | Shift: ${item.shift} | ${item.timestamp}</div>
        <div class="text-xs text-gray-400">Input: ${item.input}</div>
        <div class="text-xs text-gray-400">Output: ${item.output}</div>
      </div>
    `;
    list.appendChild(li);
  });
}

export function copyToClipboard() {
  const output = document.getElementById('outputText').value;
  if (!output) return;
  navigator.clipboard.writeText(output)
    .then(() => alert("✅ Hasil disalin!"))
    .catch(() => alert("❌ Gagal menyalin."));
}
