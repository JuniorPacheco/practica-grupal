const Danilo = () => {
  return (
     <article className="danilo rounded-md overflow-hidden ligthTheme darkTheme">
        {/* seccion superior de  mi card*/}
        <header className="h-[160px] ligthTheme">
            <img className="h-full w-full object-cover object-center" src="/danilo.jpg" alt="" />
        </header>

        {/* seccion inferior de  mi card*/}
        <section className="p-2 py-4">
        <h3 className="font-bold mb-2 text-lg line-clamp-1">Danilo Florez</h3>
        <ul>
            <li><span className="font-semibold">Corregimiento:</span>Samore</li>
            <li><span className="font-semibold">Municipio:</span>Toledo</li>
            <li><span className="font-semibold">Departamento:</span>N.de.S</li>
        </ul>
        </section>
    </article>
  )
}
export default Danilo