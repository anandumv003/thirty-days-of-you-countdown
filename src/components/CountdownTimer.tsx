import { useState, useEffect } from 'react';
import { Clock, Heart, Sparkles } from 'lucide-react';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-pink-100 shadow-sm max-w-md mx-auto relative hover-romantic animate-love-pulse">
      {/* Floating romantic elements */}
      <div className="absolute -top-2 -right-2">
        <Heart className="w-4 h-4 text-rose-300 opacity-60 animate-float" />
      </div>
      <div className="absolute -bottom-2 -left-2">
        <Sparkles className="w-3 h-3 text-pink-300 opacity-50 animate-twinkle" />
      </div>
      
      <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in">
        <Clock className="w-5 h-5 text-pink-600 animate-gentle-bounce" />
        <span className="text-sm font-light text-gray-600">Time until the big day</span>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Mins', value: timeLeft.minutes },
          { label: 'Secs', value: timeLeft.seconds },
        ].map((item, index) => (
          <div key={item.label} className={`text-center animate-fade-in animate-delay-${(index + 1) * 100}`}>
            <div className="text-2xl md:text-3xl font-light text-pink-700 mb-1 animate-love-pulse">
              {item.value.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-500 font-light animate-gentle-bounce animate-delay-200">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Additional romantic touches */}
      <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
        <Heart className="w-2 h-2 text-rose-200 opacity-40 animate-heart-beat" />
      </div>
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
        <Heart className="w-2 h-2 text-pink-200 opacity-40 animate-heart-beat animate-delay-500" />
      </div>
    </div>
  );
};

export default CountdownTimer;
