import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-400 via-blue-500 to-blue-600 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 left-10 animate-float">
        <Icon name="Plane" size={60} className="text-white/30" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float delay-1000">
        <Icon name="Camera" size={40} className="text-white/30" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Откройте мир
          <span className="block text-amber-300">вместе с нами</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in delay-300">
          Незабываемые путешествия, уникальные маршруты и профессиональное
          сопровождение
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3"
          >
            <Icon name="MapPin" size={20} />
            Выбрать тур
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3"
          >
            <Icon name="Phone" size={20} />
            Связаться с нами
          </Button>
        </div>
      </div>
    </section>
  );
}
