import React from "react";
import Image from "next/image";
import heroImage from "../public/images/heroimage.jpg";
import { Element } from "react-scroll";

function Home() {
	return (
		<Element id="home" name="home">
			<div>
				<div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28 ">
					<div className=" w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
						<Image
							src={heroImage}
							alt="heroImage"
							layout="fill"
							objectFit="cover"
							className=" rounded-full cursor-pointer hidden md:block"
						/>
					</div>
					<div className="flex flex-col md:ml-20 mx-10 mt-10">
						<h1 className="font-bold text-5xl text-left mb-5">
							Hola! Bienvenid@ a <span className="text-blue-500">CreX</span>
						</h1>
						<p className="text-left font-normal font mb-5 flex-wrap">
							¿Tenés una idea? Nosotros la desarrollamos. <br/>En CreX nos encargamos de acercar la tecnología
							a emprendedores, brindando soluciones tanto web2 como web3.
						</p>
						<a
							href="#"
							className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-blue-500 rounded-md w-60 h-16 text-lg hover:bg-black "
						>
							Contacto
						</a>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default Home;
