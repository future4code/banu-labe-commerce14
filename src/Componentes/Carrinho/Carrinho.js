import React from 'react'
import { ItemCarrinhoDeCompras } from './ItemCompra';
import styled from 'styled-components';

const ShoppingCartContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const CartListContainer = styled.div`
  display: grid;
  gap: 8px;
`

export class CompraCarrinho extends React.Component {
  getTotalValue = () => {
    let totalValorCompra = 0

    for(let produtos of this.props.carrinhoDeCompras) {
      totalValorCompra += produtos.valor * produtos.quantidade
    }

    return totalValorCompra
  }

  render() {
    return <> 
    <ShoppingCartContainer>
      <h3>Carrinho:</h3>
      <CartListContainer>
        {this.props.carrinhoDeCompras.map((produtos) => {
          return<ItemCarrinhoDeCompras 
            itemNoCarrinho={produtos} 
            removeItemCarrinho={this.props.removeItemCarrinho}
            />
        })}
      </CartListContainer>
      <p>Valor total: R${this.getTotalValue()},00</p>
    </ShoppingCartContainer>
    </>
  }
}