import type { MetaFunction } from '@remix-run/node';
import { FormEvent, useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Chinh Nguyen'
    },
    {
      name: 'description',
      content:
        "I am a Frontend Developer base in Da Nang City, Viet Nam. I have skill in Javascript, Typescript, React, Vue, Next and Remix. Let' hire me."
    },
    {
      name: 'keywords',
      content:
        'ReactJS, React Developer, React Development, React Coder, React Freelancer'
    }
  ];
};

const sections = [
  {
    label: 'Home',
    section: 'home-section'
  },
  {
    label: 'About',
    section: 'about-section'
  },
  {
    label: 'Resume',
    section: 'resume-section'
  },
  {
    label: 'Skills',
    section: 'skills-section'
  },
  {
    label: 'Projects',
    section: 'projects-section'
  },
  {
    label: 'Contact',
    section: 'contact-section'
  }
];

const resumes = [
  {
    year: 'Mar 2019 - Jun 2020',
    job: 'IOT project Engineer',
    company: 'MIND IoT and Cloud',
    desc: 'Building solutions and deploying IoT projects in Agriculture, Industry, and Environment Fields'
  },
  {
    year: 'Jun 2020 - Feb 2021',
    job: 'ERP consultant',
    company: 'V.B.P.O Join Stock Company',
    desc: 'Advising customers who want to digitalize their business. Developing ERP apps for managing Inventory, Production process, Labor, and Quality'
  },
  {
    year: 'Feb 2021 - May 2023',
    job: 'R&D Software Engineer',
    company: 'LG Electronics Development Vietnam - Da Nang',
    desc: 'Implementing and fixing bugs for apps and services in the Car screen'
  },
  {
    year: 'Apr 2023 - Present',
    job: 'ReactJS Developer',
    company: 'Tarabol Join Stock Company',
    desc: 'Implementing CMS (content management system) for Top-up (exchange, order, inventory, history, partner, contract management)'
  }
];

const skills = [
  {
    name: 'C++/embeded',
    level: 50
  },
  {
    name: 'Qt/Qml',
    level: 30
  },
  {
    name: 'Python/Machine learning',
    level: 30
  },
  {
    name: 'Javascript/Typescript',
    level: 70
  },
  {
    name: 'ReactJS',
    level: 80
  },
  {
    name: 'VueJS',
    level: 50
  },
  {
    name: 'RemixJS',
    level: 50
  }
];

const contacts = [
  {
    label: 'Address',
    content: 'Da Nang, Viet Nam',
    link: 'https://maps.app.goo.gl/Yi2W245Mgspu4ofT8',
    path: (
      <path d="M224 32H64C46.3 32 32 46.3 32 64v64c0 17.7 14.3 32 32 32H441.4c4.2 0 8.3-1.7 11.3-4.7l48-48c6.2-6.2 6.2-16.4 0-22.6l-48-48c-3-3-7.1-4.7-11.3-4.7H288c0-17.7-14.3-32-32-32s-32 14.3-32 32zM480 256c0-17.7-14.3-32-32-32H288V192H224v32H70.6c-4.2 0-8.3 1.7-11.3 4.7l-48 48c-6.2 6.2-6.2 16.4 0 22.6l48 48c3 3 7.1 4.7 11.3 4.7H448c17.7 0 32-14.3 32-32V256zM288 480V384H224v96c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
    )
  },
  {
    label: 'Contact Number',
    content: '+84398289941',
    link: 'tel:+84398289941',
    path: (
      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
    )
  },
  {
    label: 'Email Address',
    content: 'chinhnd1096@gmail.com',
    link: 'mailto:chinhnd1096@gmail.com',
    path: (
      <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
    )
  },
  {
    label: 'Website',
    content: 'Portfolio',
    link: 'https://portfolio-chinhnguyen.vercel.app/',
    path: (
      <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    )
  }
];

