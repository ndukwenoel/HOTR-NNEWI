import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Media from './pages/Media';
import About from './pages/About';
import Values from './pages/Values';
import PastorMrs from './pages/PastorMrs';
import SermonArchive from './pages/SermonArchive';
import ResidentChurch from './pages/ResidentChurch';
import ChurchVisual from './pages/ChurchVisual';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="media" element={<Media />} />
          <Route path="about" element={<About />} />
          <Route path="values" element={<Values />} />
          <Route path="pastor-mrs" element={<PastorMrs />} />
          <Route path="sermons" element={<SermonArchive />} />
          <Route path="church" element={<ResidentChurch />} />
          <Route path="visual" element={<ChurchVisual />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
