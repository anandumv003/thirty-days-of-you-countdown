
import { useState, useEffect } from 'react';
import { Calendar, Lock, Sparkles, Heart, Gift } from 'lucide-react';
import DayModal from '../components/DayModal';
import CountdownTimer from '../components/CountdownTimer';
import MessageGallery from '../components/MessageGallery';
import { Button } from "@/components/ui/button";

const birthdayDate = new Date('2025-07-21'); // Set your love's birthday date here
const countdownStartDate = new Date('2025-06-22'); // Start date - adjust this to when you want Day 1 to unlock

const messages = [
  {
    day: 1,
    title: "The Countdown Begins",
    message: "30 days until your birthday, and I can't help but feel lucky to be the one celebrating it with you this year. A beautiful soul was born — and she grew into the woman I adore with all my heart. Here's to every magical moment ahead.",
    imageUrl: "/photos/day1.jpg"
  },
  {
    day: 2,
    title: "Chaos & Kindness",
    message: "You're a perfect mix of wild spirit and gentle heart. You bring light into chaos, and peace into my soul. Falling for you was easy — staying in love with you is inevitable.",
    imageUrl: "/photos/day2.jpg"
  },
  {
    day: 3,
    title: "The One I Love",
    message: "You're not just someone I love — you're *the one*. The person I want to talk to after a long day, the one I want beside me for every tomorrow.",
    imageUrl: "/photos/day3.jpg"
  },
  {
    day: 4,
    title: "Dreamer by Nature",
    message: "You dream with open eyes and a full heart. And being next to you while you chase those dreams? That's a front-row seat I wouldn't trade for the world.",
    imageUrl: "/photos/day4.jpg"
  },
  {
    day: 5,
    title: "Queen of Small Joys",
    message: "You turn ordinary moments into magic. Whether it's a lazy afternoon or a quick hug, you make everything brighter just by being you.",
    imageUrl: "/photos/day5.jpg"
  },
  {
    day: 6,
    title: "Fearless Heart",
    message: "You're brave in ways that leave me in awe. You face fears, lift others, and carry so much with grace. You inspire me, always.",
    imageUrl: "/photos/day6.jpg"
  },
  {
    day: 7,
    title: "The Laugh Maker",
    message: "Your laugh is my favorite sound — it's joy, sunshine, and home wrapped into one. It's impossible not to smile when you do.",
    imageUrl: "/photos/day7.jpg"
  },
  {
    day: 8,
    title: "Unapologetically You",
    message: "You live and love boldly, never afraid to be your true self. That courage? It's one of the million reasons I adore you.",
    imageUrl: "/photos/day8.jpg"
  },
  {
    day: 9,
    title: "My Warrior",
    message: "You've faced storms and come out even more radiant. Watching you overcome, rebuild, and thrive makes me love you even deeper.",
    imageUrl: "/photos/day9.jpg"
  },
  {
    day: 10,
    title: "Ten Reasons I Love You",
    message: "Let's count a few: 1) Your laugh. 2) Your voice. 3) The way you care. 4) Your strength. 5) Your silliness. 6) Your kindness. 7) How you hold me. 8) Your passion. 9) Your dreams. 10) Just… you.",
    imageUrl: "/photos/day10.jpg"
  },
  {
    day: 11,
    title: "Kindness in Motion",
    message: "Your kindness doesn't just exist — it moves, flows, touches everyone lucky enough to meet you.",
    imageUrl: "/photos/day11.jpg"
  },
  {
    day: 12,
    title: "My Favorite Person",
    message: "Of all the people I've ever met, you're the one who makes my heart skip, my day better, and my life whole.",
    imageUrl: "/photos/day12.jpg"
  },
  {
    day: 13,
    title: "Memory Lane",
    message: "Every memory with you feels like a treasure. From random walks to deep talks — I want to collect a million more with you.",
    imageUrl: "/photos/day13.jpg"
  },
  {
    day: 14,
    title: "Unspoken Love",
    message: "Even in silence, you say so much. Your presence is peace, your gaze a promise, and your love — the most beautiful language I've known.",
    imageUrl: "/photos/day14.jpg"
  },
  {
    day: 15,
    title: "Halfway to You",
    message: "We're halfway through, and every day just deepens my love for you. I could celebrate you forever and still not have enough time.",
    imageUrl: "/photos/day15.jpg"
  },
  {
    day: 16,
    title: "Your Eyes, My Universe",
    message: "Your eyes hold galaxies — I see dreams, softness, and a future I want to be a part of.",
    imageUrl: "/photos/day16.jpg"
  },
  {
    day: 17,
    title: "The Art of Loving You",
    message: "Loving you is an art — every glance, every touch, every word. You make love feel like poetry.",
    imageUrl: "/photos/day17.jpg"
  },
  {
    day: 18,
    title: "My Calm",
    message: "When the world feels heavy, you are my lightness. My calm in the noise. My peace in the storm.",
    imageUrl: "/photos/day18.jpg"
  },
  {
    day: 19,
    title: "Wild & Tender",
    message: "You're wild enough to chase your dreams and tender enough to love softly. That balance? That's your magic.",
    imageUrl: "/photos/day19.jpg"
  },
  {
    day: 20,
    title: "Heart of Every Room",
    message: "You walk in, and the whole room feels it. You don't just light up a space — you become the spark.",
    imageUrl: "/photos/day20.jpg"
  },
  {
    day: 21,
    title: "Perfectly Imperfect",
    message: "I love you for your perfect quirks and lovable chaos. You're the beautiful mess I wouldn't trade for anything.",
    imageUrl: "/photos/day21.jpg"
  },
  {
    day: 22,
    title: "My Person",
    message: "You're not just someone I love — you're the one I turn to. My person. My heart's favorite place.",
    imageUrl: "/photos/day22.jpg"
  },
  {
    day: 23,
    title: "Laughter We Made",
    message: "We've shared laughs that still echo in my heart. With you, even the silliest moments turn unforgettable.",
    imageUrl: "/photos/day23.jpg"
  },
  {
    day: 24,
    title: "You Inspire Me",
    message: "You inspire me to be better, love deeper, dream louder. Just by being who you are.",
    imageUrl: "/photos/day24.jpg"
  },
  {
    day: 25,
    title: "You're So Loved",
    message: "You're loved by so many — and most of all, by me. Deeply, fiercely, truly.",
    imageUrl: "/photos/day25.jpg"
  },
  {
    day: 26,
    title: "Your Spark",
    message: "You never lost your sparkle. You still see the world like it's magic — and make mine feel that way too.",
    imageUrl: "/photos/day26.jpg"
  },
  {
    day: 27,
    title: "Just Here for You",
    message: "Whatever today feels like for you — know I'm right here. Loving you is my favorite constant.",
    imageUrl: "/photos/day27.jpg"
  },
  {
    day: 28,
    title: "A Love Letter",
    message: "If this entire countdown could be summed in one note: I love you. With all of me. For all of you.",
    imageUrl: "/photos/day28.jpg"
  },
  {
    day: 29,
    title: "Tomorrow's Yours",
    message: "Tomorrow is your big day, my love. But today I'm just grateful — that you exist, that you chose me, that I get to love you.",
    imageUrl: "/photos/day29.jpg"
  },
  {
    day: 30,
    title: "Happy Birthday, My Love",
    message: "It's here! Your day. Our first birthday together — but the first of many. You are everything I never knew I needed. Happy birthday, my love. I adore you beyond words.",
    imageUrl: "/photos/day30.jpg"
  }
];

