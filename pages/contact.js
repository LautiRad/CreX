import { Element } from "react-scroll"

function contact() {
	return (
		<Element id="contact" name="contact">
			<div>
				<div className="w-full my-20 h-auto flex flex-col justify-center items-center">
					<p className="text-sm uppercase text-gray-400">Contacto</p>
					<h1 className="text-blue-400 text-6xl font-bold text-center">
						Contacto
					</h1>

					<div className="flex justify-center text-center md:w-1/2 w-full my-5">
						<input
							type="text"
							name="email-address"
							id="email-address"
							autoComplete="email"
							placeholder="xyz@gmail.com"
							className="mt-5 pb-1 pl-8 w-full rounded-tl-lg rounded-bl-lg text-blue-400 text-xl border-2 border-blue-400 h-10"
						/>
						<button className="mt-5 text-xl w-36 h-10 bg-blue-400 text-white rounded-tr-lg rounded-br-lg hover:bg-black">
							Enviar
						</button>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default contact;
