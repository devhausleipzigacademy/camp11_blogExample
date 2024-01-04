export type BlogPost = {
	id: number;
	title: string;
	content: string;
};

export type Comment = {
	id: number;
	content: string;
	postId: number;
	author: string;
	replyId: number | null;
};
