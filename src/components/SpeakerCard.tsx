import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { Speaker } from '../data/speakers';
import AnimateOnScroll from './AnimateOnScroll';

interface SpeakerCardProps {
  speaker: Speaker;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => {
  return (
    <AnimateOnScroll animation="slideUp">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
          <p className="text-indigo-600 mb-2">{speaker.role} at {speaker.company}</p>
          <p className="text-gray-600 mb-4">{speaker.bio}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {speaker.topics.map((topic, index) => (
              <span
                key={index}
                className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm"
              >
                {topic}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            {speaker.social.twitter && (
              <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {speaker.social.linkedin && (
              <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {speaker.social.github && (
              <a href={speaker.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                <Github className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

export default SpeakerCard;