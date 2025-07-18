export type Author = {
  id: string;
  name: string;
  profilePicture: string;
  createdAt: string;
  updatedAt: string;
};

export type Category = {
  id: string;
  name: string;
};

export type Post = {
  id: string;
  title: string;
  content: string;
  thumbnail_url: string;
  createdAt: string;
  updatedAt: string;
  authorId: string;
  author: Author;
  categories: Category[];
};
