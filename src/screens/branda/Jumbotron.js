export default function Jumbotron() {
  setTimeout(() => {
    const previewBtn = document.getElementById("preview-button");
    if (previewBtn) {
      previewBtn.addEventListener("click", () => {
        location.hash = "#/preview";
      });
    }
  }, 0);

  return `
    <div class="relative bg-cover bg-center text-white" style="background-image: url('public/kriptobg.avif');">
      <div class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div class="relative z-10 mx-auto max-w-2xl px-6 py-32 text-center sm:py-48 lg:py-56">
        <h1 class="text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-md">
          Selamat Datang di <span class="text-indigo-400">Caesar Cipher</span>
        </h1>
        <p class="mt-6 text-lg sm:text-xl text-gray-200">
          Uji dan pelajari kriptografi klasik dengan algoritma geser yang legendaris.
        </p>
        
        <div class="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
          <button id="preview-button" class="rounded-md bg-gray-800 px-5 py-3 text-sm font-semibold hover:bg-gray-700 transition">
            <i class="fas fa-eye mr-2"></i>Live Preview
          </button>
          <a href="#/doc" class="rounded-md bg-purple-600 px-5 py-3 text-sm font-semibold hover:bg-purple-500 transition">
            <i class="fas fa-book mr-2"></i>Documentation
          </a>
        </div>
      </div>
    </div>
  `;
}
