//import Header from "../../components/Header/Header.test"
import PopupCallout from "../../components/Callout/PopupCallout"
import Hero from "../../components/Hero/Hero"
import HorizontalScrollBar from "../../components/HorizontalScrollBar/HorizontalScrollBar"
//import useNavigation from "../../Hooks/useNavigate"

const Home = () => {
  //const { goToProducts } = useNavigation();
    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  return (
    <div>
      {/*<Header/>*/}
      <PopupCallout/>
      <HorizontalScrollBar onClick={scrollToTop}/>
      <Hero/>
      
{ /*      <div className="flex justify-center mt-4">
            <button
                    className="action-button edit-button bg-gradient-to-r from-blue-700 to-blue-500 text-white px-4 py-2 rounded-md shadow-md"
                    onClick={goToProducts}
                >
                
                    Check Out Our Menu
            </button>
        </div>*/}
    </div>
  )
}

export default Home
