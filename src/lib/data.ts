import {
  GraduationCap,
  MapPin,
  TrendingUp,
  Heart,
  Users,
  Award,
  BookOpen,
  Lightbulb,
  Globe,
  Building2,
  Briefcase,
  Shield,
  Star,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─── Shared Types ─── */

export interface CardData {
  title: string;
  description: string;
  icon?: LucideIcon;
  href?: string;
}

export interface TestimonialData {
  quote: string;
  name: string;
  role: string;
}

export interface VideoData {
  videoId: string;
  title: string;
  subtitle?: string;
}

/* ─── Hero Collage Images ─── */

export interface CollageImageData {
  src: string;
  alt?: string;
  width: "narrow" | "medium" | "wide";
  offset: "top" | "center" | "bottom" | "high";
}

export const heroCollageImages: CollageImageData[] = [
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    alt: "Students collaborating on campus",
    width: "narrow",
    offset: "top",
  },
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80",
    alt: "Graduation celebration",
    width: "medium",
    offset: "bottom",
  },
  {
    src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80",
    alt: "Modern university campus",
    width: "wide",
    offset: "center",
  },
  {
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80",
    alt: "Diverse group of happy students",
    width: "medium",
    offset: "high",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    alt: "Young professional smiling",
    width: "narrow",
    offset: "bottom",
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
    alt: "Professor engaging with students",
    width: "wide",
    offset: "top",
  },
  {
    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=600&q=80",
    alt: "Confident young professional",
    width: "medium",
    offset: "center",
  },
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80",
    alt: "Students on campus lawn",
    width: "narrow",
    offset: "high",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    alt: "Students working together at table",
    width: "wide",
    offset: "bottom",
  },
];

/* ─── Image Carousel Cards ─── */

export interface ImageCardData {
  image: string;
  title: string;
  href?: string;
}

export const carouselCards: ImageCardData[] = [
  {
    image: "https://img.youtube.com/vi/5tEse1V4MnU/maxresdefault.jpg",
    title: "Student Success",
    href: "/our-focus",
  },
  {
    image: "https://img.youtube.com/vi/4E6u2obV1kg/maxresdefault.jpg",
    title: "Great Colleges to Work For",
    href: "/why-mdc",
  },
  {
    image: "https://img.youtube.com/vi/aQCDIEcnubI/maxresdefault.jpg",
    title: "The American Dream",
    href: "/our-culture",
  },
  {
    image: "https://img.youtube.com/vi/-ZjqnmE30sY/maxresdefault.jpg",
    title: "Medical Campus",
  },
  {
    image: "https://img.youtube.com/vi/dyV_ZL9QsaQ/maxresdefault.jpg",
    title: "Innovation & Technology",
    href: "/our-focus",
  },
];

/* ─── Image + Text Blocks ─── */

export interface ImageTextBlockData {
  image: string;
  label: string;
  headline: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaExternal?: boolean;
}

export const imageTextBlocks: ImageTextBlockData[] = [
  {
    image: "https://img.youtube.com/vi/Agyf0A8PXv4/maxresdefault.jpg",
    label: "Shaping Our Community",
    headline: "Culture in Action",
    body: "There is a sense of pride that comes from representing the nation's most diverse institution. Here, we treat every day as an opportunity to push boundaries, serve our students, and share our whole-hearted commitment to education. We are a team — united by the belief that anything is possible.",
    ctaLabel: "Learn More About Culture",
    ctaHref: "/our-culture",
  },
  {
    image: "https://img.youtube.com/vi/CLj4ESQSFms/maxresdefault.jpg",
    label: "Elevating Your Well-Being",
    headline: "From the Inside Out",
    body: "Rest and recovery are critical for you to deliver at peak performance. You can count on us to walk the talk, providing resources and time that help keep life balanced. Comprehensive benefits, tuition reimbursement, and flexible scheduling enhance the supportive nature of our community.",
    ctaLabel: "Learn More About Benefits",
    ctaHref: "/why-mdc",
  },
  {
    image: "https://img.youtube.com/vi/9m7UxTxOerI/maxresdefault.jpg",
    label: "Building Pathways to Opportunity",
    headline: "Purpose at Play",
    body: "Transforming lives through education is no small feat. Together, we take steps to drive change by putting student success and community impact first. This shared passion for doing what's right fuels the MDC legacy and drives us forward.",
    ctaLabel: "View Open Positions",
    ctaHref: "https://recruitment.mdc.edu",
    ctaExternal: true,
  },
];

