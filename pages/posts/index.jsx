import React from "react";

const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <h1>List of posts</h1>
      {posts.map((post) => (
        <div className="flex justify-evenly flex-wrap">
          <div className="border border-gray-300 shadow-md p-5 w-96 h-96">
            <h1 className="text-2xl">{post.title}</h1>
            <h3>
              {post.author} - <small>{post.publishedDate}</small>
              {""}
            </h3>
            <p>{post.content}</p>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
