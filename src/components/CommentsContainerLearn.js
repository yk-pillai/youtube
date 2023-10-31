const CommentsContainerLearn = () => {
  const commentsList = [
    {
      name: "abc",
      text: "Lorem kjas fjag aksuh uytas iu, iaysd dfuk.",
      replies: [
        {
          name: "abc",
          text: "Lorem kjas fjag aksuh uytas iu, iaysd dfuk.",
          replies: [
            {
              name: "abc",
              text: "Lorem kjas fjag aksuh uytas iu, iaysd dfuk.",
              replies: [
                {
                  name: "abc",
                  text: "Lorem kjas fjag aksuh uytas iu, iaysd dfuk.",
                  replies: [],
                },
                {
                  name: "abc",
                  text: "Lorem kjas fjag aksuh uytas iu, iaysd dfuk.",
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          name: "abc",
          text: "Lorem kjas fjag aksuh uytas iu, iaysd dfuk.",
          replies: [],
        },
      ],
    },
    {
      name: "abc",
      text: "Lorem kjas fjag aksuh uytas iu, iaysd dfuk.",
      replies: [
        {
          name: "abc",
          text: "Lorem kjas fjag aksuh uytas iu, iaysd dfuk.",
          replies: [],
        },
      ],
    },
    {
      name: "abc",
      text: "Lorem kjas fjag aksuh uytas iu, iaysd dfuk.",
      replies: [],
    },
  ];

  const Comment = ({comment}) => {
    return (
      <div className="flex m-2 bg-slate-50">
        <img
          className="h-12 w-12"
          alt="com"
          src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
        />
        <div className="">
          <div className="font-bold">{comment.name}</div>
          <div>{comment.text}</div>
          {comment.replies &&
            comment.replies.map((com, index) => (
              <div
                key={index}
                className="border border-l-black border-y-0 border-r-0 m-2"
              >
                <Comment key={index} comment={com} />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-2">
      <h1 className="font-bold">Comments</h1>
      {commentsList.map((c, index) => (
        <Comment key={index} comment={c} />
      ))}
    </div>
  );
};

export default CommentsContainerLearn;
