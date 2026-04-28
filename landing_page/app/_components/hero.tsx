import Image from "next/image"
import HeroImage from "../../public/eu.png"

export function Hero () {
    return (
        <section className="bg-[url('../public/fundo_hero.jpeg')] bg-cover bg-center h-screen text-white relative overflow-hidden">
            
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="container mx-auto mt-30 px-4 py-16 relative">

                <div className="relative z-10">

                    <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        <div className="flex flex-col gap-3">

                            <h1 className="text-4xl md:text-6xl font-bold">Olá, eu sou o Matias.</h1>

                            <p className="text-2xl md:text-3xl">Meu lema é: "Tentando ser melhor".</p>

                            <div className="mt-3">
                                <a href="#sobre_mim"
                                className="bg-white px-5 py-2 text-black rounded-md font-semibold">
                                Mais sobre mim.
                                </a>
                            </div>
                            <div className="mt-3">
                                <a href="#projetos" 
                                className="bg-white px-5 py-2 text-black rounded-md font-semibold">
                                    Meus projetos.
                                </a>
                            </div>
                        </div>

                        <div className="hidden md:block h-full">
                            <Image src={HeroImage} alt="Foto do Matias" />
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}