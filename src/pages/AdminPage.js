export default function AdminPage() {
  return `
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
  `;
}
