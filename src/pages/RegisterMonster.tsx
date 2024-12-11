import { useState } from "react";
import { Monster } from "../types/Monster";
import LayoutBox from "../components/LayoutBox";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { addMonsterToStorage } from "../utilts/monsterUtils";
import ModalMonsterCard from "../components/Monster/MonsterCard";

export default function RegisterMonster() {
  const [formData, setFormData] = useState<Monster>({
    name: "",
    attack: 0,
    defense: 0,
    speed: 0,
    hp: 0,
    image_url: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handlePreview = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <LayoutBox title="Cadastro de Monstro">
      <div className="flex justify-between">
        <div className="w-full">
          <p className="text-lg text-gray-300 mb-8">
            Preencha as informações abaixo para criar um novo monstro.
          </p>
          <div className="space-y-4">
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
                  variant="filled"
                  value={formData.attack}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d{0,3}$/.test(value)) {
                      setFormData({
                        ...formData,
                        attack: parseInt(value, 10),
                      });
                    }
                  }}
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
                  variant="filled"
                  value={formData.defense}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d{0,3}$/.test(value)) {
                      setFormData({
                        ...formData,
                        defense: parseInt(value, 10),
                      });
                    }
                  }}
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
                  variant="filled"
                  value={formData.speed}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d{0,3}$/.test(value)) {
                      setFormData({
                        ...formData,
                        speed: parseInt(value, 10),
                      });
                    }
                  }}
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
                  variant="filled"
                  value={formData.hp}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d{0,3}$/.test(value)) {
                      setFormData({
                        ...formData,
                        hp: parseInt(value, 10),
                      });
                    }
                  }}
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
            <div className="flex justify-between">
              <Button
                variant="outlined"
                onClick={handlePreview}
                className="bg-gray-100 hover:bg-gray-200 text-white py-2 px-6 rounded-lg shadow-lg transition transform hover:scale-105 ml-4"
              >
                Preview
              </Button>
              <Button
                type="submit"
                variant="contained"
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg transition transform hover:scale-105"
              >
                Cadastrar
              </Button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <ModalMonsterCard  onClose={handleModalClose} formData={formData} /> }
    </LayoutBox>
  );
}
