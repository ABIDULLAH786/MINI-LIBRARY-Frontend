import { Route, Routes } from 'react-router-dom';
import Books from './components/Books';
import Students from './components/Students';
import CustomNavBar from './components/CustomNavBar';
import Home from './components/Home';
import PageNotFind from './components/PageNotFind';
import BookDetail from './components/BookDetail';
import StudentDetail from './components/StudentDetail';

function App() {
  return (
    <div>
      <CustomNavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/book/:id" element={<BookDetail />}/>
        <Route path="/students" element={<Students />}/>
        <Route path="/student/:id" element={<StudentDetail />}/>
        <Route path="*" element={<PageNotFind />} />
      </Routes>
    </div>
  );
}
export default App;
