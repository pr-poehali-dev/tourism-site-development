import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const destinations = [
  {
    id: 1,
    title: "Горные походы",
    description: "Покорите вершины Кавказа и Алтая",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    price: "от 25 000 ₽",
    duration: "5-7 дней",
    icon: "Mountain",
  },
  {
    id: 2,
    title: "Морские круизы",
    description: "Путешествия по Черному и Средиземному морю",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    price: "от 45 000 ₽",
    duration: "7-14 дней",
    icon: "Ship",
  },
  {
    id: 3,
    title: "Городские туры",
    description: "Исследуйте культурные столицы Европы",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop",
    price: "от 35 000 ₽",
    duration: "3-5 дней",
    icon: "Building",
  },
];

export default function Destinations() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Популярные направления
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите свое идеальное путешествие из наших проверенных маршрутов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="group hover-scale overflow-hidden border-0 shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 rounded-full p-2">
                  <Icon
                    name={destination.icon as any}
                    size={20}
                    className="text-blue-600"
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {destination.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    {destination.price}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Icon name="Clock" size={16} className="mr-1" />
                    {destination.duration}
                  </span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
