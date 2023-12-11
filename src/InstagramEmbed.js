import React, { useEffect } from 'react';

const InstagramEmbed = ({ url }) => {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = 'https://www.instagram.com/embed.js'; // This should be the URL to the embed.js script
      script.onload = () => {
        window.instgrm.Embeds.process();
      };
      document.body.appendChild(script);
    }
  }, [url]);
  

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
    />
  );
};

export default InstagramEmbed;
