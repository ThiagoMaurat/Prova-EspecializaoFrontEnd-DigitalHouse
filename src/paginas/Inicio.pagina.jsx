import Filtros from "../componentes/personagens/filtros.componente";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import Paginacao from "../componentes/paginacao/paginacao.componente";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
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
  console.log(rickMory[0]);
  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personagens</h3>
        <button className="danger">Test Button</button>
      </div>
      <Filtros />
      <Paginacao />
      {/*  <GradePersonagens character={rickMory[0].map((item) => item)} /> */}
      <Paginacao />
    </div>
  );
};

export default PaginaInicio;
