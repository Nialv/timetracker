import { useState } from "react";
import { Login } from "../interfaces/Login";

export const useForm = (initialState: Login) => {
  const [form, setForm] = useState(initialState);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const cleanForm = () => {
    setForm(initialState);
  };

  return { form, handleChange, cleanForm };
};
