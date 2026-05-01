import Image from "next/image"
import provImage from "../../public/prov.jpeg"
import { PuzzlePieceIcon } from "@heroicons/react/24/outline"
import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { UserGroupIcon } from "@heroicons/react/24/outline"
import JsIcon from "../../public/icons8-javascript-100.png"
import HtmlIcon from "../../public/htmlicon.png"
import CssIcon from "../../public/cssicon.png"
import NodeJsIcon from "../../public/icons8-nodejs-96.png"
import PythonIcon from "../../public/icons8-python-100.png"
import PostgreIcon from "../../public/icons8-postgreesql-100.png"
import GitIcon from "../../public/giticon.png"
import NextIcon from "../../public/icons8-nextjs-100.png"

export function About() {
    return (
        <section id="sobre_mim" className="bg-white py-16 px-12">

           <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div data-aos="flip-left">

            <div className="relative w-full h-100 rounded-3xl overflow-hidden">
                <Image src={provImage} alt="Imagem provisória" fill quality={100} priority className="object-cover hover:scale-110 duration-300"/>
            </div>

            </div>

            <div className="flex flex-col gap-5">

                <h2 className="text-3xl lg:text-5xl text-black" data-aos="fade-down">Quem eu sou?</h2>

                <p className="font-semibold" data-aos="fade-right">
                    Me chamo Matias Monteiro de Araújo, atualmente estou cursando 
                    Ciência de Dados & Inteligência Artificial na Universidade Federal da Paraíba.
                    Ainda não encontrei uma área de interesse nesse vasto mundo da tecnologia, mas
                    tenho me aventurado bastante em desenvolvimento web fullstack. Busco experiências
                    práticas e desafios, a fim de crescer perante os obstáculos. 
                </p>

            </div>

           </div>

           <div className="py-16 px-12 container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

                <div data-aos="flip-left">

                    <div className="bg-gray-300 shadow-2xl w-90 flex flex-col items-center gap-2 rounded-3xl relative hover:scale-110 duration-300">
                        <PuzzlePieceIcon className="w-20 h-20"/>
                        <h3 className="text-2xl">Capacidade de aprendizagem</h3>
                        <p className="px-3 py-2">Sou capaz de aprender rápido e pôr em prática qualquer tecnologia em curtos períodos.</p>
                    </div>

                </div>

                <div data-aos="flip-left">

                    <div className="bg-gray-300 shadow-2xl w-90 flex flex-col items-center gap-2 rounded-3xl relative hover:scale-110 duration-300">
                        <ArrowPathIcon className="w-20 h-20"/>
                        <h3 className="text-2xl">Adaptabilidade e resiliência.</h3>
                        <p className="px-3 py-2">Tenho facilidade em lidar com mudanças e determinação para vencer os desafios.</p>
                    </div>

                </div>

                <div data-aos="flip-left">

                    <div className="bg-gray-300 shadow-2xl w-90 flex flex-col items-center gap-2 rounded-3xl relative hover:scale-110 duration-300">
                        <UserGroupIcon className="w-20 h-20"/>
                        <h3 className="text-2xl">Trabalho em equipe.</h3>
                        <p className="px-3 py-2">Boa comunicação e capacidade de trabalhar em equipe com perfis variados.</p>
                    </div>
                </div>

           </div>

            <h3 className="text-4xl font-semibold text-center" data-aos="zoom-in">Tecnologias conhecidas.</h3>
           <div className="container mx-auto py-16 px-12 bg-gray-300 shadow-2xl rounded-3xl grid grid-cols-2 lg:grid-cols-4 gap-12 items-center">
                <div data-aos="zoom-out-up">

                    <Image src={HtmlIcon} alt="Ícone do html" className="hover:scale-110 duration-300 mx-auto"/>
                
                </div>

                <div data-aos="zoom-out-up">

                    <Image src={CssIcon} alt="Ícone do css" className="hover:scale-110 duration-300 mx-auto"/>
                
                </div>

                <div data-aos="zoom-out-up">

                    <Image src={JsIcon} alt="Ícone do javascript" className="hover:scale-110 duration-300 mx-auto"/>
                
                </div>

                <div data-aos="zoom-out-up">

                    <Image src={NodeJsIcon} alt="Ícone do nodejs" className="hover:scale-110 duration-300 mx-auto"/>
                </div>

                <div data-aos="zoom-out-up">

                    <Image src={PythonIcon} alt="Ícone do python" className="hover:scale-110 duration-300 mx-auto"/>
                
                </div>

                <div data-aos="zoom-out-up">

                    <Image src={PostgreIcon} alt="Ícone do postgresql" className="hover:scale-110 duration-300 mx-auto"/>
                
                </div>

                <div data-aos="zoom-out-up">

                    <Image src={GitIcon} alt="Ícone do github" className="hover:scale-110 duration-300 mx-auto"/>
                </div>

                <div data-aos="zoom-out-up">

                    <Image src={NextIcon} alt="Ícone do github" className="hover:scale-110 duration-300 mx-auto"/>
                
                </div>
           </div>

        </section>
    )
}