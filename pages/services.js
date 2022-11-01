import { GiCardboardBox } from "react-icons/gi";
import { HiColorSwatch } from "react-icons/hi";
import { MdDeveloperBoard } from "react-icons/md";
import { AiOutlineBlock } from "react-icons/ai";
import { Element } from "react-scroll";

function services() {
	return (
		<Element id="services" name="services">
			<div className="w-full my-40 h-auto flex flex-col justify-center items-center ">
				<p className="text-sm uppercase text-gray-400">¿Qué hacemos? </p>
				<h1 className="text-blue-400 text-6xl font-bold text-center">
					Nuestros Servicios
				</h1>
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					{/* second block */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer">
							<MdDeveloperBoard className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								Desarrollo Web & Mobile
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
							Nuestro equipo, se encuentra compuesto en mayor parte por programadores apasionados
							y enfocados en crear nuevas soluciones tecnológicas, manejando las últimas tecnologías del mercado,
							haciendo incapié en la seguridad y buenas prácticas para armar aplicaciónes robustas y competentes,
							¿tenes una idea?, consultanos si la podemos desarrollar, te armamos un presupuesto según tu perfil.
						</p>
					</div>
				</div>
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex  flex-col justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
							<GiCardboardBox className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								Estrategia & Dirección
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
							Nos gustan los emprendimietos, orientamos a nuestros clientes al estructurado de su idea
							al igual que su plan de negocios.
						</p>
					</div>

					{/* second block */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer">
							<HiColorSwatch className="w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								Diseño & Branding
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-sm sm:text-left">
							Tenemos un equipo con especialistas que te pueden ayudar con el diseño, imagen y demás herramientas para tu emprendimiento.
						</p>
					</div>
				</div>

				{/* second grid */}
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex flex-col justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
							<AiOutlineBlock className="w-10 h-10 bg-green-500 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold ">
								Construcción de MVP
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
							Desarrollamos un Producto Mínimo Viable a partír de tu idea, adecuandonos a tu perfil y presupuesto.
						</p>
					</div>

					
				</div>
			</div>
		</Element>
	);
}

export default services;
