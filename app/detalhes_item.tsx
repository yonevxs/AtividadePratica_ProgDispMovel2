import React, { useMemo, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { JOGOS_DATA } from './index';
import { styles } from '../assets/styles/detalhes_item.styles';

/**
 * Tela de Detalhes do jogo selecionado.
 * Obtém o parâmetro 'id' enviado pela navegação para buscar os dados correspondentes.
 */
export default function DetalhesItemScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const jogo = useMemo(
    () => JOGOS_DATA.find((item) => item.id === id) || JOGOS_DATA[0],
    [id]
  );

  const [isFavorito, setIsFavorito] = useState(jogo.favorito);

  const handleToggleFavorito = () => {
    const proximoValor = !jogo.favorito;
    jogo.favorito = proximoValor;
    setIsFavorito(proximoValor);
    Alert.alert('GameVault', proximoValor ? 'Jogo adicionado aos favoritos!' : 'Jogo removido dos favoritos!');
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {/* Imagem de Capa do Jogo */}
        <Image source={{ uri: jogo.imagem }} style={styles.image} resizeMode="cover" />

        {/* Título e Informações Gerais */}
        <Text style={styles.title}>{jogo.nome}</Text>
        <Text style={styles.metaText}>
          {jogo.genero} • {jogo.plataformaDetalhe}
        </Text>
        <Text style={styles.autorText}>Desenvolvedora: {jogo.desenvolvedora}</Text>

        {/* Seção sobre o Jogo */}
        <Text style={styles.sectionTitle}>Sobre o Jogo</Text>
        <Text style={styles.description}>{jogo.sinopseCompleta}</Text>

        {/* Lista de Personagens Principais */}
        <Text style={styles.sectionTitle}>Personagens em Destaque</Text>
        {jogo.personagens.map((personagem, index) => (
          <Text key={index} style={styles.listItem}>
            • {personagem}
          </Text>
        ))}

        {/* Botão de Ação para Favoritar */}
        <TouchableOpacity
          style={[styles.favButton, isFavorito && styles.favButtonActive]}
          onPress={handleToggleFavorito}
          activeOpacity={0.8}
        >
          <Text style={styles.favButtonText}>
            {isFavorito ? 'REMOVER DOS FAVORITOS' : 'ADICIONAR AOS FAVORITOS'}
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Barra de Navegação Inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/')}>
          <Text style={styles.navText}>Jogos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/item_favorito')}>
          <Text style={styles.navText}>Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/adicionar_item')}>
          <Text style={styles.navText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
