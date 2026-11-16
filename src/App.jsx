import { useState } from "react";
import { CONTEUDOS_ESTUDO } from "./data/conteudo.js";
import { Header } from "./components/Header";
import { CardConceito } from "./components/CardConceito";
import { ListaDuvidas } from "./components/ListaDuvidas";
import "./App.css";

export function App() {
  const [revisadosIds, setRevisadosIds] = useState([]);

  function alternarRevisao(idConteudo) {
    setRevisadosIds((idsAnteriores) => {
      const jaRevisado = idsAnteriores.includes(idConteudo);
      if (jaRevisado) {
        return idsAnteriores.filter((id) => id !== idConteudo);
      }
      return [...idsAnteriores, idConteudo];
    });
  }

  return (
    <div className="app-container">
      <Header
        totalRevisados={revisadosIds.length}
        totalConteudos={CONTEUDOS_ESTUDO.length}
      />

      <main className="conteudo-principal">
        <section className="grade-cards" aria-label="Conteúdos de estudo">
          {CONTEUDOS_ESTUDO.map((item) => (
            <CardConceito
              key={item.id}
              conteudo={item}
              revisado={revisadosIds.includes(item.id)}
              onAlternarRevisao={alternarRevisao}
            />
          ))}
        </section>

        <ListaDuvidas />
      </main>
    </div>
  );
}

export default App;