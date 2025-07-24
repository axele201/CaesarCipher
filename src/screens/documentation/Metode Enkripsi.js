export default function MetodeEnkripsi() {
  return `
    <section class="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white px-6 py-20" id="metode-enkripsi">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-6 text-indigo-400">Metode</h1>

        <div class="mb-10">
          <h2 class="text-2xl font-semibold text-white mb-2">Cara Kerja Caesar Cipher</h2>
          <p class="text-gray-300 leading-relaxed">
            Caesar Cipher bekerja dengan menggeser setiap huruf dalam pesan asli sebanyak <code class="text-indigo-400">k</code> posisi dalam alfabet.
            Jika pergeseran melewati huruf Z, maka akan kembali ke A secara melingkar. Misalnya, jika k = 3:
          </p>
          
          <div class="bg-gray-800 text-gray-200 mt-4 rounded-lg p-4 text-sm font-mono overflow-auto">
            Plaintext:  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
            Ciphertext: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-white mb-2">Penanganan Karakter</h2>
          <p class="text-gray-300 leading-relaxed">
            Program mengenali huruf kapital dan kecil, namun karakter non-alfabet seperti angka, spasi, dan simbol akan diabaikan atau tetap ditampilkan
            tanpa perubahan. Berikut aturan umumnya:
          </p>
          <ul class="list-disc list-inside mt-4 text-gray-400 space-y-1">
            <li>✔️ Huruf A-Z dan a-z akan dienkripsi dengan rotasi</li>
            <li>✔️ Huruf besar tetap besar, huruf kecil tetap kecil</li>
            <li>✔️ Simbol, angka, dan spasi tidak dienkripsi</li>
          </ul>
        </div>
      </div>
    </section>
  `;
}
