import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import React, { Component } from 'react';
import { StyleSheet, Switch, Text, TextInput, View, Button, Alert, StatusBar } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: 0,
      sexos: [
        {sexoNome: 'Masculino', valor: 1},
        {sexoNome: 'Feminino', valor: 2},
        {sexoNome: 'Outro', valor: 3}
      ],
      limite: 250,
      estudante: false
    };
    this.fazerCadastro = this.fazerCadastro.bind(this);
  }

  fazerCadastro() {
    if (this.state.nome === '' || this.state.idade === '') {
      alert("Por favor preencha todos os campos");
    } else {
      alert("Nome: " + this.state.nome + 
        "\nIdade: " + this.state.idade + 
        "\nSexo: " + this.state.sexos[this.state.sexo].sexoNome + 
        "\nLimite: R$" + this.state.limite.toFixed(2) + 
        "\nEstudante? " + ((this.state.estudante) ? 'Sim' : 'Não'));
    }
  }

  render() {
    let sexoItems = this.state.sexos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.sexoNome} style={{fontSize: 13}}/>
    });

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="yellow" barStyle="dark-content" />
        <Text style={styles.logo}>Banco React</Text>

        <View style={styles.caixa}>
          <Text style={styles.title}>Cadastro</Text>

          <TextInput
            style={styles.input}
            value={this.state.nome}
            onChangeText={(texto) => this.setState({nome: texto})}
            placeholder="Nome"
            placeholderTextColor="#FFF"
          />

          <TextInput
            style={styles.input}
            value={this.state.idade}
            onChangeText={(texto) => this.setState({idade: texto})}
            placeholder="Idade"
            placeholderTextColor="#FFF"
            keyboardType="numeric"
          />

          <View style={styles.areaSexo}>
            <Text style={styles.textoNome}>Sexo:</Text>
            <Picker
              style={styles.pickerSexo}
              selectedValue={this.state.sexo}
              onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}>
              {sexoItems}
            </Picker>
          </View>

          <View style={styles.limiteArea}>
            <Slider
              style={{ width: '100%', height: 40 }}
              minimumValue={250}
              maximumValue={2500}
              step={50}
              onValueChange={(valorSelecionado) => this.setState({limite: valorSelecionado})}
              value={this.state.limite}
              minimumTrackTintColor='#00FF00'
              maximumTrackTintColor='#FF0000'
              thumbTintColor='#FFF'
            />
            <Text style={styles.limiteText}>Seu limite: R${this.state.limite.toFixed(0)}</Text>
          </View>

          <View style={styles.estudante}>
            <Text style={styles.textoNome}>É estudante?</Text>
            <Switch
              value={this.state.estudante}
              onValueChange={(valor) => this.setState({estudante: valor})}
            />
          </View>

          <Button
            title="Realizar Cadastro"
            onPress={this.fazerCadastro}
            color="#151e96"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow'
  },
  logo: {
    fontSize: 40,
    marginBottom: 60,
    fontWeight: 'bold',
    color: '#0000FF'
  },
  caixa: {
    backgroundColor: '#0000CD',
    height: 'auto',
    width: 320,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 25,
    marginBottom: 20
  },
  input: {
    fontSize: 15,
    color: '#FFF',
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    width: '100%',
    textAlign: 'center'
  },
  areaSexo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
    width: '100%',
    borderColor: '#FFF',
    borderBottomWidth: 1,
    marginBottom: 15
  },
  textoNome: {
    color: '#FFF',
    marginRight: 10
  },
  pickerSexo: {
    flex: 1,
    color: '#FFF',
  },
  limiteArea: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 15
  },
  limiteText: {
    color: '#FFF',
    marginTop: 5
  },
  estudante: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 15
  },
});

export default App;
