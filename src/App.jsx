import React, { useEffect, useState } from 'react';
import { Send, MessageSquare, Loader, X, Mail, Phone, Twitter, Instagram, Linkedin, MapPin } from 'lucide-react'; 

export default function RegistrationHero() {
  
  // --- Hero Section Data and Logic ---
  const [timeLeft, setTimeLeft] = useState("");
  const positions = ["IOT Team", "AI / ML Team", "Design Team", "Content Team", "Technical Team", "PR & Event Team", "Game dev"];

  // Existing Form Logic (rest of the component)
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    phone: '',
    course: '',
    branch: '',
    year: '',
    universityMail: '',
    joinWhatsapp: '', 
    // ** NEW STATE FIELD **
    applyingFor: '', 
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  
  const SHEETDB_URL = "https://sheetdb.io/api/v1/goa9tewhynihh"; 
  const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/KzvDs2W2qjkKEuZjbN1cE3"; 
 // Existing Form Logic (rest of the component)
// ... (omitted for brevity)

  // --- Updated Footer Data ---
  const CONTACT_EMAIL = "Droidclub@gla.ac.in"; 
  const SOCIAL_LINKS = {
      // ** FIX: Updated placeholder Twitter link to a functional URL **
      twitter: "https://twitter.com/droit", 
      instagram: "https://www.instagram.com/droid_glau/",
      linkedin: "https://www.linkedin.com/company/droid-glau/",
  };

  // ... (rest of the component)
  
  // NEW LEADERSHIP CONTACTS
  const LEADERSHIP_CONTACTS = [
      { name: "Aditya Naulakha (President)", phone: "+91 7454916178" },
      { name: "Harshvardhan Gupta (Vice President)", phone: "+91 7037500363" },
  ];

  // NEW LOCATION
  const LOCATION_DETAIL = "GLA University, Mathura Campus, Academic Block III (AB3)";


  // --- Utility Functions ---

  useEffect(() => {
    const deadline = new Date("2025-11-13T23:59:59").getTime();
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
  
  // Smooth scroll function for Registration Form
  const scrollToForm = (e) => {
    e.preventDefault();
    document.getElementById('registration-form-anchor').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  // Smooth scroll function for Contact Section
  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact-footer').scrollIntoView({ behavior: 'smooth', block: 'start' }); 
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleYearChange = (year) => {
    setFormData((prevData) => ({ ...prevData, year }));
  };
  
  const handleWhatsappChange = (value) => {
    setFormData((prevData) => ({ ...prevData, joinWhatsapp: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const dataToSubmit = {
      timestamp: new Date().toLocaleString(),
      full_name: formData.fullName,
      email: formData.email,
      phone_whatsapp: formData.phone,
      course: formData.course,
      branch: formData.branch,
      university_mail: formData.universityMail,
      academic_year: formData.year,
      join_whatsapp: formData.joinWhatsapp,
      // ** NEW DATA FIELD **
      applying_for: formData.applyingFor,
    };

    try {
      const response = await fetch(SHEETDB_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: dataToSubmit }),
      });

      if (!response.ok) {
        throw new Error(`SheetDB submission failed with status: ${response.status}`);
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Submission Error:', err);
      setError('Registration failed. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  
  // --- RENDER FUNCTION ---

  return (
    <section 
      id="registration-hero" 
      className="relative w-full text-white overflow-hidden bg-[#000003] flex flex-col items-center justify-start pt-16 pb-0" 
    >
      
      {/* --- BACKGROUND BLURS (z-0) --- */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/20 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/15 blur-[180px] rounded-full"></div>
      </div>
      
      {/* Content Center (z-10) */}
      {/* NOTE: Removed text-center from this main wrapper to allow for localized alignment control */}
      <div className="relative z-10 w-full max-w-6xl mx-auto"> 

        {/* ======================================= */}
        {/* === 1. HERO SECTION CONTENT (TOP) - KEEP CENTERED === */}
        {/* ======================================= */}
        
        <div className="mx-auto max-w-4xl px-4 text-center">
              {/* DROID HIRING 2025 BADGE */}
              <div className="inline-flex items-center bg-purple-600/30 backdrop-blur-xl border border-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-base font-bold mb-6 sm:mb-8 shadow-lg shadow-purple-500/40 uppercase">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2 live-pulse"></span>
                DROID IS HIRING 2025
              </div>

            {/* MAIN TITLE */}
            <h1 className="text-5xl sm:text-7xl font-black leading-tight tracking-tight font-sans">
              APPLY NOW
              <br />
              <span className="text-purple-500 text-5xl sm:text-8xl block">
                FOR REAL IMPACT
              </span>
            </h1>

             <div className="mt-6 sm:mt-10 font-mono font-extrabold">
                <span
                  className="
                    px-4 py-2 sm:px-8 sm:py-3
                    rounded-xl border border-purple-400/60 backdrop-blur-xl
                    inline-block bg-white/5 tracking-wider
                    text-base sm:text-3xl
                    shadow-[0_0_18px_rgba(139,43,226,0.8),0_0_10px_rgba(255,255,255,0.15)]
                    whitespace-nowrap
                  ">
                  {timeLeft}
                </span>
              </div>


            
            {/* HIRING POSITIONS (Single Horizontal Line with Scroll) */}
            <div className="mt-5 sm:mt-6 mb-6 sm:mb-8 w-full">
              <h3 className="text-xs sm:text-sm font-medium text-white/60 tracking-widest uppercase mb-2 sm:mb-3">
                Hiring for Positions:
              </h3>

              <div className="flex overflow-x-auto whitespace-nowrap px-2 sm:px-4 py-2 mx-auto justify-start sm:justify-center space-x-2">
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
            
            {/* --- NAVIGATION BUTTONS (New Element) --- */}
              <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 w-full px-4">
                  <a 
                    href="#registration-form-anchor"
                    onClick={scrollToForm}
                    className="bg-purple-600 w-full sm:w-auto text-center px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition text-base sm:text-lg shadow-lg shadow-purple-500/50"
                  >
                    Start Registration
                  </a>

                  <a 
                    href="#contact-footer" 
                    onClick={scrollToContact} 
                    className="border border-white/30 w-full sm:w-auto text-center px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-white/10 transition text-base sm:text-lg"
                  >
                    Contact
                  </a>
                </div>

        </div>


        {/* ======================================= */}
        {/* === 2. REGISTRATION FORM (MIDDLE) - ALIGNED LEFT === */}
        {/* ======================================= */}
        
        {/* Anchor point for smooth scrolling */}
        <div id="registration-form-anchor" className="mt-20 pt-4"></div>

        {/* Added text-left here to control form alignment */}
        <div className="mt-4 mx-auto max-w-4xl w-full px-4 text-left"> 
        
            {/* Submission Success State */}
            {submitted ? (
                <div className="text-center p-10 bg-white/5 border border-purple-500/30 rounded-3xl shadow-[0_0_45px_rgba(139,43,226,0.35)] relative">
                    <h2 className="text-4xl font-extrabold text-purple-400 mb-4">Registration Successful!</h2>
                    <p className="text-white/70 text-lg mb-8">
                        Your details have been recorded. Please join our official group for immediate updates on interviews and selection.
                    </p>
                    <a
                      href={WHATSAPP_GROUP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-[#25D366] text-white font-bold px-6 py-3 rounded-full transition duration-300
                                 hover:shadow-lg hover:shadow-[#25D366]/40 shadow-md shadow-white/20"
                    >
                      <MessageSquare className="w-5 h-5 mr-3"/> Join WhatsApp Group Now
                    </a>
                </div>
            ) : (
                
                // Form Container
                <form 
                    onSubmit={handleSubmit} 
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-[0_0_45px_rgba(139,43,226,0.35)]"
                >
                    {/* Form Title - Explicitly Left-Aligned */}
                    <h2 className="text-3xl font-extrabold text-white mb-6 text-center">Complete Your Registration</h2>
                    <p className="text-sm text-red-400 mb-8 text-center">* Indicates required question</p>

                    {/* Input Fields */}
                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                        <InputField label="Email *" name="email" type="email" value={formData.email} onChange={handleChange} required />
                        <InputField label="Full Name *" name="fullName" type="text" value={formData.fullName} onChange={handleChange} required />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                        <InputField label="Phone Number (Whatsapp Number) *" name="phone" type="tel" value={formData.phone} onChange={handleChange} pattern="[0-9]{10,15}" required />
                        <InputField label="Course *" name="course" type="text" value={formData.course} onChange={handleChange} required />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                        <InputField label="Branch *" name="branch" type="text" value={formData.branch} onChange={handleChange} required />
                        <InputField label="University Mail *" name="universityMail" type="email" value={formData.universityMail} onChange={handleChange} required />
                    </div>

                    {/* ** NEW SELECT FIELD FOR APPLYING FOR ** */}
                    <div className="mb-8">
                        <SelectField 
                            label="Applying for? *" 
                            name="applyingFor" 
                            options={positions} 
                            value={formData.applyingFor} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    {/* ** END NEW SELECT FIELD ** */}

                    {/* Year Selection (Radio Buttons) */}
                    <div className="mb-10 p-5 border border-purple-500/30 rounded-xl bg-white/5">
                      <label className="block text-white text-lg font-semibold mb-4">Year *</label>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {['1st Year', '2nd Year', '3rd Year'].map((yearOption) => (
                          <YearRadio 
                            key={yearOption} 
                            year={yearOption} 
                            selectedYear={formData.year} 
                            onChange={handleYearChange}
                          />
                        ))}
                      </div>
                    </div>

                    
                    {/* --- WHATSAPP SECTION --- */}

                    {/* 1. WHATSAPP GROUP LINK BUTTON */}
                    <div className="text-center pt-6 mt-6 border-t border-white/10">
                        <p className="text-white/70 mb-4 text-base font-medium">Please join the group before submitting your form:</p>
                        <a
                          href={WHATSAPP_GROUP_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-black text-white font-bold px-6 py-3 rounded-full transition duration-300 border border-white/30
                                    hover:shadow-lg hover:shadow-white/20 shadow-md shadow-white/10"
                        >
                          <MessageSquare className="w-5 h-5 mr-3 text-[#25D366]"/> Join WhatsApp Group
                        </a>
                    </div>

                    {/* 2. WhatsApp Group Join Question (Verification) */}
                    <div className="mb-10 mt-6 p-5 border border-purple-500/30 rounded-xl bg-white/5">
                        <label className="block text-white text-lg font-semibold mb-4">
                            Did you successfully join the official WhatsApp group? *
                        </label>
                        <div className="flex flex-wrap gap-3 sm:gap-6">
                            <YesNoRadio label="Yes, I joined" value="Yes" selectedValue={formData.joinWhatsapp} onChange={handleWhatsappChange} />
                            <YesNoRadio label="No" value="No" selectedValue={formData.joinWhatsapp} onChange={handleWhatsappChange} />
                        </div>
                    </div>

                    
                    {/* Error Message */}
                    {error && (
                      <div className="text-center p-3 mb-4 bg-red-900/50 border border-red-400/50 rounded-lg text-red-300">
                        {error}
                      </div>
                    )}

                    {/* 3. Submission Button - Needs to remain centered */}
                    <div className="text-center">
                      <button
                          type="submit"
                          disabled={loading || !formData.joinWhatsapp || !formData.applyingFor}
                          className={`
                            bg-purple-600 
                            text-base sm:text-xl      
                            px-6 py-3 sm:px-10 sm:py-4
                            rounded-full font-extrabold tracking-wide flex items-center justify-center mx-auto max-w-xs transition duration-300
                            ${loading
                              ? 'opacity-60 cursor-wait'
                              : (!formData.joinWhatsapp || !formData.applyingFor ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700 shadow-[0_0_25px_rgba(139,43,226,0.6)]')
                            }
                          `}>
                          {loading ? <><Loader className="w-5 h-5 mr-3 animate-spin"/> Submiting...</> : <><Send className="w-5 h-5 mr-3"/> Submit Registration</>}
                        </button>

                    </div>

                </form>
            )}
        </div>
        
      </div>

      {/* ======================================= */}
      {/* === 3. CONTACT FOOTER (PROFESSIONALLY STRUCTURED) === */}
      <footer id="contact-footer" className="w-full mt-24 pt-12 pb-12 bg-black/50 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-extrabold text-purple-400 mb-8">Contact & Location</h3>
            
            {/* Using text-left on desktop/tablet for professional look */}
            <div className="flex flex-col md:flex-row justify-center md:justify-around gap-10 mb-8 text-white/80">
                
                {/* Leadership Contacts - Left Aligned and Structured */}
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

                {/* Location & General Email - Left Aligned and Structured */}
                <div className="md:w-auto mt-8 md:mt-0 max-w-xs mx-auto md:mx-0 md:text-left ">
                    <h4 className="text-xl font-bold text-white mb-4 border-b border-purple-400/50 pb-2 inline-block">General Info & Location</h4>
                    
                    {/* Location detail alignment fix */}
                    <div className="flex items-start text-md text-white/90 mt-4">
                        <MapPin className="w-5 h-5 mr-3 text-purple-500 flex-shrink-0 mt-1" />
                        <address className="not-italic text-left">
                            {/* Combined lines for tighter structure */}
                            {LOCATION_DETAIL.split(',').map((line, i) => (
                                <span key={i} className="block">{line.trim()}</span>
                            ))}
                        </address>
                    </div>
                    
                    {/* General Email */}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center text-md font-medium transition hover:text-purple-400 mt-6">
                            <Mail className="w-4 h-4 mr-2 text-purple-500 flex-shrink-0" />
                            {CONTACT_EMAIL}
                        </a>
                </div>
            </div>

            {/* Social Media Icons - Now functional */}
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

            {/* Copyright/Branding - Added placeholder text */}
{/*             <p className="text-sm text-white/50 border-t border-white/10 pt-6">
                © {new Date().getFullYear()} Droid Club. All rights reserved.
            </p> */}
        </div>
      </footer>
    </section>
  );
}

// Reusable Component Definitions (Needed for this file to compile)

const InputField = ({ label, name, type, value, onChange, required, pattern }) => (
  <div>
    {/* NOTE: Label is explicitly a block element, ensuring left alignment */}
    <label className="block text-white/90 text-sm font-medium mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      pattern={pattern}
      className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-purple-500 focus:outline-none transition text-left"
      placeholder={`Enter your ${label.toLowerCase().replace(' *', '')}`} 
    />
  </div>
);

// ** NEW SELECT FIELD COMPONENT **
const SelectField = ({ label, name, options, value, onChange, required }) => (
    <div>
        <label className="block text-white/90 text-sm font-medium mb-2">{label}</label>
        <select
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-purple-500 focus:outline-none transition text-left appearance-none cursor-pointer"
            style={{ 
                // Custom arrow style to match dark theme (tailwind utility classes might not be enough)
                backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\' fill=\'white\'%3e%3cpath d=\'M5.23 7.21a.75.75 0 011.06.02L10 10.74l3.71-3.51a.75.75 0 111.02 1.08l-4.25 4a.75.75 0 01-1.08 0l-4.25-4a.75.75 0 01.02-1.06z\'/%3e%3c/svg%3e")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.5em 1.5em',
            }}
        >
            <option value="" disabled className="bg-[#000003] text-white/60">Select a Team</option>
            {options.map((option) => (
                <option key={option} value={option} className="bg-[#000003] text-white">
                    {option}
                </option>
            ))}
        </select>
    </div>
);
// ** END NEW SELECT FIELD COMPONENT **

const YearRadio = ({ year, selectedYear, onChange }) => (
  <label className="flex items-center cursor-pointer p-3 bg-white/5 rounded-lg transition border border-white/10 hover:border-purple-400">
    <input
      type="radio"
      name="year"
      value={year}
      checked={selectedYear === year}
      onChange={() => onChange(year)}
      className="form-radio h-4 w-4 text-purple-600 bg-white/10 border-white/30 checked:bg-purple-600 focus:ring-0"
    />
    <span className="ml-3 text-white/90 text-sm">{year}</span>
  </label>
);

const YesNoRadio = ({ label, value, selectedValue, onChange }) => (
    <label className="flex items-center cursor-pointer p-3 bg-white/5 rounded-lg transition border border-white/10 hover:border-purple-400 min-w-[120px]">
        <input
            type="radio"
            name="joinWhatsapp"
            value={value}
            checked={selectedValue === value}
            onChange={() => onChange(value)}
            required
            className="form-radio h-4 w-4 text-purple-600 bg-white/10 border-white/30 checked:bg-purple-600 focus:ring-0"
        />
        <span className="ml-3 text-white/90 text-sm">{label}</span>
    </label>
);
