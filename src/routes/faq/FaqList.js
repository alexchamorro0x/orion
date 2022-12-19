import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "How Does Orion Digital Consulting work?",
    answer:
      "Orion Digital Consulting works hard to be as accurate as possible. However, we do not warrant that product descriptions or other content of this site is accurate, complete, reliable, current, or error-free. If a product offered by Orion Digital Consulting itself is not as described completely, your sole remedy is to return it in unused condition.",
  },
  {
    question: "How many followers should I expect?",
    answer:
      "While Orion Digital Consulting will get you plenty of organic traffic to your Instagram account, the likelihood of converting those visitors into followers depends vastly on the quality of your content, as well as other parameters.",
  },
  {
    question: "Does my account have to be in specific industry?",
    answer:
      "You should know who else sells in your market. You can’t easily describe a type of business without describing the nature of the participants. There is a huge difference, for example, between an industry like broadband television services, in which there are only a few huge companies in any one country, and one like dry cleaning, in which there are tens of thousands of smaller participants.",
  },
  {
    question: "Why do I need more followers?",
    answer:
      "For both sales and building professional relationships having a large following is essential. This is because followers make a business look more reliable. It is a source of credibility for users. Customers tend to trust those brands that have already built a following. They take them more seriously.",
  },
  {
    question: "Do you work manually?",
    answer:
      "AI will replace all tedious and time-consuming manual processes, allowing humans to focus on high-value tasks.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "Optimize your bio, Find your best time to post on Instagram, Post consistently, Experiment with different content types, Find your brand voice and create unique content, Write great captions, Research and use hashtags, Engage with your audience, Collaborate with others, Analyze your results.",
  },
  {
    question: "Do you offer any sort of free trial?",
    answer:
      "We offer a 5-day free trial if you request it from an account manager. After your trial, you can choose from one of three affordable bundled packages that fit your needs.",
  },
  {
    question: "What happens after I sign up?",
    answer:
      "This third-party Instagram growth company uses usernames, locations, and hashtags to engage with users that are interested in your niche.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FaqList() {
  return (
    <dl className="mt-6 space-y-6 divide-y divide-slate-700">
      {faqs.map((faq) => (
        <Disclosure as="div" key={faq.question} className="pt-6">
          {({ open }) => (
            <>
              <dt className="text-lg">
                <Disclosure.Button className="text-left w-full flex justify-between items-start text-white">
                  <span className="font-medium">{faq.question}</span>
                  <span className="ml-6 h-7 flex items-center">
                    <ChevronDownIcon
                      className={classNames(
                        open ? "-rotate-180" : "rotate-0",
                        "h-6 w-6 transform"
                      )}
                      aria-hidden="true"
                    />
                  </span>
                </Disclosure.Button>
              </dt>
              <Transition
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-300 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                  <p className="text-base text-slate-400">{faq.answer}</p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </dl>
  );
}
