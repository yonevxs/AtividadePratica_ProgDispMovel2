import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../assets/styles/GameCard.styles';

/**
 * Componente reutilizável para renderização de cada card de jogo na FlatList.
 * Recolhe as propriedades do objeto 'jogo' e utiliza o hook 'useRouter' para navegar.
 */
export default function GameCard({ jogo }) {
  const router = useRouter();

  // Redireciona para a tela de detalhes passando o ID como parâmetro de busca
  const handleVerJogo = () => {
    router.push({
      pathname: '/detalhes_item',
      params: { id: jogo.id },
    });
  };

  return (
    <View style={styles.cardContainer}>
      {/* Exibição da imagem de capa do jogo */}
      <Image source={{ uri: jogo.imagem }} style={styles.cardImage} resizeMode="cover" />

      {/* Conteúdo com os dados informativos do item */}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{jogo.nome}</Text>
        <Text style={styles.cardMeta}>
          {jogo.genero} • {jogo.plataforma}
        </Text>
        <Text style={styles.cardDescription} numberOfLines={2}>
          {jogo.descricao}
        </Text>

        {/* Botão para acessar a tela de detalhes do jogo */}
        <TouchableOpacity style={styles.button} onPress={handleVerJogo} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Ver jogo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

