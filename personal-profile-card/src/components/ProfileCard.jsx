import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function ProfileCard(props) {
  return (
    <div className="bg-white shadow-2xl rounded-3xl p-6 text-center w-80 transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
      {/* Profile Image */}
      <div className="relative w-32 h-32 mx-auto mb-6">
        <img
          src={props.photo || "https://via.placeholder.com/150"} // Fallback image
          alt="profile"
          className="w-full h-full rounded-full border-4 border-blue-500 shadow-lg"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/150"; // Fallback image
          }}
        />
      </div>

      {/* Name and ID */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{props.name}</h2>
      <p className="text-gray-600 text-sm mb-6">{props.id}</p>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6">
        {props.instagram && (
          <a
            href={props.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-pink-600 hover:text-pink-500 transition-transform transform hover:scale-110"
          >
            <FaInstagram className="text-2xl" />
          </a>
        )}
        {props.linkedin && (
          <a
            href={props.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-blue-700 hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;