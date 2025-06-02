import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import LoginIndex from './login/LoginIndex';
import New from './component/New';
import Best from './component/Best';
import Shopping from './component/Shopping';
import NotFound from './component/NotFound';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import FamilyFood from './component/Family-food';
import Bestseller from './component/Best-seller';
import Bestrank from './component/Best-rank';


function App() {
  return (
    <>
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/new' element={<New />} />
          <Route path='/best' element={<Best />} />
          <Route path='/shopping' element={<Shopping />} />
          <Route path='/LoginIndex' element={<LoginIndex />} />
          <Route path='*' element={<NotFound />} />
          </Routes>
          <FamilyFood />
          <Bestseller />
          <Bestrank />
          <Footer />
        </Router>
    </>
  );
}

export default App;
