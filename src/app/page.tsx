import HeroSection from '@/components/HeroSection';
import HeroTransition from '@/components/HeroTransition';
import { getSortedPostsData } from '@/lib/posts';
import dynamic from 'next/dynamic';

const ServicesCarousel = dynamic(() => import('@/components/ServicesCarousel'));
const INPISection = dynamic(() => import('@/components/INPISection'));
const DangerSection = dynamic(() => import('@/components/DangerSection'));
const TestimonialsStack = dynamic(() => import('@/components/TestimonialsStack'));
const StackedCards = dynamic(() => import('@/components/StackedCards'));
const BenefitsSection = dynamic(() => import('@/components/BenefitsSection'));
const StatsSection = dynamic(() => import('@/components/StatsSection'));
const HowItWorks = dynamic(() => import('@/components/HowItWorks'));
const CTABand = dynamic(() => import('@/components/CTABand'));
const RecentPostsSection = dynamic(() => import('@/components/RecentPostsSection'));


export default async function Home() {
    const allPosts = getSortedPostsData();
    const recentPosts = allPosts.slice(0, 4);

    return (
        <>
            <HeroSection />
            <HeroTransition />
            <ServicesCarousel />
            <INPISection />
            <DangerSection />
            <StackedCards />
            <BenefitsSection />
            <HowItWorks />
            <StatsSection />
            <TestimonialsStack />
            <RecentPostsSection posts={recentPosts} />
            <CTABand />
        </>
    );
}
