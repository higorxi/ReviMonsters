import { BattlefieldProps } from "../../types/Components/Props/Battlefield";


export default function Battlefield({
  title,
  image,
  icon,
  onClick,
  isSelected,
}: BattlefieldProps ) {
  return (
    <div
      onClick={onClick}
      style={{
        border: isSelected ? "2px solid #00BFFF" : "1px solid #444",
        borderRadius: "10px",
        padding: "10px",
        textAlign: "center",
        cursor: "pointer",
        backgroundColor: isSelected ? "#1A1A2E" : "#000",
        boxShadow: isSelected ? "0 0 15px #00BFFF" : "0 0 5px #222",
        color: "#FFF",
        transition: "all 0.3s ease",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "150px",
          borderRadius: "8px",
          objectFit: "cover",
          filter: "brightness(0.7)",
          transition: "filter 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1)")}
        onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(0.7)")}
      />
      <h3 style={{ margin: "10px 0", fontSize: "18px", fontWeight: "bold" }}>
        {title}
      </h3>
      <div style={{ fontSize: "28px", marginTop: "5px" }}>{icon}</div>
    </div>
  );
};

