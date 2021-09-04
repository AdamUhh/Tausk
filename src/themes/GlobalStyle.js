import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.global.textColor};
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
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
ul {
  margin-left: 30px;

}
ul, li {
  list-style: disc;
  padding: 0.15em 0;
  line-height: 1.6em;
}




`;

export default GlobalStyle;
