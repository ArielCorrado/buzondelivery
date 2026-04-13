import React, { useEffect, useMemo, useState } from "react";
import "./buzon5.css";

type GalleryImage = {
    src: string;
    alt: string;
};

type Feature = {
    title: string;
    description: string;
};

type Step = {
    number: string;
    title: string;
    description: string;
};

type Testimonial = {
    name: string;
    text: string;
};

const features: Feature[] = [
    {
        title: "Diseño elegante",
        description:
            "Buzones modernos fabricados en metal, con líneas limpias y presencia premium para viviendas, edificios y oficinas.",
    },
    {
        title: "Fabricación propia",
        description:
            "Cada unidad está hecha a medida y con control directo del proceso, lo que permite cuidar terminaciones, calidad y detalles.",
    },
    {
        title: "Mayor seguridad",
        description:
            "Ideales para recibir cartas, sobres y pequeños paquetes sin necesidad de abrir la puerta principal.",
    },
    {
        title: "Personalización",
        description:
            "Podés elegir color, medidas, calados, nombre o marca, y adaptar el frente del buzón al estilo de tu propiedad.",
    },
];

const steps: Step[] = [
    {
        number: "01",
        title: "Elegís el modelo",
        description:
            "Seleccioná el formato, color y estilo que mejor combine con tu puerta o fachada.",
    },
    {
        number: "02",
        title: "Definimos detalles",
        description:
            "Ajustamos medidas, calados, textos, terminaciones y tipo de uso según tu necesidad.",
    },
    {
        number: "03",
        title: "Fabricamos tu buzón",
        description:
            "Producimos cada unidad con materiales resistentes, terminación prolija y estética cuidada.",
    },
    {
        number: "04",
        title: "Te lo entregamos",
        description:
            "Recibís un producto listo para instalar y darle a tu ingreso una imagen moderna y funcional.",
    },
];

const testimonials: Testimonial[] = [
    {
        name: "Lucía M.",
        text: "Quedó espectacular en la puerta. Se nota la calidad y cambió totalmente la estética del frente de mi casa.",
    },
    {
        name: "Mariano R.",
        text: "Buscaba algo moderno y distinto. Me encantó la terminación y la posibilidad de personalizarlo.",
    },
    {
        name: "Valeria G.",
        text: "Muy buena presencia, práctico y elegante. Además, la atención y el asesoramiento fueron excelentes.",
    },
];

const galleryImages: GalleryImage[] = [
    {
        src: "https://i.imgur.com/Ln6zATd.jpeg",
        alt: "Puerta moderna de madera",
    },
    {
        src: "https://i.imgur.com/yZXKrwR.jpeg",
        alt: "Entrada de casa moderna",
    },
    {
        src: "https://i.imgur.com/Y1iblvc.png",
        alt: "Fachada residencial elegante",
    },
    {
        src: "https://i.imgur.com/MTjVItA.jpeg",
        alt: "Detalle de diseño moderno",
    },
    {
        src: "https://i.imgur.com/Ln6zATd.jpeg",
        alt: "Ingreso de vivienda",
    },
    {
        src: "https://i.imgur.com/yZXKrwR.jpeg",
        alt: "Frente arquitectónico minimalista",
    },
    {
        src: "https://i.imgur.com/Y1iblvc.png",
        alt: "Puerta y acceso moderno",
    },
    {
        src: "https://i.imgur.com/MTjVItA.jpeg",
        alt: "Detalles de exterior contemporáneo",
    },
    {
        src: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
        alt: "Arquitectura de acceso",
    },
    {
        src: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1200&q=80",
        alt: "Casa de diseño moderno",
    },
];

const useReveal = () => {
    useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>(".reveal");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("revealed");
                    }
                });
            },
            {
                threshold: 0.15,
            }
        );

        elements.forEach((element) => observer.observe(element));

        return () => {
            elements.forEach((element) => observer.unobserve(element));
            observer.disconnect();
        };
    }, []);
};