export default function Index() {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [projectNum, setProjectNum] = useState<number>(0);
  const [dragStart, setDragStart] = useState<number>(0);
  const [isSending, setIsSending] = useState<boolean | null>(null);
  const timeoutRef = useRef<any>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const aboutRef = useRef<HTMLSelectElement>(null);
  const resumeRef = useRef<HTMLSelectElement>(null);
  const skillRef = useRef<HTMLSelectElement>(null);
  const projectRef = useRef<HTMLSelectElement>(null);
  const contactRef = useRef<HTMLSelectElement>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    let num: any;
    if (projectNum <= 3) {
      num = setTimeout(() => {
        setProjectNum((prev) => prev + 1);
      }, 300);
    }

    return () => {
      clearTimeout(num);
    };
  });

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setSlideIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 10000);

    return () => {
      resetTimeout();
    };
  }, [slideIndex]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add your animation class here
          entry.target.classList.add('bounce');
          entry.target.classList.remove('hide');
        } else {
          // Remove your animation class here
          entry.target.classList.remove('bounce');
          entry.target.classList.add('hide');
        }
      },
      {
        root: null,
        rootMargin: '240px',
        threshold: 0.4
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    if (resumeRef.current) {
      observer.observe(resumeRef.current);
    }

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }
    if (projectRef.current) {
      observer.observe(projectRef.current);
    }
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
      if (resumeRef.current) {
        observer.unobserve(resumeRef.current);
      }
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleClickMenu = (event: any) => {
    // Prevent the default action
    event.preventDefault();

    // Get the hash from the link
    let hash;
    if (event.target.hash) {
      hash = event.target.hash;
    } else {
      hash = event.target.parentNode.hash;
    }

    // Use the hash to find the element
    const element = document.querySelector(hash);

    // Scroll to the element
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    setIsSending(true);
    event.preventDefault();
    const target = event.target;

    const data = {
      to_name: target.name.value,
      from_name: 'Chinh Nguyen',
      subject: target.subject.value,
      message: `Thank you for contacting me about ${target.subject.value}. Your requirement is "${target.message.value}". Let's discuss more here.`,
      reply_to: target.subject.email
    };
    await emailjs.send('contact_job', 'contact_job', data, 'XVGADLY_mpwIgBsTc');
    setIsSending(false);
  };

  return (
    <div className="font-mono flex flex-col items-center">
      <nav
        className="fixed z-50 flex h-20 w-screen max-w-7xl  flex-wrap content-center items-center bg-slate-900 px-4 py-2"
        id="ftco-navbar"
        style={{
          backgroundColor: `rgba(15, 23, 42, 0.5)`
        }}
      >
        <div className="relative flex h-full w-full items-center">
          <h2 className="text-2xl font-black">Chinh Nguyen</h2>
          <button
            className="absolute right-0 hidden cursor-pointer md-max:block"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenMenu((prev) => !prev)}
            ref={menuRef}
          >
            <span className="before:content-['☰']"></span> Menu
          </button>

          <div
            className={`basic-auto md-max:scaleX-0 md:mt-0 md:h-full md:scale-x-100 md:opacity-100 top-0 flex shrink flex-grow items-center justify-end transition-all duration-300 ease-in md-max:absolute md-max:right-0 md-max:mt-14 md-max:flex md-max:scale-x-0 md-max:justify-end ${openMenu ? 'md-max:scale-x-100 md-max:opacity-100' : 'md-max:opacity-0'}`}
          >
            <ul className="md:flex-row flex md-max:flex-col md-max:justify-end">
              {sections.map((item) => (
                <li className="flex text-end md-max:items-end" key={item.label}>
                  <a
                    href={`#${item.section}`}
                    onClick={handleClickMenu}
                    className={
                      'min-w-28 cursor-pointer px-5 py-3 text-base duration-300 ease-in hover:font-semibold hover:text-cyan-400'
                    }
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <section
        id="home-section"
        className="max-w-screen-xl relative h-screen max-w-7xl overflow-hidden"
      >
        <div
          onDragStart={(event) => setDragStart(event.clientX)}
          onDrag={(event) => {
            const position = event.clientX;
            console.log(position - dragStart);
            if (Math.abs(position - dragStart) > 200) {
              setSlideIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
            }
          }}
          className=" h-screen w-screen whitespace-nowrap transition-all duration-1000 ease-in active:cursor-grab"
          style={{
            transform: `translate3d(${-slideIndex * 100}%, 0, 0)`
          }}
        >
          <div
            className={`${slideIndex === 0 ? 'opacity-100' : ''} max-w-screen-xl inline-block h-full w-screen overflow-hidden opacity-0 transition-all duration-2000 ease-in`}
          >
            <div
              className="relative flex h-full w-screen max-w-7xl  flex-row-reverse items-center justify-evenly"
              data-scrollax-parent="true"
            >
              <div
                className="absolute bottom-0 right-0 top-0 h-screen w-screen max-w-xl bg-cover bg-no-repeat"
                style={{
                  backgroundImage: 'url(images/bg_1.png)'
                }}
              ></div>
              <div className="z-10 flex h-full w-full flex-grow items-center px-4">
                <div className="text-wrap">
                  <span className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
                    Hello!
                  </span>
                  <h2 className="my-12 text-wrap text-6xl font-extrabold">
                    I'm <span className=" text-cyan-400">Main Nguyen</span>
                  </h2>
                  <h2 className="mb-12 text-3xl">A Freelance Web Developer</h2>
                  <p>
                    <a
                      href="#contact-section"
                      onClick={handleClickMenu}
                      className="border-1 rounded-full border-solid border-white bg-cyan-600 px-6 py-4 text-sm uppercase tracking-wide duration-300 ease-in hover:bg-cyan-400  hover:font-semibold"
                    >
                      Hire me
                    </a>
                    <a
                      href="#projects-section"
                      onClick={handleClickMenu}
                      className="border-1 ml-10 rounded-full border-solid border-white bg-cyan-600 px-6 py-4 text-sm uppercase tracking-wide duration-300 ease-in hover:bg-cyan-400  hover:font-semibold"
                    >
                      My works
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${slideIndex === 1 ? 'opacity-100' : ''} max-w-screen-xl inline-block h-full w-screen overflow-hidden opacity-0 transition-all duration-2000 ease-in`}
          >
            <div className="relative flex h-full w-screen max-w-7xl flex-row-reverse">
              <div
                className="absolute bottom-0 right-0 top-0 h-screen w-screen max-w-xl bg-cover bg-no-repeat"
                style={{
                  backgroundImage: 'url(images/bg_2.png)'
                }}
              ></div>
              <div className="absolute left-0 z-10 flex h-full w-full max-w-lg flex-grow items-center px-4">
                <div className="text-wrap">
                  <span className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
                    Hello!
                  </span>
                  <h1 className="my-12 w-screen max-w-lg text-6xl font-extrabold">
                    I'm a <span className="text-cyan-400 ">web developer</span>{' '}
                    based in Da Nang, Viet Nam
                  </h1>
                  <p>
                    <a
                      href="#contact-section"
                      onClick={handleClickMenu}
                      className="border-1 ml-10 rounded-full border-solid border-white bg-cyan-600 px-6 py-4 text-sm uppercase tracking-wide duration-300 ease-in hover:bg-cyan-400 hover:font-semibold"
                    >
                      Hire me
                    </a>
                    <a
                      href="#projects-section"
                      onClick={handleClickMenu}
                      className="border-1 ml-10 rounded-full border-solid border-white bg-cyan-600 px-6 py-4 text-sm uppercase tracking-wide duration-300 ease-in hover:bg-cyan-400 hover:font-semibold"
                    >
                      My works
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 w-full text-center">
          <button
            onClick={() => setSlideIndex(0)}
            className={`relative m-1.5 h-2.5 w-2.5 rounded-full duration-300 ease-in ${slideIndex === 0 ? 'bg-white' : ''} after:absolute after:-left-0.5 after:-top-0.5 after:h-3.5 after:w-3.5 after:rounded-full after:border after:border-solid after:border-slate-500`}
          >
            <span></span>
          </button>
          <button
            onClick={() => setSlideIndex(1)}
            className={`relative m-1.5 h-2.5 w-2.5 rounded-full duration-300 ease-in ${slideIndex === 1 ? 'bg-white' : ''} after:absolute after:-left-0.5 after:-top-0.5 after:h-3.5 after:w-3.5 after:rounded-full after:border after:border-solid after:border-slate-500`}
          >
            <span></span>
          </button>
        </div>
      </section>

      <section
        ref={aboutRef}
        className="section relative max-w-7xl bg-cover bg-center bg-no-repeat py-28 pt-28 opacity-0"
        id="about-section"
      >
        <div className="max-w-screen-lg mx-auto w-full px-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="flex">
              <div className="relative flex w-full bg-cover bg-center bg-no-repeat">
                <div className="overlay"></div>
                <div
                  className="relative flex w-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: 'url(images/bg_1.png)',
                    width: '300px'
                  }}
                ></div>
              </div>
            </div>
            <div className="pb-12 pl-12 ">
              <div className="row justify-content-start pb-3">
                <div className="relative">
                  <h2 className="absolute -left-6 top-0 -z-10 mb-2 text-8xl font-black leading-normal text-slate-700">
                    About
                  </h2>
                  <h2 className="mb-10 text-6xl font-bold leading-normal">
                    About Me
                  </h2>
                  <p className="mb-4 text-slate-300">
                    &ldquo;The only true wisdom is in knowing you know
                    nothing.&rdquo; - Socrates
                  </p>
                  <ul className="m-0 mt-6 inline-block w-full p-0">
                    <li className="mb-2.5 flex ">
                      <span className="w-32 font-semibold text-slate-50">
                        Name:
                      </span>{' '}
                      <span className="text-slate-300">Nguyen Duc Chinh</span>
                    </li>
                    <li className="mb-2.5 flex ">
                      <span className="w-32 font-semibold text-slate-50">
                        Date of birth:
                      </span>{' '}
                      <span className="text-slate-300">October 11, 1996</span>
                    </li>
                    <li className="mb-2.5 flex ">
                      <span className="w-32 font-semibold text-slate-50">
                        Address:
                      </span>
                      <span className="text-slate-300">Da Nang, Viet Nam</span>
                    </li>
                    <li className="mb-2.5 flex ">
                      <span className="w-32 font-semibold text-slate-50">
                        Zip code:
                      </span>{' '}
                      <span className="text-slate-300">550000</span>
                    </li>
                    <li className="mb-2.5 flex ">
                      <span className="w-32 font-semibold text-slate-50">
                        Email:
                      </span>{' '}
                      <span className="text-slate-300">
                        chinhnd1096@gmail.com
                      </span>
                    </li>
                    <li className="mb-2.5 flex ">
                      <span className="w-32 font-semibold text-slate-50">
                        Phone:{' '}
                      </span>{' '}
                      <span className="text-slate-300">+84-398289941</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="counter-wrap ftco-animate d-flex mt-md-3">
                <div className="text">
                  <p className="mb-6 text-xl">
                    <span
                      className="font-semibold text-cyan-400"
                      data-number="120"
                    >
                      {projectNum}
                    </span>{' '}
                    <span>Project complete</span>
                  </p>
                  <p>
                    <a
                      href="https://drive.google.com/file/d/1F0D60kzgT9ABo-AUL5r_R_xFSyHL3OPL/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-1 rounded-full border-solid border-white bg-cyan-600 px-6 py-4 text-sm uppercase tracking-wide duration-300 ease-in hover:bg-cyan-400 hover:font-semibold"
                    >
                      Download CV
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={resumeRef}
        className="section relative max-w-7xl pt-28 opacity-0"
        id="resume-section"
      >
        <div className="flex flex-col">
          <div className="row justify-content-center pb-5">
            <div className="relative text-center">
              <h2 className="absolute top-0  -z-10 mb-2 w-full text-8xl font-black leading-normal text-slate-700">
                Resume
              </h2>
              <h2 className="mb-10 text-6xl font-bold leading-normal">
                Resume
              </h2>
              <p className="mb-4 text-slate-300">
                &ldquo;He who knows others is learned; he who knows himself is
                wise.&rdquo; - Lao Tzu
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {resumes.map((resume) => (
              <div
                key={resume.year}
                className="mb-7 w-96 rounded-md bg-slate-700 p-7"
              >
                <span className="text-2xl font-black text-cyan-400">
                  {resume.year}
                </span>
                <h2 className="text-2xl">{resume.job}</h2>
                <span className="text-xs font-semibold uppercase text-slate-300 ">
                  {resume.company}
                </span>
                <p className="mb-4 mt-6 text-slate-300">{resume.desc}</p>
              </div>
            ))}
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-md-6 ftco-animate text-center">
              <p>
                <a
                  href="https://drive.google.com/file/d/1F0D60kzgT9ABo-AUL5r_R_xFSyHL3OPL/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-1 rounded-full border-solid border-white bg-cyan-600 px-6 py-4 text-sm uppercase tracking-wide duration-300 ease-in hover:bg-cyan-400 hover:font-semibold"
                >
                  Download CV
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={skillRef}
        className="section relative max-w-7xl pt-28 opacity-0"
        id="skills-section"
      >
        <div className="flex flex-col items-center">
          <div className="row justify-content-center pb-5">
            <div className="relative text-center">
              <h2 className="absolute top-0  -z-10 mb-2 w-full text-8xl font-black leading-normal text-slate-700">
                Skills
              </h2>
              <h2 className="mb-10 text-6xl font-bold leading-normal">
                My Skills
              </h2>
              <p className="mb-4 text-slate-300">
                &ldquo;Everything we hear is an opinion, not a fact. Everything
                we see is a perspective, not the truth.&rdquo; - Marcus Aurelius
              </p>
            </div>
          </div>
          <div className="flex w-full flex-wrap justify-center">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="col-md-6 animate-box relative w-full max-w-96 px-3.5"
              >
                <div className="mb-7 w-full">
                  <h3 className="mb-2.5 text-xl font-medium">{skill.name}</h3>
                  <div className="relative flex h-2.5 rounded bg-slate-700">
                    <div
                      className="relative h-full rounded bg-cyan-400 text-xl"
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                    <span className="absolute -top-9 right-0 text-xl font-normal">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={projectRef}
        className="section relative max-w-7xl pt-28 opacity-0"
        id="projects-section"
      >
        <div className="flex flex-col items-center">
          <div className="relative text-center">
            <div className="relative text-center">
              <h2 className="absolute top-0  -z-10 mb-2 w-full text-8xl font-black leading-normal text-slate-700">
                Projects
              </h2>
              <h2 className="mb-10 text-6xl font-bold leading-normal">
                My Projects
              </h2>
              <p className="mb-4 text-slate-300">
                &ldquo;Believe nothing, no matter where you read it, or who has
                said it, not even if I have said it. Unless it agrees with your
                own reason and your own common sense.&rdquo; - Buddha
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="relative mb-7 flex w-full cursor-pointer items-center justify-center rounded-lg bg-cover bg-center bg-no-repeat "
              style={{
                backgroundImage: 'url(images/project_1.png)',
                height: '285px',
                width: '500px',
                maxWidth: '100vw'
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-lg bg-cyan-800 opacity-0 transition-all	duration-300 ease-in hover:opacity-90">
                <div className="z-50 text-center text-xl font-normal	">
                  <h3>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://mall-eb5e9.web.app/"
                    >
                      Ecommerce Website
                    </a>
                  </h3>
                  <span className="text-xs font-semibold	uppercase	">
                    ReactJS
                  </span>
                </div>
              </div>
            </div>
            <div
              className="relative mb-7 flex w-full cursor-pointer items-center justify-center rounded-lg bg-cover bg-center bg-no-repeat "
              style={{
                backgroundImage: 'url(images/project_2.png)',
                height: '285px',
                width: '500px',
                maxWidth: '100vw'
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-lg bg-emerald-700 opacity-0 transition-all	duration-300 ease-in hover:opacity-90">
                <div className="z-50 text-center text-xl font-normal	">
                  <h3>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://music-40uwlu5jz-mains-projects-d62ba9fb.vercel.app"
                    >
                      Music player Website
                    </a>
                  </h3>
                  <span className="text-xs font-semibold	uppercase	">VueJS</span>
                </div>
              </div>
            </div>
            <div
              className="relative mb-7 flex w-full cursor-pointer items-center justify-center rounded-lg bg-cover bg-center bg-no-repeat "
              style={{
                backgroundImage: 'url(images/project_3.png)',
                height: '285px',
                width: '500px',
                maxWidth: '100vw'
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-lg bg-purple-700	 opacity-0 transition-all	duration-300 ease-in hover:opacity-90">
                <div className="z-50 text-center text-xl font-normal	">
                  <h3>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://money-lover-killer.web.app/"
                    >
                      Money Manager Solution
                    </a>
                  </h3>
                  <span className="text-xs font-semibold	uppercase	">
                    ReactTS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full max-w-7xl bg-cover bg-center bg-no-repeat py-28"
        style={{ backgroundImage: 'url(images/bg_1.jpg)' }}
      >
        <div className="w-full">
          <div className="row justify-content-center">
            <div className="text-center">
              <h2 className="mb-12 text-4xl font-black">
                I'm <span className="text-cyan-400">Available</span> for
                freelancing
              </h2>
              <p className="mb-8 text-slate-300">
                &ldquo;Happiness is a journey, not a destination.&rdquo; -
                Alfred D'Souza
              </p>
              <p className="mb-0">
                <a
                  href="#contact-section"
                  onClick={handleClickMenu}
                  className="border-1 rounded-full border-solid border-white bg-cyan-600 px-6 py-4 text-sm uppercase tracking-wide duration-300 ease-in hover:bg-cyan-400 hover:font-semibold"
                >
                  Hire me
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={contactRef}
        className="section relative pt-28 opacity-0"
        id="contact-section"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="relative text-center">
              <h2 className="absolute top-0  -z-10 mb-2 w-full text-8xl font-black leading-normal text-slate-700">
                Contact
              </h2>
              <h2 className="mb-10 text-6xl font-bold leading-normal">
                Contact Me
              </h2>
              <p className="mb-4 text-slate-300">
                &ldquo;I Think, Therefore I Am.&rdquo; - Descartes
              </p>
            </div>
          </div>

          <div className="mb-12 flex flex-wrap items-center justify-center">
            {contacts.map((contact) => (
              <div key={contact.label} className="relative mb-7 flex w-96">
                <div className="flex w-full flex-col items-center">
                  <div className="m-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-slate-700">
                    <span className={`text-4xl `}>
                      <svg
                        className="h-8 w-8 fill-cyan-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        {contact.path}
                      </svg>
                    </span>
                  </div>
                  <h3 className="mb-6 text-lg font-medium uppercase">
                    {contact.label}
                  </h3>
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 cursor-pointer text-slate-300 hover:text-cyan-400"
                  >
                    {contact.content}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full">
            <div className="flex w-full justify-center p-8 text-cyan-950">
              <form
                method={'POST'}
                className="w-full max-w-sm"
                id="form"
                onSubmit={handleSubmit}
              >
                <div
                  className={`mb-6 h-12 w-full scale-y-0 ${isSending === false ? 'toast' : ''}  rounded bg-cyan-200 text-center leading-10 text-green-700`}
                >
                  Your requirement was send!
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="h-12 w-full rounded-md p-4 outline-none	"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="h-12 w-full rounded-md  p-4 outline-none"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="h-12 w-full rounded-md p-4 outline-none"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="7"
                    className=" w-full rounded-md p-4 outline-none"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <input
                    type="submit"
                    value="Send Message"
                    className={`border-1 w-full cursor-pointer rounded-full border-solid border-white ${isSending ? 'bg-cyan-950' : 'bg-cyan-600 hover:bg-cyan-400'}  px-6 py-4 text-sm uppercase tracking-wide text-white duration-300 ease-in  hover:font-semibold`}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
