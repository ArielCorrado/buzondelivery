import React, { useEffect, useMemo, useRef, useState } from "react";
import "./buzon8.css";

const baseImages = [
    "/images/Buzon1SF.png",
    "https://i.imgur.com/yZXKrwR.jpeg",
    "https://i.imgur.com/MTjVItA.jpeg",
    "https://i.imgur.com/Y1iblvc.png",
];

const specs = [
    { label: "Material", value: "Acero / chapa plegada" },
    { label: "Terminación", value: "Pintura premium" },
    { label: "Uso", value: "Exterior / interior" },
    { label: "Apertura", value: "Puerta frontal segura" },
    { label: "Capacidad", value: "Cartas y pequeños paquetes" },
    { label: "Personalización", value: "Sí, a pedido" },
];

const features = [
    {
        title: "Diseño de alto impacto",
        text: "Una presencia fuerte para entradas modernas, minimalistas y elegantes.",
    },
    {
        title: "Fabricación propia",
        text: "Construcción robusta y terminaciones cuidadas para un uso cotidiano real.",
    },
    {
        title: "Entrega más cómoda",
        text: "Ideal para cartas, documentación y pequeños paquetes o delivery.",
    },
    {
        title: "Hecho a medida",
        text: "Posibilidad de adaptar color, tamaño, detalles y estilo visual.",
    },
];

const gallery = Array.from({ length: 10 }, (_, index) => baseImages[index % baseImages.length]);

function getSlidesPerView(width: number) {
    if (width <= 780) return 1;
    if (width <= 1100) return 2;
    return 4;
}

function preloadImages(imageUrls: string[]) {
    return Promise.all(
        imageUrls.map(
            (src) =>
                new Promise<void>((resolve) => {
                    const img = new Image();
                    img.src = src;

                    if (img.complete) {
                        resolve();
                        return;
                    }

                    img.onload = () => resolve();
                    img.onerror = () => resolve();
                })
        )
    );
}

