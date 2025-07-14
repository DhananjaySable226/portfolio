import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const contactInfo = {
    email: 'dhananjaysable236@gmail.com',
    phone: '+91 9529809957',
    linkedin: 'https://www.linkedin.com/in/dhananjay-sable-9014aa263/',
    github: 'https://github.com/DhananjaySable226',
    facebook: 'https://facebook.com/dhananjay.sable',
};

const icons = {
    email: (
        <svg className="w-7 h-7" fill="none" stroke="#3B82F6" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4 4-4-4m8-4H8a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-8a2 2 0 00-2-2z" /></svg>
    ),
    phone: (
        <svg className="w-7 h-7" fill="none" stroke="#10B981" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
    ),
    linkedin: (
        <svg className="w-7 h-7" fill="#0A66C2" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" /></svg>
    ),
    github: (
        <svg className="w-7 h-7" fill="#181717" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" /></svg>
    ),
    facebook: (
        <svg className="w-7 h-7" fill="#1877F3" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg>
    ),
};

const ContactSection = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(null);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.trim()) newErrors.email = 'Email is required.';
        else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = 'Invalid email address.';
        if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required.';
        else if (!/^\d{10,15}$/.test(formData.mobile.replace(/\D/g, ''))) newErrors.mobile = 'Enter a valid mobile number.';
        if (!formData.message.trim()) newErrors.message = 'Message is required.';
        return newErrors;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: undefined });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setSending(true);
        setSuccess(null);
        emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            form.current,
            USER_ID
        )
            .then((result) => {
                setSuccess('Message sent!');
                setFormData({ name: '', email: '', mobile: '', message: '' });
                setErrors({});
                form.current.reset();
            }, (error) => {
                setSuccess('Failed to send message.');
            })
            .finally(() => setSending(false));
    };

    return (
        <section className="contact-section w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-16 px-4 md:px-16 bg-glass dark:bg-gray-800/70 rounded-xl animate-fade" id="contact">
            {/* Info (Left) */}
            <div className="flex flex-col items-center md:items-start w-full md:w-1/3 mb-8 md:mb-0 gap-4">
                <h2 className="text-3xl font-bold text-primary dark:text-yellow-400 mb-2">Get in Touch</h2>
                <p className="text-gray-600 dark:text-gray-200 mb-2 max-w-md text-center md:text-left">
                    I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello — don’t hesitate to reach out. I’m always excited to connect, collaborate, or explore new opportunities. You can contact me via email, phone, or connect with me on social media — let’s make something amazing together!            </p>
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center gap-3 text-gray-700 dark:text-yellow-200 p-2 rounded-lg bg-white/50 dark:bg-gray-800/50">
                        <div className="icon-btn w-10 h-10">
                            {icons.email}
                        </div>
                        <a href={`mailto:${contactInfo.email}`} className="hover:text-primary dark:hover:text-yellow-400 font-medium break-all">{contactInfo.email}</a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 dark:text-yellow-200 p-2 rounded-lg bg-white/50 dark:bg-gray-800/50">
                        <div className="icon-btn w-10 h-10">
                            {icons.phone}
                        </div>
                        <a href={`tel:${contactInfo.phone}`} className="hover:text-primary dark:hover:text-yellow-400 font-medium">{contactInfo.phone}</a>
                    </div>
                </div>
                <div className="flex gap-4 mt-2 flex-wrap text-gray-700 dark:text-yellow-200">
                    <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Facebook">{icons.facebook}</a>
                    <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">{icons.linkedin}</a>
                    <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">{icons.github}</a>
                    <a href={`mailto:${contactInfo.email}`} className="icon-btn" aria-label="Email">{icons.email}</a>
                </div>
            </div>
            {/* Contact Form (Right) */}
            <form ref={form} onSubmit={sendEmail} className="contact-form w-full md:w-[520px] max-w-2xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-lg rounded-xl p-10 flex flex-col gap-6 shadow-lg border border-gray-200/50 dark:border-gray-600/50">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`px-4 py-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-yellow-400 border ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                />
                {errors.name && <span className="text-red-500 text-sm -mt-4">{errors.name}</span>}
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`px-4 py-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-yellow-400 border ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                />
                {errors.email && <span className="text-red-500 text-sm -mt-4">{errors.email}</span>}
                <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className={`px-4 py-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-yellow-400 border ${errors.mobile ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                />
                {errors.mobile && <span className="text-red-500 text-sm -mt-4">{errors.mobile}</span>}
                <input type="hidden" name="time" value={new Date().toLocaleString()} />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`px-4 py-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-yellow-400 border ${errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'} min-h-[120px]`}
                />
                {errors.message && <span className="text-red-500 text-sm -mt-4">{errors.message}</span>}
                <button
                    type="submit"
                    className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent dark:from-yellow-500 dark:to-yellow-700 text-white font-bold shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/40 dark:focus:ring-yellow-400/40 disabled:opacity-60"
                    disabled={sending}
                >
                    {sending ? 'Sending...' : 'Send'}
                </button>
                {success && <span className={`text-sm mt-2 ${success.includes('sent') ? 'text-green-600' : 'text-red-500'}`}>{success}</span>}
            </form>
        </section>
    );
};

export default ContactSection; 