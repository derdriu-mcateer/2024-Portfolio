import RecentProjects from './RecentProjects';
import Navigation from './navigation';
import Header from './Header';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  return (
    <>
      <div className="page">
        <Navigation />
        <Header />
        <AboutMe />
        <RecentProjects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
export default App
