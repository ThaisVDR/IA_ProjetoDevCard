import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Button } from "../components/Button";
import { THEME } from "../styles/contants";

export default function Preview() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Seu Cartão</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardAvatar}>
            <View style={styles.cardAvatarSub}>
              <Text style={styles.cardAvatarLetter}>T</Text>
            </View>
          </View>
          <Text style={styles.cadTitulo}>Thais Vitoria</Text>
          <Text style={styles.cardTexto}>Desenvolvedora</Text>
          <Text style={styles.cardSubtitulo}>LogiTech</Text>

          <View style={styles.cardSeparator} />

          <Text style={styles.cardSubtitulo}>Especialista em</Text>
          <Text>Front-End</Text>

          <View style={styles.cardBadge}>
            <Text style={styles.cardBadgeTexto}>Especialista</Text>
          </View>
          <Text style={styles.cardSubtitulo}>12 anos de experiência</Text>
        </View>

        <View style={styles.footer}>
          <Button
            label="Editar"
            variant="outline"
            onPress={() => router.push("/cadastro")}
          />
          <Button
            variant="primary"
            label="Finalizar"
            onPress={() => router.push("/")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 12,
  },
  titulo: {
    fontSize: THEME.text.heading.h3,
    color: THEME.colors.heading,
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    flexDirection: "column",
    gap: 12,
    padding: 10,
  },
  cardContainer: {
    backgroundColor: "#3783f6",
    borderRadius: THEME.border.radius.xl,
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },

  cardAvatar: {
    backgroundColor: "#a5c0e27f",
    padding: 4,
    borderRadius: "100%",
  },

  cardAvatarSub: {
    backgroundColor: "#f8fbff",
    borderRadius: "100%",
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  cardSubtitulo: {},
  cardTexto: {},
  cardAvatarLetter: {},
  cadTitulo: {},
  cardSeparator: {},
  cardBadge: {},
  cardBadgeTexto: {},
});
