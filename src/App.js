import Footer from './components/footer';
import MainNav from './components/main_and_side_Bar/mainNav';
import FeaturedProducts from './components/produts/featuredProducts';
import SlideShow from './components/slide_show/slideShow';

function App() {
  return (
    <>
      <MainNav/>
      <center>
        <SlideShow/>
      </center>
      <FeaturedProducts/>
      <Footer/>
    </>
  );
}

export default App;