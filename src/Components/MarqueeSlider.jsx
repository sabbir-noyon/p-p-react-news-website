import Marquee from "react-fast-marquee";

const MarqueeSlider = () => {
	return (
		<div className="mt-3 md:mt-5 md:max-w-[1640px]">
			<div className=" flex h-14 md:max-w-[1640px] md:mx-auto  md:h-[80px] bg-[#F3F3F3] overflow-hidden">
				<div>
					<button
						onClick={{}}
						type="submit"
						className=" mt-3 ml-2 md:mt-4 md:ml-5 w-16 h-8 md:w-[110px] md:h-[48px] bg-[#D72050] hover:bg-[#f33164] text-white text-sm font-normal md:text-lg md:font-medium "
					>
						Latest
					</button>
				</div>

				<div className="md:mt-7">
					<Marquee
						pauseOnHover
						className="md:ml-4  ml-2 mt-5 md:mt-0 text-sm font-normal md:text-lg md:font-semibold text-[#403F3F]"
					>
						Match Highlights: Germany vs Spain — as it happened! Match
						Highlights: Germany vs Spain as it happened ! Match Highlights:
						Germany vs Spain as...
					</Marquee>
				</div>
			</div>
		</div>
	);
};

export default MarqueeSlider;
