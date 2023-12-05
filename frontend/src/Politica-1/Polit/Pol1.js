import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { FontFamily, FontSize, Color } from "./GlobalStyles";

export default function Pol1({ navigation }) {
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.termosDeUso, styles.termosTypo]}>
        <Text style={styles.sectionNumber}>Termos de Uso do Cash Class</Text>

        <Text>
          Bem-vindo ao Cash Class! Estes Termos de Uso são um acordo legal entre você (doravante referido como "usuário", "você" ou "seu") e a equipe do Cash Class (doravante referido como "nós", "nosso" ou "do Cash Class"). Ao acessar e utilizar nosso aplicativo, você concorda em cumprir os seguintes termos e condições. Leia atentamente os Termos de Uso antes de utilizar o Cash Class. Se você não concordar com algum destes termos, por favor, não utilize nosso aplicativo.
        </Text>
      </Text>

      <Text style={[styles.termosDeUso, styles.termosTypo]}>
        <Text style={styles.sectionNumber}>1. Uso do Aplicativo</Text>

        <Text>
          1.1. O Cash Class é um aplicativo de ensino que permite aos usuários acessar conteúdo educacional.
        </Text>
        <Text>
          1.2. Você concorda em usar o Cash Class apenas para fins educacionais legítimos.
        </Text>
        <Text>
          1.3. Você é responsável por manter a confidencialidade de suas credenciais de acesso.
        </Text>
      </Text>

      <Text style={[styles.termosDeUso, styles.termosTypo]}>
        <Text style={styles.sectionNumber}>2. Política de Privacidade</Text>

        <Text>
          2.1. O Cash Class valoriza a sua privacidade. Nossa Política de Privacidade explica como coletamos, usamos e protegemos suas informações pessoais. Certifique-se de ler e entender nossa Política de Privacidade.
        </Text>
      </Text>

      <Text style={[styles.termosDeUso, styles.termosTypo]}>
        <Text style={styles.sectionNumber}>3. Conteúdo do Usuário</Text>

        <Text>
          3.1. Você pode fornecer informações pessoais, como nome e endereço de e-mail, ao criar uma conta no Cash Class. Essas informações são coletadas e processadas de acordo com nossa Política de Privacidade.
        </Text>
        <Text>
          3.2. Você é o único responsável por qualquer conteúdo que você compartilhe ou envie através do Cash Class.
        </Text>
      </Text>

      <Text style={[styles.termosDeUso, styles.termosTypo]}>
        <Text style={styles.sectionNumber}>4. Direitos de Propriedade</Text>

        <Text>
          4.1. O conteúdo disponível no Cash Class, incluindo textos, imagens, vídeos e outros materiais, é protegido por direitos autorais e outras leis de propriedade intelectual. Você concorda em respeitar esses direitos e não utilizar o conteúdo de forma não autorizada.
        </Text>
      </Text>

      <Text style={[styles.termosDeUso, styles.termosTypo]}>
        <Text style={styles.sectionNumber}>5. Limitações de Responsabilidade</Text>

        <Text>
          5.1. O Cash Class dedica-se a fornecer informações precisas e atualizadas. No entanto, é importante ressaltar que o Cash Class não fornece recomendações de compra de ações ou investimentos, nem sugere a abertura de contas em corretoras. Nossa missão é disponibilizar informações de mercado e destacar oportunidades atuais. 
        </Text>
      </Text>

      <Text style={[styles.termosDeUso, styles.termosTypo]}>
        <Text style={styles.sectionNumber}>6. Modificações nos Termos de Uso</Text>

        <Text>
          6.1. Podemos atualizar ou modificar estes Termos de Uso periodicamente. Recomendamos que você reveja esses termos regularmente para se manter informado sobre quaisquer alterações.
        </Text>
      </Text>

      <Text style={[styles.termosDeUso, styles.termosTypo]}>
        <Text style={styles.sectionNumber}>7. Encerramento da Conta</Text>

        <Text>
          7.1. Reservamo-nos o direito de encerrar sua conta e acesso ao Cash Class a qualquer momento, por qualquer motivo, incluindo violações destes Termos de Uso.
        </Text>
      </Text>

      <Text style={[styles.termosDeUso, styles.termosTypo]}>
        <Text style={styles.sectionNumber}>8. Contato</Text>

        <Text>
          8.1. Se você tiver alguma dúvida ou preocupação sobre estes Termos de Uso ou a Política de Privacidade do Cash Class, entre em contato conosco pelo e-mail [Aellycvt@gmail.com].
        </Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: Color.colorBlack,
  },
  termosTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    color: Color.colorSnow,
    marginBottom: 20,
  },
  sectionNumber: {
    fontSize: FontSize.size_lg,
    fontWeight: "bold",
  },
  termosDeUso: {
    marginBottom: 10,
    top: 30,
  },
});
