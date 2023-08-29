// import React from "react";

import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/conteudo";
import Rodape from "./components/rodape";
import reactLogo from "./assets/react.svg";

export default function App() {
     let reactLogoAlt="React Logo"
  return (
    <>
      <div className="container">
        <Cabecalho/>
        
        


        <Conteudo reactLogoProps ={reactLogo} reactLogoAltProps={reac}/>
        <Rodape/>

    
        <section>
          {/* esse é um comentario */}
          <p><a href="/">Home Page</a></p>
            <button onClick={()=> alert("Hello World")}>Click me</button>
        </section>

        <footer>
          <p>&copy; 2021, Vite.js and React.</p>
        </footer>
      </div>
    </>
  )
}
