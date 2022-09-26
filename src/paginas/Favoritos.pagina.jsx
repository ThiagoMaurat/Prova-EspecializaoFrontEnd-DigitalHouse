import { useSelector } from "react-redux";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import { favoriteCharactersSelector } from "../states/rickMory/character";

/**
 * Esta é a página de favoritos. Aqui você deve ver todos os personagens marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns Página de favoritos
 */
const PaginaFavoritos = () => {
  const selectorPersonagem = useSelector(favoriteCharactersSelector);
  console.log(selectorPersonagem);
  return (
    <div className="container">
      <div className="actions">
        <h3>Personagens Favoritos</h3>
        <button className="danger">Test Button</button>
      </div>
      <GradePersonagens
        character={selectorPersonagem.map((item, index) => item)}
      />
    </div>
  );
};

export default PaginaFavoritos;
