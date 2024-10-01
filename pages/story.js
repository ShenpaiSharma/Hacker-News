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

            // If the story has kids (comments), fetch each one
            if (story.kids && story.kids.length > 0) {
                const commentPromises = story.kids.map(async (kidId) => {
                    const commentResponse = await fetch(`${process.env.NEXT_PUBLIC_HN_API_BASE}item/${kidId}.json?print=pretty`);
                    return await commentResponse.json();
                });

                // Wait for all comment promises to resolve
                comments = await Promise.all(commentPromises);
            }
        } catch (err) {
            console.log(err);
            story = null;
        }

        // Return both the story and the comments
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
                                    <p>{comment.by}</p>: {comment.text ? comment.text.replace(/&#\d+;/g, '').replace(/https?:\/\/[^\s]+/g, '').replace(/[^a-zA-Z0-9.,\s-]/g, '').replace(/\s+/g, ' ').trim().split(' ').filter(word => word.length <= 15).slice(0, 50).join(' ') : ' '}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No comments available.</p>
                    )}
                </main>
                <Footernav />

                <style>{`
                    main {
                        padding: 1em;
                    }
                    .story-title {
                        font-size: 1em;
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
                `}</style>
            </Layout>
        )
    }
}

export default Story;