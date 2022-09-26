import "./botao-favorito.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFavoriteCharacter } from "../../states/rickMory/character";
import {
  removeFromFav,
  removeCharacterFromList,
  setFavoriteCharacters,
} from "../../states/rickMory/character";
import { useLocation } from "react-router-dom";
/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Terá que tipar as propriedades se utilizar este componente
 *
 *
 * @returns Elemento JSX
 */
const BotaoFavorito = ({ character }) => {
  /* console.log(setSelectedFavoriteCharacter); */
  const favoritos = useLocation().pathname;
  const dispatch = useDispatch();
  const selectorPersonagem = useSelector(setSelectedFavoriteCharacter);
  const handleClick = () => {
    if (selectorPersonagem.includes(character)) {
      dispatch(removeFromFav(character));
    } else {
      dispatch(removeCharacterFromList(character));
      dispatch(setFavoriteCharacters(character));
    }
  };
  return (
    <div>
      {favoritos === "/favoritos" ? (
        <button className="botao-desfavorito" onClick={handleClick}>
          <div className="featherFalse">Unlike</div>
        </button>
      ) : (
        <button className="botao-favorito" onClick={handleClick}>
          <div className="featherTrue">Like</div>
        </button>
      )}
    </div>
  );
};

export default BotaoFavorito;
