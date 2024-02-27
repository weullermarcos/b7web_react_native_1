import { StyleSheet, Text, View } from "react-native";

//Criando um tipo props
type Props = {

    name: string;
    price: number;
    originalPrice?: number; //indica que o parâmetro é opcional
    items: string[]; //recebendo um array de strings para os itens
}

//Criando e exportando o componente
export const PizzaItem = ({name, price, originalPrice, items}: Props) => {

    //criando variáveis
    let nome = 'Pizza XXXXXXX';
    let preco = 40; 

    //Criando uma função
    function soma(a: number, b: number){

        return a + b;
    }

    return (
        <View style={styles.container}>
            
            <Text style={styles.nome}>{name}</Text>
            <Text style={[styles.preco, styles.negrito]}>R$ {price.toFixed(2)}</Text>

            {originalPrice && originalPrice > preco && 
                <View>
                    <Text style={[styles.negrito]}>PROMOÇÃAAAOOO!</Text>

                    <Text>Chamando uma função: {soma(10,5)}</Text>
            
                    <Text>{`Usando template String: R$ ${preco.toFixed(2)}`}</Text>
                </View>
            }

            <Text>Ingredientes: {items.join(', ')}</Text>

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
        color: '#0000FF',
    },
    preco: {
        fontSize: 12,
        color: '#FF000F',
    },
    negrito: {
        fontWeight: 'bold',
    }
});
