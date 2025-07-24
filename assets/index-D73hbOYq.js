import{initializeApp as L}from"https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";import{getAuth as A,onAuthStateChanged as P,signInWithEmailAndPassword as B,createUserWithEmailAndPassword as D}from"https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";import{getFirestore as T,doc as M,collection as m,query as f,orderBy as y,onSnapshot as u,setDoc as j,serverTimestamp as g,addDoc as k}from"https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();function S(){return setTimeout(()=>{const e=document.getElementById("mobile-menu-button"),t=document.getElementById("mobile-menu");e&&t&&e.addEventListener("click",()=>{t.classList.toggle("hidden")})},0),`
    <nav class="bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-md border-b border-purple-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex items-center space-x-3">
            <img src="/CaesarCipher/DIA.png" alt="Logo" class="h-9 w-9 rounded-sm shadow" />
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
  `}function $(){return`
    <footer class="bg-gradient-to-t from-black via-gray-900 to-gray-800 py-12 px-6 text-gray-300">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <!-- Branding -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <img src="/CaesarCipher/DIA.png" alt="Logo Dimas" class="h-9 w-9 rounded shadow" />
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
  `}function U(e){return`
        <header>
            ${S()}
        </header>
        <main>
            ${e}
        </main>
        <footer>
            ${$()}
        </footer>
    `}function H(){return setTimeout(()=>{const e=document.getElementById("preview-button");e&&e.addEventListener("click",()=>{location.hash="#/preview"})},0),`
    <div class="relative bg-cover bg-center text-white" style="background-image: url('/CaesarCipher/kriptobg.avif');">
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
  `}function F(){return`
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
  `}function K(){return`
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
              src="/CaesarCipher/cs.png"
              alt="Caesar Cipher App Screenshot"
              class="w-full max-w-md mx-auto rounded-xl shadow-xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  `}function O(){return`
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
  `}function N(){return`
    ${H()}
    ${F()}
    ${K()}
    ${O()}
    `}function J(){return setTimeout(()=>{document.body.addEventListener("click",()=>{location.hash="#/home"},{once:!0});const e=document.getElementById("lottie-wave");e&&lottie.loadAnimation({container:e,renderer:"svg",loop:!0,autoplay:!0,path:"/CaesarCipher/animation.json"})},0),`
    <section class="min-h-screen flex flex-col justify-center items-center bg-purple-50 text-center px-4 cursor-pointer">
      <div id="lottie-wave" class="w-40 h-40 mb-4"></div>

      <div class="flex items-center justify-center space-x-2 mb-4">
        <h1 class="text-5xl font-bold text-purple-700">Hi, I’m Dimas</h1>
      </div>

      <p class="text-lg text-gray-700 max-w-xl">
        Klik di mana saja untuk masuk ke portfolio saya.
      </p>
    </section>
  `}function R(e,t,i="encrypt"){i==="decrypt"&&(t=-t);let s="";for(let a=0;a<e.length;a++){const r=e[a];if(/[a-zA-Z]/.test(r)){const n=r===r.toUpperCase()?65:97,l=((r.charCodeAt(0)-n+t)%26+26)%26+n;s+=String.fromCharCode(l)}else s+=r}return s}function x(e){const t=document.getElementById("inputText").value,i=parseInt(document.getElementById("shiftInput").value)||0,s=R(t,i,e);document.getElementById("outputText").value=s;const a=JSON.parse(localStorage.getItem("history"))||[];a.unshift({mode:e,shift:i,input:t,output:s,timestamp:new Date().toLocaleString()}),a.length>10&&(a.length=10),localStorage.setItem("history",JSON.stringify(a)),v()}function v(){const e=JSON.parse(localStorage.getItem("history"))||[],t=document.getElementById("historyList");t&&(t.innerHTML=e.length===0?'<li class="italic text-gray-400">Belum ada riwayat.</li>':"",e.forEach(i=>{const s=document.createElement("li");s.innerHTML=`
      <div class="border-b border-gray-700 pb-2">
        <div><strong>${i.mode.toUpperCase()}</strong> | Shift: ${i.shift} | ${i.timestamp}</div>
        <div class="text-xs text-gray-400">Input: ${i.input}</div>
        <div class="text-xs text-gray-400">Output: ${i.output}</div>
      </div>
    `,t.appendChild(s)}))}function G(){const e=document.getElementById("outputText").value;e&&navigator.clipboard.writeText(e).then(()=>alert("✅ Hasil disalin!")).catch(()=>alert("❌ Gagal menyalin."))}function q(){return setTimeout(()=>{v(),document.getElementById("btnEncrypt").onclick=()=>x("encrypt"),document.getElementById("btnDecrypt").onclick=()=>x("decrypt"),document.getElementById("btnCopy").onclick=G},0),`
    <section class="bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen py-16 px-6 text-white">
      <div class="max-w-2xl mx-auto bg-gray-900 shadow-xl rounded-xl p-8 space-y-6 border border-purple-700">
        <h1 class="text-3xl sm:text-4xl font-bold text-purple-400 text-center">Caesar Cipher</h1>

        <div>
          <label class="block font-semibold text-sm mb-1">Teks:</label>
          <textarea id="inputText" class="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700" rows="4" placeholder="Masukkan teks..."></textarea>
        </div>

        <div>
          <label class="block font-semibold text-sm mb-1">Jumlah Pergeseran:</label>
          <input id="shiftInput" type="number" class="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700" value="3" />
        </div>

        <div class="flex gap-4">
          <button id="btnEncrypt" class="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded-md transition">Enkripsi</button>
          <button id="btnDecrypt" class="flex-1 bg-green-600 hover:bg-green-500 text-white font-semibold py-2 rounded-md transition">Dekripsi</button>
        </div>

        <div>
          <label class="block font-semibold text-sm mb-1">Hasil:</label>
          <textarea id="outputText" class="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700" rows="4" readonly></textarea>
          <button id="btnCopy" class="mt-2 w-full bg-gray-700 hover:bg-gray-600 text-white text-sm py-1 rounded-md">Salin Hasil</button>
        </div>

        <div>
          <h2 class="text-lg font-semibold mt-4 mb-2 text-purple-300">Riwayat:</h2>
          <ul id="historyList" class="text-sm space-y-2 max-h-40 overflow-y-auto bg-gray-800 border border-gray-700 rounded-md p-2"></ul>
        </div>
      </div>
    </section>
  `}function W(){return`
    <section class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black py-16 px-6 text-white">
      <div class="max-w-xl mx-auto bg-gray-900 border border-purple-500 shadow-xl rounded-xl p-6">
        <h2 class="text-2xl font-bold text-purple-400 mb-6 text-center">💬 Chat dengan Dimas</h2>
        
        <div id="chat-box" class="h-64 overflow-y-auto border border-gray-700 p-4 rounded bg-gray-800 mb-4 space-y-2"></div>

        <form id="chat-form" class="flex gap-2">
          <input type="text" id="message" placeholder="Ketik pesan..." 
            class="flex-1 p-2 rounded-md bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" required />
          <button type="submit" 
            class="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-md transition">
            Kirim
          </button>
        </form>
      </div>
    </section>
  `}function Z(){return setTimeout(()=>{const e=document.getElementById("toggle-register"),t=document.getElementById("register-container");let i=!1;e?.addEventListener("click",()=>{i=!i,t.classList.toggle("max-h-0",!i),t.classList.toggle("max-h-screen",i)})},0),`
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
  `}function _(){return`
    <section class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black p-6 text-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-purple-400 mb-6 text-center">💼 Admin Chat Panel</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          <!-- Panel Pengguna -->
          <div class="bg-gray-900 border border-purple-500 rounded-xl shadow-lg p-4" id="user-list">
            <h3 class="text-lg font-semibold text-purple-300 mb-3">👥 Daftar Pengguna</h3>
            <div id="users" class="space-y-2 text-sm text-gray-300"></div>
          </div>

          <!-- Panel Chat -->
          <div class="md:col-span-3">
            <div id="chat-box-admin" class="h-[400px] overflow-y-auto bg-gray-800 border border-gray-700 rounded-xl p-4 mb-4 space-y-2 text-sm text-gray-100"></div>
            
            <form id="admin-chat-form" class="flex gap-2">
              <input type="text" id="admin-message" placeholder="Ketik pesan..." required
                class="flex-1 p-2 rounded-md bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <button type="submit" 
                class="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-md transition">
                Kirim
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  `}function V(){return`
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
  `}function z(){return`
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
  `}function Y(){return`
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
  `}function Q(){return`
    <section class="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white px-6 py-20" id="deklarasi-fungsi">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-6 text-indigo-400">Deklarasi Variabel & Fungsi</h1>

        <div class="mb-10">
          <h2 class="text-2xl font-semibold text-white mb-2">Fungsi Utama</h2>
          <p class="text-gray-300 leading-relaxed mb-4">
            Berikut adalah fungsi-fungsi utama yang digunakan dalam implementasi Caesar Cipher:
          </p>
          <ul class="list-disc list-inside text-gray-400 space-y-2">
            <li>
              <code class="text-indigo-400 font-mono">encrypt(text, shift)</code>: 
              Menerima input teks dan jumlah pergeseran, lalu mengembalikan hasil enkripsi.
            </li>
            <li>
              <code class="text-indigo-400 font-mono">decrypt(text, shift)</code>: 
              Fungsi kebalikan dari <code>encrypt</code>, digunakan untuk mendekripsi teks terenkripsi.
            </li>
            <li>
              <code class="text-indigo-400 font-mono">is_alpha(char)</code>: 
              Mengecek apakah karakter adalah huruf alfabet.
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-white mb-2">Variabel Penting</h2>
          <ul class="list-disc list-inside text-gray-400 space-y-2">
            <li>
              <code class="text-purple-400 font-mono">text</code>: 
              Teks asli (plaintext) yang akan dienkripsi.
            </li>
            <li>
              <code class="text-purple-400 font-mono">shift</code>: 
              Nilai rotasi/pergeseran huruf dalam alfabet (misal: 3).
            </li>
            <li>
              <code class="text-purple-400 font-mono">result</code>: 
              Teks hasil enkripsi atau dekripsi.
            </li>
          </ul>
        </div>
      </div>
    </section>
  `}function X(){return`
    <section class="bg-gradient-to-b from-black via-gray-800 to-gray-900 text-white px-6 py-20" id="algoritma-lengkap">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-6 text-indigo-400">Algoritma</h1>

        <div class="mb-10">
          <h2 class="text-2xl font-semibold text-white mb-2">Langkah-langkah Enkripsi</h2>
          <p class="text-gray-300 leading-relaxed mb-4">
            Berikut adalah algoritma dasar Caesar Cipher dalam bentuk langkah logis:
          </p>
          <div class="bg-gray-800 text-gray-200 rounded-lg p-4 font-mono text-sm leading-relaxed">
            1. Ambil input teks dan nilai shift<br>
            2. Untuk setiap karakter dalam teks:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;a. Jika karakter adalah huruf:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Tentukan posisi alfabet (0–25)<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Geser posisi sesuai nilai shift<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Bungkus kembali ke alfabet jika melebihi Z<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Tambahkan ke hasil<br>
            &nbsp;&nbsp;&nbsp;&nbsp;b. Jika bukan huruf, tambahkan langsung ke hasil<br>
            3. Kembalikan teks hasil enkripsi
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-white mb-2">Pseudocode Caesar Cipher</h2>
          <pre class="bg-gray-800 text-green-300 rounded-lg p-4 text-sm overflow-auto">
