import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

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

type SectionTitleProps = {
    eyebrow: string;
    title: string;
    text: string;
};

function SectionTitle({ eyebrow, title, text }: SectionTitleProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            style={{
                margin: "0 auto 56px auto",
                maxWidth: 900,
                textAlign: "center",
            }}
        >
            <p
                style={{
                    marginBottom: 12,
                    color: "#65a30d",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                }}
            >
                {eyebrow}
            </p>
            <h2
                style={{
                    margin: 0,
                    color: "#18181b",
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    fontWeight: 300,
                    lineHeight: 1.1,
                }}
            >
                {title}
            </h2>
            <p
                style={{
                    marginTop: 16,
                    color: "#52525b",
                    fontSize: 18,
                    lineHeight: 1.8,
                }}
            >
                {text}
            </p>
        </motion.div>
    );
}

export default function LandingBuzonDelivery() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const current = useMemo(
        () => testimonials[currentTestimonial],
        [currentTestimonial]
    );

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "#ffffff",
                color: "#18181b",
                fontFamily:
                    "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            }}
        >
            <nav
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    borderBottom: "1px solid rgba(255,255,255,0.10)",
                    background: "rgba(0,0,0,0.35)",
                    backdropFilter: "blur(12px)",
                }}
            >
                <div
                    style={{
                        maxWidth: 1280,
                        margin: "0 auto",
                        padding: "16px 24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 20,
                    }}
                >
                    <div>
                        <p
                            style={{
                                margin: 0,
                                color: "#ffffff",
                                fontSize: 22,
                                fontWeight: 900,
                                letterSpacing: "0.22em",
                                textTransform: "uppercase",
                            }}
                        >
                            Buzón Delivery
                        </p>
                        <p
                            style={{
                                margin: "4px 0 0 0",
                                color: "rgba(255,255,255,0.7)",
                                fontSize: 11,
                                letterSpacing: "0.35em",
                                textTransform: "uppercase",
                            }}
                        >
                            Recibí sin abrir la puerta
                        </p>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 28,
                            color: "rgba(255,255,255,0.85)",
                            fontSize: 14,
                            flexWrap: "wrap",
                            justifyContent: "flex-end",
                        }}
                    >
                        <a href="#beneficios" style={{ color: "inherit", textDecoration: "none" }}>
                            Beneficios
                        </a>
                        <a href="#como-funciona" style={{ color: "inherit", textDecoration: "none" }}>
                            Cómo funciona
                        </a>
                        <a href="#galeria" style={{ color: "inherit", textDecoration: "none" }}>
                            Galería
                        </a>
                        <a href="#contacto" style={{ color: "inherit", textDecoration: "none" }}>
                            Contacto
                        </a>
                    </div>
                </div>
            </nav>

            <section
                style={{
                    position: "relative",
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                    backgroundImage:
                        "linear-gradient(to right, rgba(0,0,0,0.72), rgba(0,0,0,0.40), rgba(0,0,0,0.18)), url('https://images.unsplash.com/photo-1512418490979-92798cec7e5c?auto=format&fit=crop&w=1800&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.10)",
                    }}
                />

                <div
                    style={{
                        position: "relative",
                        maxWidth: 1280,
                        margin: "0 auto",
                        padding: "112px 24px 64px 24px",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: 56,
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ maxWidth: 720 }}
                    >
                        <p
                            style={{
                                marginBottom: 16,
                                color: "#bef264",
                                fontSize: 12,
                                fontWeight: 700,
                                letterSpacing: "0.32em",
                                textTransform: "uppercase",
                            }}
                        >
                            Seguridad + comodidad + diseño
                        </p>
                        <h1
                            style={{
                                margin: 0,
                                color: "#ffffff",
                                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                                fontWeight: 300,
                                lineHeight: 1.08,
                            }}
                        >
                            El buzón que recibe sobres, paquetes y delivery
                            <span style={{ color: "#bef264", fontWeight: 700 }}>
                                {" "}
                                sin abrir la puerta
                            </span>
                        </h1>
                        <p
                            style={{
                                marginTop: 24,
                                maxWidth: 640,
                                color: "rgba(255,255,255,0.85)",
                                fontSize: 18,
                                lineHeight: 1.8,
                            }}
                        >
                            Una solución práctica para hogares y oficinas que quieren más seguridad al recibir envíos. Desde cartas y documentación hasta compras online o comida, todo entra desde afuera y se retira desde adentro.
                        </p>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        <div style={{ position: "relative", width: "100%", maxWidth: 420 }}>
                            <div
                                style={{
                                    position: "absolute",
                                    inset: -32,
                                    borderRadius: 32,
                                    background: "rgba(132,204,22,0.15)",
                                    filter: "blur(48px)",
                                }}
                            />
                            <img
                                src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&w=900&q=80"
                                alt="Buzón moderno para sobres y entregas"
                                style={{
                                    position: "relative",
                                    margin: "0 auto",
                                    width: "100%",
                                    height: 560,
                                    borderRadius: 32,
                                    border: "1px solid rgba(255,255,255,0.20)",
                                    objectFit: "cover",
                                    boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="beneficios" style={{ background: "#fafafa", padding: "96px 24px" }}>
                <div style={{ maxWidth: 1280, margin: "0 auto" }}>
                    <SectionTitle
                        eyebrow="Por qué elegirlo"
                        title="Una nueva forma de recibir en casa"
                        text="Inspirado en la comodidad de un buzón tradicional, pero adaptado a la vida actual: más compras online, más delivery y mayor necesidad de seguridad en la entrada."
                    />

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: 24,
                        }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.25 }}
                                variants={fadeUp}
                                transition={{ delay: index * 0.12 }}
                                style={{
                                    borderRadius: 32,
                                    border: "1px solid #e4e4e7",
                                    background: "#ffffff",
                                    padding: 32,
                                    boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
                                }}
                            >
                                <div
                                    style={{
                                        marginBottom: 20,
                                        display: "inline-flex",
                                        borderRadius: 18,
                                        background: "#ecfccb",
                                        padding: 16,
                                        color: "#65a30d",
                                    }}
                                >
                                    {feature.icon}
                                </div>
                                <h3
                                    style={{
                                        margin: 0,
                                        fontSize: 30,
                                        fontWeight: 300,
                                        color: "#18181b",
                                    }}
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    style={{
                                        marginTop: 16,
                                        lineHeight: 1.8,
                                        color: "#52525b",
                                        fontSize: 16,
                                    }}
                                >
                                    {feature.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="como-funciona" style={{ padding: "96px 24px" }}>
                <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gap: 96 }}>
                    {detailSections.map((section, index) => {
                        const reverse = index % 2 === 1;
                        return (
                            <div
                                key={section.title}
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                                    alignItems: "center",
                                    gap: 48,
                                }}
                            >
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.25 }}
                                    variants={reverse ? fadeRight : fadeLeft}
                                    style={{ order: reverse ? 2 : 1 }}
                                >
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        style={{
                                            width: "100%",
                                            height: 420,
                                            borderRadius: 32,
                                            objectFit: "cover",
                                            boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                                        }}
                                    />
                                </motion.div>

                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.25 }}
                                    variants={reverse ? fadeLeft : fadeRight}
                                    style={{ order: reverse ? 1 : 2 }}
                                >
                                    <p
                                        style={{
                                            marginBottom: 12,
                                            color: "#65a30d",
                                            fontSize: 12,
                                            fontWeight: 700,
                                            letterSpacing: "0.28em",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        Solución inteligente
                                    </p>
                                    <h2
                                        style={{
                                            margin: 0,
                                            color: "#18181b",
                                            fontSize: "clamp(2rem, 4vw, 3.5rem)",
                                            fontWeight: 300,
                                            lineHeight: 1.1,
                                        }}
                                    >
                                        {section.title}
                                    </h2>
                                    <p
                                        style={{
                                            marginTop: 20,
                                            color: "#52525b",
                                            fontSize: 18,
                                            lineHeight: 1.8,
                                        }}
                                    >
                                        {section.text}
                                    </p>

                                    <div style={{ marginTop: 32, display: "grid", gap: 16 }}>
                                        {section.bullets.map((bullet) => (
                                            <div
                                                key={bullet}
                                                style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
                                            >
                                                <CheckCircle2
                                                    size={20}
                                                    style={{ marginTop: 4, flexShrink: 0, color: "#65a30d" }}
                                                />
                                                <p style={{ margin: 0, color: "#3f3f46" }}>{bullet}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section style={{ background: "#09090b", color: "#ffffff", padding: "96px 24px" }}>
                <div style={{ maxWidth: 1280, margin: "0 auto" }}>
                    <SectionTitle
                        eyebrow="Características"
                        title="Hecho para durar y para simplificar tu día"
                        text="Combina funcionalidad, presencia estética y un uso intuitivo para que recibir entregas sea más seguro y mucho más cómodo."
                    />

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                            gap: 24,
                        }}
                    >
                        {[
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
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeUp}
                                transition={{ delay: index * 0.08 }}
                                style={{
                                    borderRadius: 32,
                                    border: "1px solid rgba(255,255,255,0.10)",
                                    background: "rgba(255,255,255,0.05)",
                                    padding: 28,
                                    backdropFilter: "blur(8px)",
                                }}
                            >
                                <div
                                    style={{
                                        marginBottom: 16,
                                        display: "inline-flex",
                                        borderRadius: 16,
                                        background: "rgba(132,204,22,0.10)",
                                        padding: 12,
                                        color: "#bef264",
                                    }}
                                >
                                    {item.icon}
                                </div>
                                <h3 style={{ margin: 0, fontSize: 22, fontWeight: 500 }}>{item.title}</h3>
                                <p
                                    style={{
                                        marginTop: 12,
                                        lineHeight: 1.8,
                                        color: "rgba(255,255,255,0.70)",
                                        fontSize: 16,
                                    }}
                                >
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="galeria" style={{ background: "#ffffff", padding: "96px 24px" }}>
                <div style={{ maxWidth: 1280, margin: "0 auto" }}>
                    <SectionTitle
                        eyebrow="Galería"
                        title="Inspiración para tu frente y tu forma de recibir"
                        text="Una selección visual para mostrar el tipo de uso, estética y situaciones que este producto viene a resolver."
                    />

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: 20,
                        }}
                    >
                        {gallery.map((image, index) => (
                            <motion.div
                                key={image}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeUp}
                                transition={{ delay: index * 0.06 }}
                                style={{ overflow: "hidden", borderRadius: 28 }}
                            >
                                <img
                                    src={image}
                                    alt={`Imagen de referencia ${index + 1}`}
                                    style={{ width: "100%", height: 288, objectFit: "cover" }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ background: "#fafafa", padding: "96px 24px" }}>
                <div style={{ maxWidth: 920, margin: "0 auto" }}>
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
                        style={{
                            borderRadius: 32,
                            border: "1px solid #e4e4e7",
                            background: "#ffffff",
                            padding: 48,
                            boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
                        }}
                    >
                        <p
                            style={{
                                margin: 0,
                                color: "#27272a",
                                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                                fontWeight: 300,
                                lineHeight: 1.7,
                            }}
                        >
                            “{current.text}”
                        </p>
                        <div
                            style={{
                                marginTop: 32,
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 24,
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <div>
                                <p style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#18181b" }}>
                                    {current.name}
                                </p>
                                <p style={{ margin: "6px 0 0 0", color: "#71717a" }}>{current.role}</p>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                <button
                                    onClick={prevTestimonial}
                                    aria-label="Testimonio anterior"
                                    style={{
                                        borderRadius: 999,
                                        border: "1px solid #d4d4d8",
                                        padding: 12,
                                        background: "#ffffff",
                                        cursor: "pointer",
                                    }}
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    aria-label="Siguiente testimonio"
                                    style={{
                                        borderRadius: 999,
                                        border: "1px solid #d4d4d8",
                                        padding: 12,
                                        background: "#ffffff",
                                        cursor: "pointer",
                                    }}
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="contacto" style={{ background: "#0284c7", color: "#ffffff", padding: "96px 24px" }}>
                <div
                    style={{
                        maxWidth: 1280,
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: 48,
                    }}
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={fadeLeft}
                    >
                        <p
                            style={{
                                marginBottom: 12,
                                color: "#d9f99d",
                                fontSize: 12,
                                fontWeight: 700,
                                letterSpacing: "0.28em",
                                textTransform: "uppercase",
                            }}
                        >
                            Contactanos
                        </p>
                        <h2
                            style={{
                                margin: 0,
                                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                                fontWeight: 300,
                                lineHeight: 1.1,
                            }}
                        >
                            Pedí información, cotización o asesoramiento
                        </h2>
                        <p
                            style={{
                                marginTop: 20,
                                maxWidth: 620,
                                color: "rgba(255,255,255,0.85)",
                                fontSize: 18,
                                lineHeight: 1.8,
                            }}
                        >
                            Contanos dónde querés instalarlo y para qué uso lo necesitás. Te ayudamos a encontrar la mejor opción para tu casa, oficina o emprendimiento.
                        </p>

                        <div style={{ marginTop: 40, display: "grid", gap: 20 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                                <div
                                    style={{
                                        borderRadius: 18,
                                        background: "rgba(255,255,255,0.10)",
                                        padding: 12,
                                    }}
                                >
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p style={{ margin: 0, fontWeight: 600 }}>WhatsApp / Teléfono</p>
                                    <p style={{ margin: "4px 0 0 0", color: "rgba(255,255,255,0.75)" }}>
                                        +54 11 0000-0000
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                                <div
                                    style={{
                                        borderRadius: 18,
                                        background: "rgba(255,255,255,0.10)",
                                        padding: 12,
                                    }}
                                >
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p style={{ margin: 0, fontWeight: 600 }}>Zona de atención</p>
                                    <p style={{ margin: "4px 0 0 0", color: "rgba(255,255,255,0.75)" }}>
                                        Buenos Aires y alrededores
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                                <div
                                    style={{
                                        borderRadius: 18,
                                        background: "rgba(255,255,255,0.10)",
                                        padding: 12,
                                    }}
                                >
                                    <Clock3 size={20} />
                                </div>
                                <div>
                                    <p style={{ margin: 0, fontWeight: 600 }}>Horario</p>
                                    <p style={{ margin: "4px 0 0 0", color: "rgba(255,255,255,0.75)" }}>
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
                        style={{
                            borderRadius: 32,
                            background: "#ffffff",
                            padding: 40,
                            color: "#18181b",
                            boxShadow: "0 25px 60px rgba(0,0,0,0.20)",
                        }}
                    >
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                                gap: 20,
                            }}
                        >
                            <div>
                                <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 600 }}>
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    placeholder="Tu nombre"
                                    style={{
                                        width: "100%",
                                        borderRadius: 18,
                                        border: "1px solid #e4e4e7",
                                        padding: "14px 16px",
                                        outline: "none",
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 600 }}>
                                    Teléfono
                                </label>
                                <input
                                    type="text"
                                    placeholder="Tu teléfono"
                                    style={{
                                        width: "100%",
                                        borderRadius: 18,
                                        border: "1px solid #e4e4e7",
                                        padding: "14px 16px",
                                        outline: "none",
                                    }}
                                />
                            </div>
                        </div>

                        <div
                            style={{
                                marginTop: 20,
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                                gap: 20,
                            }}
                        >
                            <div>
                                <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 600 }}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="tu@email.com"
                                    style={{
                                        width: "100%",
                                        borderRadius: 18,
                                        border: "1px solid #e4e4e7",
                                        padding: "14px 16px",
                                        outline: "none",
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 600 }}>
                                    Tipo de uso
                                </label>
                                <select
                                    style={{
                                        width: "100%",
                                        borderRadius: 18,
                                        border: "1px solid #e4e4e7",
                                        padding: "14px 16px",
                                        outline: "none",
                                        background: "#ffffff",
                                    }}
                                >
                                    <option>Hogar</option>
                                    <option>Oficina</option>
                                    <option>Local comercial</option>
                                    <option>Otro</option>
                                </select>
                            </div>
                        </div>

                        <div style={{ marginTop: 20 }}>
                            <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 600 }}>
                                Mensaje
                            </label>
                            <textarea
                                rows={6}
                                placeholder="Contanos qué necesitás, medidas aproximadas o dónde querés instalarlo"
                                style={{
                                    width: "100%",
                                    borderRadius: 24,
                                    border: "1px solid #e4e4e7",
                                    padding: "14px 16px",
                                    outline: "none",
                                    resize: "vertical",
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            style={{
                                marginTop: 24,
                                display: "inline-flex",
                                borderRadius: 18,
                                background: "#84cc16",
                                padding: "14px 24px",
                                color: "#09090b",
                                fontWeight: 700,
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Enviar consulta
                        </button>
                    </motion.form>
                </div>
            </section>

            <footer style={{ background: "#09090b", color: "#ffffff", padding: "40px 24px" }}>
                <div
                    style={{
                        maxWidth: 1280,
                        margin: "0 auto",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 16,
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <div>
                        <p style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Buzón Delivery</p>
                        <p style={{ margin: "6px 0 0 0", fontSize: 14, color: "rgba(255,255,255,0.60)" }}>
                            Soluciones para recibir sobres, paquetes y delivery con más seguridad.
                        </p>
                    </div>
                    <div style={{ fontSize: 14, color: "rgba(255,255,255,0.60)" }}>
                        © 2026 Buzón Delivery. Todos los derechos reservados.
                    </div>
                </div>
            </footer>
        </div>
    );
}
