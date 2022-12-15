import BlogOne from "./BlogOne";
import BlogTwo from "./BlogTwo";

export default function Blog() {
  return (
    <main className="relative bg-slate-900 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <BlogOne />
      <BlogTwo />
    </main>
  );
}
