import React from "react";
import Link from "next/link";

const StoryList = ({ stories, page }) => (
    <div className="story-list">
        {stories.map((story, i) => (
            <div className="story" key={story.id}>
                <div className="index">{(page - 1) * 30 + (i + 1)}.</div>
                <div className="story-content">
                    <h2 className="story-title">
                        <Link legacyBehavior href="/login">
                            <span className="upvote-arrow"></span>
                        </Link>
                        <a href={story.url}>
                            {story.title}
                        </a>
                        <a className="url-link">
                            &nbsp;({story.url ? (story.url).replace(/^https?:\/\//, '').replace(/\.com/g, '') : ''})
                        </a>
                    </h2>
                    <div className="story-details">
                        <span>{story.score || 0} points</span>
                        <Link legacyBehavior href={`/user?id=${story.by}`}>
                            <a>by {story.by || '_'} </a>
                        </Link>
                        <span>{story.time ? Math.floor((Math.floor(Date.now() / 1000) - story.time) / 3600) : '_'} hours ago</span>
                        <span>|</span>
                        <Link legacyBehavior href="/login">
                            <a>hide </a>
                        </Link>
                        <span>|</span>
                        <Link legacyBehavior href={`/story?id=${story.id}`}>
                            <a>{(story.kids === undefined ? 0 : story.kids.length) || 0} comments</a>
                        </Link>
                    </div>
                </div>
            </div>
        ))}
        <style jsx>{`
            .story-list {
                padding: 0 1em;
            }
            .story {
                display: flex;
                align-items: flex-start;
                padding: 0.3em 0;
                flex-wrap: wrap; /* Allow wrapping */
            }
            .index {
                color: #828282;
                margin-right: 8px;
                width: 20px;
                text-align: right;
                flex-shrink: 0;
            }
            .story-content {
                flex: 1;
                word-wrap: break-word;
                overflow-wrap: break-word;
            }
            .story-title {
                font-size: 14px;
                font-weight: 400;
                margin: 0;
                margin-bottom: 0.5em;
            }
            .story-title a {
                color: black;
                text-decoration: none;
            }
            .story-title a:hover, .story-details a:hover {
                text-decoration: underline;
            }
            .story-details {
                font-size: 0.7rem;
                color: #828282;
            }
            .story-details span {
                margin-right: 0.5em;
            }
            .story-details a {
                color: #333;
                text-decoration: none;
            }
            .upvote-arrow {
                width: 0;
                height: 0;
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-bottom: 8px solid #828282;
                cursor: pointer;
                position: relative;
                top: -12px;
                margin-right: 4px;
                transition: transform 0.2s ease;
            }
            .url-link {
                font-size: 0.6rem;
                color: #828282;
                cursor: pointer;
            }

            /* Responsive styles for mobile and tablet */
            @media (max-width: 768px) {
                .story {
                    flex-direction: column;
                    padding: 0.5em 0;
                }
                .story-title {
                    font-size: 14px;
                }
                .story-details {
                    font-size: 0.8rem;
                }
            }

            @media (max-width: 480px) {
                .story-title {
                    font-size: 16px;
                }
                .story-details {
                    font-size: 0.9rem;
                }
            }
        `}</style>
    </div>
);

export default StoryList;
