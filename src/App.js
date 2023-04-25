import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import CharacterList from './pages/CharacterList';
import ComicList from './pages/ComicList';
import CharacterDetail from './pages/CharacterDetail';
import CharacterSearchResult from './pages/CharacterSearchResult';
import ComicDetail from './pages/ComicDetail';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={<Main/>}/>
          <Route path="characters">
            <Route index element={ <CharacterList/> }/>
            <Route path=":id" element={ <CharacterDetail/> }/>
            <Route path="search" element={ <CharacterSearchResult/> }/>
          </Route>
          <Route path="comics">
            <Route index element={ <ComicList/> }/>
            <Route path=":id" element={ <ComicDetail/> }/>
          </Route>
          <Route path="*" element={<Error />}/>
        </Route>
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
