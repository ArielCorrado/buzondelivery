import React from "react";
import { motion, type Variants } from "framer-motion";
import {
    Apple,
    ChevronRight,
    Cloud,
    Image as ImageIcon,
    Menu,
    Monitor,
    Play,
    Shield,
    Smartphone,
    Sparkles,
    Star,
} from "lucide-react";

const MotionDiv = motion.div;

const sectionFade: Variants = {
    hidden: { opacity: 0, y: 42 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
            staggerChildren: 0.1,
        },
    },
};

const itemFade: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: "easeOut" },
    },
};

const features = [
    {
        icon: Smartphone,
        title: "Fully Responsive",
        text: "A clean app landing designed to adapt smoothly across phones, tablets and desktop screens.",
    },
    {
        icon: Shield,
        title: "Polished UI",
        text: "Cards, spacing and typography tuned to feel like a premium app showcase page.",
    },
    {
        icon: Sparkles,
        title: "Animated Sections",
        text: "Subtle reveal-on-scroll and floating elements to make the landing feel alive.",
    },
];

const screenshots = [
    {
        title: "Dashboard View",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Mobile Experience",
        image:
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Analytics Panel",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    },
];

const testimonials = [
    {
        name: "Sofía Ramos",
        role: "Product Designer",
        text: "This style is perfect for showing an app fast. It feels clean, premium and conversion-oriented.",
        avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    },
    {
        name: "Tomás Vega",
        role: "Startup Founder",
        text: "The hero section grabs attention immediately and the rest of the layout keeps the product front and center.",
        avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    },
    {
        name: "Marina López",
        role: "Marketing Lead",
        text: "A very adaptable landing structure. Easy to brand, easy to extend, and visually strong.",
        avatar:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
    },
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    return (
        <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay, ease: "easeOut" }}
        >
            {children}
        </MotionDiv>
    );
}

function PhoneMockup({ image, dark = false }: { image: string; dark?: boolean }) {
    return (
        <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            style={{
                width: 210,
                height: 430,
                borderRadius: 28,
                background: dark ? "#111827" : "#ffffff",
                padding: 10,
                boxShadow: dark
                    ? "0 26px 60px rgba(0,0,0,0.35)"
                    : "0 26px 60px rgba(0,0,0,0.18)",
                border: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
                position: "relative",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 10,
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    fontSize: 11,
                    fontWeight: 700,
                    color: dark ? "#9ca3af" : "#6b7280",
                    letterSpacing: "0.06em",
                    zIndex: 3,
                }}
            >
                HYPE
            </div>
            <div
                style={{
                    position: "absolute",
                    top: 26,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 46,
                    height: 5,
                    borderRadius: 999,
                    background: dark ? "#2c3440" : "#d1d5db",
                    zIndex: 3,
                }}
            />
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    borderRadius: 22,
                    background: dark ? "#0f172a" : "#f8fafc",
                }}
            >
                <div
                    style={{
                        height: 150,
                        background: dark ? "#1d4ed8" : "#38bdf8",
                        color: "white",
                        padding: 18,
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, opacity: 0.95 }}>
                        <span>10:35</span>
                        <span>LTE</span>
                    </div>
                    <div style={{ marginTop: 18, fontSize: 24, fontWeight: 300 }}>Your app</div>
                    <div style={{ marginTop: 6, fontSize: 13, opacity: 0.8 }}>Beautiful mobile experience</div>
                </div>
                <img
                    src={image}
                    alt="App preview"
                    style={{ width: "100%", height: 270, objectFit: "cover", display: "block" }}
                />
            </div>
        </motion.div>
    );
}

function FeatureCard({
    icon: Icon,
    title,
    text,
}: {
    icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
    title: string;
    text: string;
}) {
    return (
        <motion.div
            variants={itemFade}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
                background: "white",
                borderRadius: 28,
                padding: 32,
                boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
                border: "1px solid #eef2f7",
                textAlign: "center",
                height: "100%",
            }}
        >
            <div
                style={{
                    width: 72,
                    height: 72,
                    margin: "0 auto 20px",
                    borderRadius: 20,
                    background: "#ecfccb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#65a30d",
                }}
            >
                <Icon size={32} strokeWidth={1.8} />
            </div>
            <h3 style={{ margin: 0, fontSize: 26, fontWeight: 300, color: "#5e5e5e" }}>{title}</h3>
            <p style={{ margin: "14px 0 0", color: "#8b8b8b", lineHeight: 1.8 }}>{text}</p>
        </motion.div>
    );
}

