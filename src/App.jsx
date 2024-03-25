import React from "react";

import Familia from "./components/basicos/Familia";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Card from "./components/layout/Card";
import "./App.css";
import FamiliaMenbro from "./components/basicos/FamiliaMenbro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import ListaProdutos from "./components/repeticao/ListaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";


export default () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">

        <Card titulo="Contador">
          <Mega></Mega>
        </Card>

        <Card titulo="Contador">
          <Contador numeroInicial={10}/>
        </Card>

        <Card titulo="Componente Controlado (Input)">
          <Input/>
        </Card>

        <Card titulo="Comunicação Indireta">
          <IndiretaPai/>
        </Card>
        
        <Card titulo="Comunicação Direta">
          <DiretaPai/>
        </Card>

        <Card titulo="Renderização Condicional">
          <ParOuImpar numero={20}/>
          <UsuarioInfo usuario={{nome: 'Fernando'}}/>
        </Card>
        
        <Card titulo="Desafio Repetição">
          <ListaProdutos/>
        </Card>
        
        <Card titulo="Repetição">
          <ListaAlunos/>
        </Card>

        <Card titulo="Componente com Filhos">
          <Familia sobrenome="Ferreira">
            <FamiliaMenbro nome="Pedro"></FamiliaMenbro>
            <FamiliaMenbro nome="Ana"></FamiliaMenbro>
            <FamiliaMenbro nome="Gustavo"></FamiliaMenbro>
          </Familia>
        </Card>

        <Card titulo="Exemplo de Card" color="#F80">
          <Aleatorio min={10} max={20} />
        </Card>
        <Card titulo="Exemplo Fragmento">
          <Fragmento />
        </Card>

        <Card titulo="Com Parametro">
          <ComParametro titulo="Segundo Componente" subtitulo="Muito Legal" />
        </Card>

        <Card titulo="Primeiro">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
};
