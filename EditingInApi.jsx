import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  const { id } = useParams();

    const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const url = "http://localhost:3000/user/" + id;

  useEffect(() => {
    GetUser();
  }, []);

  const GetUser = async () => {
    let response = await fetch(url);
    response = await response.json();

    setName(response.name);
    setEmail(response.email);
    setAge(response.age);
  };

  const updateUser = async () => {
    let response = await fetch(url, {
      method: "Put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    if (response) {
      alert("User Details Edited");
      navigate("/");
    }
  };

  return (
    <>
      <h1>Edit User Details </h1>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        name=""
        value={name}
        id=""
        placeholder="User Name"
      />
      <br />
      <br />
      <input
        type="text"
        value={age}
        name=""
        onChange={(event) => setAge(event.target.value)}
        id=""
        placeholder="User Age"
      />
      <br />
      <br />
      <input
        type="text"
        name=""
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        id=""
        placeholder="User Email"
      />
      <br />
      <br />
      <button onClick={updateUser}>Update Details</button>
    </>
  );
}
