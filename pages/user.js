require('dotenv').config(); 

import React from "react";
import fetch from "isomorphic-fetch";
import Error from "next/error";
import Layout from "../components/Layout";
import Footernav from "../components/Footernav";

class Story extends React.Component {
    static async getInitialProps({ req, res, query }) {
        let story;
        console.log(query);
        try {
            const storyId = query.id;
            const response = await fetch(`${process.env.NEXT_PUBLIC_HN_API_BASE}user/${storyId}.json?print=pretty`);
            story = await response.json();
            console.log(story);
        } catch (err) {
            console.log(err);
            story = null;
        }

        // Return both the story and the comments
        return { story };
    }

    render() {
        const { story } = this.props;

        if (!story) {
            return <Error statusCode={503} />
        }

        return (
            <Layout title={story.title}>
                <main>
                    <table>
                        <tr>
                            <td>User:</td>
                            <td>{story.id}</td>
                        </tr>
                        <tr>
                            <td>Created:</td>
                            <td>{new Date(story.created).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                        </tr>
                        <tr>
                            <td>Karma:</td>
                            <td>{story.karma}</td>
                        </tr>
                        <tr>
                            <td>About:</td>
                            <td>{story.about}</td>
                        </tr>
                    </table>
                </main>
                <Footernav />

                <style>{`
                    main {
                        padding: 1em;
                    }
                    table {
                        font-size: 0.8rem;
                        color: #828282;
                    }
                `}</style>
            </Layout>
        )
    }
}

export default Story;
