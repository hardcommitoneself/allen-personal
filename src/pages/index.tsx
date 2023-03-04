import React from "react";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

import { SiLaravel, SiVuedotjs, SiTailwindcss, SiMysql } from "react-icons/si";

import {
  Experience,
  ExperienceType,
  TechStack,
  TechStackType,
} from "@/components";

const exps: ExperienceType[] = [
  {
    role: "Laravel Full Stack Engineer",
    company: "Tred",
    color: "bg-red-500",
    type: "FULL",
    isRemote: true,
    from: "May 2019",
    to: "Jan 2023",
    duration: "3 yrs 9 mos",
    detail: [
      `Built social application(For US high school and
        university's athletes) using TALL(Tailwind CSS +
        Alpine.js + Livewire + Laravel) as well as integrating
        third-party SAAS APIs like Stripe, Twilio, IpBase, Spotify
        etc
      `,
      `Built a financial auditing system for Stripe payments
        using Laravel. Client payment reconciliation was performed
        between the application database and Stripe REST API
      `,
      `Maintained internal apps and implemented core features
        by co-working with cross-functional team
      `,
    ],
  },
  {
    role: "Full Stack Developer",
    company: "IWave Inc",
    color: "bg-teal-500",
    type: "FULL",
    isRemote: false,
    from: "Feb 2015",
    to: "Mar 2019",
    duration: "3 yrs 5 mos",
    detail: [
      `Developed and maintained websites independently, creating landing and checkout pages for marketing companies, integrated with sales CRMs (Konnektive CRM) and Payment Processors (NMI, Paypal, Braintree, Stripe)
      `,
      ` Also created internal tools for managing marketing campaign traffic links that routed hundreds of thousands of clicks daily.
      `,
    ],
  },
  {
    role: "Software Developer",
    company: "Yondu Inc",
    color: "bg-orange-500",
    type: "FULL",
    isRemote: false,
    from: "Feb 2014",
    to: "Jan 2015",
    duration: "1 yrs 1 mos",
    detail: [],
  },
];

const stacks: TechStackType[] = [
  {
    name: "Laravel PHP",
    icon: <SiLaravel size="28px" color="white" />,
    color: "bg-red-500",
    description: (
      <>
        For almost 9 years I have been using Laravel as the backend framework on
        nearly all my projects. I am a{" "}
        <span className="text-teal-500 underline underline-offset-2">
          Laravel Certificated Developer
        </span>{" "}
        and passed the certification exam with the Laravel organization. Through
        out my time working with Laravel I&apos;ve touched almost every part of
        their development ecosystem; using the authentication scaffolding,
        payment scaffolding, deployment management, and more...
      </>
    ),
    badges: [
      "Livewire",
      "Jetstream",
      "Nova",
      "Sactum",
      "Echo",
      "Cashier",
      "Forge",
      "Filament",
    ],
    versions: ["Version 9", "Version 10"],
  },
  {
    name: "Vue",
    icon: <SiVuedotjs size="28px" color="white" />,
    color: "bg-emerald-500",
    description: (
      <>
        For advanced front-ends I almost always use Vue JS, this year moving all
        my projects to the latest release version 3 using the composition API. I
        am experienced using many of the popular Vue plugins and frameworks.
      </>
    ),
    badges: ["Quasar", "Vueify", "Vue Formulate", "Inertia JS", "Headless UI"],
    versions: ["Version 3"],
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size="28px" color="white" />,
    color: "bg-sky-500",
    description: (
      <>
        I started using Tailwind CSS since it&apos;s launch in 2018 and it
        quickly became a staple in all my projects. I regularly use it when
        creating custom components because I prefer to use native elements with
        styling over javascript based components when possible. Using Purge and
        JIT compiling to ensure the smallest file size and fatest page load
        times.
      </>
    ),
    badges: ["Daisy", "Flowbite", "Mamba UI", "Headless UI"],
    versions: [],
  },
  {
    name: "MySQL",
    icon: <SiMysql size="28px" color="white" />,
    color: "bg-cyan-900",
    description: (
      <>
        Nearly all of the projects I have worked on use relational databases
        with MySQL, typically used with an ORM like Laravel Eloquent for
        managing relationships. I&apos;m comfortable using advanced data
        structures like pivot table, polymorphic relationships, nested-set
        relationships, recursive relationships, and more...
      </>
    ),
    badges: [],
    versions: [],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* app */}
      <div className="max-w-app mx-auto px-20 py-10">
        {/* content */}
        <div className="flex flex-col bg-white rounded border border-gray-100">
          {/* header */}
          <div className="w-full px-20 pt-10 pb-10 flex justify-between border-b border-black/10">
            {/* left - name, role, location, remote */}
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold">Jeremy Holstein</h1>
              <span className="text-lg text-gray-500 mt-3">
                Laravel, Vue Certificated Developer
              </span>
              <div className="flex items-center space-x-3 mt-2">
                {/* remote chip */}
                <div className="inline-flex items-center justify-center uppercase bg-teal-500/10 text-teal-500 font-bold text-sm px-2">
                  Remote
                </div>

                {/* location */}
                <div className="flex items-center space-x-1">
                  <MapPinIcon className="w-5 h-5 text-teal-500" />
                  <span className="text-teal-500 font-bold">
                    Orlando, Florida
                  </span>
                </div>
              </div>
            </div>

            {/* right - phone, email, social */}
            <div className="flex flex-col justify-end space-y-3 text-gray-500">
              {/* phone */}
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5" />
                <span>{"(315) 715 8471"}</span>
              </div>

              {/* mail */}
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="w-5 h-5" />
                <span>{"jjjrmy@gmail.com"}</span>
              </div>
            </div>
          </div>

          {/* body */}
          <div className="flex flex-col p-20 space-y-14">
            {/* About me */}
            <div className="flex flex-col space-y-5">
              <h1 className="text-3xl font-semibold">About Me</h1>
              <p className="text-gray-800 text-lg">
                I have worked in web development for nearly 9 years as a Full
                Stack Developer in addition to running Online Marketing
                Campaigns. I&apos;ve always had a love for technology so taking
                the initiative to learn Full Stack Web Development has
                definitely been one of the most challenging yet amazing
                decisions I&apos;ve ever made. Contributing to web development
                projects and overcoming both personal and professional
                challenges have only further motivated me to continue pursuing
                my career goals within the software development industry This
                journey has also taught me to believe and be kind to myself,
                anything is possible with time and dedication. I can&apos;t wait
                to see where this road take me and I wouldn&apos;t have it any
                other way! When I&apos;m not on the job, I love hiking with my
                dog Ziyi, working my way through every recipe in the family
                cookbook, and indulging my love for seeing new places.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-col space-y-8">
              <h1 className="text-3xl font-semibold">Tech Stack</h1>
              <p className="text-gray-800 text-lg">
                I&apos;ve worked with many front and back end frameworks, but
                this is my preferred stack when working on projects. This is
                just a brief list.
              </p>

              {/* stack */}
              {stacks.map((stack, index) => (
                <TechStack key={index} {...stack} />
              ))}

              {/* additional summary */}
              <p className="text-gray-800 text-lg">
                I&apos;m an extremely quick learner and have worked on many
                projects where I&apos;ve had to learn a new stack or technology
                to integrate within the current project. Many times creating
                adaptors to bridge between these technologies or devleop custom
                solutions to archive the goal of that requirement.
              </p>
            </div>

            {/* work experience */}
            <div className="flex flex-col space-y-5">
              <h1 className="text-3xl font-semibold">Work Experience</h1>

              {/* companies */}
              {exps.map((exp, index) => (
                <Experience key={index} {...exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
