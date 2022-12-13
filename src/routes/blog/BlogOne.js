import { Link } from "react-router-dom";

const posts = [
  {
    title: "How to Start an Instagram Blog",
    href: "/blog/how-to-start-an-instagram-blog",

    description:
      "Open an Instagram account now. It’s free. If you already have a personal account, open another one that’s specific to your Instagram blog. Make sure that you pick an effective username (should be relevant to your business) and make good use of the bio.",
    date: "Mar 16, 2022",
    datetime: "2022-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1535451801241-b5395e1d4a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    readingTime: "5 min",
    author: {
      name: "Roel Aufderehar",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "What to Post on Instagram",
    href: "/blog/what-to-post-on-instagram",

    description:
      "Posting candid photos of your work environment can help humanize your business and allow your customers to connect with your employees, which can translate into stronger brand loyalty.",
    date: "Mar 10, 2022",
    datetime: "2022-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Everything You Need To Know About Instagram Creator Studio",
    href: "/blog/wverything-you-need-to-know-about-instagram-creator-studio",

    description:
      "You can view all your past posts and the analytics for each of them in the content library. Posts include Video, Photo, Carousel, Stories, and IGTV posts. You can also group these posts by clicking through the tabs at the top of the page.",
    date: "Mar 02, 2022",
    datetime: "2022-03-02",
    imageUrl:
      "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "20 Tactful Instagram Tips",
    href: "/blog/20-tactful-instagram-tips",

    description:
      "Direct Message your audience and influencers. Users often forget that Instagram allows you to send direct messages to anyone on the platform. This forgotten feature is the easiest way to get in touch with your audience or influencers in your industry.",
    date: "Feb 26, 2022",
    datetime: "2022-02-26",
    imageUrl:
      "https://images.unsplash.com/photo-1539187577537-e54cf54ae2f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    readingTime: "5 min",
    author: {
      name: "Julian Wan",
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
    },
  },
  {
    title: "Instagram Marketing Resources for Businesses",
    href: "/blog/instagram-marketing-resources-for-businesses",

    description:
      "Hubspot’s social media management software allows you to create “streams.” These are dedicated pages for monitoring conversations on a specific social media platform.",
    date: "Feb 20, 2022",
    datetime: "2022-02-20",
    imageUrl:
      "https://images.unsplash.com/photo-1591348069673-358bea18a8a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    readingTime: "7 min",
    author: {
      name: "Caoimhe Byrne",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
    },
  },
  {
    title: "How to run an Instagram Contest?",
    href: "/blog/how-to-run-an-instagram-contest",
    description:
      "Before you dive into an Instagram marketing contest, it’s important to plan it out first. The key to running a successful contest is to have a purpose -- one that aligns with the interests and behaviors of your target audience.",
    date: "Feb 18, 2022",
    datetime: "2022-02-18",
    imageUrl:
      "https://images.unsplash.com/photo-1562147458-0c12e8d29f50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    readingTime: "5 min",
    author: {
      name: "Lyla Kramer",
      imageUrl:
        "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
    },
  },
  {
    title: "How to Get Followers on Instagram",
    href: "/blog/get-more-instagram-followers",

    description:
      "Getting more Instagram followers is a great starter goal. But followers alone won’t create a successful Instagram account. Your goal needs to be part of a larger plan that connects to your business strategy and social marketing objectives.",
    date: "Feb 10, 2022",
    datetime: "2022-02-10",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1663047640927-75a317eb7120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    readingTime: "8 min",
    author: {
      name: "Warren Wong",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
    },
  },
  {
    title: "How to Promote Your eCommerce Store on Instagram",
    href: "/blog/how-to-promote-your-ecommerce-store-on-instagram",
    description:
      "Creating an Instagram business account for your eCommerce store gives you access to advanced Instagram features. There are currently over 25+ million business accounts, with 200+ million Instagrammers visiting at least one business profile daily.",
    date: "Feb 09, 2022",
    datetime: "2022-02-09",
    imageUrl:
      "https://images.unsplash.com/photo-1564758596018-3e5b1f2340cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    readingTime: "4 min",
    author: {
      name: "Nikkole Hardy",
      imageUrl:
        "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
    },
  },
  {
    title: "A Beginner’s Guide to Instagram for Businesses",
    href: "/blog/how-to-use-instagram-for-business-a-beginners-guide/",

    description:
      "Establish your business presence on Instagram and unlock free messaging features, insights and advertising solutions when you create an Instagram business account. Learn more about business accounts and how to set one up in our course, Create an Instagram Business account.",
    date: "Jan 16, 2022",
    datetime: "2022-01-16",
    imageUrl:
      "https://images.unsplash.com/photo-1623124099135-948a22b49ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    readingTime: "5 min",
    author: {
      name: "Bannon Morrissy",
      imageUrl:
        "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
    },
  },
];

export default function BlogOne() {
  const ResetLocation = () => window.scrollTo(0, 0);
  return (
    <article className="relative max-w-7xl mx-auto">
      <section className="text-center">
        <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
          Blogs
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-400 sm:mt-4">
          What's trending? Learn more from our latest blogs.
        </p>
      </section>
      <section className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none ">
        {posts.map((post, index) => (
          <section
            key={index}
            className="flex flex-col rounded-lg shadow-lg overflow-hidden "
          >
            <section className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src={post.imageUrl}
                alt=""
              />
            </section>
            <section className="flex-1 bg-gray-800 p-6 flex flex-col justify-between">
              <section className="flex-1">
                <Link
                  onClick={ResetLocation}
                  to={post.href}
                  className="block mt-2"
                >
                  <p className="text-xl font-semibold text-white">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-400">
                    {post.description}
                  </p>
                </Link>
              </section>
              <section className="mt-6 flex items-center">
                <section className="flex-shrink-0">
                  <span className="sr-only">{post.author.name}</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src={post.author.imageUrl}
                    alt=""
                  />
                </section>
                <section className="ml-3">
                  <p className="text-sm font-medium text-white">
                    {post.author.name}
                  </p>
                  <section className="flex space-x-1 text-sm text-gray-400">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingTime} read</span>
                  </section>
                </section>
              </section>
            </section>
          </section>
        ))}
      </section>
    </article>
  );
}