function caesarEncrypt(text, shift):
    result = ""
    for each character in text:
        if character is a letter:
            base = 'A' if uppercase else 'a'
            shifted = (ord(character) - ord(base) + shift) % 26
            new_char = chr(ord(base) + shifted)
            result += new_char
        else:
            result += character
    return result
          </pre>
        </div>
      </div>
    </section>
  `}function ee(){return`
    ${V()}
    ${z()}
    ${Y()}
    ${Q()}
    ${X()}
    `}const te={apiKey:"AIzaSyA2NgjgwjBogA5Capz7d5_PPsT3tkj9oTk",authDomain:"portfoliodimasforum.firebaseapp.com",projectId:"portfoliodimasforum",storageBucket:"portfoliodimasforum.appspot.com",messagingSenderId:"365108246554",appId:"1:365108246554:web:16f36847aaf7d0610eb9a3",measurementId:"G-NWM4FNMMK4"},w=L(te),h=A(w),p=T(w);function ae(){const e=document.getElementById("chat-box"),t=document.getElementById("chat-form"),i=document.getElementById("message");P(h,s=>{if(!s)return window.location.hash="#/login";const a=M(p,"chats",s.uid),r=m(p,`chats/${s.uid}/messages`),n=f(r,y("timestamp","asc"));u(n,l=>{e.innerHTML="",l.forEach(o=>{const d=o.data();e.innerHTML+=`<div><strong>${d.sender==="admin"?"👨‍💼 Admin":"👤 You"}</strong>: ${d.text}</div>`,e.scrollTop=e.scrollHeight})}),t.addEventListener("submit",async l=>{l.preventDefault(),i.value.trim()&&(await j(a,{userEmail:s.email,createdAt:g()},{merge:!0}),await k(r,{text:i.value.trim(),sender:"user",timestamp:g()}),i.value="")})})}function ie(){const e=document.getElementById("users"),t=document.getElementById("chat-box-admin"),i=document.getElementById("admin-chat-form"),s=document.getElementById("admin-message");let a=null;const r=m(p,"chats");u(r,l=>{e.innerHTML="",l.forEach(o=>{const d=o.data(),c=document.createElement("div");c.className="p-2 bg-white border rounded hover:bg-purple-100 cursor-pointer",c.textContent=d.userEmail,c.onclick=()=>n(o.id),e.appendChild(c)})});function n(l){a=l;const o=m(p,`chats/${l}/messages`),d=f(o,y("timestamp","asc"));u(d,c=>{t.innerHTML="",c.forEach(E=>{const b=E.data(),I=b.sender==="admin"?"👨‍💼 Admin":"👤 User";t.innerHTML+=`<div class="mb-2"><strong>${I}:</strong> ${b.text}</div>`}),t.scrollTop=t.scrollHeight})}i.addEventListener("submit",async l=>{if(l.preventDefault(),!a||!s.value.trim())return;const o=m(p,`chats/${a}/messages`);await k(o,{text:s.value.trim(),sender:"admin",timestamp:g()}),s.value=""})}function se(){const e=document.getElementById("login-form"),t=document.getElementById("register-form"),i=document.getElementById("login-error"),s=document.getElementById("register-error");e&&e.addEventListener("submit",async a=>{a.preventDefault();const r=e.email.value.trim(),n=e.password.value.trim();try{await B(h,r,n),window.location.hash="#/contact"}catch{i.classList.remove("hidden")}}),t&&t.addEventListener("submit",async a=>{a.preventDefault();const r=t.email.value.trim(),n=t.password.value.trim(),l=t.confirm.value.trim();if(n.length<6){s.textContent="Password minimal 6 karakter",s.classList.remove("hidden");return}if(n!==l){s.textContent="Password tidak cocok",s.classList.remove("hidden");return}try{await D(h,r,n),window.location.hash="#/contact"}catch{s.textContent="Registrasi gagal. Gunakan email yang valid.",s.classList.remove("hidden")}})}const re={"/":{render:J},"/home":{render:N},"/preview":{render:q},"/doc":{render:ee},"/contact":{render:W,onMount:ae},"/admin":{render:_,onMount:ie},"/login":{render:Z,onMount:se}};function C(){const e=document.getElementById("app"),t=(location.hash.slice(1)||"/").toLowerCase();console.log("Current path:",t);const i=re[t]||{render:()=>"<h1>404 Page Not Found!</h1>"},s=t==="/"?i.render():U(i.render());e.innerHTML=s,i.onMount&&i.onMount()}window.addEventListener("DOMContentLoaded",C);window.addEventListener("hashchange",C);
