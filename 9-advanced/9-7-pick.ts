{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // Pick<T, key1 | key2> 기존의 type에서 원하는 key만 골라내서 사용
  type VideoMetaData = Pick<Video, "id" | "title">;

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
