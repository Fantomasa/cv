import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-black-100 text-white py-3 border-t ">
      <div className="container mx-auto text-center">
        {/* <p className="text-lg font-semibold mb-2">Ivaylo Georgiev</p> */}
        {/* <p className="text-sm">Web Developer | Data Enthusiast | Passionate About Technology</p> */}
        <div className="mt-2 flex gap-5 w-full justify-center">
          <Link href="https://www.linkedin.com/in/ivaylo-georgiev-a018821b6/" className="text-blue-300">
            <CiLinkedin size={35} />
          </Link>
          <Link href="https://github.com/Fantomasa">
            <FaGithub size={35} />
          </Link>
          <Link href="mailto:ivailoinfo@gmail.com">
            <SiGmail size={35} />
          </Link>
        </div>
        <p className="mt-4 text-xs">&copy; 2024 Ivaylo Georgiev. All rights reserved.</p>
      </div>
    </footer>
  );
}
