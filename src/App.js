import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import CharacterList from './pages/CharacterList';
import ComicList from './pages/ComicList';
import CharacterDetail from './pages/CharacterDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={<Main/>}/>
          <Route path="characters">
            <Route index element={ <CharacterList/> }/>
            <Route path=":id" element={ <CharacterDetail/> }/>
          </Route>
          <Route path="comics" element={ <ComicList/> }/>
        </Route>
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
