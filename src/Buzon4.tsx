import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    ShieldCheck,
    Package,
    Mail,
    Truck,
    Lock,
    House,
    ChevronLeft,
    ChevronRight,
    Phone,
    MapPin,
    Clock3,
    CheckCircle2,
    Menu,
    X,
} from "lucide-react";
import "./LandingBuzonDelivery.css";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" as const },
    },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" as const },
    },
};

const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" as const },
    },
};

const features = [
    {
        icon: <Mail size={32} />,
        title: "Recibí sobres sin contacto",
        text: "Funciona como un buzón tradicional para cartas, facturas y documentos, pero con una boca más práctica y protegida.",
    },
    {
        icon: <Package size={32} />,
        title: "Pasá paquetes y delivery",
        text: "Permite entregar compras online, encomiendas o comida sin abrir la puerta, reduciendo riesgos y ganando comodidad.",
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Más seguridad para tu hogar",
        text: "Evitá el contacto directo con desconocidos y mantené una barrera física entre el exterior y el interior de tu casa.",
    },
];

const detailSections = [
    {
        title: "Diseñado para entregas reales",
        text: "Nuestro buzón está pensado para la vida diaria: sobres, paquetes pequeños, pedidos de delivery y documentación importante. Todo ingresa desde el exterior y se retira desde adentro, sin exponer tu casa.",
        bullets: [
            "Ideal para casas, oficinas, dúplex y departamentos en planta baja",
            "Apto para cartas, compras online y viandas",
            "Sistema práctico para uso diario",
        ],
        image:
            "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Protección, comodidad y buena presencia",
        text: "Además de sumar seguridad, aporta una estética moderna a la fachada. Es una solución útil para quienes reciben envíos frecuentes y quieren evitar abrir la puerta cada vez.",
        bullets: [
            "Frente prolijo y moderno",
            "Uso simple para repartidores y visitas",
            "Menos exposición al abrir la puerta",
        ],
        image:
            "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Pensado para la rutina de hoy",
        text: "Con el crecimiento de las compras online y del delivery, este buzón resuelve una necesidad concreta: recibir sin interrupciones, sin apuro y con mayor tranquilidad.",
        bullets: [
            "Perfecto para hogares con alto movimiento",
            "Mejora la experiencia de recepción",
            "Aumenta la sensación de control y privacidad",
        ],
        image:
            "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    },
];

const gallery = [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
];

const testimonials = [
    {
        name: "Mariana G.",
        role: "Lomas de Zamora",
        text: "Ahora recibimos sobres y pedidos sin abrir la puerta. Es cómodo, seguro y queda muy bien en el frente de la casa.",
    },
    {
        name: "Federico R.",
        role: "Casa con oficina",
        text: "Nos solucionó la recepción de documentación y paquetes durante el día. Muy práctico cuando estamos trabajando.",
    },
    {
        name: "Carla y Esteban",
        role: "Vivienda familiar",
        text: "Con el delivery lo usamos todo el tiempo. Nos da más tranquilidad, sobre todo de noche o cuando están los chicos en casa.",
    },
];

const extraFeatures = [
    {
        icon: <Lock size={24} />,
        title: "Más privacidad",
        text: "Reducí el contacto directo con repartidores o visitas cuando no querés abrir la puerta.",
    },
    {
        icon: <Truck size={24} />,
        title: "Ideal para delivery",
        text: "Recibí pedidos de comida o compras chicas con una interacción más rápida y segura.",
    },
    {
        icon: <House size={24} />,
        title: "Se integra al frente",
        text: "Aporta una imagen moderna y funcional a la fachada de tu vivienda o negocio.",
    },
    {
        icon: <ShieldCheck size={24} />,
        title: "Pensado para hoy",
        text: "Perfecto para quienes compran online seguido y valoran la seguridad en la entrada.",
    },
];

type SectionTitleProps = {
    eyebrow: string;
    title: string;
    text: string;
    dark?: boolean;
};

function SectionTitle({
    eyebrow,
    title,
    text,
    dark = false,
}: SectionTitleProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="section-title"
        >
            <p className={`section-title__eyebrow ${dark ? "section-title__eyebrow--dark" : ""}`}>
                {eyebrow}
            </p>
            <h2 className={`section-title__heading ${dark ? "section-title__heading--dark" : ""}`}>
                {title}
            </h2>
            <p className={`section-title__text ${dark ? "section-title__text--dark" : ""}`}>
                {text}
            </p>
        </motion.div>
    );
}

