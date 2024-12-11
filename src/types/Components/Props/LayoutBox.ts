export interface LayoutBoxProps {
  title: string;
  children: React.ReactNode;
  isStep?: boolean;
  onStepBack?: () => void;
}