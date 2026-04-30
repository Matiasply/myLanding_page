import Image from "next/image"
import GenericPhoto from "../../public/loading.jpeg"
import GitIcon from "../../public/githubII.png"
import BossPicture from "../../public/boss_final.png"

export function Projects () {
    return (
        <section id="projetos" className="py-16 px-12">

            <h2 className="text-3xl lg:text-5xl text-black text-center">Meus projetos</h2>

            <div className="flex flex-col justify-center gap-12">

                <div className="flex flex-row-reverse justify-between gap-12 py-16 px-12">

                    <div className="rounded-3xl shadow-2xl">

                        <Image src={ GenericPhoto } alt="Imagem genérica" className="w-100 h-100 hover:scale-110 duration-300"/>
                    
                    </div>

                    <div className="flex flex-col gap-10 w-200">

                        <h3 className="text-2xl lg:text-4xl font-bold">Catequisando</h3>

                        <p>
                            Aplicação web pensada para tornar a catequese católica mais dinâmica e fácil.
                            Uma forma de integrar fé e tecnologia e evangelizar atráves da internet. O 
                            projeto também visa mostrar, com clareza, a doutrina católica àqueles que a 
                            desconhecem, acabaram de conhecer ou querem aprofundá-la. Atualmente em desenvolvimento.
                            Visite o repositório clicando no ícone a baixo:
                        </p>

                        <a href="https://github.com/Matiasply/Catequisando" className="mx-auto hover:scale-110 duration-300">
                        
                        <Image src={GitIcon} alt="Link para repositório"/>

                        </a>

                    </div>


                </div>

                <div className="flex flex-row justify-between gap-12 px-16 py-12">

                    <div className="rounded-3xl shadow-2xl">

                        <Image src={ BossPicture } alt="Site boss final store" className="w-200 h-100 hover:scale-110 duration-300"/>
                    
                    </div>

                    <div className="flex flex-col gap-10 w-200">

                        <h3 className="text-2xl lg:text-4xl font-bold">Boss Final Store</h3>

                        <p>
                            E-commerce desenvolvido como projeto final da disciplina de Banco de Dados.
                            Design neutro, podendo ser utilizado para a venda de produtos variados.
                            Aplicação web completa com front e back-end, além de integração com Banco de Dados 
                            usando PostgreSQL, sem contar de API Restful utilizando-se de NodeJS e Express.
                            Visite o repositório clicando no ícone a baixo:
                        </p>

                        <a href="https://github.com/Matiasply/Boss-Final-Store" className="mx-auto hover:scale-110 duration-300">
                        
                        <Image src={GitIcon} alt="Link para repositório"/>

                        </a>

                    </div>

                </div>


            </div>

        </section>
    )
}