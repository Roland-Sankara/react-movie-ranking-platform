function HeroSection(props) {
  return (
    <section className="m-auto w-[70%] p-8">
      <h1 className="font-sans text-white text-5xl text-center p-4 font-bold">{props.title}</h1>
      <p className="text-xl text-white text-center p-4 w-[60%] m-auto">{props.description}</p>

      <div>
        <img src={props.image} alt="hero section cover-picture" />
      </div>
    </section>
  );
}

export default HeroSection;
