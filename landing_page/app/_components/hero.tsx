import Image from "next/image"
import HeroImage from "../../public/eu.png"
import  Devicon  from "@heroicons/react/24/outline/CodeBracketIcon"
import Usericon from "@heroicons/react/24/outline/UserIcon"
import Envicon from "@heroicons/react/24/outline/EnvelopeIcon"


export function Hero () {
    return (
        <section className="bg-[url('../public/fundo_hero.jpeg')] bg-cover bg-center h-screen text-white relative overflow-hidden">
            
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="container mx-32 mt-32 px-4 py-16 relative">

                <div className="relative z-10">

                    <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        <div className="flex flex-col gap-5">

                            <h1 className="text-4xl md:text-6xl font-bold" data-aos="fade-down">Olá, eu sou o Matias.</h1>

                            <p className="text-2xl md:text-3xl" data-aos="fade-up">Meu lema é: "Tentando ser melhor".</p>

                            <div className="flex items-center gap-5">

                                <div className="mt-3" data-aos="fade-right">
                                    <a href="#sobre_mim"
                                    className="bg-white px-7 py-4 text-black rounded-md font-semibold flex items-center justify-center w-fit gap-2
                                    hover:bg-black hover:text-white">
                                        <Usericon className="size-6 w-5 h-5"/>
                                    Mais sobre mim.
                                    </a>
                                </div>

                                <div className="mt-3" data-aos="fade-up">
                                    <a href="#projetos" 
                                    className="bg-white px-7 py-4 text-black rounded-md font-semibold flex items-center justify-center w-fit gap-2 
                                    hover:bg-black hover:text-white">
                                    <Devicon className="size-6 w-5 h-5"/>
                                        Meus projetos.
                                    </a>
                                </div>

                                <div className="mt-3" data-aos="fade-left">
                                    <a href="#contato"
                                    className="bg-white px-7 py-4 text-black rounded-md font-semibold flex items-center justify-center w-fit gap-2
                                    hover:bg-black hover:text-white">
                                        <Envicon className="size-6 w-5 h-5"/>
                                        Entre em contato
                                    </a>
                                </div>

                            </div>

                        </div>

                        <div className="hidden md:block h-full" data-aos="flip-right">
                            <Image src={HeroImage} alt="Foto do Matias" className="object-contain hover:scale-110 duration-300"/>
                        </div>

                    </article>

                </div>

            </div>

        </section>
    )
}