export default function PerancanganProgram() {
  return `
    <section class="bg-gradient-to-b from-black via-gray-800 to-gray-900 text-white px-6 py-20" id="perancangan-program">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-6 text-indigo-400">Perancangan Program</h1>

        <div class="mb-10">
          <h2 class="text-2xl font-semibold text-white mb-2">Bentuk Implementasi</h2>
          <p class="text-gray-300 leading-relaxed">
            Caesar Cipher dalam proyek ini diimplementasikan dalam tiga antarmuka berbeda:
          </p>
          <ul class="list-disc list-inside mt-4 text-gray-400 space-y-1">
            <li><span class="text-indigo-400 font-medium">CLI:</span> Jalankan program melalui terminal, input teks dan pergeseran langsung via command line</li>
            <li><span class="text-purple-400 font-medium">Web:</span> Aplikasi berbasis HTML dan JavaScript dengan antarmuka pengguna interaktif</li>
            <li><span class="text-pink-400 font-medium">GUI:</span> Aplikasi desktop Python dengan antarmuka grafis (Tkinter)</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-white mb-2">Alur Program</h2>
          <p class="text-gray-300 leading-relaxed mb-4">
            Semua versi memiliki alur kerja umum berikut:
          </p>
          <div class="bg-gray-800 text-gray-200 rounded-lg p-4 text-sm leading-relaxed">
            1. <strong>Input:</strong> Pengguna memasukkan teks dan nilai rotasi (k)<br>
            2. <strong>Proses:</strong> Program melakukan pergeseran huruf berdasarkan nilai k<br>
            3. <strong>Output:</strong> Teks terenkripsi ditampilkan di layar atau disalin ke clipboard
          </div>
        </div>
      </div>
    </section>
  `;
}
