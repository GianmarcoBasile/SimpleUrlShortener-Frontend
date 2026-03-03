import { Link, useNavigate } from "react-router";
import { type FormEvent, useState } from "react";
import { useAuth } from "../../AuthContext";
import { Button, Input } from "../ui";

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    login(username, password);
    navigate("/");
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 rounded-md border p-6"
      >
        <h1 className="text-2xl font-semibold">Login</h1>

        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <Button type="submit" className="w-full">
          Accedi
        </Button>

        <p className="text-sm text-muted-foreground">
          Non hai un account?{" "}
          <Link to="/register" className="underline">
            Registrati
          </Link>
        </p>
      </form>
    </div>
  );
};
