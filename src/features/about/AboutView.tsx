import aboutMePhoto from "../../assets/about-me-photo.jpg";

const paragraphs = [
  "I got into programming at a young age by building small games and experimenting with code. I originally planned to pursue a degree in Computer Science, but after moving several times and being considered an out-of-state resident, that path became more difficult to pursue. I eventually found my way into software development through a Full-Stack Web Development bootcamp at UNC Charlotte, where I graduated and began my professional career.",
  "After several years of working as a software developer, I've recently returned to college with the goal of completing a Computer Science degree. I'm also interested in continuing my education in AI and potentially pursuing a master's degree in the field.",
  "Today, my professional experience is primarily focused on frontend and full-stack web development, but my interests extend beyond that. I enjoy building products, tools, and other software simply because I'm curious about how they work and what I can create with them.",
  "When I'm not working, I enjoy playing video games, keeping up with the latest movies, spending time with my two dogs, and inevitably starting some kind of software project. I'm also interested in getting back into game development and exploring the different ways I can combine software, creativity, and technology.",
];

function AboutView() {
  return (
    <section className="px-8 py-16">
      <h1 className="m-0 mb-8 text-3xl font-bold text-neutral-900">About</h1>
      <div>
        <img
          src={aboutMePhoto}
          alt="Jacob Fenwick"
          className="mb-8 w-72 rounded-[4px] md:float-right md:mb-8 md:ml-8 md:w-80"
        />

        {paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="mb-4 text-lg leading-relaxed text-neutral-600 last:mb-0"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

export default AboutView;
