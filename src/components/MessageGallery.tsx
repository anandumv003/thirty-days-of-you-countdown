
import { X, Heart, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DayData {
  day: number;
  title: string;
  message: string;
  imageUrl: string;
}

interface MessageGalleryProps {
  messages: DayData[];
  isOpen: boolean;
  onClose: () => void;
}

const MessageGallery = ({ messages, isOpen, onClose }: MessageGalleryProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with her favorite colors */}
      <div 
        className="absolute inset-0 bg-navy-900/40 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal with her color scheme */}
      <div className="relative max-w-4xl w-full max-h-[90vh] rounded-3xl bg-white shadow-2xl animate-scale-in overflow-hidden">
        {/* Header with her favorite colors */}
        <div className="bg-gradient-to-r from-blue-50 to-pink-50 px-6 py-4 border-b border-blue-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-navy-600" />
              <div>
                <h2 className="text-2xl font-light text-navy-800">Message Gallery</h2>
                <p className="text-sm text-navy-600 font-light">
                  {messages.length} unlocked messages
                </p>
              </div>
            </div>
            
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="hover:bg-white/50 text-navy-600 rounded-full"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <ScrollArea className="h-[calc(90vh-100px)]">
          <div className="p-6">
            <div className="grid gap-6">
              {messages.map((dayData) => (
                <div
                  key={dayData.day}
                  className="bg-gradient-to-r from-white to-blue-50/30 rounded-2xl overflow-hidden border border-blue-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="md:flex">
                    {/* Image */}
                    <div className="md:w-1/3">
                      <img
                        src={dayData.imageUrl}
                        alt={dayData.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-medium text-navy-700">
                            {dayData.day}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-navy-800 mb-2">
                            {dayData.title}
                          </h3>
                          <p className="text-navy-700 text-sm leading-relaxed font-light">
                            {dayData.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {messages.length === 0 && (
              <div className="text-center py-12">
                <Heart className="w-12 h-12 text-navy-300 mx-auto mb-4" />
                <p className="text-navy-500 font-light">
                  No messages unlocked yet. Come back tomorrow!
                </p>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default MessageGallery;
