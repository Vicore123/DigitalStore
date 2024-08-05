import { useState } from 'react'
import './index.css'

import './Components/Footer.css'
import BuyBox from './Components/BuyBox.jsx'

import Layout from './pages/Layout.jsx'
import { BrowserRouter } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  // <BuyBox
  //   name="Tênis Nike Revolution 6 Next Nature Masculino"
  //   reference="Casual | Nike | REF:38416711"
  //   stars={4.7}
  //   ating={350}
  //   price={219.00}
  //   priceDiscount={279.00}
  //   description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod repudiandae laudantium, accusamus vero esse alias debitis sed autem ad omnis voluptas vitae odit, quasi obcaecati eaque nisi optio illo voluptatem."
  //   ></BuyBox>

  return (
  <>
    <Layout/>
      
    <BuyBox
    name={"Tênis Nike Revolution 6 Next Nature Masculino"}
    reference={"Casual | Nike | REF:38416711"}
    pontuacao={4.7}
    rating={45}
    price={279.00}
    priceDiscount={219.00}
    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod repudiandae laudantium, accusamus vero esse alias debitis sed autem ad omnis voluptas vitae odit, quasi obcaecati eaque nisi optio illo voluptatem."}
    ></BuyBox> 
    </>
  )
}

export default App
