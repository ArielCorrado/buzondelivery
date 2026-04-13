import React, { useMemo, useState } from "react";
import {
    ChevronRight,
    ShieldCheck,
    PackageCheck,
    DoorOpen,
    Truck,
    Mail,
    Star,
    CheckCircle2,
    Minus,
    Plus,
    Phone,
    MapPin,
    Clock3,
} from "lucide-react";
import "./buzon6.css";

type FaqItem = {
    question: string;
    answer: string;
};

const imagePool = [
    "https://i.imgur.com/Ln6zATd.jpeg",
    "https://i.imgur.com/yZXKrwR.jpeg",
    "https://i.imgur.com/MTjVItA.jpeg",
    "https://i.imgur.com/Y1iblvc.png",
];

const repeatedGallery = [
    imagePool[0],
    imagePool[1],
    imagePool[2],
    imagePool[3],
    imagePool[0],
    imagePool[1],
    imagePool[2],
    imagePool[3],
    imagePool[0],
    imagePool[1],
];

const featureCards = [
    {
        icon: <ShieldCheck size={26} />,
        title: "Seguridad elegante",
        text: "Diseño robusto para recibir correspondencia, deliverys y pequeños paquetes con más privacidad.",
    },
    {
        icon: <DoorOpen size={26} />,
        title: "Apertura práctica",
        text: "Sistema pensado para uso diario, con acceso cómodo y una experiencia simple para el usuario.",
    },
    {
        icon: <Mail size={26} />,
        title: "Multiuso",
        text: "Ideal para cartas, sobres, documentación, pedidos livianos y entregas frecuentes.",
    },
    {
        icon: <PackageCheck size={26} />,
        title: "Fabricación propia",
        text: "Terminaciones cuidadas, estética moderna y posibilidad de adaptar detalles a tu necesidad.",
    },
];

const highlights = [
    "Diseño moderno tipo premium",
    "Presencia fuerte en fachadas",
    "Ideal para casas, edificios y comercios",
    "Preparado para uso cotidiano",
];

const metrics = [
    { value: "10+", label: "Imágenes de producto" },
    { value: "100%", label: "Diseño responsive" },
    { value: "1", label: "Landing onepage" },
    { value: "24/7", label: "Impacto visual" },
];

const testimonials = [
    {
        name: "Cliente residencial",
        role: "Instalación en vivienda",
        text: "Se nota mucho más prolijo que un buzón común. Quedó moderno y suma presencia a toda la entrada.",
    },
    {
        name: "Cliente comercial",
        role: "Uso intensivo",
        text: "Nos gustó porque transmite calidad y además sirve para entregas chicas sin depender siempre de abrir la puerta.",
    },
    {
        name: "Cliente particular",
        role: "Compra personalizada",
        text: "La estética es excelente. Lo elegimos por diseño, pero en el uso diario también resultó muy práctico.",
    },
];

const faqs: FaqItem[] = [
    {
        question: "¿Se puede personalizar el diseño?",
        answer:
            "Sí. Podés adaptar terminaciones, colores, detalles de frente y definir variantes según el proyecto.",
    },
    {
        question: "¿Sirve solo para cartas?",
        answer:
            "No. También está pensado para sobres, documentación, pequeños paquetes y entregas livianas.",
    },
    {
        question: "¿La web está preparada para usar en celular?",
        answer:
            "Sí. Esta versión fue armada responsive para que se vea bien en desktop, tablet y teléfonos.",
    },
    {
        question: "¿Las imágenes se pueden cambiar luego?",
        answer:
            "Sí. Solo tenés que reemplazar las URLs del arreglo principal por tus fotos finales.",
    },
];

function Stars() {
    return (
        <div className="b6-stars" aria-label="5 estrellas">
            {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={16} fill="currentColor" />
            ))}
        </div>
    );
}

function FaqRow({
    item,
    open,
    onToggle,
}: {
    item: FaqItem;
    open: boolean;
    onToggle: () => void;
}) {
    return (
        <div className={`b6-faq-item ${open ? "is-open" : ""}`}>
            <button className="b6-faq-question" onClick={onToggle} type="button">
                <span>{item.question}</span>
                {open ? <Minus size={18} /> : <Plus size={18} />}
            </button>
            <div className="b6-faq-answer">
                <p>{item.answer}</p>
            </div>
        </div>
    );
}

