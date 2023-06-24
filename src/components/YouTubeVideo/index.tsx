import React, { useEffect, useState, useRef } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';
import '../../css/custom.css';

const VideoPlayer = ({ videoId, apiKey }) => {
    const [timestamps, setTimestamps] = useState([]);

    const playerRef = useRef(null);
    
    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`
                );

                const { items } = response.data;

                if (items.length > 0) {
                    const video = items[0];
                    const description = video.snippet.description;

                    // Extract timestamps from the video description
                    const timestampRegex = /(\d{1,2}):(\d{2}) - .*/g;
                    const extractedTimestamps = description.match(timestampRegex);

                    if (extractedTimestamps) {
                        // Convert timestamps to an array of objects with time and label
                        const formattedTimestamps = extractedTimestamps.map((timestamp) => {
                            const [minutes, seconds] = timestamp.split(' ')[0].split(':');
                            return {
                                time: parseInt(minutes, 10) * 60 + parseInt(seconds, 10),
                                label: timestamp,
                            };
                        });

                        setTimestamps(formattedTimestamps);
                    }
                }
            } catch (error) {
                console.error('Error fetching video data:', error);
            }
        };

        fetchVideoData();
    }, [videoId, apiKey]);

    const handleTimestampClick = (timestamp) => {
        console.log(playerRef.current);
        const player = playerRef.current.getInternalPlayer();        
        //alert('button');

        if (player) {
            player.seekTo(timestamp.time);
            player.play;
        }
        else {
            alert('player is null');
        }
    };

    return (
        <div>
            <YouTube
                id="youtube-player"
                videoId={videoId}
                opts={{
                    height: '390',
                    width: '700',
                }}
                ref={playerRef}
            />

            <ul>
                {timestamps.map((timestamp, index) => (
                    <li key={index}>
                        <button className="buttonTimestamp" onClick={() => handleTimestampClick(timestamp)}>
                            {timestamp.label} 
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VideoPlayer;
