import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-full">
                <Icon name="Plane" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">TravelPro</span>
            </div>
            <p className="text-gray-300">
              Ваш надёжный партнёр в мире путешествий. Создаём незабываемые
              впечатления уже более 10 лет.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Контакты</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-blue-400" />
                <span className="text-gray-300">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-blue-400" />
                <span className="text-gray-300">info@travel-agency.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} className="text-blue-400" />
                <span className="text-gray-300">
                  г. Москва, ул. Тверская, 15
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Услуги</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Туры по России</li>
              <li>Зарубежные поездки</li>
              <li>Корпоративный туризм</li>
              <li>Визовая поддержка</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <div className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                <Icon name="Users" size={20} className="text-white" />
              </div>
              <div className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                <Icon name="Camera" size={20} className="text-white" />
              </div>
              <div className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                <Icon name="Mail" size={20} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 TravelPro. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
