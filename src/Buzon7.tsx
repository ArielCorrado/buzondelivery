import React, { useMemo, useState } from "react";
import "./buzon7.css";

const baseImages = [
    "https://i.imgur.com/Ln6zATd.jpeg",
    "https://i.imgur.com/yZXKrwR.jpeg",
    "https://i.imgur.com/MTjVItA.jpeg",
    "https://i.imgur.com/Y1iblvc.png",
];

const features = [
    {
        title: "Recepción segura",
        text: "Ideal para cartas, documentación y pequeños paquetes sin abrir la puerta.",
    },
    {
        title: "Diseño premium",
        text: "Líneas modernas y presencia visual fuerte para entradas contemporáneas.",
    },
    {
        title: "Fabricación propia",
        text: "Construcción robusta con terminaciones cuidadas y posibilidad de personalización.",
    },
    {
        title: "Uso diario real",
        text: "Pensado para hogares, edificios, oficinas y entregas frecuentes.",
    },
];

const specs = [
    { label: "Material", value: "Acero / chapa plegada" },
    { label: "Terminación", value: "Pintura horneada premium" },
    { label: "Uso", value: "Exterior / interior" },
    { label: "Apertura", value: "Puerta frontal segura" },
    { label: "Personalización", value: "Sí, a pedido" },
    { label: "Aplicación", value: "Casas, edificios, comercios" },
];

const gallery = Array.from({ length: 8 }, (_, index) => baseImages[index % baseImages.length]);

