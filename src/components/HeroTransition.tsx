import React from 'react';
import { Star } from 'lucide-react';

const HeroTransition: React.FC = () => {
    return (
        <div className="relative w-full h-0 z-30 pointer-events-none">
            {/* Wrapper to clip horizontal overflow while allowing vertical visibility */}
            <div className="absolute left-0 top-0 w-full h-64 -translate-y-1/2 overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">

                    {/* Blue Background Strip - Bottom Layer */}
                    <div className="absolute w-[120%] h-24 bg-[#4299e1] transform -rotate-2 flex items-center justify-center z-10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] origin-center overflow-hidden">
                        <div className="flex items-center space-x-8 animate-marquee whitespace-nowrap w-full">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="flex items-center space-x-8 flex-shrink-0">
                                    <div className="flex items-center space-x-4 text-white text-lg font-medium">
                                        <span>Conte com a empresa mais bem avaliada do Sul do Brasil</span>
                                        <span className="text-white font-bold flex items-center">
                                            Reviews <span className="text-white mx-1">Google</span>
                                            <div className="flex ml-1">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                                                ))}
                                            </div>
                                        </span>
                                        <span className="mx-4 text-blue-200">X</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Black Foreground Strip - Top Layer */}
                    <div className="absolute w-[120%] h-24 bg-black transform rotate-1 flex items-center justify-center z-20 shadow-[0_15px_40px_rgba(0,0,0,0.6)] origin-center overflow-hidden translate-y-[-10px]">
                        <div className="flex items-center space-x-8 animate-marquee-reverse whitespace-nowrap w-full">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="flex items-center space-x-8 flex-shrink-0">
                                    <div className="flex items-center space-x-4 text-white text-lg font-medium">
                                        <span>Conte com a empresa mais bem avaliada do Sul do Brasil</span>
                                        <span className="text-blue-400 font-bold flex items-center">
                                            Reviews <span className="text-white mx-1">Google</span>
                                            <div className="flex ml-1">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                                                ))}
                                            </div>
                                        </span>
                                        <span className="mx-4 text-blue-500">X</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroTransition;
