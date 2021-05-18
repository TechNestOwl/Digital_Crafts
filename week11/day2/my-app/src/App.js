import './App.css';
import NavBar from "./components/NavBar"
import Google from "./components/Google"
import Input from "./components/Input"
import Button from "./components/Button"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">
      {/* <h1>Google</h1> */}
      <NavBar />
      <Google />
      <Input />
      <Button />
      <Footer />

    </div>
  );
}

export default App;