export default function Buzon() {
    const [menuOpen, setMenuOpen] = useState(false);

    useReveal();

    const heroImages = useMemo(() => galleryImages.slice(0, 4), []);

    const scrollToId = (id: string) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setMenuOpen(false);
        }
    };

    return (
        <div className="buzon-page">
            <header className="buzon-header">
                <div className="container buzon-header__inner">
                    <button
                        type="button"
                        className="brand-button"
                        onClick={() => scrollToId("inicio")}
                    >
                        <span className="brand-badge">BD</span>
                        <span className="brand-text">
                            <strong>BUZON</strong>DELIVERY
                        </span>
                    </button>

                    <nav className={`buzon-nav ${menuOpen ? "is-open" : ""}`}>
                        <button
                            type="button"
                            onClick={() => scrollToId("beneficios")}
                        >
                            Beneficios
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollToId("galeria")}
                        >
                            Galería
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollToId("proceso")}
                        >
                            Proceso
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollToId("contacto")}
                        >
                            Contacto
                        </button>
                    </nav>

                    <div className="header-actions">
                        <a
                            href="https://wa.me/5491100000000"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn--primary btn--small"
                        >
                            Pedir cotización
                        </a>

                        <button
                            type="button"
                            className={`menu-toggle ${menuOpen ? "active" : ""}`}
                            onClick={() => setMenuOpen((prev) => !prev)}
                            aria-label="Abrir menú"
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
            </header>

            <main>
                <section id="inicio" className="hero">
                    <div className="container hero__grid">
                        <div className="hero__content reveal">
                            <div className="eyebrow">Buzones premium de fabricación propia</div>
                            <h1>
                                Transformá tu entrada con un buzón moderno,
                                elegante y funcional
                            </h1>
                            <p>
                                Diseñamos y fabricamos buzones metálicos con estética
                                contemporánea, ideales para cartas, sobres y pequeños
                                paquetes. Un producto que combina seguridad, presencia y
                                diseño.
                            </p>

                            <div className="hero__buttons">
                                <a
                                    href="https://wa.me/5491100000000"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn--primary"
                                >
                                    Quiero mi buzón
                                </a>
                                <button
                                    type="button"
                                    className="btn btn--ghost"
                                    onClick={() => scrollToId("galeria")}
                                >
                                    Ver galería
                                </button>
                            </div>

                            <div className="hero__stats">
                                <div className="stat-card">
                                    <strong>Fabricación</strong>
                                    <span>Propia y personalizada</span>
                                </div>
                                <div className="stat-card">
                                    <strong>Estilo</strong>
                                    <span>Minimalista y premium</span>
                                </div>
                                <div className="stat-card">
                                    <strong>Uso</strong>
                                    <span>Casas, edificios y oficinas</span>
                                </div>
                            </div>
                        </div>

                        <div className="hero__visual reveal">
                            <div className="hero-card hero-card--main floating-card">
                                <img
                                    src="https://i.imgur.com/Ln6zATd.jpeg"
                                    alt="Buzón moderno recibiendo pizza"
                                />
                            </div>

                            <div className="hero-card hero-card--secondary">
                                {heroImages.map((image, index) => (
                                    <div
                                        className="hero-card__thumb"
                                        key={`${image.alt}-${index}`}
                                    >
                                        <img src={image.src} alt={image.alt} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="hero-blur hero-blur--one" />
                    <div className="hero-blur hero-blur--two" />
                </section>

                <section id="beneficios" className="section section--dark">
                    <div className="container">
                        <div className="section-heading reveal">
                            <span className="eyebrow">Por qué elegirnos</span>
                            <h2>Diseño, presencia y funcionalidad en una sola pieza</h2>
                            <p>
                                Nuestros buzones están pensados para quienes buscan un
                                producto útil, sólido y con una estética superior.
                            </p>
                        </div>

                        <div className="features-grid">
                            {features.map((feature) => (
                                <article className="feature-card reveal" key={feature.title}>
                                    <div className="feature-card__icon">
                                        <span />
                                    </div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container showcase">
                        <div className="showcase__image reveal">
                            <img
                                src="/mnt/data/Buzon 1(2).png"
                                alt="Buzón abierto en puerta de madera"
                            />
                        </div>

                        <div className="showcase__content reveal">
                            <span className="eyebrow">Producto destacado</span>
                            <h2>Una solución elegante para recibir sin abrir la puerta</h2>
                            <p>
                                Este concepto combina la apariencia de un frente limpio y
                                sofisticado con la practicidad de contar con un espacio de
                                recepción integrado a la puerta o fachada.
                            </p>

                            <ul className="check-list">
                                <li>Terminación moderna y profesional</li>
                                <li>Calados personalizados con nombre o marca</li>
                                <li>Posibilidad de adaptar medidas y configuración</li>
                                <li>Ideal para casas, PH, oficinas y emprendimientos</li>
                            </ul>

                            <a
                                href="https://wa.me/5491100000000"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn--primary"
                            >
                                Consultar modelo
                            </a>
                        </div>
                    </div>
                </section>

                <section id="galeria" className="section section--soft">
                    <div className="container">
                        <div className="section-heading reveal">
                            <span className="eyebrow">Galería</span>
                            <h2>Inspiración para tu próximo buzón</h2>
                            <p>
                                Acá tenés una galería inicial con 10 imágenes. Después
                                podés reemplazarlas por fotos reales de tus modelos,
                                instalaciones y detalles de fabricación.
                            </p>
                        </div>

                        <div className="gallery-grid">
                            <article className="gallery-card gallery-card--large reveal">
                                <img
                                    src="/mnt/data/Buzon 2.png"
                                    alt="Buzón con ranura de cartas"
                                />
                            </article>

                            <article className="gallery-card reveal">
                                <img
                                    src="/mnt/data/Buzon 3(1).png"
                                    alt="Buzón recibiendo sobre"
                                />
                            </article>

                            {galleryImages.map((image, index) => (
                                <article className="gallery-card reveal" key={`${image.alt}-${index}`}>
                                    <img src={image.src} alt={image.alt} />
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="proceso" className="section">
                    <div className="container">
                        <div className="section-heading reveal">
                            <span className="eyebrow">Cómo trabajamos</span>
                            <h2>Del diseño a la entrega</h2>
                            <p>
                                Un proceso simple, claro y orientado a lograr un producto
                                atractivo y duradero.
                            </p>
                        </div>

                        <div className="steps-grid">
                            {steps.map((step) => (
                                <article className="step-card reveal" key={step.number}>
                                    <div className="step-card__number">{step.number}</div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section section--dark">
                    <div className="container testimonials">
                        <div className="section-heading reveal">
                            <span className="eyebrow">Opiniones</span>
                            <h2>Lo que valoran nuestros clientes</h2>
                            <p>
                                Estética, calidad de terminación y una presencia que eleva
                                la imagen del ingreso.
                            </p>
                        </div>

                        <div className="testimonials-grid">
                            {testimonials.map((testimonial) => (
                                <article className="testimonial-card reveal" key={testimonial.name}>
                                    <div className="testimonial-quote">“</div>
                                    <p>{testimonial.text}</p>
                                    <strong>{testimonial.name}</strong>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contacto" className="section cta-section">
                    <div className="container cta-box reveal">
                        <div>
                            <span className="eyebrow">Tu buzón, tu estilo</span>
                            <h2>Pedí una cotización y armamos el modelo ideal para vos</h2>
                            <p>
                                Escribinos para contarnos qué estilo buscás, dónde lo querés
                                instalar y si querés personalización de medidas, nombre o
                                marca.
                            </p>
                        </div>

                        <div className="cta-actions">
                            <a
                                href="https://wa.me/5491100000000"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn--primary"
                            >
                                Hablar por WhatsApp
                            </a>
                            <a
                                href="mailto:ventas@buzondelivery.com"
                                className="btn btn--ghost btn--light"
                            >
                                Enviar email
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="buzon-footer">
                <div className="container buzon-footer__inner">
                    <div>
                        <strong>BUZONDELIVERY</strong>
                        <p>Buzones modernos de fabricación propia.</p>
                    </div>

                    <div className="footer-links">
                        <button type="button" onClick={() => scrollToId("inicio")}>
                            Inicio
                        </button>
                        <button type="button" onClick={() => scrollToId("galeria")}>
                            Galería
                        </button>
                        <button type="button" onClick={() => scrollToId("contacto")}>
                            Contacto
                        </button>
                    </div>
                </div>
            </footer>

            <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-float"
                aria-label="WhatsApp"
            >
                WA
            </a>
        </div>
    );
}