import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GameVault - Catálogo de Jogos</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B14',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#F5F3FF',
    fontSize: 20,
    fontWeight: '800',
  },
});
