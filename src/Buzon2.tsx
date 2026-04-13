import React from "react";
import { motion, type Variants } from "framer-motion";
import {
    Apple,
    ChevronRight,
    CloudSun,
    Menu,
    Monitor,
    Play,
    Shield,
    Smartphone,
    Sparkles,
    Star,
    Zap,
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
    hidden: { opacity: 0, y: 22 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: "easeOut",
        },
    },
};

const topFeatures = [
    {
        icon: Smartphone,
        title: "Responsive Design",
        text: "Built to keep the same centered showcase feeling from desktop down to smaller screens.",
    },
    {
        icon: Zap,
        title: "Retina Ready",
        text: "Crisp device previews, bright colors and polished cards inspired by the original template style.",
    },
    {
        icon: Shield,
        title: "Clean Structure",
        text: "Simple sections and strong hierarchy so the app presentation stays front and center.",
    },
];

const galleryCards = [
    {
        title: "Calendar App",
        image:
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Music Interface",
        image:
            "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Weather Screen",
        image:
            "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=80",
    },
];

const testimonials = [
    {
        name: "Lucía Ferrer",
        role: "UI Designer",
        text: "This version feels much closer to a real polished landing because the visual weight is in the hero and phone previews.",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80",
    },
    {
        name: "Nicolás Vega",
        role: "Founder",
        text: "The browser-style frame plus the three centered devices is exactly the kind of composition that sells an app quickly.",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
    },
    {
        name: "Marina Costa",
        role: "Marketing Lead",
        text: "Great base to replace with real screenshots and brand assets. The structure already communicates the product well.",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=240&q=80",
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

function BrowserFrame({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                background: "#ffffff",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                overflow: "hidden",
                boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
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
            {children}
        </div>
    );
}

function PhoneMockup({
    image,
    dark = false,
    scale = 1,
    title,
    subtitle,
}: {
    image: string;
    dark?: boolean;
    scale?: number;
    title: string;
    subtitle: string;
}) {
    return (
        <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4.8 + (dark ? 0.5 : 0), repeat: Infinity, ease: "easeInOut" }}
            style={{
                width: 210 * scale,
                height: 430 * scale,
                borderRadius: 28 * scale,
                background: dark ? "#16181d" : "#ffffff",
                padding: 10 * scale,
                boxShadow: dark
                    ? "0 30px 60px rgba(0,0,0,0.32)"
                    : "0 26px 55px rgba(0,0,0,0.18)",
                border: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
                position: "relative",
                flexShrink: 0,
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 10 * scale,
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    fontSize: 11 * scale,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: dark ? "#9ca3af" : "#6b7280",
                    zIndex: 3,
                }}
            >
                {dark ? "NOKIA" : "iPhone"}
            </div>

            <div
                style={{
                    position: "absolute",
                    top: 26 * scale,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 44 * scale,
                    height: 5 * scale,
                    borderRadius: 999,
                    background: dark ? "#303644" : "#d1d5db",
                    zIndex: 3,
                }}
            />

            <div
                style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    borderRadius: 22 * scale,
                    background: dark ? "#0f172a" : "#f8fafc",
                }}
            >
                <div
                    style={{
                        height: 145 * scale,
                        background: dark ? "#2b3342" : "#5ec6f1",
                        color: "white",
                        padding: 18 * scale,
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 * scale, opacity: 0.9 }}>
                        <span>10:35</span>
                        <span>{dark ? "3G" : "LTE"}</span>
                    </div>
                    <div style={{ marginTop: 18 * scale, fontSize: 24 * scale, fontWeight: 300 }}>{title}</div>
                    <div style={{ marginTop: 6 * scale, fontSize: 13 * scale, opacity: 0.82 }}>{subtitle}</div>
                </div>
                <img
                    src={image}
                    alt={title}
                    style={{ width: "100%", height: `calc(100% - ${145 * scale}px)`, objectFit: "cover", display: "block" }}
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
        <MotionDiv
            variants={itemFade}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
                background: "white",
                borderRadius: 28,
                padding: 34,
                textAlign: "center",
                border: "1px solid #eef2f7",
                boxShadow: "0 12px 30px rgba(0,0,0,0.05)",
                height: "100%",
            }}
        >
            <div
                style={{
                    width: 76,
                    height: 76,
                    margin: "0 auto 20px",
                    borderRadius: 22,
                    background: "#f0fdf4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#84cc16",
                }}
            >
                <Icon size={34} strokeWidth={1.7} />
            </div>
            <h3 style={{ margin: 0, fontWeight: 300, fontSize: 28, color: "#5e5e5e" }}>{title}</h3>
            <p style={{ margin: "14px 0 0", color: "#8e8e8e", lineHeight: 1.85 }}>{text}</p>
        </MotionDiv>
    );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
    return (
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
                {eyebrow}
            </div>
            <h2 style={{ margin: "14px 0 0", fontWeight: 300, color: "#5e5e5e", fontSize: "clamp(30px, 4vw, 48px)" }}>
                {title}
            </h2>
            <p style={{ maxWidth: 760, margin: "18px auto 0", color: "#8e8e8e", lineHeight: 1.85, fontSize: 18 }}>
                {text}
            </p>
        </div>
    );
}

