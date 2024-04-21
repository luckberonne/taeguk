'use client';
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import landingLight from "./../../assets/landingLight.svg";
import landingDark from "./../../assets/landingDark.svg";
import { motion } from "framer-motion";

export default function Landing() {
    return (
        <section id="#inicio" className="grid lg:grid-cols-2 md:grid-col-1 mt-4">
            <div className="col-span-1 flex flex-col justify-center">
                <motion.div

                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className="max-w-lg">
                    <h1 className={title()}>Escuela de Taekondo&nbsp;</h1>
                    <h1 className={title({ color: "blue" })}>TAE GUK&nbsp;</h1>
                    <br />
                    <h2 className={subtitle({ class: "mt-4" })}>
                        Entrena con el Sabon  Rodolfo.
                    </h2>

                    <div className="flex gap-3">
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.3 },
                            }}
                            whileTap={{ scale: 0.9 }}>

                            <Link
                                isExternal
                                href="https://api.whatsapp.com/send?phone=595975922925&text=Hola,%20me%20gustar%C3%ADa%20inscribirme%20en%20las%20clases%20de%20taekwondo!!!%F0%9F%A5%8B"
                                className={buttonStyles({ color: "success", radius: "full", variant: "shadow" })}
                            >
                                <FaWhatsapp size={24} />
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.3 },
                            }}
                            whileTap={{ scale: 0.9 }}>
                            <Link
                                isExternal
                                href="https://maps.app.goo.gl/vxwR7r3bcwAo6gM86"
                                className={buttonStyles({ variant: "bordered", radius: "full" })}
                            >
                                <FaLocationDot size={24} />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <div className="col-span-1 flex items-center justify-center">
                    <CardContainer className="inter-var">
                        <CardBody className=" relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6">
                            <CardItem translateZ="100" className="w-full mt-4">
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
                            </CardItem>
                        </CardBody>
                    </CardContainer>
            </div>
        </section>
    );
}