/* ─── Video Showcase ─── */

export const mdcVideos: VideoData[] = [
  {
    videoId: "CfLswfYyMkk",
    title: "About Miami Dade College",
    subtitle: "Discover who we are",
  },
  {
    videoId: "Agyf0A8PXv4",
    title: "I AM MDC History 2024",
    subtitle: "Our story, our impact",
  },
  {
    videoId: "5tEse1V4MnU",
    title: "A Day at MDC",
    subtitle: "Life on campus",
  },
  {
    videoId: "aQCDIEcnubI",
    title: "An MDC Story: The American Dream",
    subtitle: "Employee story",
  },
  {
    videoId: "CLj4ESQSFms",
    title: "Giancarlo Escorcia — I AM MDC",
    subtitle: "Employee spotlight",
  },
  {
    videoId: "b8VYoZhTU6c",
    title: "Arnouldy: MDC Scholar",
    subtitle: "I AM MDC 2023",
  },
  {
    videoId: "4E6u2obV1kg",
    title: "Great Colleges to Work For",
    subtitle: "Why employees love MDC",
  },
  {
    videoId: "9m7UxTxOerI",
    title: "300+ Academic Pathways",
    subtitle: "Programs and opportunities",
  },
  {
    videoId: "-ZjqnmE30sY",
    title: "MDC Medical Campus",
    subtitle: "Technology meets experience",
  },
  {
    videoId: "dyV_ZL9QsaQ",
    title: "MDC Tech Stories",
    subtitle: "Innovation at MDC",
  },
];

export interface NumberedItem {
  number: string;
  title: string;
  description: string;
}

export interface CampusData {
  name: string;
  address: string;
}

/* ─── Overview Page ─── */

export const overviewHero = {
  headline: "I am MDC",
  subtitle:
    "Join a team of passionate educators and professionals at the nation's most diverse college. Together, we're changing lives through the power of education.",
  badge: "Working at MDC",
};

export const overviewCards: CardData[] = [
  {
    title: "Why MDC",
    description:
      "Discover what makes Miami Dade College a great place to build your career.",
    icon: Heart,
    href: "/why-mdc",
  },
  {
    title: "Our Focus",
    description:
      "Learn about MDC's commitment to student success, innovation, and community impact.",
    icon: Lightbulb,
    href: "/our-focus",
  },
  {
    title: "Career Opportunities",
    description:
      "Explore open positions across our campuses and find your perfect role.",
    icon: Briefcase,
    href: "/positions-available",
  },
  {
    title: "Our Culture",
    description:
      "Experience an inclusive, supportive workplace that values every voice.",
    icon: Users,
    href: "/our-culture",
  },
];

export const overviewNumbered: NumberedItem[] = [
  {
    number: "01",
    title: "300,000+ students served.",
    description:
      "The largest institution of higher education in the U.S. by enrollment, serving the community with accessible, quality education.",
  },
  {
    number: "02",
    title: "167+ countries represented.",
    description:
      "Our student body — and our team — reflect the incredible diversity of Miami and the world.",
  },
  {
    number: "03",
    title: "#1 producer of associate degrees.",
    description:
      "The nation's top producer of associate degrees, including the top producer awarded to minorities.",
  },
];

export const overviewCredential = {
  title: "Great Colleges to Work For",
  text: "Miami Dade College has been recognized by the Chronicle of Higher Education as one of the Great Colleges to Work For — a testament to our commitment to a positive work environment, professional development, and employee satisfaction.",
  icon: Award,
};

