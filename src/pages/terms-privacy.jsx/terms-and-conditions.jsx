import React from 'react';
import '/src/pages/terms-privacy.jsx/terms-and-conditions.css';
import Header from "/src/components/common/header.jsx";
import Footer from "/src/components/common/footer";

function TermsAndConditions() {
    return (
        <div className="terms-container">
             <Header />
            <header className="terms-header">
                <h1>Terms and Conditions</h1>
            </header>
            <main className="terms-main">
                <section className="terms-introduction">
                    <h2>Introduction</h2>
                    <p>
                        Welcome to Harmony Heights Hotel. These Terms and Conditions govern your use of our services. By accessing or using our services, you agree to be bound by these terms.
                    </p>
                </section>
                <section className="terms-eligibility">
                    <h2>Eligibility</h2>
                    <p>
                        You must be at least 18 years old to use our services. By using our services, you represent and warrant that you meet this age requirement.
                    </p>
                </section>
                <section className="terms-usage">
                    <h2>Usage</h2>
                    <p>
                        You agree to use our services only for lawful purposes and in accordance with our policies. You are responsible for maintaining the confidentiality of your account information.
                    </p>
                </section>
                <section className="terms-reservations">
                    <h2>Reservations</h2>
                    <p>
                        All reservations are subject to availability and our standard booking policies. We reserve the right to refuse service or cancel reservations at our discretion.
                    </p>
                </section>
                <section className="terms-cancellations">
                    <h2>Cancellations</h2>
                    <p>
                        Cancellations must be made according to our cancellation policy. All cancellations must be made three days prior, failure to do so will result in forfeiture of booking payment.
                    </p>
                </section>
                <section className="terms-liability">
                    <h2>Liability</h2>
                    <p>
                        We are not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the maximum extent permitted by law.
                    </p>
                </section>
                <section className="terms-governing-law">
                    <h2>Governing Law</h2>
                    <p>
                        These terms are governed by and construed in accordance with the laws of South Africa. Any disputes arising from these terms will be resolved in the courts of South Africa.
                    </p>
                </section>
                <section className="terms-contact">
                    <h2>Contact Us</h2>
                    <p>
                        For any questions regarding these Terms and Conditions, please contact us at HarmonyHeights@gmail.com.
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default TermsAndConditions;
