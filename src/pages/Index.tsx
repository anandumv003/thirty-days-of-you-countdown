import { useState, useEffect } from 'react';
import { Calendar, Lock, Sparkles, Heart, Gift } from 'lucide-react';
import DayModal from '../components/DayModal';
import CountdownTimer from '../components/CountdownTimer';
import MessageGallery from '../components/MessageGallery';
import { Button } from "@/components/ui/button";

const birthdayDate = new Date('2025-07-21'); // Set your friend's birthday date here
const countdownStartDate = new Date('2025-06-22'); // Start date - adjust this to when you want Day 1 to unlock

const messages = [
  {
    day: 1,
    title: "The Countdown Begins",
    message: "On this day, 30 days before you turn 30, let's rewind to where it all started. A little sparkle entered the world, and it hasn't stopped shining since. You've grown, glowed, and gifted the world with so much warmth. Let the countdown to your most meaningful birthday begin. Here's to you, 30 times over.",
    imageUrl: "/photos/day1.jpg"
  },
  {
    day: 2,
    title: "Chaos & Kindness",
    message: "You are beautifully made of chaos and kindness — the perfect storm and the calm after. Whether it's running wild with ideas or sitting silently beside someone who needs comfort, you balance the world with your energy. The world is lucky to have someone who's both lightning and light.",
    imageUrl: "/photos/day2.jpg"
  },
  {
    day: 3,
    title: "That One Friend",
    message: "You've been that one friend — the one who listens without judging, laughs without filter, and loves without condition. I'm grateful for every memory we've made and even more excited for the ones to come. You're not just turning 30. You're turning legendary.",
    imageUrl: "/photos/day3.jpg"
  },
  {
    day: 4,
    title: "Dreamer by Nature",
    message: "You've always been a dreamer — eyes full of wonder, heart full of courage. You see beauty where others see ordinary. Your dreams aren't just wishes; they're seeds you plant and nurture until they bloom.",
    imageUrl: "/photos/day4.jpg"
  },
  {
    day: 5,
    title: "Queen of Small Joys",
    message: "You find magic in the mundane — in cups of chai, morning skies, silly reels. It's a gift, really. You remind us all that happiness isn't always grand; sometimes, it's just you being your goofy, glowing self.",
    imageUrl: "/photos/day5.jpg"
  },
  {
    day: 6,
    title: "Fearless Heart",
    message: "You're brave in ways people don't always notice. It's not just the big things — it's how you show up, speak up, and stay kind anyway. You walk through storms barefoot and still manage to dance.",
    imageUrl: "/photos/day6.jpg"
  },
  {
    day: 7,
    title: "The Laugh Maker",
    message: "There's something so contagious about your laugh — the kind that fills a room and lifts a soul. If joy were a superpower, you'd be wearing the cape.",
    imageUrl: "/photos/day7.jpg"
  },
  {
    day: 8,
    title: "Your Way Only",
    message: "You do life on your own terms — always. Whether it's fashion, decisions, or dreams, you're unapologetically you. And that's something to celebrate, not just admire.",
    imageUrl: "/photos/day8.jpg"
  },
  {
    day: 9,
    title: "Warrior Soul",
    message: "You've faced battles people don't know about. And every time, you rose stronger, softer, wiser. A warrior in lipstick and kindness.",
    imageUrl: "/photos/day9.jpg"
  },
  {
    day: 10,
    title: "Ten Things I Love About You",
    message: "Let's list a few: 1) Your laugh. 2) The way you say 'hmm'. 3) How you care for others. 4) Your creativity. 5) Your voice notes. 6) Your drama. 7) How you love. 8) Your bad jokes. 9) Your good taste. 10) Just YOU.",
    imageUrl: "/photos/day10.jpg"
  },
  {
    day: 11,
    title: "Kindness in Motion",
    message: "Your kindness moves people — literally. It makes space for others to be themselves. It lingers in the little things you do when no one is watching.",
    imageUrl: "/photos/day11.jpg"
  },
  {
    day: 12,
    title: "Favorite Human",
    message: "Of all the people I've met, you remain a favorite. Not because you're perfect, but because you're real. And that's rare.",
    imageUrl: "/photos/day12.jpg"
  },
  {
    day: 13,
    title: "Memory Lane",
    message: "We didn't just collect memories. We made art. From random rants to unplanned plans, every moment with you is worth framing.",
    imageUrl: "/photos/day13.jpg"
  },
  {
    day: 14,
    title: "Poet in Silence",
    message: "You speak poems without words. In the way you hug, stay, or look out the window. You don't need to say much to be deeply understood.",
    imageUrl: "/photos/day14.jpg"
  },
  {
    day: 15,
    title: "Halfway to 30!",
    message: "15 days in, and I'm falling in love with celebrating you even more. Every day, every version of you, deserves a cheer.",
    imageUrl: "/photos/day15.jpg"
  },
  {
    day: 16,
    title: "Your Eyes Hold Galaxies",
    message: "You look at the world like it's both a puzzle and a painting. Your eyes hold stories and stardust.",
    imageUrl: "/photos/day16.jpg"
  },
  {
    day: 17,
    title: "The Art of You",
    message: "You are art. The kind that makes people stop, feel, and smile. Everything about you is intentional, beautiful, and full of wonder.",
    imageUrl: "/photos/day17.jpg"
  },
  {
    day: 18,
    title: "Voice of Calm",
    message: "You calm storms with your words. Sometimes with just your presence. You have this grounding energy that makes others breathe easier.",
    imageUrl: "/photos/day18.jpg"
  },
  {
    day: 19,
    title: "Wild Soul, Gentle Heart",
    message: "You're a wildflower in a world of trimmed hedges. You roam, you wonder, you rise. But you also love deeply, and that's your greatest strength.",
    imageUrl: "/photos/day19.jpg"
  },
  {
    day: 20,
    title: "Life of the Party",
    message: "Wherever you go, the party follows. You're the playlist, the punchline, and the sparkle. You don't just light up rooms, you *are* the room.",
    imageUrl: "/photos/day20.jpg"
  },
  {
    day: 21,
    title: "Graceful Mess",
    message: "You don't always have it together — and that's what makes you human and lovable. You navigate chaos with grace and humor.",
    imageUrl: "/photos/day21.jpg"
  },
  {
    day: 22,
    title: "My Confidante",
    message: "You're the first person I call when things break or bloom. Thank you for always listening without fixing.",
    imageUrl: "/photos/day22.jpg"
  },
  {
    day: 23,
    title: "Best Laughs are with You",
    message: "Some laughs still echo years later. You make life lighter just by being in it.",
    imageUrl: "/photos/day23.jpg"
  },
  {
    day: 24,
    title: "You Inspire Me",
    message: "You inspire without trying. By being true to yourself, you remind others to do the same.",
    imageUrl: "/photos/day24.jpg"
  },
  {
    day: 25,
    title: "Most Loved",
    message: "You're not just my favorite — you're a favorite for many. You make people feel seen, heard, loved.",
    imageUrl: "/photos/day25.jpg"
  },
  {
    day: 26,
    title: "Your Inner Child",
    message: "You never lost your spark. You kept the wonder alive. And that's the most magical thing about you.",
    imageUrl: "/photos/day26.jpg"
  },
  {
    day: 27,
    title: "Just Checking In",
    message: "Hey you. You okay? You don't have to be strong today. Just know I see you and I'm here.",
    imageUrl: "/photos/day27.jpg"
  },
  {
    day: 28,
    title: "A Love Note",
    message: "If I could write just one letter to sum up our friendship: Thank you. For existing. For being you. For letting me witness your life.",
    imageUrl: "/photos/day28.jpg"
  },
  {
    day: 29,
    title: "Tomorrow is Yours",
    message: "Tomorrow, the world celebrates 30 years of your magic. But today, I just want to say how proud I am of who you are becoming.",
    imageUrl: "/photos/day29.jpg"
  },
  {
    day: 30,
    title: "Happy Birthday!",
    message: "You made it. 30 days of celebration for 30 years of YOU. You are powerful, precious, and perfectly you. Happy 30th, my favorite soul!",
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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-pink-100 relative overflow-hidden">
      {/* Enhanced floating sparkles animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-pink-400 opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              filter: 'blur(0.5px)'
            }}
            size={8 + Math.random() * 12}
          />
        ))}
      </div>

      {/* Subtle geometric background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-pink-300 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-orange-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 border border-rose-300 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-pink-300 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-7xl">
        {/* Enhanced header with better typography */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-extralight text-gray-800 mb-6 tracking-wider leading-tight">
              30 Days of You 
              <span className="inline-block ml-3 animate-bounce text-6xl">🎉</span>
            </h1>
            {/* Subtle underline decoration */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
          </div>
          <p className="text-xl text-gray-600 font-light mb-10 mt-8 max-w-2xl mx-auto leading-relaxed">
            Because one day isn't enough to celebrate a friend like you.
          </p>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <CountdownTimer targetDate={birthdayDate} />
          </div>
        </div>

        {/* Enhanced action buttons */}
        <div className="flex justify-center gap-6 mb-12">
          <Button
            onClick={() => setShowGallery(true)}
            variant="outline"
            className="bg-white/80 backdrop-blur-md border-pink-200 text-pink-700 hover:bg-pink-50 hover:border-pink-300 font-light px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Heart className="w-5 h-5 mr-3 text-pink-500" />
            View All Messages
          </Button>
        </div>

        {/* Enhanced calendar grid with better spacing and animations */}
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
                      ? 'bg-gradient-to-br from-white/90 via-pink-50/80 to-rose-50/90 border-2 border-pink-200/60 shadow-xl hover:shadow-2xl hover:border-pink-300'
                      : 'bg-gray-100/70 border-2 border-gray-300/40'
                    }
                  `}
                >
                  {/* Enhanced background effects */}
                  {unlocked && (
                    <>
                      {/* Glowing background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 via-transparent to-orange-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      {/* Animated sparkle dots */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping"></div>
                        <div className="absolute bottom-4 left-4 w-1 h-1 bg-orange-400 rounded-full animate-ping delay-300"></div>
                        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-rose-400 rounded-full animate-ping delay-700"></div>
                        <div className="absolute top-4 left-3 w-0.5 h-0.5 bg-pink-300 rounded-full animate-pulse delay-1000"></div>
                      </div>
                    </>
                  )}

                  {/* Enhanced day number with better typography */}
                  <div className={`text-3xl md:text-4xl font-extralight mb-3 z-10 transition-colors duration-300 ${
                    unlocked ? 'text-pink-700 group-hover:text-pink-800' : 'text-gray-400'
                  }`}>
                    {dayData.day}
                  </div>

                  {/* Enhanced icons with animations */}
                  <div className="z-10 mb-2">
                    {unlocked ? (
                      <Gift className="w-6 h-6 text-pink-500 opacity-70 group-hover:scale-125 group-hover:text-pink-600 transition-all duration-300 group-hover:rotate-12" />
                    ) : (
                      <Lock className="w-6 h-6 text-gray-400" />
                    )}
                  </div>

                  {/* Enhanced day label */}
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

        {/* Enhanced progress indicator */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-md rounded-full px-8 py-4 inline-block border border-pink-200/60 shadow-lg">
            <p className="text-base text-gray-700 font-light">
              <span className="font-medium text-pink-700 text-lg">{currentDay}</span> 
              <span className="text-gray-500 mx-2">of</span>
              <span className="font-medium text-gray-600">30 days</span>
              <span className="text-gray-500 ml-2">unlocked</span>
            </p>
            {/* Progress bar */}
            <div className="mt-3 w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-pink-400 to-rose-400 rounded-full transition-all duration-1000 ease-out"
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
