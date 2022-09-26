import Filtros from "../componentes/personagens/filtros.componente";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import Paginacao from "../componentes/paginacao/paginacao.componente";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRick } from "../states/rickMory/character";
import { listSelector } from "../states/rickMory/character";
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
  const [postsPerPage, setPostsPerPage] = useState(9);
  console.log(rickMory);
  useEffect(() => {
    dispatch(fetchRick());
  }, [dispatch]);

  // get current posts
  const LastCharacter = currentPage * postsPerPage;
  const FirstCharacter = LastCharacter - postsPerPage;
  const currentposts = rickMory.slice(FirstCharacter, LastCharacter);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personagens</h3>
        <button className="danger">Test Button</button>
      </div>
      <Filtros />
      <Paginacao
        postPerPage={postsPerPage}
        totalPosts={rickMory.length}
        paginate={paginate}
      />
      <GradePersonagens character={currentposts.map((item) => item)} />
      <Paginacao />
    </div>
  );
};

export default PaginaInicio;
