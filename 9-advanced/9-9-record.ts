{
  type PageInfo = {
    title: string;
  };
  type Page = "home" | "about" | "contact";

  // Record 한 page와 pageinfo를 연결
  // Page를 key로, PageInfo를 value로
  const nav: Record<Page, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Contact" },
  };

  type Product = "cat" | "dog";
  type NewProduct = Capitalize<Product>; // 'Cat', 'Dog';
}
