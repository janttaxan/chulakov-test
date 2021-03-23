import styles from './Video.module.css';
import { EVideos } from '../../enums/EVideos';
import boyVideoUrl from '../../videos/boy.mp4';
import shoeVideoUrl from '../../videos/shoe.mp4';
import boyPoster from '../../videos/posters/boy.jpg';
import shoePoster from '../../videos/posters/shoe.jpg';

function getVideo(video: EVideos) {
  switch (video) {
    case EVideos.boy:
      return boyVideoUrl;
    case EVideos.shoe:
      return shoeVideoUrl;
  }
}

function getPoster(video: EVideos) {
  switch (video) {
    case EVideos.boy:
      return boyPoster;
    case EVideos.shoe:
      return shoePoster;
  }
}

export const Video = ({ video }: {video: EVideos}) => (
  <video
    className={styles.video}
    src={getVideo(video)}
    poster={getPoster(video)}
    controls
    loop
    muted
  />
);
