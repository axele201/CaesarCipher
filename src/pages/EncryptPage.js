import { runCipher, renderHistory, copyToClipboard } from "../logic/CaesarChiper";

export default function EncryptPage() {
  setTimeout(() => {
    renderHistory();
    document.getElementById("btnEncrypt").onclick = () => runCipher('encrypt');
    document.getElementById("btnDecrypt").onclick = () => runCipher('decrypt');
    document.getElementById("btnCopy").onclick = copyToClipboard;
  }, 0);

  return `
    <section class="bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen py-16 px-6 text-white">
      <div class="max-w-2xl mx-auto bg-gray-900 shadow-xl rounded-xl p-8 space-y-6 border border-purple-700">
        <h1 class="text-3xl sm:text-4xl font-bold text-purple-400 text-center">Caesar Cipher</h1>

        <div>
          <label class="block font-semibold text-sm mb-1">Teks:</label>
          <textarea id="inputText" class="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700" rows="4" placeholder="Masukkan teks..."></textarea>
        </div>

        <div>
          <label class="block font-semibold text-sm mb-1">Jumlah Pergeseran:</label>
          <input id="shiftInput" type="number" class="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700" value="3" />
        </div>

        <div class="flex gap-4">
          <button id="btnEncrypt" class="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded-md transition">Enkripsi</button>
          <button id="btnDecrypt" class="flex-1 bg-green-600 hover:bg-green-500 text-white font-semibold py-2 rounded-md transition">Dekripsi</button>
        </div>

        <div>
          <label class="block font-semibold text-sm mb-1">Hasil:</label>
          <textarea id="outputText" class="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700" rows="4" readonly></textarea>
          <button id="btnCopy" class="mt-2 w-full bg-gray-700 hover:bg-gray-600 text-white text-sm py-1 rounded-md">Salin Hasil</button>
        </div>

        <div>
          <h2 class="text-lg font-semibold mt-4 mb-2 text-purple-300">Riwayat:</h2>
          <ul id="historyList" class="text-sm space-y-2 max-h-40 overflow-y-auto bg-gray-800 border border-gray-700 rounded-md p-2"></ul>
        </div>
      </div>
    </section>
  `;
}