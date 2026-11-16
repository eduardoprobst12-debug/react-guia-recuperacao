export const CONTEUDOS_ESTUDO = [
  {
    id: "git-github",
    numero: "01",
    titulo: "Git e GitHub",
    explicacao:
        "O Git é um sistema de controle de versão local que registra o histórico de alterações do código na sua máquina. O GitHub é uma plataforma na nuvem para hospedar esses repositórios. Usamos 'commit' para salvar um ponto na história, 'push' para enviar as alterações locais ao repositório remoto e 'branch' para criar ramificações isoladas de desenvolvimento sem afetar o código principal (main)",
    exemplo: `git switch -c nova-funcionalidade
  git add .
  git commit -m "o filtro de busca
  git push -u origin nova-funcionalidade`,
    erroComum: null,
  },

  {
    id: "node-npm",
    numero: "02",
    titulo: "Node.js e npm",
    explicacao:
        "O Node.js é um ambiente de execução que permite rodar código JavaScript fora do navegador, essencial para ferramentas modernas de build como o Vite. Já o npm (Node Package Manager) é o gerenciador de pacotes que baixa, instala e controla as versões das bibliotecas (como o próprio React) listadas no arquivo package.json",
    exemplo: `node -v   #verifica a versão do Node instalada       # Verifica a versão do Node instalada
    npm install   #instala as dependências do package.json
    npm run dev   #inicia o servidor local de desenvolvimento`,
      erroComum: null,
  },

  {
    id: "react-jsx",
    numero: "03",
    titulo: "React e JSX",
    explicacao:
        "O Node.js é um ambiente de execução que permite rodar código JavaScript fora do navegador, essencial para ferramentas modernas de build como o Vite. Já o npm (Node Package Manager) é o gerenciador de pacotes que baixa, instala e controla as versões das bibliotecas (como o próprio React) listadas no arquivo package.json",
    exemplo: `const nome = "Estudante";
    const elemento = <h2>Bem-Vindo, {nome}!</h2>;`,
      erroComum: {
        titulo: "uso de 'class' em vez de 'className' ou múltiplas tags sem elemento",
        explicacao:
            "No JSX, 'class' é uma palavra reservada do JavaScript, então deve-se usar 'className', além disso, todo bloco JSX precisa retornar um único elemento raiz (como uma <div> ou um Fragment <>...</>",
      },
  },

  {
    id: "componentes-props",
    numero: "04",
    titulo: "Componentes e Props",
    explicacao:
        "Componentes em React são funções JavaScript que retornam elementos JSX e dividem a interface em partes independentes. Para que o React diferencie um componente de uma tag HTML comum, seu nome deve sempre começar com letra maiúscula. As 'props' (propriedades) são argumentos passados de um componente pai para um filho para torná-lo dinâmico e reutilizável",
    exemplo: `function Saudacao({ curso }) {
  return <p>Curso atual: {curso}</p>;
}
// Uso: <Saudacao curso="Desenvolvimento Web" />`,
    erroComum: {
      titulo: "Nome de componente com inicial minúscula ou prop ignorada",
      explicacao:
        "Se você criar 'function cardConceito()', o React tratará <cardConceito /> como uma tag HTML desconhecida e não renderizará o componente. Sempre use PascalCase (ex: CardConceito) e desestruture as props recebidas",
    },
 },

 {
    id: "estado-hooks",
    numero: "05",
    titulo: "Estado e Hooks",
    explicacao:
        "O estado (state) representa dados que mudam ao longo do tempo e fazem a interface atualizar automaticamente (renderização declarativa). O Hook 'useState' cria essa variável reativa. Quando o novo estado depende do valor anterior, usamos a atualização funcional. Pelas regras dos Hooks, eles devem ser chamados apenas no nível superior do componente, nunca dentro de blocos 'if' ou loops",
    exemplo: `const [contador, setContador] = useState(0);
// Atualização funcional segura:
setContador((anterior) => anterior + 1);`,
    erroComum: {
      titulo: "Chamar useState dentro de um 'if' ou alterar a variável diretamente",
      explicacao:
        "Fazer 'contador = 5' não avisa o React para redesenhar a tela. Além disso, colocar Hooks dentro de condicionais quebra a ordem interna de rastreamento do React. Sempre declare os Hooks no topo da função do componente",
    },
 },

 {
    id: "eventos-validacao",
    numero: "06",
    titulo: "Eventos e Validação",
    explicacao:
        "Eventos em React seguem o padrão camelCase, como 'onClick' e 'onChange', e recebem a referência de uma função (e não a execução imediata dela). Antes de salvar textos digitados pelo usuário, utilizamos o método '.trim()' para remover espaços em branco nas extremidades, evitando registros vazios",
    exemplo: `const handleSalvar = () => {
  if (texto.trim() === "") return;
  adicionarItem(texto.trim());
};
<button onClick={handleSalvar}>Salvar</button>`,
    erroComum: {
      titulo: "Executar a função direto no onClick: onClick={minhaFuncao()}",
      explicacao:
        "Colocar os parênteses faz a função executar imediatamente assim que o componente aparece na tela, e não no clique. Passe apenas a referência 'onClick={minhaFuncao}' ou uma arrow function 'onClick={() => minhaFuncao(id)}'",
    },
 },

 {
    id: "listas-imutabilidade",
    numero: "07",
    titulo: "Listas e Imutabilidade",
    explicacao:
        "Para transformar arrays de dados em elementos na tela, utilizamos o método '.map()'. Cada item gerado precisa de uma prop 'key' única e estável (como um ID) para que o React identifique alterações com eficiência. Na atualização de listas no estado, respeitamos a imutabilidade criando um novo array (com spread '...' ou '.filter()') em vez de modificar o original com '.push()'",
    exemplo: `// Adicionando sem mutação:
setItens((listaAtual) => [...listaAtual, novoItem]);

// Renderizando com key estável:
lista.map((item) => <li key={item.id}>{item.nome}</li>)`,
    erroComum: {
      titulo: "Mutar o estado com .push() ou usar Math.random() na prop key",
      explicacao:
        "O método '.push()' altera o array na memória sem criar uma nova referência, fazendo o React ignorar a atualização. Já 'key={Math.random()}' destrói e recria o componente a cada renderização, prejudicando a performance",
    },
 },

 {
    id: "arquitetura-web",
    numero: "08",
    titulo: "Arquitetura Web",
    explicacao:
        "O Frontend é a interface visual executada no navegador do usuário, enquanto o Backend processa regras de negócio e banco de dados no servidor, comunicando-se via API. O 'localStorage' permite salvar pequenos dados localmente no navegador. Já uma SPA (Single Page Application) atualiza o conteúdo dinamicamente sem recarregar a página, enquanto uma PWA (Progressive Web App) adiciona recursos instaláveis e offline à aplicação web",
    exemplo: `// Salvando e lendo no navegador:
localStorage.setItem("tema", "claro");
const temaSalvo = localStorage.getItem("tema");`,
    erroComum: null,
  },
];