export default function Buzon8() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [imagesReady, setImagesReady] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [slidesPerView, setSlidesPerView] = useState(() => {
        if (typeof window === "undefined") return 4;
        return getSlidesPerView(window.innerWidth);
    });

    const heroImage = useMemo(() => baseImages[0], []);
    const clonesCount = slidesPerView;

    const extendedGallery = useMemo(() => {
        if (gallery.length === 0) return [];
        const headClones = gallery.slice(-clonesCount);
        const tailClones = gallery.slice(0, clonesCount);
        return [...headClones, ...gallery, ...tailClones];
    }, [clonesCount]);

    const [galleryIndex, setGalleryIndex] = useState(clonesCount);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const autoplayRef = useRef<number | null>(null);

    useEffect(() => {
        let mounted = true;

        const uniqueImages = Array.from(new Set([...baseImages, ...gallery]));

        preloadImages(uniqueImages).then(() => {
            if (!mounted) return;
            setImagesReady(true);
            setGalleryIndex(clonesCount);
        });

        return () => {
            mounted = false;
        };
    }, [clonesCount]);

    useEffect(() => {
        const handleResize = () => {
            const nextSlidesPerView = getSlidesPerView(window.innerWidth);
            setSlidesPerView((prev) => (prev === nextSlidesPerView ? prev : nextSlidesPerView));

            if (window.innerWidth > 780) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!imagesReady) return;

        setIsAnimating(false);
        setGalleryIndex(clonesCount);

        const id = window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                setIsAnimating(false);
            });
        });

        return () => window.cancelAnimationFrame(id);
    }, [clonesCount, imagesReady]);

    const clearAutoplay = () => {
        if (autoplayRef.current !== null) {
            window.clearInterval(autoplayRef.current);
            autoplayRef.current = null;
        }
    };

    useEffect(() => {
        clearAutoplay();

        if (!imagesReady || !isAutoPlaying || isAnimating) return;

        autoplayRef.current = window.setInterval(() => {
            setGalleryIndex((prev) => prev + 1);
            setIsAnimating(true);
        }, 3200);

        return () => clearAutoplay();
    }, [imagesReady, isAutoPlaying, isAnimating]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (lightboxIndex !== null) {
                if (event.key === "Escape") {
                    setLightboxIndex(null);
                }

                if (event.key === "ArrowRight") {
                    setLightboxIndex((prev) => {
                        if (prev === null) return null;
                        return (prev + 1) % gallery.length;
                    });
                }

                if (event.key === "ArrowLeft") {
                    setLightboxIndex((prev) => {
                        if (prev === null) return null;
                        return (prev - 1 + gallery.length) % gallery.length;
                    });
                }
            } else if (event.key === "Escape") {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxIndex]);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
    };

    const nextLightboxImage = () => {
        setLightboxIndex((prev) => {
            if (prev === null) return null;
            return (prev + 1) % gallery.length;
        });
    };

    const prevLightboxImage = () => {
        setLightboxIndex((prev) => {
            if (prev === null) return null;
            return (prev - 1 + gallery.length) % gallery.length;
        });
    };

    const nextGallery = () => {
        if (!imagesReady || isAnimating) return;
        setGalleryIndex((prev) => prev + 1);
        setIsAnimating(true);
    };

    const prevGallery = () => {
        if (!imagesReady || isAnimating) return;
        setGalleryIndex((prev) => prev - 1);
        setIsAnimating(true);
    };

    const goToGalleryIndex = (index: number) => {
        if (!imagesReady || isAnimating) return;
        setGalleryIndex(index + clonesCount);
        setIsAnimating(true);
    };

    const handleGalleryTransitionEnd = () => {
        const firstRealIndex = clonesCount;
        const lastRealIndex = gallery.length + clonesCount - 1;

        if (galleryIndex > lastRealIndex) {
            setIsAnimating(false);
            setGalleryIndex(firstRealIndex);
            return;
        }

        if (galleryIndex < firstRealIndex) {
            setIsAnimating(false);
            setGalleryIndex(gallery.length + clonesCount - 1);
            return;
        }

        setIsAnimating(false);
    };

    const currentDotIndex =
        ((galleryIndex - clonesCount) % gallery.length + gallery.length) % gallery.length;

    const trackWidthPercent = (extendedGallery.length / slidesPerView) * 100;
    const translatePercent = (galleryIndex * 100) / extendedGallery.length;
    const slideWidthPercent = 100 / extendedGallery.length;

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="buzon6">
            {!imagesReady && (
                <div className="buzon6-initial-loader" aria-label="Cargando imágenes">
                    <div className="buzon6-initial-loader-spinner" />
                    <span>Cargando imágenes...</span>
                </div>
            )}

            <div className="buzon6-topbar">
                <div className="buzon6-container buzon6-topbar-inner">
                    <span>Fabricación propia</span>
                    <span>Diseño exclusivo</span>
                    <span>Consultas personalizadas</span>
                </div>
            </div>

            <header className="buzon6-header">
                <div className="buzon6-container buzon6-header-inner">
                    <a href="#inicio" className="buzon6-logo" onClick={closeMobileMenu}>
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

                    <div className="buzon6-header-actions">
                        <a href="#contacto" className="buzon6-header-link">
                            Pedir presupuesto
                        </a>

                        <button
                            type="button"
                            className={`buzon6-mobile-toggle ${isMobileMenuOpen ? "is-open" : ""}`}
                            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                            aria-label="Abrir menú"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>

                <div className={`buzon6-mobile-menu ${isMobileMenuOpen ? "is-open" : ""}`}>
                    <a href="#inicio" onClick={closeMobileMenu}>
                        Home
                    </a>
                    <a href="#overview" onClick={closeMobileMenu}>
                        Overview
                    </a>
                    <a href="#specs" onClick={closeMobileMenu}>
                        Tech Specs
                    </a>
                    <a href="#gallery" onClick={closeMobileMenu}>
                        Gallery
                    </a>
                    <a href="#contacto" onClick={closeMobileMenu}>
                        Contact
                    </a>
                    <a
                        href="#contacto"
                        className="buzon6-mobile-menu-cta"
                        onClick={closeMobileMenu}
                    >
                        Pedir presupuesto
                    </a>
                </div>
            </header>

            <main>
                <section className="buzon6-hero" id="inicio">
                    <div className="buzon6-container buzon6-hero-inner">
                        <div className="buzon6-hero-copy">
                            <p className="buzon6-kicker">Creative Single Product</p>
                            <h1 className="buzon6-hero-title">
                                BUZON
                                <br />
                                DELIVERY
                            </h1>

                            <p className="buzon6-hero-text">
                                Un buzón moderno para cartas, correspondencia y pequeños paquetes,
                                pensado para destacar visualmente en la entrada de tu casa o negocio.
                            </p>

                            <div className="buzon6-hero-actions">
                                <a href="#overview" className="buzon6-btn buzon6-btn-primary">
                                    View Product
                                </a>
                                <a href="#contacto" className="buzon6-btn buzon6-btn-outline">
                                    Contact
                                </a>
                            </div>

                            <div className="buzon6-hero-meta">
                                <div>
                                    <strong>Premium</strong>
                                    <span>Presencia visual</span>
                                </div>
                                <div>
                                    <strong>Práctico</strong>
                                    <span>Uso diario real</span>
                                </div>
                                <div>
                                    <strong>Seguro</strong>
                                    <span>Recepción cómoda</span>
                                </div>
                            </div>
                        </div>

                        <div className="buzon6-hero-visual">
                            <span className="buzon6-hero-bg-word">DELIVERY</span>

                            <div className="buzon6-hero-image-wrap">
                                <img
                                    src={heroImage}
                                    alt="Buzón destacado de frente"
                                    className="buzon6-hero-image"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="buzon6-overview" id="overview">
                    <div className="buzon6-overview-copy">
                        <div className="buzon6-section-head">
                            <h2>Overview</h2>
                            <span />
                        </div>

                        <p>
                            Esta landing está pensada para mostrar el buzón como un producto
                            protagonista: tipografía grande, composición limpia, aire visual y una
                            imagen central de alto impacto.
                        </p>

                        <p>
                            El objetivo es transmitir que no es solo un buzón funcional, sino una
                            pieza con diseño, presencia y carácter para acompañar una fachada moderna.
                        </p>

                        <a href="#specs" className="buzon6-btn buzon6-btn-primary buzon6-btn-small">
                            Find Out More
                        </a>
                    </div>

                    <div className="buzon6-overview-media">
                        <img src={baseImages[1]} alt="Detalle del buzón" />
                    </div>
                </section>

                <section className="buzon6-tech" id="specs">
                    <div className="buzon6-container">
                        <div className="buzon6-section-head buzon6-section-head-center buzon6-section-head-light">
                            <h2>Tech Specs</h2>
                            <span />
                        </div>

                        <div className="buzon6-tech-stage">
                            <img
                                src={baseImages[2]}
                                alt="Buzón con especificaciones"
                                className="buzon6-tech-product"
                            />

                            <div className="buzon6-tech-point buzon6-tech-point-left-top">
                                <div className="buzon6-tech-line" />
                                <div className="buzon6-tech-dot" />
                                <div className="buzon6-tech-box">
                                    <strong>Estructura sólida</strong>
                                    <p>Chapa y construcción firme para uso continuo.</p>
                                </div>
                            </div>

                            <div className="buzon6-tech-point buzon6-tech-point-right-top">
                                <div className="buzon6-tech-line" />
                                <div className="buzon6-tech-dot" />
                                <div className="buzon6-tech-box">
                                    <strong>Frente funcional</strong>
                                    <p>Apertura cómoda y acceso práctico al interior.</p>
                                </div>
                            </div>

                            <div className="buzon6-tech-point buzon6-tech-point-right-bottom">
                                <div className="buzon6-tech-line" />
                                <div className="buzon6-tech-dot" />
                                <div className="buzon6-tech-box">
                                    <strong>Terminación premium</strong>
                                    <p>Aspecto moderno y elegante para exterior.</p>
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
                    </div>
                </section>

                <section className="buzon6-product">
                    <div className="buzon6-container buzon6-product-inner">
                        <div className="buzon6-product-media">
                            <p className="buzon6-pill">Featured Product</p>
                            <img src={baseImages[3]} alt="Producto destacado" />
                        </div>

                        <div className="buzon6-product-copy">
                            <p className="buzon6-product-kicker">Buzón residencial / comercial</p>
                            <h2>Buzon Delivery Premium</h2>
                            <div className="buzon6-product-price">Diseño a medida</div>

                            <p className="buzon6-product-text">
                                Un concepto pensado para mejorar la recepción diaria de cartas y
                                pequeños envíos, sin resignar estilo ni personalidad en la entrada.
                            </p>

                            <div className="buzon6-feature-grid">
                                {features.map((feature) => (
                                    <article key={feature.title} className="buzon6-feature-card">
                                        <h3>{feature.title}</h3>
                                        <p>{feature.text}</p>
                                    </article>
                                ))}
                            </div>

                            <a href="#contacto" className="buzon6-btn buzon6-btn-primary">
                                Solicitar cotización
                            </a>
                        </div>
                    </div>
                </section>

                <section className="buzon6-gallery" id="gallery">
                    <div className="buzon6-container">
                        <div className="buzon6-gallery-top">
                            <div className="buzon6-section-head">
                                <h2>Gallery</h2>
                                <span />
                            </div>

                            <div className="buzon6-gallery-controls">
                                <button
                                    type="button"
                                    className="buzon6-gallery-arrow"
                                    onClick={prevGallery}
                                    aria-label="Imagen anterior"
                                >
                                    ←
                                </button>
                                <button
                                    type="button"
                                    className="buzon6-gallery-arrow"
                                    onClick={nextGallery}
                                    aria-label="Imagen siguiente"
                                >
                                    →
                                </button>
                            </div>
                        </div>

                        <div
                            className="buzon6-gallery-slider"
                            onMouseEnter={() => setIsAutoPlaying(false)}
                            onMouseLeave={() => setIsAutoPlaying(true)}
                            onTouchStart={() => setIsAutoPlaying(false)}
                            onTouchEnd={() => setIsAutoPlaying(true)}
                        >
                            <div
                                className={`buzon6-gallery-track ${isAnimating ? "is-animated" : "is-static"}`}
                                style={{
                                    width: `${trackWidthPercent}%`,
                                    transform: `translateX(-${translatePercent}%)`,
                                }}
                                onTransitionEnd={handleGalleryTransitionEnd}
                            >
                                {extendedGallery.map((image, index) => {
                                    const realIndex =
                                        ((index - clonesCount) % gallery.length + gallery.length) %
                                        gallery.length;

                                    return (
                                        <button
                                            key={`${image}-${index}`}
                                            type="button"
                                            className="buzon6-gallery-slide"
                                            style={{
                                                flex: `0 0 ${slideWidthPercent}%`,
                                                minWidth: `${slideWidthPercent}%`,
                                            }}
                                            onClick={() => openLightbox(realIndex)}
                                            aria-label={`Abrir imagen ${realIndex + 1}`}
                                        >
                                            <img src={image} alt={`Galería ${realIndex + 1}`} />
                                            <span className="buzon6-gallery-zoom">Ver grande</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="buzon6-gallery-dots">
                            {gallery.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={index === currentDotIndex ? "is-active" : ""}
                                    onClick={() => goToGalleryIndex(index)}
                                    aria-label={`Ir a imagen ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="buzon6-related">
                    <div className="buzon6-container buzon6-related-inner">
                        <div className="buzon6-related-copy">
                            <p className="buzon6-kicker">Ready to order?</p>
                            <h2>Convertí una necesidad diaria en un detalle de diseño</h2>
                            <p>
                                Consultanos por tu modelo ideal, medidas especiales, colores y
                                personalización para vivienda, oficina o comercio.
                            </p>
                            <a href="#contacto" className="buzon6-btn buzon6-btn-primary">
                                Get a Quote
                            </a>
                        </div>

                        <div className="buzon6-related-media">
                            <img src={baseImages[0]} alt="Buzón relacionado" />
                        </div>
                    </div>
                </section>

                <section className="buzon6-contact" id="contacto">
                    <div className="buzon6-container">
                        <div className="buzon6-contact-card">
                            <div className="buzon6-contact-copy">
                                <h2>Drop us a line</h2>
                                <p>
                                    Escribinos para pedir presupuesto, consultar medidas,
                                    personalización o terminaciones.
                                </p>
                            </div>

                            <form className="buzon6-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="buzon6-form-row">
                                    <input type="text" placeholder="Your name" />
                                    <input type="email" placeholder="Your email" />
                                </div>
                                <input type="text" placeholder="Subject" />
                                <textarea placeholder="Message" rows={6} />
                                <button
                                    type="submit"
                                    className="buzon6-btn buzon6-btn-primary buzon6-form-submit"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="buzon6-footer">
                <div className="buzon6-container buzon6-footer-inner">
                    <div>
                        <div className="buzon6-logo buzon6-logo-footer">
                            <span className="buzon6-logo-mark" />
                            <span className="buzon6-logo-text">BUZON DELIVERY</span>
                        </div>
                        <p>Landing one-page inspirada en un theme single-product premium.</p>
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

            {lightboxIndex !== null && (
                <div
                    className="buzon6-lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Galería ampliada"
                    onClick={closeLightbox}
                >
                    <button
                        type="button"
                        className="buzon6-lightbox-close"
                        onClick={closeLightbox}
                        aria-label="Cerrar"
                    >
                        ×
                    </button>

                    <button
                        type="button"
                        className="buzon6-lightbox-arrow buzon6-lightbox-arrow-left"
                        onClick={(e) => {
                            e.stopPropagation();
                            prevLightboxImage();
                        }}
                        aria-label="Imagen anterior"
                    >
                        ←
                    </button>

                    <div className="buzon6-lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={gallery[lightboxIndex]}
                            alt={`Imagen ampliada ${lightboxIndex + 1}`}
                            className="buzon6-lightbox-image"
                        />

                        <div className="buzon6-lightbox-counter">
                            {lightboxIndex + 1} / {gallery.length}
                        </div>
                    </div>

                    <button
                        type="button"
                        className="buzon6-lightbox-arrow buzon6-lightbox-arrow-right"
                        onClick={(e) => {
                            e.stopPropagation();
                            nextLightboxImage();
                        }}
                        aria-label="Imagen siguiente"
                    >
                        →
                    </button>
                </div>
            )}
        </div>
    );
}