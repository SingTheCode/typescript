{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // Omit<T, key1 | key2> 기존의 type에서 원하지 않는 key만 빼고 사용
  type VideoMetaData = Omit<Video, "url" | "data">;

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }
  function getVideoMetaData(id: string): VideoMetaData {
    return {
      id: id,
      title: "video",
    };
  }
}
