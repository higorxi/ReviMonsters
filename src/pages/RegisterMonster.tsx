import LayoutBox from "../components/LayoutBox";
import { useState } from "react";

export default function RegisterMonster() {
  const [formData, setFormData] = useState({
    name: "",
    attack: 0,
    defense: 0,
    speed: 0,
    hp: 0,
    image_url: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <LayoutBox title="Cadastro de Monstro">
      <div>
        <p className="text-lg text-gray-300 mb-8">
          Preencha as informações abaixo para criar um novo monstro.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-300">
                Nome:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-600 rounded-lg text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="attack" className="block text-sm text-gray-300">
                Ataque:
              </label>
              <input
                type="number"
                id="attack"
                name="attack"
                value={formData.attack}
                onChange={handleChange}
                className="w-full p-2 border border-gray-600 rounded-lg text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="defense" className="block text-sm text-gray-300">
                Defesa:
              </label>
              <input
                type="number"
                id="defense"
                name="defense"
                value={formData.defense}
                onChange={handleChange}
                className="w-full p-2 border border-gray-600 rounded-lg text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="speed" className="block text-sm text-gray-300">
                Velocidade:
              </label>
              <input
                type="number"
                id="speed"
                name="speed"
                value={formData.speed}
                onChange={handleChange}
                className="w-full p-2 border border-gray-600 rounded-lg text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="hp" className="block text-sm text-gray-300">
                HP:
              </label>
              <input
                type="number"
                id="hp"
                name="hp"
                value={formData.hp}
                onChange={handleChange}
                className="w-full p-2 border border-gray-600 rounded-lg text-black"
                required
              />
            </div>
            <div>
              <label
                htmlFor="image_url"
                className="block text-sm text-gray-300"
              >
                URL da Imagem:
              </label>
              <input
                type="url"
                id="image_url"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
                className="w-full p-2 border border-gray-600 rounded-lg text-black"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg transition transform hover:scale-105 mt-4"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </LayoutBox>
  );
}
