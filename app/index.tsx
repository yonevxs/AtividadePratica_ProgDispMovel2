import React, { useCallback, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useFocusEffect, useRouter } from 'expo-router';
import GameCard from '../components/GameCard';
import { styles } from '../assets/styles/index.styles';

// Dados estáticos do catálogo GameVault
export const JOGOS_DATA = [
  {
    id: '1',
    nome: 'The Witcher 3: Wild Hunt',
    genero: 'RPG de Ação / Mundo Aberto',
    plataforma: 'PC, PS5, Xbox, Switch',
    descricao: 'Cace monstros como Geralt de Rívia em um continente devastado pela guerra.',
    sinopseCompleta:
      'Você é Geralt de Rívia, mercenário matador de monstros. Em um continente devastado pela guerra e infestado de criaturas, sua missão é encontrar Ciri, a Criança da Profecia — uma arma viva que pode alterar a forma do mundo.',
    plataformaDetalhe: 'PC, PlayStation 5, Xbox Series X/S e Nintendo Switch',
    desenvolvedora: 'CD Projekt Red',
    personagens: ['Geralt de Rívia', 'Ciri', 'Yennefer', 'Triss Merigold'],
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg',
    favorito: true,
  },
  {
    id: '2',
    nome: 'Elden Ring',
    genero: 'RPG de Ação / Soulslike',
    plataforma: 'PC, PS5, Xbox',
    descricao: 'Explore as Terras Intermédias e torne-se o Lorde Prístino em um mundo épico.',
    sinopseCompleta:
      'Levante-se, Maculado, e seja guiado pela graça para portar o poder do Anel Prístino e se tornar um Lorde Prístino nas Terras Intermédias, um vasto mundo repleto de masmorras colossais e chefes desafiadores.',
    plataformaDetalhe: 'PC, PlayStation 4/5, Xbox One e Xbox Series X/S',
    desenvolvedora: 'FromSoftware',
    personagens: ['Maculado', 'Melina', 'Malenia', 'Radahn'],
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg',
    favorito: false,
  },
  {
    id: '3',
    nome: 'Red Dead Redemption 2',
    genero: 'Ação / Aventura Western',
    plataforma: 'PC, PS4, Xbox One',
    descricao: 'Uma jornada épica de honra e lealdade no alvorecer da era moderna no Velho Oeste.',
    sinopseCompleta:
      'Estados Unidos, 1899. Arthur Morgan e a gangue Van der Linde são forçados a fugir. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no coração implacável dos EUA.',
    plataformaDetalhe: 'PC, PlayStation 4 e Xbox One',
    desenvolvedora: 'Rockstar Games',
    personagens: ['Arthur Morgan', 'John Marston', 'Dutch van der Linde', 'Sadie Adler'],
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg',
    favorito: false,
  },
  {
    id: '4',
    nome: 'Cyberpunk 2077',
    genero: 'RPG de Ação / Sci-Fi',
    plataforma: 'PC, PS5, Xbox Series X/S',
    descricao: 'Construa sua lenda nas ruas iluminadas por neon da megalópole Night City.',
    sinopseCompleta:
      'Cyberpunk 2077 é um RPG de ação e aventura em mundo aberto ambientado em Night City, uma megalópole obcecada por poder, glamour e modificação corporal. Você joga como V, um mercenário fora da lei atrás de um implante único que carrega a chave da imortalidade.',
    plataformaDetalhe: 'PC, PlayStation 5 e Xbox Series X/S',
    desenvolvedora: 'CD Projekt Red',
    personagens: ['V', 'Johnny Silverhand', 'Judy Alvarez', 'Panam Palmer'],
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg',
    favorito: false,
  },
];

export const addJogo = (novoJogo: {
  id: string;
  nome: string;
  genero: string;
  plataforma: string;
  descricao: string;
  sinopseCompleta: string;
  plataformaDetalhe: string;
  desenvolvedora: string;
  personagens: string[];
  imagem: string;
  favorito: boolean;
}) => {
  JOGOS_DATA.unshift(novoJogo);
};

/**
 * Tela Principal do Catálogo GameVault.
 * Apresenta a lista com FlatList e a navegação entre as telas.
 */
export default function IndexScreen() {
  const router = useRouter();
  const [jogos, setJogos] = useState(JOGOS_DATA);

  useFocusEffect(
    useCallback(() => {
      setJogos([...JOGOS_DATA]);
    }, [])
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={jogos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard jogo={item} />}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={styles.banner}>
            <Text style={styles.bannerTitle}>GameVault</Text>
          </View>
        }
      />

      {/* Barra de Navegação Inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/')}>
          <Text style={[styles.navText, styles.activeNavText]}>Jogos</Text>
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
