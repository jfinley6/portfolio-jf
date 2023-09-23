import discussionHubImg from "/discussion-hub.png"
import weatherBrowserImg from "/weather-browser.png"
import discsImg from "/out-of-bounds-discs.png"
import redditKeywordImg from "/reddit-keyword-monitor.png"

export const Work = [
  {
    id: 1,
    name: "Out of Bounds Discs",
    description:
      "A disc golf e-commerce store built using React and Ruby on Rails",
    tags: ["react", "rubyonrails", "bootstrap", "bootstrap"],

    demo: "https://outofboundsdiscs.netlify.app/",
    github: "https://github.com/jfinley6/disc-golf-store-frontend",
    img: discsImg,
  },
  {
    id: 2,
    name: "React Weather Browser",
    description:
      "A weather browser built with React and incorporating Google's autocomplete API",
    tags: ["react", "tailwind", "googleapi"],

    demo: "https://react-weather-browser.vercel.app/",
    github: "https://github.com/jfinley6/react-weather-browser",
    img: weatherBrowserImg,
  },
  {
    id: 3,
    name: "Discussion Hub",
    description:
      "A discussion forum where you can create communities, posts, and comments",
    tags: ["rubyonrails", "bootstrap", "devise"],

    demo: "https://discussionhub-51a7c53ae2c9.herokuapp.com/",
    github: "https://github.com/jfinley6/DiscussionHub",
    img: discussionHubImg,
  },
  {
    id: 4,
    name: "Reddit Keyword Monitor",
    description:
      "A tool to monitor Reddit posts for specific keywords and get email notifications for matching posts",
    tags: ["rubyonrails", "tailwind", "restapi"],

    demo: "",
    github: "https://github.com/jfinley6/reddit-keyword-monitor",
    img: redditKeywordImg,
  },
];