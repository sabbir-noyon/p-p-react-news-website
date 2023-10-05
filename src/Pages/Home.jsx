import Header from "../Components/Header";
import LeftAside from "../Components/LeftAside";
import Navbar from "../Components/Navbar";
import RightAside from "../Components/RightAside";


const Home = () => {
    return (
        <div className="py-8 px-10 lg:py-12 lg:px-24 ">
            <Header></Header>
            <Navbar></Navbar>
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-5">
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