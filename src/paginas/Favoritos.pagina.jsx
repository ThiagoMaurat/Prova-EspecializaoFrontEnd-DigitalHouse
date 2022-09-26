import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import {
  favoriteCharactersSelector,
  getFavCharacter,
} from "../states/rickMory/character";

/**
 * Esta é a página de favoritos. Aqui você deve ver todos os personagens marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns Página de favoritos
 */
const PaginaFavoritos = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavCharacter());
  }, [dispatch]);
  const favCharacters = useSelector(favoriteCharactersSelector);
  return (
    <div className="container">
      <div className="actions">
        <h3>Personagens Favoritos</h3>
        <button className="danger">Test Button</button>
      </div>
      <GradePersonagens character={favCharacters} />
    </div>
  );
};

export default PaginaFavoritos;
