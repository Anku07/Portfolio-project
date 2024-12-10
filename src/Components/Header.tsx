"use client";
import React, { useState, useEffect } from "react";
import {
  Home,
  User,
  FileText,
  Image,
  Menu,
  Mail,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";

const Header = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = ["Photographer", "Freelancer", "Designer"];
  const deletingSpeed = 100;
  const pauseTime = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        setTypingSpeed(deletingSpeed);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <div className="fixed left-0 top-0 h-screen w-16 bg-white shadow-lg z-10">
        <nav className="flex h-full flex-col items-center justify-center py-4 space-y-4">
          <div className="rounded-full bg-blue-600 p-3">
            <Home className="h-6 w-6 text-white" />
          </div>
          <div className="p-3 hover:bg-gray-100 rounded-full">
            <User className="h-6 w-6 text-gray-600" />
          </div>
          <div className="p-3 hover:bg-gray-100 rounded-full">
            <FileText className="h-6 w-6 text-gray-600" />
          </div>
          <div className="p-3 hover:bg-gray-100 rounded-full">
            <Image className="h-6 w-6 text-gray-600" />
          </div>
          <div className="p-3 hover:bg-gray-100 rounded-full">
            <Menu className="h-6 w-6 text-gray-600" />
          </div>
          <div className="p-3 hover:bg-gray-100 rounded-full">
            <Mail className="h-6 w-6 text-gray-600" />
          </div>
        </nav>
      </div>

      <main className="ml-16 overflow-hidden">
        <div className="relative">
          <div className="h-[800px] w-full overflow-hidden sm:h-[500px] md:h-[400px] lg:h-[600px]">
            <div
              className="h-full w-full bg-cover bg-center opacity-50"
              style={{ backgroundImage: "url('/bgImage2.webp')" }}
            />
          </div>
          <div className="absolute h-full w-full inset-12 flex flex-col justify-center px-8">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">
              ANKITA SINGH
            </h1>
            <div className="flex items-center text-3xl">
              <span className="mr-2">I'm</span>
              <div className="flex items-center">
                <span className="text-blue-600 min-w-[180px]">{text}</span>
              </div>
            </div>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.linkedin.com/in/ankita-singh1996/" className="text-gray-600 hover:text-gray-900">
                <div className="p-3 hover:bg-gray-100 rounded-full">
                  <Linkedin className="h-6 w-6 text-gray-600" />
                </div>
              </a>
              <a href="https://github.com/Anku07" className="text-gray-600 hover:text-gray-900">
                <div className="p-3 hover:bg-gray-100 rounded-full">
                  <Github className="h-6 w-6 text-gray-600" />
                </div>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <div className="p-3 hover:bg-gray-100 rounded-full">
                  <Instagram className="h-6 w-6 text-gray-600" />
                </div>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                ></svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;
