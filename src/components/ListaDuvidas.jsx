import {useState} from "react";

export function ListaDuvidas() {
    const [textoDuvida, setTextoDuvida] = useState("");
    const [duvidas, setDuvidas] = useState([]);
    const [erroValidacao, setErroValidacao] = useState("");

    function handleAdicionarDuvida(evento) {
        evento.preventDefault();
        const textoLimpo = textoDuvida.trim();

        if (textoLimpo === "") {
            setErroValidacao("Digite uma dúvida válida antes de adicionar");
            return;
        }

        const novaDuvida = {
            id: crypto.randomUUID(),
            texto: textoLimpo,
        };

        setDuvidas((listaAnterior) => [...listaAnterior, novaDuvida]);
        setTextoDuvidar("");
        setErroValidacao("");
    }

    return (
    <section className="secao-duvidas">
      <h2>Minhas dúvidas</h2>
      <p className="duvidas-descricao">
        Anote pontos que você deseja revisar com o professor ou pesquisar mais a fundo
      </p>

      <form onSubmit={handleAdicionarDuvida} className="form-duvidas">
        <input
          type="text"
          placeholder="Ex: Como funcionam props?"
          value={textoDuvida}
          onChange={(e) => {
            setTextoDuvida(e.target.value);
            if (erroValidacao) setErroValidacao("");
          }}
          aria-label="Digite sua dúvida"
        />
        <button type="submit">Adicionar</button>
      </form>

      {erroValidacao && <p className="mensagem-erro">{erroValidacao}</p>}

      {duvidas.length === 0 ? (
        <p className="lista-vazia">Nenhuma dúvida registrada ainda</p>
      ) : (
        <ul className="lista-duvidas">
          {duvidas.map((item) => (
            <li key={item.id} className="item-duvida">
              {item.texto}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
