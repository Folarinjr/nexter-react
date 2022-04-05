import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Realtor from "./components/Realtor";
import Feature from "./components/Feature";
import StoryPicture from "./components/StoryPicture";
import StoryContent from "./components/StoryContent";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
   <div className="container">
      <SideBar/>
      <Header/>
      <Realtor/>
      <Feature/>
      <StoryPicture/>
      <StoryContent/>
      <Home/>
      <Gallery/>
      <Footer/>
   </div>
  );
}

export default App;
