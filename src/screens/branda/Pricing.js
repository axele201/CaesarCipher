export default function Pricing() {
  const html = `
    <section id="pricing" class="bg-gradient-to-b from-gray-900 via-gray-800 to-black py-20 px-6 text-white">
      <div class="text-center mb-16">
        <h2 class="text-sm font-semibold text-indigo-400 uppercase tracking-wider">Pilihan Paket</h2>
        <p class="mt-2 text-4xl font-bold text-white">Unduh File Caesar Cipher</p>
        <p class="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Pilih versi algoritma Caesar Cipher yang sesuai dengan kebutuhan Anda.
        </p>
      </div>

      <div class="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Card 1 -->
        <div class="bg-gray-800 border border-indigo-500 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <h3 class="text-xl font-semibold text-indigo-400 mb-2">Caesar Basic</h3>
          <p class="text-gray-300 mb-4 text-sm">Versi dasar Caesar Cipher untuk enkripsi (CLI).</p>
          <ul class="text-sm text-gray-400 space-y-1 mb-6">
            <li>✔️ Enkripsi huruf A-Z</li>
            <li>✔️ Tanpa case sensitivity</li>
            <li>✔️ Output statis</li>
          </ul>
          <a href="/file/caesar.py" download class="block text-center rounded-md border border-indigo-500 px-4 py-2 text-sm font-medium text-indigo-400 hover:bg-indigo-600 hover:text-white transition">Download</a>
        </div>

        <!-- Card 2 -->
        <div class="bg-gray-800 border border-purple-500 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <h3 class="text-xl font-semibold text-purple-400 mb-2">Caesar Web Basic</h3>
          <p class="text-gray-300 mb-4 text-sm">Versi dasar Caesar Cipher untuk enkripsi.</p>
          <ul class="text-sm text-gray-400 space-y-1 mb-6">
            <li>✔️ Dukungan huruf besar-kecil</li>
            <li>✔️ Perhitungan frekuensi huruf</li>
            <li>✔️ UI berbasis web</li>
          </ul>
          <a href="/file/kripto.html" download class="block text-center rounded-md border border-purple-500 px-4 py-2 text-sm font-medium text-purple-400 hover:bg-purple-600 hover:text-white transition">Download</a>
        </div>

        <!-- Card 3 -->
        <div class="bg-gray-800 border border-pink-500 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <h3 class="text-xl font-semibold text-pink-400 mb-2">Caesar Pro (GUI)</h3>
          <p class="text-gray-300 mb-4 text-sm">Versi dasar Caesar Cipher untuk enkripsi (GUI)</p>
          <ul class="text-sm text-gray-400 space-y-1 mb-6">
            <li>✔️ Enkripsi huruf A-Z</li>
            <li>✔️ Output statis</li>  
            <li>✔️ GUI </li>
          </ul>
          <a href="/file/caesar_gui.py" download class="block text-center rounded-md border border-pink-500 px-4 py-2 text-sm font-medium text-pink-400 hover:bg-pink-600 hover:text-white transition">Download</a>
        </div>
      </div>
    </section>
  `;

  return html;
}
