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
    imageUrl: "/photos/day1.jpg" // You can replace these with your uploaded photos
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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50">
      {/* Floating sparkles animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-pink-300 opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
            size={12 + Math.random() * 8}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-4 tracking-wide">
            30 Days of You 
            <span className="inline-block ml-2 animate-bounce">🎉</span>
          </h1>
          <p className="text-lg text-gray-600 font-light mb-8">
            Because one day isn't enough to celebrate a friend like you.
          </p>
          <CountdownTimer targetDate={birthdayDate} />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            onClick={() => setShowGallery(true)}
            variant="outline"
            className="bg-white/70 backdrop-blur-sm border-pink-200 text-pink-700 hover:bg-pink-50 font-light"
          >
            <Heart className="w-4 h-4 mr-2" />
            View All Messages
          </Button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-5 md:grid-cols-6 gap-3 md:gap-4 mb-12">
          {messages.map((dayData) => {
            const unlocked = isUnlocked(dayData.day);
            return (
              <div
                key={dayData.day}
                onClick={() => handleDayClick(dayData.day)}
                className={`
                  aspect-square relative group cursor-pointer transition-all duration-300
                  ${unlocked 
                    ? 'hover:scale-105 hover:shadow-lg' 
                    : 'opacity-60 cursor-not-allowed'
                  }
                `}
              >
                <div
                  className={`
                    w-full h-full rounded-2xl p-4 flex flex-col items-center justify-center
                    transition-all duration-500 relative overflow-hidden
                    ${unlocked
                      ? 'bg-gradient-to-br from-white to-pink-50 border-2 border-pink-100 shadow-md hover:shadow-xl'
                      : 'bg-gray-100 border-2 border-gray-200 backdrop-blur-sm'
                    }
                  `}
                >
                  {/* Background sparkle effect */}
                  {unlocked && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-2 right-2 w-1 h-1 bg-pink-400 rounded-full animate-ping"></div>
                      <div className="absolute bottom-3 left-3 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-300"></div>
                      <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-ping delay-700"></div>
                    </div>
                  )}

                  {/* Day number */}
                  <div className={`text-2xl md:text-3xl font-light mb-2 z-10 ${
                    unlocked ? 'text-pink-700' : 'text-gray-400'
                  }`}>
                    {dayData.day}
                  </div>

                  {/* Lock or Gift icon */}
                  {unlocked ? (
                    <Gift className="w-5 h-5 text-pink-500 opacity-70 group-hover:scale-110 transition-transform" />
                  ) : (
                    <Lock className="w-5 h-5 text-gray-400" />
                  )}

                  {/* Day label */}
                  <div className={`text-xs text-center mt-1 font-light ${
                    unlocked ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    Day {dayData.day}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress indicator */}
        <div className="text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 inline-block border border-pink-100">
            <p className="text-sm text-gray-600 font-light">
              <span className="font-medium text-pink-700">{currentDay}</span> of 30 days unlocked
            </p>
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
