import React from "react";

export default function UserDetails(props) {
  return (
    <div>
      <h1>User Detail</h1>
      <div>
        {props.newUser.userFirstName,
        props.newUser.userLastName}
      </div>
    </div>
  );
}