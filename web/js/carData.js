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
    id: 'maruti-alto-k10',
    name: 'Maruti Suzuki Alto K10',
    brand: 'Maruti Suzuki',
    tagline: 'India’s Most Accessible Car with 6 Airbags Standard & 33.40 km/kg CNG',
    launchDate: 'Updated 2024 (6 Airbags Standard)',
    bodyType: 'Hatchback',
    fuelTypes: ['Petrol', 'CNG'],
    priceRange: '₹3.99 - ₹5.96 Lakh',
    minPrice: 399000,
    maxPrice: 596000,
    safetyRating: '6 Airbags Standard Across All Variants (1st in Segment)',
    groundClearance: '160 mm',
    bootSpace: '214 L',
    waitingPeriod: '1 - 3 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/alto_k10_hero.jpg',
    summary: 'The iconic Alto K10 now comes with standard 6 airbags, Electronic Stability Program (ESP), 7-inch SmartPlay Studio touchscreen with Apple CarPlay/Android Auto, and an ultra-frugal 1.0L Next-Gen K-Series Dual Jet engine delivering up to 33.40 km/kg on CNG.',
    colors: [
      { name: 'Metallic Sizzling Red', hex: '#DC2626', image: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/alto_k10_red.jpg' },
      { name: 'Metallic Speedy Blue', hex: '#2563EB', image: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/alto_k10_blue.jpg' },
      { name: 'Solid White', hex: '#F8FAFC', image: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/alto_k10_white.jpg' },
      { name: 'Metallic Silky Silver', hex: '#CBD5E1', image: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/alto_k10_silver.jpg' },
      { name: 'Metallic Granite Grey', hex: '#475569', image: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/alto_k10_grey.jpg' },
      { name: 'Premium Earth Gold', hex: '#D97706', image: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/alto_k10_gold.jpg' },
      { name: 'Bluish Black', hex: '#0F172A', image: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/alto_k10_black.jpg' }
    ],
    angles: [
      { label: 'Front 3/4th (Hero)', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/official/exterior/hero_front_three_quarter.jpg' },
      { label: 'Side Profile & Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/official/exterior/hero_side_profile.jpg' },
      { label: 'Lively Cabin & Seating', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/official/interior/lively_cabin_seating.jpg' },
      { label: 'Next-Gen K-Series 1.0L Engine', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/official/performance_safety/kseries_dualjet_1_0l_engine.jpg' },
      { label: '6 Airbags Standard Safety', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/official/performance_safety/six_airbags_standard.jpg' }
    ],
    gallery: [
      { title: 'Front 3/4th Stance on Highway', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/official/exterior/hero_front_three_quarter.jpg' },
      { title: 'Youthful Profile with Honeycomb Wheel Covers', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/official/exterior/hero_side_profile.jpg' },
      { title: 'Lively & Spacious Dual-Tone Cabin Layout', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/official/interior/lively_cabin_seating.jpg' },
      { title: '7-inch SmartPlay Studio Touchscreen with Navigation', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/official/interior/smartplay_7inch_touchscreen.jpg' },
      { title: 'Steering Mounted Audio & Voice Control', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/official/interior/steering_mounted_controls.jpg' },
      { title: 'Digital Speedometer with Dynamic Display', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/official/interior/digital_speedometer_display.jpg' },
      { title: 'Next-Gen K-Series 1.0L Dual Jet, Dual VVT Engine', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/official/performance_safety/kseries_dualjet_1_0l_engine.jpg' },
      { title: '6 Airbags Standard Deployment Cutaway', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/official/performance_safety/six_airbags_standard.jpg' },
      { title: 'Electronic Stability Program (ESP) Demonstration', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/official/performance_safety/esp_stability_program.jpg' },
      { title: 'Chassis Dimensions & Turning Radius Blueprint', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/official/specs/chassis_dimensions_blueprint.jpg' }
    ],
    specs: {
      engineOptions: '1.0L K10C Dual Jet Dual VVT (67 bhp / 91.1 Nm) | S-CNG (56 bhp / 82.1 Nm)',
      transmissions: '5-Speed Manual (5MT) & Auto Gear Shift (AGS)',
      dimensions: '3530 mm (L) × 1490 mm (W) × 1520 mm (H)',
      wheelbase: '2380 mm',
      fuelTank: '27 Litres (Petrol) / 55 Litres Water Equivalent (CNG)',
      seatingCapacity: '5 Persons (Petrol) / 4 Persons (CNG)'
    },
    variants: [
      {
        name: 'Std(O) 1.0 Petrol MT',
        exShowroom: 399000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L K10C DualJet (67 bhp)',
        mileage: '24.39 kmpl',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard', 'ABS with EBD & ESP', 'Reverse Parking Sensors', 'High-Speed Alert']
      },
      {
        name: 'LXi(O) 1.0 Petrol MT',
        exShowroom: 483500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L K10C DualJet (67 bhp)',
        mileage: '24.39 kmpl',
        isVFM: false,
        keyFeatures: ['Air Conditioner with Heater', 'Power Steering', 'Body Coloured Bumpers', '6 Airbags Standard']
      },
      {
        name: 'VXi(O) 1.0 Petrol MT',
        exShowroom: 506000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L K10C DualJet (67 bhp)',
        mileage: '24.39 kmpl',
        isVFM: true,
        vfmBadge: '🏆 BEST VALUE PICK',
        keyFeatures: ['SmartPlay Dock Audio System', 'Front Power Windows', 'Remote Keyless Entry', 'Central Door Locking', '13-inch Full Wheel Covers']
      },
      {
        name: 'VXi(O) 1.0 Petrol AGS',
        exShowroom: 556000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.0L K10C DualJet (67 bhp)',
        mileage: '24.90 kmpl',
        isVFM: false,
        keyFeatures: ['Clutchless 5-Speed Auto Gear Shift (AGS)', 'Gear Position Indicator', 'Front Power Windows', 'Keyless Remote']
      },
      {
        name: 'VXi+(O) 1.0 Petrol MT',
        exShowroom: 535000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L K10C DualJet (67 bhp)',
        mileage: '24.39 kmpl',
        isVFM: false,
        keyFeatures: ['17.78 cm (7-inch) Touchscreen SmartPlay Studio', 'Apple CarPlay & Android Auto', 'Steering Mounted Audio Controls', '4 Speakers (1st in Segment)', 'Rear Parcel Tray']
      },
      {
        name: 'VXi+(O) 1.0 Petrol AGS',
        exShowroom: 585000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.0L K10C DualJet (67 bhp)',
        mileage: '24.90 kmpl',
        isVFM: false,
        keyFeatures: ['7-inch Touchscreen Infotainment', 'Auto Gear Shift (AGS)', 'Steering Controls', 'Silver Interior Accents']
      },
      {
        name: 'LXi(O) 1.0 S-CNG MT',
        exShowroom: 573500,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.0L K10C S-CNG (56 bhp)',
        mileage: '33.40 km/kg',
        isVFM: false,
        keyFeatures: ['Factory-Fitted S-CNG Kit', '33.40 km/kg Mileage', 'AC & Power Steering', '6 Airbags Standard']
      },
      {
        name: 'VXi(O) 1.0 S-CNG MT',
        exShowroom: 596000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.0L K10C S-CNG (56 bhp)',
        mileage: '33.40 km/kg',
        isVFM: true,
        vfmBadge: '🏆 BEST MILEAGE PICK',
        keyFeatures: ['Factory S-CNG (33.40 km/kg)', 'SmartPlay Dock Audio', 'Front Power Windows', 'Remote Keyless Entry']
      }
    ]
  },
  {
    id: 'maruti-swift',
    name: 'Maruti Suzuki Swift',
    brand: 'Maruti Suzuki',
    tagline: 'The Epic New Swift with All-New Z-Series Engine, 6 Airbags Standard & 360° Studio',
    launchDate: 'All-New 4th Gen 2024',
    bodyType: 'Hatchback',
    fuelTypes: ['Petrol', 'CNG'],
    priceRange: '₹6.49 - ₹9.64 Lakh',
    minPrice: 649000,
    maxPrice: 964500,
    safetyRating: '6 Airbags Standard Across All Variants, ESP & Hill Hold Assist',
    groundClearance: '163 mm',
    bootSpace: '265 L',
    waitingPeriod: '2 - 4 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/swift/360/sizzling-red-bluish-black/4.webp',
    summary: 'The Epic New 4th Generation Swift features the all-new 1.2L 3-cylinder Z-Series Dual Jet engine delivering up to 25.75 km/l (and 32.85 km/kg on S-CNG). It brings standard 6 airbags across every single variant, 9-inch SmartPlay Pro+ touchscreen with wireless CarPlay/Android Auto, Arkamys Surround Sense audio, wireless charging, and cruise control.',
    spin360: {
      totalFrames: 24,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/swift/360',
      format: 'webp',
      defaultColor: 'sizzling-red-bluish-black',
      colors: [
        { id: 'sizzling-red-bluish-black', name: 'Sizzling Red with Bluish Black', hex: '#DC2626' },
        { id: 'luster-blue', name: 'Luster Blue', hex: '#1F47C2' },
        { id: 'pearl-arctic-white', name: 'Pearl Arctic White', hex: '#F8FAFC' },
        { id: 'magma-grey', name: 'Magma Grey', hex: '#475569' },
        { id: 'splendid-silver', name: 'Splendid Silver', hex: '#CBD5E1' },
        { id: 'novel-orange', name: 'Novel Orange', hex: '#B33316' }
      ]
    },
    colors: [
      { name: 'Sizzling Red with Bluish Black', hex: '#DC2626', image: 'https://ik.imagekit.io/2908vvlod/cars/swift/360/sizzling-red-bluish-black/4.webp' },
      { name: 'Luster Blue', hex: '#1F47C2', image: 'https://ik.imagekit.io/2908vvlod/cars/swift/360/luster-blue/4.webp' },
      { name: 'Pearl Arctic White', hex: '#F8FAFC', image: 'https://ik.imagekit.io/2908vvlod/cars/swift/360/pearl-arctic-white/4.webp' },
      { name: 'Magma Grey', hex: '#475569', image: 'https://ik.imagekit.io/2908vvlod/cars/swift/360/magma-grey/4.webp' },
      { name: 'Splendid Silver', hex: '#CBD5E1', image: 'https://ik.imagekit.io/2908vvlod/cars/swift/360/splendid-silver/4.webp' },
      { name: 'Novel Orange', hex: '#B33316', image: 'https://ik.imagekit.io/2908vvlod/cars/swift/360/novel-orange/4.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Studio View', url: 'https://ik.imagekit.io/2908vvlod/cars/swift/360/sizzling-red-bluish-black/4.webp' },
      { label: 'Front Fascia & Grille', url: 'https://ik.imagekit.io/2908vvlod/cars/swift/360/sizzling-red-bluish-black/1.webp' },
      { label: 'Side Profile & Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/swift/360/sizzling-red-bluish-black/7.webp' },
      { label: 'Rear Connected LED Taillamps', url: 'https://ik.imagekit.io/2908vvlod/cars/swift/360/sizzling-red-bluish-black/13.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/swift/360/sizzling-red-bluish-black/4.webp' },
      { title: 'Sporty Glossy Black Grille & DRLs', url: 'https://ik.imagekit.io/2908vvlod/cars/swift/360/sizzling-red-bluish-black/1.webp' },
      { title: 'Side Profile with Dual-Tone Precision Cut Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/swift/360/sizzling-red-bluish-black/7.webp' },
      { title: 'Rear Aerodynamic Stance & LED Tail-Lamps', url: 'https://ik.imagekit.io/2908vvlod/cars/swift/360/sizzling-red-bluish-black/13.webp' }
    ],
    specs: {
      engineOptions: '1.2L Z12E 3-Cylinder Dual Jet Dual VVT (81.58 PS / 111.7 Nm) | S-CNG (69.75 PS / 101.8 Nm)',
      transmissions: '5-Speed Manual (5MT) & 5-Speed Auto Gear Shift (AGS)',
      dimensions: '3860 mm (L) × 1735 mm (W) × 1520 mm (H)',
      wheelbase: '2450 mm',
      fuelTank: '37 Litres (Petrol) / 55 Litres Water Equivalent (CNG)',
      brakes: 'Front Ventilated Disc / Rear Drum with ABS & EBD',
      suspension: 'MacPherson Strut (Front) / Torsion Beam with Coil Spring (Rear)',
      safety: '6 Airbags Standard, Electronic Stability Program (ESP), Hill Hold Assist, Reverse Camera with Guidelines'
    },
    variants: [
      {
        name: 'LXi 1.2L 5MT',
        exShowroom: 649000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Z12E Dual Jet (81.6 PS)',
        mileage: '24.80 km/l',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard', 'Electronic Stability Program (ESP)', 'Hill Hold Assist', 'Halogen Projector Headlamps', 'All 4 Power Windows', 'Remote Keyless Entry']
      },
      {
        name: 'VXi 1.2L 5MT',
        exShowroom: 729500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Z12E Dual Jet (81.6 PS)',
        mileage: '24.80 km/l',
        isVFM: true,
        vfmBadge: '🔥 BEST VALUE FOR MONEY',
        keyFeatures: ['7-inch SmartPlay Touchscreen', 'Wireless Android Auto & Apple CarPlay', 'Steering Mounted Audio Controls', 'Electrically Adjustable ORVMs', 'Day/Night IRVM']
      },
      {
        name: 'VXi 1.2L AGS (Automatic)',
        exShowroom: 779500,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Z12E Dual Jet (81.6 PS)',
        mileage: '25.75 km/l',
        isVFM: false,
        keyFeatures: ['5-Speed Auto Gear Shift (AGS)', '25.75 km/l Outstanding Fuel Economy', 'Gear Shift Indicator', 'Hill Hold Assist']
      },
      {
        name: 'VXi 1.2L S-CNG 5MT',
        exShowroom: 819500,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L Z12E S-CNG (69.75 PS)',
        mileage: '32.85 km/kg',
        isVFM: true,
        vfmBadge: '⚡ TOP CNG FUEL ECONOMY',
        keyFeatures: ['Factory S-CNG (32.85 km/kg)', 'Dual Interdependent ECUs', 'Micro-Switch Fuel Cutoff', '7-inch SmartPlay Screen']
      },
      {
        name: 'ZXi 1.2L 5MT',
        exShowroom: 829500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Z12E Dual Jet (81.6 PS)',
        mileage: '24.80 km/l',
        isVFM: false,
        keyFeatures: ['LED Projector Headlamps & DRLs', '15-inch Alloy Wheels', 'Automatic Climate Control', 'Engine Push Start/Stop with Smart Key', 'Wireless Phone Charger']
      },
      {
        name: 'ZXi 1.2L AGS (Automatic)',
        exShowroom: 879500,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Z12E Dual Jet (81.6 PS)',
        mileage: '25.75 km/l',
        isVFM: false,
        keyFeatures: ['5-Speed AGS Automatic', 'Auto Climate Control', '15-inch Alloys', 'Reverse Parking Camera', 'Rear AC Vents']
      },
      {
        name: 'ZXi+ 1.2L 5MT (Dual Tone)',
        exShowroom: 899500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Z12E Dual Jet (81.6 PS)',
        mileage: '24.80 km/l',
        isVFM: false,
        keyFeatures: ['9-inch SmartPlay Pro+ HD Touchscreen', 'Arkamys Surround Sense Audio', 'Cruise Control', 'Precision Cut Two-Tone Alloys', 'Auto-Folding ORVMs']
      },
      {
        name: 'ZXi+ 1.2L AGS Dual Tone',
        exShowroom: 964500,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Z12E Dual Jet (81.6 PS)',
        mileage: '25.75 km/l',
        isVFM: false,
        keyFeatures: ['Top-Spec AGS Automatic', '9-inch Pro+ Display with OTA Updates', 'Arkamys 6-Speaker Audio', 'Cruise Control', 'Dual Tone Roof']
      }
    ]
  },
  {
    id: 'maruti-brezza',
    name: 'Maruti Suzuki Brezza',
    brand: 'Maruti Suzuki',
    tagline: 'City-Bred Compact SUV with Electric Sunroof, Head-Up Display & 360° Studio',
    launchDate: 'Updated 2024 (Electric Sunroof & 360° View)',
    bodyType: 'Compact SUV',
    fuelTypes: ['Petrol', 'CNG'],
    priceRange: '₹8.34 - ₹13.98 Lakh',
    minPrice: 834000,
    maxPrice: 1398000,
    safetyRating: 'ESP, Hill Hold Assist, 6 Airbags (Top Variants) & 360° Camera',
    groundClearance: '198 mm',
    bootSpace: '328 L',
    waitingPeriod: '3 - 6 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/brezza/360/sizzling-red-bluish-black/4.webp',
    summary: 'The Maruti Suzuki Brezza is one of India’s highest selling compact SUVs powered by the refined 1.5L K15C Dual Jet Smart Hybrid engine (and factory S-CNG). It features an electric sunroof, 360-degree surround view camera, Head-Up Display (HUD), paddle shifters with 6-speed torque converter automatic, and 9-inch SmartPlay Pro+ infotainment with wireless Apple CarPlay/Android Auto.',
    spin360: {
      totalFrames: 24,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/brezza/360',
      format: 'webp',
      defaultColor: 'sizzling-red-bluish-black',
      colors: [
        { id: 'sizzling-red-bluish-black', name: 'Sizzling Red with Bluish Black', hex: '#990000' },
        { id: 'lustrous-beige', name: 'Lustrous Beige / Brave Khaki', hex: '#9F957A' },
        { id: 'pearl-arctic-white', name: 'Pearl Arctic White', hex: '#F3F3F3' },
        { id: 'magma-gray', name: 'Magma Gray', hex: '#555347' },
        { id: 'splendid-silver', name: 'Splendid Silver', hex: '#A5AFB1' },
        { id: 'pearl-bluish-black', name: 'Pearl Bluish Black', hex: '#0C0D11' }
      ]
    },
    colors: [
      { name: 'Sizzling Red with Bluish Black', hex: '#990000', image: 'https://ik.imagekit.io/2908vvlod/cars/brezza/360/sizzling-red-bluish-black/4.webp' },
      { name: 'Lustrous Beige / Brave Khaki', hex: '#9F957A', image: 'https://ik.imagekit.io/2908vvlod/cars/brezza/360/lustrous-beige/4.webp' },
      { name: 'Pearl Arctic White', hex: '#F3F3F3', image: 'https://ik.imagekit.io/2908vvlod/cars/brezza/360/pearl-arctic-white/4.webp' },
      { name: 'Magma Gray', hex: '#555347', image: 'https://ik.imagekit.io/2908vvlod/cars/brezza/360/magma-gray/4.webp' },
      { name: 'Splendid Silver', hex: '#A5AFB1', image: 'https://ik.imagekit.io/2908vvlod/cars/brezza/360/splendid-silver/4.webp' },
      { name: 'Pearl Bluish Black', hex: '#0C0D11', image: 'https://ik.imagekit.io/2908vvlod/cars/brezza/360/pearl-bluish-black/4.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Studio View', url: 'https://ik.imagekit.io/2908vvlod/cars/brezza/360/sizzling-red-bluish-black/4.webp' },
      { label: 'Front Grille & Skid Plate', url: 'https://ik.imagekit.io/2908vvlod/cars/brezza/360/sizzling-red-bluish-black/1.webp' },
      { label: 'Side Profile & SUV Cladding', url: 'https://ik.imagekit.io/2908vvlod/cars/brezza/360/sizzling-red-bluish-black/7.webp' },
      { label: 'Rear Connected LED Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/brezza/360/sizzling-red-bluish-black/13.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/brezza/360/sizzling-red-bluish-black/4.webp' },
      { title: 'Geometric Front Grille with Chrome & Dual LED DRLs', url: 'https://ik.imagekit.io/2908vvlod/cars/brezza/360/sizzling-red-bluish-black/1.webp' },
      { title: 'Bold SUV Profile with Precision Cut Alloys & Roof Rails', url: 'https://ik.imagekit.io/2908vvlod/cars/brezza/360/sizzling-red-bluish-black/7.webp' },
      { title: 'Rear Aerodynamic Roof Spoiler & Slim LED Taillamps', url: 'https://ik.imagekit.io/2908vvlod/cars/brezza/360/sizzling-red-bluish-black/13.webp' }
    ],
    specs: {
      engineOptions: '1.5L K15C Dual Jet Smart Hybrid (103 PS / 136.8 Nm) | S-CNG (87.8 PS / 121.5 Nm)',
      transmissions: '5-Speed Manual (5MT) & 6-Speed Torque Converter AT with Paddle Shifters',
      dimensions: '3995 mm (L) × 1790 mm (W) × 1685 mm (H)',
      wheelbase: '2500 mm',
      fuelTank: '48 Litres (Petrol) / 55 Litres Water Equivalent (CNG)',
      brakes: 'Front Ventilated Disc / Rear Drum with ABS & EBD',
      suspension: 'MacPherson Strut (Front) / Torsion Beam (Rear)',
      safety: 'Electronic Stability Program (ESP), Hill Hold Assist, 6 Airbags, 360 View Camera with Dynamic Guidelines'
    },
    variants: [
      {
        name: 'LXi 1.5L 5MT',
        exShowroom: 834000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '19.89 km/l',
        isVFM: false,
        keyFeatures: ['ESP & Hill Hold Assist', 'Halogen Projector Headlamps', 'All 4 Power Windows', 'Keyless Entry', 'Rear AC Vents']
      },
      {
        name: 'VXi 1.5L 5MT',
        exShowroom: 969500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '19.89 km/l',
        isVFM: true,
        vfmBadge: '🔥 BEST VALUE FOR MONEY',
        keyFeatures: ['7-inch SmartPlay Touchscreen', 'Automatic Climate Control', 'Rear Defogger', 'Steering Mounted Audio Controls', 'Electrically Folding ORVMs']
      },
      {
        name: 'VXi 1.5L S-CNG 5MT',
        exShowroom: 1064000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.5L K15C S-CNG (87.8 PS)',
        mileage: '25.51 km/kg',
        isVFM: true,
        vfmBadge: '⚡ TOP SUV CNG PICK',
        keyFeatures: ['Factory S-CNG (25.51 km/kg)', 'Dual Interdependent ECUs', 'Auto Climate Control', '7-inch Touchscreen']
      },
      {
        name: 'VXi 1.5L 6AT (Automatic)',
        exShowroom: 1109500,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '19.80 km/l',
        isVFM: false,
        keyFeatures: ['6-Speed Torque Converter AT', 'Paddle Shifters', 'Hill Descent Control', 'Cruise Control']
      },
      {
        name: 'ZXi 1.5L 5MT',
        exShowroom: 1114500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '19.89 km/l',
        isVFM: false,
        keyFeatures: ['Electric Sunroof', 'Dual LED Projector Headlamps & DRLs', '16-inch Alloy Wheels', 'Engine Push Start/Stop', 'Rear Wiper & Washer']
      },
      {
        name: 'ZXi 1.5L S-CNG 5MT',
        exShowroom: 1209500,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.5L K15C S-CNG (87.8 PS)',
        mileage: '25.51 km/kg',
        isVFM: false,
        keyFeatures: ['Electric Sunroof with S-CNG', '16-inch Alloys', 'Dual LED Projectors', 'Push Button Start']
      },
      {
        name: 'ZXi 1.5L 6AT (Automatic)',
        exShowroom: 1254500,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '19.80 km/l',
        isVFM: false,
        keyFeatures: ['Electric Sunroof', '6-Speed AT with Paddle Shifters', 'Cruise Control', '16-inch Alloy Wheels']
      },
      {
        name: 'ZXi+ 1.5L 5MT (Dual Tone)',
        exShowroom: 1274000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '19.89 km/l',
        isVFM: false,
        keyFeatures: ['360° Surround View Camera', 'Head-Up Display (HUD)', '9-inch SmartPlay Pro+ Touchscreen', 'Arkamys Surround Sound', 'Wireless Charging', '6 Airbags']
      },
      {
        name: 'ZXi+ 1.5L 6AT (Dual Tone)',
        exShowroom: 1398000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '19.80 km/l',
        isVFM: false,
        keyFeatures: ['Top-Spec 6-Speed AT with Paddle Shifters', '360° Camera', 'Head-Up Display', 'Electric Sunroof', 'Dual Tone Floating Roof']
      }
    ]
  },
  {
    id: 'hyundai-grand-i10-nios',
    name: 'Hyundai Grand i10 Nios',
    brand: 'Hyundai',
    tagline: 'India’s Favorite Premium Hatchback with 6 Airbags Standard & 360° Turntable View',
    launchDate: 'Updated 2024 (6 Airbags Standard)',
    bodyType: 'Hatchback',
    fuelTypes: ['Petrol', 'CNG'],
    priceRange: '₹5.92 - ₹8.56 Lakh',
    minPrice: 592300,
    maxPrice: 856000,
    safetyRating: '6 Airbags Standard (ESC & Hill Start Assist)',
    groundClearance: '165 mm',
    bootSpace: '260 L',
    waitingPeriod: '2 - 4 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/hero.jpg',
    summary: 'The new Hyundai Grand i10 Nios sets the benchmark in premium compact hatchbacks with standard 6 airbags, 8-inch touchscreen infotainment with Apple CarPlay/Android Auto, wireless phone charger, cruise control, and refined 1.2L Kappa petrol & factory Bi-Fuel CNG engines.',
    spin360: {
      totalFrames: 24,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/360',
      defaultColor: 'teal-blue',
      colors: [
        { name: 'Teal Blue', hex: '#153854', folderName: 'teal-blue' },
        { name: 'Fiery Red', hex: '#9F1414', folderName: 'fiery-red' },
        { name: 'Typhoon Silver', hex: '#DFE1E3', folderName: 'typhoon-silver' },
        { name: 'Titan Grey', hex: '#4E5359', folderName: 'titan-grey' }
      ]
    },
    colors: [
      { name: 'Teal Blue', hex: '#153854', image: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/360/teal-blue/4.jpg' },
      { name: 'Fiery Red', hex: '#9F1414', image: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/360/fiery-red/4.jpg' },
      { name: 'Typhoon Silver', hex: '#DFE1E3', image: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/360/typhoon-silver/4.jpg' },
      { name: 'Titan Grey', hex: '#4E5359', image: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/360/titan-grey/4.jpg' }
    ],
    gallery: [
      { title: 'Front Three-Quarter Turntable View', url: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/360/teal-blue/4.jpg' },
      { title: 'Sporty Painted Honeycomb Grille & DRLs', url: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/360/teal-blue/1.jpg' },
      { title: 'Side Profile & Two-Tone Alloy Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/360/teal-blue/7.jpg' },
      { title: 'Rear Connected LED Tail-lamp Cluster', url: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/360/teal-blue/13.jpg' }
    ],
    specs: {
      engineOptions: '1.2L Kappa Dual VVT Petrol (82 bhp / 114 Nm) | 1.2L Bi-Fuel CNG (68 bhp / 95 Nm)',
      transmissions: '5-Speed Manual (5MT) & Smart Auto AMT',
      dimensions: '3815 mm (L) × 1680 mm (W) × 1520 mm (H)',
      wheelbase: '2450 mm',
      fuelTank: '37 Litres (Petrol) / 60 Litres Water Equivalent (CNG)',
      seatingCapacity: '5 Passengers'
    },
    variants: [
      {
        name: 'Era 1.2 Petrol MT',
        exShowroom: 592300,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa (82 bhp)',
        mileage: '20.7 kmpl',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard', 'ABS with EBD & ESC', 'Central Locking', 'Front Power Windows']
      },
      {
        name: 'Magna 1.2 Petrol MT',
        exShowroom: 678000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa (82 bhp)',
        mileage: '20.7 kmpl',
        isVFM: false,
        keyFeatures: ['2-DIN Audio with Bluetooth', 'Steering Mounted Controls', 'Rear AC Vents', 'Remote Keyless Entry']
      },
      {
        name: 'Sportz Executive 1.2 Petrol MT',
        exShowroom: 728000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa (82 bhp)',
        mileage: '20.7 kmpl',
        isVFM: true,
        vfmBadge: '🏆 MOST POPULAR PICK',
        keyFeatures: ['8-inch Touchscreen with Android Auto / Apple CarPlay', 'Reverse Camera & Sensors', 'Cruise Control', '15-inch Dual-Tone Stylised Wheels']
      },
      {
        name: 'Sportz 1.2 Petrol AMT (Auto)',
        exShowroom: 793000,
        fuel: 'Petrol',
        trans: 'AMT Auto',
        engine: '1.2L Kappa (82 bhp)',
        mileage: '20.1 kmpl',
        isVFM: false,
        keyFeatures: ['Convenient Smart Auto AMT', 'Hill Start Assist Control (HAC)', 'LED DRLs & Projector Headlamps', 'Auto Climate Control (FATC)']
      },
      {
        name: 'Magna 1.2 Bi-Fuel CNG',
        exShowroom: 768000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L Bi-Fuel CNG (68 bhp)',
        mileage: '27.0 km/kg',
        isVFM: true,
        vfmBadge: '🏆 BEST MILEAGE PICK',
        keyFeatures: ['Factory Fitted CNG with Dual ECU', '27.0 km/kg Fuel Economy', 'Rear AC Vents', 'Micro-Switch for Safe Fueling']
      },
      {
        name: 'Asta 1.2 Petrol MT (Top Spec)',
        exShowroom: 799000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa (82 bhp)',
        mileage: '20.7 kmpl',
        isVFM: false,
        keyFeatures: ['Wireless Phone Charger', 'Smart Key with Push Button Start', '15-inch Diamond Cut Alloys', 'Leather-wrapped Steering Wheel']
      }
    ]
  },
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
