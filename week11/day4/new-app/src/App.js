import "./App.css";
// import ClassBased from "./components/ClassBased";
import React, { useState } from "react";
import { AppStyle } from "./components/styledComponents/AppStyles";
import SignUpForm from "./components/SignUpForm";
import UserDetails from "./components/UserDetails";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("")
  
  const [newUser, setNewUser] = useState({
    userFirstName: firstName,
    userLastName: lastName,
    userEmail: "",
  });

  return (
    <AppStyle className="App">
      {/* <ClassBased /> */}
      <SignUpForm firstName={firstName} setFirstName={setFirstName}
        lastName={lastName} setLastName={setLastName}
        email={email} setEmail={setEmail}
        newUser={newUser} setNewUser={setNewUser}
      />
      <UserDetails newUser={newUser} />
    </AppStyle>
  );
}
export default App;