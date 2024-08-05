import React from "react"; //ต้อง import ทุกครั้ง
import {Header,Content,Footer} from './func-components'
import Calender from './class-component'

function App() {
  return (
    <>
      <Header/>
      <p><center><Calender/></center></p>
      <Content/>
      <Footer/>   
    </>
  )
}//เรียกการตกแต่งมาจาก style.css

export default App // นำออกมาใช้งาน
