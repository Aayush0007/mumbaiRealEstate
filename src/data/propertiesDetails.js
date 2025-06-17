// src\data\propertiesDetails.js
import LodhaLogo from "../assets/LodhaAmaraLogo.jpg";
import L2 from "../assets/LP6.png";
import L1 from "../assets/L1.png";
import L3 from "../assets/L3.png";
import L4 from "../assets/L4.png";
import L5 from "../assets/L5.png";
import L6 from "../assets/L6.png";
import L7 from "../assets/L7.png";
import L8 from "../assets/HeroSection.png";
import L9 from "../assets/L9.png";
import L10 from "../assets/L10.png";

const propertiesDetails = {
  lodhaAmara: {
    projectSummary: {
      logo: LodhaLogo,
      name: "Lodha Amara",
      tagline: "Do more, live more",
      description:
        "Situated in the prime locale of Kolshet, Thane, Lodha Amara offers an enriching life filled with thousands of greens, lush landscapes, and countless experiences. This expansive haven fosters a thriving community amidst nature’s embrace.",
      highlights: [
        "2-acre private forest",
        "25,000 sq.ft. clubhouse",
        "Grand sports arena",
        "Ganesha and Jain temples",
        "Close to Viviana Mall and Hiranandani Hospital",
      ],
    },
    details: {
      overview:
        "Lodha Amara is a premium residential project spanning 40 acres in Thane, blending luxury, nature, and community living. With state-of-the-art amenities like a 2-acre private forest, a grand sports arena, and a 25,000 sq.ft. clubhouse, it offers an unmatched lifestyle. The project is under construction with some units ready to move in.",
      configuration: [
        {
          type: "2 BHK with Deck",
          size: "750-850 sqft",
          layout: "Spacious with private deck",
        },
        {
          type: "3 BHK",
          size: "1000-1100 sqft",
          layout: "Luxurious with multiple balconies",
        },
      ],
      features: [
        "Vaastu-compliant designs",
        "High-speed elevators",
        "24/7 security with CCTV",
        "Power backup for common areas",
        "Sustainable design with rainwater harvesting",
      ],
      plans: [
        {
          type: "2 BHK with Deck",
          mediaType: "image",
          url: "https://www.lodhagroup.com/sites/default/files/styles/webp/public/2024-10/2-BHK-WITH-DECK-2000-X-1111.jpg.webp?itok=qHst0u4z",
        },
        {
          type: "3 BHK Unit Plan",
          mediaType: "image",
          url: "https://www.lodhagroup.com/sites/default/files/styles/webp/public/2024-10/3-BHK-WITH-DECK-2000-X-1111.jpg.webp?itok=aRQFlWi6",
        },
        {
          type: "Typical Floor Plan 1",
          mediaType: "image",
          url: "https://www.lodhagroup.com/sites/default/files/nearbyicons/TYPICAL-FLOOR-PLAN-W-43-2000-X-1111.jpg",
        },
        {
          type: "Typical Floor Plan 2",
          mediaType: "image",
          url: "https://www.lodhagroup.com/sites/default/files/nearbyicons/TYPICAL-FLOOR-PLAN-W-47-2000-X-1111.jpg",
        },
        {
          type: "Master Plan",
          mediaType: "image",
          url: "https://www.lodhagroup.com/sites/default/files/styles/master_plan_1237x687_/public/2025-03/1237X687_Master-plan-adapt-for-Lodha-Amara..jpg.webp?itok=1K0tu7jl",
        },
      ],
    },
    pricing: {
      pricingTable: [
        {
          type: "2 BHK with Deck",
          carpetArea: "750 sqft",
          price: "₹1.10 Cr - ₹1.25 Cr",
        }, // Updated
        { type: "3 BHK", carpetArea: "1000 sqft", price: "₹2 Cr - ₹2.75 Cr" }, // Updated
      ],
      offers: [
        "Zero stamp duty for first 50 bookings",
        "Free modular kitchen on select units",
      ],
    },
    amenities: {
      zones: [
        {
          name: "Mind",
          description: "Spaces designed to inspire creativity and relaxation.",
          list: [
            "Splash pads",
            "Mini-amphitheatre",
            "Cosy hammock garden",
            "Aromatic garden and grove",
            "Art and sculpture garden",
            "Barbeque areas and dining enclaves",
            "Private theatre",
            "Picnic niches",
            "Private forest with pavilions and machan",
            "Walking trails with boardwalk and canopy walk",
            "Lawns and wetland gardens",
            "Outdoor decks for meditation, tai chi, yoga, and pilates",
          ],
        },
        {
          name: "Body",
          description: "Facilities to promote an active and healthy lifestyle.",
          list: [
            "Grand sports arena for football, basketball, tennis, and badminton",
            "30 acres of open space with sports facilities",
            "5,000 sq.ft. gym",
            "Indoor sports courts",
            "Multiple swimming pools, including a covered ladies pool",
            "6 clubhouses, including 25,000 sq.ft. main clubhouse",
            "Indoor and outdoor party venues with poolside deck",
            "Lively poolside café",
            "Play village",
            "Jungle gym",
          ],
        },
        {
          name: "Soul",
          description: "Sacred and serene spaces for spiritual well-being.",
          list: [
            "Sacred garden",
            "Tree house",
            "Jain temple",
            "Ganesha temple",
          ],
        },
      ],
    },
    gallery: [L8, L2, L4, L5, L7, L3, L6, L9, L1, L10],
    videos: [
      { url: "https://www.youtube.com/watch?v=Tk3tTNQmuPM", thumbnail: L1 },
      { url: "https://www.youtube.com/watch?v=CW7BJE8k2JA", thumbnail: L1 },
      { url: "https://www.youtube.com/watch?v=pI-ZafxFJxQ", thumbnail: L1 },
      { url: "https://www.youtube.com/watch?v=HRRS-mmckqg", thumbnail: L1 },
      { url: "https://www.youtube.com/watch?v=lb4jK0qGLtc", thumbnail: L1 },
      { url: "https://www.youtube.com/watch?v=Uv2rjRdJdeA", thumbnail: L1 },
      { url: "https://www.youtube.com/watch?v=7Jn1GWPJ_wg", thumbnail: L1 },
    ],

    benefits: [
      "Prime location with excellent connectivity",
      "Sustainable design with eco-friendly features",
      "Vibrant community with festive gatherings",
      "Proximity to top schools, hospitals, and malls",
      "Holistic lifestyle with sports and nature",
    ],
    location: {
      address:
        "Kolshet Road, Kolshet Industrial Area, Thane West, Thane, Maharashtra 400607",
      description:
        "Located in prime central Thane, Lodha Amara offers seamless connectivity to Mumbai via Eastern Express Highway and Ghodbunder Road. It is close to IT hubs, corporate offices, and vibrant locales like Viviana Mall.",
      connectivity: [
        { landmark: "Eastern Express Highway", distance: "5 mins" },
        { landmark: "Thane Railway Station", distance: "20 mins" },
        { landmark: "Proposed Metro Station at Majiwada", distance: "10 mins" },
        { landmark: "Airoli", distance: "30 mins" },
        { landmark: "Kolshet Industrial Area", distance: "5 mins" },
        { landmark: "Manpada", distance: "10 mins" },
        { landmark: "Vasant Vihar", distance: "15 mins" },
      ],
      nearbyLandmarks: [
        {
          category: "Education",
          names: [
            "Kendriya Vidyalaya",
            "Blossom High School",
            "Universal High School",
            "Orchid International School",
            "CP Goenka International School",
            "Singhania School",
          ],
        },
        {
          category: "Healthcare",
          names: [
            "Hiranandani Hospital",
            "Jupiter Hospital",
            "Civil Hospital",
            "Highland Super Speciality Hospital",
            "Navjeevan Hospital",
          ],
        },
        {
          category: "Shopping & Entertainment",
          names: [
            "Lake City Mall",
            "Viviana Mall",
            "Korum Mall",
            "Boulevard Mall",
            "D Mart",
            "Big Bazaar",
            "Decathlon",
            "Hyper City",
            "Suraj Water Park",
          ],
        },
        {
          category: "Business",
          names: ["Lodha Business District"],
        },
      ],
    },
    specifications: {
      flooring: "Vitrified tiles in living areas, anti-skid tiles in bathrooms",
      kitchen:
        "Granite countertops with stainless steel sink and modular fittings",
      doors: "Hardwood frames with flush doors",
      electrical: "Concealed copper wiring with branded switches",
    },
    virtualTour: {
      link: "https://www.lodhagroup.in/projects/lodha-amara/virtual-tour",
      description:
        "Explore Lodha Amara’s residences and amenities through a 360° virtual tour.",
    },
    rera: {
      registrationNumbers: [
        "P51700001065 (Tower 1-5, 7-19)",
        "P51700014760 (Tower 6, 22)",
        "P51700016961 (Tower 20, 21)",
        "P51700020128 (Tower 24)",
        "P51700001031 (Tower 26-28, 30, 34, 35)",
        "P51700000981 (Tower 29, 31)",
        "P51700001030 (Tower 32, 33)",
        "P51700013961 (Tower 36, 37)",
        "P51700018393 (Tower 38, 39)",
        "P51700020164 (Tower 42)",
        "P51700018593 (Tower 45)",
        "P51700018579 (Tower 46)",
        "P51700020157 (Tower 50)",
      ],
      link: "https://maharera.maharashtra.gov.in",
      description:
        "Lodha Amara is registered under MahaRERA, ensuring transparency and consumer protection. Visit the MahaRERA website for detailed project information.",
      // Add to propertiesDetails.js > lodhaAmara > rera
      qrCodes: [
        {
          url: "https://www.lodhagroup.com/sites/default/files/qrcode/135x135_QR_Amara_Lodha_Amara_MLCP_Retail_P51700025892_0.jpg",
        },
        {
          url: "https://www.lodhagroup.com/sites/default/files/qrcode/135x135_QR_Amara_Lodha_Amara_Tower_24_and_25_P51700020128_0.jpg",
        },
        {
          url: "https://www.lodhagroup.com/sites/default/files/qrcode/135x135_QR_Amara_Lodha_Amara_Tower-_42_and_43_P51700020164_0.jpg",
        },
        {
          url: "https://www.lodhagroup.com/sites/default/files/qrcode/135x135_QR_Amara_Lodha_Amara_Tower_46_P51700018579_0.jpg",
        },
        {
          url: "https://www.lodhagroup.com/sites/default/files/qrcode/135x135_QR_Amara_Lodha_Amara_Tower_49_and_50_P51700020157_0.jpg",
        },
        {
          url: "https://www.lodhagroup.com/sites/default/files/qrcode/135x135_QR_Amara_Lodha_Amara_Wing_40_and_41_P51700020088_0.jpg",
        },
      ],
    },
    faqs: [
      {
        question: "Where is Amara by Lodha?",
        answer:
          "Lodha Amara is located at Kolshet Road, Kolshet Industrial Area, Thane West, Thane, Maharashtra 400607, in prime central Thane.",
      },
      {
        question: "What is life at Lodha Amara like?",
        answer:
          "Life at Lodha Amara is enriching, with lush green landscapes, a 2-acre private forest, a grand sports arena, and a 25,000 sq.ft. clubhouse. It offers a holistic lifestyle with community events, sports, and nature.",
      },
      {
        question: "What are the finishes provided in a home at Lodha Amara?",
        answer:
          "Homes feature vitrified tiles in living areas, anti-skid tiles in bathrooms, granite countertops in kitchens with stainless steel sinks, hardwood frame doors, and concealed copper wiring with branded switches.",
      },
      {
        question: "What all amenities are provided at Lodha Amara?",
        answer:
          "Amenities include a 2-acre private forest, grand sports arena, 25,000 sq.ft. clubhouse, Ganesha and Jain temples, multiple swimming pools, picnic niches, a private theatre, and more, categorized into Mind, Body, and Soul zones.",
      },
      {
        question: "Is the Club Lodha Amara open 24x7?",
        answer:
          "The clubhouse is accessible to residents, but specific operating hours may apply. Contact the management for detailed schedules.",
      },
      {
        question:
          "How well is Lodha Amara connected to other parts of the city?",
        answer:
          "Lodha Amara offers excellent connectivity via Eastern Express Highway and Ghodbunder Road, with Thane Railway Station (20 mins), a proposed metro station at Majiwada (10 mins), and Airoli (30 mins) easily accessible.",
      },
    ],
    ctaOptions: [
      { type: "Enquire Now", functionality: "#contact" },
      { type: "Schedule a Visit", functionality: "#contact" },
    ],
  },
};

export default propertiesDetails;
