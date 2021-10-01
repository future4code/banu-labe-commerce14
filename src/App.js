import styled from "styled-components";
import produtosLista from "./produtos/produtos.json"
import { Card } from './Componentes/Card';
import React, {Component} from 'react'
import { Header } from "./Componentes/Header";

const ListContainer = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap:wrap;
`

class App extends Component {
  state = {
    produtos: produtosLista, 
  }

  render(){

  return <>
   <Header />



   <ListContainer>
        {this.state.produtos.map(produtos => {
               return <Card key={produtos.id} produtos={produtos} />
            })}
       
  </ListContainer>
  
</>
  }
}

export default App;

