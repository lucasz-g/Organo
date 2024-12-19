import './colaborador.css'
import { IoIosCloseCircle } from "react-icons/io";
import { FaHeart, FaRegHeart  } from "react-icons/fa";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    
    function favoritar(){
        aoFavoritar(colaborador.id);
    }

    const propsFavorito = {size:25, onClick: favoritar}
    
    return (<div className="colaborador">
        <IoIosCloseCircle 
          className="deletar" 
          onClick={() => aoDeletar(colaborador.id)}
          size={25} 
          color="red" 
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="favoritar">
                {colaborador.favorito 
                    ? <FaHeart color='red' {...propsFavorito}/> 
                    : <FaRegHeart {...propsFavorito}/>
                }
            </div>
        </div>
    </div>)
}

export default Colaborador