export default function Pendahuluan() {
  return `
    <section class="bg-gradient-to-b from-black via-gray-800 to-gray-900 text-white px-6 py-20" id="pendahuluan">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-6 text-indigo-400">Caesar Cipher</h1>

        <div class="mb-10">
          <h2 class="text-2xl font-semibold text-white mb-2">Apa itu Caesar Cipher?</h2>
          <p class="text-gray-300 leading-relaxed">
            Caesar Cipher adalah salah satu teknik kriptografi klasik yang ditemukan oleh Julius Caesar pada abad pertama SM.
            Metode ini digunakan untuk menyandikan pesan-pesan militer dengan cara menggeser setiap huruf dalam pesan asli
            sebanyak sejumlah langkah tertentu di sepanjang alfabet.
            Meskipun sangat sederhana, Caesar Cipher merupakan dasar dari banyak teknik kriptografi modern dan masih digunakan sebagai alat pembelajaran dasar enkripsi.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-white mb-2">Mengapa Metode Ini Digunakan?</h2>
          <p class="text-gray-300 leading-relaxed">
            Metode Caesar Cipher dipilih dalam pengembangan aplikasi ini karena sifatnya yang mudah dipahami dan diimplementasikan,
            menjadikannya alat yang tepat untuk pembelajaran awal kriptografi. Dengan pendekatan yang sederhana, pengguna dapat
            memahami konsep enkripsi, dekripsi, serta pentingnya keamanan data dalam dunia digital. Selain itu, Caesar Cipher juga
            cocok untuk digunakan dalam antarmuka CLI, GUI, maupun Web sebagai latihan praktikal.
          </p>
        </div>
      </div>
    </section>
  `
}
