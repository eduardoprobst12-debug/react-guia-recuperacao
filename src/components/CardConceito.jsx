export function CardConceito({conteudo, revisado, onAlternarRevisao}) {
    const{id, numero, titulo, explicacao, exemplo, erroComum} = conteudo;

    return (
        <article className={`card ${revisado ? "card-revisado" : ""}`}>
            <div className="card-topo">
                <span className="card-numero">CONTEÚDO {numero}</span>
                {revisado && <span className="status-tag">✓ Revisado</span>}
            </div>

            <h2>{titulo}</h2>
            <p className="card-explicacao">{explicacao}</p>

            <div className="bloco-codigo">
                <span className="bloco-titulo">Exemplo prático:</span>
                <pre>
                    <code>{exemplo}</code>
                </pre>
            </div>

            {erroComum && (
                <div className="bloco-erro">
                    <strong>⚠️ Erro comum: {erroComum.titulo}</strong>
                    <p>{erroComum.explicacao}</p>
                </div>
            )}

            <button
        type="button"
        className={`btn-revisar ${revisado ? "btn-revisado" : ""}`}
        onClick={() => onAlternarRevisao(id)}
      >
        {revisado ? "Desmarcar revisão" : "Marcar como revisado"}
      </button>
        </article>
    );
}