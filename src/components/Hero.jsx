import profile from '../assets/profile.jpg';

export default function Hero() {
  return (
    <div className="hero">
      <img src={profile} alt="Talya Cohen" className="hero-img" />
      <div className="hero-text">
        <h2>Hi, I'm Talya 👋</h2>
        <p>
          I’m a Computer Science student passionate about full-stack development,
          clean design, and building meaningful technology that connects people.
        </p>
        <a href="#projects" className="btn">View My Projects</a>
      </div>
    </div>
  );
}
