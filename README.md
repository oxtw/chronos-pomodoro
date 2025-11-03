# ⏱️ Chronos Pomodoro

O **Chronos Pomodoro** é uma aplicação web desenvolvida com **React**, **TypeScript** e **Vite**, voltada para auxiliar estudantes e profissionais na **organização do tempo de estudo e foco** utilizando a técnica Pomodoro.
O projeto foi estruturado com foco em **performance**, **boas práticas de estado global** e **persistência local**, resultando em uma experiência fluida e consistente.

---

## 🚀 Tecnologias Utilizadas

* **React 19.1**
* **TypeScript 5.8.3**
* **Vite 7.0.4**
* **React Router 7**
* **React Toastify**
* **date-fns**
* **useState, useEffect, useRef, useReducer**
* **Context API**
* **Web Workers**
* **LocalStorage**
* **CSS Modules / SCSS**

---

## 🧠 Arquitetura e Estrutura do Projeto

A aplicação segue o padrão **Single Page Application (SPA)**, com gerenciamento de rotas via **React Router**, controle global de estado com **Context API + Reducer**, e lógica assíncrona isolada através de **Web Workers**.

```
chronos-pomodoro/
├── public/              # Ícones, manifest e assets estáticos
├── src/
│   ├── assets/          # Imagens, ícones e sons do app
│   ├── components/      # Componentes reutilizáveis
│   ├── contexts/        # Contextos globais (TaskContext)
│   ├── hooks/           # Hooks customizados
│   ├── pages/           # Páginas (Home, History, Settings, etc)
│   ├── styles/          # Estilos globais e SCSS
│   ├── utils/           # Funções auxiliares
│   └── main.tsx         # Ponto de entrada da aplicação
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 🔹 Contexto Global – `TaskContext`

Toda a lógica central da aplicação (controle do cronômetro, configurações, histórico e estados) é concentrada em um único **contexto global**, estruturado de forma modular e tipada.

### 📁 Estrutura do contexto:

* **`TaskContext.tsx`** – Cria o contexto React e define seu tipo.
* **`TaskContextProvider.tsx`** – Fornece o provedor e inicializa o estado global.
* **`taskReducer.ts`** – Define as regras de transição de estado (ações como iniciar, pausar, resetar, atualizar configurações).
* **`TaskActions.ts`** – Contém as constantes e tipos de ação do reducer.
* **`initialTaskState.ts`** – Define o estado inicial da aplicação (modo atual, tempos, histórico, etc).
* **`useTaskContext.ts`** – Hook customizado que simplifica o acesso ao contexto.

Essa estrutura foi pensada para garantir **coesão**, **organização** e **baixa acoplamento**, facilitando futuras expansões e manutenção do código.

---

## 💡 Funcionalidades

* **Temporizador Pomodoro completo** (foco, pausa curta e pausa longa)
* 📈 **Histórico de sessões concluídas**
* ⚙️ **Configurações personalizadas** (tempo de foco e pausa)
* 💾 **Persistência de dados** com LocalStorage
* 🔔 **Notificações visuais e sonoras**
* 🧩 **Interface responsiva e intuitiva**
* ⚡ **Web Worker** para manter a contagem ativa mesmo em segundo plano
* 🔄 **Gerenciamento de estado previsível com useReducer**

---

## ⚙️ Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/oxtw/chronos-pomodoro.git
cd chronos-pomodoro
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o servidor de desenvolvimento

```bash
npm run dev
```

O app será executado em:
👉 [http://localhost:5173](http://localhost:5173)

---

## 🧱 Boas Práticas e Padrões Adotados

* Separação de lógica em **reducers e actions**.
* Uso extensivo de **Context API** com tipagem forte.
* Persistência automática via **LocalStorage**.
* Lógica de tempo desacoplada com **Web Workers**.
* Componentes funcionais e organizados por responsabilidade.
* **Date-fns** para manipulação precisa de tempo.
* Arquitetura escalável, com hooks customizados e providers bem definidos.

---

## 🌐 Deploy

A aplicação está hospedada na **Vercel**:
🔗 [chronos-pomodoro.vercel.app](https://chronos-pomodoro-virid-five.vercel.app/)

---

## 🧑‍💻 Autor

Desenvolvido por **Miguel Weigert**
📍 Desenvolvedor Full Stack
🔗 [github.com/oxtw](https://github.com/oxtw)

---

## 🏁 Licença

Distribuído sob a licença **MIT**.
Sinta-se à vontade para usar, modificar e contribuir!
