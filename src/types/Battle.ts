interface Battle {
  id: number;
  winner: { name: string; avatar: string };
  loser: { name: string; avatar: string };
}

export interface BattleSummaryProps {
  battles: Battle[];
}
