
import { BattleSummaryProps } from "../../types/Components/Props/BattleSummary";
import { truncateName } from "../../utilts/name";

export default function BattleSummary({ battles }: BattleSummaryProps) {
  return (
    <div className="h-[400px] overflow-y-auto p-4 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-yellow-500 mb-4">Resumo de Batalhas</h2>
      <ul className="space-y-4">
        {battles.map((battle) => (
          <li key={battle.id} className="flex items-center justify-center gap-8 border-b border-gray-600 py-4">
            <div className="flex flex-col items-center">
              <img
                src={battle.winner.avatar}
                alt={battle.winner.name}
                className="w-16 h-16 rounded-full border-4 border-green-500"
              />
              <p className="text-sm text-white mt-2">{truncateName(battle.winner.name)}</p>
            </div>
            <span className="text-gray-300 text-lg font-bold">vs</span>
            <div className="flex flex-col items-center">
              <img
                src={battle.loser.avatar}
                alt={battle.loser.name}
                className="w-16 h-16 rounded-full border-4 border-red-500"
              />
              <p className="text-sm text-white mt-2">{truncateName(battle.loser.name)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}