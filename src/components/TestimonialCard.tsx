import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card"; // Removed CardHeader
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, UserCircle, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  title: string;
  testimonial: string;
  avatarSrc?: string;
  rating?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  testimonial,
  avatarSrc,
  rating = 5,
}) => {
  return (
    <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl h-full flex flex-col p-6 md:p-8">
      <div className="relative mb-6">
        <Quote className="absolute -top-2 -left-2 w-12 h-12 text-blue-100 transform opacity-75" />
        <p className="text-gray-700 italic text-base md:text-lg leading-relaxed relative z-10">
          "{testimonial}"
        </p>
      </div>
      
      {rating > 0 && (
        <div className="flex items-center my-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={20}
              className={index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
      )}

      <CardFooter className="mt-auto pt-6 border-t border-gray-100 p-0">
        <div className="flex items-center space-x-4">
          <Avatar className="h-14 w-14">
            {avatarSrc ? <AvatarImage src={avatarSrc} alt={name} className="object-cover" /> : null}
            <AvatarFallback className="text-lg">
              {avatarSrc ? name.substring(0, 2).toUpperCase() : <UserCircle size={28} className="text-gray-400" />}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-md font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-gray-600">{title}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;