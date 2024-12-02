export interface CreateArticleDto {
  title: string;
  description: string;
}

export interface UpdateArticleDto {
  title?: string;
  description?: string;
}

export interface RegisterDto {
  username: string;
  email: string;
  password: string;
}
