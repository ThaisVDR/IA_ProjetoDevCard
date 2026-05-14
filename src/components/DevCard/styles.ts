import { StyleSheet } from "react-native";
import { THEME } from "../../styles/contants";

export const styles = StyleSheet.create({
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
cardAvatarLetter: {
    fontSize: THEME.text.heading.h2,
    color: '#3783f6',
    fontWeight: "bold",
},
  cardTitulo: {
    fontSize: THEME.text.heading.h2,
    color: '#f8fbff',
    fontWeight: "bold",
  },
   cardTexto: {
    fontSize: 16,
    color: '#f8fbff',
  },
  cardSubtitulo: {
    fontSize: 12,
    color: '#ffffff',
  },

  cardSeparator: {
    backgroundColor: '#ffffff',
    width: 250,
    height: 1,
    marginVertical: 16,
  },
  cardTituloRole:{
   color: '#f8fbff',
    fontSize: THEME.text.heading.h4,
    fontWeight: "bold",
  },
  cardBadge: {
    backgroundColor: '#e6ba2b',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: THEME.border.radius.xxl,
    marginTop: 8,
  },
  cardBadgeTexto: {
    color: '#000000',
    fontWeight: "bold",
    letterSpacing: 1,
  },
  cardTituloGroup:{
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});