export default function HypeWindowsImageLanding() {
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
                    background: "rgba(239, 77, 67, 0.94)",
                    backdropFilter: "blur(8px)",
                    borderBottom: "1px solid rgba(255,255,255,0.14)",
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
                        <a href="#features" style={navLinkStyle}>Features</a>
                        <a href="#showcase" style={navLinkStyle}>Showcase</a>
                        <a href="#reviews" style={navLinkStyle}>Reviews</a>
                        <a href="#download" style={navLinkStyle}>Download</a>
                        <button style={menuButtonStyle}>
                            <Menu size={20} />
                        </button>
                    </nav>
                </div>
            </header>

            <section
                style={{
                    position: "relative",
                    minHeight: "100vh",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    padding: "40px 24px",
                    backgroundColor: "#3b2a1f",
                }}
            >
                <img
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80"
                    alt="Warm nature background"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(90deg, rgba(20,12,8,0.72) 0%, rgba(28,18,10,0.52) 30%, rgba(214,178,137,0.18) 70%, rgba(255,238,214,0.10) 100%)",
                    }}
                />
                <motion.div
                    animate={{ opacity: [0.16, 0.28, 0.16] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: "absolute",
                        top: "-10%",
                        right: "18%",
                        width: 280,
                        height: "130%",
                        transform: "rotate(8deg)",
                        background: "linear-gradient(180deg, rgba(255,255,255,0.34), rgba(255,255,255,0))",
                        filter: "blur(12px)",
                    }}
                />

                <div
                    style={{
                        position: "relative",
                        zIndex: 2,
                        maxWidth: 1240,
                        margin: "0 auto",
                        width: "100%",
                        display: "grid",
                        gridTemplateColumns: "1.05fr 0.95fr",
                        gap: 32,
                        alignItems: "center",
                    }}
                >
                    <Reveal>
                        <div style={{ maxWidth: 560, color: "white", paddingLeft: 8 }}>
                            <div style={{ marginBottom: 42 }}>
                                <div
                                    style={{
                                        fontSize: 60,
                                        lineHeight: 0.9,
                                        fontWeight: 800,
                                        letterSpacing: "-0.08em",
                                        fontFamily: '"Comic Sans MS", "Trebuchet MS", cursive, sans-serif',
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Hype
                                </div>
                                <div
                                    style={{
                                        marginTop: 8,
                                        fontSize: 18,
                                        letterSpacing: "0.04em",
                                        textTransform: "uppercase",
                                        opacity: 0.9,
                                    }}
                                >
                                    Landing Page
                                </div>
                            </div>

                            <h1
                                style={{
                                    margin: 0,
                                    fontSize: "clamp(48px, 6vw, 86px)",
                                    lineHeight: 1.05,
                                    fontWeight: 200,
                                    letterSpacing: "-0.05em",
                                    maxWidth: 760,
                                    textShadow: "0 2px 12px rgba(0,0,0,0.15)",
                                }}
                            >
                                Hype Landing Page is the best way to present your beautiful mobile app.
                            </h1>

                            <div style={{ display: "flex", gap: 18, marginTop: 42, flexWrap: "wrap" }}>
                                <button
                                    style={{
                                        minWidth: 170,
                                        border: 0,
                                        background: "#050505",
                                        color: "white",
                                        padding: "18px 28px",
                                        borderRadius: 8,
                                        cursor: "pointer",
                                        fontWeight: 700,
                                        fontSize: 16,
                                        boxShadow: "0 12px 24px rgba(0,0,0,0.18)",
                                    }}
                                >
                                    Learn More
                                </button>
                                <button
                                    style={{
                                        minWidth: 190,
                                        border: 0,
                                        background: "#b8d60f",
                                        color: "white",
                                        padding: "18px 28px",
                                        borderRadius: 8,
                                        cursor: "pointer",
                                        fontWeight: 700,
                                        fontSize: 16,
                                        boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
                                    }}
                                >
                                    Download Now
                                </button>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div
                            style={{
                                position: "relative",
                                minHeight: 700,
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "center",
                            }}
                        >
                            <motion.img
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                src="https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&w=900&q=80"
                                alt="Hand holding phone"
                                style={{
                                    position: "absolute",
                                    bottom: -10,
                                    right: 10,
                                    width: "min(42vw, 620px)",
                                    maxWidth: 620,
                                    height: "auto",
                                    objectFit: "contain",
                                    filter: "drop-shadow(0 24px 50px rgba(0,0,0,0.28))",
                                    borderRadius: 18,
                                }}
                            />

                            <motion.div
                                animate={{ y: [0, -14, 0] }}
                                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    position: "absolute",
                                    bottom: 70,
                                    right: 130,
                                    width: 250,
                                    height: 470,
                                    borderRadius: 10,
                                    background: "#28a9e0",
                                    padding: 10,
                                    boxShadow: "0 28px 60px rgba(0,0,0,0.28)",
                                    border: "2px solid rgba(0,0,0,0.08)",
                                }}
                            >
                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: 6,
                                        overflow: "hidden",
                                        background: "#0c0f12",
                                        position: "relative",
                                    }}
                                >
                                    <div
                                        style={{
                                            height: 42,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "rgba(255,255,255,0.7)",
                                            fontSize: 12,
                                            fontWeight: 700,
                                            letterSpacing: "0.04em",
                                            background: "#111317",
                                        }}
                                    >
                                        NOKIA
                                    </div>
                                    <div style={{ background: "#59c3ec", color: "white", height: "calc(100% - 42px)" }}>
                                        <div style={{ padding: "18px 20px 10px", fontSize: 12, fontWeight: 700, opacity: 0.9 }}>
                                            PORTSAID - EGYPT
                                        </div>
                                        <div style={{ padding: "4px 20px 10px" }}>
                                            <div style={{ fontSize: 12, opacity: 0.85, marginBottom: 6 }}>FRI 11/10</div>
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                                <span style={{ fontSize: 64, fontWeight: 300, lineHeight: 1 }}>28°</span>
                                                <CloudSun size={62} strokeWidth={1.7} />
                                            </div>
                                        </div>
                                        {[
                                            ["SAT 11/10", "25°"],
                                            ["SUN 12/10", "22°"],
                                            ["MON 13/10", "24°"],
                                            ["TUE 14/10", "26°"],
                                            ["WED 15/10", "27°"],
                                            ["THU 16/10", "29°"],
                                        ].map(([day, temp]) => (
                                            <div
                                                key={day}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    padding: "14px 20px",
                                                    borderTop: "1px solid rgba(255,255,255,0.18)",
                                                    fontSize: 14,
                                                }}
                                            >
                                                <span style={{ opacity: 0.92 }}>{day}</span>
                                                <span style={{ fontWeight: 600 }}>{temp}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section style={{ background: "white", padding: "120px 24px 110px" }}>
                <div style={{ maxWidth: 1120, margin: "0 auto" }}>
                    <Reveal>
                        <SectionHeading
                            eyebrow="Windows / Image style"
                            title="A closer recreation of the blue browser-framed demo"
                            text="This version leans into the most recognizable parts of that layout: the bright cyan hero, the window chrome, the three phones centered at the fold and the airy content sections underneath."
                        />
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
                        {topFeatures.map((feature) => (
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
                                        filter: "blur(18px)",
                                    }}
                                />
                                <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
                                    <PhoneMockup
                                        dark
                                        title="Media"
                                        subtitle="A focused windows/image variation"
                                        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80"
                                    />
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div>
                            <div style={eyebrowStyle}>Detailed documentation</div>
                            <h2 style={sectionTitleStyle}>Smooth sections, thin typography and strong phone-centered composition</h2>
                            <p style={sectionTextStyle}>
                                The demo style is very much about putting the phone screens first. So this recreation keeps the copy light, the colors soft and the layout centered around device previews.
                            </p>
                            <ul style={{ marginTop: 28, paddingLeft: 0, listStyle: "none", display: "grid", gap: 16 }}>
                                {[
                                    "Browser chrome hero structure",
                                    "Three floating device mockups",
                                    "Bright cyan and lime accent palette",
                                    "Long-form landing sections below the fold",
                                ].map((item) => (
                                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 12, color: "#7f7f7f" }}>
                                        <div style={arrowBadgeStyle}>
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

            <section id="showcase" style={{ background: "white", padding: "110px 24px" }}>
                <div style={{ maxWidth: 1120, margin: "0 auto" }}>
                    <Reveal>
                        <SectionHeading
                            eyebrow="Gallery"
                            title="Screens and visuals for the app showcase"
                            text="I added generic but polished imagery so the page feels complete and closer to a real landing instead of empty placeholders."
                        />
                    </Reveal>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: 30,
                        }}
                    >
                        {galleryCards.map((card, index) => (
                            <Reveal key={card.title} delay={index * 0.08}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    style={{
                                        background: "#fcfcfc",
                                        borderRadius: 28,
                                        overflow: "hidden",
                                        border: "1px solid #eef2f7",
                                        boxShadow: "0 12px 30px rgba(0,0,0,0.05)",
                                        height: "100%",
                                    }}
                                >
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        style={{ width: "100%", height: 300, objectFit: "cover", display: "block" }}
                                    />
                                    <div style={{ padding: 24 }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#5ec6f1", marginBottom: 12 }}>
                                            <CloudSun size={18} />
                                            <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                                                Preview
                                            </span>
                                        </div>
                                        <h3 style={{ margin: 0, fontWeight: 300, fontSize: 28, color: "#5e5e5e" }}>{card.title}</h3>
                                    </div>
                                </motion.div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section id="reviews" style={{ background: "#f6f6f6", padding: "110px 24px" }}>
                <div style={{ maxWidth: 1120, margin: "0 auto" }}>
                    <Reveal>
                        <SectionHeading
                            eyebrow="Testimonials"
                            title="Social proof in the same soft visual language"
                            text="The original family of templates usually pairs the hero showcase with long-form sections like reviews and download blocks, so this version does the same."
                        />
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
                                        background: "white",
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
                                            src={item.image}
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
                    background: "#5ec6f1",
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
                                A no-Mantine recreation focused on the windows/image demo feel
                            </h2>
                            <p style={{ maxWidth: 720, margin: "18px auto 0", lineHeight: 1.9, fontSize: 18, opacity: 0.9 }}>
                                Swap the sample imagery for your real product screenshots and you have a strong classic app landing page already structured.
                            </p>
                            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 30 }}>
                                <button style={limeWideButton}>
                                    <Play size={16} />
                                    Live Preview Style
                                </button>
                                <button style={whiteWideButton}>
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
                        <div style={{ color: "#9a9a9a" }}>© 2026 Hype windows/image recreation</div>
                        <div style={{ display: "flex", gap: 10 }}>
                            <button style={footerIconButtonStyle}><Menu size={18} /></button>
                            <button style={footerIconButtonStyle}><Apple size={18} /></button>
                            <button style={footerIconButtonStyle}><Monitor size={18} /></button>
                        </div>
                    </div>
                    <div style={{ height: 1, background: "#e5e7eb", margin: "18px 0" }} />
                    <div style={{ color: "#b0b0b0", fontSize: 14 }}>
                        All images are placeholder examples. Replace them with your own app screenshots and branding.
                    </div>
                </div>
            </footer>
        </div>
    );
}

const navLinkStyle: React.CSSProperties = {
    color: "white",
    textDecoration: "none",
    opacity: 0.92,
};

const menuButtonStyle: React.CSSProperties = {
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
};

const primaryBlueButton: React.CSSProperties = {
    minWidth: 144,
    border: 0,
    background: "#2d8fcb",
    color: "white",
    padding: "14px 22px",
    cursor: "pointer",
    fontWeight: 700,
};

const limeButton: React.CSSProperties = {
    minWidth: 144,
    border: 0,
    background: "#b8cd38",
    color: "white",
    padding: "14px 22px",
    cursor: "pointer",
    fontWeight: 700,
};

const limeWideButton: React.CSSProperties = {
    border: 0,
    background: "#b8cd38",
    color: "white",
    padding: "16px 24px",
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontWeight: 700,
    cursor: "pointer",
};

const whiteWideButton: React.CSSProperties = {
    border: 0,
    background: "white",
    color: "#111827",
    padding: "16px 24px",
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontWeight: 700,
    cursor: "pointer",
};

const eyebrowStyle: React.CSSProperties = {
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    color: "#b8cd38",
    fontWeight: 700,
    fontSize: 12,
};

const sectionTitleStyle: React.CSSProperties = {
    margin: "14px 0 0",
    fontWeight: 300,
    color: "#5e5e5e",
    fontSize: "clamp(30px, 4vw, 46px)",
};

const sectionTextStyle: React.CSSProperties = {
    marginTop: 18,
    color: "#8e8e8e",
    lineHeight: 1.9,
    fontSize: 18,
};

const arrowBadgeStyle: React.CSSProperties = {
    width: 26,
    height: 26,
    borderRadius: 999,
    background: "#b8cd38",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
};

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
