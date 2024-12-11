import { FaBook } from "react-icons/fa";
import { GiBattleGear, GiMonsterGrasp } from "react-icons/gi";

export const topics = [
    {
      id: 1,
      urlDestiny: "register-monster",
      title: "Criar Monstro",
      icon: <GiMonsterGrasp size={64} />,
      description: "Crie seu próprio monstro",
    },
    {
      id: 2,
      urlDestiny: "battle",
      title: "Batalhar",
      icon: <GiBattleGear size={64} />,
      description: "Iniciar uma batalha épica",
    },
    {
      id: 3,
      urlDestiny: "stats",
      title: "Bestiário",
      icon: <FaBook size={64} />,
      description: "Descubra mais sobre monstros fascinantes",
    },
  ];