import React, { useState } from 'react';
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Alert } from "react-native";
import { Border, Color, FontFamily, FontSize } from "./GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";

export default function Pergu7({ navigation }) {

  const [respostas, setRespostas] = useState({
    questao1: null,
    questao2: null,
    questao3: null,
    questao4: null,
  });

  const handlePressQuestao1 = (resposta) => {
    console.log("Botão pressionado!", resposta);
    setRespostas((prevRespostas) => ({
      ...prevRespostas,
      questao1: prevRespostas.questao1 === resposta ? null : resposta,
    }));
    console.log(resposta)
  };  

  const handlePressQuestao2 = (resposta) => {
    console.log("Botão pressionado!", resposta);
    setRespostas((prevRespostas) => ({
      ...prevRespostas,
      questao2: prevRespostas.questao2 === resposta ? null : resposta,
    }));
    console.log(resposta)
  };  

  const handlePressQuestao3 = (resposta) => {
    console.log("Botão pressionado!", resposta);
    setRespostas((prevRespostas) => ({
      ...prevRespostas,
      questao3: prevRespostas.questao3 === resposta ? null : resposta,
    }));
    console.log(resposta)
  };  

  const handlePressQuestao4 = (resposta) => {
    console.log("Botão pressionado!", resposta);
    setRespostas((prevRespostas) => ({
      ...prevRespostas,
      questao4: prevRespostas.questao4 === resposta ? null : resposta,
    }));
    console.log(resposta)
  };  

  const calcularPontuacao = () => {
    const respostaCorretaQuestao1 = 'Aumenta';
    const respostaCorretaQuestao2 = 'Aumenta os custos de vida';
    const respostaCorretaQuestao3 = 'Aumento da demanda e custos de produção';
    const respostaCorretaQuestao4 = 'Diminui os padrões de consumo';

    let pontuacao = 0;

    if (respostas.questao1 === respostaCorretaQuestao1) {
      pontuacao += 1;
    }

    if (respostas.questao2 === respostaCorretaQuestao2) {
      pontuacao += 1;
    }

    if (respostas.questao3 === respostaCorretaQuestao3) {
      pontuacao += 1;
    }

    if (respostas.questao4 === respostaCorretaQuestao4) {
      pontuacao += 1;
    }

    if (pontuacao === 4) {
      Alert.alert(
        "", // Título vazio
        "Todas as respostas corretas!",
        [
          {
            text: "Fechar",
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
      navigation.navigate("Pergu8");
    } else {
      navigation.navigate("Pergu101");
    }
  };

  return (
    <ScrollView>
    <View style={[styles.vectorParent, styles.parentShadowBox]}>

      <Image
        style={[styles.frameChild, styles.frameLayout]}
        contentFit="cover"
        source={require("../../../assets/rectangle-85.png")}
      />
      {/*QUESTÃO 1*/}
      <Text style={[styles.oQueAcontece, styles.quaisSoOsTypo]}>
        O que acontece com o poder de compra quando a inflação é baixa?
      </Text>

      <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
        <Pressable onPress={() => handlePressQuestao1('Aumenta')}>

          <View style={respostas.questao1 === 'Aumenta' ? [styles.groupChild2, styles.groupChildPosition] : [styles.groupChild, styles.groupChildPosition]} />

          <Text style={respostas.questao1 === 'Aumenta' ? [styles.aumenta, styles.diminuiTypo2] : [styles.aumenta, styles.diminuiTypo]}>Aumenta</Text>
        </Pressable>
      </View>

      <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
        <Pressable onPress={() => handlePressQuestao1('Diminui')}>

          <View style={respostas.questao1 === 'Diminui' ? [styles.groupChild2, styles.groupChildPosition]: [styles.groupChild, styles.groupChildPosition]} />
          
        </Pressable>
        <Text style={respostas.questao1 === 'Diminui' ? [styles.diminui, styles.diminuiTypo2] : [styles.diminui, styles.diminuiTypo]}>Diminui</Text>
      </View>

      <View style={[styles.rectangleParent, styles.groupParentLayout]}>
        <Pressable onPress={() => handlePressQuestao1('Mantém-se estável')}>

          <View style={respostas.questao1 === 'Mantém-se estável' ? [styles.groupChild2, styles.groupChildPosition]: [styles.groupChild, styles.groupChildPosition]} />

        </Pressable>
        <Text style={respostas.questao1 === 'Mantém-se estável' ? [styles.mantmSeEstvel2, styles.quaisSoOsFlexBox] : [styles.mantmSeEstvel, styles.quaisSoOsFlexBox]}>Mantém-se estável</Text>
      </View>

      
      <Image
        style={[styles.frameItem, styles.frameLayout]}
        contentFit="cover"
        source={require("../../../assets/rectangle-85.png")}
      />


      {/*QUESTÃO 2*/}
      <Text style={[styles.comoAInflao, styles.comoAInflaoPosition]}>
        Como a inflação afeta os custos de vida das pessoas?
      </Text>

      <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
        <Pressable onPress={() => handlePressQuestao2('Aumenta os custos de vida')}>

          <View style={respostas.questao2 === 'Aumenta os custos de vida' ? [styles.groupChild2, styles.groupChildPosition]: [styles.groupChild, styles.groupChildPosition]} />

        </Pressable>
        <Text style={respostas.questao2 === 'Aumenta os custos de vida' ? [styles.reduzOsCustos2, styles.rectangleParentPosition] : [styles.reduzOsCustos, styles.rectangleParentPosition]}>Aumenta os custos de vida</Text>
      </View>

      <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
        <Pressable onPress={() => handlePressQuestao2('Reduz os custos de vida')}>

          <View style={respostas.questao2 === 'Reduz os custos de vida' ? [styles.groupChild2, styles.groupChildPosition]: [styles.groupChild, styles.groupChildPosition]} />

        </Pressable>
        <Text style={respostas.questao2 === 'Reduz os custos de vida' ? [styles.reduzOsCustos2, styles.rectangleParentPosition] : [styles.reduzOsCustos, styles.rectangleParentPosition]}>Reduz os custos de vida</Text>
      </View>

      <View style={[styles.groupView, styles.groupParentLayout]}>
        <Pressable onPress={() => handlePressQuestao2('Aumenta os padrões de consumo')}>

          <View style={respostas.questao2 === 'Aumenta os padrões de consumo' ? [styles.groupChild2, styles.groupChildPosition]: [styles.groupChild, styles.groupChildPosition]} />

        </Pressable>
        <Text style={respostas.questao2 === 'Aumenta os padrões de consumo' ? [styles.aumentaOsPadres, styles.aumentaTypo2] : [styles.aumentaOsPadres, styles.aumentaTypo]}>Aumenta os padrões de consumo</Text>
      </View>


      <Image
        style={[styles.frameInner, styles.framePosition]}
        contentFit="cover"
        source={require("../../../assets/rectangle-85.png")}
      />


      {/*QUESTÃO 3*/}
      <Text style={[styles.quaisSoOs, styles.quaisSoOsTypo]}>
        Quais são os principais fatores que podem causar inflação?
      </Text>

      <View style={[styles.rectangleParent5, styles.rectangleParentPosition]}>
        <Pressable onPress={() => handlePressQuestao3('Aumento da demanda e custos de produção')}>

          <View style={respostas.questao3 === 'Aumento da demanda e custos de produção' ? [styles.groupChild2, styles.groupChildPosition]: [styles.groupChild, styles.groupChildPosition]} />

        </Pressable>
        <Text style={respostas.questao3 === 'Aumento da demanda e custos de produção' ? [styles.aumentoDaDemanda2, styles.demandaLayout] : [styles.aumentoDaDemanda, styles.demandaLayout]}>Aumento da demanda e custos de produção</Text>
      </View>

      <View style={[styles.rectangleParent4, styles.rectangleParentPosition]}>
        <Pressable onPress={() => handlePressQuestao3('Diminuição da demanda e custos de produção')}>

          <View style={respostas.questao3 === 'Diminuição da demanda e custos de produção' ? [styles.groupChild2, styles.groupChildPosition] : [styles.groupChild, styles.groupChildPosition]} />

        </Pressable>
        <Text style={respostas.questao3 === 'Diminuição da demanda e custos de produção' ? [styles.diminuioDaDemanda, styles.diminuiOsPadresTypo2] : [styles.diminuioDaDemanda, styles.diminuiOsPadresTypo]}>Diminuição da demanda e custos de produção</Text>
      </View>

      <View style={[styles.rectangleParent3, styles.groupParentLayout]}>
        <Pressable onPress={() => handlePressQuestao3('Estabilidade da demanda e custos de produção')}>

        <View style={respostas.questao3 === 'Estabilidade da demanda e custos de produção' ? [styles.groupChild2, styles.groupChildPosition]: [styles.groupChild, styles.groupChildPosition]} />

        </Pressable>
        <Text style={respostas.questao3 === 'Estabilidade da demanda e custos de produção' ? [styles.estabilidadeDaDemanda2, styles.comoAInflaoPosition] : [styles.estabilidadeDaDemanda, styles.comoAInflaoPosition]}>Estabilidade da demanda e custos de produção</Text>
      </View>
      
      
      <Image
        style={[styles.frameChild1, styles.framePosition]}
        contentFit="cover"
        source={require("../../../assets/rectangle-85.png")}
      />


      {/*qQUESTÃO 4*/}
      <Text style={styles.quandoAInflao}>
        Quando a inflação está alta, qual é o impacto nos padrões de consumo das
        famílias?
      </Text>

      <View style={[styles.rectangleParent6, styles.rectangleParentPosition]}>
        <Pressable onPress={() => handlePressQuestao4('Aumenta os padrões de consumo')}>

          <View style={respostas.questao4 === 'Aumenta os padrões de consumo' ? [styles.groupChild2, styles.groupChildPosition] : [styles.groupChild, styles.groupChildPosition]} />

        </Pressable>
        <Text style={respostas.questao4 === 'Aumenta os padrões de consumo' ? [styles.aumentaOsPadres1, styles.aumentaTypo2]: [styles.aumentaOsPadres1, styles.aumentaTypo]}>Aumenta os padrões de consumo</Text>
      </View>
      
      <View style={[styles.rectangleParent7, styles.groupParentLayout]}>
        <Pressable onPress={() => handlePressQuestao4('Diminui os padrões de consumo')}>

        <View style={respostas.questao4 === 'Diminui os padrões de consumo' ? [styles.groupChild2, styles.groupChildPosition] : [styles.groupChild, styles.groupChildPosition]} />

        </Pressable>
        <Text style={respostas.questao4 === 'Diminui os padrões de consumo' ? [styles.diminuiOsPadres, styles.diminuiOsPadresTypo2]: [styles.diminuiOsPadres, styles.diminuiOsPadresTypo]}>Diminui os padrões de consumo</Text>
      </View>

      <View style={[styles.rectangleParent8, styles.rectangleParentPosition]}>
        <Pressable onPress={() => handlePressQuestao4('Não afeta os padrões de consumo')}>

        <View style={respostas.questao4 === 'Não afeta os padrões de consumo' ? [styles.groupChild2, styles.groupChildPosition] : [styles.groupChild, styles.groupChildPosition]} />

        </Pressable>
        <Text style={respostas.questao4 === 'Não afeta os padrões de consumo' ? [styles.noAfetaOs2, styles.quaisSoOsFlexBox]: [styles.noAfetaOs, styles.quaisSoOsFlexBox]}>Não afeta os padrões de consumo</Text>
      </View>


      <Pressable
        style={[styles.groupWrapper, styles.groupLayout]}
        onPress={calcularPontuacao}
      >
        <View style={[styles.vectorGroup, styles.groupLayout]}>
          <Image
            style={[styles.rectangleIcon, styles.groupLayout]}
            contentFit="cover"
            source={require("../../../assets/rectangle-37.png")}
          />
          <Text style={styles.prximo}>Próximo</Text>
        </View>
      </Pressable>

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  parentShadowBox: {
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
    left: 25,
    position: "absolute",
  },
  groupParentLayout: {
    height: 51,
    width: 309,
  },
  groupChildPosition: {
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
  },
  quaisSoOsFlexBox: {
    justifyContent: "center",
    display: "flex",
  },
  diminuiTypo: {
    height: 17,
    textAlign: "center",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  diminuiTypo2: {
    height: 17,
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  quaisSoOsTypo: {
    width: 297,
    alignItems: "flex-end",
    color: Color.colorBlue,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    fontSize: FontSize.size_xl,
  },
  aumentaTypo: {
    height: 39,
    textAlign: "center",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  aumentaTypo2: {
    height: 39,
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangleParentPosition: {
    left: 43,
    position: "absolute",
  },
  comoAInflaoPosition: {
    left: 48,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  framePosition: {
    left: 26,
    width: 344,
    borderRadius: Border.br_26xl,
    position: "absolute",
  },
  diminuiOsPadresTypo: {
    height: 38,
    textAlign: "center",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  diminuiOsPadresTypo2: {
    height: 38,
    textAlign: "center",
    color: "#ffffff",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  demandaLayout: {
    width: 201,
    top: 7,
  },
  groupLayout: {
    height: 45,
    width: 298,
    position: "absolute",
  },
  frameChild: {
    top: 45,
    height: 365,
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
  groupChild2: {
    backgroundColor: "#11AE04",
    borderStyle: "solid",
    borderColor: Color.colorDimgray,
    borderWidth: 1,
    height: 51,
    width: 309,
    position: "absolute",
  },
  mantmSeEstvel: {
    top: 15,
    left: 77,
    width: 155,
    height: 20,
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  mantmSeEstvel2: {
    top: 15,
    left: 77,
    width: 155,
    height: 20,
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    color: "#FFFFFF",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  rectangleParent: {
    top: 325,
    left: 42,
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
  diminui: {
    left: 120,
    width: 66,
    top: 18,
    lineHeight: 18,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  rectangleGroup: {
    top: 254,
    left: 42,
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
  aumenta: {
    left: 119,
    width: 72,
    top: 15,
    lineHeight: 20,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  rectangleContainer: {
    top: 184,
    left: 42,
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
  oQueAcontece: {
    top: 66,
    left: 51,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  frameItem: {
    top: 438,
    height: 316,
  },
  aumentaOsPadres: {
    width: 208,
    top: 5,
    left: 51,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  groupView: {
    top: 667,
    left: 42,
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
  reduzOsCustos: {
    top: 17,
    width: 232,
    lineHeight: 17,
    textAlign: "center",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  reduzOsCustos2: {
    top: 17,
    width: 232,
    lineHeight: 17,
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  rectangleParent1: {
    top: 601,
    left: 42,
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
  rectangleParent2: {
    top: 535,
    left: 42,
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
  comoAInflao: {
    top: 452,
    width: 297,
    alignItems: "flex-end",
    color: Color.colorBlue,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    fontSize: FontSize.size_xl,
  },
  frameInner: {
    top: 774,
    height: 329,
  },
  estabilidadeDaDemanda: {
    top: 4,
    width: 218,
    height: 43,
    alignItems: "center",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  estabilidadeDaDemanda2: {
    top: 4,
    width: 218,
    height: 43,
    alignItems: "center",
    color: "#FFFFFF",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  rectangleParent3: {
    top: 1012,
    left: 42,
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
  diminuioDaDemanda: {
    left: 60,
    width: 201,
    top: 5,
    lineHeight: 19,
  },
  rectangleParent4: {
    top: 947,
    height: 51,
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
  aumentoDaDemanda: {
    left: 57,
    top: 20,
    lineHeight: 19,
    textAlign: "center",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  aumentoDaDemanda2: {
    left: 57,
    top: 20,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangleParent5: {
    top: 881,
    height: 51,
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
  quaisSoOs: {
    top: 777,
    left: 49,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  rectangleIcon: {
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
  },
  prximo: {
    left: 103,
    fontSize: 24,
    color: "#fff",
    top: 5,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    textAlign: "center",
    position: "absolute",
  },
  vectorGroup: {
    left: 0,
    top: 0,
    width: 298,
  },
  groupWrapper: {
    top: 1518,
    left: 45,
  },
  frameChild1: {
    top: 1131,
    height: 359,
  },
  aumentaOsPadres1: {
    left: 66,
    width: 186,
    top: 5,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  rectangleParent6: {
    top: 1265,
    height: 51,
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
  quandoAInflao: {
    top: 1150,
    left: 52,
    width: 291,
    height: 100,
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
  diminuiOsPadres: {
    top: 5,
    left: 70,
    width: 171,
  },
  rectangleParent7: {
    top: 1331,
    left: 44,
    position: "absolute",
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
  noAfetaOs: {
    top: 5,
    left: 58,
    width: 194,
    height: 41,
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  noAfetaOs2: {
    top: 5,
    left: 58,
    width: 194,
    height: 41,
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    color: "#FFFFFF",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  rectangleParent8: {
    top: 1397,
    height: 51,
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
  vectorParent: {
    backgroundColor: "#494949",
    flex: 1,
    width: "100%",
    height: 1587,
    overflow: "hidden",
  },
});
