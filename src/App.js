import MainLayouts from "./layouts/MainLayout.js";
import BrandaPages from "./pages/MainPage.js";
import Welcome from "./pages/Welcome.js";
import EncryptPage from "./pages/EncryptPage.js";
import ContactPage from "./pages/ContactPage.js";
import LoginPage from "./pages/LoginPages.js";
import AdminPage from "./pages/AdminPage.js";
import Documentation from "./pages/DocumentationPage.js";
import { initChatLogic } from "./logic/ChatLogic.js";
import { setupAdminChat } from "./logic/setupAdminChat.js";
import { setupAuthEvents } from "./logic/LoginLogic.js";

const routes = {
  "/": {
    render: Welcome,
  },
  "/home": {
    render: BrandaPages,
  },
  "/preview": {
    render: EncryptPage,
  },
  "/doc":{
    render: Documentation,
  },
  "/contact": {
    render: ContactPage,
    onMount: initChatLogic,
  },
  "/admin": {
    render: AdminPage,
    onMount: setupAdminChat,
  },
  "/login": {
    render: LoginPage,
    onMount: setupAuthEvents,
  },
};

function App() {
  const root = document.getElementById("app");
  const path = (location.hash.slice(1) || "/").toLowerCase();
  console.log("Current path:", path);

  const route = routes[path] || {
    render: () => "<h1>404 Page Not Found!</h1>",
  };

  const html = path === "/" ? route.render() : MainLayouts(route.render());
  root.innerHTML = html;
  if (route.onMount) {
    route.onMount();
  }
}

export default App;
