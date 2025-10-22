import profile from '../assets/profile.jpg';

export default function About() {
  return (
    <div className="about-page">
      <img src={profile} alt="Talya Cohen" className="about-img" />
      <div className="about-text">
        <h2>About Me 🌼</h2>
        <p>
          Hey there! I'm <strong>Talya Cohen</strong>, a Computer Science student at Bar-Ilan University.
          I’m passionate about building impactful software — from full-stack web apps to low-level systems.
        </p>
        <p>
          I love solving algorithmic challenges, learning new technologies, and sharing knowledge through
          mentoring and tutoring. I’m curious, creative, and always up for a new challenge that pushes my limits.
        </p>
        <blockquote>
          “Turning ideas into code and code into impact.”
        </blockquote>
        <p>
          💬 Connect with me:
          <a href="https://github.com/TalyaCohen1" target="_blank"> GitHub</a> •
          <br />
          📧 <a href="mailto:talyaco909@gmail.com">talyaco909@gmail.com</a>
          <br />
        </p>
      </div>
    </div>
  );
}
