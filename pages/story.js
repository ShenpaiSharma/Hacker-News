require('dotenv').config(); 

import React from "react";
import fetch from "isomorphic-fetch";
import Error from "next/error";
import Layout from "../components/Layout";
import Footernav from "../components/Footernav";

class Story extends React.Component {
    static async getInitialProps({ req, res, query }) {
        let story;
        let comments = [];

        try {
            const storyId = query.id;
            const response = await fetch(`${process.env.NEXT_PUBLIC_HN_API_BASE}item/${storyId}.json?print=pretty`);
            story = await response.json();

            if (story.kids && story.kids.length > 0) {
                const commentPromises = story.kids.map(async (kidId) => {
                    const commentResponse = await fetch(`${process.env.NEXT_PUBLIC_HN_API_BASE}item/${kidId}.json?print=pretty`);
                    return await commentResponse.json();
                });

                comments = await Promise.all(commentPromises);
            }
        } catch (err) {
            console.log(err);
            story = null;
        }

        return { story, comments };
    }

    render() {
        const { story, comments } = this.props;

        if (!story) {
            return <Error statusCode={503} />
        }

        return (
            <Layout title={story.title}>
                <main>
                    <div className="container">
                        <h1 className="story-title">
                            <a href={story.url}>{story.title}</a>
                            <div className="story-details">
                                <p>{story.score} score</p>
                                <p>by {story.by}</p>
                                <p>{story.time}</p>
                            </div>
                        </h1>
                        <h2>Comments</h2>
                        {comments.length > 0 ? (
                            <ul>
                                {comments.map((comment) => (
                                    <li key={comment.id}>
                                        <p>{comment.by}</p>: {comment.text}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No comments available.</p>
                        )}
                    </div>
                </main>
                <Footernav />

                <style>{`
                    main {
                        padding: 1em;
                    }
                    .container {
                        max-width: 90%; /* Set a max width for the container */
                        margin: 0 auto; /* Center the container */
                        padding: 0 1em; /* Add horizontal padding */
                    }
                    .story-title {
                        font-size: 1.5em; /* Increased title size for better visibility */
                        margin: 0;
                        font-weight: 300;
                        padding-bottom: 0.5em;
                    }
                    .story-title a {
                        color: #333;
                        text-decoration: none;
                    }
                    .story-title a:hover {
                        text-decoration: underline;
                    }
                    .story-details {
                        font-size: 0.8rem;
                        color: #828282;
                        padding-bottom: 1em;
                        border-bottom: 1px solid rgba(0,0,0,0.1);
                        margin-bottom: 1em;
                    }
                    .story-details strong {
                        margin-right: 1em;
                    }
                    .story-details a {
                        color: #f60;
                    }
                    ul {
                        padding-left: 20px;
                    }
                    li {
                        margin-bottom: 10px;
                        font-size: 0.8rem;
                        color: #828282;
                    }
                    @media (max-width: 768px) {
                        .container {
                            max-width: 100%;
                            margin: 0 auto;
                            background: #f6f6ef;
                        }
                        ul {
                            padding-left: 20px;
                        }
                        li {
                            margin-bottom: 10px;
                            font-size: 0.8rem;
                            color: #828282;
                        }
                    }
                    @media (max-width: 480px) {
                        .container {
                            max-width: 100%;
                            margin: 0 auto;
                            background: #f6f6ef;
                        }
                        ul {
                            padding-left: 20px;
                        }
                        li {
                            margin-bottom: 10px;
                            font-size: 0.8rem;
                            color: #828282;
                        }
                    }
                `}</style>
            </Layout>
        )
    }
}

export default Story;
