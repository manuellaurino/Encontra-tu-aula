function reproducirVideo(videoId) {
  switch (videoId) {
    case 'video1':
      window.location.href = 'url_del_video_1.mp4';
      break;
    case 'video2':
      window.location.href = 'url_del_video_2.mp4';
      break;
    case 'video3':
      window.location.href = 'url_del_video_3.mp4';
      break;
    case 'video4':
      window.location.href = 'url_del_video_4.mp4';
      break;
    case 'video5':
      window.location.href = 'url_del_video_5.mp4';
      break;
    // Agrega más casos según sea necesario para más videos
    default:
      console.error('ID de video no válido');
  }
}
