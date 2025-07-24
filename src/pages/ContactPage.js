export default function ContactPage() {
  return `
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
  `;
}
