import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, UserCircle } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  title: string;
  testimonial: string;
  avatarSrc?: string;
  rating?: number; // Rating out of 5
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  testimonial,
  avatarSrc,
  rating = 5,
}) => {
  return (
    <Card className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            {avatarSrc ? <AvatarImage src={avatarSrc} alt={name} /> : null}
            <AvatarFallback>
              {avatarSrc ? name.substring(0, 2).toUpperCase() : <UserCircle size={24} className="text-gray-400" />}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-gray-600">{title}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <blockquote className="text-gray-700 italic mb-4">
          "{testimonial}"
        </blockquote>
        {rating > 0 && (
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={20}
                className={index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;