import React, { useState } from 'react';

function Card({ title, description, imageSrc }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(true);
  }

  const handleCollapse = () => {
    setIsExpanded(false);
  }

  return (
    <>
      <div className="column is-4">
        <div style={{ border: '1px solid #ffffff', padding: '10px', height: '360px' }}>
          <img src={imageSrc} alt='Placeholder' style={{ maxWidth: '100%', maxHeight: '50%', objectFit: 'cover', display: 'block', margin: '0 auto' }} />
          <div style={{ marginTop: '10px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'cyan' }}>{title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'white', height: '3.6rem', overflow: 'hidden' }}>{description}</p>
            <p style={{ fontSize: '0.7rem', color: '#999' }}>10:30 AM - 1 April 2023</p>
            <button onClick={handleExpand} style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px', marginTop: '10px', display: 'block', margin: 'auto' }}>Read more</button>
          </div>
        </div>
      </div>
      {isExpanded && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ border: '1px solid #ddd', backgroundColor: '#fff', padding: '20px', maxWidth: '80vw', maxHeight: '80vh', overflow: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={imageSrc} alt='Placeholder' style={{ maxWidth: '50%', height: 'auto', alignSelf: 'center' }} />
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{title}</h3>
              <p style={{ fontSize: '0.9rem' }}>{description}</p>
              <p style={{ fontSize: '0.7rem', color: '#999' }}>10:30 AM - 1 April 2023</p>
              <button onClick={handleCollapse} style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px', marginTop: '10px', display: 'block', margin: 'auto' }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;

