
import { title, subtitle } from "@/components/primitives";
import Image from "next/image";

export default function History() {
    return (
        <section className="grid lg:grid-cols-2 md:grid-col-1 mt-16">
            <div className="col-span-1 ">
                <h2 className={title()}>La Escuela&nbsp;</h2>
                <br />
                <h2 className={subtitle({ class: "mt-4" })}>
                La Escuela .... Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, necessitatibus possimus iste maiores, molestias error iusto facilis quos dolores repellat nemo rerum hic. Perspiciatis nisi officia illo sapiente doloribus ea?
                </h2>

            </div>
            <div className="col-span-1 hidden lg:block pl-8 pb-8">
                <img
                    src="https://th.bing.com/th/id/OIP.wAqGTp00pd4FsksR2z4HXQHaE8?rs=1&pid=ImgDetMain"
                    alt="escuela"
                    className="shadow-lg rounded-lg w-full h-full"
                />
            </div>
        </section>
    );
}