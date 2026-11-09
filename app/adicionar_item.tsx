import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { addJogo } from './index';
import { styles } from '../assets/styles/adicionar_item.styles';

/**
 * Tela de Cadastro para novos jogos.
 * Utiliza o hook useState para gerenciar de forma controlada cada campo do formulário.
 */
export default function AdicionarItemScreen() {
  const router = useRouter();

  // Definição dos estados locais para controle dos campos do formulário via useState
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [plataforma, setPlataforma] = useState('');
  const [descricao, setDescricao] = useState('');
  const [personagens, setPersonagens] = useState('');
  const [desenvolvedora, setDesenvolvedora] = useState('');
  const [imagem, setImagem] = useState('');

  // Função para tratar a submissão dos dados do formulário
  const handleCadastrar = () => {
    // Validação de preenchimento básico dos campos
    if (!nome.trim() || !genero.trim() || !plataforma.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha os campos de Nome, Gênero e Plataforma.');
      return;
    }

    const novoJogo = {
      id: String(Date.now()),
      nome: nome.trim(),
      genero: genero.trim(),
      plataforma: plataforma.trim(),
      descricao: descricao.trim() || 'Sem descrição disponível.',
      sinopseCompleta: descricao.trim() || 'Descrição detalhada ainda não informada.',
      plataformaDetalhe: plataforma.trim(),
      desenvolvedora: desenvolvedora.trim() || 'Estúdio independente',
      personagens: personagens
        .split(',')
        .map((personagem) => personagem.trim())
        .filter(Boolean),
      imagem:
        imagem.trim() ||
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600',
      favorito: false,
    };

    addJogo(novoJogo);

    Alert.alert('Sucesso', 'Jogo cadastrado com sucesso!', [
      {
        text: 'OK',
        onPress: () => {
          setNome('');
          setGenero('');
          setPlataforma('');
          setDescricao('');
          setPersonagens('');
          setDesenvolvedora('');
          setImagem('');
          router.push('/');
        },
      },
    ]);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.formTitle}>Novo jogo</Text>

        {/* Input: Nome do Jogo */}
        <View style={styles.fieldGroup}>
          <TextInput
            style={styles.input}
            placeholder="Nome do jogo"
            placeholderTextColor="#8E8E93"
            value={nome}
            onChangeText={setNome}
          />
        </View>

        {/* Input: Gênero */}
        <View style={styles.fieldGroup}>
          <TextInput
            style={styles.input}
            placeholder="Gênero (ex: RPG, Ação, FPS)"
            placeholderTextColor="#8E8E93"
            value={genero}
            onChangeText={setGenero}
          />
        </View>

        {/* Input: Plataforma */}
        <View style={styles.fieldGroup}>
          <TextInput
            style={styles.input}
            placeholder="Plataformas (ex: PC, PS5, Xbox)"
            placeholderTextColor="#8E8E93"
            value={plataforma}
            onChangeText={setPlataforma}
          />
        </View>

        {/* Input: Desenvolvedora */}
        <View style={styles.fieldGroup}>
          <TextInput
            style={styles.input}
            placeholder="Desenvolvedora / Estúdio"
            placeholderTextColor="#8E8E93"
            value={desenvolvedora}
            onChangeText={setDesenvolvedora}
          />
        </View>

        {/* Input: Descrição */}
        <View style={styles.fieldGroup}>
          <TextInput
            style={styles.input}
            placeholder="Descrição / Sinopse do jogo"
            placeholderTextColor="#8E8E93"
            value={descricao}
            onChangeText={setDescricao}
          />
        </View>

        {/* Input: Personagens */}
        <View style={styles.fieldGroup}>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Personagens em destaque (separados por vírgula)"
            placeholderTextColor="#8E8E93"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            value={personagens}
            onChangeText={setPersonagens}
          />
        </View>

        {/* Input: URL da Imagem */}
        <View style={styles.fieldGroup}>
          <TextInput
            style={styles.input}
            placeholder="URL da imagem de capa"
            placeholderTextColor="#8E8E93"
            value={imagem}
            onChangeText={setImagem}
          />
        </View>

        {/* Botão de Cadastro */}
        <TouchableOpacity style={styles.submitButton} onPress={handleCadastrar} activeOpacity={0.8}>
          <Text style={styles.submitButtonText}>CADASTRAR JOGO</Text>
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
          <Text style={[styles.navText, styles.activeNavText]}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
