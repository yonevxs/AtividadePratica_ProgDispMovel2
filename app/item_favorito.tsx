import React, { useCallback, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useFocusEffect, useRouter } from 'expo-router';
import GameCard from '../components/GameCard';
import { JOGOS_DATA } from './index';
import { styles } from '../assets/styles/item_favorito.styles';

/**
 * Tela de Favoritos responsável por listar apenas os jogos marcados como favoritos.
 */
export default function ItemFavoritoScreen() {
  const router = useRouter();
  const [favoritos, setFavoritos] = useState(() => JOGOS_DATA.filter((jogo) => jogo.favorito));

  useFocusEffect(
    useCallback(() => {
      setFavoritos(JOGOS_DATA.filter((jogo) => jogo.favorito));
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Meus jogos favoritos</Text>

      {/* Apresentação da lista de favoritos com FlatList */}
      {favoritos.length > 0 ? (
        <FlatList
          data={favoritos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <GameCard jogo={item} />}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nenhum jogo favoritado até o momento.</Text>
        </View>
      )}

      {/* Barra de Navegação Inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/')}>
          <Text style={styles.navText}>Jogos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/item_favorito')}>
          <Text style={[styles.navText, styles.activeNavText]}>Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/adicionar_item')}>
          <Text style={styles.navText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
