import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.global.textColor};
}

a {
  color: #8AB4F8;
    /* color: ${({ theme }) => theme.nav.nav}; */
  text-decoration: none;
}

body {
    color: ${({ theme }) => theme.global.color};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.global.mainBG};
  }

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
}

pre {
  font-size: 13px;
    font-family: ui-monospace,"Cascadia Mono","Segoe UI Mono","Liberation Mono",Menlo,Monaco,Consolas,monospace;
    line-height: 1.30769231;
    color: ${({ theme }) => theme.notes.preColor};
    background-color: ${({ theme }) => theme.notes.pre};
    border-radius: 5px;
    margin: 0;
    padding: 12px;
    overflow: auto;
}

:root{
  --navHeight: 40px;
  --navDifference: calc(100vh - var(--navHeight));
  
  --collectionsbarWidth: 50px;
  --sidebarWidth: 280px;
  --sideDifference: calc(var(--collectionsbarWidth) + var(--sidebarWidth));

  --largeRadius: 12px;
  --mediumRadius: 8px;
  --mediumSmallRadius: 6px;
  --smallRadius: 4px;
  --smallerRadius: 2px;
}

.skeleton {
  opacity: 0.7;
  animation: skeletonLoading 1s linear infinite alternate;
  margin-bottom: 0.25rem;
}

.skeleton-folder, .skeleton-group, .skeleton-card, .skeleton-task, .skeleton-notes-nav, .skeleton-notes-nav-options, .skeleton-notes-card, .skeleton-notes-task {
  height: 0.5rem;
  border-radius: .125rem;
}

.skeleton-folder {
  margin-top: 15px;
  margin-bottom: -5px;
}
.skeleton-group {
  height: 1.5rem;
  margin-top: 10px;
}
.skeleton-card {
  height: 1.5rem;
  margin-left: 10%;
}
.skeleton-task {
  height: 1.5rem;
  margin-left: 20%;
}

.skeleton-notes-nav {
  width: 60%;
  height: 1rem;
}
.skeleton-notes-nav-options {
  width: 30%;
  height: 1rem;
}
.skeleton-notes-card {
  width: 70%;
  height: 1.5rem;
  margin-top: 10px;

  &:first-child {
    margin-top: 0;
  }
}
.skeleton-notes-task {
  width: 100%;
  height: 250px;
}


@keyframes skeletonLoading {
  0% {
    background-color: hsl(200, 20%, 70%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}


::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-thumb {
  background-color: #6a6a6a;
  border: 4px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  border-radius: 9999px;
}


table,
td,
th {
    border: 1.1px solid white;
    padding: 5px;
}

table {
    width: 100%;
    border-collapse: collapse;
}
ul, ol {
  margin-left: 30px;
  line-height: 1.6em;

  li {
    padding: 0.15em 0;
  }
}




`;

export default GlobalStyle;
