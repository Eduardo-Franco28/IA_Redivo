import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';

export default function CartaoTarefa({titulo, categoria, prazo, concluida}) {
    return (
        <View style={styles.card}>
            <Text>Titulo: {titulo}</Text>
            <Text>Categoria: {categoria}</Text>
            <Text>Prazo: {prazo}</Text>
            <Text
            style = {concluida ? styles.concluido : styles.pendente}
            >{concluida ? "Concluida" : "Pendente"}</Text>
            <TouchableOpacity 
            onPress={() => Alert.alert(`Detalhes da Tarefa\nTitulo: ${titulo}\nPrazo: ${prazo}}`)}
            >
                <Text>Ver Detalhes</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#ccc',
        borderRadius: 10,
        padding: 10
    },
    concluido: {
        color: 'green',
        fontWeight: 'bold'
    },
    pendente: {
        color: 'red',
        fontWeight: 'bold'
    }
})