export default function LandingBuzonDelivery() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const current = useMemo(
        () => testimonials[currentTestimonial],
        [currentTestimonial]
    );

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.classList.add("mobile-menu-open");
        } else {
            document.body.classList.remove("mobile-menu-open");
        }

        return () => {
            document.body.classList.remove("mobile-menu-open");
        };
    }, [mobileMenuOpen]);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    return (
        <div className="landing">
            <nav className="navbar">
                <div className="container navbar__content">
                    <div>
                        <p className="navbar__brand">Buzón Delivery</p>
                        <p className="navbar__subtitle">Recibí sin abrir la puerta</p>
                    </div>

                    <div className="navbar__links">
                        <a href="#beneficios" className="navbar__link">
                            Beneficios
                        </a>
                        <a href="#como-funciona" className="navbar__link">
                            Cómo funciona
                        </a>
                        <a href="#galeria" className="navbar__link">
                            Galería
                        </a>
                        <a href="#contacto" className="navbar__link">
                            Contacto
                        </a>
                    </div>

                    <button
                        type="button"
                        className="navbar__toggle"
                        aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={mobileMenuOpen}
                        onClick={toggleMobileMenu}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            className="mobile-menu__overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={closeMobileMenu}
                        />

                        <motion.aside
                            className="mobile-menu"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <div className="mobile-menu__header">
                                <div>
                                    <p className="mobile-menu__brand">Buzón Delivery</p>
                                    <p className="mobile-menu__subtitle">Recibí sin abrir la puerta</p>
                                </div>

                                <button
                                    type="button"
                                    className="mobile-menu__close"
                                    aria-label="Cerrar menú"
                                    onClick={closeMobileMenu}
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="mobile-menu__nav">
                                <a
                                    href="#beneficios"
                                    className="mobile-menu__link"
                                    onClick={closeMobileMenu}
                                >
                                    Beneficios
                                </a>
                                <a
                                    href="#como-funciona"
                                    className="mobile-menu__link"
                                    onClick={closeMobileMenu}
                                >
                                    Cómo funciona
                                </a>
                                <a
                                    href="#galeria"
                                    className="mobile-menu__link"
                                    onClick={closeMobileMenu}
                                >
                                    Galería
                                </a>
                                <a
                                    href="#contacto"
                                    className="mobile-menu__link"
                                    onClick={closeMobileMenu}
                                >
                                    Contacto
                                </a>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            <section className="hero">
                <div className="hero__overlay" />

                <div className="container hero__content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero__text"
                    >
                        <p className="hero__eyebrow">
                            Seguridad + comodidad + diseño
                        </p>
                        <h1 className="hero__title">
                            El buzón que recibe sobres, paquetes y delivery.
                            <span className="hero__title-highlight">
                                {" "}Sin abrir la puerta
                            </span>
                        </h1>
                        <p className="hero__description">
                            Una solución práctica para hogares y oficinas que quieren más seguridad al recibir envíos. Desde cartas y documentación hasta compras online o comida, todo entra desde afuera y se retira desde adentro.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="hero__image-wrapper"
                    >
                        <div className="hero__image-box">
                            <div className="hero__glow" />
                            <img
                                src="/images/buzon1.png"
                                alt="Buzón moderno para sobres y entregas"
                                className="hero__image"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="beneficios" className="section section--light">
                <div className="container">
                    <SectionTitle
                        eyebrow="Por qué elegirlo"
                        title="Una nueva forma de recibir en casa"
                        text="Inspirado en la comodidad de un buzón tradicional, pero adaptado a la vida actual: más compras online, más delivery y mayor necesidad de seguridad en la entrada."
                    />

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.25 }}
                                variants={fadeUp}
                                transition={{ delay: index * 0.12 }}
                                className="feature-card"
                            >
                                <div className="feature-card__icon">{feature.icon}</div>
                                <h3 className="feature-card__title">{feature.title}</h3>
                                <p className="feature-card__text">{feature.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="como-funciona" className="section">
                <div className="container details-grid">
                    {detailSections.map((section, index) => {
                        const reverse = index % 2 === 1;

                        return (
                            <div key={section.title} className="detail-row">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.25 }}
                                    variants={reverse ? fadeRight : fadeLeft}
                                    className={reverse ? "detail-row__image detail-row__image--reverse" : "detail-row__image"}
                                >
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="detail-row__img"
                                    />
                                </motion.div>

                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.25 }}
                                    variants={reverse ? fadeLeft : fadeRight}
                                    className={reverse ? "detail-row__content detail-row__content--reverse" : "detail-row__content"}
                                >
                                    <p className="detail-row__eyebrow">
                                        Solución inteligente
                                    </p>
                                    <h2 className="detail-row__title">{section.title}</h2>
                                    <p className="detail-row__text">{section.text}</p>

                                    <div className="detail-row__bullets">
                                        {section.bullets.map((bullet) => (
                                            <div key={bullet} className="detail-row__bullet">
                                                <CheckCircle2
                                                    size={20}
                                                    className="detail-row__bullet-icon"
                                                />
                                                <p className="detail-row__bullet-text">{bullet}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="section section--dark">
                <div className="container">
                    <SectionTitle
                        eyebrow="Características"
                        title="Hecho para durar y para simplificar tu día"
                        text="Combina funcionalidad, presencia estética y un uso intuitivo para que recibir entregas sea más seguro y mucho más cómodo."
                        dark
                    />

                    <div className="extra-features-grid">
                        {extraFeatures.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeUp}
                                transition={{ delay: index * 0.08 }}
                                className="extra-feature-card"
                            >
                                <div className="extra-feature-card__icon">{item.icon}</div>
                                <h3 className="extra-feature-card__title">{item.title}</h3>
                                <p className="extra-feature-card__text">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="galeria" className="section">
                <div className="container">
                    <SectionTitle
                        eyebrow="Galería"
                        title="Inspiración para tu frente y tu forma de recibir"
                        text="Una selección visual para mostrar el tipo de uso, estética y situaciones que este producto viene a resolver."
                    />

                    <div className="gallery-grid">
                        {gallery.map((image, index) => (
                            <motion.div
                                key={image}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeUp}
                                transition={{ delay: index * 0.06 }}
                                className="gallery-item"
                            >
                                <img
                                    src={image}
                                    alt={`Imagen de referencia ${index + 1}`}
                                    className="gallery-item__image"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section--light">
                <div className="testimonials-container">
                    <SectionTitle
                        eyebrow="Opiniones"
                        title="Lo que valoran quienes ya lo usan"
                        text="Seguridad, practicidad y tranquilidad son las palabras que más se repiten entre quienes incorporaron este buzón en su entrada."
                    />

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                        className="testimonial-card"
                    >
                        <p className="testimonial-card__text">“{current.text}”</p>

                        <div className="testimonial-card__footer">
                            <div>
                                <p className="testimonial-card__name">{current.name}</p>
                                <p className="testimonial-card__role">{current.role}</p>
                            </div>

                            <div className="testimonial-card__actions">
                                <button
                                    onClick={prevTestimonial}
                                    aria-label="Testimonio anterior"
                                    className="testimonial-card__button"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    aria-label="Siguiente testimonio"
                                    className="testimonial-card__button"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="contacto" className="section section--contact">
                <div className="container contact-grid">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={fadeLeft}
                    >
                        <p className="contact__eyebrow">Contactanos</p>
                        <h2 className="contact__title">
                            Pedí información, cotización o asesoramiento
                        </h2>
                        <p className="contact__text">
                            Contanos dónde querés instalarlo y para qué uso lo necesitás. Te ayudamos a encontrar la mejor opción para tu casa, oficina o emprendimiento.
                        </p>

                        <div className="contact-info-list">
                            <div className="contact-info-item">
                                <div className="contact-info-item__icon">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="contact-info-item__title">WhatsApp / Teléfono</p>
                                    <p className="contact-info-item__text">+54 11 0000-0000</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-item__icon">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="contact-info-item__title">Zona de atención</p>
                                    <p className="contact-info-item__text">
                                        Buenos Aires y alrededores
                                    </p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-item__icon">
                                    <Clock3 size={20} />
                                </div>
                                <div>
                                    <p className="contact-info-item__title">Horario</p>
                                    <p className="contact-info-item__text">
                                        Lunes a viernes de 9 a 18 hs
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={fadeRight}
                        className="contact-form"
                    >
                        <div className="contact-form__row">
                            <div>
                                <label className="contact-form__label">Nombre</label>
                                <input
                                    type="text"
                                    placeholder="Tu nombre"
                                    className="contact-form__input"
                                />
                            </div>
                            <div>
                                <label className="contact-form__label">Teléfono</label>
                                <input
                                    type="text"
                                    placeholder="Tu teléfono"
                                    className="contact-form__input"
                                />
                            </div>
                        </div>

                        <div className="contact-form__row contact-form__row--margin">
                            <div>
                                <label className="contact-form__label">Email</label>
                                <input
                                    type="email"
                                    placeholder="tu@email.com"
                                    className="contact-form__input"
                                />
                            </div>
                            <div>
                                <label className="contact-form__label">Tipo de uso</label>
                                <select className="contact-form__input contact-form__select">
                                    <option>Hogar</option>
                                    <option>Oficina</option>
                                    <option>Local comercial</option>
                                    <option>Otro</option>
                                </select>
                            </div>
                        </div>

                        <div className="contact-form__textarea-group">
                            <label className="contact-form__label">Mensaje</label>
                            <textarea
                                rows={6}
                                placeholder="Contanos qué necesitás, medidas aproximadas o dónde querés instalarlo"
                                className="contact-form__textarea"
                            />
                        </div>

                        <button type="submit" className="contact-form__submit">
                            Enviar consulta
                        </button>
                    </motion.form>
                </div>
            </section>

            <footer className="footer">
                <div className="container footer__content">
                    <div>
                        <p className="footer__brand">Buzón Delivery</p>
                        <p className="footer__text">
                            Soluciones para recibir sobres, paquetes y delivery con más seguridad.
                        </p>
                    </div>
                    <div className="footer__copy">
                        © 2026 Buzón Delivery. Todos los derechos reservados.
                    </div>
                </div>
            </footer>
        </div>
    );
}