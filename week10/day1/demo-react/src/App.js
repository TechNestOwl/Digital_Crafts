import './App.css';
import Nav from "./components/Nav";
import AboutContainer from "./components/AboutContainer";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer"
// import AboutMe from "./components/AboutMe"
function App() {
  return (
    <div className="App">
      {/* <h1>App.js</h1> */}
    <Nav />
    <AboutContainer />
    <Sidebar />
    <Footer />
    </div>
  );
}

export default App;
