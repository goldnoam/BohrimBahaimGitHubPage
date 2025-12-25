
import React from 'react';
import { DamageInfo } from '../types';
import ShareButton from './ShareButton';
import SpeakButton from './SpeakButton';

interface InfoCardProps {
  item: DamageInfo;
}

const InfoCard: React.FC<InfoCardProps> = ({ item }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md p-5 md:p-6 border-t-4 border-indigo-500 hover:shadow-lg transition-all duration-300 h-full relative group"
      role="article"
    >
      <div className="absolute top-2 left-2 flex flex-col gap-2 md:opacity-60 group-hover:opacity-100 transition-opacity">
        <ShareButton title={item.title} text={item.description} className="w-10 h-10 md:w-9 md:h-9" />
        <SpeakButton text={`${item.title}. ${item.description}`} className="w-10 h-10 md:w-9 md:h-9" />
      </div>
      <div className="text-3xl md:text-4xl mb-4 text-center" aria-hidden="true">{item.icon}</div>
      <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 text-center leading-tight">{item.title}</h3>
      <p className="text-slate-600 text-xs md:text-sm leading-relaxed text-right">{item.description}</p>
    </div>
  );
};

export default InfoCard;
