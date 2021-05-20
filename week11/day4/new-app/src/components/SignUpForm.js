import {
  SignUpButton,
  SignUpFormInput,
  SignUpFormDiv,
} from "./styledComponents/SignUpFormStyles";
const SignUpForm = (props) => {
    // console.log(SignUpFormInput);
    const handleChange = (e) => {
        props.setFirstName(e.target.value)
        props.setLastName(e.target.value)
    };
    const handleSubmit = (e) => {
        e.preventDefault()
            props.setNewUser({
                userFirstName:props.firstName,
                userLastName:props.lastName
            })
        console.log(props.newUser)

    }
  return (
    <div className="sign-up-form-container">
      <h1>Create Account</h1>
      <SignUpFormDiv onSubmit={handleSubmit}>
        <SignUpFormInput
          onChange={handleChange}
          type="text"
          value={props.firstName}
          placeholder="First Name"/>
        <SignUpFormInput
         onChange={handleChange} 
         type="text" 
         placeholder="Last Name" 
         value={props.lastName} />
        <SignUpFormInput type="email" placeholder="Email" />
        <SignUpFormInput type="password" placeholder="Password" />
        <SignUpFormInput type="password" placeholder="Re-Type Password" />
        <SignUpButton >Sign Up</SignUpButton>
      </SignUpFormDiv>
    </div>
  );
};
export default SignUpForm;