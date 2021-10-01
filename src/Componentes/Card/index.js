import styled from "styled-components"

const CardContainer = styled.div`
   background-color: rgb(14, 150, 174);
   margin: 5px;
   padding: 0 15px;
   border-radius: 5px;
   width: 250px;
`

const CardFooter = styled.h4`
   display: flex;
   justify-content: space-between;
`

const PostPhoto = styled.img`
  width: 100%;
`

export function Card(props) {
    return <CardContainer>
        <h2 title={props.produtos.nome}>
            <u >{props.produtos.nome} </u>
        </h2>
     <PostPhoto src={props.produtos.img} alt={'Imagem produto'}/>

     <CardFooter>
         <span>R$ {props.produtos.valor.toFixed(2).replace(".", ",")}</span>
    </CardFooter>

    <button>Adicionar ao Carrinho</button>
    
     </CardContainer>
}