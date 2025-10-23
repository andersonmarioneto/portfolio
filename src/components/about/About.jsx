import "./about.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/Anderson-Cv.pdf";
import Info from "./Info";

function About() {
    return (
        <>
            <section className="about section" id="about">
                <h2 className="section__title">About Me</h2>
                <span className="section__subtitle">Anderson Mário Neto</span>

                <div className="about__container container grid">
                    <img src={AboutImg} className="about__img" />

                    <div className="about__data">
                        <Info />

                        <p className="about__description">Front-End Developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.</p>

                        <a dawnload={CV} href={CV} target="_blank" className="button button--flex">Dawnload CV &nbsp;
                            <i class="uil uil-file-download-alt"></i>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About