export default function Buzon6() {
    const [activeFaq, setActiveFaq] = useState<number>(0);

    const heroThumbs = useMemo(() => repeatedGallery.slice(0, 4), []);

    return (
        <div className="b6-page">
            <header className="b6-header">
                <div className="b6-container b6-header-inner">
                    <a className="b6-brand" href="#inicio">
                        <span className="b6-brand-dot" />
                        Buzón Delivery
                    </a>

                    <nav className="b6-nav">
                        <a href="#inicio">Inicio</a>
                        <a href="#beneficios">Beneficios</a>
                        <a href="#galeria">Galería</a>
                        <a href="#detalles">Detalles</a>
                        <a href="#faq">FAQ</a>
                        <a href="#contacto">Contacto</a>
                    </nav>

                    <a className="b6-header-cta" href="#contacto">
                        Consultar
                    </a>
                </div>
            </header>

            <main>
                <section className="b6-hero" id="inicio">
                    <div className="b6-container b6-hero-grid">
                        <div className="b6-hero-copy">
                            <span className="b6-kicker">Diseño premium · fabricación propia</span>
                            <h1>
                                Un buzón moderno para <br />
                                cartas, paquetes y deliverys
                            </h1>
                            <p>
                                Landing inspirada en el estilo visual de Proland: limpia, elegante,
                                comercial y enfocada en mostrar el producto con imágenes grandes,
                                bloques claros y llamados a la acción.
                            </p>

                            <div className="b6-hero-actions">
                                <a className="b6-btn b6-btn-primary" href="#galeria">
                                    Ver producto
                                    <ChevronRight size={18} />
                                </a>
                                <a className="b6-btn b6-btn-secondary" href="#contacto">
                                    Pedir presupuesto
                                </a>
                            </div>

                            <ul className="b6-checklist">
                                {highlights.map((item) => (
                                    <li key={item}>
                                        <CheckCircle2 size={18} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="b6-hero-visual">
                            <div className="b6-hero-card">
                                <div className="b6-badge-floating">Nuevo diseño</div>
                                <img
                                    src={imagePool[0]}
                                    alt="Buzón principal"
                                    className="b6-main-product-image"
                                />
                            </div>

                            <div className="b6-hero-thumbs">
                                {heroThumbs.map((src, index) => (
                                    <div className="b6-thumb" key={`${src}-${index}`}>
                                        <img src={src} alt={`Vista del buzón ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="b6-metrics">
                    <div className="b6-container b6-metrics-grid">
                        {metrics.map((item) => (
                            <div className="b6-metric-card" key={item.label}>
                                <strong>{item.value}</strong>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="b6-section" id="beneficios">
                    <div className="b6-container">
                        <div className="b6-section-heading">
                            <span className="b6-kicker">Beneficios</span>
                            <h2>Una presentación de producto con estética moderna</h2>
                            <p>
                                Esta versión replica la lógica visual de una landing premium de
                                producto: mucha imagen, jerarquía clara y secciones pensadas para vender.
                            </p>
                        </div>

                        <div className="b6-feature-grid">
                            {featureCards.map((item) => (
                                <article className="b6-feature-card" key={item.title}>
                                    <div className="b6-feature-icon">{item.icon}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="b6-section b6-showcase" id="galeria">
                    <div className="b6-container">
                        <div className="b6-section-heading">
                            <span className="b6-kicker">Galería</span>
                            <h2>Imágenes del producto</h2>
                            <p>
                                Se muestran 10 imágenes en total usando las 4 URLs que pasaste y
                                repitiéndolas en distintos bloques de la landing.
                            </p>
                        </div>

                        <div className="b6-gallery-grid">
                            {repeatedGallery.map((src, index) => (
                                <figure
                                    className={`b6-gallery-item ${index % 5 === 0 ? "is-large" : ""}`}
                                    key={`${src}-${index}`}
                                >
                                    <img src={src} alt={`Imagen del buzón ${index + 1}`} />
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="b6-section" id="detalles">
                    <div className="b6-container">
                        <div className="b6-details-grid">
                            <div className="b6-details-media">
                                <div className="b6-stack-card b6-stack-card-back">
                                    <img src={imagePool[2]} alt="Detalle del buzón" />
                                </div>
                                <div className="b6-stack-card b6-stack-card-front">
                                    <img src={imagePool[3]} alt="Otra vista del buzón" />
                                </div>
                            </div>

                            <div className="b6-details-copy">
                                <span className="b6-kicker">Detalles del producto</span>
                                <h2>Fuerte visualmente. Práctico en el uso diario.</h2>
                                <p>
                                    El objetivo de esta página es vender el producto desde una estética
                                    premium: hero potente, tarjetas informativas, bloques destacados,
                                    testimonios, FAQ y formulario de contacto final.
                                </p>

                                <div className="b6-detail-points">
                                    <div className="b6-detail-point">
                                        <Truck size={20} />
                                        <div>
                                            <h3>Ideal para entregas</h3>
                                            <p>Resuelve una necesidad real con una presencia visual superior.</p>
                                        </div>
                                    </div>

                                    <div className="b6-detail-point">
                                        <ShieldCheck size={20} />
                                        <div>
                                            <h3>Diseño con personalidad</h3>
                                            <p>Un producto que además de servir, aporta estilo a la fachada.</p>
                                        </div>
                                    </div>

                                    <div className="b6-detail-point">
                                        <PackageCheck size={20} />
                                        <div>
                                            <h3>Listo para personalizar</h3>
                                            <p>La estructura del componente permite reemplazar textos e imágenes fácilmente.</p>
                                        </div>
                                    </div>
                                </div>

                                <a className="b6-btn b6-btn-primary" href="#contacto">
                                    Quiero mi presupuesto
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="b6-section b6-testimonials">
                    <div className="b6-container">
                        <div className="b6-section-heading">
                            <span className="b6-kicker">Opiniones</span>
                            <h2>Testimonios que acompañan la propuesta</h2>
                        </div>

                        <div className="b6-testimonials-grid">
                            {testimonials.map((item) => (
                                <article className="b6-testimonial-card" key={item.name + item.role}>
                                    <Stars />
                                    <p>"{item.text}"</p>
                                    <div className="b6-testimonial-author">
                                        <strong>{item.name}</strong>
                                        <span>{item.role}</span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="b6-section b6-cta-band">
                    <div className="b6-container b6-cta-band-inner">
                        <div>
                            <span className="b6-kicker">Hecho para convertir</span>
                            <h2>Mostrá tu buzón con una landing mucho más vendedora</h2>
                        </div>
                        <a className="b6-btn b6-btn-light" href="#contacto">
                            Empezar ahora
                        </a>
                    </div>
                </section>

                <section className="b6-section" id="faq">
                    <div className="b6-container">
                        <div className="b6-section-heading">
                            <span className="b6-kicker">Preguntas frecuentes</span>
                            <h2>Todo listo para adaptar a tu proyecto real</h2>
                        </div>

                        <div className="b6-faq">
                            {faqs.map((item, index) => (
                                <FaqRow
                                    key={item.question}
                                    item={item}
                                    open={activeFaq === index}
                                    onToggle={() => setActiveFaq(activeFaq === index ? -1 : index)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="b6-section b6-contact-section" id="contacto">
                    <div className="b6-container b6-contact-grid">
                        <div className="b6-contact-copy">
                            <span className="b6-kicker">Contacto</span>
                            <h2>Pedí tu presupuesto</h2>
                            <p>
                                Cambiá estos datos por los tuyos. La sección ya queda armada para
                                cerrar la landing con un llamado claro a la acción.
                            </p>

                            <div className="b6-contact-list">
                                <div>
                                    <Phone size={18} />
                                    <span>+54 9 11 0000 0000</span>
                                </div>
                                <div>
                                    <MapPin size={18} />
                                    <span>Buenos Aires, Argentina</span>
                                </div>
                                <div>
                                    <Clock3 size={18} />
                                    <span>Lunes a sábado · 9:00 a 18:00</span>
                                </div>
                            </div>
                        </div>

                        <form className="b6-contact-card">
                            <div className="b6-form-grid">
                                <input type="text" placeholder="Nombre" />
                                <input type="text" placeholder="Teléfono" />
                            </div>
                            <input type="email" placeholder="Email" />
                            <textarea placeholder="Contanos qué modelo necesitás" rows={5} />
                            <button className="b6-btn b6-btn-primary b6-form-submit" type="submit">
                                Enviar consulta
                            </button>
                        </form>
                    </div>
                </section>
            </main>

            <footer className="b6-footer">
                <div className="b6-container b6-footer-inner">
                    <div>
                        <strong>Buzón Delivery</strong>
                        <p>Landing onepage inspirada en Proland y adaptada a React + TypeScript.</p>
                    </div>
                    <a href="#inicio">Volver arriba</a>
                </div>
            </footer>
        </div>
    );
}
