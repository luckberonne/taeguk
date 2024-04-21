import { Contact } from "@/components/sections/contact";
import News from "@/components/sections/news";

export interface NewsItem {
  title: string;
  previewText: string;
  fullText: string;
}

export default async function App() {
  // newsData.ts

  const newsData: NewsItem[] = [
    {
      title: 'Título de la noticia 1',
      previewText: 'Texto de vista previa de la noticia 1...',
      fullText: 'Texto completo de la noticia 1...',
    },
    {
      title: 'Título de la noticia 2',
      previewText: 'Texto de vista previa de la noticia 2...',
      fullText: 'Texto completo de la noticia 2...',
    },
    // Agrega más noticias según sea necesario
  ];
  return (
    <div className="h-screen py-2 w-full">
      <News data={ newsData } />
    </div>
  );
}
