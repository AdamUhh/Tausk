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
  margin-bottom: 0.25rem;
  border-radius: .125rem;
  /* background: linear-gradient(	  
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 80%
    ),
    hsl(200, 20%, 95%);
    background-repeat: repeat-y;
    background-size: 100px 500px;
    background-position: 0 0;
    animation: shine 2s infinite alternate;	 */
    animation: skeletonLoading 1.5s linear infinite alternate;
}

.skeleton-folder{
  height: 0.5rem;
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

.skeleton-dashboard-group {
  height: 200px;
  margin: 5px;
}
.skeleton-dashboard-header {
  height: 1.75rem;
  width: 40%;
  margin: .125rem 0;
}
.skeleton-dashboard-header-date {
  height: 1.25rem;
  width: 28%;
}



@keyframes skeletonLoading {
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

@keyframes shine {	
  to {
    background-position: 100% 0, /* move highlight to right */ 0 0;
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
