import React, { useState, useRef } from "react";
import { FiSearch } from "react-icons/fi";

import api from "./services/api";

import {
  Container,
  H1,
  ContainerSearch,
  Input,
  Button,
  Main,
  Span,
} from "./styles";

function App() {
  const [cep, setCep] = useState("");
  const input = useRef();

  async function handleSearch() {
    if (input.current.value === "") {
      alert("Preencha algum cep!");
      return;
    }

    try {
      const { data: response } = await api.get(`${input.current.value}/json`);
      setCep(response);

    } catch {
      alert("erro ao buscar");
    }
  }

  return (
    <Container>
      <H1>Pesquisar CEP</H1>

      <ContainerSearch>
        <Input 
        ref={input} 
        type="text" 
        placeholder="Digite seu cep..." 
        />
        <Button onClick={handleSearch}>
          <FiSearch />
        </Button>
      </ContainerSearch>

      {cep != "" && (
        <Main>
          <h2>CEP: {cep.cep}</h2>

          <Span>Rua: {cep.logradouro}</Span>
          <Span>Bairro: {cep.bairro}</Span>
          <Span>
            Localidade: {cep.localidade}-{cep.uf}
          </Span>
        </Main>
      )}
    </Container>
  );
}

export default App;
