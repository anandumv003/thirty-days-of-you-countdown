
import { X, Heart, Sparkles, Star } from 'lucide-react';
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
      {/* Enhanced romantic backdrop with her color scheme */}
      <div 
        className="absolute inset-0 bg-navy-900/20 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal with enhanced romantic styling in her favorite colors */}
      <div className="relative max-w-2xl w-full max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl animate-scale-in border border-blue-100 hover-lift">
        {/* Floating magical elements inside modal with her colors */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 z-30">
          <Heart className="absolute top-4 right-8 w-4 h-4 text-pink-400 animate-float" />
          <Sparkles className="absolute top-8 left-6 w-3 h-3 text-blue-400 animate-twinkle" />
          <Star className="absolute bottom-8 right-6 w-3 h-3 text-navy-400 animate-dreamy-sway" />
          <Heart className="absolute bottom-12 left-8 w-2 h-2 text-pink-400 animate-heart-beat" />
        </div>

        {/* Header with enhanced photo effects */}
        <div className="relative">
          <div className="relative overflow-hidden">
            <img
              src={dayData.imageUrl}
              alt={dayData.title}
              className="w-full h-64 md:h-80 object-cover transition-all duration-700 hover:scale-110"
              onError={(e) => {
                // Fallback to beautiful gradient if image doesn't exist
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.className += ' bg-gradient-to-br from-pink-400 via-blue-400 to-navy-600';
                }
              }}
            />
            
            {/* Beautiful layered overlays with her colors */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-pink-500/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-pink-400/20"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-navy-800/30 via-transparent to-blue-400/20"></div>
            
            {/* Magical shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer opacity-0 hover:opacity-100 transition-opacity duration-1000"></div>
          </div>
          
          {/* Enhanced close button with her color styling */}
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm hover:bg-white/40 text-white rounded-full transition-all duration-300 hover:scale-110 animate-romantic-glow z-20"
          >
            <X className="w-5 h-5" />
          </Button>

          {/* Enhanced day number badge with her colors */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center border-2 border-pink-200/50 animate-love-pulse hover:scale-110 transition-transform duration-300 z-20">
            <span className="text-lg font-medium text-navy-700 animate-gentle-bounce">{dayData.day}</span>
          </div>

          {/* Title overlay with enhanced animation and effects */}
          <div className="absolute bottom-4 left-4 right-4 animate-fade-in animate-delay-300 z-20">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-2 animate-dreamy-sway drop-shadow-lg">
              {dayData.title}
            </h2>
            {/* Beautiful decorative line */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full animate-romantic-glow"></div>
          </div>
        </div>

        {/* Content with enhanced romantic styling in her colors */}
        <div className="p-6 md:p-8 bg-gradient-to-b from-white via-blue-50/20 to-pink-50/30 relative">
          {/* More floating elements in content area with her colors */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
            <Heart className="absolute top-4 right-12 w-6 h-6 text-pink-400 animate-float-delayed" />
            <Sparkles className="absolute bottom-8 left-8 w-4 h-4 text-blue-400 animate-twinkle animate-delay-500" />
            <Star className="absolute top-1/2 right-4 w-3 h-3 text-navy-400 animate-magic-spin" />
          </div>

          {/* Enhanced text content */}
          <div className="prose prose-lg max-w-none animate-fade-in animate-delay-500">
            <p className="text-navy-700 leading-relaxed font-light text-base md:text-lg relative">
              {dayData.message}
              {/* Beautiful text decoration */}
              <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-pink-300 to-blue-300 rounded-full opacity-30"></span>
            </p>
          </div>

          {/* Enhanced romantic footer with her colors */}
          <div className="mt-8 flex justify-center animate-fade-in animate-delay-700">
            <div className="flex items-center gap-2 text-navy-600 bg-gradient-to-r from-blue-50/80 to-pink-50/80 rounded-full px-6 py-3 backdrop-blur-sm border border-blue-200/50 animate-romantic-glow shadow-lg">
              <Heart className="w-5 h-5 fill-current animate-heart-beat text-pink-500" />
              <span className="text-sm font-light animate-gentle-bounce animate-delay-200">With all my love</span>
              <Heart className="w-5 h-5 fill-current animate-heart-beat animate-delay-300 text-pink-500" />
            </div>
          </div>

          {/* Additional magical sparkles in her colors */}
          <div className="absolute bottom-4 left-4">
            <Sparkles className="w-4 h-4 text-blue-400 opacity-40 animate-twinkle" />
          </div>
          <div className="absolute bottom-6 right-8">
            <Heart className="w-3 h-3 text-pink-400 opacity-50 animate-float" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayModal;
