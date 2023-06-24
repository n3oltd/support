import React from 'react';
import Layout from '@theme/Layout';
import YouTubePlaylist from "@codesweetly/react-youtube-playlist";
import Link from "@docusaurus/Link";
import VideoPlayer from '../../components/YouTubeVideo/index'

export default function Content(): JSX.Element {    

    const ApiKey = 'AIzaSyArOkt18m34mq51xDzTcDqduiXdKnxfvew';
    
  return (
    <Layout
      title="Videos"
      description="N3O training videos">
        <div style={{overflowX: "hidden"}}>
            <div className="row margin-top--lg">
                <div className="col col--6 col--offset-3">
                    {/*<h2>Getting Started</h2>*/}
                    
                    {/*<YouTubePlaylist*/}
                    {/*    apiKey="AIzaSyArOkt18m34mq51xDzTcDqduiXdKnxfvew"*/}
                    {/*    playlistId="PLECYHpJjW4jD4BCwdyT67Xk72H9v-HhLp"*/}
                    {/*    uniqueName="videos"*/}
                    {/*/>*/}
                    <h2>Engage CRM - Overview video</h2>
                    <VideoPlayer 
                        apiKey= {ApiKey}
                        videoId="jC9l2mhQnVw"
                    />

                    <h2>Walkthrough - Sponsorships</h2>
                    <VideoPlayer
                        apiKey= {ApiKey}
                        videoId="sN9y1sQboxk"
                    />

                    <h2>Walkthrough - Donations Processing</h2>
                    <VideoPlayer
                        apiKey= {ApiKey}
                        videoId="V2EJbGnBkCI"
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
        </div>
    </Layout>
  );
}
