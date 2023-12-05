import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import { Border, Color, FontSize, FontFamily } from "./GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";

export default function Per6({navigation}){

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
  };  

  const handlePressQuestao2 = (resposta) => {
    console.log("Botão pressionado!", resposta);
    setRespostas((prevRespostas) => ({
      ...prevRespostas,
      questao2: prevRespostas.questao2 === resposta ? null : resposta,
    }));
  };  

  const handlePressQuestao3 = (resposta) => {
    console.log("Botão pressionado!", resposta);
    setRespostas((prevRespostas) => ({
      ...prevRespostas,
      questao3: prevRespostas.questao3 === resposta ? null : resposta,
    }));
  };  

  const handlePressQuestao4 = (resposta) => {
    console.log("Botão pressionado!", resposta);
    setRespostas((prevRespostas) => ({
      ...prevRespostas,
      questao4: prevRespostas.questao4 === resposta ? null : resposta,
    }));
  };  

  const calcularPontuacao = () => {
    const respostaCorretaQuestao1 = 'A falta de impostos resultaria na ausência de serviços públicos';
    const respostaCorretaQuestao2 = 'Pessoas com renda acima de um determinado limite';
    const respostaCorretaQuestao3 = 'Redistribuir a riqueza, reduzindo as desigualdades';
    const respostaCorretaQuestao4 = 'Para estimular a economia, reduzindo impostos e aumentando os gastos públicos';

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
      navigation.navigate("Pergu9");
    } else {
      navigation.navigate("Pergu101");
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
      
      {/*QUESTÃO 1*/}
      <Text style={[styles.oQueVoc, styles.oQueVocTypo]}>
        O que você acha que aconteceria se não houvesse impostos?
      </Text>

      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <Pressable onPress={() => handlePressQuestao1('O governo teria dinheiro de outras fontes para financiar serviços públicos')}>

          <View style={respostas.questao1 === 'O governo teria dinheiro de outras fontes para financiar serviços públicos' ? [styles.groupChild, styles.groupChildBorder2] : [styles.groupChild, styles.groupChildBorder]} />
        
          <Text style={respostas.questao1 === 'O governo teria dinheiro de outras fontes para financiar serviços públicos' ?[styles.oGovernoTeria, styles.paraTypo2] : [styles.oGovernoTeria, styles.paraTypo]}>O governo teria dinheiro de outras fontes para financiar serviços públicos</Text>
        </Pressable>
      </View>

      <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
        <Pressable onPress={() => handlePressQuestao1('A falta de impostos resultaria na ausência de serviços públicos')}>

          <View style={respostas.questao1 === 'A falta de impostos resultaria na ausência de serviços públicos' ?[styles.groupItem2, styles.groupParentLayout] : [styles.groupItem, styles.groupParentLayout]} />
      
          <Text style={respostas.questao1 === 'A falta de impostos resultaria na ausência de serviços públicos' ?[styles.aFaltaDe, styles.aFaltaDeTypo2]: [styles.aFaltaDe, styles.aFaltaDeTypo]}>A falta de impostos resultaria na ausência de serviços públicos</Text>
        </Pressable>
      </View>

      <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
        <Pressable onPress={() => handlePressQuestao1('Nada mudaria, pois os impostos são desnecessários')}>

          <View style={respostas.questao1 === 'Nada mudaria, pois os impostos são desnecessários' ? [styles.groupItem2, styles.groupParentLayout] : [styles.groupItem, styles.groupParentLayout]} />

          <Text style={respostas.questao1 === 'Nada mudaria, pois os impostos são desnecessários' ?[styles.nadaMudariaPois, styles.aFaltaDeTypo2]: [styles.nadaMudariaPois, styles.aFaltaDeTypo]}>Nada mudaria, pois os impostos são desnecessários</Text>
        </Pressable>
      </View>


      <Image
        style={[styles.frameItem, styles.frameLayout]}
        contentFit="cover"
        source={require("../../../assets/rectangle-85.png")}
      />

      {/*QUESTÃO 2*/}
      <Text style={[styles.quemPagaO, styles.oQueVocTypo]}>
        Quem paga o Imposto de Renda no Brasil?
      </Text>

      <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
        <Pressable onPress={() => handlePressQuestao2('Apenas empresários')}>

          <View style={respostas.questao2 === 'Apenas empresários' ?[styles.groupItem2, styles.groupParentLayout]: [styles.groupItem, styles.groupParentLayout]} />

          <Text style={respostas.questao2 === 'Apenas empresários' ? [styles.apenasEmpresrios, styles.paraTypo2]:
        [styles.apenasEmpresrios, styles.paraTypo]}>Apenas empresários</Text>
        </Pressable>
      </View>

      <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
        <Pressable onPress={() => handlePressQuestao2('Todos os cidadãos maiores de idade')}>

          <View style={respostas.questao2 === 'Todos os cidadãos maiores de idade' ? [styles.groupItem2, styles.groupParentLayout] : [styles.groupItem, styles.groupParentLayout]} />

          <Text style={respostas.questao2 === 'Todos os cidadãos maiores de idade' ? [styles.todosOsCidados, styles.todosOsCidadosTypo2]: [styles.todosOsCidados, styles.todosOsCidadosTypo]}>Todos os cidadãos maiores de idade</Text>
        </Pressable>
      </View>

      <Pressable style={[styles.groupPressable, styles.groupParentLayout]}>
        <Pressable onPress={() => handlePressQuestao2('Pessoas com renda acima de um determinado limite')}>

        <View style={respostas.questao2 === 'Pessoas com renda acima de um determinado limite' ? [styles.groupItem2, styles.groupParentLayout] : [styles.groupItem, styles.groupParentLayout]} />

        <Text style={respostas.questao2 === 'Pessoas com renda acima de um determinado limite' ? [styles.pessoasComRenda, styles.todosOsCidadosTypo2] : [styles.pessoasComRenda, styles.todosOsCidadosTypo]}>Pessoas com renda acima de um determinado limite</Text>
        </Pressable>
      </Pressable>


      <Image
        style={[styles.frameInner, styles.frameLayout]}
        contentFit="cover"
        source={require("../../../assets/rectangle-85.png")}
      />

      {/*QUESTÃO 3*/}
      <Text style={[styles.qualO, styles.qualOTypo]}>
        Qual é o papel dos impostos na redução das desigualdades sociais?
      </Text>

      <View style={[styles.groupView, styles.groupParentLayout]}>
        <Pressable onPress={() => handlePressQuestao3('Aumentar as desigualdades')}>

          <View style={respostas.questao3 === 'Aumentar as desigualdades' ? [styles.groupItem2, styles.groupParentLayout] : [styles.groupItem, styles.groupParentLayout]} />

          <Text style={respostas.questao3 === 'Aumentar as desigualdades' ? [styles.aumentarAsDesigualdades, styles.aFaltaDeTypo2] : [styles.aumentarAsDesigualdades, styles.aFaltaDeTypo]}>Aumentar as desigualdades</Text>
        </Pressable>
      </View>
      
      <View style={[styles.rectangleParent3, styles.groupParentLayout]}>
        <Pressable onPress={() => handlePressQuestao3('Não têm impacto nas desigualdades')}>

          <View style={respostas.questao3 === 'Não têm impacto nas desigualdades' ? [styles.groupItem2, styles.groupParentLayout] : [styles.groupItem, styles.groupParentLayout]} />

          <Text style={respostas.questao3 === 'Não têm impacto nas desigualdades' ? [styles.aFaltaDe, styles.aFaltaDeTypo2] : [styles.aFaltaDe, styles.aFaltaDeTypo]}>Não têm impacto nas desigualdades</Text>
        </Pressable>
      </View>

      <Pressable style={[styles.rectangleParent4, styles.groupParentLayout]}>
        <Pressable onPress={() => handlePressQuestao3('Redistribuir a riqueza, reduzindo as desigualdades')}>

          <View style={respostas.questao3 === 'Redistribuir a riqueza, reduzindo as desigualdades' ? [styles.groupItem2, styles.groupParentLayout] : [styles.groupItem, styles.groupParentLayout]} />

          <Text style={respostas.questao3 === 'Redistribuir a riqueza, reduzindo as desigualdades' ? [styles.nadaMudariaPois, styles.aFaltaDeTypo2] : [styles.nadaMudariaPois, styles.aFaltaDeTypo]}>Redistribuir a riqueza, reduzindo as desigualdades</Text>
        </Pressable>
      </Pressable>


      <Image
        style={[styles.rectangleIcon, styles.frameLayout]}
        contentFit="cover"
        source={require("../../../assets/rectangle-85.png")}
      />

      {/*QUESTÃO 4*/}
      
      <Text style={[styles.comoOsImpostos, styles.qualOTypo]}>
        Como os impostos podem ser usados pelo governo em tempos de crise econômica?
      </Text>

      <View style={[styles.rectangleParent5, styles.groupParentLayout]}>
        <Pressable onPress={() => handlePressQuestao4('Para aumentar os impostos e agravar a situação')}>

          <View style={respostas.questao4 === 'Para aumentar os impostos e agravar a situação' ? [styles.groupItem2, styles.groupParentLayout] : [styles.groupItem, styles.groupParentLayout]} />

          <Text style={respostas.questao4 === 'Para aumentar os impostos e agravar a situação' ? [styles.paraAumentarOs, styles.paraTypo2] : [styles.paraAumentarOs, styles.paraTypo]}>Para aumentar os impostos e agravar a situação</Text>
        </Pressable>
      </View>

      <View style={[styles.rectangleParent6, styles.groupParentLayout]}>
        <Pressable onPress={() => handlePressQuestao4('Para reduzir os serviços públicos')}>

          <View style={respostas.questao4 === 'Para reduzir os serviços públicos' ? [styles.groupItem2, styles.groupParentLayout] : [styles.groupItem, styles.groupParentLayout]} />

          <Text style={respostas.questao4 === 'Para reduzir os serviços públicos' ? [styles.paraReduzirOs, styles.paraTypo2] : [styles.paraReduzirOs, styles.paraTypo]}>Para reduzir os serviços públicos</Text>
        </Pressable>
      </View>

      <Pressable style={[styles.rectangleParent7, styles.groupChild9Layout]}>
        <Pressable onPress={() => handlePressQuestao4('Para estimular a economia, reduzindo impostos e aumentando os gastos públicos')}>

        <View style={respostas.questao4 === 'Para estimular a economia, reduzindo impostos e aumentando os gastos públicos' ? [styles.groupChild92, styles.groupChild9Layout] : [styles.groupChild9, styles.groupChild9Layout]} />

        <Text style={respostas.questao4 === 'Para estimular a economia, reduzindo impostos e aumentando os gastos públicos' ? [styles.paraEstimularA, styles.paraTypo2] : [styles.paraEstimularA, styles.paraTypo]}>Para estimular a economia, reduzindo impostos e aumentando os gastos públicos</Text>
        </Pressable>
      </Pressable>


      <Pressable style={[styles.groupWrapper, styles.groupLayout]}
      onPress={calcularPontuacao}
      >
        <View style={[styles.vectorGroup, styles.groupLayout]}>
          <Image
            style={[styles.groupChild6, styles.groupLayout]}
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
  frameLayout: {
    width: 344,
    borderRadius: Border.br_26xl,
    position: "absolute",
  },
  oQueVocTypo: {
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    color: Color.colorBlue,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  groupChildLayout: {
    height: 71,
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
  groupChildBorder2: {
    borderWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    backgroundColor: "#11AE04",
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
  },
  paraTypo: {
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
  paraTypo2: {
    alignItems: "center",
    color: "#FFFFFF",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  groupParentLayout: {
    height: 51,
    position: "absolute",
  },
  aFaltaDeTypo: {
    height: 39,
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
  aFaltaDeTypo2: {
    height: 39,
    alignItems: "center",
    color: "#FFFFFF",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  qualOTypo: {
    width: 297,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlue,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  todosOsCidadosTypo: {
    height: 35,
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
  todosOsCidadosTypo2: {
    height: 35,
    alignItems: "center",
    color: "#FFFFFF",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  groupLayout: {
    height: 45,
    width: 298,
    position: "absolute",
  },
  groupChild9Layout: {
    height: 83,
    width: 309,
    position: "absolute",
  },
  frameChild: {
    top: 45,
    height: 365,
    left: 25,
    borderRadius: Border.br_26xl,
    position: "absolute",
  },
  oQueVoc: {
    top: 60,
    left: 90,
    width: 214,
  },
  groupChild: {
    height: 71,
    width: 309,
    position: "absolute",
  },
  oGovernoTeria: {
    left: 8,
    width: 295,
    height: 61,
    top: 4,
  },
  rectangleParent: {
    top: 177,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 42,
  },
  groupItem: {
    borderWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    backgroundColor: Color.colorGold,
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
    width: 309,
    height: 51,
  },
  groupItem2: {
    borderWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    backgroundColor: "#11AE04",
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
    width: 309,
    height: 51,
  },
  aFaltaDe: {
    width: 252,
    left: 31,
    top: 5,
    lineHeight: 20,
  },
  rectangleGroup: {
    top: 263,
    width: 309,
    height: 51,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 42,
  },
  nadaMudariaPois: {
    left: 35,
    width: 250,
    top: 5,
  },
  rectangleContainer: {
    top: 329,
    width: 309,
    height: 51,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 42,
  },
  frameItem: {
    top: 438,
    height: 308,
    left: 25,
    borderRadius: Border.br_26xl,
    position: "absolute",
  },
  frameInner: {
    top: 774,
    left: 26,
    height: 350,
    borderRadius: Border.br_26xl,
    position: "absolute",
  },
  aumentarAsDesigualdades: {
    left: 5,
    width: 305,
    top: 12,
  },
  groupView: {
    top: 905,
    width: 310,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 42,
  },
  qualO: {
    top: 788,
    left: 50,
  },
  quemPagaO: {
    top: 447,
    left: 71,
    width: 251,
  },
  apenasEmpresrios: {
    top: 13,
    left: 76,
    width: 163,
    height: 36,
  },
  rectangleParent1: {
    top: 530,
    width: 309,
    height: 51,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 42,
  },
  todosOsCidados: {
    left: 53,
    width: 209,
    top: 5,
    lineHeight: 19
  },
  rectangleParent2: {
    top: 596,
    width: 309,
    height: 51,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 42,
  },
  pessoasComRenda: {
    top: 4,
    left: 25,
    width: 260,
    lineHeight: 19,
  },
  groupPressable: {
    top: 662,
    width: 309,
    height: 51,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 42,
  },
  rectangleParent3: {
    top: 971,
    width: 309,
    height: 51,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 42,
  },
  rectangleParent4: {
    top: 1037,
    width: 309,
    height: 51,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 42,
  },
  rectangleIcon: {
    top: 1152,
    height: 384,
    left: 25,
    borderRadius: Border.br_26xl,
    position: "absolute",
  },
  groupChild6: {
    borderRadius: Border.br_3xl,
    width: 298,
    left: 0,
    top: 0,
  },
  prximo: {
    left: 103,
    fontSize: 24,
    color: "#fff",
    top: 5,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  vectorGroup: {
    left: 0,
    top: 0,
    width: 298,
  },
  groupWrapper: {
    top: 1564,
    left: 48,
  },
  comoOsImpostos: {
    top: 1167,
    left: 48,
  },
  paraAumentarOs: {
    width: 226,
    height: 54,
    top: 4,
    left: 42,
    color: Color.colorDimgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  rectangleParent5: {
    top: 1284,
    width: 309,
    height: 51,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 42,
  },
  paraReduzirOs: {
    top: 2,
    left: 63,
    width: 184,
    height: 52,
  },
  rectangleParent6: {
    top: 1350,
    width: 309,
    height: 51,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 42,
  },
  groupChild92: {
    borderWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    backgroundColor: "#11AE04",
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
  },
  groupChild9: {
    borderWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    backgroundColor: Color.colorGold,
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
  },
  paraEstimularA: {
    top: 9,
    width: 250,
    height: 73,
    left: 32,
  },
  rectangleParent7: {
    top: 1416,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 42,
  },
  vectorParent: {
    backgroundColor: "#494949",
    flex: 1,
    width: "100%",
    height: 1638,
    overflow: "hidden",
  },
});