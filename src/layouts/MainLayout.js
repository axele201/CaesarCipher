import Navbar from "../component/header/Navbar.js";
import Footer from "../component/footer/Footer.js";

export default function MainLayouts(content) {
    return `
        <header>
            ${Navbar()}
        </header>
        <main>
            ${content}
        </main>
        <footer>
            ${Footer()}
        </footer>
    `
}