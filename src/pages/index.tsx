import React from "react";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

import { SiLaravel, SiVuedotjs, SiTailwindcss, SiMysql } from "react-icons/si";

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
              {/* --- Laravel --- */}
              <div className="flex gap-5">
                {/* icon */}
                <div className="inline-flex items-center justify-center min-w-[56px] w-14 h-14 rounded overflow-hidden bg-red-500">
                  <SiLaravel size="28px" color="white" />
                </div>

                {/* content */}
                <div className="flex flex-col gap-3">
                  {/* header */}
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-medium">Laravel PHP</h1>
                    <div className="inline-flex items-center h-7 justify-center uppercase bg-teal-500/10 text-teal-500 font-bold text-sm px-2">
                      Version 9
                    </div>
                    <div className="inline-flex items-center h-7 justify-center uppercase bg-teal-500/10 text-teal-500 font-bold text-sm px-2">
                      Version 10
                    </div>
                  </div>

                  {/* p */}
                  <p className="text-gray-500 text-lg">
                    For almost 9 years I have been using Laravel as the backend
                    framework on nearly all my projects. I am a{" "}
                    <span className="text-teal-500 underline underline-offset-2">
                      Laravel Certificated Developer
                    </span>{" "}
                    and passed the certification exam with the Laravel
                    organization. Through out my time working with Laravel
                    I&apos;ve touched almost every part of their development
                    ecosystem; using the authentication scaffolding, payment
                    scaffolding, deployment management, and more...
                  </p>

                  {/* badges */}
                  <div className="flex items-center gap-3">
                    <div className="relative inline-flex items-center text-sm h-6 pl-5 pr-2 justify-center rounded bg-gray-500/10 text-gray-800 before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-gray-500 before:top-2 before:left-2">
                      Livewire
                    </div>

                    <div className="relative inline-flex items-center text-sm h-6 pl-5 pr-2 justify-center rounded bg-gray-500/10 text-gray-800 before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-gray-500 before:top-2 before:left-2">
                      Jetstream
                    </div>

                    <div className="relative inline-flex items-center text-sm h-6 pl-5 pr-2 justify-center rounded bg-gray-500/10 text-gray-800 before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-gray-500 before:top-2 before:left-2">
                      Nova
                    </div>

                    <div className="relative inline-flex items-center text-sm h-6 pl-5 pr-2 justify-center rounded bg-gray-500/10 text-gray-800 before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-gray-500 before:top-2 before:left-2">
                      Sactum
                    </div>

                    <div className="relative inline-flex items-center text-sm h-6 pl-5 pr-2 justify-center rounded bg-gray-500/10 text-gray-800 before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-gray-500 before:top-2 before:left-2">
                      Echo
                    </div>

                    <div className="relative inline-flex items-center text-sm h-6 pl-5 pr-2 justify-center rounded bg-gray-500/10 text-gray-800 before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-gray-500 before:top-2 before:left-2">
                      Cashier
                    </div>

                    <div className="relative inline-flex items-center text-sm h-6 pl-5 pr-2 justify-center rounded bg-gray-500/10 text-gray-800 before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-gray-500 before:top-2 before:left-2">
                      Forge
                    </div>

                    <div className="relative inline-flex items-center text-sm h-6 pl-5 pr-2 justify-center rounded bg-gray-500/10 text-gray-800 before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-gray-500 before:top-2 before:left-2">
                      Filament
                    </div>
                  </div>
                </div>
              </div>

              {/* --- Vue --- */}
              <div className="flex gap-5">
                {/* icon */}
                <div className="inline-flex items-center justify-center min-w-[56px] w-14 h-14 rounded overflow-hidden bg-emerald-500">
                  <SiVuedotjs size="28px" color="white" />
                </div>

                {/* content */}
                <div className="flex flex-col gap-3">
                  {/* header */}
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-medium">Vue</h1>
                    <div className="inline-flex items-center h-7 justify-center uppercase bg-teal-500/10 text-teal-500 font-bold text-sm px-2">
                      Version 3
                    </div>
                  </div>

                  {/* p */}
                  <p className="text-gray-500 text-lg">
                    For advanced front-ends I almost always use Vue JS, this
                    year moving all my projects to the latest release version 3
                    using the composition API. I am experienced using many of
                    the popular Vue plugins and frameworks.
                  </p>

                  {/* badges */}
                  <div className="flex items-center gap-3">
                    <div className="relative inline-flex items-center text-sm h-6 pl-5 pr-2 justify-center rounded bg-gray-500/10 text-gray-800 before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-gray-500 before:top-2 before:left-2">
                      Quasar
                    </div>

                    <div className="relative inline-flex items-center text-sm h-6 pl-5 pr-2 justify-center rounded bg-gray-500/10 text-gray-800 before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-gray-500 before:top-2 before:left-2">
                      Vueify
                    </div>

                    <div className="relative inline-flex items-center text-sm h-6 pl-5 pr-2 justify-center rounded bg-gray-500/10 text-gray-800 before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-gray-500 before:top-2 before:left-2">
                      Vue Formulate
                    </div>

                    <div className="relative inline-flex items-center text-sm h-6 pl-5 pr-2 justify-center rounded bg-gray-500/10 text-gray-800 before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-gray-500 before:top-2 before:left-2">
                      Inertia JS
                    </div>

                    <div className="relative inline-flex items-center text-sm h-6 pl-5 pr-2 justify-center rounded bg-gray-500/10 text-gray-800 before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-gray-500 before:top-2 before:left-2">
                      Headless UI
                    </div>
                  </div>
                </div>
              </div>

              {/* --- Tailwind CSS --- */}
              <div className="flex gap-5">
                {/* icon */}
                <div className="inline-flex items-center justify-center min-w-[56px] w-14 h-14 rounded overflow-hidden bg-sky-500">
                  <SiTailwindcss size="28px" color="white" />
                </div>

                {/* content */}
                <div className="flex flex-col gap-3">
                  {/* header */}
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-medium">Tailwind CSS</h1>
                  </div>

                  {/* p */}
                  <p className="text-gray-500 text-lg">
                    I started using Tailwind CSS since it&atops;s launch in 2018
                    and it quickly became a staple in all my projects. I
                    regularly use it when creating custom components because I
                    prefer to use native elements with styling over javascript
                    based components when possible. Using Purge and JIT
                    compiling to ensure the smallest file size and fatest page
                    load times.
                  </p>

                  {/* badges */}
                  <div className="flex items-center gap-3">
                    <div className="relative inline-flex items-center text-sm h-6 pl-5 pr-2 justify-center rounded bg-gray-500/10 text-gray-800 before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-gray-500 before:top-2 before:left-2">
                      Daisy
                    </div>

                    <div className="relative inline-flex items-center text-sm h-6 pl-5 pr-2 justify-center rounded bg-gray-500/10 text-gray-800 before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-gray-500 before:top-2 before:left-2">
                      Flowbite
                    </div>

                    <div className="relative inline-flex items-center text-sm h-6 pl-5 pr-2 justify-center rounded bg-gray-500/10 text-gray-800 before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-gray-500 before:top-2 before:left-2">
                      Mamba UI
                    </div>

                    <div className="relative inline-flex items-center text-sm h-6 pl-5 pr-2 justify-center rounded bg-gray-500/10 text-gray-800 before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-gray-500 before:top-2 before:left-2">
                      Headless UI
                    </div>
                  </div>
                </div>
              </div>

              {/* --- My SQL --- */}
              <div className="flex gap-5">
                {/* icon */}
                <div className="inline-flex items-center justify-center min-w-[56px] w-14 h-14 rounded overflow-hidden bg-cyan-900">
                  <SiMysql size="28px" color="white" />
                </div>

                {/* content */}
                <div className="flex flex-col gap-3">
                  {/* header */}
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-medium">MySQL</h1>
                  </div>

                  {/* p */}
                  <p className="text-gray-500 text-lg">
                    Nearly all of the projects I have worked on use relational
                    databases with MySQL, typically used with an ORM like
                    Laravel Eloquent for managing relationships. I&atops;m
                    comfortable using advanced data structures like pivot table,
                    polymorphic relationships, nested-set relationships,
                    recursive relationships, and more...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
