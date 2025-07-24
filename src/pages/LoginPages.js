export default function LoginPage() {
  setTimeout(() => {
    const toggleBtn = document.getElementById("toggle-register");
    const registerContainer = document.getElementById("register-container");
    let isOpen = false;

    toggleBtn?.addEventListener("click", () => {
      isOpen = !isOpen;
      registerContainer.classList.toggle("max-h-0", !isOpen);
      registerContainer.classList.toggle("max-h-screen", isOpen);
    });
  }, 0);

  return `
    <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 text-white">
      <div class="bg-gray-900 border border-purple-600 rounded-xl shadow-xl w-full max-w-md overflow-hidden">
        <div class="p-8">
          <h2 class="text-3xl font-bold text-purple-400 mb-2 text-center">🔐 Masuk ke Akun Anda</h2>
          <p class="text-sm text-gray-400 mb-6 text-center">Login untuk mengakses fitur Caesar Cipher</p>

          <form id="login-form" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input type="email" name="email" placeholder="you@example.com"
                class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-1">Password</label>
              <input type="password" name="password" placeholder="******"
                class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500" required />
            </div>
            <button type="submit"
              class="w-full py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-md transition">
              Login
            </button>
            <p id="login-error" class="text-sm text-red-500 mt-2 hidden">Login gagal, coba lagi.</p>
          </form>

          <div class="text-center mt-6">
            <button id="toggle-register"
              class="text-sm text-purple-400 hover:underline focus:outline-none transition">
              Belum punya akun? Daftar di sini
            </button>
          </div>

          <div id="register-container" class="max-h-0 overflow-hidden transition-all duration-500 ease-in-out mt-4">
            <form id="register-form" class="space-y-4 pt-4 border-t border-gray-700 mt-4">
              <h3 class="text-lg font-semibold text-purple-300 text-center">📋 Registrasi Akun Baru</h3>
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input type="email" name="email" placeholder="you@example.com"
                  class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500" required />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-1">Password</label>
                <input type="password" name="password" placeholder="******"
                  class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500" required />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-1">Konfirmasi Password</label>
                <input type="password" name="confirm" placeholder="******"
                  class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500" required />
              </div>
              <button type="submit"
                class="w-full py-2 bg-green-600 hover:bg-green-500 text-white rounded-md transition">
                Register
              </button>
              <p id="register-error" class="text-sm text-red-500 mt-2 hidden">Registrasi gagal, coba lagi.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}
