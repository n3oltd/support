import React from 'react';
import Layout from '@theme/Layout';
import YouTubePlaylist from "@codesweetly/react-youtube-playlist";
import Link from "@docusaurus/Link";

export default function Videos(): JSX.Element {
  return (
    <Layout
      title="Videos"
      description="N3O training videos">
        <div className="row margin-top--lg">
            <div className="col col--6 col--offset-3">
                <h2>Getting Started</h2>

                <YouTubePlaylist
                    apiKey="AIzaSyArOkt18m34mq51xDzTcDqduiXdKnxfvew"
                    playlistId="PLECYHpJjW4jD4BCwdyT67Xk72H9v-HhLp"
                    uniqueName="videos"
                />
            </div>
        </div>

        <div className="row margin-top--lg margin-bottom--lg">
            <div className="col col--6 col--offset-3">

            <Link to="https://www.youtube.com/@n3oltd">
                Visit our YouTube channel <strong>@n3oltd</strong> for more videos
            </Link>
            </div>
        </div>
    </Layout>
  );
}
