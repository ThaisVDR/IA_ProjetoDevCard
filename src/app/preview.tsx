import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import {DevCard} from "../components/DevCard";
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
       <DevCard />
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
    gap: 16,
  },
  header: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 16,
  },
  titulo: {
    fontSize: THEME.text.heading.h3,
    color: THEME.colors.heading,
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    flexDirection: "column",
    gap: 16,
  },
  
});