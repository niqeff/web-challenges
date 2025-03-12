import { useState } from "react";
import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";

export default function FavoriteButton({ id, isFavorite, onToggleFavorite }) {
  // const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      className="favorite-button"
      onClick={onToggleFavorite(id)}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
