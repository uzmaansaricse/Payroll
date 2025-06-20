import React, { useEffect, useState } from 'react';
import Container from '../components/Container';

export default function Slider3() {
  const [open, setOpen] = useState(0);

  const images = [
    {
      imgs: 'https://www.techbro24.com/img/team-2.png',
      title: 'Ashish 1',
      name: 'Ashish Sablaniya',
      hr: 'Co-Founder & CEO',
    },
    {
      imgs: '/images/profile.jpeg',
      title: 'Anuj 2',
      name: 'Anuj Saini',
      hr: 'Hr Google',
    },
    {
      imgs: '/images/newpr.jpeg',
      title: 'Prince 3',
      name: 'Prince Saini',
      hr: 'Hr Flipcart',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setOpen((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);
  const { imgs, name, title, hr } = images[open]
  return (
    <Container>
      <div className="w-full py-8 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 min-h-[300px] items-center">
          <div className="flex flex-col items-center gap-4">
            <img
              src={imgs}
              className="w-64 h-64 object-cover rounded-full"
              alt={name}
            />
            <div className="text-xl font-semibold">{name}</div>
            <div className="text-gray-600">{hr}</div>
          </div>
          <div className="flex justify-center items-center h-full">
            <div className="text-4xl font-bold text-black text-center">
              {title}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
