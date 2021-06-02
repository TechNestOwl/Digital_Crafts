import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {inputUserName, inputEmail, inputPassword} from "./action/userActions";
import inputField from './components/inputField';


function App() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName);
  return (
    <div className="App">
      <h1>Combining Reducers</h1>
      <h3>Enter User Info</h3>

      <inputField />
    </div>
  );
}

export default App;
