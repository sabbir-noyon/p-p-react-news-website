import Header from "../Components/Header";
import LeftAside from "../Components/LeftAside";
import MarqueeSlider from "../Components/MarqueeSlider";
import Navbar from "../Components/Navbar";
import RightAside from "../Components/RightAside";


const Home = () => {
    return (
        <div className="border py-8 px-10 md:max-w-[1640px] md:mx-auto  md:py-14   ">
            <Header></Header>
            <MarqueeSlider></MarqueeSlider>
            <Navbar></Navbar>
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftAside></LeftAside>
                </div>
                <div className="border md:col-span-2">
                    <h1>I am Middle</h1>
                </div>
                <div className="border">
                    <RightAside></RightAside>
                </div>
            </div>

            
        </div>
    );
};

export default Home;