const Index = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [showGallery, setShowGallery] = useState(false);
  const [currentDay, setCurrentDay] = useState(1);

  useEffect(() => {
    const today = new Date();
    const startDate = new Date(countdownStartDate);
    
    // Calculate days from start date to today
    const timeDiff = today.getTime() - startDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24)) + 1; // +1 because Day 1 starts on start date
    
    // Ensure we don't go below 1 or above 30
    const calculatedDay = Math.max(1, Math.min(30, daysDiff));
    setCurrentDay(calculatedDay);
    
    console.log('Today:', today.toDateString());
    console.log('Start date:', startDate.toDateString());
    console.log('Days unlocked:', calculatedDay);
  }, []);

  const isUnlocked = (day: number) => day <= currentDay;

  const handleDayClick = (day: number) => {
    if (isUnlocked(day)) {
      setSelectedDay(day);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 relative overflow-hidden">
      {/* Enhanced floating hearts and sparkles animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={`heart-${i}`}
            className="absolute text-pink-300 opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              filter: 'blur(0.5px)'
            }}
            size={6 + Math.random() * 8}
          />
        ))}
        {[...Array(25)].map((_, i) => (
          <Sparkles
            key={`sparkle-${i}`}
            className="absolute text-rose-400 opacity-25 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              filter: 'blur(0.5px)'
            }}
            size={4 + Math.random() * 8}
          />
        ))}
      </div>

      {/* Romantic geometric background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-rose-300 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-pink-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 border border-red-300 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-rose-300 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-7xl">
        {/* Enhanced romantic header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-extralight text-gray-800 mb-6 tracking-wider leading-tight">
              30 Days of Love 
              <span className="inline-block ml-3 animate-bounce text-6xl">💕</span>
            </h1>
            {/* Heart decoration */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
              <Heart className="w-4 h-4 text-pink-300 fill-current" />
              <Heart className="w-3 h-3 text-rose-300 fill-current" />
              <Heart className="w-4 h-4 text-pink-300 fill-current" />
            </div>
          </div>
          <p className="text-xl text-gray-600 font-light mb-10 mt-8 max-w-2xl mx-auto leading-relaxed">
            A love letter written in moments, counting down to your special day ✨
          </p>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <CountdownTimer targetDate={birthdayDate} />
          </div>
        </div>

        {/* Enhanced romantic action buttons */}
        <div className="flex justify-center gap-6 mb-12">
          <Button
            onClick={() => setShowGallery(true)}
            variant="outline"
            className="bg-white/90 backdrop-blur-md border-rose-200 text-rose-700 hover:bg-rose-50 hover:border-rose-300 font-light px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Heart className="w-5 h-5 mr-3 text-rose-500 fill-current" />
            View All Love Notes
          </Button>
        </div>

        {/* Enhanced romantic calendar grid */}
        <div className="grid grid-cols-5 md:grid-cols-6 gap-4 md:gap-6 mb-16 px-4">
          {messages.map((dayData) => {
            const unlocked = isUnlocked(dayData.day);
            return (
              <div
                key={dayData.day}
                onClick={() => handleDayClick(dayData.day)}
                className={`
                  aspect-square relative group cursor-pointer transition-all duration-500 transform
                  ${unlocked 
                    ? 'hover:scale-110 hover:shadow-2xl hover:-translate-y-2' 
                    : 'opacity-50 cursor-not-allowed'
                  }
                `}
              >
                <div
                  className={`
                    w-full h-full rounded-3xl p-5 flex flex-col items-center justify-center
                    transition-all duration-700 relative overflow-hidden backdrop-blur-sm
                    ${unlocked
                      ? 'bg-gradient-to-br from-white/95 via-rose-50/85 to-pink-50/90 border-2 border-rose-200/70 shadow-xl hover:shadow-2xl hover:border-rose-300'
                      : 'bg-gray-100/70 border-2 border-gray-300/40'
                    }
                  `}
                >
                  {/* Enhanced romantic background effects */}
                  {unlocked && (
                    <>
                      {/* Soft romantic glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/40 via-transparent to-pink-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      {/* Animated heart sparkles */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-rose-400 rounded-full animate-ping"></div>
                        <div className="absolute bottom-4 left-4 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-300"></div>
                        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-red-400 rounded-full animate-ping delay-700"></div>
                        <div className="absolute top-4 left-3 w-0.5 h-0.5 bg-rose-300 rounded-full animate-pulse delay-1000"></div>
                      </div>
                    </>
                  )}

                  {/* Enhanced day number with romantic colors */}
                  <div className={`text-3xl md:text-4xl font-extralight mb-3 z-10 transition-colors duration-300 ${
                    unlocked ? 'text-rose-700 group-hover:text-rose-800' : 'text-gray-400'
                  }`}>
                    {dayData.day}
                  </div>

                  {/* Enhanced icons with heart theme */}
                  <div className="z-10 mb-2">
                    {unlocked ? (
                      <Heart className="w-6 h-6 text-rose-500 opacity-70 group-hover:scale-125 group-hover:text-rose-600 transition-all duration-300 group-hover:rotate-12 fill-current" />
                    ) : (
                      <Lock className="w-6 h-6 text-gray-400" />
                    )}
                  </div>

                  {/* Enhanced day label with romantic touch */}
                  <div className={`text-xs text-center font-light transition-colors duration-300 ${
                    unlocked ? 'text-gray-600 group-hover:text-gray-700' : 'text-gray-400'
                  }`}>
                    Day {dayData.day}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced romantic progress indicator */}
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-md rounded-full px-8 py-4 inline-block border border-rose-200/70 shadow-lg">
            <p className="text-base text-gray-700 font-light">
              <span className="font-medium text-rose-700 text-lg">{currentDay}</span> 
              <span className="text-gray-500 mx-2">of</span>
              <span className="font-medium text-gray-600">30 days</span>
              <span className="text-gray-500 ml-2">of love</span>
            </p>
            {/* Romantic progress bar */}
            <div className="mt-3 w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-rose-400 via-pink-400 to-red-400 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(currentDay / 30) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Day Modal */}
      {selectedDay && (
        <DayModal
          dayData={messages.find(m => m.day === selectedDay)!}
          isOpen={selectedDay !== null}
          onClose={() => setSelectedDay(null)}
        />
      )}

      {/* Gallery Modal */}
      {showGallery && (
        <MessageGallery
          messages={messages.filter(m => isUnlocked(m.day))}
          isOpen={showGallery}
          onClose={() => setShowGallery(false)}
        />
      )}
    </div>
  );
};

export default Index;
