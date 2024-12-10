import { Monster } from "../types/Monster";

export function addMonsterToStorage(newMonster: Monster) {

    let storedMonsters = JSON.parse(localStorage.getItem("monsters") || "[]");

    if (!Array.isArray(storedMonsters)) {
        storedMonsters = [];
      }
  
    const updatedMonsters = [...storedMonsters, newMonster];

    localStorage.setItem("monsters", JSON.stringify(updatedMonsters));
  }

  export function getMonstersFromStorage() {
    const storedMonsters = JSON.parse(localStorage.getItem("monsters") || "[]");
  
    return Array.isArray(storedMonsters) ? storedMonsters : [];
  }
  