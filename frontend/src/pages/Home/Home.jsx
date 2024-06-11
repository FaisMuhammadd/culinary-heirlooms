import { useState } from "react";
import Header from "../../Header/Header";
import ExploreMenu from "../../component/ExploreMenu/ExploreMenu";
import "./Home.css";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
