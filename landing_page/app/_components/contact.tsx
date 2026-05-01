import Image from "next/image"
import GitIcon from "../../public/githubIII.png"
import InstaIcon from "../../public/instagram.png"
import LinkeIcon from "../../public/linkedin.png"
import EmailIcon from "../../public/email.png"

export function Contacts () {

    return (
        <section id="contato" className="bg-black">

            <h4 className="text-2xl text-white text-center">Minhas redes sociais</h4>

            <div className="grid grid-cols-3 gap-5">

                <a href="https://github.com/Matiasply" className="mx-auto hover:scale-105 duration-300" target="_blank">

                    <Image src={GitIcon} alt="Logo do github" className="w-40 h-40"/>

                </a>

                <a href="https://www.instagram.com/matiasmonteirodale/" className="mx-auto hover:scale-105 duration-300" target="_blank">

                    <Image src={InstaIcon} alt="Logo do instagram" className="w-70 h-50"/>

                </a>

                <a href="https://www.linkedin.com/in/matias-monteiro-de-ara%C3%BAjo-bbb4271bb/" 
                className="mx-auto hover:scale-105 duration-300" target="_blank">

                    <Image src={LinkeIcon} alt="Logo do linkedin" className="w-70 h-50"/>

                </a>

            </div>

            <h4 className="text-2xl text-center text-white">Me mande um email.</h4>

            <a href="mailto:matiasmonteiroaraujo@gmail.com">

                <Image src={EmailIcon} alt="Símbolo de email" className="mx-auto h-50 w-70 hover:scale-105 duration-300"/>

            </a>

            <p className="text-white text-center"> 
                Projeto desenvolvido por mim, Matias, com o intuito
                de desenvolver minhas habilidades em Nextjs.
                <br />
                &copy; Direitos Reservados.
                
            </p>


        </section>
    )
}