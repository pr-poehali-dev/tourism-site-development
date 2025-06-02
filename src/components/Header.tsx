import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Icon from "@/components/ui/icon";

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-full">
              <Icon name="Plane" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">TravelPro</span>
          </div>

          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList className="space-x-8">
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="text-gray-700 hover:text-blue-600 cursor-pointer"
                  onClick={() => scrollToSection("hero")}
                >
                  Главная
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="text-gray-700 hover:text-blue-600 cursor-pointer"
                  onClick={() => scrollToSection("destinations")}
                >
                  Направления
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="text-gray-700 hover:text-blue-600 cursor-pointer"
                  onClick={() => scrollToSection("services")}
                >
                  Услуги
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="text-gray-700 hover:text-blue-600 cursor-pointer"
                  onClick={() => scrollToSection("contact")}
                >
                  Контакты
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
