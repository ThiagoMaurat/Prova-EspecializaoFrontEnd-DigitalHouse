import "./grade-personagem.css";
import CardPersonagem from "./card-personagem.componente";

/**
 * Grade de personagens para a página inicial
 *
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 *
 * @returns Elemento JSX
 */
const GradePersonagem = ({ character }) => {
  /*   const rickMory = useSelector(listSelector);
  console.log(rickMory); */
  /*   console.log(rickMory[0].data);
  const content = rickMory[0].data.results;
  console.log(content); */
  return (
    <div className="grade-personagens">
      {character.map((character, index) => (
        <CardPersonagem key={character.id} character={character} />
      ))}
    </div>
  );
};

export default GradePersonagem;
