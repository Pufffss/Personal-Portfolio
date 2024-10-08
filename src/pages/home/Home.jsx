import React from "react";
import Profile from "..//../assets/g.jpg"
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import "./home.css"

const Home = () => {
    return (
        <section className="home section grid">
            <img src={Profile} alt="" className="home__img" />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>I'm Siddhesh Fuladi.</span> Data Analyst
                    </h1>

                    <p className="home__description">
                    I am pursuing a B. Tech in Computer Science Engineering with specialization in Blockchain Technology from Vellore Institute of Technology, Vellore. Passion drives my pursuit of knowledge in data and business analysis as well as in AI and ML. My academic achievements, coupled with hands-on experience in various technical domains, reflect my passion for innovation and problem-solving. Furthermore, my contributions to research, evidenced by published papers, underscore my commitment to exploration and innovation in the field. I am eager to apply my skills and contribute to impactful projects.
                    </p>

                    <Link to='/about' className="button">
                        More About Me{' '}
                        <span className="button__icon">
                            <FaArrowRight />
                        </span>
                    </Link>
                </div>
            </div>

            <div className="color__block"></div>
        </section>
    );
}

export default Home;