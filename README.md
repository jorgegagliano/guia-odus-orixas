# Guia de Odus e Orixás

Um aplicativo web para estudar os conhecimentos ancestrais dos Odus e Orixás, baseado nos documentos fornecidos sobre o jogo de búzios e características dos Orixás.

## Funcionalidades

### 📚 Odus
- Lista completa dos 10 Odus principais
- Informações detalhadas sobre cada Odu incluindo:
  - Número de búzios abertos
  - Quem fala (entidade associada)
  - Descrição completa
  - Personalidade
  - Energia
  - Tendências
  - Caminhos de Odù
  - Lembretes importantes

### ✨ Orixás
- Informações sobre os principais Orixás:
  - OMOLU
  - OSUMARE
  - NANÃ
  - OSUN
- Perfil das pessoas regidas por cada Orixá
- Temperamentos característicos
- Tendências no jogo

### 🔍 Funcionalidades Adicionais
- **Pesquisa**: Busque por nome, descrição ou características
- **Favoritos**: Marque seus Odus e Orixás favoritos para acesso rápido
- **Interface Responsiva**: Funciona em desktop e dispositivos móveis
- **Design Intuitivo**: Cores diferenciadas para Odus (âmbar) e Orixás (azul)

## Como Usar

1. **Navegação por Abas**: Use as abas "Odus", "Orixás" e "Favoritos" para navegar pelo conteúdo
2. **Pesquisa**: Digite na barra de pesquisa para encontrar informações específicas
3. **Detalhes**: Clique em qualquer cartão para ver informações completas em um modal
4. **Favoritos**: Clique no ícone de coração para adicionar/remover dos favoritos

## Tecnologias Utilizadas

- **React**: Framework JavaScript para interface do usuário
- **Tailwind CSS**: Framework CSS para estilização
- **shadcn/ui**: Componentes de interface pré-construídos
- **Lucide React**: Ícones
- **Vite**: Ferramenta de build e desenvolvimento

## Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── OduCard.jsx     # Cartão para exibir Odus
│   ├── OrixaCard.jsx   # Cartão para exibir Orixás
│   ├── SearchBar.jsx   # Barra de pesquisa
│   └── DetailModal.jsx # Modal de detalhes
├── data/               # Dados do aplicativo
│   ├── odus.js        # Dados dos Odus
│   └── orixas.js      # Dados dos Orixás
└── App.jsx            # Componente principal
```

## Como Executar

1. Instale as dependências:
   ```bash
   pnpm install
   ```

2. Execute o servidor de desenvolvimento:
   ```bash
   pnpm run dev
   ```

3. Acesse http://localhost:5173 no navegador

## Dados Incluídos

O aplicativo contém informações completas extraídas dos documentos fornecidos:

- **10 Odus principais** com todas as informações detalhadas
- **4 Orixás principais** com perfis e características
- **Tendências e significados** para consultas rápidas

## Objetivo Educacional

Este aplicativo foi desenvolvido como uma ferramenta de estudo para:
- Estudantes de religiões afro-brasileiras
- Praticantes do jogo de búzios
- Interessados em conhecer os Orixás e suas características
- Pesquisadores de cultura ancestral africana

---

*Desenvolvido com respeito e reverência aos conhecimentos ancestrais.*

