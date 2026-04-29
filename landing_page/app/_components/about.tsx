import Image from "next/image"
import provImage from "../../public/prov.jpeg"
import { PuzzlePieceIcon } from "@heroicons/react/24/outline"
import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { UserGroupIcon } from "@heroicons/react/24/outline"

export function About() {
    return (
        <section id="sobre_mim" className="bg-white py-16 px-12">

           <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="relative w-full h-100 rounded-3xl overflow-hidden">
                <Image src={provImage} alt="Imagem provisória" fill quality={100} priority className="object-cover hover:scale-110 duration-300"/>
            </div>

            <div className="flex flex-col gap-5">

                <h2 className="text-3xl lg:text-5xl text-black">Quem eu sou?</h2>

                <p className="font-semibold">
                    Me chamo Matias Monteiro de Araújo, atualmente estou cursando 
                    Ciência de Dados & Inteligência Artificial na Universidade Federal da Paraíba.
                    Ainda não encontrei uma área de interesse nesse vasto mundo da tecnologia, mas
                    tenho me aventurado bastante em desenvolvimento web fullstack. Busco experiências
                    práticas e desafios, a fim de crescer perante os obstáculos. 
                </p>

            </div>

           </div>

           <div className="py-16 px-12 container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

            <div className="bg-gray-300 w-90 flex flex-col items-center gap-2 rounded-3xl relative">
                <PuzzlePieceIcon className="w-20 h-20"/>
                <h3 className="text-2xl">Capacidade de aprendizagem</h3>
                <p className="px-3 py-2">Sou capaz de aprender rápido e pôr em prática qualquer tecnologia em curtos períodos.</p>
            </div>

            <div className="bg-gray-300 w-90 flex flex-col items-center gap-2 rounded-3xl relative">
                <ArrowPathIcon className="w-20 h-20"/>
                <h3 className="text-2xl">Adaptabilidade e resiliência.</h3>
                <p className="px-3 py-2">Tenho facilidade em lidar com mudanças e determinação para vencer os desafios.</p>
            </div>

            <div className="bg-gray-300 w-90 flex flex-col items-center gap-2 rounded-3xl relative">
                <UserGroupIcon className="w-20 h-20"/>
                <h3 className="text-2xl">Trabalho em equipe.</h3>
                <p className="px-3 py-2">Boa comunicação e capacidade de trabalhar em equipe com perfis variados.</p>
            </div>

           </div>

        </section>
    )
}