export const campuses: CampusData[] = [
  { name: "Kendall Campus", address: "11011 SW 104th St, Miami" },
  { name: "Wolfson Campus", address: "300 NE 2nd Ave, Miami" },
  { name: "North Campus", address: "11380 NW 27th Ave, Miami" },
  { name: "InterAmerican Campus", address: "627 SW 27th Ave, Miami" },
  { name: "Homestead Campus", address: "500 College Terrace, Homestead" },
  { name: "Hialeah Campus", address: "1780 W 49th St, Hialeah" },
  { name: "West Campus", address: "3800 NW 115th Ave, Doral" },
  { name: "Medical Campus", address: "950 NW 20th St, Miami" },
  { name: "MDC Online", address: "Virtual campus serving students worldwide" },
];

/* ─── Why MDC Page ─── */

export const whyMDCHero = {
  headline: "Why Work at Miami Dade College?",
  subtitle:
    "More than a workplace — MDC is a community of change-makers, innovators, and life-long learners united by one mission: to change lives through education.",
  badge: "Why MDC",
};

export const whyMDCCards: CardData[] = [
  {
    title: "Comprehensive Benefits",
    description:
      "Competitive health, dental, and vision insurance. Retirement plans with employer matching. Tuition reimbursement for you and your dependents.",
    icon: Shield,
  },
  {
    title: "10 Locations Across Miami-Dade",
    description:
      "With campuses stretching from Homestead to Hialeah, there's a location near you. Plus flexible remote options for eligible roles.",
    icon: MapPin,
  },
  {
    title: "Professional Growth",
    description:
      "Access to ongoing training, leadership development programs, conference funding, and clear pathways for career advancement.",
    icon: TrendingUp,
  },
  {
    title: "Work-Life Balance",
    description:
      "Generous paid time off, flexible scheduling, summer hours, and a supportive culture that values personal well-being.",
    icon: Heart,
  },
];

export const whyMDCNumbered: NumberedItem[] = [
  {
    number: "01",
    title: "Competitive, not corporate.",
    description:
      "Public-sector stability with private-sector energy. Generous benefits, retirement matching, and tuition reimbursement.",
  },
  {
    number: "02",
    title: "Growth, not stagnation.",
    description:
      "Leadership development, conference funding, and clear pathways for advancement. We invest in your future.",
  },
  {
    number: "03",
    title: "Purpose, not just a paycheck.",
    description:
      "Every role at MDC contributes to transforming lives. You'll feel the impact of your work every single day.",
  },
];

export const whyMDCTestimonials: TestimonialData[] = [
  {
    quote:
      "MDC gave me the opportunity to grow from an adjunct instructor to a department chair. The support for professional development here is unmatched.",
    name: "Maria Santos",
    role: "Department Chair, School of Science",
  },
  {
    quote:
      "What I love most is the diversity. Every day I work with colleagues and students from all over the world. It makes the work so much richer.",
    name: "James Williams",
    role: "Student Services Advisor",
  },
  {
    quote:
      "The benefits are incredible — especially tuition reimbursement. I finished my master's degree while working full-time, all supported by MDC.",
    name: "Ana Rodriguez",
    role: "Financial Aid Specialist",
  },
];

/* ─── Our Focus Page ─── */

export const ourFocusHero = {
  headline: "MDC Puts Students First",
  subtitle:
    "Everything we do is guided by one mission: to change lives through the opportunity of education. As a team member, you'll be part of that transformation every day.",
  badge: "Our Focus",
};

export const focusAreas: CardData[] = [
  {
    title: "Student Success",
    description:
      "Every role at MDC — from faculty to facilities — directly contributes to student achievement. We measure our success by the success of our students.",
    icon: GraduationCap,
  },
  {
    title: "Innovation & Technology",
    description:
      "MDC is a leader in educational innovation, from our cutting-edge MAGIC lab to AI-powered student support systems.",
    icon: Sparkles,
  },
  {
    title: "Community Impact",
    description:
      "As an anchor institution in Miami-Dade County, MDC drives economic mobility, cultural enrichment, and civic engagement.",
    icon: Globe,
  },
  {
    title: "Academic Excellence",
    description:
      "Over 300 programs of study, from associate degrees to bachelor's programs, backed by dedicated faculty and state-of-the-art facilities.",
    icon: BookOpen,
  },
];

