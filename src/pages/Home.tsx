import { FaDragon, FaBattleNet, FaChartBar } from "react-icons/fa";
import LayoutBox from "../components/LayoutBox";
import BattleSummary from "../components/BattleSummary";

export default function Home() {
  const mockBattles = [
    {
      id: 1,
      loser: { name: "Fênix", avatar: "https://via.placeholder.com/64" },
      winner: { name: "Dragão", avatar: "https://via.placeholder.com/64" },
    },
    {
      id: 2,
      winner: { name: "Lobo", avatar: "https://via.placeholder.com/64" },
      loser: { name: "Hidra", avatar: "https://via.placeholder.com/64" },
    },
    {
      id: 3,
      winner: { name: "Unicórnio", avatar: "https://via.placeholder.com/64" },
      loser: { name: "Orc", avatar: "https://via.placeholder.com/64" },
    },
    {
      id: 4,
      winner: { name: "Unicórnio", avatar: "https://via.placeholder.com/64" },
      loser: { name: "Orc", avatar: "https://via.placeholder.com/64" },
    },
    {
      id: 5,
      winner: { name: "Unicórnio", avatar: "https://via.placeholder.com/64" },
      loser: { name: "Orc", avatar: "https://via.placeholder.com/64" },
    },
    {
      id: 6,
      winner: { name: "Unicórnio", avatar: "https://via.placeholder.com/64" },
      loser: { name: "Orc", avatar: "https://via.placeholder.com/64" },
    },
  ];

  return (
    <LayoutBox title="Bem vindo ao Battle Monsters">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <p className="text-lg text-gray-300 mb-8">
            Escolha uma das opções abaixo para começar sua aventura:
          </p>
          <div className="flex flex-col items-start gap-4">
            <button
              className="flex items-center gap-4 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105 w-full"
              onClick={() => (window.location.href = "/register-monster")}
            >
              <FaDragon size={24} />
              Criar Novo Monstro
            </button>
            <button
              className="flex items-center gap-4 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105 w-full"
              onClick={() => (window.location.href = "/battle")}
            >
              <FaBattleNet size={24} />
              Ir para Batalha
            </button>
            <button
              className="flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105 w-full"
              onClick={() => (window.location.href = "/stats")}
            >
              <FaChartBar size={24} />
              Ver Stats
            </button>
          </div>
        </div>
        <div>
          <p className="text-lg text-gray-300 mb-4">
            Resumo das últimas batalhas:
          </p>
          
          <BattleSummary battles={mockBattles} />
        </div>
      </div>
    </LayoutBox>
  );
}
