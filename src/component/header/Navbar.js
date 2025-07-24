export default function Navbar() {
  setTimeout(() => {
    const toggleBtn = document.getElementById("mobile-menu-button");
    const menu = document.getElementById("mobile-menu");
    if (toggleBtn && menu) {
      toggleBtn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    }
  }, 0);

  return `
    <nav class="bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-md border-b border-purple-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex items-center space-x-3">
            <img src="public/DIA.png" alt="Logo" class="h-9 w-9 rounded-sm shadow" />
            <span class="text-2xl font-bold text-purple-400 tracking-wide">Caesar Cipher</span>
          </div>

          <div class="hidden md:flex space-x-6">
            <a href="#/home" class="text-gray-300 hover:text-purple-400 transition font-medium">Beranda</a>
            <a href="#/doc" class="text-gray-300 hover:text-purple-400 transition font-medium">Documentation</a>
            <a href="#/contact" class="text-gray-300 hover:text-purple-400 transition font-medium">Contact</a>
          </div>

          <div class="md:hidden">
            <button id="mobile-menu-button" class="text-gray-300 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600">
              <i class="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" class="md:hidden hidden px-4 pb-4 space-y-2">
        <a href="#/home" class="block py-2 text-gray-300 hover:text-purple-400">Beranda</a>
        <a href="#/doc" class="block py-2 text-gray-300 hover:text-purple-400">Documentation</a>
        <a href="#/contact" class="block py-2 text-gray-300 hover:text-purple-400">Contact</a>
      </div>
    </nav>
  `;
}
