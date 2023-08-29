import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/conteudo";
import Rodape from "./components/rodape";
import reactLogo from "./assets/react.svg";

export default function App() {

  let reactLogoAlt = "React Logo";

  //Lista de links redes sociais

  let listaLinks =[<li>Github</li>, <li>X</li>, <li>Reddit</li> ];

  return (
    <>
      <div className="container">

        <Cabecalho/>

        {/* <img src={reactLogo} alt={reactLogoAlt} /> */}

        <Conteudo reactLogoProps={reactLogo} reactLogoAltProps={reactLogoAlt} />

        <Rodape listaProps={listaLinks}/>

      </div>
    </>
  )
}

