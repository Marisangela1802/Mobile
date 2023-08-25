import { StyleSheet, Text, View } from 'react-native';
// import HelloRN from './components/01HelloRN';
import Questao1 from './components/01Atividade/Questao1e2';
// import Questao3 from './components/01Atividade/Questao3';

export default function App() {
  return (
    <View style={styles.container}>
      <Questao1/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
