import BlogOne from "../components/blog/BlogOne";
import BlogTwo from "../components/blog/BlogTwo";


export default function Blog() {
  return (
    <article className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <BlogOne />
      <BlogTwo />
    </article>
  );
}
