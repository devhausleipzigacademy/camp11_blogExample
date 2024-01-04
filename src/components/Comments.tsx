import { Comment } from "../types/data";
import Button from "./forms/Button";

type CommentProps = {
	comments: Comment[];
	newComment: Omit<Comment, "id">;
	setNewComment: React.Dispatch<React.SetStateAction<Omit<Comment, "id">>>;
};

export function Comments({
	comments,
	setNewComment,
	newComment
}: CommentProps) {
	const topLevelComments = comments.filter(
		(comment) => comment.replyId === null
	);

	const remainingComments = comments.filter(
		(comment) => topLevelComments.includes(comment) === false
	);

	return (
		<div>
			<div>Currently reply id: {newComment.replyId || "none"}</div>
			{topLevelComments.map((comment) => (
				<RecursiveComments
					parentComment={comment}
					remainingComments={remainingComments}
					setNewComment={setNewComment}
				/>
			))}
		</div>
	);
}

type RecursiveCommentsProps = {
	parentComment: Comment;
	remainingComments: Comment[];
	setNewComment: React.Dispatch<React.SetStateAction<Omit<Comment, "id">>>;
};

function RecursiveComments({
	parentComment,
	remainingComments,
	setNewComment
}: RecursiveCommentsProps) {
	const children = remainingComments.filter(
		(comment) => comment.replyId === parentComment.id
	);

	return (
		<>
			{/* parent comment */}
			<div
				style={{
					border: "1px solid black",
					padding: "2rem",
					width: "20rem"
				}}
			>
				<div
					style={{
						fontWeight: "bold",
						fontSize: "0.75rem"
					}}
				>
					{parentComment.author}
				</div>
				<div>{parentComment.content}</div>
				<div
					style={{
						display: "flex",
						justifyContent: "end"
					}}
				>
					<Button
						type="button"
						onClick={() => {
							setNewComment((comment) => {
								return {
									...comment,
									replyId: parentComment.id
								};
							});
						}}
					>
						Reply
					</Button>
				</div>
			</div>
			{/* children section */}
			<div
				style={{
					paddingLeft: "2rem"
				}}
			>
				{children.map((child) => {
					const leftOver = remainingComments.filter(
						(comment) => children.includes(comment) === false
					);
					return (
						<RecursiveComments
							parentComment={child}
							remainingComments={leftOver}
							setNewComment={setNewComment}
						/>
					);
				})}
			</div>
		</>
	);
}

////////

// const exampleCommentTree = [
// 	{
// 		id: 1,
// 		content: "This is a comment",
// 		replies: [
// 			{
// 				id: 2,
// 				content: "This is a reply",
// 				replies: [
// 					{
// 						id: 3,
// 						content: "This is a reply to a reply",
// 						replies: [
// 							{
// 								id: 5,
// 								content:
// 									"This is a reply to a reply to a reply",
// 								replies: []
// 							}
// 						]
// 					}
// 				]
// 			},
// 			{
// 				id: 4,
// 				content: "This is another reply",
// 				replies: []
// 			}
// 		]
// 	}
// ];
