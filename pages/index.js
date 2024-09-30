import React from 'react';
import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import StoryList from '../components/StoryList';
import Layout from '../components/Layout';
import Link from 'next/link';
import Router from 'next/router';
import Footernav from '../components/Footernav';

class DynamicStoryPage extends React.Component {
    static storiesPerPage = 30;

    static async getInitialProps({ query, pathname }) {
        let stories = [];
        const page = Number(query.page) || 1;

        const endpointMap = {
            '/': process.env.NEXT_PUBLIC_HN_TOP_STORIES,
            '/newpost': process.env.NEXT_PUBLIC_HN_NEW_STORIES,
            '/toppost': process.env.NEXT_PUBLIC_HN_TOP_STORIES,
            '/askspost': process.env.NEXT_PUBLIC_HN_ASK_STORIES,
            '/jobspost': process.env.NEXT_PUBLIC_HN_JOB_STORIES,
        };

        const apiUrl = endpointMap[pathname] || endpointMap['/'];

        try {
            const storiesResponse = await fetch(apiUrl);
            const storyIds = await storiesResponse.json();

            const startIndex = (page - 1) * DynamicStoryPage.storiesPerPage;
            const endIndex = startIndex + DynamicStoryPage.storiesPerPage;
            const storyIdsToFetch = storyIds.slice(startIndex, endIndex);

            const storyPromises = storyIdsToFetch.map(async (id) => {
                const storyResponse = await fetch(
                    `${process.env.NEXT_PUBLIC_HN_API_BASE}item/${id}.json?print=pretty`
                );
                return storyResponse.json();
            });

            stories = await Promise.all(storyPromises);
        } catch (err) {
            console.log(err);
            stories = [];
        }

        return { stories, page, pathname };
    }

    render() {
        const { stories, page, pathname } = this.props;

        if (stories.length === 0) {
            return <Error statusCode={503} />;
        }

        return (
            <Layout title="Hacker Next">
                <StoryList stories={stories} page={page} />
                <footer>
                    {page > 1 && (
                        <Link href={`${pathname}?page=${page - 1}`} legacyBehavior>
                            <a>Previous Page ({page - 1})</a>
                        </Link>
                    )}
                    <Link href={`${pathname}?page=${page + 1}`} legacyBehavior>
                        <a>Next Page ({page + 1})</a>
                    </Link>
                    <Footernav />
                </footer>
                <style jsx>{`
                    footer {
                        padding: 1em;
                        text-align: left;
                        margin-left: 10px;
                    }
                    footer a {
                        font-size: 0.7rem;
                        color: #828282;;
                        text-decoration: none;
                        margin-right: 1em;
                    }
                `}</style>
            </Layout>
        );
    }
}

export default DynamicStoryPage;