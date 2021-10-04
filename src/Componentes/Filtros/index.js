import React from "react"
import styled from "styled-components"

export const FiltersContainer = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap:wrap;
`

export function Filters(props) {
    return <FiltersContainer>
       <input
          placeholder="Pesquisa"
          value={props.query}
          onChange={props.updateQuery}
       />
 
       <input
          type="number"
          placeholder="Preço mínimo"
          value={props.precoMinimo}
          onChange={props.updatePrecoMinimo}
       />
 
       <input
          type="number"
          placeholder="Preço máximo"
          value={props.precoMaximo}
          onChange={props.updatePrecoMaximo}
       />
 
       <span>
          <label for="sort">Ordenação: </label>
          <select name="sort">
             <option value="title">Título</option>
             <option value="price">Preço</option>
            
          </select>
       </span>
 
       <select
          name="order"
          value={props.order}
          onChange={props.updateOrder}
       >
          <option value={1}>Crescente</option>
          <option value={-1}>Decrescente</option>
 
       </select>
 
    </FiltersContainer>
 
 }