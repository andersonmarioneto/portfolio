import "./about.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/Anderson-Cv.pdf";

function About() {
    return (
        <>
            <section className="about section" id="about">
                <h2 className="section__title">Sobre Mim</h2>
                <span className="section__subtitle">Anderson Mário Neto</span>

                <div className="about__container container grid">
                    <img src={AboutImg} className="about__img" />

                    <div className="about__data"></div>
                </div>
            </section>
        </>
    )
}

export default About