import { FaHome } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import FloatingNav from "@/components/ui/floatingNav";


export const Navbar = () => {
	const navItems = [
		{
			name: "Inicio",
			link: "/",
			icon: <FaHome />
		},
		{
			name: "Contacto",
			link: "/news",
			icon: (
				<MdMessage />
			),
		},
		{
			name: "Galeria",
			link: "/galery",
			icon: (
				<FaPhotoVideo />
			),
		},
	];
	return (
		<div className="relative  w-full">
			<FloatingNav navItems={navItems} />
		</div>

	);
};