export default function HypeLandingNoMantine() {
    return (
        <div
            style={{
                background: "#f8f8f8",
                color: "#1f2937",
                fontFamily:
                    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
        >
            <header
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 50,
                    background: "rgba(239, 77, 67, 0.92)",
                    backdropFilter: "blur(8px)",
                    borderBottom: "1px solid rgba(255,255,255,0.12)",
                }}
            >
                <div
                    style={{
                        maxWidth: 1240,
                        margin: "0 auto",
                        padding: "18px 24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        color: "white",
                    }}
                >
                    <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.04em" }}>hype</div>
                    <nav style={{ display: "flex", gap: 28, alignItems: "center" }}>
                        <a href="#features" style={{ color: "white", textDecoration: "none", opacity: 0.92 }}>Features</a>
                        <a href="#gallery" style={{ color: "white", textDecoration: "none", opacity: 0.92 }}>Gallery</a>
                        <a href="#testimonials" style={{ color: "white", textDecoration: "none", opacity: 0.92 }}>Testimonials</a>
                        <a href="#download" style={{ color: "white", textDecoration: "none", opacity: 0.92 }}>Download</a>
                        <button
                            style={{
                                width: 42,
                                height: 42,
                                borderRadius: 999,
                                border: "1px solid rgba(255,255,255,0.24)",
                                background: "transparent",
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                            }}
                        >
                            <Menu size={20} />
                        </button>
                    </nav>
                </div>
            </header>

            <section
                style={{
                    position: "relative",
                    overflow: "hidden",
                    background: "linear-gradient(180deg, #ef4d43 0%, #ef4d43 10%, #42b6e8 10%, #42b6e8 100%)",
                    padding: "28px 24px 0",
                }}
            >
                <motion.div
                    animate={{ x: [0, 18, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.18), transparent 26%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.12), transparent 22%)",
                    }}
                />

                <div
                    style={{
                        maxWidth: 1240,
                        margin: "0 auto",
                        position: "relative",
                        zIndex: 2,
                        background: "white",
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        overflow: "hidden",
                        boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            gap: 8,
                            alignItems: "center",
                            padding: "10px 16px",
                            background: "linear-gradient(180deg, #ededed 0%, #dbdbdb 100%)",
                            borderBottom: "1px solid #d0d0d0",
                        }}
                    >
                        <div style={{ width: 10, height: 10, borderRadius: 999, background: "#ff5f57" }} />
                        <div style={{ width: 10, height: 10, borderRadius: 999, background: "#febc2e" }} />
                        <div style={{ width: 10, height: 10, borderRadius: 999, background: "#28c840" }} />
                        <div
                            style={{
                                marginLeft: 10,
                                flex: 1,
                                height: 22,
                                borderRadius: 999,
                                background: "#f5f5f5",
                                border: "1px solid #cecece",
                            }}
                        />
                    </div>

                    <div style={{ padding: "64px 24px 0", background: "#42b6e8", overflow: "hidden" }}>
                        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", color: "white" }}>
                            <div style={{ fontSize: 28, fontWeight: 700, textTransform: "lowercase", opacity: 0.96 }}>hype</div>
                            <h1
                                style={{
                                    margin: "16px 0 0",
                                    fontSize: "clamp(36px, 6vw, 68px)",
                                    lineHeight: 1.15,
                                    fontWeight: 200,
                                }}
                            >
                                Hype Landing Page is the best way to present your beautiful mobile app.
                            </h1>
                            <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 26, flexWrap: "wrap" }}>
                                <button
                                    style={{
                                        minWidth: 144,
                                        border: 0,
                                        background: "#2563eb",
                                        color: "white",
                                        padding: "14px 22px",
                                        cursor: "pointer",
                                        fontWeight: 700,
                                    }}
                                >
                                    Learn More
                                </button>
                                <button
                                    style={{
                                        minWidth: 144,
                                        border: 0,
                                        background: "#a3e635",
                                        color: "#1f2937",
                                        padding: "14px 22px",
                                        cursor: "pointer",
                                        fontWeight: 700,
                                    }}
                                >
                                    Download Now
                                </button>
                            </div>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "flex-end",
                                gap: 0,
                                transform: "translateY(54px)",
                                marginTop: 46,
                                flexWrap: "wrap",
                            }}
                        >
                            <div style={{ transform: "translateX(18px) scale(0.92)", zIndex: 1 }}>
                                <PhoneMockup
                                    dark
                                    image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
                                />
                            </div>
                            <div style={{ zIndex: 3 }}>
                                <PhoneMockup image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80" />
                            </div>
                            <div style={{ transform: "translateX(-18px) scale(0.92)", zIndex: 1 }}>
                                <PhoneMockup image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ background: "white", padding: "120px 24px 110px" }}>
                <div style={{ maxWidth: 1120, margin: "0 auto" }}>
                    <Reveal>
                        <div style={{ textAlign: "center", marginBottom: 54 }}>
                            <div
                                style={{
                                    textTransform: "uppercase",
                                    letterSpacing: "0.18em",
                                    color: "#b8cd38",
                                    fontWeight: 700,
                                    fontSize: 12,
                                }}
                            >
                                Build with React + TypeScript
                            </div>
                            <h2 style={{ margin: "14px 0 0", fontWeight: 300, color: "#5e5e5e", fontSize: "clamp(30px, 4vw, 48px)" }}>
                                A faithful recreation with real images and motion
                            </h2>
                            <p style={{ maxWidth: 760, margin: "18px auto 0", color: "#8e8e8e", lineHeight: 1.85, fontSize: 18 }}>
                                This version keeps the same visual spirit of the original app landing page, but now uses plain React + TypeScript,
                                Framer Motion and regular CSS-in-JS styles.
                            </p>
                        </div>
                    </Reveal>

                    <MotionDiv
                        id="features"
                        variants={sectionFade}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                            gap: 28,
                        }}
                    >
                        {features.map((feature) => (
                            <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} text={feature.text} />
                        ))}
                    </MotionDiv>
                </div>
            </section>

            <section style={{ background: "#fafafa", padding: "110px 24px" }}>
                <div
                    style={{
                        maxWidth: 1120,
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: 50,
                        alignItems: "center",
                    }}
                >
                    <Reveal>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div style={{ position: "relative", width: 300, height: 520 }}>
                                <motion.div
                                    animate={{ scale: [1, 1.06, 1] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    style={{
                                        position: "absolute",
                                        inset: 18,
                                        borderRadius: 999,
                                        background: "rgba(184, 205, 56, 0.18)",
                                        filter: "blur(16px)",
                                    }}
                                />
                                <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
                                    <PhoneMockup
                                        dark
                                        image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80"
                                    />
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div>
                            <div
                                style={{
                                    textTransform: "uppercase",
                                    letterSpacing: "0.18em",
                                    color: "#b8cd38",
                                    fontWeight: 700,
                                    fontSize: 12,
                                }}
                            >
                                Detailed presentation
                            </div>
                            <h2 style={{ margin: "14px 0 0", fontWeight: 300, color: "#5e5e5e", fontSize: "clamp(30px, 4vw, 46px)" }}>
                                Smooth sections, clean typography and strong visuals
                            </h2>
                            <p style={{ marginTop: 18, color: "#8e8e8e", lineHeight: 1.9, fontSize: 18 }}>
                                Instead of empty placeholders, this version already includes real sample photography so the layout feels much
                                closer to a finished landing page.
                            </p>
                            <ul style={{ marginTop: 28, paddingLeft: 0, listStyle: "none", display: "grid", gap: 16 }}>
                                {[
                                    "Real images in the hero and screenshot sections",
                                    "Reveal on scroll with Framer Motion",
                                    "Floating phone mockups with app-style framing",
                                    "A structure ready to replace with your own branding",
                                ].map((item) => (
                                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 12, color: "#7f7f7f" }}>
                                        <div
                                            style={{
                                                width: 26,
                                                height: 26,
                                                borderRadius: 999,
                                                background: "#a3e635",
                                                color: "#1f2937",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexShrink: 0,
                                            }}
                                        >
                                            <ChevronRight size={16} />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section id="gallery" style={{ background: "white", padding: "110px 24px" }}>
                <div style={{ maxWidth: 1120, margin: "0 auto" }}>
                    <Reveal>
                        <div style={{ textAlign: "center", marginBottom: 52 }}>
                            <div
                                style={{
                                    textTransform: "uppercase",
                                    letterSpacing: "0.18em",
                                    color: "#b8cd38",
                                    fontWeight: 700,
                                    fontSize: 12,
                                }}
                            >
                                Gallery
                            </div>
                            <h2 style={{ margin: "14px 0 0", fontWeight: 300, color: "#5e5e5e", fontSize: "clamp(30px, 4vw, 48px)" }}>
                                Screens and preview images
                            </h2>
                            <p style={{ maxWidth: 760, margin: "18px auto 0", color: "#8e8e8e", lineHeight: 1.85, fontSize: 18 }}>
                                I added generic but good-looking images so the landing feels complete instead of empty.
                            </p>
                        </div>
                    </Reveal>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: 30,
                        }}
                    >
                        {screenshots.map((screen, index) => (
                            <Reveal key={screen.title} delay={index * 0.08}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    style={{
                                        background: "#fcfcfc",
                                        borderRadius: 28,
                                        overflow: "hidden",
                                        boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
                                        border: "1px solid #eef2f7",
                                        height: "100%",
                                    }}
                                >
                                    <img
                                        src={screen.image}
                                        alt={screen.title}
                                        style={{ width: "100%", height: 300, objectFit: "cover", display: "block" }}
                                    />
                                    <div style={{ padding: 24 }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#38bdf8", marginBottom: 12 }}>
                                            <ImageIcon size={18} />
                                            <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                                                Preview
                                            </span>
                                        </div>
                                        <h3 style={{ margin: 0, fontSize: 28, fontWeight: 300, color: "#5e5e5e" }}>{screen.title}</h3>
                                    </div>
                                </motion.div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ background: "#f6f6f6", padding: "110px 24px" }}>
                <div
                    style={{
                        maxWidth: 1120,
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: 34,
                        alignItems: "start",
                    }}
                >
                    <Reveal>
                        <div>
                            <div
                                style={{
                                    textTransform: "uppercase",
                                    letterSpacing: "0.18em",
                                    color: "#b8cd38",
                                    fontWeight: 700,
                                    fontSize: 12,
                                }}
                            >
                                Extra blocks
                            </div>
                            <h2 style={{ margin: "14px 0 0", fontWeight: 300, color: "#5e5e5e", fontSize: "clamp(30px, 4vw, 46px)" }}>
                                The same landing spirit, now without Mantine
                            </h2>
                            <p style={{ marginTop: 18, color: "#8e8e8e", lineHeight: 1.9, fontSize: 18 }}>
                                Everything here is plain React + TypeScript with inline styles and Framer Motion, so you can adapt it easily
                                to any project without depending on a UI library.
                            </p>
                            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 24 }}>
                                <button
                                    style={{
                                        border: 0,
                                        background: "#111827",
                                        color: "white",
                                        padding: "14px 20px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                        cursor: "pointer",
                                    }}
                                >
                                    <Monitor size={18} />
                                    Windows Version
                                </button>
                                <button
                                    style={{
                                        border: "1px solid #d1d5db",
                                        background: "white",
                                        color: "#374151",
                                        padding: "14px 20px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                        cursor: "pointer",
                                    }}
                                >
                                    <Apple size={18} />
                                    iOS Variant
                                </button>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                                gap: 18,
                            }}
                        >
                            {[
                                { icon: Cloud, title: "Cloud Sync" },
                                { icon: ImageIcon, title: "Retina Images" },
                                { icon: Shield, title: "Clean UI Blocks" },
                                { icon: Sparkles, title: "Animated Details" },
                            ].map((item) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={item.title}
                                        whileHover={{ y: -8 }}
                                        style={{
                                            background: "white",
                                            borderRadius: 24,
                                            border: "1px solid #eef2f7",
                                            padding: 26,
                                            boxShadow: "0 12px 30px rgba(0,0,0,0.05)",
                                            textAlign: "center",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 76,
                                                height: 76,
                                                borderRadius: 24,
                                                margin: "0 auto 16px",
                                                background: "#eff6ff",
                                                color: "#2563eb",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Icon size={36} />
                                        </div>
                                        <div style={{ color: "#666", fontWeight: 300, fontSize: 24 }}>{item.title}</div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </Reveal>
                </div>
            </section>

            <section id="testimonials" style={{ background: "white", padding: "110px 24px" }}>
                <div style={{ maxWidth: 1120, margin: "0 auto" }}>
                    <Reveal>
                        <div style={{ textAlign: "center", marginBottom: 52 }}>
                            <div
                                style={{
                                    textTransform: "uppercase",
                                    letterSpacing: "0.18em",
                                    color: "#b8cd38",
                                    fontWeight: 700,
                                    fontSize: 12,
                                }}
                            >
                                Testimonials
                            </div>
                            <h2 style={{ margin: "14px 0 0", fontWeight: 300, color: "#5e5e5e", fontSize: "clamp(30px, 4vw, 48px)" }}>
                                Social proof with real photos
                            </h2>
                        </div>
                    </Reveal>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: 28,
                        }}
                    >
                        {testimonials.map((item, index) => (
                            <Reveal key={item.name} delay={index * 0.08}>
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    style={{
                                        background: "#fcfcfc",
                                        borderRadius: 28,
                                        padding: 28,
                                        border: "1px solid #eef2f7",
                                        boxShadow: "0 12px 30px rgba(0,0,0,0.05)",
                                        height: "100%",
                                    }}
                                >
                                    <div style={{ display: "flex", gap: 4, color: "#f59e0b", marginBottom: 16 }}>
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star key={i} size={16} fill="currentColor" />
                                        ))}
                                    </div>
                                    <p style={{ margin: 0, color: "#7f7f7f", lineHeight: 1.85 }}>
                                        “{item.text}”
                                    </p>
                                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 20 }}>
                                        <img
                                            src={item.avatar}
                                            alt={item.name}
                                            style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover" }}
                                        />
                                        <div>
                                            <div style={{ color: "#4b5563", fontWeight: 700 }}>{item.name}</div>
                                            <div style={{ color: "#9ca3af", fontSize: 14 }}>{item.role}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="download"
                style={{
                    position: "relative",
                    overflow: "hidden",
                    background: "#42b6e8",
                    padding: "100px 24px",
                }}
            >
                <motion.div
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: "absolute",
                        width: 420,
                        height: 420,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.10)",
                        top: -120,
                        right: -100,
                        filter: "blur(10px)",
                    }}
                />

                <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2 }}>
                    <Reveal>
                        <div style={{ textAlign: "center", color: "white" }}>
                            <div style={{ textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: 700, fontSize: 12, opacity: 0.75 }}>
                                Download now
                            </div>
                            <h2 style={{ margin: "16px 0 0", fontWeight: 200, fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 1.2 }}>
                                Now the landing includes images and no Mantine at all
                            </h2>
                            <p style={{ maxWidth: 720, margin: "18px auto 0", lineHeight: 1.9, fontSize: 18, opacity: 0.9 }}>
                                Replace the sample images with your screenshots, branding and real product copy and you already have a solid app landing base.
                            </p>
                            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 30 }}>
                                <button
                                    style={{
                                        border: 0,
                                        background: "#a3e635",
                                        color: "#111827",
                                        padding: "16px 24px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                        fontWeight: 700,
                                        cursor: "pointer",
                                    }}
                                >
                                    <Play size={16} />
                                    Live Preview Style
                                </button>
                                <button
                                    style={{
                                        border: 0,
                                        background: "white",
                                        color: "#111827",
                                        padding: "16px 24px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                        fontWeight: 700,
                                        cursor: "pointer",
                                    }}
                                >
                                    <Apple size={18} />
                                    Source Code Layout
                                </button>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <footer style={{ background: "white", padding: "26px 24px 34px" }}>
                <div style={{ maxWidth: 1120, margin: "0 auto" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                        <div style={{ color: "#9a9a9a" }}>© 2026 Hype recreation without Mantine</div>
                        <div style={{ display: "flex", gap: 10 }}>
                            <button style={footerIconButtonStyle}><Menu size={18} /></button>
                            <button style={footerIconButtonStyle}><Apple size={18} /></button>
                            <button style={footerIconButtonStyle}><Monitor size={18} /></button>
                        </div>
                    </div>
                    <div style={{ height: 1, background: "#e5e7eb", margin: "18px 0" }} />
                    <div style={{ color: "#b0b0b0", fontSize: 14 }}>
                        All images are placeholder examples. Swap them for your screenshots or brand visuals.
                    </div>
                </div>
            </footer>
        </div>
    );
}

const footerIconButtonStyle: React.CSSProperties = {
    width: 38,
    height: 38,
    borderRadius: 999,
    border: "1px solid #e5e7eb",
    background: "white",
    color: "#6b7280",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
};
