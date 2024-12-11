import { useEffect, useState } from "react";
import { Monster } from "../../types/Monster";
import { BattleProps } from "../../types/Components/Props/Battle";

export default function BattleFinal({
  backgroundUrl,
  monster1,
  monster2,
}: BattleProps) {
  const [rounds, setRounds] = useState<
    {
      attacker: Monster;
      defender: Monster;
      damage: number;
      hpLeft: number;
    }[]
  >([]);
  const [currentRound, setCurrentRound] = useState(0);
  const [winner, setWinner] = useState<Monster | null>(null);
  const [attacking, setAttacking] = useState<string | null>(null);
  const [defending, setDefending] = useState<string | null>(null);

  useEffect(() => {
    const calculateBattle = (m1: Monster, m2: Monster) => {
      let attacker = m1.speed >= m2.speed ? m1 : m2;
      let defender = attacker === m1 ? m2 : m1;

      const battleRounds: Array<{
        attacker: Monster;
        defender: Monster;
        damage: number;
        hpLeft: number;
      }> = [];

      while (m1.hp > 0 && m2.hp > 0) {
        const damage = Math.max(attacker.attack - defender.defense, 1);
        defender.hp -= damage;
        battleRounds.push({
          attacker,
          defender,
          damage,
          hpLeft: defender.hp > 0 ? defender.hp : 0,
        });

        if (defender.hp <= 0) break;
        [attacker, defender] = [defender, attacker];
      }

      return { winner: m1.hp > 0 ? m1 : m2, rounds: battleRounds };
    };

    const result = calculateBattle({ ...monster1 }, { ...monster2 });
    setRounds(result.rounds);
    setWinner(result.winner);
  }, [monster1, monster2]);

  useEffect(() => {
    if (rounds.length > 0) {
      const interval = setInterval(() => {
        setCurrentRound((prev) => {
          if (prev < rounds.length - 1) {
            const nextRound = rounds[prev + 1];
            setAttacking(nextRound.attacker.name);
            setDefending(nextRound.defender.name);

            setTimeout(() => {
              setAttacking(null);
              setDefending(null);
            }, 500);

            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [rounds]);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "4rem",
        borderRadius: "1rem",
        border: "1px black solid",
      }}
    >
      <div className="flex justify-between items-center w-4/4 relative m-4">
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderRadius: "16px",
            padding: "16px",
            textAlign: "center",
            border:
              defending === monster1.name ? "4px solid red" : "4px solid black",
          }}
          className={`relative ${
            attacking === monster1.name ? "animate-pulse" : ""
          }`}
        >
          <img
            src={monster1.image_url}
            alt={monster1.name}
            className="w-40 h-40 rounded-full"
          />
        </div>

        <div className="text-4xl font-bold text-white mx-4">VS</div>

        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderRadius: "16px",
            padding: "16px",
            textAlign: "center",
            border:
              defending === monster2.name ? "4px solid red" : "4px solid black",
          }}
          className={`relative ${
            attacking === monster2.name ? "animate-pulse" : ""
          }`}
        >
          <img
            src={monster2.image_url}
            alt={monster2.name}
            className="w-40 h-40 rounded-full"
          />
        </div>
      </div>

      <div className="fixed top-4 right-4 bg-black/80 text-white p-4 rounded-lg w-[300px] z-50">
        <h2 className="text-lg font-bold mb-2">Boletim de Batalha</h2>

        {winner && currentRound === rounds.length - 1 ? (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              Batalha Concluída
            </h3>
            <div className="flex justify-center items-center space-x-2 mb-4">
              <img
                src={winner.image_url}
                alt={winner.name}
                className="w-16 h-16 rounded-full border-2 border-green-500"
              />
              <span className="text-xl">Vencedor: {winner.name}</span>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <span className="animate-pulse text-yellow-400">
              Batalha em Andamento...
            </span>
          </div>
        )}

        <div className="max-h-[300px] overflow-y-auto">
          <h3 className="text-md font-semibold mb-2">Histórico de Rounds</h3>
          {rounds.slice(0, currentRound + 1).map((round, index) => (
            <div
              key={index}
              className={`
          p-2 mb-1 rounded 
          ${Math.floor(index / 2) % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}
          transition-colors duration-300
        `}
            >
              <div className="flex justify-between">
                <span className="font-bold">
                  {Math.floor(index / 2) + 1} -{" "}
                  {index % 2 === 0 ? "Ataque" : "Contra-ataque"}
                </span>
                <span
                  className={`
            ${round.damage > 10 ? "text-red-400" : "text-blue-300"}
          `}
                >
                  Dano: {round.damage}
                </span>
              </div>
              <div className="text-sm">
                {round.attacker.name} atacou {round.defender.name}
              </div>
              <div className="text-xs text-gray-400">
                HP restante de {round.defender.name}: {round.hpLeft}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
