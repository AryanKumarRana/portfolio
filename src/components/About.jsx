import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-auto bg-gradient-to-b
    from-gray-800 to-black text-white pt-40"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
            border-gray-500"
          >
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hi Everyone My name is Aryan Kumar Rana. I am a Full Stack Web Developer In my
          journey as a developer, I have honed my skills across a versatile tech
          stack that empowers me to build innovative and efficient solutions.
          Here's an overview of the technologies I'm proficient in: Front-end
          Development: JavaScript: My go-to language for crafting interactive
          and dynamic user experiences. React.js: I leverage the power of
          React.js to build scalable and maintainable front-end applications.
        </p>
        <p className="text-xl">
          HTML & CSS: I use semantic HTML and CSS3 to create visually appealing
          and responsive designs. Back-end Development: Node.js: As a
          server-side JavaScript runtime, Node.js allows me to build fast and
          scalable network applications. Express.js: I utilize Express.js to
          create robust and modular back-end APIs. Databases: MongoDB:
          Proficient in MongoDB, I work with NoSQL databases for flexible and
          scalable data storage. Version Control and Deployment: Git: I use Git
          for version control and collaboration, enabling seamless teamwork and
          code management.
        </p>
      </div>
    </div>
  );
};

export default About;
