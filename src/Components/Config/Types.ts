export interface user {
  coverImageDark: string;
  name: string;
  bio: string;
  coverImage: string;
  userImage: string;
}

export interface page {
  id: string;
  title: string;
  date: string;
  content: string;
}

export interface post {
  id: string;
  title: string | null;
  date: string;
  type: string;
  content: string;
}

export type posts = post[];
