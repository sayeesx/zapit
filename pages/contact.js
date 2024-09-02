import Layout from '../components/Layout';

export default function Contact() {
    return (
        <Layout>
            <div className="contact-container">
                <header className="header">
                    <h1>Contact Us</h1>
                </header>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </Layout>
    );
}
