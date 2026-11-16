export function Header({totalRevisados, totalConteudos}) {
    return (
        <header className="header">
            <div className="header-conteudo">
                <div>
                    <span className="badge-curso">Material de revisao . Web Frontend</span>
                    <h1>React em Prática - Guia Interativo</h1>
                    <p className="substitulo">
                        Revise os conceitos fundamentais, analise erros comuns e registre suas dúvidas
                    </p>
                </div>

                <div className="progresso-card" aria-live="polite">
                    <span className="progresso-label">Conteúdos revisador</span>
                    <strong className="progresso-valor">
                        {totalRevisados}/{totalConteudos}
                    </strong>
                </div>
            </div>
        </header>
    );
}