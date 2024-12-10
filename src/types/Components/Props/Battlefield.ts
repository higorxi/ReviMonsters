export interface BattlefieldProps {
    title: string;
    image: string;
    icon: React.ReactNode;
    onClick: () => void;
    isSelected: boolean;
  }