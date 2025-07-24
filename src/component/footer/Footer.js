export default function Footer() {
  return `
    <footer class="bg-gradient-to-t from-black via-gray-900 to-gray-800 py-12 px-6 text-gray-300">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <!-- Branding -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <img src="public/DIA.png" alt="Logo Dimas" class="h-9 w-9 rounded shadow" />
            <span class="text-xl font-bold text-purple-400">Dimas Ismawan</span>
          </div>
          <p class="text-sm leading-relaxed text-gray-400">
            Dokumentasi proyek Caesar Cipher untuk pembelajaran dasar kriptografi klasik.
          </p>
          <div class="flex space-x-4 mt-4 text-purple-300 text-lg">
            <a href="https://facebook.com/dimasismawan.dimasismawan.5" class="hover:text-white"><i class="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com/bananabyte17" class="hover:text-white"><i class="fab fa-instagram"></i></a>
            <a href="https://github.com/axele201" class="hover:text-white"><i class="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/dimas-ismawan-abdullah-11b574331/" class="hover:text-white"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <!-- Jenis Aplikasi -->
        <div class="hidden md:block">
          <h4 class="text-purple-300 font-semibold mb-2">Jenis Aplikasi</h4>
          <ul class="space-y-1 text-sm text-gray-400">
            <li><a href="#" class="hover:text-white">CLI (caesar.py)</a></li>
            <li><a href="#" class="hover:text-white">Web (kripto.html)</a></li>
            <li><a href="#" class="hover:text-white">GUI (caesar_gui.py)</a></li>
          </ul>
        </div>

        <!-- Fitur Aplikasi -->
        <div class="hidden md:block">
          <h4 class="text-purple-300 font-semibold mb-2">Fitur</h4>
          <ul class="space-y-1 text-sm text-gray-400">
            <li><a href="#" class="hover:text-white">Enkripsi & Dekripsi</a></li>
            <li><a href="#" class="hover:text-white">Riwayat Local</a></li>
            <li><a href="#" class="hover:text-white">Tampilan Interaktif</a></li>
          </ul>
        </div>

        <!-- File & Sumber -->
        <div class="hidden md:block">
          <h4 class="text-purple-300 font-semibold mb-2">Unduhan</h4>
          <ul class="space-y-1 text-sm text-gray-400">
            <li><a href="/file/caesar.py" download class="hover:text-white">caesar.py</a></li>
            <li><a href="/file/kripto.html" download class="hover:text-white">kripto.html</a></li>
            <li><a href="/file/caesar_gui.py" download class="hover:text-white">caesar_gui.py</a></li>
          </ul>
        </div>
      </div>

      <div class="mt-12 border-t border-purple-900 pt-6 text-center text-sm text-purple-500">
        © 2024 Dimas Ismawan Abdullah.
      </div>
    </footer>
  `;
}
