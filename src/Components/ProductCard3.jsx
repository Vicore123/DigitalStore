import styled from "styled-components"


let StyledProductCard3 = styled.div`

   .descontos {
      display: flex;
      width: 100px;
      margin: 0px;
      border-radius: 29px;
      padding: 6px;
      color: var(--dark-gray-2);
      font-size: 14px;
      font-weight: bold;
      background-color: #E7FF86;
      justify-content: center;
   }
   .produtoImage {
      
      background-color: white;   
      display: flex;
      flex-direction: column;
      width: 290px;
      height: 320px;
      margin-top: 30px;
      border-radius: 4px;
      padding: 20px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06); padding: 20px;

      img {
         align-self: center;
         margin: -40px 0px 42px -26px;
         
      }
   }
   .produtoDescricao {

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 110px;
      margin-top: 20px;
      h4 {
         font-weight: 700px;
         font-size: 12px;
         color: var(--light-gray);
      }
      h3 {
         font-weight: 400;
         font-size: 24px;
         color: var(--dark-gray-2);
      }
      .old-price {
         font-weight: 400;
         font-size: 24px;
         color: var(--light-gray);
         margin-right: 10px;
      }
      .new-price {
         font-weight: 700;
         font-size: 24px;
         color: var(--dark-gray);
      }
   }

   .semDesconto {
      justify-content: center;
   }

`
export default function ProductCard3({desconto, imagem, nome, descricao, oldPrice, newPrice}) {


return (

   <StyledProductCard3>

         <div>
            <div className="produtoImage">
               {desconto == undefined ? null : <p className="descontos">{desconto}</p> }  
               
               <img src={imagem} alt="imagem" className="img"/>
            </div>
            <div className="produtoDescricao">
               <h4>{nome}</h4>
               <h3>{descricao}</h3>
               <p className="price">
                  <span className="old-price"><s>{oldPrice}</s></span>
                  <span className="new-price">{newPrice}</span>
               </p>
            </div>
         </div>
   </StyledProductCard3>
)
}