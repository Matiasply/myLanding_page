

export function Hero () {
    return (
        <section className="bg-[url('../public/fundo_hero.jpeg')] bg-cover bg-center h-screen text-white relative overflow-hidden">
            
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 mt-30">

                <article className="flex flex-col gap-2 p-2">

                    <h1 className="text-4xl md:text-6xl font-bold">Olá, eu sou o Matias.</h1>

                    <p className="text-2xl md:text-4xl">Meu lema é: "Tentando ser melhor".</p>

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

                </article>
            </div>
        </section>
    )
}