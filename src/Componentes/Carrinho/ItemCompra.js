import React from 'react'
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;

  p {
    margin: 0;
  }
`


export class ItemCarrinhoDeCompras extends React.Component {
  render() {
    return <ItemContainer>
      <p>{this.props.carrinhoDeCompras.quantidade}x</p>
      <p>{this.props.carrinhoDeCompras.nome}</p>
      <button 
        onClick={() => this.props.onRemoveProduto(this.props.carrinhoDeCompras.id)}
      >
        Remover
      </button>
    </ItemContainer>
  }
}
