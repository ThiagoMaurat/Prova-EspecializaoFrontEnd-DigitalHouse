import Filtros from "../componentes/personagens/filtros.componente";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import Paginacao from "../componentes/paginacao/paginacao.componente";
import { createRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRick } from "../states/rickMory/character";
import {
  listSelector,
  fetchRickSearch,
  setSearch,
} from "../states/rickMory/character";
/**
 * Esta é a página principal. Aqui você deve ver o painel de filtro junto com a grade de personagens.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns Página inicio
 */
const PaginaInicio = () => {
  const rickMory = useSelector(listSelector);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postEachPage] = useState(9);
  console.log(rickMory);
  useEffect(() => {
    dispatch(fetchRick());
  }, [dispatch]);

  // get current posts
  const LastCharacter = currentPage * postEachPage;
  const FirstCharacter = LastCharacter - postEachPage;
  const currentposts = rickMory.slice(FirstCharacter, LastCharacter);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const ref = createRef(null);

  const clearRefAndDispatch = () => {
    ref.current.value = "";
    dispatch(setSearch(""));
    dispatch(fetchRickSearch());
  };
  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personagens</h3>
        <button onClick={() => clearRefAndDispatch()} className="danger">
          Limpar Filtros
        </button>
      </div>
      <Filtros ref={ref} />
      <Paginacao
        postEachPage={postEachPage}
        totalPosts={rickMory.length}
        paginate={paginate}
      />
      <GradePersonagens character={currentposts.map((item) => item)} />
      <Paginacao />
    </div>
  );
};

export default PaginaInicio;
