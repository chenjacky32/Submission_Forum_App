export interface AuthUserLoginPayload {
  email: string;
  password: string;
}

export interface AuthUserRegisterPayload extends AuthUserLoginPayload {
  name: string;
}

export interface GetThreadPayload {
  id: string;
  title: string;
  body: string;
  category: string;
  createdAt: string;
  ownerId: string;
  upVotesBy: string[];
  downVotesBy: string[];
  totalComments: number;
}

export interface GetDetailThreadPayload {
  id: string;
  title: string;
  body: string;
  category: string;
  createdAt: string;
  owner: GetUsersPayload;
  upVotesBy: string[];
  downVotesBy: string[];
  comments: Comments[];
}

export interface GetUsersPayload {
  id: string;
  name: string;
  email?: string;
  avatar: string;
}

export interface VotePayload {
  threadId: string;
  userId: string;
}

export interface createdThreadPayload {
  title: string;
  body: string;
  category: string;
}

export interface LeaderBoardsPayload {
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  };
  score: number;
}

export interface ThreadandUsersState {}

export interface AddComment {
  content: string;
  threadId: string;
}

export interface Comments {
  id: string;
  content: string;
  createdAt: string;
  owner: GetUsersPayload;
  upVotesBy: string[];
  downVotesBy: string[];
}
