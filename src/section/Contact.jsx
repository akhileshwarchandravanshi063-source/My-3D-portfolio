import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { socialImgs } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );
            alert("Message sent successfully! 🚀");
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error);
            alert("Failed to send message.");
        } finally {
            setLoading(false);
        }
    };

    useGSAP(() => {
        gsap.from(".contact-card", {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: "#contact",
                start: "top center+=100",
            },
        });
    }, []);


    const inputStyles = "bg-zinc-800 py-4 px-6 placeholder:text-zinc-500 text-white rounded-xl outline-none border-none font-medium mt-3 focus:ring-2 focus:ring-blue-500 transition-all";
    const labelStyles = "text-white font-medium flex flex-col";

    return (
        <section id="contact" className="section-padding py-20 bg-black">
            <div className="max-w-7xl mx-auto px-5 md:px-10">


                <div className="mt-16 flex flex-col lg:flex-row gap-12 items-start">

                    {/* Left Side: Text & Socials */}
                    <div className="flex-1 space-y-8">
                        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                            Let's <br />
                            <span className="text-blue-500 decoration-blue-500/30">Connect</span>
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-md">
                            I'm currently available for freelance work and full-time opportunities.
                            Let's build something extraordinary together.
                        </p>

                        <div className="flex gap-4">
                            {socialImgs.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url || "#"}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all border border-zinc-800 hover:-translate-y-1"
                                >
                                    <img
                                        src={social.imgPath}
                                        alt={social.name}
                                        className="w-5 h-5 object-contain invert"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: The Styled Form */}
                    <div className="contact-card flex-[1.2] w-full bg-zinc-900/50 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-8"
                        >
                            <label className={labelStyles}>
                                <span>Full Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="What’s your name?"
                                    className={inputStyles}
                                    required
                                />
                            </label>

                            <label className={labelStyles}>
                                <span>Email Address</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="What’s your email?"
                                    className={inputStyles}
                                    required
                                />
                            </label>

                            <label className={labelStyles}>
                                <span>Your Message</span>
                                <textarea
                                    rows={4}
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    className={`${inputStyles} resize-none`}
                                    required
                                />
                            </label>

                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-blue-600 py-4 px-10 rounded-xl outline-none w-fit text-white font-bold shadow-lg shadow-blue-900/20 hover:bg-blue-500 transition-all disabled:opacity-50 flex flex-row items-center gap-2 disabled:cursor-not-allowed active:scale-95"
                            >
                                {loading ? "Sending..." : "Send Message"}
                                {!loading && <span className="text-lg">🚀</span>}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;