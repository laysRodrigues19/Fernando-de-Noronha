import { View, Text, StyleSheet } from 'react-native'
export function Button() {
  return (
    <View>

      <Text style={styles.titulo}>Reserve sua Viagem</Text>

    </View>
    
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 25,
    paddingTop: 15,
    fontWeight: 'bold',
    backgroundColor: '#c6e0f2',
    textAlign: 'center',
    paddingBottom: 15,
    color: '#0001ff',
    marginTop: 30,
    marginLeft: 25,
    marginRight: 25
  }
  
})