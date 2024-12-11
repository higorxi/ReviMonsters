import { useState } from "react";
import Battlefield from "../components/Battle/Battlefield";
import LayoutBox from "../components/LayoutBox";
import { battleFields } from "../data/Battlefield";
import { monsters } from "../data/Monster";
import BattleFinal from "../components/Battle/Battle";
import { Monster } from "../types/Monster";
import { useNavigate } from "react-router-dom";

export default function Battle() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedField, setSelectedField] = useState<string | null>(null);
  const [selectedMonster1, setSelectedMonster1] = useState<Monster | null>(null);
  const [selectedMonster2, setSelectedMonster2] = useState<Monster | null>(null);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const removeOneStep = () => {
    if(step === 1){
      navigate('/')
      return
    }
    setStep((prevStep) => prevStep - 1);
  }

  return (
    <LayoutBox title="Batalha" isStep={true} onStepBack={removeOneStep} >
      {step === 1 && (
        <div>
          <p className="mb-4 text-4xl">Escolha um Campo de Batalha</p>
          <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
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
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
            }}
            onClick={handleNextStep}
            disabled={!selectedField}
          >
            Próximo
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <p className="text-4xl">Escolha os Monstros</p>
          <div style={{ marginTop: "20px" }}>
            <h3>Monstro 1</h3>
            <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
              {monsters.map((monster) => (
                <div
                  key={monster.name}
                  style={{
                    cursor: "pointer",
                    border:
                      selectedMonster1?.name === monster.name
                        ? "2px solid blue"
                        : "1px solid gray",
                    borderRadius: "10px",
                    padding: "10px",
                    textAlign: "center",
                    color: "white",
                    backgroundColor: "#222",
                  }}
                  onClick={() => setSelectedMonster1(monster)}
                >
                  <div style={{ fontSize: "24px" }}>{monster.icon}</div>
                  <p>{monster.name}</p>
                </div>
              ))}
            </div>
            <h3>Monstro 2</h3>
            <div style={{ display: "flex", gap: "20px" }}>
              {monsters.map((monster) => (
                <div
                  key={monster.name}
                  style={{
                    cursor: "pointer",
                    border:
                      selectedMonster2?.name === monster.name
                        ? "2px solid blue"
                        : "1px solid gray",
                    borderRadius: "10px",
                    padding: "10px",
                    textAlign: "center",
                    color: "white",
                    backgroundColor: "#222",
                  }}
                  onClick={() => setSelectedMonster2(monster)}
                >
                  <div style={{ fontSize: "24px" }}>{monster.icon}</div>
                  <p>{monster.name}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
            }}
            onClick={handleNextStep}
            disabled={!(selectedMonster1 && selectedMonster2)}
          >
            Iniciar Batalha
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <BattleFinal
            backgroundUrl={
              battleFields.find((field) => field.title === selectedField)?.image as string
            }
            monster1={selectedMonster1 as Monster}
            monster2={selectedMonster2 as Monster}
          />
        </div>
      )}
    </LayoutBox>
  );
}
