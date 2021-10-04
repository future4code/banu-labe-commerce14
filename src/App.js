import styled from "styled-components";
import produtosLista from "./produtos/produtos.json"
import { Card } from './Componentes/Card';
import React, {Component} from 'react'
import { Header } from "./Componentes/Header";
import { Filters } from "./Componentes/Filtros";
import { CompraCarrinho } from "./Componentes/Carrinho/Carrinho";

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

 onAddProdutoNoCarrinho = (produtoId) => {
   const carrinhoDeCompras = this.state.carrinhoDeCompras.find(produto => produtoId === produto.id)

   if(carrinhoDeCompras) {
     const novoCarrinhoDeCompras = this.state.carrinhoDeCompras.map(produto => {
       if(produtoId === produto.id) {
         return {
           ...produto,
           quantidade: produto.quantidade + 1
         }
       }

       return produto
     })

     this.setState({carrinhoDeCompras: novoCarrinhoDeCompras})
   } else {
     const adicionarProduto = produtosLista.find(produto => produtoId === produto.id)

     const novoCarrinhoDeCompras = [...this.state.carrinhoDeCompras, {...adicionarProduto, quantidade: 1}]

     this.setState({carrinhoDeCompras: novoCarrinhoDeCompras})
   }
 }

 onRemoveProduto = (produtoId) => {
   const novoCarrinhoDeCompras = this.state.carrinhoDeCompras.map((produto) => {
     if(produto.id === produtoId) {
       return {
         ...produto,
         quantidade: produto.quantidade - 1
       }
     }
     return produto
   }).filter((produto) => produto.quantidade > 0)

   this.setState({carrinhoDeCompras: novoCarrinhoDeCompras})
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

 <CompraCarrinho
          carrinhoDeCompras={this.state.carrinhoDeCompras}
          onRemoveProduto={this.onRemoveProduto}
        />
  
</>
  }
}

export default App;