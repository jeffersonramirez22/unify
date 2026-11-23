import banner from "../assets/banner-principal.jpg";

import iconoBoleto from "../assets/icono-boleto.png";
import iconoQR from "../assets/icono-qr.png";

import "./Home.css";


function Home() {
    return (
        <main className="home">
            <section className="home__hero">

                <div className="home__brand">
                    UNIFY
                </div>


                <div className="home__features">
                    <div className="home__feature">
                        <img src={iconoBoleto} alt="" />
                        <span>Compra digital</span>
                    </div>

                    <div className="home__feature">
                        <img src={iconoQR} alt="" />
                        <span>Tiquetes con código QR</span>
                    </div>
                </div>


                <div className="home__content">
                    <h1>
                        Tus próximos eventos,
                        <br />
                        a un clic.
                    </h1>

                    <p>
                        Explora tus próximos eventos, elige tus tiquetes y compra en línea,
                        <br />
                        de forma rápida y segura.
                    </p>

                    <button type="button">
                        Explorar eventos →
                    </button>
                </div>

                <div className="home__banner">
                    <img src={banner} alt="Artes escénicas y entretenimiento" />
                </div>

            </section>
        </main>
    );
}

export default Home;
