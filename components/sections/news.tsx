'use client';
// components/CardList.tsx
import { useState } from 'react';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';

interface CardData {
  title: string;
  previewText: string;
  fullText: string;
}

interface Props {
  data: CardData[];
}

const News: React.FC<Props> = ({ data }) => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 gap-6 m-6">
      {data.map((item, index) => (
        <div key={index} className="w-full bg-cardColor rounded-lg overflow-hidden shadow-md">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.title}</div>
            <p className="text-base">{item.previewText}</p>
            <button
              onClick={() => toggleCard(index)}
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {expandedCard === index ? 'Cerrar' : 'Ver más'}
            </button>
            {expandedCard === index && (
              <div className="mt-4">
                <p>{item.fullText}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
