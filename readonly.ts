let Name: string = "sepide";

interface IBlog {
  readonly title: string;
  readonly text: string;
}
// works exactly the same in type as well.

function newBlog(blog: IBlog): IBlog {
  return blog;
}

const blog = newBlog({ title: "blog title", text: "blog text" });
blog.title = "something else"
console.log(blog);
