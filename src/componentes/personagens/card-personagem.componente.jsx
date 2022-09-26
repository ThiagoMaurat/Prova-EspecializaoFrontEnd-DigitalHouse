import BotaoFavorito from "../botoes/botao-favorito.componente";
import "./card-personagem.css";

/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns Elemento JSX
 */
const CardPersonagem = ({ character }) => {
  return (
    <div className="card-personagem">
      <img src={character.image} alt="Rick Sanchez" />
      <div className="card-personagem-body">
        <span>{character.name}</span>
        <BotaoFavorito character={character} />
      </div>
    </div>
  );
};

export default CardPersonagem;
