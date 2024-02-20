import { View, Text, StyleSheet } from 'react-native'
export function Title() {
  return (
    <View>

      <Text style={styles.titulo}>Bem-Vindo a Fernando de Noronha</Text>
      
      <Text style={styles.subtitulo}>Descubra o paraíso das praias intocadas e águas cristalinas </Text>
      
    </View>
    
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    color: '#ffffff',
    backgroundColor: '#018002',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 15,
    paddingTop: 15
  },

  subtitulo: {
    marginLeft: 10,
  }
})