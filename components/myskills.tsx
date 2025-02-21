import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaReact, FaPython, FaAws, FaDocker } from 'react-icons/fa';
import { SiFastapi, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiTypescript } from 'react-icons/si';

export default function MySkills() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '10px', color: 'white' }}>
        Tech Stack <span style={{ fontSize: '1.5rem' }}>🚀</span>
      </h2>

      <Marquee play={true} speed={40} pauseOnHover={true} gradient={false} delay={2}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '50px',
            minHeight: '50px',
            padding: '10px',
          }}
        >
          {[  
            { Icon: FaReact, title: 'React', color: '#61DAFB' },
            { Icon: SiNextdotjs, title: 'Next.js', color: 'white' },
            { Icon: SiJavascript, title: 'JavaScript', color: '#F7DF1E' },
            { Icon: SiTypescript, title: 'TypeScript', color: '#3178C6' },
            { Icon: FaPython, title: 'Python', color: '#3776AB' },
            { Icon: SiFastapi, title: 'FastAPI', color: '#009688' },
            { Icon: SiMongodb, title: 'MongoDB', color: '#47A248' },
            { Icon: SiMysql, title: 'MySQL', color: '#4479A1' },
            { Icon: FaAws, title: 'AWS', color: '#FF9900' },
            { Icon: FaDocker, title: 'Docker', color: '#2496ED' },
          ].map(({ Icon, title, color }, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
              <Icon title={title} color={color} size={50} />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
