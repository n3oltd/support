import React from 'react';
import Layout from '@theme/Layout';
import YouTubePlaylist from "@codesweetly/react-youtube-playlist";

export default function Videos(): JSX.Element {
  return (
    <Layout
      title="Videos"
      description="N3O training videos">
      <YouTubePlaylist
        apiKey="AIzaSyArOkt18m34mq51xDzTcDqduiXdKnxfvew"
        playlistId="PLECYHpJjW4jD4BCwdyT67Xk72H9v-HhLp"
        uniqueName="videos"
      />
    </Layout>
  );
}
