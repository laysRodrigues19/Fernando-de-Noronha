import { View, Text, StyleSheet } from 'react-native'
export function SubTitle() {
  return (
    <View>

      <Text style={styles.titulo}>Explore as Maravilhosas Praias</Text>

      <Text style={styles.subtitulo}>Visite as praias de Fernando de Noronha e mergulhe nas águas azul-turquesa.</Text>
      
    </View>
    
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    backgroundColor: '#f18210',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
    paddingBottom: 15,
    paddingTop: 15,
    marginTop: 30
  },

  subtitulo: {
    marginLeft: 10,
    color: '#000000'
  }
})