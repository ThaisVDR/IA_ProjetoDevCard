import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


export default function index() {
    const router = useRouter();
    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="card" size={52} color="#985bdd" />
                <Text style={styles.h1}>DevCard</Text>
            </View>
            <View style={styles.subtitulo}>
                <Text>Seu cartão de visita digital de dev mobile</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => router.push('/cadastro')}><Text style={styles.btnText}>Criar meu cartão</Text></TouchableOpacity >
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 10,
    },
    h1: {
        color: '#9271ebf3',
        fontSize: 36,
        fontWeight: "bold",
        textAlign: "center",
    },
    subtitulo: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#9271eb',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 68
    },
    btnText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
    }
});
