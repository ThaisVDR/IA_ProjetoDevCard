import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { THEME } from "../styles/contants";
import { Button } from "../components/Button";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Ionicons name="card" size={95} color="skyblue" />
          <Text style={styles.logo}>DevCard</Text>
          <Text style={styles.subtitle}>
            Seu cartão de visita digital de dev mobile
          </Text>
        </View>

        <Button
          label="Criar meu cartão"
          onPress={() => router.push("/cadastro")}
        />
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
  },

  logo: {
    color: THEME.colors.primary,
    fontWeight: "bold",
    fontSize: 56,
  },

  subtitle: {
    color: THEME.colors.subtitle,
    fontWeight: "400",
    fontSize: 16,
    width: 200,
    textAlign: "center",
  },
});
