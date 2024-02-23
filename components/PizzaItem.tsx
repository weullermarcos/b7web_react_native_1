import { StyleSheet, Text, View } from "react-native";

//Criando e exportando o componente
export const PizzaItem = () => {

    //criando variáveis
    let nome = 'Pizza Calabresa';
    let preco = 40; 

    //Criando uma função
    function soma(a: number, b: number){

        return a + b;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.nome}>{nome}</Text>
            <Text style={[styles.preco, styles.negrito]}>R$ {preco.toFixed(2)}</Text>
            <Text>Chamando uma função: {soma(10,5)}</Text>
            <Text>{`Usando template String: R$ ${preco.toFixed(2)}`}</Text>
        </View>
    );
}

//Criando estilos para o componente
const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        backgroundColor: '#CCCCCC',
    },
    nome: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#0AFF00',
    },
    preco: {
        fontSize: 12,
        color: '#FF00FF',
    },
    negrito: {
        fontWeight: 'bold',
    }
});
