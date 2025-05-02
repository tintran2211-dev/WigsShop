import Header from "./layout/Header.tsx";
import Content from "./layout/Content.tsx";
import Footer from "./layout/Footer.tsx";
import "./App.css"

function App() {
  return (
    <>
      <div className="main-layout">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
