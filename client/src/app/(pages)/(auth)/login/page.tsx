"use client"
import { FormEvent, useState } from "react";
import { signIn, useSession } from "next-auth/react";

function Signin() {
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    console.log(res)

    if (res?.error) setError(res.error as string);
  };
  const { data } = useSession()

  return (
    <div className="columns is-vcentered">
      <form onSubmit={handleSubmit} className="column control">
        <h1 className="title has-text-weight-bold">Signin</h1>

        <label className="label has-text-grey-light">Email:</label>
        <input
          type="email"
          placeholder="Email"
          className="input"
          name="email"
        />

        <label className="label has-text-grey-light">Password:</label>
        <input
          type="password"
          placeholder="Password"
          className="input"
          name="password"
        />

        <button className="button is-primary is-fullwidth mt-4">Signup</button>
      </form>
      <div className="notification is-danger ">{error}</div>
    </div>
  );
}

export default Signin;
