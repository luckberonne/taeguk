import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import landingLight from "./../../assets/landingLight.svg";
import landingDark from "./../../assets/landingDark.svg";

export default function Landing() {
    return (
        <section className="grid lg:grid-cols-2 md:grid-col-1">
            <div className="col-span-1 flex flex-col justify-center"> {/* Add flexbox styles */}
                <div className="max-w-lg">
                    <h1 className={title()}>Escuela de Taekondo&nbsp;</h1>
                    <h1 className={title({ color: "blue" })}>TAE GUK&nbsp;</h1>
                    <br />
                    <h2 className={subtitle({ class: "mt-4" })}>
                        Beautiful, fast and modern React UI library.
                    </h2>

                    <div className="flex gap-3">
                        <Link
                            isExternal
                            href={siteConfig.links.docs}
                            className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
                        >
                            Documentation
                        </Link>
                        <Link
                            isExternal
                            href={siteConfig.links.github}
                            className={buttonStyles({ variant: "bordered", radius: "full" })}
                        >
                            <GithubIcon size={20} />
                            GitHub
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-span-1 hidden lg:block">
                <div className=" w-[25rem] ml-20">
                    <Image
                        src={landingLight}
                        alt="Patada de Taekwondo"
                        className="block dark:hidden"
                    />
                    <Image
                        src={landingDark}
                        alt="Patada de Taekwondo"
                        className="hidden dark:block"
                    />
                </div>
            </div>
        </section>
    );
}
