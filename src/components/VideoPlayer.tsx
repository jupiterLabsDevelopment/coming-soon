import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  url: string;
}

function VideoPlayer({ url }: VideoPlayerProps) {
  return (
    <div className="video-player-wrapper">
      <ReactPlayer
        url={url}
        playing={true}
        muted={true}
        controls={false}
        loop={true}
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default VideoPlayer;