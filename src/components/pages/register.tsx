import { Link } from "react-router";
import { type FormEvent, useState } from "react";
import { Button, Input } from "../ui";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios
      .post(`${BACKEND_URL}:${BACKEND_PORT}/api/user/register`, {
        username,
        email,
        password,
        confirmPassword,
      })
      .then((response) => {
        console.log("Registration successful:", response.data);
      })
      .catch((error) => {
        console.error("Error during registration:", error);
      });

    console.log("Register submit:", {
      username,
      email,
      password,
      confirmPassword,
    });
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 rounded-md border p-6"
      >
        <h1 className="text-2xl font-semibold">Registrazione</h1>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Conferma password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />

        <Button type="submit" className="w-full">
          Crea account
        </Button>

        <p className="text-sm text-muted-foreground">
          Hai già un account?{" "}
          <Link to="/login" className="underline">
            Accedi
          </Link>
        </p>
      </form>
    </div>
  );
};
