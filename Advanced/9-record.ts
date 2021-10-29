{
  type PageInfo = {
    title: string;
  };
  type Page = "home" | "about" | "contact";

  // Record<T1, T2> 타입 두 가지를 키와 밸류로 묶고 싶을때 사용하는 메서드
  const nav: Record<Page, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Contact" },
  };
}
