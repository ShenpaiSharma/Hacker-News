import React from "react";
import Link from "next/link";
import Head from "next/head";

const Layout = ({ children, title }) => (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <div className="container">
            <nav>
                <div className="left-links">
                    <Link legacyBehavior href="/">
                        <a>
                            <img src="/images/y18.svg" alt="Logo" className="logo" />
                        </a>
                    </Link>
                    <Link legacyBehavior href="/">
                        <a>
                            <span className="main-title">Hacker News</span>
                        </a>
                    </Link>
                    <Link legacyBehavior href="/newpost">
                        <a>
                            <span className="new-title">new</span>
                        </a>
                    </Link>
                    <span className="separator">|</span>
                    <Link legacyBehavior href="/toppost">
                        <a>
                            <span className="top-title">top</span>
                        </a>
                    </Link>
                    <span className="separator">|</span>
                    <Link legacyBehavior href="/askspost">
                        <a>
                            <span className="ask-title">ask</span>
                        </a>
                    </Link>
                    <span className="separator">|</span>
                    <Link legacyBehavior href="/jobspost">
                        <a>
                            <span className="jobs-title">jobs</span>
                        </a>
                    </Link>
                    <span className="separator">|</span>
                    <Link legacyBehavior href="/login">
                        <a>
                            <span className="submit-title">submit</span>
                        </a>
                    </Link>
                </div>
                <div className="right-links">
                    <Link legacyBehavior href="/login">
                        <a>
                            <span className="login-title">login</span>
                        </a>
                    </Link>
                </div>
            </nav>
            {children}
        </div>
        <style jsx>{`
            .container {
                max-width: 90%;
                margin: 0 auto;
                background: #f6f6ef;
            }
            .container span {
                margin-right: 0.5em;
            }
            nav {
                background: #f60;
                padding: 0.1em;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .left-links {
                display: flex;
                align-items: center;
            }
            .right-links {
                margin-left: auto;
            }
            nav a {
                font-size: 15px;
                text-decoration: none;
                color: black;
                padding-top: 0.1em;
            }
            nav a:hover {
                color: white;
            }
            nav .main-title {
                font-weight: bold;
            }
            .logo {
                width: 18px;
                height: 18px;
                margin-right: 0.5em;
                border: 2px solid white;
            }
            .separator {
                vertical-align: middle;
                margin: 0 0.1em;
                line-height: 1;
            }
            /* Responsive styles for mobile and tablet */
            @media (max-width: 768px) {
                .story-list {
                    padding: 0; /* No padding on mobile */
                }
                .story {
                    flex-direction: column; /* Stack elements vertically */
                    padding: 0.5em 0; /* More padding for touch targets */
                }
                .story-title {
                    font-size: 14px; /* Adjust as needed */
                }
                .story-details {
                    font-size: 0.8rem; /* Adjust as needed */
                }
            }

            @media (max-width: 480px) {
                .story-title {
                    font-size: 16px; /* Further increase for small screens */
                }
                .story-details {
                    font-size: 0.9rem; /* Further increase for small screens */
                }
            }
        }</style>
        <style global jsx>{
            body {
                background: white;
                font-family: Verdana, Geneva, sans-serif;
            }
        `}</style>
    </div>
);

export default Layout;