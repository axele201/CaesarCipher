export default function AlgoritmaLengkap() {
  return `
    <section class="bg-gradient-to-b from-black via-gray-800 to-gray-900 text-white px-6 py-20" id="algoritma-lengkap">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-6 text-indigo-400">Algoritma</h1>

        <div class="mb-10">
          <h2 class="text-2xl font-semibold text-white mb-2">Langkah-langkah Enkripsi</h2>
          <p class="text-gray-300 leading-relaxed mb-4">
            Berikut adalah algoritma dasar Caesar Cipher dalam bentuk langkah logis:
          </p>
          <div class="bg-gray-800 text-gray-200 rounded-lg p-4 font-mono text-sm leading-relaxed">
            1. Ambil input teks dan nilai shift<br>
            2. Untuk setiap karakter dalam teks:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;a. Jika karakter adalah huruf:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Tentukan posisi alfabet (0–25)<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Geser posisi sesuai nilai shift<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Bungkus kembali ke alfabet jika melebihi Z<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Tambahkan ke hasil<br>
            &nbsp;&nbsp;&nbsp;&nbsp;b. Jika bukan huruf, tambahkan langsung ke hasil<br>
            3. Kembalikan teks hasil enkripsi
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-white mb-2">Pseudocode Caesar Cipher</h2>
          <pre class="bg-gray-800 text-green-300 rounded-lg p-4 text-sm overflow-auto">
function caesarEncrypt(text, shift):
    result = ""
    for each character in text:
        if character is a letter:
            base = 'A' if uppercase else 'a'
            shifted = (ord(character) - ord(base) + shift) % 26
            new_char = chr(ord(base) + shifted)
            result += new_char
        else:
            result += character
    return result
          </pre>
        </div>
      </div>
    </section>
  `;
}
