// // to determine what methods and classes we are going to be using in the program,
// // use type & implements.

// type TBlog = {
//   id: number;
//   title: string;
//   text: string;
//   date: Date;
//   author: string;
// };
// type TBlogUpdate = {
//   id?: number;
//   title?: string;
//   text?: string;
//   date?: Date;
//   author?: string;
// };
// type Response = {
//   message: string;
//   statusCode: number;
// };

// interface IBlog {
//   blogs: TBlog[];

//   create(blog: TBlog): Response;
//   update(id: number, data: TBlogUpdate): Response;
//   delete(id: number): Response;
//   getBlogs(): TBlog[];
// }

// class Blog implements IBlog {
//   readonly blogs: TBlog[] = [];
//   // can not define it as a private property, the solution is to use
//   // setter and getter

//   public create(blog: TBlog): Response {
//     return {
//       statusCode: 201,
//       message: "",
//     };
//   }
//   public update(id: number, data: TBlogUpdate): Response {
//     return {
//       statusCode: 200,
//       message: "",
//     };
//   }
//   public delete(id: number): Response {
//     return {
//       statusCode: 201,
//       message: "",
//     };
//   }
//   public getBlogs(): TBlog[] {
//     return this.blogs;
//   }
// }
