
import { title, subtitle } from "@/components/primitives";
import Image from "next/image";

export default function About() {
    return (
        <section className="grid lg:grid-cols-2 md:grid-col-1 mt-4">
            <div className="col-span-1 hidden lg:block pr-8">
                <img
                    src="https://th.bing.com/th/id/OIP.wAqGTp00pd4FsksR2z4HXQHaE8?rs=1&pid=ImgDetMain"
                    alt="escuela"
                    className="shadow-lg rounded-lg w-full h-full"
                />
            </div>
            <div className="col-span-1 ">
                <h2 className={title()}>Quienes somos?&nbsp;</h2>
                <br />
                <h2 className={subtitle({ class: "mt-4" })}>
                Somos una Escuela de TaeKwon-Do, cuyo principal objetivo es formar personas de bien a través de los 5 principios de TaeKwon-Do: Cortesía - Integridad - Perseverancia - Auto Control - Espíritu Indómito. Su enseñanza está basada en darle un lugar a cada uno de sus integrantes, ya que cada alumno es único e irremplazable.
                </h2>

            </div>
        </section>
    );
}
