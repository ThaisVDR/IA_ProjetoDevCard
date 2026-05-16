import { StyleSheet } from "react-native";
import { THEME } from "../../styles/contants";

export const styles = StyleSheet.create({
  buttonGroupContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },

  buttonGroupButtonContainer: {
    borderWidth: 2,
    borderColor: THEME.colors.border.input,
    borderRadius: THEME.border.radius.md,
    paddingHorizontal: 6,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    flex: 1,
  },

  buttonGroupColorIndicator: {
    height: 24,
    width: 24,
    borderRadius: "100%",
  },

  buttonGroupButtonText: {
    borderColor: "#7d7d7d",
    fontWeight: "bold",
  },
});
