export type Post = {
  id: number;
  title?: string;
  description?: string;
  content?: string;

  imagesUrl: {
    thumbnail?: string;
    small?: string;
    medium?: string;
    large?: string;
  };
};

export type PostDTO = {
  data: PostDtoData;
};

export type PostsDTO = {
  data: PostDtoData[];
};

export type PostDtoData = {
  id: number;
  attributes: {
    content?: string;
    title?: string;
    description?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image?: {
      data: {
        attributes: {
          name: string;
          alternativeText: string;
          formats: {
            thumbnail: {
              url: string;
            };
            large: {
              url: string;
            };
            medium: {
              url: string;
            };
            small: {
              url: string;
            };
          };
          size: number;
        };
      };
    };
  };
};
