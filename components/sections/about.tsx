'use client';
import { title, subtitle } from "@/components/primitives";
import Image from "next/image";
import escuela from "./../../assets/escuela.jpg";
import { motion } from "framer-motion";


export default function About() {
    return (
        <section className="grid lg:grid-cols-2 md:grid-col-1 mt-4">
            <motion.div 
                            initial={{ x: 100 }}
                            whileInView={{  x: 0 }}
                            transition={{ ease: "easeOut", duration: 0.5 }}
            className="col-span-1 hidden lg:block pr-8">
                <Image
                    src={escuela}
                    alt="escuela"
                    className="shadow-lg rounded-lg w-full h-full"
                />
            </motion.div>
            <motion.div 
                                        initial={{ x: 100 }}
                                        whileInView={{  x: 0 }}
                                        transition={{ ease: "easeOut", duration: 0.5 }}
            className="col-span-1 ">
                <h2 className={title()}>Quienes somos?&nbsp;</h2>
                <br />
                <h2 className={subtitle({ class: "mt-4" })}>
                Somos una Escuela de TaeKwon-Do, cuyo principal objetivo es formar personas de bien a través de los 5 principios de TaeKwon-Do: Cortesía - Integridad - Perseverancia - Auto Control - Espíritu Indómito. Su enseñanza está basada en darle un lugar a cada uno de sus integrantes, ya que cada alumno es único e irremplazable.
                </h2>

            </motion.div>
        </section>
    );
}
