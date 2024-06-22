'use client';
import { useState } from 'react';

export default function VideoUploadForm() {
  const [videoLink, setVideoLink] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ challengeId: 1, userId: 1, videoLink }), // Replace with actual IDs
      });
      const data = await response.json();
      console.log('Video uploaded:', data);
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={videoLink}
        onChange={(e) => setVideoLink(e.target.value)}
        placeholder="Video Link"
      />
      <button type="submit">Upload Video</button>
    </form>
  );
}
