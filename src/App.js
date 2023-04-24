import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import CharacterList from './pages/CharacterList';
import ComicList from './pages/ComicList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={<Main/>}>

          </Route>
          <Route path="characters" element={ <CharacterList/> }/>
          <Route path="comics" element={ <ComicList/> }/>
        </Route>
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
