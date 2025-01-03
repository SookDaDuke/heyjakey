import React from 'react';

const PersonalWebsite = () => {
  const technologies = ['React', 'Solidity', 'TypeScript', 'Phaser'];
  const former = [
    '@ARTMAGIC LABS',
    '@UppercaseBrands',
    '@WeWorkLabs',
    '@TextSavvy',
    '@AllianceBernstein',
    '@MaximGroup'
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      <h1 className="text-5xl font-bold mb-4">Hey! I'm Jake Sucoff</h1>
      
      <div className="space-y-6 mb-8">
        <p className="text-lg">
          I'm an entrepreneur and marketing executive bridging the worlds of marketing, technology and content. 
          I combine no-nonsense strategic thinking with creative execution to solve problems across various industries.
        </p>
        
        <p className="text-lg">
          You might know me from my hit podcast DTC WTF or one of my projects like TextSavvy or WeWork Labs. 
          I like to make music, host events, and do pretty much anything that brings people together.
        </p>
        
        <p className="text-lg">
          I offer consulting and fractional CMO services for growing teams and founders. 
          If you value honesty and are a decent human I'd love to work with you!
        </p>
      </div>

      <div className="flex gap-8">
        <div className="w-1/2 space-y-6">
          <img src="/api/placeholder/400/300" alt="placeholder" className="w-full rounded-lg shadow-lg" />
          <div className="text-center">
            <a 
              href="tel:917-727-3503" 
              className="inline-block bg-blue-500 text-white text-xl font-bold py-4 px-8 rounded-lg hover:bg-blue-600 transition-colors"
            >
              SAY HEY!
            </a>
          </div>
        </div>

        <div className="w-1/2 space-y-8">
          <p className="text-lg font-bold">MONTCLAIR NJ</p>
          
          <div className="space-y-2">
            <p>🎙 Host of <a href="https://creators.spotify.com/pod/show/dtcwtf" className="text-blue-500 hover:text-blue-700 underline">DTC WTF</a></p>
            <p>💼 Founder of <a href="https://www.patientprocure.com/" className="text-blue-500 hover:text-blue-700 underline">Patient Procure</a></p>
            <p>🤫 Working on something new</p>
            <p>👰 2x Wedding Officiant & 4x Best Man</p>
          </div>

          <p className="text-lg">
            Marketing Executive. Entrepreneur. Software Engineer. Community Builder. 
            Startup Advisor. Bread Baker. Concert Goer. NY Rangers Enthusiast. 
            Lover of Cheese. Petter of Dogs.
          </p>

          <div className="space-y-4">
            <h2 className="font-bold">Technologies:</h2>
            <div className="space-y-1">
              {technologies.map(tech => (
                <p key={tech}>{tech}</p>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold">Formerly</h2>
            <div className="space-y-1">
              {former.map(company => (
                <p key={company}>{company}</p>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p>⚓️ 🎮 VU</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalWebsite;