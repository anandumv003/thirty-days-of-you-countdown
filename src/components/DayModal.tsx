
import { X, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface DayData {
  day: number;
  title: string;
  message: string;
  imageUrl: string;
}

interface DayModalProps {
  dayData: DayData;
  isOpen: boolean;
  onClose: () => void;
}

const DayModal = ({ dayData, isOpen, onClose }: DayModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Romantic backdrop */}
      <div 
        className="absolute inset-0 bg-rose-900/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal with romantic styling */}
      <div className="relative max-w-2xl w-full max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl animate-scale-in border border-rose-100">
        {/* Header */}
        <div className="relative">
          <img
            src={dayData.imageUrl}
            alt={dayData.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent" />
          
          {/* Close button with romantic styling */}
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm hover:bg-white/40 text-white rounded-full"
          >
            <X className="w-5 h-5" />
          </Button>

          {/* Day number badge with romantic colors */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center border border-rose-200">
            <span className="text-lg font-medium text-rose-700">{dayData.day}</span>
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-2">
              {dayData.title}
            </h2>
          </div>
        </div>

        {/* Content with romantic styling */}
        <div className="p-6 md:p-8 bg-gradient-to-b from-white to-rose-50/30">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed font-light text-base md:text-lg">
              {dayData.message}
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2 text-rose-600">
              <Heart className="w-5 h-5 fill-current animate-pulse" />
              <span className="text-sm font-light">With all my love</span>
              <Heart className="w-5 h-5 fill-current animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayModal;
