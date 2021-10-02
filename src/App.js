import styled from "styled-components";
import produtosLista from "./produtos/produtos.json"
import { Card } from './Componentes/Card';
import React, {Component} from 'react'
import { Header } from "./Componentes/Header";
import { Filters } from "./Componentes/Filtros";

const ListContainer = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap:wrap;
`

class App extends Component {
  state = {
    produtos: produtosLista,
    query: "",
    precoMinimo: "",
    precoMaximo: "",
    order: 1 
  }

  
  updateQuery = (ev) => {
    this.setState({
       query: ev.target.value
    })
 }

 updatePrecoMinimo = (ev) => {
    this.setState({
       precoMinimo: ev.target.value
    })
 }

 updatePrecoMaximo = (ev) => {
    this.setState({
       precoMaximo: ev.target.value
    })
 }

updateOrder = (ev) => {
    this.setState({
       order: ev.target.value
    })
 }


  render(){

  return <>
   <Header />

   <Filters
      query={this.state.query}
      updateQuery={this.updateQuery}
      updatePrecoMinimo={this.updatePrecoMinimo}
      updatePrecoMaximo={this.updatePrecoMaximo}
      updateOrder={this.updateOrder}
      precoMinimo={this.state.precoMinimo}
      precoMaximo={this.state.precoMaximo}
      order={this.state.order}
    />
       
   <ListContainer>
      {this.state.produtos
      .filter(produtos  => {
      return produtos.nome.toLowerCase().includes(this.state.query.toLowerCase())
      })
      .filter(produtos => {
      return this.state.precoMinimo === "" || produtos.valor >= this.state.precoMinimo
      })
      .filter(produtos => {
      return this.state.precoMaximo === "" || produtos.valor <= this.state.precoMaximo
      })
      .map(produtos => {
      return <Card key={produtos.id} produtos={produtos} />
      })}
 </ListContainer>
  
</>
  }
}

export default App;