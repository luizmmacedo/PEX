
# PEX

## 1. Clonar o repositório:

```bash
git clone https://github.com/luizmmacedo/PEX.git
```

## 2. Criar e mudar para sua própria branch (podemos usar o próprio nome):

```bash
git checkout -b nome-da-sua-branch
```

## 3. Fazer alterações no código

## 4. Salvar e enviar as alterações (na sua branch):

```bash
git add .
git commit -m "Descreva o que foi feito"
git push origin nome-da-sua-branch
```

## 🔒 Regras importantes:

- ✅ **Nunca trabalhar direto na branch `main`.**
- ✅ **Cada funcionalidade ou ajuste deve ser feito em uma branch separada.**
- ✅ **Sempre enviar commits claros e objetivos.**
- ✅ **Antes de começar uma nova tarefa, atualize o repositório com:**

```bash
git pull origin main
```

---

## Ideia (não necessário)

### Commits semânticos:

- ✨ **FEAT** – Indicam que seu trecho de código está incluindo um novo recurso.
- 🐛 **FIX** – Indicam que seu trecho de código commitado está solucionando um problema (bug fix).
- 🔥 **HOTFIX** – Indicam que seu trecho de código commitado está solucionando um problema de bug crítico.
- 📄 **DOCS** – Indicam que houve mudanças na documentação, como por exemplo no Readme do seu repositório.
- ⚙️ **TEST** – São utilizados quando são realizadas alterações em testes, seja criando, alterando ou excluindo testes unitários.
- 🔧 **BUILD** – Commits do tipo build são utilizados quando são realizadas modificações em arquivos de build e dependências.
- 📈 **RERF** – Servem para identificar quaisquer alterações de código que estejam relacionadas a performance.
- 🖌️ **STYLE** – Indicam que houveram alterações referentes a formatações de código, como semicolons, trailing spaces, lint...
- 🚧 **CHORE** – Indicam atualizações de tarefas de build, configurações, pacotes, como por exemplo adicionar um pacote no `.gitignore`.
- ♻️ **REFACTOR** – Referem-se a mudanças devido a refatorações que não alterem sua funcionalidade, como por exemplo, uma alteração no formato como é processada determinada parte da tela, mas que manteve a funcionalidade, ou melhorias de performance devido a um code review.
- 🔀 **MERGE** – Merge de conflitos entre branches.
- 🚩 **FLAG** – Implementação de feature flag.
