import Box from "../boxes/Box";
import HomeContent from "../components/HomeContent";
import "./home.css"

const Home = () => {
     return (  
        <div className="w-full h-screen relative flex items-center justify-evenly bg-[rgb(229,218,245)]">
          <Box/>     
          <HomeContent/>
        </div>
    );
}
export default Home;