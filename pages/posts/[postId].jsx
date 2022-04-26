import React from "react";
import { useRouter } from "next/router";

const PostDetail = () => {
    const router = useRouter();
    const { postId } = router.query



    console.log(router)
  return <div>Post Detail</div>;
};

export default PostDetail;
