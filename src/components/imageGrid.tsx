"use client"; // Add this line at the top

import React, { useState } from 'react'

interface Image {
  filename: string;
  comments: string[];
}

interface ImageGridProps {
  images: Image[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = async (imageId: string) => {
    await fetch('/api/addComment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ imageId, comment }),
    });
    setComment(''); // Clear input after submission
  };

  return (
    <div className="grid-container">
      {images.map((image, index) => (
        <div className="polaroid" key={index}>
          <img src={`/uploads/${image.filename}`} alt="Lost Item" />
          <div className="comments">
            {image.comments.map((comment, i) => (
              <p key={i}>{comment}</p>
            ))}
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment"
              style={{
                backgroundColor: '#333',
                color: '#fff',
                border: 'none',
                padding: '10px',
                fontSize: '16px',
                borderRadius: '5px',
              }}
            />
            <button
              onClick={() => handleCommentSubmit(image.filename)}
              style={{
                backgroundColor: '#333',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                fontSize: '16px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
          </div>
        </div>
      ))}
      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 20px;
          padding: 20px;
          background-color: #333;
          color: #fff;
        }
        .polaroid {
          width: 300px;
          background-color: #fff;
          padding: 10px;
          text-align: center;
          box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
          margin: 20px 0;
          border: 1px solid #333;
        }
        .polaroid img {
          width: 100%;
          height: auto;
          border-radius: 5px;
        }
        .comments {
          background-color: #333;
          padding: 10px;
          margin-top: 10px;
          border-top: 1px solid #fff;
        }
        .comments p {
          color: #fff;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default ImageGrid;