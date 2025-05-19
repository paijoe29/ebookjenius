import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountdownDisplay from './CountdownDisplay';
import { Button } from './ui/button';
import { AlertTriangle, Tag } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const LimitedOfferCountdown: React.FC = () => {
  const calculateTargetDate = () => {
    const target = new Date();
    target.setDate(target.getDate() + 3);
    target.setHours(23, 59, 59, 0);
    return target;
  };

  const [targetDate] = useState<Date>(calculateTargetDate());
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const calculateTimeLeft = (): TimeLeft | null => {
      const difference = +targetDate - +new Date();
      if (difference <= 0) {
        return null;
      }
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, isClient]);

  if (!isClient || timeLeft === undefined) {
    return (
      <section className="py-12 md:py-24 bg-yellow-50 text-center">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-4 flex items-center justify-center">
              <Tag size={36} className="mr-3" />
              Memuat Penawaran Spesial...
            </h2>
            <div className="flex justify-center items-center my-8">
              <div className="bg-gray-300 w-16 h-16 md:w-24 md:h-24 rounded-lg mx-2"></div>
              <div className="bg-gray-300 w-16 h-16 md:w-24 md:h-24 rounded-lg mx-2"></div>
              <div className="bg-gray-300 w-16 h-16 md:w-24 md:h-24 rounded-lg mx-2"></div>
              <div className="bg-gray-300 w-16 h-16 md:w-24 md:h-24 rounded-lg mx-2"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (timeLeft === null) {
    return (
      <section className="py-12 md:py-24 bg-red-100 text-center">
        <div className="container mx-auto px-4">
          <AlertTriangle size={48} className="mx-auto text-red-600 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
            Sayang Sekali, Penawaran Telah Berakhir!
          </h2>
          <p className="text-base sm:text-lg text-red-600 mb-8">
            Jangan lewatkan kesempatan berikutnya. Ikuti kami untuk update promo terbaru!
          </p>
        </div>
      </section>
    );
  }

  const isEndingSoon = timeLeft.days === 0 && timeLeft.hours < 12;

  return (
    <section className="py-16 md:py-24 bg-yellow-50 text-center">
      <div className="container mx-auto px-4">
        <Tag size={48} className="mx-auto text-yellow-600 mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-4">
          Penawaran Spesial Akan Segera Berakhir!
        </h2>
        <p className="text-base sm:text-lg text-yellow-700 mb-8 max-w-2xl mx-auto"> {/* Changed text-yellow-600 to text-yellow-700 */}
          Jangan sampai ketinggalan harga promo untuk semua Ebook Jenius. Dapatkan sekarang sebelum waktu habis!
        </p>
        <div className="flex justify-center items-center my-8">
          <CountdownDisplay value={timeLeft.days} label="Hari" isDanger={isEndingSoon && timeLeft.days === 0} />
          <span className={`text-3xl md:text-5xl font-bold ${isEndingSoon ? 'text-red-500' : 'text-blue-600'}`}>:</span>
          <CountdownDisplay value={timeLeft.hours} label="Jam" isDanger={isEndingSoon} />
          <span className={`text-3xl md:text-5xl font-bold ${isEndingSoon ? 'text-red-500' : 'text-blue-600'}`}>:</span>
          <CountdownDisplay value={timeLeft.minutes} label="Menit" isDanger={isEndingSoon} />
          <span className={`text-3xl md:text-5xl font-bold ${isEndingSoon ? 'text-red-500' : 'text-blue-600'}`}>:</span>
          <CountdownDisplay value={timeLeft.seconds} label="Detik" isDanger={isEndingSoon} />
        </div>
        <Button 
          asChild 
          size="lg" 
          className="bg-red-600 hover:bg-red-700 text-white text-base px-6 py-4 md:text-xl md:px-10 md:py-7 rounded-md font-semibold shadow-lg transform transition-transform hover:scale-105"
        >
          <Link to="#cta">
            Klaim Penawaran Sekarang!
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LimitedOfferCountdown;