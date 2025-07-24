export default function Feature() {
  return `
    <section class="overflow-hidden bg-gradient-to-b from-black via-gray-800 to-gray-900 py-24 sm:py-32 text-white">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-14 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <div class="lg:pt-4 lg:pr-8">
            <div class="lg:max-w-lg">
              <h2 class="text-base font-semibold text-indigo-400 tracking-wide uppercase">Fitur Unggulan</h2>
              <p class="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Kenapa Caesar Cipher?</p>
              <p class="mt-6 text-lg text-gray-300">
                Caesar Cipher adalah teknik kriptografi klasik yang tetap relevan untuk pembelajaran dasar keamanan data. Kami membangun tool ini agar mudah diakses dan dipahami oleh siapa saja.
              </p>
              <dl class="mt-10 space-y-6 text-base text-gray-400">
                <div class="relative pl-8">
                  <dt class="font-semibold text-white">
                    <i class="fas fa-lock absolute left-0 top-1 text-indigo-400"></i>
                    Enkripsi Dinamis
                  </dt>
                  <dd class="mt-1">Ubah teks biasa menjadi terenkripsi dengan rotasi alfabet yang bisa diatur sesuka hati.</dd>
                </div>
                <div class="relative pl-8">
                  <dt class="font-semibold text-white">
                    <i class="fas fa-brain absolute left-0 top-1 text-indigo-400"></i>
                    Edukasi Kriptografi
                  </dt>
                  <dd class="mt-1">Disertai visualisasi enkripsi yang memudahkan pengguna memahami konsep cipher shift.</dd>
                </div>
                <div class="relative pl-8">
                  <dt class="font-semibold text-white">
                    <i class="fas fa-clock-rotate-left absolute left-0 top-1 text-indigo-400"></i>
                    Riwayat Enkripsi
                  </dt>
                  <dd class="mt-1">Setiap hasil enkripsi tersimpan dalam local storage agar dapat diakses kembali.</dd>
                </div>
              </dl>
            </div>
          </div>
          <div class="relative">
            <img
              src="public/cs.png"
              alt="Caesar Cipher App Screenshot"
              class="w-full max-w-md mx-auto rounded-xl shadow-xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  `;
}
