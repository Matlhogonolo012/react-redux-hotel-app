import React from 'react';
import '/src/pages/terms-privacy.jsx/privacy-policy.css';
import Header from "/src/components/common/header.jsx";
import Footer from "/src/components/common/footer";

function PrivacyPolicy() {
    return (
        <div className="privacy-container">
             <Header />
            <header className="privacy-header">
                <h1>Privacy Policy</h1>
            </header>
            <main className="privacy-main">
                <section className="privacy-introduction">
                    <h2>Introduction</h2>
                    <p>
                        Welcome to Harmony Heights Hotel. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your information.
                    </p>
                </section>
                <section className="privacy-information-collection">
                    <h2>Information We Collect</h2>
                    <p>
                        We collect information that you provide directly to us, such as when you create an account, make a booking, or contact us. This may include personal details such as your name, email address, and payment information.
                    </p>
                </section>
                <section className="privacy-use-of-information">
                    <h2>Use of Information</h2>
                    <p>
                        We use the information we collect to provide, maintain, and improve our services, to process transactions, and to communicate with you about your bookings and account.
                    </p>
                </section>
                <section className="privacy-sharing-of-information">
                    <h2>Sharing of Information</h2>
                    <p>
                        We do not share your personal information with third parties except as necessary to provide our services or as required by law. We may share information with service providers who assist us in operating our app and fulfilling transactions.
                    </p>
                </section>
                <section className="privacy-security">
                    <h2>Security</h2>
                    <p>
                        We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure.
                    </p>
                </section>
                <section className="privacy-changes-to-policy">
                    <h2>Changes to This Privacy Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                    </p>
                </section>
                <section className="privacy-contact">
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at HarmonyHeigts@gmail.com.
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default PrivacyPolicy;
