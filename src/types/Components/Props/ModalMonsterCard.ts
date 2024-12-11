import { Monster } from "../../Monster";

export interface ModalMonsterCardProps {
    onClose: () => void;
    formData: Monster
}