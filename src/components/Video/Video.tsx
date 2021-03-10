import styles from './Video.module.css';
import { EVideos } from '../../enums/EVideos';
import boyVideoUrl from '../../videos/boy.mp4';
import shoeVideoUrl from '../../videos/shoe.mp4';
import { useEffect, useRef } from 'react';
import { checkVisibleElement } from '../../utils/checkVisibleElement';

function getVideo(video: EVideos) {
  switch (video) {
    case EVideos.boy:
      return boyVideoUrl;
    case EVideos.shoe:
      return shoeVideoUrl;
  }
}

export const Video = ({ video }: {video: EVideos}) => {
  const videoEl = useRef<HTMLVideoElement>(null);

  const playVideo = () => {
    videoEl.current?.play();
  };

  const pauseVideo = () => {
    videoEl.current?.pause();
  };

  const handleScroll = () => {
    if (videoEl.current) {
      if (checkVisibleElement(videoEl.current)) {
        playVideo();
      } else {
        pauseVideo();
      }
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <video
      className={styles.video}
      src={getVideo(video)}
      ref={videoEl}
      controls
      loop
      muted
    />
  );
};
