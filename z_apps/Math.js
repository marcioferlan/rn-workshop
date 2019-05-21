import React from "react";
import styled from "styled-components/native";

export default () => {
  const [id, setId] = React.useState(0);
  const [desafio, setDesafio] = React.useState("");
  const [resultado, setResultado] = React.useState("");
  const [resposta, setResposta] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");

  React.useEffect(() => {
    const n1 = Math.floor(1 + Math.random() * 15);
    const op = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)];
    const n2 = Math.floor(1 + Math.random() * 15);
    const desafio = `${n1} ${op} ${n2}`;

    setDesafio(desafio);
    setResultado(String(eval(desafio).toFixed(2)));
  }, [id]);

  function confirmar() {
    setMensagem(
      parseFloat(resposta) === parseFloat(resultado)
        ? "Parabéns!!!"
        : "Tente novamente..."
    );
  }

  function desistir() {
    setMensagem(`A resposta certa é ${parseFloat(resultado, 10)}`);
  }

  function reiniciar() {
    setId(Date.now());
    setMensagem("");
    setResposta("");
  }

  return (
    <Tela>
      <Mensagem>Desafio de Matemática</Mensagem>

      <Desafio>{desafio}</Desafio>

      <Resposta
        placeholder="Responda aqui..."
        value={resposta}
        onChangeText={setResposta}
      />

      <Mensagem>{mensagem} </Mensagem>

      <Botao onPress={confirmar}>
        <Texto blue>Confirmar</Texto>
      </Botao>

      <Botao onPress={desistir}>
        <Texto>Desistir</Texto>
      </Botao>

      <Botao onPress={reiniciar}>
        <Texto red>Reiniciar</Texto>
      </Botao>
    </Tela>
  );
};

const Tela = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Mensagem = styled.Text`
  margin: 15px;
`;

const Desafio = styled.Text`
  margin: 10px;
`;

const Resposta = styled.TextInput`
  margin: 20px;
  text-align: center;
`;

const Texto = styled.Text`
  margin: 10px;
`;

const Botao = styled.TouchableOpacity`
  margin: 10px;
`;
