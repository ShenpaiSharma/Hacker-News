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
            <div className="content">
                {children}
            </div>
        </div>
        <style jsx>{`
            .container {
                max-width: 1200px;
                margin: 0 auto;
                background: #f6f6ef;
            }
            .content {
                padding: 1em;
            }
            .container span {
                margin-right: 0.5em;
            }
            nav {
                background: #f60;
                padding: 0.5em; /* Reduced padding for mobile */
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .left-links {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
            }
            .right-links {
                margin-left: auto;
            }
            nav a {
                font-size: 14px;
                text-decoration: none;
                color: black;
                padding: 0.5em; /* Adjusted padding for better spacing */
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

            @media (max-width: 768px) {
                .container {
                    width: 100%; /* Make container full width */
                    height: auto; /* Allow height to adjust */
                    padding: 0; /* Remove padding */
                }
                nav {
                    flex-direction: column; /* Stack items vertically */
                    padding: 0.3em; /* Adjusted padding for compactness */
                }
                .left-links {
                    width: 100%;
                    justify-content: space-around;
                    margin-bottom: 0.5em;
                }
                .right-links {
                    align-self: flex-end;
                }
                nav a {
                    font-size: 16px; /* Adjust font size */
                    padding: 0.2em 0; /* Reduced padding for mobile */
                }
                .logo {
                    width: 24px; /* Increased logo size for visibility */
                    height: 24px;
                }
            }

            @media (max-width: 480px) {
                nav {
                    padding: 0.2em; /* Further reduce padding on very small screens */
                }
                .left-links {
                    flex-direction: column;
                    align-items: flex-start;
                }
                .right-links {
                    align-self: flex-start;
                }
                nav a {
                    font-size: 18px; /* Larger font size for readability */
                    padding: 0.2em 0; /* Consistent padding */
                }
            }
        `}</style>
        <style global jsx>{`
            body {
                background: white;
                font-family: Verdana, Geneva, sans-serif;
            }
        `}</style>
    </div>
);

export default Layout;
