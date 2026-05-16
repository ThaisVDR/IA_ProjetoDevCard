import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { THEME } from "../styles/contants";
import { useRouter } from "expo-router";

export default function Sucesso() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Ionicons name="checkmark-circle" size={150} color="green" />
          <Text style={styles.title}>Cartão criado com sucesso!</Text>
          <Text style={styles.subtitle}>
            Seu cartão de visita digital está pronto. Compartilhe com a galera!
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <Button
            label="Criar outro cartão"
            onPress={() => router.push("/cadastro")}
          />
          <Button
            variant="secondary"
            label="Voltar ao início"
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
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 580,
    gap: 12,
  },

  title: {
    color: THEME.colors.heading,
    fontWeight: "bold",
    fontSize: THEME.text.heading.h2,
    width: 350,
    textAlign: "center",
  },

  subtitle: {
    color: THEME.colors.subtitle,
    fontWeight: "400",
    fontSize: 16,
    width: 350,
    textAlign: "center",
  },

  footerContainer: {
    flexDirection: "column",
    gap: 12,
  },
});
