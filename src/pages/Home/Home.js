import "./Home.css";
import Header from "../../components/Header/index";
import Recipes from "../../components/Recipes";
import KnowMore from "../../components/KnowMore";
import Join from "../../components/Join";
import Footer from "../../components/Footer";
import { Container } from "reactstrap";
import SearchRecipes from "../../components/SearchRecipes";
import Blog from "../../components/Blog/index";

function Home() {
  return (
    <>
      <div className="Home">
        <Container>
          <Header />
          <SearchRecipes />
        </Container>
      </div>

      <div className="Recipes">
        <Container>
          <Recipes />
        </Container>
      </div>

      <KnowMore />

      <div className="Blog">
        <Blog />
      </div>

      <Join />
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default Home;
