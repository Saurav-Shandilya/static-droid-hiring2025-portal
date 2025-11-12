import React, { useEffect, useState } from 'react';
import { Send, MessageSquare, Loader, X, Mail, Phone, Twitter, Instagram, Linkedin, MapPin } from 'lucide-react'; 

export default function RegistrationHero() {

  const [timeLeft, setTimeLeft] = useState("");
  const positions = ["IOT Team", "AI / ML Team", "Design Team", "Content Team", "Technical Team", "PR & Event Team", "Game Dev"];

  const CONTACT_EMAIL = "Droidclub@gla.ac.in"; 
  const SOCIAL_LINKS = {
      twitter: "https://twitter.com/droit", 
      instagram: "https://www.instagram.com/droid_glau/",
      linkedin: "https://www.linkedin.com/company/droid-glau/",
  };

  const LEADERSHIP_CONTACTS = [
      { name: "Aditya Naulakha (President)", phone: "+91 7454916178" },
      { name: "Harshvardhan Gupta (Vice President)", phone: "+91 7037500363" },
  ];

  const LOCATION_DETAIL = "GLA University, Mathura Campus, Academic Block III (AB3)";

  useEffect(() => {
    const deadline = new Date("2025-11-12T23:59:59").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = deadline - now;

      if (diff <= 0) {
        setTimeLeft("Registration Closed");
        clearInterval(timer);
      } else {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        const pad = (num) => String(num).padStart(2, '0'); 
        setTimeLeft(`${pad(d)}d : ${pad(h)}h : ${pad(m)}m : ${pad(s)}s`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact-footer').scrollIntoView({ behavior: 'smooth', block: 'start' }); 
  };

  return (
    <section 
      id="registration-hero" 
      className="relative w-full text-white overflow-hidden bg-[#000003] flex flex-col items-center justify-start pt-16 pb-0" 
    >
      
      {/* --- BACKGROUND BLURS --- */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/20 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/15 blur-[180px] rounded-full"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto"> 

        {/* === HERO SECTION CONTENT === */}
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center bg-purple-600/30 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full text-base font-bold mb-8 shadow-lg shadow-purple-500/40 uppercase">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 live-pulse"></span>
            DROID IS HIRING 2025
          </div>

          <h1 className="text-5xl sm:text-7xl font-black leading-tight tracking-tight font-sans">
            APPLY NOW
            <br />
            <span className="text-purple-500 text-5xl sm:text-8xl block">
              FOR REAL IMPACT
            </span>
          </h1>

          <div className="mt-8 font-mono font-extrabold">
            <span
              className="px-6 py-3 rounded-xl border border-purple-400/60 backdrop-blur-xl inline-block bg-white/5 tracking-wider text-2xl sm:text-3xl shadow-[0_0_18px_rgba(139,43,226,0.8)]"
            >
              {timeLeft}
            </span>
          </div>

          <div className="mt-8 sm:mt-10 w-full">
            <h3 className="text-xs sm:text-sm font-medium text-white/60 tracking-widest uppercase mb-3">
              Hiring for Positions:
            </h3>
            <div className="flex overflow-x-auto whitespace-nowrap px-4 py-2 justify-center space-x-2">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="bg-purple-800/40 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full border border-purple-500/50 shadow-md transition hover:bg-purple-700"
                >
                  {position}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-5 w-full px-4">
            <a 
              href="#registration-form-anchor"
              className="bg-purple-600 w-full sm:w-auto text-center px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition text-lg shadow-lg shadow-purple-500/50 cursor-not-allowed opacity-60"
            >
              Registration Closed
            </a>

            <a 
              href="#contact-footer" 
              onClick={scrollToContact} 
              className="border border-white/30 w-full sm:w-auto text-center px-8 py-3 rounded-full font-bold hover:bg-white/10 transition text-lg"
            >
              Contact
            </a>
          </div>
        </div>

        {/* === REGISTRATION CLOSED MESSAGE === */}
        <div id="registration-form-anchor" className="mt-20 pt-4 text-center">
          <div className="text-center p-12 bg-white/5 border border-red-500/30 rounded-3xl shadow-[0_0_45px_rgba(255,0,0,0.35)]">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-red-400 mb-6">
              🚫 Registration is Closed Now.
            </h2>
            <p className="text-lg sm:text-xl text-white/80 font-semibold">
              Try Next Year Earlier.
            </p>
          </div>
        </div>
      </div>

      {/* === CONTACT FOOTER === */}
      <footer id="contact-footer" className="w-full mt-24 pt-12 pb-12 bg-black/50 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-extrabold text-purple-400 mb-8">Contact & Location</h3>
            
            <div className="flex flex-col md:flex-row justify-center md:justify-around gap-10 mb-8 text-white/80">
                
                <div className="md:w-auto max-w-xs mx-auto md:mx-0 md:text-left">
                    <h4 className="text-xl font-bold text-white mb-4 border-b border-purple-400/50 pb-2 inline-block">Leadership Contact</h4>
                    <div className="space-y-3 mt-4">
                        {LEADERSHIP_CONTACTS.map((contact, index) => (
                            <div key={index} className="text-left">
                                <span className="font-semibold text-white/90 block mb-1">{contact.name}</span>
                                <a 
                                    href={`tel:${contact.phone.replace(/\s/g, '')}`} 
                                    className="flex items-center text-sm font-mono transition hover:text-purple-400"
                                >
                                    <Phone className="w-4 h-4 mr-2 text-purple-500 flex-shrink-0" />
                                    {contact.phone}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:w-auto mt-8 md:mt-0 max-w-xs mx-auto md:mx-0 md:text-left ">
                    <h4 className="text-xl font-bold text-white mb-4 border-b border-purple-400/50 pb-2 inline-block">General Info & Location</h4>
                    <div className="flex items-start text-md text-white/90 mt-4">
                        <MapPin className="w-5 h-5 mr-3 text-purple-500 flex-shrink-0 mt-1" />
                        <address className="not-italic text-left">
                            {LOCATION_DETAIL.split(',').map((line, i) => (
                                <span key={i} className="block">{line.trim()}</span>
                            ))}
                        </address>
                    </div>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center text-md font-medium transition hover:text-purple-400 mt-6">
                            <Mail className="w-4 h-4 mr-2 text-purple-500 flex-shrink-0" />
                            {CONTACT_EMAIL}
                        </a>
                </div>
            </div>

            <div className="flex justify-center gap-6 text-white/70 my-10 border-t border-white/10 pt-6">
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="transition hover:text-purple-400">
                    <Twitter className="w-6 h-6" />
                </a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="transition hover:text-purple-400">
                    <Instagram className="w-6 h-6" />
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-purple-400">
                    <Linkedin className="w-6 h-6" />
                </a>
            </div>
        </div>
      </footer>
    </section>
  );
}
