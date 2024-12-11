import {  
    FaFilm, 
    FaDice, 
    FaGlobeAmericas 
  } from 'react-icons/fa';
  
export const monsterCategories = [
    {
      name: 'Mitologia',
      icon: <FaGlobeAmericas className="w-8 h-8 text-yellow-400" />,
      description: 'Explore as raízes mitológicas de monstros fascinantes de diferentes culturas ao redor do mundo.',
      videos: [
        { title: 'Mitologia Grega: Criaturas Míticas', link: '#' },
        { title: 'Monstros da Mitologia Nórdica', link: '#' },
        { title: 'Criaturas Lendárias Asiáticas', link: '#' }
      ]
    },
    {
      name: 'RPG',
      icon: <FaDice className="w-8 h-8 text-purple-400" />,
      description: 'Descubra os monstros mais icônicos de Dungeons & Dragons e outros jogos de RPG de mesa.',
      videos: [
        { title: 'Bestiário de D&D: Criaturas Épicas', link: '#' },
        { title: 'Monstros Únicos em Jogos de RPG', link: '#' },
        { title: 'Como Criar Monstros Memoráveis', link: '#' }
      ]
    },
    {
      name: 'Cinema',
      icon: <FaFilm className="w-8 h-8 text-red-400" />,
      description: 'Explore os monstros mais impressionantes que já apareceram nas telas de cinema.',
      videos: [
        { title: 'Monstros Clássicos do Cinema', link: '#' },
        { title: 'Efeitos Especiais de Monstros Incríveis', link: '#' },
        { title: 'Evolução dos Monstros no Cinema', link: '#' }
      ]
    }
  ];