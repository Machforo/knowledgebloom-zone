import { Link } from "react-router-dom";
import { Clock, BookOpen, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  lessons: number;
  rating: number;
  image: string;
  category: string;
}

export const CourseCard = ({
  id,
  title,
  description,
  duration,
  level,
  lessons,
  rating,
  image,
  category,
}: CourseCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-hover">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
          {category}
        </Badge>
      </div>
      
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline">{level}</Badge>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <CardTitle className="line-clamp-1 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            <span>{lessons} lessons</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        <Button asChild className="flex-1" variant="outline">
          <Link to={`/courses/${id}`}>View Details</Link>
        </Button>
        <Button asChild className="flex-1">
          <Link to={`/courses/${id}`}>Join Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
