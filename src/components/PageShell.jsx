import Background from "./Background.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function PageShell({ children }) {
  return (
    <main>
      <Background />
      <Header />
      {children}
      <Footer />
    </main>
  );
}
