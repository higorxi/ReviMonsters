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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
          <p className="text-white mt-2">
            {monster1.name} - HP:{" "}
            {currentRound === 0
              ? monster1.hp
              : rounds
                  .filter((r) => r.defender.name === monster1.name)
                  .reduce((hp, r) => hp - r.damage, monster1.hp)}
          </p>
        </div>

        <div className="text-4xl font-bold text-white mx-4">VS</div>

        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderRadius: "16px",
            padding: "16px",
            textAlign: "center",
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
          <p className="text-white mt-2">
            {monster2.name} - HP:{" "}
            {currentRound === 0
              ? monster2.hp
              : rounds
                  .filter((r) => r.defender.name === monster2.name)
                  .reduce((hp, r) => hp - r.damage, monster2.hp)}
          </p>
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          top: "16px",
          right: "16px",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "white",
          padding: "16px",
          borderRadius: "8px",
          width: "300px",
          zIndex: 9999,
        }}
      >
        <h2 className="text-lg font-bold">Resultado da Batalha</h2>
        {winner && currentRound === rounds.length - 1 ? (
          <p>Vencedor: {winner.name}</p>
        ) : (
          <p>Batalha em andamento...</p>
        )}
        <ul>
          {rounds.slice(0, currentRound + 1).map((round, index) => (
            <li key={index}>
              <strong>Round {index + 1}:</strong> {round.attacker.name} causou{" "}
              {round.damage} de dano em {round.defender.name}. HP restante:{" "}
              {round.hpLeft}.
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
