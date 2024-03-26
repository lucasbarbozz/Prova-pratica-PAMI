export default function App() {
  const [base, base2] = React.useState('');
  const [alt, alt2] = React.useState('');
  const calculo = (parseFloat(base) * parseFloat(alt)) / 2;
  return (
    <View style={styles.container}>
      <Text style={styles.letra}>base</Text>
      <TextInput keyboardType='numeric' onChangeText = {base2} style={styles.textinho} />
      

      <Text style={styles.letra}>altura:</Text>
      <TextInput keyboardType='numeric' onChangeText = {alt2} style={styles.textinho} />

      <text style={styles.letra}> Area do triangulo:</text>
      {!isNaN(calculo) && <Text style={styles.letra}>{calculo}</Text>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(18, 18, 18)',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  
  letra: {
    color:'rgb(224, 222, 222)',
    fontSize: 25,
  },

  textinho: {
    backgroundColor: 'rgb(224, 222, 222)',
    width: 'auto',
    borderRadius:10,
    padding:10,
    marginTop:10,
  },
});