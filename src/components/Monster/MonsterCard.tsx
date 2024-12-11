import { Modal } from "@mui/material";
import { ModalMonsterCardProps } from "../../types/Components/Props/ModalMonsterCard";

export default function ModalMonsterCard ({onClose, formData}: ModalMonsterCardProps) {
    return(
        <Modal
        open={true}
        onClose={onClose}
        aria-labelledby="monster-preview-modal"
        aria-describedby="modal showing monster details"
      >
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-4 w-full max-w-sm mx-auto my-60 text-center ">
          {formData.image_url ? (
            <img
              src={formData.image_url}
              alt="Monster Preview"
              className="w-full h-48 object-cover mb-4 rounded"
            />
          ) : (
            <div className="w-full h-48 bg-gray-600 flex items-center justify-center mb-4">
              <span className="text-gray-400">Sem imagem</span>
            </div>
          )}
          <h2 className="truncate">
            {formData.name || "Nome do Monstro"}
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <p>Ataque: {formData.attack || 0}</p>
            <p>Defesa: {formData.defense || 0}</p>
            <p>Velocidade: {formData.speed || 0}</p>
            <p>HP: {formData.hp || 0}</p>
          </div>
        </div>
      </Modal>
    )
}