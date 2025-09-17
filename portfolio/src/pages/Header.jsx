export function Header() {
  return (
    <header
      className="glass move flex justify-end items-center h-[2.9rem] w-full
         max-[523px]:fixed max-[523px]:z-10 max-[523px]:top-0 max-[523px]:left-0 
         max-[523px]:rounded-none
        "
    >
      <div className="flex justify-end items-center w-full max-[523px]:justify-center">
        {["About", "Contact", "Technical", "Projects"].map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className="link-button shine-links cursor-pointer flex items-center justify-center mx-4 min-w-[5rem] h-full transition-transform duration-300 ease-linear hover:scale-105 
            "
          >
            {link}
          </a>
        ))}
      </div>
    </header>
  );
}
