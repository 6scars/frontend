
export function HomePage() {
  const goToAmazon = () => {
    window.location.href = "/amazon-clone/public/amazon.html";
  };

  return (
    <>
        <div className="contact">Kontakt</div>
      <button onClick={goToAmazon}>go to amazon</button>
    </>
  );
}
