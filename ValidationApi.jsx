import { useState } from "react";

export default function Validation() {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");

  const [pass, setpass] = useState("");
  const [passErr, setPassErr] = useState("");

  const handleName = (event) => {
    if (event.target.value.length > 6) {
      setNameErr("Please Enter valid Name . Maximum 6 Character Allowed");
    } else {
      setNameErr();
    }
  };

  const HadlePass = (event) => {
    let regex = /^[A-Za-z0-9]+$/;
    if (regex.test(event.target.value)) {
      setPassErr()
    } else {
      setPassErr(
        "Please Enter valid Name . Only Alphabet And Numericals Are Allowed"
      );
    }
  };

  return (
    <>
      <input
        type="text"
        name=""
        id=""
        onChange={handleName}
        placeholder="Enter Name"
      />
      <span>{nameErr && nameErr}</span>
      <br />
      <br />
      <input
        type="text"
        name=""
        id=""
        onChange={HadlePass}
        placeholder="Enter Password"
      />
      <span>{passErr && passErr}</span>
      <br />
      <br />
      <button disabled={!!(passErr || nameErr)}>Login</button>
    </>
  );
}
