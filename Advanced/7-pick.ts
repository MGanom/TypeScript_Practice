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

  // Pick<T> 기존에 존재하는 타입에서 원하는 속성들만 골라서 사용할 수 있게 해주는 메서드
  // 기존에 존재하는 타입 내에 있는 데이터가 아니면 선택할 수 없다.
  type VideoMetadata = Pick<Video, "id" | "title">;
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }
}
