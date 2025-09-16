export function Header(){
    return(
        <header className="glass move flex justify-end items-center h-[2.9rem] w-full">
        {["About", "Contact", "Technical", "Projects"].map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className="shine-links cursor-pointer flex items-center justify-center mx-4 min-w-[5rem] h-full transition-transform duration-300 ease-linear hover:scale-105"
          >
            {link}  
          </a>
        ))}
      </header>
    )
}