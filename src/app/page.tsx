import HeroSection from '@/components/HeroSection';
import ServicesCarousel from '@/components/ServicesCarousel';
import INPISection from '@/components/INPISection';
import DangerSection from '@/components/DangerSection';
import TestimonialsStack from '@/components/TestimonialsStack';
import StackedCards from '@/components/StackedCards';
import BenefitsSection from '@/components/BenefitsSection';
import StatsSection from '@/components/StatsSection';
import HowItWorks from '@/components/HowItWorks';
import CTABand from '@/components/CTABand';
import HeroTransition from '@/components/HeroTransition';
import RecentPostsSection from '@/components/RecentPostsSection';
import { getSortedPostsData } from '@/lib/posts';

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
