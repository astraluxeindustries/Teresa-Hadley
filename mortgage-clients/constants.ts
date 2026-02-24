import { Review, NavLink, ServiceItem } from './types';

export const BUSINESS_INFO = {
  name: "Teresa Hadley",
  title: "Intercap Lending",
  nmls: "246988",
  company: "Intercap Lending",
  companyNmls: "715386",
  address: "619 S Bluff St Tower 2 Suite 1B, St. George, UT 84770",
  phone: "(425) 876-3025",
  email: "teresa@intercaplending.com",
  hours: "Open 24 hours",
  bio: `With more than three decades in the mortgage industry, Teresa Hadley brings seasoned expertise, steady guidance, and an unwavering commitment to her clients. Since beginning her career in 1993, she has helped hundreds of families navigate the complexities of home financing with clarity and confidence.

Teresa specializes in a comprehensive range of loan programs, including Conventional, FHA, USDA, and first-time homebuyer solutions. Her depth of experience allows her to anticipate challenges before they arise and structure loans strategically to create smooth, successful closings. Realtors and clients alike value her proactive communication, attention to detail, and ability to keep transactions on track from application through funding.

What sets Teresa apart is her client-first philosophy. She understands that a mortgage is more than a financial transaction. It is a pivotal life decision. Her approach combines technical precision with genuine care, ensuring each borrower feels informed, supported, and empowered throughout the process.

Licensed in Utah, Teresa continues to serve her community with integrity and professionalism. Outside of work, she enjoys spending time outdoors with her husband and three children or relaxing with a good book.

For Teresa, mortgage lending is not simply about securing financing. It is about helping families build stability, opportunity, and a place to call home."`,
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Local Resident",
    rating: 5,
    text: "She is very genuine and truly cared about my family.",
    source: "Google"
  },
  {
    id: 2,
    author: "Happy Homebuyer",
    rating: 5,
    text: "She went above and beyond in helping them get prepared to purchase a home!!!",
    source: "Google"
  },
  {
    id: 3,
    author: "Cottonwood Heights Client",
    rating: 5,
    text: "Professional, knowledgeable, and always available to answer our questions. Highly recommended.",
    source: "Google"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Home Purchase Loans",
    description: "Guiding you through every step of buying your dream home with competitive rates and personalized support."
  },
  {
    title: "Refinancing",
    description: "Lower your monthly payments or access your home's equity with our tailored refinancing solutions."
  },
  {
    title: "Investment Property",
    description: "Strategic financing options for real estate investors looking to expand their portfolio in Southern Utah."
  },
  {
    title: "Construction Loans",
    description: "Building your custom home? We offer specialized financing to help you build from the ground up."
  }
];
