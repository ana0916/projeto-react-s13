import Title from "./Title"
import Subtitles from"./Subtitles"
import Image from "./Image"
import imagemEu from "../assets/github.jpg"


function Me(){

  return(

      <div className="Bio">
        <Title texto ="Oie, Ana aqui!"/>
        <Subtitles segundoParagraph ="Quem sou eu?"/>
        <Image caminhoImg ={imagemEu}/>
      </div>
        )
      }
      
      export default Me
        
        