import "./botao-favorito.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFavoriteCharacter } from "../../states/rickMory/character";
import {
  addCharacters,
  removeCharacters,
  selectedCharactersSelector,
  getFavCharacter,
} from "../../states/rickMory/character";
/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Terá que tipar as propriedades se utilizar este componente
 *
 *
 * @returns Elemento JSX
 */
const BotaoFavorito = ({ isFavorito, charId }) => {
  const dispatch = useDispatch();
  const selectorPersonagem = useSelector(setSelectedFavoriteCharacter);
  const src = isFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";

  const handleClick = () => {
    if (selectorPersonagem.includes(charId)) {
      dispatch(removeCharacters(charId));
      dispatch(getFavCharacter());
    } else {
      dispatch(addCharacters(charId));
      dispatch(getFavCharacter());
    }
  };
  return (
    <div>
      {isFavorito ? (
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
