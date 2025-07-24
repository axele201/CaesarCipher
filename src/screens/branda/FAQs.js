export default function FAQs() {
  return `
    <section class="bg-gray-950 text-gray-100 py-24 px-6 sm:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto">
        <div class="mb-12 text-center">
          <h2 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">Pertanyaan Umum</h2>
          <p class="mt-4 text-lg text-gray-400">
            Tidak menemukan jawaban yang kamu cari? Hubungi tim <a href="https://axele201.github.io/myPortfolio/#/forums" class="text-indigo-400 hover:underline">dukungan kami</a>.
          </p>
        </div>
        <div class="grid gap-y-8 sm:grid-cols-2 sm:gap-x-16">
          <div>
            <h3 class="text-lg font-semibold text-white">Apa itu Caesar Cipher?</h3>
            <p class="mt-2 text-gray-400">
              Caesar Cipher adalah algoritma kriptografi klasik yang melakukan pergeseran huruf dalam alfabet. Cocok untuk pembelajaran dasar enkripsi.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-white">Apakah bisa mengenkripsi angka atau simbol?</h3>
            <p class="mt-2 text-gray-400">
              Tidak. Algoritma ini hanya bekerja pada alfabet huruf A–Z, baik huruf kapital maupun kecil.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-white">Apakah hasil enkripsi bisa dibalik?</h3>
            <p class="mt-2 text-gray-400">
              Ya! Caesar Cipher bersifat reversible. Cukup masukkan teks hasil enkripsi dan lakukan dekripsi dengan rotasi yang sama.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-white">Apakah ini aman untuk komunikasi rahasia?</h3>
            <p class="mt-2 text-gray-400">
              Tidak. Caesar Cipher mudah dipecahkan. Namun tetap ideal untuk edukasi kriptografi dan eksperimen.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}
