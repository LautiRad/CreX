import Image from "next/image"
import One from "../public/images/marketplace.jpeg"
import Two from "../public/images/auto.jpeg"
import Three from "../public/images/entrenamiento.jpeg"
import Four from "../public/images/4.jpg"
import Five from "../public/images/5.jpg"
import Six from "../public/images/6.jpg"
import { Element } from "react-scroll"

function works() {
	return (
		<Element id="work" name="work">
			<div className="w-full my-20 h-auto flex flex-col justify-center items-center  ">
				<p className="text-sm uppercase text-gray-400">Portfolio</p>
				<h1 className="text-blue-400 text-6xl font-bold text-center">
					Nuestros trabajos
				</h1>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
					<div className="rounded w-80 h-60 shadow-xl relative">
						<a href="https://www.anlib.xyz">
						<Image
							src={One}
							alt="One"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
							/>
						</a>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
						<a href="https://www.criptocars.io">
						<Image
							src={Two}
							alt="two"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
						</a>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
						<a href="https://prote.vercel.app">
						<Image
							src={Three}
							alt="three"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
						</a>
					</div>
				</div>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-10 mt-10">
					{/* <div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Four}
							alt="four"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Five}
							alt="five"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Six}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div> */}
				</div>
			</div>
		</Element>
	);
}

export default works;
