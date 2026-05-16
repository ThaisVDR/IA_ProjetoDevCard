import { THEME } from "../../styles/contants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#3783f6",
    borderRadius: THEME.border.radius.xl,
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },

  cardAvatarContainer: {
    backgroundColor: "rgba(193, 220, 255, 0.4)",
    padding: 4,
    borderRadius: "100%",
  },

  cardAvatarSubContainer: {
    backgroundColor: "#f8fbff",
    borderRadius: "100%",
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },

  cardAvatarLetter: {
    color: "#3783f6",
    fontSize: THEME.text.heading.h2,
    fontWeight: "bold",
  },

  cardTitle: {
    color: "#f8fbff",
    fontSize: THEME.text.heading.h2,
    fontWeight: "bold",
    textAlign: "center",
  },

  cardText: {
    color: "#d5e5ff",
    fontSize: 16,
  },

  cardSubtitle: {
    color: "#d5e5ff",
    fontSize: 14,
  },

  cardSeparator: {
    backgroundColor: "rgba(248, 251, 255, 0.3)",
    height: 1,
    width: 250,
    marginVertical: 8,
  },

  cardRole: {
    color: "#f8fbff",
    fontSize: THEME.text.heading.h4,
    fontWeight: "bold",
  },

  cardBadgeContainer: {
    backgroundColor: "#ffc124",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: THEME.border.radius.xxl,
  },

  cardBadgeText: {
    color: "#4c3600",
    fontWeight: "bold",
    letterSpacing: 1,
  },

  cardTextGroup: {
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});
