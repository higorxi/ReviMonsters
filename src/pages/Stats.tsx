import { useState } from 'react';
import LayoutBox from "../components/LayoutBox";
import { monsterCategories } from '../data/MonsterCategories';


export default function MonsterCuriosityPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <LayoutBox title="Bestiário: Mundo dos Monstros">
      <div className=" text-white p-6 h-full">
        <div className="max-w-6xl mx-auto">

          <div className="flex justify-center space-x-4 mb-12">
            {monsterCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
                  ${activeCategory === category.name 
                    ? 'bg-yellow-500 text-black' 
                    : 'bg-gray-800 text-white hover:bg-gray-700'}
                `}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {monsterCategories
              .filter(cat => activeCategory === 'all' || cat.name === activeCategory)
              .map((category) => (
                <div 
                  key={category.name} 
                  className="bg-white/10 rounded-xl p-6 transform transition-all hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h2 className="text-2xl font-bold ml-4 text-yellow-500">
                      {category.name}
                    </h2>
                  </div>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  
                  <div className="space-y-2">
                    {category.videos.map((video, index) => (
                      <a 
                        key={index} 
                        href={video.link} 
                        className="block text-blue-400 hover:text-blue-300 hover:underline"
                      >
                        🎬 {video.title}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </LayoutBox>
  );
}