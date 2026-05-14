import { Text, View } from "react-native";
import {styles} from "../DevCard/styles";

type Props = {
    devInfo: {}
}


export function DevCard() {
  return (

 <View style={styles.cardContainer}>
          <View style={styles.cardAvatar}>
            <View style={styles.cardAvatarSub}>
              <Text style={styles.cardAvatarLetter}>T</Text>
            </View>
          </View>
          <View style={styles.cardTituloGroup}>
          <Text style={styles.cardTitulo}>Thais Vitoria</Text>
         <View style={styles.cardTituloGroup}>
          <Text style={styles.cardTexto}>Desenvolvedora</Text>
          <Text style={styles.cardSubtitulo}>LogiTech</Text>
         </View>
          </View>
          <View style={styles.cardSeparator} />
          <View style={styles.cardTituloGroup}>
          <Text style={styles.cardSubtitulo}>Especialista em</Text>
          <Text style={styles.cardTituloRole}>Front-End</Text>
          </View>
          <View style={styles.cardBadge}>
            <Text style={styles.cardBadgeTexto}>Especialista</Text>
          </View>
          <Text style={styles.cardSubtitulo}>12 anos de experiência</Text>
        </View>
  );
}

