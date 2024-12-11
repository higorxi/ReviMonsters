import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Topics } from "../types/Topics";
import { topics } from "../data/Topics";

export default function StartGame() {
  const [selectedTopic, setSelectedTopic] = useState<Topics | null>(null);
  const navigate = useNavigate();


  const handleTopicSelect = (topic: Topics) => {
    setSelectedTopic(topic);

    setTimeout(() => {
      navigate(`/${topic.urlDestiny}`);
    }, 2500);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <AnimatePresence>
        {selectedTopic ? (
          <motion.div
            className="absolute inset-0 z-50 bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="text-center text-white">
              <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold mb-4"
              >
                {selectedTopic.title}
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2 }}
                className="h-1 bg-red-500 mx-auto mb-4"
                style={{ maxWidth: "300px" }}
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-xl"
              >
                Carregando...
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            <div className="relative z-10 flex items-center justify-between h-full px-20">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-1/2 text-white"
              >
                <h1 className="text-6xl font-bold mb-4">Battle Monsters</h1>
                <p className="text-xl mb-8">
                  Selecione para começar a aventura
                </p>
              </motion.div>

              <div className="flex flex-col space-y-8">
                {topics.map((topic) => (
                  <motion.div
                    key={topic.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleTopicSelect(topic)}
                    className="cursor-pointer group text-center"
                  >
                    <div className="relative flex flex-col items-center p-4 m-4 rounded-lg">
                      <div className="text-white">{topic.icon}</div>
                      <span className="mt-4 text-xl text-white">
                        {topic.title}
                      </span>
                      <div
                        className="absolute inset-0 bg-black bg-opacity-50 
                        flex items-center justify-center opacity-0 
                        group-hover:opacity-100 transition-opacity rounded-lg"
                      >
                        <span className="text-white text-xl">
                          {topic.description}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
