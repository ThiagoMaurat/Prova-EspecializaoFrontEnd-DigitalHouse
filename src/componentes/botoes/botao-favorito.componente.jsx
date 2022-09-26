import "./botao-favorito.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFavoriteCharacter } from "../../states/rickMory/character";
import {
  addCharacters,
  removeCharacters,
  selectedCharactersSelector,
  getFavCharacter,
  setFavoriteCharacters,
} from "../../states/rickMory/character";
/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Terá que tipar as propriedades se utilizar este componente
 *
 *
 * @returns Elemento JSX
 */
const BotaoFavorito = ({ isFavorito, character }) => {
  /* console.log(setSelectedFavoriteCharacter); */
  const dispatch = useDispatch();
  const selectorPersonagem = useSelector(setSelectedFavoriteCharacter);
  const src = isFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";

  const handleClick = () => {
    dispatch(setFavoriteCharacters(character));
    console.log(character);
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