export default function Buzon7() {
    const [activeThumb, setActiveThumb] = useState(0);

    const heroImage = useMemo(() => baseImages[activeThumb], [activeThumb]);

    return (
        <div className="buzon6">
            <div className="buzon6-topbar">
                <div className="buzon6-topbar-inner">
                    <span>Fabricación propia</span>
                    <span>Diseño exclusivo</span>
                    <span>Consultas personalizadas</span>
                </div>
            </div>

            <header className="buzon6-header">
                <div className="buzon6-header-inner">
                    <a href="#inicio" className="buzon6-logo">
                        <span className="buzon6-logo-mark" />
                        <span className="buzon6-logo-text">BUZON DELIVERY</span>
                    </a>

                    <nav className="buzon6-nav">
                        <a href="#inicio">Home</a>
                        <a href="#overview">Overview</a>
                        <a href="#specs">Tech Specs</a>
                        <a href="#gallery">Gallery</a>
                        <a href="#contacto">Contact</a>
                    </nav>

                    <a href="#contacto" className="buzon6-cart-link">
                        Pedir presupuesto
                    </a>
                </div>
            </header>

            <main>
                <section className="buzon6-hero" id="inicio">
                    <div className="buzon6-hero-inner">
                        <div className="buzon6-hero-copy">
                            <p className="buzon6-mini-title">Single Product Landing</p>
                            <h1 className="buzon6-hero-title">
                                BUZON
                                <br />
                                DELIVERY
                            </h1>
                            <p className="buzon6-hero-description">
                                Un buzón moderno para cartas, paquetes y entregas diarias, con una
                                presencia visual fuerte y un diseño pensado para destacar en la entrada
                                de tu hogar o negocio.
                            </p>

                            <div className="buzon6-hero-actions">
                                <a href="#overview" className="buzon6-btn buzon6-btn-primary">
                                    Ver más
                                </a>
                                <a href="#contacto" className="buzon6-btn buzon6-btn-outline">
                                    Consultar
                                </a>
                            </div>
                        </div>

                        <div className="buzon6-hero-visual">
                            <div className="buzon6-hero-word">DELIVERY</div>
                            <img src={heroImage} alt="Buzón destacado" className="buzon6-hero-image" />

                            <div className="buzon6-hero-thumbs">
                                {baseImages.map((image, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        className={`buzon6-thumb ${activeThumb === index ? "is-active" : ""}`}
                                        onClick={() => setActiveThumb(index)}
                                        aria-label={`Seleccionar imagen ${index + 1}`}
                                    >
                                        <img src={image} alt={`Miniatura ${index + 1}`} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="buzon6-overview" id="overview">
                    <div className="buzon6-overview-copy">
                        <div className="buzon6-section-title-wrap">
                            <h2 className="buzon6-section-title">Overview</h2>
                            <span className="buzon6-section-line" />
                        </div>

                        <p>
                            Inspirado en las landing pages de producto único, este diseño pone al
                            buzón como protagonista absoluto: imagen grande, composición limpia,
                            tipografía marcada y una presentación premium orientada a conversión.
                        </p>

                        <p>
                            La idea es mostrar el producto como una pieza funcional y decorativa:
                            algo útil para el día a día, pero con suficiente presencia visual como
                            para realzar una fachada moderna.
                        </p>

                        <a href="#specs" className="buzon6-btn buzon6-btn-primary buzon6-btn-small">
                            Find out more
                        </a>
                    </div>

                    <div className="buzon6-overview-media">
                        <img src={baseImages[1]} alt="Vista de detalle del buzón" />
                        <div className="buzon6-overview-dots">
                            <span />
                            <span />
                        </div>
                    </div>
                </section>

                <section className="buzon6-techspecs" id="specs">
                    <div className="buzon6-techspecs-header">
                        <h2 className="buzon6-section-title buzon6-section-title-light">Tech Specs</h2>
                        <span className="buzon6-section-line buzon6-section-line-light" />
                    </div>

                    <div className="buzon6-techspecs-showcase">
                        <div className="buzon6-techspecs-image-wrap">
                            <img src={baseImages[2]} alt="Buzón especificaciones" className="buzon6-techspecs-image" />

                            <div className="buzon6-spec-point buzon6-spec-point-1">
                                <strong>Construcción robusta</strong>
                                <span>Chapa y estructura preparada para uso diario.</span>
                            </div>

                            <div className="buzon6-spec-point buzon6-spec-point-2">
                                <strong>Puerta frontal</strong>
                                <span>Acceso cómodo y seguro al contenido interior.</span>
                            </div>

                            <div className="buzon6-spec-point buzon6-spec-point-3">
                                <strong>Terminación premium</strong>
                                <span>Acabado visual elegante para exterior moderno.</span>
                            </div>
                        </div>
                    </div>

                    <div className="buzon6-spec-grid">
                        {specs.map((item) => (
                            <div key={item.label} className="buzon6-spec-card">
                                <span>{item.label}</span>
                                <strong>{item.value}</strong>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="buzon6-product-block">
                    <div className="buzon6-product-left">
                        <p className="buzon6-pill">Featured product</p>
                        <img src={baseImages[3]} alt="Producto destacado" />
                    </div>

                    <div className="buzon6-product-right">
                        <p className="buzon6-product-category">Buzón residencial / comercial</p>
                        <h2 className="buzon6-product-title">Buzon Delivery Premium</h2>
                        <div className="buzon6-product-price">Diseño a medida</div>

                        <p className="buzon6-product-text">
                            Un concepto pensado para quienes quieren recibir correspondencia y
                            pequeños paquetes con más seguridad, comodidad y una estética moderna.
                        </p>

                        <div className="buzon6-feature-list">
                            {features.map((feature) => (
                                <div key={feature.title} className="buzon6-feature-item">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="buzon6-product-actions">
                            <a href="#contacto" className="buzon6-btn buzon6-btn-primary">
                                Solicitar cotización
                            </a>
                        </div>
                    </div>
                </section>

                <section className="buzon6-gallery-section" id="gallery">
                    <div className="buzon6-gallery-header">
                        <h2 className="buzon6-section-title">Gallery</h2>
                        <span className="buzon6-section-line" />
                    </div>

                    <div className="buzon6-gallery-grid">
                        {gallery.map((image, index) => (
                            <div key={`${image}-${index}`} className="buzon6-gallery-item">
                                <img src={image} alt={`Galería ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </section>

                <section className="buzon6-contact-section" id="contacto">
                    <div className="buzon6-contact-card">
                        <div className="buzon6-contact-left">
                            <h2>Drop us a line</h2>
                            <p>
                                Consultanos por medidas, colores, grabados, personalización o
                                fabricación especial para tu proyecto.
                            </p>
                        </div>

                        <form className="buzon6-contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="buzon6-form-row">
                                <input type="text" placeholder="Your name" />
                                <input type="email" placeholder="Your email" />
                            </div>

                            <input type="text" placeholder="Subject" />
                            <textarea placeholder="Message" rows={6} />
                            <button type="submit" className="buzon6-btn buzon6-btn-primary buzon6-submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </section>
            </main>

            <footer className="buzon6-footer">
                <div className="buzon6-footer-inner">
                    <div>
                        <div className="buzon6-logo buzon6-logo-footer">
                            <span className="buzon6-logo-mark" />
                            <span className="buzon6-logo-text">BUZON DELIVERY</span>
                        </div>
                        <p>
                            Landing inspirada en un theme single-product, adaptada para vender tus buzones.
                        </p>
                    </div>

                    <div className="buzon6-footer-links">
                        <a href="#inicio">Home</a>
                        <a href="#overview">Overview</a>
                        <a href="#specs">Specs</a>
                        <a href="#gallery">Gallery</a>
                        <a href="#contacto">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}