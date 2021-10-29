{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo(id: string): Video {
    return {
      id: id,
      title: "video",
      url: "https://...",
      data: "byte-data...",
    };
  }

  // Omit<T> 기존에 존재하는 타입에서 원하는 속성들만 제외해서 사용할 수 있게 해주는 메서드
  // 기존에 존재하는 타입 내에 있는 데이터가 아니더라도 제외시킬 수 있다.
  type VideoMetadata = Omit<Video, "url" | "data">;
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }
}