export const focusInitiatives: NumberedItem[] = [
  {
    number: "01",
    title: "MDC Live Arts",
    description:
      "World-class cultural programming including the acclaimed Miami Book Fair, MDC Museum of Art + Design, and the Tower Theater.",
  },
  {
    number: "02",
    title: "The Idea Center",
    description:
      "A 46,000 sq ft innovation hub at Wolfson Campus fostering entrepreneurship, creativity, and collaboration.",
  },
  {
    number: "03",
    title: "Workforce Development",
    description:
      "Partnerships with major employers creating training pipelines — from healthcare certifications to cybersecurity credentials.",
  },
];

/* ─── Positions Available Page ─── */

export const positionsHero = {
  headline: "Start Your Career at MDC",
  subtitle:
    "Whether you're an experienced educator, early-career professional, or expert in your field — there's a place for you at Miami Dade College.",
  badge: "Careers",
};

export const jobCategories: CardData[] = [
  {
    title: "Faculty",
    description:
      "Full-time and adjunct teaching positions across all disciplines. Shape the next generation.",
    icon: GraduationCap,
  },
  {
    title: "Professional Staff",
    description:
      "Administrative, advising, financial aid, IT, and other professional roles that keep MDC running.",
    icon: Building2,
  },
  {
    title: "Administrative",
    description:
      "Leadership and management positions across departments, campuses, and college-wide initiatives.",
    icon: Briefcase,
  },
  {
    title: "Support Staff",
    description:
      "Essential roles in facilities, security, library services, and campus operations.",
    icon: Users,
  },
];

export const applicationSteps: NumberedItem[] = [
  {
    number: "01",
    title: "Browse open positions.",
    description:
      "Visit the MDC recruitment portal at recruitment.mdc.edu. Search by keyword, campus, or job category.",
  },
  {
    number: "02",
    title: "Create your profile.",
    description:
      "Create an account or log in to your existing profile. Complete the online application and upload your resume.",
  },
  {
    number: "03",
    title: "Track your application.",
    description:
      "Monitor your application status through the portal. Our HR team reviews every submission thoroughly.",
  },
];

/* ─── Our Culture Page ─── */

export const ourCultureHero = {
  headline: "A Culture of Belonging",
  subtitle:
    "At MDC, diversity isn't just a value — it's our identity. We are the most diverse institution in the nation, and that diversity is our greatest strength.",
  badge: "Our Culture",
};

export const cultureCards: CardData[] = [
  {
    title: "Diversity & Inclusion",
    description:
      "With students and staff from 167+ countries, MDC reflects the rich cultural tapestry of Miami. We celebrate differences.",
    icon: Globe,
  },
  {
    title: "Collaborative Environment",
    description:
      "Cross-departmental projects, shared governance, and open-door leadership create a workplace where every voice is heard.",
    icon: Users,
  },
  {
    title: "Professional Development",
    description:
      "From new employee orientation to executive leadership institutes, MDC invests in every team member's potential.",
    icon: Star,
  },
  {
    title: "Community Engagement",
    description:
      "Employee volunteer programs, campus events, and community partnerships extend our work beyond the classroom.",
    icon: Heart,
  },
];

export const cultureTestimonials: TestimonialData[] = [
  {
    quote:
      "The moment I walked into my first all-staff meeting and heard five different languages being spoken, I knew this was where I belonged.",
    name: "Patricia Nguyen",
    role: "ESL Instructor, Wolfson Campus",
  },
  {
    quote:
      "MDC's employee resource groups gave me a community within the community. I've made lifelong friends and found mentors who've shaped my career.",
    name: "Roberto Alvarez",
    role: "Admissions Counselor, Kendall Campus",
  },
  {
    quote:
      "As a veteran, the transition to civilian work was daunting. MDC's veterans services team made me feel welcomed and supported from day one.",
    name: "Marcus Johnson",
    role: "Campus Security Supervisor, North Campus",
  },
];

export const cultureValues: NumberedItem[] = [
  {
    number: "01",
    title: "Student-centered, always.",
    description: "Every decision starts with how it impacts student success.",
  },
  {
    number: "02",
    title: "Excellence without compromise.",
    description:
      "We pursue the highest standards in teaching, service, and operations.",
  },
  {
    number: "03",
    title: "Innovation as instinct.",
    description:
      "We embrace new ideas, technologies, and approaches to fulfill our mission.",
  },
];
