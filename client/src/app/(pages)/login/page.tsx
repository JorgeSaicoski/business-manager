"use client"
import { FormEvent, useState } from "react";
import { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function Signin() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res?.error) setError(res.error as string);

    if (res?.ok) return router.push("/");
  };

  return (
    <div className="columns is-centered is-vcentered is-fullheight">
      <form onSubmit={handleSubmit} className="column is-one-third">
        {error && <div className="notification is-danger mb-2">{error}</div>}
        <h1 className="title is-4 has-text-weight-bold mb-4">Signin</h1>

        <label className="label has-text-grey-light">Email:</label>
        <input
          type="email"
          placeholder="Email"
          className="input mb-2"
          name="email"
        />

        <label className="label has-text-grey-light">Password:</label>
        <input
          type="password"
          placeholder="Password"
          className="input mb-2"
          name="password"
        />

        <button className="button is-primary is-fullwidth mt-4">Signup</button>
      </form>
    </div>
  );
}

export default Signin;
