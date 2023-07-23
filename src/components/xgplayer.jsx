import React, { useRef, useEffect } from 'react';
import Player from 'xgplayer'; // 引入西瓜播放器的主文件
import "xgplayer/dist/index.min.css";

const XiguaPlayer = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    const player = new Player({
      id: 'my-player', // 指定播放器容器的 id
      url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4', // 指定视频的 URL
    });

    playerRef.current = player;

    return () => {
      player.destroy(); // 在组件销毁时销毁播放器实例
    };
  }, []);

  return <div id="my-player" ref={playerRef} />;
};

export default XiguaPlayer;
