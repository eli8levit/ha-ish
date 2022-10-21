export type SinglePost = {
  id: number;
  created_at: Date;
  updated_at?: Date;
  content?: string;
  slug?: string;
  title: string;
};
