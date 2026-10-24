// Care My Vehicle - Granular Car Launch Dataset
// Real specifications, all variants, interactive colors, photo galleries, and city-wise RTO pricing

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
    tagline: '5-Door Lifestyle SUV with Panoramic Skyroof & Level 2 ADAS',
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
    summary: 'The 5-door Thar Roxx brings family practicality to the iconic off-roader with a stretched 2850mm wheelbase, panoramic skyroof, dual 10.25-inch screens, and Level 2 ADAS.',
    colors: [
      { name: 'Stealth Black', hex: '#1E293B', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' },
      { name: 'Deep Forest Green', hex: '#14532D', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' },
      { name: 'Tango Red', hex: '#B91C1C', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80' },
      { name: 'Everest White', hex: '#F8FAFC', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80' },
      { name: 'Battleship Grey', hex: '#64748B', image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80' }
    ],
    gallery: [
      { title: 'Front Bold Grille & LED Headlamps', url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' },
      { title: '10.25-inch Digital Cockpit & Screen', url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80' },
      { title: 'Panoramic Skyroof', url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' },
      { title: 'Massive 644L Boot Capacity', url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80' }
    ],
    specs: {
      engineOptions: '2.0L mStallion Turbo Petrol (160/175 bhp) | 2.2L mHawk Diesel (150/172 bhp)',
      transmissions: '6-Speed Manual & 6-Speed Aisin Torque Converter AT',
      dimensions: '4428 mm (L) × 1870 mm (W) × 1923 mm (H)',
      wheelbase: '2850 mm',
      fuelTank: '57 Litres',
      seatingCapacity: '5 Passengers'
    },
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
    colors: [
      { name: 'Virtual Sunrise Blue', hex: '#0284C7', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80' },
      { name: 'Gold Essence', hex: '#D97706', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80' },
      { name: 'Pristine White', hex: '#F8FAFC', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' },
      { name: 'Daytona Grey', hex: '#475569', image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80' },
      { name: 'Flame Red', hex: '#DC2626', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' }
    ],
    gallery: [
      { title: 'Coupe Roofline & Flush Handles', url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80' },
      { title: '12.3-inch Cinematic Screen & Touch AC', url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80' },
      { title: 'Voice-Assisted Panoramic Sunroof', url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' },
      { title: 'Segment-Best 500L Boot', url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' }
    ],
    specs: {
      engineOptions: '1.2L Revotron (120 bhp) | 1.2L Hyperion GDi (125 bhp) | 1.5L Kryojet Diesel (118 bhp)',
      transmissions: '6-Speed Manual & 7-Speed Dual-Clutch (DCA)',
      dimensions: '4308 mm (L) × 1810 mm (W) × 1630 mm (H)',
      wheelbase: '2560 mm',
      fuelTank: '44 Litres',
      seatingCapacity: '5 Passengers'
    },
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
    id: 'maruti-swift-2024',
    name: 'New Maruti Suzuki Swift',
    brand: 'Maruti Suzuki',
    tagline: 'All-New Z-Series Engine with 25.75 kmpl Record Mileage',
    launchDate: 'May 2024',
    bodyType: 'Hatchback',
    fuelTypes: ['Petrol', 'CNG'],
    priceRange: '₹6.49 - ₹9.64 Lakh',
    minPrice: 649000,
    maxPrice: 964000,
    safetyRating: '6 Airbags Standard Across All Variants',
    groundClearance: '163 mm',
    bootSpace: '265 L',
    waitingPeriod: '2 - 6 Weeks',
    heroImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80',
    summary: '4th generation Swift with completely new Z-Series 3-cylinder engine, standard 6 airbags across all variants, 9-inch SmartPlay Pro+ display, and wireless charging.',
    colors: [
      { name: 'Luster Blue', hex: '#2563EB', image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80' },
      { name: 'Sizzling Red', hex: '#DC2626', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80' },
      { name: 'Pearl Arctic White', hex: '#F8FAFC', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' },
      { name: 'Magma Grey', hex: '#475569', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' },
      { name: 'Splendid Silver', hex: '#CBD5E1', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80' }
    ],
    gallery: [
      { title: 'Front Facia with Piano Black Grille', url: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80' },
      { title: '9-inch SmartPlay Pro+ Touchscreen Cockpit', url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80' },
      { title: 'Sporty Dual-Tone Diamond Cut Alloys', url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' },
      { title: '265 Litres Practical Boot Space', url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80' }
    ],
    specs: {
      engineOptions: '1.2L 3-Cylinder Z12E Petrol (82 bhp / 112 Nm) & S-CNG (69.7 bhp)',
      transmissions: '5-Speed Manual (MT) & 5-Speed Auto Gear Shift (AMT)',
      dimensions: '3860 mm (L) × 1735 mm (W) × 1520 mm (H)',
      wheelbase: '2450 mm',
      fuelTank: '37 Litres',
      seatingCapacity: '5 Passengers'
    },
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
        name: 'ZXi 1.2 Petrol MT',
        exShowroom: 829000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Z12E (82 bhp)',
        mileage: '24.8 kmpl',
        isVFM: false,
        keyFeatures: ['LED Projectors & DRLs', 'Wireless Charger', '15-inch Alloys', 'Engine Push Start/Stop']
      },
      {
        name: 'ZXi+ 1.2 Petrol AMT',
        exShowroom: 964000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Z12E (82 bhp)',
        mileage: '25.75 kmpl',
        isVFM: false,
        keyFeatures: ['9-inch Touchscreen with Arkamys Audio', 'Cruise Control', 'Rear AC Vents', 'Precision Cut Alloys']
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
    colors: [
      { name: 'Citrine Yellow', hex: '#EAB308', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' },
      { name: 'Stealth Black', hex: '#0F172A', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' },
      { name: 'Deep Forest', hex: '#166534', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80' },
      { name: 'Everest White', hex: '#F8FAFC', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80' }
    ],
    gallery: [
      { title: 'Futuristic Front Grille & DRLs', url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' },
      { title: 'Panoramic Skyroof in Sub-4M Segment', url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' },
      { title: 'Twin 10.25-inch Digital Screens', url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80' },
      { title: '364L Deep Boot Space', url: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80' }
    ],
    specs: {
      engineOptions: '1.2L Turbo TCMPFi (111 bhp) | 1.2L TGDi Turbo (130 bhp) | 1.5L CRDe Diesel (117 bhp)',
      transmissions: '6-Speed Manual & 6-Speed Aisin Torque Converter AT',
      dimensions: '3990 mm (L) × 1821 mm (W) × 1647 mm (H)',
      wheelbase: '2600 mm',
      fuelTank: '42 Litres',
      seatingCapacity: '5 Passengers'
    },
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
    colors: [
      { name: 'Robust Emerald Pearl', hex: '#064E3B', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80' },
      { name: 'Ranger Khaki', hex: '#78716C', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' },
      { name: 'Abyss Black', hex: '#0F172A', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' },
      { name: 'Atlas White', hex: '#F8FAFC', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80' },
      { name: 'Fiery Red', hex: '#DC2626', image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80' }
    ],
    gallery: [
      { title: 'Horizon LED Lightbar & Front Grille', url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80' },
      { title: 'Dual Integrated 10.25-inch Curved Cockpit', url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' },
      { title: 'Voice-Controlled Panoramic Sunroof', url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' },
      { title: 'Generous 433L Boot Space', url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80' }
    ],
    specs: {
      engineOptions: '1.5L MPi Petrol (115 bhp) | 1.5L Turbo GDi (160 bhp) | 1.5L U2 CRDi Diesel (116 bhp)',
      transmissions: '6-Speed MT, IVT (CVT), 6-Speed AT, and 7-Speed Dual Clutch (DCT)',
      dimensions: '4330 mm (L) × 1790 mm (W) × 1635 mm (H)',
      wheelbase: '2610 mm',
      fuelTank: '50 Litres',
      seatingCapacity: '5 Passengers'
    },
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
  const insurance = Math.round(exShowroom * 0.038);
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
