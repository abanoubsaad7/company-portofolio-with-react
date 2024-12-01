import CoverSection from "./components/coverSection";
import Footer from "./components/footer";
import MainNav from "./components/main_and_side_Bar/mainNav";
import CategoryWithoutPhoto from "./components/produts/categoryWithoutPhoto";
import FeaturedProducts from "./components/produts/featuredProducts";
import SlideShow from "./components/slide_show/slideShow";

function App() {
  return (
    <>
      <section id="cover">
        <MainNav />
        <SlideShow />
      </section>
      <section>
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n          .path-0{\n            animation:pathAnim-0 4s;\n            animation-timing-function: linear;\n            animation-iteration-count: infinite;\n          }\n          @keyframes pathAnim-0{\n            0%{\n              d: path("M 0,400 L 0,100 C 234.5,101.5 469,103 709,103 C 949,103 1194.5,101.5 1440,100 L 1440,400 L 0,400 Z");\n            }\n            25%{\n              d: path("M 0,400 L 0,100 C 195.5,110 391,120 631,120 C 871,120 1155.5,110 1440,100 L 1440,400 L 0,400 Z");\n            }\n            50%{\n              d: path("M 0,400 L 0,100 C 239.5,91 479,82 719,82 C 959,82 1199.5,91 1440,100 L 1440,400 L 0,400 Z");\n            }\n            75%{\n              d: path("M 0,400 L 0,100 C 190,114.5 380,129 620,129 C 860,129 1150,114.5 1440,100 L 1440,400 L 0,400 Z");\n            }\n            100%{\n              d: path("M 0,400 L 0,100 C 234.5,101.5 469,103 709,103 C 949,103 1194.5,101.5 1440,100 L 1440,400 L 0,400 Z");\n            }\n          }',
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="99%" y1="59%" x2="1%" y2="41%">
              <stop offset="5%" stopColor="#800788" />
              <stop offset="95%" stopColor="#060736" />
            </linearGradient>
          </defs>
          <path
            d="M 0,400 L 0,100 C 234.5,101.5 469,103 709,103 C 949,103 1194.5,101.5 1440,100 L 1440,400 L 0,400 Z"
            stroke="none"
            strokeWidth={0}
            fill="url(#gradient)"
            fillOpacity="0.53"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 200)"
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n          .path-1{\n            animation:pathAnim-1 4s;\n            animation-timing-function: linear;\n            animation-iteration-count: infinite;\n          }\n          @keyframes pathAnim-1{\n            0%{\n              d: path("M 0,400 L 0,233 C 305,252 610,271 850,271 C 1090,271 1265,252 1440,233 L 1440,400 L 0,400 Z");\n            }\n            25%{\n              d: path("M 0,400 L 0,233 C 206,234 412,235 652,235 C 892,235 1166,234 1440,233 L 1440,400 L 0,400 Z");\n            }\n            50%{\n              d: path("M 0,400 L 0,233 C 305,220 610,207 850,207 C 1090,207 1265,220 1440,233 L 1440,400 L 0,400 Z");\n            }\n            75%{\n              d: path("M 0,400 L 0,233 C 175,232 350,231 590,231 C 830,231 1135,232 1440,233 L 1440,400 L 0,400 Z");\n            }\n            100%{\n              d: path("M 0,400 L 0,233 C 305,252 610,271 850,271 C 1090,271 1265,252 1440,233 L 1440,400 L 0,400 Z");\n            }\n          }',
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="99%" y1="59%" x2="1%" y2="41%">
              <stop offset="5%" stopColor="#800788" />
              <stop offset="95%" stopColor="#060736" />
            </linearGradient>
          </defs>
          <path
            d="M 0,400 L 0,233 C 305,252 610,271 850,271 C 1090,271 1265,252 1440,233 L 1440,400 L 0,400 Z"
            stroke="none"
            strokeWidth={0}
            fill="url(#gradient)"
            fillOpacity={1}
            className="transition-all duration-300 ease-in-out delay-150 path-1"
            transform="rotate(-180 720 200)"
          />
        </svg>
        <FeaturedProducts />
        <CategoryWithoutPhoto />
      </section>
      <CoverSection />
      <Footer />
    </>
  );
}

export default App;
