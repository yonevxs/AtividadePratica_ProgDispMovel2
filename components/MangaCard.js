import React from 'react';
import GameCard from './GameCard';

/**
 * Alias de compatibilidade que delega a renderização para o componente GameCard.
 */
export default function MangaCard({ jogo, manga }) {
  return <GameCard jogo={jogo || manga} />;
}
