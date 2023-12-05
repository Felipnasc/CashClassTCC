import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Border, FontSize, FontFamily, Color } from "./GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";
import api from "../../Axios/axios"
import { useAuth } from "../../Context/Context";

export default function Pergu9({ navigation }) {

  const { user } = useAuth();
  const { login } = useAuth();

  const ProximoMudarStatus = () => {
    if (!user || !user.email) {
      console.error('E-mail do usuário não disponível');
      return;
    } else {
      if(user.atividade_presente > 2){
        navigation.navigate("Pergu10");
      } else {
        api.put('./usuario/alterar', {
          email: user.email, // Usa o e-mail do usuário obtido do contexto
          atividade_presente: 3,
        })
          .then(function (response) {
            if (response.data.errorStatus === false) {
              console.log('Status do usuário alterado com sucesso');
              login({
                ...user,
                atividade_presente: 3,
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
    <View style={[styles.vectorParent, styles.groupViewShadowBox]}>
      <Image
        style={[styles.frameChild, styles.frameLayout]}
        contentFit="cover"
        source={require("../../../assets/rectangle-85.png")}
      />
      <Text style={[styles.aFaltaDe, styles.oQueVocTypo]}>
        A falta de impostos levaria à ausência de serviços públicos, uma vez que
        os impostos são a principal fonte de financiamento do governo para
        serviços essenciais, como educação, saúde e infraestrutura.
      </Text>
      <View style={[styles.rectangleParent, styles.groupLayout2]}>
        <View style={[styles.groupChild, styles.groupChildBorder]} />
        <Text style={[styles.aFaltaDe1, styles.aFaltaDe1Typo]}>
          A falta de impostos resultaria na ausência de serviços públicos.
        </Text>
      </View>
      <Text style={[styles.oQueVoc, styles.oQueVocTypo]}>
        O que você acha que aconteceria se não houvesse impostos?
      </Text>
      <Pressable
        style={[styles.groupWrapper, styles.groupLayout1]}
        onPress={ProximoMudarStatus}
      >
        <View style={[styles.vectorGroup, styles.groupLayout1]}>
          <Image
            style={[styles.groupItem, styles.groupLayout1]}
            contentFit="cover"
            source={require("../../../assets/rectangle-37.png")}
          />
          <Pressable style={styles.prximo} onPress={ ProximoMudarStatus }>
            <Text style={styles.prximo1}>Próximo</Text>
          </Pressable>
        </View>
      </Pressable>
      <Image
        style={[styles.frameItem, styles.frameLayout]}
        contentFit="cover"
        source={require("../../../assets/rectangle-85.png")}
      />
      <View style={[styles.rectangleGroup, styles.groupLayout2]}>
        <View style={[styles.groupChild, styles.groupChildBorder]} />
        <Text style={[styles.pessoasComRenda, styles.aFaltaDe1Typo]}>
          Pessoas com renda acima de um determinado limite.
        </Text>
      </View>
      <Text style={[styles.quemPagaO, styles.oQueVocTypo]}>
        Quem paga o Imposto de Renda no Brasil?
      </Text>
      <Text style={[styles.oImpostoDe, styles.qualOTypo]}>
        O Imposto de Renda incide sobre a renda de pessoas físicas e jurídicas
        que ultrapassam um limite estabelecido pelas autoridades fiscais.
        Portanto, não se restringe apenas a empresários, e nem todos os cidadãos
        maiores de idade precisam pagar, mas sim aqueles que atingem um nível de
        renda que está sujeito à tributação.
      </Text>
      <Image
        style={[styles.frameInner, styles.frameLayout]}
        contentFit="cover"
        source={require("../../../assets/rectangle-85.png")}
      />
      <View style={[styles.rectangleContainer, styles.groupLayout2]}>
        <View style={[styles.groupChild, styles.groupChildBorder]} />
        <Text style={[styles.redistribuirARiqueza, styles.aFaltaDe1Typo]}>
          Redistribuir a riqueza, reduzindo as desigualdades.
        </Text>
      </View>
      <Text style={[styles.osImpostosSo, styles.qualOTypo]}>
        Os impostos são usados para coletar recursos dos mais ricos e
        redistribuí-los por meio de programas sociais e serviços públicos,
        reduzindo as disparidades econômicas e promovendo maior equidade na
        sociedade.
      </Text>
      <Text style={[styles.qualO, styles.qualOTypo]}>
        Qual é o papel dos impostos na redução das desigualdades sociais?
      </Text>
      <Image
        style={[styles.rectangleIcon, styles.frameLayout]}
        contentFit="cover"
        source={require("../../../assets/rectangle-85.png")}
      />
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupChild1, styles.groupLayout]} />
        <Text style={styles.paraEstimularA}>
          Para estimular a economia, reduzindo impostos e aumentando os gastos
          públicos.
        </Text>
      </View>
      <Text style={[styles.comoOsImpostos, styles.comoOsImpostosTypo]}>
        {" "}
        Como os impostos podem ser usados pelo governo em tempos de crise
        econômica?
      </Text>
      <Text style={[styles.aPolticaFiscal, styles.comoOsImpostosTypo]}>
        A política fiscal expansionista envolve injetar dinheiro na economia
        para estimular consumo e investimentos, sendo uma resposta comum em
        tempos de crise. Aumentar impostos ou reduzir serviços públicos pode
        agravar a situação econômica.
      </Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  groupViewShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  frameLayout: {
    width: 344,
    borderRadius: Border.br_26xl,
    position: "absolute",
  },
  oQueVocTypo: {
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  groupLayout2: {
    height: 51,
    width: 309,
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    backgroundColor: Color.colorGold,
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
  },
  aFaltaDe1Typo: {
    height: 39,
    alignItems: "center",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    top: 5,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  groupLayout1: {
    height: 45,
    width: 298,
    position: "absolute",
  },
  qualOTypo: {
    left: 48,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  groupLayout: {
    height: 83,
    width: 309,
    position: "absolute",
  },
  comoOsImpostosTypo: {
    left: 49,
    width: 297,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  frameChild: {
    top: 45,
    height: 510,
    left: 25,
    borderRadius: Border.br_26xl,
    position: "absolute",
  },
  aFaltaDe: {
    top: 253,
    left: 47,
    width: 297,
    color: Color.colorGray,
  },
  groupChild: {
    height: 51,
    width: 309,
    position: "absolute",
  },
  aFaltaDe1: {
    left: 32,
    width: 252,
  },
  rectangleParent: {
    top: 185,
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
  oQueVoc: {
    top: 66,
    left: 51,
    color: Color.colorBlue,
    width: 297,
  },
  groupItem: {
    borderRadius: Border.br_3xl,
    width: 298,
    left: 0,
    top: 0,
  },
  prximo1: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
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
    top: 2360,
    left: 50,
  },
  frameItem: {
    top: 578,
    height: 636,
    left: 25,
    borderRadius: Border.br_26xl,
    position: "absolute",
  },
  pessoasComRenda: {
    left: 53,
    width: 202,
  },
  rectangleGroup: {
    top: 676,
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
  quemPagaO: {
    top: 593,
    left: 70,
    width: 253,
    color: Color.colorBlue,
  },
  oImpostoDe: {
    top: 742,
    width: 297,
    color: Color.colorGray,
  },
  frameInner: {
    top: 1239,
    height: 500,
    left: 25,
    borderRadius: Border.br_26xl,
    position: "absolute",
  },
  redistribuirARiqueza: {
    left: 35,
    width: 241,
  },
  rectangleContainer: {
    top: 1369,
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
  osImpostosSo: {
    top: 1435,
    width: 301,
    height: 275,
    color: Color.colorGray,
  },
  qualO: {
    top: 1254,
    height: 100,
    color: Color.colorBlue,
    width: 297,
  },
  rectangleIcon: {
    top: 1765,
    left: 27,
    height: 571,
    borderRadius: Border.br_26xl,
    position: "absolute",
  },
  groupChild1: {
    borderWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    backgroundColor: Color.colorGold,
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
  },
  paraEstimularA: {
    top: 11,
    left: 29,
    width: 250,
    height: 62,
    alignItems: "center",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  groupView: {
    top: 1899,
    left: 44,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  comoOsImpostos: {
    top: 1782,
    color: Color.colorBlue,
  },
  aPolticaFiscal: {
    top: 1987,
    color: Color.colorGray,
  },
  vectorParent: {
    backgroundColor: "#494949",
    flex: 1,
    width: "100%",
    height: 2448,
    overflow: "hidden",
  },
});
