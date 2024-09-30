import React from "react";
import Link from "next/link";

const Footernav = () => (
    <div>
        <hr className="bold-line" />
        <nav>
            <Link href="/guidelines" legacyBehavior>
                <a>Guidelines</a>
            </Link>{'|'}
            <Link href="/faq" legacyBehavior>
                <a>FAQ</a>
            </Link>{'|'}
            <Link href="/lists" legacyBehavior>
                <a>Lists</a>
            </Link>{'|'}
            <Link href="/api" legacyBehavior>
                <a>API</a>
            </Link>{'|'}
            <Link href="/security" legacyBehavior>
                <a>Security</a>
            </Link>{'|'}
            <Link href="/legal" legacyBehavior>
                <a>Legal</a>
            </Link>{'|'}
            <Link href="/apply" legacyBehavior>
                <a>Apply to YC</a>
            </Link>{'|'}
            <Link href="/contact" legacyBehavior>
                <a>Contact</a>
            </Link>
        </nav>
        <div className="search-box">
            Search: <input type="text" />
        </div>
        <style jsx>{`
            .bold-line {
                border: none;
                height: 4px;
                background-color: orange;
                margin: 1em 0;
            }
            nav {
                text-align: center;
            }
            nav a {
                margin: 0 0.3em;
                font-size: 0.7rem;
                color: black;
            }
            .search-box {
                margin-top: 1em;
                font-size: 0.7rem;
                text-align: center;
            }
            .search-box input {
                padding: 0.5em;
                font-size: 1rem;
                height: 3px;
                width: 120px;
            }
        `}</style>
    </div>
);

export default Footernav;