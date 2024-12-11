import { useState } from "react";
import Battlefield from "../components/Battle/Battlefield";
import LayoutBox from "../components/LayoutBox";
import { battleFields } from "../data/Battlefield";
import BattleFinal from "../components/Battle/Battle";
import { Monster } from "../types/Monster";
import { useNavigate } from "react-router-dom";
import { getMonstersFromStorage } from "../utilts/monsterUtils";
import { Button } from "@mui/material";

export default function Battle() {
  const navigate = useNavigate();
  const monsters = getMonstersFromStorage();
  const [step, setStep] = useState(1);
  const [selectedField, setSelectedField] = useState<string | null>(null);
  const [selectedMonster1, setSelectedMonster1] = useState<Monster | null>(
    null
  );
  const [selectedMonster2, setSelectedMonster2] = useState<Monster | null>(
    null
  );

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const removeOneStep = () => {
    if (step === 1) {
      navigate("/");
      return;
    }
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <LayoutBox title="Batalha" isStep={true} onStepBack={removeOneStep}>
      {step === 1 && (
        <div className="flex flex-col items-center h-full justify-between">
          <p className="mb-4 text-4xl">Escolha um Campo de Batalha</p>
          <div className="mt-5 flex gap-5">
            {battleFields.map((field) => (
              <Battlefield
                key={field.title}
                title={field.title}
                image={field.image}
                icon={field.icon}
                isSelected={selectedField === field.title}
                onClick={() => setSelectedField(field.title)}
              />
            ))}
          </div>
          <Button
            className="mt-5 px-5 py-2 text-lg"
            onClick={handleNextStep}
            disabled={!selectedField}
            variant="contained"
            size="large"
          >
            Próximo
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col items-center h-full justify-between">
          <p className="text-4xl">Escolha os Monstros</p>
          <div className="mt-5 flex flex-col items-center gap-5">
            <h3>Monstro 1</h3>
            <div className="flex gap-5">
              {monsters.map((monster) => (
                <div
                  key={monster.name}
                  className={`cursor-pointer border ${
                    selectedMonster1?.name === monster.name
                      ? "border-blue-500"
                      : "border-gray-500"
                  } rounded-lg p-4 text-center text-white bg-gray-800`}
                  onClick={() => setSelectedMonster1(monster)}
                >
                  <div className="text-3xl">{monster.icon}</div>
                  <p>{monster.name}</p>
                </div>
              ))}
            </div>
            <h3>Monstro 2</h3>
            <div className="flex gap-5">
              {monsters.map((monster) => (
                <div
                  key={monster.name}
                  className={`cursor-pointer border ${
                    selectedMonster2?.name === monster.name
                      ? "border-blue-500"
                      : "border-gray-500"
                  } rounded-lg p-4 text-center text-white bg-gray-800`}
                  onClick={() => setSelectedMonster2(monster)}
                >
                  <div className="text-3xl">{monster.icon}</div>
                  <p>{monster.name}</p>
                </div>
              ))}
            </div>
          </div>
          <Button
            className="mt-5 px-5 py-2"
            onClick={handleNextStep}
            disabled={!(selectedMonster1 && selectedMonster2)}
            variant="contained"
            size="large"
          >
            Iniciar Batalha
          </Button>
        </div>
      )}

      {step === 3 && (
        <div>
          <BattleFinal
            backgroundUrl={
              battleFields.find((field) => field.title === selectedField)
                ?.image as string
            }
            monster1={selectedMonster1 as Monster}
            monster2={selectedMonster2 as Monster}
          />
        </div>
      )}
    </LayoutBox>
  );
}
