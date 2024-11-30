import React , {useState} from "react";
import MainNav from "../components/main_and_side_Bar/mainNav";
import Footer from "../components/footer";
import CoverSection from "../components/coverSection";
import CategoriesSelectionTag from "../components/categoriesSelectionTag";
import SelectedProjects from "../components/selectedProjects";

const ProductsPages = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <section id="cover">
        <MainNav />
      </section>
      <section>
        <CategoriesSelectionTag nameOfListBox={'selectedCategory'} onCategoryChange={handleCategoryChange}/>
        <SelectedProjects selectedCategory={selectedCategory}/>
      </section>
      <CoverSection/>
      <Footer/>
    </>
  );
};

export default ProductsPages;
