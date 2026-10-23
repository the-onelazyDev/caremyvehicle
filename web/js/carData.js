// Care My Vehicle - Granular Car Launch Dataset
// Real specifications, all variants, and city-wise RTO pricing

export const CITIES = [
  { id: 'delhi', name: 'Delhi NCR', rtoRate: 0.10, cess: 500, fastag: 500 },
  { id: 'mumbai', name: 'Mumbai', rtoRate: 0.12, cess: 1500, fastag: 500 },
  { id: 'bengaluru', name: 'Bengaluru', rtoRate: 0.15, cess: 2000, fastag: 500 },
  { id: 'hyderabad', name: 'Hyderabad', rtoRate: 0.14, cess: 1200, fastag: 500 },
  { id: 'pune', name: 'Pune', rtoRate: 0.12, cess: 1500, fastag: 500 },
  { id: 'chennai', name: 'Chennai', rtoRate: 0.13, cess: 1000, fastag: 500 }
];

export const CARS = [
  {
    id: 'thar-roxx',
    name: 'Mahindra Thar Roxx',
    brand: 'Mahindra',
    tagline: '5-Door Lifestyle SUV with Panoramic Skyroof & ADAS',
    launchDate: 'August 2024',
    bodyType: 'SUV',
    fuelTypes: ['Petrol', 'Diesel'],
    priceRange: '₹12.99 - ₹22.49 Lakh',
    minPrice: 1299000,
    maxPrice: 2249000,
    safetyRating: '5.0 ★ (Bharat NCAP)',
    groundClearance: '215 mm',
    bootSpace: '644 L',
    waitingPeriod: '6 - 16 Weeks',
    heroImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    summary: 'The 5-door Thar Roxx brings family practicality to the iconic off-roader with a stretched 2850mm wheelbase, panoramic roof, and Level 2 ADAS.',
    variants: [
      {
        name: 'MX1 Petrol MT (RWD)',
        exShowroom: 1299000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '2.0L Turbo (160 bhp)',
        mileage: '12.4 kmpl',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard', '10.25-inch Touchscreen', 'ESC & All 4 Disc Brakes', 'Rear AC Vents']
      },
      {
        name: 'MX3 Petrol AT (RWD)',
        exShowroom: 1499000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '2.0L Turbo (175 bhp)',
        mileage: '11.8 kmpl',
        isVFM: false,
        keyFeatures: ['Smooth 6-Speed AT', 'Drive & Terrain Modes', 'Reverse Camera', 'Wireless Android Auto/CarPlay']
      },
      {
        name: 'MX5 Diesel MT (RWD)',
        exShowroom: 1699000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.2L mHawk (150 bhp)',
        mileage: '15.2 kmpl',
        isVFM: true,
        vfmBadge: '🏆 BEST VALUE PICK',
        keyFeatures: ['Panoramic Skyroof', '18-inch Diamond Cut Alloys', 'LED Projectors & DRLs', 'Leatherette Seats']
      },
      {
        name: 'AX5L Diesel AT (RWD)',
        exShowroom: 1899000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.2L mHawk (172 bhp)',
        mileage: '14.8 kmpl',
        isVFM: false,
        keyFeatures: ['Level 2 ADAS Suite', 'Electronic Parking Brake', 'Auto AC', 'Connected Car Tech']
      },
      {
        name: 'AX7L Diesel AT 4x4',
        exShowroom: 2249000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.2L mHawk (172 bhp)',
        mileage: '13.5 kmpl',
        isVFM: false,
        keyFeatures: ['4WD with Electronic Diff Lock', 'Ventilated Front Seats', 'Harman Kardon 9-Speaker Audio', '360° Surround Camera']
      }
    ]
  },
  {
    id: 'tata-curvv',
    name: 'Tata Curvv (ICE & EV)',
    brand: 'Tata',
    tagline: 'India’s First Mass-Market SUV Coupe with Flush Door Handles',
    launchDate: 'September 2024',
    bodyType: 'SUV Coupe',
    fuelTypes: ['Petrol', 'Diesel', 'EV'],
    priceRange: '₹9.99 - ₹18.99 Lakh',
    minPrice: 999000,
    maxPrice: 1899000,
    safetyRating: '5.0 ★ (Bharat NCAP)',
    groundClearance: '208 mm',
    bootSpace: '500 L',
    waitingPeriod: '4 - 10 Weeks',
    heroImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    summary: 'Striking aerodynamic coupe roofline, class-leading 500-litre boot, voice-assisted panoramic sunroof, and new 1.2L Hyperion Direct Injection turbo engine.',
    variants: [
      {
        name: 'Smart 1.2 Petrol MT',
        exShowroom: 999000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Revotron (120 bhp)',
        mileage: '16.8 kmpl',
        isVFM: false,
        keyFeatures: ['6 Airbags', 'LED Headlamps & DRLs', 'Flush Door Handles', 'Drive Modes']
      },
      {
        name: 'Pure+ 1.2 Petrol MT',
        exShowroom: 1099000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Revotron (120 bhp)',
        mileage: '16.8 kmpl',
        isVFM: true,
        vfmBadge: '🏆 BUDGET VALUE PICK',
        keyFeatures: ['7-inch Touchscreen', 'Steering Mounted Controls', 'Reverse Camera', 'Wheel Covers & Roof Rails']
      },
      {
        name: 'Creative+ S 1.2 Turbo DCA',
        exShowroom: 1399000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Hyperion Direct Injection (125 bhp)',
        mileage: '15.4 kmpl',
        isVFM: false,
        keyFeatures: ['Panoramic Sunroof', '10.25-inch Screen', 'Dual-Clutch DCA Transmission', 'Sequential LED Indicators']
      },
      {
        name: 'Accomplished+ A Diesel DCA',
        exShowroom: 1899000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '1.5L Kryojet (118 bhp)',
        mileage: '20.5 kmpl',
        isVFM: false,
        keyFeatures: ['Level 2 ADAS (19 Features)', 'Powered Tailgate with Gesture', 'Ventilated Seats', 'JBL 9-Speaker Audio']
      }
    ]
  },
  {
    id: 'xuv-3xo',
    name: 'Mahindra XUV 3XO',
    brand: 'Mahindra',
    tagline: 'Segment-First Panoramic Sunroof & Level 2 ADAS under 15L',
    launchDate: 'May 2024',
    bodyType: 'Compact SUV',
    fuelTypes: ['Petrol', 'Diesel'],
    priceRange: '₹7.49 - ₹15.49 Lakh',
    minPrice: 749000,
    maxPrice: 1549000,
    safetyRating: '5.0 ★ (Global NCAP)',
    groundClearance: '201 mm',
    bootSpace: '364 L',
    waitingPeriod: '4 - 12 Weeks',
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    summary: 'Massive upgrade over XUV300 with segment-first skyroof, Level 2 ADAS, 360 camera, electronic parking brake, and ultra-punchy 130 bhp mStallion TGDi engine.',
    variants: [
      {
        name: 'MX1 1.2 Petrol MT',
        exShowroom: 749000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Turbo (111 bhp)',
        mileage: '18.89 kmpl',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard', 'ESC & All 4 Discs', 'Power Windows All 4', 'LED DRLs']
      },
      {
        name: 'AX5 1.2 Petrol MT',
        exShowroom: 1069000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Turbo (111 bhp)',
        mileage: '18.89 kmpl',
        isVFM: true,
        vfmBadge: '🏆 BEST VALUE PICK',
        keyFeatures: ['Single-Pane Sunroof', 'Twin 10.25-inch Screens', 'Dual-Zone Climate Control', '16-inch Diamond Alloys']
      },
      {
        name: 'AX7L TGDi AT',
        exShowroom: 1549000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Direct Injection (130 bhp)',
        mileage: '17.96 kmpl',
        isVFM: false,
        keyFeatures: ['Panoramic Skyroof', 'Level 2 ADAS Suite', 'Harman Kardon Audio', '360° Camera & Blind View']
      }
    ]
  },
  {
    id: 'maruti-swift-2024',
    name: 'New Maruti Suzuki Swift',
    brand: 'Maruti Suzuki',
    tagline: 'All-New Z-Series Engine with 25.75 kmpl Record Mileage',
    launchDate: 'June 2024',
    bodyType: 'Hatchback',
    fuelTypes: ['Petrol', 'CNG'],
    priceRange: '₹6.49 - ₹9.64 Lakh',
    minPrice: 649000,
    maxPrice: 964000,
    safetyRating: '6 Airbags Standard',
    groundClearance: '163 mm',
    bootSpace: '265 L',
    waitingPeriod: '2 - 6 Weeks',
    heroImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80',
    summary: '4th generation Swift with completely new Z-Series 3-cylinder engine, standard 6 airbags across all variants, 9-inch SmartPlay Pro+ display, and wireless charging.',
    variants: [
      {
        name: 'LXi 1.2 Petrol MT',
        exShowroom: 649000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Z12E (82 bhp)',
        mileage: '24.8 kmpl',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard', 'ESP & Hill Hold', 'Remote Central Locking', 'Halogen Projectors']
      },
      {
        name: 'VXi 1.2 Petrol MT',
        exShowroom: 729000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Z12E (82 bhp)',
        mileage: '24.8 kmpl',
        isVFM: true,
        vfmBadge: '🏆 SWEET SPOT PICK',
        keyFeatures: ['7-inch Touchscreen Infotainment', 'Steering Controls', 'Power Adjustable ORVMs', 'USB A & C Ports']
      },
      {
        name: 'ZXi+ 1.2 Petrol AMT',
        exShowroom: 964000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Z12E (82 bhp)',
        mileage: '25.75 kmpl',
        isVFM: false,
        keyFeatures: ['9-inch Touchscreen with Arkamys Audio', 'Wireless Phone Charger', 'Rear AC Vents', '15-inch Precision Alloys']
      }
    ]
  },
  {
    id: 'hyundai-creta-facelift',
    name: 'Hyundai Creta (Facelift)',
    brand: 'Hyundai',
    tagline: 'India’s #1 Mid-Size SUV with Level 2 ADAS & Dual Curved Screens',
    launchDate: 'January 2024',
    bodyType: 'SUV',
    fuelTypes: ['Petrol', 'Diesel'],
    priceRange: '₹10.99 - ₹20.14 Lakh',
    minPrice: 1099000,
    maxPrice: 2014000,
    safetyRating: '36 Safety Features Standard',
    groundClearance: '190 mm',
    bootSpace: '433 L',
    waitingPeriod: '6 - 18 Weeks',
    heroImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    summary: 'The benchmark of the mid-size SUV segment received a radical parametric front grille, continuous horizon LED DRLs, twin 10.25-inch displays, and Level 2 ADAS.',
    variants: [
      {
        name: 'E 1.5 Petrol MT',
        exShowroom: 1099000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L MPi (115 bhp)',
        mileage: '17.4 kmpl',
        isVFM: false,
        keyFeatures: ['6 Airbags', 'All 4 Disc Brakes', 'Manual AC', 'Tire Pressure Monitor']
      },
      {
        name: 'S(O) 1.5 Petrol MT',
        exShowroom: 1432000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L MPi (115 bhp)',
        mileage: '17.4 kmpl',
        isVFM: true,
        vfmBadge: '🏆 MOST POPULAR PICK',
        keyFeatures: ['Panoramic Sunroof', 'Dual-Zone Climate Control', '17-inch Alloys', 'Electronic Parking Brake']
      },
      {
        name: 'SX(O) 1.5 Turbo DCT',
        exShowroom: 2014000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L Turbo GDi (160 bhp)',
        mileage: '18.4 kmpl',
        isVFM: false,
        keyFeatures: ['Level 2 ADAS (70+ Safety Features)', 'Bose 8-Speaker Audio', 'Ventilated Seats', '360 Camera with Blind View']
      }
    ]
  }
];

// Helper to calculate exact city on-road price
export function calculateOnRoadPrice(exShowroom, cityId) {
  const city = CITIES.find(c => c.id === cityId) || CITIES[0];
  const rto = Math.round(exShowroom * city.rtoRate);
  // Fair insurance calculation (3-yr 3rd party + 1-yr comprehensive zero dep estimate)
  const insurance = Math.round(exShowroom * 0.038);
  // 1% TCS tax if ex-showroom exceeds 10 Lakhs
  const tcs = exShowroom >= 1000000 ? Math.round(exShowroom * 0.01) : 0;
  const fastagAndCess = city.cess + city.fastag;
  const total = exShowroom + rto + insurance + tcs + fastagAndCess;

  return {
    cityName: city.name,
    exShowroom,
    rto,
    insurance,
    tcs,
    fastagAndCess,
    total
  };
}

export function formatINR(val) {
  return '₹' + Number(val).toLocaleString('en-IN');
}

export function formatLakh(val) {
  const inLakhs = (val / 100000).toFixed(2);
  return `₹${inLakhs} Lakh`;
}
