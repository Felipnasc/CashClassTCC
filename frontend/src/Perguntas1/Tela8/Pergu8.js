import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, FontFamily, FontSize } from "./GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";
import api from "../../Axios/axios"
import { useAuth } from "../../Context/Context";

export default function Pergu8({ navigation }) {

  const { user } = useAuth();
  const { login } = useAuth();
  
  const ProximoMudarStatus = () => {
    if (!user || !user.email) {
      console.error('E-mail do usuário não disponível');
      return;
    } else {
      if(user.atividade_presente > 1){
        navigation.navigate("Pergu10");
      } else {
        api.put('./usuario/alterar', {
          email: user.email, // Usa o e-mail do usuário obtido do contexto
          atividade_presente: 2,
        })
          .then(function (response) {
            if (response.data.errorStatus === false) {
              console.log('Status do usuário alterado com sucesso');
              login({
                ...user,
                atividade_presente: 2,
              })
              navigation.navigate("Pergu10");
            } else {
              console.log(response.data.mensageStatus);
            }
          })
          .catch(function (error) {
            console.error('Erro ao alterar o status do usuário:', error);
          });
      }
    }
  };

  return (
    <ScrollView>
    <View style={styles.vectorParent}>
      <Image
        style={[styles.frameChild, styles.frameLayout]}
        contentFit="cover"
        source={require("../../../assets/rectangle-85.png")}
      />
      <View style={[styles.rectangleParent, styles.groupLayout1]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.aumenta, styles.aumentaTypo]}>Aumenta</Text>
      </View>
      <Text style={[styles.oQueAcontece, styles.inflaoTypo1]}>
        O que acontece com o poder de compra quando a inflação é baixa?
      </Text>
      <Image
        style={[styles.frameItem, styles.frameLayout]}
        contentFit="cover"
        source={require("../../../assets/rectangle-85.png")}
      />
      <View style={[styles.rectangleGroup, styles.groupLayout1]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.aumentaOsCustos, styles.aumentaTypo]}>
          Aumenta os custos de vida.
        </Text>
      </View>
      <Text style={[styles.comoAInflao, styles.inflaoTypo1]}>
        Como a inflação afeta os custos de vida das pessoas?
      </Text>
      <Text style={[styles.quandoHInflao, styles.inflaoTypo]}>
        Quando há inflação, os preços de bens e serviços sobem com o tempo. Isso
        faz com que as pessoas gastem mais dinheiro para comprar o que costumava
        ser mais barato, o que eleva o custo de vida e pode apertar o orçamento
        das pessoas.
      </Text>
      <Image
        style={[styles.frameInner, styles.framePosition]}
        contentFit="cover"
        source={require("../../../assets/rectangle-85.png")}
      />
      <Text style={[styles.aInflaoPode, styles.inflaoTypo]}>
        A inflação pode ser causada por dois principais fatores: aumento na
        demanda por bens e serviços (pressões inflacionárias de demanda) e
        aumento dos custos de produção, como salários, matérias-primas e energia
        (pressões inflacionárias de custo). Ambos esses fatores contribuem para
        o aumento geral dos preços na economia.
      </Text>
      <View style={[styles.rectangleContainer, styles.groupViewShadowBox]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.aumentoDaDemanda, styles.diminuiOsPadresTypo]}>
          Aumento da demanda e custos de produção.
        </Text>
      </View>
      <Text style={[styles.quaisSoOs, styles.inflaoTypo1]}>
        Quais são os principais fatores que podem causar inflação?
      </Text>
      <Pressable
        style={[styles.groupWrapper, styles.groupLayout]}
        onPress={ProximoMudarStatus}
      >
        <View style={[styles.vectorGroup, styles.groupLayout]}>
          <Image
            style={[styles.rectangleIcon, styles.groupLayout]}
            contentFit="cover"
            source={require("../../../assets/rectangle-37.png")}
          />
          <Pressable style={styles.prximo} onPress={ProximoMudarStatus}>
            <Text style={styles.prximo1}>Próximo</Text>
          </Pressable>
        </View>
      </Pressable>
      <Image
        style={[styles.frameChild1, styles.framePosition]}
        contentFit="cover"
        source={require("../../../assets/rectangle-85.png")}
      />
      <Text style={[styles.aAltaInflao, styles.inflaoTypo]}>
        A alta inflação leva a um rápido aumento nos preços de bens e serviços,
        reduzindo o poder de compra da moeda. Isso resulta em famílias comprando
        menos com a mesma quantidade de dinheiro, levando a ajustes nos padrões
        de consumo e à diminuição das compras de itens não essenciais.
      </Text>
      <Text style={[styles.quandoAInflao, styles.inflaoTypo1]}>
        Quando a inflação está alta, qual é o impacto nos padrões de consumo das
        famílias?
      </Text>
      <View style={[styles.groupView, styles.groupViewShadowBox]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.diminuiOsPadres, styles.diminuiOsPadresTypo]}>
          Diminui os padrões de consumo.
        </Text>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: 344,
    borderRadius: Border.br_26xl,
    left: 25,
    position: "absolute",
  },
  groupLayout1: {
    height: 51,
    width: 309,
    position: "absolute",
  },
  groupChildPosition: {
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
  },
  aumentaTypo: {
    height: 17,
    textAlign: "center",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  inflaoTypo1: {
    alignItems: "flex-end",
    color: Color.colorBlue,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  inflaoTypo: {
    color: Color.colorGray,
    alignItems: "flex-end",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  framePosition: {
    left: 29,
    width: 344,
    borderRadius: Border.br_26xl,
    position: "absolute",
  },
  groupViewShadowBox: {
    left: 46,
    height: 51,
    width: 309,
    position: "absolute",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  diminuiOsPadresTypo: {
    textAlign: "center",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupLayout: {
    height: 45,
    width: 298,
    position: "absolute",
  },
  frameChild: {
    top: 45,
    height: 233,
  },
  groupChild: {
    backgroundColor: Color.colorGold,
    borderStyle: "solid",
    borderColor: Color.colorDimgray,
    borderWidth: 1,
    height: 51,
    width: 309,
    position: "absolute",
  },
  aumenta: {
    top: 18,
    left: 119,
    alignItems: "center",
    width: 72,
    justifyContent: "center",
    display: "flex",
    lineHeight: 17,
  },
  rectangleParent: {
    top: 184,
    left: 42,
    width: 309,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  oQueAcontece: {
    top: 66,
    width: 297,
    left: 51,
  },
  frameItem: {
    top: 303,
    height: 500,
  },
  aumentaOsCustos: {
    top: 14,
    left: 43,
    width: 232,
    lineHeight: 20,
  },
  rectangleGroup: {
    top: 400,
    left: 42,
    width: 309,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  comoAInflao: {
    top: 317,
    left: 48,
    width: 297,
  },
  quandoHInflao: {
    top: 467,
    width: 297,
    left: 51,
  },
  frameInner: {
    top: 828,
    height: 613,
  },
  aInflaoPode: {
    top: 1001,
    left: 50,
    width: 301,
    height: 412,
  },
  aumentoDaDemanda: {
    top: 6,
    left: 55,
    width: 201,
    lineHeight: 19,
  },
  rectangleContainer: {
    top: 935,
  },
  quaisSoOs: {
    top: 831,
    left: 52,
    width: 297,
  },
  rectangleIcon: {
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
  },
  prximo1: {
    fontSize: 24,
    color: "#fff",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    textAlign: "center",
  },
  prximo: {
    left: 103,
    top: 5,
    position: "absolute",
  },
  vectorGroup: {
    left: 0,
    top: 0,
    width: 298,
  },
  groupWrapper: {
    top: 2112,
    left: 52,
  },
  frameChild1: {
    top: 1473,
    height: 611,
  },
  aAltaInflao: {
    top: 1675,
    width: 297,
    left: 51,
  },
  quandoAInflao: {
    top: 1492,
    left: 55,
    width: 291,
    height: 100,
  },
  diminuiOsPadres: {
    top: 4,
    left: 70,
    width: 171,
    height: 38,
  },
  groupView: {
    top: 1608,
  },
  vectorParent: {
    backgroundColor: "#494949",
    flex: 1,
    width: "100%",
    height: 2187,
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});