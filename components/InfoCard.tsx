
import React from 'react';
import { DamageInfo } from '../types';
import SpeakButton from './SpeakButton';
import ShareButton from './ShareButton';

interface InfoCardProps {
  item: DamageInfo;
}

const InfoCard: React.FC<InfoCardProps> = ({ item }) => {
  const textToSpeak = `${item.title}. ${item.description}`;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-indigo-500 hover:shadow-lg transition-all duration-300 h-full relative group">
      <div className="absolute top-2 left-2 flex flex-col gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
        <SpeakButton text={textToSpeak} />
        <ShareButton title={item.title} text={item.description} />
      </div>
      <div className="text-4xl mb-4 text-center">{item.icon}</div>
      <h3 className="text-xl font-bold text-slate-800 mb-2 text-center">{item.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed text-right">{item.description}</p>
    </div>
  );
};

export default InfoCard;
