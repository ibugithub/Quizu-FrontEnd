import React from 'react';
import Image from 'next/image';
import TypeScriptImage from '../../public/images/typescript.png';
import TailwindImage from '../../public/images/tailwindcss.png';
import NextJsImage from '../../public/images/nextjs.png';
import AxiosImage from '../../public/images/axios.png';
import DjangoImage from '../../public/images/django.png';
import DRFImage from '../../public/images/drf.png';
import JWTImage from '../../public/images/jwt.png';
import PostgreSQLImage from '../../public/images/PostgresSQL.png'
import VercelImage from '../../public/images/verc.png'
import RenderImage from '../../public/images/render.png';
import SubbaseImage from '../../public/images/supbase.png';
import ReduxImage from '../../public/images/redux.png'

export const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-400 to-blue-500 py-8">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">About Me</h2>
        <p className="text-lg text-gray-700 mb-8 text-center">I&apos;m Ummey Meher Jahan, a Computer Science student at Georgia State University with a focus on Machine Learning and Artificial Intelligence, expecting to graduate in May 2024. I’ve horn my skills in Java, JavaScript, Python, and more, with experience in AWS, Git, and databases like MongoDB. As a Software Engineer Intern, I found solutions for software bugs and loved creating new project, and as a Math Tutor, I created tailored lessons for Calculus II. I&apos;m an active member of Women in Technology and Girls++, passionate about both tech and community.</p>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Project Description</h2>
        <p className="text-lg text-gray-700 mb-8 text-center">I chose this project because I wanted to create a platform for sharing and discovering stories from around the world. I&apos;m passionate about storytelling and wanted to provide a space for both readers and writers to connect.</p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Technology Used</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">Frontend</h3>
            <div className="flex items-center justify-center mb-4">
              <Image src={TypeScriptImage} alt="TypeScript" width={48} height={48} className="mr-4" />
              <p>TypeScript</p>
            </div>
            <div className="flex items-center justify-center mb-4">
              <Image src={TailwindImage} alt="Tailwind CSS" width={48} height={48} className="mr-4" />
              <p>Tailwind CSS</p>
            </div>
            <div className="flex items-center justify-center mb-4">
              <Image src={NextJsImage} alt="Next.js" width={48} height={48} className="mr-4" />
              <p>Next.js</p>
            </div>
            <div className="flex items-center justify-center mb-4">
              <Image src={AxiosImage} alt="Axios" width={48} height={48} className="mr-4" />
              <p>Axios</p>
            </div>
            <div className="flex items-center justify-center mb-4">
              <Image src={ReduxImage} alt="Redux" width={48} height={48} className="mr-4" />
              <p>Redux</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">Backend</h3>
            <div className="flex items-center justify-center mb-4">
              <Image src={DjangoImage} alt="Django" width={48} height={48} className="mr-4" />
              <p>Django</p>
            </div>
            <div className="flex items-center justify-center mb-4">
              <Image src={DRFImage} alt="Django Rest Framework" width={48} height={48} className="mr-4" />
              <p>Django Rest Framework</p>
            </div>
            <div className="flex items-center justify-center mb-4">
              <Image src={JWTImage} alt="JWT" width={48} height={48} className="mr-4" />
              <p>JWT</p>
            </div>
            <div className="flex items-center justify-center mb-4">
              <Image src={PostgreSQLImage} alt="PostgreSQL" width={48} height={48} className="mr-4" />
              <p>PostgreSQL</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">Deployment</h3>
            <div className="flex items-center justify-center mb-4">
              <Image src={VercelImage} alt="Vercel" width={48} height={48} className="mr-4" />
              <p>Vercel</p>
            </div>
            <div className="flex items-center justify-center mb-4">
              <Image src={RenderImage} alt="Render" width={48} height={48} className="mr-4" />
              <p>Render</p>
            </div>
            <div className="flex items-center justify-center mb-4">
              <Image src={SubbaseImage} alt="Subbase" width={48} height={48} className="mr-4" />
              <p>Subbase</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">What I Learned</h2>
        <ul className="pl-6 mb-8 ' list-inside">
          <li className="mb-2 text-lg text-gray-700">
            <span className="text-green-400">&#8594;</span> Gained valuable experience and knowledge in deployment processes and server configurations.
          </li>
          <li className="mb-2 text-lg text-gray-700">
            <span className="text-green-400">&#8594;</span> Enhanced troubleshooting skills by encountering and resolving issues specific to Next.js.
          </li>
          <li className="mb-2 text-lg text-gray-700">
            <span className="text-green-400">&#8594;</span> Improved ability to handle various errors effectively, enhancing troubleshooting and debugging skills.
          </li>
          <li className="mb-2 text-lg text-gray-700">
            <span className="text-green-400">&#8594;</span> Successfully deployed both frontend and backend components on AWS, ensuring seamless communication and overcoming initial challenges.
          </li>
        </ul>
      </div>
    </div>
  );
};