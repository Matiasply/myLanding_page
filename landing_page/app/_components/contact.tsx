import Image from "next/image"
import GitIcon from "../../public/githubIIIpng.png"
import InstaIcon from "../../public/instagram.png"
import LinkeIcon from "../../public/linkedin.png"

export function Contacts () {

    return (
        <section id="contato" className="bg-black">

            <h4 className="text-2xl text-white text-center">Minhas redes sociais</h4>

            <div className="grid grid-cols-3 gap-5">

                <a href="https://github.com/Matiasply" className="mx-auto hover:scale-110 duration-300">

                    <Image src={GitIcon} alt="Logo do github" className="w-40 h-40"/>

                </a>

                <a href="https://www.instagram.com/matiasmonteirodale/" className="mx-auto hover:scale-110 duration-300">

                    <Image src={InstaIcon} alt="Logo do instagram" className="w-70 h-50"/>

                </a>

                <a href="https://www.linkedin.com/in/matias-monteiro-de-ara%C3%BAjo-bbb4271bb/" 
                className="mx-auto hover:scale-110 duration-300">

                    <Image src={LinkeIcon} alt="Logo do linkedin" className="w-70 h-50"/>

                </a>

            </div>


        </section>
    )
}