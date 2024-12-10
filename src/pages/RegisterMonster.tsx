import { useState } from "react";
import { Monster } from "../types/Monster";
import LayoutBox from "../components/LayoutBox";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { addMonsterToStorage } from "../utilts/monsterUtils";

export default function RegisterMonster() {
  const [formData, setFormData] = useState<Monster>({
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

  const handleSubmit = () => {
    const allFieldsFilled = Object.values(formData).every(
      (value) => value !== ""
    );

    if (allFieldsFilled) {
      addMonsterToStorage(formData);
      toast.success("Monstro cadastrado 👾");
    } else {
      toast.error("Por favor, preencha todos os campos.");
    }
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
              <TextField
                id="name"
                name="name"
                label="Nome"
                variant="filled"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                InputProps={{ style: { color: "white" } }}
              />
            </div>
            <div>
              <TextField
                id="attack"
                name="attack"
                label="Ataque"
                type="number"
                variant="filled"
                value={formData.attack}
                onChange={handleChange}
                fullWidth
                required
                InputProps={{ style: { color: "white" } }}
              />
            </div>
            <div>
              <TextField
                id="defense"
                name="defense"
                label="Defesa"
                type="number"
                variant="filled"
                value={formData.defense}
                onChange={handleChange}
                fullWidth
                required
                InputProps={{ style: { color: "white" } }}
              />
            </div>
            <div>
              <TextField
                id="speed"
                name="speed"
                label="Velocidade"
                type="number"
                variant="filled"
                value={formData.speed}
                onChange={handleChange}
                fullWidth
                required
                InputProps={{ style: { color: "white" } }}
              />
            </div>
            <div>
              <TextField
                id="hp"
                name="hp"
                label="HP"
                type="number"
                variant="filled"
                value={formData.hp}
                onChange={handleChange}
                fullWidth
                required
                InputProps={{ style: { color: "white" } }}
              />
            </div>
            <div>
              <TextField
                id="image_url"
                name="image_url"
                label="URL da Imagem"
                type="url"
                variant="filled"
                value={formData.image_url}
                onChange={handleChange}
                fullWidth
                required
                InputProps={{ style: { color: "white" } }}
              />
            </div>
          </div>
          <Button
            type="submit"
            variant="contained"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Cadastrar
          </Button>
        </form>
      </div>
    </LayoutBox>
  );
}
