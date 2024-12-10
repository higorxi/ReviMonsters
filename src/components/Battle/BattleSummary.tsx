import { BattleSummaryProps } from "../../types/Components/Props/BattleSummary";
import { truncateName } from "../../utilts/name";

export default function BattleSummary({ battles }: BattleSummaryProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-h-[400px] overflow-auto">
      <h2 className="text-2xl font-bold text-yellow-500 mb-6">Resumo de Batalhas</h2>
      <div className="space-y-4">
        {battles.map((battle) => (
          <div key={battle.id} className="flex items-center justify-between border-b border-gray-600 p-4">
            <div className="flex flex-col items-center">
              <img
                src={battle.winner.avatar}
                alt={battle.winner.name}
                className="w-20 h-20 rounded-full border-4 border-green-500 mb-2"
              />
              <p className="text-sm text-white">{truncateName(battle.winner.name)}</p>
            </div>
            <span className="text-gray-300 text-lg font-bold">vs</span>
            <div className="flex flex-col items-center">
              <img
                src={battle.loser.avatar}
                alt={battle.loser.name}
                className="w-20 h-20 rounded-full border-4 border-red-500 mb-2"
              />
              <p className="text-sm text-white">{truncateName(battle.loser.name)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
