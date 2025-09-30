import { TypeAnimation } from "react-type-animation";
import React, { useRef } from "react";
import MyComponent2 from "./jukebox";
import "../styles/tailwind.css";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const scrollInto = useRef(null);
  const scrollHandler = () => {
    scrollInto.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sm:mt-20 sm:w-11/12 sm:mb-14 sm:m-auto md:w-11/12 md:mt-24 md:max-w-xl md:mb-10">
      {/* satus bar and logo */}
      <h1 className="logo">
        <TypeAnimation
          sequence={["Jason (Jian) Guan", 144]}
          speed={40}
          style={{ fontSize: "1em" }}
        />
      </h1>

      {/* education section */}
      <h3 className="sub">Education</h3>
      <p className="text-under-headers" id="spec1">
        Computer Science @{" "}
        <span id="secondary">
          <span className="font-medium" title="View Program Info">
            <a
              title="Get program information"
              href="https://www.eng.mcmaster.ca/cas/degree-options/computer-science/"
              target="_about"
            >
              McMaster University
            </a>
          </span>
        </span>{" "}
        <span className="leftover">(Sept. 2022 - Present)</span>
      </p>

      <h3 className="sub">Experience</h3>
      <p className="sub-vals text-under-headers">
        {" "}
        <span id="highlight-effect">
          <a
            title="View on Twitter"
            href="https://x.com/aceautomations"
            target="_about"
          >
            Full-Stack Developer - Ace Automations
          </a>
        </span>{" "}
        <span className="sm:inline-block">(May 2024 - Oct. 2024) </span>
      </p>
      <p className="sub-vals-text text-under-headers mt-2 mb-5">
        Engineered and scaled a Next.js{" "}
        <a
          className="underline hover:cursor-pointer"
          id="secondary"
          href="https://aceautomation.org/"
          target="_about"
        >
          dashboard
        </a>{" "}
        with Discord OAuth and Web3 integration, delivering real-time access and
        automated SaaS billing for 200+ users with 92% retention and
        near-perfect uptime
      </p>
      <p className="text-under-headers">
        I’m actively seeking internships for Winter 2026, <b>let's connect!</b>
      </p>

      <div className="mt-2">
        <h4 className="about-links" id="highlight-effect">
          <a
            title="Let's connect!"
            href="https://www.linkedin.com/in/jian-guan/"
            target="_about"
          >
            Linkedin
          </a>
        </h4>
        <h4 className="about-links" id="highlight-effect">
          <a
            title="View my projects"
            href="https://github.com/jiancg"
            target="_about"
          >
            Github
          </a>
        </h4>
        <h4 className="about-links" id="highlight-effect">
          <a
            title="Send me a message"
            href="mailto:guanj29@mcmaster.ca"
            target="_about"
          >
            Email
          </a>
        </h4>
      </div>

      {/* projcts section */}
      <h3 className="sub">Projects</h3>

      <p className="mt-4 sub-vals text-under-headers">
        {" "}
        <span id="highlight-effect">
          <a title="View on Github" href="https://mactracc.xyz" target="_about">
            Mactracc
          </a>
        </span>{" "}
        <span className="sm:inline-block">(Jan. 2025 - Present) </span>
      </p>
      <p className="sub-vals-text text-under-headers mt-2 mb-4">
        Designed and launched an iOS app with real-time library occupancy
        tracking and SwiftUI widgets powering 1,500+ weekly sessions with
        sub-15ms API responses
      </p>

      <p className="sub-vals-text text-under-headers" id="multi-line">
        <span id="highlight-effect">
          <a
            title="View on Github"
            href="https://github.com/jiancg/Personal-Site"
            target="_about"
          >
            Personal Site
          </a>
        </span>{" "}
        (May 2024 - Present){" "}
      </p>
      <p className="text-under-headers mt-2 mb-4">
        Built a minimalist portfolio with React and Tailwind, integrating an
        Express API to{" "}
        <span
          id="secondary"
          className="underline decoration-1 hover:cursor-pointer"
          onClick={scrollHandler}
        >
          display real-time Spotify stats
        </span>{" "}
        with responsive design and error handling
      </p>

      <p className="mt-4 sub-vals text-under-headers">
        {" "}
        <span id="highlight-effect">
          <a
            title="View on Github"
            href="https://github.com/jiancg/Apple-Store-Monitor"
            target="_about"
          >
            Apple Store Monitor
          </a>
        </span>{" "}
        <span className="sm:inline-block">(Oct. 2021 - Jan. 2022) </span>
      </p>
      <p className="sub-vals-text text-under-headers mt-2">
        Built an event-driven stock monitor with Node.js and Discord.js, sending
        real-time restock alerts via async webhooks that enabled 35+ successful
        purchases{" "}
        <a
          className="underline hover:cursor-pointer"
          id="secondary"
          href="https://www.cbc.ca/news/business/apple-iphones-semiconductors-1.6208996"
          target="_about"
        >
          during a chip shortage
        </a>
        , maintaining 99.9% uptime with robust error handling
      </p>

      {/* about section */}
      <h3 className="sub">About</h3>
      <p className="text-under-headers mb-2">
        I'm a third-year Computer Science student who enjoys turning ideas into
        projects and picking up new skills along the way. Whether it’s through
        school, side projects, or just messing around with new tools, I’m always
        looking for ways to grow and learn.
      </p>
      <p className="text-under-headers mb-2">
        I’ve built a solid work ethic around problem-solving, teamwork, and
        adapting to whatever challenge comes next.
      </p>
      <p className="text-under-headers">
        When I’m not trying to locate an unnecessary comma, I enjoy lifting
        weights at the gym and trying out new recipes.
      </p>
      {/* social links */}
      <div className="mt-2">
        <h4 className="about-links" id="highlight-effect">
          <a href="https://www.instagram.com/_jianguan/" target="_about">
            Instagram
          </a>
        </h4>
        <h4 className="about-links" id="highlight-effect">
          <a
            href="https://open.spotify.com/user/14zresn8lmk2r3nnozxhqpzaw?si=c1403456ad0746f8"
            target="_about"
          >
            Spotify
          </a>
        </h4>
        <h4 className="about-links" id="highlight-effect">
          <a href="https://hevy.com/user/jianguan" target="_about">
            Hevy
          </a>
        </h4>
      </div>

      {/* spotify activity */}
      <h3 className="sub">Jukebox</h3>
      <div className="" ref={scrollInto}>
        <MyComponent2 />
      </div>
    </div>
  );
}

export default App;
