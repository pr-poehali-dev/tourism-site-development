import { Card } from "@/components/ui/card";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
    title: "Горные вершины",
    location: "Кавказ",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=400&fit=crop",
    title: "Морские пейзажи",
    location: "Черное море",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&h=400&fit=crop",
    title: "Городская архитектура",
    location: "Европа",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=400&fit=crop",
    title: "Лесные тропы",
    location: "Алтай",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
    title: "Закаты в горах",
    location: "Урал",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=400&fit=crop",
    title: "Пляжный отдых",
    location: "Крым",
  },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Фотогалерея</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Взгляните на красоты, которые ждут вас в наших путешествиях
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <Card
              key={image.id}
              className="group overflow-hidden border-0 shadow-lg hover-scale"
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
