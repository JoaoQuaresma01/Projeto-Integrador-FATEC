"use client";
import React, { useState } from "react";

export default function Configuracoes() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    notifications: false,
    publicProfile: false,
    theme: "Claro",
  });

interface FormData {
    username: string;
    email: string;
    notifications: boolean;
    publicProfile: boolean;
    theme: string;
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev: FormData) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
    }));
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert("Alterações salvas!");
    console.log(formData);
};

  return (
    <div className=" flex items-center justify-center bg-gray-100 p-4 m-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded shadow-md p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Configurações</h2>

        {/* Conta */}
        <div className="mb-4">
          <h3 className="font-semibold border-b pb-1 mb-2">Conta</h3>
          <label className="block mb-2">
            Nome de usuário:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Digite seu nome de usuário"
              className="w-full mt-1 p-2 border rounded"
            />
          </label>
          <label className="block">
            E-mail:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu e-mail"
              className="w-full mt-1 p-2 border rounded"
            />
          </label>
        </div>

        {/* Privacidade */}
        <div className="mb-4">
          <h3 className="font-semibold border-b pb-1 mb-2">Privacidade</h3>
          <label className="block mb-2">
            <input
              type="checkbox"
              name="notifications"
              checked={formData.notifications}
              onChange={handleChange}
              className="mr-2"
            />
            Receber notificações
          </label>
          <label className="block ml-2 mt-6">
            <input
              type="checkbox"
              name="publicProfile"
              checked={formData.publicProfile}
              onChange={handleChange}
              className="mr-2"
            />
            Tornar perfil público
          </label>
        </div>

        {/* Tema */}
        <div className="mb-4">
          <h3 className="font-semibold border-b pb-1 mb-2">Tema</h3>
          <label className="block">
            Escolha o tema:
            <select
              name="theme"
              value={formData.theme}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            >
              <option value="Claro">Claro</option>
              <option value="Escuro">Escuro</option>
            </select>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Salvar alterações
        </button>
      </form>
    </div>
  );
}
