//src/Footer.js
import React from 'react';

function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>We provide the latest news updates from around the world, ensuring you stay informed.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-light">Home</a></li>
                            <li><a href="/about" className="text-light">About</a></li>
                            <li><a href="/contact" className="text-light">Contact</a></li>
                            <li><a href="/privacy" className="text-light">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://facebook.com" className="text-light">Facebook</a></li>
                            <li><a href="https://twitter.com" className="text-light">Twitter</a></li>
                            <li><a href="https://instagram.com" className="text-light">Instagram</a></li>
                            <li><a href="https://linkedin.com" className="text-light">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-center">
                        <p className="mb-0">&copy; {new Date().getFullYear()} News Portal. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
