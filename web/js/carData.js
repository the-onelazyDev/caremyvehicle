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
    id: 'maruti-celerio',
    name: 'Maruti Suzuki Celerio',
    brand: 'Maruti Suzuki',
    tagline: 'India’s Most Fuel-Efficient Petrol Car with 26.68 km/l Mileage & 34.43 km/kg CNG',
    launchDate: 'All-New 2nd Gen (3D Organic Sculpted Design)',
    bodyType: 'Hatchback',
    fuelTypes: ['Petrol', 'CNG'],
    priceRange: '₹5.37 - ₹7.09 Lakh',
    minPrice: 536500,
    maxPrice: 709500,
    safetyRating: 'Dual Airbags, ABS with EBD, ESP with Hill Hold Assist',
    groundClearance: '170 mm',
    bootSpace: '313 L (Best-in-class luggage capacity)',
    waitingPeriod: '1 - 3 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/celerio/360/solid-fire-red/4.webp',
    summary: 'The All-New Celerio is India’s most fuel-efficient petrol hatchback, delivering up to 26.68 km/l with the Next-Gen 1.0L K10C Dual Jet engine with idle start-stop, and an astonishing 34.43 km/kg on factory S-CNG. It features 3D organic sculpted styling, 7-inch SmartPlay Studio touchscreen, keyless entry with push start, 313L large boot, and 15-inch black alloys.',
    spin360: {
      totalFrames: 24,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/celerio/360',
      format: 'webp',
      defaultColor: 'solid-fire-red',
      colors: [
        { id: 'solid-fire-red', name: 'Solid Fire Red', hex: '#8E0D0F' },
        { id: 'speedy-blue', name: 'Speedy Blue', hex: '#1F47C2' },
        { id: 'arctic-white', name: 'Pearl Arctic White', hex: '#F3F3F3' },
        { id: 'glistening-grey', name: 'Glistening Grey', hex: '#4A4A4A' },
        { id: 'silky-silver', name: 'Silky Silver', hex: '#737373' },
        { id: 'caffeine-brown', name: 'Caffeine Brown', hex: '#28201D' }
      ]
    },
    colors: [
      { name: 'Solid Fire Red', hex: '#8E0D0F', image: 'https://ik.imagekit.io/2908vvlod/cars/celerio/360/solid-fire-red/4.webp' },
      { name: 'Speedy Blue', hex: '#1F47C2', image: 'https://ik.imagekit.io/2908vvlod/cars/celerio/360/speedy-blue/4.webp' },
      { name: 'Pearl Arctic White', hex: '#F3F3F3', image: 'https://ik.imagekit.io/2908vvlod/cars/celerio/360/arctic-white/4.webp' },
      { name: 'Glistening Grey', hex: '#4A4A4A', image: 'https://ik.imagekit.io/2908vvlod/cars/celerio/360/glistening-grey/4.webp' },
      { name: 'Silky Silver', hex: '#737373', image: 'https://ik.imagekit.io/2908vvlod/cars/celerio/360/silky-silver/4.webp' },
      { name: 'Caffeine Brown', hex: '#28201D', image: 'https://ik.imagekit.io/2908vvlod/cars/celerio/360/caffeine-brown/4.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Studio View', url: 'https://ik.imagekit.io/2908vvlod/cars/celerio/360/solid-fire-red/4.webp' },
      { label: 'Radiant Front Grille', url: 'https://ik.imagekit.io/2908vvlod/cars/celerio/360/solid-fire-red/1.webp' },
      { label: 'Side Profile & Black Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/celerio/360/solid-fire-red/7.webp' },
      { label: 'Rear Tail-lamps & Bumper', url: 'https://ik.imagekit.io/2908vvlod/cars/celerio/360/solid-fire-red/13.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/celerio/360/solid-fire-red/4.webp' },
      { title: 'Radiant Grille with Chrome Accent & Swept-back Headlamps', url: 'https://ik.imagekit.io/2908vvlod/cars/celerio/360/solid-fire-red/1.webp' },
      { title: 'Flowing Aerodynamic Silhouette with 15-inch Black Alloy Wheels', url: 'https://ik.imagekit.io/2908vvlod/cars/celerio/360/solid-fire-red/7.webp' },
      { title: 'Distinctive Rear Profile with Droplet-Style Taillamps', url: 'https://ik.imagekit.io/2908vvlod/cars/celerio/360/solid-fire-red/13.webp' }
    ],
    specs: {
      engineOptions: '1.0L K10C Next-Gen Dual Jet Dual VVT (67 PS / 89 Nm) | S-CNG (56.7 PS / 82.1 Nm)',
      transmissions: '5-Speed Manual (5MT) & Auto Gear Shift (AGS)',
      dimensions: '3695 mm (L) × 1655 mm (W) × 1555 mm (H)',
      wheelbase: '2435 mm',
      fuelTank: '32 Litres (Petrol) / 60 Litres Water Equivalent (CNG)',
      brakes: 'Front Ventilated Disc / Rear Drum with ABS & EBD',
      suspension: 'MacPherson Strut (Front) / Torsion Beam (Rear)',
      safety: 'Dual Airbags, ABS with EBD, ESP, Hill Hold Assist, Reverse Parking Sensors'
    },
    variants: [
      {
        name: 'LXi 1.0L 5MT',
        exShowroom: 536500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L K10C Dual Jet (67 PS)',
        mileage: '25.24 km/l',
        isVFM: false,
        keyFeatures: ['Engine Idle Start-Stop', 'Dual Airbags', 'ABS with EBD', 'Reverse Parking Sensors', 'Manual AC with Heater']
      },
      {
        name: 'VXi 1.0L 5MT',
        exShowroom: 583500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L K10C Dual Jet (67 PS)',
        mileage: '25.24 km/l',
        isVFM: true,
        vfmBadge: '🔥 BEST VALUE FOR MONEY',
        keyFeatures: ['All 4 Power Windows', 'Central Locking', 'Body Coloured Door Handles', 'Rear Parcel Shelf', 'Day/Night IRVM']
      },
      {
        name: 'VXi 1.0L AGS (Automatic)',
        exShowroom: 638500,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.0L K10C Dual Jet (67 PS)',
        mileage: '26.68 km/l',
        isVFM: false,
        keyFeatures: ['Auto Gear Shift (AGS)', '26.68 km/l (India’s Most Fuel-Efficient Petrol)', 'Hill Hold Assist', 'Gear Position Indicator']
      },
      {
        name: 'VXi 1.0L S-CNG 5MT',
        exShowroom: 673500,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.0L K10C S-CNG (56.7 PS)',
        mileage: '34.43 km/kg',
        isVFM: true,
        vfmBadge: '⚡ SEGMENT-BEST CNG MILEAGE',
        keyFeatures: ['Factory S-CNG (34.43 km/kg)', 'Dual Interdependent ECUs', 'Micro-Switch Fuel Lid Cutoff', 'Power Windows']
      },
      {
        name: 'ZXi 1.0L 5MT',
        exShowroom: 611500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L K10C Dual Jet (67 PS)',
        mileage: '24.97 km/l',
        isVFM: false,
        keyFeatures: ['SmartPlay Audio with Bluetooth', 'Steering Mounted Audio Controls', 'Tilt Adjustable Steering', 'Rear Defogger', 'Remote Keyless Entry']
      },
      {
        name: 'ZXi 1.0L AGS (Automatic)',
        exShowroom: 666500,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.0L K10C Dual Jet (67 PS)',
        mileage: '26.00 km/l',
        isVFM: false,
        keyFeatures: ['5-Speed AGS Automatic', 'Hill Hold Assist', 'Steering Audio Controls', 'SmartPlay Audio']
      },
      {
        name: 'ZXi+ 1.0L 5MT',
        exShowroom: 659500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L K10C Dual Jet (67 PS)',
        mileage: '24.97 km/l',
        isVFM: false,
        keyFeatures: ['7-inch SmartPlay Studio Touchscreen', 'Apple CarPlay & Android Auto', 'Engine Push Start/Stop with Smart Key', '15-inch Black Alloy Wheels', 'Electrically Folding ORVMs']
      },
      {
        name: 'ZXi+ 1.0L AGS (Automatic)',
        exShowroom: 709500,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.0L K10C Dual Jet (67 PS)',
        mileage: '26.00 km/l',
        isVFM: false,
        keyFeatures: ['Top-Spec AGS Automatic', '15-inch Black Alloys', 'Push Button Start', '7-inch Touchscreen', 'Front Fog Lamps']
      }
    ]
  },
  {
    id: 'maruti-wagon-r',
    name: 'Maruti Suzuki Wagon R',
    brand: 'Maruti Suzuki',
    tagline: 'India’s Iconic Tall-Boy with Advanced K-Series Engine, 34.05 km/kg CNG & 360° Studio',
    launchDate: 'Updated 2024 (Dual Tone & Smart Hybrid)',
    bodyType: 'Hatchback',
    fuelTypes: ['Petrol', 'CNG'],
    priceRange: '₹5.54 - ₹7.33 Lakh',
    minPrice: 554500,
    maxPrice: 733000,
    safetyRating: 'Dual Airbags, ABS with EBD, ESP with Hill Hold Assist',
    groundClearance: '165 mm',
    bootSpace: '341 L (Largest in segment)',
    waitingPeriod: '2 - 4 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/wagon-r/360/gallant-red-black-roof/4.webp',
    summary: 'The Maruti Suzuki Wagon R is India’s beloved tall-boy hatchback offering maximum cabin headroom, unmatched practicality, and a choice of two refined engines: 1.0L K10C (up to 25.19 km/l and 34.05 km/kg on factory S-CNG) and the punchy 1.2L K12N Dual Jet (90 PS). It features dual-tone floating roof styling, 7-inch SmartPlay Studio touchscreen with smartphone navigation, 341L cavernous boot, and 60:40 rear split seats.',
    spin360: {
      totalFrames: 24,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/wagon-r/360',
      format: 'webp',
      defaultColor: 'gallant-red-black-roof',
      colors: [
        { id: 'gallant-red-black-roof', name: 'Gallant Red with Black Roof', hex: '#D2232B' },
        { id: 'poolside-blue', name: 'Poolside Blue', hex: '#1188C5' },
        { id: 'solid-white', name: 'Solid White', hex: '#F3F3F3' },
        { id: 'magma-grey', name: 'Magma Grey', hex: '#2B2C31' },
        { id: 'silky-silver', name: 'Silky Silver', hex: '#737373' },
        { id: 'nutmeg-brown', name: 'Nutmeg Brown', hex: '#54473C' }
      ]
    },
    colors: [
      { name: 'Gallant Red with Black Roof', hex: '#D2232B', image: 'https://ik.imagekit.io/2908vvlod/cars/wagon-r/360/gallant-red-black-roof/4.webp' },
      { name: 'Poolside Blue', hex: '#1188C5', image: 'https://ik.imagekit.io/2908vvlod/cars/wagon-r/360/poolside-blue/4.webp' },
      { name: 'Solid White', hex: '#F3F3F3', image: 'https://ik.imagekit.io/2908vvlod/cars/wagon-r/360/solid-white/4.webp' },
      { name: 'Magma Grey', hex: '#2B2C31', image: 'https://ik.imagekit.io/2908vvlod/cars/wagon-r/360/magma-grey/4.webp' },
      { name: 'Silky Silver', hex: '#737373', image: 'https://ik.imagekit.io/2908vvlod/cars/wagon-r/360/silky-silver/4.webp' },
      { name: 'Nutmeg Brown', hex: '#54473C', image: 'https://ik.imagekit.io/2908vvlod/cars/wagon-r/360/nutmeg-brown/4.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Studio View', url: 'https://ik.imagekit.io/2908vvlod/cars/wagon-r/360/gallant-red-black-roof/4.webp' },
      { label: 'Front Dual-Tone Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/wagon-r/360/gallant-red-black-roof/1.webp' },
      { label: 'Side Tall-Boy Profile', url: 'https://ik.imagekit.io/2908vvlod/cars/wagon-r/360/gallant-red-black-roof/7.webp' },
      { label: 'Rear Vertical Taillamps', url: 'https://ik.imagekit.io/2908vvlod/cars/wagon-r/360/gallant-red-black-roof/13.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/wagon-r/360/gallant-red-black-roof/4.webp' },
      { title: 'Bold Front Chrome Grille with Sculpted Bumper & Fog Lamps', url: 'https://ik.imagekit.io/2908vvlod/cars/wagon-r/360/gallant-red-black-roof/1.webp' },
      { title: 'Iconic Tall-Boy Silhouette with Floating Dual-Tone Roof', url: 'https://ik.imagekit.io/2908vvlod/cars/wagon-r/360/gallant-red-black-roof/7.webp' },
      { title: 'Tall Vertical Tail-lamp Cluster & Wide Rear Chrome Garnish', url: 'https://ik.imagekit.io/2908vvlod/cars/wagon-r/360/gallant-red-black-roof/13.webp' }
    ],
    specs: {
      engineOptions: '1.0L K10C Dual Jet (67 PS / 89 Nm) | 1.2L K12N Dual Jet (90 PS / 113 Nm) | 1.0L S-CNG (56.7 PS / 82.1 Nm)',
      transmissions: '5-Speed Manual (5MT) & 5-Speed Auto Gear Shift (AGS)',
      dimensions: '3655 mm (L) × 1620 mm (W) × 1675 mm (H)',
      wheelbase: '2435 mm',
      fuelTank: '32 Litres (Petrol) / 60 Litres Water Equivalent (CNG)',
      brakes: 'Front Ventilated Disc / Rear Drum with ABS & EBD',
      suspension: 'MacPherson Strut (Front) / Torsion Beam (Rear)',
      safety: 'Dual Airbags, ABS with EBD, ESP, Hill Hold Assist, Speed-Sensitive Auto Door Lock'
    },
    variants: [
      {
        name: 'LXi 1.0L 5MT',
        exShowroom: 554500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L K10C Dual Jet (67 PS)',
        mileage: '24.35 km/l',
        isVFM: false,
        keyFeatures: ['Dual Airbags', 'ABS with EBD', 'ESP & Hill Hold Assist', 'Front Power Windows', 'Manual AC with Heater']
      },
      {
        name: 'LXi 1.0L S-CNG 5MT',
        exShowroom: 644500,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.0L K10C S-CNG (56.7 PS)',
        mileage: '34.05 km/kg',
        isVFM: true,
        vfmBadge: '⚡ TOP CNG VALUE',
        keyFeatures: ['Factory S-CNG (34.05 km/kg)', 'Dual Interdependent ECUs', 'Front Power Windows', 'ESP with Hill Hold']
      },
      {
        name: 'VXi 1.0L 5MT',
        exShowroom: 599500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L K10C Dual Jet (67 PS)',
        mileage: '24.35 km/l',
        isVFM: true,
        vfmBadge: '🔥 BEST VALUE FOR MONEY',
        keyFeatures: ['SmartPlay Dock Audio with Bluetooth', 'All 4 Power Windows', 'Remote Keyless Entry', 'Electrically Adjustable ORVMs', 'Day/Night IRVM']
      },
      {
        name: 'VXi 1.0L AGS (Automatic)',
        exShowroom: 654500,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.0L K10C Dual Jet (67 PS)',
        mileage: '25.19 km/l',
        isVFM: false,
        keyFeatures: ['5-Speed AGS Automatic', '25.19 km/l Mileage', 'Hill Hold Assist', 'Gear Shift Indicator']
      },
      {
        name: 'VXi 1.0L S-CNG 5MT',
        exShowroom: 689500,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.0L K10C S-CNG (56.7 PS)',
        mileage: '34.05 km/kg',
        isVFM: true,
        vfmBadge: '🏆 BEST MILEAGE PICK',
        keyFeatures: ['Factory S-CNG (34.05 km/kg)', 'All 4 Power Windows', 'Remote Central Locking', 'Rear Parcel Tray']
      },
      {
        name: 'ZXi 1.2L 5MT',
        exShowroom: 628000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L K12N Dual Jet (90 PS)',
        mileage: '23.56 km/l',
        isVFM: false,
        keyFeatures: ['More Powerful 1.2L 4-Cylinder Engine (90 PS)', 'Steering Mounted Audio Controls', 'Tilt Adjustable Steering', 'Rear Defogger']
      },
      {
        name: 'ZXi 1.2L AGS (Automatic)',
        exShowroom: 683000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L K12N Dual Jet (90 PS)',
        mileage: '24.43 km/l',
        isVFM: false,
        keyFeatures: ['1.2L 90 PS Engine with AGS Automatic', 'Hill Hold Assist', 'Steering Audio Controls', 'Keyless Entry']
      },
      {
        name: 'ZXi+ 1.2L 5MT',
        exShowroom: 675500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L K12N Dual Jet (90 PS)',
        mileage: '23.56 km/l',
        isVFM: false,
        keyFeatures: ['7-inch SmartPlay Studio Touchscreen', 'Apple CarPlay & Android Auto', '14-inch Black Alloy Wheels', 'Front Fog Lamps', 'Electrically Retractable ORVMs']
      },
      {
        name: 'ZXi+ 1.2L AGS Dual Tone',
        exShowroom: 733000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L K12N Dual Jet (90 PS)',
        mileage: '24.43 km/l',
        isVFM: false,
        keyFeatures: ['Top-Spec AGS Automatic with Dual Tone Roof', '14-inch Black Alloys', '7-inch Touchscreen', 'Rear Wiper & Washer']
      }
    ]
  },
  {
    id: 'maruti-dzire',
    name: 'Maruti Suzuki Dzire',
    brand: 'Maruti Suzuki',
    tagline: 'India’s #1 Premium Sedan with 5-Star NCAP Safety, Electric Sunroof, 360° Camera & 33.73 km/kg CNG',
    launchDate: 'All-New 2024-2025 Generation (5-Star Global NCAP)',
    bodyType: 'Sedan',
    fuelTypes: ['Petrol', 'CNG'],
    priceRange: '₹6.79 - ₹10.14 Lakh',
    minPrice: 679000,
    maxPrice: 1014000,
    safetyRating: '⭐⭐⭐⭐⭐ 5-Star Global NCAP (6 Airbags Standard across all variants)',
    groundClearance: '163 mm',
    bootSpace: '382 L',
    waitingPeriod: '4 - 8 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/dzire/360/alluring-blue/4.webp',
    summary: 'The All-New 4th Generation Maruti Suzuki Dzire redefines India’s sedan landscape with a historic 5-Star Global NCAP adult safety rating and 6 airbags standard across every single variant. Engineered on the ultra-rigid Heartect platform and powered by the new 1.2L Z-Series 3-cylinder engine (Z12E) boasting class-leading 24.79 km/l (MT), 25.71 km/l (AGS) and 33.73 km/kg on factory S-CNG. Packed with first-in-segment electric sunroof, 360-degree HD camera, 9-inch SmartPlay Pro+ touchscreen with wireless Apple CarPlay/Android Auto, wireless phone charger, and sculpted European styling.',
    spin360: {
      totalFrames: 24,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/dzire/360',
      format: 'webp',
      defaultColor: 'alluring-blue',
      colors: [
        { id: 'alluring-blue', name: 'Alluring Blue', hex: '#415159' },
        { id: 'pearl-arctic-white', name: 'Pearl Arctic White', hex: '#F3F3F3' },
        { id: 'splendid-silver', name: 'Splendid Silver', hex: '#737373' },
        { id: 'gallant-red', name: 'Gallant Red', hex: '#D2232B' },
        { id: 'bluish-black', name: 'Bluish Black', hex: '#141414' },
        { id: 'magma-grey', name: 'Magma Grey', hex: '#2B2C31' },
        { id: 'nutmeg-brown', name: 'Nutmeg Brown', hex: '#54473C' }
      ]
    },
    colors: [
      { name: 'Alluring Blue', hex: '#415159', image: 'https://ik.imagekit.io/2908vvlod/cars/dzire/360/alluring-blue/4.webp' },
      { name: 'Pearl Arctic White', hex: '#F3F3F3', image: 'https://ik.imagekit.io/2908vvlod/cars/dzire/360/pearl-arctic-white/4.webp' },
      { name: 'Splendid Silver', hex: '#737373', image: 'https://ik.imagekit.io/2908vvlod/cars/dzire/360/splendid-silver/4.webp' },
      { name: 'Gallant Red', hex: '#D2232B', image: 'https://ik.imagekit.io/2908vvlod/cars/dzire/360/gallant-red/4.webp' },
      { name: 'Bluish Black', hex: '#141414', image: 'https://ik.imagekit.io/2908vvlod/cars/dzire/360/bluish-black/4.webp' },
      { name: 'Magma Grey', hex: '#2B2C31', image: 'https://ik.imagekit.io/2908vvlod/cars/dzire/360/magma-grey/4.webp' },
      { name: 'Nutmeg Brown', hex: '#54473C', image: 'https://ik.imagekit.io/2908vvlod/cars/dzire/360/nutmeg-brown/4.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Studio View', url: 'https://ik.imagekit.io/2908vvlod/cars/dzire/360/alluring-blue/4.webp' },
      { label: 'Front Sculpted Grille & LED Headlamps', url: 'https://ik.imagekit.io/2908vvlod/cars/dzire/360/alluring-blue/1.webp' },
      { label: 'Side Executive Sedan Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/dzire/360/alluring-blue/7.webp' },
      { label: 'Rear 3D Trinity LED Taillamps', url: 'https://ik.imagekit.io/2908vvlod/cars/dzire/360/alluring-blue/13.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/dzire/360/alluring-blue/4.webp' },
      { title: 'Bold Horizontal Chrome Slat Grille with Sharp Bi-LED Crystal Projector Headlamps', url: 'https://ik.imagekit.io/2908vvlod/cars/dzire/360/alluring-blue/1.webp' },
      { title: 'Aerodynamic Sedan Silhouette with Precision-Cut Dual-Tone Alloy Wheels', url: 'https://ik.imagekit.io/2908vvlod/cars/dzire/360/alluring-blue/7.webp' },
      { title: 'Sleek Trunk-Lid Integrated Spoiler with Distinctive 3D Trinity LED Taillamps', url: 'https://ik.imagekit.io/2908vvlod/cars/dzire/360/alluring-blue/13.webp' }
    ],
    specs: {
      engineOptions: '1.2L Z-Series 3-Cyl Dual VVT (81.58 PS / 111.7 Nm) | 1.2L S-CNG (69.75 PS / 101.8 Nm)',
      transmissions: '5-Speed Manual (5MT) & 5-Speed Auto Gear Shift (AGS)',
      dimensions: '3995 mm (L) × 1735 mm (W) × 1525 mm (H)',
      wheelbase: '2450 mm',
      fuelTank: '37 Litres (Petrol) / 55 Litres Water Equivalent (CNG)',
      brakes: 'Front Ventilated Disc / Rear Drum with ABS & EBD',
      suspension: 'MacPherson Strut with Coil Spring (Front) / Torsion Beam (Rear)',
      safety: '⭐⭐⭐⭐⭐ 5-Star Global NCAP, 6 Airbags Standard, ESP, Hill Hold Assist, TPMS, ISOFIX, 3-Point Belts for All Seats'
    },
    variants: [
      {
        name: 'LXi 1.2L 5MT',
        exShowroom: 679000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Z12E 3-Cyl (81.58 PS)',
        mileage: '24.79 km/l',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard', '5-Star Global NCAP Safety', 'ESP with Hill Hold Assist', 'LED Crystal Headlamps', 'All 4 Power Windows']
      },
      {
        name: 'VXi 1.2L 5MT',
        exShowroom: 779000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Z12E 3-Cyl (81.58 PS)',
        mileage: '24.79 km/l',
        isVFM: true,
        vfmBadge: '🔥 BEST VALUE FOR MONEY',
        keyFeatures: ['7-inch SmartPlay Touchscreen', 'Wireless Apple CarPlay & Android Auto', 'Rear AC Vents & Rear Fast USB Ports', 'Steering-Mounted Audio Controls', 'Electrically Foldable ORVMs']
      },
      {
        name: 'VXi 1.2L AGS (Automatic)',
        exShowroom: 829000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Z12E 3-Cyl (81.58 PS)',
        mileage: '25.71 km/l',
        isVFM: false,
        keyFeatures: ['5-Speed AGS Automatic', '25.71 km/l Certified Economy', 'Rear AC Vents', 'Hill Hold Assist']
      },
      {
        name: 'VXi 1.2L S-CNG 5MT',
        exShowroom: 874000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L Z12E S-CNG (69.75 PS)',
        mileage: '33.73 km/kg',
        isVFM: true,
        vfmBadge: '⚡ TOP CNG SEDAN PICK',
        keyFeatures: ['Segment-Best 33.73 km/kg Mileage', 'Factory S-CNG with Dual Interdependent ECUs', '7-inch Touchscreen', 'Rear AC Vents']
      },
      {
        name: 'ZXi 1.2L 5MT',
        exShowroom: 889000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Z12E 3-Cyl (81.58 PS)',
        mileage: '24.79 km/l',
        isVFM: true,
        vfmBadge: '⭐ SEGMENT HIT (SUNROOF)',
        keyFeatures: ['Single-Pane Electric Sunroof', 'Wireless Phone Charger', '15-inch Precision Cut Alloy Wheels', 'Automatic Climate Control', 'Push Button Engine Start/Stop']
      },
      {
        name: 'ZXi 1.2L AGS (Automatic)',
        exShowroom: 939000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Z12E 3-Cyl (81.58 PS)',
        mileage: '25.71 km/l',
        isVFM: false,
        keyFeatures: ['Electric Sunroof with AGS Automatic', 'Wireless Charger', '15-inch Alloys', 'Cruise Control']
      },
      {
        name: 'ZXi 1.2L S-CNG 5MT',
        exShowroom: 984000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L Z12E S-CNG (69.75 PS)',
        mileage: '33.73 km/kg',
        isVFM: false,
        keyFeatures: ['Electric Sunroof + Factory S-CNG', 'Wireless Phone Charger', '15-inch Precision Alloys', 'Push Start/Stop']
      },
      {
        name: 'ZXi+ 1.2L 5MT',
        exShowroom: 969000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Z12E 3-Cyl (81.58 PS)',
        mileage: '24.79 km/l',
        isVFM: false,
        keyFeatures: ['360-Degree HD Surround View Camera', '9-inch SmartPlay Pro+ Touchscreen', 'Arkamy Surround Sound', 'Electric Sunroof', 'Cruise Control', 'Suzuki Connect Telematics']
      },
      {
        name: 'ZXi+ 1.2L AGS (Automatic)',
        exShowroom: 1014000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Z12E 3-Cyl (81.58 PS)',
        mileage: '25.71 km/l',
        isVFM: false,
        keyFeatures: ['Top-of-the-Line Automatic Sedan', '360 HD Camera', 'Electric Sunroof', '9-inch SmartPlay Pro+', 'Full LED Lighting Suite']
      }
    ]
  },
  {
    id: 'maruti-eeco',
    name: 'Maruti Suzuki Eeco',
    brand: 'Maruti Suzuki',
    tagline: 'India’s Most Versatile Multi-Purpose Van with Advanced 1.2L K-Series, 26.78 km/kg CNG & 360° Studio',
    launchDate: 'Updated 2024 (Advanced K-Series Dual Jet)',
    bodyType: 'MUV',
    fuelTypes: ['Petrol', 'CNG'],
    priceRange: '₹5.32 - ₹6.58 Lakh',
    minPrice: 532000,
    maxPrice: 658000,
    safetyRating: 'Dual Airbags, ABS with EBD, Reverse Parking Sensors, Child Lock',
    groundClearance: '160 mm',
    bootSpace: '540 L (5-Seater) / Massive cargo utility',
    waitingPeriod: '1 - 3 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/eeco/360/brisk-blue/4.webp',
    summary: 'The Maruti Suzuki Eeco is India’s undisputed king of practical family travel and versatile multi-purpose mobility. Powered by the refined 1.2L Advanced K-Series Dual Jet Dual VVT engine (80.76 PS / 104.4 Nm in petrol, 71.65 PS in CNG), the Eeco delivers an impressive 19.71 km/l petrol and 26.78 km/kg on factory S-CNG. Available in spacious 5-seater and 7-seater layouts with powerful air conditioning, digital instrument cluster, flat cabin floor, and huge 540L luggage capacity.',
    spin360: {
      totalFrames: 24,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/eeco/360',
      format: 'webp',
      defaultColor: 'brisk-blue',
      colors: [
        { id: 'brisk-blue', name: 'Metallic Brisk Blue', hex: '#0D6DC3' },
        { id: 'solid-white', name: 'Solid White', hex: '#F3F3F3' },
        { id: 'silky-silver', name: 'Metallic Silky Silver', hex: '#737373' },
        { id: 'glistening-grey', name: 'Metallic Glistening Grey', hex: '#4A4A4A' },
        { id: 'bluish-black', name: 'Pearl Midnight Black', hex: '#141414' }
      ]
    },
    colors: [
      { name: 'Metallic Brisk Blue', hex: '#0D6DC3', image: 'https://ik.imagekit.io/2908vvlod/cars/eeco/360/brisk-blue/4.webp' },
      { name: 'Solid White', hex: '#F3F3F3', image: 'https://ik.imagekit.io/2908vvlod/cars/eeco/360/solid-white/4.webp' },
      { name: 'Metallic Silky Silver', hex: '#737373', image: 'https://ik.imagekit.io/2908vvlod/cars/eeco/360/silky-silver/4.webp' },
      { name: 'Metallic Glistening Grey', hex: '#4A4A4A', image: 'https://ik.imagekit.io/2908vvlod/cars/eeco/360/glistening-grey/4.webp' },
      { name: 'Pearl Midnight Black', hex: '#141414', image: 'https://ik.imagekit.io/2908vvlod/cars/eeco/360/bluish-black/4.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Studio View', url: 'https://ik.imagekit.io/2908vvlod/cars/eeco/360/brisk-blue/4.webp' },
      { label: 'Front Bold Van Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/eeco/360/brisk-blue/1.webp' },
      { label: 'Side Sliding Door Silhouette', url: 'https://ik.imagekit.io/2908vvlod/cars/eeco/360/brisk-blue/7.webp' },
      { label: 'Rear Wide Tailgate Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/eeco/360/brisk-blue/13.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/eeco/360/brisk-blue/4.webp' },
      { title: 'Modern Clean Front Fascia with Bold Headlamps', url: 'https://ik.imagekit.io/2908vvlod/cars/eeco/360/brisk-blue/1.webp' },
      { title: 'Practical Sliding Side Doors for Effortless Ingress/Egress', url: 'https://ik.imagekit.io/2908vvlod/cars/eeco/360/brisk-blue/7.webp' },
      { title: 'Cavernous Tailgate Opening for Maximum Cargo Loading', url: 'https://ik.imagekit.io/2908vvlod/cars/eeco/360/brisk-blue/13.webp' }
    ],
    specs: {
      engineOptions: '1.2L Advanced K-Series Dual Jet Dual VVT (80.76 PS / 104.4 Nm) | S-CNG (71.65 PS / 95 Nm)',
      transmissions: '5-Speed Manual Transmission (5MT)',
      dimensions: '3675 mm (L) × 1475 mm (W) × 1825 mm (H)',
      wheelbase: '2350 mm',
      fuelTank: '32 Litres (Petrol) / 65 Litres Water Equivalent (CNG)',
      brakes: 'Front Ventilated Disc / Rear Drum with ABS & EBD',
      suspension: 'MacPherson Strut (Front) / 3-Link Rigid Axle (Rear)',
      safety: 'Dual Airbags, ABS with EBD, Reverse Parking Sensors, Engine Immobilizer, Speed Alert'
    },
    variants: [
      {
        name: '5-Seater Standard 5MT',
        exShowroom: 532000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L K-Series Dual Jet (80.76 PS)',
        mileage: '19.71 km/l',
        isVFM: false,
        keyFeatures: ['Dual Airbags', 'ABS with EBD', 'Digital Speedometer Cluster', 'Reverse Parking Sensors', 'Integrated Front Headrests']
      },
      {
        name: '7-Seater Standard 5MT',
        exShowroom: 561000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L K-Series Dual Jet (80.76 PS)',
        mileage: '19.71 km/l',
        isVFM: false,
        keyFeatures: ['7 Seater Seating Layout (2+3+2)', 'Dual Airbags', 'ABS with EBD', 'Speed Alert System', 'Heater']
      },
      {
        name: '5-Seater AC 5MT',
        exShowroom: 568000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L K-Series Dual Jet (80.76 PS)',
        mileage: '19.71 km/l',
        isVFM: true,
        vfmBadge: '🔥 BEST VALUE FOR MONEY',
        keyFeatures: ['Powerful Air Conditioning with Cabin Heater', 'Dual Airbags', 'ABS with EBD', 'Sliding Driver Seat', '12V Accessory Socket']
      },
      {
        name: '5-Seater AC S-CNG 5MT',
        exShowroom: 658000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L K-Series S-CNG (71.65 PS)',
        mileage: '26.78 km/kg',
        isVFM: true,
        vfmBadge: '⚡ TOP CNG UTILITY PICK',
        keyFeatures: ['Factory S-CNG with 26.78 km/kg Economy', 'Factory Air Conditioning', 'Dual Interdependent ECUs', 'Dual Airbags', 'Micro Switch CNG Cut-off']
      }
    ]
  },
  {
    id: 'maruti-victoris',
    name: 'Maruti Suzuki Victoris',
    brand: 'Maruti Suzuki',
    tagline: 'Flagship Mid-Size SUV with Level 2 ADAS, Panoramic Sunroof, ALLGRIP AWD & Strong Hybrid',
    launchDate: 'New Launch 2025-2026',
    bodyType: 'SUV',
    fuelTypes: ['Petrol', 'Hybrid', 'CNG'],
    priceRange: '₹10.49 - ₹19.99 Lakh',
    minPrice: 1049000,
    maxPrice: 1999000,
    safetyRating: 'Level 2 ADAS (AEB, Lane Keep, ACC), 6 Airbags Standard, 360 HD View Camera',
    groundClearance: '210 mm',
    bootSpace: '373 L',
    waitingPeriod: '4 - 10 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/victoris/360/sizzling-red-black-roof/4.webp',
    summary: 'The Maruti Suzuki Victoris is the brand’s flagship mid-size SUV engineered with commanding road presence, state-of-the-art Level 2 ADAS autonomous safety, dual-pane panoramic sunroof, and All-Terrain ALLGRIP SELECT AWD. It offers three versatile powertrains: 1.5L K15C Smart Hybrid (petrol MT/AT), 1.5L S-CNG, and the ultra-refined 1.5L Intelligent Strong Hybrid with EV drive mode delivering an astonishing 27.97 km/l. Equipped with a 10.25-inch SmartPlay Pro+ touchscreen, ventilated front seats, head-up display (HUD), and connected car tech.',
    spin360: {
      totalFrames: 24,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/victoris/360',
      format: 'webp',
      defaultColor: 'sizzling-red-black-roof',
      colors: [
        { id: 'sizzling-red-black-roof', name: 'Sizzling Red with Black Roof', hex: '#A10000' },
        { id: 'splendid-silver-black-roof', name: 'Splendid Silver with Black Roof', hex: '#EDEDF2' },
        { id: 'celestial-blue-black-roof', name: 'Celestial Blue with Black Roof', hex: '#24475B' },
        { id: 'arctic-white', name: 'Arctic White', hex: '#F3F3F3' },
        { id: 'grandeur-grey', name: 'Grandeur Grey', hex: '#2B2C31' },
        { id: 'celestial-blue', name: 'Celestial Blue', hex: '#24475B' },
        { id: 'midnight-black', name: 'Midnight Black', hex: '#141414' },
        { id: 'sizzling-red', name: 'Sizzling Red', hex: '#A10000' },
        { id: 'splendid-silver', name: 'Splendid Silver', hex: '#737373' },
        { id: 'brave-khaki', name: 'Brave Khaki', hex: '#233B47' }
      ]
    },
    colors: [
      { name: 'Sizzling Red with Black Roof', hex: '#A10000', image: 'https://ik.imagekit.io/2908vvlod/cars/victoris/360/sizzling-red-black-roof/4.webp' },
      { name: 'Splendid Silver with Black Roof', hex: '#EDEDF2', image: 'https://ik.imagekit.io/2908vvlod/cars/victoris/360/splendid-silver-black-roof/4.webp' },
      { name: 'Celestial Blue with Black Roof', hex: '#24475B', image: 'https://ik.imagekit.io/2908vvlod/cars/victoris/360/celestial-blue-black-roof/4.webp' },
      { name: 'Arctic White', hex: '#F3F3F3', image: 'https://ik.imagekit.io/2908vvlod/cars/victoris/360/arctic-white/4.webp' },
      { name: 'Grandeur Grey', hex: '#2B2C31', image: 'https://ik.imagekit.io/2908vvlod/cars/victoris/360/grandeur-grey/4.webp' },
      { name: 'Celestial Blue', hex: '#24475B', image: 'https://ik.imagekit.io/2908vvlod/cars/victoris/360/celestial-blue/4.webp' },
      { name: 'Midnight Black', hex: '#141414', image: 'https://ik.imagekit.io/2908vvlod/cars/victoris/360/midnight-black/4.webp' },
      { name: 'Sizzling Red', hex: '#A10000', image: 'https://ik.imagekit.io/2908vvlod/cars/victoris/360/sizzling-red/4.webp' },
      { name: 'Splendid Silver', hex: '#737373', image: 'https://ik.imagekit.io/2908vvlod/cars/victoris/360/splendid-silver/4.webp' },
      { name: 'Brave Khaki', hex: '#233B47', image: 'https://ik.imagekit.io/2908vvlod/cars/victoris/360/brave-khaki/4.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Studio View', url: 'https://ik.imagekit.io/2908vvlod/cars/victoris/360/sizzling-red-black-roof/4.webp' },
      { label: 'Front Dominant Hex Grille & Triple LED DRLs', url: 'https://ik.imagekit.io/2908vvlod/cars/victoris/360/sizzling-red-black-roof/1.webp' },
      { label: 'Side Muscular SUV Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/victoris/360/sizzling-red-black-roof/7.webp' },
      { label: 'Rear Connected Horizon LED Taillamps', url: 'https://ik.imagekit.io/2908vvlod/cars/victoris/360/sizzling-red-black-roof/13.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/victoris/360/sizzling-red-black-roof/4.webp' },
      { title: 'Aggressive Geometric Grille with Next-Gen LED Projectors & ADAS Radar', url: 'https://ik.imagekit.io/2908vvlod/cars/victoris/360/sizzling-red-black-roof/1.webp' },
      { title: 'Dynamic SUV Stance with High 210mm Ground Clearance & 17-inch Diamond Cut Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/victoris/360/sizzling-red-black-roof/7.webp' },
      { title: 'Signature Connected Horizon LED Lightbar with Skid Plate & Dual Exhaust Accents', url: 'https://ik.imagekit.io/2908vvlod/cars/victoris/360/sizzling-red-black-roof/13.webp' }
    ],
    specs: {
      engineOptions: '1.5L K15C Smart Hybrid (103 PS / 137 Nm) | 1.5L Strong Hybrid e-CVT (116 PS / 141 Nm) | 1.5L S-CNG (87.8 PS / 121.5 Nm)',
      transmissions: '5-Speed Manual (5MT), 6-Speed Torque Converter AT with Paddle Shifters, e-CVT (Strong Hybrid)',
      dimensions: '4345 mm (L) × 1795 mm (W) × 1645 mm (H)',
      wheelbase: '2600 mm',
      fuelTank: '45 Litres (Petrol) / 55 Litres Water Equivalent (CNG)',
      brakes: 'All 4 Disc Brakes with ABS, EBD & Electronic Brake Pre-fill',
      suspension: 'MacPherson Strut (Front) / Torsion Beam with Coil Spring (Rear)',
      safety: 'Level 2 ADAS (Autonomous Emergency Braking, Adaptive Cruise Control, Lane Departure Warning), 6 Airbags Standard, 360 HD Camera, ESP, Hill Hold & Hill Descent Control'
    },
    variants: [
      {
        name: 'LXi 1.5L MT',
        exShowroom: 1049000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '21.11 km/l',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard', 'ESP with Hill Hold Assist', 'Dual LED Projector Headlamps', 'All 4 Disc Brakes', 'Keyless Entry & Push Start']
      },
      {
        name: 'LXi 1.5L S-CNG MT',
        exShowroom: 1149000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.5L K15C S-CNG (87.8 PS)',
        mileage: '26.6 km/kg',
        isVFM: false,
        keyFeatures: ['Factory S-CNG with 26.6 km/kg Mileage', '6 Airbags', 'All 4 Disc Brakes', 'ESP with Hill Hold']
      },
      {
        name: 'VXi 1.5L MT',
        exShowroom: 1199000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '21.11 km/l',
        isVFM: true,
        vfmBadge: '🔥 BEST VALUE FOR MONEY',
        keyFeatures: ['7-inch SmartPlay Touchscreen', 'Rear Parking Camera', 'Cruise Control', 'Paddle Shifters (AT)', 'Auto Climate Control']
      },
      {
        name: 'VXi 1.5L AT (6-Speed)',
        exShowroom: 1349000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '20.58 km/l',
        isVFM: false,
        keyFeatures: ['6-Speed Torque Converter Automatic', 'Steering Paddle Shifters', 'Hill Descent Control']
      },
      {
        name: 'VXi 1.5L S-CNG MT',
        exShowroom: 1299000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.5L K15C S-CNG (87.8 PS)',
        mileage: '26.6 km/kg',
        isVFM: true,
        vfmBadge: '⚡ TOP CNG MID-SUV PICK',
        keyFeatures: ['Factory S-CNG with 26.6 km/kg Economy', '7-inch Touchscreen', 'Cruise Control', 'Rear AC Vents']
      },
      {
        name: 'ZXi 1.5L MT',
        exShowroom: 1389000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '21.11 km/l',
        isVFM: true,
        vfmBadge: '⭐ SEGMENT HIT (PANORAMIC SUNROOF)',
        keyFeatures: ['Dual-Pane Panoramic Sunroof', '9-inch SmartPlay Pro+ Touchscreen', 'Wireless Apple CarPlay & Android Auto', '17-inch Diamond Cut Alloys', 'Full LED Horizon Lightbar']
      },
      {
        name: 'ZXi 1.5L AT (6-Speed)',
        exShowroom: 1539000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '20.58 km/l',
        isVFM: false,
        keyFeatures: ['Dual-Pane Panoramic Sunroof', '6-Speed AT with Paddle Shifters', 'Wireless Charger']
      },
      {
        name: 'ZXi+ 1.5L MT (ADAS)',
        exShowroom: 1559000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '21.11 km/l',
        isVFM: false,
        keyFeatures: ['Level 2 ADAS Suite', '360 HD View Camera', 'Ventilated Front Seats', 'Panoramic Sunroof', 'Head-Up Display (HUD)']
      },
      {
        name: 'ZXi+ 1.5L AT ALLGRIP AWD (4WD)',
        exShowroom: 1729000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '19.38 km/l',
        isVFM: false,
        keyFeatures: ['All-Terrain ALLGRIP SELECT AWD (Auto/Sport/Snow/Lock)', 'Level 2 ADAS', 'Panoramic Sunroof', '360 HD Camera']
      },
      {
        name: 'ZXi+ Strong Hybrid e-CVT',
        exShowroom: 1999000,
        fuel: 'Hybrid',
        trans: 'Automatic',
        engine: '1.5L Intelligent Strong Hybrid (116 PS)',
        mileage: '27.97 km/l',
        isVFM: true,
        vfmBadge: '🏆 27.97 KM/L MILEAGE KING',
        keyFeatures: ['Intelligent Strong Hybrid with Pure EV Mode', '27.97 km/l Certified Economy', 'Panoramic Sunroof', 'Ventilated Seats', 'Level 2 ADAS', 'Head-Up Display']
      }
    ]
  },
  {
    id: 'maruti-ertiga',
    name: 'Maruti Suzuki Ertiga',
    brand: 'Maruti Suzuki',
    tagline: 'India’s #1 7-Seater MPV with K15C Smart Hybrid, 26.11 km/kg S-CNG & Paddle Shifters',
    launchDate: 'Updated 2024 (Smart Hybrid & Dual VVT)',
    bodyType: 'MUV',
    fuelTypes: ['Petrol', 'CNG'],
    priceRange: '₹8.69 - ₹13.03 Lakh',
    minPrice: 869000,
    maxPrice: 1303000,
    safetyRating: 'Dual Front & Side Airbags, ESP with Hill Hold Assist, ABS with EBD, ISOFIX',
    groundClearance: '180 mm',
    bootSpace: '209 L (3-Rows Up) / 550 L (3rd Row Folded) / 803 L (Max Utility)',
    waitingPeriod: '4 - 12 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/ertiga/360/oxford-blue/4.webp',
    summary: 'The Maruti Suzuki Ertiga is India’s undisputed bestselling 7-seater MPV, trusted by over a million families. Powered by the refined 1.5L K15C Smart Hybrid Dual VVT engine (103 PS / 136.8 Nm) paired with either a 5-speed manual or a 6-speed automatic with paddle shifters, achieving 20.51 km/l (MT) and 20.30 km/l (AT). Also available with factory S-CNG delivering class-leading 26.11 km/kg economy. Features 7-inch SmartPlay Pro touchscreen, second-row roof-mounted AC with independent blower controls, air-cooled cup holders, and versatile one-touch recline and slide seats.',
    spin360: {
      totalFrames: 24,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/ertiga/360',
      format: 'webp',
      defaultColor: 'oxford-blue',
      colors: [
        { id: 'oxford-blue', name: 'Pearl Metallic Oxford Blue', hex: '#40519C' },
        { id: 'pearl-arctic-white', name: 'Pearl Arctic White', hex: '#F3F3F3' },
        { id: 'splendid-silver', name: 'Splendid Silver', hex: '#737373' },
        { id: 'magma-grey', name: 'Magma Grey', hex: '#2B2C31' },
        { id: 'auburn-red', name: 'Auburn Red', hex: '#732112' },
        { id: 'dignity-brown', name: 'Dignity Brown', hex: '#1F1412' },
        { id: 'bluish-black', name: 'Pearl Midnight Black', hex: '#141414' }
      ]
    },
    colors: [
      { name: 'Pearl Metallic Oxford Blue', hex: '#40519C', image: 'https://ik.imagekit.io/2908vvlod/cars/ertiga/360/oxford-blue/4.webp' },
      { name: 'Pearl Arctic White', hex: '#F3F3F3', image: 'https://ik.imagekit.io/2908vvlod/cars/ertiga/360/pearl-arctic-white/4.webp' },
      { name: 'Splendid Silver', hex: '#737373', image: 'https://ik.imagekit.io/2908vvlod/cars/ertiga/360/splendid-silver/4.webp' },
      { name: 'Magma Grey', hex: '#2B2C31', image: 'https://ik.imagekit.io/2908vvlod/cars/ertiga/360/magma-grey/4.webp' },
      { name: 'Auburn Red', hex: '#732112', image: 'https://ik.imagekit.io/2908vvlod/cars/ertiga/360/auburn-red/4.webp' },
      { name: 'Dignity Brown', hex: '#1F1412', image: 'https://ik.imagekit.io/2908vvlod/cars/ertiga/360/dignity-brown/4.webp' },
      { name: 'Pearl Midnight Black', hex: '#141414', image: 'https://ik.imagekit.io/2908vvlod/cars/ertiga/360/bluish-black/4.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Studio View', url: 'https://ik.imagekit.io/2908vvlod/cars/ertiga/360/oxford-blue/4.webp' },
      { label: 'Front Chrome Wing Grille & Projectors', url: 'https://ik.imagekit.io/2908vvlod/cars/ertiga/360/oxford-blue/1.webp' },
      { label: 'Side Elegant 7-Seater Profile', url: 'https://ik.imagekit.io/2908vvlod/cars/ertiga/360/oxford-blue/7.webp' },
      { label: 'Rear 3D LED Taillamps with Chrome Garnish', url: 'https://ik.imagekit.io/2908vvlod/cars/ertiga/360/oxford-blue/13.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/ertiga/360/oxford-blue/4.webp' },
      { title: 'Dynamic Chrome Winged Front Grille with Projector Headlamps', url: 'https://ik.imagekit.io/2908vvlod/cars/ertiga/360/oxford-blue/1.webp' },
      { title: 'Spacious 7-Seater Silhouette with Machined Two-Tone Alloy Wheels', url: 'https://ik.imagekit.io/2908vvlod/cars/ertiga/360/oxford-blue/7.webp' },
      { title: '3D Organ-Style LED Tail-lamps with Backdoor Chrome Garnish', url: 'https://ik.imagekit.io/2908vvlod/cars/ertiga/360/oxford-blue/13.webp' }
    ],
    specs: {
      engineOptions: '1.5L K15C Smart Hybrid (103 PS / 136.8 Nm) | 1.5L S-CNG (87.8 PS / 121.5 Nm)',
      transmissions: '5-Speed Manual (5MT) & 6-Speed Automatic (6AT) with Paddle Shifters',
      dimensions: '4395 mm (L) × 1735 mm (W) × 1690 mm (H)',
      wheelbase: '2740 mm',
      fuelTank: '45 Litres (Petrol) / 60 Litres Water Equivalent (CNG)',
      brakes: 'Front Ventilated Disc / Rear Drum with ABS, EBD & Brake Assist',
      suspension: 'MacPherson Strut with Coil Spring (Front) / Torsion Beam (Rear)',
      safety: 'Quad Airbags (Front & Side), ESP, Hill Hold Assist, Reverse Camera & Sensors, ISOFIX'
    },
    variants: [
      {
        name: 'LXi (O) 1.5L 5MT',
        exShowroom: 869000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '20.51 km/l',
        isVFM: false,
        keyFeatures: ['Dual Airbags', 'ESP with Hill Hold Assist', 'Halogen Projector Headlamps', 'All 4 Power Windows', 'Manual AC with Heater']
      },
      {
        name: 'VXi (O) 1.5L 5MT',
        exShowroom: 983000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '20.51 km/l',
        isVFM: true,
        vfmBadge: '🔥 BEST VALUE FOR MONEY',
        keyFeatures: ['2nd Row Roof-Mounted AC with Independent Controls', 'SmartPlay Audio with Bluetooth & 4 Speakers', 'Remote Keyless Entry', 'Electrically Foldable ORVMs', 'One-Touch Recline & Slide 2nd Row']
      },
      {
        name: 'VXi (O) 1.5L 6AT (Automatic)',
        exShowroom: 1123000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '20.30 km/l',
        isVFM: false,
        keyFeatures: ['6-Speed Torque Converter Automatic', 'Steering Mounted Paddle Shifters', 'Hill Hold Assist', '2nd Row Roof AC']
      },
      {
        name: 'VXi (O) 1.5L S-CNG 5MT',
        exShowroom: 1078000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.5L K15C S-CNG (87.8 PS)',
        mileage: '26.11 km/kg',
        isVFM: true,
        vfmBadge: '⚡ TOP CNG MPV PICK',
        keyFeatures: ['Factory S-CNG with Class-Leading 26.11 km/kg', 'Dual Interdependent ECUs', '2nd Row Roof AC', 'All 4 Power Windows']
      },
      {
        name: 'ZXi (O) 1.5L 5MT',
        exShowroom: 1093000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '20.51 km/l',
        isVFM: true,
        vfmBadge: '⭐ MOST POPULAR FAMILY PICK',
        keyFeatures: ['7-inch SmartPlay Pro Touchscreen', 'Wireless Apple CarPlay & Android Auto', 'Push Button Engine Start/Stop', '15-inch Two-Tone Alloy Wheels', 'Automatic Climate Control']
      },
      {
        name: 'ZXi (O) 1.5L 6AT (Automatic)',
        exShowroom: 1233000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '20.30 km/l',
        isVFM: false,
        keyFeatures: ['6-Speed AT with Paddle Shifters', '7-inch Touchscreen', 'Cruise Control', '15-inch Alloys']
      },
      {
        name: 'ZXi (O) 1.5L S-CNG 5MT',
        exShowroom: 1188000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.5L K15C S-CNG (87.8 PS)',
        mileage: '26.11 km/kg',
        isVFM: true,
        vfmBadge: '🏆 TOP-SPEC CNG PICK',
        keyFeatures: ['High-Feature Factory S-CNG (26.11 km/kg)', '7-inch SmartPlay Pro Touchscreen', 'Push Button Start', '15-inch Alloy Wheels']
      },
      {
        name: 'ZXi+ 1.5L 5MT',
        exShowroom: 1163000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '20.51 km/l',
        isVFM: false,
        keyFeatures: ['4 Airbags (Front & Side)', 'Cruise Control', 'Leather-Wrapped Flat-Bottom Steering Wheel', 'Automatic Headlamps with Follow-Me-Home', 'Rear Parking Camera']
      },
      {
        name: 'ZXi+ 1.5L 6AT (Automatic)',
        exShowroom: 1303000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '20.30 km/l',
        isVFM: false,
        keyFeatures: ['Top-of-the-Line 7-Seater Automatic', '4 Airbags', '6-Speed AT with Paddle Shifters', 'Cruise Control', 'Suzuki Connect Telematics']
      }
    ]
  },
  {
    id: 'maruti-s-presso',
    name: 'Maruti Suzuki S-Presso',
    brand: 'Maruti Suzuki',
    tagline: 'India’s Mini-SUV with Bold Upright Stance, 180mm Ground Clearance & 32.73 km/kg CNG',
    launchDate: 'Updated 2024 (Next-Gen K-Series Dual Jet)',
    bodyType: 'Hatchback',
    fuelTypes: ['Petrol', 'CNG'],
    priceRange: '₹4.26 - ₹6.12 Lakh',
    minPrice: 426500,
    maxPrice: 611500,
    safetyRating: 'Dual Airbags Standard, ESP with Hill Hold Assist, ABS with EBD, Reverse Parking Sensors',
    groundClearance: '180 mm',
    bootSpace: '270 L',
    waitingPeriod: '1 - 3 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/s-presso/360/sizzle-orange/4.webp',
    summary: 'The Maruti Suzuki S-Presso is India’s signature mini-SUV that punches above its weight with a bold upright stance, commanding high seating position, and generous 180mm ground clearance. Powered by the efficient 1.0L Next-Gen K-Series Dual Jet Dual VVT engine (67 PS / 89 Nm) with Idle Start-Stop delivering up to 25.30 km/l on AGS automatic and 32.73 km/kg on factory S-CNG. Features a unique circular center console with 7-inch SmartPlay Studio touchscreen with smartphone navigation, dynamic digital speedometer, and high approach and departure angles.',
    spin360: {
      totalFrames: 24,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/s-presso/360',
      format: 'webp',
      defaultColor: 'sizzle-orange',
      colors: [
        { id: 'sizzle-orange', name: 'Solid Sizzle Orange', hex: '#A83C0F' },
        { id: 'solid-fire-red', name: 'Solid Fire Red', hex: '#8E0D0F' },
        { id: 'pearl-starry-blue', name: 'Pearl Starry Blue', hex: '#114887' },
        { id: 'solid-white', name: 'Solid White', hex: '#F3F3F3' },
        { id: 'metallic-silky-silver', name: 'Metallic Silky Silver', hex: '#737373' },
        { id: 'metallic-granite-grey', name: 'Metallic Granite Grey', hex: '#222526' },
        { id: 'bluish-black', name: 'Pearl Midnight Black', hex: '#141414' }
      ]
    },
    colors: [
      { name: 'Solid Sizzle Orange', hex: '#A83C0F', image: 'https://ik.imagekit.io/2908vvlod/cars/s-presso/360/sizzle-orange/4.webp' },
      { name: 'Solid Fire Red', hex: '#8E0D0F', image: 'https://ik.imagekit.io/2908vvlod/cars/s-presso/360/solid-fire-red/4.webp' },
      { name: 'Pearl Starry Blue', hex: '#114887', image: 'https://ik.imagekit.io/2908vvlod/cars/s-presso/360/pearl-starry-blue/4.webp' },
      { name: 'Solid White', hex: '#F3F3F3', image: 'https://ik.imagekit.io/2908vvlod/cars/s-presso/360/solid-white/4.webp' },
      { name: 'Metallic Silky Silver', hex: '#737373', image: 'https://ik.imagekit.io/2908vvlod/cars/s-presso/360/metallic-silky-silver/4.webp' },
      { name: 'Metallic Granite Grey', hex: '#222526', image: 'https://ik.imagekit.io/2908vvlod/cars/s-presso/360/metallic-granite-grey/4.webp' },
      { name: 'Pearl Midnight Black', hex: '#141414', image: 'https://ik.imagekit.io/2908vvlod/cars/s-presso/360/bluish-black/4.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Mini-SUV Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/s-presso/360/sizzle-orange/4.webp' },
      { label: 'Bold Upright Front Grille & High Bonnet', url: 'https://ik.imagekit.io/2908vvlod/cars/s-presso/360/sizzle-orange/1.webp' },
      { label: 'Side High Ground Clearance Profile', url: 'https://ik.imagekit.io/2908vvlod/cars/s-presso/360/sizzle-orange/7.webp' },
      { label: 'Rear Squarish Taillamps & Skid Plate', url: 'https://ik.imagekit.io/2908vvlod/cars/s-presso/360/sizzle-orange/13.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/s-presso/360/sizzle-orange/4.webp' },
      { title: 'SUV-Inspired Bold Front Fascia with Tooth-Design Chrome Grille', url: 'https://ik.imagekit.io/2908vvlod/cars/s-presso/360/sizzle-orange/1.webp' },
      { title: 'Commanding High Ground Clearance (180mm) with Rugged Body Cladding', url: 'https://ik.imagekit.io/2908vvlod/cars/s-presso/360/sizzle-orange/7.webp' },
      { title: 'Upright Rear Profile with Distinctive C-Shaped Taillamps & High Mount Stop Lamp', url: 'https://ik.imagekit.io/2908vvlod/cars/s-presso/360/sizzle-orange/13.webp' }
    ],
    specs: {
      engineOptions: '1.0L K10C Dual Jet Dual VVT (67 PS / 89 Nm) | 1.0L S-CNG (56.7 PS / 82.1 Nm)',
      transmissions: '5-Speed Manual (5MT) & 5-Speed Auto Gear Shift (AGS)',
      dimensions: '3565 mm (L) × 1520 mm (W) × 1567 mm (H)',
      wheelbase: '2380 mm',
      fuelTank: '27 Litres (Petrol) / 55 Litres Water Equivalent (CNG)',
      brakes: 'Front Disc / Rear Drum with ABS & EBD',
      suspension: 'MacPherson Strut with Coil Spring (Front) / Torsion Beam (Rear)',
      safety: 'Dual Airbags Standard, ESP, Hill Hold Assist, Reverse Parking Sensors, Speed Sensing Auto Door Lock'
    },
    variants: [
      {
        name: 'Std (O) 1.0L 5MT',
        exShowroom: 426500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L K10C Dual Jet (67 PS)',
        mileage: '24.76 km/l',
        isVFM: false,
        keyFeatures: ['Dual Airbags Standard', 'ABS with EBD', 'Digital Speedometer Display', 'Reverse Parking Sensors']
      },
      {
        name: 'LXi (O) 1.0L 5MT',
        exShowroom: 501500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L K10C Dual Jet (67 PS)',
        mileage: '24.76 km/l',
        isVFM: false,
        keyFeatures: ['Air Conditioning with Heater', 'Power Steering', 'Sun Visor with Ticket Holder']
      },
      {
        name: 'LXi (O) 1.0L S-CNG 5MT',
        exShowroom: 591500,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.0L K10C S-CNG (56.7 PS)',
        mileage: '32.73 km/kg',
        isVFM: true,
        vfmBadge: '⚡ TOP MICRO CNG PICK',
        keyFeatures: ['Factory S-CNG with 32.73 km/kg Mileage', 'Air Conditioning', 'Power Steering', 'Dual Airbags Standard']
      },
      {
        name: 'VXi (O) 1.0L 5MT',
        exShowroom: 521500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L K10C Dual Jet (67 PS)',
        mileage: '24.76 km/l',
        isVFM: true,
        vfmBadge: '🔥 BEST VALUE FOR MONEY',
        keyFeatures: ['Front Power Windows', 'Remote Keyless Entry', 'SmartPlay Dock Audio with Bluetooth', 'Body Coloured Bumpers', '14-inch Steel Wheels']
      },
      {
        name: 'VXi (O) 1.0L AGS (Automatic)',
        exShowroom: 567500,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.0L K10C Dual Jet (67 PS)',
        mileage: '25.30 km/l',
        isVFM: false,
        keyFeatures: ['5-Speed AGS Automatic', '25.30 km/l Economy', 'Hill Hold Assist', 'Front Power Windows']
      },
      {
        name: 'VXi (O) 1.0L S-CNG 5MT',
        exShowroom: 611500,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.0L K10C S-CNG (56.7 PS)',
        mileage: '32.73 km/kg',
        isVFM: true,
        vfmBadge: '🏆 TOP-SPEC CNG MICRO SUV',
        keyFeatures: ['Factory S-CNG with 32.73 km/kg Economy', 'Front Power Windows', 'Remote Central Locking', 'Rear Parcel Tray']
      },
      {
        name: 'VXi+ (O) 1.0L 5MT',
        exShowroom: 550500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L K10C Dual Jet (67 PS)',
        mileage: '24.76 km/l',
        isVFM: true,
        vfmBadge: '⭐ FEATURE-PACKED PICK',
        keyFeatures: ['7-inch SmartPlay Studio Touchscreen', 'Apple CarPlay & Android Auto', 'Steering Mounted Audio Controls', 'Electrically Adjustable ORVMs', 'Front Fog Lamps']
      },
      {
        name: 'VXi+ (O) 1.0L AGS (Automatic)',
        exShowroom: 596500,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.0L K10C Dual Jet (67 PS)',
        mileage: '25.30 km/l',
        isVFM: false,
        keyFeatures: ['Top-Spec Automatic Mini-SUV', '7-inch Touchscreen', 'Steering Audio Controls', 'Hill Hold Assist', '25.30 km/l Certified Economy']
      }
    ]
  },
  {
    id: 'maruti-fronx',
    name: 'Maruti Suzuki Fronx',
    brand: 'Maruti Suzuki (Nexa)',
    tagline: 'The Shape of New — Turbo Boosterjet Performance, Coupe-SUV Styling & 360° View',
    launchDate: 'Updated 2024 (Turbo Boosterjet & Smart Hybrid)',
    bodyType: 'SUV Coupe',
    fuelTypes: ['Petrol', 'CNG'],
    priceRange: '₹7.51 - ₹13.04 Lakh',
    minPrice: 751500,
    maxPrice: 1304000,
    safetyRating: '6 Airbags (Alpha/Zeta), ESP with Hill Hold Assist, ABS with EBD, 360 HD View Camera',
    groundClearance: '190 mm',
    bootSpace: '308 L',
    waitingPeriod: '2 - 6 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/fronx/360/nexa-blue/4.webp',
    summary: 'The Maruti Suzuki Fronx is Nexa’s trendsetting compact coupe-SUV that combines athletic, aerodynamic fastback proportions with SUV toughness. Powered by either the punchy 1.0L K-Series Turbo Boosterjet engine (100.06 PS / 147.6 Nm with Progressive Smart Hybrid and paddle shifters) or the refined 1.2L Dual Jet engine (89.73 PS) available with manual, 5-speed AGS, and factory S-CNG (28.51 km/kg). Highlights include a 9-inch SmartPlay Pro+ touchscreen with wireless Apple CarPlay/Android Auto, Head-Up Display (HUD), 360-degree HD view camera, and 190mm ground clearance.',
    spin360: {
      totalFrames: 24,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/fronx/360',
      format: 'webp',
      defaultColor: 'nexa-blue',
      colors: [
        { id: 'nexa-blue', name: 'Nexa Blue (Celestial)', hex: '#163472' },
        { id: 'opulent-red-black-roof', name: 'Opulent Red with Bluish Black Roof', hex: '#AC0F0F' },
        { id: 'earthen-brown-black-roof', name: 'Earthen Brown with Bluish Black Roof', hex: '#95897B' },
        { id: 'splendid-silver-black-roof', name: 'Splendid Silver with Bluish Black Roof', hex: '#B6BABD' },
        { id: 'arctic-white', name: 'Arctic White', hex: '#F9F9F9' },
        { id: 'bluish-black', name: 'Bluish Black', hex: '#171717' },
        { id: 'grandeur-grey', name: 'Grandeur Grey', hex: '#464848' },
        { id: 'earthen-brown', name: 'Earthen Brown', hex: '#95897B' },
        { id: 'opulent-red', name: 'Opulent Red', hex: '#AC0F0F' },
        { id: 'splendid-silver', name: 'Splendid Silver', hex: '#B6BABD' }
      ]
    },
    colors: [
      { name: 'Nexa Blue (Celestial)', hex: '#163472', image: 'https://ik.imagekit.io/2908vvlod/cars/fronx/360/nexa-blue/4.webp' },
      { name: 'Opulent Red with Bluish Black Roof', hex: '#AC0F0F', image: 'https://ik.imagekit.io/2908vvlod/cars/fronx/360/opulent-red-black-roof/4.webp' },
      { name: 'Earthen Brown with Bluish Black Roof', hex: '#95897B', image: 'https://ik.imagekit.io/2908vvlod/cars/fronx/360/earthen-brown-black-roof/4.webp' },
      { name: 'Splendid Silver with Bluish Black Roof', hex: '#B6BABD', image: 'https://ik.imagekit.io/2908vvlod/cars/fronx/360/splendid-silver-black-roof/4.webp' },
      { name: 'Arctic White', hex: '#F9F9F9', image: 'https://ik.imagekit.io/2908vvlod/cars/fronx/360/arctic-white/4.webp' },
      { name: 'Bluish Black', hex: '#171717', image: 'https://ik.imagekit.io/2908vvlod/cars/fronx/360/bluish-black/4.webp' },
      { name: 'Grandeur Grey', hex: '#464848', image: 'https://ik.imagekit.io/2908vvlod/cars/fronx/360/grandeur-grey/4.webp' },
      { name: 'Earthen Brown', hex: '#95897B', image: 'https://ik.imagekit.io/2908vvlod/cars/fronx/360/earthen-brown/4.webp' },
      { name: 'Opulent Red', hex: '#AC0F0F', image: 'https://ik.imagekit.io/2908vvlod/cars/fronx/360/opulent-red/4.webp' },
      { name: 'Splendid Silver', hex: '#B6BABD', image: 'https://ik.imagekit.io/2908vvlod/cars/fronx/360/splendid-silver/4.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Coupe-SUV Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/fronx/360/nexa-blue/4.webp' },
      { label: "NEXA Wave Grille & NEXTre' LED DRLs", url: 'https://ik.imagekit.io/2908vvlod/cars/fronx/360/nexa-blue/1.webp' },
      { label: 'Side Fastback Coupe Aerodynamic Silhouette', url: 'https://ik.imagekit.io/2908vvlod/cars/fronx/360/nexa-blue/7.webp' },
      { label: 'Rear Full-Width Connected LED Lightbar', url: 'https://ik.imagekit.io/2908vvlod/cars/fronx/360/nexa-blue/13.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/fronx/360/nexa-blue/4.webp' },
      { title: "NEXA Signature Grille with Crystal Block LED DRLs and Headlamps", url: 'https://ik.imagekit.io/2908vvlod/cars/fronx/360/nexa-blue/1.webp' },
      { title: 'Aerodynamic Sloping Fastback Roofline with 16-inch Precision-Cut Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/fronx/360/nexa-blue/7.webp' },
      { title: 'Full-Width Connected Lightguide LED Taillamp Cluster with Sporty Skid Plate', url: 'https://ik.imagekit.io/2908vvlod/cars/fronx/360/nexa-blue/13.webp' }
    ],
    specs: {
      engineOptions: '1.0L K-Series Turbo Boosterjet (100.06 PS / 147.6 Nm) | 1.2L Dual Jet Dual VVT (89.73 PS / 113 Nm) | 1.2L S-CNG (77.5 PS / 98.5 Nm)',
      transmissions: '5-Speed Manual (5MT), 5-Speed AGS, and 6-Speed Torque Converter AT with Paddle Shifters',
      dimensions: '3995 mm (L) × 1765 mm (W) × 1550 mm (H)',
      wheelbase: '2520 mm',
      fuelTank: '37 Litres (Petrol) / 55 Litres Water Equivalent (CNG)',
      brakes: 'Front Ventilated Disc / Rear Drum with ABS & EBD',
      suspension: 'MacPherson Strut with Coil Spring (Front) / Torsion Beam (Rear)',
      safety: '6 Airbags (Alpha/Zeta), 360 HD View Camera, ESP with Hill Hold Assist, Head-Up Display (HUD), ISOFIX Child Mounts'
    },
    variants: [
      {
        name: 'Sigma 1.2L 5MT',
        exShowroom: 751500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Dual Jet (89.73 PS)',
        mileage: '21.79 km/l',
        isVFM: false,
        keyFeatures: ['Dual Airbags', 'ESP with Hill Hold Assist', 'Automatic Climate Control', 'All 4 Power Windows', 'Halogen Projector Headlamps']
      },
      {
        name: 'Sigma 1.2L S-CNG 5MT',
        exShowroom: 846500,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L Dual Jet CNG (77.5 PS)',
        mileage: '28.51 km/kg',
        isVFM: true,
        vfmBadge: '⚡ TOP CNG CROSSOVER PICK',
        keyFeatures: ['Factory S-CNG with 28.51 km/kg Economy', 'Automatic Climate Control', 'Dual Airbags', 'ESP & Hill Hold']
      },
      {
        name: 'Delta 1.2L 5MT',
        exShowroom: 837500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Dual Jet (89.73 PS)',
        mileage: '21.79 km/l',
        isVFM: true,
        vfmBadge: '🔥 BEST VALUE FOR MONEY',
        keyFeatures: ['7-inch SmartPlay Pro Touchscreen', 'Wireless Apple CarPlay & Android Auto', 'Steering Mounted Audio Controls', 'Electrically Foldable ORVMs']
      },
      {
        name: 'Delta 1.2L AGS (Automatic)',
        exShowroom: 887500,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Dual Jet (89.73 PS)',
        mileage: '22.89 km/l',
        isVFM: false,
        keyFeatures: ['5-Speed AGS Automatic', '22.89 km/l Efficiency', 'Hill Hold Assist', '7-inch Touchscreen']
      },
      {
        name: 'Delta 1.2L S-CNG 5MT',
        exShowroom: 932500,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L Dual Jet CNG (77.5 PS)',
        mileage: '28.51 km/kg',
        isVFM: true,
        vfmBadge: '🏆 HIGH-VALUE CNG PICK',
        keyFeatures: ['Factory S-CNG (28.51 km/kg)', '7-inch Touchscreen with Wireless CarPlay', 'Steering Controls', 'Auto Climate Control']
      },
      {
        name: 'Delta+ 1.2L 5MT',
        exShowroom: 877500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Dual Jet (89.73 PS)',
        mileage: '21.79 km/l',
        isVFM: false,
        keyFeatures: ['Multi-Reflector LED Headlamps', "NEXTre' LED DRLs", '16-inch Painted Alloy Wheels', 'Automatic Headlamps']
      },
      {
        name: 'Delta+ 1.0L Turbo Boosterjet 5MT',
        exShowroom: 972500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L Turbo Boosterjet (100.06 PS)',
        mileage: '21.5 km/l',
        isVFM: false,
        keyFeatures: ['1.0L Turbo Boosterjet 100 PS / 147.6 Nm', 'Multi-Reflector LED Headlamps', '16-inch Alloys', 'Smart Hybrid']
      },
      {
        name: 'Zeta 1.0L Turbo Boosterjet 5MT',
        exShowroom: 1055500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L Turbo Boosterjet (100.06 PS)',
        mileage: '21.5 km/l',
        isVFM: true,
        vfmBadge: '⭐ CROWD FAVORITE TURBO',
        keyFeatures: ['6 Airbags Standard', 'Engine Push Start/Stop', 'Wireless Phone Charger', 'Rear View Camera', 'Paddle Shifters (AT)', 'Connected Car Tech']
      },
      {
        name: 'Zeta 1.0L Turbo 6AT (Automatic)',
        exShowroom: 1196000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.0L Turbo Boosterjet (100.06 PS)',
        mileage: '20.01 km/l',
        isVFM: false,
        keyFeatures: ['6-Speed Torque Converter Automatic', 'Steering Mounted Paddle Shifters', '6 Airbags', 'Wireless Charger']
      },
      {
        name: 'Alpha 1.0L Turbo Boosterjet 5MT',
        exShowroom: 1147500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L Turbo Boosterjet (100.06 PS)',
        mileage: '21.5 km/l',
        isVFM: false,
        keyFeatures: ['360-Degree HD Surround Camera', 'Head-Up Display (HUD)', '9-inch SmartPlay Pro+ Display', '16-inch Precision Cut Alloys', 'Cruise Control']
      },
      {
        name: 'Alpha 1.0L Turbo 6AT (Automatic)',
        exShowroom: 1287500,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.0L Turbo Boosterjet (100.06 PS)',
        mileage: '20.01 km/l',
        isVFM: false,
        keyFeatures: ['Top-Spec Turbo Automatic with 360 Camera', 'Head-Up Display', 'Paddle Shifters', '9-inch Touchscreen', 'Dual-Tone Available']
      }
    ]
  },
  {
    id: 'maruti-grand-vitara',
    name: 'Maruti Suzuki Grand Vitara',
    brand: 'Maruti Suzuki (Nexa)',
    tagline: 'Rule Every Road — Intelligent Electric Hybrid (27.97 km/l), ALLGRIP AWD & Panoramic Sunroof',
    launchDate: 'Updated 2024 (Intelligent Electric Hybrid & ALLGRIP AWD)',
    bodyType: 'SUV',
    fuelTypes: ['Petrol', 'Hybrid', 'CNG'],
    priceRange: '₹10.99 - ₹20.09 Lakh',
    minPrice: 1099000,
    maxPrice: 2009000,
    safetyRating: '6 Airbags (Alpha/Zeta), ESP with Hill Hold Assist, Hill Descent Control, All-Wheel Disc Brakes, TPMS, 360 HD View Camera',
    groundClearance: '210 mm',
    bootSpace: '373 L (Smart Hybrid / CNG) / 265 L (Strong Hybrid)',
    waitingPeriod: '2 - 8 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/grand-vitara/360/nexa-blue/4.webp',
    summary: 'The Maruti Suzuki Grand Vitara is NEXA’s flagship mid-size premium SUV. Featuring an advanced Intelligent Electric Hybrid system delivering an astonishing 27.97 km/l, ALLGRIP Select AWD capability for rugged terrains, a panoramic sliding sunroof, ventilated seats, Head-Up Display, and factory-fitted S-CNG, it sets the benchmark for efficiency and premium capability.',
    threeSixty: {
      type: 'image-sequence',
      provider: 'imagekit',
      totalFrames: 24,
      defaultColor: 'nexa-blue',
      basePath: 'https://ik.imagekit.io/2908vvlod/cars/grand-vitara/360',
      fileNamePattern: '{frame}.webp',
      colors: [
        { id: 'nexa-blue', name: 'Nexa Blue (Celestial)', hex: '#163472' },
        { id: 'splendid-silver-black-roof', name: 'Splendid Silver with Midnight Black Roof', hex: '#B6BABD' },
        { id: 'opulent-red-black-roof', name: 'Opulent Red with Midnight Black Roof', hex: '#AC0F0F' },
        { id: 'arctic-white-black-roof', name: 'Arctic White with Midnight Black Roof', hex: '#F9F9F9' },
        { id: 'arctic-white', name: 'Arctic White', hex: '#F9F9F9' },
        { id: 'midnight-black', name: 'Midnight Black', hex: '#171717' },
        { id: 'grandeur-grey', name: 'Grandeur Grey', hex: '#464848' },
        { id: 'chestnut-brown', name: 'Chestnut Brown', hex: '#35312E' },
        { id: 'opulent-red', name: 'Opulent Red', hex: '#AC0F0F' },
        { id: 'splendid-silver', name: 'Splendid Silver', hex: '#B6BABD' }
      ]
    },
    colors: [
      { name: 'Nexa Blue (Celestial)', hex: '#163472', image: 'https://ik.imagekit.io/2908vvlod/cars/grand-vitara/360/nexa-blue/4.webp' },
      { name: 'Splendid Silver with Midnight Black Roof', hex: '#B6BABD', image: 'https://ik.imagekit.io/2908vvlod/cars/grand-vitara/360/splendid-silver-black-roof/4.webp' },
      { name: 'Opulent Red with Midnight Black Roof', hex: '#AC0F0F', image: 'https://ik.imagekit.io/2908vvlod/cars/grand-vitara/360/opulent-red-black-roof/4.webp' },
      { name: 'Arctic White with Midnight Black Roof', hex: '#F9F9F9', image: 'https://ik.imagekit.io/2908vvlod/cars/grand-vitara/360/arctic-white-black-roof/4.webp' },
      { name: 'Arctic White', hex: '#F9F9F9', image: 'https://ik.imagekit.io/2908vvlod/cars/grand-vitara/360/arctic-white/4.webp' },
      { name: 'Midnight Black', hex: '#171717', image: 'https://ik.imagekit.io/2908vvlod/cars/grand-vitara/360/midnight-black/4.webp' },
      { name: 'Grandeur Grey', hex: '#464848', image: 'https://ik.imagekit.io/2908vvlod/cars/grand-vitara/360/grandeur-grey/4.webp' },
      { name: 'Chestnut Brown', hex: '#35312E', image: 'https://ik.imagekit.io/2908vvlod/cars/grand-vitara/360/chestnut-brown/4.webp' },
      { name: 'Opulent Red', hex: '#AC0F0F', image: 'https://ik.imagekit.io/2908vvlod/cars/grand-vitara/360/opulent-red/4.webp' },
      { name: 'Splendid Silver', hex: '#B6BABD', image: 'https://ik.imagekit.io/2908vvlod/cars/grand-vitara/360/splendid-silver/4.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Imposing SUV Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/grand-vitara/360/nexa-blue/4.webp' },
      { label: "NEXA Crafted Futuristic Grille & NEXTre' LED DRLs", url: 'https://ik.imagekit.io/2908vvlod/cars/grand-vitara/360/nexa-blue/1.webp' },
      { label: 'Side Profile with 210mm High Ground Clearance & R17 Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/grand-vitara/360/nexa-blue/7.webp' },
      { label: 'Rear Connected Sweeping LED Taillamps', url: 'https://ik.imagekit.io/2908vvlod/cars/grand-vitara/360/nexa-blue/13.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/grand-vitara/360/nexa-blue/4.webp' },
      { title: "NEXA Signature Grille with 3-Point NEXTre' LED DRLs", url: 'https://ik.imagekit.io/2908vvlod/cars/grand-vitara/360/nexa-blue/1.webp' },
      { title: 'Muscular Side Silhouette with 17-inch Precision Cut Dual-Tone Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/grand-vitara/360/nexa-blue/7.webp' },
      { title: 'Full-Width Connected Lightguide LED Taillamp Cluster with Grand Vitara Badging', url: 'https://ik.imagekit.io/2908vvlod/cars/grand-vitara/360/nexa-blue/13.webp' }
    ],
    specs: {
      engineOptions: '1.5L Intelligent Electric Hybrid e-CVT (115.56 PS combined) | 1.5L K15C Smart Hybrid (103.06 PS / 136.8 Nm) | 1.5L S-CNG (87.8 PS / 121.5 Nm)',
      transmissions: '5-Speed Manual (5MT), 6-Speed Automatic with Paddle Shifters (6AT), and e-CVT (Hybrid)',
      dimensions: '4345 mm (L) × 1795 mm (W) × 1645 mm (H)',
      wheelbase: '2600 mm',
      fuelTank: '45 Litres (Petrol/Hybrid) / 55 Litres Water Equivalent (CNG)',
      brakes: 'All 4 Disc Brakes with ABS, EBD & Brake Assist',
      suspension: 'MacPherson Strut with Coil Spring (Front) / Torsion Beam with Coil Spring (Rear)',
      safety: '6 Airbags (Front, Side & Curtain), ESP with Hill Hold Assist, Hill Descent Control, TPMS, 360 HD View Camera, ISOFIX Mounts'
    },
    variants: [
      {
        name: 'Sigma 1.5L Smart Hybrid 5MT',
        exShowroom: 1099000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '21.11 km/l',
        isVFM: false,
        keyFeatures: ['All 4 Disc Brakes', 'ESP with Hill Hold Assist', 'Dual Airbags', 'Automatic Climate Control', 'Push Button Start/Stop', 'Projector Headlamps']
      },
      {
        name: 'Delta 1.5L Smart Hybrid 5MT',
        exShowroom: 1220000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '21.11 km/l',
        isVFM: true,
        vfmBadge: '🔥 BEST VALUE FOR MONEY',
        keyFeatures: ['7-inch SmartPlay Pro Touchscreen', 'Wireless Android Auto & Apple CarPlay', 'Reverse Parking Camera', 'Cruise Control', 'Suzuki Connect']
      },
      {
        name: 'Delta 1.5L Smart Hybrid 6AT',
        exShowroom: 1360000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '20.58 km/l',
        isVFM: false,
        keyFeatures: ['6-Speed Torque Converter Automatic', 'Paddle Shifters', 'Hill Hold Assist', 'Cruise Control', '7-inch Touchscreen']
      },
      {
        name: 'Delta 1.5L S-CNG 5MT',
        exShowroom: 1315000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.5L K15C CNG (87.8 PS)',
        mileage: '26.60 km/kg',
        isVFM: true,
        vfmBadge: '⚡ TOP MID-SUV CNG PICK',
        keyFeatures: ['Factory S-CNG with 26.60 km/kg Economy', '7-inch SmartPlay Pro Display', 'Reverse Camera', 'All 4 Disc Brakes', 'Auto Climate Control']
      },
      {
        name: 'Zeta 1.5L Smart Hybrid 5MT',
        exShowroom: 1401000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '21.11 km/l',
        isVFM: true,
        vfmBadge: '⭐ CROWD FAVORITE',
        keyFeatures: ['6 Airbags Standard', 'Full LED Headlamps & NEXTre DRLs', '9-inch SmartPlay Pro+ Touchscreen', '17-inch Precision Cut Alloys', 'Arkamy Sound System']
      },
      {
        name: 'Zeta 1.5L Smart Hybrid 6AT',
        exShowroom: 1541000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '20.58 km/l',
        isVFM: false,
        keyFeatures: ['6-Speed Automatic with Paddle Shifters', '6 Airbags', '9-inch SmartPlay Pro+', 'Auto LED Headlamps', '17-inch Alloys']
      },
      {
        name: 'Zeta 1.5L S-CNG 5MT',
        exShowroom: 1496000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.5L K15C CNG (87.8 PS)',
        mileage: '26.60 km/kg',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard with S-CNG', '9-inch SmartPlay Pro+ Screen', 'LED Headlamps & DRLs', '17-inch Precision Cut Alloys']
      },
      {
        name: 'Alpha 1.5L Smart Hybrid 5MT',
        exShowroom: 1551000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '21.11 km/l',
        isVFM: false,
        keyFeatures: ['Panoramic Sunroof (Dual-Pane Sliding)', '360 HD View Camera', 'Leatherette Upholstery', 'Drive Modes', 'Dual-Tone Roof Option']
      },
      {
        name: 'Alpha 1.5L Smart Hybrid 6AT',
        exShowroom: 1691000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '20.58 km/l',
        isVFM: false,
        keyFeatures: ['Panoramic Sunroof', '6-Speed AT with Paddle Shifters', '360 HD Camera', 'Black & Bordeaux Leatherette Interior']
      },
      {
        name: 'Alpha 1.5L ALLGRIP (AWD) 5MT',
        exShowroom: 1701000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '19.38 km/l',
        isVFM: true,
        vfmBadge: '🏔️ 4X4 ALLGRIP ADVENTURE',
        keyFeatures: ['ALLGRIP Select 4WD System', 'Auto, Sport, Snow & Lock Drive Modes', 'Hill Descent Control', 'Panoramic Sunroof', '360 HD Camera']
      },
      {
        name: 'Zeta+ 1.5L Strong Hybrid e-CVT',
        exShowroom: 1843000,
        fuel: 'Hybrid',
        trans: 'Automatic',
        engine: '1.5L Intelligent Electric Hybrid (115.56 PS)',
        mileage: '27.97 km/l',
        isVFM: true,
        vfmBadge: '⚡ HYBRID MILEAGE KING',
        keyFeatures: ['Intelligent Electric Strong Hybrid (27.97 km/l)', 'Pure EV Driving Mode', 'Head-Up Display (HUD)', 'Wireless Smartphone Charger', '7-inch Digital Driver Display']
      },
      {
        name: 'Alpha+ 1.5L Strong Hybrid e-CVT',
        exShowroom: 2009000,
        fuel: 'Hybrid',
        trans: 'Automatic',
        engine: '1.5L Intelligent Electric Hybrid (115.56 PS)',
        mileage: '27.97 km/l',
        isVFM: false,
        keyFeatures: ['Top-Spec Intelligent Electric Hybrid', 'Panoramic Sunroof', 'Front Ventilated Seats', '360 HD View Camera', 'Head-Up Display', 'Premium Black & Champagne Gold Accents']
      }
    ]
  },
  {
    id: 'maruti-baleno',
    name: 'Maruti Suzuki Baleno',
    brand: 'Maruti Suzuki (Nexa)',
    tagline: 'Tech Goes Bold — Head-Up Display, 360 HD View Camera & 30.61 km/kg S-CNG',
    launchDate: 'Updated 2024 (6 Airbags Standard & SmartPlay Pro+)',
    bodyType: 'Hatchback',
    fuelTypes: ['Petrol', 'CNG'],
    priceRange: '₹6.66 - ₹9.88 Lakh',
    minPrice: 666000,
    maxPrice: 988000,
    safetyRating: '6 Airbags (Zeta/Alpha), ESP with Hill Hold Assist, ABS with EBD, ISOFIX Mounts, 360 HD View Camera',
    groundClearance: '170 mm',
    bootSpace: '318 L (Petrol) / 55 L Water Equivalent (CNG)',
    waitingPeriod: '1 - 4 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/baleno/360/nexa-blue/4.webp',
    summary: 'The Maruti Suzuki Baleno is India’s bestselling premium hatchback from NEXA. Engineered with a bold sculpted stance, it features segment-first tech including a Head-Up Display (HUD), 360-degree HD surround view camera, 9-inch SmartPlay Pro+ touchscreen with ARKAMYS surround audio, 6 airbags standard on key grades, and class-leading 30.61 km/kg S-CNG efficiency.',
    threeSixty: {
      type: 'image-sequence',
      provider: 'imagekit',
      totalFrames: 24,
      defaultColor: 'nexa-blue',
      basePath: 'https://ik.imagekit.io/2908vvlod/cars/baleno/360',
      fileNamePattern: '{frame}.webp',
      colors: [
        { id: 'nexa-blue', name: 'Nexa Blue (Celestial)', hex: '#001E5B' },
        { id: 'splendid-silver', name: 'Splendid Silver', hex: '#464D50' },
        { id: 'arctic-white', name: 'Arctic White', hex: '#F9F9F9' },
        { id: 'grandeur-grey', name: 'Grandeur Grey', hex: '#303030' },
        { id: 'opulent-red', name: 'Opulent Red', hex: '#870001' },
        { id: 'pearl-midnight-black', name: 'Pearl Midnight Black', hex: '#181C28' },
        { id: 'celestial-teal', name: 'Celestial Teal (Luxe)', hex: '#069494' }
      ]
    },
    colors: [
      { name: 'Nexa Blue (Celestial)', hex: '#001E5B', image: 'https://ik.imagekit.io/2908vvlod/cars/baleno/360/nexa-blue/4.webp' },
      { name: 'Splendid Silver', hex: '#464D50', image: 'https://ik.imagekit.io/2908vvlod/cars/baleno/360/splendid-silver/4.webp' },
      { name: 'Arctic White', hex: '#F9F9F9', image: 'https://ik.imagekit.io/2908vvlod/cars/baleno/360/arctic-white/4.webp' },
      { name: 'Grandeur Grey', hex: '#303030', image: 'https://ik.imagekit.io/2908vvlod/cars/baleno/360/grandeur-grey/4.webp' },
      { name: 'Opulent Red', hex: '#870001', image: 'https://ik.imagekit.io/2908vvlod/cars/baleno/360/opulent-red/4.webp' },
      { name: 'Pearl Midnight Black', hex: '#181C28', image: 'https://ik.imagekit.io/2908vvlod/cars/baleno/360/pearl-midnight-black/4.webp' },
      { name: 'Celestial Teal (Luxe)', hex: '#069494', image: 'https://ik.imagekit.io/2908vvlod/cars/baleno/360/celestial-teal/4.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Liquid Flow Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/baleno/360/nexa-blue/4.webp' },
      { label: "NEXA Signature Grille with NEXTre' LED DRLs", url: 'https://ik.imagekit.io/2908vvlod/cars/baleno/360/nexa-blue/1.webp' },
      { label: 'Side Dynamic Aerodynamic Silhouette & 16-inch Precision Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/baleno/360/nexa-blue/7.webp' },
      { label: 'Rear Sculpted Stance with LED Taillamps', url: 'https://ik.imagekit.io/2908vvlod/cars/baleno/360/nexa-blue/13.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/baleno/360/nexa-blue/4.webp' },
      { title: "NEXA Wave Grille with 3-Point NEXTre' LED Daytime Running Lamps", url: 'https://ik.imagekit.io/2908vvlod/cars/baleno/360/nexa-blue/1.webp' },
      { title: 'Flowing Aerodynamic Side Profile with 16-inch Precision-Cut Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/baleno/360/nexa-blue/7.webp' },
      { title: 'Wide Sculpted Tailgate with Sharp Angular LED Tail Cluster', url: 'https://ik.imagekit.io/2908vvlod/cars/baleno/360/nexa-blue/13.webp' }
    ],
    specs: {
      engineOptions: '1.2L K-Series DualJet Dual VVT Petrol (89.73 PS / 113 Nm) | 1.2L S-CNG (77.49 PS / 98.5 Nm)',
      transmissions: '5-Speed Manual (5MT) & 5-Speed Auto Gear Shift (AGS)',
      dimensions: '3990 mm (L) × 1745 mm (W) × 1500 mm (H)',
      wheelbase: '2520 mm',
      fuelTank: '37 Litres (Petrol) / 55 Litres Water Equivalent (CNG)',
      brakes: 'Front Ventilated Disc / Rear Drum with ABS & EBD',
      suspension: 'MacPherson Strut (Front) / Torsion Beam (Rear)',
      safety: '6 Airbags (Zeta/Alpha), ESP with Hill Hold Assist, 360 HD View Camera, Head-Up Display (HUD), Rear Camera, ISOFIX'
    },
    variants: [
      {
        name: 'Sigma 1.2L 5MT',
        exShowroom: 666000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L DualJet Dual VVT (89.73 PS)',
        mileage: '22.35 km/l',
        isVFM: false,
        keyFeatures: ['Automatic Climate Control', 'All 4 Power Windows', 'Dual Front Airbags', 'ESP with Hill Hold Assist', 'Halogen Projector Headlamps', 'Central Locking']
      },
      {
        name: 'Delta 1.2L 5MT',
        exShowroom: 750000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L DualJet Dual VVT (89.73 PS)',
        mileage: '22.35 km/l',
        isVFM: true,
        vfmBadge: '🔥 BEST VALUE FOR MONEY',
        keyFeatures: ['7-inch SmartPlay Pro Touchscreen', 'Wireless Apple CarPlay & Android Auto', 'Steering Mounted Audio Controls', 'Electrically Foldable ORVMs']
      },
      {
        name: 'Delta 1.2L AGS (Automatic)',
        exShowroom: 800000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L DualJet Dual VVT (89.73 PS)',
        mileage: '22.94 km/l',
        isVFM: false,
        keyFeatures: ['5-Speed AGS Automatic', '22.94 km/l Segment-Best Auto Mileage', 'ESP & Hill Hold Assist', '7-inch Touchscreen']
      },
      {
        name: 'Delta 1.2L S-CNG 5MT',
        exShowroom: 840000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L DualJet CNG (77.49 PS)',
        mileage: '30.61 km/kg',
        isVFM: true,
        vfmBadge: '⚡ TOP CNG HATCHBACK PICK',
        keyFeatures: ['Factory S-CNG with 30.61 km/kg Record Mileage', '7-inch Touchscreen with Smartphone Link', 'Automatic Climate Control', 'Steering Controls']
      },
      {
        name: 'Zeta 1.2L 5MT',
        exShowroom: 843000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L DualJet Dual VVT (89.73 PS)',
        mileage: '22.35 km/l',
        isVFM: true,
        vfmBadge: '⭐ CROWD FAVORITE (6 AIRBAGS)',
        keyFeatures: ['6 Airbags Standard', 'LED Projector Headlamps with NEXTre DRLs', '16-inch Precision-Cut Alloys', 'Engine Push Start/Stop', 'Rear AC Vents & Fast USB Charger']
      },
      {
        name: 'Zeta 1.2L AGS (Automatic)',
        exShowroom: 893000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L DualJet Dual VVT (89.73 PS)',
        mileage: '22.94 km/l',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard', '5-Speed AGS Automatic', 'LED Projectors', '16-inch Precision Alloys', 'Push Start/Stop']
      },
      {
        name: 'Zeta 1.2L S-CNG 5MT',
        exShowroom: 933000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L DualJet CNG (77.49 PS)',
        mileage: '30.61 km/kg',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard with S-CNG', 'Factory S-CNG (30.61 km/kg)', '16-inch Precision Alloys', 'LED Headlamps & DRLs', 'Rear AC Vents']
      },
      {
        name: 'Alpha 1.2L 5MT',
        exShowroom: 938000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L DualJet Dual VVT (89.73 PS)',
        mileage: '22.35 km/l',
        isVFM: false,
        keyFeatures: ['Head-Up Display (Color HUD)', '360-Degree HD Surround Camera', '9-inch SmartPlay Pro+ Screen', 'Surround Sense Audio by ARKAMYS', 'Cruise Control', 'UV Cut Glass']
      },
      {
        name: 'Alpha 1.2L AGS (Automatic)',
        exShowroom: 988000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L DualJet Dual VVT (89.73 PS)',
        mileage: '22.94 km/l',
        isVFM: false,
        keyFeatures: ['Top-Spec Automatic with Head-Up Display', '360 HD Camera', '9-inch Touchscreen with ARKAMYS', '6 Airbags', 'Cruise Control', 'Auto-Dimming IRVM']
      }
    ]
  },
  {
    id: 'maruti-jimny',
    name: 'Maruti Suzuki Jimny',
    brand: 'Maruti Suzuki (Nexa)',
    tagline: 'Never Turn Back — ALLGRIP PRO 4x4, Heavy-Duty Ladder Frame & 3-Link Rigid Axle',
    launchDate: '5-Door Generation (ALLGRIP PRO 4x4 Standard)',
    bodyType: 'Off-Road SUV',
    fuelTypes: ['Petrol'],
    priceRange: '₹12.74 - ₹14.95 Lakh',
    minPrice: 1274000,
    maxPrice: 1495000,
    safetyRating: '6 Airbags Standard, Brake LSD (Limited Slip Differential), ESP with Hill Hold & Hill Descent Control, ABS with EBD',
    groundClearance: '210 mm',
    bootSpace: '211 L (Expandable to 332 L)',
    waitingPeriod: '2 - 6 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/jimny/360/kinetic-yellow-black-roof/4.webp',
    summary: 'The Maruti Suzuki Jimny 5-Door is a purebred off-roader designed to conquer any terrain. Built on a rigid ladder frame chassis with 3-link rigid axle coil-spring suspension, ALLGRIP PRO 4WD system with low-range transfer gear (4L), 210mm ground clearance, and standard 6 airbags across all variants, it brings authentic 4x4 heritage with everyday usability.',
    threeSixty: {
      type: 'image-sequence',
      provider: 'imagekit',
      totalFrames: 24,
      defaultColor: 'kinetic-yellow-black-roof',
      basePath: 'https://ik.imagekit.io/2908vvlod/cars/jimny/360',
      fileNamePattern: '{frame}.webp',
      colors: [
        { id: 'kinetic-yellow-black-roof', name: 'Kinetic Yellow with Bluish Black Roof', hex: '#E1ED4D' },
        { id: 'sizzling-red-black-roof', name: 'Sizzling Red with Bluish Black Roof', hex: '#B21511' },
        { id: 'nexa-blue', name: 'Nexa Blue (Celestial)', hex: '#163472' },
        { id: 'sizzling-red', name: 'Sizzling Red', hex: '#B21511' },
        { id: 'bluish-black', name: 'Bluish Black', hex: '#040720' },
        { id: 'pearl-arctic-white', name: 'Pearl Arctic White', hex: '#F9F9F9' },
        { id: 'granite-grey', name: 'Granite Grey', hex: '#494A4E' }
      ]
    },
    colors: [
      { name: 'Kinetic Yellow with Bluish Black Roof', hex: '#E1ED4D', image: 'https://ik.imagekit.io/2908vvlod/cars/jimny/360/kinetic-yellow-black-roof/4.webp' },
      { name: 'Sizzling Red with Bluish Black Roof', hex: '#B21511', image: 'https://ik.imagekit.io/2908vvlod/cars/jimny/360/sizzling-red-black-roof/4.webp' },
      { name: 'Nexa Blue (Celestial)', hex: '#163472', image: 'https://ik.imagekit.io/2908vvlod/cars/jimny/360/nexa-blue/4.webp' },
      { name: 'Sizzling Red', hex: '#B21511', image: 'https://ik.imagekit.io/2908vvlod/cars/jimny/360/sizzling-red/4.webp' },
      { name: 'Bluish Black', hex: '#040720', image: 'https://ik.imagekit.io/2908vvlod/cars/jimny/360/bluish-black/4.webp' },
      { name: 'Pearl Arctic White', hex: '#F9F9F9', image: 'https://ik.imagekit.io/2908vvlod/cars/jimny/360/pearl-arctic-white/4.webp' },
      { name: 'Granite Grey', hex: '#494A4E', image: 'https://ik.imagekit.io/2908vvlod/cars/jimny/360/granite-grey/4.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Upright 4x4 Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/jimny/360/kinetic-yellow-black-roof/4.webp' },
      { label: 'Heritage 5-Slot Grille & Round LED Projectors', url: 'https://ik.imagekit.io/2908vvlod/cars/jimny/360/kinetic-yellow-black-roof/1.webp' },
      { label: 'Side Profile with 210mm Ground Clearance & 5-Door Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/jimny/360/kinetic-yellow-black-roof/7.webp' },
      { label: 'Rear Tailgate-Mounted Spare Wheel & Bumper Lamps', url: 'https://ik.imagekit.io/2908vvlod/cars/jimny/360/kinetic-yellow-black-roof/13.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance in Kinetic Yellow', url: 'https://ik.imagekit.io/2908vvlod/cars/jimny/360/kinetic-yellow-black-roof/4.webp' },
      { title: 'Iconic 5-Slot Front Grille with Chrome Accents and Round Headlamps', url: 'https://ik.imagekit.io/2908vvlod/cars/jimny/360/kinetic-yellow-black-roof/1.webp' },
      { title: 'Boxy Utilitarian Body Profile on Rugged Ladder Frame Chassis', url: 'https://ik.imagekit.io/2908vvlod/cars/jimny/360/kinetic-yellow-black-roof/7.webp' },
      { title: 'Side-Hinged Rear Tailgate with Full-Size 15-inch Spare Wheel', url: 'https://ik.imagekit.io/2908vvlod/cars/jimny/360/kinetic-yellow-black-roof/13.webp' }
    ],
    specs: {
      engineOptions: '1.5L K15B 4-Cylinder Petrol Engine (104.8 PS / 134.2 Nm)',
      transmissions: '5-Speed Manual (5MT) & 4-Speed Automatic (4AT) with Low-Range Gearbox',
      dimensions: '3985 mm (L) × 1645 mm (W) × 1720 mm (H)',
      wheelbase: '2590 mm',
      fuelTank: '40 Litres',
      brakes: 'Front Disc / Rear Drum with Brake LSD (Limited Slip Differential)',
      suspension: '3-Link Rigid Axle with Coil Spring (Front & Rear)',
      safety: '6 Airbags Standard across all trims, ALLGRIP PRO 4WD, Hill Hold Assist, Hill Descent Control, Rear Camera, ISOFIX'
    },
    variants: [
      {
        name: 'Zeta 1.5L 4WD 5MT',
        exShowroom: 1274000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15B Petrol (104.8 PS)',
        mileage: '16.94 km/l',
        isVFM: true,
        vfmBadge: '🔥 BEST VALUE 4X4 OFF-ROADER',
        keyFeatures: ['ALLGRIP PRO 4WD with Low-Range Transfer (2H/4H/4L)', '6 Airbags Standard', 'Brake LSD (Limited Slip Differential)', 'Hill Hold & Descent Control', '7-inch SmartPlay Pro Touchscreen', 'Wireless Apple CarPlay & Android Auto']
      },
      {
        name: 'Zeta 1.5L 4WD 4AT',
        exShowroom: 1384000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L K15B Petrol (104.8 PS)',
        mileage: '16.39 km/l',
        isVFM: false,
        keyFeatures: ['4-Speed Torque Converter AT with 4WD', '6 Airbags Standard', 'ESP & Hill Hold Control', '7-inch Touchscreen', 'Electric ORVMs']
      },
      {
        name: 'Alpha 1.5L 4WD 5MT',
        exShowroom: 1369000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15B Petrol (104.8 PS)',
        mileage: '16.94 km/l',
        isVFM: true,
        vfmBadge: '⭐ CROWD FAVORITE (TOP SPEC)',
        keyFeatures: ['9-inch SmartPlay Pro+ Touchscreen with ARKAMYS', 'LED Projector Headlamps with Headlamp Washers', 'Cruise Control', 'Automatic Climate Control', '15-inch Gunmetal Alloy Wheels', 'Dark Green UV Cut Glass']
      },
      {
        name: 'Alpha 1.5L 4WD 4AT',
        exShowroom: 1479000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L K15B Petrol (104.8 PS)',
        mileage: '16.39 km/l',
        isVFM: false,
        keyFeatures: ['Top-Spec 4x4 Automatic', 'Headlamp Washers', '9-inch SmartPlay Pro+', 'Cruise Control', 'Auto Climate Control', '15-inch Alloys']
      },
      {
        name: 'Alpha 1.5L 4WD 5MT Dual-Tone',
        exShowroom: 1385000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15B Petrol (104.8 PS)',
        mileage: '16.94 km/l',
        isVFM: false,
        keyFeatures: ['Signature Dual-Tone Roof (Kinetic Yellow / Sizzling Red with Black Roof)', '9-inch Screen', 'LED Headlamp Washers', 'Cruise Control']
      },
      {
        name: 'Alpha 1.5L 4WD 4AT Dual-Tone',
        exShowroom: 1495000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L K15B Petrol (104.8 PS)',
        mileage: '16.39 km/l',
        isVFM: false,
        keyFeatures: ['Flagship Dual-Tone 4x4 Automatic', 'Kinetic Yellow with Bluish Black Roof', 'Headlamp Washers', '9-inch SmartPlay Pro+', 'Cruise Control']
      }
    ]
  },
  {
    id: 'maruti-xl6',
    name: 'Maruti Suzuki XL6',
    brand: 'Maruti Suzuki (Nexa)',
    tagline: 'Time to Indulge — 2nd Row Captain Seats, Front Ventilated Seats & 360 HD Camera',
    launchDate: 'Updated 2024 (Smart Hybrid & Ventilated Seats)',
    bodyType: 'MUV',
    fuelTypes: ['Petrol', 'CNG'],
    priceRange: '₹11.61 - ₹14.77 Lakh',
    minPrice: 1161000,
    maxPrice: 1477000,
    safetyRating: '4 Airbags Standard (Dual Front + Side), ESP with Hill Hold Assist, TPMS, 360 HD View Camera, ABS with EBD, ISOFIX',
    groundClearance: '180 mm',
    bootSpace: '209 L (All Rows Up) / 510 L (3rd Row Folded)',
    waitingPeriod: '2 - 6 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/xl6/360/nexa-blue/4.webp',
    summary: 'The Maruti Suzuki XL6 is NEXA’s premium 6-seater MPV engineered for executive family travel. Featuring individual plush 2nd-row captain seats with one-touch recline and individual armrests, ventilated front seats, 360-degree HD view camera, Tyre Pressure Monitoring System (TPMS), 6-speed automatic with paddle shifters, and certified 26.32 km/kg S-CNG efficiency.',
    threeSixty: {
      type: 'image-sequence',
      provider: 'imagekit',
      totalFrames: 24,
      defaultColor: 'nexa-blue',
      basePath: 'https://ik.imagekit.io/2908vvlod/cars/xl6/360',
      fileNamePattern: '{frame}.webp',
      colors: [
        { id: 'nexa-blue', name: 'Nexa Blue (Celestial)', hex: '#163472' },
        { id: 'splendid-silver-black-roof', name: 'Splendid Silver with Midnight Black Roof', hex: '#B6BABD' },
        { id: 'brave-khaki-black-roof', name: 'Brave Khaki with Midnight Black Roof', hex: '#57490A' },
        { id: 'opulent-red-black-roof', name: 'Opulent Red with Midnight Black Roof', hex: '#AC0F0F' },
        { id: 'splendid-silver', name: 'Splendid Silver', hex: '#B6BABD' },
        { id: 'grandeur-grey', name: 'Grandeur Grey', hex: '#464848' },
        { id: 'arctic-white', name: 'Arctic White', hex: '#F9F9F9' },
        { id: 'opulent-red', name: 'Opulent Red', hex: '#AC0F0F' },
        { id: 'brave-khaki', name: 'Brave Khaki', hex: '#57490A' },
        { id: 'pearl-midnight-black', name: 'Pearl Midnight Black', hex: '#040720' }
      ]
    },
    colors: [
      { name: 'Nexa Blue (Celestial)', hex: '#163472', image: 'https://ik.imagekit.io/2908vvlod/cars/xl6/360/nexa-blue/4.webp' },
      { name: 'Splendid Silver with Midnight Black Roof', hex: '#B6BABD', image: 'https://ik.imagekit.io/2908vvlod/cars/xl6/360/splendid-silver-black-roof/4.webp' },
      { name: 'Brave Khaki with Midnight Black Roof', hex: '#57490A', image: 'https://ik.imagekit.io/2908vvlod/cars/xl6/360/brave-khaki-black-roof/4.webp' },
      { name: 'Opulent Red with Midnight Black Roof', hex: '#AC0F0F', image: 'https://ik.imagekit.io/2908vvlod/cars/xl6/360/opulent-red-black-roof/4.webp' },
      { name: 'Splendid Silver', hex: '#B6BABD', image: 'https://ik.imagekit.io/2908vvlod/cars/xl6/360/splendid-silver/4.webp' },
      { name: 'Grandeur Grey', hex: '#464848', image: 'https://ik.imagekit.io/2908vvlod/cars/xl6/360/grandeur-grey/4.webp' },
      { name: 'Arctic White', hex: '#F9F9F9', image: 'https://ik.imagekit.io/2908vvlod/cars/xl6/360/arctic-white/4.webp' },
      { name: 'Opulent Red', hex: '#AC0F0F', image: 'https://ik.imagekit.io/2908vvlod/cars/xl6/360/opulent-red/4.webp' },
      { name: 'Brave Khaki', hex: '#57490A', image: 'https://ik.imagekit.io/2908vvlod/cars/xl6/360/brave-khaki/4.webp' },
      { name: 'Pearl Midnight Black', hex: '#040720', image: 'https://ik.imagekit.io/2908vvlod/cars/xl6/360/pearl-midnight-black/4.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Executive Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/xl6/360/nexa-blue/4.webp' },
      { label: 'NEXA Sweeping Cross-Bar Chrome Grille & Quad LED Headlamps', url: 'https://ik.imagekit.io/2908vvlod/cars/xl6/360/nexa-blue/1.webp' },
      { label: 'Side Profile with 16-inch Precision Alloys & Roof Rails', url: 'https://ik.imagekit.io/2908vvlod/cars/xl6/360/nexa-blue/7.webp' },
      { label: 'Rear Smoke Grey Connected LED Lightguide Taillamps', url: 'https://ik.imagekit.io/2908vvlod/cars/xl6/360/nexa-blue/13.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/xl6/360/nexa-blue/4.webp' },
      { title: 'Bold Chrome Grille Insert with Quad Chamber Full LED Headlamps', url: 'https://ik.imagekit.io/2908vvlod/cars/xl6/360/nexa-blue/1.webp' },
      { title: 'Aerodynamic Stretched MPV Silhouette with 16-inch Dual-Tone Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/xl6/360/nexa-blue/7.webp' },
      { title: 'Smoke Grey 3D LED Taillamp Cluster with Rear Backdoor Garnish', url: 'https://ik.imagekit.io/2908vvlod/cars/xl6/360/nexa-blue/13.webp' }
    ],
    specs: {
      engineOptions: '1.5L K15C DualJet Dual VVT Smart Hybrid Petrol (103.06 PS / 136.8 Nm) | 1.5L S-CNG (87.83 PS / 121.5 Nm)',
      transmissions: '5-Speed Manual (5MT) & 6-Speed Automatic with Paddle Shifters (6AT)',
      dimensions: '4445 mm (L) × 1775 mm (W) × 1755 mm (H)',
      wheelbase: '2740 mm',
      fuelTank: '45 Litres (Petrol) / 60 Litres Water Equivalent (CNG)',
      brakes: 'Front Ventilated Disc / Rear Drum with ABS & EBD',
      suspension: 'MacPherson Strut with Coil Spring (Front) / Torsion Beam (Rear)',
      safety: '4 Airbags Standard (Dual Front + Side), ESP with Hill Hold Assist, TPMS, 360 HD View Camera, ISOFIX Child Mounts'
    },
    variants: [
      {
        name: 'Zeta 1.5L Smart Hybrid 5MT',
        exShowroom: 1161000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '20.97 km/l',
        isVFM: false,
        keyFeatures: ['2nd-Row Captain Seats with Armrests', '4 Airbags Standard', 'ESP with Hill Hold Assist', 'Automatic Climate Control', '7-inch SmartPlay Pro Touchscreen', 'Cruise Control', '16-inch Dual-Tone Alloys']
      },
      {
        name: 'Zeta 1.5L S-CNG 5MT',
        exShowroom: 1256000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.5L K15C CNG (87.83 PS)',
        mileage: '26.32 km/kg',
        isVFM: true,
        vfmBadge: '⚡ TOP 6-SEATER CNG PICK',
        keyFeatures: ['Factory S-CNG with 26.32 km/kg Economy', '2nd-Row Captain Seats', '4 Airbags Standard', '7-inch Touchscreen with Smartphone Link', 'Automatic Climate Control']
      },
      {
        name: 'Zeta 1.5L Smart Hybrid 6AT',
        exShowroom: 1301000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '20.27 km/l',
        isVFM: false,
        keyFeatures: ['6-Speed Torque Converter Automatic', 'Steering Mounted Paddle Shifters', '4 Airbags', 'Cruise Control', 'Hill Hold Assist']
      },
      {
        name: 'Alpha 1.5L Smart Hybrid 5MT',
        exShowroom: 1261000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '20.97 km/l',
        isVFM: true,
        vfmBadge: '🔥 BEST VALUE FOR MONEY',
        keyFeatures: ['360-Degree HD Surround Camera', 'Leatherette Seat Upholstery', 'Auto Headlamps with Follow-Me-Home', 'UV Cut Glass', 'SmartPlay Pro Display']
      },
      {
        name: 'Alpha 1.5L Smart Hybrid 6AT',
        exShowroom: 1401000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '20.27 km/l',
        isVFM: false,
        keyFeatures: ['6-Speed AT with Paddle Shifters', '360 HD View Camera', 'Leatherette Seats', 'Auto Headlamps', 'Cruise Control']
      },
      {
        name: 'Alpha+ 1.5L Smart Hybrid 5MT',
        exShowroom: 1321000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '20.97 km/l',
        isVFM: true,
        vfmBadge: '⭐ CROWD FAVORITE (VENTILATED SEATS)',
        keyFeatures: ['Front Ventilated Seats (Driver & Co-Driver)', 'Tyre Pressure Monitoring System (TPMS)', '360 HD Surround Camera', 'Smoke Grey LED Taillamps', 'Backdoor Spoiler']
      },
      {
        name: 'Alpha+ 1.5L Smart Hybrid 6AT',
        exShowroom: 1461000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '20.27 km/l',
        isVFM: false,
        keyFeatures: ['Top-Spec 6-Seater Automatic', 'Front Ventilated Seats', '6-Speed AT with Paddle Shifters', '360 HD Camera', 'TPMS', 'Smoke Grey Taillamps']
      },
      {
        name: 'Alpha+ 1.5L Smart Hybrid 5MT Dual-Tone',
        exShowroom: 1337000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '20.97 km/l',
        isVFM: false,
        keyFeatures: ['Midnight Black Contrast Roof (Silver/Khaki/Red)', 'Front Ventilated Seats', 'TPMS', '360 HD Camera', 'Black ORVMs']
      },
      {
        name: 'Alpha+ 1.5L Smart Hybrid 6AT Dual-Tone',
        exShowroom: 1477000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L K15C Smart Hybrid (103 PS)',
        mileage: '20.27 km/l',
        isVFM: false,
        keyFeatures: ['Flagship 6-Seater Automatic Dual-Tone', 'Front Ventilated Seats', '6-Speed AT with Paddle Shifters', 'TPMS', '360 HD View Camera']
      }
    ]
  },
  {
    id: 'maruti-ignis',
    name: 'Maruti Suzuki Ignis',
    brand: 'Maruti Suzuki (Nexa)',
    tagline: 'The Tough Urban Compact — 180mm High Ground Clearance, 15-inch Black Alloys & SmartPlay Studio',
    launchDate: 'Updated 2024 (E20 & BS6 Phase 2 Compliant)',
    bodyType: 'Hatchback',
    fuelTypes: ['Petrol'],
    priceRange: '₹5.84 - ₹8.25 Lakh',
    minPrice: 584000,
    maxPrice: 825000,
    safetyRating: 'Dual Airbags Standard, ABS with EBD, ESP with Hill Hold Assist (AGS), ISOFIX Child Mounts, Rear Parking Camera',
    groundClearance: '180 mm',
    bootSpace: '260 L',
    waitingPeriod: '1 - 3 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/ignis/360/nexa-blue/4.webp',
    summary: 'The Maruti Suzuki Ignis is NEXA’s distinctive urban compact cross-hatch. Built with an imposing mini-SUV stance, generous 180mm ground clearance, tight 4.7m turning radius for effortless city navigation, striking U-shaped chrome grille, all-black 15-inch alloys, and fuel-efficient 1.2L 4-cylinder K-Series engine delivering 20.89 km/l.',
    threeSixty: {
      type: 'image-sequence',
      provider: 'imagekit',
      totalFrames: 24,
      defaultColor: 'nexa-blue',
      basePath: 'https://ik.imagekit.io/2908vvlod/cars/ignis/360',
      fileNamePattern: '{frame}.webp',
      colors: [
        { id: 'nexa-blue', name: 'Nexa Blue (Celestial)', hex: '#11376A' },
        { id: 'lucent-orange-black-roof', name: 'Lucent Orange with Black Roof', hex: '#A12B00' },
        { id: 'nexa-blue-black-roof', name: 'Nexa Blue with Black Roof', hex: '#133870' },
        { id: 'nexa-blue-silver-roof', name: 'Nexa Blue with Silver Roof', hex: '#133870' },
        { id: 'lucent-orange', name: 'Lucent Orange', hex: '#A12B00' },
        { id: 'turquoise-blue', name: 'Turquoise Blue', hex: '#00648F' },
        { id: 'glistening-grey', name: 'Glistening Grey', hex: '#4A4A4A' },
        { id: 'pearl-arctic-white', name: 'Pearl Arctic White', hex: '#FFFFFF' },
        { id: 'silky-silver', name: 'Silky Silver', hex: '#7D7D7D' },
        { id: 'pearl-midnight-black', name: 'Pearl Midnight Black', hex: '#040720' }
      ]
    },
    colors: [
      { name: 'Nexa Blue (Celestial)', hex: '#11376A', image: 'https://ik.imagekit.io/2908vvlod/cars/ignis/360/nexa-blue/4.webp' },
      { name: 'Lucent Orange with Black Roof', hex: '#A12B00', image: 'https://ik.imagekit.io/2908vvlod/cars/ignis/360/lucent-orange-black-roof/4.webp' },
      { name: 'Nexa Blue with Black Roof', hex: '#133870', image: 'https://ik.imagekit.io/2908vvlod/cars/ignis/360/nexa-blue-black-roof/4.webp' },
      { name: 'Nexa Blue with Silver Roof', hex: '#133870', image: 'https://ik.imagekit.io/2908vvlod/cars/ignis/360/nexa-blue-silver-roof/4.webp' },
      { name: 'Lucent Orange', hex: '#A12B00', image: 'https://ik.imagekit.io/2908vvlod/cars/ignis/360/lucent-orange/4.webp' },
      { name: 'Turquoise Blue', hex: '#00648F', image: 'https://ik.imagekit.io/2908vvlod/cars/ignis/360/turquoise-blue/4.webp' },
      { name: 'Glistening Grey', hex: '#4A4A4A', image: 'https://ik.imagekit.io/2908vvlod/cars/ignis/360/glistening-grey/4.webp' },
      { name: 'Pearl Arctic White', hex: '#FFFFFF', image: 'https://ik.imagekit.io/2908vvlod/cars/ignis/360/pearl-arctic-white/4.webp' },
      { name: 'Silky Silver', hex: '#7D7D7D', image: 'https://ik.imagekit.io/2908vvlod/cars/ignis/360/silky-silver/4.webp' },
      { name: 'Pearl Midnight Black', hex: '#040720', image: 'https://ik.imagekit.io/2908vvlod/cars/ignis/360/pearl-midnight-black/4.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Tough Urban Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/ignis/360/nexa-blue/4.webp' },
      { label: 'Tough Urban Grille & LED Projector Headlamps', url: 'https://ik.imagekit.io/2908vvlod/cars/ignis/360/nexa-blue/1.webp' },
      { label: 'Side High-Stance Profile & 15-inch All-Black Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/ignis/360/nexa-blue/7.webp' },
      { label: 'Rear Tailgate with C-pillar Slits & Skid Plate', url: 'https://ik.imagekit.io/2908vvlod/cars/ignis/360/nexa-blue/13.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance in Nexa Blue', url: 'https://ik.imagekit.io/2908vvlod/cars/ignis/360/nexa-blue/4.webp' },
      { title: 'Chrome U-Shaped Grille with High-Mounted LED Projector Headlamps', url: 'https://ik.imagekit.io/2908vvlod/cars/ignis/360/nexa-blue/1.webp' },
      { title: 'High Ground Clearance Silhouette with Chunky Wheel Arch Cladding', url: 'https://ik.imagekit.io/2908vvlod/cars/ignis/360/nexa-blue/7.webp' },
      { title: 'Sporty Rear Bumper with Rugged Silver Skid Plate Accent', url: 'https://ik.imagekit.io/2908vvlod/cars/ignis/360/nexa-blue/13.webp' }
    ],
    specs: {
      engineOptions: '1.2L 4-Cylinder K-Series VVT Petrol (83.1 PS / 113 Nm)',
      transmissions: '5-Speed Manual (5MT) & 5-Speed Auto Gear Shift (AGS)',
      dimensions: '3700 mm (L) × 1690 mm (W) × 1595 mm (H)',
      wheelbase: '2435 mm',
      fuelTank: '32 Litres',
      brakes: 'Front Disc / Rear Drum with ABS & EBD',
      suspension: 'MacPherson Strut (Front) / Torsion Beam (Rear)',
      safety: 'Dual Airbags Standard, ABS with EBD, ESP with Hill Hold Assist (AGS), Rear Camera, ISOFIX Child Mounts'
    },
    variants: [
      {
        name: 'Sigma 1.2L 5MT',
        exShowroom: 584000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L 4-Cyl Petrol (83.1 PS)',
        mileage: '20.89 km/l',
        isVFM: false,
        keyFeatures: ['180mm High Ground Clearance', 'Dual Front Airbags', 'ABS with EBD', 'Front Power Windows', 'ISOFIX Child Mounts', 'Tilt Steering']
      },
      {
        name: 'Delta 1.2L 5MT',
        exShowroom: 638000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L 4-Cyl Petrol (83.1 PS)',
        mileage: '20.89 km/l',
        isVFM: true,
        vfmBadge: '🔥 BEST VALUE FOR MONEY',
        keyFeatures: ['2-DIN Audio System with Bluetooth', 'Steering Mounted Controls', 'Keyless Entry', 'Electrically Adjustable ORVMs with Turn Indicators', 'All 4 Power Windows']
      },
      {
        name: 'Delta 1.2L AGS (Automatic)',
        exShowroom: 688000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L 4-Cyl Petrol (83.1 PS)',
        mileage: '20.89 km/l',
        isVFM: false,
        keyFeatures: ['5-Speed AGS Automatic', 'Hill Hold Assist', '20.89 km/l City Mileage', 'Audio with Bluetooth', 'Steering Audio Controls']
      },
      {
        name: 'Zeta 1.2L 5MT',
        exShowroom: 696000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L 4-Cyl Petrol (83.1 PS)',
        mileage: '20.89 km/l',
        isVFM: true,
        vfmBadge: '⭐ CROWD FAVORITE',
        keyFeatures: ['7-inch SmartPlay Studio Touchscreen', 'Apple CarPlay & Android Auto', '15-inch All-Black Alloy Wheels', 'Engine Push Button Start', 'Front Fog Lamps']
      },
      {
        name: 'Zeta 1.2L AGS (Automatic)',
        exShowroom: 746000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L 4-Cyl Petrol (83.1 PS)',
        mileage: '20.89 km/l',
        isVFM: false,
        keyFeatures: ['AGS Automatic with 7-inch Touchscreen', '15-inch Black Alloys', 'Push Start', 'Hill Hold Assist', 'Electrically Folding ORVMs']
      },
      {
        name: 'Alpha 1.2L 5MT',
        exShowroom: 761000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L 4-Cyl Petrol (83.1 PS)',
        mileage: '20.89 km/l',
        isVFM: false,
        keyFeatures: ['LED Projector Headlamps with Integrated LED DRLs', 'Reverse Parking Camera', 'Automatic Climate Control', 'Height-Adjustable Driver Seat', 'Puddle Lamps']
      },
      {
        name: 'Alpha 1.2L AGS (Automatic)',
        exShowroom: 811000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L 4-Cyl Petrol (83.1 PS)',
        mileage: '20.89 km/l',
        isVFM: false,
        keyFeatures: ['Top-Spec Automatic with LED Projectors', 'Reverse Parking Camera', 'Automatic Climate Control', '7-inch Touchscreen', '15-inch Black Alloys']
      },
      {
        name: 'Alpha 1.2L Dual-Tone (MT / AGS)',
        exShowroom: 775000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L 4-Cyl Petrol (83.1 PS)',
        mileage: '20.89 km/l',
        isVFM: false,
        keyFeatures: ['Signature Dual-Tone Roof (Lucent Orange or Nexa Blue with Black/Silver Roof)', 'LED Projectors', 'Auto AC', 'Reverse Camera']
      }
    ]
  },
  {
    id: 'maruti-ciaz',
    name: 'Maruti Suzuki Ciaz',
    brand: 'Maruti Suzuki (Nexa)',
    tagline: 'Created to Inspire — Executive Lounge Luxury, Cavernous 510L Boot & Smart Hybrid Efficiency',
    launchDate: 'Updated 2024 (Smart Hybrid & Dual-Tone Editions)',
    bodyType: 'Sedan',
    fuelTypes: ['Petrol'],
    priceRange: '₹9.40 - ₹12.45 Lakh',
    minPrice: 940000,
    maxPrice: 1245000,
    safetyRating: 'Dual Airbags Standard, ESP with Hill Hold Assist, ABS with EBD, ISOFIX Child Mounts, Reverse Parking Camera',
    groundClearance: '170 mm',
    bootSpace: '510 L',
    waitingPeriod: '2 - 4 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/ciaz/360/nexa-blue/4.webp',
    summary: 'The Maruti Suzuki Ciaz is NEXA’s flagship executive sedan. Featuring a generous 2650mm wheelbase delivering best-in-class rear lounge legroom, cavernous 510-litre boot, 1.5L K15B Smart Hybrid petrol engine with dual-battery system, plush leather upholstery, and sharp LED projector headlamps with DRLs, it is tailored for premium chauffeur-driven and self-driven comfort alike.',
    threeSixty: {
      type: 'image-sequence',
      provider: 'imagekit',
      totalFrames: 24,
      defaultColor: 'nexa-blue',
      basePath: 'https://ik.imagekit.io/2908vvlod/cars/ciaz/360',
      fileNamePattern: '{frame}.webp',
      colors: [
        { id: 'nexa-blue', name: 'Nexa Blue (Celestial)', hex: '#1E2B71' },
        { id: 'opulent-red-black-roof', name: 'Opulent Red with Black Roof', hex: '#D22735' },
        { id: 'grandeur-grey-black-roof', name: 'Grandeur Grey with Black Roof', hex: '#6E6C6A' },
        { id: 'dignity-brown-black-roof', name: 'Pearl Metallic Dignity Brown with Black Roof', hex: '#7E5B4B' },
        { id: 'splendid-silver', name: 'Splendid Silver', hex: '#9D9796' },
        { id: 'grandeur-grey', name: 'Grandeur Grey', hex: '#6E6C6A' },
        { id: 'pearl-arctic-white', name: 'Pearl Arctic White', hex: '#DEDEDE' },
        { id: 'opulent-red', name: 'Opulent Red', hex: '#D22735' },
        { id: 'dignity-brown', name: 'Pearl Metallic Dignity Brown', hex: '#7E5B4B' },
        { id: 'pearl-midnight-black', name: 'Pearl Midnight Black', hex: '#212121' }
      ]
    },
    colors: [
      { name: 'Nexa Blue (Celestial)', hex: '#1E2B71', image: 'https://ik.imagekit.io/2908vvlod/cars/ciaz/360/nexa-blue/4.webp' },
      { name: 'Opulent Red with Black Roof', hex: '#D22735', image: 'https://ik.imagekit.io/2908vvlod/cars/ciaz/360/opulent-red-black-roof/4.webp' },
      { name: 'Grandeur Grey with Black Roof', hex: '#6E6C6A', image: 'https://ik.imagekit.io/2908vvlod/cars/ciaz/360/grandeur-grey-black-roof/4.webp' },
      { name: 'Pearl Metallic Dignity Brown with Black Roof', hex: '#7E5B4B', image: 'https://ik.imagekit.io/2908vvlod/cars/ciaz/360/dignity-brown-black-roof/4.webp' },
      { name: 'Splendid Silver', hex: '#9D9796', image: 'https://ik.imagekit.io/2908vvlod/cars/ciaz/360/splendid-silver/4.webp' },
      { name: 'Grandeur Grey', hex: '#6E6C6A', image: 'https://ik.imagekit.io/2908vvlod/cars/ciaz/360/grandeur-grey/4.webp' },
      { name: 'Pearl Arctic White', hex: '#DEDEDE', image: 'https://ik.imagekit.io/2908vvlod/cars/ciaz/360/pearl-arctic-white/4.webp' },
      { name: 'Opulent Red', hex: '#D22735', image: 'https://ik.imagekit.io/2908vvlod/cars/ciaz/360/opulent-red/4.webp' },
      { name: 'Pearl Metallic Dignity Brown', hex: '#7E5B4B', image: 'https://ik.imagekit.io/2908vvlod/cars/ciaz/360/dignity-brown/4.webp' },
      { name: 'Pearl Midnight Black', hex: '#212121', image: 'https://ik.imagekit.io/2908vvlod/cars/ciaz/360/pearl-midnight-black/4.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Elegant Executive Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/ciaz/360/nexa-blue/4.webp' },
      { label: 'Sleek Front Chrome Strip Grille & LED Projector Headlamps', url: 'https://ik.imagekit.io/2908vvlod/cars/ciaz/360/nexa-blue/1.webp' },
      { label: 'Side Elongated Aerodynamic Profile & 16-inch Precision Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/ciaz/360/nexa-blue/7.webp' },
      { label: 'Rear Sedan Profile with Split LED Combination Lamps', url: 'https://ik.imagekit.io/2908vvlod/cars/ciaz/360/nexa-blue/13.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance in Nexa Blue', url: 'https://ik.imagekit.io/2908vvlod/cars/ciaz/360/nexa-blue/4.webp' },
      { title: 'NEXA Signature Chrome Wave Grille with Sharp LED Projector Headlamps', url: 'https://ik.imagekit.io/2908vvlod/cars/ciaz/360/nexa-blue/1.webp' },
      { title: 'Long 4490mm Aerodynamic Sedan Stance with 16-inch Precision Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/ciaz/360/nexa-blue/7.webp' },
      { title: 'Wide Rear Stance with Split Combination Tail Lamps and Chrome Bumper Accents', url: 'https://ik.imagekit.io/2908vvlod/cars/ciaz/360/nexa-blue/13.webp' }
    ],
    specs: {
      engineOptions: '1.5L K15B Smart Hybrid Petrol (104.7 PS / 138 Nm)',
      transmissions: '5-Speed Manual (5MT) & 4-Speed Automatic (4AT)',
      dimensions: '4490 mm (L) × 1730 mm (W) × 1485 mm (H)',
      wheelbase: '2650 mm (Best-in-Class Rear Legroom)',
      fuelTank: '43 Litres',
      brakes: 'Front Ventilated Disc / Rear Drum with ABS & EBD',
      suspension: 'MacPherson Strut (Front) / Torsion Beam (Rear)',
      safety: 'Dual Airbags Standard, ESP with Hill Hold Assist, ABS with EBD, ISOFIX Mounts, Rear Camera, Cruise Control'
    },
    variants: [
      {
        name: 'Sigma 1.5L Smart Hybrid 5MT',
        exShowroom: 940000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15B Smart Hybrid (104.7 PS)',
        mileage: '20.65 km/l',
        isVFM: false,
        keyFeatures: ['Projector Headlamps', 'All 4 Power Windows', 'Smart Hybrid Dual-Battery Tech', 'Rear AC Vents', 'Keyless Entry', 'Dual Airbags & ESP']
      },
      {
        name: 'Delta 1.5L Smart Hybrid 5MT',
        exShowroom: 1000000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15B Smart Hybrid (104.7 PS)',
        mileage: '20.65 km/l',
        isVFM: true,
        vfmBadge: '🔥 BEST VALUE FOR MONEY',
        keyFeatures: ['15-inch Alloy Wheels', 'Front Fog Lamps', 'Cruise Control', 'Audio System with Steering Controls', 'Automatic Climate Control']
      },
      {
        name: 'Delta 1.5L Smart Hybrid 4AT',
        exShowroom: 1110000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L K15B Smart Hybrid (104.7 PS)',
        mileage: '20.04 km/l',
        isVFM: false,
        keyFeatures: ['4-Speed Automatic Transmission', 'Hill Hold Assist', 'Cruise Control', '15-inch Alloys', 'Rear AC Vents']
      },
      {
        name: 'Zeta 1.5L Smart Hybrid 5MT',
        exShowroom: 1040000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15B Smart Hybrid (104.7 PS)',
        mileage: '20.65 km/l',
        isVFM: true,
        vfmBadge: '⭐ CROWD FAVORITE (EXECUTIVE LUXURY)',
        keyFeatures: ['LED Projector Headlamps with DRLs', 'LED Fog Lamps', 'Engine Push Button Start', 'Rear Sunshade', 'Auto-Dimming IRVM', 'Reverse Parking Sensors']
      },
      {
        name: 'Zeta 1.5L Smart Hybrid 4AT',
        exShowroom: 1150000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L K15B Smart Hybrid (104.7 PS)',
        mileage: '20.04 km/l',
        isVFM: false,
        keyFeatures: ['Automatic with LED Projectors', 'Push Start with Smart Key', 'ESP & Hill Hold', 'Rear Sunshade']
      },
      {
        name: 'Alpha 1.5L Smart Hybrid 5MT',
        exShowroom: 1119000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15B Smart Hybrid (104.7 PS)',
        mileage: '20.65 km/l',
        isVFM: true,
        vfmBadge: '🏆 TOP-SPEC CHAUFFEUR PICK',
        keyFeatures: ['Plush Leather Seat Upholstery', '7-inch SmartPlay Studio Touchscreen with Apple CarPlay', '16-inch Precision-Cut Alloys', 'Reverse Parking Camera', 'Birch Blonde Wood Accents']
      },
      {
        name: 'Alpha 1.5L Smart Hybrid 4AT',
        exShowroom: 1229000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L K15B Smart Hybrid (104.7 PS)',
        mileage: '20.04 km/l',
        isVFM: false,
        keyFeatures: ['Top-Spec Executive Automatic', 'Full Leather Seats', '7-inch Touchscreen with Navigation', '16-inch Precision Alloys', 'Reverse Camera']
      },
      {
        name: 'Alpha 1.5L Dual-Tone (MT / 4AT)',
        exShowroom: 1135000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L K15B Smart Hybrid (104.7 PS)',
        mileage: '20.65 km/l',
        isVFM: false,
        keyFeatures: ['Midnight Black Contrast Roof (Red/Grey/Brown)', 'Leather Seats', '16-inch Alloys', '7-inch Touchscreen', 'LED Headlamps']
      }
    ]
  },
  {
    id: 'maruti-invicto',
    name: 'Maruti Suzuki Invicto',
    brand: 'Maruti Suzuki (Nexa)',
    tagline: 'The League of Extraordinary — 2.0L Intelligent Electric Hybrid, Panoramic Sunroof & Powered Ottoman Seats',
    launchDate: 'Flagship Launch (Intelligent Electric Hybrid e-CVT)',
    bodyType: 'MPV',
    fuelTypes: ['Hybrid'],
    priceRange: '₹25.31 - ₹29.02 Lakh',
    minPrice: 2531000,
    maxPrice: 2902000,
    safetyRating: '6 Airbags Standard, Electronic Parking Brake with Auto Hold, 360 HD View Camera, All-Wheel Disc Brakes, TPMS, ESP with Hill Start Assist',
    groundClearance: '185 mm',
    bootSpace: '239 L (All Rows Up) / 690 L (3rd Row Folded)',
    waitingPeriod: '4 - 12 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/invicto/360/nexa-blue/4.webp',
    summary: 'The Maruti Suzuki Invicto is NEXA’s ultra-premium flagship hybrid UV. Powered by a potent 2.0L Intelligent Electric Hybrid powertrain producing 186 PS with e-CVT delivering an impressive 23.24 km/l fuel economy, it offers first-class luxury with powered Ottoman captain seats, a panoramic sliding sunroof with mood ambient lighting, 10.1-inch SmartPlay Magnum touchscreen, powered tailgate, and 6 airbags standard.',
    threeSixty: {
      type: 'image-sequence',
      provider: 'imagekit',
      totalFrames: 24,
      defaultColor: 'nexa-blue',
      basePath: 'https://ik.imagekit.io/2908vvlod/cars/invicto/360',
      fileNamePattern: '{frame}.webp',
      colors: [
        { id: 'nexa-blue', name: 'Nexa Blue (Celestial)', hex: '#163472' },
        { id: 'stellar-bronze', name: 'Stellar Bronze', hex: '#BEB2A6' },
        { id: 'majestic-silver', name: 'Majestic Silver', hex: '#CDD3E0' },
        { id: 'mystic-white', name: 'Mystic White', hex: '#E5E4E2' },
        { id: 'magnificent-black', name: 'Magnificent Black', hex: '#000000' }
      ]
    },
    colors: [
      { name: 'Nexa Blue (Celestial)', hex: '#163472', image: 'https://ik.imagekit.io/2908vvlod/cars/invicto/360/nexa-blue/4.webp' },
      { name: 'Stellar Bronze', hex: '#BEB2A6', image: 'https://ik.imagekit.io/2908vvlod/cars/invicto/360/stellar-bronze/4.webp' },
      { name: 'Majestic Silver', hex: '#CDD3E0', image: 'https://ik.imagekit.io/2908vvlod/cars/invicto/360/majestic-silver/4.webp' },
      { name: 'Mystic White', hex: '#E5E4E2', image: 'https://ik.imagekit.io/2908vvlod/cars/invicto/360/mystic-white/4.webp' },
      { name: 'Magnificent Black', hex: '#000000', image: 'https://ik.imagekit.io/2908vvlod/cars/invicto/360/magnificent-black/4.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Imposing Flagship UV Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/invicto/360/nexa-blue/4.webp' },
      { label: "NEXA Signature Hexagonal Grille & NEXTre' LED Headlamps", url: 'https://ik.imagekit.io/2908vvlod/cars/invicto/360/nexa-blue/1.webp' },
      { label: 'Side Profile with 2850mm Extended Wheelbase & 17-inch Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/invicto/360/nexa-blue/7.webp' },
      { label: 'Rear Sculpted Stance with Connected LED Taillamps', url: 'https://ik.imagekit.io/2908vvlod/cars/invicto/360/nexa-blue/13.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance in Nexa Blue', url: 'https://ik.imagekit.io/2908vvlod/cars/invicto/360/nexa-blue/4.webp' },
      { title: 'Imposing Dual Chrome Front Grille with Distinctive LED DRLs and Headlamps', url: 'https://ik.imagekit.io/2908vvlod/cars/invicto/360/nexa-blue/1.webp' },
      { title: 'Luxury Stretched UV Silhouette with 17-inch Two-Tone Precision Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/invicto/360/nexa-blue/7.webp' },
      { title: 'Wide Tailgate with Horizontal LED Rear Combination Lamps & Chrome Applique', url: 'https://ik.imagekit.io/2908vvlod/cars/invicto/360/nexa-blue/13.webp' }
    ],
    specs: {
      engineOptions: '2.0L Intelligent Electric Strong Hybrid Atkinson Cycle Petrol (186 PS combined output)',
      transmissions: 'e-CVT (Electronically Controlled Continuously Variable Transmission)',
      dimensions: '4755 mm (L) × 1850 mm (W) × 1795 mm (H)',
      wheelbase: '2850 mm',
      fuelTank: '52 Litres',
      brakes: 'All 4 Disc Brakes with ABS, EBD & Brake Assist',
      suspension: 'MacPherson Strut (Front) / Torsion Beam (Rear)',
      safety: '6 Airbags Standard across all variants, Electronic Parking Brake with Auto Hold, 360 HD View Camera, TPMS, ESP with Hill Start Assist, ISOFIX'
    },
    variants: [
      {
        name: 'Zeta+ 2.0L Strong Hybrid 7-Seater e-CVT',
        exShowroom: 2531000,
        fuel: 'Hybrid',
        trans: 'Automatic',
        engine: '2.0L Strong Hybrid (186 PS)',
        mileage: '23.24 km/l',
        isVFM: true,
        vfmBadge: '⚡ BEST VALUE LUXURY HYBRID',
        keyFeatures: ['2.0L Intelligent Electric Hybrid (23.24 km/l)', '6 Airbags Standard', 'Electronic Parking Brake (EPB) with Auto Hold', '8-inch SmartPlay Touchscreen with CarPlay', '2nd-Row Captain Seats', 'Steering Paddle Shifters', 'All 4 Disc Brakes']
      },
      {
        name: 'Zeta+ 2.0L Strong Hybrid 8-Seater e-CVT',
        exShowroom: 2536000,
        fuel: 'Hybrid',
        trans: 'Automatic',
        engine: '2.0L Strong Hybrid (186 PS)',
        mileage: '23.24 km/l',
        isVFM: false,
        keyFeatures: ['8-Seater Practical Family Layout (60:40 Middle Bench)', '2.0L Strong Hybrid e-CVT', '6 Airbags Standard', 'Electronic Parking Brake', 'Dual-Zone AC']
      },
      {
        name: 'Alpha+ 2.0L Strong Hybrid 7-Seater e-CVT',
        exShowroom: 2902000,
        fuel: 'Hybrid',
        trans: 'Automatic',
        engine: '2.0L Strong Hybrid (186 PS)',
        mileage: '23.24 km/l',
        isVFM: true,
        vfmBadge: '👑 FLAGSHIP ULTRA-LUXURY PICK',
        keyFeatures: ['Panoramic Sliding Sunroof with Mood Lighting', 'Powered Ottoman 2nd-Row Captain Seats with Legrest', 'Front Ventilated Seats', '10.1-inch SmartPlay Magnum Touchscreen', '360 HD View Camera', 'Powered Tailgate with Walk-Away Close', '17-inch Two-Tone Alloys']
      }
    ]
  },

  {
    id: 'hyundai-exter',
    name: 'Hyundai Exter',
    brand: 'Hyundai',
    tagline: 'India’s Feature-Packed Entry SUV with 6 Airbags Standard & Smart Electric Sunroof',
    launchDate: 'July 2023 (Hy-CNG Duo 2024)',
    bodyType: 'SUV',
    fuelTypes: ['Petrol', 'CNG'],
    priceRange: '₹6.13 - ₹10.43 Lakh',
    minPrice: 612800,
    maxPrice: 1043000,
    safetyRating: '6 Airbags Standard Across All Variants (Segment 1st)',
    groundClearance: '185 mm',
    bootSpace: '391 L (Petrol) / Practical Trunk with Hy-CNG Duo',
    waitingPeriod: '2 - 4 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/exter/360/ranger-khaki-black-roof/1.webp',
    summary: 'Hyundai Exter sets the benchmark in micro-SUVs with standard 6 airbags, voice-enabled smart electric sunroof, factory-fitted dual-camera dashcam, 8-inch touchscreen infotainment with smartphone connectivity, and revolutionary Hy-CNG Duo dual-cylinder technology providing practical boot space.',
    spin360: {
      totalFrames: 36,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/exter/360',
      format: 'webp',
      defaultColor: 'ranger-khaki-black-roof',
      colors: [
        { id: 'ranger-khaki-black-roof', name: 'Ranger Khaki with Abyss Black Roof', hex: '#60695C' },
        { id: 'atlas-white', name: 'Atlas White', hex: '#F8F9FA' },
        { id: 'ranger-khaki', name: 'Ranger Khaki', hex: '#687163' },
        { id: 'titan-grey', name: 'Ecotronic Gray', hex: '#565A5C' },
        { id: 'titan-grey-matte', name: 'Ecotronic Gray Matte', hex: '#5C6062' },
        { id: 'starry-night', name: 'Starry Night', hex: '#1E2B37' },
        { id: 'titanium-black', name: 'Titanium Black', hex: '#18181A' },
        { id: 'titanium-black-matte', name: 'Titanium Black Matte', hex: '#2B2B2D' },
        { id: 'golden-bronze', name: 'Golden Bronze', hex: '#96806C' }
      ]
    },
    colors: [
      { id: 'ranger-khaki-black-roof', name: 'Ranger Khaki with Abyss Black Roof', hex: '#60695C', image: 'https://ik.imagekit.io/2908vvlod/cars/exter/colors/ranger-khaki-black-roof.webp' },
      { id: 'atlas-white', name: 'Atlas White', hex: '#F8F9FA', image: 'https://ik.imagekit.io/2908vvlod/cars/exter/colors/atlas-white.webp' },
      { id: 'ranger-khaki', name: 'Ranger Khaki', hex: '#687163', image: 'https://ik.imagekit.io/2908vvlod/cars/exter/colors/ranger-khaki.webp' },
      { id: 'titan-grey', name: 'Ecotronic Gray', hex: '#565A5C', image: 'https://ik.imagekit.io/2908vvlod/cars/exter/colors/titan-grey.webp' },
      { id: 'titan-grey-matte', name: 'Ecotronic Gray Matte', hex: '#5C6062', image: 'https://ik.imagekit.io/2908vvlod/cars/exter/colors/titan-grey-matte.webp' },
      { id: 'starry-night', name: 'Starry Night', hex: '#1E2B37', image: 'https://ik.imagekit.io/2908vvlod/cars/exter/colors/starry-night.webp' },
      { id: 'titanium-black', name: 'Titanium Black', hex: '#18181A', image: 'https://ik.imagekit.io/2908vvlod/cars/exter/colors/titanium-black.webp' },
      { id: 'titanium-black-matte', name: 'Titanium Black Matte', hex: '#2B2B2D', image: 'https://ik.imagekit.io/2908vvlod/cars/exter/colors/titanium-black-matte.webp' },
      { id: 'golden-bronze', name: 'Golden Bronze', hex: '#96806C', image: 'https://ik.imagekit.io/2908vvlod/cars/exter/colors/golden-bronze.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Studio View', url: 'https://ik.imagekit.io/2908vvlod/cars/exter/360/ranger-khaki-black-roof/1.webp' },
      { label: 'Signature Parametric Grille & H-LED DRLs', url: 'https://ik.imagekit.io/2908vvlod/cars/exter/360/ranger-khaki-black-roof/5.webp' },
      { label: 'Rugged Side Profile with Roof Rails & Diamond Cut Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/exter/360/ranger-khaki-black-roof/14.webp' },
      { label: 'Rear Sculpted Stance & H-Signature Taillamps', url: 'https://ik.imagekit.io/2908vvlod/cars/exter/360/ranger-khaki-black-roof/23.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance in Ranger Khaki', url: 'https://ik.imagekit.io/2908vvlod/cars/exter/360/ranger-khaki-black-roof/1.webp' },
      { title: 'Bold Front Fascia with H-LED Daytime Running Lamps', url: 'https://ik.imagekit.io/2908vvlod/cars/exter/360/ranger-khaki-black-roof/5.webp' },
      { title: 'Side Profile with Bridge-type Roof Rails & Distinctive C-Pillar Garnish', url: 'https://ik.imagekit.io/2908vvlod/cars/exter/360/ranger-khaki-black-roof/14.webp' },
      { title: 'Rear Design with Prominent Skid Plate & Connected Tailgate Applique', url: 'https://ik.imagekit.io/2908vvlod/cars/exter/360/ranger-khaki-black-roof/23.webp' }
    ],
    specs: {
      engineOptions: '1.2L Kappa 4-Cylinder Petrol (83 PS / 114 Nm) | 1.2L Bi-Fuel Hy-CNG Duo (69 PS / 95.2 Nm)',
      transmissions: '5-Speed Manual (5MT) & Smart Auto AMT with Paddle Shifters',
      dimensions: '3815 mm (L) × 1710 mm (W) × 1631 mm (H)',
      wheelbase: '2450 mm',
      fuelTank: '37 Litres (Petrol) / 60 Litres Water Equivalent (Dual Cylinder CNG)',
      brakes: 'Front Disc / Rear Drum with ABS, EBD & Brake Assist',
      suspension: 'MacPherson Strut (Front) / Coupled Torsion Beam Axle (Rear)',
      safety: '6 Airbags Standard across all variants, ESC, VSM, Hill Start Assist Control (HAC), Highline TPMS, ISOFIX'
    },
    variants: [
      {
        name: 'EX 1.2L Petrol 5MT',
        exShowroom: 612800,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '19.4 km/l',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard', 'ABS with EBD', 'Central Locking', 'Digital Cluster with 4.2\" Color TFT MID', 'Front Power Windows', 'Driver Seat Height Adjust']
      },
      {
        name: 'EX (O) 1.2L Petrol 5MT',
        exShowroom: 648200,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '19.4 km/l',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard', 'Electronic Stability Control (ESC)', 'Vehicle Stability Management (VSM)', 'Hill Start Assist Control (HAC)', 'Rear Parking Sensors']
      },
      {
        name: 'S 1.2L Petrol 5MT',
        exShowroom: 750000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '19.4 km/l',
        isVFM: false,
        keyFeatures: ['8-inch Touchscreen Infotainment', 'Apple CarPlay & Android Auto', 'Rear AC Vents', 'Electrically Adjustable ORVMs', 'Steering Mounted Audio Controls', 'H-LED DRLs']
      },
      {
        name: 'S (O)+ 1.2L Petrol 5MT (Sunroof)',
        exShowroom: 786000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '19.4 km/l',
        isVFM: true,
        vfmBadge: '🔥 MOST VALUE FOR MONEY (SUNROOF PICK)',
        keyFeatures: ['Voice-enabled Smart Electric Sunroof', '8-inch Touchscreen with Navigation', 'Rear AC Vents', 'Highline TPMS', 'LED DRLs', '6 Airbags Standard']
      },
      {
        name: 'S 1.2L Smart Auto AMT',
        exShowroom: 815000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '19.2 km/l',
        isVFM: false,
        keyFeatures: ['Smart Auto AMT with Steering Paddle Shifters', '8-inch Touchscreen Infotainment', 'Rear AC Vents', 'Hill Start Assist Control', 'ESC & VSM']
      },
      {
        name: 'S (O)+ Hy-CNG Duo 5MT',
        exShowroom: 850000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L Bi-Fuel CNG (69 PS)',
        mileage: '27.1 km/kg',
        isVFM: true,
        vfmBadge: '⚡ TOP ECONOMY PICK (DUAL CYLINDER CNG)',
        keyFeatures: ['Hy-CNG Duo Dual Cylinder Technology', 'Practical Usable Boot Space', 'Voice-enabled Electric Sunroof', '8-inch Touchscreen Infotainment', '6 Airbags Standard']
      },
      {
        name: 'SX 1.2L Petrol 5MT',
        exShowroom: 823000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '19.4 km/l',
        isVFM: true,
        vfmBadge: '⭐ CROWD FAVORITE BALANCED PICK',
        keyFeatures: ['Voice-enabled Electric Sunroof', 'Projector Headlamps', 'Shark Fin Antenna', 'Rear View Camera with Guidelines', '15-inch Dual Tone Styled Wheels', 'Cruise Control']
      },
      {
        name: 'SX 1.2L Smart Auto AMT',
        exShowroom: 890000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '19.2 km/l',
        isVFM: false,
        keyFeatures: ['Electric Sunroof', 'Steering Mounted Paddle Shifters', 'Automatic Temperature Control (FATC)', 'Cruise Control', 'Rear View Camera']
      },
      {
        name: 'SX Knight 1.2L Petrol 5MT',
        exShowroom: 838000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '19.4 km/l',
        isVFM: false,
        keyFeatures: ['Blackout Knight Edition Styling', 'Red Brake Calipers', 'All-Black Interior with Red Accents & Stitching', 'Electric Sunroof', 'Diamond Cut Black Alloys']
      },
      {
        name: 'SX Knight 1.2L Smart Auto AMT',
        exShowroom: 905000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '19.2 km/l',
        isVFM: false,
        keyFeatures: ['Knight Edition Black Package', 'Smart Auto AMT with Paddle Shifters', 'Voice Sunroof', 'FATC Auto AC', 'Red Interior Accents']
      },
      {
        name: 'SX Hy-CNG Duo 5MT',
        exShowroom: 916000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L Bi-Fuel CNG (69 PS)',
        mileage: '27.1 km/kg',
        isVFM: true,
        vfmBadge: '🌱 PREMIUM ECO PICK (SUNROOF + DUAL CNG)',
        keyFeatures: ['Hy-CNG Duo Dual Cylinder Tech', 'Voice-enabled Electric Sunroof', 'Rear Camera with Guidelines', 'Projector Headlamps', 'Automatic Climate Control', '6 Airbags']
      },
      {
        name: 'SX (O) 1.2L Petrol 5MT',
        exShowroom: 887000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '19.4 km/l',
        isVFM: false,
        keyFeatures: ['15-inch Diamond Cut Alloy Wheels', 'Smart Key with Push Button Start/Stop', 'Wireless Smartphone Charger', 'Leather Wrapped Steering & Gear Knob', 'Auto Headlamps', 'Rear Wiper & Washer']
      },
      {
        name: 'SX (O) 1.2L Smart Auto AMT',
        exShowroom: 954000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '19.2 km/l',
        isVFM: false,
        keyFeatures: ['15-inch Diamond Cut Alloys', 'Smart Auto AMT with Paddle Shifters', 'Wireless Phone Charger', 'Push Button Start', 'Voice Sunroof', 'Automatic Climate Control']
      },
      {
        name: 'SX (O) Connect 1.2L Petrol 5MT',
        exShowroom: 956000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '19.4 km/l',
        isVFM: true,
        vfmBadge: '👑 TECH FLAGSHIP PICK (DUAL DASHCAM + CONNECTED)',
        keyFeatures: ['Factory Dual Dashcam (Front & Cabin/Rear Recording)', 'Hyundai Bluelink Connected Car Tech (60+ Features)', 'Ambient Sounds of Nature', '8-inch HD Touchscreen with Navigation', 'OTA Updates', 'Voice Electric Sunroof']
      },
      {
        name: 'SX (O) Connect 1.2L Smart Auto AMT',
        exShowroom: 1028000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '19.2 km/l',
        isVFM: false,
        keyFeatures: ['Dual Dashcam Recording System', 'Bluelink Connected Car Tech', 'Paddle Shifters', 'Wireless Charger', 'Diamond Cut Alloys', 'Smart Electric Sunroof']
      },
      {
        name: 'SX (O) Connect Knight 1.2L AMT',
        exShowroom: 1043000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '19.2 km/l',
        isVFM: false,
        keyFeatures: ['Top-of-the-Line Knight Edition Styling', 'Factory Dual Dashcam', 'Bluelink Connected Car Tech', 'Blacked-out Alloys with Red Calipers', 'Paddle Shifters', 'Full 6 Airbag Safety Suite']
      }
    ]
  },

  {
    id: 'hyundai-grand-i10-nios',
    name: 'Hyundai Grand i10 Nios',
    brand: 'Hyundai',
    tagline: 'India’s Style-Forward Premium Hatchback with 6 Airbags Standard & 360° Studio',
    launchDate: '2024 Edition (6 Airbags Standard & Hy-CNG Duo)',
    bodyType: 'Hatchback',
    fuelTypes: ['Petrol', 'CNG'],
    priceRange: '₹5.98 - ₹8.63 Lakh',
    minPrice: 598000,
    maxPrice: 863000,
    safetyRating: '6 Airbags Standard Across All Variants (Segment Benchmark)',
    groundClearance: '165 mm',
    bootSpace: '260 L (Petrol) / Bi-Fuel Hy-CNG',
    waitingPeriod: '2 - 4 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/360/aqua-teal-black-roof/1.webp',
    summary: 'The new Hyundai Grand i10 Nios redefines urban driving dynamics with standard 6 airbags, painted black radiator grille with Boomerang LED DRLs, 8-inch touchscreen infotainment with Apple CarPlay & Android Auto, wireless phone charging, cruise control, and refined 1.2L Kappa petrol & factory Bi-Fuel Hy-CNG powertrains.',
    spin360: {
      totalFrames: 36,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/360',
      format: 'webp',
      defaultColor: 'aqua-teal-black-roof',
      colors: [
        { id: 'aqua-teal-black-roof', name: 'Aqua Teal with Abyss Black Roof', hex: '#184F5E' },
        { id: 'atlas-white-black-roof', name: 'Atlas White with Abyss Black Roof', hex: '#ECEFF1' },
        { id: 'aqua-teal', name: 'Aqua Teal', hex: '#205869' },
        { id: 'atlas-white', name: 'Atlas White', hex: '#F8F9FA' },
        { id: 'fiery-red', name: 'Fiery Red', hex: '#B71C1C' },
        { id: 'titan-grey', name: 'Titan Grey', hex: '#585D62' },
        { id: 'titan-grey-matte', name: 'Titan Grey Matte', hex: '#424548' },
        { id: 'typhoon-silver', name: 'Typhoon Silver', hex: '#D6D8DB' }
      ]
    },
    colors: [
      { id: 'aqua-teal-black-roof', name: 'Aqua Teal with Abyss Black Roof', hex: '#184F5E', image: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/colors/aqua-teal-black-roof.webp' },
      { id: 'atlas-white-black-roof', name: 'Atlas White with Abyss Black Roof', hex: '#ECEFF1', image: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/colors/atlas-white-black-roof.webp' },
      { id: 'aqua-teal', name: 'Aqua Teal', hex: '#205869', image: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/colors/aqua-teal.webp' },
      { id: 'atlas-white', name: 'Atlas White', hex: '#F8F9FA', image: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/colors/atlas-white.webp' },
      { id: 'fiery-red', name: 'Fiery Red', hex: '#B71C1C', image: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/colors/fiery-red.webp' },
      { id: 'titan-grey', name: 'Titan Grey', hex: '#585D62', image: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/colors/titan-grey.webp' },
      { id: 'titan-grey-matte', name: 'Titan Grey Matte', hex: '#424548', image: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/colors/titan-grey-matte.webp' },
      { id: 'typhoon-silver', name: 'Typhoon Silver', hex: '#D6D8DB', image: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/colors/typhoon-silver.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Studio View', url: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/360/aqua-teal-black-roof/1.webp' },
      { label: 'Painted Black Radiator Grille & Boomerang LED DRLs', url: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/360/aqua-teal-black-roof/5.webp' },
      { label: 'Side Profile with R15 Two-Tone Diamond Cut Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/360/aqua-teal-black-roof/14.webp' },
      { label: 'Rear Connected LED Taillamps & Shark Fin Antenna', url: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/360/aqua-teal-black-roof/23.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance in Aqua Teal Dual Tone', url: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/360/aqua-teal-black-roof/1.webp' },
      { title: 'Sporty Front Fascia with Glossy Black Grille and Integrated DRLs', url: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/360/aqua-teal-black-roof/5.webp' },
      { title: 'Dynamic Side Silhouette with Shark Fin Antenna and Two-Tone Black Roof', url: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/360/aqua-teal-black-roof/14.webp' },
      { title: 'Rear Design with Connected Tailgate Reflector and Sculpted Bumper', url: 'https://ik.imagekit.io/2908vvlod/cars/grand-i10-nios/360/aqua-teal-black-roof/23.webp' }
    ],
    specs: {
      engineOptions: '1.2L Kappa 4-Cylinder Petrol (83 PS / 113.8 Nm) | 1.2L Bi-Fuel Hy-CNG (69 PS / 95.2 Nm)',
      transmissions: '5-Speed Manual (5MT) & Smart Auto AMT',
      dimensions: '3815 mm (L) × 1680 mm (W) × 1520 mm (H)',
      wheelbase: '2450 mm',
      fuelTank: '37 Litres (Petrol) / 60 Litres Water Equivalent (CNG)',
      brakes: 'Front Disc / Rear Drum with ABS & EBD',
      suspension: 'MacPherson Strut (Front) / Coupled Torsion Beam Axle (Rear)',
      safety: '6 Airbags Standard across all variants, Electronic Stability Control (ESC), Hill-Start Assist Control (HAC), Vehicle Stability Management (VSM), Highline TPMS, ISOFIX'
    },
    variants: [
      {
        name: 'Era 1.2L Petrol 5MT',
        exShowroom: 598000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '20.7 km/l',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard', 'ABS with EBD & ESC', 'Central Locking', 'Front Power Windows', 'Highline TPMS', 'Engine Immobilizer']
      },
      {
        name: 'Magna 1.2L Petrol 5MT',
        exShowroom: 684000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '20.7 km/l',
        isVFM: false,
        keyFeatures: ['2-DIN Audio with Bluetooth & USB', 'Steering Mounted Controls', 'Rear AC Vents', 'Remote Keyless Entry', 'LED DRLs', 'Driver Seat Height Adjust']
      },
      {
        name: 'Corporate 1.2L Petrol 5MT',
        exShowroom: 704000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '20.7 km/l',
        isVFM: true,
        vfmBadge: '🎯 CORPORATE EDITION VALUE PICK',
        keyFeatures: ['6.75-inch Touchscreen with Phone Navigation', 'Dual Tone Gunmetal Styled Wheels', 'Radiator Grille in Glossy Black', 'Driver Seat Height Adjust', 'Rear AC Vents', 'Electrically Adjustable ORVMs']
      },
      {
        name: 'Magna 1.2L Bi-Fuel CNG 5MT',
        exShowroom: 775000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L Bi-Fuel CNG (69 PS)',
        mileage: '27.0 km/kg',
        isVFM: true,
        vfmBadge: '⚡ TOP COMMUTE MILEAGE PICK',
        keyFeatures: ['Factory Bi-Fuel CNG System', '27.0 km/kg Fuel Economy', '6 Airbags Standard', 'Rear AC Vents', 'Remote Keyless Entry', 'Steering Mounted Controls']
      },
      {
        name: 'Corporate 1.2L Smart Auto AMT',
        exShowroom: 769000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '20.1 km/l',
        isVFM: false,
        keyFeatures: ['Convenient Smart Auto AMT', '6.75-inch Touchscreen Infotainment', 'Gunmetal Finished Wheels', 'Rear AC Vents', 'Hill-Start Assist Control (HAC)', 'ESC & VSM']
      },
      {
        name: 'Sportz Executive 1.2L Petrol 5MT',
        exShowroom: 738000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '20.7 km/l',
        isVFM: false,
        keyFeatures: ['8-inch Touchscreen Infotainment', 'Apple CarPlay & Android Auto', 'Rear View Camera with Guidelines', 'Automatic Climate Control (FATC)', '15-inch Dual-Tone Stylised Wheels']
      },
      {
        name: 'Sportz 1.2L Petrol 5MT',
        exShowroom: 748000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '20.7 km/l',
        isVFM: true,
        vfmBadge: '🏆 MOST POPULAR FAMILY PICK',
        keyFeatures: ['8-inch Touchscreen with Smartphone Mirroring', 'Cruise Control', 'Rear Camera with Guidelines', 'Automatic Temperature Control', 'Projector Headlamps', '15-inch Dual Tone Styled Wheels']
      },
      {
        name: 'Sportz 1.2L Smart Auto AMT',
        exShowroom: 803000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '20.1 km/l',
        isVFM: false,
        keyFeatures: ['Smart Auto AMT Transmission', 'Hill-Start Assist Control (HAC)', '8-inch Touchscreen with CarPlay', 'Cruise Control', 'FATC Auto AC', 'Reverse Camera']
      },
      {
        name: 'Sportz 1.2L Bi-Fuel CNG 5MT',
        exShowroom: 833000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L Bi-Fuel CNG (69 PS)',
        mileage: '27.0 km/kg',
        isVFM: true,
        vfmBadge: '🌱 PREMIUM TECH CNG PICK',
        keyFeatures: ['Factory Bi-Fuel CNG (27.0 km/kg)', '8-inch Touchscreen with Apple CarPlay & Android Auto', 'Rear View Camera', 'Auto Climate Control', 'Projector Headlamps', '6 Airbags Standard']
      },
      {
        name: 'Asta 1.2L Petrol 5MT',
        exShowroom: 809000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '20.7 km/l',
        isVFM: true,
        vfmBadge: '👑 FLAGSHIP LUXURY PICK',
        keyFeatures: ['15-inch Diamond Cut Alloy Wheels', 'Smart Key with Push Button Start/Stop', 'Wireless Smartphone Charger', 'Cooled Glove Box', 'Leather Wrapped Steering Wheel', 'Rear Wiper & Washer', 'Projector Headlamps']
      },
      {
        name: 'Asta 1.2L Smart Auto AMT',
        exShowroom: 863000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '20.1 km/l',
        isVFM: false,
        keyFeatures: ['Top-spec Smart Auto AMT', '15-inch Diamond Cut Alloys', 'Push Button Start with Smart Key', 'Wireless Phone Charger', 'Rear Wiper & Washer', 'Full 6 Airbag Safety Suite']
      }
    ]
  },

  {
    id: 'hyundai-i20',
    name: 'Hyundai i20',
    brand: 'Hyundai',
    tagline: 'The Benchmark Premium Hatchback with 6 Airbags Standard & Smart Electric Sunroof',
    launchDate: '2024 Facelift (6 Airbags Standard)',
    bodyType: 'Hatchback',
    fuelTypes: ['Petrol'],
    priceRange: '₹6.00 - ₹10.63 Lakh',
    minPrice: 599700,
    maxPrice: 1063000,
    safetyRating: '6 Airbags Standard Across All Variants (ESC & HAC Standard)',
    groundClearance: '170 mm',
    bootSpace: '311 L',
    waitingPeriod: '2 - 4 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/i20/360/starry-night/1.webp',
    summary: 'The new Hyundai i20 sets the benchmark in premium hatchbacks with its bold parametric jewel grille, 6 airbags standard, smart electric sunroof, 10.25-inch touchscreen with navigation & Bose premium 7-speaker audio system, wireless smartphone charger, and refined 1.2L Kappa petrol engine paired with 5MT or smooth Intelligent Variable Transmission (IVT).',
    spin360: {
      totalFrames: 36,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/i20/360',
      format: 'webp',
      defaultColor: 'starry-night',
      colors: [
        { id: 'starry-night', name: 'Starry Night', hex: '#1B2430' },
        { id: 'fiery-red-black-roof', name: 'Fiery Red with Abyss Black Roof', hex: '#B71C1C' },
        { id: 'atlas-white-black-roof', name: 'Atlas White with Abyss Black Roof', hex: '#ECEFF1' },
        { id: 'atlas-white', name: 'Atlas White', hex: '#F8F9FA' },
        { id: 'fiery-red', name: 'Fiery Red', hex: '#B71C1C' },
        { id: 'titan-grey', name: 'Titan Grey', hex: '#585D62' },
        { id: 'titan-grey-matte', name: 'Titan Grey Matte', hex: '#424548' },
        { id: 'typhoon-silver', name: 'Typhoon Silver', hex: '#D6D8DB' },
        { id: 'knight-black', name: 'Titanium Black (Knight Edition)', hex: '#151515' }
      ]
    },
    colors: [
      { id: 'starry-night', name: 'Starry Night', hex: '#1B2430', image: 'https://ik.imagekit.io/2908vvlod/cars/i20/colors/starry-night.webp' },
      { id: 'fiery-red-black-roof', name: 'Fiery Red with Abyss Black Roof', hex: '#B71C1C', image: 'https://ik.imagekit.io/2908vvlod/cars/i20/colors/fiery-red-black-roof.webp' },
      { id: 'atlas-white-black-roof', name: 'Atlas White with Abyss Black Roof', hex: '#ECEFF1', image: 'https://ik.imagekit.io/2908vvlod/cars/i20/colors/atlas-white-black-roof.webp' },
      { id: 'atlas-white', name: 'Atlas White', hex: '#F8F9FA', image: 'https://ik.imagekit.io/2908vvlod/cars/i20/colors/atlas-white.webp' },
      { id: 'fiery-red', name: 'Fiery Red', hex: '#B71C1C', image: 'https://ik.imagekit.io/2908vvlod/cars/i20/colors/fiery-red.webp' },
      { id: 'titan-grey', name: 'Titan Grey', hex: '#585D62', image: 'https://ik.imagekit.io/2908vvlod/cars/i20/colors/titan-grey.webp' },
      { id: 'titan-grey-matte', name: 'Titan Grey Matte', hex: '#424548', image: 'https://ik.imagekit.io/2908vvlod/cars/i20/colors/titan-grey-matte.webp' },
      { id: 'typhoon-silver', name: 'Typhoon Silver', hex: '#D6D8DB', image: 'https://ik.imagekit.io/2908vvlod/cars/i20/colors/typhoon-silver.webp' },
      { id: 'knight-black', name: 'Titanium Black (Knight Edition)', hex: '#151515', image: 'https://ik.imagekit.io/2908vvlod/cars/i20/colors/knight-black.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Dynamic Studio Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/i20/360/starry-night/1.webp' },
      { label: 'Parametric Jewel Front Grille & LED DRLs', url: 'https://ik.imagekit.io/2908vvlod/cars/i20/360/starry-night/5.webp' },
      { label: 'Side Silhouette with R16 Diamond Cut Alloys & Chrome Beltline', url: 'https://ik.imagekit.io/2908vvlod/cars/i20/360/starry-night/14.webp' },
      { label: 'Sculpted Rear with Z-Shaped LED Taillamps & Sporty Diffuser', url: 'https://ik.imagekit.io/2908vvlod/cars/i20/360/starry-night/23.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance in Starry Night', url: 'https://ik.imagekit.io/2908vvlod/cars/i20/360/starry-night/1.webp' },
      { title: 'Bold Front Fascia with Parametric Black Grille and Swept-back Headlamps', url: 'https://ik.imagekit.io/2908vvlod/cars/i20/360/starry-night/5.webp' },
      { title: 'Coupe-Like Roofline with Shark Fin Antenna and Precision 16-inch Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/i20/360/starry-night/14.webp' },
      { title: 'Dynamic Rear Tailgate Design with Distinctive Connected Reflector Bar', url: 'https://ik.imagekit.io/2908vvlod/cars/i20/360/starry-night/23.webp' }
    ],
    specs: {
      engineOptions: '1.2L Kappa 4-Cylinder Petrol (83 PS / 114.7 Nm 5MT | 88 PS IVT)',
      transmissions: '5-Speed Manual (5MT) & Intelligent Variable Transmission (IVT Automatic)',
      dimensions: '3995 mm (L) × 1775 mm (W) × 1505 mm (H)',
      wheelbase: '2580 mm',
      fuelTank: '37 Litres',
      brakes: 'Front Disc / Rear Drum with ABS & EBD',
      suspension: 'MacPherson Strut (Front) / Coupled Torsion Beam Axle (Rear)',
      safety: '6 Airbags Standard across all variants, Electronic Stability Control (ESC), Hill-Start Assist Control (HAC), Vehicle Stability Management (VSM), Highline TPMS, ISOFIX'
    },
    variants: [
      {
        name: 'Era 1.2L Petrol 5MT',
        exShowroom: 599700,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa (83 PS)',
        mileage: '20.0 km/l',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard', 'ABS with EBD & ESC', 'Hill-Start Assist Control', 'Central Locking', 'Front Power Windows', 'Highline TPMS']
      },
      {
        name: 'Magna 1.2L Petrol 5MT',
        exShowroom: 700000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa (83 PS)',
        mileage: '20.0 km/l',
        isVFM: false,
        keyFeatures: ['8-inch Touchscreen Infotainment', 'Apple CarPlay & Android Auto', 'Rear AC Vents', 'Steering Mounted Controls', 'LED DRLs', 'Remote Keyless Entry']
      },
      {
        name: 'Sportz 1.2L Petrol 5MT',
        exShowroom: 780000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa (83 PS)',
        mileage: '20.0 km/l',
        isVFM: true,
        vfmBadge: '🎯 BEST VALUE BALANCED PICK',
        keyFeatures: ['8-inch Touchscreen with Smartphone Mirroring', 'Cruise Control', 'Rear Camera with Guidelines', 'Automatic Climate Control (FATC)', '16-inch Dual-Tone Stylised Wheels', 'Shark Fin Antenna']
      },
      {
        name: 'Sportz (O) 1.2L Petrol 5MT (Sunroof)',
        exShowroom: 834000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa (83 PS)',
        mileage: '20.0 km/l',
        isVFM: true,
        vfmBadge: '🔥 MOST POPULAR SUNROOF PICK',
        keyFeatures: ['Smart Electric Sunroof', 'Wireless Phone Charger', 'Rear Camera with Display on Screen', 'Cruise Control', 'Automatic Climate Control', 'Driver Armrest']
      },
      {
        name: 'Sportz (O) Knight 1.2L 5MT',
        exShowroom: 843000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa (83 PS)',
        mileage: '20.0 km/l',
        isVFM: false,
        keyFeatures: ['All-Black Knight Exterior Styling', 'Black Alloy Wheels with Red Brake Calipers', 'All-Black Interiors with Brass Accents', 'Smart Electric Sunroof', 'Exclusive Knight Badging']
      },
      {
        name: 'Asta 1.2L Petrol 5MT',
        exShowroom: 866000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa (83 PS)',
        mileage: '20.0 km/l',
        isVFM: false,
        keyFeatures: ['Smart Electric Sunroof', 'LED Headlamps & Z-shaped LED Tail Lamps', '16-inch Diamond Cut Alloy Wheels', 'Smart Key with Push Button Start', 'Puddle Lamps', 'Ambient Lighting']
      },
      {
        name: 'Sportz 1.2L Petrol IVT (Auto)',
        exShowroom: 881000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Kappa (88 PS)',
        mileage: '19.6 km/l',
        isVFM: false,
        keyFeatures: ['Intelligent Variable Transmission (IVT Auto)', 'Hill-Start Assist Control', '8-inch Touchscreen Infotainment', 'Cruise Control', 'Rear View Camera', 'FATC Auto AC']
      },
      {
        name: 'Asta (O) 1.2L Petrol 5MT',
        exShowroom: 920000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa (83 PS)',
        mileage: '20.0 km/l',
        isVFM: true,
        vfmBadge: '👑 TECH FLAGSHIP PICK (BOSE AUDIO)',
        keyFeatures: ['10.25-inch HD Touchscreen with Navigation', 'Bose Premium 7-Speaker Sound System', 'Hyundai Bluelink Connected Car Tech (60+ Features)', 'Smart Electric Sunroof', 'Home-to-Car (H2C) Alexa Integration', 'Voice Recognition']
      },
      {
        name: 'Sportz (O) 1.2L Petrol IVT',
        exShowroom: 926000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Kappa (88 PS)',
        mileage: '19.6 km/l',
        isVFM: false,
        keyFeatures: ['Smart Electric Sunroof', 'Smooth IVT Automatic', 'Wireless Phone Charger', 'Rear View Camera', 'Cruise Control', 'Full Safety Suite']
      },
      {
        name: 'Asta (O) 1.2L Petrol IVT (Auto Top-End)',
        exShowroom: 1039000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Kappa (88 PS)',
        mileage: '19.6 km/l',
        isVFM: false,
        keyFeatures: ['Top-of-the-Line IVT Automatic', '10.25-inch Touchscreen with Navigation', 'Bose 7-Speaker Audio', 'Bluelink Connected Car Suite', 'Electric Sunroof', '16-inch Diamond Cut Alloys']
      },
      {
        name: 'Asta (O) Knight 1.2L IVT',
        exShowroom: 1048000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Kappa (88 PS)',
        mileage: '19.6 km/l',
        isVFM: false,
        keyFeatures: ['Knight Edition Black Theme', 'Bose Premium Audio', '10.25-inch Navigation Screen', 'Electric Sunroof', 'Black Alloys with Red Front Calipers', 'Smooth IVT Automatic']
      }
    ]
  },

  {
    id: 'hyundai-aura',
    name: 'Hyundai Aura',
    brand: 'Hyundai',
    tagline: 'India’s Most Stylish Compact Sedan with 6 Airbags Standard & 402L Boot',
    launchDate: 'Updated 2024 (6 Airbags Standard & Corporate Edition)',
    bodyType: 'Sedan',
    fuelTypes: ['Petrol', 'CNG'],
    priceRange: '₹6.00 - ₹9.05 Lakh',
    minPrice: 600000,
    maxPrice: 905000,
    safetyRating: '6 Airbags Standard Across All Variants (ESC & HAC Standard)',
    groundClearance: '165 mm',
    bootSpace: '402 L (Petrol) / Factory Bi-Fuel CNG',
    waitingPeriod: '2 - 4 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/aura/360/starry-night/1.webp',
    summary: 'The new Hyundai Aura combines contemporary sedan elegance with standard 6 airbags, painted black radiator grille with inverted L-shaped LED DRLs, 8-inch touchscreen with Apple CarPlay/Android Auto, wireless phone charging, cruise control, segment-leading 402L boot space, and frugal 1.2L Kappa petrol & factory Bi-Fuel CNG powertrains.',
    spin360: {
      totalFrames: 36,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/aura/360',
      format: 'webp',
      defaultColor: 'starry-night',
      colors: [
        { id: 'starry-night', name: 'Starry Night', hex: '#1B2430' },
        { id: 'atlas-white', name: 'Atlas White', hex: '#F8F9FA' },
        { id: 'titan-grey', name: 'Titan Grey', hex: '#585D62' },
        { id: 'typhoon-silver', name: 'Typhoon Silver', hex: '#D6D8DB' },
        { id: 'fiery-red', name: 'Fiery Red', hex: '#B71C1C' },
        { id: 'aqua-teal', name: 'Aqua Teal', hex: '#205869' },
        { id: 'vintage-brown', name: 'Vintage Brown', hex: '#5A4036' }
      ]
    },
    colors: [
      { id: 'starry-night', name: 'Starry Night', hex: '#1B2430', image: 'https://ik.imagekit.io/2908vvlod/cars/aura/colors/starry-night.webp' },
      { id: 'atlas-white', name: 'Atlas White', hex: '#F8F9FA', image: 'https://ik.imagekit.io/2908vvlod/cars/aura/colors/atlas-white.webp' },
      { id: 'titan-grey', name: 'Titan Grey', hex: '#585D62', image: 'https://ik.imagekit.io/2908vvlod/cars/aura/colors/titan-grey.webp' },
      { id: 'typhoon-silver', name: 'Typhoon Silver', hex: '#D6D8DB', image: 'https://ik.imagekit.io/2908vvlod/cars/aura/colors/typhoon-silver.webp' },
      { id: 'fiery-red', name: 'Fiery Red', hex: '#B71C1C', image: 'https://ik.imagekit.io/2908vvlod/cars/aura/colors/fiery-red.webp' },
      { id: 'aqua-teal', name: 'Aqua Teal', hex: '#205869', image: 'https://ik.imagekit.io/2908vvlod/cars/aura/colors/aqua-teal.webp' },
      { id: 'vintage-brown', name: 'Vintage Brown', hex: '#5A4036', image: 'https://ik.imagekit.io/2908vvlod/cars/aura/colors/vintage-brown.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Dynamic Studio View', url: 'https://ik.imagekit.io/2908vvlod/cars/aura/360/starry-night/1.webp' },
      { label: 'Painted Black Radiator Grille & Inverted L-LED DRLs', url: 'https://ik.imagekit.io/2908vvlod/cars/aura/360/starry-night/5.webp' },
      { label: 'Side Sedan Silhouette with R15 Diamond Cut Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/aura/360/starry-night/14.webp' },
      { label: 'Sculpted Rear with Z-Shaped LED Taillamps & Lip Spoiler', url: 'https://ik.imagekit.io/2908vvlod/cars/aura/360/starry-night/23.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance in Starry Night', url: 'https://ik.imagekit.io/2908vvlod/cars/aura/360/starry-night/1.webp' },
      { title: 'Sophisticated Front Fascia with Glossy Black Grille and Integrated DRLs', url: 'https://ik.imagekit.io/2908vvlod/cars/aura/360/starry-night/5.webp' },
      { title: 'Aerodynamic Sedan Profile with Chrome Door Handles and Shark Fin Antenna', url: 'https://ik.imagekit.io/2908vvlod/cars/aura/360/starry-night/14.webp' },
      { title: 'Rear Design with Connected Chrome Garnish and Integrated Trunk Lip Spoiler', url: 'https://ik.imagekit.io/2908vvlod/cars/aura/360/starry-night/23.webp' }
    ],
    specs: {
      engineOptions: '1.2L Kappa 4-Cylinder Petrol (83 PS / 114 Nm) | 1.2L Bi-Fuel CNG (69 PS / 95.2 Nm)',
      transmissions: '5-Speed Manual (5MT) & Smart Auto AMT',
      dimensions: '3995 mm (L) × 1680 mm (W) × 1520 mm (H)',
      wheelbase: '2450 mm',
      fuelTank: '37 Litres (Petrol) / 60 Litres Water Equivalent (CNG)',
      brakes: 'Front Disc / Rear Drum with ABS & EBD',
      suspension: 'MacPherson Strut (Front) / Coupled Torsion Beam Axle (Rear)',
      safety: '6 Airbags Standard across all variants, Electronic Stability Control (ESC), Hill-Start Assist Control (HAC), Vehicle Stability Management (VSM), Highline TPMS, ISOFIX'
    },
    variants: [
      {
        name: 'E 1.2L Petrol 5MT',
        exShowroom: 600000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '20.5 km/l',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard', 'ABS with EBD & ESC', 'Front Power Windows', 'Central Locking', 'Highline TPMS', 'Engine Immobilizer']
      },
      {
        name: 'E 1.2L Bi-Fuel CNG 5MT',
        exShowroom: 690000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L Bi-Fuel CNG (69 PS)',
        mileage: '28.0 km/kg',
        isVFM: true,
        vfmBadge: '⚡ BUDGET CNG PICK',
        keyFeatures: ['Factory Bi-Fuel CNG with Dual ECU', '28.0 km/kg Fuel Economy', '6 Airbags Standard', 'Highline TPMS', 'Front Power Windows', 'Micro-Switch for Safe Fueling']
      },
      {
        name: 'S Corporate 1.2L Petrol 5MT',
        exShowroom: 684000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '20.5 km/l',
        isVFM: true,
        vfmBadge: '🎯 CORPORATE EDITION VALUE PICK',
        keyFeatures: ['6.75-inch Touchscreen Infotainment', 'Phone Navigation & Bluetooth', 'Dual Tone Gunmetal Styled Wheels', 'Radiator Grille in Glossy Black', 'Driver Seat Height Adjust', 'Rear AC Vents']
      },
      {
        name: 'S 1.2L Petrol 5MT',
        exShowroom: 691000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '20.5 km/l',
        isVFM: false,
        keyFeatures: ['2-DIN Audio with Bluetooth & USB', 'Steering Mounted Audio Controls', 'Rear AC Vents', 'Remote Keyless Entry', 'LED Daytime Running Lamps', 'Electrically Adjustable ORVMs']
      },
      {
        name: 'SX 1.2L Petrol 5MT',
        exShowroom: 770000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '20.5 km/l',
        isVFM: true,
        vfmBadge: '🏆 MOST POPULAR FAMILY PICK',
        keyFeatures: ['8-inch Touchscreen with Apple CarPlay & Android Auto', 'Cruise Control', 'Rear View Camera with Guidelines', 'Automatic Climate Control (FATC)', '15-inch Dual Tone Styled Wheels', 'Shark Fin Antenna']
      },
      {
        name: 'S 1.2L Bi-Fuel CNG 5MT',
        exShowroom: 782000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L Bi-Fuel CNG (69 PS)',
        mileage: '28.0 km/kg',
        isVFM: true,
        vfmBadge: '🌱 BEST MILEAGE COMMUTE PICK',
        keyFeatures: ['Factory Bi-Fuel CNG (28.0 km/kg)', 'Rear AC Vents', 'Steering Mounted Controls', 'Remote Keyless Entry', '6 Airbags Standard', 'Rear Center Armrest with Cup Holders']
      },
      {
        name: 'S Corporate 1.2L Bi-Fuel CNG 5MT',
        exShowroom: 791000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L Bi-Fuel CNG (69 PS)',
        mileage: '28.0 km/kg',
        isVFM: false,
        keyFeatures: ['Corporate Edition Black Accents', '6.75-inch Touchscreen Screen', '28.0 km/kg CNG Economy', 'Rear AC Vents', 'Highline TPMS', 'Gunmetal Styled Wheels']
      },
      {
        name: 'SX (O) 1.2L Petrol 5MT',
        exShowroom: 816000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '20.5 km/l',
        isVFM: true,
        vfmBadge: '👑 FLAGSHIP LUXURY SEDAN PICK',
        keyFeatures: ['15-inch Diamond Cut Alloy Wheels', 'Smart Key with Push Button Start/Stop', 'Wireless Smartphone Charger', 'Cooled Glove Box', 'Leather Wrapped Steering Wheel', 'Projector Headlamps', 'Footwell Lighting']
      },
      {
        name: 'SX Plus 1.2L Smart Auto AMT',
        exShowroom: 835000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Kappa 4-Cyl (83 PS)',
        mileage: '20.1 km/l',
        isVFM: false,
        keyFeatures: ['Convenient Smart Auto AMT', '8-inch Touchscreen with Apple CarPlay', 'Wireless Phone Charger', 'Rear View Camera', 'Push Button Start with Smart Key', 'FATC Automatic Climate Control']
      },
      {
        name: 'SX 1.2L Bi-Fuel CNG 5MT',
        exShowroom: 860000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L Bi-Fuel CNG (69 PS)',
        mileage: '28.0 km/kg',
        isVFM: true,
        vfmBadge: '⭐ TOP-SPEC TECH CNG PICK',
        keyFeatures: ['Top-spec CNG Sedan', '8-inch Touchscreen with Smartphone Mirroring', 'Rear Camera with Display on Screen', 'Automatic Climate Control', '15-inch Dual Tone Wheels', 'Full 6 Airbag Safety Suite']
      }
    ]
  },

  {
    id: 'hyundai-venue',
    name: 'Hyundai Venue',
    brand: 'Hyundai',
    tagline: 'Tech Up. Go Beyond. Compact SUV with Level 1 ADAS & Connected Car Tech',
    launchDate: 'Updated 2025/2026',
    bodyType: 'SUV',
    fuelTypes: ['Petrol', 'Diesel'],
    priceRange: '₹7.94 - ₹13.48 Lakh',
    minPrice: 794100,
    maxPrice: 1348000,
    safetyRating: '6 Airbags Standard Across All Variants | Hyundai SmartSense Level 1 ADAS',
    groundClearance: '195 mm',
    bootSpace: '350 L',
    waitingPeriod: '3 - 8 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/venue/360/atlas-white/1.webp',
    summary: 'The Hyundai Venue establishes itself as India’s definitive tech-driven compact SUV, featuring Level 1 ADAS (Hyundai SmartSense), standard 6 airbags, connected LED lightbars, 8-inch touchscreen infotainment with Blue Link (60+ features), voice-controlled electric sunroof, 4-way power driver seat, and 2-step reclining rear seats. Available with three powertrain choices: 1.2L Kappa Petrol, 1.0L Turbo GDi with 7DCT, and 1.5L U2 CRDi Diesel.',
    spin360: {
      totalFrames: 36,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/venue/360',
      format: 'webp',
      defaultColor: 'atlas-white',
      colors: [
        { id: 'atlas-white', name: 'Atlas White', hex: '#F4F5F7' },
        { id: 'titanium-black-knight', name: 'Titanium Black Knight', hex: '#15161A' },
        { id: 'titanium-black', name: 'Titanium Black', hex: '#0D0E10' },
        { id: 'titan-grey', name: 'Titan Grey', hex: '#5E646A' },
        { id: 'dragon-red', name: 'Dragon Red', hex: '#B51A22' },
        { id: 'hazel-blue', name: 'Hazel Blue', hex: '#3D546B' },
        { id: 'mystic-sapphire', name: 'Mystic Sapphire', hex: '#17233B' },
        { id: 'hazel-blue-matte', name: 'Hazel Blue Matte', hex: '#3D4C59' },
        { id: 'mystic-sapphire-matte', name: 'Mystic Sapphire Matte', hex: '#1C2A3A' },
        { id: 'atlas-white-black-roof', name: 'Atlas White with Titanium Black Roof', hex: 'linear-gradient(135deg, #F2F4F7 60%, #15161A 60%)' },
        { id: 'hazel-blue-black-roof', name: 'Hazel Blue with Titanium Black Roof', hex: 'linear-gradient(135deg, #4A5B6E 60%, #15161A 60%)' }
      ]
    },
    colors: [
      { id: 'atlas-white', name: 'Atlas White', hex: '#F4F5F7', image: 'https://ik.imagekit.io/2908vvlod/cars/venue/360/atlas-white/1.webp' },
      { id: 'titanium-black-knight', name: 'Titanium Black Knight', hex: '#15161A', image: 'https://ik.imagekit.io/2908vvlod/cars/venue/360/titanium-black-knight/1.webp' },
      { id: 'titanium-black', name: 'Titanium Black', hex: '#0D0E10', image: 'https://ik.imagekit.io/2908vvlod/cars/venue/360/titanium-black/1.webp' },
      { id: 'titan-grey', name: 'Titan Grey', hex: '#5E646A', image: 'https://ik.imagekit.io/2908vvlod/cars/venue/360/titan-grey/1.webp' },
      { id: 'dragon-red', name: 'Dragon Red', hex: '#B51A22', image: 'https://ik.imagekit.io/2908vvlod/cars/venue/360/dragon-red/1.webp' },
      { id: 'hazel-blue', name: 'Hazel Blue', hex: '#3D546B', image: 'https://ik.imagekit.io/2908vvlod/cars/venue/360/hazel-blue/1.webp' },
      { id: 'mystic-sapphire', name: 'Mystic Sapphire', hex: '#17233B', image: 'https://ik.imagekit.io/2908vvlod/cars/venue/360/mystic-sapphire/1.webp' },
      { id: 'hazel-blue-matte', name: 'Hazel Blue Matte', hex: '#3D4C59', image: 'https://ik.imagekit.io/2908vvlod/cars/venue/360/hazel-blue-matte/1.webp' },
      { id: 'mystic-sapphire-matte', name: 'Mystic Sapphire Matte', hex: '#1C2A3A', image: 'https://ik.imagekit.io/2908vvlod/cars/venue/360/mystic-sapphire-matte/1.webp' },
      { id: 'atlas-white-black-roof', name: 'Atlas White with Titanium Black Roof', hex: 'linear-gradient(135deg, #F2F4F7 60%, #15161A 60%)', image: 'https://ik.imagekit.io/2908vvlod/cars/venue/360/atlas-white-black-roof/1.webp' },
      { id: 'hazel-blue-black-roof', name: 'Hazel Blue with Titanium Black Roof', hex: 'linear-gradient(135deg, #4A5B6E 60%, #15161A 60%)', image: 'https://ik.imagekit.io/2908vvlod/cars/venue/360/hazel-blue-black-roof/1.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Dynamic Studio Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/venue/360/atlas-white/1.webp' },
      { label: 'Dark Chrome Parametric Grille & LED Headlamps', url: 'https://ik.imagekit.io/2908vvlod/cars/venue/360/atlas-white/5.webp' },
      { label: 'Side Compact SUV Stance with Roof Rails & Diamond Cut Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/venue/360/atlas-white/14.webp' },
      { label: 'Rear Connected LED Taillamps & Wide Skid Plate', url: 'https://ik.imagekit.io/2908vvlod/cars/venue/360/atlas-white/23.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance in Atlas White', url: 'https://ik.imagekit.io/2908vvlod/cars/venue/360/atlas-white/1.webp' },
      { title: 'Bold Front Fascia with Dark Chrome Parametric Grille and LED Projector Headlamps', url: 'https://ik.imagekit.io/2908vvlod/cars/venue/360/atlas-white/5.webp' },
      { title: 'Athletic SUV Profile with Bridge-type Roof Rails and R16 Diamond-Cut Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/venue/360/atlas-white/14.webp' },
      { title: 'Striking Rear Design with Connected Horizon LED Taillamps and Two-Tone Bumper', url: 'https://ik.imagekit.io/2908vvlod/cars/venue/360/atlas-white/23.webp' }
    ],
    specs: {
      engineOptions: '1.2L Kappa MPi Petrol (83 PS / 114 Nm) | 1.0L Turbo GDi (120 PS / 172 Nm) | 1.5L U2 CRDi Diesel (116 PS / 250 Nm)',
      transmissions: '5-Speed Manual (5MT), 6-Speed Manual (6MT), and 7-Speed Dual Clutch (7DCT) with Paddle Shifters',
      dimensions: '3995 mm (L) × 1770 mm (W) × 1617 mm (H)',
      wheelbase: '2500 mm',
      fuelTank: '45 Litres',
      brakes: 'Front Ventilated Disc / Rear Drum with ABS, EBD & Brake Assist',
      suspension: 'MacPherson Strut with Coil Spring (Front) / Coupled Torsion Beam Axle with Coil Spring (Rear)',
      safety: '6 Airbags Standard across all trims, Level 1 ADAS (Hyundai SmartSense), ESC, VSM, Hill-Start Assist Control (HAC), Rear Camera with dynamic guidelines, ISOFIX'
    },
    variants: [
      {
        name: 'E 1.2L Petrol 5MT',
        exShowroom: 794100,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa MPi (83 PS)',
        mileage: '17.5 km/l',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard Across Trims', 'ABS with EBD & ESC', 'Central Locking', 'Front Power Windows', 'Tilt Adjustable Steering', 'Day/Night Rearview Mirror', 'ISOFIX Child Seat Anchors']
      },
      {
        name: 'S 1.2L Petrol 5MT',
        exShowroom: 910900,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa MPi (83 PS)',
        mileage: '17.5 km/l',
        isVFM: true,
        vfmBadge: '🔥 HIGH VALUE ENTRY',
        keyFeatures: ['8-inch Touchscreen Infotainment', 'Apple CarPlay & Android Auto', 'Rear AC Vents', 'Type-C USB Charging Ports', 'Steering Mounted Controls', 'Rear Camera with Guidelines']
      },
      {
        name: 'S(O) 1.2L Petrol 5MT',
        exShowroom: 989100,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa MPi (83 PS)',
        mileage: '17.5 km/l',
        isVFM: false,
        keyFeatures: ['LED Projector Headlamps', 'Connecting LED Taillamps', 'Fully Digital Cluster with Color TFT MID', 'Drive Modes (Normal/Eco/Sport)', 'Cruise Control', 'Shark Fin Antenna']
      },
      {
        name: 'S(O) Plus 1.2L Petrol 5MT',
        exShowroom: 1000000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa MPi (83 PS)',
        mileage: '17.5 km/l',
        isVFM: true,
        vfmBadge: '☀️ BEST VALUE SUNROOF',
        keyFeatures: ['Smart Electric Sunroof', 'LED Projector Headlamps', 'Connecting LED Taillamps', 'Digital Instrument Cluster', 'Cruise Control', 'Rear Defogger with Timer']
      },
      {
        name: 'S(O) 1.0L Turbo 6MT',
        exShowroom: 1044600,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L Turbo GDi (120 PS)',
        mileage: '18.3 km/l',
        isVFM: false,
        keyFeatures: ['120 PS Turbocharged Punch', '6-Speed Smooth Manual Transmission', 'Smart Electric Sunroof', 'LED Headlamps & Lightbar', 'Drive Modes & Traction Control', 'Rear Parking Camera']
      },
      {
        name: 'SX 1.2L Petrol 5MT',
        exShowroom: 1105900,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Kappa MPi (83 PS)',
        mileage: '17.5 km/l',
        isVFM: true,
        vfmBadge: '🏆 MOST POPULAR LUXURY PICK',
        keyFeatures: ['Smart Electric Sunroof', '16-inch Diamond Cut Alloys', 'Wireless Phone Charger', 'Push Button Start with Smart Key', 'Fully Automatic Temperature Control (FATC)', 'Rear 2-Step Reclining Seats']
      },
      {
        name: 'S(O) 1.0L Turbo 7DCT',
        exShowroom: 1151400,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.0L Turbo GDi (120 PS)',
        mileage: '18.1 km/l',
        isVFM: true,
        vfmBadge: '⚡ TOP TURBO AUTOMATIC PICK',
        keyFeatures: ['Lightning-Fast 7-Speed Dual Clutch (DCT)', 'Paddle Shifters on Steering', 'Drive Modes (Eco, Normal, Sport)', 'Smart Electric Sunroof', 'Digital Cluster with Color MID', 'Rear AC Vents']
      },
      {
        name: 'S Plus 1.5L Diesel 6MT',
        exShowroom: 1070500,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '1.5L U2 CRDi Diesel (116 PS)',
        mileage: '24.2 km/l',
        isVFM: true,
        vfmBadge: '⛽ BEST DIESEL VALUE',
        keyFeatures: ['Ultra-Frugal 1.5L CRDi Diesel (116 PS / 250 Nm)', 'Smart Electric Sunroof', 'LED Projector Headlamps', 'Digital MID Cluster', 'Standard 6 Airbags', 'Rear Camera with Guidelines']
      },
      {
        name: 'SX 1.5L Diesel 6MT',
        exShowroom: 1237400,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '1.5L U2 CRDi Diesel (116 PS)',
        mileage: '24.2 km/l',
        isVFM: false,
        keyFeatures: ['High-Torque 250 Nm Diesel Performance', 'Smart Electric Sunroof', '16-inch Diamond Cut Alloys', 'Automatic Climate Control', 'Wireless Phone Charger', '2-Step Rear Reclining Seats']
      },
      {
        name: 'SX(O) 1.0L Turbo 6MT',
        exShowroom: 1244300,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L Turbo GDi (120 PS)',
        mileage: '18.3 km/l',
        isVFM: false,
        keyFeatures: ['Hyundai SmartSense Level 1 ADAS', 'Forward Collision Warning & Assist', 'Lane Keep Assist & Lane Departure Warning', 'Blue Link Connected Car Tech (60+ features)', '4-Way Powered Driver Seat', 'Ambient Sound of Nature']
      },
      {
        name: 'SX(O) 1.0L Turbo 7DCT',
        exShowroom: 1323300,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.0L Turbo GDi (120 PS)',
        mileage: '18.1 km/l',
        isVFM: false,
        keyFeatures: ['Flagship Turbo DCT with Level 1 ADAS', 'Blue Link with Alexa & Smartwatch Connectivity', '4-Way Power Driver Seat', 'Auto-Dimming IRVM with Telematics', 'Cooled Glovebox', 'Leatherette Seating Accents']
      },
      {
        name: 'SX(O) 1.0L Turbo Knight 7DCT',
        exShowroom: 1348000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.0L Turbo GDi (120 PS)',
        mileage: '18.1 km/l',
        isVFM: false,
        keyFeatures: ['All-Black Knight Edition Theme', 'Brass Accents on Grille, Bumper & Roof Rails', 'Red Brake Calipers', 'Dark Chrome Hyundai Emblem', 'Dual Dashcam with Front & Rear Cameras', 'Full ADAS Safety Suite']
      },
      {
        name: 'SX(O) 1.5L Diesel 6MT',
        exShowroom: 1319000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '1.5L U2 CRDi Diesel (116 PS)',
        mileage: '24.2 km/l',
        isVFM: false,
        keyFeatures: ['Flagship Long-Range Highway Tourer', 'Hyundai SmartSense Level 1 ADAS', 'Blue Link Connected Car Tech', '4-Way Power Driver Seat', 'Smart Electric Sunroof', 'Electrochromic Auto-Dimming Mirror']
      }
    ]
  },

  {
    id: 'hyundai-verna',
    name: 'Hyundai Verna',
    brand: 'Hyundai',
    tagline: 'Futuristic Fastback Sedan with 160 PS Turbo & 5-Star Global NCAP Safety',
    launchDate: 'Updated 2025/2026',
    bodyType: 'Sedan',
    fuelTypes: ['Petrol'],
    priceRange: '₹11.00 - ₹17.48 Lakh',
    minPrice: 1100400,
    maxPrice: 1747800,
    safetyRating: '5.0 ★ (Global NCAP Adult & Child Safety) | Level 2 ADAS',
    groundClearance: '165 mm',
    bootSpace: '528 L',
    waitingPeriod: '2 - 6 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/verna/360/starry-night/1.webp',
    summary: 'The 6th-generation Hyundai Verna redefines the mid-size sedan segment with its sensational fastback silhouette, parametric jewel grille, and full-width Horizon LED lightbars. Awarded a prestigious 5-Star Global NCAP crash test rating for both adult and child protection, it features Level 2 Hyundai SmartSense ADAS with 17 radar/camera features, segment-leading 160 PS 1.5L Turbo GDi engine, dual integrated 10.25-inch curved screens, Bose 8-speaker audio, and first-in-segment front heated and ventilated seats.',
    spin360: {
      totalFrames: 36,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/verna/360',
      format: 'webp',
      defaultColor: 'starry-night',
      colors: [
        { id: 'starry-night', name: 'Starry Night', hex: '#1B2430' },
        { id: 'atlas-white', name: 'Atlas White', hex: '#F4F5F7' },
        { id: 'abyss-black', name: 'Abyss Black', hex: '#0D0E10' },
        { id: 'titan-grey', name: 'Titan Grey', hex: '#5E646A' },
        { id: 'titan-grey-matte', name: 'Titan Grey Matte', hex: '#424548' },
        { id: 'tellurian-brown', name: 'Tellurian Brown', hex: '#54483C' },
        { id: 'fiery-red', name: 'Fiery Red', hex: '#B71C1C' },
        { id: 'typhoon-silver', name: 'Typhoon Silver', hex: '#D6D8DB' },
        { id: 'classy-blue', name: 'Classy Blue', hex: '#1D3557' },
        { id: 'atlas-white-black-roof', name: 'Atlas White with Abyss Black Roof', hex: 'linear-gradient(135deg, #F4F5F7 60%, #0D0E10 60%)' },
        { id: 'fiery-red-black-roof', name: 'Fiery Red with Abyss Black Roof', hex: 'linear-gradient(135deg, #B71C1C 60%, #0D0E10 60%)' }
      ]
    },
    colors: [
      { id: 'starry-night', name: 'Starry Night', hex: '#1B2430', image: 'https://ik.imagekit.io/2908vvlod/cars/verna/360/starry-night/1.webp' },
      { id: 'atlas-white', name: 'Atlas White', hex: '#F4F5F7', image: 'https://ik.imagekit.io/2908vvlod/cars/verna/360/atlas-white/1.webp' },
      { id: 'abyss-black', name: 'Abyss Black', hex: '#0D0E10', image: 'https://ik.imagekit.io/2908vvlod/cars/verna/360/abyss-black/1.webp' },
      { id: 'titan-grey', name: 'Titan Grey', hex: '#5E646A', image: 'https://ik.imagekit.io/2908vvlod/cars/verna/360/titan-grey/1.webp' },
      { id: 'titan-grey-matte', name: 'Titan Grey Matte', hex: '#424548', image: 'https://ik.imagekit.io/2908vvlod/cars/verna/360/titan-grey-matte/1.webp' },
      { id: 'tellurian-brown', name: 'Tellurian Brown', hex: '#54483C', image: 'https://ik.imagekit.io/2908vvlod/cars/verna/360/tellurian-brown/1.webp' },
      { id: 'fiery-red', name: 'Fiery Red', hex: '#B71C1C', image: 'https://ik.imagekit.io/2908vvlod/cars/verna/360/fiery-red/1.webp' },
      { id: 'typhoon-silver', name: 'Typhoon Silver', hex: '#D6D8DB', image: 'https://ik.imagekit.io/2908vvlod/cars/verna/360/typhoon-silver/1.webp' },
      { id: 'classy-blue', name: 'Classy Blue', hex: '#1D3557', image: 'https://ik.imagekit.io/2908vvlod/cars/verna/360/classy-blue/1.webp' },
      { id: 'atlas-white-black-roof', name: 'Atlas White with Abyss Black Roof', hex: 'linear-gradient(135deg, #F4F5F7 60%, #0D0E10 60%)', image: 'https://ik.imagekit.io/2908vvlod/cars/verna/360/atlas-white-black-roof/1.webp' },
      { id: 'fiery-red-black-roof', name: 'Fiery Red with Abyss Black Roof', hex: 'linear-gradient(135deg, #B71C1C 60%, #0D0E10 60%)', image: 'https://ik.imagekit.io/2908vvlod/cars/verna/360/fiery-red-black-roof/1.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Dynamic Studio Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/verna/360/starry-night/1.webp' },
      { label: 'Horizon LED Lightbar & Parametric Jewel Grille', url: 'https://ik.imagekit.io/2908vvlod/cars/verna/360/starry-night/5.webp' },
      { label: 'Fastback Sedan Profile with 2670mm Wheelbase', url: 'https://ik.imagekit.io/2908vvlod/cars/verna/360/starry-night/14.webp' },
      { label: 'Connected H-Signature LED Taillamps & Fastback Rear', url: 'https://ik.imagekit.io/2908vvlod/cars/verna/360/starry-night/23.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance in Starry Night', url: 'https://ik.imagekit.io/2908vvlod/cars/verna/360/starry-night/1.webp' },
      { title: 'Unmistakable Horizon LED Position Lamp and Swept Parametric Black Chrome Grille', url: 'https://ik.imagekit.io/2908vvlod/cars/verna/360/starry-night/5.webp' },
      { title: 'Sensuous Fastback Profile with R16 Diamond-Cut Alloys & Satin Chrome Beltline', url: 'https://ik.imagekit.io/2908vvlod/cars/verna/360/starry-night/14.webp' },
      { title: 'Futuristic Rear Design with Connected H-LED Taillamps and Integrated Trunk Wing', url: 'https://ik.imagekit.io/2908vvlod/cars/verna/360/starry-night/23.webp' }
    ],
    specs: {
      engineOptions: '1.5L MPi 4-Cylinder Petrol (115 PS / 144 Nm) | 1.5L Turbo GDi Petrol (160 PS / 253 Nm)',
      transmissions: '6-Speed Manual (6MT), Intelligent Variable Transmission (IVT), and 7-Speed Dual Clutch (7DCT) with Paddle Shifters',
      dimensions: '4535 mm (L) × 1765 mm (W) × 1475 mm (H)',
      wheelbase: '2670 mm (Longest in Segment)',
      fuelTank: '45 Litres',
      bootSpace: '528 Litres (Largest in Segment)',
      brakes: 'All 4 Disc Brakes (Front Ventilated / Rear Solid Disc) with ABS & EBD',
      suspension: 'MacPherson Strut with Coil Spring (Front) / Coupled Torsion Beam Axle (Rear)',
      safety: '5-Star Global NCAP Rating, 6 Airbags Standard across all trims, Hyundai SmartSense Level 2 ADAS (17 Autonomous Features), ESC, VSM, Hill-Start Assist, ISOFIX'
    },
    variants: [
      {
        name: 'EX 1.5L MPi 6MT',
        exShowroom: 1100400,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L MPi Petrol (115 PS)',
        mileage: '18.6 km/l',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard', 'ABS with EBD & ESC', 'Hill Start Assist', 'All 4 Power Windows', 'Height Adjustable Driver Seat', 'Rear Defogger with Timer', 'Tilt Steering']
      },
      {
        name: 'S 1.5L MPi 6MT',
        exShowroom: 1199500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L MPi Petrol (115 PS)',
        mileage: '18.6 km/l',
        isVFM: true,
        vfmBadge: '🔥 HIGH VALUE ENTRY',
        keyFeatures: ['8-inch Touchscreen Infotainment', 'Apple CarPlay & Android Auto', 'Horizon LED Daytime Running Lamp', 'Connecting LED Taillights', 'Fully Digital Cluster with Color TFT MID', 'Automatic Climate Control', 'Rear AC Vents']
      },
      {
        name: 'SX 1.5L MPi 6MT',
        exShowroom: 1308400,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L MPi Petrol (115 PS)',
        mileage: '18.6 km/l',
        isVFM: true,
        vfmBadge: '🏆 MOST POPULAR LUXURY PICK',
        keyFeatures: ['Smart Electric Sunroof', '16-inch Diamond Cut Alloy Wheels', 'Wireless Smartphone Charger', 'Smart Key with Push Button Start', 'Rear View Camera with Guidelines', 'Cornering Lamps & LED Projector Headlamps']
      },
      {
        name: 'SX 1.5L MPi IVT',
        exShowroom: 1433400,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L MPi Petrol (115 PS)',
        mileage: '19.6 km/l',
        isVFM: true,
        vfmBadge: '⚡ TOP CITY AUTOMATIC PICK',
        keyFeatures: ['Smooth Stepless IVT Automatic', 'Paddle Shifters on Steering', 'Drive Modes (Eco, Normal, Sport)', 'Smart Electric Sunroof', '16-inch Diamond Cut Alloys', 'Cruise Control', 'Wireless Phone Charging']
      },
      {
        name: 'SX(O) 1.5L MPi 6MT',
        exShowroom: 1475400,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L MPi Petrol (115 PS)',
        mileage: '18.6 km/l',
        isVFM: false,
        keyFeatures: ['Dual 10.25-inch Integrated HD Screens', 'Front Heated & Ventilated Seats', 'Leatherette Upholstery', 'Bose Premium 8-Speaker Sound System with Subwoofer', 'Power Driver Seat', '64-Color Ambient Mood Lighting']
      },
      {
        name: 'SX 1.5L Turbo GDi 6MT',
        exShowroom: 1493400,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L Turbo GDi (160 PS)',
        mileage: '20.0 km/l',
        isVFM: true,
        vfmBadge: '🚀 BEST PERFORMANCE VALUE',
        keyFeatures: ['Segment-Best 160 PS / 253 Nm Turbo Power', '0-100 km/h in 8.1 Seconds', 'All 4 Disc Brakes with Red Brake Calipers', 'Black Interiors with Sporty Red Accents', 'Black Alloy Wheels', 'Smart Electric Sunroof']
      },
      {
        name: 'SX(O) 1.5L Turbo GDi 6MT (ADAS)',
        exShowroom: 1608600,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L Turbo GDi (160 PS)',
        mileage: '20.0 km/l',
        isVFM: false,
        keyFeatures: ['Hyundai SmartSense Level 2 ADAS (17 Features)', 'Forward Collision Warning & Avoidance Assist', 'Lane Keep Assist & Lane Departure Warning', 'Dual 10.25-inch Screens', 'Bose 8-Speaker Audio', 'Ventilated & Heated Front Seats']
      },
      {
        name: 'SX 1.5L Turbo GDi 7DCT',
        exShowroom: 1618400,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L Turbo GDi (160 PS)',
        mileage: '20.6 km/l',
        isVFM: true,
        vfmBadge: '⚡ TOP TURBO DCT PICK',
        keyFeatures: ['Lightning 7-Speed Dual Clutch Transmission', 'Paddle Shifters on Steering', 'Drive Modes (Eco, Normal, Sport)', 'Red Front Brake Calipers', 'Smart Electric Sunroof', 'Electronic Parking Brake with Auto Hold']
      },
      {
        name: 'SX(O) 1.5L MPi IVT',
        exShowroom: 1629400,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L MPi Petrol (115 PS)',
        mileage: '19.6 km/l',
        isVFM: false,
        keyFeatures: ['Flagship Naturally Aspirated Executive Cruiser', 'Hyundai SmartSense Level 2 ADAS', 'Front Heated & Ventilated Seats', 'Bose 8-Speaker Audio', 'Electronic Parking Brake with Auto Hold', 'Smart Trunk Hands-Free Release']
      },
      {
        name: 'SX(O) 1.5L Turbo GDi 7DCT (ADAS)',
        exShowroom: 1747800,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L Turbo GDi (160 PS)',
        mileage: '20.6 km/l',
        isVFM: false,
        keyFeatures: ['Ultimate Flagship Performance Sedan', 'Level 2 ADAS with Smart Cruise Control & Stop & Go', 'Blind-Spot Collision Avoidance Assist', 'Bose 8-Speaker Premium Audio', 'Heated & Ventilated Front Seats', '64-Color Ambient Mood Lighting']
      }
    ]
  },

  {
    id: 'hyundai-alcazar',
    name: 'Hyundai Alcazar',
    brand: 'Hyundai',
    tagline: 'Intelligent 6 & 7-Seater Premium SUV with Level 2 ADAS & Dual Connected Cockpit',
    launchDate: 'Updated 2025/2026',
    bodyType: 'SUV',
    fuelTypes: ['Petrol', 'Diesel'],
    priceRange: '₹14.99 - ₹21.55 Lakh',
    minPrice: 1499000,
    maxPrice: 2155000,
    safetyRating: '6 Airbags Standard Across All Variants | Hyundai SmartSense Level 2 ADAS (70+ Features)',
    groundClearance: '200 mm',
    bootSpace: '180 L (All Rows Up) / 579 L (3rd Row Folded)',
    waitingPeriod: '3 - 8 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/alcazar/360/robust-emerald-matte/1.webp',
    summary: 'The new Hyundai Alcazar facelift elevates family luxury with commanding SUV road presence, signature H-shaped LED daytime running lights, and versatile 6 or 7-passenger configurations. Featuring first-in-segment ventilated seats for both 1st and 2nd row captain chairs, dual 10.25-inch curved cockpit screens, voice-enabled panoramic sunroof, Level 2 ADAS with 70+ safety features, dual wireless phone chargers, and Digital Key with NFC. Powered by a potent 160 PS 1.5L Turbo GDi petrol and a high-efficiency 1.5L U2 CRDi diesel.',
    spin360: {
      totalFrames: 36,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/alcazar/360',
      format: 'webp',
      defaultColor: 'robust-emerald-matte',
      colors: [
        { id: 'robust-emerald-matte', name: 'Robust Emerald Matte', hex: '#1E352F' },
        { id: 'robust-emerald-pearl', name: 'Robust Emerald Pearl', hex: '#173831' },
        { id: 'atlas-white', name: 'Atlas White', hex: '#F4F5F7' },
        { id: 'abyss-black', name: 'Titanium Black', hex: '#0D0E10' },
        { id: 'abyss-black-matte', name: 'Titanium Black Matte (Knight Edition)', hex: '#1A1B1E' },
        { id: 'starry-night', name: 'Starry Night', hex: '#1B2430' },
        { id: 'titan-grey', name: 'Titan Grey', hex: '#5E646A' },
        { id: 'fiery-red', name: 'Fiery Red', hex: '#B71C1C' },
        { id: 'typhoon-silver', name: 'Typhoon Silver', hex: '#D6D8DB' },
        { id: 'taiga-brown', name: 'Taiga Brown', hex: '#4A3C31' },
        { id: 'atlas-white-black-roof', name: 'Atlas White with Titanium Black Roof', hex: 'linear-gradient(135deg, #F4F5F7 60%, #0D0E10 60%)' }
      ]
    },
    colors: [
      { id: 'robust-emerald-matte', name: 'Robust Emerald Matte', hex: '#1E352F', image: 'https://ik.imagekit.io/2908vvlod/cars/alcazar/360/robust-emerald-matte/1.webp' },
      { id: 'robust-emerald-pearl', name: 'Robust Emerald Pearl', hex: '#173831', image: 'https://ik.imagekit.io/2908vvlod/cars/alcazar/360/robust-emerald-pearl/1.webp' },
      { id: 'atlas-white', name: 'Atlas White', hex: '#F4F5F7', image: 'https://ik.imagekit.io/2908vvlod/cars/alcazar/360/atlas-white/1.webp' },
      { id: 'abyss-black', name: 'Titanium Black', hex: '#0D0E10', image: 'https://ik.imagekit.io/2908vvlod/cars/alcazar/360/abyss-black/1.webp' },
      { id: 'abyss-black-matte', name: 'Titanium Black Matte (Knight Edition)', hex: '#1A1B1E', image: 'https://ik.imagekit.io/2908vvlod/cars/alcazar/360/abyss-black-matte/1.webp' },
      { id: 'starry-night', name: 'Starry Night', hex: '#1B2430', image: 'https://ik.imagekit.io/2908vvlod/cars/alcazar/360/starry-night/1.webp' },
      { id: 'titan-grey', name: 'Titan Grey', hex: '#5E646A', image: 'https://ik.imagekit.io/2908vvlod/cars/alcazar/360/titan-grey/1.webp' },
      { id: 'fiery-red', name: 'Fiery Red', hex: '#B71C1C', image: 'https://ik.imagekit.io/2908vvlod/cars/alcazar/360/fiery-red/1.webp' },
      { id: 'typhoon-silver', name: 'Typhoon Silver', hex: '#D6D8DB', image: 'https://ik.imagekit.io/2908vvlod/cars/alcazar/360/typhoon-silver/1.webp' },
      { id: 'taiga-brown', name: 'Taiga Brown', hex: '#4A3C31', image: 'https://ik.imagekit.io/2908vvlod/cars/alcazar/360/taiga-brown/1.webp' },
      { id: 'atlas-white-black-roof', name: 'Atlas White with Titanium Black Roof', hex: 'linear-gradient(135deg, #F4F5F7 60%, #0D0E10 60%)', image: 'https://ik.imagekit.io/2908vvlod/cars/alcazar/360/atlas-white-black-roof/1.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Dynamic Studio Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/alcazar/360/robust-emerald-matte/1.webp' },
      { label: 'H-Shaped Horizon LED DRLs & Quad-Beam Grille', url: 'https://ik.imagekit.io/2908vvlod/cars/alcazar/360/robust-emerald-matte/5.webp' },
      { label: 'Extended 3-Row SUV Silhouette & Bridge Roof Rails', url: 'https://ik.imagekit.io/2908vvlod/cars/alcazar/360/robust-emerald-matte/14.webp' },
      { label: 'Connected H-Signature LED Taillamps & Wide Skid Plate', url: 'https://ik.imagekit.io/2908vvlod/cars/alcazar/360/robust-emerald-matte/23.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter 360° Studio Stance in Robust Emerald Matte', url: 'https://ik.imagekit.io/2908vvlod/cars/alcazar/360/robust-emerald-matte/1.webp' },
      { title: 'Commanding Front Fascia with Dark Chrome Grille and Quad-Beam LED Headlamps', url: 'https://ik.imagekit.io/2908vvlod/cars/alcazar/360/robust-emerald-matte/5.webp' },
      { title: 'Sophisticated 3-Row SUV Silhouette with Diamond-Cut R18 Alloys and Bridge-Type Roof Rails', url: 'https://ik.imagekit.io/2908vvlod/cars/alcazar/360/robust-emerald-matte/14.webp' },
      { title: 'Bold Rear Design with Connected Horizon LED Taillamps and Twin-Tip Exhaust', url: 'https://ik.imagekit.io/2908vvlod/cars/alcazar/360/robust-emerald-matte/23.webp' }
    ],
    specs: {
      engineOptions: '1.5L Turbo GDi 4-Cylinder Petrol (160 PS / 253 Nm) | 1.5L U2 CRDi Diesel (116 PS / 250 Nm)',
      transmissions: '6-Speed Manual (6MT), 7-Speed Dual Clutch (7DCT), and 6-Speed Automatic (6AT) with Paddle Shifters',
      dimensions: '4560 mm (L) × 1800 mm (W) × 1710 mm (H)',
      wheelbase: '2760 mm (Best in Segment)',
      fuelTank: '50 Litres',
      bootSpace: '180 Litres (All Rows Up) / 579 Litres (3rd Row Folded)',
      brakes: 'All 4 Disc Brakes with ABS, EBD & Electronic Parking Brake with Auto Hold',
      suspension: 'MacPherson Strut with Coil Spring (Front) / Coupled Torsion Beam Axle (Rear)',
      safety: '6 Airbags Standard across all trims, Level 2 Hyundai SmartSense ADAS (70+ Features), Surround View 360 Camera, ESC, VSM, Hill-Start Assist Control, Downhill Brake Control (DBC), ISOFIX'
    },
    variants: [
      {
        name: 'Executive 1.5L Turbo 6MT (7-Seater)',
        exShowroom: 1499000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L Turbo GDi (160 PS)',
        mileage: '17.5 km/l',
        isVFM: true,
        vfmBadge: '🔥 ACCESSIBLE 3-ROW TURBO PICK',
        keyFeatures: ['160 PS Turbocharged Punch', 'All 4 Disc Brakes', '6 Airbags Standard', 'LED Headlamps & DRLs', 'Touchscreen Infotainment', 'Cruise Control', 'Rear AC Vents for All 3 Rows']
      },
      {
        name: 'Executive 1.5L Diesel 6MT (7-Seater)',
        exShowroom: 1599000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '1.5L U2 CRDi Diesel (116 PS)',
        mileage: '20.4 km/l',
        isVFM: true,
        vfmBadge: '⛽ BEST DIESEL VALUE',
        keyFeatures: ['Frugal 1.5L CRDi Diesel (20.4 km/l)', 'All 4 Disc Brakes', '6 Airbags Standard', 'ESC & Hill Start Assist', 'Digital Instrument Cluster', '3-Row Seating with One-Touch Tumble']
      },
      {
        name: 'Prestige 1.5L Turbo 6MT (7-Seater)',
        exShowroom: 1718000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L Turbo GDi (160 PS)',
        mileage: '17.5 km/l',
        isVFM: false,
        keyFeatures: ['Voice-Enabled Panoramic Sunroof', 'Dual 10.25-inch Curved Screens', 'Wireless Apple CarPlay & Android Auto', 'Push Button Start with Smart Key', 'Wireless Phone Charger', 'Rear Parking Camera']
      },
      {
        name: 'Prestige 1.5L Diesel 6MT (7-Seater)',
        exShowroom: 1799000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '1.5L U2 CRDi Diesel (116 PS)',
        mileage: '20.4 km/l',
        isVFM: false,
        keyFeatures: ['Panoramic Sunroof', 'Dual 10.25-inch Panoramic Screens', 'Wireless Phone Charging', 'Automatic Climate Control', '17-inch Diamond Cut Alloys', 'LED Fog Lamps']
      },
      {
        name: 'Platinum 1.5L Turbo 6MT (7-Seater)',
        exShowroom: 1946000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L Turbo GDi (160 PS)',
        mileage: '17.5 km/l',
        isVFM: true,
        vfmBadge: '🏆 MOST POPULAR LUXURY PICK',
        keyFeatures: ['Hyundai SmartSense Level 2 ADAS', 'Surround View 360° Camera', 'Bose Premium 8-Speaker Audio', 'Ventilated Front Seats', '8-Way Power Driver Seat with Memory', '18-inch Diamond Cut Alloys']
      },
      {
        name: 'Platinum 1.5L Diesel 6MT (7-Seater)',
        exShowroom: 2010000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '1.5L U2 CRDi Diesel (116 PS)',
        mileage: '20.4 km/l',
        isVFM: false,
        keyFeatures: ['Level 2 ADAS Highway Suite', 'Surround View 360 Monitor with Blind View', 'Bose Premium Audio', 'Ventilated Front Seats', 'Panoramic Sunroof', 'Electronic Parking Brake with Auto Hold']
      },
      {
        name: 'Platinum 1.5L Turbo 7DCT (7-Seater)',
        exShowroom: 2091000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L Turbo GDi (160 PS)',
        mileage: '18.0 km/l',
        isVFM: true,
        vfmBadge: '⚡ TOP TURBO AUTOMATIC PICK',
        keyFeatures: ['Lightning 7-Speed Dual Clutch (DCT)', 'Paddle Shifters & Drive Modes', 'Level 2 ADAS with Smart Cruise Control', 'Front Ventilated Seats', 'Digital Key with NFC', 'Bose 8-Speaker Sound System']
      },
      {
        name: 'Platinum 1.5L Diesel 6AT (7-Seater)',
        exShowroom: 2140000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '1.5L U2 CRDi Diesel (116 PS)',
        mileage: '18.1 km/l',
        isVFM: false,
        keyFeatures: ['Smooth 6-Speed Torque Converter Auto', 'Full Level 2 ADAS Suite', 'Bose 8-Speaker Audio System', 'Dual 10.25-inch Cockpit Displays', 'Front Ventilated Seats', '360 Camera with Guidelines']
      },
      {
        name: 'Signature 1.5L Turbo 7DCT (6-Seater Captain Seats)',
        exShowroom: 2155000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L Turbo GDi (160 PS)',
        mileage: '18.0 km/l',
        isVFM: true,
        vfmBadge: '👑 FIRST-CLASS 6-SEATER TURBO',
        keyFeatures: ['First-in-Segment 2nd Row Ventilated Captain Seats', 'Wing-Type Headrests & Thigh Extensions', 'Dual Wireless Phone Chargers (Row 1 & 2)', 'Flagship Level 2 ADAS Suite', 'Digital Key NFC', 'Bose Audio & Memory Seats']
      },
      {
        name: 'Signature 1.5L Diesel 6AT (6-Seater Captain Seats)',
        exShowroom: 2155000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '1.5L U2 CRDi Diesel (116 PS)',
        mileage: '18.1 km/l',
        isVFM: true,
        vfmBadge: '👑 FIRST-CLASS 6-SEATER DIESEL',
        keyFeatures: ['First-in-Segment 2nd Row Ventilated Captain Seats', 'Ultra-Refined 6AT Diesel Powertrain', 'Dual Row Wireless Charging', 'Flagship Level 2 ADAS', 'Surround View 360° Monitor', 'Bose 8-Speaker Audio']
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
    id: 'hyundai-creta',
    name: 'Hyundai Creta (Facelift)',
    brand: 'Hyundai',
    tagline: 'India’s Undisputed Benchmark Mid-Size SUV with Level 2 ADAS & Dual Curved Screens',
    launchDate: 'Updated 2024–2026 (Latest Facelift)',
    bodyType: 'SUV',
    fuelTypes: ['Petrol', 'Diesel'],
    priceRange: '₹11.00 - ₹20.15 Lakh',
    minPrice: 1100000,
    maxPrice: 2015000,
    safetyRating: '36 Standard Safety Features | Level 2 Hyundai SmartSense ADAS (19 Features)',
    groundClearance: '190 mm',
    bootSpace: '433 Litres',
    waitingPeriod: '4 - 12 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/creta/360/robust-emerald-pearl/1.webp',
    summary: 'The undisputed king of the mid-size SUV segment redefined in its latest facelift with a commanding parametric black-chrome grille, continuous full-width Horizon LED DRLs, quad-beam LED headlamps, twin 10.25-inch curved cockpit displays, and 70+ advanced connected safety features.',
    spin360: {
      totalFrames: 36,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/creta/360',
      format: 'webp',
      defaultColor: 'robust-emerald-pearl',
      colors: [
        { id: 'robust-emerald-pearl', name: 'Robust Emerald Pearl', hex: '#173831' },
        { id: 'abyss-black', name: 'Titanium Black (Abyss Black)', hex: '#0D0E10' },
        { id: 'atlas-white', name: 'Atlas White', hex: '#F4F5F7' },
        { id: 'titan-grey', name: 'Ecotronic Grey', hex: '#545B62' },
        { id: 'titan-grey-matte', name: 'Ecotronic Grey Matte', hex: '#61666B' },
        { id: 'ranger-khaki', name: 'Ranger Khaki', hex: '#556857' },
        { id: 'fiery-red', name: 'Fiery Red', hex: '#B71C1C' },
        { id: 'starry-night', name: 'Starry Night', hex: '#1B2430' },
        { id: 'abyss-black-matte', name: 'Titanium Black Matte (Knight Edition)', hex: '#1A1B1E' },
        { id: 'king-abyss-black-matte', name: 'King Limited Edition (Black Matte & Red Calipers)', hex: '#141517' },
        { id: 'atlas-white-black-roof', name: 'Atlas White with Titanium Black Roof', hex: 'linear-gradient(135deg, #F4F5F7 60%, #0D0E10 60%)' }
      ]
    },
    colors: [
      { id: 'robust-emerald-pearl', name: 'Robust Emerald Pearl', hex: '#173831', image: 'https://ik.imagekit.io/2908vvlod/cars/creta/360/robust-emerald-pearl/1.webp' },
      { id: 'abyss-black', name: 'Titanium Black (Abyss Black)', hex: '#0D0E10', image: 'https://ik.imagekit.io/2908vvlod/cars/creta/360/abyss-black/1.webp' },
      { id: 'atlas-white', name: 'Atlas White', hex: '#F4F5F7', image: 'https://ik.imagekit.io/2908vvlod/cars/creta/360/atlas-white/1.webp' },
      { id: 'titan-grey', name: 'Ecotronic Grey', hex: '#545B62', image: 'https://ik.imagekit.io/2908vvlod/cars/creta/360/titan-grey/1.webp' },
      { id: 'titan-grey-matte', name: 'Ecotronic Grey Matte', hex: '#61666B', image: 'https://ik.imagekit.io/2908vvlod/cars/creta/360/titan-grey-matte/1.webp' },
      { id: 'ranger-khaki', name: 'Ranger Khaki', hex: '#556857', image: 'https://ik.imagekit.io/2908vvlod/cars/creta/360/ranger-khaki/1.webp' },
      { id: 'fiery-red', name: 'Fiery Red', hex: '#B71C1C', image: 'https://ik.imagekit.io/2908vvlod/cars/creta/360/fiery-red/1.webp' },
      { id: 'starry-night', name: 'Starry Night', hex: '#1B2430', image: 'https://ik.imagekit.io/2908vvlod/cars/creta/360/starry-night/1.webp' },
      { id: 'abyss-black-matte', name: 'Titanium Black Matte (Knight Edition)', hex: '#1A1B1E', image: 'https://ik.imagekit.io/2908vvlod/cars/creta/360/abyss-black-matte/1.webp' },
      { id: 'king-abyss-black-matte', name: 'King Limited Edition (Black Matte & Red Calipers)', hex: '#141517', image: 'https://ik.imagekit.io/2908vvlod/cars/creta/360/king-abyss-black-matte/1.webp' },
      { id: 'atlas-white-black-roof', name: 'Atlas White with Titanium Black Roof', hex: 'linear-gradient(135deg, #F4F5F7 60%, #0D0E10 60%)', image: 'https://ik.imagekit.io/2908vvlod/cars/creta/360/atlas-white-black-roof/1.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Dynamic Studio Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/creta/360/robust-emerald-pearl/1.webp' },
      { label: 'Parametric Radiator Grille & Horizon DRL', url: 'https://ik.imagekit.io/2908vvlod/cars/creta/gallery/front-grille.webp' },
      { label: 'Athletic SUV Silhouette & Diamond-Cut Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/creta/gallery/side-profile.webp' },
      { label: 'Connected Horizon LED Taillamps & Rear Skid Plate', url: 'https://ik.imagekit.io/2908vvlod/cars/creta/gallery/rear-taillamps.webp' }
    ],
    gallery: [
      { title: 'Parametric Black Chrome Radiator Grille & Horizon LED Lightbar', url: 'https://ik.imagekit.io/2908vvlod/cars/creta/gallery/front-grille.webp' },
      { title: 'Dual Integrated 10.25-inch Panoramic Curved Displays & Premium Dashboard', url: 'https://ik.imagekit.io/2908vvlod/cars/creta/gallery/cockpit-dashboard.webp' },
      { title: 'Quad-Beam LED Headlamps with Horizon LED Positioning Lamps', url: 'https://ik.imagekit.io/2908vvlod/cars/creta/gallery/quad-headlamps.webp' },
      { title: 'Full HD 10.25-inch Infotainment System with Hyundai Bluelink Connected Car Tech', url: 'https://ik.imagekit.io/2908vvlod/cars/creta/gallery/infotainment-cluster.webp' },
      { title: 'Connected Horizon LED Taillamps with Sculpted Aerodynamic Tailgate', url: 'https://ik.imagekit.io/2908vvlod/cars/creta/gallery/rear-taillamps.webp' },
      { title: 'Premium Dual-Tone Leatherette Upholstery with Front Ventilated Seats', url: 'https://ik.imagekit.io/2908vvlod/cars/creta/gallery/ventilated-seats.webp' },
      { title: 'Athletic SUV Silhouette with Aerodynamic Diamond-Cut R17 Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/creta/gallery/side-profile.webp' },
      { title: 'Dual-Zone Automatic Temperature Control with Touch Climate Panel', url: 'https://ik.imagekit.io/2908vvlod/cars/creta/gallery/dual-zone-ac.webp' },
      { title: '64-Color Ambient Interior Mood Lighting & Electrochromic IRVM', url: 'https://ik.imagekit.io/2908vvlod/cars/creta/gallery/ambient-lighting.webp' },
      { title: '17-inch Diamond-Cut Aero Alloy Wheels with Highline Tire Pressure Monitoring', url: 'https://ik.imagekit.io/2908vvlod/cars/creta/gallery/diamond-cut-alloys.webp' }
    ],
    specs: {
      engineOptions: '1.5L MPi Petrol (115 PS / 143.8 Nm) | 1.5L Turbo GDi Petrol (160 PS / 253 Nm) | 1.5L U2 CRDi Diesel (116 PS / 250 Nm)',
      transmissions: '6-Speed Manual (6MT), Intelligent Variable Transmission (IVT), 6-Speed Automatic (6AT), and 7-Speed Dual Clutch (7DCT) with Paddle Shifters',
      dimensions: '4330 mm (L) × 1790 mm (W) × 1635 mm (H)',
      wheelbase: '2610 mm',
      fuelTank: '50 Litres',
      bootSpace: '433 Litres',
      brakes: 'All 4 Disc Brakes with ABS, EBD & Electronic Parking Brake (EPB) with Auto Hold',
      suspension: 'MacPherson Strut with Coil Spring (Front) / Coupled Torsion Beam Axle (Rear)',
      safety: '6 Airbags Standard Across All Trims, Level 2 Hyundai SmartSense ADAS (19 Safety Features), Surround View 360° Monitor with Blind View, ESC, VSM, HAC, TPMS Highline, ISOFIX'
    },
    variants: [
      {
        name: 'E 1.5L Petrol 6MT',
        exShowroom: 1100000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L MPi (115 PS)',
        mileage: '17.4 km/l',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard', 'All 4 Disc Brakes', 'ESC & Hill-Start Assist', 'Manual AC', 'Tire Pressure Monitor (TPMS)', 'Dual-Tone Interior']
      },
      {
        name: 'EX 1.5L Petrol 6MT',
        exShowroom: 1221000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L MPi (115 PS)',
        mileage: '17.4 km/l',
        isVFM: false,
        keyFeatures: ['8-inch Touchscreen Infotainment', 'Wireless Android Auto & Apple CarPlay', 'Steering Mounted Controls', 'Shark Fin Antenna', 'Front & Rear USB-C Ports']
      },
      {
        name: 'S 1.5L Petrol 6MT',
        exShowroom: 1343000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L MPi (115 PS)',
        mileage: '17.4 km/l',
        isVFM: false,
        keyFeatures: ['Horizon LED DRLs', 'Rear Parking Camera with Guidelines', 'Cruise Control', 'Rear Window Sunshades', 'Automatic Headlamps', 'Dual-Tone Styled Wheels']
      },
      {
        name: 'S(O) 1.5L Petrol 6MT',
        exShowroom: 1436000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L MPi (115 PS)',
        mileage: '17.4 km/l',
        isVFM: true,
        vfmBadge: '🏆 MOST POPULAR PICK',
        keyFeatures: ['Voice-Enabled Panoramic Sunroof', 'Dual-Zone Automatic Climate Control', '17-inch Diamond-Cut Alloys', 'Electronic Parking Brake (EPB) with Auto Hold', 'Push Button Start']
      },
      {
        name: 'S(O) 1.5L Petrol IVT',
        exShowroom: 1586000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L MPi (115 PS)',
        mileage: '17.7 km/l',
        isVFM: true,
        vfmBadge: '⚡ TOP AUTOMATIC VALUE',
        keyFeatures: ['Ultra-Smooth IVT Automatic', 'Paddle Shifters & Drive Modes', 'Panoramic Sunroof', 'Dual-Zone AC', 'Electronic Parking Brake', 'Wireless Charger']
      },
      {
        name: 'SX 1.5L Petrol 6MT',
        exShowroom: 1530000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L MPi (115 PS)',
        mileage: '17.4 km/l',
        isVFM: false,
        keyFeatures: ['Dual 10.25-inch Integrated Screens (Infotainment + Cluster)', 'Connected Horizon LED Taillamps', 'Ambient Lighting (64 Colors)', 'Rear Seat Headrest Cushions', 'Smart Key with Remote Engine Start']
      },
      {
        name: 'SX(O) 1.5L Petrol IVT',
        exShowroom: 1873000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L MPi (115 PS)',
        mileage: '17.7 km/l',
        isVFM: true,
        vfmBadge: '👑 FLAGSHIP PETROL LUXURY',
        keyFeatures: ['Hyundai SmartSense Level 2 ADAS (19 Features)', 'Bose Premium 8-Speaker Audio', 'Surround View 360° Monitor & Blind View', 'Front Ventilated Seats', '8-Way Power Driver Seat']
      },
      {
        name: 'SX(O) 1.5L Turbo 7DCT',
        exShowroom: 2015000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L Turbo GDi (160 PS)',
        mileage: '18.4 km/l',
        isVFM: true,
        vfmBadge: '🔥 160 PS TURBO PERFORMANCE',
        keyFeatures: ['160 PS / 253 Nm Turbo GDi Power', 'Lightning 7-Speed Dual Clutch (DCT)', 'Full Level 2 ADAS Highway Suite', 'Bose 8-Speaker Audio System', 'Dual Curved Cockpit', 'Ventilated Front Seats']
      },
      {
        name: 'SX(O) Knight Edition 1.5L Turbo 7DCT',
        exShowroom: 2030000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L Turbo GDi (160 PS)',
        mileage: '18.4 km/l',
        isVFM: false,
        keyFeatures: ['Knight All-Black Aesthetic Package', 'Matte Black Exterior with Red Brake Calipers', 'Dark Chrome Badging & Grille', 'Black Leatherette Seats with Brass Piping', 'Flagship Level 2 ADAS & Bose Audio']
      },
      {
        name: 'E 1.5L Diesel 6MT',
        exShowroom: 1256000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '1.5L U2 CRDi Diesel (116 PS)',
        mileage: '21.8 km/l',
        isVFM: true,
        vfmBadge: '⛽ BEST DIESEL ECONOMY PICK',
        keyFeatures: ['Frugal 1.5L Diesel (21.8 km/l)', 'All 4 Disc Brakes', '6 Airbags Standard', 'ESC & Hill-Start Assist Control', 'Full Foldable Rear Seats']
      },
      {
        name: 'S(O) 1.5L Diesel 6MT',
        exShowroom: 1590000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '1.5L U2 CRDi Diesel (116 PS)',
        mileage: '21.8 km/l',
        isVFM: true,
        vfmBadge: '🏆 BEST DIESEL VALUE',
        keyFeatures: ['Panoramic Sunroof', 'Dual-Zone Climate Control', '17-inch Diamond-Cut Alloys', 'Electronic Parking Brake', 'Push Button Start']
      },
      {
        name: 'SX(O) 1.5L Diesel 6AT',
        exShowroom: 2015000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '1.5L U2 CRDi Diesel (116 PS)',
        mileage: '19.1 km/l',
        isVFM: true,
        vfmBadge: '👑 FIRST-CLASS DIESEL CRUISER',
        keyFeatures: ['Smooth 6-Speed Torque Converter Auto', 'Full Level 2 ADAS Suite', 'Bose Premium 8-Speaker Audio', 'Surround View 360° Camera & Blind View', 'Front Ventilated Seats', 'Panoramic Sunroof']
      }
    ]
  },
  {
    id: 'hyundai-creta-n-line',
    name: 'Hyundai Creta N Line',
    brand: 'Hyundai',
    tagline: 'Track-Inspired Performance SUV with 160 PS Turbo GDi, Twin Exhaust & N Line Dynamics',
    launchDate: 'March 2024 (Latest N Line)',
    bodyType: 'SUV',
    fuelTypes: ['Petrol'],
    priceRange: '₹16.82 - ₹20.49 Lakh',
    minPrice: 1682300,
    maxPrice: 2049300,
    safetyRating: '36 Standard Safety Features | Level 2 Hyundai SmartSense ADAS (19 Features)',
    groundClearance: '190 mm',
    bootSpace: '433 Litres',
    waitingPeriod: '3 - 8 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/creta-n-line/360/shadow-grey/1.webp',
    summary: 'The track-honed iteration of India’s benchmark SUV engineered for automotive enthusiasts. Featuring an exclusive WRC-inspired front bumper with red aerodynamic accents, signature N Line honeycomb grille, dual twin-tip performance exhaust with tuned sound, firmer damper settings, weighted steering rack, and 18-inch diamond-cut alloys with red brake calipers. Inside, an all-black cockpit with red stitching, metal pedals, dual dashcam, and Level 2 ADAS suite.',
    spin360: {
      totalFrames: 36,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/creta-n-line/360',
      format: 'webp',
      defaultColor: 'shadow-grey',
      colors: [
        { id: 'shadow-grey', name: 'Shadow Grey (Exclusive N Line)', hex: '#4C5156' },
        { id: 'thunder-blue', name: 'Thunder Blue (Signature N Line)', hex: '#1B3B8A' },
        { id: 'atlas-white', name: 'Atlas White', hex: '#F4F5F7' },
        { id: 'abyss-black', name: 'Titanium Black (Abyss Black)', hex: '#0D0E10' },
        { id: 'abyss-black-matte', name: 'Titanium Black Matte', hex: '#1A1B1E' },
        { id: 'titan-grey', name: 'Titan Grey', hex: '#545B62' },
        { id: 'atlas-white-black-roof', name: 'Atlas White with Titanium Black Roof', hex: 'linear-gradient(135deg, #F4F5F7 60%, #0D0E10 60%)' }
      ]
    },
    colors: [
      { id: 'shadow-grey', name: 'Shadow Grey (Exclusive N Line)', hex: '#4C5156', image: 'https://ik.imagekit.io/2908vvlod/cars/creta-n-line/360/shadow-grey/1.webp' },
      { id: 'thunder-blue', name: 'Thunder Blue (Signature N Line)', hex: '#1B3B8A', image: 'https://ik.imagekit.io/2908vvlod/cars/creta-n-line/360/thunder-blue/1.webp' },
      { id: 'atlas-white', name: 'Atlas White', hex: '#F4F5F7', image: 'https://ik.imagekit.io/2908vvlod/cars/creta-n-line/360/atlas-white/1.webp' },
      { id: 'abyss-black', name: 'Titanium Black (Abyss Black)', hex: '#0D0E10', image: 'https://ik.imagekit.io/2908vvlod/cars/creta-n-line/360/abyss-black/1.webp' },
      { id: 'abyss-black-matte', name: 'Titanium Black Matte', hex: '#1A1B1E', image: 'https://ik.imagekit.io/2908vvlod/cars/creta-n-line/360/abyss-black-matte/1.webp' },
      { id: 'titan-grey', name: 'Titan Grey', hex: '#545B62', image: 'https://ik.imagekit.io/2908vvlod/cars/creta-n-line/360/titan-grey/1.webp' },
      { id: 'atlas-white-black-roof', name: 'Atlas White with Titanium Black Roof', hex: 'linear-gradient(135deg, #F4F5F7 60%, #0D0E10 60%)', image: 'https://ik.imagekit.io/2908vvlod/cars/creta-n-line/360/atlas-white-black-roof/1.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Dynamic Studio Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/creta-n-line/360/shadow-grey/1.webp' },
      { label: 'WRC Aerodynamic Bumper & Honeycomb Grille', url: 'https://ik.imagekit.io/2908vvlod/cars/creta-n-line/gallery/wrc-front-bumper.webp' },
      { label: 'R18 Diamond-Cut Alloys & Red Calipers', url: 'https://ik.imagekit.io/2908vvlod/cars/creta-n-line/gallery/r18-diamond-cut-alloys.webp' },
      { label: 'Dual Twin-Tip Sports Exhaust & Rear Diffuser', url: 'https://ik.imagekit.io/2908vvlod/cars/creta-n-line/gallery/twin-tip-exhaust.webp' }
    ],
    gallery: [
      { title: 'WRC-Inspired Front Bumper with Red Aerodynamic Lip & N Line Honeycomb Grille', url: 'https://ik.imagekit.io/2908vvlod/cars/creta-n-line/gallery/wrc-front-bumper.webp' },
      { title: 'All-Black Performance Cabin with Red Contrast Stitching & Ambient Mood Lighting', url: 'https://ik.imagekit.io/2908vvlod/cars/creta-n-line/gallery/n-cockpit-interior.webp' },
      { title: '18-inch N Line Diamond-Cut Alloys with Sporty Red Front & Rear Brake Calipers', url: 'https://ik.imagekit.io/2908vvlod/cars/creta-n-line/gallery/r18-diamond-cut-alloys.webp' },
      { title: 'Dual Twin-Tip Sports Exhaust System with Tuned Exhaust Note & Aerodynamic Rear Diffuser', url: 'https://ik.imagekit.io/2908vvlod/cars/creta-n-line/gallery/twin-tip-exhaust.webp' },
      { title: 'Perforated Leather N Steering Wheel, Metal Sports Pedals & Dual 10.25-inch Screens', url: 'https://ik.imagekit.io/2908vvlod/cars/creta-n-line/gallery/n-steering-and-dash.webp' },
      { title: 'N-Embossed Leatherette Front Ventilated Sport Seats with Red Piping', url: 'https://ik.imagekit.io/2908vvlod/cars/creta-n-line/gallery/sport-seats.webp' }
    ],
    specs: {
      engineOptions: '1.5L Turbo GDi 4-Cylinder Petrol (160 PS @ 5,500 rpm / 253 Nm @ 1,500–3,500 rpm)',
      transmissions: '6-Speed Manual (6MT) with N-Embossed Gear Shifter / 7-Speed Dual Clutch (7DCT) with Paddle Shifters',
      dimensions: '4330 mm (L) × 1790 mm (W) × 1635 mm (H)',
      wheelbase: '2610 mm',
      fuelTank: '50 Litres',
      bootSpace: '433 Litres',
      brakes: 'All 4 Disc Brakes with Sport Red Calipers, ABS, EBD & Electronic Parking Brake (EPB) with Auto Hold',
      suspension: 'Firm-Tuned MacPherson Strut (Front) / Coupled Torsion Beam Axle (Rear) with Dynamic Damping',
      safety: '6 Airbags Standard, Level 2 Hyundai SmartSense ADAS (19 Features), Surround View 360° Monitor with Blind View, Dual Dashcam with Front & Rear Recording, ESC, VSM, HAC, TPMS'
    },
    variants: [
      {
        name: 'N8 1.5L Turbo 6MT',
        exShowroom: 1682300,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L Turbo GDi (160 PS)',
        mileage: '18.0 km/l',
        isVFM: true,
        vfmBadge: '🔥 ACCESSIBLE 160 PS MANUAL HOT SUV',
        keyFeatures: ['160 PS Turbo GDi Engine with 6MT', 'Twin-Tip Sports Exhaust', 'R18 Diamond-Cut N Alloys', 'All-Black N Interior with Red Stitching', 'Dual Dashcam', 'Panoramic Sunroof']
      },
      {
        name: 'N8 1.5L Turbo 7DCT',
        exShowroom: 1832300,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L Turbo GDi (160 PS)',
        mileage: '18.2 km/l',
        isVFM: true,
        vfmBadge: '⚡ TOP AUTOMATIC N LINE VALUE',
        keyFeatures: ['7-Speed Dual Clutch with Paddle Shifters', 'Drive & Traction Modes', 'Panoramic Sunroof', 'Dual 10.25-inch Curved Screens', 'Twin Exhaust System', 'Red Brake Calipers']
      },
      {
        name: 'N10 1.5L Turbo 6MT',
        exShowroom: 1934300,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L Turbo GDi (160 PS)',
        mileage: '18.0 km/l',
        isVFM: false,
        keyFeatures: ['Hyundai SmartSense Level 2 ADAS Suite', 'Bose Premium 8-Speaker Audio', 'Surround View 360° Camera & Blind View', 'Front Ventilated Sport Seats', '8-Way Power Driver Seat', 'Twin-Tip Sports Exhaust']
      },
      {
        name: 'N10 1.5L Turbo 7DCT',
        exShowroom: 2034300,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L Turbo GDi (160 PS)',
        mileage: '18.2 km/l',
        isVFM: true,
        vfmBadge: '👑 FLAGSHIP N LINE PERFORMANCE',
        keyFeatures: ['Full Level 2 ADAS Suite with Smart Cruise Control', 'Lightning 7DCT with Launch Control', 'Bose 8-Speaker Audio System', 'Dual Dashcam (Front + Rear)', 'Front Ventilated Seats', 'R18 N Alloys']
      },
      {
        name: 'N10 1.5L Turbo 7DCT (Dual Tone)',
        exShowroom: 2049300,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L Turbo GDi (160 PS)',
        mileage: '18.2 km/l',
        isVFM: false,
        keyFeatures: ['Dual-Tone Contrast Black Roof & Mirrors', 'Flagship Level 2 ADAS Suite', 'Bose 8-Speaker Sound System', 'Twin-Tip Performance Exhaust', 'Ventilated Front Seats', '360° Camera']
      }
    ]
  },
  {
    id: 'hyundai-tucson',
    name: 'Hyundai Tucson',
    brand: 'Hyundai',
    tagline: 'Flagship Luxury SUV with HTRAC All-Wheel Drive & Level 2 ADAS',
    launchDate: 'Latest 4th Gen (2025–2026 Model)',
    bodyType: 'SUV',
    fuelTypes: ['Petrol', 'Diesel'],
    priceRange: '₹29.02 - ₹36.09 Lakh',
    minPrice: 2902000,
    maxPrice: 3609000,
    safetyRating: '5 Stars (Euro NCAP / Global Safety) | Level 2 Hyundai SmartSense ADAS (19 Features)',
    groundClearance: '192 mm',
    bootSpace: '540 Litres',
    waitingPeriod: '4 - 8 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/tucson/360/amazon-grey/1.webp',
    summary: 'Hyundai’s flagship luxury SUV designed to challenge European luxury crossovers. Built on the extended long-wheelbase (LWB) platform with a commanding 2,755 mm wheelbase, the Tucson features iconic Parametric Jewel hidden LED daytime running lamps seamlessly integrated into a dark chrome grille. Powertrains include a refined Nu 2.0L Petrol with 6-speed AT and a potent 186 PS / 416 Nm R 2.0L VGT Diesel with 8-speed AT and HTRAC All-Wheel Drive featuring Multi-Terrain Modes (Snow, Mud, Sand). Inside, experience dual 10.25-inch floating displays, shift-by-wire push-button transmission controls, voice-enabled smart panoramic sunroof, 8-speaker Bose audio, heated & ventilated memory seats, passenger walk-in device, and comprehensive Level 2 Hyundai SmartSense ADAS.',
    spin360: {
      totalFrames: 36,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/tucson/360',
      format: 'webp',
      defaultColor: 'amazon-grey',
      colors: [
        { id: 'amazon-grey', name: 'Amazon Grey (Hero Color)', hex: '#4E5452' },
        { id: 'polar-white', name: 'Polar White', hex: '#F4F5F7' },
        { id: 'phantom-black', name: 'Abyss Black Pearl', hex: '#0D0E10' },
        { id: 'starry-night', name: 'Starry Night', hex: '#1B2430' },
        { id: 'fiery-red', name: 'Fiery Red', hex: '#B71C1C' },
        { id: 'polar-white-dual-tone', name: 'Polar White with Phantom Black Roof', hex: 'linear-gradient(135deg, #F4F5F7 60%, #0D0E10 60%)' },
        { id: 'fiery-red-dual-tone', name: 'Fiery Red with Phantom Black Roof', hex: 'linear-gradient(135deg, #B71C1C 60%, #0D0E10 60%)' }
      ]
    },
    colors: [
      { id: 'amazon-grey', name: 'Amazon Grey (Hero Color)', hex: '#4E5452', image: 'https://ik.imagekit.io/2908vvlod/cars/tucson/360/amazon-grey/1.webp' },
      { id: 'polar-white', name: 'Polar White', hex: '#F4F5F7', image: 'https://ik.imagekit.io/2908vvlod/cars/tucson/360/polar-white/1.webp' },
      { id: 'phantom-black', name: 'Abyss Black Pearl', hex: '#0D0E10', image: 'https://ik.imagekit.io/2908vvlod/cars/tucson/360/phantom-black/1.webp' },
      { id: 'starry-night', name: 'Starry Night', hex: '#1B2430', image: 'https://ik.imagekit.io/2908vvlod/cars/tucson/360/starry-night/1.webp' },
      { id: 'fiery-red', name: 'Fiery Red', hex: '#B71C1C', image: 'https://ik.imagekit.io/2908vvlod/cars/tucson/360/fiery-red/1.webp' },
      { id: 'polar-white-dual-tone', name: 'Polar White with Phantom Black Roof', hex: 'linear-gradient(135deg, #F4F5F7 60%, #0D0E10 60%)', image: 'https://ik.imagekit.io/2908vvlod/cars/tucson/360/polar-white-dual-tone/1.webp' },
      { id: 'fiery-red-dual-tone', name: 'Fiery Red with Phantom Black Roof', hex: 'linear-gradient(135deg, #B71C1C 60%, #0D0E10 60%)', image: 'https://ik.imagekit.io/2908vvlod/cars/tucson/360/fiery-red-dual-tone/1.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Stance & Hidden DRLs', url: 'https://ik.imagekit.io/2908vvlod/cars/tucson/360/amazon-grey/1.webp' },
      { label: 'Dark Chrome Parametric Jewel Grille', url: 'https://ik.imagekit.io/2908vvlod/cars/tucson/gallery/parametric-jewel-grille-drl.webp' },
      { label: 'Parametric Side Dynamic Profile', url: 'https://ik.imagekit.io/2908vvlod/cars/tucson/gallery/parametric-dynamics-exterior.webp' },
      { label: 'Connecting LED Tail Lamps & Hidden Wiper', url: 'https://ik.imagekit.io/2908vvlod/cars/tucson/gallery/parametric-led-tail-lamps.webp' }
    ],
    gallery: [
      { title: 'Dark Chrome Parametric Jewel Grille with Hidden LED Daytime Running Lights', url: 'https://ik.imagekit.io/2908vvlod/cars/tucson/gallery/parametric-jewel-grille-drl.webp' },
      { title: 'Dual 10.25-inch Floating Cockpit Screens & Shift-by-Wire Automatic Console', url: 'https://ik.imagekit.io/2908vvlod/cars/tucson/gallery/luxury-cockpit-dual-screens.webp' },
      { title: 'Voice-Enabled Smart Panoramic Sunroof & 10-Way Power Ventilated Memory Seats', url: 'https://ik.imagekit.io/2908vvlod/cars/tucson/gallery/panoramic-sunroof-first-class.webp' },
      { title: 'Bose Premium 8-Speaker Sound System & Hyundai Bluelink 60+ Connected Features', url: 'https://ik.imagekit.io/2908vvlod/cars/tucson/gallery/bose-premium-sound-system.webp' },
      { title: 'Hyundai SmartSense Level 2 ADAS Suite with 19 Radar & Camera Safety Features', url: 'https://ik.imagekit.io/2908vvlod/cars/tucson/gallery/level-2-adas-smartsense.webp' },
      { title: 'HTRAC All-Wheel Drive System with Terrain Modes (Snow, Mud, Sand) & R 2.0L Diesel (416 Nm)', url: 'https://ik.imagekit.io/2908vvlod/cars/tucson/gallery/htrac-all-wheel-drive-modes.webp' },
      { title: 'Parametric Dynamic Side Character Lines & R18 Diamond-Cut Alloy Wheels', url: 'https://ik.imagekit.io/2908vvlod/cars/tucson/gallery/parametric-dynamics-exterior.webp' },
      { title: 'Full-Width Connecting Parametric LED Tail Lamps & Concealed Rear Wiper', url: 'https://ik.imagekit.io/2908vvlod/cars/tucson/gallery/parametric-led-tail-lamps.webp' }
    ],
    specs: {
      engineOptions: 'Nu 2.0L Petrol (156 PS @ 6,200 rpm / 192 Nm @ 4,500 rpm) | R 2.0L VGT Diesel (186 PS @ 4,000 rpm / 416 Nm @ 2,000–2,750 rpm)',
      transmissions: '6-Speed Automatic (Petrol) & 8-Speed Automatic with Shift-by-Wire (Diesel)',
      dimensions: '4630 mm (L) × 1865 mm (W) × 1665 mm (H)',
      wheelbase: '2755 mm (Long Wheelbase LWB Architecture)',
      fuelTank: '54 Litres',
      bootSpace: '540 Litres (Expandable with 60:40 Split Fold)',
      brakes: 'All 4 Disc Brakes with ABS, EBD & Electronic Parking Brake (EPB) with Auto Hold',
      suspension: 'MacPherson Strut (Front) / Multi-Link (Rear) with High-Performance Dampers',
      safety: '6 Airbags Standard, Level 2 Hyundai SmartSense ADAS (19 Features), Surround View 360° Monitor with Blind View Monitor, ESC, VSM, HAC, DBC, TPMS Highline, All 4 Disc Brakes'
    },
    variants: [
      {
        name: 'Platinum 2.0L Petrol 6AT',
        exShowroom: 2902000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '2.0L Nu Petrol (156 PS)',
        mileage: '13.0 km/l',
        isVFM: true,
        vfmBadge: '💎 LUXURY ENTRY SWEET SPOT',
        keyFeatures: ['Nu 2.0L MPI Petrol with 6-Speed AT', 'Dual 10.25-inch Floating Screens', 'Panoramic Sunroof', '6 Airbags Standard & ESP', 'Dual Zone Climate Control', 'Wireless Phone Charging']
      },
      {
        name: 'Signature 2.0L Petrol 6AT',
        exShowroom: 3152000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '2.0L Nu Petrol (156 PS)',
        mileage: '13.0 km/l',
        isVFM: false,
        keyFeatures: ['Full Level 2 Hyundai SmartSense ADAS Suite', 'Bose Premium 8-Speaker Audio System', 'Surround View 360° Monitor & Blind View Monitor', '10-Way Power Driver Seat with Memory', 'Heated & Ventilated Front Seats', 'Hands-Free Smart Power Tailgate']
      },
      {
        name: 'Platinum 2.0L Diesel 8AT',
        exShowroom: 3155000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.0L R VGT Diesel (186 PS / 416 Nm)',
        mileage: '15.4 km/l',
        isVFM: true,
        vfmBadge: '🚀 TORQUE MONSTER TOURING SUV',
        keyFeatures: ['186 PS / 416 Nm R 2.0L Diesel with 8-Speed AT', 'Shift-by-Wire Push-Button Gear Controls', 'Smart Panoramic Sunroof', 'Dual 10.25-inch Floating Cockpit Displays', 'Drive Modes (Eco, Normal, Sport, Smart)', '18-inch Diamond-Cut Alloys']
      },
      {
        name: 'Signature 2.0L Diesel 8AT',
        exShowroom: 3425000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.0L R VGT Diesel (186 PS / 416 Nm)',
        mileage: '15.4 km/l',
        isVFM: true,
        vfmBadge: '👑 FIRST-CLASS 2WD DIESEL CRUISER',
        keyFeatures: ['Full Level 2 Hyundai SmartSense ADAS (19 Features)', 'Bose Premium 8-Speaker Sound System', 'Surround View 360° & Blind View Monitor', 'Heated & Ventilated Power Front Seats with Memory', 'Passenger Walk-In Device', 'Smart Power Tailgate']
      },
      {
        name: 'Signature 2.0L Diesel 8AT 4WD',
        exShowroom: 3594000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.0L R VGT Diesel (186 PS / 416 Nm)',
        mileage: '14.8 km/l',
        isVFM: true,
        vfmBadge: '🏔️ ULTIMATE ALL-WEATHER HTRAC 4WD',
        keyFeatures: ['HTRAC All-Wheel Drive with 4WD Lock Mode', 'Multi-Terrain Modes (Snow, Mud, Sand)', 'Full Level 2 SmartSense ADAS Suite', 'Bose 8-Speaker Audio System', '360° Surround View Monitor', 'Smart Panoramic Sunroof']
      },
      {
        name: 'Signature 2.0L Diesel 8AT 4WD (Dual Tone)',
        exShowroom: 3609000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.0L R VGT Diesel (186 PS / 416 Nm)',
        mileage: '14.8 km/l',
        isVFM: false,
        keyFeatures: ['Exclusive Dual-Tone Phantom Black Contrast Roof', 'HTRAC All-Wheel Drive with Terrain Modes', 'Flagship Level 2 SmartSense ADAS Suite', 'Bose 8-Speaker Soundstage', 'Heated & Ventilated Memory Seats', 'Smart Power Tailgate']
      }
    ]
  },
  {
    id: 'hyundai-bayon',
    name: 'Hyundai Bayon',
    brand: 'Hyundai',
    tagline: 'Tech-Forward Urban Crossover SUV with Level 2 Pro ADAS & Dual 12.3-inch Curved Displays',
    launchDate: 'October 2026 (All-New Launch)',
    bodyType: 'SUV',
    fuelTypes: ['Petrol'],
    priceRange: '₹9.99 - ₹18.00 Lakh',
    minPrice: 999900,
    maxPrice: 1800000,
    safetyRating: 'Hyundai SmartSense Level 2 Pro ADAS (23 Features) | 6 Airbags Standard',
    groundClearance: '185 mm',
    bootSpace: '411 Litres',
    waitingPeriod: '4 - 10 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/bayon/360/atlas-white/1.webp',
    summary: 'The all-new Hyundai BAYON is Hyundai’s latest intelligent urban crossover SUV positioned between the Venue and Creta. Featuring bold crossover proportions with signature arrow-shaped LED daytime running lights, dual LED projector lamps, wide gloss-black parametric grille, and connecting LED tail lamps with an aerodynamic rear spoiler. Inside, the cabin features dual integrated 31.24 cm (12.3-inch) curved panoramic displays accelerated by NVIDIA ccNC architecture with Generative AI voice assistant, voice-controlled smart panoramic sunroof, Bose Premium 8-speaker sound system with subwoofer, ventilated front seats, electric 8-way driver seat, factory-fitted dual dashcam, and Hyundai SmartSense Level 2 Pro ADAS with 23 autonomous safety features including Highway Driving Assist and Navigation-based Smart Cruise Control.',
    spin360: {
      totalFrames: 36,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/bayon/360',
      format: 'webp',
      defaultColor: 'atlas-white',
      colors: [
        { id: 'atlas-white', name: 'Atlas White', hex: '#F4F5F7' },
        { id: 'titanium-black', name: 'Titanium Black', hex: '#0D0E10' },
        { id: 'fiery-red', name: 'Fiery Red', hex: '#B71C1C' },
        { id: 'ecotronic-grey', name: 'Ecotronic Grey', hex: '#545B62' },
        { id: 'golden-bronze', name: 'Golden Bronze', hex: '#8D6942' },
        { id: 'classy-blue', name: 'Classy Blue', hex: '#1E3A5F' },
        { id: 'titanium-black-matte', name: 'Titanium Black Matte', hex: '#1A1B1E' },
        { id: 'classy-blue-matte', name: 'Classy Blue Matte', hex: '#2B3D52' },
        { id: 'atlas-white-black-roof', name: 'Atlas White with Titanium Black Roof', hex: 'linear-gradient(135deg, #F4F5F7 60%, #0D0E10 60%)' },
        { id: 'fiery-red-black-roof', name: 'Fiery Red with Titanium Black Roof', hex: 'linear-gradient(135deg, #B71C1C 60%, #0D0E10 60%)' }
      ]
    },
    colors: [
      { id: 'atlas-white', name: 'Atlas White', hex: '#F4F5F7', image: 'https://ik.imagekit.io/2908vvlod/cars/bayon/360/atlas-white/1.webp' },
      { id: 'titanium-black', name: 'Titanium Black', hex: '#0D0E10', image: 'https://ik.imagekit.io/2908vvlod/cars/bayon/360/titanium-black/1.webp' },
      { id: 'fiery-red', name: 'Fiery Red', hex: '#B71C1C', image: 'https://ik.imagekit.io/2908vvlod/cars/bayon/360/fiery-red/1.webp' },
      { id: 'ecotronic-grey', name: 'Ecotronic Grey', hex: '#545B62', image: 'https://ik.imagekit.io/2908vvlod/cars/bayon/360/ecotronic-grey/1.webp' },
      { id: 'golden-bronze', name: 'Golden Bronze', hex: '#8D6942', image: 'https://ik.imagekit.io/2908vvlod/cars/bayon/360/golden-bronze/1.webp' },
      { id: 'classy-blue', name: 'Classy Blue', hex: '#1E3A5F', image: 'https://ik.imagekit.io/2908vvlod/cars/bayon/360/classy-blue/1.webp' },
      { id: 'titanium-black-matte', name: 'Titanium Black Matte', hex: '#1A1B1E', image: 'https://ik.imagekit.io/2908vvlod/cars/bayon/360/titanium-black-matte/1.webp' },
      { id: 'classy-blue-matte', name: 'Classy Blue Matte', hex: '#2B3D52', image: 'https://ik.imagekit.io/2908vvlod/cars/bayon/360/classy-blue-matte/1.webp' },
      { id: 'atlas-white-black-roof', name: 'Atlas White with Titanium Black Roof', hex: 'linear-gradient(135deg, #F4F5F7 60%, #0D0E10 60%)', image: 'https://ik.imagekit.io/2908vvlod/cars/bayon/360/atlas-white-black-roof/1.webp' },
      { id: 'fiery-red-black-roof', name: 'Fiery Red with Titanium Black Roof', hex: 'linear-gradient(135deg, #B71C1C 60%, #0D0E10 60%)', image: 'https://ik.imagekit.io/2908vvlod/cars/bayon/360/fiery-red-black-roof/1.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Stance & LED DRLs', url: 'https://ik.imagekit.io/2908vvlod/cars/bayon/360/atlas-white/1.webp' },
      { label: 'Dual 12.3-inch Curved Displays & ccNC', url: 'https://ik.imagekit.io/2908vvlod/cars/bayon/gallery/dual-12-inch-curved-displays.webp' },
      { label: 'R17 Diamond-Cut Alloy Wheels', url: 'https://ik.imagekit.io/2908vvlod/cars/bayon/gallery/r17-diamond-cut-alloy-wheels.webp' },
      { label: 'Rear Connecting LED Tail Lamps & Spoiler', url: 'https://ik.imagekit.io/2908vvlod/cars/bayon/gallery/connecting-led-tail-lamps-spoiler.webp' }
    ],
    gallery: [
      { title: 'Refined Modern Cabin with Olive Grey Theme & Dual Panoramic Curved Displays', url: 'https://ik.imagekit.io/2908vvlod/cars/bayon/gallery/bayon-luxury-cockpit-interior.webp' },
      { title: 'NVIDIA ccNC Accelerated Dual 31.24 cm (12.3-inch) Navigation & Digital Cluster', url: 'https://ik.imagekit.io/2908vvlod/cars/bayon/gallery/dual-12-inch-curved-displays.webp' },
      { title: 'Signature Arrow-Shaped LED Daytime Running Lights & Wide Parametric Front Grille', url: 'https://ik.imagekit.io/2908vvlod/cars/bayon/gallery/signature-led-drls-front-grille.webp' },
      { title: 'R17 (215/55 R17) Diamond-Cut Alloy Wheels & Sculpted Geometric Wheel Arches', url: 'https://ik.imagekit.io/2908vvlod/cars/bayon/gallery/r17-diamond-cut-alloy-wheels.webp' },
      { title: 'Hyundai SmartSense Level 2 Pro ADAS with Highway Driving Assist (HDA)', url: 'https://ik.imagekit.io/2908vvlod/cars/bayon/gallery/highway-driving-assist-adas.webp' },
      { title: 'Smart Cruise Control with Stop & Go (SCC with S&G) & Lane Following Assist', url: 'https://ik.imagekit.io/2908vvlod/cars/bayon/gallery/smart-cruise-control-stop-and-go.webp' },
      { title: 'Factory-Fitted Dual Dashcam with Front & Cabin Road Recording', url: 'https://ik.imagekit.io/2908vvlod/cars/bayon/gallery/factory-fitted-dual-dashcam.webp' },
      { title: 'Full-Width Connecting LED Tail Lamps & Aerodynamic Sport Rear Spoiler', url: 'https://ik.imagekit.io/2908vvlod/cars/bayon/gallery/connecting-led-tail-lamps-spoiler.webp' }
    ],
    specs: {
      engineOptions: '1.5L MPi 4-Cylinder Petrol (115 PS @ 6,300 rpm / 143.8 Nm @ 4,500 rpm)',
      transmissions: '6-Speed Manual (6MT) & Intelligent Variable Transmission (iVT) with Paddle Shifters',
      dimensions: '4245 mm (L) × 1810 mm (W) × 1605 mm (H)',
      wheelbase: '2600 mm',
      fuelTank: '43 Litres',
      bootSpace: '411 Litres',
      brakes: 'Front Disc & Rear Disc (HX 8 / HX 10) with ABS, EBD & Electronic Parking Brake (EPB) with Auto Hold',
      suspension: 'Independent MacPherson Strut with Coil Spring (Front) / Coupled Torsion Beam Axle (Rear)',
      safety: '6 Airbags Standard, Hyundai SmartSense Level 2 Pro ADAS (23 Features), Surround View 360° Monitor, Blind-Spot View Monitor, Dual Dashcam, ESC, VSM, HAC, TPMS'
    },
    variants: [
      {
        name: 'HX 2 1.5L 6MT',
        exShowroom: 999900,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L MPi Petrol (115 PS)',
        mileage: '17.8 km/l',
        isVFM: true,
        vfmBadge: '🔥 INCREDIBLE SUB-₹10L ENTRY VALUE',
        keyFeatures: ['1.5L 4-Cylinder Petrol Engine (115 PS)', '6 Airbags Standard & ESC', 'LED Headlamps & LED DRLs', 'Front & Rear Power Windows', 'Manual AC with Rear AC Vents', 'R16 Wheels with Wheel Covers']
      },
      {
        name: 'HX 3 1.5L 6MT',
        exShowroom: 1090000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L MPi Petrol (115 PS)',
        mileage: '17.8 km/l',
        isVFM: true,
        vfmBadge: '⚡ BALANCED TECH PACK',
        keyFeatures: ['10.25-inch ccNC Touchscreen Infotainment', 'Wireless Apple CarPlay & Android Auto', 'Smart Key with Push Button Start', 'Steering Mounted Controls', 'Rear Parking Camera', 'Electrically Adjustable Mirrors']
      },
      {
        name: 'HX 3+ 1.5L 6MT',
        exShowroom: 1180000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L MPi Petrol (115 PS)',
        mileage: '17.8 km/l',
        isVFM: false,
        keyFeatures: ['Electric Sunroof', 'Roof Rails', 'R17 Styled Steel Wheels', 'Rear Defogger with Timer', 'LED Daytime Running Lamps', 'Auto Headlamps']
      },
      {
        name: 'HX 5 1.5L 6MT',
        exShowroom: 1245000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L MPi Petrol (115 PS)',
        mileage: '17.8 km/l',
        isVFM: true,
        vfmBadge: '💎 SWEET SPOT MANUAL VALUE',
        keyFeatures: ['Voice-Controlled Panoramic Sunroof', 'Hyundai Bluelink Connected Car Tech', 'Over-The-Air (C-OTA) Vehicle Updates', 'Fully Automatic Temperature Control (FATC)', 'Wireless Smartphone Charger', 'Cruise Control']
      },
      {
        name: 'HX 5 1.5L iVT',
        exShowroom: 1385000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L MPi Petrol (115 PS)',
        mileage: '17.5 km/l',
        isVFM: true,
        vfmBadge: '✨ BEST AUTOMATIC PANORAMIC VALUE',
        keyFeatures: ['Intelligent Variable Transmission (iVT)', 'Steering Paddle Shifters & Drive Modes', 'Voice-Controlled Panoramic Sunroof', 'Bluelink Connected Suite', 'Wireless Phone Charger', 'Rear Disc Brakes']
      },
      {
        name: 'HX 6 1.5L 6MT',
        exShowroom: 1357000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L MPi Petrol (115 PS)',
        mileage: '17.8 km/l',
        isVFM: false,
        keyFeatures: ['R17 Diamond-Cut Alloy Wheels', 'Dual LED Projector Headlamps', 'Ambient Mood Lighting', 'Leatherette Wrapped Steering Wheel & Gear Knob', 'Sliding Front Armrest', 'Rear Wiper & Washer']
      },
      {
        name: 'HX 6 1.5L iVT',
        exShowroom: 1497000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L MPi Petrol (115 PS)',
        mileage: '17.5 km/l',
        isVFM: false,
        keyFeatures: ['Smooth iVT Automatic with Paddle Shifters', 'R17 Diamond-Cut Alloys', 'Voice Panoramic Sunroof', 'Dual LED Projectors', 'Ambient Lighting', 'Automatic Climate Control']
      },
      {
        name: 'HX 8 1.5L 6MT',
        exShowroom: 1510000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L MPi Petrol (115 PS)',
        mileage: '17.8 km/l',
        isVFM: true,
        vfmBadge: '🌟 LUXURY COMFORT SWEET SPOT',
        keyFeatures: ['Front Row Ventilated Seats', '8-Way Power Adjustable Driver Seat', 'Factory-Fitted Dual Dashcam', 'Surround View 360° Monitor', 'Leatherette Seat Upholstery', 'All 4 Disc Brakes']
      },
      {
        name: 'HX 8 1.5L iVT',
        exShowroom: 1654000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L MPi Petrol (115 PS)',
        mileage: '17.5 km/l',
        isVFM: false,
        keyFeatures: ['Front Ventilated Seats & 8-Way Power Driver Seat', 'Surround View 360° Camera', 'Dual Dashcam', 'Electronic Parking Brake with Auto Hold', 'Voice Panoramic Sunroof', 'R17 Diamond-Cut Alloys']
      },
      {
        name: 'HX 10 1.5L 6MT',
        exShowroom: 1665000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L MPi Petrol (115 PS)',
        mileage: '17.8 km/l',
        isVFM: false,
        keyFeatures: ['Level 2 Pro ADAS Suite (23 Features)', 'Dual 12.3-inch Curved Displays & ccNC', 'Generative AI Voice Assistant', 'Bose Premium 8-Speaker Audio with Subwoofer', 'Blind-Spot View Monitor', 'Front Ventilated Seats']
      },
      {
        name: 'HX 10 1.5L iVT',
        exShowroom: 1800000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L MPi Petrol (115 PS)',
        mileage: '17.5 km/l',
        isVFM: true,
        vfmBadge: '👑 FLAGSHIP PRO ADAS & NVIDIA ccNC',
        keyFeatures: ['Full Level 2 Pro ADAS with Highway Driving Assist (HDA)', 'Smart Cruise Control with Stop & Go (SCC)', 'NVIDIA ccNC Dual 12.3-inch Curved Screens', 'Bose Premium 8-Speaker Audio System', 'Front Ventilated Power Seats', 'Panoramic Sunroof & 360° Camera']
      }
    ]
  },
  {
    id: 'hyundai-ioniq-5',
    name: 'Hyundai Ioniq 5',
    brand: 'Hyundai',
    tagline: 'World Car of the Year Flagship Electric SUV on 800V E-GMP Architecture with V2L',
    launchDate: 'Latest 2025–2026 Model (Upgraded 84 kWh Battery)',
    bodyType: 'SUV',
    fuelTypes: ['Electric'],
    priceRange: '₹46.05 - ₹55.70 Lakh',
    minPrice: 4605000,
    maxPrice: 5570000,
    safetyRating: '5 Stars (Euro NCAP) | Hyundai SmartSense Level 2 ADAS (21 Features)',
    groundClearance: '163 mm',
    bootSpace: '527 Litres (+ 57L Frunk)',
    waitingPeriod: '2 - 6 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/ioniq-5/360/gravity-gold-matte/1.webp',
    summary: 'The internationally acclaimed World Car of the Year, Hyundai IONIQ 5 is built on the revolutionary Electric Global Modular Platform (E-GMP) featuring an ultra-fast 800V charging architecture (10% to 80% charge in just 18 minutes on a 350 kW DC charger). Powered by a permanent magnet synchronous motor delivering rear-wheel-drive dynamics with up to 228.5 PS / 350 Nm and an ARAI-certified range of up to 631 km. The cabin redefines automotive interiors as a customizable Smart Living Space with eco-processed leather, a movable Universal Island sliding console, front relaxation seats with calf support, fixed glass Vision Roof, Vehicle-to-Load (V2L) bidirectional power supply up to 3.6 kW, and Hyundai SmartSense Level 2 ADAS with 21 advanced driver assistance features.',
    spin360: {
      totalFrames: 36,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/ioniq-5/360',
      format: 'webp',
      defaultColor: 'gravity-gold-matte',
      colors: [
        { id: 'gravity-gold-matte', name: 'Gravity Gold Matte (Hero Color)', hex: '#B59A7A' },
        { id: 'optic-white', name: 'Optic White', hex: '#F5F6F8' },
        { id: 'midnight-black-pearl', name: 'Midnight Black Pearl', hex: '#0E1012' },
        { id: 'titan-grey', name: 'Titan Grey', hex: '#52565A' }
      ]
    },
    colors: [
      { id: 'gravity-gold-matte', name: 'Gravity Gold Matte (Hero Color)', hex: '#B59A7A', image: 'https://ik.imagekit.io/2908vvlod/cars/ioniq-5/360/gravity-gold-matte/1.webp' },
      { id: 'optic-white', name: 'Optic White', hex: '#F5F6F8', image: 'https://ik.imagekit.io/2908vvlod/cars/ioniq-5/360/optic-white/1.webp' },
      { id: 'midnight-black-pearl', name: 'Midnight Black Pearl', hex: '#0E1012', image: 'https://ik.imagekit.io/2908vvlod/cars/ioniq-5/360/midnight-black-pearl/1.webp' },
      { id: 'titan-grey', name: 'Titan Grey', hex: '#52565A', image: 'https://ik.imagekit.io/2908vvlod/cars/ioniq-5/360/titan-grey/1.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Stance & Parametric Pixels', url: 'https://ik.imagekit.io/2908vvlod/cars/ioniq-5/360/gravity-gold-matte/1.webp' },
      { label: 'Futuristic Living Space Cabin & Screens', url: 'https://ik.imagekit.io/2908vvlod/cars/ioniq-5/gallery/futuristic-living-space-cockpit.webp' },
      { label: 'R20 Parametric Aero Alloy Wheels', url: 'https://ik.imagekit.io/2908vvlod/cars/ioniq-5/gallery/r20-parametric-aero-alloy-wheels.webp' },
      { label: 'Parametric Pixel LED Tail Lights', url: 'https://ik.imagekit.io/2908vvlod/cars/ioniq-5/gallery/parametric-pixel-led-tail-lights.webp' }
    ],
    gallery: [
      { title: 'Futuristic Living Space Cabin with Sliding Universal Island & Dual 12.3-inch Screens', url: 'https://ik.imagekit.io/2908vvlod/cars/ioniq-5/gallery/futuristic-living-space-cockpit.webp' },
      { title: 'Signature Parametric Pixel LED Headlamps with Clamshell Aerodynamic Hood', url: 'https://ik.imagekit.io/2908vvlod/cars/ioniq-5/gallery/parametric-pixel-led-headlamps.webp' },
      { title: 'Parametric Pixel LED Tail Lights & Integrated Active Rear Aerodynamic Spoiler', url: 'https://ik.imagekit.io/2908vvlod/cars/ioniq-5/gallery/parametric-pixel-led-tail-lights.webp' },
      { title: '20-inch (255/45 R20) Parametric Pixel Geometric Aero Alloy Wheels', url: 'https://ik.imagekit.io/2908vvlod/cars/ioniq-5/gallery/r20-parametric-aero-alloy-wheels.webp' },
      { title: 'Vehicle-to-Load (V2L) Inside & Outside Power Output (Powers Appliances up to 3.6 kW)', url: 'https://ik.imagekit.io/2908vvlod/cars/ioniq-5/gallery/vehicle-to-load-v2l-power.webp' },
      { title: 'Fixed Glass Vision Roof with Power Sunblind & Acoustic Sound Absorption', url: 'https://ik.imagekit.io/2908vvlod/cars/ioniq-5/gallery/vision-roof-panoramic-glass.webp' },
      { title: 'Premium Relaxation Front Seats with Power Calf Support & Memory Function', url: 'https://ik.imagekit.io/2908vvlod/cars/ioniq-5/gallery/relaxation-ventilated-memory-seats.webp' },
      { title: 'Bose Premium 8-Speaker Audio System with Virtual Engine Sound System (VESS)', url: 'https://ik.imagekit.io/2908vvlod/cars/ioniq-5/gallery/bose-premium-8-speaker-audio.webp' }
    ],
    specs: {
      engineOptions: 'Rear-Mounted Permanent Magnet Synchronous Motor (PMSM) (228.5 PS / 350 Nm) | 84 kWh Liquid-Cooled Lithium-Ion Battery (631 km ARAI Range)',
      transmissions: 'Single-Speed Reduction Gear (Automatic) with Column-Mounted Shift-by-Wire & Paddle Shifter Regenerative Braking',
      dimensions: '4655 mm (L) × 1890 mm (W) × 1625 mm (H)',
      wheelbase: '3000 mm (Longest Wheelbase in its Class)',
      fuelTank: '84 kWh High-Voltage Battery (Supports 800V Ultra-Fast DC Charging 10-80% in 18 mins)',
      bootSpace: '527 Litres (Rear) + 57 Litres (Front Frunk)',
      brakes: 'All 4 Disc Brakes with Smart Regenerative Braking System (i-Pedal) & EPB with Auto Hold',
      suspension: 'MacPherson Strut (Front) / Multi-Link (Rear) with High-Frequency Damper Response',
      safety: '6 Airbags, Level 2 Hyundai SmartSense ADAS (21 Features), Surround View 360° Camera with Blind View Monitor, PCA-R, ESC, VSM, HAC, MCB, TPMS Highline'
    },
    variants: [
      {
        name: 'Long Range RWD 72.6 kWh',
        exShowroom: 4605000,
        fuel: 'Electric',
        trans: 'Automatic',
        engine: 'Permanent Magnet Synchronous Motor (217 PS / 350 Nm)',
        mileage: '631 km/charge',
        isVFM: true,
        vfmBadge: '⚡ WORLD CAR OF THE YEAR SWEET SPOT',
        keyFeatures: ['72.6 kWh Battery (631 km ARAI Range)', '800V Ultra-Fast Charging Architecture (10-80% in 18 min)', 'Full Level 2 Hyundai SmartSense ADAS (21 Features)', 'V2L (Vehicle-to-Load: Inside & Outside up to 3.6 kW)', 'Front Relaxation Seats with Calf Support', 'Vision Panoramic Glass Roof', 'Bose 8-Speaker Sound System']
      },
      {
        name: 'Long Range RWD 84 kWh',
        exShowroom: 5570000,
        fuel: 'Electric',
        trans: 'Automatic',
        engine: 'High-Output PMSM Motor (228.5 PS / 350 Nm)',
        mileage: '654 km/charge',
        isVFM: false,
        keyFeatures: ['Extended 84 kWh High-Capacity Battery Pack', 'Upgraded 228.5 PS Output with 350 Nm Instant Torque', 'NVIDIA ccNC Infotainment System', 'Digital Centre Mirror & Dual 12.3-inch Screens', 'Surround View 360° Monitor with Blind View', 'Sliding Universal Island Console', 'R20 Aero Alloy Wheels']
      }
    ]
  },
  {
    id: 'hyundai-venue-n-line',
    name: 'Hyundai Venue N Line',
    brand: 'Hyundai',
    tagline: 'WRC-Inspired Hot Compact SUV with 120 PS Turbo GDi, Sporty Dual Exhaust & Level 2 ADAS',
    launchDate: 'Latest 2025–2026 Model (With Level 2 SmartSense ADAS)',
    bodyType: 'SUV',
    fuelTypes: ['Petrol'],
    priceRange: '₹10.66 - ₹15.67 Lakh',
    minPrice: 1066000,
    maxPrice: 1567000,
    safetyRating: '5 Stars (Euro NCAP / Bharat NCAP Ready) | Hyundai SmartSense Level 2 ADAS & 6 Airbags',
    groundClearance: '195 mm',
    bootSpace: '350 Litres',
    waitingPeriod: '3 - 8 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/venue-n-line/360/hazel-blue/1.webp',
    summary: 'The Hyundai Venue N Line brings World Rally Championship (WRC) motorsport pedigree to the compact SUV segment. Powered by a punchy 1.0L Kappa Turbo GDi petrol engine producing 120 PS and 172 Nm of torque, it is paired with either a slick 6-speed manual or an ultra-responsive 7-speed Dual Clutch Transmission (7DCT) equipped with steering-mounted paddle shifters. Engineered for enthusiastic drivers, the Venue N Line features a sport-tuned suspension with firmer damping for razor-sharp handling, weighted steering feedback, all-4 disc brakes with striking red calipers, and a dual twin-tip performance exhaust tuned to deliver an intoxicating acoustic soundtrack. Inside, the race-inspired cabin boasts all-black leatherette upholstery with red contrast stitching, embossed N branding, sunrise red ambient lighting, sporty brushed metal pedals, and a bespoke N-badged steering wheel and gear shifter. In its range-topping N10 trim, it elevates technology with dual 12.3-inch curved panoramic displays running the next-gen NVIDIA ccNC platform, Bose 8-speaker audio, smart aroma diffuser, front ventilated seats, 4-way power driver seat, factory dual dashcam, voice-controlled sunroof, and a comprehensive Level 2 Hyundai SmartSense ADAS suite with Smart Cruise Control Stop & Go, Forward Collision Avoidance, and 360° Surround View Monitor.',
    spin360: {
      totalFrames: 36,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/venue-n-line/360',
      format: 'webp',
      defaultColor: 'hazel-blue',
      colors: [
        { id: 'hazel-blue', name: 'Thunder Blue (Hazel Blue)', hex: '#1B3B8A' },
        { id: 'atlas-white', name: 'Atlas White', hex: '#F4F5F7' },
        { id: 'abyss-black', name: 'Shadow Black (Abyss Black)', hex: '#0D0E10' },
        { id: 'dragon-red', name: 'Dragon Red', hex: '#B71C1C' },
        { id: 'titan-grey', name: 'Titan Grey', hex: '#545B62' },
        { id: 'hazel-blue-dual-tone', name: 'Thunder Blue with Shadow Black Roof', hex: 'linear-gradient(135deg, #1B3B8A 60%, #0D0E10 60%)' },
        { id: 'atlas-white-dual-tone', name: 'Atlas White with Shadow Black Roof', hex: 'linear-gradient(135deg, #F4F5F7 60%, #0D0E10 60%)' },
        { id: 'dragon-red-dual-tone', name: 'Dragon Red with Shadow Black Roof', hex: 'linear-gradient(135deg, #B71C1C 60%, #0D0E10 60%)' }
      ]
    },
    colors: [
      { id: 'hazel-blue', name: 'Thunder Blue (Hazel Blue)', hex: '#1B3B8A', image: 'https://ik.imagekit.io/2908vvlod/cars/venue-n-line/360/hazel-blue/1.webp' },
      { id: 'atlas-white', name: 'Atlas White', hex: '#F4F5F7', image: 'https://ik.imagekit.io/2908vvlod/cars/venue-n-line/360/atlas-white/1.webp' },
      { id: 'abyss-black', name: 'Shadow Black (Abyss Black)', hex: '#0D0E10', image: 'https://ik.imagekit.io/2908vvlod/cars/venue-n-line/360/abyss-black/1.webp' },
      { id: 'dragon-red', name: 'Dragon Red', hex: '#B71C1C', image: 'https://ik.imagekit.io/2908vvlod/cars/venue-n-line/360/dragon-red/1.webp' },
      { id: 'titan-grey', name: 'Titan Grey', hex: '#545B62', image: 'https://ik.imagekit.io/2908vvlod/cars/venue-n-line/360/titan-grey/1.webp' },
      { id: 'hazel-blue-dual-tone', name: 'Thunder Blue with Shadow Black Roof', hex: 'linear-gradient(135deg, #1B3B8A 60%, #0D0E10 60%)', image: 'https://ik.imagekit.io/2908vvlod/cars/venue-n-line/360/hazel-blue-dual-tone/1.webp' },
      { id: 'atlas-white-dual-tone', name: 'Atlas White with Shadow Black Roof', hex: 'linear-gradient(135deg, #F4F5F7 60%, #0D0E10 60%)', image: 'https://ik.imagekit.io/2908vvlod/cars/venue-n-line/360/atlas-white-dual-tone/1.webp' },
      { id: 'dragon-red-dual-tone', name: 'Dragon Red with Shadow Black Roof', hex: 'linear-gradient(135deg, #B71C1C 60%, #0D0E10 60%)', image: 'https://ik.imagekit.io/2908vvlod/cars/venue-n-line/360/dragon-red-dual-tone/1.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Track Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/venue-n-line/360/hazel-blue/1.webp' },
      { label: 'Dual Twin-Tip Sports Exhaust', url: 'https://ik.imagekit.io/2908vvlod/cars/venue-n-line/gallery/dual-twin-tip-sports-exhaust.webp' },
      { label: 'R17 Diamond-Cut Alloys & Red Calipers', url: 'https://ik.imagekit.io/2908vvlod/cars/venue-n-line/gallery/r17-diamond-cut-alloys-red-calipers.webp' },
      { label: 'Dark Chrome N Grille & Red Splitter', url: 'https://ik.imagekit.io/2908vvlod/cars/venue-n-line/gallery/dark-chrome-n-grille-red-splitter.webp' }
    ],
    gallery: [
      { title: 'Dual Twin-Tip Sports Exhaust with Tuned Performance Exhaust Note', url: 'https://ik.imagekit.io/2908vvlod/cars/venue-n-line/gallery/dual-twin-tip-sports-exhaust.webp' },
      { title: 'Dark Chrome Parametric Grille with Exclusive N Line Emblem & Red Bumper Splitter', url: 'https://ik.imagekit.io/2908vvlod/cars/venue-n-line/gallery/dark-chrome-n-grille-red-splitter.webp' },
      { title: 'R17 (215/55 R17) Diamond-Cut Alloy Wheels with N Emblem & All-4 Red Brake Calipers', url: 'https://ik.imagekit.io/2908vvlod/cars/venue-n-line/gallery/r17-diamond-cut-alloys-red-calipers.webp' },
      { title: 'Perforated Leather 3-Spoke N Steering Wheel with Steering Paddle Shifters', url: 'https://ik.imagekit.io/2908vvlod/cars/venue-n-line/gallery/leather-n-steering-wheel-paddle-shifters.webp' },
      { title: 'Sporty All-Black Leatherette Seats with Red Contrast Stitching & Embossed N Branding', url: 'https://ik.imagekit.io/2908vvlod/cars/venue-n-line/gallery/sporty-black-leatherette-seats-n-branding.webp' },
      { title: 'Sporty Brushed Metal Pedals for Track-Inspired Driving Ergonomics', url: 'https://ik.imagekit.io/2908vvlod/cars/venue-n-line/gallery/sporty-brushed-metal-pedals.webp' },
      { title: 'Hyundai SmartSense Level 2 ADAS with Forward Collision Avoidance, Lane Keep & Driver Attention', url: 'https://ik.imagekit.io/2908vvlod/cars/venue-n-line/gallery/hyundai-smartsense-level-2-adas.webp' },
      { title: 'Aerodynamic Wing-Type Rear Spoiler & Connecting Horizon LED Tail Lamps', url: 'https://ik.imagekit.io/2908vvlod/cars/venue-n-line/gallery/aerodynamic-wing-spoiler-led-tail-lamp.webp' }
    ],
    specs: {
      engineOptions: '1.0L Kappa Turbo GDi Petrol (3 Cylinders, 120 PS @ 6000 rpm / 172 Nm @ 1500–4000 rpm)',
      transmissions: '6-Speed Manual (6MT) & 7-Speed Dual Clutch Transmission (7DCT) with Paddle Shifters',
      dimensions: '3995 mm (L) × 1800 mm (W) × 1665 mm (H) (with Roof Rails)',
      wheelbase: '2520 mm',
      fuelTank: '45 Litres',
      bootSpace: '350 Litres',
      brakes: 'All 4 Disc Brakes (Front & Rear Discs with Sporty Red Calipers)',
      suspension: 'McPherson Strut with Coil Spring (Front) / Coupled Torsion Beam Axle (Rear) with Sport-Tuned Firm Dampers',
      safety: '6 Airbags Standard, Hyundai SmartSense Level 2 ADAS (FCA with Junction Turning, BCA, LKA, SCC with Stop & Go), All 4 Discs, Dual Dashcam, 360° Surround View Monitor, ESC, VSM, HAC, TPMS Highline'
    },
    variants: [
      {
        name: 'N6 1.0L Turbo 6MT',
        exShowroom: 1066000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L Kappa Turbo GDi (120 PS / 172 Nm)',
        mileage: '18.0 km/l',
        isVFM: false,
        keyFeatures: ['1.0L Turbo GDi Petrol (120 PS / 172 Nm)', '6-Speed Manual Gearbox', 'All 4 Disc Brakes with Red Calipers', '6 Airbags Standard', '26.03 cm (10.25") ccNC Infotainment with Wireless Android Auto & Apple CarPlay', 'R17 Diamond Cut N Alloys', 'Twin Tip Sports Exhaust with Tuned Note', 'Electric Parking Brake with Auto Hold']
      },
      {
        name: 'N6 1.0L Turbo 6MT (Dual Tone)',
        exShowroom: 1084000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L Kappa Turbo GDi (120 PS / 172 Nm)',
        mileage: '18.0 km/l',
        isVFM: false,
        keyFeatures: ['Dual Tone Styling with Shadow Black Roof', '1.0L Turbo GDi (120 PS / 172 Nm)', '6-Speed Manual Gearbox', 'All 4 Disc Brakes with Red Calipers', '6 Airbags Standard', '26.03 cm ccNC Infotainment', 'R17 Diamond Cut N Alloys', 'Twin Tip Sports Exhaust']
      },
      {
        name: 'N6 1.0L Turbo 7DCT',
        exShowroom: 1156000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.0L Kappa Turbo GDi (120 PS / 172 Nm)',
        mileage: '18.3 km/l',
        isVFM: true,
        vfmBadge: '🔥 PERFORMANCE VALUE SWEET SPOT',
        keyFeatures: ['7-Speed Dual Clutch Transmission (7DCT)', 'Steering Wheel Paddle Shifters', 'All 4 Disc Brakes with Red Calipers', '6 Airbags Standard', '26.03 cm (10.25") ccNC Infotainment with Wireless Phone Projection', 'R17 Diamond Cut N Alloys', 'Twin Tip Sports Exhaust', 'Electric Parking Brake with Auto Hold']
      },
      {
        name: 'N6 1.0L Turbo 7DCT (Dual Tone)',
        exShowroom: 1174000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.0L Kappa Turbo GDi (120 PS / 172 Nm)',
        mileage: '18.3 km/l',
        isVFM: false,
        keyFeatures: ['Dual Tone Finish with Shadow Black Contrast Roof', '7-Speed DCT with Paddle Shifters', 'All 4 Disc Brakes with Red Calipers', '6 Airbags Standard', '26.03 cm ccNC Infotainment', 'R17 Diamond Cut N Alloys', 'Twin Tip Performance Exhaust']
      },
      {
        name: 'N10 1.0L Turbo 7DCT',
        exShowroom: 1549000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.0L Kappa Turbo GDi (120 PS / 172 Nm)',
        mileage: '18.3 km/l',
        isVFM: false,
        keyFeatures: ['Full Level 2 Hyundai SmartSense ADAS (FCA-JT, BCA, LKA, SCC with Stop & Go)', 'Dual Curved Panoramic Displays (Dual 12.3-inch ccNC Navigation + Digital Cluster)', 'Bose Premium 8-Speaker Audio System', 'Dual Dashcam', 'Voice-Enabled Smart Electric Sunroof', 'Front Ventilated Seats & 4-Way Power Driver Seat', 'Surround View 360° Monitor & Blind Spot View Monitor', 'Smart Aroma Diffuser & Drive/Traction Modes']
      },
      {
        name: 'N10 1.0L Turbo 7DCT (Dual Tone)',
        exShowroom: 1567000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.0L Kappa Turbo GDi (120 PS / 172 Nm)',
        mileage: '18.3 km/l',
        isVFM: false,
        keyFeatures: ['Flagship Dual Tone Exterior with Shadow Black Roof', 'Full Level 2 Hyundai SmartSense ADAS with Stop & Go', 'Dual Curved Panoramic Displays (Dual 12.3-inch Displays)', 'Bose Premium 8-Speaker Audio System', 'Dual Dashcam & 360° Camera with Blind View Monitor', 'Front Ventilated Seats', 'Voice-Enabled Smart Electric Sunroof', 'Smart Aroma Diffuser']
      }
    ]
  },
  {
    id: 'hyundai-i20-n-line',
    name: 'Hyundai i20 N Line',
    brand: 'Hyundai',
    tagline: 'Motorsport-Bred Hot Hatch with 120 PS Turbo GDi, Sporty Twin Exhaust & Stiffened Suspension',
    launchDate: 'Latest 2025–2026 Model (With 6 Airbags Standard & All 4 Disc Brakes)',
    bodyType: 'Hatchback',
    fuelTypes: ['Petrol'],
    priceRange: '₹9.99 - ₹12.52 Lakh',
    minPrice: 999900,
    maxPrice: 1251900,
    safetyRating: '3 Stars (Global NCAP) | 6 Airbags Standard, All-4 Disc Brakes, ESC, VSM & HAC',
    groundClearance: '170 mm',
    bootSpace: '311 Litres',
    waitingPeriod: '2 - 6 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/i20-n-line/360/thunder-blue/1.webp',
    summary: 'The Hyundai i20 N Line brings authentic World Rally Championship (WRC) motorsport excitement to India’s premium hatchback category. Powered by an enthusiastic 1.0L Kappa Turbo GDi petrol engine churning out 120 PS and 172 Nm of peak torque, it offers drivers the choice of an engaging 6-speed manual transmission or a lightning-fast 7-speed Dual Clutch Transmission (7DCT) with steering-mounted paddle shifters. Engineered for purists, the i20 N Line features a motorsport-tuned suspension with 30% stiffer damping for flat, responsive cornering, calibrated heavy-feel steering for sharp directional changes, all-4 disc brakes with striking red front calipers, and a signature twin-tip sports exhaust that barks with a throaty exhaust note. The cockpit is drenched in performance aesthetics with chequered-flag leatherette upholstery, red contrast stitching, red ambient mood lighting, sporty brushed metal pedals, and bespoke 3-spoke N steering wheel and N-embossed gear lever. High-end convenience is fully served by a 26.03 cm (10.25") HD infotainment screen with Apple CarPlay & Android Auto, Bose Premium 7-speaker sound system with subwoofer, voice-enabled smart electric sunroof, wireless charging pad, Bluelink connectivity, and standard 6 airbags.',
    spin360: {
      totalFrames: 36,
      folder: 'https://ik.imagekit.io/2908vvlod/cars/i20-n-line/360',
      format: 'webp',
      defaultColor: 'thunder-blue',
      colors: [
        { id: 'thunder-blue', name: 'Thunder Blue (Hero Signature Shade)', hex: '#1B3B8A' },
        { id: 'polar-white', name: 'Polar White', hex: '#F4F5F7' },
        { id: 'abyss-black', name: 'Abyss Black Pearl', hex: '#0D0E10' },
        { id: 'fiery-red', name: 'Fiery Red', hex: '#B71C1C' },
        { id: 'starry-night', name: 'Starry Night (Midnight Navy Blue)', hex: '#1C2536' },
        { id: 'titan-grey', name: 'Titan Grey Metallic', hex: '#545B62' },
        { id: 'polar-white-dual-tone', name: 'Polar White with Phantom Black Roof', hex: 'linear-gradient(135deg, #F4F5F7 60%, #0D0E10 60%)' }
      ]
    },
    colors: [
      { id: 'thunder-blue', name: 'Thunder Blue (Hero Signature Shade)', hex: '#1B3B8A', image: 'https://ik.imagekit.io/2908vvlod/cars/i20-n-line/360/thunder-blue/1.webp' },
      { id: 'polar-white', name: 'Polar White', hex: '#F4F5F7', image: 'https://ik.imagekit.io/2908vvlod/cars/i20-n-line/360/polar-white/1.webp' },
      { id: 'abyss-black', name: 'Abyss Black Pearl', hex: '#0D0E10', image: 'https://ik.imagekit.io/2908vvlod/cars/i20-n-line/360/abyss-black/1.webp' },
      { id: 'fiery-red', name: 'Fiery Red', hex: '#B71C1C', image: 'https://ik.imagekit.io/2908vvlod/cars/i20-n-line/360/fiery-red/1.webp' },
      { id: 'starry-night', name: 'Starry Night (Midnight Navy Blue)', hex: '#1C2536', image: 'https://ik.imagekit.io/2908vvlod/cars/i20-n-line/360/starry-night/1.webp' },
      { id: 'titan-grey', name: 'Titan Grey Metallic', hex: '#545B62', image: 'https://ik.imagekit.io/2908vvlod/cars/i20-n-line/360/titan-grey/1.webp' },
      { id: 'polar-white-dual-tone', name: 'Polar White with Phantom Black Roof', hex: 'linear-gradient(135deg, #F4F5F7 60%, #0D0E10 60%)', image: 'https://ik.imagekit.io/2908vvlod/cars/i20-n-line/360/polar-white-dual-tone/1.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Stance & Chequered Grille', url: 'https://ik.imagekit.io/2908vvlod/cars/i20-n-line/360/thunder-blue/1.webp' },
      { label: 'Sporty Twin-Tip Exhaust Muffler', url: 'https://ik.imagekit.io/2908vvlod/cars/i20-n-line/gallery/sporty-twin-tip-muffler-exhaust.webp' },
      { label: 'R16 Diamond-Cut Alloys & Red Calipers', url: 'https://ik.imagekit.io/2908vvlod/cars/i20-n-line/gallery/r16-diamond-cut-alloys-red-disc-calipers.webp' },
      { label: 'Perforated N Steering & Paddle Shifters', url: 'https://ik.imagekit.io/2908vvlod/cars/i20-n-line/gallery/perforated-leather-steering-wheel-paddle-shifters.webp' }
    ],
    gallery: [
      { title: 'Chequered Flag Parametric Front Grille with Distinctive N Line Logo & Athletic Red Lip', url: 'https://ik.imagekit.io/2908vvlod/cars/i20-n-line/gallery/chequered-flag-front-grille-n-logo.webp' },
      { title: 'Sporty Twin Tip Muffler Exhaust with Tuned Throaty Performance Note', url: 'https://ik.imagekit.io/2908vvlod/cars/i20-n-line/gallery/sporty-twin-tip-muffler-exhaust.webp' },
      { title: 'R16 (195/55 R16) Diamond-Cut Alloy Wheels with N Center Cap & All-4 Red Brake Calipers', url: 'https://ik.imagekit.io/2908vvlod/cars/i20-n-line/gallery/r16-diamond-cut-alloys-red-disc-calipers.webp' },
      { title: 'Perforated Leather-Wrapped 3-Spoke N Steering Wheel with Steering Paddle Shifters', url: 'https://ik.imagekit.io/2908vvlod/cars/i20-n-line/gallery/perforated-leather-steering-wheel-paddle-shifters.webp' },
      { title: 'Sporty All-Black Cockpit with Sunrise Red Ambient Lighting & Digital TFT Instrument Cluster', url: 'https://ik.imagekit.io/2908vvlod/cars/i20-n-line/gallery/sporty-black-cockpit-red-ambient-light.webp' },
      { title: 'Chequered Flag Motif Leatherette Sport Seats with Red Contrast Stitching & N Logo', url: 'https://ik.imagekit.io/2908vvlod/cars/i20-n-line/gallery/chequered-flag-leatherette-seats-n-logo.webp' },
      { title: 'Sporty Tailgate Spoiler with Aerodynamic Side Wings & Dark Chrome Finish', url: 'https://ik.imagekit.io/2908vvlod/cars/i20-n-line/gallery/sporty-tailgate-spoiler-side-wings.webp' },
      { title: 'Z-Shaped Connecting LED Tail Lamps with Dark Chrome Connecting Strip', url: 'https://ik.imagekit.io/2908vvlod/cars/i20-n-line/gallery/z-shaped-led-tail-lamps-dark-chrome-garnish.webp' }
    ],
    specs: {
      engineOptions: '1.0L Kappa Turbo GDi Petrol (3 Cylinders, 998 cc, 120 PS @ 6000 rpm / 172 Nm @ 1500–4000 rpm)',
      transmissions: '6-Speed Manual Transmission (6MT) & 7-Speed Dual Clutch Transmission (7DCT) with Paddle Shifters',
      dimensions: '3995 mm (L) × 1775 mm (W) × 1505 mm (H)',
      wheelbase: '2580 mm (Best-in-Class Cabin Space)',
      fuelTank: '37 Litres',
      bootSpace: '311 Litres',
      brakes: 'All 4 Disc Brakes (Front & Rear Discs with Sporty Red Calipers)',
      suspension: 'McPherson Strut (Front) / Coupled Torsion Beam Axle with Gas Shock Absorber (Rear) (30% Stiffer Sport Tuning)',
      safety: '6 Airbags Standard Across All Variants, ESC, VSM, HAC, All 4 Disc Brakes, TPMS Highline, Rear Parking Camera with Dynamic Guidelines, ISOFIX Child Anchors'
    },
    variants: [
      {
        name: 'N6 1.0L Turbo 6MT',
        exShowroom: 999900,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L Kappa Turbo GDi (120 PS / 172 Nm)',
        mileage: '20.0 km/l',
        isVFM: false,
        keyFeatures: ['1.0L Turbo GDi Petrol (120 PS / 172 Nm)', '6-Speed Manual Gearbox', 'All 4 Disc Brakes with Red Calipers', '6 Airbags Standard', '20.32 cm (8") Touchscreen with Wireless Android Auto & Apple CarPlay', 'R16 Diamond Cut N Alloys', 'Twin Tip Sports Muffler Exhaust', 'FATC Automatic Climate Control']
      },
      {
        name: 'N6 1.0L Turbo 6MT (Dual Tone)',
        exShowroom: 1014900,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L Kappa Turbo GDi (120 PS / 172 Nm)',
        mileage: '20.0 km/l',
        isVFM: false,
        keyFeatures: ['Dual Tone Finish with Phantom Black Contrast Roof', '1.0L Turbo GDi (120 PS / 172 Nm)', '6-Speed Manual Gearbox', 'All 4 Disc Brakes with Red Calipers', '6 Airbags Standard', '20.32 cm Touchscreen', 'R16 Diamond Cut N Alloys', 'Twin Tip Exhaust']
      },
      {
        name: 'N6 1.0L Turbo 7DCT',
        exShowroom: 1114900,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.0L Kappa Turbo GDi (120 PS / 172 Nm)',
        mileage: '20.2 km/l',
        isVFM: false,
        keyFeatures: ['7-Speed Dual Clutch Transmission (7DCT)', 'Steering Wheel Paddle Shifters', 'Drive Modes (Eco, Normal, Sport)', 'All 4 Disc Brakes with Red Calipers', '6 Airbags Standard', 'Smart Electric Sunroof', '20.32 cm Touchscreen', 'R16 Diamond Cut N Alloys']
      },
      {
        name: 'N6 1.0L Turbo 7DCT (Dual Tone)',
        exShowroom: 1129900,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.0L Kappa Turbo GDi (120 PS / 172 Nm)',
        mileage: '20.2 km/l',
        isVFM: false,
        keyFeatures: ['Dual Tone Styling with Phantom Black Roof', '7-Speed DCT with Paddle Shifters', 'All 4 Disc Brakes with Red Calipers', '6 Airbags Standard', 'Smart Electric Sunroof', '20.32 cm Touchscreen', 'R16 Diamond Cut N Alloys']
      },
      {
        name: 'N8 1.0L Turbo 6MT',
        exShowroom: 1121900,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L Kappa Turbo GDi (120 PS / 172 Nm)',
        mileage: '20.0 km/l',
        isVFM: true,
        vfmBadge: '🏁 ENTHUSIAST HOT HATCH SWEET SPOT',
        keyFeatures: ['26.03 cm (10.25") HD Touchscreen Infotainment with Navigation', 'Bose Premium 7-Speaker Sound System with Sub-Woofer', 'Voice-Enabled Smart Electric Sunroof', 'Smart Key with Push Button Start', 'Athletic Red Ambient Lighting', 'Wireless Smartphone Charger', 'Hyundai Bluelink Connected Car Tech with OTA Updates', 'All 4 Disc Brakes & 6 Airbags']
      },
      {
        name: 'N8 1.0L Turbo 6MT (Dual Tone)',
        exShowroom: 1136900,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L Kappa Turbo GDi (120 PS / 172 Nm)',
        mileage: '20.0 km/l',
        isVFM: false,
        keyFeatures: ['Dual Tone Exterior with Phantom Black Contrast Roof', '26.03 cm (10.25") HD Touchscreen', 'Bose 7-Speaker Premium Sound System', 'Voice-Enabled Sunroof', 'Smart Key Push Button Start', 'Bluelink Connected Car Tech', 'All 4 Disc Brakes & 6 Airbags']
      },
      {
        name: 'N8 1.0L Turbo 7DCT',
        exShowroom: 1236900,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.0L Kappa Turbo GDi (120 PS / 172 Nm)',
        mileage: '20.2 km/l',
        isVFM: false,
        keyFeatures: ['Flagship Hot Hatch with 7-Speed Dual Clutch (7DCT) & Paddle Shifters', 'Drive Modes (Eco, Normal, Sport)', '26.03 cm (10.25") HD Touchscreen with Navigation', 'Bose Premium 7-Speaker Sound System with Sub-Woofer', 'Voice-Enabled Smart Electric Sunroof', 'Smart Key with Push Button Start', 'Wireless Smartphone Charger', 'Bluelink Connected Car Tech']
      },
      {
        name: 'N8 1.0L Turbo 7DCT (Dual Tone)',
        exShowroom: 1251900,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.0L Kappa Turbo GDi (120 PS / 172 Nm)',
        mileage: '20.2 km/l',
        isVFM: false,
        keyFeatures: ['Top-End Dual Tone Finish with Phantom Black Roof', '7-Speed DCT with Steering Paddle Shifters & Drive Modes', '26.03 cm HD Infotainment & Bose 7-Speaker Audio', 'Voice-Enabled Smart Sunroof', 'Wireless Phone Charger', 'Bluelink Connected Car Suite', 'All 4 Disc Brakes & 6 Airbags']
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
