import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const services = [
  {
    id: 1,
    title: "Индивидуальные туры",
    description: "Создаем уникальные маршруты под ваши пожелания и бюджет",
    features: ["Персональный гид", "Гибкий график", "Любые направления"],
    price: "от 50 000 ₽",
    icon: "User",
  },
  {
    id: 2,
    title: "Групповые путешествия",
    description: "Присоединяйтесь к готовым группам единомышленников",
    features: ["Экономия бюджета", "Новые знакомства", "Проверенные маршруты"],
    price: "от 25 000 ₽",
    icon: "Users",
  },
  {
    id: 3,
    title: "Корпоративные туры",
    description: "Организуем выездные мероприятия для вашей команды",
    features: ["Тимбилдинг", "Деловая программа", "Полная организация"],
    price: "от 75 000 ₽",
    icon: "Building2",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессиональный подход к организации любых видов путешествий
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="hover-scale border-0 shadow-xl bg-white"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon
                      name={service.icon as any}
                      size={32}
                      className="text-blue-600"
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-700 flex items-center justify-center"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-500 mr-2"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-blue-600 mb-4">
                    {service.price}
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Заказать услугу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
