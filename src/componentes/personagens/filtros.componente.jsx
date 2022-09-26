import "./filtros.css";
import { useSelector, useDispatch } from "react-redux";
import {
  searchSelector,
  setSearch,
  fetchRickSearch,
} from "../../states/rickMory/character";
import React from "react";

const Filtros = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const search = useSelector(searchSelector);
  return (
    <div className="filtros">
      <label for="nome">Filtrar por nome:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nome"
        ref={ref}
        value={search}
        onChange={(e) => {
          dispatch(setSearch(e.target.value));
          dispatch(fetchRickSearch(e.target.value));
        }}
      />
    </div>
  );
});

export default Filtros;
