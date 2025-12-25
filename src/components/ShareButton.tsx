
import React from 'react';

interface ShareButtonProps {
  title: string;
  text: string;
  className?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ title, text, className = "" }) => {
  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const shareData = {
      title: `בוחרים בחיים: ${title}`,
      text: `${title}\n\n${text}\n\nלמידע נוסף:`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share failed or cancelled', err);
      }
    } else {
      // Fallback to email
      const mailtoLink = `mailto:?subject=${encodeURIComponent(shareData.title)}&body=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <button 
      onClick={handleShare}
      title="שתף מידע זה"
      aria-label={`שתף מידע על ${title}`}
      className={`p-2 rounded-full bg-white/80 hover:bg-white text-slate-400 hover:text-indigo-600 shadow-sm transition-all flex items-center justify-center border border-slate-100 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${className}`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6a3 3 0 100-2.684l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    </button>
  );
};

export default ShareButton;
