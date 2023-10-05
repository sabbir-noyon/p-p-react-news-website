import logo from "../../src/assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <img className="my-0 mx-auto" src={logo}></img>
            <p className="text-center mt-3 md:mt-5 text-xs md:text-base font-normal text-[#706F6F]">Journalism Without Fear or Favour</p>
            <p className="mt-3 md:mt-4 text-center text-[#403F3F] text-sm md:text-xl font-medium">{moment().format("dddd, ")}<span className="text-[#706F6F] text-sm md:text-xl font-medium">{moment().format("MMMM D, YYYY")}</span></p>
            
        </div>
    );
};

export default Header;