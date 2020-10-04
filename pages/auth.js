import axios from "axios";

const Auth = () => {
  const submit = () => {
    axios.post("/api/login", {
      username: "admin",
      password: "password",
    });
  };

  return (
    <div>
      <button onClick={submit}>click</button>
    </div>
  );
};

export default Auth;
