
import { useState } from "react";
import { Calendar, MapPin, Phone, Mail, Clock, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AppointmentModal from "@/components/AppointmentModal";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";

const Index = () => {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  const services = [
    {
      id: 1,
      name: "Класичен маникир",
      description: "Професионален маникир со лакирање",
      price: "800 ден",
      duration: "45 мин",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      name: "Гел лак",
      description: "Долготраен гел лак во различни бои",
      price: "1200 ден",
      duration: "60 мин",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      name: "Френч маникир",
      description: "Елегантен френч стил",
      price: "1000 ден",
      duration: "50 мин",
      image: "https://images.unsplash.com/photo-1559994966-4e4d28e78e8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      name: "Nail Art",
      description: "Креативни дизајни и украси",
      price: "1500 ден",
      duration: "90 мин",
      image: "https://images.unsplash.com/photo-1632345031796-2ff5034487d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      name: "Педикир",
      description: "Комплетна нега на стапалата",
      price: "1000 ден",
      duration: "60 мин",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      name: "СПА третман",
      description: "Релаксирачки СПА за раце и стапала",
      price: "2000 ден",
      duration: "120 мин",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Марија Петковска",
      text: "Одличен сервис! Секогаш излегувам задоволна од салонот. Препорачувам!",
      rating: 5
    },
    {
      name: "Ана Николовска",
      text: "Најубавиот nail art во градот! Професионално и пријатно опкружување.",
      rating: 5
    },
    {
      name: "Елена Стојановска",
      text: "Долгогодишен клиент сум. Квалитетот е секогаш на највисоко ниво.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-pink-50 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-rose-400 mr-2" />
            <h1 className="text-6xl md:text-8xl font-bold text-gray-800">
              Bella Nails
            </h1>
            <Sparkles className="h-6 w-6 text-rose-400 ml-2" />
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Професионален салон за нега на нокти<br />
            <span className="text-rose-600 font-semibold">Вашата убавина е наша страст</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => setShowAppointmentModal(true)}
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Закажи термин
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-rose-500 text-rose-600 hover:bg-rose-50 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Погледни услуги
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Откријте ја нашата палета од професионални услуги за нега на нокти
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                За нас
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Bella Nails е премиум салон за нега на нокти кој веќе 5 години им пружа 
                професионални услуги на жените во Скопје. Нашиот тим од искусни мајстори 
                користи само најквалитетни производи и најсовремени техники.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Во нашиот салон, секоја клиентка се чувствува посебно. Создаваме 
                релаксирачка атмосфера каде што можете да се опуштите и да уживате 
                во процесот на убавина.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600 mb-2">500+</div>
                  <div className="text-gray-600">Задоволни клиенти</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600 mb-2">5</div>
                  <div className="text-gray-600">Години искуство</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Салон за нокти" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-rose-200 rounded-full opacity-30"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-rose-100 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Што велат нашите клиенти
            </h2>
            <p className="text-xl text-gray-600">
              Задоволството на нашите клиенти е нашата најголема награда
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-rose-500 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Контактирајте не
            </h2>
            <p className="text-xl opacity-90">
              Спремни сме да ви помогнеме да изгледате прекрасно
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-rose-200" />
                <CardTitle>Адреса</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>ул. Македонија 15</p>
                <p>1000 Скопје</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="text-center">
                <Phone className="h-12 w-12 mx-auto mb-4 text-rose-200" />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>+389 70 123 456</p>
                <p>+389 2 123 456</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-rose-200" />
                <CardTitle>Работно време</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Пон-Пет: 09:00-20:00</p>
                <p>Саб: 09:00-18:00</p>
                <p>Нед: Затворено</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={() => setShowAppointmentModal(true)}
              className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Закажи твој термин сега
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-rose-400 mr-2" />
              <h3 className="text-2xl font-bold">Bella Nails</h3>
              <Sparkles className="h-6 w-6 text-rose-400 ml-2" />
            </div>
            <p className="text-gray-400 mb-6">
              Професионален салон за нега на нокти
            </p>
            <div className="flex justify-center space-x-6">
              <Mail className="h-6 w-6 text-rose-400 hover:text-white cursor-pointer transition-colors" />
              <Phone className="h-6 w-6 text-rose-400 hover:text-white cursor-pointer transition-colors" />
              <MapPin className="h-6 w-6 text-rose-400 hover:text-white cursor-pointer transition-colors" />
            </div>
            <p className="text-gray-500 text-sm mt-8">
              © 2024 Bella Nails. Сите права задржани.
            </p>
          </div>
        </div>
      </footer>

      {/* Appointment Modal */}
      <AppointmentModal 
        isOpen={showAppointmentModal}
        onClose={() => setShowAppointmentModal(false)}
      />
    </div>
  );
};

export default Index;
