import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Preview() {
    const router = useRouter();

    const dados = useLocalSearchParams<{
        nome: string;
        cargo: string;
        empresa: string;
        anos: string;
        tecnologia: string;
        cor: string;
    }>();

    let corDoCard = '#2196F3';
    if (dados.cor === 'Verde') {
        corDoCard = '#4CAF50';
    } else if (dados.cor === 'Roxo') {
        corDoCard = '#7a29bd';
    }

    let meuNivel = 'Júnior';
    let corDaBadge = '#808080';
    let anosNumero = Number(dados.anos);

    if (anosNumero >= 6) {
        meuNivel = 'Sênior';
        corDaBadge = '#D4AF37';
    } else if (anosNumero >= 3) {
        meuNivel = 'Pleno';
        corDaBadge = '#FFA500';
    }

    const letra = dados.nome ? dados.nome.substring(0, 1).toUpperCase() : '';

    return (
        <View style={styles.tela}>
            <Text style={styles.header}>Seu Cartão</Text>
            <View style={[styles.cartao, { backgroundColor: corDoCard }]}>

                <View style={styles.circuloBranco}>
                    <Text style={[styles.letraAvatar, { color: corDoCard }]}>{letra}</Text>
                </View>

                <Text style={styles.nomeGrande}>{dados.nome}</Text>
                <Text style={styles.textoBranco}>{dados.cargo}</Text>
                {dados.empresa ? <Text style={styles.textoBranco}>{dados.empresa}</Text> : null}

                <View style={styles.linha} />

                <Text style={styles.textoPequeno}>Especialista em</Text>
                <Text style={styles.tecnologia}>{dados.tecnologia}</Text>

                <View style={[styles.badge, { backgroundColor: corDaBadge }]}>
                    <Text style={styles.txtBadge}>{meuNivel}</Text>
                </View>

                <Text style={styles.textoPequeno}>{dados.anos} anos de experiência</Text>
            </View>

            <View style={styles.rodape}>
                <TouchableOpacity style={styles.btnVoltar} onPress={() => router.back()}>
                    <Text style={styles.txtVoltar}>Editar dados</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnFim} onPress={() => router.replace('/sucesso')}>
                    <Text style={styles.txtFim}>Finalizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 25,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 20,
    },
    cartao: {
        padding: 50,
        borderRadius: 20,
        alignItems: 'center',
    },
    circuloBranco: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    letraAvatar: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    nomeGrande: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    textoBranco: {
        color: '#fff',
        fontSize: 16,
    },
    linha: {
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginVertical: 15,
    },
    textoPequeno: {
        color: '#eee',
        fontSize: 12,
    },
    tecnologia: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    badge: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
        marginBottom: 5,
    },
    txtBadge: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    rodape: {
        marginTop: 40,
    },
    btnVoltar: {
        backgroundColor: '#a458eb',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    txtVoltar: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    btnFim: {
        backgroundColor: '#a458eb',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    txtFim: {
        color: '#fff',
        fontWeight: 'bold',
    }
});
