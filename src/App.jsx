import { Route, Routes } from 'react-router-dom';
import Home from './projects/Home';
import JavascriptFrameworks from './projects/JavascriptFrameworks'
import Holidaze from './projects/Holidaze'
import AnemicHeroes from './projects/AnemicHeroes'


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/JavascriptFrameworks" element={<JavascriptFrameworks />} />
        <Route path="/projects/AnemicHeroes" element={<AnemicHeroes />} />
        <Route path="/projects/Holidaze" element={<Holidaze />} />
      </Routes>
  );
}
export default App;

