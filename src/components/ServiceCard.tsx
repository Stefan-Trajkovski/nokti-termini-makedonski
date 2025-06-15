
import { Clock, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden hover:scale-105">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Badge className="absolute top-4 right-4 bg-pink-500 hover:bg-pink-600">
          {service.price}
        </Badge>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
          {service.name}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">{service.duration}</span>
          </div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
