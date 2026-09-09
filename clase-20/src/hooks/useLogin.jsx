import { useState } from "react";

function useLogin() {
  const [formState, setFormState] = useState({ email: "", password: "" });

  function handleSubmit(evento) {
    evento.preventDefault();
    const { email, password } = evento.target;

    console.log("Login enviado:", {
      email: email.value,
      password: password.value,
    });
  }

  function handleChangeInput(evento) {
    const { name, value } = evento.target;

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  }

  return {
    formState,
    handleSubmit,
    handleChangeInput,
  };
}

export default useLogin;
