"use client";
import About from "@/components/sections/about";
import Landing from "@/components/sections/landing";
import History from "@/components/sections/history";


export default function Home() {

	return (
		<section >
			<div className="sm:h-[100vh] px-6 pb-10 bg-gradient-to-b from-background to-backgroundMore from-70% to-90%">
				<Landing />
			</div>
			<div className="bg-backgroundMore">
				<div className="px-6 py-4">
					<About />
					<History />
				</div>
			</div>
		</section>
	);
}
