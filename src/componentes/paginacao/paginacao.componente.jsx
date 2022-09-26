import "./paginacao.css";

/**
 * Componente que contém os botões para paginar
 *
 * Você deve adicionar as propriedades necessárias para que funcione corretamente
 *
 *
 * @returns Elemento JSX
 */
const Paginacao = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="paginacao">
      {pageNumbers.map((number) => (
        <div key={number}>
          <button
            onClick={() => paginate(number)}
            disabled={false}
            className={"primary"}
          >
            {number}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Paginacao;
