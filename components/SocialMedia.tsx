import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

interface SocialMediaProps {
  instagramLink: string;
  linkedinLink: string;
  twitterLink: string;
  githubLink: string;
  youtubeLink: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({
  instagramLink,
  linkedinLink,
  twitterLink,
  githubLink,
  youtubeLink,
}) => {
  return (
    <div className="flex space-x-4">
      {/* Instagram */}
      <a
        href={instagramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-pink-500"
      >
        <FaInstagram size={24} />
      </a>

      {/* LinkedIn */}
      <a
        href={linkedinLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500"
      >
        <FaLinkedin size={24} />
      </a>

      {/* Twitter */}
      <a
        href={twitterLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-400"
      >
        <FaTwitter size={24} />
      </a>

      {/* GitHub */}
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-800"
      >
        <FaGithub size={24} />
      </a>

      {/* YouTube */}
      <a
        href={youtubeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-red-500"
      >
        <FaYoutube size={24} />
      </a>
    </div>
  );
};

export default SocialMedia;
