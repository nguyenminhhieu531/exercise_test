import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

function App() {
  const btnTop = () => {
    let mybutton = document.getElementById("myBtn");

    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // mybutton.style.display = "block";
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
      <button onClick={btnTop} id="myBtn" title="Go to top">
        <i className="fa-solid fa-angle-up"></i>
      </button>
    </>
  );
}

export default App;
