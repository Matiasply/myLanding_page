import Image from "next/image"
import provImage from "../../public/prov.jpeg"

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
                    práticas e desafios, afim de crescer perante os obstáculos. 
                </p>

            </div>

           </div>

        </section>
    )
}