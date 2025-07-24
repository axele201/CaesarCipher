export default function DeklarasiFungsi() {
  return `
    <section class="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white px-6 py-20" id="deklarasi-fungsi">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-6 text-indigo-400">Deklarasi Variabel & Fungsi</h1>

        <div class="mb-10">
          <h2 class="text-2xl font-semibold text-white mb-2">Fungsi Utama</h2>
          <p class="text-gray-300 leading-relaxed mb-4">
            Berikut adalah fungsi-fungsi utama yang digunakan dalam implementasi Caesar Cipher:
          </p>
          <ul class="list-disc list-inside text-gray-400 space-y-2">
            <li>
              <code class="text-indigo-400 font-mono">encrypt(text, shift)</code>: 
              Menerima input teks dan jumlah pergeseran, lalu mengembalikan hasil enkripsi.
            </li>
            <li>
              <code class="text-indigo-400 font-mono">decrypt(text, shift)</code>: 
              Fungsi kebalikan dari <code>encrypt</code>, digunakan untuk mendekripsi teks terenkripsi.
            </li>
            <li>
              <code class="text-indigo-400 font-mono">is_alpha(char)</code>: 
              Mengecek apakah karakter adalah huruf alfabet.
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-white mb-2">Variabel Penting</h2>
          <ul class="list-disc list-inside text-gray-400 space-y-2">
            <li>
              <code class="text-purple-400 font-mono">text</code>: 
              Teks asli (plaintext) yang akan dienkripsi.
            </li>
            <li>
              <code class="text-purple-400 font-mono">shift</code>: 
              Nilai rotasi/pergeseran huruf dalam alfabet (misal: 3).
            </li>
            <li>
              <code class="text-purple-400 font-mono">result</code>: 
              Teks hasil enkripsi atau dekripsi.
            </li>
          </ul>
        </div>
      </div>
    </section>
  `;
}
