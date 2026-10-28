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
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/colors/sizzling-red.webp',
    summary: 'The iconic Alto K10 now comes with standard 6 airbags, Electronic Stability Program (ESP), 7-inch SmartPlay Studio touchscreen with Apple CarPlay/Android Auto, and an ultra-frugal 1.0L Next-Gen K-Series Dual Jet engine delivering up to 33.40 km/kg on CNG.',
    colors: [
      { id: 'sizzling-red', name: 'Metallic Sizzling Red', hex: '#E62924', image: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/colors/sizzling-red.webp' },
      { id: 'speedy-blue', name: 'Metallic Speedy Blue', hex: '#1E40AF', image: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/colors/speedy-blue.webp' },
      { id: 'earth-gold', name: 'Premium Earth Gold', hex: '#B45309', image: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/colors/earth-gold.webp' },
      { id: 'solid-white', name: 'Solid White', hex: '#F8FAFC', image: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/colors/solid-white.webp' },
      { id: 'silky-silver', name: 'Metallic Silky Silver', hex: '#94A3B8', image: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/colors/silky-silver.webp' },
      { id: 'granite-grey', name: 'Metallic Granite Grey', hex: '#475569', image: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/colors/granite-grey.webp' },
      { id: 'bluish-black', name: 'Pearl Midnight Black', hex: '#0F172A', image: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/colors/bluish-black.webp' }
    ],
    gallery: [
      { id: 'front_dynamic_stance', title: 'Front Dynamic Highway Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/gallery/front_dynamic_stance.webp' },
      { id: 'honeycomb_front_grille', title: 'Honeycomb Front Grille Design', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/gallery/honeycomb_front_grille.webp' },
      { id: 'halogen_headlamps', title: 'Sweptback Halogen Headlamp Setup', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/gallery/halogen_headlamps.webp' },
      { id: 'side_compact_profile', title: 'Agile & Compact City Profile', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/gallery/side_compact_profile.webp' },
      { id: 'rear_tail_lamps', title: 'Contemporary Rear Combination Lamps', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/gallery/rear_tail_lamps.webp' },
      { id: 'compact_rear_design', title: 'Sculpted Rear Bumper & Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/gallery/compact_rear_design.webp' },
      { id: 'dashboard_cockpit', title: 'Driver-Centric Digital Dashboard Layout', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/gallery/dashboard_cockpit.webp' },
      { id: 'smartplay_touchscreen', title: '7-inch SmartPlay Studio Infotainment', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/gallery/smartplay_touchscreen.webp' },
      { id: 'digital_instrument_cluster', title: 'Digital Speedometer & Trip Computer', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/gallery/digital_instrument_cluster.webp' },
      { id: 'steering_controls', title: 'Steering-Mounted Audio & Calling Controls', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/gallery/steering_controls.webp' },
      { id: 'front_cabin_seats', title: 'Front Ergonomic Bucket Seats', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/gallery/front_cabin_seats.webp' },
      { id: 'rear_cabin_seating', title: 'Comfortable Rear Passenger Seating', url: 'https://ik.imagekit.io/2908vvlod/cars/alto-k10/gallery/rear_cabin_seating.webp' }
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
    id: 'mahindra-thar',
    name: 'Mahindra Thar',
    brand: 'Mahindra',
    tagline: 'Iconic 4x4 Off-Roader with Shift-on-the-Fly 4WD, Convertible/Hardtop Freedom & 226 mm Ground Clearance',
    launchDate: 'Updated 2025 (4x4 & RWD Lineup)',
    bodyType: 'SUV',
    fuelTypes: ['Petrol', 'Diesel'],
    priceRange: '₹11.35 - ₹17.60 Lakh',
    minPrice: 1134900,
    maxPrice: 1760000,
    safetyRating: '4.0 ★ (Global NCAP 4-Star Adult & Child Safety Rating)',
    groundClearance: '226 mm',
    bootSpace: '200 L (Expandable with 50:50 Split-Fold Rear Seats)',
    waitingPeriod: '3 - 8 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/thar/colors/stealth-black.webp',
    summary: 'The Mahindra Thar 3-Door is India’s definitive off-road cultural icon, engineering uncompromised go-anywhere capability with modern everyday drivability. Built on a heavy-duty ladder-frame chassis with roll-over mitigation and awarded a proven 4-Star Global NCAP safety rating, the Thar is powered by robust powertrains: a 2.0L mStallion TGDi Turbo Petrol (150 PS / 320 Nm) and a 2.2L mHawk Turbo Diesel (130 PS / 300 Nm), alongside an ultra-accessible 1.5L D117 CRDe Diesel (117 PS / 300 Nm) in Rear-Wheel Drive (RWD) configuration. Transmission choices include a 6-speed manual and a 6-speed AISIN torque converter automatic. Equipped with true 4x4 hardware—including a mechanical shift-on-the-fly transfer case with low range (4L & 4H), mechanical locking rear differential (MLD), brake locking differentials, 41.8° approach and 36.8° departure angles, 226 mm ground clearance, and an unyielding 650 mm water wading capability. Inside, the wash-friendly adventure cabin features IP54 water-resistant switches, removable doors, 17.78 cm touchscreen with adventure telemetry gauges, roof-mounted acoustic speakers, and both Hardtop and Convertible open-air choices.',
    threeSixty: {
      enabled: true,
      frameFolder: 'battleship-grey',
      totalFrames: 36,
      basePath: 'https://ik.imagekit.io/2908vvlod/cars/thar/360'
    },
    colors: [
      { id: 'stealth-black', name: 'Stealth Black', hex: '#14202E', bg: '#14202E', image: 'https://ik.imagekit.io/2908vvlod/cars/thar/colors/stealth-black.webp' },
      { id: 'battleship-grey', name: 'Battleship Grey', hex: '#4C596E', bg: '#4C596E', image: 'https://ik.imagekit.io/2908vvlod/cars/thar/colors/battleship-grey.webp' },
      { id: 'everest-white', name: 'Everest White', hex: '#FEFEFE', bg: '#FEFEFE', image: 'https://ik.imagekit.io/2908vvlod/cars/thar/colors/everest-white.webp' },
      { id: 'tango-red', name: 'Tango Red (Red Rage)', hex: '#C20D0E', bg: '#C20D0E', image: 'https://ik.imagekit.io/2908vvlod/cars/thar/colors/tango-red.webp' },
      { id: 'artemis-silver', name: 'Artemis Silver', hex: '#303841', bg: '#303841', image: 'https://ik.imagekit.io/2908vvlod/cars/thar/colors/artemis-silver.webp' },
      { id: 'jeans-blue', name: 'Jeans Blue', hex: '#394E65', bg: '#394E65', image: 'https://ik.imagekit.io/2908vvlod/cars/thar/colors/jeans-blue.webp' },
      { id: 'galaxy-grey', name: 'Galaxy Grey', hex: '#424851', bg: '#424851', image: 'https://ik.imagekit.io/2908vvlod/cars/thar/colors/galaxy-grey.webp' },
      { id: 'deep-forest', name: 'Deep Forest Green', hex: '#363A30', bg: '#363A30', image: 'https://ik.imagekit.io/2908vvlod/cars/thar/colors/deep-forest.webp' }
    ],
    multiAngle: [
      { label: 'Front 3/4 Studio View', url: 'https://ik.imagekit.io/2908vvlod/cars/thar/360/battleship-grey/1.webp' },
      { label: 'Side Profile Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/thar/360/battleship-grey/10.webp' },
      { label: 'Rear 3/4 Road View', url: 'https://ik.imagekit.io/2908vvlod/cars/thar/360/battleship-grey/19.webp' },
      { label: 'Direct Front Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/thar/360/battleship-grey/28.webp' }
    ],
    gallery: [
      { title: 'All-Black Washable Adventure Cockpit Dashboard with IP54 Splash-Resistant Switches', url: 'https://ik.imagekit.io/2908vvlod/cars/thar/gallery/dashboard.webp' },
      { title: 'Shift-on-the-Fly 4x4 Manual Transfer Case with 4L Low-Range & Locking Differential', url: 'https://ik.imagekit.io/2908vvlod/cars/thar/gallery/manual_4x4_transfer_case.webp' },
      { title: '17.78 cm Touchscreen Infotainment with Real-Time Adventure Statistics & Roll/Pitch Gauges', url: 'https://ik.imagekit.io/2908vvlod/cars/thar/gallery/adventure_touchscreen.webp' },
      { title: 'Rugged Dual-Dial Instrument Cluster with Multi-Information Off-Road Display', url: 'https://ik.imagekit.io/2908vvlod/cars/thar/gallery/instrument_cluster.webp' },
      { title: '18-inch Deep-Silver All-Terrain Alloy Wheels with High-Profile Off-Road Tyres', url: 'https://ik.imagekit.io/2908vvlod/cars/thar/gallery/all_terrain_alloys.webp' },
      { title: 'Signature Tailgate-Mounted Full-Size Spare Wheel with High-Mount Brake Lamp', url: 'https://ik.imagekit.io/2908vvlod/cars/thar/gallery/tailgate_spare_wheel.webp' },
      { title: 'Iconic 7-Slat Vertical Adventure Front Grille with Composite Off-Road Bumper', url: 'https://ik.imagekit.io/2908vvlod/cars/thar/gallery/vertical_slat_grille.webp' },
      { title: 'Retro Circular Headlamps with Daytime Running Lamps and Flared Arch Indicators', url: 'https://ik.imagekit.io/2908vvlod/cars/thar/gallery/circular_retro_headlamps.webp' },
      { title: 'Sporty Contoured Front Bucket Seats with Height & Lumbar Adjustment', url: 'https://ik.imagekit.io/2908vvlod/cars/thar/gallery/front_bucket_seats.webp' },
      { title: 'Rear Parking Assist Camera with Dynamic Guidelines & Rugged Ultrasonic Sensors', url: 'https://ik.imagekit.io/2908vvlod/cars/thar/gallery/reverse_parking_camera.webp' },
      { title: 'Removable Door Panels with Roll-Cage Integrated Speakers and Heavy-Duty Grab Handles', url: 'https://ik.imagekit.io/2908vvlod/cars/thar/gallery/adventure_door_panel.webp' },
      { title: 'High-Clearance (226 mm) 4x4 Ladder-Frame Stance with 650 mm Water Wading Depth', url: 'https://ik.imagekit.io/2908vvlod/cars/thar/gallery/water_wading_stance.webp' }
    ],
    specs: {
      engineOptions: '1.5L D117 CRDe Diesel (117 PS / 300 Nm) | 2.0L mStallion Turbo Petrol (150 PS / 320 Nm) | 2.2L mHawk Diesel (130 PS / 300 Nm)',
      transmissions: '6-Speed Manual | 6-Speed AISIN Torque Converter Automatic | True 4x4 with 4L/4H Transfer Case',
      dimensions: '3985 mm (L) × 1820 mm (W) × 1920 mm (H)',
      wheelbase: '2450 mm',
      fuelTank: '57 Litres',
      seatingCapacity: '4 Passengers (Forward-Facing Rear Seats)'
    },
    variants: [
      {
        name: 'AX (O) 1.5 Diesel MT RWD (Hardtop)',
        exShowroom: 1134900,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '1.5L D117 CRDe Diesel (117 PS / 300 Nm)',
        mileage: '15.20 kmpl',
        isVFM: true,
        vfmBadge: '🌟 HIGHWAY & CITY ADVENTURE VALUE',
        keyFeatures: ['Rear-Wheel Drive (RWD) Efficiency', 'Factory Fitted Molded Hardtop', 'Electronic Stability Program (ESP)', 'Roll Cage & Dual Airbags']
      },
      {
        name: 'LX 1.5 Diesel MT RWD (Hardtop)',
        exShowroom: 1285000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '1.5L D117 CRDe Diesel (117 PS / 300 Nm)',
        mileage: '15.20 kmpl',
        isVFM: true,
        vfmBadge: '🏆 BESTSELLER RWD HARDTOP',
        keyFeatures: ['18-inch Deep-Silver Alloy Wheels', '17.78 cm Touchscreen with Android Auto & Apple CarPlay', 'Cruise Control', 'Molded Hardtop with Rear Defogger']
      },
      {
        name: 'LX 2.0 Petrol AT RWD (Hardtop)',
        exShowroom: 1409900,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '2.0L mStallion Turbo Petrol (150 PS / 320 Nm)',
        mileage: '12.80 kmpl',
        isVFM: false,
        keyFeatures: ['Smooth 6-Speed AISIN Automatic', '150 PS mStallion Power', '18-inch Alloys', 'Touchscreen Infotainment & Cruise Control']
      },
      {
        name: 'AX (O) 2.2 Diesel MT 4WD (Convertible Top)',
        exShowroom: 1485000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.2L mHawk Diesel (130 PS / 300 Nm)',
        mileage: '14.00 kmpl',
        isVFM: true,
        vfmBadge: '🧗 PURIST 4X4 OFF-ROAD PICK',
        keyFeatures: ['Manual Shift-on-the-Fly 4WD with 4L/4H Transfer Case', 'Mechanical Locking Rear Differential (MLD)', 'Monochrome Steel Wheels', 'Open-Air Convertible Soft Top']
      },
      {
        name: 'LX 2.0 Petrol MT 4WD (Hardtop)',
        exShowroom: 1540000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '2.0L mStallion Turbo Petrol (150 PS / 320 Nm)',
        mileage: '12.50 kmpl',
        isVFM: false,
        keyFeatures: ['True 4x4 with Shift-on-the-Fly Low Range', '150 PS mStallion Petrol', '18-inch Alloy Wheels', 'IP54 Splash-Resistant Switches']
      },
      {
        name: 'LX 2.2 Diesel MT 4WD (Hardtop)',
        exShowroom: 1609000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.2L mHawk Diesel (130 PS / 300 Nm)',
        mileage: '14.00 kmpl',
        isVFM: true,
        vfmBadge: '🛡️ ICONIC DIESEL 4X4 HARDTOP',
        keyFeatures: ['Torquey 2.2L mHawk (300 Nm)', 'Manual 4x4 with Electric Brake Locking Differential (BLD)', '18-inch All-Terrain Alloys', 'Molded Acoustic Hardtop']
      },
      {
        name: 'LX 2.0 Petrol AT 4WD (Convertible Top)',
        exShowroom: 1665000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '2.0L mStallion Turbo Petrol (150 PS / 320 Nm)',
        mileage: '11.80 kmpl',
        isVFM: true,
        vfmBadge: '☀️ OPEN-AIR ADVENTURE CONVERTIBLE',
        keyFeatures: ['Open-Top Convertible Canvas Roof', '6-Speed Torque Converter AT with 4x4', 'Adventure Telemetry with Pitch & Roll Gauges', 'Roll-Over Mitigation with Roll Cage']
      },
      {
        name: 'LX 2.0 Petrol AT 4WD (Hardtop)',
        exShowroom: 1700000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '2.0L mStallion Turbo Petrol (150 PS / 320 Nm)',
        mileage: '11.80 kmpl',
        isVFM: false,
        keyFeatures: ['6-Speed Automatic with 4x4 Transfer Case', 'Factory Molded Hardtop', 'Hill Hold & Hill Descent Control', 'Roof-Mounted Speakers']
      },
      {
        name: 'LX 2.2 Diesel AT 4WD (Convertible Top)',
        exShowroom: 1715000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.2L mHawk Diesel (130 PS / 300 Nm)',
        mileage: '13.00 kmpl',
        isVFM: false,
        keyFeatures: ['Convertible Open Top', '2.2L mHawk Diesel with 6-Speed AT', 'Mechanical Locking Differential', 'Tyre Pressure Monitoring System (TPMS)']
      },
      {
        name: 'LX 2.2 Diesel AT 4WD (Hardtop)',
        exShowroom: 1760000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.2L mHawk Diesel (130 PS / 300 Nm)',
        mileage: '13.00 kmpl',
        isVFM: true,
        vfmBadge: '👑 FLAGSHIP TOURER 4X4 DIESEL AT',
        keyFeatures: ['Top-Spec 4WD 6-Speed Automatic', 'Molded Hardtop with Sound Deadening', 'Electronic Brake Locking & Mechanical Locking Rear Diff', '18-inch Alloys with All-Terrain Capability']
      }
    ]
  },
  {
    id: 'thar-roxx',
    name: 'Mahindra Thar Roxx',
    brand: 'Mahindra',
    tagline: '5-Door True Ladder-Frame Adventure SUV with Panoramic Skyroof, Level 2 ADAS, 4XPLOR & 5-Star Bharat NCAP',
    launchDate: 'August 2024 (Updated 2025 Lineup)',
    bodyType: 'SUV',
    fuelTypes: ['Petrol', 'Diesel'],
    priceRange: '₹12.99 - ₹22.49 Lakh',
    minPrice: 1299000,
    maxPrice: 2249000,
    safetyRating: '5.0 ★ (Bharat NCAP 5-Star Safety Rating - Adult 31.05/32, Child 45/49)',
    groundClearance: '215 mm',
    bootSpace: '644 L (Massive Extended Rear Cargo Trunk)',
    waitingPeriod: '6 - 16 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/colors/stealth-black.webp',
    summary: 'The Mahindra Thar Roxx revolutionizes the iconic off-roader into an all-in-one luxury 5-door adventure SUV without compromising authentic trail-blazing capability. Built on an advanced stiffened hydroformed ladder-frame platform with Penta-Link rear suspension featuring Watts linkage, it was awarded an exceptional 5-Star Safety Rating by Bharat NCAP. Propelled by explosive class-leading engines: a 2.0L mStallion TGDi Turbo Petrol (up to 177 PS / 380 Nm) or a 2.2L mHawk Turbo Diesel (up to 175 PS / 370 Nm) paired with a 6-speed manual or 6-speed AISIN torque converter automatic, available in both Rear-Wheel Drive (RWD) and true 4x4 with 4XPLOR terrain management (Snow, Sand, Mud), electronic locking differential, and crawl smart assist. The upscale 5-seater cabin boasts segment-first amenities including an expansive panoramic skyroof, dual 26.03 cm (10.25-inch) HD screens with Adrenox, Level 2 ADAS with 10 active safety functions, 3-stage front seat ventilation, a 9-speaker Harman Kardon QuantumLogic sound system with 540-degree surround view camera, and a cavernous 644L boot capacity.',
    threeSixty: {
      enabled: true,
      frameFolder: 'stealth-black',
      totalFrames: 36,
      basePath: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/360'
    },
    colors: [
      { id: 'stealth-black', name: 'Stealth Black', hex: '#110C0A', bg: '#110C0A', image: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/colors/stealth-black.webp' },
      { id: 'tango-red', name: 'Tango Red', hex: '#C20D0E', bg: '#C20D0E', image: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/colors/tango-red.webp' },
      { id: 'everest-white', name: 'Everest White', hex: '#FBFBFB', bg: '#FBFBFB', image: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/colors/everest-white.webp' },
      { id: 'deep-forest', name: 'Deep Forest Green', hex: '#141414', bg: '#141414', image: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/colors/deep-forest.webp' },
      { id: 'nebula-blue', name: 'Nebula Blue', hex: '#101D28', bg: '#101D28', image: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/colors/nebula-blue.webp' },
      { id: 'battleship-grey', name: 'Battleship Grey', hex: '#3F4754', bg: '#3F4754', image: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/colors/battleship-grey.webp' },
      { id: 'burnt-sienna', name: 'Burnt Sienna', hex: '#331F16', bg: '#331F16', image: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/colors/burnt-sienna.webp' }
    ],
    multiAngle: [
      { label: 'Front 3/4 Studio View', url: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/360/stealth-black/1.webp' },
      { label: 'Side Profile Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/360/stealth-black/10.webp' },
      { label: 'Rear 3/4 Road View', url: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/360/stealth-black/19.webp' },
      { label: 'Direct Front Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/360/stealth-black/28.webp' }
    ],
    gallery: [
      { title: 'Dual-Tone Ivory & Dark Adventure Cockpit Dashboard with Soft-Touch Leatherette Stitching', url: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/gallery/dashboard.webp' },
      { title: 'Segment-Largest Panoramic Skyroof with Acoustic Glazing & One-Touch Electric Sunblind', url: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/gallery/panoramic_skyroof.webp' },
      { title: '26.03 cm (10.25-inch) HD Floating Touchscreen with Adrenox Connected Intelligence & Wireless CarPlay', url: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/gallery/touchscreen_infotainment.webp' },
      { title: '26.03 cm (10.25-inch) Full-Color Digital Driver Display with Turn-by-Turn ADAS Navigation', url: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/gallery/digital_cluster.webp' },
      { title: 'Perforated Premium Leatherette Seats with 3-Stage Active Front Seat Cooling Ventilation', url: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/gallery/ventilated_seats.webp' },
      { title: 'Harman Kardon 9-Speaker QuantumLogic Surround Sound System with Subwoofer', url: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/gallery/harman_kardon_speakers.webp' },
      { title: 'Level 2 Advanced Driver Assistance System (ADAS) with Adaptive Cruise Control & Auto Emergency Braking', url: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/gallery/adas_front_camera.webp' },
      { title: '540-Degree Surround View Camera System with Transparent Hood & Blind View Monitor', url: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/gallery/surround_camera_360.webp' },
      { title: '19-inch Diamond-Cut Precision Alloy Wheels with All-Terrain Performance Profile', url: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/gallery/alloy_wheels.webp' },
      { title: 'Signature Tailgate-Mounted Full-Size 19-inch Spare Alloy Wheel with High-Mount Brake Lamp', url: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/gallery/tailgate_spare_wheel.webp' },
      { title: 'Painted Double-Decker 6-Slot Vertical Front Grille with Retro Bi-LED Projectors', url: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/gallery/vertical_slat_grille.webp' },
      { title: 'Massive 644 Litres Extended Family Luggage Trunk with 60:40 Split Rear Folding Seats', url: 'https://ik.imagekit.io/2908vvlod/cars/thar-roxx/gallery/open_trunk.webp' }
    ],
    specs: {
      engineOptions: '2.0L mStallion TGDi Turbo Petrol (162/177 PS, up to 380 Nm) | 2.2L mHawk Turbo Diesel (152/175 PS, up to 370 Nm)',
      transmissions: '6-Speed Manual | 6-Speed AISIN Torque Converter Automatic | 4XPLOR 4WD with Electronic Locking Rear Diff & Crawl Smart',
      dimensions: '4428 mm (L) × 1870 mm (W) × 1923 mm (H)',
      wheelbase: '2850 mm',
      fuelTank: '57 Litres',
      seatingCapacity: '5 Passengers (Comfort Bench with Rear AC & Armrest)'
    },
    variants: [
      {
        name: 'MX1 2.0 Petrol MT (RWD)',
        exShowroom: 1299000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '2.0L mStallion Turbo (162 PS / 330 Nm)',
        mileage: '12.40 kmpl',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard Across Trims', '26.03 cm (10.25") Touchscreen Infotainment', 'All 4 Disc Brakes & Electronic Stability Program (ESP)', 'Rear AC Vents & LED Projector Headlamps']
      },
      {
        name: 'MX1 2.2 Diesel MT (RWD)',
        exShowroom: 1399000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.2L mHawk Diesel (152 PS / 330 Nm)',
        mileage: '15.50 kmpl',
        isVFM: false,
        keyFeatures: ['High-Torque 152 PS mHawk Diesel', '6 Airbags & ISOFIX Child Mounts', 'Push Button Start/Stop', 'Rear Parking Sensors & Electronic Power Steering']
      },
      {
        name: 'MX3 2.0 Petrol AT (RWD)',
        exShowroom: 1499000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '2.0L mStallion Turbo (177 PS / 380 Nm)',
        mileage: '11.80 kmpl',
        isVFM: true,
        vfmBadge: '🌟 BUDGET PETROL AT PICK',
        keyFeatures: ['Smooth 6-Speed AISIN Automatic', 'High-Output 177 PS / 380 Nm Petrol', 'Wireless Android Auto & Apple CarPlay', 'Reverse Parking Camera & Drive Modes (Zip, Zoom)']
      },
      {
        name: 'MX3 2.2 Diesel MT (RWD)',
        exShowroom: 1599000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.2L mHawk Diesel (152 PS / 330 Nm)',
        mileage: '15.20 kmpl',
        isVFM: false,
        keyFeatures: ['Rear View Camera with Dynamic Guidelines', 'Cruise Control', 'Terrain Modes (Snow, Sand, Mud)', 'Wireless Smartphone Charger']
      },
      {
        name: 'MX5 2.2 Diesel MT (RWD)',
        exShowroom: 1699000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.2L mHawk Diesel (152 PS / 330 Nm)',
        mileage: '15.20 kmpl',
        isVFM: true,
        vfmBadge: '🏆 BEST VALUE PANORAMIC PICK',
        keyFeatures: ['Single-Pane Sunroof', '18-inch Diamond-Cut Precision Alloys', 'LED DRLs & Bi-LED Projector Headlamps', 'Leatherette Seats & Acoustic Glass']
      },
      {
        name: 'MX5 2.2 Diesel MT (4x4)',
        exShowroom: 1879000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.2L mHawk Diesel (152 PS / 330 Nm)',
        mileage: '14.50 kmpl',
        isVFM: true,
        vfmBadge: '🧗 PURIST 4X4 ADVENTURE VALUE',
        keyFeatures: ['4XPLOR 4WD System with Low Range', 'Electronic Locking Rear Differential (e-BLD)', 'Crawl Smart Assist & Intelli-Turn Assist', 'Terrain Modes & 18-inch Alloys']
      },
      {
        name: 'AX3L 2.2 Diesel MT (RWD)',
        exShowroom: 1699000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.2L mHawk Diesel (152 PS / 330 Nm)',
        mileage: '15.20 kmpl',
        isVFM: false,
        keyFeatures: ['Level 2 ADAS Suite with 10 Functions', 'Dual 26.03 cm HD Digital Superscreens', 'Electronic Parking Brake (EPB) with Auto Hold', 'Connected Vehicle Tech with Alexa']
      },
      {
        name: 'AX5L 2.2 Diesel AT (RWD)',
        exShowroom: 1899000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.2L mHawk Diesel (175 PS / 370 Nm)',
        mileage: '14.80 kmpl',
        isVFM: true,
        vfmBadge: '⚡ ADAS LEVEL 2 AUTOMATIC',
        keyFeatures: ['6-Speed Automatic with 175 PS High-Output Diesel', 'Level 2 ADAS Suite with Adaptive Cruise Control', 'Smart Pilot Assist & Lane Keep Assist', 'Electronic Parking Brake with Auto Hold']
      },
      {
        name: 'AX7L 2.0 Petrol AT (RWD)',
        exShowroom: 1999000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '2.0L mStallion Turbo (177 PS / 380 Nm)',
        mileage: '11.50 kmpl',
        isVFM: false,
        keyFeatures: ['Panoramic Skyroof with Dual Glass Panes', '19-inch Diamond-Cut Precision Alloys', 'Harman Kardon 9-Speaker QuantumLogic Audio', 'Ventilated Front Seats & 6-Way Powered Driver Seat']
      },
      {
        name: 'AX7L 2.2 Diesel AT (RWD)',
        exShowroom: 2049000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.2L mHawk Diesel (175 PS / 370 Nm)',
        mileage: '14.50 kmpl',
        isVFM: false,
        keyFeatures: ['175 PS High-Output Diesel with 6-Speed AT', 'Panoramic Skyroof', '540-Degree Surround Camera with Transparent Hood', 'Harman Kardon 9-Speaker Audio with Subwoofer']
      },
      {
        name: 'AX7L 2.2 Diesel MT (4x4)',
        exShowroom: 2099000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.2L mHawk Diesel (152 PS / 330 Nm)',
        mileage: '14.50 kmpl',
        isVFM: false,
        keyFeatures: ['4XPLOR 4WD with Electronic Locking Rear Diff', 'Panoramic Skyroof & 19-inch Alloys', 'Ventilated Front Seats & Level 2 ADAS', 'Harman Kardon QuantumLogic Audio']
      },
      {
        name: 'AX7L 2.2 Diesel AT (4x4)',
        exShowroom: 2249000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.2L mHawk Diesel (175 PS / 370 Nm)',
        mileage: '13.50 kmpl',
        isVFM: true,
        vfmBadge: '👑 FLAGSHIP 4X4 LUXURY ROXX',
        keyFeatures: ['Top-Spec 4XPLOR 4WD with 6-Speed Automatic (175 PS / 370 Nm)', 'Expansive Panoramic Skyroof', 'Level 2 ADAS Suite with Smart Pilot Assist', 'Harman Kardon 9-Speaker Audio, 540° Camera & Ventilated Seats']
      }
    ]
  },
  {
    id: 'mahindra-scorpio-n',
    name: 'Mahindra Scorpio-N',
    brand: 'Mahindra',
    tagline: 'The Big Daddy of SUVs with 5-Star Global NCAP, 4XPLOR Terrain Modes & 200 PS mStallion Power',
    launchDate: 'Updated 2025 (Z-Series Lineup)',
    bodyType: 'SUV',
    fuelTypes: ['Petrol', 'Diesel'],
    priceRange: '₹13.85 - ₹24.89 Lakh',
    minPrice: 1385000,
    maxPrice: 2489000,
    safetyRating: '5.0 ★ (Global NCAP 5-Star Rating - 29.25/34 Adult Score)',
    groundClearance: '187 mm',
    bootSpace: '460 L (3rd Row Folded)',
    waitingPeriod: '6 - 14 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/colors/deep-forest.webp',
    summary: 'The Mahindra Scorpio-N, celebrated as the "Big Daddy of SUVs", redefines the authentic D-segment body-on-frame SUV experience in India. Engineered on a third-generation stiffened steel chassis with Frequency Selective Damping (FSD) and Penta-link rear suspension, it is powered by class-leading engines: a 2.0L mStallion Turbo Petrol delivering 200 PS and 380 Nm, or a 2.2L mHawk Turbo Diesel producing up to 175 PS and 400 Nm, mated to 6-speed manual or AISIN 6-speed automatic transmissions. Equipped with the legendary 4XPLOR intelligent terrain response system (Normal, Grass/Gravel/Snow, Mud/Ruts, Sand) with mechanical rear locking differential, an Adrenox-powered 20.32 cm touchscreen with built-in Alexa, a 12-speaker Sony 3D spatial sound system, dual-zone climate control, and 5-Star Global NCAP crash safety.',
    threeSixty: {
      enabled: true,
      frameFolder: 'napoli-black',
      totalFrames: 36,
      basePath: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/360'
    },
    colors: [
      { id: 'deep-forest', name: 'Deep Forest Green (Signature Hero Shade)', hex: '#1D3B2F', image: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/colors/deep-forest.webp' },
      { id: 'everest-white', name: 'Everest White', hex: '#F4F5F7', image: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/colors/everest-white.webp' },
      { id: 'dazzling-silver', name: 'Dazzling Silver', hex: '#D1D5DB', image: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/colors/dazzling-silver.webp' },
      { id: 'napoli-black', name: 'Napoli Black', hex: '#1A1D20', image: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/colors/napoli-black.webp' },
      { id: 'midnight-black', name: 'Midnight Black', hex: '#111827', image: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/colors/midnight-black.webp' },
      { id: 'oceanic', name: 'Oceanic Blue', hex: '#1E3A5F', image: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/colors/oceanic.webp' }
    ],
    multiAngles: [
      { label: 'Hero 3/4 Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/360/napoli-black/1.webp' },
      { label: 'Adrenox Digital Cockpit', url: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/gallery/adrenox_cockpit.webp' },
      { label: 'R18 Diamond-Cut Alloys', url: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/gallery/r18_diamond_cut_alloys.webp' },
      { label: 'Signature Talon Grille', url: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/gallery/chrome_talon_grille.webp' }
    ],
    gallery: [
      { title: 'Adrenox Intelligent Connected Cockpit with Built-in Amazon Alexa & 70+ Connected Features', url: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/gallery/adrenox_cockpit.webp' },
      { title: '20.32 cm Touchscreen Infotainment with 17.78 cm High-Resolution Driver Digital Information Display', url: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/gallery/infotainment_cluster.webp' },
      { title: 'Sony 12-Speaker 3D Immersive Spatial Audio System with Dual Subwoofers & Roof-Mounted Speakers', url: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/gallery/sony_3d_sound.webp' },
      { title: 'R18 Diamond-Cut Premium Alloy Wheels with All-Terrain High-Profile Tyres & Disc Brakes', url: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/gallery/r18_diamond_cut_alloys.webp' },
      { title: 'Signature Chrome Talon Front Grille with Dual-Barrel LED Projector Headlamps & Sequential Turn Indicators', url: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/gallery/chrome_talon_grille.webp' },
      { title: 'Iconic Tall-Stacked Vertical LED Taillamps with Signature Scorpion Sting Element', url: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/gallery/tall_stacked_led_lamp.webp' },
      { title: 'LED Projector Fog Lamps with Integrated C-Shaped LED Daytime Running Lights (DRLs)', url: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/gallery/projector_fog_lamps.webp' },
      { title: 'High-Definition Rear Parking Camera with Dynamic Steering Guidelines & Ultrasonic Sensors', url: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/gallery/rear_view_camera.webp' },
      { title: 'Dual-Zone Fully Automatic Temperature Control (FATC) with Independent Rear AC Vents & Controls', url: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/gallery/dual_fatc.webp' },
      { title: 'Smooth 6-Speed AISIN Torque Converter Automatic Transmission with Drive Modes (Zip, Zap, Zoom)', url: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/gallery/speed_transmission.webp' },
      { title: 'Driver Drowsiness Alert System Actively Monitoring Steering Input Behaviour & Fatigue Levels', url: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/gallery/driver_drowsiness.webp' },
      { title: 'Next-Gen 3G Body-on-Frame Architecture with High-Strength Steel & 4XPLOR Intelligent Terrain Modes', url: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/gallery/next_gen_3g_frame.webp' }
    ],
    specs: {
      engineOptions: '2.0L mStallion Turbo Petrol (200 PS / 380 Nm) | 2.2L mHawk Turbo Diesel (132/175 PS, up to 400 Nm)',
      transmissions: '6-Speed Manual | 6-Speed AISIN Torque Converter Automatic | 4XPLOR 4WD with Terrain Modes',
      dimensions: '4662 mm (L) × 1917 mm (W) × 1857 mm (H)',
      wheelbase: '2750 mm',
      fuelTank: '57 Litres',
      seatingCapacity: '6 or 7 Passengers (Captain / Bench Options)'
    },
    variants: [
      {
        name: 'Z2 2.0 Petrol MT (7S)',
        exShowroom: 1385000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '2.0L mStallion Turbo (200 PS)',
        mileage: '12.50 kmpl',
        isVFM: false,
        keyFeatures: ['200 PS mStallion Engine', 'All 4 Disc Brakes', 'LED Turn Indicators', 'Electronic Power Steering (Petrol)']
      },
      {
        name: 'Z2 2.2 Diesel MT (7S)',
        exShowroom: 1425000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.2L mHawk Diesel (132 PS)',
        mileage: '15.80 kmpl',
        isVFM: false,
        keyFeatures: ['2.2L mHawk 300 Nm Torque', 'Penta-Link Rear Suspension with FSD', 'Touchscreen Infotainment', 'Rear AC Vents']
      },
      {
        name: 'Z4 2.0 Petrol MT (7S)',
        exShowroom: 1549000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '2.0L mStallion Turbo (200 PS)',
        mileage: '12.50 kmpl',
        isVFM: false,
        keyFeatures: ['20.32 cm Infotainment Display', 'Android Auto & Apple CarPlay', 'Cruise Control', 'Electronic Stability Program (ESP)']
      },
      {
        name: 'Z4 2.2 Diesel MT (7S)',
        exShowroom: 1599000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.2L mHawk Diesel (175 PS / 370 Nm)',
        mileage: '15.50 kmpl',
        isVFM: false,
        keyFeatures: ['175 PS High-Output mHawk Diesel', 'Hill Hold & Hill Descent Control', 'Second Row AC', 'Fabric Upholstery']
      },
      {
        name: 'Z4 2.2 Diesel AT (7S)',
        exShowroom: 1795000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.2L mHawk Diesel (175 PS / 400 Nm)',
        mileage: '14.20 kmpl',
        isVFM: false,
        keyFeatures: ['6-Speed AISIN Automatic', '400 Nm Peak Torque', 'Drive Modes (Zip, Zap, Zoom)', 'Electronic Power Steering']
      },
      {
        name: 'Z6 2.2 Diesel MT (7S)',
        exShowroom: 1689000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.2L mHawk Diesel (175 PS)',
        mileage: '15.50 kmpl',
        isVFM: true,
        vfmBadge: '🏆 BEST VALUE DIESEL PICK',
        keyFeatures: ['Electric Sunroof with Anti-Pinch', 'Adrenox Connected Intelligence with Alexa', '17.78 cm Colour TFT Driver Display', 'Wireless Smartphone Connectivity']
      },
      {
        name: 'Z6 2.2 Diesel AT (7S)',
        exShowroom: 1889000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.2L mHawk Diesel (175 PS / 400 Nm)',
        mileage: '14.20 kmpl',
        isVFM: true,
        vfmBadge: '🌟 BESTSELLER AUTOMATIC PICK',
        keyFeatures: ['6-Speed Automatic Transmission', 'Electric Sunroof', 'Built-in Alexa with What3Words', 'Connected Vehicle Telematics (eCall/bCall)']
      },
      {
        name: 'Z8 2.0 Petrol MT (7S)',
        exShowroom: 1874000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '2.0L mStallion Turbo (200 PS)',
        mileage: '12.20 kmpl',
        isVFM: false,
        keyFeatures: ['Rich Coffee Black Leatherette Interiors', 'Dual-Barrel LED Projector Headlamps', 'Dual-Zone FATC', 'Push Button Start/Stop & Smart Key']
      },
      {
        name: 'Z8 2.2 Diesel MT (7S)',
        exShowroom: 1939000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.2L mHawk Diesel (175 PS)',
        mileage: '15.50 kmpl',
        isVFM: false,
        keyFeatures: ['4XPLOR Intelligent Terrain Modes (4WD optional)', '6 Airbags Standard', 'Rear Parking Camera', 'Electrically Foldable ORVMs']
      },
      {
        name: 'Z8 2.2 Diesel AT (7S)',
        exShowroom: 2139000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.2L mHawk Diesel (175 PS / 400 Nm)',
        mileage: '14.20 kmpl',
        isVFM: false,
        keyFeatures: ['Smooth 6-Speed AISIN Automatic', 'R18 Diamond-Cut Alloys', 'Side & Curtain Airbags', 'Leather Wrapped Steering & Gear Shift']
      },
      {
        name: 'Z8L 2.2 Diesel AT 4WD (7S)',
        exShowroom: 2454000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.2L mHawk Diesel (175 PS / 400 Nm)',
        mileage: '13.80 kmpl',
        isVFM: false,
        vfmBadge: '🛡️ 4XPLOR 4WD OFF-ROAD KING',
        keyFeatures: ['4XPLOR Intelligent 4WD with Mechanical Rear Locking Diff', 'Sony 12-Speaker 3D Audio System', 'Front Parking Camera & Sensors', '6-Way Powered Driver Seat']
      },
      {
        name: 'Z8L 6S Captain Seats 2.2 Diesel AT 4WD',
        exShowroom: 2489000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.2L mHawk Diesel (175 PS / 400 Nm)',
        mileage: '13.80 kmpl',
        isVFM: false,
        vfmBadge: '👑 6-SEATER LUXURY FLAGSHIP',
        keyFeatures: ['Executive 2nd Row Captain Seats with Individual Armrests', 'Sony 12-Speaker Spatial Audio with Subwoofer', 'Wireless Phone Charger', 'Driver Drowsiness Alert']
      }
    ]
  },
  {
    id: 'mahindra-xuv700',
    name: 'Mahindra XUV700',
    brand: 'Mahindra',
    tagline: 'Flagship Tech Monocoque SUV with 5-Star Global NCAP, Level 2 ADAS & 200 PS mStallion Power',
    launchDate: 'Updated 2025 (AX Series Lineup)',
    bodyType: 'SUV',
    fuelTypes: ['Petrol', 'Diesel'],
    priceRange: '₹13.99 - ₹26.99 Lakh',
    minPrice: 1399000,
    maxPrice: 2699000,
    safetyRating: '5.0 ★ (Global NCAP 5-Star Rating & Safer Choice Award)',
    groundClearance: '200 mm',
    bootSpace: '450 L (3rd Row Folded)',
    waitingPeriod: '4 - 10 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/colors/ruby-velvet.webp',
    summary: 'The Mahindra XUV700 stands as India’s benchmark premium monocoque luxury SUV, combining authentic performance, world-class safety, and high-tech connectivity. Awarded 5 Stars and the coveted "Safer Choice" accolade by Global NCAP, it is propelled by explosive class-leading engines: a 2.0L mStallion Turbo Petrol churning out 200 PS and 380 Nm, or a 2.2L mHawk Turbo Diesel pumping out up to 185 PS and 450 Nm with an available intelligent All-Wheel Drive (AWD) system. Its sci-fi cabin features an expansive coast-to-coast 31.2 cm triple screen digital cockpit, custom-tuned 12-speaker Sony 3D spatial surround sound with roof-mounted acoustic drivers, an ultra-wide panoramic skyroof, flush smart door handles with approach unlock, 6-way powered memory seats with executive boss mode, and Level 2 ADAS with Adaptive Cruise Control and Auto Emergency Braking.',
    threeSixty: {
      enabled: true,
      frameFolder: 'desert-myst',
      totalFrames: 36,
      basePath: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/360'
    },
    colors: [
      { id: 'ruby-velvet', name: 'Ruby Velvet (Deep Metallic Crimson Red)', hex: '#781D2A', image: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/colors/ruby-velvet.webp' },
      { id: 'everest-white', name: 'Everest White', hex: '#F4F5F7', image: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/colors/everest-white.webp' },
      { id: 'midnight-black', name: 'Midnight Black', hex: '#111827', image: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/colors/midnight-black.webp' },
      { id: 'galaxy-grey', name: 'Galaxy Grey', hex: '#525860', image: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/colors/galaxy-grey.webp' },
      { id: 'nebula-blue', name: 'Nebula Blue', hex: '#1E3A5F', image: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/colors/nebula-blue.webp' },
      { id: 'desert-myst', name: 'Desert Myst (Earthy Khaki Metallic)', hex: '#9A9690', image: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/colors/desert-myst.webp' }
    ],
    multiAngles: [
      { label: 'Hero 3/4 Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/360/desert-myst/1.webp' },
      { label: 'Triple Screen Cockpit', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/gallery/triple_screens.webp' },
      { label: 'Panoramic Skyroof', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/gallery/panoramic_skyroof.webp' },
      { label: 'Side Profile Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/360/desert-myst/10.webp' }
    ],
    gallery: [
      { title: 'Coast-to-Coast 31.2 cm High-Definition Triple Screen Panoramic Cockpit Display System', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/gallery/triple_screens.webp' },
      { title: '540-Degree Surround View Camera with Integrated Blind View Monitor & Video Recording', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/gallery/surround_camera.webp' },
      { title: '6-Way Powered Driver & Co-Driver Seats with Memory Presets & 4-Way Executive Boss Mode', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/gallery/co_driver_boss_mode.webp' },
      { title: 'Aerodynamic Flush Smart Door Handles with Approach Auto-Unlock and Walk-Away Auto-Lock', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/gallery/approach_unlock.webp' },
      { title: 'Expansive Segment-Largest Panoramic Skyroof with Acoustic Noise Reduction Tinted Glass', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/gallery/panoramic_skyroof.webp' },
      { title: 'Plush Dual-Tone White & Black Perforated Leatherette Upholstery with French Twin-Stitching', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/gallery/leather_interior.webp' },
      { title: '18-inch Diamond-Cut Precision Engineered Alloy Wheels with All-Weather Performance Tyres', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/gallery/alloy_wheels.webp' },
      { title: 'Gloss Piano Black Front Grille with Satin Chrome Accents and Twin-Peaks Chrome Mascot', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/gallery/piano_black_grille.webp' },
      { title: 'Sony 12-Speaker 3D Immersive Spatial Audio System with Custom Equalizers & Roof Drivers', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/gallery/sony_3d_audio.webp' },
      { title: 'Adrenox Connected Car Intelligence with 70+ Connected Features & Built-in Amazon Alexa', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/gallery/adrenox_intelligence.webp' },
      { title: 'Acoustic Cabin Engineering with High-Fidelity Custom Equalizer Presets & Sound Staging', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/gallery/sixteen_speaker_surround.webp' },
      { title: 'Global NCAP 5-Star Adult Safety Rating with Special Safer Choice Accolade (7 Airbags)', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/gallery/five_star_safety_rating.webp' }
    ],
    specs: {
      engineOptions: '2.0L mStallion Turbo Petrol (200 PS / 380 Nm) | 2.2L mHawk Turbo Diesel (155/185 PS, up to 450 Nm)',
      transmissions: '6-Speed Manual | 6-Speed AISIN Torque Converter Automatic | All-Wheel Drive (AWD)',
      dimensions: '4695 mm (L) × 1890 mm (W) × 1755 mm (H)',
      wheelbase: '2750 mm',
      fuelTank: '60 Litres',
      seatingCapacity: '5, 6, or 7 Passengers (Captain / Bench Options)'
    },
    variants: [
      {
        name: 'MX 2.0 Petrol MT (5S)',
        exShowroom: 1399000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '2.0L mStallion Turbo (200 PS)',
        mileage: '13.00 kmpl',
        isVFM: false,
        keyFeatures: ['200 PS mStallion Petrol Engine', '20.32 cm Infotainment System', 'Android Auto Connectivity', 'Smart Door Handles & ISOFIX']
      },
      {
        name: 'MX 2.2 Diesel MT (5S)',
        exShowroom: 1459000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.2L mHawk Diesel (155 PS / 360 Nm)',
        mileage: '16.50 kmpl',
        isVFM: false,
        keyFeatures: ['155 PS mHawk Diesel', 'Electronic Stability Program (ESP)', '17.78 cm Cluster Display', 'Rear AC Vents']
      },
      {
        name: 'AX3 2.0 Petrol MT (5S)',
        exShowroom: 1639000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '2.0L mStallion Turbo (200 PS)',
        mileage: '13.00 kmpl',
        isVFM: false,
        keyFeatures: ['Dual 26.03 cm HD Superscreen Displays', 'Wireless Android Auto & Apple CarPlay', 'Built-in Amazon Alexa', 'LED Daytime Running Lamps']
      },
      {
        name: 'AX3 2.2 Diesel MT (7S)',
        exShowroom: 1799000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.2L mHawk Diesel (185 PS / 420 Nm)',
        mileage: '16.00 kmpl',
        isVFM: false,
        keyFeatures: ['High-Output 185 PS Diesel', '7-Seater Configuration with One-Touch Tumble', 'Dual HD Screens', 'Amazon Alexa Built-in']
      },
      {
        name: 'AX5 Select 2.0 Petrol MT (7S)',
        exShowroom: 1729000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '2.0L mStallion Turbo (200 PS)',
        mileage: '13.00 kmpl',
        isVFM: true,
        vfmBadge: '🏆 BUDGET SKYROOF VALUE PICK',
        keyFeatures: ['Panoramic Skyroof with Acoustic Tint', 'Dual 26.03 cm Screens with Adrenox', 'Push Button Start/Stop', 'Curtain Airbags Covering All 3 Rows']
      },
      {
        name: 'AX5 2.2 Diesel MT (7S)',
        exShowroom: 1919000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.2L mHawk Diesel (185 PS / 420 Nm)',
        mileage: '16.00 kmpl',
        isVFM: false,
        keyFeatures: ['Panoramic Skyroof', '17-inch Diamond-Cut Alloy Wheels', 'Curtain Airbags Across Rows', 'Sequential LED Indicators']
      },
      {
        name: 'AX5 2.2 Diesel AT (7S)',
        exShowroom: 2079000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.2L mHawk Diesel (185 PS / 450 Nm)',
        mileage: '14.50 kmpl',
        isVFM: true,
        vfmBadge: '🌟 BESTSELLER AUTOMATIC PICK',
        keyFeatures: ['Smooth 6-Speed AISIN AT (450 Nm Torque)', 'Panoramic Skyroof', 'Drive Modes (Zip, Zap, Zoom)', 'Electronic Stability Program & Hill Descent']
      },
      {
        name: 'AX7 2.0 Petrol AT (7S)',
        exShowroom: 2199000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '2.0L mStallion Turbo (200 PS / 380 Nm)',
        mileage: '12.00 kmpl',
        isVFM: false,
        keyFeatures: ['Level 2 Advanced ADAS Suite', 'Dual-Zone FATC with Air Purifier', '18-inch Diamond-Cut Alloys', 'Leatherette Dashboard & Seats']
      },
      {
        name: 'AX7 2.2 Diesel MT (7S)',
        exShowroom: 2139000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.2L mHawk Diesel (185 PS / 420 Nm)',
        mileage: '16.00 kmpl',
        isVFM: false,
        keyFeatures: ['Level 2 ADAS Safety Functions', 'Adaptive Cruise Control & Lane Keep Assist', 'Auto Emergency Braking', 'Memory Driver Seat with Welcome Retract']
      },
      {
        name: 'AX7 2.2 Diesel AT (7S)',
        exShowroom: 2299000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.2L mHawk Diesel (185 PS / 450 Nm)',
        mileage: '14.50 kmpl',
        isVFM: false,
        keyFeatures: ['6-Speed Automatic with 450 Nm Torque', 'Level 2 ADAS Suite with Smart Pilot Assist', '6-Way Powered Memory Driver Seat', 'Intelli-Control Rotary Dial']
      },
      {
        name: 'AX7L 2.2 Diesel AT (7S)',
        exShowroom: 2549000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.2L mHawk Diesel (185 PS / 450 Nm)',
        mileage: '14.50 kmpl',
        isVFM: false,
        vfmBadge: '👑 LUXURY TECH SUITE',
        keyFeatures: ['Sony 12-Speaker 3D Audio System', '540-Degree Surround Camera with DVR', 'Blind View Monitor', 'Electronic Parking Brake with Auto Hold & Knee Airbag']
      },
      {
        name: 'AX7L 6S Captain Seats Diesel AT AWD',
        exShowroom: 2699000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.2L mHawk Diesel (185 PS / 450 Nm)',
        mileage: '14.00 kmpl',
        isVFM: false,
        vfmBadge: '🛡️ FLAGSHIP AWD 6-SEATER',
        keyFeatures: ['Intelligent All-Wheel Drive (AWD)', 'Executive 2nd Row Captain Seats', 'Sony 12-Speaker 3D Audio with Roof Speakers', 'Ventilated Front Seats & Wireless Charging']
      }
    ]
  },
  {
    id: 'tata-nexon',
    name: 'Tata Nexon',
    brand: 'Tata',
    tagline: 'India’s #1 Bestselling Compact SUV with 5-Star Bharat NCAP, Voice-Assisted Sunroof & 7-Speed DCA',
    launchDate: 'Updated 2025 (Facelift Persona Lineup)',
    bodyType: 'Compact SUV',
    fuelTypes: ['Petrol', 'Diesel', 'CNG'],
    priceRange: '₹7.99 - ₹15.50 Lakh',
    minPrice: 799990,
    maxPrice: 1549990,
    safetyRating: '5.0 ★ (Bharat NCAP & Global NCAP)',
    groundClearance: '208 mm',
    bootSpace: '382 L',
    waitingPeriod: '3 - 8 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/nexon/360/ocean-blue/1.webp',
    summary: 'The Tata Nexon is India’s undisputed bestselling compact SUV, celebrated for its iconic futuristic design, 5-Star Bharat NCAP safety rating with 6 airbags standard, class-leading 208 mm ground clearance, dual 10.25-inch high-definition digital screens with wireless smartphone mirroring, 9-speaker JBL acoustic sound system with subwoofer, voice-assisted panoramic-style electric sunroof, connected X-Factor full-width LED taillamps, and advanced powertrain choices including 1.2L Turbo Petrol with quick-shifting 7-speed DCA and 1.5L Revotorq Diesel.',
    threeSixty: {
      enabled: true,
      frameFolder: 'ocean-blue',
      totalFrames: 36,
      basePath: 'https://ik.imagekit.io/2908vvlod/cars/nexon/360'
    },
    colors: [
      { id: 'ocean-blue', name: 'Ocean Blue with White Roof (Signature Hero Shade)', hex: '#0090A8', image: 'https://ik.imagekit.io/2908vvlod/cars/nexon/360/ocean-blue/1.webp' },
      { id: 'grassland-beige', name: 'Grassland Beige with White Roof', hex: '#B5A586', image: 'https://ik.imagekit.io/2908vvlod/cars/nexon/360/grassland-beige/1.webp' },
      { id: 'pure-grey', name: 'Pure Grey with Black Roof', hex: '#7C838A', image: 'https://ik.imagekit.io/2908vvlod/cars/nexon/360/pure-grey/1.webp' },
      { id: 'royal-blue', name: 'Royal Blue with Black Roof', hex: '#1D3D72', image: 'https://ik.imagekit.io/2908vvlod/cars/nexon/360/royal-blue/1.webp' },
      { id: 'daytona-grey', name: 'Daytona Grey with Black Roof', hex: '#4A5056', image: 'https://ik.imagekit.io/2908vvlod/cars/nexon/360/daytona-grey/1.webp' },
      { id: 'calgary-white', name: 'Calgary White / Pristine White', hex: '#F4F5F7', image: 'https://ik.imagekit.io/2908vvlod/cars/nexon/360/calgary-white/1.webp' }
    ],
    multiAngles: [
      { label: 'Hero Exterior Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/nexon/360/ocean-blue/1.webp' },
      { label: '10.25" Floating Cockpit', url: 'https://ik.imagekit.io/2908vvlod/cars/nexon/gallery/10-25-inch-floating-infotainment-touchscreen.webp' },
      { label: 'Voice-Assisted Sunroof', url: 'https://ik.imagekit.io/2908vvlod/cars/nexon/gallery/voice-assisted-electric-sunroof.webp' },
      { label: 'Connected X-Factor Taillamps', url: 'https://ik.imagekit.io/2908vvlod/cars/nexon/gallery/x-factor-connected-led-taillamps.webp' }
    ],
    gallery: [
      { title: 'Bi-Function Full-LED Headlamps with Sequential Daytime Running Lights and Welcome Animation', url: 'https://ik.imagekit.io/2908vvlod/cars/nexon/gallery/sequential-led-drls-bi-function-headlamps.webp' },
      { title: 'Connected Full-Width X-Factor LED Taillamps with Dynamic Signature Graphic', url: 'https://ik.imagekit.io/2908vvlod/cars/nexon/gallery/x-factor-connected-led-taillamps.webp' },
      { title: 'Next-Gen 2-Spoke Flat-Bottom Steering Wheel with Glass-Finish Illuminated Tata Logo', url: 'https://ik.imagekit.io/2908vvlod/cars/nexon/gallery/illuminated-logo-two-spoke-steering-wheel.webp' },
      { title: 'Voice-Assisted Electric Sunroof with One-Touch Tilt and Slide Control', url: 'https://ik.imagekit.io/2908vvlod/cars/nexon/gallery/voice-assisted-electric-sunroof.webp' },
      { title: '10.25-inch Floating Ultra-HD Infotainment Screen with Wireless Android Auto & Apple CarPlay', url: 'https://ik.imagekit.io/2908vvlod/cars/nexon/gallery/10-25-inch-floating-infotainment-touchscreen.webp' },
      { title: '9-Speaker JBL Concert Sound System with Dedicated Subwoofer and AudioWorX Tuning', url: 'https://ik.imagekit.io/2908vvlod/cars/nexon/gallery/jbl-9-speaker-premium-sound-system.webp' },
      { title: 'Smart Voice Control Assistant supporting Native Commands, Alexa and Navigation Shortcuts', url: 'https://ik.imagekit.io/2908vvlod/cars/nexon/gallery/smart-voice-assistant-alexa-car-controls.webp' },
      { title: '360-Degree High-Definition Surround View Camera System with 3D Bird-Eye Perspective', url: 'https://ik.imagekit.io/2908vvlod/cars/nexon/gallery/360-degree-high-definition-surround-view-camera.webp' },
      { title: 'Blind View Monitor with Live Side Feed streamed directly onto 10.25-inch Digital Cluster', url: 'https://ik.imagekit.io/2908vvlod/cars/nexon/gallery/blind-view-monitor-digital-cluster.webp' },
      { title: 'Fortified High-Strength Steel Safety Cabin with 6 Airbags & Electronic Stability Program Standard', url: 'https://ik.imagekit.io/2908vvlod/cars/nexon/gallery/fortified-safety-cage-6-airbags-standard.webp' },
      { title: '7-Speed Dual-Clutch Automatic (DCA) Transmission with Monostable E-Shifter & Paddle Shifters', url: 'https://ik.imagekit.io/2908vvlod/cars/nexon/gallery/7-speed-dual-clutch-automatic-dca-eshifter.webp' },
      { title: 'Class-Leading 382-Litre Practical Boot Capacity with 60:40 Rear Foldable Split Seats', url: 'https://ik.imagekit.io/2908vvlod/cars/nexon/gallery/spacious-382-litre-boot-space.webp' }
    ],
    specs: {
      engineOptions: '1.2L Turbocharged Revotron Petrol (120 PS / 170 Nm) | 1.5L Turbocharged Revotorq Diesel (115 PS / 260 Nm)',
      transmissions: '5-Speed Manual | 6-Speed Manual | 6-Speed AMT | 7-Speed Dual-Clutch DCA',
      dimensions: '3995 mm (L) × 1804 mm (W) × 1620 mm (H)',
      wheelbase: '2498 mm',
      fuelTank: '44 Litres',
      seatingCapacity: '5 Passengers'
    },
    variants: [
      {
        name: 'Smart 1.2 Petrol 5MT',
        exShowroom: 799990,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Turbo Revotron (120 PS)',
        mileage: '17.44 kmpl',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard', 'Electronic Stability Program (ESP)', 'LED Headlamps & DRLs', 'Multi Drive Modes (Eco, City, Sport)']
      },
      {
        name: 'Smart+ 1.2 Petrol 5MT',
        exShowroom: 889990,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Turbo Revotron (120 PS)',
        mileage: '17.44 kmpl',
        isVFM: false,
        keyFeatures: ['7-inch Touchscreen Infotainment', 'Apple CarPlay & Android Auto', 'All 4 Power Windows', 'Steering Mounted Audio Controls']
      },
      {
        name: 'Pure 1.2 Petrol 6MT',
        exShowroom: 979990,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Turbo Revotron (120 PS)',
        mileage: '17.44 kmpl',
        isVFM: false,
        keyFeatures: ['Bi-Function LED Headlamps', 'Connected X-Factor LED Taillamp', 'Rear AC Vents', 'Touch AC Control Panel']
      },
      {
        name: 'Pure S 1.2 Petrol 6MT',
        exShowroom: 1029990,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Turbo Revotron (120 PS)',
        mileage: '17.44 kmpl',
        isVFM: true,
        vfmBadge: '🏆 BUDGET VALUE PICK',
        keyFeatures: ['Voice-Assisted Electric Sunroof', 'Auto Headlamps', 'Rain-Sensing Wipers', 'Roof Rails & Shark Fin Antenna']
      },
      {
        name: 'Creative 1.2 Petrol 6MT',
        exShowroom: 1109990,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Turbo Revotron (120 PS)',
        mileage: '17.44 kmpl',
        isVFM: false,
        keyFeatures: ['10.25-inch High-Definition Touchscreen', 'Wireless Android Auto & Apple CarPlay', '16-inch Diamond Cut Alloy Wheels', 'Reverse Camera & TPMS']
      },
      {
        name: 'Creative+ S 1.2 Turbo DCA',
        exShowroom: 1319990,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Turbo Revotron (120 PS)',
        mileage: '17.01 kmpl',
        isVFM: true,
        vfmBadge: '🌟 BESTSELLER TECH PICK',
        keyFeatures: ['7-Speed Dual-Clutch Automatic (DCA)', 'Voice-Assisted Electric Sunroof', '360° High-Definition Camera System', 'Blind View Monitor & E-Shifter']
      },
      {
        name: 'Pure 1.5 Diesel 6MT',
        exShowroom: 1109990,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '1.5L Turbo Revotorq (115 PS / 260 Nm)',
        mileage: '23.23 kmpl',
        isVFM: true,
        vfmBadge: '⛽ HIGH MILEAGE DIESEL VALUE',
        keyFeatures: ['High-Torque 260 Nm Diesel Engine', '23.23 kmpl ARAI Mileage', '6 Airbags & ESP', 'Connected X-Factor LED Taillamps']
      },
      {
        name: 'Creative 1.5 Diesel 6AMT',
        exShowroom: 1289990,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '1.5L Turbo Revotorq (115 PS / 260 Nm)',
        mileage: '24.08 kmpl',
        isVFM: false,
        keyFeatures: ['6-Speed Smart AMT Automatic', '10.25-inch Touchscreen Infotainment', 'Paddle Shifters', 'Automatic Climate Control']
      },
      {
        name: 'Fearless+ S 1.2 Turbo DCA',
        exShowroom: 1479990,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Turbo Revotron (120 PS)',
        mileage: '17.01 kmpl',
        isVFM: false,
        vfmBadge: '👑 FLAGSHIP TOP SPEC',
        keyFeatures: ['Ventilated Leatherette Front Seats', '9-Speaker JBL Audio with Subwoofer', '10.25-inch Digital Instrument Cluster with Full Navigation', 'Air Purifier with AQI Display']
      },
      {
        name: 'Fearless+ S 1.5 Diesel AMT',
        exShowroom: 1549990,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '1.5L Turbo Revotorq (115 PS / 260 Nm)',
        mileage: '24.08 kmpl',
        isVFM: false,
        keyFeatures: ['Flagship Top-End Diesel Automatic', 'Ventilated Front Seats', 'Sequential LED Indicators', 'JBL Sound System & 360° Camera']
      }
    ]
  },
  {
    id: 'tata-punch',
    name: 'Tata Punch',
    brand: 'Tata',
    tagline: 'India’s #1 Highest-Selling Car with 5-Star Bharat NCAP, Voice Sunroof & Dual-Cylinder iCNG',
    launchDate: 'Updated 2025 (Persona Lineup with 10.25" Screen)',
    bodyType: 'Micro-SUV',
    fuelTypes: ['Petrol', 'CNG'],
    priceRange: '₹6.13 - ₹10.20 Lakh',
    minPrice: 612900,
    maxPrice: 1020000,
    safetyRating: '5.0 ★ (Bharat NCAP & Global NCAP)',
    groundClearance: '187 mm',
    bootSpace: '366 L',
    waitingPeriod: '3 - 6 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/punch/360/cyantific/1.webp',
    summary: 'The Tata Punch is India’s undisputed #1 highest-selling passenger vehicle, pioneering the micro-SUV segment with authentic rugged SUV stance, class-leading 187 mm ground clearance, 5-Star Global & Bharat NCAP crash safety on the ALFA-ARC architecture, voice-assisted electric sunroof, 10.25-inch high-definition floating infotainment screen with wireless Android Auto & Apple CarPlay, 17.78 cm digital driver display, 8-speaker Harman acoustic audio, wireless charging, and responsive 1.2L Revotron petrol engine available with 5-speed manual, smart AMT with Traction Pro, or industry-leading twin-cylinder iCNG technology.',
    threeSixty: {
      enabled: true,
      frameFolder: 'cyantific',
      totalFrames: 36,
      basePath: 'https://ik.imagekit.io/2908vvlod/cars/punch/360'
    },
    colors: [
      { id: 'cyantific', name: 'Cyantific Blue with White Roof (Signature Hero Shade)', hex: '#0096D6', image: 'https://ik.imagekit.io/2908vvlod/cars/punch/360/cyantific/1.webp' },
      { id: 'coorg-clouds', name: 'Coorg Clouds with Black Roof (Earthy Sage Grey)', hex: '#7A8582', image: 'https://ik.imagekit.io/2908vvlod/cars/punch/360/coorg-clouds/1.webp' },
      { id: 'caramel', name: 'Caramel with White Roof (Golden Sunset Brown)', hex: '#A36B3D', image: 'https://ik.imagekit.io/2908vvlod/cars/punch/360/caramel/1.webp' },
      { id: 'daytona-grey', name: 'Daytona Grey with Black Roof', hex: '#4A5056', image: 'https://ik.imagekit.io/2908vvlod/cars/punch/360/daytona-grey/1.webp' },
      { id: 'pristine-white', name: 'Pristine White with Black Roof', hex: '#F4F5F7', image: 'https://ik.imagekit.io/2908vvlod/cars/punch/360/pristine-white/1.webp' },
      { id: 'bengal-rogue', name: 'Bengal Rouge with White Roof (Calypso Red)', hex: '#C8232B', image: 'https://ik.imagekit.io/2908vvlod/cars/punch/360/bengal-rogue/1.webp' }
    ],
    multiAngles: [
      { label: 'Hero Micro-SUV Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/punch/360/cyantific/1.webp' },
      { label: 'Ultra-View Twin Cockpit', url: 'https://ik.imagekit.io/2908vvlod/cars/punch/gallery/ultra-view-twin-digital-cockpit.webp' },
      { label: 'Galaxy Ambient Interior', url: 'https://ik.imagekit.io/2908vvlod/cars/punch/gallery/galaxy-ambient-lighting-cabin.webp' },
      { label: 'Connected LED Taillamps', url: 'https://ik.imagekit.io/2908vvlod/cars/punch/gallery/connected-led-taillamps.webp' }
    ],
    gallery: [
      { title: 'Bold Micro-SUV Exterior Stance with 3D Front Grille and Rugged Bull Guard Lower Bumper', url: 'https://ik.imagekit.io/2908vvlod/cars/punch/gallery/3d-front-grille-bull-guard-bumper.webp' },
      { title: 'End-to-End Connected High-Mount LED Taillamps with Signature Tri-Arrow Light Guide', url: 'https://ik.imagekit.io/2908vvlod/cars/punch/gallery/connected-led-taillamps.webp' },
      { title: 'Sporty Flat-Bottom D-Cut Steering Wheel with Audio, Voice Command & Cruise Control Switches', url: 'https://ik.imagekit.io/2908vvlod/cars/punch/gallery/d-cut-steering-wheel-with-controls.webp' },
      { title: 'Ultra-View Twin Digital Cockpit with 10.25-inch High-Definition Floating Infotainment Display', url: 'https://ik.imagekit.io/2908vvlod/cars/punch/gallery/ultra-view-twin-digital-cockpit.webp' },
      { title: 'Atmospheric Galaxy Ambient Interior Mood Lighting expanding Cockpit Sophistication', url: 'https://ik.imagekit.io/2908vvlod/cars/punch/gallery/galaxy-ambient-lighting-cabin.webp' },
      { title: 'Dual-Tone Contrast White/Black Roof with Aerodynamic Integrated Functional Roof Rails', url: 'https://ik.imagekit.io/2908vvlod/cars/punch/gallery/contrast-white-roof-stylish-roof-rails.webp' },
      { title: '17.78 cm High-Definition Full Color Digital Supervision Driver Information Cluster', url: 'https://ik.imagekit.io/2908vvlod/cars/punch/gallery/17-78cm-hd-digital-instrument-cluster.webp' },
      { title: 'Fast Qi Wireless Smartphone Charging Console with Smart Active Cooling Ventilation', url: 'https://ik.imagekit.io/2908vvlod/cars/punch/gallery/wireless-smartphone-charger-qi-support.webp' },
      { title: 'Premium 8-Speaker Harman Acoustic Sound Suite (4 Full-Range Speakers + 4 Tweeters)', url: 'https://ik.imagekit.io/2908vvlod/cars/punch/gallery/harman-acoustic-sound-system.webp' },
      { title: 'Commanding High Seating Posture with Height-Adjustable Driver Seat & Front Center Armrest', url: 'https://ik.imagekit.io/2908vvlod/cars/punch/gallery/high-commanding-driver-seating.webp' },
      { title: 'ClimaTouch Fully Automatic Temperature Control System with Xpress Cool Functionality', url: 'https://ik.imagekit.io/2908vvlod/cars/punch/gallery/clima-touch-automatic-climate-control.webp' },
      { title: 'Blind View Monitor with Reverse Parking Camera and Dynamic Steering Guidelines', url: 'https://ik.imagekit.io/2908vvlod/cars/punch/gallery/blind-view-monitor-parking-assist.webp' }
    ],
    specs: {
      engineOptions: '1.2L Revotron 3-Cylinder Petrol (88 PS / 115 Nm) | 1.2L iCNG Twin-Cylinder (73.5 PS / 103 Nm)',
      transmissions: '5-Speed Manual | 5-Speed Smart AMT Automatic with Traction Pro',
      dimensions: '3827 mm (L) × 1742 mm (W) × 1615 mm (H)',
      wheelbase: '2445 mm',
      fuelTank: '37 Litres (Petrol) | 60 Litres Water Equivalent (Dual CNG Tanks)',
      seatingCapacity: '5 Passengers'
    },
    variants: [
      {
        name: 'Pure 1.2 Petrol MT',
        exShowroom: 612900,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Revotron Petrol (88 PS)',
        mileage: '20.09 kmpl',
        isVFM: false,
        keyFeatures: ['Dual Front Airbags', 'ABS with EBD & CSC', 'Front Power Windows', '90-Degree Opening Doors']
      },
      {
        name: 'Pure (O) 1.2 Petrol MT',
        exShowroom: 649900,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Revotron Petrol (88 PS)',
        mileage: '20.09 kmpl',
        isVFM: false,
        keyFeatures: ['Central Remote Locking', 'Electrically Adjustable ORVMs', 'All 4 Power Windows', 'Wheel Covers']
      },
      {
        name: 'Adventure 1.2 Petrol MT',
        exShowroom: 700000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Revotron Petrol (88 PS)',
        mileage: '20.09 kmpl',
        isVFM: false,
        keyFeatures: ['8.89 cm Infotainment Display', '4 Speakers with Steering Controls', 'Anti-Glare Rear View Mirror', 'Full Wheel Covers']
      },
      {
        name: 'Adventure Rhythm 1.2 Petrol MT',
        exShowroom: 735000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Revotron Petrol (88 PS)',
        mileage: '20.09 kmpl',
        isVFM: true,
        vfmBadge: '🏆 BUDGET VALUE PICK',
        keyFeatures: ['17.78 cm Touchscreen Infotainment', 'Apple CarPlay & Android Auto', 'Reverse Parking Camera', '2 Tweeters Audio Tuning']
      },
      {
        name: 'Adventure 1.2 Petrol AMT',
        exShowroom: 760000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Revotron Petrol (88 PS)',
        mileage: '18.80 kmpl',
        isVFM: false,
        keyFeatures: ['5-Speed Smart AMT Automatic', 'Traction Pro Mode for Slippery Roads', 'Drive Modes (City / Eco)', 'Creep Function']
      },
      {
        name: 'Adventure iCNG Twin-Cylinder MT',
        exShowroom: 795000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L Dual-Cylinder iCNG (73.5 PS)',
        mileage: '26.99 km/kg',
        isVFM: true,
        vfmBadge: '⛽ HIGH EFFICIENCY CNG PICK',
        keyFeatures: ['Patented Dual-Cylinder Technology', 'Direct CNG Start Function', 'Single Advanced ECU', 'Usable Boot Space with Luggage Floor']
      },
      {
        name: 'Accomplished 1.2 Petrol MT',
        exShowroom: 785000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Revotron Petrol (88 PS)',
        mileage: '20.09 kmpl',
        isVFM: false,
        keyFeatures: ['Push Button Start/Stop', 'Cruise Control', 'Front Fog Lamps', 'Height-Adjustable Driver Seat & LED Taillamps']
      },
      {
        name: 'Accomplished Dazzle Sunroof 1.2 MT',
        exShowroom: 880000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Revotron Petrol (88 PS)',
        mileage: '20.09 kmpl',
        isVFM: true,
        vfmBadge: '🌟 BESTSELLER TECH PICK',
        keyFeatures: ['Voice-Assisted Electric Sunroof', '10.25-inch Floating HD Touchscreen', '16-inch Diamond Cut Alloys', 'Auto Headlamps & Rain Wipers']
      },
      {
        name: 'Accomplished Dazzle Sunroof 1.2 AMT',
        exShowroom: 940000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Revotron Petrol (88 PS)',
        mileage: '18.80 kmpl',
        isVFM: false,
        keyFeatures: ['Smart AMT Automatic with Traction Pro', 'Voice-Assisted Sunroof', 'Wireless Android Auto & Apple CarPlay', 'Wireless Phone Charger']
      },
      {
        name: 'Creative Flagship Sunroof 1.2 AMT',
        exShowroom: 1020000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Revotron Petrol (88 PS)',
        mileage: '18.80 kmpl',
        isVFM: false,
        vfmBadge: '👑 TOP-END FLAGSHIP',
        keyFeatures: ['Connected Car Tech (iRA)', 'Leatherette Steering & Gear Shift', 'Cooled Glove Box & Express Cool', 'Blind View Monitor with 360° Cam']
      }
    ]
  },
  {
    id: 'tata-harrier',
    name: 'Tata Harrier',
    brand: 'Tata',
    tagline: 'Flagship 5-Star Bharat NCAP SUV with Land Rover-Derived OMEGARC, ADAS Level 2 & 12.3" Cinematic Screen',
    launchDate: 'Updated 2025 (Facelift Persona Lineup)',
    bodyType: 'Mid-Size SUV',
    fuelTypes: ['Diesel'],
    priceRange: '₹14.99 - ₹26.44 Lakh',
    minPrice: 1499990,
    maxPrice: 2644000,
    safetyRating: '5.0 ★ (Highest Bharat NCAP & GNCAP Score in India)',
    groundClearance: '205 mm',
    bootSpace: '445 L',
    waitingPeriod: '4 - 8 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/harrier/360/sunlit-yellow/1.webp',
    summary: 'The Tata Harrier is Tata Motors’ flagship mid-size 5-seater luxury SUV engineered on the legendary OMEGARC architecture derived from Land Rover’s D8 platform. Holding the highest-ever crash safety score in Indian history (5-Star Bharat NCAP), it features a commanding 170 PS / 350 Nm 2.0L Kryotec turbo-diesel engine, 12.3-inch cinematic touchscreen with wireless mirroring, 10.25-inch configurable digital cockpit with full map display, 10-speaker JBL audio with dedicated subwoofer, voice-assisted panoramic sunroof with ambient mood lighting, ventilated front seats with memory & welcome retract, bejewelled rotary terrain mode selector, hands-free powered tailgate, and Level 2 ADAS with 11 autonomous safety functions.',
    threeSixty: {
      enabled: true,
      frameFolder: 'sunlit-yellow',
      totalFrames: 36,
      basePath: 'https://ik.imagekit.io/2908vvlod/cars/harrier/360'
    },
    colors: [
      { id: 'sunlit-yellow', name: 'Sunlit Yellow with Black Roof (Signature Hero Shade)', hex: '#F7D000', image: 'https://ik.imagekit.io/2908vvlod/cars/harrier/360/sunlit-yellow/1.webp' },
      { id: 'seawed-green', name: 'Seaweed Green with Black Roof (Deep Emerald)', hex: '#2B4A3F', image: 'https://ik.imagekit.io/2908vvlod/cars/harrier/360/seawed-green/1.webp' },
      { id: 'pure-grey', name: 'Pebble Grey with Black Roof', hex: '#788085', image: 'https://ik.imagekit.io/2908vvlod/cars/harrier/360/pure-grey/1.webp' },
      { id: 'fearless-red', name: 'Coral Red with Black Roof', hex: '#B82329', image: 'https://ik.imagekit.io/2908vvlod/cars/harrier/360/fearless-red/1.webp' },
      { id: 'daytona-grey', name: 'Ash Grey with Black Roof', hex: '#474E55', image: 'https://ik.imagekit.io/2908vvlod/cars/harrier/360/daytona-grey/1.webp' },
      { id: 'prestine-white', name: 'Lunar White with Black Roof', hex: '#F4F5F7', image: 'https://ik.imagekit.io/2908vvlod/cars/harrier/360/prestine-white/1.webp' },
      { id: 'nitro-crimson', name: 'Nitro Crimson with Black Roof', hex: '#8E161C', image: 'https://ik.imagekit.io/2908vvlod/cars/harrier/360/nitro-crimson/1.webp' }
    ],
    multiAngles: [
      { label: 'Hero SUV Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/harrier/360/sunlit-yellow/1.webp' },
      { label: '12.3" Cinematic Cockpit', url: 'https://ik.imagekit.io/2908vvlod/cars/harrier/gallery/cinematic-12-3-inch-touchscreen-infotainment.webp' },
      { label: 'Panoramic Sunroof & Mood Light', url: 'https://ik.imagekit.io/2908vvlod/cars/harrier/gallery/voice-assisted-panoramic-sunroof-with-mood-lighting.webp' },
      { label: 'Connected Signature Taillamps', url: 'https://ik.imagekit.io/2908vvlod/cars/harrier/gallery/signature-connected-led-taillamp.webp' }
    ],
    gallery: [
      { title: '12.3-inch Cinematic Harman Touchscreen Infotainment with Wireless Android Auto & Apple CarPlay', url: 'https://ik.imagekit.io/2908vvlod/cars/harrier/gallery/cinematic-12-3-inch-touchscreen-infotainment.webp' },
      { title: '26.03 cm (10.25-inch) Fully Configurable Digital Instrument Cluster with Full Navigation Map View', url: 'https://ik.imagekit.io/2908vvlod/cars/harrier/gallery/26-cm-configurable-digital-instrument-cluster.webp' },
      { title: 'Next-Gen 4-Spoke Illuminated Logo Steering Wheel with Integrated Touch Capacitive Controls', url: 'https://ik.imagekit.io/2908vvlod/cars/harrier/gallery/digital-steering-wheel-with-illuminated-logo.webp' },
      { title: 'Voice-Assisted Panoramic Sunroof with Multi-Color Ambient Mood Lighting Edge Enclosure', url: 'https://ik.imagekit.io/2908vvlod/cars/harrier/gallery/voice-assisted-panoramic-sunroof-with-mood-lighting.webp' },
      { title: 'Ventilated Front Row Ergonomic Comfort Seats with Multi-Stage Seat Cooling Function', url: 'https://ik.imagekit.io/2908vvlod/cars/harrier/gallery/ventilated-front-row-comfort-seats.webp' },
      { title: '6-Way Powered Driver Seat with Memory Presets and Automatic Welcome Retract Assist', url: 'https://ik.imagekit.io/2908vvlod/cars/harrier/gallery/powered-memory-driver-seat-welcome-function.webp' },
      { title: 'Level 2 ADAS Suite with 11 Autonomous Safety Functions, Adaptive Cruise & Lane Keep Assist', url: 'https://ik.imagekit.io/2908vvlod/cars/harrier/gallery/adas-level-2-advanced-safety-suite.webp' },
      { title: '10-Speaker JBL Concert Sound System with Dedicated Subwoofer and 13 Advanced Audio Modes', url: 'https://ik.imagekit.io/2908vvlod/cars/harrier/gallery/jbl-10-speaker-premium-audio-with-subwoofer.webp' },
      { title: 'High-Definition 360-Degree 3D Surround View Camera System with Dynamic Blind View Monitor', url: 'https://ik.imagekit.io/2908vvlod/cars/harrier/gallery/360-degree-3d-surround-view-camera.webp' },
      { title: 'Bejewelled Rotary Terrain Response Selector with Integrated Digital Color Display Modes', url: 'https://ik.imagekit.io/2908vvlod/cars/harrier/gallery/bejewelled-rotary-terrain-response-selector.webp' },
      { title: 'Connected Full-Width Signature LED Taillamps with Dynamic Welcome and Goodbye Animation', url: 'https://ik.imagekit.io/2908vvlod/cars/harrier/gallery/signature-connected-led-taillamp.webp' },
      { title: 'Smart Gesture-Controlled Powered Tailgate with Hands-Free Kick Opening Sensor', url: 'https://ik.imagekit.io/2908vvlod/cars/harrier/gallery/gesture-controlled-powered-smart-tailgate.webp' }
    ],
    specs: {
      engineOptions: '2.0L Kryotec Turbocharged Diesel Engine (170 PS / 350 Nm)',
      transmissions: '6-Speed Manual | 6-Speed Torque Converter Automatic with E-Shifter & Paddle Shifters',
      dimensions: '4605 mm (L) × 1922 mm (W) × 1718 mm (H)',
      wheelbase: '2741 mm',
      fuelTank: '50 Litres',
      seatingCapacity: '5 Passengers'
    },
    variants: [
      {
        name: 'Smart 2.0 Diesel MT',
        exShowroom: 1499990,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.0L Kryotec Diesel (170 PS)',
        mileage: '16.80 kmpl',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard', 'Electronic Stability Program (ESP)', 'All 4 Disc Brakes', 'LED Projector Headlamps & DRLs']
      },
      {
        name: 'Pure 2.0 Diesel MT',
        exShowroom: 1699990,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.0L Kryotec Diesel (170 PS)',
        mileage: '16.80 kmpl',
        isVFM: false,
        keyFeatures: ['10.25-inch Touchscreen Infotainment', '10.25-inch Digital Instrument Cluster', 'Reverse Parking Camera', 'Electrically Folding ORVMs']
      },
      {
        name: 'Pure+ S 2.0 Diesel MT',
        exShowroom: 1869990,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.0L Kryotec Diesel (170 PS)',
        mileage: '16.80 kmpl',
        isVFM: true,
        vfmBadge: '🏆 BUDGET VALUE PICK',
        keyFeatures: ['Voice-Assisted Panoramic Sunroof', 'Auto Headlamps & Rain Wipers', '17-inch Alloy Wheels', 'Wireless Android Auto & Apple CarPlay']
      },
      {
        name: 'Adventure 2.0 Diesel MT',
        exShowroom: 2019990,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.0L Kryotec Diesel (170 PS)',
        mileage: '16.80 kmpl',
        isVFM: false,
        keyFeatures: ['Multi-Drive Modes & Terrain Modes', 'Leatherette Upholstery', 'Rear AC Vents', 'Cruise Control & Shark Fin Antenna']
      },
      {
        name: 'Adventure+ 2.0 Diesel AT',
        exShowroom: 2299990,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.0L Kryotec Diesel (170 PS)',
        mileage: '14.60 kmpl',
        isVFM: true,
        vfmBadge: '🌟 BESTSELLER TECH PICK',
        keyFeatures: ['6-Speed Automatic with E-Shifter & Paddle Shifters', 'Panoramic Sunroof', '360° 3D Camera with Blind View Monitor', 'Electronic Parking Brake with Auto Hold']
      },
      {
        name: 'Adventure+ A 2.0 Diesel AT',
        exShowroom: 2399990,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.0L Kryotec Diesel (170 PS)',
        mileage: '14.60 kmpl',
        isVFM: false,
        keyFeatures: ['Level 2 ADAS Safety Suite', 'Adaptive Cruise Control with Stop & Go', 'Autonomous Emergency Braking', 'Traffic Sign Recognition']
      },
      {
        name: 'Fearless 2.0 Diesel MT',
        exShowroom: 2299990,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.0L Kryotec Diesel (170 PS)',
        mileage: '16.80 kmpl',
        isVFM: false,
        keyFeatures: ['12.3-inch Cinematic Harman Touchscreen', '10-Speaker JBL Audio with Subwoofer', 'Ventilated Front Seats', 'Sequential LED DRLs & Taillamps']
      },
      {
        name: 'Fearless+ 2.0 Diesel MT',
        exShowroom: 2449990,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.0L Kryotec Diesel (170 PS)',
        mileage: '16.80 kmpl',
        isVFM: false,
        keyFeatures: ['7 Airbags (Driver Knee Airbag)', 'Level 2 ADAS Suite', 'Dual-Zone Climate Control', 'Gesture Controlled Powered Tailgate']
      },
      {
        name: 'Fearless+ 2.0 Diesel AT',
        exShowroom: 2589990,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.0L Kryotec Diesel (170 PS)',
        mileage: '14.60 kmpl',
        isVFM: false,
        vfmBadge: '👑 FLAGSHIP TOP SPEC',
        keyFeatures: ['Flagship Top-End Luxury Automatic', 'Memory Driver Seat with Welcome Retract', 'Bejewelled Terrain Selector', 'Emergency SOS (E-Call / B-Call)']
      },
      {
        name: 'Fearless+ Dark Edition 2.0 Diesel AT',
        exShowroom: 2644000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.0L Kryotec Diesel (170 PS)',
        mileage: '14.60 kmpl',
        isVFM: false,
        keyFeatures: ['Exclusive Oberon Black Exterior & R19 Dark Alloys', 'Carnelian Red & Piano Black Interior', 'All Top-End Flagship Luxury & ADAS Features']
      }
    ]
  },
  {
    id: 'tata-safari',
    name: 'Tata Safari',
    brand: 'Tata',
    tagline: 'Flagship 6 & 7-Seater Luxury SUV with Land Rover-Derived OMEGARC Architecture, 5-Star Bharat NCAP & Level 2+ ADAS',
    launchDate: 'Updated 2025 (Facelift Persona Lineup)',
    bodyType: 'SUV',
    fuelTypes: ['Diesel'],
    priceRange: '₹15.49 - ₹27.34 Lakh',
    minPrice: 1549990,
    maxPrice: 2734000,
    safetyRating: '5.0 ★ (Highest Bharat NCAP Crash Score: 30.08/32 Adult, 44.5/49 Child)',
    groundClearance: '205 mm',
    bootSpace: '420 L (3rd Row Folded) / 68 L (All Rows Up)',
    waitingPeriod: '4 - 8 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/safari/360/cosmic-gold/1.webp',
    summary: 'The Tata Safari is Tata Motors’ flagship 6 and 7-seater luxury SUV, engineered on the legendary Land Rover D8-derived OMEGARC architecture and crowned with the highest safety rating in Indian history (5-Star Bharat NCAP). Powered by the potent 2.0L Kryotec Turbo Diesel engine producing 170 PS and 350 Nm, it offers a 6-speed manual or a 6-speed torque converter automatic with JLR-inspired e-shifter and paddle shifters. The opulent cabin boasts ventilated 1st & 2nd row captain seats with winged comfort headrests, a 36.9 cm (12.3-inch) Harman Neo QLED cinematic touchscreen, a 26.03 cm configurable digital driver cockpit with full navigation display, 10-speaker JBL audio with subwoofer and Dolby Atmos, voice-assisted panoramic sunroof with ambient mood lighting, gesture-controlled powered tailgate, bejewelled terrain response selector, and Level 2+ ADAS with 12 autonomous collision-mitigation features.',
    threeSixty: {
      enabled: true,
      frameFolder: 'cosmic-gold',
      totalFrames: 36,
      basePath: 'https://ik.imagekit.io/2908vvlod/cars/safari/360'
    },
    colors: [
      { id: 'cosmic-gold', name: 'Cosmic Gold Dual Tone (Signature Hero Shade)', hex: '#CAAC7C', image: 'https://ik.imagekit.io/2908vvlod/cars/safari/360/cosmic-gold/1.webp' },
      { id: 'frost-white', name: 'Stellar Frost Dual Tone (Pearl White)', hex: '#F5F6F8', image: 'https://ik.imagekit.io/2908vvlod/cars/safari/360/frost-white/1.webp' },
      { id: 'galactic-sapphire', name: 'Galactic Sapphire Dual Tone (Deep Royal Blue)', hex: '#172F5E', image: 'https://ik.imagekit.io/2908vvlod/cars/safari/360/galactic-sapphire/1.webp' },
      { id: 'stardust-ash', name: 'Stardust Ash Dual Tone (Smoky Grey)', hex: '#38393B', image: 'https://ik.imagekit.io/2908vvlod/cars/safari/360/stardust-ash/1.webp' },
      { id: 'supernova-copper', name: 'Supernova Copper Dual Tone (Burnt Sunset)', hex: '#CA7F6A', image: 'https://ik.imagekit.io/2908vvlod/cars/safari/360/supernova-copper/1.webp' },
      { id: 'lunar-slate', name: 'Lunar Slate Dual Tone (Pebble Grey)', hex: '#8A8B8F', image: 'https://ik.imagekit.io/2908vvlod/cars/safari/360/lunar-slate/1.webp' },
      { id: 'oberon-black', name: 'Oberon Black (Dark Edition)', hex: '#1A1D20', image: 'https://ik.imagekit.io/2908vvlod/cars/safari/360/oberon-black/1.webp' }
    ],
    multiAngles: [
      { label: 'Hero Flagship Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/safari/360/cosmic-gold/1.webp' },
      { label: 'Cinematic Neo QLED Cockpit', url: 'https://ik.imagekit.io/2908vvlod/cars/safari/gallery/infotainment.webp' },
      { label: 'Ventilated Captain Seats', url: 'https://ik.imagekit.io/2908vvlod/cars/safari/gallery/ventilated_seats.webp' },
      { label: 'Panoramic Sky Lounge', url: 'https://ik.imagekit.io/2908vvlod/cars/safari/gallery/panoramic_sunroof.webp' }
    ],
    gallery: [
      { title: '36.9 cm (12.3-inch) Cinematic Harman Neo QLED Touchscreen Infotainment with Wireless Smartphone Mirroring', url: 'https://ik.imagekit.io/2908vvlod/cars/safari/gallery/infotainment.webp' },
      { title: '26.03 cm (10.25-inch) High-Definition Digital Instrument Cluster with Full Screen Navigation Map View', url: 'https://ik.imagekit.io/2908vvlod/cars/safari/gallery/digital_cluster.webp' },
      { title: 'Ventilated 1st and 2nd Row Executive Captain Seats with Winged Headrests and Multi-Stage Cooling', url: 'https://ik.imagekit.io/2908vvlod/cars/safari/gallery/ventilated_seats.webp' },
      { title: 'Bejewelled Rotary Terrain Response Selector with Integrated Digital Color Display Modes (Normal, Rough, Wet)', url: 'https://ik.imagekit.io/2908vvlod/cars/safari/gallery/terrain_response.webp' },
      { title: 'Voice-Assisted Panoramic Sky Lounge Sunroof with Multi-Color Ambient Mood Lighting Strips', url: 'https://ik.imagekit.io/2908vvlod/cars/safari/gallery/panoramic_sunroof.webp' },
      { title: 'JLR-Inspired Command E-Shifter with Ergonomic Shift-by-Wire Technology and Steering Paddle Shifters', url: 'https://ik.imagekit.io/2908vvlod/cars/safari/gallery/e_shifter.webp' },
      { title: 'Advanced Level 2+ ADAS Safety Suite with 12 Autonomous Driver Assistance Features and Adaptive Cruise', url: 'https://ik.imagekit.io/2908vvlod/cars/safari/gallery/adas_safety.webp' },
      { title: 'Connected Full-Width Signature LED Taillamps with Dynamic Welcome and Goodbye Animation Sequences', url: 'https://ik.imagekit.io/2908vvlod/cars/safari/gallery/led_tail_lamps.webp' },
      { title: 'Bi-LED Projector Headlamps with End-to-End Daytime Running Lamps and Sequential Turn Indicators', url: 'https://ik.imagekit.io/2908vvlod/cars/safari/gallery/bi_led_headlamps.webp' },
      { title: '10 JBL Audiophile Sound System with Dedicated Subwoofer and Harman Acoustic Optimization', url: 'https://ik.imagekit.io/2908vvlod/cars/safari/gallery/jbl_audio.webp' },
      { title: 'Smart Gesture-Controlled Hands-Free Electric Tailgate with Obstacle Detection Anti-Pinch', url: 'https://ik.imagekit.io/2908vvlod/cars/safari/gallery/smart_tailgate.webp' },
      { title: 'Luxurious 3rd Row Theater Seating with Dedicated Blower AC Controls, Cup Holders and Fast USB Ports', url: 'https://ik.imagekit.io/2908vvlod/cars/safari/gallery/third_row_seats.webp' }
    ],
    specs: {
      engineOptions: '2.0L Kryotec Turbocharged Diesel Engine (170 PS / 350 Nm)',
      transmissions: '6-Speed Manual | 6-Speed Torque Converter Automatic with E-Shifter & Paddle Shifters',
      dimensions: '4668 mm (L) × 1894 mm (W) × 1795 mm (H)',
      wheelbase: '2741 mm',
      fuelTank: '50 Litres',
      seatingCapacity: '6 or 7 Passengers (Captain / Bench Options)'
    },
    variants: [
      {
        name: 'Smart 2.0 Diesel 6MT (7S)',
        exShowroom: 1549990,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.0L Kryotec Diesel (170 PS)',
        mileage: '16.30 kmpl',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard', 'Electronic Stability Program (ESP) with Hill Hold', 'All-4 Disc Brakes', 'Tilt & Telescopic Steering with Illuminated Logo']
      },
      {
        name: 'Pure 2.0 Diesel 6MT (7S)',
        exShowroom: 1699990,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.0L Kryotec Diesel (170 PS)',
        mileage: '16.30 kmpl',
        isVFM: false,
        keyFeatures: ['10.25-inch High-Definition Digital Cluster', '26.03 cm Touchscreen Infotainment', 'Reverse Parking Camera', 'Electrically Adjustable ORVMs']
      },
      {
        name: 'Pure+ 2.0 Diesel 6MT (7S)',
        exShowroom: 1749990,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.0L Kryotec Diesel (170 PS)',
        mileage: '16.30 kmpl',
        isVFM: false,
        keyFeatures: ['Wireless Android Auto & Apple CarPlay', 'Cruise Control', '17-inch Alloy Wheels', 'Shark Fin Antenna']
      },
      {
        name: 'Pure+ S Sunroof 2.0 Diesel 6MT (7S)',
        exShowroom: 1849990,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.0L Kryotec Diesel (170 PS)',
        mileage: '16.30 kmpl',
        isVFM: true,
        vfmBadge: '🏆 BUDGET VALUE PICK',
        keyFeatures: ['Voice-Assisted Panoramic Sunroof with Mood Lighting', 'Rain Sensing Wipers', 'Auto Headlamps', 'Multi Drive Modes (Eco, City, Sport)']
      },
      {
        name: 'Adventure 2.0 Diesel 6MT (7S)',
        exShowroom: 1999990,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '2.0L Kryotec Diesel (170 PS)',
        mileage: '16.30 kmpl',
        isVFM: false,
        keyFeatures: ['18-inch Diamond Cut Alloys', 'Terrain Response Modes (Normal, Rough, Wet)', 'Push Button Start/Stop', 'Leatherette Upholstery']
      },
      {
        name: 'Adventure+ 2.0 Diesel 6AT (7S)',
        exShowroom: 2249990,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.0L Kryotec Diesel (170 PS)',
        mileage: '14.50 kmpl',
        isVFM: true,
        vfmBadge: '🌟 BESTSELLER AUTOMATIC PICK',
        keyFeatures: ['6-Speed Automatic with JLR E-Shifter & Paddle Shifters', '360° 3D Surround View Camera', 'Blind View Monitor', 'Electronic Parking Brake with Auto Hold']
      },
      {
        name: 'Adventure+ A (ADAS) 2.0 Diesel 6AT (7S)',
        exShowroom: 2349990,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.0L Kryotec Diesel (170 PS)',
        mileage: '14.50 kmpl',
        isVFM: true,
        vfmBadge: '🛡️ ADAS TECH VALUE PICK',
        keyFeatures: ['Level 2+ ADAS Safety Suite with 12 Radar Features', 'Adaptive Cruise Control with Stop & Go', 'Autonomous Emergency Braking', 'Rear Cross Traffic Alert']
      },
      {
        name: 'Accomplished 2.0 Diesel 6AT (7S)',
        exShowroom: 2509990,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.0L Kryotec Diesel (170 PS)',
        mileage: '14.50 kmpl',
        isVFM: false,
        keyFeatures: ['36.9 cm Harman Neo QLED Touchscreen', 'Ventilated 1st Row Seats', 'Voice-Assisted Dual-Zone Automatic Climate Control', '10-Speaker JBL Audio System']
      },
      {
        name: 'Accomplished+ 6S Captain Seats 2.0 Diesel 6AT',
        exShowroom: 2669990,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.0L Kryotec Diesel (170 PS)',
        mileage: '14.50 kmpl',
        isVFM: false,
        vfmBadge: '👑 6-SEATER LUXURY FLAGSHIP',
        keyFeatures: ['Ventilated 2nd Row Captain Seats with Winged Headrests', 'Gesture Powered Tailgate', '7 Airbags (Knee Airbag)', 'Emergency Call & Breakdown Assistance']
      },
      {
        name: 'Accomplished+ Dark Edition 6S 2.0 Diesel 6AT',
        exShowroom: 2734000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.0L Kryotec Diesel (170 PS)',
        mileage: '14.50 kmpl',
        isVFM: false,
        keyFeatures: ['Exclusive Oberon Black Finish with R19 Blackstone Alloys', 'Carnelian Red & Piano Black Dark Theme Interior', 'Top-End Level 2+ ADAS Suite & JBL 10-Speaker Acoustic Audio']
      }
    ]
  },
  {
    id: 'tata-altroz',
    name: 'Tata Altroz',
    brand: 'Tata',
    tagline: '5-Star Bharat NCAP Gold Standard Premium Hatchback with Twin-Cylinder iCNG, Voice Sunroof & 7-Speed Dual-Clutch DCA',
    launchDate: 'Updated 2025 (iCNG & Racer Lineup)',
    bodyType: 'Hatchback',
    fuelTypes: ['Petrol', 'CNG', 'Diesel'],
    priceRange: '₹6.65 - ₹11.35 Lakh',
    minPrice: 664900,
    maxPrice: 1134900,
    safetyRating: '5.0 ★ (Global NCAP 5-Star Adult Safety Rating)',
    groundClearance: '165 mm',
    bootSpace: '345 L (ICE) / 210 L (iCNG Usable Space)',
    waitingPeriod: '2 - 6 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/altroz/colors/ember-glow.webp',
    summary: 'The Tata Altroz is India’s benchmark "Gold Standard" premium hatchback, built on the advanced ALFA-ARC (Agile Light Flexible Advanced Architecture) and awarded an exemplary 5-Star Adult Safety Rating by Global NCAP. It offers India\'s most versatile powertrain spectrum: an efficient 1.2L Revotron 3-cylinder Petrol (88 PS / 115 Nm), an innovative Twin-Cylinder iCNG (73.5 PS / 103 Nm) that cleverly tucks dual cylinders beneath the luggage floor to preserve a class-leading 210 litres of usable boot space, a high-torque 1.5L Revotorq 4-cylinder Turbo Diesel (90 PS / 200 Nm) delivering up to 23.64 kmpl, and a performance-tuned 1.2L i-Turbo+ Petrol (120 PS / 170 Nm) in the Altroz Racer. Transmission options feature a slick 5-speed manual and a world-class Wet-Clutch 7-Speed DCA (Dual-Clutch Automatic) with machine learning shift logic. The cabin boasts 90-degree wide-opening doors, a 26.03 cm (10.25") HD touchscreen by HARMAN, 17.78 cm digital cluster, voice-assisted electric sunroof, 360-degree surround camera with blind-view monitor, wireless charging, and plush leatherette ventilated front seats.',
    threeSixty: {
      enabled: true,
      frameFolder: 'ember-glow',
      totalFrames: 36,
      basePath: 'https://ik.imagekit.io/2908vvlod/cars/altroz/360'
    },
    colors: [
      { id: 'ember-glow', name: 'Ember Glow (Downtown Red)', hex: '#D83519', bg: '#D83519', image: 'https://ik.imagekit.io/2908vvlod/cars/altroz/colors/ember-glow.webp' },
      { id: 'dune-glow', name: 'Dune Glow', hex: '#BFAE9C', bg: '#BFAE9C', image: 'https://ik.imagekit.io/2908vvlod/cars/altroz/colors/dune-glow.webp' },
      { id: 'royal-blue', name: 'Royal Blue', hex: '#0B1E50', bg: '#0B1E50', image: 'https://ik.imagekit.io/2908vvlod/cars/altroz/colors/royal-blue.webp' },
      { id: 'pure-grey', name: 'Pure Grey', hex: '#7F7F7F', bg: '#7F7F7F', image: 'https://ik.imagekit.io/2908vvlod/cars/altroz/colors/pure-grey.webp' },
      { id: 'pristine-white', name: 'Pristine White', hex: '#FFFFFF', bg: '#FFFFFF', image: 'https://ik.imagekit.io/2908vvlod/cars/altroz/colors/pristine-white.webp' }
    ],
    multiAngle: [
      { label: 'Front 3/4 Studio View', url: 'https://ik.imagekit.io/2908vvlod/cars/altroz/360/ember-glow/1.webp' },
      { label: 'Side Profile Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/altroz/360/ember-glow/10.webp' },
      { label: 'Rear 3/4 Road View', url: 'https://ik.imagekit.io/2908vvlod/cars/altroz/360/ember-glow/19.webp' },
      { label: 'Direct Front Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/altroz/360/ember-glow/28.webp' }
    ],
    gallery: [
      { title: 'Dual-Tone Cockpit Dashboard with Ambient Mood Lighting & Satin Silver Accents', url: 'https://ik.imagekit.io/2908vvlod/cars/altroz/gallery/dashboard.webp' },
      { title: 'Voice-Assisted Electric Sunroof with Anti-Pinch Safety Sensor & One-Touch Tilt', url: 'https://ik.imagekit.io/2908vvlod/cars/altroz/gallery/electric_sunroof.webp' },
      { title: 'Innovative Twin-Cylinder iCNG Tech Preserving 210 Litres Usable Luggage Trunk Space', url: 'https://ik.imagekit.io/2908vvlod/cars/altroz/gallery/icng_boot_space.webp' },
      { title: '360-Degree HD Surround View Camera with Integrated Dynamic Blind Spot Monitor', url: 'https://ik.imagekit.io/2908vvlod/cars/altroz/gallery/surround_camera_360.webp' },
      { title: '26.03 cm (10.25-inch) Floating HD Touchscreen by HARMAN with Wireless Apple CarPlay', url: 'https://ik.imagekit.io/2908vvlod/cars/altroz/gallery/touchscreen_infotainment.webp' },
      { title: '17.78 cm TFT Digital Instrument Cluster with Turn-by-Turn Navigation Prompts', url: 'https://ik.imagekit.io/2908vvlod/cars/altroz/gallery/digital_cluster.webp' },
      { title: 'Fast Wireless Smartphone Charging Pad with Cooling Ventilation Air Inlet', url: 'https://ik.imagekit.io/2908vvlod/cars/altroz/gallery/wireless_charging.webp' },
      { title: 'Executive Rear Cabin with Dedicated AC Vents, Armrest & 90-Degree Door Opening', url: 'https://ik.imagekit.io/2908vvlod/cars/altroz/gallery/rear_cabin_comfort.webp' },
      { title: 'Ergonomic Perforated Leatherette Seats with Front Seat Ventilation in Racer Trims', url: 'https://ik.imagekit.io/2908vvlod/cars/altroz/gallery/leatherette_seats.webp' },
      { title: '16-inch Laser-Cut Precision Dual-Tone Diamond Alloy Wheels with Aero Profile', url: 'https://ik.imagekit.io/2908vvlod/cars/altroz/gallery/laser_cut_alloys.webp' },
      { title: 'Dual-Chamber Projector Headlamps with Signature LED DRLs & Follow-Me-Home Function', url: 'https://ik.imagekit.io/2908vvlod/cars/altroz/gallery/projector_headlamps.webp' },
      { title: 'Piano Black Athletic Grille with Chrome Humanity Line & 5-Star Bharat NCAP Badge', url: 'https://ik.imagekit.io/2908vvlod/cars/altroz/gallery/humanity_grille.webp' }
    ],
    specs: {
      engineOptions: '1.2L Revotron Petrol (88 PS / 115 Nm) | 1.2L iCNG (73.5 PS / 103 Nm) | 1.5L Revotorq Diesel (90 PS / 200 Nm) | 1.2L Turbo Racer (120 PS / 170 Nm)',
      transmissions: '5-Speed Manual | 7-Speed Wet-Clutch Dual-Clutch Automatic (DCA)',
      dimensions: '3990 mm (L) × 1755 mm (W) × 1523 mm (H)',
      wheelbase: '2501 mm',
      fuelTank: '37 Litres Petrol/Diesel | 60 Litres Water Capacity (Dual Underfloor CNG Cylinders)',
      seatingCapacity: '5 Passengers (Flat Floor Architecture)'
    },
    variants: [
      {
        name: 'XE 1.2 Petrol MT',
        exShowroom: 664900,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Revotron Petrol (88 PS / 115 Nm)',
        mileage: '19.33 kmpl',
        isVFM: false,
        keyFeatures: ['ALFA-ARC Architecture with 5-Star Safety', 'Dual Front Airbags & ABS with EBD', 'Drive Modes (City & Eco)', '90-Degree Opening Doors']
      },
      {
        name: 'XM 1.2 Petrol MT',
        exShowroom: 714900,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Revotron Petrol (88 PS / 115 Nm)',
        mileage: '19.33 kmpl',
        isVFM: false,
        keyFeatures: ['Electric Foldable ORVMs', '10.16 cm Digital Instrument Cluster', 'Steering-Mounted Audio Controls', 'Front & Rear Power Windows']
      },
      {
        name: 'XM Plus 1.2 Petrol MT',
        exShowroom: 774900,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Revotron Petrol (88 PS / 115 Nm)',
        mileage: '19.33 kmpl',
        isVFM: true,
        vfmBadge: '🌟 EVERYDAY COMMUTER VALUE',
        keyFeatures: ['17.78 cm Touchscreen Infotainment by HARMAN', 'Apple CarPlay & Android Auto', 'Cruise Control', '16-inch Full Wheel Covers']
      },
      {
        name: 'XM Plus (S) 1.2 Petrol MT',
        exShowroom: 814900,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Revotron Petrol (88 PS / 115 Nm)',
        mileage: '19.33 kmpl',
        isVFM: false,
        keyFeatures: ['Voice-Assisted Electric Sunroof', 'Shark Fin Antenna', 'Automatic Headlamps', 'Rain-Sensing Wipers']
      },
      {
        name: 'XM Plus iCNG (Twin-Cylinder)',
        exShowroom: 839900,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L iCNG Twin-Cylinder (73.5 PS / 103 Nm)',
        mileage: '26.20 km/kg',
        isVFM: true,
        vfmBadge: '🌿 GREEN TWIN-CYLINDER VFM PICK',
        keyFeatures: ['Patented Twin-Cylinder Underfloor CNG Tanks (210L Boot Space)', 'Direct Start in CNG Mode', '17.78 cm Touchscreen Infotainment', 'Thermal Incident Safety Cutoff']
      },
      {
        name: 'XZ 1.2 Petrol MT',
        exShowroom: 889900,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Revotron Petrol (88 PS / 115 Nm)',
        mileage: '19.33 kmpl',
        isVFM: false,
        keyFeatures: ['16-inch Laser-Cut Dual-Tone Alloy Wheels', 'Fully Automatic Temperature Control (FATC)', 'Projector Headlamps with LED DRLs', 'Cooled Glovebox with Illumination']
      },
      {
        name: 'XZ 1.2 Petrol DCA (Automatic)',
        exShowroom: 974900,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Revotron Petrol (88 PS / 115 Nm)',
        mileage: '18.50 kmpl',
        isVFM: true,
        vfmBadge: '⚡ SEGMENT SMOOTHEST DUAL-CLUTCH',
        keyFeatures: ['World-Class 7-Speed Wet-Clutch DCA Transmission', 'Active Cooling Technology & Machine Learning', 'Shift-by-Wire Monostable Shifter', 'Electronic Stability Program (ESP)']
      },
      {
        name: 'XZ Plus (S) 1.2 Petrol MT',
        exShowroom: 929900,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Revotron Petrol (88 PS / 115 Nm)',
        mileage: '19.33 kmpl',
        isVFM: false,
        keyFeatures: ['Voice-Assisted Electric Sunroof', '26.03 cm (10.25") HD Floating Touchscreen', 'Wireless Smartphone Charger', 'Rear AC Vents & Central Armrest']
      },
      {
        name: 'XZ Plus (S) iCNG (Twin-Cylinder)',
        exShowroom: 999900,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L iCNG Twin-Cylinder (73.5 PS / 103 Nm)',
        mileage: '26.20 km/kg',
        isVFM: true,
        vfmBadge: '🏆 FULLY-LOADED SUNROOF CNG',
        keyFeatures: ['Electric Voice-Operated Sunroof with CNG', 'Twin Underfloor Cylinders (Usable Luggage Area)', 'Leatherette Seat Upholstery', 'Wireless Phone Charger & Rear AC Vents']
      },
      {
        name: 'XZ Plus (S) LUX 1.2 Petrol DCA',
        exShowroom: 1049900,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Revotron Petrol (88 PS / 115 Nm)',
        mileage: '18.50 kmpl',
        isVFM: true,
        vfmBadge: '👑 LUXURY TECH AUTOMATIC',
        keyFeatures: ['7-Speed Wet-Clutch DCA Automatic', '360-Degree Surround Camera with Blind View Monitor', '26.03 cm HD Display with Wireless CarPlay', 'Electric Sunroof & Ambient Lighting']
      },
      {
        name: 'XM Plus 1.5 Diesel MT',
        exShowroom: 899900,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '1.5L Revotorq Turbo Diesel (90 PS / 200 Nm)',
        mileage: '23.64 kmpl',
        isVFM: false,
        keyFeatures: ['Torquey 1.5L Revotorq 4-Cylinder Diesel (200 Nm)', 'Highway Fuel Efficiency up to 23.64 kmpl', 'Cruise Control & 17.78 cm Infotainment', 'Drive Modes (City & Eco)']
      },
      {
        name: 'XZ Plus (S) 1.5 Diesel MT',
        exShowroom: 1079900,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '1.5L Revotorq Turbo Diesel (90 PS / 200 Nm)',
        mileage: '23.64 kmpl',
        isVFM: true,
        vfmBadge: '🚀 LONG-DISTANCE TORQUE KING',
        keyFeatures: ['Massive 200 Nm Turbo Diesel Torque', 'Voice-Assisted Electric Sunroof', '16-inch Laser-Cut Alloys', '26.03 cm HD Touchscreen & Wireless Charging']
      },
      {
        name: 'Racer R1 1.2 Turbo Petrol (120 PS)',
        exShowroom: 949900,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L i-Turbo+ Petrol (120 PS / 170 Nm)',
        mileage: '17.50 kmpl',
        isVFM: false,
        keyFeatures: ['High-Performance 120 PS Turbo Petrol Engine', 'Sporty Dual White Racing Stripes & Shadow Black Roof', 'Dual Exhaust Tips with Sporty Throaty Note', '6 Airbags Standard']
      },
      {
        name: 'Racer R3 1.2 Turbo Petrol (120 PS)',
        exShowroom: 1099900,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L i-Turbo+ Petrol (120 PS / 170 Nm)',
        mileage: '17.50 kmpl',
        isVFM: true,
        vfmBadge: '🏎️ TRACK-INSPIRED HOT HATCH',
        keyFeatures: ['120 PS / 170 Nm Turbo with 6-Speed Short-Throw MT', 'Segment-First Ventilated Front Seats', '360-Degree Surround Camera with Blind View', 'iRA Connected Tech with 70+ Smart Features']
      }
    ]
  },
  {
    id: 'tata-tiago',
    name: 'Tata Tiago',
    brand: 'Tata',
    tagline: 'India\'s Safest Entry Hatchback with 4-Star Global NCAP, Twin-Cylinder iCNG & Smooth AMT',
    launchDate: 'Updated 2025 (iCNG & Dual-Tone Lineup)',
    bodyType: 'Hatchback',
    fuelTypes: ['Petrol', 'CNG'],
    priceRange: '₹5.65 - ₹8.90 Lakh',
    minPrice: 564900,
    maxPrice: 889900,
    safetyRating: '4.0 ★ (Global NCAP 4-Star Adult Safety Rating)',
    groundClearance: '170 mm',
    bootSpace: '242 L (Petrol) / Usable Underfloor Twin-Cylinder CNG Luggage Space',
    waitingPeriod: '2 - 4 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/tiago/colors/flame-red.webp',
    summary: 'The Tata Tiago is India’s benchmark entry-level family hatchback, renowned for setting the gold standard in cabin build quality and passenger protection with a certified 4-Star Global NCAP safety rating. Powered by the energetic 1.2L Revotron 3-cylinder Petrol engine producing 86 PS and 113 Nm of torque, it pairs with either a crisp 5-speed manual or a convenient 5-speed smart AMT automatic. For eco-conscious commuters, the groundbreaking Tiago iCNG introduces Tata\'s patented Twin-Cylinder technology—cleverly mounting dual cylinders under the boot floor to provide genuine usable luggage capacity alongside direct start in CNG mode and 26.49 km/kg efficiency. The modern dual-tone cabin includes a 17.78 cm touchscreen infotainment system by HARMAN with 8-speaker surround acoustics, digital instrument cluster, automatic climate control, rear parking camera, projector headlamps with LED DRLs, and corner stability control.',
    threeSixty: {
      enabled: true,
      frameFolder: 'flame-red',
      totalFrames: 36,
      basePath: 'https://ik.imagekit.io/2908vvlod/cars/tiago/360'
    },
    colors: [
      { id: 'flame-red', name: 'Varanasi Vibrance (Flame Red)', hex: '#CF4B44', bg: '#CF4B44', image: 'https://ik.imagekit.io/2908vvlod/cars/tiago/colors/flame-red.webp' },
      { id: 'pangong-pulse', name: 'Pangong Pulse (Sky Blue)', hex: '#90ABC0', bg: '#90ABC0', image: 'https://ik.imagekit.io/2908vvlod/cars/tiago/colors/pangong-pulse.webp' },
      { id: 'pristine-white', name: 'Pristine White', hex: '#F3F3F3', bg: '#F3F3F3', image: 'https://ik.imagekit.io/2908vvlod/cars/tiago/colors/pristine-white.webp' },
      { id: 'daytona-grey', name: 'Daytona Grey', hex: '#373739', bg: '#373739', image: 'https://ik.imagekit.io/2908vvlod/cars/tiago/colors/daytona-grey.webp' },
      { id: 'sobo-surge', name: 'Sobo Surge (Coffee Bronze)', hex: '#978483', bg: '#978483', image: 'https://ik.imagekit.io/2908vvlod/cars/tiago/colors/sobo-surge.webp' },
      { id: 'pure-grey', name: 'Pure Grey', hex: '#A1A2A5', bg: '#A1A2A5', image: 'https://ik.imagekit.io/2908vvlod/cars/tiago/colors/pure-grey.webp' }
    ],
    multiAngle: [
      { label: 'Front 3/4 Studio View', url: 'https://ik.imagekit.io/2908vvlod/cars/tiago/360/flame-red/1.webp' },
      { label: 'Side Profile Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/tiago/360/flame-red/10.webp' },
      { label: 'Rear 3/4 Road View', url: 'https://ik.imagekit.io/2908vvlod/cars/tiago/360/flame-red/19.webp' },
      { label: 'Direct Front Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/tiago/360/flame-red/28.webp' }
    ],
    gallery: [
      { title: 'Dual-Tone Cockpit Dashboard with Premium Piano Black Center Console', url: 'https://ik.imagekit.io/2908vvlod/cars/tiago/gallery/dashboard.webp' },
      { title: '17.78 cm Touchscreen Infotainment System by HARMAN with Apple CarPlay & Android Auto', url: 'https://ik.imagekit.io/2908vvlod/cars/tiago/gallery/touchscreen.webp' },
      { title: 'Fully Digital Instrument Cluster with Dual-Dial RPM Gauges & Trip Telemetry', url: 'https://ik.imagekit.io/2908vvlod/cars/tiago/gallery/instrument_cluster.webp' },
      { title: 'Practical 242 Litre Luggage Boot & Underfloor Twin-Cylinder iCNG Usable Space', url: 'https://ik.imagekit.io/2908vvlod/cars/tiago/gallery/open_trunk.webp' },
      { title: 'Ergonomic Sculpted Fabric Bucket Seats with Height-Adjustable Driver Seat', url: 'https://ik.imagekit.io/2908vvlod/cars/tiago/gallery/front_seats.webp' },
      { title: 'Spacious 5-Seater Cabin with Wide Rear Legroom & Integrated Headrests', url: 'https://ik.imagekit.io/2908vvlod/cars/tiago/gallery/rear_cabin.webp' },
      { title: '15-inch Dual-Tone Precision Diamond-Cut Alloy Wheels', url: 'https://ik.imagekit.io/2908vvlod/cars/tiago/gallery/alloy_wheels.webp' },
      { title: 'Angular Dual-Chamber Headlamps with Signature LED Daytime Running Lights (DRLs)', url: 'https://ik.imagekit.io/2908vvlod/cars/tiago/gallery/projector_headlamps.webp' },
      { title: 'Gloss Piano Black Front Grille with Tri-Arrow Motif & Chrome Humanity Line', url: 'https://ik.imagekit.io/2908vvlod/cars/tiago/gallery/humanity_grille.webp' },
      { title: 'Segment-First High-Definition Surround Camera with Dynamic Reverse Parking Guidelines', url: 'https://ik.imagekit.io/2908vvlod/cars/tiago/gallery/surround_camera_360.webp' },
      { title: 'Convenient Smart Automated Manual Transmission (AMT) with Manual Shift Gate', url: 'https://ik.imagekit.io/2908vvlod/cars/tiago/gallery/gear_shifter.webp' },
      { title: '4-Star Global NCAP Impact-Absorbing High-Strength Steel Body Structure', url: 'https://ik.imagekit.io/2908vvlod/cars/tiago/gallery/front_stance.webp' }
    ],
    specs: {
      engineOptions: '1.2L Revotron 3-Cylinder Petrol (86 PS / 113 Nm) | 1.2L Bi-Fuel iCNG (73.5 PS / 95 Nm)',
      transmissions: '5-Speed Manual | 5-Speed Smart Automated Manual Transmission (AMT)',
      dimensions: '3765 mm (L) × 1677 mm (W) × 1535 mm (H)',
      wheelbase: '2400 mm',
      fuelTank: '35 Litres Petrol | 60 Litres Water Capacity (Dual Underfloor CNG Tanks)',
      seatingCapacity: '5 Passengers'
    },
    variants: [
      {
        name: 'XE 1.2 Petrol MT',
        exShowroom: 564900,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Revotron Petrol (86 PS / 113 Nm)',
        mileage: '19.01 kmpl',
        isVFM: false,
        keyFeatures: ['4-Star Global NCAP Safety Rating', 'Dual Front Airbags & ABS with EBD', 'Corner Stability Control (CSC)', 'Immobilizer & Body-Colored Bumpers']
      },
      {
        name: 'XM 1.2 Petrol MT',
        exShowroom: 600000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Revotron Petrol (86 PS / 113 Nm)',
        mileage: '19.01 kmpl',
        isVFM: false,
        keyFeatures: ['Front Power Windows', 'Central Locking with Key', 'Manual Day/Night IRVM', 'Integrated Rear Headrests']
      },
      {
        name: 'XT 1.2 Petrol MT',
        exShowroom: 640000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Revotron Petrol (86 PS / 113 Nm)',
        mileage: '19.01 kmpl',
        isVFM: true,
        vfmBadge: '🌟 BUDGET DAILY COMMUTER',
        keyFeatures: ['14-inch Hyperstyle Wheels', 'Electrically Adjustable ORVMs with Turn Indicators', 'Steering-Mounted Audio Controls', 'Front & Rear Power Windows']
      },
      {
        name: 'XT Rhythm 1.2 Petrol MT',
        exShowroom: 670000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Revotron Petrol (86 PS / 113 Nm)',
        mileage: '19.01 kmpl',
        isVFM: false,
        keyFeatures: ['17.78 cm Touchscreen Infotainment by HARMAN', '4 Speakers & 4 Tweeters Sound System', 'Reverse Parking Camera with Guidelines', 'Voice Commands Support']
      },
      {
        name: 'XTA 1.2 Petrol AMT',
        exShowroom: 695000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Revotron Petrol (86 PS / 113 Nm)',
        mileage: '19.00 kmpl',
        isVFM: true,
        vfmBadge: '⚡ AFFORDABLE CITY AUTOMATIC',
        keyFeatures: ['Smooth Smart Automated Manual Transmission (AMT)', 'Creep Function for Bumper-to-Bumper Traffic', 'Electrically Foldable ORVMs', 'Steering Mounted Controls']
      },
      {
        name: 'XZ Plus 1.2 Petrol MT',
        exShowroom: 730000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Revotron Petrol (86 PS / 113 Nm)',
        mileage: '19.01 kmpl',
        isVFM: true,
        vfmBadge: '🏆 FULLY-LOADED PETROL MANUAL',
        keyFeatures: ['15-inch Dual-Tone Diamond-Cut Alloy Wheels', 'Fully Automatic Temperature Control (FATC)', 'Projector Headlamps with Signature LED DRLs', '7-inch Touchscreen with Apple CarPlay & Android Auto']
      },
      {
        name: 'XZA Plus 1.2 Petrol AMT',
        exShowroom: 785000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Revotron Petrol (86 PS / 113 Nm)',
        mileage: '19.00 kmpl',
        isVFM: false,
        keyFeatures: ['Convenient 5-Speed AMT Automatic', '15-inch Diamond-Cut Alloys', 'Rear Wiper & Washer with Defogger', 'Height-Adjustable Driver Seat']
      },
      {
        name: 'XE iCNG (Twin-Cylinder)',
        exShowroom: 659900,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L Bi-Fuel iCNG (73.5 PS / 95 Nm)',
        mileage: '26.49 km/kg',
        isVFM: false,
        keyFeatures: ['Patented Twin-Cylinder Underfloor CNG Technology', 'Direct Start in CNG Mode', 'Single Advanced ECU for Seamless Petrol/CNG Transition', 'Leak Detection & Thermal Incident Cutoff']
      },
      {
        name: 'XM iCNG (Twin-Cylinder)',
        exShowroom: 695000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L Bi-Fuel iCNG (73.5 PS / 95 Nm)',
        mileage: '26.49 km/kg',
        isVFM: false,
        keyFeatures: ['Underfloor Dual CNG Tanks with Usable Luggage Boot', 'Front Power Windows & Central Locking', 'Direct Start in CNG Mode', 'Micro-Switch Safety Sensor on Fuel Flap']
      },
      {
        name: 'XT iCNG (Twin-Cylinder)',
        exShowroom: 735000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L Bi-Fuel iCNG (73.5 PS / 95 Nm)',
        mileage: '26.49 km/kg',
        isVFM: true,
        vfmBadge: '🌿 GREEN COMMUTER VFM PICK',
        keyFeatures: ['Patented Twin-Cylinder Tech with Preserved Boot Area', 'Electrically Adjustable ORVMs', 'Steering Mounted Controls', 'Puncture Repair Kit with Underbody Spare Wheel']
      },
      {
        name: 'XZ Plus iCNG (Twin-Cylinder)',
        exShowroom: 835000,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.2L Bi-Fuel iCNG (73.5 PS / 95 Nm)',
        mileage: '26.49 km/kg',
        isVFM: true,
        vfmBadge: '👑 TOP-SPEC TWIN-CYLINDER CNG',
        keyFeatures: ['15-inch Precision Alloys on CNG Variant', 'Automatic Climate Control', '17.78 cm Touchscreen with Android Auto & Apple CarPlay', 'Projector Headlamps with LED DRLs']
      },
      {
        name: 'XZA Plus iCNG AMT (Twin-Cylinder Automatic)',
        exShowroom: 889900,
        fuel: 'CNG',
        trans: 'Automatic',
        engine: '1.2L Bi-Fuel iCNG (73.5 PS / 95 Nm)',
        mileage: '26.49 km/kg',
        isVFM: true,
        vfmBadge: '🔥 INDIA FIRST AUTOMATIC CNG',
        keyFeatures: ['India’s First Factory-Fitted Automated Manual (AMT) CNG Car', 'Twin Underfloor CNG Tanks', 'Zero Clutch Fatigue in City Traffic', 'Automatic Temperature Control & HARMAN Audio']
      }
    ]
  },
{
    id: 'tata-curvv',
    name: 'Tata Curvv',
    brand: 'Tata',
    tagline: 'India’s First Aerodynamic SUV Coupe with 5-Star Bharat NCAP, Flush Door Handles & Gesture Tailgate',
    launchDate: 'September 2024 (2025 Lineup)',
    bodyType: 'SUV Coupe',
    fuelTypes: ['Petrol', 'Diesel'],
    priceRange: '₹10.00 - ₹19.00 Lakh',
    minPrice: 999990,
    maxPrice: 1899990,
    safetyRating: '5.0 ★ (Bharat NCAP 5-Star - Adult 30.81/32, Child 44.83/49)',
    groundClearance: '208 mm',
    bootSpace: '500 L (Expandable to 973 L)',
    waitingPeriod: '4 - 8 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/curvv/colors/gold-essence-v2.webp',
    summary: 'The Tata Curvv is India’s breakthrough mass-market SUV Coupe, melding the commanding elevated stance of a rugged SUV with the aerodynamic sloping silhouette of a luxury coupe. Awarded a full 5-Star Bharat NCAP safety rating (scoring 30.81/32 for Adult and 44.83/49 for Child safety), it debuts cutting-edge technology including capacitive flush door handles with approach auto-deploy, voice-assisted panoramic glass sunroof with ambient mood lighting, a powered tailgate with hands-free gesture activation, and dual high-definition curved cockpit displays (12.3-inch Cinematic Infotainment by HARMAN with 9-speaker JBL acoustic sound system + 10.25-inch reconfigurable digital instrument cluster). Powertrain options include the brand-new 1.2L Hyperion Direct Injection Turbo Petrol (125 PS / 225 Nm), the refined 1.2L Revotron Turbo Petrol (120 PS / 170 Nm), and the high-torque 1.5L Kryojet Diesel (118 PS / 260 Nm), paired with either a 6-speed manual or an advanced wet-clutch 7-speed dual-clutch automatic (DCA) featuring paddle shifters.',
    colors: [
      { id: 'gold-essence', name: 'Gold Essence Metallic', hex: '#B9A593', image: 'https://ik.imagekit.io/2908vvlod/cars/curvv/colors/gold-essence-v2.webp' },
      { id: 'glossy-carbon-black', name: 'Glossy Carbon Black', hex: '#15161A', image: 'https://ik.imagekit.io/2908vvlod/cars/curvv/colors/glossy-carbon-black.webp' },
      { id: 'opera-blue', name: 'Opera Blue Dual Tone', hex: '#27367A', image: 'https://ik.imagekit.io/2908vvlod/cars/curvv/colors/opera-blue.webp' },
      { id: 'pristine-white', name: 'Pristine White Dual Tone', hex: '#ECEDEF', image: 'https://ik.imagekit.io/2908vvlod/cars/curvv/colors/pristine-white.webp' },
      { id: 'pure-grey', name: 'Pure Grey Dual Tone', hex: '#AAABB0', image: 'https://ik.imagekit.io/2908vvlod/cars/curvv/colors/pure-grey.webp' },
      { id: 'nitro-crimson', name: 'Nitro Crimson Dual Tone', hex: '#5C121E', image: 'https://ik.imagekit.io/2908vvlod/cars/curvv/colors/nitro-crimson.webp' },
      { id: 'flame-red', name: 'Flame Red', hex: '#E91309', image: 'https://ik.imagekit.io/2908vvlod/cars/curvv/colors/flame-red.webp' }
    ],
    gallery: [
      { title: 'Front Three-Quarter Coupe Dynamic Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv/gallery/front_three_quarter.webp' },
      { title: 'Rear Sloping Coupe Profile & Full-Width LED Tail Bar', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv/gallery/rear_three_quarter.webp' },
      { title: 'Aerodynamic Side Silhouette & High Ground Clearance', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv/gallery/side_coupe_profile.webp' },
      { title: 'Dual High-Definition Curved Digital Cockpit Dashboard', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv/gallery/dashboard_cockpit.webp' },
      { title: '12.3-inch Cinematic Touchscreen Infotainment by HARMAN', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv/gallery/infotainment_touchscreen.webp' },
      { title: 'Expansive Voice-Assisted Panoramic Glass Sunroof', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv/gallery/panoramic_sunroof.webp' },
      { title: 'Ventilated Front Leatherette Executive Bucket Seats', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv/gallery/front_ventilated_seats.webp' },
      { title: 'Rear Executive Cabin Comfort with Reclining Backrests', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv/gallery/rear_executive_seats.webp' },
      { title: 'Segment-Leading 500-Litre Deep Luggage Cargo Bay', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv/gallery/spacious_500l_boot.webp' },
      { title: 'Capacitive Smart Flush Door Handles with Welcome Light', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv/gallery/flush_smart_door_handles.webp' },
      { title: 'Bi-LED Projector Headlamps with Sequential Turn Signals', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv/gallery/bi_led_projector_headlamps.webp' },
      { title: '18-inch Aerodynamic Diamond-Cut Precision Alloy Wheels', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv/gallery/aerodynamic_alloy_wheels.webp' }
    ],
    specs: {
      engineOptions: '1.2L Revotron Turbo (120 PS) | 1.2L Hyperion GDi Turbo (125 PS) | 1.5L Kryojet Diesel (118 PS)',
      transmissions: '6-Speed Manual & 7-Speed Dual-Clutch Automatic (DCA) with Paddle Shifters',
      dimensions: '4,308 mm (L) × 1,810 mm (W) × 1,630 mm (H)',
      wheelbase: '2,560 mm',
      groundClearance: '208 mm',
      fuelTank: '44 Litres',
      bootSpace: '500 Litres',
      seatingCapacity: '5 Passengers',
      turningRadius: '5.3 Metres'
    },
    variants: [
      {
        name: 'Smart 1.2 Petrol MT',
        exShowroom: 999990,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Revotron Turbo (120 PS)',
        mileage: '18.1 kmpl',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard', 'LED Headlamps & Horizon DRLs', 'Capacitive Flush Door Handles', 'Electronic Stability Program (ESP)']
      },
      {
        name: 'Pure+ 1.2 Petrol MT',
        exShowroom: 1179990,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Revotron Turbo (120 PS)',
        mileage: '18.1 kmpl',
        isVFM: true,
        vfmBadge: '🏆 BEST VALUE MANUAL PICK',
        keyFeatures: ['7-inch HARMAN Touchscreen with Wireless Carplay/Android Auto', 'Cruise Control', 'Reverse Camera with Dynamic Guidelines', 'Shark Fin Antenna & 16-inch Wheels']
      },
      {
        name: 'Pure+ 1.2 Petrol DCA',
        exShowroom: 1229990,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Revotron Turbo (120 PS)',
        mileage: '17.2 kmpl',
        isVFM: false,
        keyFeatures: ['7-Speed Wet Dual-Clutch Automatic (DCA)', 'E-Shifter with Paddle Shifters', 'Hill Start & Descent Assist', 'Front Sliding Armrest']
      },
      {
        name: 'Pure+ 1.5 Diesel MT',
        exShowroom: 1309990,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '1.5L Kryojet Turbo Diesel (118 PS / 260 Nm)',
        mileage: '22.4 kmpl',
        isVFM: false,
        keyFeatures: ['High-Torque Kryojet Diesel Engine', 'Multi-Drive Modes (Eco, City, Sport)', 'Rear AC Vents', 'Touch Air Conditioner Panel']
      },
      {
        name: 'Creative+ 1.2 Petrol MT',
        exShowroom: 1290990,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Revotron Turbo (120 PS)',
        mileage: '18.1 kmpl',
        isVFM: false,
        keyFeatures: ['10.25-inch High-Definition Cinematic Touchscreen', 'Voice-Assisted Panoramic Sunroof', '17-inch Diamond-Cut Alloy Wheels', 'Sequential Front & Rear LED Indicators']
      },
      {
        name: 'Creative+ S 1.2 Petrol DCA',
        exShowroom: 1420990,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Revotron Turbo (120 PS)',
        mileage: '17.2 kmpl',
        isVFM: true,
        vfmBadge: '⭐ RECOMMENDED DCA AUTOMATIC',
        keyFeatures: ['Panoramic Sunroof with Mood Lighting', '7-Speed Dual-Clutch DCA', '10.25-inch HARMAN Infotainment', '360° Surround View Camera with Blind View Monitor']
      },
      {
        name: 'Creative+ 1.5 Diesel DCA',
        exShowroom: 1445990,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '1.5L Kryojet Turbo Diesel (118 PS)',
        mileage: '21.5 kmpl',
        isVFM: false,
        keyFeatures: ['Segment-Exclusive Diesel DCA Automatic', 'Paddle Shifters', 'Panoramic Glass Sunroof', 'Auto Headlamps & Rain-Sensing Wipers']
      },
      {
        name: 'Accomplished+ 1.2 Hyperion GDi DCA',
        exShowroom: 1849990,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Hyperion Direct Injection Turbo (125 PS / 225 Nm)',
        mileage: '16.8 kmpl',
        isVFM: false,
        keyFeatures: ['High-Performance Hyperion GDi Turbo Engine', 'Level 2 ADAS (20 Safety Features)', 'Gesture Powered Smart Tailgate', 'JBL 9-Speaker Acoustic Audio with Subwoofer']
      },
      {
        name: 'Accomplished+ A 1.5 Diesel DCA',
        exShowroom: 1899990,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '1.5L Kryojet Diesel (118 PS)',
        mileage: '21.5 kmpl',
        isVFM: false,
        keyFeatures: ['Level 2 ADAS Suite with Adaptive Cruise Control', 'Ventilated Front Executive Seats', '6-Way Power Driver Seat', 'Electronic Parking Brake with Auto Hold']
      }
    ]
  },
  {
    id: 'tata-curvv-ev',
    name: 'Tata Curvv EV',
    brand: 'Tata',
    tagline: 'India’s Premier Electric SUV Coupe with up to 585 km Range, 70 kW Ultra-Fast DC Charging & 5-Star Bharat NCAP',
    launchDate: 'August 2024 (2025 Lineup)',
    bodyType: 'Electric SUV Coupe',
    fuelTypes: ['EV'],
    priceRange: '₹17.49 - ₹21.99 Lakh',
    minPrice: 1749000,
    maxPrice: 2199000,
    safetyRating: '5.0 ★ (Bharat NCAP 5-Star - Adult 30.81/32, Child 44.83/49)',
    groundClearance: '190 mm',
    bootSpace: '500 L + 35 L Front Frunk (535 L Total)',
    waitingPeriod: '3 - 6 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/curvv-ev/colors/pure-grey.webp',
    summary: 'The Tata Curvv EV spearheads India’s electric design renaissance as an aerodynamic luxury SUV Coupe built on Tata’s Acti.ev pure electric platform. Certified with a 5-Star Bharat NCAP crash safety score, the Curvv EV is offered in two liquid-cooled IP67 high-energy battery options: 45 kWh delivering 502 km certified range and a flagship 55 kWh pack delivering an astonishing 585 km single-charge driving range. Equipped with a permanent magnet synchronous motor generating up to 167 PS (123 kW) and instantaneous 215 Nm torque, propelling it from 0 to 100 km/h in just 8.6 seconds. Ultra-fast 70 kW DC charging replenishes 10% to 80% battery in 40 minutes, adding 150 km of driving range in 15 minutes. Advanced V2V (Vehicle-to-Vehicle) and V2L (Vehicle-to-Load 3.3 kW) charging technology transforms the vehicle into a mobile power bank.',
    colors: [
      { id: 'pure-grey', name: 'Pure Grey Dual Tone', hex: '#696A73', image: 'https://ik.imagekit.io/2908vvlod/cars/curvv-ev/colors/pure-grey.webp' },
      { id: 'empowered-oxide', name: 'Empowered Oxide Dual Tone', hex: '#BBBCB5', image: 'https://ik.imagekit.io/2908vvlod/cars/curvv-ev/colors/empowered-oxide.webp' },
      { id: 'pristine-white', name: 'Pristine White Dual Tone', hex: '#BDBDBD', image: 'https://ik.imagekit.io/2908vvlod/cars/curvv-ev/colors/pristine-white.webp' },
      { id: 'virtual-sunrise', name: 'Virtual Sunrise with Black Roof', hex: '#494E74', image: 'https://ik.imagekit.io/2908vvlod/cars/curvv-ev/colors/virtual-sunrise.webp' },
      { id: 'nitro-crimson', name: 'Nitro Crimson Dual Tone', hex: '#4D0F17', image: 'https://ik.imagekit.io/2908vvlod/cars/curvv-ev/colors/nitro-crimson.webp' },
      { id: 'carbon-black', name: 'Carbon Black Edition', hex: '#0D0D0B', image: 'https://ik.imagekit.io/2908vvlod/cars/curvv-ev/colors/carbon-black.webp' }
    ],
    gallery: [
      { title: 'Aerodynamic Closed Front Fascia with Continuous Horizon DRL', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv-ev/gallery/ev_front_aerodynamic_face.webp' },
      { title: 'Striking Aerodynamic Coupe Profile with Low Drag Coefficient', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv-ev/gallery/ev_side_profile_coupe.webp' },
      { title: 'Connected Full-Width LED Tail Bar with Welcome Animation', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv-ev/gallery/ev_rear_connected_taillamp.webp' },
      { title: 'Motorized Front Smart Charging Port with Charge Status Bar', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv-ev/gallery/ev_charging_port_front.webp' },
      { title: 'Digital Cockpit with Dual High-Resolution Displays', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv-ev/gallery/ev_digital_cockpit_screens.webp' },
      { title: '12.3-inch Cinematic HARMAN Touchscreen with In-Car Arcade', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv-ev/gallery/ev_touchscreen_cinematic.webp' },
      { title: 'Voice-Assisted Panoramic Glass Skyroof with Ambient Mood Light', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv-ev/gallery/ev_panoramic_skyroof.webp' },
      { title: 'Ventilated Front Leatherette Seats with 6-Way Power Adjustment', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv-ev/gallery/ev_front_ventilated_seats.webp' },
      { title: 'Rear Cabin Comfort with 2-Stage Recline & Armrest', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv-ev/gallery/ev_rear_cabin_comfort.webp' },
      { title: '500-Litre Boot Capacity with Powered Tailgate & Gesture Control', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv-ev/gallery/ev_luggage_bay_500l.webp' },
      { title: 'Aerodynamic Flush Door Handles with Approach Auto-Deploy', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv-ev/gallery/ev_flush_handles.webp' },
      { title: '18-inch Aero Diamond-Cut Precision Alloy Wheels', url: 'https://ik.imagekit.io/2908vvlod/cars/curvv-ev/gallery/ev_aero_alloy_wheels.webp' }
    ],
    specs: {
      engineOptions: 'Permanent Magnet Synchronous Motor (150 PS on 45 kWh / 167 PS on 55 kWh) | 215 Nm Instant Torque',
      transmissions: 'Single-Speed Direct-Drive e-Transmission with Multi-Mode Regenerative Braking',
      dimensions: '4,310 mm (L) × 1,810 mm (W) × 1,637 mm (H)',
      wheelbase: '2,560 mm',
      groundClearance: '190 mm',
      fuelTank: 'Electric (45 kWh & 55 kWh Liquid-Cooled IP67 Lithium-Ion Batteries)',
      bootSpace: '500 Litres + 35 Litres Frunk (535 L Total)',
      seatingCapacity: '5 Passengers',
      turningRadius: '5.3 Metres'
    },
    variants: [
      {
        name: 'Creative 45 (45 kWh)',
        exShowroom: 1749000,
        fuel: 'EV',
        trans: 'Automatic',
        engine: 'Electric Motor (150 PS / 215 Nm)',
        mileage: '502 km / charge (MIDC)',
        isVFM: false,
        keyFeatures: ['45 kWh Liquid-Cooled IP67 Battery', '502 km Certified Range', '10.25-inch HARMAN Touchscreen', '6 Airbags & Full ESP Suite']
      },
      {
        name: 'Accomplished 45 (45 kWh)',
        exShowroom: 1849000,
        fuel: 'EV',
        trans: 'Automatic',
        engine: 'Electric Motor (150 PS / 215 Nm)',
        mileage: '502 km / charge (MIDC)',
        isVFM: true,
        vfmBadge: '🏆 BEST VALUE 45 kWh EV',
        keyFeatures: ['Panoramic Sunroof with Ambient Mood Light', '17-inch Aero Alloy Wheels', 'Multi-Mode Regenerative Braking with Paddles', 'Horizon LED DRL with Welcome & Goodbye Sequences']
      },
      {
        name: 'Accomplished+ S 45 (45 kWh)',
        exShowroom: 1929000,
        fuel: 'EV',
        trans: 'Automatic',
        engine: 'Electric Motor (150 PS / 215 Nm)',
        mileage: '502 km / charge (MIDC)',
        isVFM: false,
        keyFeatures: ['JBL Premium Audio System', '360° Surround Camera with 3D Blind View Monitor', 'Electronic Parking Brake with Auto Hold', 'Sequential LED Indicators']
      },
      {
        name: 'Accomplished 55 (55 kWh)',
        exShowroom: 1925000,
        fuel: 'EV',
        trans: 'Automatic',
        engine: 'Electric Motor (167 PS / 215 Nm)',
        mileage: '585 km / charge (MIDC)',
        isVFM: true,
        vfmBadge: '⭐ LONGEST RANGE VALUE PICK',
        keyFeatures: ['Long-Range 55 kWh Battery (585 km Range)', '167 PS Power (0-100 km/h in 8.6s)', '70 kW Fast DC Charging (10-80% in 40 mins)', 'V2L & V2V Mobile Power Bank Capability']
      },
      {
        name: 'Accomplished+ S 55 (55 kWh)',
        exShowroom: 1999000,
        fuel: 'EV',
        trans: 'Automatic',
        engine: 'Electric Motor (167 PS / 215 Nm)',
        mileage: '585 km / charge (MIDC)',
        isVFM: false,
        keyFeatures: ['12.3-inch Cinematic Infotainment Screen by HARMAN', 'Panoramic Glass Sunroof', 'Ventilated Front Seats', 'Wireless Smartphone Charger & Smart Air Purifier']
      },
      {
        name: 'Empowered+ 55 (55 kWh)',
        exShowroom: 2125000,
        fuel: 'EV',
        trans: 'Automatic',
        engine: 'Electric Motor (167 PS / 215 Nm)',
        mileage: '585 km / charge (MIDC)',
        isVFM: false,
        keyFeatures: ['Level 2 ADAS (Adaptive Cruise Control, Lane Keep Assist, AEB)', 'Powered Tailgate with Gesture Control', 'JBL 9-Speaker Audio with Subwoofer', '18-inch Diamond-Cut Aero Alloys']
      },
      {
        name: 'Empowered+ A 55 Dark Edition',
        exShowroom: 2199000,
        fuel: 'EV',
        trans: 'Automatic',
        engine: 'Electric Motor (167 PS / 215 Nm)',
        mileage: '585 km / charge (MIDC)',
        isVFM: false,
        keyFeatures: ['Exclusive Oberon Black Exterior & Dark Cabin Theme', 'Level 2 ADAS Suite with Stop & Go', '6-Way Power Driver Seat with Memory', 'Arcade.ev In-Car Gaming and Video Streaming Suite']
      }
    ]
  },
  {
    id: 'xuv-3xo',
    name: 'Mahindra XUV 3XO',
    brand: 'Mahindra',
    tagline: 'Segment-Disrupting Compact SUV with Panoramic Skyroof, Dual-Zone AC, Level 2 ADAS & 130 PS TGDi Turbo',
    launchDate: 'May 2024 (2025 Lineup)',
    bodyType: 'Compact SUV',
    fuelTypes: ['Petrol', 'Diesel'],
    priceRange: '₹7.79 - ₹15.49 Lakh',
    minPrice: 779000,
    maxPrice: 1549000,
    safetyRating: '5.0 ★ (Engineered for 5-Star Bharat NCAP Standards with 6 Airbags & 4 Disc Brakes Standard)',
    groundClearance: '201 mm',
    bootSpace: '364 L (Deep Luggage Bay)',
    waitingPeriod: '4 - 10 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/xuv-3xo/colors/citrine-yellow.webp',
    summary: 'The Mahindra XUV 3XO thoroughly disrupts India’s sub-4 metre compact SUV category by democratizing luxury features previously reserved for vehicles twice its price. It introduces the segment’s first and largest Panoramic Skyroof, full Level 2 ADAS (featuring radar and camera systems with 10 proactive safety features like adaptive cruise control with stop-and-go, lane keep assist, and autonomous emergency braking), 360-degree surround-view camera with blind view monitor, and segment-exclusive dual-zone automatic climate control. Engine prowess is class-leading: 1.2L mStallion TGDi Turbo Petrol churning out 130 PS and 230 Nm (fastest in segment: 0-60 km/h in 4.5s), 1.2L TCMPFi Turbo Petrol (111 PS / 200 Nm), and 1.5L CRDe Turbo Diesel (117 PS / 300 Nm). Transmission choices include a smooth 6-speed manual and a world-renowned AISIN 6-speed torque converter automatic.',
    colors: [
      { id: 'citrine-yellow', name: 'Citrine Yellow Metallic', hex: '#DDCD3D', image: 'https://ik.imagekit.io/2908vvlod/cars/xuv-3xo/colors/citrine-yellow.webp' },
      { id: 'dune-beige', name: 'Dune Beige', hex: '#9D987B', image: 'https://ik.imagekit.io/2908vvlod/cars/xuv-3xo/colors/dune-beige.webp' },
      { id: 'everest-white', name: 'Everest White', hex: '#E7E5E5', image: 'https://ik.imagekit.io/2908vvlod/cars/xuv-3xo/colors/everest-white.webp' },
      { id: 'stealth-black', name: 'Stealth Black', hex: '#191A18', image: 'https://ik.imagekit.io/2908vvlod/cars/xuv-3xo/colors/stealth-black.webp' },
      { id: 'deep-forest', name: 'Deep Forest', hex: '#282C29', image: 'https://ik.imagekit.io/2908vvlod/cars/xuv-3xo/colors/deep-forest.webp' },
      { id: 'nebula-blue', name: 'Nebula Blue', hex: '#002038', image: 'https://ik.imagekit.io/2908vvlod/cars/xuv-3xo/colors/nebula-blue.webp' },
      { id: 'tango-red', name: 'Tango Red Dual Tone', hex: '#E20021', image: 'https://ik.imagekit.io/2908vvlod/cars/xuv-3xo/colors/tango-red.webp' },
      { id: 'galaxy-grey', name: 'Galaxy Grey', hex: '#666A72', image: 'https://ik.imagekit.io/2908vvlod/cars/xuv-3xo/colors/galaxy-grey.webp' },
      { id: 'jeans-blue', name: 'Jeans Blue Premium', hex: '#041120', image: 'https://ik.imagekit.io/2908vvlod/cars/xuv-3xo/colors/jeans-blue.webp' }
    ],
    gallery: [
      { title: 'Commanding Front Fascia with Piano Black Grille & LED DRLs', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv-3xo/gallery/commanding_front_fascia.webp' },
      { title: 'Infinity Full-Width Connected LED Tail Lamp System', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv-3xo/gallery/infinity_led_tail_lamp.webp' },
      { title: 'Bold Muscular Rear Stance & Skid Plates', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv-3xo/gallery/bold_rear_stance.webp' },
      { title: 'Segment-First Expansive Panoramic Skyroof', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv-3xo/gallery/skyroof_panoramic_sunroof.webp' },
      { title: 'Dual 10.25-inch High-Definition Cockpit Displays', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv-3xo/gallery/dual_10_25_inch_screens.webp' },
      { title: 'Adrenox Connected Touchscreen Infotainment System', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv-3xo/gallery/adrenox_infotainment.webp' },
      { title: 'Ergonomic Front Bucket Seats with Dual-Tone Leatherette', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv-3xo/gallery/front_ergonomic_seats.webp' },
      { title: 'Spacious Rear Passenger Cabin with Armrest & Cup Holders', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv-3xo/gallery/rear_seat_comfort_armrest.webp' },
      { title: 'Deep 364-Litre Luggage Bay with 60:40 Split Fold Seats', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv-3xo/gallery/deep_364l_luggage_bay.webp' },
      { title: 'Level 2 ADAS Radar & Camera Sensor Suite', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv-3xo/gallery/level_2_adas_radar.webp' },
      { title: '17-inch Diamond-Cut Precision Dual-Tone Alloy Wheels', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv-3xo/gallery/diamond_cut_alloy_wheels.webp' },
      { title: 'Harman Kardon 7-Speaker Premium Acoustic Audio System', url: 'https://ik.imagekit.io/2908vvlod/cars/xuv-3xo/gallery/harman_kardon_premium_audio.webp' }
    ],
    specs: {
      engineOptions: '1.2L TCMPFi Turbo (111 PS) | 1.2L mStallion TGDi Turbo (130 PS) | 1.5L CRDe Turbo Diesel (117 PS)',
      transmissions: '6-Speed Manual & 6-Speed AISIN Torque Converter Automatic & 6-Speed AutoSHIFT+',
      dimensions: '3,990 mm (L) × 1,821 mm (W) × 1,647 mm (H)',
      wheelbase: '2,600 mm (Segment Largest)',
      groundClearance: '201 mm',
      fuelTank: '42 Litres',
      bootSpace: '364 Litres',
      seatingCapacity: '5 Passengers',
      turningRadius: '5.1 Metres'
    },
    variants: [
      {
        name: 'MX1 1.2 Petrol MT',
        exShowroom: 779000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Turbo TCMPFi (111 PS / 200 Nm)',
        mileage: '18.89 kmpl',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard Across All Variants', 'All 4 Disc Brakes with ABS + EBD + ESP', 'Front & Rear Power Windows', 'Halogen Projector Headlamps & LED Indicators']
      },
      {
        name: 'MX2 Pro 1.2 Petrol MT',
        exShowroom: 899000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Turbo TCMPFi (111 PS / 200 Nm)',
        mileage: '18.89 kmpl',
        isVFM: false,
        keyFeatures: ['Single-Pane Electric Sunroof', '10.25-inch Touchscreen Infotainment', '4 Speakers', 'Steering-Mounted Audio Controls']
      },
      {
        name: 'MX2 Diesel 1.5 MT',
        exShowroom: 936000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '1.5L CRDe Turbo Diesel (117 PS / 300 Nm)',
        mileage: '20.6 kmpl',
        isVFM: false,
        keyFeatures: ['Punchy 300 Nm Torque Diesel Engine', '6 Airbags', 'All 4 Disc Brakes', 'Electronic Stability Program (ESP)']
      },
      {
        name: 'MX3 Pro 1.2 Petrol MT',
        exShowroom: 999000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Turbo TCMPFi (111 PS / 200 Nm)',
        mileage: '18.89 kmpl',
        isVFM: false,
        keyFeatures: ['Single-Pane Sunroof', 'Wireless Android Auto & Apple CarPlay', 'Full LED Projector Headlamps & Infinity LED Tail Lamp', 'Rear Camera with Guidelines']
      },
      {
        name: 'AX5 1.2 Petrol MT',
        exShowroom: 999900,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Turbo TCMPFi (111 PS / 200 Nm)',
        mileage: '18.89 kmpl',
        isVFM: true,
        vfmBadge: '🏆 BEST VALUE ALL-ROUND PICK',
        keyFeatures: ['Dual-Zone Fully Automatic Temperature Control (FATC)', 'Twin 10.25-inch Screens (Infotainment + Digital Cluster)', '16-inch Diamond-Cut Alloy Wheels', 'Electric Sunroof & Wireless Phone Charger']
      },
      {
        name: 'AX5 1.2 Petrol AT (TC)',
        exShowroom: 1188000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L Turbo TCMPFi (111 PS / 200 Nm)',
        mileage: '17.96 kmpl',
        isVFM: true,
        vfmBadge: '⭐ RECOMMENDED AUTOMATIC PICK',
        keyFeatures: ['6-Speed AISIN Torque Converter Automatic', 'Dual-Zone Climate Control', 'Adrenox Connect with 80+ Connected Features', 'Electric Sunroof & Rear AC Vents']
      },
      {
        name: 'AX5 1.5 Diesel MT',
        exShowroom: 1139500,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '1.5L CRDe Turbo Diesel (117 PS / 300 Nm)',
        mileage: '20.6 kmpl',
        isVFM: false,
        keyFeatures: ['High-Efficiency 300 Nm Diesel Engine', 'Twin 10.25-inch Screens', 'Dual-Zone Climate Control', 'R16 Diamond Alloys & Cruise Control']
      },
      {
        name: 'AX5L 1.2 TGDi MT',
        exShowroom: 1202500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L mStallion TGDi Direct Injection Turbo (130 PS / 230 Nm)',
        mileage: '18.2 kmpl',
        isVFM: false,
        keyFeatures: ['130 PS Direct-Injection Turbo Engine (0-60 in 4.5s)', 'Level 2 ADAS (10 Proactive Safety Features)', '360° Surround View Camera with Blind View Monitor', 'Electronic Parking Brake with Auto Hold']
      },
      {
        name: 'AX5L 1.2 TGDi AT (TC)',
        exShowroom: 1327500,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L mStallion TGDi Direct Injection Turbo (130 PS / 230 Nm)',
        mileage: '17.96 kmpl',
        isVFM: false,
        keyFeatures: ['Segment-Fastest TGDi Engine with 6-Speed AISIN AT', 'Level 2 ADAS Suite', '360° Surround View Camera', 'Auto-Dimming IRVM & Electronic Parking Brake']
      },
      {
        name: 'AX7 1.2 TGDi MT Dual Tone',
        exShowroom: 1219500,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L mStallion TGDi Turbo (130 PS / 230 Nm)',
        mileage: '18.2 kmpl',
        isVFM: false,
        keyFeatures: ['Expansive Panoramic Skyroof (Largest in Sub-4M Segment)', 'Harman Kardon 7-Speaker Premium Audio with Subwoofer', '17-inch Diamond-Cut Alloy Wheels', 'Leatherette Upholstery & Soft-Touch Dashboard']
      },
      {
        name: 'AX7L 1.2 TGDi AT Dual Tone',
        exShowroom: 1503500,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.2L mStallion TGDi Turbo (130 PS / 230 Nm)',
        mileage: '17.96 kmpl',
        isVFM: false,
        keyFeatures: ['Panoramic Skyroof + Level 2 ADAS Flagship Combo', '6-Speed AISIN AT', 'Harman Kardon Premium Sound System', '360° Camera & Front Parking Sensors']
      },
      {
        name: 'AX7L 1.5 Diesel MT Dual Tone',
        exShowroom: 1407500,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '1.5L CRDe Turbo Diesel (117 PS / 300 Nm)',
        mileage: '20.6 kmpl',
        isVFM: false,
        keyFeatures: ['Flagship Panoramic Skyroof with 300 Nm Diesel Torque', 'Harman Kardon Premium Audio', 'Level 2 ADAS Suite', '17-inch Diamond-Cut Alloys & Dual-Tone Finish']
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
  },
  {
    id: 'kia-seltos',
    name: 'Kia Seltos',
    brand: 'Kia',
    tagline: 'Badass Mid-Size SUV with Level 2+ ADAS (28 Features), Dual Panoramic Display & 160 PS Turbo GDi',
    launchDate: 'Latest 2025–2026 Model (5-Star Bharat NCAP Rated)',
    bodyType: 'SUV',
    fuelTypes: ['Petrol', 'Diesel'],
    priceRange: '₹11.25 - ₹21.82 Lakh',
    minPrice: 1125000,
    maxPrice: 2182000,
    safetyRating: '5 Stars (Bharat NCAP - 76.7/81) | Level 2+ ADAS (28 Autonomous Features) & 6 Airbags',
    groundClearance: '190 mm',
    bootSpace: '447 Litres (VDA)',
    waitingPeriod: '3 - 8 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/seltos/360/pewter-olive/1.webp',
    summary: 'The all-new 2025–2026 Kia Seltos redefines the mid-size SUV benchmark with dominant styling, reinforced K3 platform engineering, and a certified 5-Star Bharat NCAP safety rating (scoring 76.7 out of 81 points). Available with three refined powertrains: the potent Smartstream 1.5L Turbo GDi petrol producing a class-leading 160 PS and 253 Nm paired with a 7-speed Dual Clutch Transmission (7DCT) or 6-speed iMT, a silky 1.5L naturally aspirated petrol with 6MT / Smartstream IVT automatic, and an efficient 1.5L CRDi VGT Diesel producing 116 PS and 250 Nm paired with 6-speed torque converter automatic or 6iMT. The progressive cabin showcases the Command-Centric Trinity Panoramic Display panel (dual seamless 10.25-inch or 12.3-inch displays), a boundless dual-pane panoramic sunroof, immersive Bose Premium 8-speaker audio, 64-color ambient mood lighting, dual-zone FATC with 5-inch digital climate touch control, front ventilated seats with 8-way power adjust and memory/relaxation position, and standard 6 airbags with all-4 disc brakes. Its segment-leading Level 2+ ADAS suite features 28 autonomous safety functions including Forward Collision-Avoidance Assist with Junction Crossing & Turning, Smart Cruise Control with Stop & Go, 360° Surround View Monitor, and Blind View Monitor.',
    colors: [
      { id: 'pewter-olive', name: 'Pewter Olive (Signature Hero Shade)', hex: '#4E5343', image: 'https://ik.imagekit.io/2908vvlod/cars/seltos/360/pewter-olive/1.webp' },
      { id: 'frost-blue', name: 'Frost Blue', hex: '#66879B', image: 'https://ik.imagekit.io/2908vvlod/cars/seltos/360/frost-blue/1.webp' },
      { id: 'imperial-blue', name: 'Imperial Blue', hex: '#1C2E4A', image: 'https://ik.imagekit.io/2908vvlod/cars/seltos/360/imperial-blue/1.webp' },
      { id: 'aurora-black-pearl', name: 'Aurora Black Pearl', hex: '#0F1012', image: 'https://ik.imagekit.io/2908vvlod/cars/seltos/360/aurora-black-pearl/1.webp' },
      { id: 'glacier-white-pearl', name: 'Glacier White Pearl', hex: '#F5F6F8', image: 'https://ik.imagekit.io/2908vvlod/cars/seltos/360/glacier-white-pearl/1.webp' },
      { id: 'gravity-gray', name: 'Gravity Gray', hex: '#4F5357', image: 'https://ik.imagekit.io/2908vvlod/cars/seltos/360/gravity-gray/1.webp' },
      { id: 'magma-red', name: 'Magma Red', hex: '#A8141D', image: 'https://ik.imagekit.io/2908vvlod/cars/seltos/360/magma-red/1.webp' },
      { id: 'ivory-silver-gloss', name: 'Ivory Silver Gloss', hex: '#8E9297', image: 'https://ik.imagekit.io/2908vvlod/cars/seltos/360/ivory-silver-gloss/1.webp' },
      { id: 'morning-haze', name: 'Morning Haze', hex: '#86919B', image: 'https://ik.imagekit.io/2908vvlod/cars/seltos/360/morning-haze/1.webp' },
      { id: 'matte-graphite', name: 'Matte Graphite (X-Line Exclusive)', hex: '#3A3C3E', image: 'https://ik.imagekit.io/2908vvlod/cars/seltos/360/matte-graphite/1.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Stance & Star Map DRLs', url: 'https://ik.imagekit.io/2908vvlod/cars/seltos/360/pewter-olive/1.webp' },
      { label: 'Trinity Dual Panoramic Display', url: 'https://ik.imagekit.io/2908vvlod/cars/seltos/gallery/command-centric-trinity-panoramic-display.webp' },
      { label: 'Dual Pane Panoramic Sunroof', url: 'https://ik.imagekit.io/2908vvlod/cars/seltos/gallery/boundless-dual-pane-panoramic-sunroof.webp' },
      { label: 'GT-Line R18 Alloys & Tiger Nose', url: 'https://ik.imagekit.io/2908vvlod/cars/seltos/gallery/gt-line-r18-crystal-cut-alloys-tiger-nose-grille.webp' }
    ],
    gallery: [
      { title: 'Command-Centric Trinity Panoramic Display Panel with Dual 10.25-inch High-Definition Displays', url: 'https://ik.imagekit.io/2908vvlod/cars/seltos/gallery/command-centric-trinity-panoramic-display.webp' },
      { title: 'Boundless Dual-Pane Panoramic Sunroof with One-Touch Electric Voice Operation', url: 'https://ik.imagekit.io/2908vvlod/cars/seltos/gallery/boundless-dual-pane-panoramic-sunroof.webp' },
      { title: 'Front Row Ventilated Leatherette Seats with 8-Way Power Adjustment & Memory Relaxation Mode', url: 'https://ik.imagekit.io/2908vvlod/cars/seltos/gallery/ventilated-front-seats-8-way-power-driver-seat.webp' },
      { title: 'Immersive Bose Premium Sound System with 8 High-Performance Speakers & Dynamic Speed Compensation', url: 'https://ik.imagekit.io/2908vvlod/cars/seltos/gallery/bose-premium-8-speaker-sound-system.webp' },
      { title: '360° Surround View Monitor with Blind View Monitor (BVM) in Instrument Cluster', url: 'https://ik.imagekit.io/2908vvlod/cars/seltos/gallery/360-degree-surround-view-blind-view-monitor.webp' },
      { title: 'ADAS Level 2+ Intelligence Suite with 28 Autonomous Features including Smart Cruise Control with Stop & Go', url: 'https://ik.imagekit.io/2908vvlod/cars/seltos/gallery/adas-level-2-plus-smart-cruise-stop-go.webp' },
      { title: 'Certified 5-Star Bharat NCAP Crash Test Rating (76.7/81 Points) Standard with 6 Airbags', url: 'https://ik.imagekit.io/2908vvlod/cars/seltos/gallery/5-star-bharat-ncap-safety-rating.webp' },
      { title: 'GT-Line Exclusive R18 (215/55 R18) Crystal-Cut Alloy Wheels & Glossy Black Tiger Nose Grille', url: 'https://ik.imagekit.io/2908vvlod/cars/seltos/gallery/gt-line-r18-crystal-cut-alloys-tiger-nose-grille.webp' }
    ],
    specs: {
      engineOptions: '1.5L Smartstream T-GDi Turbo Petrol (160 PS / 253 Nm) | 1.5L Smartstream MPi Petrol (115 PS / 144 Nm) | 1.5L CRDi VGT Diesel (116 PS / 250 Nm)',
      transmissions: '6-Speed MT, 6-Speed iMT, Smartstream IVT Automatic, 6-Speed Torque Converter AT & 7-Speed Dual Clutch (7DCT)',
      dimensions: '4460 mm (L) × 1800 mm (W) × 1635 mm (H) (with Roof Rails)',
      wheelbase: '2690 mm (Best-in-Segment Rear Legroom)',
      fuelTank: '50 Litres',
      bootSpace: '447 Litres (VDA Standard)',
      brakes: 'All 4 Disc Brakes Standard across all variants with Electronic Parking Brake (EPB) & Auto Hold',
      suspension: 'McPherson Strut with Coil Spring (Front) / Coupled Torsion Beam Axle with High-Performance Gas Dampers (Rear)',
      safety: '5 Stars (Bharat NCAP Rated), 6 Airbags Standard, Level 2+ ADAS (28 Autonomous Features with FCA-JC, FCA-JT, SCC Stop & Go), 360° Camera, ESC, VSM, HAC, TPMS Highline'
    },
    variants: [
      {
        name: 'HTE 1.5L Petrol 6MT',
        exShowroom: 1125000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L Smartstream MPi (115 PS / 144 Nm)',
        mileage: '17.0 km/l',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard', 'All 4 Disc Brakes', 'Electronic Stability Control (ESC) & VSM', '10.25-inch Digital Cluster', 'Keyless Entry & Central Locking', 'Halogen Projector Headlamps & Shark Fin Antenna', 'Front & Rear Skid Plates']
      },
      {
        name: 'HTK 1.5L Petrol 6MT',
        exShowroom: 1342000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L Smartstream MPi (115 PS / 144 Nm)',
        mileage: '17.0 km/l',
        isVFM: false,
        keyFeatures: ['20.32 cm (8") Touchscreen with Wireless Android Auto & Apple CarPlay', 'R16 Style Wheels', 'Rear View Camera with Dynamic Guidelines', 'Electric Folding Outside Mirrors', 'Push Button Start / Stop with Smart Key', 'Rear Door Sunshade Curtains']
      },
      {
        name: 'HTK+ 1.5L Turbo Petrol 6iMT',
        exShowroom: 1540000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L Smartstream T-GDi Turbo (160 PS / 253 Nm)',
        mileage: '17.7 km/l',
        isVFM: false,
        keyFeatures: ['160 PS Turbo GDi Engine with Clutchless 6iMT', 'Boundless Dual-Pane Panoramic Sunroof', 'R17 Crystal Cut Alloy Wheels', 'Star Map LED Sweeping Light Guide DRLs', 'Smart Smartphone Wireless Charger', 'Auto Cruise Control & LED Ambient Mood Lighting']
      },
      {
        name: 'HTX 1.5L Petrol IVT (Automatic)',
        exShowroom: 1692000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L Smartstream MPi (115 PS / 144 Nm)',
        mileage: '17.7 km/l',
        isVFM: true,
        vfmBadge: '💎 MID-TRIM LUXURY SWEET SPOT',
        keyFeatures: ['Smooth Smartstream IVT Automatic with Paddle Shifters', 'Boundless Dual-Pane Panoramic Sunroof', 'Command-Centric Trinity Panoramic Displays (Dual 10.25-inch Screens)', 'Crown Jewel LED Headlamps & Star Map LED Tail Lamps', 'Dual Zone FATC with Touch AC Panel', 'Front Ventilated Seats', '64-Color Ambient Mood Lighting']
      },
      {
        name: 'HTX+ 1.5L Diesel 6AT (Automatic)',
        exShowroom: 1960000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '1.5L CRDi VGT Diesel (116 PS / 250 Nm)',
        mileage: '19.1 km/l',
        isVFM: false,
        keyFeatures: ['1.5L CRDi Diesel with Smooth 6-Speed Torque Converter AT', 'Bose Premium 8-Speaker Sound System', '8-Way Power Driver Seat with Relaxation Position', 'Trinity Panoramic Dual 10.25-inch Curved Displays', 'Front Ventilated Seats', 'Boundless Panoramic Sunroof', 'Kia Connect 2.0 with 85+ Features']
      },
      {
        name: 'GTX+ 1.5L Turbo Petrol 7DCT (GT-Line)',
        exShowroom: 2135000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L Smartstream T-GDi Turbo (160 PS / 253 Nm)',
        mileage: '17.9 km/l',
        isVFM: false,
        keyFeatures: ['Flagship GT-Line Styling with Glossy Tiger Nose Grille & Dual Exhaust', 'Full Level 2+ ADAS Intelligence (28 Autonomous Features)', 'Smart Cruise Control with Stop & Go (SCC)', '360° Surround View Monitor with Blind View Monitor (BVM)', 'R18 (215/55 R18) Crystal Cut Alloys', 'Windshield Projected Head-Up Display (HUD)', 'Bose 8-Speaker Audio System', 'Dual-Pane Panoramic Sunroof']
      },
      {
        name: 'X-Line 1.5L Turbo Petrol 7DCT (Matte Graphite)',
        exShowroom: 2182000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L Smartstream T-GDi Turbo (160 PS / 253 Nm)',
        mileage: '17.9 km/l',
        isVFM: false,
        keyFeatures: ['Exclusive Matte Graphite Signature Exterior Paint Finish', 'Splendid Sage Green / Glossy Black Exclusive X-Line Interiors', 'R18 Crystal Cut Glossy Black Alloy Wheels', 'Full Level 2+ ADAS Suite (28 Autonomous Features)', 'Head-Up Display & 360° Surround View Monitor', 'Bose Premium 8-Speaker Audio', 'Boundless Panoramic Sunroof']
      }
    ]
  },
  {
    id: 'kia-sonet',
    name: 'Kia Sonet',
    brand: 'Kia',
    tagline: 'Wild. Reborn. Dominating Tech SUV with Level 1 ADAS (10 Features), Dual 10.25-inch Screens & Bose 7-Speaker Audio',
    launchDate: 'Latest 2025–2026 Model (Wild Reborn Facelift)',
    bodyType: 'SUV',
    fuelTypes: ['Petrol', 'Diesel'],
    priceRange: '₹7.45 - ₹14.36 Lakh',
    minPrice: 744900,
    maxPrice: 1435900,
    safetyRating: 'Level 1 ADAS (10 Autonomous Features) & Standard 6 Airbags',
    groundClearance: '205 mm',
    bootSpace: '385 Litres (VDA)',
    waitingPeriod: '3 - 6 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/sonet/360/pewter-olive/1.webp',
    summary: 'The latest Kia Sonet facelift redefines the compact SUV benchmark with an aggressive, wild stance, 6 standard airbags, and an advanced Level 1 ADAS safety suite featuring 10 autonomous functions. Power comes from three versatile and refined engines: a sporty 1.0L Turbo GDi petrol (120 PS / 172 Nm) paired with a 7-speed Dual Clutch Transmission (7DCT) or 6-speed clutchless iMT, a reliable 1.2L Smartstream MPi petrol (83 PS / 115 Nm) with 5MT, and an ultra-torquey 1.5L CRDi VGT Diesel (116 PS / 250 Nm) offered with a 6-speed manual, 6-speed iMT, or smooth 6-speed torque converter automatic. Inside, the high-tech cabin features dual 10.25-inch high-definition connected screens (touchscreen infotainment and digital driver cluster), an electric sunroof, front row ventilated seats with a 4-way power driver seat, a 360° surround view camera with blind view monitor, and a premium 7-speaker Bose sound system.',
    colors: [
      { id: 'pewter-olive', name: 'Pewter Olive (Signature Hero Shade)', hex: '#4E5343', image: 'https://ik.imagekit.io/2908vvlod/cars/sonet/360/pewter-olive/1.webp' },
      { id: 'glacier-white-pearl', name: 'Glacier White Pearl', hex: '#F5F6F8', image: 'https://ik.imagekit.io/2908vvlod/cars/sonet/360/glacier-white-pearl/1.webp' },
      { id: 'aurora-black-pearl', name: 'Aurora Black Pearl', hex: '#0F1012', image: 'https://ik.imagekit.io/2908vvlod/cars/sonet/360/aurora-black-pearl/1.webp' },
      { id: 'gravity-grey', name: 'Gravity Grey', hex: '#4F5357', image: 'https://ik.imagekit.io/2908vvlod/cars/sonet/360/gravity-grey/1.webp' },
      { id: 'imperial-blue', name: 'Imperial Blue', hex: '#1C2E4A', image: 'https://ik.imagekit.io/2908vvlod/cars/sonet/360/imperial-blue/1.webp' },
      { id: 'intense-red', name: 'Intense Red', hex: '#A8141D', image: 'https://ik.imagekit.io/2908vvlod/cars/sonet/360/intense-red/1.webp' },
      { id: 'sparkling-silver', name: 'Sparkling Silver', hex: '#C5C7CA', image: 'https://ik.imagekit.io/2908vvlod/cars/sonet/360/sparkling-silver/1.webp' },
      { id: 'matte-graphite', name: 'Matte Graphite (X-Line Exclusive)', hex: '#3A3C3E', image: 'https://ik.imagekit.io/2908vvlod/cars/sonet/360/matte-graphite/1.webp' },
      { id: 'glacier-white-black-roof', name: 'Glacier White Pearl + Aurora Black Pearl', hex: '#EAEBEF', image: 'https://ik.imagekit.io/2908vvlod/cars/sonet/360/glacier-white-black-roof/1.webp' },
      { id: 'intense-red-black-roof', name: 'Intense Red + Aurora Black Pearl', hex: '#931118', image: 'https://ik.imagekit.io/2908vvlod/cars/sonet/360/intense-red-black-roof/1.webp' }
    ],
    angles: [
      { label: 'Front 3/4th Stance & Star Map DRLs', url: 'https://ik.imagekit.io/2908vvlod/cars/sonet/360/pewter-olive/1.webp' },
      { label: 'Dual 10.25-inch HD Screen Panel', url: 'https://ik.imagekit.io/2908vvlod/cars/sonet/gallery/dual-10-25-inch-hd-touchscreen-digital-cluster.webp' },
      { label: 'Crown Jewel LED & Tiger Nose', url: 'https://ik.imagekit.io/2908vvlod/cars/sonet/gallery/crown-jewel-led-headlamps-tiger-nose-grille.webp' },
      { label: 'Bose 7-Speaker Sound System', url: 'https://ik.imagekit.io/2908vvlod/cars/sonet/gallery/bose-premium-7-speaker-sound-system.webp' }
    ],
    gallery: [
      { title: 'Crown Jewel LED Headlamps with Signature Star Map LED DRLs & Sleek Tiger Nose Grille', url: 'https://ik.imagekit.io/2908vvlod/cars/sonet/gallery/crown-jewel-led-headlamps-tiger-nose-grille.webp' },
      { title: 'Star Map Connected LED Tail Lamps with Sporty Aerodynamic Rear Spoiler', url: 'https://ik.imagekit.io/2908vvlod/cars/sonet/gallery/star-map-connected-led-tail-lamps.webp' },
      { title: 'Dual 10.25-inch Connected HD Touchscreen Infotainment & Full Digital Color Instrument Cluster', url: 'https://ik.imagekit.io/2908vvlod/cars/sonet/gallery/dual-10-25-inch-hd-touchscreen-digital-cluster.webp' },
      { title: 'Immersive Bose Premium 7-Speaker Audio System with Dedicated Subwoofer & Dynamic Speed Compensation', url: 'https://ik.imagekit.io/2908vvlod/cars/sonet/gallery/bose-premium-7-speaker-sound-system.webp' },
      { title: 'Front Row Ventilated Seats with 4-Way Power Adjustable Driver Seat for Long-Haul Comfort', url: 'https://ik.imagekit.io/2908vvlod/cars/sonet/gallery/front-ventilated-seats-4-way-power-driver-seat.webp' },
      { title: '360° Surround View Camera with Blind View Monitor (BVM) Integrated in Digital Cluster', url: 'https://ik.imagekit.io/2908vvlod/cars/sonet/gallery/360-degree-camera-blind-view-monitor.webp' },
      { title: 'Level 1 ADAS Autonomous Safety Suite with 10 Features including FCA, LKA, LFA & High Beam Assist', url: 'https://ik.imagekit.io/2908vvlod/cars/sonet/gallery/level-1-adas-autonomous-safety-suite.webp' },
      { title: 'R16 (215/60 R16) Sporty Crystal-Cut Alloy Wheels with Distinctive X-Line Styling & Accents', url: 'https://ik.imagekit.io/2908vvlod/cars/sonet/gallery/r16-crystal-cut-alloy-wheels-x-line-styling.webp' }
    ],
    specs: {
      engineOptions: '1.0L Smartstream T-GDi Turbo Petrol (120 PS / 172 Nm) | 1.2L Smartstream MPi Petrol (83 PS / 115 Nm) | 1.5L CRDi VGT Diesel (116 PS / 250 Nm)',
      transmissions: '5-Speed Manual, 6-Speed Manual, Smartstream 6iMT (Clutchless), 6-Speed Advance AT & 7-Speed Dual Clutch (7DCT)',
      dimensions: '3995 mm (L) × 1790 mm (W) × 1642 mm (H) (with Roof Rails)',
      wheelbase: '2500 mm (Ground Clearance: 205 mm)',
      fuelTank: '45 Litres',
      bootSpace: '385 Litres (VDA Standard)',
      brakes: 'All 4 Disc Brakes (GTX+ & X-Line) / Front Disc & Rear Drum with ABS, EBD, ESC, VSM & HAC',
      suspension: 'McPherson Strut with Coil Spring (Front) / Coupled Torsion Beam Axle with High-Performance Gas Dampers (Rear)',
      safety: '6 Airbags Standard Across All Variants, Level 1 ADAS (10 Autonomous Features), 360° Camera, Blind View Monitor, ESC, VSM, HAC, TPMS Highline, ISOFIX'
    },
    variants: [
      {
        name: 'HTE 1.2L Petrol 5MT',
        exShowroom: 744900,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Smartstream MPi (83 PS / 115 Nm)',
        mileage: '18.8 km/l',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard', 'Electronic Stability Control (ESC) & VSM', 'Hill-Start Assist Control (HAC)', 'Halogen Headlamps & Star Map LED DRLs', 'Front Power Windows', 'Central Locking & Keyless Entry', 'Rear Parking Sensors']
      },
      {
        name: 'HTK 1.2L Petrol 5MT',
        exShowroom: 888900,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.2L Smartstream MPi (83 PS / 115 Nm)',
        mileage: '18.8 km/l',
        isVFM: false,
        keyFeatures: ['20.32 cm (8") Touchscreen with Wireless Android Auto & Apple CarPlay', 'Rear View Camera with Dynamic Guidelines', 'Shark Fin Antenna & Steering Audio Controls', 'Front & Rear USB-C Charging Ports', 'Electrically Adjustable ORVMs', 'Front Parking Sensors']
      },
      {
        name: 'HTK+ 1.0L Turbo Petrol 6iMT',
        exShowroom: 1028900,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.0L Smartstream T-GDi Turbo (120 PS / 172 Nm)',
        mileage: '18.7 km/l',
        isVFM: false,
        keyFeatures: ['120 PS Turbo GDi Engine with Clutchless 6iMT', 'Electric Sunroof with Voice Operation', 'LED Connected Tail Lamps', 'Fully Automatic Air Conditioner (FATC)', 'Smart Key with Push Button Start / Stop', 'Auto Light Control & Power Folding Mirrors']
      },
      {
        name: 'HTX 1.0L Turbo Petrol 7DCT (Automatic)',
        exShowroom: 1183900,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.0L Smartstream T-GDi Turbo (120 PS / 172 Nm)',
        mileage: '19.2 km/l',
        isVFM: true,
        vfmBadge: '💎 BEST VALUE COMPACT SUV AUTOMATIC',
        keyFeatures: ['7-Speed Dual Clutch Transmission (7DCT) with Paddle Shifters', 'Crown Jewel LED Headlamps & Star Map Connected LED Tail Lamps', 'Electric Sunroof', 'Dual 10.25-inch Digital Screen Setup', 'Front Ventilated Seats', 'Drive & Traction Modes (Eco, Normal, Sport / Sand, Mud, Snow)', 'Rear Door Sunshade Curtains']
      },
      {
        name: 'HTX 1.5L Diesel 6AT (Automatic)',
        exShowroom: 1238900,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '1.5L CRDi VGT Diesel (116 PS / 250 Nm)',
        mileage: '19.0 km/l',
        isVFM: false,
        keyFeatures: ['116 PS / 250 Nm CRDi Diesel with Smooth 6-Speed Torque Converter AT', 'Paddle Shifters & Drive Modes', 'Front Ventilated Seats', 'Electric Sunroof', 'LED Headlamps & Connected LED Tail Lamps', 'Rear Disc Brakes & Cruise Control', 'Smart Key Remote Engine Start']
      },
      {
        name: 'GTX+ 1.0L Turbo Petrol 7DCT (GT-Line)',
        exShowroom: 1374900,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.0L Smartstream T-GDi Turbo (120 PS / 172 Nm)',
        mileage: '19.2 km/l',
        isVFM: false,
        keyFeatures: ['Full Level 1 ADAS Suite (10 Autonomous Features with FCA, LDW, LKA, LFA)', 'Bose Premium 7-Speaker Sound System with Subwoofer', '360° Surround View Camera with Blind View Monitor (BVM)', 'Front Row Ventilated Leatherette Seats with 4-Way Power Driver Seat', 'All 4 Disc Brakes Standard', 'R16 Crystal-Cut Alloy Wheels', 'Electric Sunroof with Voice Control']
      },
      {
        name: 'X-Line 1.5L Diesel 6AT (Matte Graphite)',
        exShowroom: 1435900,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '1.5L CRDi VGT Diesel (116 PS / 250 Nm)',
        mileage: '19.0 km/l',
        isVFM: false,
        keyFeatures: ['Exclusive Matte Graphite Signature Exterior Paint', 'Splendid Sage Green Leatherette Interiors with Contrast Stitching', 'Glossy Black Front Grille & Dark Metallic Accents', 'Full Level 1 ADAS Safety Suite (10 Autonomous Features)', 'Bose Premium 7-Speaker Sound System', '360° Surround View Camera & Blind View Monitor', 'All 4 Disc Brakes & 16-inch Crystal Cut Glossy Black Alloys']
      }
    ]
  },
  {
    id: 'kia-carens',
    name: 'Kia Carens',
    brand: 'Kia',
    tagline: 'From a Different World. Premium 3-Row Family RV with Standard 6 Airbags & Robust 15 Safety Suite',
    launchDate: 'Latest 2025–2026 Model (Bi-Fuel CNG & Turbo GDi Editions)',
    bodyType: 'MPV',
    fuelTypes: ['Petrol', 'Diesel', 'CNG'],
    priceRange: '₹10.52 - ₹19.99 Lakh',
    minPrice: 1052000,
    maxPrice: 1999000,
    safetyRating: 'Robust 15 Standard Hi-Safety Package | Standard 6 Airbags & All 4 Disc Brakes',
    groundClearance: '195 mm',
    bootSpace: '216 Litres (expandable to 645 Litres)',
    waitingPeriod: '3 - 8 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/carens/360/imperial-blue/1.webp',
    summary: 'The Kia Carens redefines three-row family mobility as a progressive Recreational Vehicle (RV), merging the boldness of an SUV with the spacious versatility of an MPV. Standard with the Robust 15 Hi-Safety Package across every single variant—including 6 Airbags, All-Wheel Disc Brakes, ESC, VSM, HAC, Downhill Brake Control (DBC), and Highline TPMS. Power comes from four refined powertrain options: an energetic 1.5L Turbo GDi petrol (160 PS / 253 Nm) with 7DCT or 6iMT, a dependable 1.5L Smartstream naturally aspirated petrol (115 PS / 144 Nm) with 6MT, a punchy 1.5L CRDi VGT Diesel (116 PS / 250 Nm) with 6MT, 6iMT or 6-speed torque converter automatic, and a factory-fitted Bi-Fuel 1.5L CNG option delivering exceptional fuel efficiency. The lavish cabin offers 6-seater (Captain Seats) or 7-seater configurations, world-first One-Touch Easy Electric 2nd-Row Tumble, roof-flushed diffused AC vents for all three rows, 10.25-inch HD Touchscreen with Kia Connect, Bose 8-Speaker Audio, ventilated front seats, and SkyLight electric sunroof.',
    colors: [
      { id: 'imperial-blue', name: 'Imperial Blue (Signature Hero Shade)', hex: '#1C2E4A', image: 'https://ik.imagekit.io/2908vvlod/cars/carens/360/imperial-blue/1.webp' },
      { id: 'pewter-olive', name: 'Pewter Olive', hex: '#4E5343', image: 'https://ik.imagekit.io/2908vvlod/cars/carens/360/pewter-olive/1.webp' },
      { id: 'aurora-black-pearl', name: 'Aurora Black Pearl', hex: '#0F1012', image: 'https://ik.imagekit.io/2908vvlod/cars/carens/360/aurora-black-pearl/1.webp' },
      { id: 'gravity-grey', name: 'Gravity Grey', hex: '#4F5357', image: 'https://ik.imagekit.io/2908vvlod/cars/carens/360/gravity-grey/1.webp' },
      { id: 'sparkling-silver', name: 'Sparkling Silver', hex: '#C5C7CA', image: 'https://ik.imagekit.io/2908vvlod/cars/carens/360/sparkling-silver/1.webp' },
      { id: 'clear-white', name: 'Clear White', hex: '#F5F6F8', image: 'https://ik.imagekit.io/2908vvlod/cars/carens/360/clear-white/1.webp' }
    ],
    angles: [
      { label: 'Crown Jewel LED & Star Map DRLs', url: 'https://ik.imagekit.io/2908vvlod/cars/carens/gallery/crown-jewel-led-headlamps-star-map-drls.webp' },
      { label: 'Dual-Camera Dashcam & Cockpit', url: 'https://ik.imagekit.io/2908vvlod/cars/carens/gallery/dual-camera-dashcam-touchscreen-cockpit.webp' },
      { label: 'R16 Crystal-Cut Alloy Wheels', url: 'https://ik.imagekit.io/2908vvlod/cars/carens/gallery/r16-dual-tone-crystal-cut-alloy-wheels.webp' },
      { label: 'Diffused Roof AC Vents (All Rows)', url: 'https://ik.imagekit.io/2908vvlod/cars/carens/gallery/roof-flushed-diffused-ac-vents-all-rows.webp' }
    ],
    gallery: [
      { title: 'Crown Jewel LED Headlamps with Star Map LED Daytime Running Lights & Sleek Grille Accent', url: 'https://ik.imagekit.io/2908vvlod/cars/carens/gallery/crown-jewel-led-headlamps-star-map-drls.webp' },
      { title: 'Digital Radiator Grille with Signature Silver Décor Pattern & Aerodynamic Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/carens/gallery/digital-radiator-grille-silver-decor.webp' },
      { title: 'R16 (205/65 R16) Dual Tone Crystal-Cut Alloy Wheels with Dynamic Spoke Geometry', url: 'https://ik.imagekit.io/2908vvlod/cars/carens/gallery/r16-dual-tone-crystal-cut-alloy-wheels.webp' },
      { title: 'Hi-Tech Cockpit with 10.25-inch HD Touchscreen Infotainment & Factory Dual-Camera Dashcam', url: 'https://ik.imagekit.io/2908vvlod/cars/carens/gallery/dual-camera-dashcam-touchscreen-cockpit.webp' },
      { title: 'Roof-Flushed Diffused AC Vents across 2nd & 3rd Rows with 4-Stage Independent Blower Controls', url: 'https://ik.imagekit.io/2908vvlod/cars/carens/gallery/roof-flushed-diffused-ac-vents-all-rows.webp' },
      { title: 'Standard 6 Airbags & Robust 15 Hi-Safety Architecture across Every Variant', url: 'https://ik.imagekit.io/2908vvlod/cars/carens/gallery/standard-6-airbags-robust-15-safety-package.webp' },
      { title: 'All-Wheel Disc Brakes Standard with Electronic Stability Control (ESC) & Hill-Start Assist (HAC)', url: 'https://ik.imagekit.io/2908vvlod/cars/carens/gallery/all-wheel-disc-brakes-esc-vsm-hac.webp' },
      { title: 'Sporty Rear Bumper Garnish with Chrome Diamond Knurling Pattern & Distinctive Skid Plate', url: 'https://ik.imagekit.io/2908vvlod/cars/carens/gallery/sporty-rear-bumper-diamond-knurling-garnish.webp' }
    ],
    specs: {
      engineOptions: '1.5L Smartstream T-GDi Turbo Petrol (160 PS / 253 Nm) | 1.5L Smartstream MPi Petrol (115 PS / 144 Nm) | 1.5L CRDi VGT Diesel (116 PS / 250 Nm) | 1.5L Bi-Fuel CNG',
      transmissions: '6-Speed Manual, Smartstream 6iMT (Clutchless), 6-Speed Advance AT & 7-Speed Dual Clutch (7DCT)',
      dimensions: '4540 mm (L) × 1800 mm (W) × 1708 mm (H) (with Roof Rails)',
      wheelbase: '2780 mm (Longest Wheelbase in Segment with Maximum 3-Row Legroom)',
      fuelTank: '45 Litres (Petrol/Diesel) | 60 Litres Water Equiv (CNG)',
      bootSpace: '216 Litres (all rows up), expandable to 645 Litres (3rd row flat folded)',
      brakes: 'All 4 Disc Brakes Standard across all variants with ABS, BAS, ESC, VSM & HAC',
      suspension: 'McPherson Strut with Coil Spring (Front) / Coupled Torsion Beam Axle with Coil Spring (Rear)',
      safety: 'Robust 15 Hi-Safety Package: 6 Airbags Standard, ESC, VSM, BAS, HAC, DBC, Highline TPMS, All 4 Disc Brakes, ISOFIX Child Anchors, Rear Parking Sensors'
    },
    variants: [
      {
        name: 'Premium (O) 1.5L Petrol 6MT (7-Seater)',
        exShowroom: 1111900,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L Smartstream MPi (115 PS / 144 Nm)',
        mileage: '15.7 km/l',
        isVFM: false,
        keyFeatures: ['6 Airbags Standard Across All Variants', 'All 4 Disc Brakes Standard', 'Electronic Stability Control (ESC) & VSM', '20.32 cm (8") Touchscreen with Wireless Apple CarPlay & Android Auto', '2nd Row One-Touch Easy Electric Tumble', 'Roof-Flushed 2nd & 3rd Row Diffused AC Vents', 'Rear Door Sunshade Curtains']
      },
      {
        name: 'Premium (O) 1.5L Bi-Fuel CNG 6MT (7-Seater)',
        exShowroom: 1211800,
        fuel: 'CNG',
        trans: 'Manual',
        engine: '1.5L Smartstream Bi-Fuel CNG (Petrol: 115 PS / CNG: 96 PS)',
        mileage: '24.5 km/kg',
        isVFM: true,
        vfmBadge: '🌿 ULTRA-LOW RUNNING COST 3-ROW MPV',
        keyFeatures: ['Factory-Fitted Bi-Fuel CNG with Dedicated Micro-Switch & Dual ECUs', '31.7 cm Digital Cluster with CNG Level & Range Indicator', 'Standard 6 Airbags & All 4 Disc Brakes', '20.32 cm Touchscreen with Wireless Phone Projection', '2nd Row One-Touch Electric Tumble', 'Roof Flushed AC Vents across all rows', 'Rear Door Sunshade Curtains']
      },
      {
        name: 'Prestige (O) 1.5L Turbo Petrol 6iMT (7-Seater)',
        exShowroom: 1335000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L Smartstream T-GDi Turbo (160 PS / 253 Nm)',
        mileage: '16.5 km/l',
        isVFM: false,
        keyFeatures: ['160 PS Turbo GDi Engine with Clutchless 6-Speed iMT', 'Electric SkyLight Sunroof', 'Shark Fin Antenna & LED Tail Lamps', 'Smart Key with Remote Engine Start & Push Button Start', 'Rear View Camera with Dynamic Guidelines', 'All-4 Disc Brakes & 6 Airbags']
      },
      {
        name: 'Prestige Plus 1.5L Diesel 6MT (7-Seater)',
        exShowroom: 1475000,
        fuel: 'Diesel',
        trans: 'Manual',
        engine: '1.5L CRDi VGT Diesel (116 PS / 250 Nm)',
        mileage: '18.4 km/l',
        isVFM: true,
        vfmBadge: '💎 HIGH-TORQUE LONG-DISTANCE SWEET SPOT',
        keyFeatures: ['116 PS / 250 Nm CRDi Diesel with 6-Speed Manual', 'R16 Crystal-Cut Dual Tone Alloys', 'Fully Automatic Temperature Control (FATC)', 'Electric SkyLight Sunroof', 'Auto Cruise Control', 'Full Digital Instrument Cluster', 'Standard 6 Airbags & All-4 Disc Brakes']
      },
      {
        name: 'Luxury 1.5L Turbo Petrol 6iMT (7-Seater)',
        exShowroom: 1680000,
        fuel: 'Petrol',
        trans: 'Manual',
        engine: '1.5L Smartstream T-GDi Turbo (160 PS / 253 Nm)',
        mileage: '16.5 km/l',
        isVFM: false,
        keyFeatures: ['10.25-inch HD Touchscreen Infotainment with Kia Connect Suite', 'Crown Jewel LED Headlamps & Star Map LED DRLs', '64-Color Ambient Mood Lighting', 'Smart Pure Air Purifier with Virus Protection', 'Telescopic Steering Adjust', 'Leatherette Upholstery']
      },
      {
        name: 'Luxury Plus 1.5L Turbo Petrol 7DCT (6-Seater / 7-Seater)',
        exShowroom: 1895000,
        fuel: 'Petrol',
        trans: 'Automatic',
        engine: '1.5L Smartstream T-GDi Turbo (160 PS / 253 Nm)',
        mileage: '16.5 km/l',
        isVFM: false,
        keyFeatures: ['7-Speed Dual Clutch Automatic (7DCT) with Paddle Shifters', 'Front Ventilated Seats', 'Bose Premium 8-Speaker Audio System', 'Wireless Smartphone Charger with Cooling Function', 'Drive Modes (Eco, Normal, Sport)', 'Factory-Fitted Dual-Camera Dashcam', 'Electric SkyLight Sunroof']
      },
      {
        name: 'Luxury Plus 1.5L Diesel 6AT (6-Seater Captain Seats)',
        exShowroom: 1945000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '1.5L CRDi VGT Diesel (116 PS / 250 Nm)',
        mileage: '18.4 km/l',
        isVFM: false,
        keyFeatures: ['Smooth 6-Speed Torque Converter Automatic with Paddle Shifters', 'Luxury 2nd-Row Captain Seats with Sliding & Reclining', 'Front Ventilated Seats', 'Bose Premium 8-Speaker Sound System', 'Electric SkyLight Sunroof', 'Dual Camera Dashcam', '6 Airbags & All-4 Disc Brakes']
      }
    ]
  },
  {
    id: 'kia-carnival',
    name: 'Kia Carnival',
    brand: 'Kia',
    tagline: 'Extravagance Reborn — 4th Gen Ultra-Luxury Limousine with Powered VIP Lounge Relaxation Seats, Dual Curved 12.3" Displays & Level 2+ ADAS',
    launchDate: 'October 2024 (4th Gen Facelift KA4)',
    bodyType: 'MUV',
    fuelTypes: ['Diesel'],
    priceRange: '₹63.90 - ₹68.90 Lakh',
    minPrice: 6390000,
    maxPrice: 6890000,
    safetyRating: 'Standard 8 Airbags, Level 2+ ADAS with 23 Autonomous Features, All 4 Disc Brakes, 360° Surround View & Blind View Monitor, ESC with HAC',
    groundClearance: '180 mm',
    bootSpace: '627 L (expandable to 2785 L with 3rd row sinking flat)',
    waitingPeriod: '8 - 12 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/carnival/360/glacier-white-pearl/1.webp',
    summary: 'The All-New 4th Generation Kia Carnival Limousine redefines ultra-luxury multi-purpose transportation in India. Powered by a refined 2.2L Smartstream CRDi VGT Diesel engine producing 193 PS and 441 Nm through a smooth 8-speed automatic with Shift-by-Wire dial, it boasts 2nd-row VIP Lounge Relaxation Powered Captain Seats with ottoman leg support, ventilation and heating, dual 12.3-inch curved panoramic cockpit, dual electric sunroofs, 12-speaker Bose audio, smart electric sliding doors, and comprehensive Level 2+ ADAS with 23 autonomous safety functions.',
    threeSixty: {
      type: 'image-sequence',
      provider: 'imagekit',
      totalFrames: 36,
      defaultColor: 'glacier-white-pearl',
      basePath: 'https://ik.imagekit.io/2908vvlod/cars/carnival/360',
      fileNamePattern: '{frame}.webp',
      colors: [
        { id: 'glacier-white-pearl', name: 'Glacier White Pearl', hex: '#F5F6F8' },
        { id: 'fusion-black', name: 'Fusion Black', hex: '#0B0C0E' }
      ]
    },
    colors: [
      { id: 'glacier-white-pearl', name: 'Glacier White Pearl', hex: '#F5F6F8', image: 'https://ik.imagekit.io/2908vvlod/cars/carnival/360/glacier-white-pearl/1.webp' },
      { id: 'fusion-black', name: 'Fusion Black', hex: '#0B0C0E', image: 'https://ik.imagekit.io/2908vvlod/cars/carnival/360/fusion-black/1.webp' }
    ],
    angles: [
      { label: 'All-New Limousine Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/carnival/gallery/all-new-kia-carnival-limousine-front-stance.webp' },
      { label: 'VIP Lounge Relaxation Seats', url: 'https://ik.imagekit.io/2908vvlod/cars/carnival/gallery/second-row-powered-vip-relaxation-seats.webp' },
      { label: 'Dual Curved 12.3" Cockpit', url: 'https://ik.imagekit.io/2908vvlod/cars/carnival/gallery/dual-curved-12-3-inch-panoramic-displays.webp' },
      { label: 'Wide Dual Electric Sunroof', url: 'https://ik.imagekit.io/2908vvlod/cars/carnival/gallery/wide-electric-dual-sunroof.webp' }
    ],
    gallery: [
      { title: 'All-New Kia Carnival Limousine Exterior Stance with Ice Cube LED Projection Headlamps & Starmap DRLs', url: 'https://ik.imagekit.io/2908vvlod/cars/carnival/gallery/all-new-kia-carnival-limousine-front-stance.webp' },
      { title: '2nd-Row Powered VIP Lounge Relaxation Seats with Powered Ottoman Leg Support, Heating & Ventilation', url: 'https://ik.imagekit.io/2908vvlod/cars/carnival/gallery/second-row-powered-vip-relaxation-seats.webp' },
      { title: 'Dual 12.3-inch Curved Panoramic Displays with Navigation, Wireless Android Auto & Apple CarPlay Cockpit', url: 'https://ik.imagekit.io/2908vvlod/cars/carnival/gallery/dual-curved-12-3-inch-panoramic-displays.webp' },
      { title: 'Wide Dual Electric Sunroofs providing Panaromic Sky Views for Front & Rear Passengers', url: 'https://ik.imagekit.io/2908vvlod/cars/carnival/gallery/wide-electric-dual-sunroof.webp' },
      { title: '12-Speaker BOSE Premium Concert Sound System with Dynamic Speed Compensation', url: 'https://ik.imagekit.io/2908vvlod/cars/carnival/gallery/bose-12-speaker-premium-sound-system.webp' },
      { title: 'Smart One-Touch Power Sliding Doors & Gesture-Controlled Smart Power Tailgate', url: 'https://ik.imagekit.io/2908vvlod/cars/carnival/gallery/smart-power-sliding-doors-tailgate.webp' },
      { title: 'ADAS Level 2+ with 23 Autonomous Safety Features & 360-Degree Surround View Monitor with Blind View Monitor', url: 'https://ik.imagekit.io/2908vvlod/cars/carnival/gallery/level-2-adas-360-surround-view-monitor.webp' },
      { title: 'Standard 8 Airbags Architecture, All-Wheel Disc Brakes, ESC with VSM & Hill Assist Control', url: 'https://ik.imagekit.io/2908vvlod/cars/carnival/gallery/standard-8-airbags-all-wheel-disc-brakes.webp' }
    ],
    specs: {
      engineOptions: '2.2L Smartstream CRDi VGT Diesel (193 PS [142 kW] @ 3800 rpm / 441 Nm [45 kgf·m] @ 1750-2750 rpm)',
      transmissions: '8-Speed Sportsmatic Automatic (8AT) with Dial-Type Shift-by-Wire & Paddle Shifters',
      dimensions: '5155 mm (L) × 1995 mm (W) × 1775 mm (H with Roof Rails)',
      wheelbase: '3090 mm (Grand Limousine Executive Wheelbase)',
      fuelTank: '72 Litres',
      bootSpace: '627 Litres (All 3 Rows Up), Expandable to 2785 Litres (3rd Row Flat Sinking Seats)',
      brakes: 'Front & Rear All 4 Ventilated/Solid Disc Brakes with ABS, EBD & Electronic Parking Brake with Auto Hold',
      suspension: 'McPherson Strut with Coil Springs (Front) / Independent Multi-Link with Stabilizer Bar (Rear)',
      safety: 'Level 2+ ADAS (23 Autonomous Features: FCA Junction Turning, Blind Spot Avoidance, Smart Cruise Stop&Go, Lane Keep, Safe Exit, Rear Cross-Traffic), 8 Airbags Standard, 360° Camera, TPMS, ESC, VSM'
    },
    variants: [
      {
        name: 'Limousine 2.2L Diesel 8AT (7-Seater)',
        exShowroom: 6390000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.2L Smartstream CRDi Diesel (193 PS / 441 Nm)',
        mileage: '14.85 km/l',
        isVFM: false,
        keyFeatures: ['Standard 8 Airbags', 'Dual Electric Sunroofs', 'Dual 12.3-inch Panoramic Curved Displays', '8-Speed Automatic with Shift-by-Wire Dial', 'Smart Power Sliding Doors & Power Tailgate', '3-Zone Fully Automatic Climate Control', 'Level 2 ADAS with Autonomous Braking & Lane Follow Assist', 'All 4 Disc Brakes & Electronic Parking Brake with Auto Hold']
      },
      {
        name: 'Limousine Plus 2.2L Diesel 8AT (7-Seater VIP Lounge)',
        exShowroom: 6890000,
        fuel: 'Diesel',
        trans: 'Automatic',
        engine: '2.2L Smartstream CRDi Diesel (193 PS / 441 Nm)',
        mileage: '14.85 km/l',
        isVFM: true,
        vfmBadge: '👑 FIRST-CLASS VIP EXECUTIVE LIMOUSINE',
        keyFeatures: ['2nd-Row Powered VIP Relaxation Seats with Powered Ottoman Leg Support, Heating & Ventilation', '12-Speaker BOSE Premium Concert Sound System', '11-inch Advanced Head-Up Display (HUD)', 'Level 2+ ADAS with 23 Autonomous Features', '360-Degree Surround View Monitor with Blind View Monitor (BVM)', '18-inch Diamond Cut Alloy Wheels', 'R18 Spare Wheel', '64-Color Ambient Lighting & Tuscan & Umber 2-Tone Leatherette Interiors']
      }
    ]
  },
  {
    id: 'kia-ev9',
    name: 'Kia EV9',
    brand: 'Kia',
    tagline: 'The World\'s Most Inspiring Electric — Flagship 3-Row Electric SUV with 99.8 kWh Battery, 384 PS AWD, 561 km Range & Level 2+ ADAS',
    launchDate: 'October 2024 (Global Electric Flagship)',
    bodyType: 'SUV',
    fuelTypes: ['Electric'],
    priceRange: '₹1.30 Crore',
    minPrice: 12990000,
    maxPrice: 12990000,
    safetyRating: 'Standard 10 Airbags, Level 2+ ADAS with 27 Autonomous Features, 5-Star Euro NCAP, All 4 Disc Brakes, 360° Camera with Blind View Monitor',
    groundClearance: '198 mm',
    bootSpace: '333 L (All 3 Rows Up), Expandable to 828 L (3rd Row Folded) / 2318 L (Flat Floor) + 52 L Frunk',
    waitingPeriod: '8 - 12 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/ev9/360/ocean-blue/1.webp',
    summary: 'The All-New Kia EV9 is Kia’s flagship full-size electric SUV built on the dedicated Electric-Global Modular Platform (E-GMP) with 800V ultra-fast charging architecture. Packing a massive 99.8 kWh battery delivering 561 km ARAI certified range, twin high-powered motors producing 384 PS and 700 Nm of torque with AWD, 0-100 km/h in 5.3 seconds, 1st & 2nd row powered relaxation lounge seats with ottoman leg support and massage, Trinity panoramic cockpit with 14-speaker Meridian audio, dual sunroofs, and comprehensive Level 2+ ADAS with 27 autonomous safety features.',
    threeSixty: {
      type: 'image-sequence',
      provider: 'imagekit',
      totalFrames: 36,
      defaultColor: 'ocean-blue',
      basePath: 'https://ik.imagekit.io/2908vvlod/cars/ev9/360',
      fileNamePattern: '{frame}.webp',
      colors: [
        { id: 'ocean-blue', name: 'Ocean Blue (Hero Signature Shade)', hex: '#173B6C' },
        { id: 'snow-white-pearl', name: 'Snow White Pearl', hex: '#F5F6F8' },
        { id: 'panthera-metal', name: 'Panthera Metal', hex: '#4B4E54' },
        { id: 'pebble-gray', name: 'Pebble Gray', hex: '#7B8189' },
        { id: 'aurora-black-pearl', name: 'Aurora Black Pearl', hex: '#0E0F11' }
      ]
    },
    colors: [
      { id: 'ocean-blue', name: 'Ocean Blue (Hero Signature Shade)', hex: '#173B6C', image: 'https://ik.imagekit.io/2908vvlod/cars/ev9/360/ocean-blue/1.webp' },
      { id: 'snow-white-pearl', name: 'Snow White Pearl', hex: '#F5F6F8', image: 'https://ik.imagekit.io/2908vvlod/cars/ev9/360/snow-white-pearl/1.webp' },
      { id: 'panthera-metal', name: 'Panthera Metal', hex: '#4B4E54', image: 'https://ik.imagekit.io/2908vvlod/cars/ev9/360/panthera-metal/1.webp' },
      { id: 'pebble-gray', name: 'Pebble Gray', hex: '#7B8189', image: 'https://ik.imagekit.io/2908vvlod/cars/ev9/360/pebble-gray/1.webp' },
      { id: 'aurora-black-pearl', name: 'Aurora Black Pearl', hex: '#0E0F11', image: 'https://ik.imagekit.io/2908vvlod/cars/ev9/360/aurora-black-pearl/1.webp' }
    ],
    angles: [
      { label: 'GT-Line Electric Flagship Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/ev9/gallery/all-new-kia-ev9-gt-line-electric-flagship-stance.webp' },
      { label: 'Trinity Panoramic Cockpit', url: 'https://ik.imagekit.io/2908vvlod/cars/ev9/gallery/trinity-panoramic-display-futuristic-cockpit.webp' },
      { label: 'VIP Lounge Massage Seats', url: 'https://ik.imagekit.io/2908vvlod/cars/ev9/gallery/second-row-powered-vip-relaxation-massage-seats.webp' },
      { label: 'Dual Electric Sunroof', url: 'https://ik.imagekit.io/2908vvlod/cars/ev9/gallery/dual-electric-sunroof-panoramic-view.webp' }
    ],
    gallery: [
      { title: 'All-New Kia EV9 GT-Line AWD Exterior Stance with Digital Pattern Lighting Grille & Starmap DRLs', url: 'https://ik.imagekit.io/2908vvlod/cars/ev9/gallery/all-new-kia-ev9-gt-line-electric-flagship-stance.webp' },
      { title: 'Digital Pattern Lighting Grille with Intelligent Ice Cube LED Projection Headlamps & Dynamic Welcome Sequence', url: 'https://ik.imagekit.io/2908vvlod/cars/ev9/gallery/digital-pattern-lighting-grille-ice-cube-led-headlamps.webp' },
      { title: 'Trinity Panoramic Display Cockpit (12.3" Digital Cluster + 5" Climate Control Display + 12.3" HD Navigation)', url: 'https://ik.imagekit.io/2908vvlod/cars/ev9/gallery/trinity-panoramic-display-futuristic-cockpit.webp' },
      { title: '2nd-Row Powered VIP Lounge Relaxation Captain Seats with 8-Way Power Adjust, Leg Support & Massage Function', url: 'https://ik.imagekit.io/2908vvlod/cars/ev9/gallery/second-row-powered-vip-relaxation-massage-seats.webp' },
      { title: 'Dual Electric Sunroofs (Front Tilt & Slide, Rear Panoramic Glass) providing Open-Sky Luxury', url: 'https://ik.imagekit.io/2908vvlod/cars/ev9/gallery/dual-electric-sunroof-panoramic-view.webp' },
      { title: '800V Ultra-Fast DC Architecture with 350 kW Charging capability (10% to 80% charge in just 24 minutes)', url: 'https://ik.imagekit.io/2908vvlod/cars/ev9/gallery/ultra-fast-350kw-dc-fast-charging-24-minutes.webp' },
      { title: '14-Speaker Meridian Premium Concert Sound System with Active Sound Design & Surround Acoustics', url: 'https://ik.imagekit.io/2908vvlod/cars/ev9/gallery/meridian-14-speaker-premium-concert-sound-system.webp' },
      { title: 'Level 2+ ADAS Suite with 27 Autonomous Safety Features, 360° Surround View & Blind View Monitor', url: 'https://ik.imagekit.io/2908vvlod/cars/ev9/gallery/level-2-plus-adas-with-27-autonomous-features-360-cam.webp' }
    ],
    specs: {
      battery: '99.8 kWh High-Energy Lithium-Ion Battery (800V E-GMP Dedicated Architecture)',
      range: '561 km (ARAI MIDC-Full Certified Range)',
      motors: 'Dual Electric Motors AWD (282.6 kW / 384.2 PS & 700 Nm Torque, 0-100 km/h in 5.3s)',
      charging: '350 kW DC Fast Charging (10% to 80% in 24 minutes) | 11 kW AC Home Wallbox Charger',
      dimensions: '5015 mm (L) × 1980 mm (W) × 1780 mm (H with Roof Rails)',
      wheelbase: '3100 mm (Longest Executive Wheelbase in Class)',
      groundClearance: '198 mm',
      bootSpace: '333 Litres (All 3 Rows Up), Expandable to 828 Litres (3rd Row Folded) / 2318 Litres (Flat Floor) + 52 Litres Front Frunk',
      brakes: 'Front & Rear All 4 Disc Brakes with Multi-Collision Braking (MCB) & Electronic Parking Brake with Auto Hold',
      suspension: 'McPherson Strut (Front) / Independent Multi-Link with Self-Leveling Damper (Rear)',
      safety: 'Level 2+ ADAS (27 Autonomous Features: FCA Junction Crossing, Evasive Steering, Blind Spot Avoidance, Smart Cruise Machine Learning, Safe Exit, 360° Camera), 10 Airbags Standard, 5-Star Euro NCAP'
    },
    variants: [
      {
        name: 'GT-Line AWD 99.8 kWh (6-Seater VIP Lounge)',
        exShowroom: 12990000,
        fuel: 'Electric',
        trans: 'Automatic',
        engine: 'Dual Electric Motors (384 PS / 700 Nm AWD)',
        mileage: '561 km/charge (ARAI)',
        isVFM: true,
        vfmBadge: '⚡ FLAGSHIP ALL-ELECTRIC LUXURY LOUNGE',
        keyFeatures: ['99.8 kWh Lithium-Ion Battery with 561 km Range', 'Dual Motor AWD (384 PS / 700 Nm, 0-100 km/h in 5.3s)', '10 Airbags Standard & 5-Star Safety Architecture', 'Level 2+ ADAS with 27 Autonomous Features', '1st & 2nd Row Relaxation Seats with Ottoman Leg Support & Massage', 'Trinity Panoramic Display (12.3" Cluster + 5" HVAC + 12.3" Nav)', '14-Speaker Meridian Concert Sound System', '800V Ultra-Fast DC Charging (10-80% in 24 Mins) & Vehicle-to-Load (V2L)']
      }
    ]
  },
  {
    id: 'kia-ev6',
    name: 'Kia EV6',
    brand: 'Kia',
    tagline: 'The Electric Superstar — High-Performance Electric Crossover with 84 kWh Battery, 325 PS AWD, 663 km Range & 800V Ultra-Fast Charging',
    launchDate: 'Updated 2025 (Long-Range 84 kWh Facelift)',
    bodyType: 'Crossover',
    fuelTypes: ['Electric'],
    priceRange: '₹60.95 - ₹65.95 Lakh',
    minPrice: 6095000,
    maxPrice: 6595000,
    safetyRating: 'Standard 8 Airbags, Level 2 ADAS 2.0 with 25 Autonomous Features, 5-Star Euro NCAP, All 4 Disc Brakes, 360° Surround View Monitor',
    groundClearance: '178 mm',
    bootSpace: '520 L (expandable to 1300 L) + 20 L Front Frunk',
    waitingPeriod: '6 - 10 Weeks',
    heroImage: 'https://ik.imagekit.io/2908vvlod/cars/ev6/360/yacht-blue/1.webp',
    summary: 'The Kia EV6 is a flagship high-performance electric crossover built on the dedicated Electric-Global Modular Platform (E-GMP) with 800V ultra-fast architecture. Featuring an upgraded 84 kWh high-density battery providing 663 km certified range, dual motors producing 325 PS and 605 Nm torque with AWD delivering 0-100 km/h in 5.3s, 10% to 80% charging in just 18 minutes via 350 kW DC charger, dual 12.3-inch curved panoramic display cockpit, 14-speaker Meridian audio, premium relaxation front seats with zero-gravity recline, and Level 2 ADAS 2.0 with 25 safety functions.',
    threeSixty: {
      type: 'image-sequence',
      provider: 'imagekit',
      totalFrames: 36,
      defaultColor: 'yacht-blue',
      basePath: 'https://ik.imagekit.io/2908vvlod/cars/ev6/360',
      fileNamePattern: '{frame}.webp',
      colors: [
        { id: 'yacht-blue', name: 'Yacht Blue (Hero Signature Sport Shade)', hex: '#13264D' },
        { id: 'snow-white-pearl', name: 'Snow White Pearl', hex: '#F5F6F8' },
        { id: 'wolf-grey', name: 'Wolf Grey', hex: '#7D838A' },
        { id: 'runway-red', name: 'Runway Red', hex: '#9C1C24' },
        { id: 'aurora-black-pearl', name: 'Aurora Black Pearl', hex: '#0E0F11' }
      ]
    },
    colors: [
      { id: 'yacht-blue', name: 'Yacht Blue (Hero Signature Sport Shade)', hex: '#13264D', image: 'https://ik.imagekit.io/2908vvlod/cars/ev6/360/yacht-blue/1.webp' },
      { id: 'snow-white-pearl', name: 'Snow White Pearl', hex: '#F5F6F8', image: 'https://ik.imagekit.io/2908vvlod/cars/ev6/360/snow-white-pearl/1.webp' },
      { id: 'wolf-grey', name: 'Wolf Grey', hex: '#7D838A', image: 'https://ik.imagekit.io/2908vvlod/cars/ev6/360/wolf-grey/1.webp' },
      { id: 'runway-red', name: 'Runway Red', hex: '#9C1C24', image: 'https://ik.imagekit.io/2908vvlod/cars/ev6/360/runway-red/1.webp' },
      { id: 'aurora-black-pearl', name: 'Aurora Black Pearl', hex: '#0E0F11', image: 'https://ik.imagekit.io/2908vvlod/cars/ev6/360/aurora-black-pearl/1.webp' }
    ],
    angles: [
      { label: 'Electric Superstar Stance', url: 'https://ik.imagekit.io/2908vvlod/cars/ev6/gallery/all-new-kia-ev6-electric-superstar-exterior-stance.webp' },
      { label: 'Dual Panoramic Curved Cockpit', url: 'https://ik.imagekit.io/2908vvlod/cars/ev6/gallery/dual-12-3-inch-panoramic-curved-display-cockpit.webp' },
      { label: 'Zero-Gravity Relaxation Seats', url: 'https://ik.imagekit.io/2908vvlod/cars/ev6/gallery/driver-passenger-premium-relaxation-comfort-seats.webp' },
      { label: 'Wide Tilt & Slide Sunroof', url: 'https://ik.imagekit.io/2908vvlod/cars/ev6/gallery/wide-electric-sunroof-with-tilt-and-slide.webp' }
    ],
    gallery: [
      { title: 'All-New Kia EV6 Electric Superstar Exterior Stance with Dual LED Headlamps & Connected Light Bar', url: 'https://ik.imagekit.io/2908vvlod/cars/ev6/gallery/all-new-kia-ev6-electric-superstar-exterior-stance.webp' },
      { title: 'Dual LED Headlamps with Adaptive Driving Beam & Star Map Connected Daytime Running Lights', url: 'https://ik.imagekit.io/2908vvlod/cars/ev6/gallery/dual-led-headlamps-adaptive-driving-beam.webp' },
      { title: 'Dual 12.3-inch Panoramic Curved Displays (CCNC Navigation & Digital Supervision Cluster)', url: 'https://ik.imagekit.io/2908vvlod/cars/ev6/gallery/dual-12-3-inch-panoramic-curved-display-cockpit.webp' },
      { title: 'Driver and Front Passenger Zero-Gravity Premium Relaxation Seats with Ventilation & Heating', url: 'https://ik.imagekit.io/2908vvlod/cars/ev6/gallery/driver-passenger-premium-relaxation-comfort-seats.webp' },
      { title: 'Wide Electric Sunroof with Tilt and Sliding Functionality expanding Cabin Airy Ambiance', url: 'https://ik.imagekit.io/2908vvlod/cars/ev6/gallery/wide-electric-sunroof-with-tilt-and-slide.webp' },
      { title: '800V Ultra-Fast DC Architecture (10% to 80% Charging in just 18 minutes with 350 kW Charger)', url: 'https://ik.imagekit.io/2908vvlod/cars/ev6/gallery/ultra-fast-800v-dc-charging-18-minutes.webp' },
      { title: '14-Speaker Meridian Premium Concert Sound System with Active Sound Design (ASD)', url: 'https://ik.imagekit.io/2908vvlod/cars/ev6/gallery/meridian-premium-14-speaker-sound-system.webp' },
      { title: 'Level 2 ADAS 2.0 Suite with 25 Autonomous Safety Functions, 360° Camera & Blind View Monitor', url: 'https://ik.imagekit.io/2908vvlod/cars/ev6/gallery/level-2-adas-2-0-with-25-autonomous-safety-features.webp' }
    ],
    specs: {
      battery: '84 kWh Upgraded High-Density Lithium-Ion Battery Pack (800V E-GMP Architecture)',
      range: '663 km (ARAI MIDC-Full Certified Range)',
      motors: 'Dual Permanent Magnet Synchronous Motors (325 PS / 605 Nm AWD, 0-100 km/h in 5.3s) | Single Motor RWD (229 PS / 350 Nm)',
      charging: '350 kW DC Ultra-Fast Charging (10% to 80% in 18 minutes) | 11 kW AC Wallbox (0-100% in 7h 20m)',
      dimensions: '4695 mm (L) × 1890 mm (W) × 1570 mm (H)',
      wheelbase: '2900 mm (Long EV Architecture Wheelbase with Flat Floor Cabin)',
      groundClearance: '178 mm',
      bootSpace: '520 Litres, Expandable to 1300 Litres (60:40 Rear Remote Folding) + 20 Litres Front Frunk (AWD)',
      brakes: 'Front & Rear All 4 Disc Brakes with Multi-Collision Brake Assist (MCBA) & EPB with Auto Hold',
      suspension: 'McPherson Strut (Front) / Multi-Link Independent Suspension (Rear)',
      safety: 'Level 2 ADAS 2.0 (25 Autonomous Features: FCA 2.0 Junction Crossing & Evasive Steering, Blind Spot Avoidance, Smart Cruise Stop&Go, Safe Exit Assist, 360° Camera), 8 Airbags Standard, 5-Star Euro NCAP'
    },
    variants: [
      {
        name: 'GT-Line RWD 84 kWh Single Motor',
        exShowroom: 6095000,
        fuel: 'Electric',
        trans: 'Automatic',
        engine: 'Single Electric Motor RWD (229 PS / 350 Nm)',
        mileage: '663 km/charge (ARAI)',
        isVFM: false,
        keyFeatures: ['84 kWh Lithium-Ion Battery with 663 km Certified Range', 'Rear Wheel Drive (RWD) with 229 PS / 350 Nm', 'Dual 12.3-inch Panoramic Curved Displays', 'Driver & Passenger Premium Relaxation Seats', 'Wide Sunroof with Tilt & Slide', 'Standard 8 Airbags & 5-Star Euro NCAP Safety', 'Level 2 ADAS with Smart Cruise & Lane Follow Assist', '800V Ultra-Fast DC Charging (10-80% in 18 Mins) & V2L']
      },
      {
        name: 'GT-Line AWD 84 kWh Dual Motor',
        exShowroom: 6595000,
        fuel: 'Electric',
        trans: 'Automatic',
        engine: 'Dual Electric Motors AWD (325 PS / 605 Nm)',
        mileage: '663 km/charge (ARAI)',
        isVFM: true,
        vfmBadge: '⚡ HIGH-PERFORMANCE 325 PS ELECTRIC SUPERSTAR',
        keyFeatures: ['Dual Motor All Wheel Drive (325 PS / 605 Nm, 0-100 km/h in 5.3s)', '84 kWh Lithium-Ion Battery (663 km ARAI Range)', '14-Speaker Meridian Premium Concert Sound System with Active Sound Design', 'Augmented Reality Head-Up Display (AR HUD)', '360-Degree Surround View Monitor with Blind View Monitor (BVM)', 'Level 2 ADAS 2.0 with 25 Autonomous Features', 'Smart Power Tailgate with Hands-Free Access', 'Vehicle-to-Load (V2L - 3.5 kW) and Vehicle-to-Vehicle (V2V) Support']
      }
    ]
  },
  {
      "id": "toyota-innova-hycross",
      "name": "Toyota Innova Hycross",
      "brand": "Toyota",
      "tagline": "The Flagship Self-Charging Hybrid MPV with Ottoman Seats & ADAS",
      "launchDate": "Updated 2024 (GX(O) & ZX(O))",
      "bodyType": "MPV",
      "fuelTypes": [
          "Petrol",
          "Hybrid"
      ],
      "priceRange": "₹19.53 - ₹31.84 Lakh",
      "minPrice": 1953000,
      "maxPrice": 3184000,
      "safetyRating": "5.0 ★ (Expected Bharat NCAP / ASEAN NCAP 5-Star)",
      "groundClearance": "185 mm",
      "bootSpace": "300 L (Expandable to 991 L)",
      "waitingPeriod": "3 - 6 Months",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/toyota-innova-hycross/colors/platinum-white-pearl.webp?v=2",
      "summary": "The Innova Hycross is Toyota’s flagship multi-purpose vehicle built on the high-rigidity TNGA-C monocoque platform. Featuring a 2.0L 5th-Gen Self-Charging Strong Hybrid powertrain delivering an ARAI-certified 21.19 kmpl, Level-2 Toyota Safety Sense ADAS, a dual-pane panoramic sunroof, 10.1-inch floating touchscreen with Apple CarPlay, and electrically powered Ottoman captain seats with extended leg support.",
      "colors": [
          {
              "id": "platinum-white-pearl",
              "name": "Platinum White Pearl",
              "hex": "#EBECE8",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-innova-hycross/colors/platinum-white-pearl.webp?v=2"
          },
          {
              "id": "attitude-black",
              "name": "Attitude Black",
              "hex": "#0E0F11",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-innova-hycross/colors/attitude-black.webp?v=2"
          },
          {
              "id": "avant-garde-bronze",
              "name": "Avant-Garde Bronze Metallic",
              "hex": "#575249",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-innova-hycross/colors/avant-garde-bronze.webp?v=2"
          },
          {
              "id": "blackish-ageha-glass-flake",
              "name": "Blackish Ageha Glass Flake",
              "hex": "#1B2B34",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-innova-hycross/colors/blackish-ageha-glass-flake.webp?v=2"
          },
          {
              "id": "sparkling-black-crystal-shine",
              "name": "Sparkling Black Crystal Shine",
              "hex": "#1C1C21",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-innova-hycross/colors/sparkling-black-crystal-shine.webp?v=2"
          },
          {
              "id": "super-white",
              "name": "Super White",
              "hex": "#F7F7F7",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-innova-hycross/colors/super-white.webp?v=2"
          }
      ],
      "gallery": [
          {
              "id": "exterior-front",
              "title": "Muscular SUV-Inspired Front Stance",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-innova-hycross/gallery/exterior-front.webp?v=2"
          },
          {
              "id": "exterior-profile",
              "title": "Aerodynamic Luxury Silhouette",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-innova-hycross/gallery/exterior-profile.webp?v=2"
          },
          {
              "id": "ottoman-seats",
              "title": "Powered Ottoman Captain Seats with Leg Rests",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-innova-hycross/gallery/ottoman-seats.webp?v=2"
          },
          {
              "id": "panoramic-sunroof",
              "title": "Panoramic Sunroof with Ambient Mood Lighting",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-innova-hycross/gallery/panoramic-sunroof.webp?v=2"
          },
          {
              "id": "hybrid-engine",
              "title": "2.0L TNGA 5th Gen Self-Charging Strong Hybrid",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-innova-hycross/gallery/hybrid-engine.webp?v=2"
          },
          {
              "id": "e-drive",
              "title": "E-Drive Transmission with Pure EV Mode",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-innova-hycross/gallery/e-drive.webp?v=2"
          },
          {
              "id": "tnga-platform",
              "title": "TNGA Monocoque High-Rigidity Platform",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-innova-hycross/gallery/tnga-platform.webp?v=2"
          },
          {
              "id": "dashboard",
              "title": "First-Class Soft-Touch Cockpit & 10.1\" Display",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-innova-hycross/gallery/dashboard.webp?v=2"
          },
          {
              "id": "adas",
              "title": "Toyota Safety Sense (ADAS Level 2 Suite)",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-innova-hycross/gallery/adas.webp?v=2"
          },
          {
              "id": "airbags",
              "title": "6 SRS Airbags Comprehensive Cabin Protection",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-innova-hycross/gallery/airbags.webp?v=2"
          },
          {
              "id": "connected-car",
              "title": "Toyota i-Connect 65+ Smart Connected Features",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-innova-hycross/gallery/connected-car.webp?v=2"
          },
          {
              "id": "hybrid-lifestyle",
              "title": "Unrivalled Luxury Meets 21.1 kmpl Hybrid Efficiency",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-innova-hycross/gallery/hybrid-lifestyle.webp?v=2"
          }
      ],
      "specs": {
          "engineOptions": "2.0L TNGA 4-Cyl Petrol (172 bhp / 209 Nm) | 2.0L 5th-Gen Strong Hybrid (184 bhp combined)",
          "transmissions": "Direct Shift CVT (Petrol) & e-CVT (Strong Hybrid)",
          "dimensions": "4755 mm (L) × 1850 mm (W) × 1795 mm (H)",
          "wheelbase": "2850 mm",
          "fuelTank": "52 Litres",
          "seatingCapacity": "7-Seater (Captain Seats) & 8-Seater (Bench Seat)"
      },
      "variants": [
          {
              "name": "GX 2.0 Petrol Automatic (CVT) 7 STR",
              "exShowroom": 1953000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "2.0L TNGA Petrol (172 bhp)",
              "mileage": "16.13 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "16-inch Alloy Wheels",
                  "LED Headlamps & Tail Lamps",
                  "8-inch Touchscreen Infotainment",
                  "Push Button Start/Stop",
                  "Vehicle Stability Control (VSC)",
                  "Hill Start Assist (HAC)"
              ]
          },
          {
              "name": "GX 2.0 Petrol Automatic (CVT) 8 STR",
              "exShowroom": 1958000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "2.0L TNGA Petrol (172 bhp)",
              "mileage": "16.13 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "8-Seater Bench with 60:40 Split",
                  "16-inch Alloy Wheels",
                  "8-inch Touchscreen Audio",
                  "Reverse Camera",
                  "VSC & Hill Start Assist"
              ]
          },
          {
              "name": "GX (O) 2.0 Petrol Automatic (CVT) 8 STR",
              "exShowroom": 2084000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "2.0L TNGA Petrol (172 bhp)",
              "mileage": "16.13 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Front LED Fog Lamps",
                  "Rear Sunshades",
                  "Dual-Tone Chestnut Interior",
                  "Automatic Climate Control",
                  "Rear Defogger"
              ]
          },
          {
              "name": "GX (O) 2.0 Petrol Automatic (CVT) 7 STR",
              "exShowroom": 2097000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "2.0L TNGA Petrol (172 bhp)",
              "mileage": "16.13 kmpl",
              "isVFM": true,
              "vfmBadge": "🏆 BEST PETROL PICK",
              "keyFeatures": [
                  "10.1-inch Floating Touchscreen",
                  "Wireless Apple CarPlay",
                  "360-Degree Panoramic View Monitor",
                  "Front Parking Sensors",
                  "Dual-Tone Chestnut Soft-Touch Dashboard"
              ]
          },
          {
              "name": "VX Hybrid 2.0 Automatic (e-CVT) 7 STR",
              "exShowroom": 2676000,
              "fuel": "Hybrid",
              "trans": "Automatic",
              "engine": "2.0L Strong Hybrid (184 bhp combined)",
              "mileage": "21.19 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Self-Charging Strong Hybrid Powertrain (21.19 kmpl)",
                  "Paddle Shifters",
                  "17-inch Alloy Wheels",
                  "Full LED Headlamps with Position Lamps",
                  "Auto Electric Parking Brake (EPB) with Auto Hold",
                  "Acoustic Windshield Glass"
              ]
          },
          {
              "name": "VX (O) Hybrid 2.0 Automatic (e-CVT) 7 STR",
              "exShowroom": 2877000,
              "fuel": "Hybrid",
              "trans": "Automatic",
              "engine": "2.0L Strong Hybrid (184 bhp combined)",
              "mileage": "21.19 kmpl",
              "isVFM": true,
              "vfmBadge": "🏆 BEST HYBRID VFM PICK",
              "keyFeatures": [
                  "Dual-Pane Panoramic Sunroof with Mood Lighting",
                  "10.1-inch Display Audio",
                  "Wireless Apple CarPlay",
                  "6 Airbags Standard",
                  "Front LED Fog Lamps",
                  "360 Panoramic View Monitor"
              ]
          },
          {
              "name": "ZX Hybrid 2.0 Automatic (e-CVT) 7 STR",
              "exShowroom": 3120000,
              "fuel": "Hybrid",
              "trans": "Automatic",
              "engine": "2.0L Strong Hybrid (184 bhp combined)",
              "mileage": "21.19 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Powered Ottoman 2nd-Row Captain Seats with Leg Rest",
                  "Ventilated Front Seats",
                  "Dark Chrome 18-inch Metallic Alloy Wheels",
                  "JBL 9-Speaker Premium Sound System with Subwoofer",
                  "Dual-Zone Automatic Climate Control (Front & Rear)",
                  "Electrochromic IRVM"
              ]
          },
          {
              "name": "ZX (O) Hybrid 2.0 Automatic (e-CVT) 7 STR",
              "exShowroom": 3184000,
              "fuel": "Hybrid",
              "trans": "Automatic",
              "engine": "2.0L Strong Hybrid (184 bhp combined)",
              "mileage": "21.19 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Toyota Safety Sense (TSS) Level-2 ADAS",
                  "Dynamic Radar Cruise Control (DRCC)",
                  "Lane Trace Assist (LTA)",
                  "Pre-Collision System (PCS)",
                  "Blind Spot Monitor (BSM) & Rear Cross Traffic Alert",
                  "Auto High Beam (AHB)"
              ]
          }
      ]
  },
  {
      "id": "toyota-fortuner",
      "name": "Toyota Fortuner",
      "brand": "Toyota",
      "tagline": "India's Undisputed Full-Size SUV King with 500 Nm Torque & Real 4x4",
      "launchDate": "Updated 2024 (Leader Edition & 48V Hybrid)",
      "bodyType": "SUV",
      "fuelTypes": [
          "Diesel",
          "Petrol"
      ],
      "priceRange": "₹33.43 - ₹50.46 Lakh",
      "minPrice": 3343000,
      "maxPrice": 5046000,
      "safetyRating": "5.0 ★ (ASEAN NCAP 5-Star - Adult 34.03/36, Child 43.38/49)",
      "groundClearance": "225 mm",
      "bootSpace": "296 L (Expandable to 715 L)",
      "waitingPeriod": "1 - 3 Months",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/toyota-fortuner/colors/platinum-white-pearl.webp?v=2",
      "summary": "The Toyota Fortuner is India's reigning full-size 7-seater SUV, celebrated for legendary reliability, heavy-duty body-on-frame chassis, and formidable 4x4 off-road capabilities. Powered by a brawny 2.8L D-4D diesel generating 201 bhp and an immense 500 Nm of torque, it features an electronic drive control (High/Low range), auto limited-slip differential (LSD), ventilated leather seats, 11-speaker JBL audio, and active traction control.",
      "colors": [
          {
              "id": "platinum-white-pearl",
              "name": "Platinum White Pearl",
              "hex": "#E0E0DA",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-fortuner/colors/platinum-white-pearl.webp?v=2"
          },
          {
              "id": "sparkling-black-crystal-shine",
              "name": "Sparkling Black Crystal Shine",
              "hex": "#202022",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-fortuner/colors/sparkling-black-crystal-shine.webp?v=2"
          },
          {
              "id": "super-white",
              "name": "Super White",
              "hex": "#FFFFFF",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-fortuner/colors/super-white.webp?v=2"
          },
          {
              "id": "attitude-black",
              "name": "Attitude Black",
              "hex": "#0A0A0A",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-fortuner/colors/attitude-black.webp?v=2"
          },
          {
              "id": "avant-garde-bronze",
              "name": "Avant-Garde Bronze",
              "hex": "#5A5348",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-fortuner/colors/avant-garde-bronze.webp?v=2"
          },
          {
              "id": "silver-metallic",
              "name": "Silver Metallic",
              "hex": "#C0C0C0",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-fortuner/colors/silver-metallic.webp?v=2"
          }
      ],
      "gallery": [
          {
              "id": "gr-front",
              "title": "GR Sport Aerodynamic Front Fascia",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-fortuner/gallery/gr-front.webp?v=2"
          },
          {
              "id": "gr-exterior",
              "title": "Dynamic Muscular Stance",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-fortuner/gallery/gr-exterior.webp?v=2"
          },
          {
              "id": "led-headlamps",
              "title": "Bi-Beam LED Headlamps with DRLs",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-fortuner/gallery/led-headlamps.webp?v=2"
          },
          {
              "id": "alloys",
              "title": "18\" Super Chrome Alloy Wheels",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-fortuner/gallery/alloys.webp?v=2"
          },
          {
              "id": "led-tail-lamps",
              "title": "Sleek Split LED Rear Combination Lamps",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-fortuner/gallery/led-tail-lamps.webp?v=2"
          },
          {
              "id": "front-grille",
              "title": "Trapezoidal Front Grille with Chrome Accents",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-fortuner/gallery/front-grille.webp?v=2"
          },
          {
              "id": "jbl-audio",
              "title": "11-Speaker JBL Premium Sound System",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-fortuner/gallery/jbl-audio.webp?v=2"
          },
          {
              "id": "ventilated-seats",
              "title": "Ventilated Front Leather Seats",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-fortuner/gallery/ventilated-seats.webp?v=2"
          },
          {
              "id": "optitron-cluster",
              "title": "Optitron Meter & 4.2-inch Color TFT MID",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-fortuner/gallery/optitron-cluster.webp?v=2"
          },
          {
              "id": "iconnect",
              "title": "Toyota i-Connect Smart Telematics",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-fortuner/gallery/iconnect.webp?v=2"
          },
          {
              "id": "safety-suite",
              "title": "7 SRS Airbags, VSC & Hill-Assist Control",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-fortuner/gallery/safety-suite.webp?v=2"
          },
          {
              "id": "kick-sensor-tailgate",
              "title": "Power Tailgate with Kick Sensor",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-fortuner/gallery/kick-sensor-tailgate.webp?v=2"
          }
      ],
      "specs": {
          "engineOptions": "2.8L 4-Cyl D-4D Turbo Diesel (201 bhp / 500 Nm) | 2.7L Petrol (164 bhp / 245 Nm)",
          "transmissions": "6-Speed Manual & 6-Speed Torque Converter Sequential Automatic",
          "dimensions": "4795 mm (L) × 1855 mm (W) × 1835 mm (H)",
          "wheelbase": "2745 mm",
          "fuelTank": "80 Litres",
          "seatingCapacity": "7-Seater (Three Rows with Recline)"
      },
      "variants": [
          {
              "name": "4x2 2.7 Petrol 5-Speed Manual",
              "exShowroom": 3343000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "2.7L Dual VVT-i (164 bhp)",
              "mileage": "10.30 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Bi-Beam LED Headlamps with LED DRLs",
                  "7 Airbags Standard Across All Variants",
                  "Vehicle Stability Control with Brake Assist",
                  "Hill Start Assist Control (HAC)",
                  "Leather-Wrapped Steering Wheel"
              ]
          },
          {
              "name": "4x2 2.7 Petrol 6-Speed Automatic",
              "exShowroom": 3476000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "2.7L Dual VVT-i (164 bhp)",
              "mileage": "10.01 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Paddle Shifters",
                  "Sequential Shift with Sport Mode",
                  "Cruise Control",
                  "8-inch Touchscreen Infotainment",
                  "Front Ventilated Seats"
              ]
          },
          {
              "name": "4x2 2.8 Diesel 6-Speed Manual",
              "exShowroom": 3540000,
              "fuel": "Diesel",
              "trans": "Manual",
              "engine": "2.8L D-4D Turbo Diesel (201 bhp / 420 Nm)",
              "mileage": "14.40 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "201 bhp Brawny Diesel Power",
                  "iMT (Intelligent Manual Transmission)",
                  "Drive Modes (Eco, Normal, Sport)",
                  "Auto Limited Slip Differential (Auto-LSD)",
                  "Electrically Powered Tailgate with Height Memory"
              ]
          },
          {
              "name": "4x2 2.8 Diesel 6-Speed Automatic",
              "exShowroom": 3761000,
              "fuel": "Diesel",
              "trans": "Automatic",
              "engine": "2.8L D-4D Turbo Diesel (201 bhp / 500 Nm)",
              "mileage": "14.28 kmpl",
              "isVFM": true,
              "vfmBadge": "🏆 BEST VALUE 4x2 PICK",
              "keyFeatures": [
                  "Massive 500 Nm Peak Torque",
                  "Sequential Automatic with Paddle Shifters",
                  "Ventilated Front Seats (Driver & Co-Driver)",
                  "18-inch Super Chrome Alloy Wheels",
                  "Dual-Zone Automatic Climate Control"
              ]
          },
          {
              "name": "Leader Edition 2.8 Diesel 4x2 Automatic",
              "exShowroom": 3872000,
              "fuel": "Diesel",
              "trans": "Automatic",
              "engine": "2.8L D-4D Turbo Diesel (201 bhp / 500 Nm)",
              "mileage": "14.28 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Dual-Tone Exterior Styling & Black Alloys",
                  "Front & Rear Bumper Spoilers",
                  "Wireless Phone Charger",
                  "Tyre Pressure Monitoring System (TPMS)",
                  "500 Nm Torque"
              ]
          },
          {
              "name": "4x4 2.8 Diesel 6-Speed Manual",
              "exShowroom": 3935000,
              "fuel": "Diesel",
              "trans": "Manual",
              "engine": "2.8L D-4D Turbo Diesel (201 bhp / 420 Nm)",
              "mileage": "14.00 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Electronic 4x4 Shift-On-The-Fly (High/Low Range)",
                  "Downhill Assist Control (DAC)",
                  "Active Traction Control (A-TRC)",
                  "Lockable Differential System",
                  "iMT 6-Speed"
              ]
          },
          {
              "name": "4x4 2.8 Diesel 6-Speed Automatic",
              "exShowroom": 4198000,
              "fuel": "Diesel",
              "trans": "Automatic",
              "engine": "2.8L D-4D Turbo Diesel (201 bhp / 500 Nm)",
              "mileage": "13.80 kmpl",
              "isVFM": true,
              "vfmBadge": "🏆 BEST 4x4 TOURING PICK",
              "keyFeatures": [
                  "Electronic 4x4 with High & Low Range Transfer Case",
                  "11-Speaker JBL Premium Audio with Subwoofer",
                  "Downhill Assist Control (DAC)",
                  "Active Traction Control (A-TRC)",
                  "500 Nm Heavy-Duty Torque"
              ]
          },
          {
              "name": "GR-S 4x4 2.8 Diesel Automatic",
              "exShowroom": 5046000,
              "fuel": "Diesel",
              "trans": "Automatic",
              "engine": "2.8L D-4D Turbo Diesel (201 bhp / 500 Nm)",
              "mileage": "13.60 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Gazoo Racing (GR) Tuned Suspension Setup",
                  "GR Aero Package & Red Brake Calipers",
                  "Alcantara & Leather Seats with GR Stitching",
                  "GR Engine Start/Stop Button & Steering Badge",
                  "11-Speaker JBL Audio System"
              ]
          }
      ]
  },
  {
      "id": "toyota-hyryder",
      "name": "Toyota Urban Cruiser Hyryder",
      "brand": "Toyota",
      "tagline": "India's High-Mileage Compact SUV with Strong Hybrid & AWD Capability",
      "launchDate": "Updated 2024 (Aero Black Edition & Dual-Tone)",
      "bodyType": "SUV",
      "fuelTypes": [
          "Hybrid",
          "Petrol",
          "CNG"
      ],
      "priceRange": "₹11.31 - ₹20.19 Lakh",
      "minPrice": 1131000,
      "maxPrice": 2019000,
      "safetyRating": "4.0 ★ (Global NCAP Expected 4-Star Safety)",
      "groundClearance": "210 mm",
      "bootSpace": "373 L (Hybrid: 265 L)",
      "waitingPeriod": "1 - 3 Months",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/toyota-hyryder/colors/cafe-white.webp?v=2",
      "summary": "The Toyota Urban Cruiser Hyryder brings self-charging strong hybrid technology to the compact SUV segment. Delivering an astounding ARAI mileage of 27.97 kmpl, it features an all-wheel-drive (AWD) NeoDrive petrol option, a dual-pane panoramic sunroof, Head-Up Display (HUD), ventilated front seats, and a 9-inch Smart Play Cast touchscreen with 360-degree camera.",
      "colors": [
          {
              "id": "cafe-white",
              "name": "Cafe White",
              "hex": "#F4F4F4",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-hyryder/colors/cafe-white.webp?v=2"
          },
          {
              "id": "enticing-silver",
              "name": "Enticing Silver",
              "hex": "#BCC0C4",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-hyryder/colors/enticing-silver.webp?v=2"
          },
          {
              "id": "gaming-grey",
              "name": "Gaming Grey",
              "hex": "#4E5258",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-hyryder/colors/gaming-grey.webp?v=2"
          },
          {
              "id": "sporting-red",
              "name": "Sporting Red",
              "hex": "#B51C29",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-hyryder/colors/sporting-red.webp?v=2"
          },
          {
              "id": "speedy-blue",
              "name": "Speedy Blue",
              "hex": "#1E468A",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-hyryder/colors/speedy-blue.webp?v=2"
          },
          {
              "id": "cave-black",
              "name": "Cave Black",
              "hex": "#121214",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-hyryder/colors/cave-black.webp?v=2"
          },
          {
              "id": "cafe-white-midnight-black",
              "name": "Cafe White with Midnight Black Roof",
              "hex": "#EAEAEA",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-hyryder/colors/cafe-white-midnight-black.webp?v=2"
          }
      ],
      "gallery": [
          {
              "id": "hybrid-banner",
              "title": "Self-Charging Strong Hybrid Electric",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hyryder/gallery/hybrid-banner.webp?v=2"
          },
          {
              "id": "front-styling",
              "title": "Crystal Acrylic Front Grille with Chrome Garnish",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hyryder/gallery/front-styling.webp?v=2"
          },
          {
              "id": "touchscreen",
              "title": "9-inch Smart Play Cast Touchscreen",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hyryder/gallery/touchscreen.webp?v=2"
          },
          {
              "id": "wireless-charging",
              "title": "Wireless Smartphone Qi Charger",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hyryder/gallery/wireless-charging.webp?v=2"
          },
          {
              "id": "panoramic-roof",
              "title": "Segment-Leading Panoramic Sunroof",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hyryder/gallery/panoramic-roof.webp?v=2"
          },
          {
              "id": "hud",
              "title": "Color Head-Up Display & 7-inch TFT Cluster",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hyryder/gallery/hud.webp?v=2"
          },
          {
              "id": "front-bumper",
              "title": "Rugged Dual-Tone Front Skid Plate",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hyryder/gallery/front-bumper.webp?v=2"
          },
          {
              "id": "rear-styling",
              "title": "Signature Split LED Tail Lamps",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hyryder/gallery/rear-styling.webp?v=2"
          },
          {
              "id": "tail-garnish",
              "title": "Sporty Rear Door Lid Garnish",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hyryder/gallery/tail-garnish.webp?v=2"
          },
          {
              "id": "alloys",
              "title": "17-inch Diamond-Cut Alloy Wheels",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hyryder/gallery/alloys.webp?v=2"
          },
          {
              "id": "connectivity",
              "title": "Toyota i-Connect & Voice Assistant",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hyryder/gallery/connectivity.webp?v=2"
          },
          {
              "id": "all-wheel-drive",
              "title": "AllGrip Select All-Wheel Drive AWD System",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hyryder/gallery/all-wheel-drive.webp?v=2"
          }
      ],
      "specs": {
          "engineOptions": "1.5L Strong Hybrid e-CVT (114 bhp / 27.97 kmpl) | 1.5L K15C NeoDrive Petrol (102 bhp) | 1.5L Factory CNG (26.6 km/kg)",
          "transmissions": "e-CVT Automatic (Hybrid), 5-Speed Manual & 6-Speed Torque Converter AT",
          "dimensions": "4365 mm (L) × 1795 mm (W) × 1645 mm (H)",
          "wheelbase": "2600 mm",
          "fuelTank": "45 Litres (CNG: 55L Water Equivalent)",
          "seatingCapacity": "5 Persons"
      },
      "variants": [
          {
              "name": "E 1.5 NeoDrive Petrol Manual",
              "exShowroom": 1131000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.5L K15C DualJet (102 bhp)",
              "mileage": "21.12 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Vehicle Stability Control (VSC)",
                  "Hill Hold Assist",
                  "All 4 Disc Brakes",
                  "Keyless Smart Entry with Push Start",
                  "Auto Climate Control"
              ]
          },
          {
              "name": "S 1.5 NeoDrive Petrol Manual",
              "exShowroom": 1282000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.5L K15C DualJet (102 bhp)",
              "mileage": "21.12 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "7-inch Smart Play Cast Touchscreen",
                  "Android Auto & Apple CarPlay",
                  "Rear Parking Camera",
                  "Cruise Control",
                  "Steering Mounted Audio Controls"
              ]
          },
          {
              "name": "S 1.5 Factory CNG Manual",
              "exShowroom": 1371000,
              "fuel": "CNG",
              "trans": "Manual",
              "engine": "1.5L K15C S-CNG (87 bhp)",
              "mileage": "26.60 km/kg",
              "isVFM": true,
              "vfmBadge": "🏆 BEST CNG SUV PICK",
              "keyFeatures": [
                  "Factory-Fitted CNG Kit (26.60 km/kg)",
                  "7-inch Touchscreen Audio",
                  "Rear Camera & Cruise Control",
                  "Projector Headlamps",
                  "LED DRLs"
              ]
          },
          {
              "name": "S 1.5 NeoDrive Petrol 6-Speed AT",
              "exShowroom": 1417000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.5L K15C DualJet (102 bhp)",
              "mileage": "20.58 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Paddle Shifters",
                  "6-Speed Torque Converter AT",
                  "Cruise Control",
                  "Smart Play Touchscreen",
                  "ESP & Hill Hold"
              ]
          },
          {
              "name": "G 1.5 NeoDrive Petrol Manual",
              "exShowroom": 1487000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.5L K15C DualJet (102 bhp)",
              "mileage": "21.12 kmpl",
              "isVFM": true,
              "vfmBadge": "🏆 BEST PETROL VFM PICK",
              "keyFeatures": [
                  "Full LED Headlamps",
                  "17-inch Alloy Wheels",
                  "9-inch Touchscreen Infotainment",
                  "6 Airbags Standard",
                  "Auto-Folding ORVMs"
              ]
          },
          {
              "name": "S Strong Hybrid 1.5 e-CVT",
              "exShowroom": 1718000,
              "fuel": "Hybrid",
              "trans": "Automatic",
              "engine": "1.5L Self-Charging Strong Hybrid (114 bhp)",
              "mileage": "27.97 kmpl",
              "isVFM": true,
              "vfmBadge": "🏆 MOST AFFORDABLE HYBRID",
              "keyFeatures": [
                  "Self-Charging Strong Hybrid (27.97 kmpl)",
                  "Pure EV Drive Mode",
                  "7-inch Digital Driver Display",
                  "Auto Electric Parking Brake",
                  "e-CVT Transmission"
              ]
          },
          {
              "name": "G Strong Hybrid 1.5 e-CVT",
              "exShowroom": 1924000,
              "fuel": "Hybrid",
              "trans": "Automatic",
              "engine": "1.5L Self-Charging Strong Hybrid (114 bhp)",
              "mileage": "27.97 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Dual-Pane Panoramic Sunroof",
                  "Head-Up Display (HUD)",
                  "Wireless Phone Charger",
                  "6 Airbags Standard",
                  "9-inch Smart Play Infotainment"
              ]
          },
          {
              "name": "V Strong Hybrid 1.5 e-CVT Dual Tone",
              "exShowroom": 2019000,
              "fuel": "Hybrid",
              "trans": "Automatic",
              "engine": "1.5L Self-Charging Strong Hybrid (114 bhp)",
              "mileage": "27.97 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Front Ventilated Leatherette Seats",
                  "360-Degree Panoramic View Camera",
                  "Dual-Tone Contrast Black Roof",
                  "Premium Arkamys Surround Sound",
                  "Tyre Pressure Monitor (TPMS)"
              ]
          }
      ]
  },
  {
      "id": "toyota-hilux",
      "name": "Toyota Hilux",
      "brand": "Toyota",
      "tagline": "The Legendary Unstoppable 4x4 Adventure Lifestyle Pickup",
      "launchDate": "2024 (Updated 4x4 & 4x2 Lineup)",
      "bodyType": "Pickup Truck",
      "fuelTypes": [
          "Diesel"
      ],
      "priceRange": "₹31.99 - ₹36.89 Lakh",
      "minPrice": 3199000,
      "maxPrice": 3689000,
      "safetyRating": "5.0 ★ (ASEAN NCAP 5-Star - Adult 32.93/36, Child 44.09/49)",
      "groundClearance": "216 mm",
      "bootSpace": "435 L Flat Deck (470 kg payload)",
      "waitingPeriod": "2 - 4 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/toyota-hilux/colors/emotional-red.webp?v=2",
      "summary": "The Toyota Hilux is the world's benchmark for extreme-durability lifestyle utility. Built on the heavy-duty IMV platform with a rigid ladder-frame chassis, it pairs a potent 2.8L D-4D turbo diesel producing 201 bhp and 500 Nm of torque with electronic 4x4, rear diff-lock, active traction control (A-TRC), 700 mm water wading capability, and a versatile double-cab cargo deck.",
      "colors": [
          {
              "id": "emotional-red",
              "name": "Emotional Red",
              "hex": "#9E1B27",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-hilux/colors/emotional-red.webp?v=2"
          },
          {
              "id": "white-pearl-crystal-shine",
              "name": "White Pearl Crystal Shine",
              "hex": "#EBECE9",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-hilux/colors/white-pearl-crystal-shine.webp?v=2"
          },
          {
              "id": "super-white",
              "name": "Super White",
              "hex": "#F8F8F8",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-hilux/colors/super-white.webp?v=2"
          },
          {
              "id": "grey-metallic",
              "name": "Grey Metallic",
              "hex": "#505256",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-hilux/colors/grey-metallic.webp?v=2"
          },
          {
              "id": "attitude-black",
              "name": "Attitude Black",
              "hex": "#0D0E10",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-hilux/colors/attitude-black.webp?v=2"
          },
          {
              "id": "sulphur-metallic",
              "name": "Sulphur Metallic",
              "hex": "#8A7A40",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-hilux/colors/sulphur-metallic.webp?v=2"
          }
      ],
      "gallery": [
          {
              "id": "offroad-bumper",
              "title": "Aggressive Front Bumper with Skid Plate",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hilux/gallery/offroad-bumper.webp?v=2"
          },
          {
              "id": "led-headlamps",
              "title": "LED Headlamps with Integrated DRLs",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hilux/gallery/led-headlamps.webp?v=2"
          },
          {
              "id": "chrome-grille",
              "title": "Bold Hexagonal Chrome Grille",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hilux/gallery/chrome-grille.webp?v=2"
          },
          {
              "id": "alloys",
              "title": "18-inch Machine-Cut Alloy Wheels",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hilux/gallery/alloys.webp?v=2"
          },
          {
              "id": "interior-cockpit",
              "title": "Premium Dual-Zone Automatic Climate Control",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hilux/gallery/interior-cockpit.webp?v=2"
          },
          {
              "id": "touchscreen",
              "title": "8-inch Infotainment with Apple CarPlay & Android Auto",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hilux/gallery/touchscreen.webp?v=2"
          },
          {
              "id": "leather-seats",
              "title": "Plush Leather Upholstery with 8-Way Power Driver Seat",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hilux/gallery/leather-seats.webp?v=2"
          },
          {
              "id": "electronic-4x4",
              "title": "Electronic Shift-on-the-Fly 4WD with Auto-LSD",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hilux/gallery/electronic-4x4.webp?v=2"
          },
          {
              "id": "diesel-engine",
              "title": "2.8L Turbo Diesel with 500 Nm Torque",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hilux/gallery/diesel-engine.webp?v=2"
          },
          {
              "id": "safety-airbags",
              "title": "7 SRS Airbags, VSC & Trailer Sway Control",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hilux/gallery/safety-airbags.webp?v=2"
          },
          {
              "id": "deck-loading",
              "title": "Heavy-Duty Cargo Deck with 435 kg Payload Capacity",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hilux/gallery/deck-loading.webp?v=2"
          },
          {
              "id": "legacy",
              "title": "World's Most Indestructible Pickup Truck",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-hilux/gallery/legacy.webp?v=2"
          }
      ],
      "specs": {
          "engineOptions": "2.8L 4-Cylinder D-4D Turbo Diesel (201 bhp / 500 Nm)",
          "transmissions": "6-Speed Manual & 6-Speed Torque Converter Sequential Automatic",
          "dimensions": "5325 mm (L) × 1855 mm (W) × 1815 mm (H)",
          "wheelbase": "3085 mm",
          "fuelTank": "80 Litres",
          "seatingCapacity": "5 Persons (Double Cab Configuration)"
      },
      "variants": [
          {
              "name": "Standard (GX) 4x2 2.8 Diesel Automatic",
              "exShowroom": 3199000,
              "fuel": "Diesel",
              "trans": "Automatic",
              "engine": "2.8L D-4D Diesel (201 bhp / 500 Nm)",
              "mileage": "13.80 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "201 bhp & 500 Nm Diesel Engine",
                  "7 Airbags Standard",
                  "8-inch Touchscreen with Apple CarPlay/Android Auto",
                  "Vehicle Stability Control (VSC) & HAC",
                  "17-inch Alloy Wheels"
              ]
          },
          {
              "name": "Standard (GX) 4x4 2.8 Diesel Manual",
              "exShowroom": 3040000,
              "fuel": "Diesel",
              "trans": "Manual",
              "engine": "2.8L D-4D Diesel (201 bhp / 420 Nm)",
              "mileage": "14.20 kmpl",
              "isVFM": true,
              "vfmBadge": "🏆 BEST VALUE 4x4 OFF-ROADER",
              "keyFeatures": [
                  "Shift-on-the-Fly 4x4 (High / Low Range)",
                  "Rear Differential Lock (e-Locker)",
                  "Active Traction Control (A-TRC)",
                  "Downhill Assist Control (DAC)",
                  "7 Airbags Standard"
              ]
          },
          {
              "name": "High (VX) 4x4 2.8 Diesel Manual",
              "exShowroom": 3715000,
              "fuel": "Diesel",
              "trans": "Manual",
              "engine": "2.8L D-4D Diesel (201 bhp / 420 Nm)",
              "mileage": "14.20 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Dual-Zone Automatic Climate Control",
                  "Full LED Headlamps with DRLs",
                  "8-Way Power-Adjustable Driver Seat",
                  "18-inch Precision Alloy Wheels",
                  "Soft-Touch Leather Upholstery"
              ]
          },
          {
              "name": "High (VX) 4x4 2.8 Diesel Automatic",
              "exShowroom": 3669000,
              "fuel": "Diesel",
              "trans": "Automatic",
              "engine": "2.8L D-4D Diesel (201 bhp / 500 Nm)",
              "mileage": "13.60 kmpl",
              "isVFM": true,
              "vfmBadge": "🏆 TOP OVERLANDING PICK",
              "keyFeatures": [
                  "6-Speed Sequential Automatic with 500 Nm Torque",
                  "Electronic 4WD Transfer Case with Low Range",
                  "Front & Rear Parking Sensors",
                  "Dual-Zone Auto AC",
                  "Electrochromic Inside Rear-View Mirror"
              ]
          }
      ]
  },
  {
      "id": "toyota-camry",
      "name": "Toyota Camry",
      "brand": "Toyota",
      "tagline": "The Pinnacle of Hybrid Luxury Sedans with 218 bhp & Rear Reclining Seats",
      "launchDate": "Updated 2024 (Sprint Edition & Elegant Hybrid)",
      "bodyType": "Sedan",
      "fuelTypes": [
          "Hybrid",
          "Petrol"
      ],
      "priceRange": "₹48.69 - ₹48.89 Lakh",
      "minPrice": 4869000,
      "maxPrice": 4889000,
      "safetyRating": "5.0 ★ (ASEAN NCAP 5-Star - Adult 35.31/36, Child 44.44/49)",
      "groundClearance": "160 mm",
      "bootSpace": "524 L",
      "waitingPeriod": "1 - 2 Months",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/toyota-camry/colors/platinum-white.webp?v=2",
      "summary": "The Toyota Camry represents the pinnacle of executive luxury sedans in India, built on the TNGA-K platform with unmatched quietness and ride comfort. Powered by a 2.5L 4-Cylinder Dynamic Force engine with self-charging Hybrid Synergy Drive producing 218 bhp combined, it features power-reclining rear seats, 3-zone climate control with capacitive touch armrest, 9-speaker JBL audio, ventilated seats, and 9 SRS airbags standard.",
      "colors": [
          {
              "id": "platinum-white",
              "name": "Platinum White Pearl",
              "hex": "#EBECE8",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-camry/colors/platinum-white.webp?v=2"
          },
          {
              "id": "attitude-black",
              "name": "Attitude Black",
              "hex": "#0B0B0D",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-camry/colors/attitude-black.webp?v=2"
          },
          {
              "id": "cement-grey",
              "name": "Cement Grey Metallic",
              "hex": "#6B7278",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-camry/colors/cement-grey.webp?v=2"
          },
          {
              "id": "dark-blue",
              "name": "Dark Blue Metallic",
              "hex": "#16243E",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-camry/colors/dark-blue.webp?v=2"
          },
          {
              "id": "emotional-red",
              "name": "Emotional Red",
              "hex": "#9E1925",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-camry/colors/emotional-red.webp?v=2"
          },
          {
              "id": "precious-metal",
              "name": "Precious Metal",
              "hex": "#838589",
              "image": "https://ik.imagekit.io/2908vvlod/cars/toyota-camry/colors/precious-metal.webp?v=2"
          }
      ],
      "gallery": [
          {
              "id": "camry-banner",
              "title": "Luxury Meets Hybrid Innovation",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-camry/gallery/camry-banner.webp?v=2"
          },
          {
              "id": "sprint-profile",
              "title": "Sleek Aerodynamic Fastback Silhouette",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-camry/gallery/sprint-profile.webp?v=2"
          },
          {
              "id": "headlamps",
              "title": "Dynamic LED Headlamps with Integrated DRLs",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-camry/gallery/headlamps.webp?v=2"
          },
          {
              "id": "alloys",
              "title": "18-inch Multi-Spoke Two-Tone Alloys",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-camry/gallery/alloys.webp?v=2"
          },
          {
              "id": "rear-comfort",
              "title": "Executive Reclining Rear Seats with Touch Control",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-camry/gallery/rear-comfort.webp?v=2"
          },
          {
              "id": "infotainment",
              "title": "9-inch Floating Touchscreen Infotainment",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-camry/gallery/infotainment.webp?v=2"
          },
          {
              "id": "jbl-audio",
              "title": "9-Speaker JBL Concert Sound System",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-camry/gallery/jbl-audio.webp?v=2"
          },
          {
              "id": "hybrid-performance",
              "title": "218 PS Self-Charging Strong Hybrid Engine",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-camry/gallery/hybrid-performance.webp?v=2"
          },
          {
              "id": "safety-suite",
              "title": "9 SRS Airbags, VSC & Active Traction Control",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-camry/gallery/safety-suite.webp?v=2"
          },
          {
              "id": "hud-cluster",
              "title": "10-inch Color Head-Up Display",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-camry/gallery/hud-cluster.webp?v=2"
          },
          {
              "id": "sunroof",
              "title": "Electric Tilt & Slide Moonroof",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-camry/gallery/sunroof.webp?v=2"
          },
          {
              "id": "tnga-chassis",
              "title": "TNGA Low-Center-of-Gravity Global Architecture",
              "url": "https://ik.imagekit.io/2908vvlod/cars/toyota-camry/gallery/tnga-chassis.webp?v=2"
          }
      ],
      "specs": {
          "engineOptions": "2.5L 4-Cylinder Dynamic Force Petrol + Permanent Magnet Synchronous Motor (218 bhp combined / 221 Nm)",
          "transmissions": "Electronically Controlled Continuously Variable Transmission (e-CVT)",
          "dimensions": "4885 mm (L) × 1840 mm (W) × 1445 mm (H)",
          "wheelbase": "2825 mm",
          "fuelTank": "50 Litres",
          "seatingCapacity": "5 Persons (Power Reclining Rear Seats)"
      },
      "variants": [
          {
              "name": "Elegant Hybrid 2.5 e-CVT",
              "exShowroom": 4869000,
              "fuel": "Hybrid",
              "trans": "Automatic",
              "engine": "2.5L Dynamic Force Hybrid (218 bhp)",
              "mileage": "19.10 kmpl",
              "isVFM": true,
              "vfmBadge": "🏆 BEST EXECUTIVE LUXURY PICK",
              "keyFeatures": [
                  "Self-Charging Strong Hybrid Powertrain (218 bhp)",
                  "Rear Power-Reclining Seats with Armrest Touch Controls",
                  "9-Speaker JBL Premium Audio with Clari-Fi",
                  "3-Zone Independent Automatic Climate Control",
                  "10-Way Power-Adjustable Ventilated Front Seats with Memory",
                  "9 SRS Airbags Standard",
                  "Head-Up Display (10-inch HUD)"
              ]
          },
          {
              "name": "Sprint Edition Hybrid 2.5 e-CVT Dual Tone",
              "exShowroom": 4869000,
              "fuel": "Hybrid",
              "trans": "Automatic",
              "engine": "2.5L Dynamic Force Hybrid (218 bhp)",
              "mileage": "19.10 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Contrast Matte Black Roof & Mirror Caps",
                  "18-inch Dark Metallic Alloy Wheels",
                  "Sporty Black Interior Theme",
                  "Paddle Shifters with Drive Modes (Eco, Normal, Sport)",
                  "9 SRS Airbags & TPMS"
              ]
          }
      ]
  },
  {
      "id": "honda-elevate",
      "name": "Honda Elevate",
      "brand": "Honda",
      "tagline": "Bold Urban Freestyler SUV with Class-Leading 220 mm Ground Clearance & Honda SENSING ADAS",
      "launchDate": "2025 Model Year",
      "bodyType": "SUV",
      "fuelTypes": [
          "Petrol"
      ],
      "priceRange": "₹11.69 - ₹16.73 Lakh",
      "minPrice": 1169000,
      "maxPrice": 1673000,
      "safetyRating": "5.0 ★ (JNCAP 5-Star / 6 Airbags Standard)",
      "groundClearance": "220 mm",
      "bootSpace": "458 Litres",
      "waitingPeriod": "2 - 4 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/colors/obsidian-blue-pearl.webp",
      "summary": "The Honda Elevate brings bullet-proof 1.5L i-VTEC refinement, segment-highest 220 mm ground clearance, massive 458L boot space, 6 airbags standard across all variants, and Honda SENSING Level-2 ADAS.",
      "colors": [
          {
              "id": "obsidian-blue-pearl",
              "name": "Obsidian Blue Pearl",
              "hex": "#424F83",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/colors/obsidian-blue-pearl.webp"
          },
          {
              "id": "radiant-red-metallic",
              "name": "Radiant Red Metallic",
              "hex": "#ED121B",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/colors/radiant-red-metallic.webp"
          },
          {
              "id": "platinum-white-pearl",
              "name": "Platinum White Pearl",
              "hex": "#FFFFFF",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/colors/platinum-white-pearl.webp"
          },
          {
              "id": "lunar-silver-metallic",
              "name": "Lunar Silver Metallic",
              "hex": "#AFAFAE",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/colors/lunar-silver-metallic.webp"
          },
          {
              "id": "meteoroid-gray-metallic",
              "name": "Meteoroid Gray Metallic",
              "hex": "#535C61",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/colors/meteoroid-gray-metallic.webp"
          },
          {
              "id": "platinum-white-pearl-with-crystal-black-pearl-roof",
              "name": "Platinum White Pearl with Crystal Black Pearl Roof",
              "hex": "#FFFFFF",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/colors/platinum-white-pearl-with-crystal-black-pearl-roof.webp"
          },
          {
              "id": "radiant-red-metallic-with-crystal-black-pearl-roof",
              "name": "Radiant Red Metallic with Crystal Black Pearl Roof",
              "hex": "#ED121B",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/colors/radiant-red-metallic-with-crystal-black-pearl-roof.webp"
          },
          {
              "id": "crystal-black-pearl",
              "name": "Crystal Black Pearl",
              "hex": "#000000",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/colors/crystal-black-pearl.webp"
          },
          {
              "id": "nordic-forest-pearl-with-crystal-black-pearl-roof",
              "name": "Nordic Forest Pearl with Crystal Black Pearl Roof",
              "hex": "#3A645F",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/colors/nordic-forest-pearl-with-crystal-black-pearl-roof.webp"
          },
          {
              "id": "nordic-forest-pearl",
              "name": "Nordic Forest Pearl",
              "hex": "#3A645F",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/colors/nordic-forest-pearl.webp"
          }
      ],
      "gallery": [
          {
              "id": "front-quarter-action",
              "title": "Bold Urban Freestyler Front Stance",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/gallery/front-quarter-action.webp"
          },
          {
              "id": "signature-black-edition",
              "title": "Elevate Signature Black Edition",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/gallery/signature-black-edition.webp"
          },
          {
              "id": "dynamic-side-profile",
              "title": "Commanding SUV Profile in Motion",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/gallery/dynamic-side-profile.webp"
          },
          {
              "id": "highway-cruising",
              "title": "Elevated Road Presence & Stance",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/gallery/highway-cruising.webp"
          },
          {
              "id": "bold-front-grille",
              "title": "Bold Chrome & Gloss Front Grille",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/gallery/bold-front-grille.webp"
          },
          {
              "id": "led-projector-headlamps",
              "title": "Full LED Projector Headlamps with DRLs",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/gallery/led-projector-headlamps.webp"
          },
          {
              "id": "diamond-cut-alloys",
              "title": "R17 Dual-Tone Diamond-Cut Alloy Wheels",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/gallery/diamond-cut-alloys.webp"
          },
          {
              "id": "distinctive-led-taillamps",
              "title": "Distinctive Dual-LED Tail Lamps",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/gallery/distinctive-led-taillamps.webp"
          },
          {
              "id": "dashboard-cockpit",
              "title": "10.25-inch HD Touchscreen & Premium Cockpit",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/gallery/dashboard-cockpit.webp"
          },
          {
              "id": "electric-sunroof",
              "title": "One-Touch Electric Sunroof with Pinch Guard",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/gallery/electric-sunroof.webp"
          },
          {
              "id": "boot-space-458l",
              "title": "Class-Leading 458L Luggage Boot Space",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/gallery/boot-space-458l.webp"
          },
          {
              "id": "honda-sensing-adas",
              "title": "Honda SENSING Level-2 ADAS Suite & 6 Airbags",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/gallery/honda-sensing-adas.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "1.5L i-VTEC DOHC Petrol (121 PS @ 6600 rpm, 145 Nm @ 4300 rpm)"
          ],
          "transmissions": [
              "6-Speed Manual Transmission (MT)",
              "7-Speed CVT Automatic with Paddle Shifters"
          ],
          "dimensions": "4312 mm L × 1790 mm W × 1650 mm H",
          "wheelbase": "2650 mm",
          "fuelTank": "40 Litres",
          "seatingCapacity": "5 Seater"
      },
      "variants": [
          {
              "name": "SV 1.5 Petrol 6MT",
              "exShowroom": 1169000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.5L i-VTEC (121 PS)",
              "mileage": "15.31 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "6 Airbags Standard Across All Variants",
                  "LED Projector Headlamps with LED DRLs & LED Tail Lamps",
                  "Push Button Start/Stop with Smart Keyless Entry",
                  "Automatic Climate Control with Rear AC Vents",
                  "Vehicle Stability Assist (VSA) & Hill Start Assist"
              ]
          },
          {
              "name": "V 1.5 Petrol 6MT",
              "exShowroom": 1285000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.5L i-VTEC (121 PS)",
              "mileage": "15.31 kmpl",
              "isVFM": true,
              "vfmBadge": "Best Value Manual SUV",
              "keyFeatures": [
                  "8-inch Touchscreen Infotainment with Wireless Apple CarPlay & Android Auto",
                  "Multi-Angle Rear View Camera with Guidelines",
                  "Honda Connect with 5-Year Free Subscription",
                  "Steering Mounted Audio, Voice & Hands-Free Controls",
                  "4 Speakers Audio System & Styled R16 Covers"
              ]
          },
          {
              "name": "V 1.5 Petrol CVT Automatic",
              "exShowroom": 1395000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.5L i-VTEC (121 PS)",
              "mileage": "16.92 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "7-Speed CVT Automatic with Steering Paddle Shifters",
                  "Remote Engine Start via Smart Key",
                  "8-inch Wireless Smartphone Infotainment Display",
                  "6 Airbags, VSA, Agile Handling Assist & Hill Start Assist",
                  "Fully Automatic Climate Control with Max Cool Mode"
              ]
          },
          {
              "name": "VX 1.5 Petrol 6MT",
              "exShowroom": 1410000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.5L i-VTEC (121 PS)",
              "mileage": "15.31 kmpl",
              "isVFM": true,
              "vfmBadge": "Most Popular Feature-Rich Trim",
              "keyFeatures": [
                  "One-Touch Electric Sunroof with Pinch Guard",
                  "R17 Dual-Tone Diamond-Cut Alloy Wheels",
                  "LaneWatch Blind-Spot Camera & 7-inch TFT Meter Cluster",
                  "Wireless Smartphone Charger & 6-Speaker Surround Audio",
                  "LED Projector Fog Lamps & Roof Rails"
              ]
          },
          {
              "name": "VX 1.5 Petrol CVT Automatic",
              "exShowroom": 1520000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.5L i-VTEC (121 PS)",
              "mileage": "16.92 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "7-Speed CVT Automatic with Paddle Shifters & Remote Start",
                  "Electric Sunroof & R17 Diamond-Cut Alloy Wheels",
                  "Honda LaneWatch Camera & Wireless Phone Charger",
                  "7-inch HD Full-Color TFT Driver Display",
                  "Auto-Folding ORVMs & Rear Wiper/Washer"
              ]
          },
          {
              "name": "ZX 1.5 Petrol 6MT (ADAS)",
              "exShowroom": 1541000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.5L i-VTEC (121 PS)",
              "mileage": "15.31 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Honda SENSING Level-2 ADAS (CMBS, Adaptive Cruise, Lane Keep Assist)",
                  "10.25-inch HD Freestanding Touchscreen with 8 Speakers",
                  "Dual-Tone Brown & Black Leatherette Upholstery",
                  "Auto-Dimming Frameless IRVM & Chrome Door Handles",
                  "6 Airbags, LaneWatch Camera & Electric Sunroof"
              ]
          },
          {
              "name": "ZX 1.5 Petrol CVT Automatic (ADAS)",
              "exShowroom": 1653000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.5L i-VTEC (121 PS)",
              "mileage": "16.92 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Honda SENSING ADAS with Low-Speed Follow & Lead Car Departure Notification",
                  "7-Speed CVT Automatic with Paddle Shifters",
                  "10.25-inch HD Touchscreen & 8-Speaker Premium Sound",
                  "Plush Brown Leatherette Seats & Soft-Touch Dashboard",
                  "Electric Sunroof, R17 Diamond-Cut Alloys & Dual-Tone Option"
              ]
          },
          {
              "name": "ZX Black Edition 1.5 CVT Automatic (ADAS)",
              "exShowroom": 1673000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.5L i-VTEC (121 PS)",
              "mileage": "16.92 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "All-Black R17 Alloy Wheels & Gloss Black Exterior Accents",
                  "All-Black Leatherette Cabin with Contrast Stitching & 7-Color Ambient Lighting",
                  "Honda SENSING Level-2 ADAS Suite & LaneWatch Camera",
                  "10.25-inch HD Infotainment with Wireless CarPlay/Android Auto",
                  "Special Signature Black Edition Badging"
              ]
          }
      ],
      "spin360": {
          "totalFrames": 36,
          "folder": "https://ik.imagekit.io/2908vvlod/cars/honda-elevate/360",
          "format": "webp",
          "defaultColor": "obsidian-blue-pearl",
          "colors": [
              {
                  "id": "obsidian-blue-pearl",
                  "name": "Obsidian Blue Pearl",
                  "hex": "#424F83"
              }
          ]
      }
  },
  {
      "id": "honda-city",
      "name": "Honda City",
      "brand": "Honda",
      "tagline": "India's Benchmark Executive Sedan with 1.5L i-VTEC & Standard Honda SENSING ADAS",
      "launchDate": "2025 Model Year",
      "bodyType": "Sedan",
      "fuelTypes": [
          "Petrol"
      ],
      "priceRange": "₹12.08 - ₹16.35 Lakh",
      "minPrice": 1208000,
      "maxPrice": 1635000,
      "safetyRating": "5.0 ★ (ASEAN NCAP 5-Star / 6 Airbags Standard)",
      "groundClearance": "165 mm",
      "bootSpace": "506 Litres",
      "waitingPeriod": "2 - 3 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/honda-city/colors/obsidian-blue-pearl.webp",
      "summary": "The 5th-Generation Honda City remains India's most iconic executive sedan, pairing its legendary 121 PS 1.5L i-VTEC DOHC engine with Honda SENSING ADAS across V, VX, and ZX trims, 6 airbags standard, and rear-seat executive comfort.",
      "colors": [
          {
              "id": "obsidian-blue-pearl",
              "name": "Obsidian Blue Pearl",
              "hex": "#424F83",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-city/colors/obsidian-blue-pearl.webp"
          },
          {
              "id": "radiant-red-metallic",
              "name": "Radiant Red Metallic",
              "hex": "#ED121B",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-city/colors/radiant-red-metallic.webp"
          },
          {
              "id": "platinum-white-pearl",
              "name": "Platinum White Pearl",
              "hex": "#FFFFFF",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-city/colors/platinum-white-pearl.webp"
          },
          {
              "id": "crystal-black-pearl",
              "name": "Crystal Black Pearl",
              "hex": "#000000",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-city/colors/crystal-black-pearl.webp"
          },
          {
              "id": "meteoroid-gray-metallic",
              "name": "Meteoroid Gray Metallic",
              "hex": "#535C61",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-city/colors/meteoroid-gray-metallic.webp"
          },
          {
              "id": "lunar-silver-metallic",
              "name": "Lunar Silver Metallic",
              "hex": "#AFAFAE",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-city/colors/lunar-silver-metallic.webp"
          }
      ],
      "gallery": [
          {
              "id": "exterior-front-stance",
              "title": "5th-Gen Honda City Iconic Sedan Stance",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city/gallery/exterior-front-stance.webp"
          },
          {
              "id": "rear-quarter-action",
              "title": "Sculpted Aerodynamic Fastback Profile",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city/gallery/rear-quarter-action.webp"
          },
          {
              "id": "sporty-front-grille",
              "title": "New Sporty Honeycomb Front Grille & Fascia",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city/gallery/sporty-front-grille.webp"
          },
          {
              "id": "full-led-headlamps",
              "title": "9-Array Full LED Headlamps with DRLs",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city/gallery/full-led-headlamps.webp"
          },
          {
              "id": "r16-diamond-alloys",
              "title": "R16 Dual-Tone Diamond-Cut Alloy Wheels",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city/gallery/r16-diamond-alloys.webp"
          },
          {
              "id": "z-shaped-led-taillamps",
              "title": "Z-Shaped 3D Wrap-Around LED Tail Lamps",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city/gallery/z-shaped-led-taillamps.webp"
          },
          {
              "id": "two-tone-luxury-cabin",
              "title": "Two-Tone Beige & Black Leather Upholstery",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city/gallery/two-tone-luxury-cabin.webp"
          },
          {
              "id": "electric-sunroof",
              "title": "One-Touch Electric Sunroof",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city/gallery/electric-sunroof.webp"
          },
          {
              "id": "ambient-lighting-cabin",
              "title": "Front Door & Footwell Ambient Lighting",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city/gallery/ambient-lighting-cabin.webp"
          },
          {
              "id": "boot-space-506l",
              "title": "Massive 506-Litre Illuminated Trunk",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city/gallery/boot-space-506l.webp"
          },
          {
              "id": "ivtec-engine",
              "title": "High-Revving 1.5L i-VTEC DOHC Engine (121 PS)",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city/gallery/ivtec-engine.webp"
          },
          {
              "id": "six-airbags-safety",
              "title": "6 Airbags Standard & ACE Body Structure",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city/gallery/six-airbags-safety.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "1.5L i-VTEC DOHC Petrol (121 PS @ 6600 rpm, 145 Nm @ 4300 rpm)"
          ],
          "transmissions": [
              "6-Speed Manual Transmission (MT)",
              "7-Speed CVT Automatic with Paddle Shifters"
          ],
          "dimensions": "4583 mm L × 1748 mm W × 1489 mm H",
          "wheelbase": "2600 mm",
          "fuelTank": "40 Litres",
          "seatingCapacity": "5 Seater"
      },
      "variants": [
          {
              "name": "SV 1.5 Petrol 6MT",
              "exShowroom": 1208000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.5L i-VTEC (121 PS)",
              "mileage": "17.8 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "6 Airbags Standard Across All Variants",
                  "8-inch Touchscreen with Wireless Apple CarPlay & Android Auto",
                  "Projector Headlamps with Integrated LED DRLs & Z-Shaped LED Tail Lamps",
                  "Push Button Start with Smart Key & Automatic Climate Control",
                  "Multi-Angle Rear Camera, VSA, Agile Handling Assist & TPMS"
              ]
          },
          {
              "name": "V 1.5 Petrol 6MT (ADAS)",
              "exShowroom": 1296000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.5L i-VTEC (121 PS)",
              "mileage": "17.8 kmpl",
              "isVFM": true,
              "vfmBadge": "Most Affordable ADAS Sedan",
              "keyFeatures": [
                  "Honda SENSING Level-2 ADAS (CMBS, Adaptive Cruise, Lane Keep Assist)",
                  "R15 Silver Alloy Wheels & Next-Gen Honda Connect with Alexa",
                  "Wireless Smartphone Charger & Walkaway Auto Lock",
                  "8-inch Infotainment with Wireless CarPlay/Android Auto",
                  "6 Airbags, Hill Start Assist & Rear AC Vents"
              ]
          },
          {
              "name": "V 1.5 Petrol CVT Automatic (ADAS)",
              "exShowroom": 1421000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.5L i-VTEC (121 PS)",
              "mileage": "18.4 kmpl",
              "isVFM": true,
              "vfmBadge": "Best Automatic Executive Value",
              "keyFeatures": [
                  "7-Speed CVT Automatic with Steering Paddle Shifters",
                  "Honda SENSING Level-2 ADAS with Low-Speed Follow",
                  "Remote Engine Start via Smart Key",
                  "Wireless Phone Charger & 8-inch Wireless Infotainment",
                  "6 Airbags, VSA & Multi-Angle Rear Camera"
              ]
          },
          {
              "name": "VX 1.5 Petrol 6MT (ADAS)",
              "exShowroom": 1403000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.5L i-VTEC (121 PS)",
              "mileage": "17.8 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "One-Touch Electric Sunroof with Pinch Guard",
                  "Honda LaneWatch Blind-Spot Camera & 8-Speaker Premium Sound",
                  "R15 Diamond-Cut Multi-Spoke Alloy Wheels",
                  "Honda SENSING Level-2 ADAS & Auto Headlamps",
                  "7-inch Full-Color TFT Driver Display"
              ]
          },
          {
              "name": "VX 1.5 Petrol CVT Automatic (ADAS)",
              "exShowroom": 1528000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.5L i-VTEC (121 PS)",
              "mileage": "18.4 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "7-Speed CVT Automatic with Paddle Shifters & Remote Engine Start",
                  "Electric Sunroof, LaneWatch Camera & 8-Speaker Audio",
                  "Honda SENSING Level-2 ADAS Suite",
                  "Wireless Charger & R15 Diamond-Cut Alloys",
                  "6 Airbags & Rear Reading Lamps"
              ]
          },
          {
              "name": "ZX 1.5 Petrol 6MT (ADAS)",
              "exShowroom": 1510000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.5L i-VTEC (121 PS)",
              "mileage": "17.8 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "9-Array Full LED Headlamps & LED Front Fog Lamps",
                  "R16 Dual-Tone Diamond-Cut Alloy Wheels",
                  "Plush Ivory & Black Perforated Leather Upholstery",
                  "Rear Sunshade, Ambient Lighting & Auto Rain-Sensing Wipers",
                  "All 4 Power Windows One-Touch Auto Up/Down with Remote Operation"
              ]
          },
          {
              "name": "ZX 1.5 Petrol CVT Automatic (ADAS)",
              "exShowroom": 1635000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.5L i-VTEC (121 PS)",
              "mileage": "18.4 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Flagship 7-Speed CVT Automatic with Honda SENSING ADAS",
                  "Full LED 9-Array Headlamps & R16 Diamond-Cut Alloy Wheels",
                  "Genuine Leather Seats, Soft-Touch Instrument Panel & Rear Sunshade",
                  "Electric Sunroof, LaneWatch Camera & 8-Speaker Surround Sound",
                  "Remote Engine Start & Auto-Folding ORVMs"
              ]
          }
      ],
      "spin360": {
          "totalFrames": 36,
          "folder": "https://ik.imagekit.io/2908vvlod/cars/honda-city/360",
          "format": "webp",
          "defaultColor": "obsidian-blue-pearl",
          "colors": [
              {
                  "id": "obsidian-blue-pearl",
                  "name": "Obsidian Blue Pearl",
                  "hex": "#424F83"
              }
          ]
      }
  },
  {
      "id": "honda-city-ehev",
      "name": "Honda City e:HEV",
      "brand": "Honda",
      "tagline": "India's Only Self-Charging Strong Hybrid Sedan with 27.13 kmpl & 253 Nm Electric Torque",
      "launchDate": "2025 Model Year",
      "bodyType": "Sedan",
      "fuelTypes": [
          "Hybrid"
      ],
      "priceRange": "₹19.10 - ₹20.75 Lakh",
      "minPrice": 1910000,
      "maxPrice": 2075000,
      "safetyRating": "5.0 ★ (ASEAN NCAP 5-Star / 6 Airbags + ADAS)",
      "groundClearance": "165 mm",
      "bootSpace": "410 Litres",
      "waitingPeriod": "3 - 4 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/honda-city-ehev/colors/obsidian-blue-pearl.webp",
      "summary": "The Honda City e:HEV features Honda's intelligent two-motor e-CVT strong hybrid powertrain delivering 126 PS combined output, instant 253 Nm electric motor torque, an astonishing 27.13 kmpl mileage, all-4 disc brakes, electronic parking brake, and standard Honda SENSING ADAS.",
      "colors": [
          {
              "id": "obsidian-blue-pearl",
              "name": "Obsidian Blue Pearl",
              "hex": "#424F83",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-city-ehev/colors/obsidian-blue-pearl.webp"
          },
          {
              "id": "radiant-red-metallic",
              "name": "Radiant Red Metallic",
              "hex": "#ED121B",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-city-ehev/colors/radiant-red-metallic.webp"
          },
          {
              "id": "platinum-white-pearl",
              "name": "Platinum White Pearl",
              "hex": "#FFFFFF",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-city-ehev/colors/platinum-white-pearl.webp"
          },
          {
              "id": "crystal-black-pearl",
              "name": "Crystal Black Pearl",
              "hex": "#000000",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-city-ehev/colors/crystal-black-pearl.webp"
          },
          {
              "id": "meteoroid-gray-metallic",
              "name": "Meteoroid Gray Metallic",
              "hex": "#535C61",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-city-ehev/colors/meteoroid-gray-metallic.webp"
          },
          {
              "id": "lunar-silver-metallic",
              "name": "Lunar Silver Metallic",
              "hex": "#AFAFAE",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-city-ehev/colors/lunar-silver-metallic.webp"
          }
      ],
      "gallery": [
          {
              "id": "ehev-xray-powertrain",
              "title": "Atkinson-Cycle Strong Hybrid e:HEV Architecture",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city-ehev/gallery/ehev-xray-powertrain.webp"
          },
          {
              "id": "ehev-exterior-front",
              "title": "City e:HEV Signature Blue H-Mark & Carbon Diffuser",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city-ehev/gallery/ehev-exterior-front.webp"
          },
          {
              "id": "ehev-aerodynamic-profile",
              "title": "Trunk Lip Spoiler & R16 Diamond-Cut Alloys",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city-ehev/gallery/ehev-aerodynamic-profile.webp"
          },
          {
              "id": "full-led-headlamps",
              "title": "9-Array Full LED Headlamps with DRLs",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city-ehev/gallery/full-led-headlamps.webp"
          },
          {
              "id": "r16-diamond-alloys",
              "title": "R16 Dual-Tone Diamond-Cut Alloy Wheels & All-4 Disc Brakes",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city-ehev/gallery/r16-diamond-alloys.webp"
          },
          {
              "id": "z-shaped-led-taillamps",
              "title": "Z-Shaped 3D Wrap-Around LED Tail Lamps",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city-ehev/gallery/z-shaped-led-taillamps.webp"
          },
          {
              "id": "ivory-leather-cabin",
              "title": "Two-Tone Ivory & Black Luxury Cabin",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city-ehev/gallery/ivory-leather-cabin.webp"
          },
          {
              "id": "electric-sunroof",
              "title": "One-Touch Electric Sunroof",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city-ehev/gallery/electric-sunroof.webp"
          },
          {
              "id": "lanewatch-camera",
              "title": "Honda LaneWatch Blind-Spot Camera",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city-ehev/gallery/lanewatch-camera.webp"
          },
          {
              "id": "multi-angle-camera",
              "title": "Multi-Angle Rear View Camera",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city-ehev/gallery/multi-angle-camera.webp"
          },
          {
              "id": "pm25-air-filter",
              "title": "Cabin PM 2.5 Air Purifying Filter & Max Cool AC",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city-ehev/gallery/pm25-air-filter.webp"
          },
          {
              "id": "six-airbags-safety",
              "title": "6 Airbags & Honda SENSING Level-2 ADAS",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-city-ehev/gallery/six-airbags-safety.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "1.5L Atkinson-Cycle i-VTEC + Dual Electric Motor Strong Hybrid (126 PS Combined, 253 Nm Electric Motor Torque)"
          ],
          "transmissions": [
              "e-CVT (Electronic Continuously Variable Transmission) with Deceleration Paddle Selectors"
          ],
          "dimensions": "4583 mm L × 1748 mm W × 1489 mm H",
          "wheelbase": "2600 mm",
          "fuelTank": "40 Litres",
          "seatingCapacity": "5 Seater"
      },
      "variants": [
          {
              "name": "V e:HEV Strong Hybrid e-CVT (ADAS)",
              "exShowroom": 1910000,
              "fuel": "Hybrid",
              "trans": "Automatic",
              "engine": "1.5L Strong Hybrid (126 PS / 253 Nm)",
              "mileage": "27.13 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Two-Motor Strong Hybrid System with EV, Hybrid & Engine Drive Modes",
                  "Honda SENSING Level-2 ADAS & All-4 Wheel Disc Brakes",
                  "Electronic Parking Brake (EPB) with Auto Brake Hold",
                  "8-inch Wireless CarPlay/Android Auto & 7-inch HD Hybrid Power Flow Meter",
                  "6 Airbags, Regenerating Deceleration Selectors & Smart Key Remote Start"
              ]
          },
          {
              "name": "ZX e:HEV Strong Hybrid e-CVT (ADAS)",
              "exShowroom": 2075000,
              "fuel": "Hybrid",
              "trans": "Automatic",
              "engine": "1.5L Strong Hybrid (126 PS / 253 Nm)",
              "mileage": "27.13 kmpl",
              "isVFM": true,
              "vfmBadge": "Flagship Hybrid Luxury Sedan",
              "keyFeatures": [
                  "9-Array Full LED Headlamps, Z-Shaped 3D LED Tail Lamps & Trunk Lip Spoiler",
                  "One-Touch Electric Sunroof & R16 Dual-Tone Diamond-Cut Alloy Wheels",
                  "Two-Tone Ivory & Black Leather Upholstery with Ambient Lighting",
                  "Honda LaneWatch Camera, Wireless Phone Charger & 8-Speaker Surround Audio",
                  "Honda Connect with Smartwatch & Alexa Integration"
              ]
          }
      ],
      "spin360": {
          "totalFrames": 36,
          "folder": "https://ik.imagekit.io/2908vvlod/cars/honda-city-ehev/360",
          "format": "webp",
          "defaultColor": "obsidian-blue-pearl",
          "colors": [
              {
                  "id": "obsidian-blue-pearl",
                  "name": "Obsidian Blue Pearl",
                  "hex": "#424F83"
              }
          ]
      }
  },
  {
      "id": "honda-amaze",
      "name": "Honda Amaze",
      "brand": "Honda",
      "tagline": "All-New 3rd-Gen Compact Sedan with 5-Star Bharat NCAP Safety & India's Most Affordable ADAS",
      "launchDate": "December 2024 (3rd Gen)",
      "bodyType": "Sedan",
      "fuelTypes": [
          "Petrol"
      ],
      "priceRange": "₹8.10 - ₹11.20 Lakh",
      "minPrice": 810000,
      "maxPrice": 1120000,
      "safetyRating": "5.0 ★ (Bharat NCAP 5-Star / 6 Airbags Standard)",
      "groundClearance": "172 mm",
      "bootSpace": "416 Litres",
      "waitingPeriod": "2 - 4 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/honda-amaze/colors/obsidian-blue-pearl.webp",
      "summary": "The All-New 3rd-Generation Honda Amaze sets a new benchmark in compact sedans with a 5-Star Bharat NCAP safety rating, 6 airbags standard across all variants, segment-first Honda SENSING Level-2 ADAS, 416L boot space, rear AC vents, and 1.2L i-VTEC refinement.",
      "colors": [
          {
              "id": "obsidian-blue-pearl",
              "name": "Obsidian Blue Pearl",
              "hex": "#424F83",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-amaze/colors/obsidian-blue-pearl.webp"
          },
          {
              "id": "lunar-silver-metallic",
              "name": "Lunar Silver Metallic",
              "hex": "#AFAFAE",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-amaze/colors/lunar-silver-metallic.webp"
          },
          {
              "id": "meteoroid-grey-metallic",
              "name": "Meteoroid Grey Metallic",
              "hex": "#535C61",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-amaze/colors/meteoroid-grey-metallic.webp"
          },
          {
              "id": "golden-brown-metallic",
              "name": "Golden Brown Metallic",
              "hex": "#977B70",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-amaze/colors/golden-brown-metallic.webp"
          },
          {
              "id": "platinum-white-pearl",
              "name": "Platinum White Pearl",
              "hex": "#FFFFFF",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-amaze/colors/platinum-white-pearl.webp"
          },
          {
              "id": "radiant-red-metallic",
              "name": "Radiant Red Metallic",
              "hex": "#ED121B",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-amaze/colors/radiant-red-metallic.webp"
          },
          {
              "id": "crystal-black-pearl",
              "name": "Crystal Black Pearl",
              "hex": "#000000",
              "image": "https://ik.imagekit.io/2908vvlod/cars/honda-amaze/colors/crystal-black-pearl.webp"
          }
      ],
      "gallery": [
          {
              "id": "front-grille-design",
              "title": "Bold Honeycomb Grille & Solid Wing Face",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-amaze/gallery/front-grille-design.webp"
          },
          {
              "id": "led-projector-headlamps",
              "title": "Bi-Projector LED Headlamps with Integrated DRLs",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-amaze/gallery/led-projector-headlamps.webp"
          },
          {
              "id": "led-wing-taillamps",
              "title": "Signature Wing-Shaped LED Rear Combination Lamps",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-amaze/gallery/led-wing-taillamps.webp"
          },
          {
              "id": "r15-diamond-alloys",
              "title": "R15 Dual-Tone Diamond-Cut Alloy Wheels",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-amaze/gallery/r15-diamond-alloys.webp"
          },
          {
              "id": "led-fog-lamps",
              "title": "Sleek LED Projector Fog Lamps",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-amaze/gallery/led-fog-lamps.webp"
          },
          {
              "id": "floating-infotainment",
              "title": "8-inch Floating HD Touchscreen with Wireless CarPlay",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-amaze/gallery/floating-infotainment.webp"
          },
          {
              "id": "tft-instrument-cluster",
              "title": "7-inch HD Full-Color TFT Driver Display",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-amaze/gallery/tft-instrument-cluster.webp"
          },
          {
              "id": "wireless-charger",
              "title": "15W Wireless Smartphone Charger",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-amaze/gallery/wireless-charger.webp"
          },
          {
              "id": "rear-ac-vents",
              "title": "Segment-Added Rear AC Vents & spacious Cabin",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-amaze/gallery/rear-ac-vents.webp"
          },
          {
              "id": "boot-space-416l",
              "title": "Class-Leading 416-Litre Luggage Trunk",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-amaze/gallery/boot-space-416l.webp"
          },
          {
              "id": "lanewatch-adas",
              "title": "Honda SENSING Level-2 ADAS & LaneWatch Camera",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-amaze/gallery/lanewatch-adas.webp"
          },
          {
              "id": "six-airbags-bncap",
              "title": "5-Star Bharat NCAP Safety & 6 Airbags Standard",
              "url": "https://ik.imagekit.io/2908vvlod/cars/honda-amaze/gallery/six-airbags-bncap.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "1.2L i-VTEC 4-Cylinder Petrol (90 PS @ 6000 rpm, 110 Nm @ 4800 rpm)"
          ],
          "transmissions": [
              "5-Speed Manual Transmission (MT)",
              "7-Speed CVT Automatic with Paddle Shifters"
          ],
          "dimensions": "3995 mm L × 1733 mm W × 1500 mm H",
          "wheelbase": "2470 mm",
          "fuelTank": "35 Litres",
          "seatingCapacity": "5 Seater"
      },
      "variants": [
          {
              "name": "V 1.2 Petrol 5MT",
              "exShowroom": 810000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.2L i-VTEC (90 PS)",
              "mileage": "18.65 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "6 Airbags, VSA, Hill Start Assist & ESC Standard",
                  "LED Projector Headlamps with Integrated LED DRLs & Wing LED Tail Lamps",
                  "8-inch Floating Touchscreen with Wireless Apple CarPlay & Android Auto",
                  "7-inch HD Full-Color TFT Driver Display & 4 Speakers",
                  "All 4 Power Windows, Rear Parking Sensors & Keyless Entry"
              ]
          },
          {
              "name": "V 1.2 Petrol CVT Automatic",
              "exShowroom": 935000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.2L i-VTEC (90 PS)",
              "mileage": "19.46 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "7-Speed CVT Automatic with Steering Paddle Shifters",
                  "LED Projector Headlamps & 8-inch Wireless Touchscreen",
                  "7-inch TFT Meter Cluster & Steering Audio Controls",
                  "6 Airbags, VSA, Agile Handling Assist & Hill Start Assist",
                  "Rear Armrest with Cup Holders & 416L Boot"
              ]
          },
          {
              "name": "VX 1.2 Petrol 5MT",
              "exShowroom": 920000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.2L i-VTEC (90 PS)",
              "mileage": "18.65 kmpl",
              "isVFM": true,
              "vfmBadge": "Best Value Family Sedan",
              "keyFeatures": [
                  "Honda LaneWatch Blind-Spot Camera & Multi-Angle Rear Camera",
                  "Fully Automatic Climate Control with Rear AC Vents & PM 2.5 Filter",
                  "15W Wireless Smartphone Charger & Push Button Start/Stop",
                  "R15 Silver Alloy Wheels & LED Projector Fog Lamps",
                  "6-Speaker Surround Audio & Honda Connect with 5-Year Subscription"
              ]
          },
          {
              "name": "VX 1.2 Petrol CVT Automatic",
              "exShowroom": 1000000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.2L i-VTEC (90 PS)",
              "mileage": "19.46 kmpl",
              "isVFM": true,
              "vfmBadge": "Most Popular Automatic Trim",
              "keyFeatures": [
                  "7-Speed CVT Automatic with Paddle Shifters & Remote Engine Start",
                  "Honda LaneWatch Camera, Rear View Camera & Wireless Charger",
                  "Automatic Climate Control with Rear AC Vents",
                  "R15 Alloy Wheels, LED Fog Lamps & Auto Headlamps",
                  "6 Airbags & Walkaway Auto Lock"
              ]
          },
          {
              "name": "ZX 1.2 Petrol 5MT (ADAS)",
              "exShowroom": 999900,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.2L i-VTEC (90 PS)",
              "mileage": "18.65 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Honda SENSING Level-2 ADAS (CMBS, Adaptive Cruise, Lane Keep Assist)",
                  "R15 Dual-Tone Diamond-Cut Alloy Wheels",
                  "Honda LaneWatch Camera, Multi-Angle Rear Camera & 6 Airbags",
                  "8-inch Wireless Touchscreen, Wireless Charger & Rear AC Vents",
                  "India's Most Affordable ADAS-Equipped Car under ₹10 Lakh"
              ]
          },
          {
              "name": "ZX 1.2 Petrol CVT Automatic (ADAS)",
              "exShowroom": 1120000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.2L i-VTEC (90 PS)",
              "mileage": "19.46 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Honda SENSING Level-2 ADAS with Adaptive Cruise & Lane Keeping",
                  "7-Speed CVT Automatic with Paddle Shifters & Remote Engine Start",
                  "R15 Dual-Tone Diamond-Cut Alloy Wheels & Chrome Outer Door Handles",
                  "Honda LaneWatch Camera, Wireless Charger & 6-Speaker Sound",
                  "5-Star Bharat NCAP Safety with 6 Airbags Standard"
              ]
          }
      ],
      "spin360": {
          "totalFrames": 36,
          "folder": "https://ik.imagekit.io/2908vvlod/cars/honda-amaze/360",
          "format": "webp",
          "defaultColor": "obsidian-blue-pearl",
          "colors": [
              {
                  "id": "obsidian-blue-pearl",
                  "name": "Obsidian Blue Pearl",
                  "hex": "#424F83"
              }
          ]
      }
  },
  {
      "id": "mg-windsor-ev",
      "name": "MG Windsor EV",
      "brand": "MG Motor",
      "tagline": "India's #1 Selling Intelligent CUV with 135° Aero-Lounge Seats, 15.6-inch GrandView Display & Up to 449 km Range",
      "launchDate": "2025 (Windsor & Windsor Pro)",
      "bodyType": "SUV",
      "fuelTypes": [
          "Electric"
      ],
      "priceRange": "₹14.00 - ₹18.10 Lakh",
      "minPrice": 1400000,
      "maxPrice": 1810000,
      "safetyRating": "5.0 ★ (6 Airbags Standard + Level-2 ADAS on Pro)",
      "groundClearance": "186 mm",
      "bootSpace": "604 Litres",
      "waitingPeriod": "3 - 6 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/mg-windsor-ev/colors/turquoise-green.webp",
      "summary": "The JSW MG Windsor EV redefines electric mobility in India with business-class 135° reclining Aero-Lounge rear seats, a massive 2700 mm wheelbase, segment-largest 604L boot space, Infinity View Glass Roof, 15.6-inch GrandView Touch Display, and available 38 kWh (332 km) or 52.9 kWh Pro (449 km) Prismatic LFP battery packs.",
      "colors": [
          {
              "id": "turquoise-green",
              "name": "Turquoise Green",
              "hex": "#436B6D",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-windsor-ev/colors/turquoise-green.webp"
          },
          {
              "id": "pearl-white",
              "name": "Pearl White",
              "hex": "#F4F5F7",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-windsor-ev/colors/pearl-white.webp"
          },
          {
              "id": "starburst-black",
              "name": "Starburst Black",
              "hex": "#1B1D21",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-windsor-ev/colors/starburst-black.webp"
          },
          {
              "id": "clay-beige",
              "name": "Clay Beige",
              "hex": "#C8BCA8",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-windsor-ev/colors/clay-beige.webp"
          },
          {
              "id": "celadon-blue",
              "name": "Celadon Blue",
              "hex": "#3B5971",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-windsor-ev/colors/celadon-blue.webp"
          },
          {
              "id": "glaze-red",
              "name": "Glaze Red",
              "hex": "#B51E28",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-windsor-ev/colors/glaze-red.webp"
          },
          {
              "id": "aurora-silver",
              "name": "Aurora Silver",
              "hex": "#9EA4AA",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-windsor-ev/colors/aurora-silver.webp"
          }
      ],
      "gallery": [
          {
              "id": "aeroglide-design",
              "title": "Futuristic AeroGlide CUV Exterior Design",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-windsor-ev/gallery/aeroglide-design.webp"
          },
          {
              "id": "r18-diamond-alloys",
              "title": "R18 Dual-Tone Diamond-Cut Alloy Wheels",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-windsor-ev/gallery/r18-diamond-alloys.webp"
          },
          {
              "id": "illuminated-mg-logo",
              "title": "Illuminated Front MG Crest & StarStreak Horizon LED",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-windsor-ev/gallery/illuminated-mg-logo.webp"
          },
          {
              "id": "flush-door-handles",
              "title": "Aerodynamic Smart Flush Door Handles",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-windsor-ev/gallery/flush-door-handles.webp"
          },
          {
              "id": "smartflow-led-taillamps",
              "title": "SmartFlow Connected LED Tail Light Bar",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-windsor-ev/gallery/smartflow-led-taillamps.webp"
          },
          {
              "id": "infinity-glass-roof",
              "title": "Expansive Infinity View Glass Roof",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-windsor-ev/gallery/infinity-glass-roof.webp"
          },
          {
              "id": "grandview-touch-display",
              "title": "15.6-inch GrandView Touch Infotainment Display",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-windsor-ev/gallery/grandview-touch-display.webp"
          },
          {
              "id": "aero-lounge-seats",
              "title": "135° Reclining Business-Class Aero-Lounge Seats",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-windsor-ev/gallery/aero-lounge-seats.webp"
          },
          {
              "id": "dual-tone-ivory-interior",
              "title": "Dual-Tone Ivory & Rose Gold Luxury Cabin",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-windsor-ev/gallery/dual-tone-ivory-interior.webp"
          },
          {
              "id": "infinity-9-speaker-audio",
              "title": "9-Speaker Infinity Surround Sound System",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-windsor-ev/gallery/infinity-9-speaker-audio.webp"
          },
          {
              "id": "boot-space-604l",
              "title": "Segment-Largest 604-Litre Luggage Boot",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-windsor-ev/gallery/boot-space-604l.webp"
          },
          {
              "id": "level2-adas-safety",
              "title": "Level-2 ADAS Suite, 360° Camera & 6 Airbags",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-windsor-ev/gallery/level2-adas-safety.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "38 kWh LFP Battery + PMSM Motor (136 PS, 200 Nm, 332 km Certified Range)",
              "52.9 kWh LFP Battery (Windsor Pro) + PMSM Motor (136 PS, 200 Nm, 449 km Certified Range)"
          ],
          "transmissions": [
              "Single-Speed Automatic Electric Drive (4 Drive Modes: Eco+, Eco, Normal, Sport)"
          ],
          "dimensions": "4295 mm L × 1850 mm W × 1677 mm H",
          "wheelbase": "2700 mm",
          "fuelTank": "38 kWh / 52.9 kWh (IP67 Rated)",
          "seatingCapacity": "5 Seater"
      },
      "variants": [
          {
              "name": "Excite 38 kWh (Full Battery Purchase)",
              "exShowroom": 1400000,
              "fuel": "Electric",
              "trans": "Automatic",
              "engine": "38 kWh Electric (136 PS)",
              "mileage": "332 km/charge",
              "isVFM": false,
              "keyFeatures": [
                  "6 Airbags, All-4 Disc Brakes, ESP & Electronic Parking Brake Standard",
                  "135° Reclining Aero-Lounge Rear Seats (60:40 Split)",
                  "10.1-inch Touchscreen with Wireless Apple CarPlay & Android Auto",
                  "LED Projector Headlamps, StarStreak LED DRLs & Smart Flush Handles",
                  "Also available under BaaS at ₹9.99 Lakh + ₹3.9/km"
              ]
          },
          {
              "name": "Exclusive 38 kWh",
              "exShowroom": 1500000,
              "fuel": "Electric",
              "trans": "Automatic",
              "engine": "38 kWh Electric (136 PS)",
              "mileage": "332 km/charge",
              "isVFM": true,
              "vfmBadge": "Most Popular Tech-Loaded Trim",
              "keyFeatures": [
                  "Massive 15.6-inch GrandView Touch Display with Jio App Store",
                  "360° HD Surround View Camera & R18 Diamond-Cut Alloy Wheels",
                  "9-Speaker Infinity Audio System with Subwoofer",
                  "6-Way Power Adjustable Driver Seat & Black Leatherette Quilted Seats",
                  "80+ i-SMART Connected Features, Digital Key & Wireless Charger"
              ]
          },
          {
              "name": "Essence 38 kWh",
              "exShowroom": 1615000,
              "fuel": "Electric",
              "trans": "Automatic",
              "engine": "38 kWh Electric (136 PS)",
              "mileage": "332 km/charge",
              "isVFM": false,
              "keyFeatures": [
                  "Expansive Infinity View Glass Roof with Electric Sunshade",
                  "Front Ventilated Seats & 256-Color Ambient Cabin Lighting",
                  "PM 2.5 Air Filter & 7.4 kW AC Fast Home Charger Included",
                  "15.6-inch GrandView Display, 360° Camera & 9-Speaker Infinity Sound",
                  "Lifetime Battery Warranty for First Owner"
              ]
          },
          {
              "name": "Essence Pro 52.9 kWh (ADAS + V2L)",
              "exShowroom": 1810000,
              "fuel": "Electric",
              "trans": "Automatic",
              "engine": "52.9 kWh Electric (136 PS)",
              "mileage": "449 km/charge",
              "isVFM": true,
              "vfmBadge": "Long-Range 449 km Flagship",
              "keyFeatures": [
                  "Larger 52.9 kWh Prismatic Battery with 449 km Certified Range & 60 kW DC Fast Charging",
                  "Level-2 ADAS Suite (12 Autonomous Safety Features incl. Adaptive Cruise & AEB)",
                  "Dual-Tone Ivory & Rose Gold Interior Theme & Powered Tailgate",
                  "Vehicle-to-Load (V2L) & Vehicle-to-Vehicle (V2V) Bi-Directional Charging",
                  "Infinity View Glass Roof, Ventilated Seats & 9-Speaker Infinity Audio"
              ]
          }
      ]
  },
  {
      "id": "mg-hector",
      "name": "MG Hector",
      "brand": "MG Motor",
      "tagline": "India's First Internet SUV with 14-inch HD Portrait Infotainment, Dual-Pane Panoramic Sunroof & Level-2 ADAS",
      "launchDate": "2025 Model Year",
      "bodyType": "SUV",
      "fuelTypes": [
          "Petrol",
          "Diesel"
      ],
      "priceRange": "₹13.99 - ₹22.89 Lakh",
      "minPrice": 1399000,
      "maxPrice": 2289000,
      "safetyRating": "5.0 ★ (6 Airbags + Level-2 ADAS 11 Features)",
      "groundClearance": "192 mm",
      "bootSpace": "587 Litres",
      "waitingPeriod": "2 - 4 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/mg-hector/colors/celadon-blue.webp",
      "summary": "The bold MG Hector commands the road with its Argyle-inspired Aura-Hex Diamond Mesh Grille, India's largest 14-inch HD Portrait Touchscreen with i-SWIPE gesture control, Dual-Pane Panoramic Sunroof, Infinity by Harman audio, and Traffic Jam Assist Level-2 ADAS.",
      "colors": [
          {
              "id": "celadon-blue",
              "name": "Celadon Blue",
              "hex": "#2B4663",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-hector/colors/celadon-blue.webp"
          },
          {
              "id": "aurora-silver",
              "name": "Aurora Silver",
              "hex": "#A5ABB0",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-hector/colors/aurora-silver.webp"
          },
          {
              "id": "glaze-red",
              "name": "Glaze Red",
              "hex": "#B51E28",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-hector/colors/glaze-red.webp"
          },
          {
              "id": "pearl-white",
              "name": "Pearl White",
              "hex": "#F4F5F7",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-hector/colors/pearl-white.webp"
          },
          {
              "id": "starry-black",
              "name": "Starry Black",
              "hex": "#181A1E",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-hector/colors/starry-black.webp"
          }
      ],
      "gallery": [
          {
              "id": "aura-hex-grille",
              "title": "Commanding Aura-Hex Diamond Mesh Grille",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-hector/gallery/aura-hex-grille.webp"
          },
          {
              "id": "aura-bolt-alloys",
              "title": "R18 Dual-Tone Aura Bolt Machined Alloy Wheels",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-hector/gallery/aura-bolt-alloys.webp"
          },
          {
              "id": "led-connected-taillights",
              "title": "LED Connected Blade Tail Lamps",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-hector/gallery/led-connected-taillights.webp"
          },
          {
              "id": "aura-sculpt-bumpers",
              "title": "Muscular Aura Sculpt Front & Rear Bumpers",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-hector/gallery/aura-sculpt-bumpers.webp"
          },
          {
              "id": "14-inch-portrait-screen",
              "title": "India's Largest 14-inch HD Portrait Infotainment",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-hector/gallery/14-inch-portrait-screen.webp"
          },
          {
              "id": "panoramic-sunroof",
              "title": "Massive Dual-Pane Panoramic Sunroof",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-hector/gallery/panoramic-sunroof.webp"
          },
          {
              "id": "ice-grey-interiors",
              "title": "Dual-Tone Ice Grey & Black Luxury Cabin",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-hector/gallery/ice-grey-interiors.webp"
          },
          {
              "id": "digital-cluster",
              "title": "7-inch Full Digital LCD Instrument Cluster",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-hector/gallery/digital-cluster.webp"
          },
          {
              "id": "infinity-harman-audio",
              "title": "Infinity by Harman Premium Surround Sound",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-hector/gallery/infinity-harman-audio.webp"
          },
          {
              "id": "front-ventilated-seats",
              "title": "Front Ventilated Seats & Wireless Charger",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-hector/gallery/front-ventilated-seats.webp"
          },
          {
              "id": "powered-tailgate",
              "title": "Smart Auto-Powered Tailgate & 587L Boot",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-hector/gallery/powered-tailgate.webp"
          },
          {
              "id": "level2-adas-suite",
              "title": "Autonomous Level-2 ADAS with Traffic Jam Assist",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-hector/gallery/level2-adas-suite.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "1.5L Turbocharged Intercooled Petrol (143 PS @ 5000 rpm, 250 Nm @ 1600-3600 rpm)",
              "2.0L Turbocharged Diesel (170 PS @ 3750 rpm, 350 Nm @ 1750-2500 rpm)"
          ],
          "transmissions": [
              "6-Speed Manual Transmission (Petrol & Diesel)",
              "8-Speed CVT Automatic (Petrol)"
          ],
          "dimensions": "4699 mm L × 1835 mm W × 1760 mm H",
          "wheelbase": "2750 mm",
          "fuelTank": "60 Litres",
          "seatingCapacity": "5 Seater (6 & 7 Seater Available in Hector Plus)"
      },
      "variants": [
          {
              "name": "Style 1.5 Turbo Petrol 6MT",
              "exShowroom": 1399000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.5L Turbo Petrol (143 PS)",
              "mileage": "13.79 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "All-4 Disc Brakes, ESP, Traction Control & Hill Hold Standard",
                  "Projector Headlamps with LED DRLs & Floating Turn Indicators",
                  "7-inch Touchscreen with Android Auto & Apple CarPlay",
                  "Rear AC Vents, 60:40 Split Reclining Rear Seats & 587L Boot",
                  "Remote Keyless Entry & Cooled Glovebox"
              ]
          },
          {
              "name": "Shine Pro 1.5 Turbo Petrol 6MT",
              "exShowroom": 1600000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.5L Turbo Petrol (143 PS)",
              "mileage": "13.79 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Single-Pane Electric Sunroof & 14-inch HD Portrait Touchscreen",
                  "Wireless Apple CarPlay/Android Auto & Wireless Smartphone Charger",
                  "LED Projector Headlamps & Connected LED Blade Tail Lamps",
                  "7-inch Full Digital Cluster, Push Button Start & Cruise Control",
                  "R17 Dual-Tone Machined Alloy Wheels"
              ]
          },
          {
              "name": "Select Pro 1.5 Turbo Petrol CVT Automatic",
              "exShowroom": 1870000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.5L Turbo Petrol (143 PS)",
              "mileage": "12.34 kmpl",
              "isVFM": true,
              "vfmBadge": "Best Value Panoramic Automatic",
              "keyFeatures": [
                  "Dual-Pane Panoramic Sunroof & 14-inch HD Portrait Infotainment",
                  "8-Speed Smooth CVT Automatic with Eco, Normal & Sport Modes",
                  "R18 Dual-Tone Machined Alloy Wheels & 8-Color Ambient Lighting",
                  "75+ i-SMART Connected Car Features with 100+ Voice Commands",
                  "Digital Bluetooth Key Sharing & PM 2.5 Air Filter"
              ]
          },
          {
              "name": "Sharp Pro 1.5 Turbo Petrol CVT Automatic",
              "exShowroom": 2080000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.5L Turbo Petrol (143 PS)",
              "mileage": "12.34 kmpl",
              "isVFM": true,
              "vfmBadge": "Most Popular Luxury Trim",
              "keyFeatures": [
                  "6 Airbags, 360° HD Surround View Camera & Electronic Parking Brake",
                  "Front Ventilated Seats, 6-Way Power Driver & 4-Way Power Co-Driver Seat",
                  "Infinity by Harman 8-Speaker Sound System with Subwoofer & Amplifier",
                  "Smart Auto-Powered Tailgate & Dual-Tone Ice Grey Perforated Leatherette",
                  "Dual-Pane Panoramic Sunroof & 14-inch HD Portrait Display"
              ]
          },
          {
              "name": "Sharp Pro 2.0 Turbo Diesel 6MT",
              "exShowroom": 2150000,
              "fuel": "Diesel",
              "trans": "Manual",
              "engine": "2.0L Turbo Diesel (170 PS / 350 Nm)",
              "mileage": "15.58 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Punchy 2.0L Turbo Diesel (170 PS, 350 Nm) with 6-Speed Manual",
                  "Dual-Pane Panoramic Sunroof & 14-inch HD Portrait Touchscreen",
                  "Front Ventilated Seats, Infinity by Harman Audio & Powered Tailgate",
                  "6 Airbags, 360° Camera & Blind Spot Detection",
                  "R18 Dual-Tone Alloys & Digital Bluetooth Car Key"
              ]
          },
          {
              "name": "Savvy Pro 1.5 Turbo Petrol CVT (ADAS)",
              "exShowroom": 2250000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.5L Turbo Petrol (143 PS)",
              "mileage": "12.34 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Autonomous Level-2 ADAS (11 Features incl. Traffic Jam Assist & Adaptive Cruise)",
                  "Intelligent Headlamp Control, Lane Keep Assist & Automatic Emergency Braking",
                  "14-inch HD Portrait Infotainment, Dual-Pane Panoramic Sunroof & Infinity Audio",
                  "Front Ventilated Seats, Powered Tailgate & 360° HD Camera",
                  "Flagship Connected SUV Experience"
              ]
          },
          {
              "name": "Blackstorm 2.0 Turbo Diesel 6MT",
              "exShowroom": 2289000,
              "fuel": "Diesel",
              "trans": "Manual",
              "engine": "2.0L Turbo Diesel (170 PS / 350 Nm)",
              "mileage": "15.58 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Starry Black Exterior with Dark Chrome Argyle Grille & Red Brake Calipers",
                  "All-Black Leatherette Cabin with Gunmetal Accents & Blackstorm Embossing",
                  "14-inch HD Portrait Touchscreen, Panoramic Sunroof & Infinity Audio",
                  "Front Ventilated Seats, Powered Tailgate & 360° HD Camera",
                  "6 Airbags & R18 Gloss Black Alloy Wheels with Red Inserts"
              ]
          }
      ]
  },
  {
      "id": "mg-astor",
      "name": "MG Astor",
      "brand": "MG Motor",
      "tagline": "India's Most Tech-Loaded Compact SUV with Personal AI Assistant, Panoramic Skyroof & Level-2 ADAS",
      "launchDate": "2025 Model Year",
      "bodyType": "SUV",
      "fuelTypes": [
          "Petrol"
      ],
      "priceRange": "₹9.99 - ₹17.90 Lakh",
      "minPrice": 999000,
      "maxPrice": 1790000,
      "safetyRating": "5.0 ★ (6 Airbags + 14 Autonomous Level-2 ADAS Features)",
      "groundClearance": "180 mm",
      "bootSpace": "448 Litres",
      "waitingPeriod": "2 - 3 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/mg-astor/colors/glaze-red.webp",
      "summary": "The MG Astor stands out in the mid-size SUV segment with its Bold Celestial Grille, Full LED Hawkeye Headlamps, plush Sangria Red or Ivory soft-touch cabin, Front Ventilated Seats, Panoramic Skyroof, 80+ i-SMART 2.0 features, and 14 Autonomous Level-2 ADAS functions.",
      "colors": [
          {
              "id": "glaze-red",
              "name": "Glaze Red",
              "hex": "#B51E28",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-astor/colors/glaze-red.webp"
          },
          {
              "id": "havana-grey",
              "name": "Havana Grey",
              "hex": "#4E5358",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-astor/colors/havana-grey.webp"
          },
          {
              "id": "aurora-silver",
              "name": "Aurora Silver",
              "hex": "#A5ABB0",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-astor/colors/aurora-silver.webp"
          },
          {
              "id": "candy-white",
              "name": "Candy White",
              "hex": "#F4F5F7",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-astor/colors/candy-white.webp"
          },
          {
              "id": "starry-black",
              "name": "Starry Black",
              "hex": "#181A1E",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-astor/colors/starry-black.webp"
          },
          {
              "id": "candy-white-black-roof",
              "name": "Candy White with Starry Black Roof",
              "hex": "#E2E5E9",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-astor/colors/candy-white-black-roof.webp"
          }
      ],
      "gallery": [
          {
              "id": "celestial-grille",
              "title": "Bold Celestial Electroplated Front Grille",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-astor/gallery/celestial-grille.webp"
          },
          {
              "id": "hawkeye-led-headlamps",
              "title": "Full LED Hawkeye Projector Headlamps",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-astor/gallery/hawkeye-led-headlamps.webp"
          },
          {
              "id": "turbine-machined-alloys",
              "title": "R17 Turbine-Inspired Machined Alloy Wheels",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-astor/gallery/turbine-machined-alloys.webp"
          },
          {
              "id": "led-tail-lamps",
              "title": "Sculpted LED Tail Lamps & Rear Bumper",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-astor/gallery/led-tail-lamps.webp"
          },
          {
              "id": "sangria-red-interior",
              "title": "Dual-Tone Sangria Red Leather-Layered Cabin",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-astor/gallery/sangria-red-interior.webp"
          },
          {
              "id": "panoramic-skyroof",
              "title": "Expansive Dual-Pane Panoramic Skyroof",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-astor/gallery/panoramic-skyroof.webp"
          },
          {
              "id": "hd-touchscreen-10inch",
              "title": "10.1-inch HD Infotainment with Wireless CarPlay",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-astor/gallery/hd-touchscreen-10inch.webp"
          },
          {
              "id": "digital-cluster",
              "title": "7-inch Full Digital Embedded LCD Cluster",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-astor/gallery/digital-cluster.webp"
          },
          {
              "id": "power-driver-seat",
              "title": "6-Way Power Adjustable & Front Ventilated Seats",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-astor/gallery/power-driver-seat.webp"
          },
          {
              "id": "steering-modes",
              "title": "3-Mode Electronic Power Steering (Urban, Normal, Dynamic)",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-astor/gallery/steering-modes.webp"
          },
          {
              "id": "digital-bluetooth-key",
              "title": "Digital Key with Bluetooth Sharing & i-SMART 2.0",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-astor/gallery/digital-bluetooth-key.webp"
          },
          {
              "id": "level2-adas-radar",
              "title": "14 Autonomous Level-2 ADAS Safety Functions",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-astor/gallery/level2-adas-radar.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "1.5L VTi-TECH Naturally Aspirated Petrol (110 PS @ 6000 rpm, 144 Nm @ 4400 rpm)",
              "1.3L 220 TURBO Petrol (140 PS @ 5600 rpm, 220 Nm @ 3600 rpm)"
          ],
          "transmissions": [
              "5-Speed Manual Transmission (1.5L Petrol)",
              "8-Speed CVT Automatic (1.5L Petrol)",
              "6-Speed Torque Converter Automatic (1.3L Turbo)"
          ],
          "dimensions": "4323 mm L × 1809 mm W × 1650 mm H",
          "wheelbase": "2585 mm",
          "fuelTank": "48 Litres (1.5L) / 45 Litres (1.3L Turbo)",
          "seatingCapacity": "5 Seater"
      },
      "variants": [
          {
              "name": "Sprint 1.5 Petrol 5MT",
              "exShowroom": 999000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.5L VTi-TECH (110 PS)",
              "mileage": "15.43 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Full LED Hawkeye Headlamps with LED DRLs & LED Tail Lamps",
                  "10.1-inch HD Touchscreen with Android Auto & Apple CarPlay",
                  "Soft-Touch Dashboard with Dual-Tone Ivory Interior",
                  "All-4 Disc Brakes, ESP, Traction Control, Hill Hold & Hill Descent Control",
                  "Automatic Climate Control with Rear AC Vents & PM 2.5 Filter"
              ]
          },
          {
              "name": "Shine 1.5 Petrol 5MT",
              "exShowroom": 1170000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.5L VTi-TECH (110 PS)",
              "mileage": "15.43 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Expansive Panoramic Skyroof",
                  "R17 Silver Alloy Wheels & Push Button Start/Stop with Smart Key",
                  "Rear View Camera, Cruise Control & Front Fog Lamps with Cornering Assist",
                  "Leather-Layered Steering Wheel with 3 Steering Modes",
                  "6 Speakers & Cooled Glovebox"
              ]
          },
          {
              "name": "Select 1.5 Petrol 5MT",
              "exShowroom": 1299000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.5L VTi-TECH (110 PS)",
              "mileage": "15.43 kmpl",
              "isVFM": true,
              "vfmBadge": "Best Value Panoramic SUV",
              "keyFeatures": [
                  "6 Airbags & 7-inch Full Digital LCD Instrument Cluster",
                  "80+ i-SMART 2.0 Connected Features with Wireless CarPlay/Android Auto",
                  "Wireless Smartphone Charger & Digital Bluetooth Key",
                  "Panoramic Skyroof & Auto Headlamps with Rain-Sensing Wipers",
                  "24x7 Live Assistant & Jio Voice Recognition"
              ]
          },
          {
              "name": "Select 1.5 Petrol CVT Automatic",
              "exShowroom": 1410000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.5L VTi-TECH (110 PS)",
              "mileage": "14.85 kmpl",
              "isVFM": true,
              "vfmBadge": "Most Popular Automatic Trim",
              "keyFeatures": [
                  "8-Speed Smooth CVT Automatic with Electronic Parking Brake & Auto Hold",
                  "Panoramic Skyroof, 6 Airbags & 10.1-inch Wireless Touchscreen",
                  "Wireless Phone Charger, 7-inch Digital Cluster & Digital Key",
                  "R17 Alloy Wheels, Heated ORVMs & Roof Rails",
                  "Plush Dual-Tone Ivory Perforated Leatherette Seats"
              ]
          },
          {
              "name": "Sharp Pro 1.5 Petrol CVT Automatic",
              "exShowroom": 1610000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.5L VTi-TECH (110 PS)",
              "mileage": "14.85 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Front Ventilated Seats & 6-Way Power Adjustable Driver Seat",
                  "360° Around View HD Camera & Blind Spot Detection / Rear Cross Traffic Alert",
                  "R17 Dual-Tone Turbine-Inspired Machined Alloy Wheels",
                  "Auto-Dimming IRVM & Tire Pressure Monitoring System (TPMS)",
                  "Panoramic Skyroof, 6 Airbags & Wireless Charger"
              ]
          },
          {
              "name": "Savvy Pro 1.3 Turbo 6AT (ADAS)",
              "exShowroom": 1790000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.3L 220 Turbo (140 PS / 220 Nm)",
              "mileage": "14.34 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "140 PS / 220 Nm 1.3L Turbo Engine with 6-Speed Torque Converter Automatic",
                  "14 Autonomous Level-2 ADAS Features (Adaptive Cruise, Lane Keep, AEB)",
                  "Exclusive Dual-Tone Sangria Red Interior Theme",
                  "Front Ventilated Seats, Panoramic Skyroof & 360° HD Camera",
                  "Red Front Brake Calipers & R17 Black Machined Alloys"
              ]
          }
      ]
  },
  {
      "id": "mg-comet-ev",
      "name": "MG Comet EV",
      "brand": "MG Motor",
      "tagline": "India's Smartest Urban Electric Car with Twin 10.25-inch Floating Screens & 4.2m Turning Radius",
      "launchDate": "2025 Model Year",
      "bodyType": "Hatchback",
      "fuelTypes": [
          "Electric"
      ],
      "priceRange": "₹7.00 - ₹9.84 Lakh",
      "minPrice": 700000,
      "maxPrice": 984000,
      "safetyRating": "4.0 ★ (17 Hot-Stamped Steel Panels + IP67 Battery + All-4 Disc Brakes)",
      "groundClearance": "165 mm",
      "bootSpace": "350 Litres (Rear Seats Folded)",
      "waitingPeriod": "1 - 2 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/mg-comet-ev/colors/apple-green-starry-black.webp",
      "summary": "The MG Comet EV is purpose-built for effortless city commuting with an ultra-tight 4.2-metre turning radius, twin 10.25-inch integrated floating widescreens, Wireless Apple CarPlay & Android Auto, 55+ i-SMART connected features, 230 km certified range, and 7.4 kW AC fast charging.",
      "colors": [
          {
              "id": "apple-green-starry-black",
              "name": "Apple Green with Starry Black Roof",
              "hex": "#82B91E",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-comet-ev/colors/apple-green-starry-black.webp"
          },
          {
              "id": "candy-white-starry-black",
              "name": "Candy White with Starry Black Roof",
              "hex": "#ECEEF0",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-comet-ev/colors/candy-white-starry-black.webp"
          },
          {
              "id": "aurora-silver",
              "name": "Aurora Silver",
              "hex": "#A5ABB0",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-comet-ev/colors/aurora-silver.webp"
          },
          {
              "id": "candy-white",
              "name": "Candy White",
              "hex": "#F7F8FA",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-comet-ev/colors/candy-white.webp"
          },
          {
              "id": "starry-black",
              "name": "Starry Black",
              "hex": "#181A1E",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-comet-ev/colors/starry-black.webp"
          }
      ],
      "gallery": [
          {
              "id": "floating-widescreen",
              "title": "Twin 10.25-inch Integrated Floating Widescreen Displays",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-comet-ev/gallery/floating-widescreen.webp"
          },
          {
              "id": "wireless-carplay",
              "title": "Wireless Apple CarPlay & Android Auto",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-comet-ev/gallery/wireless-carplay.webp"
          },
          {
              "id": "leather-steering-controls",
              "title": "iPod-Inspired Steering Wheel Controls",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-comet-ev/gallery/leather-steering-controls.webp"
          },
          {
              "id": "two-door-four-seater",
              "title": "Smart 2-Door 4-Seater Layout with One-Touch Tumble",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-comet-ev/gallery/two-door-four-seater.webp"
          },
          {
              "id": "space-grey-cabin",
              "title": "Airy Space Grey Cabin & Ergonomic Seating",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-comet-ev/gallery/space-grey-cabin.webp"
          },
          {
              "id": "city-range-230km",
              "title": "230 km Certified Range & Ultra-Agile 4.2m Turning Radius",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-comet-ev/gallery/city-range-230km.webp"
          },
          {
              "id": "ip67-prismatic-battery",
              "title": "17.3 kWh IP67-Rated Prismatic Li-Ion Battery",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-comet-ev/gallery/ip67-prismatic-battery.webp"
          },
          {
              "id": "high-strength-body",
              "title": "High-Strength Body with 17 Hot-Stamped Steel Panels",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-comet-ev/gallery/high-strength-body.webp"
          },
          {
              "id": "serenity-lush-pack",
              "title": "Serenity Lush Custom Interior Styling Pack",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-comet-ev/gallery/serenity-lush-pack.webp"
          },
          {
              "id": "sundowner-lush-pack",
              "title": "Sundowner Lush Custom Theme Pack",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-comet-ev/gallery/sundowner-lush-pack.webp"
          },
          {
              "id": "night-cafe-edition",
              "title": "Night Cafe Signature Graphic Edition",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-comet-ev/gallery/night-cafe-edition.webp"
          },
          {
              "id": "space-sticker-edition",
              "title": "Space Explorer Custom Graphic Edition",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-comet-ev/gallery/space-sticker-edition.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "17.3 kWh Prismatic LFP Battery + PMSM Rear Motor (42 PS, 110 Nm, 230 km Certified Range)"
          ],
          "transmissions": [
              "Single-Speed Automatic Electric Drive (Eco, Normal, Sport Modes)"
          ],
          "dimensions": "2974 mm L × 1505 mm W × 1640 mm H",
          "wheelbase": "2010 mm",
          "fuelTank": "17.3 kWh (3.3 kW & 7.4 kW AC Fast Charging)",
          "seatingCapacity": "4 Seater"
      },
      "variants": [
          {
              "name": "Executive 17.3 kWh",
              "exShowroom": 700000,
              "fuel": "Electric",
              "trans": "Automatic",
              "engine": "17.3 kWh Electric (42 PS)",
              "mileage": "230 km/charge",
              "isVFM": false,
              "keyFeatures": [
                  "Dual Front Airbags, ABS + EBD, Rear Parking Sensors & TPMS",
                  "7-inch Digital Instrument Cluster & LED Turn Indicators",
                  "50:50 Split Folding Rear Seats & Remote Central Locking",
                  "Illuminated MG Logo & Follow-Me-Home Headlamps",
                  "Also available under BaaS at ₹4.99 Lakh + ₹2.5/km"
              ]
          },
          {
              "name": "Excite 17.3 kWh (3.3 kW)",
              "exShowroom": 808000,
              "fuel": "Electric",
              "trans": "Automatic",
              "engine": "17.3 kWh Electric (42 PS)",
              "mileage": "230 km/charge",
              "isVFM": true,
              "vfmBadge": "Best Value Twin-Screen EV",
              "keyFeatures": [
                  "Twin 10.25-inch Floating Widescreen Infotainment & Digital Cluster",
                  "Wireless Apple CarPlay & Android Auto",
                  "Full LED Headlamps, LED Tail Lamps & Connecting Horizon Front/Rear Light Bars",
                  "55+ i-SMART Connected Car Features with 100+ Voice Commands",
                  "Leather-Wrapped Steering Wheel & Power Windows"
              ]
          },
          {
              "name": "Excite FC 17.3 kWh (7.4 kW Fast Charge)",
              "exShowroom": 858000,
              "fuel": "Electric",
              "trans": "Automatic",
              "engine": "17.3 kWh Electric (42 PS)",
              "mileage": "230 km/charge",
              "isVFM": false,
              "keyFeatures": [
                  "7.4 kW AC Fast Charger Support (0-100% in just 3.5 Hours)",
                  "All-4 Wheel Disc Brakes, Electronic Stability Control (ESC) & Hill Hold Control",
                  "Electronic Parking Brake (EPB) & Power-Folding ORVMs",
                  "Twin 10.25-inch Floating Screens with Wireless CarPlay/Android Auto",
                  "Creep Mode for Effortless Bumper-to-Bumper Traffic"
              ]
          },
          {
              "name": "Exclusive 17.3 kWh",
              "exShowroom": 910000,
              "fuel": "Electric",
              "trans": "Automatic",
              "engine": "17.3 kWh Electric (42 PS)",
              "mileage": "230 km/charge",
              "isVFM": false,
              "keyFeatures": [
                  "Digital Key with Bluetooth Sharing & Smart Start System (No Start Button Needed)",
                  "Rear Parking Camera with Dynamic Guidelines",
                  "Electronic Parking Brake, ESC, Hill Hold & All-4 Disc Brakes",
                  "Tilt-Adjustable Steering & Dual-Tone Roof Options",
                  "Twin 10.25-inch Widescreens & 55+ Connected Features"
              ]
          },
          {
              "name": "Exclusive FC 17.3 kWh (7.4 kW Fast Charge)",
              "exShowroom": 960000,
              "fuel": "Electric",
              "trans": "Automatic",
              "engine": "17.3 kWh Electric (42 PS)",
              "mileage": "230 km/charge",
              "isVFM": true,
              "vfmBadge": "Top Fast-Charge Urban EV",
              "keyFeatures": [
                  "7.4 kW AC Fast Charging (0-100% in 3.5 Hours)",
                  "All-4 Disc Brakes, ESC, Hill Hold & Electronic Parking Brake",
                  "Digital Bluetooth Key, Rear View Camera & Twin 10.25-inch Displays",
                  "Power-Folding ORVMs & Dual-Tone Apple Green / Candy White Options",
                  "Lowest Running Cost (< ₹0.75/km)"
              ]
          },
          {
              "name": "Blackstorm Edition 17.3 kWh FC",
              "exShowroom": 984000,
              "fuel": "Electric",
              "trans": "Automatic",
              "engine": "17.3 kWh Electric (42 PS)",
              "mileage": "230 km/charge",
              "isVFM": false,
              "keyFeatures": [
                  "Starry Black Exterior with Starlight Red Accents & Blackstorm Badging",
                  "Leatherette Seats with Blackstorm Red Embroidery & 4 Speakers",
                  "7.4 kW Fast Charging, All-4 Disc Brakes, ESC & Electronic Parking Brake",
                  "Twin 10.25-inch Floating Screens & Digital Key Sharing",
                  "Rear View Camera & Dark Chrome Styling Elements"
              ]
          }
      ]
  },
  {
      "id": "mg-zs-ev",
      "name": "MG ZS EV",
      "brand": "MG Motor",
      "tagline": "Pure Electric Family SUV with 50.3 kWh Battery, 461 km Range, 176 PS Power & Level-2 ADAS",
      "launchDate": "2025 Model Year",
      "bodyType": "SUV",
      "fuelTypes": [
          "Electric"
      ],
      "priceRange": "₹18.98 - ₹25.75 Lakh",
      "minPrice": 1898000,
      "maxPrice": 2575000,
      "safetyRating": "5.0 ★ (Euro NCAP / ASNCAP 5-Star + 6 Airbags + Level-2 ADAS)",
      "groundClearance": "177 mm",
      "bootSpace": "448 Litres",
      "waitingPeriod": "2 - 3 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/mg-zs-ev/colors/glaze-red.webp",
      "summary": "The MG ZS EV delivers exhilarating 176 PS pure electric performance (0-100 km/h in 8.5 seconds) paired with a 50.3 kWh IP69K-rated battery offering 461 km certified range, Dual-Pane Panoramic Skyroof, 360° HD camera, 75+ i-SMART features, and 17 Autonomous Level-2 ADAS functions.",
      "colors": [
          {
              "id": "glaze-red",
              "name": "Glaze Red",
              "hex": "#B51E28",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-zs-ev/colors/glaze-red.webp"
          },
          {
              "id": "aurora-silver",
              "name": "Aurora Silver",
              "hex": "#7D8389",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-zs-ev/colors/aurora-silver.webp"
          },
          {
              "id": "starry-black",
              "name": "Starry Black",
              "hex": "#181A1E",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-zs-ev/colors/starry-black.webp"
          },
          {
              "id": "candy-white",
              "name": "Candy White",
              "hex": "#F4F5F7",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-zs-ev/colors/candy-white.webp"
          }
      ],
      "gallery": [
          {
              "id": "electric-front-grille",
              "title": "Body-Colored Aerodynamic EV Grille & Charging Port",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-zs-ev/gallery/electric-front-grille.webp"
          },
          {
              "id": "hawkeye-led-headlamps",
              "title": "Full LED Hawkeye Headlamps with DRLs",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-zs-ev/gallery/hawkeye-led-headlamps.webp"
          },
          {
              "id": "tomahawk-alloy-wheels",
              "title": "R17 Tomahawk Hub Design Alloy Wheels",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-zs-ev/gallery/tomahawk-alloy-wheels.webp"
          },
          {
              "id": "led-tail-lamps",
              "title": "Signature LED Tail Lamps",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-zs-ev/gallery/led-tail-lamps.webp"
          },
          {
              "id": "panoramic-skyroof",
              "title": "Dual-Pane Panoramic Skyroof",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-zs-ev/gallery/panoramic-skyroof.webp"
          },
          {
              "id": "dark-grey-interiors",
              "title": "Plush Dual-Tone Dark Grey & Ivory Cabin",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-zs-ev/gallery/dark-grey-interiors.webp"
          },
          {
              "id": "hd-touchscreen-10inch",
              "title": "10.1-inch HD Touchscreen with Wireless CarPlay",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-zs-ev/gallery/hd-touchscreen-10inch.webp"
          },
          {
              "id": "digital-cluster",
              "title": "7-inch Full Digital LCD Driver Cluster",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-zs-ev/gallery/digital-cluster.webp"
          },
          {
              "id": "rotary-drive-dial",
              "title": "Rotary Gear Selector, 3 Drive Modes & 3 KERS Levels",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-zs-ev/gallery/rotary-drive-dial.webp"
          },
          {
              "id": "six-airbags-safety",
              "title": "6 Airbags Standard & 5-Star Safety Architecture",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-zs-ev/gallery/six-airbags-safety.webp"
          },
          {
              "id": "360-around-view-camera",
              "title": "360° Around View HD Camera",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-zs-ev/gallery/360-around-view-camera.webp"
          },
          {
              "id": "level2-adas-suite",
              "title": "17 Autonomous Level-2 ADAS Features",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-zs-ev/gallery/level2-adas-suite.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "50.3 kWh Prismatic Li-Ion Battery (IP69K + ASIL-D) + PMSM Motor (176 PS, 280 Nm, 461 km Range)"
          ],
          "transmissions": [
              "Single-Speed Automatic Electric Drive (3 Drive Modes + 3 KERS Regeneration Levels)"
          ],
          "dimensions": "4323 mm L × 1809 mm W × 1649 mm H",
          "wheelbase": "2585 mm",
          "fuelTank": "50.3 kWh (50 kW DC Fast Charge: 0-80% in 60 Mins)",
          "seatingCapacity": "5 Seater"
      },
      "variants": [
          {
              "name": "Executive 50.3 kWh",
              "exShowroom": 1898000,
              "fuel": "Electric",
              "trans": "Automatic",
              "engine": "50.3 kWh Electric (176 PS)",
              "mileage": "461 km/charge",
              "isVFM": false,
              "keyFeatures": [
                  "Full 50.3 kWh Battery with 461 km Range & 176 PS Motor",
                  "6 Airbags, All-4 Disc Brakes, ESP, Hill Hold & Hill Descent Control",
                  "Full LED Hawkeye Headlamps, LED Tail Lamps & R17 Tomahawk Alloy Wheels",
                  "10.1-inch HD Touchscreen with Wireless Apple CarPlay & Android Auto",
                  "7-inch Digital Cluster, Rear View Camera & Push Button Start"
              ]
          },
          {
              "name": "Excite Pro 50.3 kWh",
              "exShowroom": 1998000,
              "fuel": "Electric",
              "trans": "Automatic",
              "engine": "50.3 kWh Electric (176 PS)",
              "mileage": "461 km/charge",
              "isVFM": true,
              "vfmBadge": "Best Value Panoramic EV SUV",
              "keyFeatures": [
                  "Dual-Pane Panoramic Skyroof",
                  "75+ i-SMART Connected Car Features with Digital Bluetooth Key",
                  "10.1-inch Wireless Touchscreen & 6-Speaker Audio System",
                  "Electronic Parking Brake with Auto Hold & 3 Steering Modes",
                  "6 Airbags & Rear AC Vents"
              ]
          },
          {
              "name": "Exclusive Plus 50.3 kWh",
              "exShowroom": 2425000,
              "fuel": "Electric",
              "trans": "Automatic",
              "engine": "50.3 kWh Electric (176 PS)",
              "mileage": "461 km/charge",
              "isVFM": false,
              "keyFeatures": [
                  "360° Around View HD Camera & Blind Spot Detection / Rear Cross Traffic Alert",
                  "6-Way Power Adjustable Driver Seat & Wireless Phone Charger",
                  "Dual-Pane Panoramic Skyroof & PM 2.5 Air Filter",
                  "Power-Folding Heated ORVMs & Auto Headlamps with Rain-Sensing Wipers",
                  "Optional Dual-Tone Ivory Interior Theme"
              ]
          },
          {
              "name": "Essence 50.3 kWh (ADAS)",
              "exShowroom": 2575000,
              "fuel": "Electric",
              "trans": "Automatic",
              "engine": "50.3 kWh Electric (176 PS)",
              "mileage": "461 km/charge",
              "isVFM": false,
              "keyFeatures": [
                  "17 Autonomous Level-2 ADAS Features (Traffic Jam Assist, Adaptive Cruise, Lane Keep)",
                  "Dual-Pane Panoramic Skyroof, 360° HD Camera & 6 Airbags",
                  "50.3 kWh Battery with 461 km Range & 7.4 kW AC Home Fast Charger",
                  "Wireless Charger, 6-Way Power Seat & Digital Bluetooth Key",
                  "MG e-Shield 8-Year / 1.5 Lakh km Battery Warranty"
              ]
          }
      ]
  },
  {
      "id": "mg-majestor",
      "name": "MG Majestor (Gloster Next-Gen)",
      "brand": "MG Motor",
      "tagline": "India's Tallest, Widest & Longest D+ Flagship 4x4 SUV with M-Hub 10 Off-Road Modes, Triple Diff-Locks & JBL Studio 12 Audio",
      "launchDate": "2025-2026 Flagship",
      "bodyType": "SUV",
      "fuelTypes": [
          "Diesel"
      ],
      "priceRange": "₹39.99 - ₹45.99 Lakh",
      "minPrice": 3999000,
      "maxPrice": 4599000,
      "safetyRating": "5.0 ★ (High-Tensile Ladder Frame + 6 Airbags + Level-2 ADAS)",
      "groundClearance": "219 mm (810 mm Water Wading)",
      "bootSpace": "343 Litres (Up to 1350L 3rd Row Folded)",
      "waitingPeriod": "4 - 6 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/mg-majestor/colors/metal-black.webp",
      "summary": "The MG Majestor (succeeding the Gloster as India's largest D+ SUV) combines a 216 PS 2.0L Twin-Turbo Diesel engine and 8-Speed ZF Automatic with M-Hub 4x4 terrain management (10 Off-Road Modes, M-Crawl, Front/Center/Rear Differential Locks, 810 mm water wading) and the M-Lounge luxury cabin featuring Multi-Mode Massage & Ventiluxe seats, Galaxy View Panoramic Roof, and 12-Speaker JBL Studio Sound.",
      "colors": [
          {
              "id": "metal-black",
              "name": "Metal Black",
              "hex": "#181A1D",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-majestor/colors/metal-black.webp"
          },
          {
              "id": "pearl-white",
              "name": "Pearl White",
              "hex": "#F2F3F5",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-majestor/colors/pearl-white.webp"
          },
          {
              "id": "concrete-grey",
              "name": "Concrete Grey",
              "hex": "#8B9095",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-majestor/colors/concrete-grey.webp"
          },
          {
              "id": "metal-ash",
              "name": "Metal Ash",
              "hex": "#54585C",
              "image": "https://ik.imagekit.io/2908vvlod/cars/mg-majestor/colors/metal-ash.webp"
          }
      ],
      "gallery": [
          {
              "id": "mosaic-matrix-grille",
              "title": "Commanding Mosaic Matrix Front Grille",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-majestor/gallery/mosaic-matrix-grille.webp"
          },
          {
              "id": "dragon-eye-drls",
              "title": "Dragon Eye LED DRLs with Tri-Beam Headlights",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-majestor/gallery/dragon-eye-drls.webp"
          },
          {
              "id": "dual-shade-alloys",
              "title": "R19 Dual-Shade Machined Alloy Wheels",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-majestor/gallery/dual-shade-alloys.webp"
          },
          {
              "id": "connected-tail-lamps",
              "title": "Full-Width Connected LED Tail Lamps & Twin Exhausts",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-majestor/gallery/connected-tail-lamps.webp"
          },
          {
              "id": "mlounge-galaxy-roof",
              "title": "M-Lounge Cabin with Galaxy View Panoramic Roof",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-majestor/gallery/mlounge-galaxy-roof.webp"
          },
          {
              "id": "massage-ventiluxe-seats",
              "title": "Multi-Mode Massage & Ventiluxe Heated/Cooled Seats",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-majestor/gallery/massage-ventiluxe-seats.webp"
          },
          {
              "id": "jbl-studio-12-sound",
              "title": "JBL Studio 12-Speaker Surround Audio System",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-majestor/gallery/jbl-studio-12-sound.webp"
          },
          {
              "id": "ambient-lighting-64",
              "title": "64-Color Rhythmic Ambient Cabin Lighting",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-majestor/gallery/ambient-lighting-64.webp"
          },
          {
              "id": "dual-wireless-charging",
              "title": "Dual 50W Wireless Chargers & Column Gear Shifter",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-majestor/gallery/dual-wireless-charging.webp"
          },
          {
              "id": "digital-cockpit-screens",
              "title": "Dual 12.3-inch HD Screens with i-SMART 2.0",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-majestor/gallery/digital-cockpit-screens.webp"
          },
          {
              "id": "ladder-frame-chassis",
              "title": "High-Tensile Ladder-Frame Chassis & Triple Diff-Locks",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-majestor/gallery/ladder-frame-chassis.webp"
          },
          {
              "id": "level2-adas-360-cam",
              "title": "Level-2 ADAS Suite & 360° HD Off-Road Camera",
              "url": "https://ik.imagekit.io/2908vvlod/cars/mg-majestor/gallery/level2-adas-360-cam.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "2.0L Twin-Turbocharged Diesel (216 PS @ 4000 rpm, 478.5 Nm @ 1500-2400 rpm)"
          ],
          "transmissions": [
              "8-Speed ZF Torque Converter Automatic with Column Shifter (4x2 & M-Hub 4x4 with 10 Modes)"
          ],
          "dimensions": "5046 mm L × 2016 mm W × 1876 mm H",
          "wheelbase": "2950 mm",
          "fuelTank": "75 Litres",
          "seatingCapacity": "6 Seater (Captain) & 7 Seater"
      },
      "variants": [
          {
              "name": "Savvy 4x2 7-Seater 2.0 Twin-Turbo AT",
              "exShowroom": 3999000,
              "fuel": "Diesel",
              "trans": "Automatic",
              "engine": "2.0L Twin-Turbo Diesel (216 PS / 478.5 Nm)",
              "mileage": "13.92 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "India's Largest D+ SUV (5046 mm Length, 2950 mm Wheelbase)",
                  "Dual 12.3-inch M-Lounge Displays with i-SMART 2.0 (75+ Features)",
                  "Galaxy View Panoramic Sunroof & 12-Way Powered Front Seats",
                  "Level-2 ADAS (Lane Keep, Adaptive Cruise, AEB) & 360° HD Camera",
                  "JBL Studio 12-Speaker Audio, Dual Wireless Chargers & 6 Airbags"
              ]
          },
          {
              "name": "Savvy 4x2 6-Seater (Captain) 2.0 Twin-Turbo AT",
              "exShowroom": 4049000,
              "fuel": "Diesel",
              "trans": "Automatic",
              "engine": "2.0L Twin-Turbo Diesel (216 PS / 478.5 Nm)",
              "mileage": "13.92 kmpl",
              "isVFM": true,
              "vfmBadge": "Ultimate Chauffeur Luxury SUV",
              "keyFeatures": [
                  "2nd-Row Luxury Captain Seats with Individual Armrests",
                  "Multi-Mode Massage & Ventiluxe Heated/Ventilated Front Seats",
                  "64-Color Ambient Lighting, 3-Zone Automatic Climate Control & PM 2.5 Purifier",
                  "Galaxy View Panoramic Roof & Hands-Free Powered Tailgate",
                  "Level-2 ADAS & JBL Studio 12-Speaker Surround Sound"
              ]
          },
          {
              "name": "Savvy 4x4 7-Seater 2.0 Twin-Turbo AT (M-Hub)",
              "exShowroom": 4549000,
              "fuel": "Diesel",
              "trans": "Automatic",
              "engine": "2.0L Twin-Turbo Diesel (216 PS / 478.5 Nm)",
              "mileage": "12.35 kmpl",
              "isVFM": true,
              "vfmBadge": "Flagship 4x4 Off-Road King",
              "keyFeatures": [
                  "M-Hub 4x4 System with 10 Off-Road Modes (Rock, Sand, Mud, Snow, Normal)",
                  "Front, Center & Rear Differential Locks + M-Crawl Low-Speed Off-Road Cruise",
                  "810 mm Water Wading Capacity & High-Tensile Ladder-Frame Chassis",
                  "Multi-Mode Massage & Ventiluxe Seats, JBL Studio 12 Audio & Galaxy Roof",
                  "Autonomous Level-2 ADAS & 360° Transparent Chassis View Camera"
              ]
          },
          {
              "name": "Savvy 4x4 6-Seater (Captain) 2.0 Twin-Turbo AT (M-Hub)",
              "exShowroom": 4599000,
              "fuel": "Diesel",
              "trans": "Automatic",
              "engine": "2.0L Twin-Turbo Diesel (216 PS / 478.5 Nm)",
              "mileage": "12.35 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "6-Seater Executive Captain Chairs + Full M-Hub 4x4 Hardware",
                  "Triple Differential Locks, M-Crawl & 10 Terrain Modes",
                  "Multi-Mode Massage Seats, 64-Color Ambient Lighting & JBL Studio 12 Sound",
                  "Dual 12.3-inch Screens, Dual Wireless Chargers & Column Shifter",
                  "Level-2 ADAS, 6 Airbags & Roll Movement Intervention"
              ]
          }
      ]
  },
  {
      "id": "skoda-kylaq",
      "name": "Škoda Kylaq",
      "brand": "Skoda",
      "tagline": "India's 5-Star Bharat NCAP Compact SUV with 1.0L TSI Turbo, 446L Boot Space & Ventilated Electric Seats",
      "launchDate": "2025",
      "bodyType": "SUV",
      "fuelTypes": [
          "Petrol"
      ],
      "priceRange": "₹7.89 - ₹14.40 Lakh",
      "minPrice": 789000,
      "maxPrice": 1440000,
      "safetyRating": "5.0 ★ (Bharat NCAP 5-Star – Adult 30.88/32, Child 45.00/49)",
      "groundClearance": "189 mm",
      "bootSpace": "446 Litres",
      "waitingPeriod": "4 - 8 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/skoda-kylaq/colors/olive-gold.webp",
      "summary": "Built on the MQB-A0-IN platform, the Škoda Kylaq brings authentic European driving dynamics to the sub-4m SUV segment with a punchy 115 PS 1.0L TSI engine, segment-best 446-litre boot space, 5-star Bharat NCAP safety with 25+ standard safety features including 6 airbags, and segment-first 6-way electrically adjustable ventilated front seats.",
      "colors": [
          {
              "id": "olive-gold",
              "name": "Olive Gold",
              "hex": "#7D8B24",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-kylaq/colors/olive-gold.webp"
          },
          {
              "id": "tornado-red",
              "name": "Tornado Red",
              "hex": "#B51822",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-kylaq/colors/tornado-red.webp"
          },
          {
              "id": "cherry-red",
              "name": "Cherry Red",
              "hex": "#640015",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-kylaq/colors/cherry-red.webp"
          },
          {
              "id": "lava-blue",
              "name": "Lava Blue",
              "hex": "#135D7D",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-kylaq/colors/lava-blue.webp"
          },
          {
              "id": "deep-black",
              "name": "Deep Black",
              "hex": "#0A0809",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-kylaq/colors/deep-black.webp"
          },
          {
              "id": "candy-white",
              "name": "Candy White",
              "hex": "#F2F2F2",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-kylaq/colors/candy-white.webp"
          },
          {
              "id": "carbon-steel",
              "name": "Carbon Steel",
              "hex": "#5B5E63",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-kylaq/colors/carbon-steel.webp"
          },
          {
              "id": "brilliant-silver",
              "name": "Brilliant Silver",
              "hex": "#C1C2BD",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-kylaq/colors/brilliant-silver.webp"
          }
      ],
      "gallery": [
          {
              "id": "modern-solid-front",
              "title": "Modern Solid 3D Glossy Black Grille & Split LED Projector Headlamps",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kylaq/gallery/modern-solid-front.webp"
          },
          {
              "id": "commanding-suv-stance",
              "title": "Commanding Sub-4m SUV Profile with 189 mm Ground Clearance",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kylaq/gallery/commanding-suv-stance.webp"
          },
          {
              "id": "t-shaped-led-taillights",
              "title": "T-Shaped Crystalline LED Tail Lamps & 3D Rear Diffuser",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kylaq/gallery/t-shaped-led-taillights.webp"
          },
          {
              "id": "prestige-plus-exterior",
              "title": "Škoda Kylaq Prestige+ Top Trim with R17 Dual-Tone Alloys",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kylaq/gallery/prestige-plus-exterior.webp"
          },
          {
              "id": "sportline-edition",
              "title": "Škoda Kylaq Sportline with Blacked-Out Styling Accents",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kylaq/gallery/sportline-edition.webp"
          },
          {
              "id": "boot-space-446l",
              "title": "Segment-Leading 446-Litre Boot Space (1,265L Expanded)",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kylaq/gallery/boot-space-446l.webp"
          },
          {
              "id": "modern-cabin-dashboard",
              "title": "Modern Dual-Screen Cabin with 25.6 cm Infotainment & Digital Cockpit",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kylaq/gallery/modern-cabin-dashboard.webp"
          },
          {
              "id": "ventilated-front-seats",
              "title": "Ventilated Front Seats for Driver & Co-Driver",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kylaq/gallery/ventilated-front-seats.webp"
          },
          {
              "id": "electric-seats-6way",
              "title": "Segment-First 6-Way Electrically Adjustable Front Seats",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kylaq/gallery/electric-seats-6way.webp"
          },
          {
              "id": "ambient-cabin-lighting",
              "title": "Soothing Cabin Ambient Lighting & Climatronic Auto AC",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kylaq/gallery/ambient-cabin-lighting.webp"
          },
          {
              "id": "rear-armrest-comfort",
              "title": "Spacious Rear Bench with Center Armrest & Cupholders",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kylaq/gallery/rear-armrest-comfort.webp"
          },
          {
              "id": "six-airbags-safety",
              "title": "6 Airbags Standard & 5-Star Bharat NCAP Protection",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kylaq/gallery/six-airbags-safety.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "1.0L TSI Turbo Petrol (115 PS @ 5000-5500 rpm, 178 Nm @ 1750-4000 rpm)"
          ],
          "transmissions": [
              "6-Speed Manual Transmission",
              "6-Speed Torque Converter Automatic (with Paddle Shifters)"
          ],
          "dimensions": "3995 mm L × 1783 mm W × 1619 mm H",
          "wheelbase": "2566 mm",
          "fuelTank": "45 Litres",
          "seatingCapacity": "5 Seater"
      },
      "variants": [
          {
              "name": "Classic 1.0 TSI MT",
              "exShowroom": 789000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "19.68 kmpl",
              "isVFM": true,
              "vfmBadge": "Unbeatable Turbo Entry Price",
              "keyFeatures": [
                  "6 Airbags, ESC, Traction Control, Multi-Collision Brake & 25+ Standard Safety Features",
                  "Škoda Crystalline LED Headlamps, LED DRLs & LED Tail Lamps",
                  "16-inch Steel Wheels with Full Wheel Covers & Black Roof Rails",
                  "All-4 Power Windows, Rear AC Vents & Tilt/Telescopic Steering",
                  "5-Star Bharat NCAP Safety Rating"
              ]
          },
          {
              "name": "Classic+ 1.0 TSI MT",
              "exShowroom": 859000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "19.68 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Electric Sunroof with Anti-Pinch Technology",
                  "Cruise Control & Auto-Dimming Inside Rear-View Mirror (IRVM)",
                  "Automatic Headlamps & Rain-Sensing Wipers",
                  "4 Speakers + Steering-Mounted Controls"
              ]
          },
          {
              "name": "Signature 1.0 TSI MT",
              "exShowroom": 959000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "19.68 kmpl",
              "isVFM": true,
              "vfmBadge": "Best Sub-10L Value Package",
              "keyFeatures": [
                  "16-inch Silver Alloy Wheels & Tyre Pressure Monitoring System (TPMS)",
                  "17.7 cm Škoda Touch Infotainment System with Android Auto & Apple CarPlay",
                  "Cruise Control, Rear Defogger, Cooled Glovebox & Rear Parcel Tray",
                  "Dual-Tone Fabric Seats, Leather-Wrapped Steering & Chrome Interior Accents",
                  "USB-C Fast Charging Ports (Front & Rear)"
              ]
          },
          {
              "name": "Signature 1.0 TSI AT",
              "exShowroom": 1059000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "19.05 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Smooth 6-Speed Torque Converter Automatic with Hill Hold Control",
                  "16-inch Alloy Wheels, TPMS & Cruise Control",
                  "17.7 cm Touchscreen, 6 Speakers & Rear AC Vents",
                  "6 Airbags & Electronic Differential Lock (EDS)"
              ]
          },
          {
              "name": "Signature+ 1.0 TSI MT",
              "exShowroom": 1140000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "19.68 kmpl",
              "isVFM": true,
              "vfmBadge": "Best Big-Screen & Tech Trim",
              "keyFeatures": [
                  "25.6 cm (10.1-inch) Infotainment with Wireless Apple CarPlay & Android Auto",
                  "20.32 cm (8-inch) Digital Instrument Cluster (Virtual Cockpit)",
                  "Climatronic Automatic Climate Control & Rear View Camera with Guidelines",
                  "Auto-Folding ORVMs, Shark Fin Antenna & 60:40 Split Rear Seats with Armrest",
                  "Cruise Control & Automatic Headlamps"
              ]
          },
          {
              "name": "Signature+ 1.0 TSI AT",
              "exShowroom": 1240000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "19.05 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "6-Speed Torque Converter AT with Steering Paddle Shifters",
                  "25.6 cm Touchscreen + 20.32 cm Digital Cockpit",
                  "Climatronic Auto AC, Rear Camera & Keyless Entry (KESSY)",
                  "Hill Hold Control & Auto-Folding ORVMs"
              ]
          },
          {
              "name": "Prestige 1.0 TSI MT",
              "exShowroom": 1335000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "19.68 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Electric Sunroof with Anti-Pinch & R17 Dual-Tone Alloy Wheels",
                  "Ventilated Leatherette Front Seats & Wireless Smartphone Charger",
                  "Škoda Crystalline LED Projector Headlamps with Cornering Fog Lamps",
                  "Auto-Dimming IRVM, Rear Wiper/Washer & Ambient Cabin Lighting"
              ]
          },
          {
              "name": "Prestige+ 1.0 TSI AT",
              "exShowroom": 1440000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "19.05 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "6-Way Electrically Adjustable & Ventilated Driver and Co-Driver Seats",
                  "6-Speed Torque Converter Automatic with Paddle Shifters",
                  "Electric Sunroof, R17 Dual-Tone Alloys & Crystalline LED Projector Headlamps",
                  "25.6 cm Infotainment, 20.32 cm Virtual Cockpit & Wireless Charger",
                  "5-Star Bharat NCAP Safety & 4-Year / 1,00,000 km Standard Warranty"
              ]
          }
      ]
  },
  {
      "id": "skoda-kushaq",
      "name": "Škoda Kushaq",
      "brand": "Skoda",
      "tagline": "5-Star Global NCAP European SUV with 1.0L & 1.5L TSI EVO, Panoramic Sunroof & Segment-First Rear Seat Massage",
      "launchDate": "2026 (New Kushaq)",
      "bodyType": "SUV",
      "fuelTypes": [
          "Petrol"
      ],
      "priceRange": "₹10.89 - ₹18.79 Lakh",
      "minPrice": 1089000,
      "maxPrice": 1879000,
      "safetyRating": "5.0 ★ (Global NCAP 5-Star Adult & 5-Star Child Safety)",
      "groundClearance": "188 mm",
      "bootSpace": "385 Litres",
      "waitingPeriod": "2 - 5 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/skoda-kushaq/colors/lava-blue.webp",
      "summary": "The refreshed Škoda Kushaq raises the mid-size SUV benchmark with a 5-Star Global NCAP safety rating (both Adult & Child), an illuminated front grille light band, connected LED taillights with illuminated Škoda lettering, standard electric sunroof across the range (panoramic sunroof on top trims), segment-first rear-seat massagers, an 8-speed automatic torque converter on the 1.0 TSI, and the 150 PS 1.5 TSI EVO with Active Cylinder Technology (ACT) & 7-speed DSG.",
      "colors": [
          {
              "id": "lava-blue",
              "name": "Lava Blue",
              "hex": "#1A354A",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-kushaq/colors/lava-blue.webp"
          },
          {
              "id": "shimla-green",
              "name": "Shimla Green",
              "hex": "#6C7261",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-kushaq/colors/shimla-green.webp"
          },
          {
              "id": "cherry-red",
              "name": "Cherry Red",
              "hex": "#640015",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-kushaq/colors/cherry-red.webp"
          },
          {
              "id": "candy-white",
              "name": "Candy White",
              "hex": "#FCFAF1",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-kushaq/colors/candy-white.webp"
          },
          {
              "id": "carbon-steel",
              "name": "Carbon Steel",
              "hex": "#888284",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-kushaq/colors/carbon-steel.webp"
          },
          {
              "id": "deep-black",
              "name": "Deep Black",
              "hex": "#101010",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-kushaq/colors/deep-black.webp"
          },
          {
              "id": "steel-grey",
              "name": "Steel Grey",
              "hex": "#B8C3BC",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-kushaq/colors/steel-grey.webp"
          },
          {
              "id": "brilliant-silver",
              "name": "Brilliant Silver",
              "hex": "#DFE0E2",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-kushaq/colors/brilliant-silver.webp"
          }
      ],
      "gallery": [
          {
              "id": "illuminated-grille-front",
              "title": "Bold New Grille with Sporty Red Accents & Illuminated Light Band",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kushaq/gallery/illuminated-grille-front.webp"
          },
          {
              "id": "connected-led-taillights",
              "title": "Connected LED Taillights with Illuminated Škoda Lettering",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kushaq/gallery/connected-led-taillights.webp"
          },
          {
              "id": "monte-carlo-flagship",
              "title": "Škoda Kushaq Monte Carlo 1.5 TSI DSG Edition",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kushaq/gallery/monte-carlo-flagship.webp"
          },
          {
              "id": "prestige-trim-exterior",
              "title": "Škoda Kushaq Prestige with R17 Dual-Tone Alloy Wheels",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kushaq/gallery/prestige-trim-exterior.webp"
          },
          {
              "id": "crystalline-led-headlights",
              "title": "All-New Sharp Crystalline LED Projector Headlights",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kushaq/gallery/crystalline-led-headlights.webp"
          },
          {
              "id": "standard-alloy-wheels",
              "title": "Sporty Diamond-Cut Alloy Wheels & All-4 Disc Brakes (1.5 TSI)",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kushaq/gallery/standard-alloy-wheels.webp"
          },
          {
              "id": "panoramic-sunroof",
              "title": "Panoramic Sunroof on Top Trims (Electric Sunroof Standard)",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kushaq/gallery/panoramic-sunroof.webp"
          },
          {
              "id": "rear-seat-massage",
              "title": "Segment-First Rear Seat Massage Cushion for Long Journeys",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kushaq/gallery/rear-seat-massage.webp"
          },
          {
              "id": "infotainment-256cm",
              "title": "25.6 cm Touchscreen with Wireless Apple CarPlay, Android Auto & AI Assistant",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kushaq/gallery/infotainment-256cm.webp"
          },
          {
              "id": "digital-cockpit-26cm",
              "title": "26.03 cm Virtual Cockpit with Turn-by-Turn Navigation",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kushaq/gallery/digital-cockpit-26cm.webp"
          },
          {
              "id": "tsi-dsg-transmission",
              "title": "1.5 TSI EVO with 7-Speed DSG & Active Cylinder Technology",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kushaq/gallery/tsi-dsg-transmission.webp"
          },
          {
              "id": "global-ncap-5star-safety",
              "title": "5-Star Global NCAP Safety with 6 Airbags & Up to 40 Safety Features",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kushaq/gallery/global-ncap-5star-safety.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "1.0L TSI Turbo Petrol (115 PS @ 5000-5500 rpm, 178 Nm @ 1750-4500 rpm)",
              "1.5L TSI EVO Turbo Petrol with Active Cylinder Technology (150 PS @ 5000-6000 rpm, 250 Nm @ 1600-3500 rpm)"
          ],
          "transmissions": [
              "6-Speed Manual Transmission",
              "8-Speed Torque Converter Automatic (1.0 TSI)",
              "7-Speed DSG Dual-Clutch Automatic (1.5 TSI EVO)"
          ],
          "dimensions": "4225 mm L × 1760 mm W × 1612 mm H",
          "wheelbase": "2651 mm",
          "fuelTank": "50 Litres",
          "seatingCapacity": "5 Seater"
      },
      "variants": [
          {
              "name": "Classic+ 1.0 TSI MT",
              "exShowroom": 1089000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "19.76 kmpl",
              "isVFM": true,
              "vfmBadge": "Standard Sunroof & Alloys",
              "keyFeatures": [
                  "Electric Sunroof & Alloy Wheels Now Standard from Base Variant",
                  "6 Airbags, ESC, Multi-Collision Brake & 5-Star Global NCAP Safety",
                  "All-New LED Headlamps, Connected LED Tail Lamps & Rear Wiper/Defogger",
                  "17.7 cm Touchscreen Infotainment, Rear Parking Sensors & Auto AC"
              ]
          },
          {
              "name": "Signature 1.0 TSI MT",
              "exShowroom": 1289000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "19.76 kmpl",
              "isVFM": true,
              "vfmBadge": "Best Value Mid-Trim",
              "keyFeatures": [
                  "25.6 cm (10.1-inch) Infotainment with Wireless Apple CarPlay & Android Auto",
                  "Cruise Control, Rear View Camera & Climatronic Automatic Climate Control",
                  "R16 Grus Alloy Wheels, Shark Fin Antenna & 60:40 Split Rear Seats",
                  "6-Speaker Škoda Sound System & Ambient Cabin Lighting"
              ]
          },
          {
              "name": "Signature 1.0 TSI AT",
              "exShowroom": 1399000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "18.09 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "All-New 8-Speed Torque Converter Automatic with Paddle Shifters",
                  "Electric Sunroof, 25.6 cm Touchscreen & Cruise Control",
                  "Hill Hold Control, TPMS & Auto-Folding ORVMs",
                  "6 Airbags & 25+ Active/Passive Safety Features"
              ]
          },
          {
              "name": "Sportline 1.0 TSI AT",
              "exShowroom": 1499000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "18.09 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Blacked-Out Grille, R17 Black Vega Alloy Wheels & Sportline Badging",
                  "Electric Sunroof, Aluminium Pedals & Dual-Tone Sporty Cabin",
                  "25.6 cm Touchscreen, Rain-Sensing Wipers & Auto-Dimming IRVM"
              ]
          },
          {
              "name": "Sportline 1.5 TSI DSG",
              "exShowroom": 1689000,
              "fuel": "Petrol",
              "trans": "Automatic (DSG)",
              "engine": "1.5L TSI EVO (150 PS)",
              "mileage": "18.86 kmpl",
              "isVFM": true,
              "vfmBadge": "Enthusiast 150 PS Value Pick",
              "keyFeatures": [
                  "150 PS / 250 Nm 1.5L TSI EVO with Active Cylinder Technology (ACT)",
                  "Lightning-Fast 7-Speed DSG Dual-Clutch Automatic & All-4 Disc Brakes",
                  "R17 Glossy Black Alloy Wheels, Black Exterior Pack & Electric Sunroof"
              ]
          },
          {
              "name": "Prestige 1.0 TSI AT",
              "exShowroom": 1639000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "18.09 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Panoramic Sunroof, Illuminated Front Grille Band & Rear Seat Massagers",
                  "6-Way Electrically Adjustable & Ventilated Front Leatherette Seats",
                  "26.03 cm Virtual Cockpit with Navigation & Škoda Subwoofer Audio",
                  "Crystalline LED Projector Headlamps & KESSY Keyless Entry"
              ]
          },
          {
              "name": "Prestige 1.5 TSI DSG",
              "exShowroom": 1839000,
              "fuel": "Petrol",
              "trans": "Automatic (DSG)",
              "engine": "1.5L TSI EVO (150 PS)",
              "mileage": "18.86 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "150 PS 1.5L TSI EVO + 7-Speed DSG + All-4 Wheel Disc Brakes",
                  "Panoramic Sunroof, Rear Seat Massage & Electric Ventilated Front Seats",
                  "26.03 cm Digital Cockpit + 25.6 cm Touchscreen with Google Cloud AI Assistant",
                  "Up to 40 Active & Passive Safety Features"
              ]
          },
          {
              "name": "Monte Carlo 1.5 TSI DSG",
              "exShowroom": 1879000,
              "fuel": "Petrol",
              "trans": "Automatic (DSG)",
              "engine": "1.5L TSI EVO (150 PS)",
              "mileage": "18.86 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Signature Monte Carlo Red Grille Slats, Red Brake Calipers & R17 Vega Alloys",
                  "Ruby Red & Black Ventilated Electric Leatherette Seats with Monte Carlo Embossing",
                  "Ruby Red Themed 26.03 cm Virtual Cockpit & Panoramic Sunroof",
                  "150 PS 1.5L TSI EVO with 7-Speed DSG & All-4 Disc Brakes"
              ]
          }
      ]
  },
  {
      "id": "skoda-slavia",
      "name": "Škoda Slavia",
      "brand": "Skoda",
      "tagline": "5-Star Global NCAP Luxury European Sedan with 150 PS 1.5 TSI DSG, 521L Boot, 360° Camera & Rear-Seat Massagers",
      "launchDate": "2026 (New Slavia)",
      "bodyType": "Sedan",
      "fuelTypes": [
          "Petrol"
      ],
      "priceRange": "₹9.99 - ₹18.69 Lakh",
      "minPrice": 999900,
      "maxPrice": 1869000,
      "safetyRating": "5.0 ★ (Global NCAP 5-Star Adult & 5-Star Child Safety)",
      "groundClearance": "179 mm",
      "bootSpace": "521 Litres",
      "waitingPeriod": "2 - 5 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/skoda-slavia/colors/lava-blue.webp",
      "summary": "The new Škoda Slavia combines timeless European coupé-inspired sedan elegance with a 5-Star Global NCAP safety rating, class-leading 179 mm ground clearance and 521-litre boot space, 360° area-view camera, sequential LED tail lamps, ventilated electric front seats, rear-seat massagers, an 8-speed torque converter AT on the 1.0 TSI, and the 150 PS 1.5 TSI EVO with 7-speed DSG.",
      "colors": [
          {
              "id": "lava-blue",
              "name": "Lava Blue",
              "hex": "#135D7D",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-slavia/colors/lava-blue.webp"
          },
          {
              "id": "cherry-red",
              "name": "Cherry Red",
              "hex": "#640015",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-slavia/colors/cherry-red.webp"
          },
          {
              "id": "arctic-silver",
              "name": "Arctic Silver",
              "hex": "#B8C3BC",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-slavia/colors/arctic-silver.webp"
          },
          {
              "id": "cappuccino-beige",
              "name": "Cappuccino Beige",
              "hex": "#A8A49E",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-slavia/colors/cappuccino-beige.webp"
          },
          {
              "id": "shimla-green",
              "name": "Shimla Green",
              "hex": "#6C7261",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-slavia/colors/shimla-green.webp"
          },
          {
              "id": "steel-grey",
              "name": "Steel Grey",
              "hex": "#6F7477",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-slavia/colors/steel-grey.webp"
          },
          {
              "id": "candy-white",
              "name": "Candy White",
              "hex": "#FCFAF1",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-slavia/colors/candy-white.webp"
          },
          {
              "id": "carbon-steel",
              "name": "Carbon Steel",
              "hex": "#5B5E63",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-slavia/colors/carbon-steel.webp"
          },
          {
              "id": "deep-black",
              "name": "Deep Black",
              "hex": "#0A0809",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-slavia/colors/deep-black.webp"
          },
          {
              "id": "brilliant-silver",
              "name": "Brilliant Silver",
              "hex": "#DFE0E2",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-slavia/colors/brilliant-silver.webp"
          }
      ],
      "gallery": [
          {
              "id": "slavia-hero-exterior",
              "title": "Refreshed New Škoda Slavia European Sedan Stance",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-slavia/gallery/slavia-hero-exterior.webp"
          },
          {
              "id": "monte-carlo-grille",
              "title": "Sporty Red Grille Stripes & Monte Carlo Badging",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-slavia/gallery/monte-carlo-grille.webp"
          },
          {
              "id": "sequential-led-taillamps",
              "title": "New Crystalline LED Tail Lamps with Sequential Turn Indicators",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-slavia/gallery/sequential-led-taillamps.webp"
          },
          {
              "id": "new-led-headlamps",
              "title": "New Crystalline LED Projector Headlamps & Fog Lamps",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-slavia/gallery/new-led-headlamps.webp"
          },
          {
              "id": "red-caliper-alloys",
              "title": "R16 Black Alloy Wheels Paired with Sporty Red Brake Calipers",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-slavia/gallery/red-caliper-alloys.webp"
          },
          {
              "id": "monte-carlo-edition",
              "title": "Škoda Slavia Monte Carlo 1.5 TSI DSG Flagship",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-slavia/gallery/monte-carlo-edition.webp"
          },
          {
              "id": "area-view-360-camera",
              "title": "360° Area View Camera System for Effortless Parking",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-slavia/gallery/area-view-360-camera.webp"
          },
          {
              "id": "virtual-cockpit-26cm",
              "title": "26.03 cm Virtual Cockpit with Turn-by-Turn Navigation",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-slavia/gallery/virtual-cockpit-26cm.webp"
          },
          {
              "id": "infotainment-google-ai",
              "title": "25.6 cm Touchscreen Infotainment with Google Cloud AI Assistant",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-slavia/gallery/infotainment-google-ai.webp"
          },
          {
              "id": "ventilated-electric-seats",
              "title": "6-Way Electrically Adjustable & Ventilated Front Leatherette Seats",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-slavia/gallery/ventilated-electric-seats.webp"
          },
          {
              "id": "rear-seat-massagers",
              "title": "Relaxing Rear-Seat Massagers with Executive Legroom",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-slavia/gallery/rear-seat-massagers.webp"
          },
          {
              "id": "global-ncap-5star-sedan",
              "title": "5-Star Global NCAP Safety with 6 Airbags Standard",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-slavia/gallery/global-ncap-5star-sedan.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "1.0L TSI Turbo Petrol (115 PS @ 5000-5500 rpm, 178 Nm @ 1750-4500 rpm)",
              "1.5L TSI EVO Turbo Petrol with Active Cylinder Technology (150 PS @ 5000-6000 rpm, 250 Nm @ 1600-3500 rpm)"
          ],
          "transmissions": [
              "6-Speed Manual Transmission",
              "8-Speed Torque Converter Automatic (1.0 TSI)",
              "7-Speed DSG Dual-Clutch Automatic (1.5 TSI EVO)"
          ],
          "dimensions": "4541 mm L × 1752 mm W × 1507 mm H",
          "wheelbase": "2651 mm",
          "fuelTank": "45 Litres",
          "seatingCapacity": "5 Seater"
      },
      "variants": [
          {
              "name": "Classic 1.0 TSI MT",
              "exShowroom": 999900,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "20.32 kmpl",
              "isVFM": true,
              "vfmBadge": "Sub-10L 5-Star Turbo Sedan",
              "keyFeatures": [
                  "6 Airbags, ESC, Multi-Collision Brake & 5-Star Global NCAP Safety Standard",
                  "179 mm SUV-Like Ground Clearance & Massive 521-Litre Boot Space",
                  "17.7 cm Touchscreen, LED DRLs, Rear Parking Sensors & Auto Engine Start-Stop"
              ]
          },
          {
              "name": "Classic+ 1.0 TSI MT",
              "exShowroom": 1099000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "20.32 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Electric Sunroof & R16 Alloy Wheels",
                  "Cruise Control, Rear View Camera & Automatic Headlamps",
                  "6 Airbags, TPMS & Hill Hold Control"
              ]
          },
          {
              "name": "Signature 1.0 TSI MT",
              "exShowroom": 1299000,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "20.32 kmpl",
              "isVFM": true,
              "vfmBadge": "Most Popular Balanced Trim",
              "keyFeatures": [
                  "25.6 cm (10.1-inch) Touchscreen with Wireless Apple CarPlay & Android Auto",
                  "Climatronic Auto AC, Cruise Control, Ambient Lighting & R16 Alloy Wheels",
                  "LED Tail Lamps, Chrome Window Garnish & 60:40 Split Rear Seats"
              ]
          },
          {
              "name": "Signature 1.0 TSI AT",
              "exShowroom": 1409000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "18.73 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "All-New 8-Speed Torque Converter Automatic with Paddle Shifters",
                  "25.6 cm Touchscreen, Climatronic Auto AC & Rear View Camera",
                  "Hill Hold Control, TPMS & 6 Airbags"
              ]
          },
          {
              "name": "Sportline 1.0 TSI AT",
              "exShowroom": 1499000,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "18.73 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Electric Sunroof, Glossy Black R16 Alloys & Blacked-Out Exterior Styling",
                  "Aluminium Pedals, Sporty Grey Fabric/Leatherette Cabin & Rain-Sensing Wipers",
                  "Crystalline LED Headlamps & Sequential LED Tail Lamps"
              ]
          },
          {
              "name": "Sportline 1.5 TSI DSG",
              "exShowroom": 1679000,
              "fuel": "Petrol",
              "trans": "Automatic (DSG)",
              "engine": "1.5L TSI EVO (150 PS)",
              "mileage": "19.36 kmpl",
              "isVFM": true,
              "vfmBadge": "150 PS Enthusiast Value Pick",
              "keyFeatures": [
                  "150 PS / 250 Nm 1.5L TSI EVO with Active Cylinder Technology (ACT)",
                  "7-Speed DSG Dual-Clutch Automatic & Sporty Black Exterior Package",
                  "Electric Sunroof, 25.6 cm Infotainment & Sequential LED Tail Lamps"
              ]
          },
          {
              "name": "Prestige 1.5 TSI DSG",
              "exShowroom": 1829000,
              "fuel": "Petrol",
              "trans": "Automatic (DSG)",
              "engine": "1.5L TSI EVO (150 PS)",
              "mileage": "19.36 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "360° Area View Camera, Rear-Seat Massagers & Electric Sunroof",
                  "6-Way Electrically Adjustable & Ventilated Front Leatherette Seats",
                  "26.03 cm Virtual Cockpit + 25.6 cm Touchscreen with Google Cloud AI Assistant",
                  "8-Speaker Škoda Sound System with Subwoofer & Footwell Illumination"
              ]
          },
          {
              "name": "Monte Carlo 1.5 TSI DSG",
              "exShowroom": 1869000,
              "fuel": "Petrol",
              "trans": "Automatic (DSG)",
              "engine": "1.5L TSI EVO (150 PS)",
              "mileage": "19.36 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Monte Carlo Red Grille Accents, Red Brake Calipers & Glossy Black Spoiler",
                  "Ruby Red & Black Ventilated Electric Seats with Monte Carlo Badging",
                  "360° Area View Camera, Rear-Seat Massagers & 26.03 cm Red-Themed Virtual Cockpit",
                  "150 PS 1.5L TSI EVO with 7-Speed DSG"
              ]
          }
      ]
  },
  {
      "id": "skoda-kodiaq",
      "name": "Škoda Kodiaq",
      "brand": "Skoda",
      "tagline": "All-New 2nd-Gen 4x4 Flagship European Luxury SUV with 204 PS 2.0L TSI, Smart Dials, 32.77 cm Screen & 9 Airbags",
      "launchDate": "2025 (All-New 2nd Gen)",
      "bodyType": "SUV",
      "fuelTypes": [
          "Petrol"
      ],
      "priceRange": "₹46.89 - ₹48.69 Lakh",
      "minPrice": 4689000,
      "maxPrice": 4869000,
      "safetyRating": "5.0 ★ (Euro NCAP 5-Star + 9 Airbags Standard)",
      "groundClearance": "190 mm",
      "bootSpace": "281 Litres (910L 5-Seat Mode)",
      "waitingPeriod": "3 - 6 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/skoda-kodiaq/colors/bronx-gold.webp",
      "summary": "The all-new second-generation Škoda Kodiaq brings Czech flagship luxury to India with a 204 PS / 320 Nm 2.0L TSI EVO engine, intelligent 4x4 all-wheel drive with 7-speed DSG, crystalline illuminated front grille, Dark Chrome D-pillar, Škoda Smart Dials with haptic rotary screens, a massive 32.77 cm (12.9-inch) freestanding infotainment display, 13-speaker 725W Canton sound system, Ergo pneumatic massaging front seats, and 9 airbags standard.",
      "colors": [
          {
              "id": "bronx-gold",
              "name": "Bronx Gold Metallic",
              "hex": "#7E754A",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-kodiaq/colors/bronx-gold.webp"
          },
          {
              "id": "race-blue",
              "name": "Race Blue Metallic",
              "hex": "#658FCB",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-kodiaq/colors/race-blue.webp"
          },
          {
              "id": "moon-white",
              "name": "Moon White Metallic",
              "hex": "#F5F5F5",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-kodiaq/colors/moon-white.webp"
          },
          {
              "id": "graphite-grey",
              "name": "Graphite Grey Metallic",
              "hex": "#405371",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-kodiaq/colors/graphite-grey.webp"
          },
          {
              "id": "magic-black",
              "name": "Magic Black Metallic",
              "hex": "#121A1C",
              "image": "https://ik.imagekit.io/2908vvlod/cars/skoda-kodiaq/colors/magic-black.webp"
          }
      ],
      "gallery": [
          {
              "id": "crystalline-illuminated-grille",
              "title": "TOP LED Matrix Crystalline Headlights & Horizontal Illuminated Grille Strip",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kodiaq/gallery/crystalline-illuminated-grille.webp"
          },
          {
              "id": "dark-chrome-d-pillar",
              "title": "Sleek Aerodynamic Profile with Signature Dark Chrome D-Pillar",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kodiaq/gallery/dark-chrome-d-pillar.webp"
          },
          {
              "id": "c-shaped-connected-taillamps",
              "title": "Unmistakable C-Shaped Connected LED Rear Lights with Animated Indicators",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kodiaq/gallery/c-shaped-connected-taillamps.webp"
          },
          {
              "id": "selection-lk-flagship",
              "title": "Škoda Kodiaq Selection L&K (Laurin & Klement) 4x4 Flagship",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kodiaq/gallery/selection-lk-flagship.webp"
          },
          {
              "id": "sportline-4x4-edition",
              "title": "Škoda Kodiaq Sportline 2.0 TSI 4x4 with Glossy Black Accents",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kodiaq/gallery/sportline-4x4-edition.webp"
          },
          {
              "id": "panoramic-sunroof-kodiaq",
              "title": "Expansive Two-Pane Electric Panoramic Sunroof",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kodiaq/gallery/panoramic-sunroof-kodiaq.webp"
          },
          {
              "id": "skoda-smart-dials",
              "title": "Innovative Škoda Smart Dials with 32 mm Digital Rotary Displays",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kodiaq/gallery/skoda-smart-dials.webp"
          },
          {
              "id": "infotainment-3277cm",
              "title": "32.77 cm (12.9-inch) Freestanding Touchscreen Infotainment",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kodiaq/gallery/infotainment-3277cm.webp"
          },
          {
              "id": "canton-sound-system",
              "title": "13-Speaker 725W Canton Surround Sound System with Subwoofer",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kodiaq/gallery/canton-sound-system.webp"
          },
          {
              "id": "three-row-7seater-cabin",
              "title": "Luxurious 3-Row 7-Seater Cabin with Cognac / Suedia Upholstery",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kodiaq/gallery/three-row-7seater-cabin.webp"
          },
          {
              "id": "flexible-boot-space",
              "title": "Versatile Split-Folding Luggage Compartment (Up to 2,035L)",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kodiaq/gallery/flexible-boot-space.webp"
          },
          {
              "id": "nine-airbags-park-assist",
              "title": "9 Airbags Standard, Intelligent Park Assist & 360° Area View",
              "url": "https://ik.imagekit.io/2908vvlod/cars/skoda-kodiaq/gallery/nine-airbags-park-assist.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "2.0L TSI EVO Turbo Petrol (204 PS / 150 kW @ 4500-6000 rpm, 320 Nm @ 1500-4400 rpm)"
          ],
          "transmissions": [
              "7-Speed DSG Dual-Clutch Automatic with Intelligent 4x4 All-Wheel Drive & Off-Road Mode"
          ],
          "dimensions": "4758 mm L × 1864 mm W × 1659 mm H",
          "wheelbase": "2791 mm",
          "fuelTank": "62 Litres",
          "seatingCapacity": "5 / 7 Seater"
      },
      "variants": [
          {
              "name": "Lounge 2.0 TSI 4x4 AT (5-Seater)",
              "exShowroom": 4689000,
              "fuel": "Petrol",
              "trans": "Automatic (DSG 4x4)",
              "engine": "2.0L TSI Turbo (204 PS)",
              "mileage": "14.86 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "204 PS / 320 Nm 2.0L TSI Engine with 7-Speed DSG & 4x4 All-Wheel Drive",
                  "9 Airbags, Multi-Collision Brake, Driver Attention Alert & Hill Descent Control",
                  "Grey Suedia & Fabric Lounge Interiors with 26.03 cm Virtual Cockpit",
                  "Škoda Smart Dials, Tri-Zone Climatronic AC & Panoramic Sunroof"
              ]
          },
          {
              "name": "Sportline 2.0 TSI 4x4 AT (7-Seater)",
              "exShowroom": 4689000,
              "fuel": "Petrol",
              "trans": "Automatic (DSG 4x4)",
              "engine": "2.0L TSI Turbo (204 PS)",
              "mileage": "14.86 kmpl",
              "isVFM": true,
              "vfmBadge": "Sporty Blacked-Out 7-Seater 4x4",
              "keyFeatures": [
                  "Glossy Black Grille, D-Pillar, Roof Rails & R18 Soira Anthracite Alloy Wheels",
                  "All-Black Suedia Sport Seats with Integrated Headrests & 3-Spoke Sport Steering",
                  "32.77 cm (12.9-inch) Infotainment Screen + 26.03 cm Virtual Cockpit + Smart Dials",
                  "13-Speaker 725W Canton Sound System, Panoramic Sunroof & Dual Wireless Phone Cooling Box",
                  "9 Airbags, TOP LED Matrix Headlamps & Electric Tailgate"
              ]
          },
          {
              "name": "Selection L&K 2.0 TSI 4x4 AT (7-Seater)",
              "exShowroom": 4869000,
              "fuel": "Petrol",
              "trans": "Automatic (DSG 4x4)",
              "engine": "2.0L TSI Turbo (204 PS)",
              "mileage": "14.86 kmpl",
              "isVFM": true,
              "vfmBadge": "Ultimate Luxury Flagship",
              "keyFeatures": [
                  "Illuminated Crystal Grille Strip & Exclusive R18 Belatrix Aero Alloy Wheels",
                  "Cognac Perforated Leather Ergo Seats with Pneumatic 10-Cushion Massage, Ventilation & Heating",
                  "360° Area View Camera, Intelligent Park Assist & Virtual Pedal Hands-Free Tailgate",
                  "32.77 cm Infotainment, Škoda Smart Dials & 13-Speaker 725W Canton Sound System",
                  "9 Airbags, Off-Road 4x4 Mode & 4-Year / 1,00,000 km Standard Warranty"
              ]
          }
      ]
  },
  {
      "id": "vw-taigun",
      "name": "Volkswagen Taigun",
      "brand": "Volkswagen",
      "tagline": "5-Star Global NCAP German-Engineered SUV with 1.0L & 1.5L TSI EVO, Panoramic Sunroof, Illuminated Logo & 8-Speed AT",
      "launchDate": "2026 (The New Taigun)",
      "bodyType": "SUV",
      "fuelTypes": [
          "Petrol"
      ],
      "priceRange": "₹11.00 - ₹19.47 Lakh",
      "minPrice": 1099900,
      "maxPrice": 1946900,
      "safetyRating": "5.0 ★ (Global NCAP 5-Star Adult & 5-Star Child Safety)",
      "groundClearance": "188 mm",
      "bootSpace": "385 Litres",
      "waitingPeriod": "2 - 5 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/vw-taigun/colors/wild-cherry-red-metallic.webp",
      "summary": "Built on the German MQB-A0-IN platform with a 5-Star Global NCAP safety rating for both adult and child occupants, the new Volkswagen Taigun features an illuminated front & rear VW crest with infinite LED tail lamps, a panoramic sunroof, an all-new 8-speed automatic transmission on the 1.0L TSI, the exhilarating 150 PS 1.5L TSI EVO with Active Cylinder Management (ACT) & 7-speed DSG, and 6-way electrically adjustable ventilated front seats with subwoofer audio.",
      "colors": [
          {
              "id": "wild-cherry-red-metallic",
              "name": "Wild Cherry Red Metallic",
              "hex": "#8C1F24",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-taigun/colors/wild-cherry-red-metallic.webp"
          },
          {
              "id": "lava-blue-metallic",
              "name": "Lava Blue Metallic",
              "hex": "#0474B0",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-taigun/colors/lava-blue-metallic.webp"
          },
          {
              "id": "avocado-pearl-effect",
              "name": "Avocado Pearl Effect",
              "hex": "#4A4A45",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-taigun/colors/avocado-pearl-effect.webp"
          },
          {
              "id": "carbon-steel-grey-matte",
              "name": "Carbon Steel Grey Matte",
              "hex": "#36383C",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-taigun/colors/carbon-steel-grey-matte.webp"
          },
          {
              "id": "deep-black-pearl",
              "name": "Deep Black Pearl",
              "hex": "#101010",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-taigun/colors/deep-black-pearl.webp"
          },
          {
              "id": "carbon-steel-grey-metallic",
              "name": "Carbon Steel Grey Metallic",
              "hex": "#485054",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-taigun/colors/carbon-steel-grey-metallic.webp"
          },
          {
              "id": "steel-grey",
              "name": "Steel Grey",
              "hex": "#A0A4A8",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-taigun/colors/steel-grey.webp"
          },
          {
              "id": "candy-white",
              "name": "Candy White",
              "hex": "#F2F5EE",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-taigun/colors/candy-white.webp"
          },
          {
              "id": "reflex-silver-metallic",
              "name": "Reflex Silver Metallic",
              "hex": "#A6ABAA",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-taigun/colors/reflex-silver-metallic.webp"
          }
      ],
      "gallery": [
          {
              "id": "new-taigun-hero-banner",
              "title": "The New Volkswagen Taigun German-Engineered SUV",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-taigun/gallery/new-taigun-hero-banner.webp"
          },
          {
              "id": "sculpted-bonnet-exterior",
              "title": "Sculpted Bonnet, Sharper Lines & IQ.LIGHT LED Matrix Headlamps",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-taigun/gallery/sculpted-bonnet-exterior.webp"
          },
          {
              "id": "tsi-evo-performance",
              "title": "1.0L TSI & 1.5L TSI EVO Turbocharged Engines with 8-Speed AT & 7-Speed DSG",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-taigun/gallery/tsi-evo-performance.webp"
          },
          {
              "id": "leatherette-ventilated-seats",
              "title": "Electric & Ventilated Front Leatherette Seats with Contrast Piping",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-taigun/gallery/leatherette-ventilated-seats.webp"
          },
          {
              "id": "panoramic-sunroof-taigun",
              "title": "Expansive Panoramic Sunroof in the New Taigun",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-taigun/gallery/panoramic-sunroof-taigun.webp"
          },
          {
              "id": "illuminated-vw-logo-taillights",
              "title": "First-in-Segment Infinity LED Tail Lamps with Illuminated VW Logo",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-taigun/gallery/illuminated-vw-logo-taillights.webp"
          },
          {
              "id": "digital-cockpit-cabin",
              "title": "20.32 cm Digital Cockpit & 25.65 cm VW Play Touchscreen Infotainment",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-taigun/gallery/digital-cockpit-cabin.webp"
          },
          {
              "id": "taigun-road-presence",
              "title": "Commanding SUV Stance with 188 mm Ground Clearance",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-taigun/gallery/taigun-road-presence.webp"
          },
          {
              "id": "gt-plus-sport-trim",
              "title": "Taigun GT Plus Sport 1.5L TSI DSG with Blacked-Out Alloys & Red Calipers",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-taigun/gallery/gt-plus-sport-trim.webp"
          },
          {
              "id": "gt-plus-chrome-trim",
              "title": "Taigun GT Plus Chrome 1.5L TSI DSG with R17 Manila Alloy Wheels",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-taigun/gallery/gt-plus-chrome-trim.webp"
          },
          {
              "id": "gt-line-trim",
              "title": "Taigun GT Line 1.0L TSI with Dark Chrome & Glossy Black Accents",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-taigun/gallery/gt-line-trim.webp"
          },
          {
              "id": "topline-trim",
              "title": "Taigun Topline 1.0L TSI with Chrome Grille & Crystalline LED DRLs",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-taigun/gallery/topline-trim.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "1.0L TSI Turbo Petrol (115 PS @ 5000-5500 rpm, 178 Nm @ 1750-4500 rpm)",
              "1.5L TSI EVO Turbo Petrol with Active Cylinder Management (150 PS @ 5000-6000 rpm, 250 Nm @ 1600-3500 rpm)"
          ],
          "transmissions": [
              "6-Speed Manual Transmission",
              "8-Speed Torque Converter Automatic (1.0L TSI)",
              "7-Speed DSG Dual-Clutch Automatic (1.5L TSI EVO)"
          ],
          "dimensions": "4221 mm L × 1760 mm W × 1612 mm H",
          "wheelbase": "2651 mm",
          "fuelTank": "50 Litres",
          "seatingCapacity": "5 Seater"
      },
      "variants": [
          {
              "name": "Comfortline 1.0L TSI MT",
              "exShowroom": 1099900,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "19.87 kmpl",
              "isVFM": true,
              "vfmBadge": "5-Star German Safety Entry",
              "keyFeatures": [
                  "6 Airbags, ESC, Multi-Collision Brake & 5-Star Global NCAP Adult & Child Rating",
                  "LED Headlamps with DRLs & Infinity Connected LED Tail Lamps",
                  "17.78 cm Touchscreen Infotainment with Apple CarPlay & Android Auto",
                  "20.32 cm Digital Cockpit & All-4 Power Windows"
              ]
          },
          {
              "name": "Highline 1.0L TSI MT",
              "exShowroom": 1299900,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "19.87 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "25.65 cm (10.1-inch) VW Play Touchscreen with Wireless App-Connect",
                  "R16 Belmont Alloy Wheels, Rear View Camera & Wireless Phone Charger",
                  "Climatronic Automatic AC with Touch Control & Rear Wiper/Defogger"
              ]
          },
          {
              "name": "Highline 1.0L TSI AT",
              "exShowroom": 1409900,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "18.15 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "All-New 8-Speed Torque Converter Automatic with Paddle Shifters",
                  "25.65 cm VW Play Touchscreen, Cruise Control & Hill Hold Control",
                  "R16 Alloy Wheels, Auto Headlamps & Rain-Sensing Wipers"
              ]
          },
          {
              "name": "Highline Plus 1.0L TSI MT",
              "exShowroom": 1441900,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "19.87 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Electric Sunroof, KESSY Keyless Entry & Push-Button Start",
                  "20.32 cm Digital Cockpit, Auto-Dimming IRVM & Smart Touch Climatronic AC",
                  "6 Airbags & 40+ Safety Features"
              ]
          },
          {
              "name": "GT Line 1.0L TSI MT",
              "exShowroom": 1471900,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "19.87 kmpl",
              "isVFM": true,
              "vfmBadge": "Most Popular Blacked-Out Trim",
              "keyFeatures": [
                  "Dark Chrome Grille, R17 Black Cassino Alloy Wheels & Black Roof Rails",
                  "Electric Sunroof, Red Ambient Cabin Lighting & Aluminium Pedals",
                  "IQ.LIGHT LED Headlamps, 25.65 cm VW Play Screen & 20.32 cm Digital Cockpit"
              ]
          },
          {
              "name": "GT Line 1.0L TSI AT",
              "exShowroom": 1586900,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "18.15 kmpl",
              "isVFM": true,
              "vfmBadge": "Best Automatic All-Rounder",
              "keyFeatures": [
                  "8-Speed Automatic with Paddle Shifters + Blacked-Out GT Line Styling",
                  "Electric Sunroof, R17 Black Cassino Alloys & IQ.LIGHT LED Headlamps",
                  "Wireless Apple CarPlay/Android Auto, Wireless Charger & 6 Airbags"
              ]
          },
          {
              "name": "Topline 1.0L TSI AT",
              "exShowroom": 1737900,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "18.15 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "6-Way Electrically Adjustable & Ventilated Front Leatherette Seats",
                  "Panoramic Sunroof, Illuminated VW Logo & Amplifier + Subwoofer Audio",
                  "R17 Cassino Diamond-Cut Alloys & Footwell Illumination"
              ]
          },
          {
              "name": "GT Plus Chrome 1.5L TSI DSG",
              "exShowroom": 1916900,
              "fuel": "Petrol",
              "trans": "Automatic (DSG)",
              "engine": "1.5L TSI EVO (150 PS)",
              "mileage": "18.61 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "150 PS / 250 Nm 1.5L TSI EVO with Active Cylinder Management (ACT) & 7-Speed DSG",
                  "Panoramic Sunroof, Electric Ventilated Front Seats & Subwoofer Sound System",
                  "R17 Manila Alloy Wheels, Rich Chrome Exterior Accents & Illuminated VW Crest"
              ]
          },
          {
              "name": "GT Plus Sport 1.5L TSI DSG",
              "exShowroom": 1946900,
              "fuel": "Petrol",
              "trans": "Automatic (DSG)",
              "engine": "1.5L TSI EVO (150 PS)",
              "mileage": "18.61 kmpl",
              "isVFM": true,
              "vfmBadge": "150 PS Enthusiast Flagship",
              "keyFeatures": [
                  "150 PS 1.5L TSI EVO + 7-Speed DSG + Red Front Brake Calipers",
                  "Carbon Steel Grey Roof, Glossy Black Grille & R17 Black Cassino Alloys",
                  "Black Leatherette Seats with Red Stitching, GT Embroidery & Electric Ventilation",
                  "Panoramic Sunroof, Illuminated VW Logo & 5-Star Global NCAP Safety"
              ]
          }
      ]
  },
  {
      "id": "vw-virtus",
      "name": "Volkswagen Virtus",
      "brand": "Volkswagen",
      "tagline": "India's #1 Selling 5-Star Global NCAP Performance Sedan with 150 PS 1.5L TSI EVO DSG, 521L Boot & Electric Ventilated Seats",
      "launchDate": "2025 (Virtus Chrome & GT Plus Sport)",
      "bodyType": "Sedan",
      "fuelTypes": [
          "Petrol"
      ],
      "priceRange": "₹10.71 - ₹19.20 Lakh",
      "minPrice": 1070900,
      "maxPrice": 1919900,
      "safetyRating": "5.0 ★ (Global NCAP 5-Star Adult & 5-Star Child Safety)",
      "groundClearance": "179 mm",
      "bootSpace": "521 Litres",
      "waitingPeriod": "2 - 5 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/vw-virtus/colors/wild-cherry-red.webp",
      "summary": "The Volkswagen Virtus is India's highest-selling premium mid-size sedan, pairing razor-sharp German driving dynamics and a 5-Star Global NCAP safety rating with a 4561 mm fastback silhouette, 179 mm ground clearance, 521-litre boot space, electric sunroof, 6-way power-adjustable ventilated front seats, subwoofer audio, and a choice between the 115 PS 1.0L TSI and the 150 PS 1.5L TSI EVO with 7-speed DSG in Chrome or blacked-out GT Plus Sport personas.",
      "colors": [
          {
              "id": "wild-cherry-red",
              "name": "Wild Cherry Red Metallic",
              "hex": "#8C1F24",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-virtus/colors/wild-cherry-red.webp"
          },
          {
              "id": "lava-blue",
              "name": "Lava Blue Metallic",
              "hex": "#0474B0",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-virtus/colors/lava-blue.webp"
          },
          {
              "id": "rising-blue",
              "name": "Rising Blue Metallic",
              "hex": "#15568A",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-virtus/colors/rising-blue.webp"
          },
          {
              "id": "avocado-pearl",
              "name": "Avocado Pearl (Anniversary Edition)",
              "hex": "#4A4A45",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-virtus/colors/avocado-pearl.webp"
          },
          {
              "id": "carbon-steel-grey-matte",
              "name": "Carbon Steel Grey Matte",
              "hex": "#36383C",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-virtus/colors/carbon-steel-grey-matte.webp"
          },
          {
              "id": "deep-black-pearl",
              "name": "Deep Black Pearl",
              "hex": "#101010",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-virtus/colors/deep-black-pearl.webp"
          },
          {
              "id": "carbon-steel-grey",
              "name": "Carbon Steel Grey Metallic",
              "hex": "#485054",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-virtus/colors/carbon-steel-grey.webp"
          },
          {
              "id": "candy-white",
              "name": "Candy White",
              "hex": "#F2F5EE",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-virtus/colors/candy-white.webp"
          },
          {
              "id": "reflex-silver",
              "name": "Reflex Silver Metallic",
              "hex": "#A6ABAA",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-virtus/colors/reflex-silver.webp"
          }
      ],
      "gallery": [
          {
              "id": "virtus-gt-plus-sport-hero",
              "title": "Volkswagen Virtus GT Plus Sport with Glossy Black Spoiler & Alloys",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-virtus/gallery/virtus-gt-plus-sport-hero.webp"
          },
          {
              "id": "virtus-chrome-hero",
              "title": "Volkswagen Virtus Chrome Edition Executive Sedan Profile",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-virtus/gallery/virtus-chrome-hero.webp"
          },
          {
              "id": "virtus-gt-line-exterior",
              "title": "Virtus GT Line 1.0L TSI with Dark Chrome & Black Styling Pack",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-virtus/gallery/virtus-gt-line-exterior.webp"
          },
          {
              "id": "sharp-shoulder-line",
              "title": "Timeless German Fastback Silhouette & Sharp Double Character Line",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-virtus/gallery/sharp-shoulder-line.webp"
          },
          {
              "id": "exterior-gt-badging",
              "title": "Signature GT Grille Badging, Red Brake Calipers & R16 Razor Black Alloys",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-virtus/gallery/exterior-gt-badging.webp"
          },
          {
              "id": "virtus-endurance-record",
              "title": "NATRAX 24-Hour Endurance Record Holder – Proven German Engineering",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-virtus/gallery/virtus-endurance-record.webp"
          },
          {
              "id": "gt-sport-interior-cabin",
              "title": "All-Black GT Sport Cabin with Red Ambient Lighting & Aluminium Pedals",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-virtus/gallery/gt-sport-interior-cabin.webp"
          },
          {
              "id": "electric-ventilated-leather-seats",
              "title": "6-Way Electrically Adjustable & Ventilated Front Leatherette Seats",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-virtus/gallery/electric-ventilated-leather-seats.webp"
          },
          {
              "id": "dsg-7speed-transmission",
              "title": "Lightning-Fast 7-Speed DSG Dual-Clutch Automatic with Paddle Shifters",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-virtus/gallery/dsg-7speed-transmission.webp"
          },
          {
              "id": "wireless-charging-infotainment",
              "title": "25.65 cm VW Play Touchscreen & Wireless Smartphone Charging",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-virtus/gallery/wireless-charging-infotainment.webp"
          },
          {
              "id": "climatronic-touch-ac",
              "title": "Smart Touch Climatronic Auto AC & 20.32 cm Digital Cockpit",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-virtus/gallery/climatronic-touch-ac.webp"
          },
          {
              "id": "six-airbags-5star-gncap",
              "title": "5-Star Global NCAP Safety with 6 Airbags & 40+ Safety Features",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-virtus/gallery/six-airbags-5star-gncap.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "1.0L TSI Turbo Petrol (115 PS @ 5000-5500 rpm, 178 Nm @ 1750-4500 rpm)",
              "1.5L TSI EVO Turbo Petrol with Active Cylinder Management (150 PS @ 5000-6000 rpm, 250 Nm @ 1600-3500 rpm)"
          ],
          "transmissions": [
              "6-Speed Manual Transmission",
              "6-Speed Torque Converter Automatic (1.0L TSI)",
              "7-Speed DSG Dual-Clutch Automatic (1.5L TSI EVO)"
          ],
          "dimensions": "4561 mm L × 1752 mm W × 1507 mm H",
          "wheelbase": "2651 mm",
          "fuelTank": "45 Litres",
          "seatingCapacity": "5 Seater"
      },
      "variants": [
          {
              "name": "Comfortline 1.0L TSI MT",
              "exShowroom": 1070900,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "20.80 kmpl",
              "isVFM": true,
              "vfmBadge": "5-Star German Sedan Entry",
              "keyFeatures": [
                  "6 Airbags, ESC, Multi-Collision Brake & 5-Star Global NCAP Safety Standard",
                  "LED Headlamps with DRLs, 179 mm Ground Clearance & 521L Boot",
                  "17.78 cm Touchscreen with Apple CarPlay/Android Auto & 8 Speakers"
              ]
          },
          {
              "name": "Highline 1.0L TSI MT",
              "exShowroom": 1350900,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "20.80 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "25.65 cm (10.1-inch) VW Play Touchscreen with Wireless App-Connect",
                  "R16 Razor Alloy Wheels, Rear View Camera, Cruise Control & Wireless Charger",
                  "Smart Touch Climatronic Auto AC & Cornering Front Fog Lamps"
              ]
          },
          {
              "name": "Highline Plus 1.0L TSI MT",
              "exShowroom": 1390900,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "20.80 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "Electric Sunroof, 20.32 cm Digital Cockpit & KESSY Keyless Entry",
                  "Auto Headlamps, Rain-Sensing Wipers & Auto-Dimming IRVM"
              ]
          },
          {
              "name": "GT Line 1.0L TSI MT",
              "exShowroom": 1434900,
              "fuel": "Petrol",
              "trans": "Manual",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "20.80 kmpl",
              "isVFM": true,
              "vfmBadge": "Most Popular Blacked-Out Sedan",
              "keyFeatures": [
                  "Blacked-Out R16 Razor Alloys, Dark Chrome Grille, Glossy Black Spoiler & ORVMs",
                  "Electric Sunroof, Red Ambient Cabin Lighting & Aluminium Pedals",
                  "25.65 cm VW Play Touchscreen + 20.32 cm Digital Cockpit"
              ]
          },
          {
              "name": "GT Line 1.0L TSI AT",
              "exShowroom": 1524900,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "18.67 kmpl",
              "isVFM": true,
              "vfmBadge": "Best Automatic Value Pick",
              "keyFeatures": [
                  "6-Speed Torque Converter Automatic with Steering Paddle Shifters",
                  "Blacked-Out GT Line Exterior Package + Electric Sunroof",
                  "6 Airbags, Hill Hold Control & Wireless App-Connect"
              ]
          },
          {
              "name": "Topline 1.0L TSI AT",
              "exShowroom": 1634900,
              "fuel": "Petrol",
              "trans": "Automatic",
              "engine": "1.0L TSI Turbo (115 PS)",
              "mileage": "18.67 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "6-Way Electrically Adjustable & Ventilated Front Leatherette Seats",
                  "Electric Sunroof, Amplifier + Subwoofer Sound System & Footwell Lighting",
                  "R16 Diamond-Cut Razor Alloys & Chrome Exterior Package"
              ]
          },
          {
              "name": "GT Plus Chrome 1.5L TSI DSG",
              "exShowroom": 1884900,
              "fuel": "Petrol",
              "trans": "Automatic (DSG)",
              "engine": "1.5L TSI EVO (150 PS)",
              "mileage": "19.62 kmpl",
              "isVFM": false,
              "keyFeatures": [
                  "150 PS / 250 Nm 1.5L TSI EVO with Active Cylinder Management (ACT) & 7-Speed DSG",
                  "Electric Ventilated Front Leatherette Seats, Sunroof & Subwoofer Audio",
                  "Chrome Wing Grille, R16 Diamond-Cut Alloys & Red GT Badging"
              ]
          },
          {
              "name": "GT Plus Sport 1.5L TSI DSG",
              "exShowroom": 1919900,
              "fuel": "Petrol",
              "trans": "Automatic (DSG)",
              "engine": "1.5L TSI EVO (150 PS)",
              "mileage": "19.62 kmpl",
              "isVFM": true,
              "vfmBadge": "150 PS Enthusiast Icon",
              "keyFeatures": [
                  "150 PS 1.5L TSI EVO + 7-Speed DSG + Red Front Brake Calipers",
                  "Deep Black Roof, Glossy Black Rear Spoiler & R16 Glossy Black Razor Alloys",
                  "All-Black Leatherette Cabin with Red Stitching, Electric Ventilation & Subwoofer",
                  "5-Star Global NCAP Safety with 6 Airbags"
              ]
          }
      ]
  },
  {
      "id": "vw-tiguan-r-line",
      "name": "Volkswagen Tiguan R-Line",
      "brand": "Volkswagen",
      "tagline": "All-New German CBU Performance SUV with 204 PS 2.0L TSI 4MOTION, DCC Pro, 38.1 cm Display & 21 Level-2 ADAS Features",
      "launchDate": "2025 (All-New Tiguan R-Line)",
      "bodyType": "SUV",
      "fuelTypes": [
          "Petrol"
      ],
      "priceRange": "₹47.11 Lakh",
      "minPrice": 4711013,
      "maxPrice": 4711013,
      "safetyRating": "5.0 ★ (Euro NCAP 5-Star + 9 Airbags + 21 Level-2 ADAS)",
      "groundClearance": "191 mm",
      "bootSpace": "652 Litres",
      "waitingPeriod": "3 - 6 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/vw-tiguan-r-line/colors/cipressino-green-metallic.webp",
      "summary": "Imported as a full German CBU on the MQB evo platform, the all-new Volkswagen Tiguan R-Line delivers 204 PS & 320 Nm from its 2.0L TSI EVO engine paired with a 7-speed DSG and 4MOTION all-wheel drive, Dynamic Chassis Control (DCC Pro) with two-valve adaptive dampers, R-Line sport seats with pneumatic massage, a massive 38.1 cm (15-inch) infotainment screen, Head-Up Display, 19-inch Coventry diamond-turned alloys, and 9 airbags with 21 Level-2 ADAS features.",
      "colors": [
          {
              "id": "cipressino-green-metallic",
              "name": "Cipressino Green Metallic",
              "hex": "#414944",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-tiguan-r-line/colors/cipressino-green-metallic.webp"
          },
          {
              "id": "persimmon-red-metallic",
              "name": "Persimmon Red Metallic",
              "hex": "#9E2B25",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-tiguan-r-line/colors/persimmon-red-metallic.webp"
          },
          {
              "id": "nightshade-blue-metallic",
              "name": "Nightshade Blue Metallic",
              "hex": "#15568A",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-tiguan-r-line/colors/nightshade-blue-metallic.webp"
          },
          {
              "id": "oryx-white-pearl",
              "name": "Oryx White Mother of Pearl Effect",
              "hex": "#F2F4F5",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-tiguan-r-line/colors/oryx-white-pearl.webp"
          },
          {
              "id": "oyster-silver-metallic",
              "name": "Oyster Silver Metallic",
              "hex": "#A1AEB6",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-tiguan-r-line/colors/oyster-silver-metallic.webp"
          },
          {
              "id": "grenadilla-black-metallic",
              "name": "Grenadilla Black Metallic",
              "hex": "#23252A",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-tiguan-r-line/colors/grenadilla-black-metallic.webp"
          }
      ],
      "gallery": [
          {
              "id": "tiguan-r-line-hero",
              "title": "All-New Volkswagen Tiguan R-Line German Performance SUV",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tiguan-r-line/gallery/tiguan-r-line-hero.webp"
          },
          {
              "id": "sporty-r-theme-design",
              "title": "Signature R-Line Bumpers, Glossy Black Grille & Aerodynamic Stance",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tiguan-r-line/gallery/sporty-r-theme-design.webp"
          },
          {
              "id": "illuminated-light-bands",
              "title": "IQ.LIGHT HD Matrix Headlamps with Illuminated Front & Rear Light Bands",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tiguan-r-line/gallery/illuminated-light-bands.webp"
          },
          {
              "id": "coventry-19-inch-alloys",
              "title": "R19 Coventry Diamond-Turned Alloy Wheels",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tiguan-r-line/gallery/coventry-19-inch-alloys.webp"
          },
          {
              "id": "infotainment-381cm-display",
              "title": "Massive 38.1 cm (15-inch) MIB4 Freestanding Infotainment Display",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tiguan-r-line/gallery/infotainment-381cm-display.webp"
          },
          {
              "id": "digital-cockpit-pro",
              "title": "26.04 cm Digital Cockpit Pro & Windshield Head-Up Display (HUD)",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tiguan-r-line/gallery/digital-cockpit-pro.webp"
          },
          {
              "id": "ambient-lighting-30-color",
              "title": "30-Colour Customizable R-Line Dashboard & Door Ambient Lighting",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tiguan-r-line/gallery/ambient-lighting-30-color.webp"
          },
          {
              "id": "r-line-massage-sport-seats",
              "title": "R-Line ErgoActive Sport Seats with Pneumatic Massage & Lumbar Support",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tiguan-r-line/gallery/r-line-massage-sport-seats.webp"
          },
          {
              "id": "panoramic-sunroof-tiguan",
              "title": "Expansive Tilting & Sliding Panoramic Glass Sunroof",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tiguan-r-line/gallery/panoramic-sunroof-tiguan.webp"
          },
          {
              "id": "dcc-pro-driving-modes",
              "title": "DCC Pro Adaptive Chassis Control & Driving Experience Control Dial",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tiguan-r-line/gallery/dcc-pro-driving-modes.webp"
          },
          {
              "id": "level2-adas-21-features",
              "title": "21 Level-2 ADAS Autonomous Driving Assistance Features",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tiguan-r-line/gallery/level2-adas-21-features.webp"
          },
          {
              "id": "nine-airbags-euro-ncap",
              "title": "9 Airbags Standard & 5-Star Euro NCAP Safety Architecture",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tiguan-r-line/gallery/nine-airbags-euro-ncap.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "2.0L TSI EVO Turbo Petrol (204 PS @ 4500-6000 rpm, 320 Nm @ 1500-4400 rpm)"
          ],
          "transmissions": [
              "7-Speed DSG Dual-Clutch Automatic with 4MOTION All-Wheel Drive & DCC Pro"
          ],
          "dimensions": "4539 mm L × 1859 mm W × 1656 mm H",
          "wheelbase": "2680 mm",
          "fuelTank": "55 Litres",
          "seatingCapacity": "5 Seater"
      },
      "variants": [
          {
              "name": "R-Line 2.0L TSI 4MOTION DSG (CBU)",
              "exShowroom": 4711013,
              "fuel": "Petrol",
              "trans": "Automatic (DSG 4MOTION)",
              "engine": "2.0L TSI EVO (204 PS)",
              "mileage": "12.58 kmpl",
              "isVFM": true,
              "vfmBadge": "Fully-Loaded German CBU Flagship",
              "keyFeatures": [
                  "204 PS / 320 Nm 2.0L TSI EVO with 7-Speed DSG, 4MOTION AWD & DCC Pro Adaptive Suspension",
                  "9 Airbags, 21 Level-2 ADAS Features, Park Assist Plus & 5-Star Euro NCAP Rating",
                  "Massive 38.1 cm (15-inch) Infotainment, 26.04 cm Digital Cockpit Pro & Head-Up Display",
                  "R-Line Sport Seats with Pneumatic 10-Chamber Massage, 3-Zone Climatronic AC & 30-Color Ambient Lighting",
                  "R19 Coventry Diamond-Turned Alloys, Illuminated Front/Rear Light Bands & Panoramic Sunroof"
              ]
          }
      ]
  },
  {
      "id": "vw-tayron",
      "name": "Volkswagen Tayron",
      "brand": "Volkswagen",
      "tagline": "All-New 7-Seater Luxury 4MOTION SUV with 204 PS 2.0L TSI, 38.1 cm Display, IQ.LIGHT HD Matrix & 9 Airbags",
      "launchDate": "2026 (All-New Tayron)",
      "bodyType": "SUV",
      "fuelTypes": [
          "Petrol"
      ],
      "priceRange": "₹41.99 - ₹47.74 Lakh",
      "minPrice": 4199000,
      "maxPrice": 4774000,
      "safetyRating": "5.0 ★ (Euro NCAP 5-Star + 9 Airbags + Level-2 ADAS)",
      "groundClearance": "195 mm",
      "bootSpace": "345 Litres (1,905L Expanded)",
      "waitingPeriod": "3 - 6 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/vw-tayron/colors/ultraviolet-metallic.webp",
      "summary": "The all-new Volkswagen Tayron is Volkswagen India's flagship 3-row 7-seater luxury SUV, powered by a 204 PS / 320 Nm 2.0L TSI EVO engine paired with a 7-speed DSG and 4MOTION all-wheel drive. Available in Life and R-Line trims, it features illuminated front and rear VW crests, IQ.LIGHT HD Matrix headlamps, a 38.1 cm (15-inch) infotainment screen, 30-colour ambient lighting, ventilated & massaging front seats, a panoramic sunroof, and 9 airbags.",
      "colors": [
          {
              "id": "ultraviolet-metallic",
              "name": "Ultraviolet Metallic",
              "hex": "#322F5E",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-tayron/colors/ultraviolet-metallic.webp"
          },
          {
              "id": "cipressino-green-metallic",
              "name": "Cipressino Green Metallic",
              "hex": "#535640",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-tayron/colors/cipressino-green-metallic.webp"
          },
          {
              "id": "nightshade-blue-metallic",
              "name": "Nightshade Blue Metallic",
              "hex": "#15568A",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-tayron/colors/nightshade-blue-metallic.webp"
          },
          {
              "id": "oryx-white-pearl",
              "name": "Oryx White Pearl Effect",
              "hex": "#F2F4F5",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-tayron/colors/oryx-white-pearl.webp"
          },
          {
              "id": "dolphin-grey-metallic",
              "name": "Dolphin Grey Metallic",
              "hex": "#5E6269",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-tayron/colors/dolphin-grey-metallic.webp"
          },
          {
              "id": "oyster-silver",
              "name": "Oyster Silver Metallic",
              "hex": "#A1AEB6",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-tayron/colors/oyster-silver.webp"
          },
          {
              "id": "grenadilla-black-metallic",
              "name": "Grenadilla Black Metallic",
              "hex": "#23252A",
              "image": "https://ik.imagekit.io/2908vvlod/cars/vw-tayron/colors/grenadilla-black-metallic.webp"
          }
      ],
      "gallery": [
          {
              "id": "tayron-r-line-hero",
              "title": "All-New Volkswagen Tayron R-Line 7-Seater Luxury SUV",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tayron/gallery/tayron-r-line-hero.webp"
          },
          {
              "id": "tayron-life-banner",
              "title": "Volkswagen Tayron Life 7-Seater 2.0L TSI 4MOTION",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tayron/gallery/tayron-life-banner.webp"
          },
          {
              "id": "tayron-r-line-stance",
              "title": "Tayron R-Line Sporty Front Bumper & Aerodynamic Design",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tayron/gallery/tayron-r-line-stance.webp"
          },
          {
              "id": "illuminated-vw-emblem",
              "title": "Illuminated Front & Rear Volkswagen Crest with Connected LED Light Bar",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tayron/gallery/illuminated-vw-emblem.webp"
          },
          {
              "id": "iq-light-hd-matrix",
              "title": "IQ.LIGHT HD Matrix LED Headlamps with Dynamic Light Assist",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tayron/gallery/iq-light-hd-matrix.webp"
          },
          {
              "id": "r19-diamond-alloys",
              "title": "Sculpted Diamond-Cut Alloy Wheels & All-Wheel Disc Brakes",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tayron/gallery/r19-diamond-alloys.webp"
          },
          {
              "id": "infotainment-381cm-tayron",
              "title": "38.1 cm (15-inch) Touchscreen Infotainment & Digital Cockpit Pro",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tayron/gallery/infotainment-381cm-tayron.webp"
          },
          {
              "id": "ergoactive-massage-seats",
              "title": "Ventilated ErgoActive Front Seats with Pneumatic 10-Point Massage",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tayron/gallery/ergoactive-massage-seats.webp"
          },
          {
              "id": "ambient-lighting-tayron",
              "title": "30-Colour Customizable Illuminated Dashboard & Door Trim",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tayron/gallery/ambient-lighting-tayron.webp"
          },
          {
              "id": "panoramic-sunroof-tayron",
              "title": "Expansive Panoramic Sunroof Spanning Across Three Rows",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tayron/gallery/panoramic-sunroof-tayron.webp"
          },
          {
              "id": "bootspace-1905l-flexible",
              "title": "345-Litre Boot Space Expandable up to 1,905 Litres",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tayron/gallery/bootspace-1905l-flexible.webp"
          },
          {
              "id": "adas-park-assist-plus",
              "title": "Level-2 ADAS Suite, Park Assist Plus & 4MOTION All-Wheel Drive",
              "url": "https://ik.imagekit.io/2908vvlod/cars/vw-tayron/gallery/adas-park-assist-plus.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "2.0L TSI EVO Turbo Petrol (204 PS @ 4500-6000 rpm, 320 Nm @ 1500-4400 rpm)"
          ],
          "transmissions": [
              "7-Speed DSG Dual-Clutch Automatic with 4MOTION All-Wheel Drive"
          ],
          "dimensions": "4792 mm L × 1852 mm W × 1660 mm H",
          "wheelbase": "2791 mm",
          "fuelTank": "58 Litres",
          "seatingCapacity": "7 Seater"
      },
      "variants": [
          {
              "name": "Life 2.0L TSI 4MOTION DSG (7-Seater)",
              "exShowroom": 4199000,
              "fuel": "Petrol",
              "trans": "Automatic (DSG 4MOTION)",
              "engine": "2.0L TSI EVO (204 PS)",
              "mileage": "13.20 kmpl",
              "isVFM": true,
              "vfmBadge": "Best-Value German 7-Seater 4x4",
              "keyFeatures": [
                  "204 PS / 320 Nm 2.0L TSI EVO with 7-Speed DSG & 4MOTION All-Wheel Drive",
                  "9 Airbags, Level-2 ADAS, Park Assist Plus & 360° Area View Camera",
                  "32.7 cm Infotainment Screen, 26.04 cm Digital Cockpit Pro & 3-Zone Climatronic AC",
                  "Panoramic Sunroof, Illuminated Front/Rear VW Logos & Electric Tailgate"
              ]
          },
          {
              "name": "R-Line 2.0L TSI 4MOTION DSG (7-Seater)",
              "exShowroom": 4774000,
              "fuel": "Petrol",
              "trans": "Automatic (DSG 4MOTION)",
              "engine": "2.0L TSI EVO (204 PS)",
              "mileage": "13.20 kmpl",
              "isVFM": true,
              "vfmBadge": "Flagship 7-Seater R-Line",
              "keyFeatures": [
                  "Signature R-Line Exterior Styling, R19 Coventry Alloy Wheels & IQ.LIGHT HD Matrix Headlamps",
                  "Massive 38.1 cm (15-inch) Infotainment Display, Head-Up Display & Harman Kardon Sound",
                  "ErgoActive Front Seats with 10-Chamber Pneumatic Massage, Ventilation & Memory",
                  "DCC Pro Adaptive Chassis Control, 30-Color Ambient Lighting & 9 Airbags"
              ]
          }
      ]
  },
  {
      "id": "byd-atto-3",
      "name": "BYD Atto 3",
      "brand": "BYD",
      "tagline": "India's First Sporty Born E-SUV on e-Platform 3.0 with Ultra-Safe Blade Battery, 521 km Range & 12.8\" Rotating Screen",
      "launchDate": "2025 (MY2025 New Range)",
      "bodyType": "SUV",
      "fuelTypes": [
          "Electric"
      ],
      "priceRange": "₹24.99 - ₹34.49 Lakh",
      "minPrice": 2499000,
      "maxPrice": 3449000,
      "safetyRating": "5.0 ★ (Euro NCAP 5-Star – 91% Adult, 89% Child)",
      "groundClearance": "175 mm",
      "bootSpace": "440 Litres (1340L Max)",
      "waitingPeriod": "2 - 4 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/byd-atto-3/colors/atlantis-grey.webp",
      "summary": "Built on BYD's dedicated Born EV e-Platform 3.0 with an ultra-safe nail-penetration-tested LFP Blade Battery and 8-in-1 electric powertrain (150 kW / 204 PS, 310 Nm), the BYD Atto 3 offers 49.92 kWh (468 km ARAI) and 60.48 kWh (521 km ARAI) battery options, a 5-Star Euro NCAP rating with up to 7 airbags and Level 2 ADAS, a 12.8-inch intelligent rotating touchscreen, panoramic sunroof, ventilated front seats, 8-speaker Dirac HD audio, and 3.3 kW Vehicle-to-Load (VTOL) power supply.",
      "colors": [
          {
              "id": "atlantis-grey",
              "name": "Atlantis Grey",
              "hex": "#273651",
              "image": "https://ik.imagekit.io/2908vvlod/cars/byd-atto-3/colors/atlantis-grey.webp"
          },
          {
              "id": "cosmos-black",
              "name": "Cosmos Black",
              "hex": "#1E2024",
              "image": "https://ik.imagekit.io/2908vvlod/cars/byd-atto-3/colors/cosmos-black.webp"
          },
          {
              "id": "ski-white",
              "name": "Ski White",
              "hex": "#E9E9EA",
              "image": "https://ik.imagekit.io/2908vvlod/cars/byd-atto-3/colors/ski-white.webp"
          },
          {
              "id": "harbour-grey",
              "name": "Harbour Grey",
              "hex": "#5E636D",
              "image": "https://ik.imagekit.io/2908vvlod/cars/byd-atto-3/colors/harbour-grey.webp"
          }
      ],
      "gallery": [
          {
              "id": "atto3-born-esuv-stance",
              "title": "India's First Sporty Born E-SUV on BYD e-Platform 3.0",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-atto-3/gallery/atto3-born-esuv-stance.webp"
          },
          {
              "id": "atto3-aerodynamic-profile",
              "title": "0.29 Cd Aerodynamic Profile with Ripple D-Pillar & 18-inch Sport Alloys",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-atto-3/gallery/atto3-aerodynamic-profile.webp"
          },
          {
              "id": "atto3-crystal-led-headlights",
              "title": "Crystal LED Combination Headlights with One-Piece LED DRL Strip",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-atto-3/gallery/atto3-crystal-led-headlights.webp"
          },
          {
              "id": "atto3-led-taillight-strip",
              "title": "Full-Width One-Piece Through LED Taillight Strip",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-atto-3/gallery/atto3-led-taillight-strip.webp"
          },
          {
              "id": "atto3-rhythmic-interior",
              "title": "Rhythmic Fitness-Inspired Cockpit with Muscular Streamline Console",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-atto-3/gallery/atto3-rhythmic-interior.webp"
          },
          {
              "id": "atto3-ventilated-sport-seats",
              "title": "Sporty Vegan Leather Cabin with Ventilated & Power-Adjustable Front Seats",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-atto-3/gallery/atto3-ventilated-sport-seats.webp"
          },
          {
              "id": "atto3-panoramic-sunroof",
              "title": "1,261 mm Panoramic Sunroof with Electric Slide & Anti-Pinch",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-atto-3/gallery/atto3-panoramic-sunroof.webp"
          },
          {
              "id": "atto3-rotating-touchscreen",
              "title": "12.8-inch (32.5 cm) Adaptive Rotating Touchscreen with Apple CarPlay & Android Auto",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-atto-3/gallery/atto3-rotating-touchscreen.webp"
          },
          {
              "id": "atto3-360-holographic-camera",
              "title": "360° Holographic Transparent Imaging System",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-atto-3/gallery/atto3-360-holographic-camera.webp"
          },
          {
              "id": "atto3-vtol-mobile-power",
              "title": "Vehicle-to-Load (VTOL) 3.3 kW Mobile Power Station",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-atto-3/gallery/atto3-vtol-mobile-power.webp"
          },
          {
              "id": "atto3-7-airbags-safety",
              "title": "5-Star Euro NCAP Safety with 7 Airbags & Ultra-Safe Blade Battery",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-atto-3/gallery/atto3-7-airbags-safety.webp"
          },
          {
              "id": "atto3-level2-adas",
              "title": "BYD Intelligent Driving System (Level 2 ADAS Suite)",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-atto-3/gallery/atto3-level2-adas.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "49.92 kWh BYD Blade Battery + 150 kW (204 PS) / 310 Nm PMSM Motor (468 km ARAI Range, 0-100 km/h in 7.9s)",
              "60.48 kWh BYD Blade Battery + 150 kW (204 PS) / 310 Nm PMSM Motor (521 km ARAI Range, 0-100 km/h in 7.3s)"
          ],
          "transmissions": [
              "Single-Speed Automatic (8-in-1 Electric Powertrain)"
          ],
          "dimensions": "4455 mm L × 1875 mm W × 1615 mm H",
          "wheelbase": "2720 mm",
          "fuelTank": "49.92 kWh / 60.48 kWh Blade Battery (0-80% in 50 mins DC)",
          "seatingCapacity": "5 Seater"
      },
      "variants": [
          {
              "name": "Dynamic (49.92 kWh)",
              "exShowroom": 2499000,
              "fuel": "Electric",
              "trans": "Automatic",
              "engine": "49.92 kWh Blade Battery (204 PS)",
              "mileage": "468 km/charge",
              "isVFM": true,
              "vfmBadge": "Sub-25L Born EV Value Pick",
              "keyFeatures": [
                  "49.92 kWh BYD Blade Battery (468 km ARAI / 410 km NEDC Range) & 70 kW DC Fast Charging",
                  "150 kW (204 PS) & 310 Nm Motor, Panoramic Sunroof & 12.8-inch Rotating Touchscreen",
                  "6 Airbags, 360° Holographic Camera, NFC Card Key, Wireless Charger & VTOL Function",
                  "6-Way Power Driver Seat, 4-Way Power Passenger Seat & R17 Alloy Wheels"
              ]
          },
          {
              "name": "Premium (60.48 kWh)",
              "exShowroom": 3035000,
              "fuel": "Electric",
              "trans": "Automatic",
              "engine": "60.48 kWh Blade Battery (204 PS)",
              "mileage": "521 km/charge",
              "isVFM": true,
              "vfmBadge": "Best 521 km Long-Range Pick",
              "keyFeatures": [
                  "60.48 kWh BYD Blade Battery (521 km ARAI / 480 km NEDC Range) & 80 kW DC Fast Charging",
                  "Faster 0-100 km/h in 7.3 Seconds & R18 Sporty Alloy Wheels (215/55 R18)",
                  "One-Touch Open/Close Electric Tailgate & Multi-Color Gradient Ambient Lighting",
                  "Panoramic Sunroof, 12.8-inch Rotating Display, 360° Camera & Low-Voltage LFP Battery"
              ]
          },
          {
              "name": "Superior (60.48 kWh ADAS)",
              "exShowroom": 3449000,
              "fuel": "Electric",
              "trans": "Automatic",
              "engine": "60.48 kWh Blade Battery (204 PS)",
              "mileage": "521 km/charge",
              "isVFM": false,
              "keyFeatures": [
                  "BYD Intelligent Driving System (Level 2 ADAS: ACC Stop & Go, AEB, LKA, LDW, BSD, RCTA/B, DOW)",
                  "7 Airbags (incl. Driver Far-Side Airbag) & Adaptive Front Lighting (AFL)",
                  "Ventilated Front Seats (Driver + Co-Driver) & Dirac HD Sound 8-Speaker Audio",
                  "Music-Rhythm Interactive Multi-Color Ambient Lighting & 521 km ARAI Range"
              ]
          }
      ]
  },
  {
      "id": "byd-emax-7",
      "name": "BYD eMAX 7",
      "brand": "BYD",
      "tagline": "Your Electric Companion for Long-Range 6 & 7-Seater Family Luxury with 530 km Range & Blade Battery",
      "launchDate": "2025",
      "bodyType": "MUV",
      "fuelTypes": [
          "Electric"
      ],
      "priceRange": "₹27.90 - ₹29.90 Lakh",
      "minPrice": 2790000,
      "maxPrice": 2990000,
      "safetyRating": "5.0 ★ (6 Airbags + Level 2 ADAS + Ultra-Safe Blade Battery)",
      "groundClearance": "170 mm",
      "bootSpace": "180 Litres (580L with 3rd Row Folded)",
      "waitingPeriod": "2 - 5 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/byd-emax-7/colors/quartz-blue.webp",
      "summary": "India's premier three-row electric family MPV, the BYD eMAX 7 is offered in 6-Seater Captain Seat (2+2+2) and 7-Seater (2+3+2) configurations powered by a 71.8 kWh BYD Blade Battery delivering up to 530 km NEDC range and 115 kW DC fast charging (0-80% in 37 mins). Highlights include a 1.42 m² panoramic glass roof with electric sunshade, ventilated & electrically adjustable front seats, a 12.8-inch intelligent rotating touchscreen, Level 2 ADAS, 6 airbags, and Vehicle-to-Load (VTOL) mobile power.",
      "colors": [
          {
              "id": "quartz-blue",
              "name": "Quartz Blue",
              "hex": "#273651",
              "image": "https://ik.imagekit.io/2908vvlod/cars/byd-emax-7/colors/quartz-blue.webp"
          },
          {
              "id": "cosmos-black",
              "name": "Cosmos Black",
              "hex": "#1C1F22",
              "image": "https://ik.imagekit.io/2908vvlod/cars/byd-emax-7/colors/cosmos-black.webp"
          },
          {
              "id": "crystal-white",
              "name": "Crystal White",
              "hex": "#C6CED9",
              "image": "https://ik.imagekit.io/2908vvlod/cars/byd-emax-7/colors/crystal-white.webp"
          },
          {
              "id": "harbour-grey",
              "name": "Harbour Grey",
              "hex": "#57595B",
              "image": "https://ik.imagekit.io/2908vvlod/cars/byd-emax-7/colors/harbour-grey.webp"
          }
      ],
      "gallery": [
          {
              "id": "emax7-hero-stance",
              "title": "BYD eMAX 7 Long-Range 6 & 7-Seater Electric MPV",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-emax-7/gallery/emax7-hero-stance.webp"
          },
          {
              "id": "emax7-electric-elegance",
              "title": "Electric Elegance with Dragon Face Design & 2,800 mm Wheelbase",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-emax-7/gallery/emax7-electric-elegance.webp"
          },
          {
              "id": "emax7-crystal-diamond-led",
              "title": "Crystal Diamond Floating LED Headlamps with Intelligent High Beam",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-emax-7/gallery/emax7-crystal-diamond-led.webp"
          },
          {
              "id": "emax7-immersive-interiors",
              "title": "Immersive Black & Brown Dual-Tone Three-Row Cabin",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-emax-7/gallery/emax7-immersive-interiors.webp"
          },
          {
              "id": "emax7-intelligent-cockpit",
              "title": "Modern Cockpit with 12.8-inch Rotatable Display & 5-inch LCD Cluster",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-emax-7/gallery/emax7-intelligent-cockpit.webp"
          },
          {
              "id": "emax7-panoramic-glass-roof",
              "title": "1.42 m² Panoramic Glass Roof with Electric Slide Sunshade",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-emax-7/gallery/emax7-panoramic-glass-roof.webp"
          },
          {
              "id": "emax7-seating-flexibility",
              "title": "Flexible 6-Seater Captain & 7-Seater Layouts with 580L Max Boot",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-emax-7/gallery/emax7-seating-flexibility.webp"
          },
          {
              "id": "emax7-seamless-connectivity",
              "title": "Seamless Connectivity with Wireless Charging, NFC Key & Voice Control",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-emax-7/gallery/emax7-seamless-connectivity.webp"
          },
          {
              "id": "emax7-vtol-power",
              "title": "Vehicle-to-Load (VTOL) Mobile Power Station for Family Adventures",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-emax-7/gallery/emax7-vtol-power.webp"
          },
          {
              "id": "emax7-150kw-performance",
              "title": "150 kW (204 PS) & 310 Nm 8-in-1 Electric Powertrain (0-100 km/h in 8.6s)",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-emax-7/gallery/emax7-150kw-performance.webp"
          },
          {
              "id": "emax7-blade-battery",
              "title": "71.8 kWh Ultra-Safe BYD Blade Battery with 530 km NEDC Range",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-emax-7/gallery/emax7-blade-battery.webp"
          },
          {
              "id": "emax7-adas-safety",
              "title": "BYD Advanced Driver Assistance System (Level 2 ADAS) & 6 Airbags",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-emax-7/gallery/emax7-adas-safety.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "71.8 kWh Blade Battery + 120 kW (163 PS) / 310 Nm Motor (Comfort — 485 km MIDC Range)",
              "71.8 kWh Blade Battery + 150 kW (204 PS) / 310 Nm Motor (Superior — 530 km NEDC Range, 0-100 km/h in 8.6s)"
          ],
          "transmissions": [
              "Single-Speed Automatic (FWD)"
          ],
          "dimensions": "4710 mm L × 1810 mm W × 1690 mm H",
          "wheelbase": "2800 mm",
          "fuelTank": "71.8 kWh Blade Battery (115 kW DC Fast Charge: 0-80% in 37 mins)",
          "seatingCapacity": "6 Seater / 7 Seater"
      },
      "variants": [
          {
              "name": "Comfort 6-Seater (71.8 kWh)",
              "exShowroom": 2790000,
              "fuel": "Electric",
              "trans": "Automatic",
              "engine": "71.8 kWh Blade Battery (163 PS)",
              "mileage": "485 km/charge",
              "isVFM": false,
              "keyFeatures": [
                  "71.8 kWh BYD Blade Battery (485 km MIDC Range) & 115 kW DC Fast Charging",
                  "2+2+2 Independent Captain Seats with Black & Brown Synthetic Leather",
                  "12.8-inch Intelligent Rotating Touchscreen, 6 Speakers & NFC Card Key",
                  "6 Airbags, 360° View Monitor, Rear 4 Parking Radars, ESC, EPB & VTOL"
              ]
          },
          {
              "name": "Comfort 7-Seater (71.8 kWh)",
              "exShowroom": 2830000,
              "fuel": "Electric",
              "trans": "Automatic",
              "engine": "71.8 kWh Blade Battery (163 PS)",
              "mileage": "485 km/charge",
              "isVFM": false,
              "keyFeatures": [
                  "71.8 kWh BYD Blade Battery (485 km MIDC Range) with 2+3+2 7-Seater Layout",
                  "12.8-inch Rotating Touchscreen with Apple CarPlay, Android Auto & Voice Assistant",
                  "Crystal Diamond Floating LED Headlamps, LED Taillight Bar & R17 Alloy Wheels",
                  "6 Airbags, 360° Camera, TPMS, Cruise Control & Roof-Mounted AC Vents"
              ]
          },
          {
              "name": "Superior 6-Seater (71.8 kWh ADAS)",
              "exShowroom": 2930000,
              "fuel": "Electric",
              "trans": "Automatic",
              "engine": "71.8 kWh Blade Battery (204 PS)",
              "mileage": "530 km/charge",
              "isVFM": true,
              "vfmBadge": "Best Luxury Captain-Seat MPV",
              "keyFeatures": [
                  "150 kW (204 PS) & 310 Nm Motor (0-100 km/h in 8.6s) with 530 km NEDC Range",
                  "Panoramic Glass Roof (1.42 m²) with Electric Sunshade & 2+2+2 Captain Seats",
                  "Level 2 ADAS (ACC, AEB, ICC, BSD, LDA, ELKA, RCTA/B, DOW, PCW)",
                  "Ventilated & Powered Front Seats (6-Way Driver / 4-Way Passenger), Power Tailgate & Wireless Charger"
              ]
          },
          {
              "name": "Superior 7-Seater (71.8 kWh ADAS)",
              "exShowroom": 2990000,
              "fuel": "Electric",
              "trans": "Automatic",
              "engine": "71.8 kWh Blade Battery (204 PS)",
              "mileage": "530 km/charge",
              "isVFM": true,
              "vfmBadge": "Top 7-Seater Family Flagship",
              "keyFeatures": [
                  "150 kW (204 PS) & 310 Nm Motor with 530 km NEDC Range & 2+3+2 7-Seater Cabin",
                  "Panoramic Glass Roof with Electric Sunshade, Roof Rails & Power Tailgate",
                  "Full Level 2 ADAS Suite + 6 Airbags + 360° View Monitor",
                  "Ventilated & Powered Front Seats, Wireless Phone Charger & PM2.5 Filtration System"
              ]
          }
      ]
  },
  {
      "id": "byd-seal",
      "name": "BYD Seal",
      "brand": "BYD",
      "tagline": "Ocean Aesthetics Electric Sports Sedan with 530 PS AWD, 0–100 km/h in 3.8s, 650 km Range & Cell-to-Body Technology",
      "launchDate": "2025 (MY2025 with DiSus-C)",
      "bodyType": "Sedan",
      "fuelTypes": [
          "Electric"
      ],
      "priceRange": "₹41.50 - ₹53.65 Lakh",
      "minPrice": 4150000,
      "maxPrice": 5365000,
      "safetyRating": "5.0 ★ (Euro NCAP 5-Star + 9 Airbags + CTB Technology)",
      "groundClearance": "149 mm",
      "bootSpace": "400 Litres + 53L Frunk",
      "waitingPeriod": "3 - 6 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/byd-seal/colors/atlantis-gray.webp",
      "summary": "Engineered on BYD's upgraded e-Platform 3.0 with world-first Cell-to-Body (CTB) technology (40,500 Nm/deg torsional rigidity) and a 0.219 Cd drag coefficient, the MY2025 BYD Seal electric sports sedan offers 61.44 kWh RWD (510 km), 82.56 kWh Extended Range RWD (650 km), and 82.56 kWh Dual-Motor AWD Performance (530 PS, 670 Nm, 0-100 km/h in 3.8s with BYD DiSus-C intelligent damping & iTAC torque control), paired with 9 airbags, Level 2 ADAS, a silver-plated panoramic glass roof with electric sunshade, 15.6-inch rotating screen, and 12-speaker DYNAUDIO sound.",
      "colors": [
          {
              "id": "atlantis-gray",
              "name": "Atlantis Gray",
              "hex": "#273651",
              "image": "https://ik.imagekit.io/2908vvlod/cars/byd-seal/colors/atlantis-gray.webp"
          },
          {
              "id": "cosmos-black",
              "name": "Cosmos Black",
              "hex": "#1C1F22",
              "image": "https://ik.imagekit.io/2908vvlod/cars/byd-seal/colors/cosmos-black.webp"
          },
          {
              "id": "aurora-white",
              "name": "Aurora White",
              "hex": "#C6CED9",
              "image": "https://ik.imagekit.io/2908vvlod/cars/byd-seal/colors/aurora-white.webp"
          },
          {
              "id": "shark-gray",
              "name": "Shark Gray",
              "hex": "#57595B",
              "image": "https://ik.imagekit.io/2908vvlod/cars/byd-seal/colors/shark-gray.webp"
          }
      ],
      "gallery": [
          {
              "id": "seal-fastback-low-slung",
              "title": "Fastback & Low-Slung Ocean Aesthetics (0.219 Cd Drag Coefficient)",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-seal/gallery/seal-fastback-low-slung.webp"
          },
          {
              "id": "seal-double-u-led-headlights",
              "title": "Double-U Floating LED Headlights & Glistening Ripple DRLs",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-seal/gallery/seal-double-u-led-headlights.webp"
          },
          {
              "id": "seal-boundless-led-taillight",
              "title": "Boundless Water-Drop Matrix LED Tail Light Bar",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-seal/gallery/seal-boundless-led-taillight.webp"
          },
          {
              "id": "seal-19-inch-blade-wheels",
              "title": "19-inch Precision Blade Aerodynamic Alloy Wheels",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-seal/gallery/seal-19-inch-blade-wheels.webp"
          },
          {
              "id": "seal-luxurious-sport-interior",
              "title": "Luxurious Suedette & Quilted Leather Ocean Aesthetics Cabin",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-seal/gallery/seal-luxurious-sport-interior.webp"
          },
          {
              "id": "seal-bolstered-sports-seats",
              "title": "Bolstered Sports Seats with Ventilation, Heating, Lumbar & Memory",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-seal/gallery/seal-bolstered-sports-seats.webp"
          },
          {
              "id": "seal-silver-plated-panoramic-roof",
              "title": "1.9 m² Silver-Plated Panoramic Glass Roof with Electric Sunshade",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-seal/gallery/seal-silver-plated-panoramic-roof.webp"
          },
          {
              "id": "seal-intelligent-cockpit",
              "title": "15.6-inch Rotating Screen, 10.25-inch LCD Cockpit, W-HUD & 12-Speaker DYNAUDIO",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-seal/gallery/seal-intelligent-cockpit.webp"
          },
          {
              "id": "seal-vtol-mobile-power",
              "title": "Vehicle-to-Load (VTOL) Mobile Power Station",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-seal/gallery/seal-vtol-mobile-power.webp"
          },
          {
              "id": "seal-cell-to-body-ctb",
              "title": "Upgraded e-Platform 3.0 with Cell-to-Body (CTB) Technology",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-seal/gallery/seal-cell-to-body-ctb.webp"
          },
          {
              "id": "seal-body-safety-9-airbags",
              "title": "5-Star Euro NCAP Body Safety with 9 Airbags & Double Wishbone Suspension",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-seal/gallery/seal-body-safety-9-airbags.webp"
          },
          {
              "id": "seal-disus-c-itac-handling",
              "title": "50:50 Axle Load Ratio with BYD DiSus-C & iTAC Torque Control",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-seal/gallery/seal-disus-c-itac-handling.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "61.44 kWh Blade Battery RWD (150 kW / 204 PS, 310 Nm, 0-100 km/h in 7.5s, 510 km NEDC)",
              "82.56 kWh Blade Battery RWD (230 kW / 313 PS, 360 Nm, 0-100 km/h in 5.9s, 650 km NEDC)",
              "82.56 kWh Blade Battery AWD (390 kW / 530 PS, 670 Nm, 0-100 km/h in 3.8s, 580 km NEDC)"
          ],
          "transmissions": [
              "Single-Speed Automatic (RWD / Dual-Motor AWD with iTAC)"
          ],
          "dimensions": "4800 mm L × 1875 mm W × 1460 mm H",
          "wheelbase": "2920 mm",
          "fuelTank": "61.44 kWh / 82.56 kWh Blade Battery (Up to 150 kW DC Fast Charge)",
          "seatingCapacity": "5 Seater"
      },
      "variants": [
          {
              "name": "Dynamic (61.44 kWh RWD)",
              "exShowroom": 4150000,
              "fuel": "Electric",
              "trans": "Automatic (RWD)",
              "engine": "61.44 kWh RWD (204 PS)",
              "mileage": "510 km/charge",
              "isVFM": false,
              "keyFeatures": [
                  "61.44 kWh Blade Battery with Cell-to-Body (CTB) Technology & 510 km NEDC Range",
                  "150 kW (204 PS) & 310 Nm Rear-Wheel Drive (0-100 km/h in 7.5s) & 110 kW DC Charging",
                  "9 Airbags, Full Level 2 ADAS Suite, 360° Camera & Double Wishbone Front Suspension",
                  "15.6-inch Rotating Screen, 12-Speaker DYNAUDIO, Ventilated & Heated Front Seats & Electric Sunshade"
              ]
          },
          {
              "name": "Premium (82.56 kWh Extended Range RWD)",
              "exShowroom": 4620000,
              "fuel": "Electric",
              "trans": "Automatic (RWD)",
              "engine": "82.56 kWh RWD (313 PS)",
              "mileage": "650 km/charge",
              "isVFM": true,
              "vfmBadge": "650 km Range Sweet Spot",
              "keyFeatures": [
                  "82.56 kWh Blade Battery with 650 km NEDC Range & 150 kW Ultra-Fast DC Charging",
                  "230 kW (313 PS) & 360 Nm Rear-Wheel Drive (0-100 km/h in 5.9 Seconds)",
                  "Genuine Leather Bolstered Sports Seats, Windshield Head-Up Display (W-HUD) & 19-inch Blade Alloys",
                  "Frequency Selective Damping (FSD) Front & Rear Shock Absorbers, Driver Lumbar & Memory"
              ]
          },
          {
              "name": "Performance (82.56 kWh Dual-Motor AWD)",
              "exShowroom": 5365000,
              "fuel": "Electric",
              "trans": "Automatic (AWD)",
              "engine": "82.56 kWh AWD (530 PS)",
              "mileage": "580 km/charge",
              "isVFM": true,
              "vfmBadge": "530 PS / 3.8s Supercar Slayer",
              "keyFeatures": [
                  "390 kW (530 PS) & 670 Nm Dual-Motor AWD — 0 to 100 km/h in 3.8 Seconds",
                  "BYD DiSus-C Intelligent Damping Body Control + iTAC Torque Adaption Control",
                  "Colored Fixed Front Brake Calipers with Ventilated & Drilled Performance Discs",
                  "82.56 kWh Blade Battery (580 km Range), 9 Airbags, W-HUD, 12-Speaker DYNAUDIO & Level 2 ADAS"
              ]
          }
      ]
  },
  {
      "id": "byd-sealion-7",
      "name": "BYD Sealion 7",
      "brand": "BYD",
      "tagline": "Pure Performance eSUV with 530 PS Dual-Motor AWD, 0–100 km/h in 4.5s, 11 Airbags & Nappa Leather Luxury",
      "launchDate": "2025 (Includes New Dynamic Trim)",
      "bodyType": "SUV",
      "fuelTypes": [
          "Electric"
      ],
      "priceRange": "₹41.90 - ₹55.90 Lakh",
      "minPrice": 4190000,
      "maxPrice": 5590000,
      "safetyRating": "5.0 ★ (Euro NCAP 5-Star + 11 Airbags + CTB Architecture)",
      "groundClearance": "178 mm",
      "bootSpace": "500 Litres + 58L Frunk",
      "waitingPeriod": "4 - 8 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/byd-sealion-7/colors/atlantis-gray.webp",
      "summary": "BYD India's flagship Pure Performance eSUV, the BYD Sealion 7 combines Ocean Series fastback SUV design with Cell-to-Body (CTB) Blade Battery architecture, an industry-leading 11 airbags standard across all variants, Level 2 ADAS, Double Wishbone front & Multi-Link rear suspension with FSD dampers, a 15.6-inch rotating screen, 50W wireless charger, panoramic glass roof with electric sunshade, Nappa leather ventilated seats with driver power leg rest, 12-speaker DYNAUDIO, and up to 530 PS / 690 Nm AWD performance (0-100 km/h in 4.5s).",
      "colors": [
          {
              "id": "atlantis-gray",
              "name": "Atlantis Gray",
              "hex": "#273651",
              "image": "https://ik.imagekit.io/2908vvlod/cars/byd-sealion-7/colors/atlantis-gray.webp"
          },
          {
              "id": "cosmos-black",
              "name": "Cosmos Black",
              "hex": "#1C1F22",
              "image": "https://ik.imagekit.io/2908vvlod/cars/byd-sealion-7/colors/cosmos-black.webp"
          },
          {
              "id": "aurora-white",
              "name": "Aurora White",
              "hex": "#C6CED9",
              "image": "https://ik.imagekit.io/2908vvlod/cars/byd-sealion-7/colors/aurora-white.webp"
          },
          {
              "id": "shark-gray",
              "name": "Shark Gray",
              "hex": "#57595B",
              "image": "https://ik.imagekit.io/2908vvlod/cars/byd-sealion-7/colors/shark-gray.webp"
          }
      ],
      "gallery": [
          {
              "id": "sealion7-pure-performance-esuv",
              "title": "BYD Sealion 7 Pure Performance Fastback eSUV",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-sealion-7/gallery/sealion7-pure-performance-esuv.webp"
          },
          {
              "id": "sealion7-ocean-design-language",
              "title": "Ocean Series Design Language with Double-U Floating LED Headlamps",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-sealion-7/gallery/sealion7-ocean-design-language.webp"
          },
          {
              "id": "sealion7-sculpted-rear-taillight",
              "title": "Sculpted Fastback Rear with Water-Drop Matrix LED Tail Bar",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-sealion-7/gallery/sealion7-sculpted-rear-taillight.webp"
          },
          {
              "id": "sealion7-electrifying-power",
              "title": "Electrifying 530 PS & 690 Nm AWD Performance (0–100 km/h in 4.5s)",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-sealion-7/gallery/sealion7-electrifying-power.webp"
          },
          {
              "id": "sealion7-immersive-cockpit",
              "title": "Immersive Floating Cockpit with 15.6-inch Rotating Screen & W-HUD",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-sealion-7/gallery/sealion7-immersive-cockpit.webp"
          },
          {
              "id": "sealion7-spacious-lounge-cabin",
              "title": "2,930 mm Wheelbase Lounge Cabin with 500L Boot + 58L Frunk",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-sealion-7/gallery/sealion7-spacious-lounge-cabin.webp"
          },
          {
              "id": "sealion7-nappa-leather-seats",
              "title": "Quilted Nappa Leather Seats with Ventilation & Power Leg Rest",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-sealion-7/gallery/sealion7-nappa-leather-seats.webp"
          },
          {
              "id": "sealion7-panoramic-glass-roof",
              "title": "Panoramic Glass Roof with One-Touch Electric Sunshade",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-sealion-7/gallery/sealion7-panoramic-glass-roof.webp"
          },
          {
              "id": "sealion7-dynaudio-12-speakers",
              "title": "DYNAUDIO 12-Speaker Concert Sound System",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-sealion-7/gallery/sealion7-dynaudio-12-speakers.webp"
          },
          {
              "id": "sealion7-nfc-card-key",
              "title": "Smart NFC Card Key & Hands-Free Power Tailgate",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-sealion-7/gallery/sealion7-nfc-card-key.webp"
          },
          {
              "id": "sealion7-vtol-power",
              "title": "Vehicle-to-Load (VTOL) Bi-Directional Power on Demand",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-sealion-7/gallery/sealion7-vtol-power.webp"
          },
          {
              "id": "sealion7-ctb-11-airbags",
              "title": "Cell-to-Body (CTB) Architecture, Blade Battery & 11 Airbags",
              "url": "https://ik.imagekit.io/2908vvlod/cars/byd-sealion-7/gallery/sealion7-ctb-11-airbags.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "71.8 kWh Blade Battery RWD (170 kW / 231 PS, 380 Nm, 0-100 km/h in 7.3s, 520 km NEDC)",
              "82.56 kWh Blade Battery RWD (230 kW / 313 PS, 380 Nm, 0-100 km/h in 6.7s, 567 km NEDC)",
              "82.56 kWh Blade Battery AWD (390 kW / 530 PS, 690 Nm, 0-100 km/h in 4.5s, 542 km NEDC)"
          ],
          "transmissions": [
              "Single-Speed Automatic (RWD / Dual-Motor AWD with iTAC)"
          ],
          "dimensions": "4830 mm L × 1925 mm W × 1620 mm H",
          "wheelbase": "2930 mm",
          "fuelTank": "71.8 kWh / 82.56 kWh Blade Battery (Up to 150 kW DC / 11 kW AC)",
          "seatingCapacity": "5 Seater"
      },
      "variants": [
          {
              "name": "Dynamic (71.8 kWh RWD)",
              "exShowroom": 4190000,
              "fuel": "Electric",
              "trans": "Automatic (RWD)",
              "engine": "71.8 kWh RWD (231 PS)",
              "mileage": "520 km/charge",
              "isVFM": true,
              "vfmBadge": "New ₹41.90L Entry Luxury eSUV",
              "keyFeatures": [
                  "71.8 kWh BYD Blade Battery (520 km NEDC Range) & 170 kW (231 PS) / 380 Nm RWD (0-100 in 7.3s)",
                  "11 Airbags Standard + Full Level 2 ADAS Suite & 360° Surround Camera",
                  "15.6-inch Rotating Touchscreen, 10.25-inch LCD Cluster, 10 Speakers & 50W Wireless Charger",
                  "Panoramic Glass Roof with Electric Sunshade, Ventilated Front Seats & FSD Shock Absorbers"
              ]
          },
          {
              "name": "Premium (82.56 kWh RWD)",
              "exShowroom": 4990000,
              "fuel": "Electric",
              "trans": "Automatic (RWD)",
              "engine": "82.56 kWh RWD (313 PS)",
              "mileage": "567 km/charge",
              "isVFM": true,
              "vfmBadge": "567 km Range & Nappa Luxury",
              "keyFeatures": [
                  "82.56 kWh BYD Blade Battery (567 km NEDC Range) with 150 kW DC & 11 kW AC Charging",
                  "230 kW (313 PS) & 380 Nm RWD Motor (0-100 km/h in 6.7 Seconds)",
                  "Quilted Nappa Leather Seats with Driver Power Leg Rest, 4-Way Lumbar & Position Memory",
                  "12-Speaker DYNAUDIO, Windshield Head-Up Display (W-HUD) & Hands-Free Power Tailgate"
              ]
          },
          {
              "name": "Premium (Rich Tan & Black Interior) (82.56 kWh RWD)",
              "exShowroom": 5060000,
              "fuel": "Electric",
              "trans": "Automatic (RWD)",
              "engine": "82.56 kWh RWD (313 PS)",
              "mileage": "567 km/charge",
              "isVFM": false,
              "keyFeatures": [
                  "Bespoke Rich Tan & Black Dual-Tone Quilted Nappa Leather Cabin",
                  "82.56 kWh Blade Battery (567 km Range) & 230 kW (313 PS) RWD Motor",
                  "12-Speaker DYNAUDIO, W-HUD, Hands-Free Tailgate, 11 Airbags & Level 2 ADAS"
              ]
          },
          {
              "name": "Performance (82.56 kWh Dual-Motor AWD)",
              "exShowroom": 5590000,
              "fuel": "Electric",
              "trans": "Automatic (AWD)",
              "engine": "82.56 kWh AWD (530 PS)",
              "mileage": "542 km/charge",
              "isVFM": true,
              "vfmBadge": "530 PS AWD Flagship eSUV",
              "keyFeatures": [
                  "390 kW (530 PS) & 690 Nm Dual-Motor AWD — 0 to 100 km/h in 4.5 Seconds",
                  "20-inch Wave Swing Alloy Wheels with Michelin 245/45 R20 Tyres & Colored Fixed Calipers",
                  "iTAC Intelligent Torque Adaption Control + FSD Frequency Selective Damping",
                  "82.56 kWh Blade Battery (542 km Range), 11 Airbags, Nappa Leather, W-HUD & 12-Speaker DYNAUDIO"
              ]
          }
      ]
  },
  {
      "id": "renault-kwid",
      "name": "Renault Kwid",
      "brand": "Renault",
      "tagline": "India's SUV-Inspired Entry Hatchback with 184 mm Ground Clearance, 6 Airbags & 20.32 cm Touchscreen MediaNAV",
      "launchDate": "2026 (MY26 Updated Range)",
      "bodyType": "Hatchback",
      "fuelTypes": [
          "Petrol"
      ],
      "priceRange": "₹4.53 - ₹5.61 Lakh",
      "minPrice": 452900,
      "maxPrice": 560900,
      "safetyRating": "6 Airbags + 17 Standard Safety Features (ESP, HSA, TPMS)",
      "groundClearance": "184 mm",
      "bootSpace": "279 Litres (620L Expanded)",
      "waitingPeriod": "1 - 3 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/renault-kwid/colors/zanskar-blue.webp",
      "summary": "Updated for MY26 with Renault's Human First safety suite including 6 airbags, Electronic Stability Program (ESP), Hill Start Assist (HSA), Traction Control System (TCS), and Tyre Pressure Monitoring System (TPMS), the Renault Kwid pairs SUV-inspired styling, 184 mm ground clearance, and LED DRLs with a peppy 1.0L SCe petrol engine (69 PS, 92.5 Nm) offered in 5-speed Manual and Easy-R AMT transmissions.",
      "colors": [
          {
              "id": "zanskar-blue",
              "name": "Zanskar Blue",
              "hex": "#1B5E85",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-kwid/colors/zanskar-blue.webp"
          },
          {
              "id": "moonlight-silver",
              "name": "Moonlight Silver",
              "hex": "#A3A8AE",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-kwid/colors/moonlight-silver.webp"
          },
          {
              "id": "outback-bronze",
              "name": "Outback Bronze",
              "hex": "#6D543E",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-kwid/colors/outback-bronze.webp"
          },
          {
              "id": "fiery-red",
              "name": "Fiery Red",
              "hex": "#B81D24",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-kwid/colors/fiery-red.webp"
          },
          {
              "id": "ice-cool-white",
              "name": "Ice Cool White",
              "hex": "#F4F5F7",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-kwid/colors/ice-cool-white.webp"
          },
          {
              "id": "zanskar-blue-with-mystery-black-roof",
              "name": "Zanskar Blue With Mystery Black Roof",
              "hex": "#1B5E85",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-kwid/colors/zanskar-blue-with-mystery-black-roof.webp"
          },
          {
              "id": "ice-cool-white-with-mystery-black-roof",
              "name": "Ice Cool White With Mystery Black Roof",
              "hex": "#F4F5F7",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-kwid/colors/ice-cool-white-with-mystery-black-roof.webp"
          },
          {
              "id": "fiery-red-with-mystery-black-roof",
              "name": "Fiery Red With Mystery Black Roof",
              "hex": "#B81D24",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-kwid/colors/fiery-red-with-mystery-black-roof.webp"
          },
          {
              "id": "moonlight-silver-with-mystery-black-roof",
              "name": "Moonlight Silver With Mystery Black Roof",
              "hex": "#A3A8AE",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-kwid/colors/moonlight-silver-with-mystery-black-roof.webp"
          }
      ],
      "gallery": [
          {
              "id": "kwid-hero-front",
              "title": "SUV-Inspired Stance with Bold Front Grille & Silver Streak LED DRLs",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kwid/gallery/kwid-hero-front.webp"
          },
          {
              "id": "kwid-climber-action",
              "title": "Renault Kwid Climber Dual-Tone Exterior with Roof Rails",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kwid/gallery/kwid-climber-action.webp"
          },
          {
              "id": "kwid-ground-clearance",
              "title": "High 184 mm Ground Clearance with Front & Rear Skid Plates",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kwid/gallery/kwid-ground-clearance.webp"
          },
          {
              "id": "kwid-dualtone-roof",
              "title": "Contrasting Mystery Black Dual-Tone Roof & ORVMs",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kwid/gallery/kwid-dualtone-roof.webp"
          },
          {
              "id": "kwid-wheels",
              "title": "R14 Volcano Grey Multi-Spoke Flex Wheels",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kwid/gallery/kwid-wheels.webp"
          },
          {
              "id": "kwid-rear-view",
              "title": "Signature C-Shaped LED Tail Lamps & Sculpted Tailgate",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kwid/gallery/kwid-rear-view.webp"
          },
          {
              "id": "kwid-dashboard",
              "title": "Dual-Tone Cockpit with 20.32 cm Touchscreen MediaNAV Evolution",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kwid/gallery/kwid-dashboard.webp"
          },
          {
              "id": "kwid-steering-cluster",
              "title": "LED Digital Instrument Cluster & Steering-Mounted Controls",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kwid/gallery/kwid-steering-cluster.webp"
          },
          {
              "id": "kwid-infotainment",
              "title": "Android Auto, Apple CarPlay & Voice Recognition",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kwid/gallery/kwid-infotainment.webp"
          },
          {
              "id": "kwid-seats",
              "title": "Sporty Climber Upholstery with Metal Mustard Accents",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kwid/gallery/kwid-seats.webp"
          },
          {
              "id": "kwid-six-airbags",
              "title": "6 Airbags & 17 Standard Human First Safety Features",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kwid/gallery/kwid-six-airbags.webp"
          },
          {
              "id": "kwid-rear-camera",
              "title": "Reverse Parking Camera with Dynamic Guidelines",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kwid/gallery/kwid-rear-camera.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "999 cc 1.0L SCe 3-Cylinder Petrol (69 PS @ 5500 rpm, 92.5 Nm @ 4250 rpm) – 5MT / 5-Speed Easy-R AMT"
          ],
          "dimensions": "3731 mm L x 1579 mm W x 1474 mm H (1490 mm with Roof Bars)",
          "wheelbase": "2422 mm",
          "FuelTank": "28 Litres",
          "Tires": "165/70 R14 Tubeless Radial"
      },
      "variants": [
          {
              "name": "Evolution 1.0L MT",
              "engine": "1.0L SCe Petrol (69 PS)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "21.46 kmpl",
              "exShowroom": 452900,
              "isVFM": true,
              "vfmBadge": "Best Sub-5L Entry SUV-Hatch Pick",
              "ADASSafety": "ESP, Hill Start Assist, Traction Control, TPMS & ABS with EBD",
              "keyFeatures": [
                  "20.32 cm (8-inch) Touchscreen MediaNAV Evolution with Android Auto & Apple CarPlay",
                  "Silver Streak LED DRLs & C-Shaped Signature LED Tail Lamps",
                  "Electronic Stability Program (ESP), Hill Start Assist (HSA), Traction Control & TPMS",
                  "Front & Rear Power Windows, Remote Keyless Entry & LED Digital Instrument Cluster"
              ]
          },
          {
              "name": "Evolution 1.0L Easy-R AMT",
              "engine": "1.0L SCe Petrol (69 PS)",
              "fuel": "Petrol",
              "trans": "AMT",
              "mileage": "22.30 kmpl",
              "exShowroom": 489900,
              "isVFM": true,
              "vfmBadge": "Most Affordable Automatic in India",
              "ADASSafety": "ESP, Hill Start Assist, Traction Control, TPMS & Traffic Assist",
              "keyFeatures": [
                  "5-Speed Easy-R Shift-by-Wire Rotary Dial AMT with Crawl / Traffic Assist",
                  "20.32 cm Touchscreen MediaNAV Evolution with Rear View Camera",
                  "Electronic Stability Program (ESP), Hill Start Assist (HSA) & TPMS",
                  "184 mm Ground Clearance & 279-Litre Boot Space"
              ]
          },
          {
              "name": "Climber 1.0L MT",
              "engine": "1.0L SCe Petrol (69 PS)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "21.46 kmpl",
              "exShowroom": 514900,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "6 Airbags, ESP, Hill Start Assist, Traction Control & Rear Camera",
              "keyFeatures": [
                  "6 Airbags (Front, Side & Curtain) & 3-Point Seatbelts for All Seats",
                  "Sporty Climber Exterior Package with Roof Bars, Skid Plates & Volcano Grey Flex Wheels",
                  "Optional Dual-Tone Mystery Black Roof & Sporty White / Mustard Cabin Accents",
                  "Rear Seat Armrest, Fast USB Charger, Rear View Camera & Electric ORVMs"
              ]
          },
          {
              "name": "Climber 1.0L Easy-R AMT",
              "engine": "1.0L SCe Petrol (69 PS)",
              "fuel": "Petrol",
              "trans": "AMT",
              "mileage": "22.30 kmpl",
              "exShowroom": 560900,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "6 Airbags, ESP, Hill Start Assist, Traction Control & Rear Camera",
              "keyFeatures": [
                  "5-Speed Easy-R Rotary Dial Automatic with Crawl Assist & Hill Start Assist",
                  "6 Airbags, ESP, Traction Control System & Real-Time TPMS",
                  "Dual-Tone Mystery Black Roof Options & Climber Protective Body Cladding",
                  "20.32 cm Touchscreen MediaNAV, Reverse Parking Camera & Steering Audio Controls"
              ]
          }
      ]
  },
  {
      "id": "renault-triber",
      "name": "Renault Triber",
      "brand": "Renault",
      "tagline": "India's Most Modular 7-Seater Now with 100 PS 1.0L Turbo Engine, 6 Airbags, 625L Boot & EasyFix Seats",
      "launchDate": "2026 (MY26 Facelift & New 1.0L Turbo)",
      "bodyType": "MUV",
      "fuelTypes": [
          "Petrol"
      ],
      "priceRange": "₹5.81 - ₹9.00 Lakh",
      "minPrice": 580875,
      "maxPrice": 899900,
      "safetyRating": "4.0 ★ (Global NCAP 4-Star + 6 Airbags Standard)",
      "groundClearance": "182 mm",
      "bootSpace": "625 Litres (5-Seat Mode) / 84L (7-Seat Mode)",
      "waitingPeriod": "2 - 4 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/renault-triber/colors/zanskar-blue.webp",
      "summary": "Refreshed for MY26 with Renault's new diamond emblem, redesigned front fascia, and the introduction of a punchy 100 PS / 180 Nm 1.0L Turbo petrol engine alongside the 72 PS 1.0L Energy engine, the Renault Triber delivers unmatched 100+ seating configurations with EasyFix removable 3rd-row seats, 625 litres of boot space in Life Mode, twin AC with 2nd and 3rd row vents, 6 airbags, ESP, Hill Start Assist, wireless charger, and a 17.78 cm TFT digital cluster.",
      "colors": [
          {
              "id": "zanskar-blue",
              "name": "Zanskar Blue",
              "hex": "#1B5E85",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-triber/colors/zanskar-blue.webp"
          },
          {
              "id": "shadow-grey",
              "name": "Shadow Grey",
              "hex": "#5C6168",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-triber/colors/shadow-grey.webp"
          },
          {
              "id": "moonlight-silver",
              "name": "Moonlight Silver",
              "hex": "#A3A8AE",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-triber/colors/moonlight-silver.webp"
          },
          {
              "id": "amber-terracotta",
              "name": "Amber Terracotta",
              "hex": "#A64B2A",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-triber/colors/amber-terracotta.webp"
          },
          {
              "id": "stealth-black",
              "name": "Stealth Black",
              "hex": "#181A1D",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-triber/colors/stealth-black.webp"
          },
          {
              "id": "ice-cool-white",
              "name": "Ice Cool White",
              "hex": "#F4F5F7",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-triber/colors/ice-cool-white.webp"
          },
          {
              "id": "amber-terracotta-with-mystery-black-roof",
              "name": "Amber Terracotta With Mystery Black Roof",
              "hex": "#A64B2A",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-triber/colors/amber-terracotta-with-mystery-black-roof.webp"
          },
          {
              "id": "shadow-grey-with-mystery-black-roof",
              "name": "Shadow Grey With Mystery Black Roof",
              "hex": "#5C6168",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-triber/colors/shadow-grey-with-mystery-black-roof.webp"
          },
          {
              "id": "ice-cool-white-with-mystery-black-roof",
              "name": "Ice Cool White With Mystery Black Roof",
              "hex": "#F4F5F7",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-triber/colors/ice-cool-white-with-mystery-black-roof.webp"
          }
      ],
      "gallery": [
          {
              "id": "triber-turbo-hero",
              "title": "New 2026 Renault Triber Turbo with New Diamond Grille & LED Projector Headlamps",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-triber/gallery/triber-turbo-hero.webp"
          },
          {
              "id": "triber-family-lifestyle",
              "title": "Many Lives, One Car – Modular 7-Seater Family Proportion",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-triber/gallery/triber-family-lifestyle.webp"
          },
          {
              "id": "triber-rear-quarter",
              "title": "Sculpted Rear Profile with Eagle-Beak Tail Lamps & SUV Skid Plates",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-triber/gallery/triber-rear-quarter.webp"
          },
          {
              "id": "triber-roof-rails",
              "title": "Functional Load-Bearing Roof Rails (50 kg Capacity)",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-triber/gallery/triber-roof-rails.webp"
          },
          {
              "id": "triber-top-view",
              "title": "Spacious 3-Row 7-Seater Cabin Architecture on 2636 mm Wheelbase",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-triber/gallery/triber-top-view.webp"
          },
          {
              "id": "triber-auto-headlamps",
              "title": "Auto Headlamps & Rain-Sensing Wipers",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-triber/gallery/triber-auto-headlamps.webp"
          },
          {
              "id": "triber-interior-cockpit",
              "title": "Modern Dual-Tone Dashboard with 20.32 cm Floating Touchscreen",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-triber/gallery/triber-interior-cockpit.webp"
          },
          {
              "id": "triber-tft-cluster",
              "title": "17.78 cm (7-inch) Reconfigurable TFT Digital Instrument Cluster",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-triber/gallery/triber-tft-cluster.webp"
          },
          {
              "id": "triber-one-touch-tumble",
              "title": "2nd Row Slide, Recline & One-Touch Fold & Tumble Seats",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-triber/gallery/triber-one-touch-tumble.webp"
          },
          {
              "id": "triber-premium-seats",
              "title": "Premium Dual-Tone Quilted Seat Upholstery with Driver Armrest",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-triber/gallery/triber-premium-seats.webp"
          },
          {
              "id": "triber-cooled-glovebox",
              "title": "Cooled Lower Glovebox & Cooled Center Console Storage",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-triber/gallery/triber-cooled-glovebox.webp"
          },
          {
              "id": "triber-cruise-control",
              "title": "Steering-Mounted Cruise Control & Audio Controls",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-triber/gallery/triber-cruise-control.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "999 cc 1.0L Energy 3-Cylinder Petrol (72 PS @ 6250 rpm, 96 Nm @ 3500 rpm) – 5MT / 5-Speed Easy-R AMT",
              "999 cc 1.0L Turbo 3-Cylinder Petrol (100 PS @ 5000 rpm, 180 Nm @ 2800-3600 rpm) – 5MT"
          ],
          "dimensions": "3985 mm L x 1734 mm W x 1643 mm H",
          "wheelbase": "2636 mm",
          "FuelTank": "40 Litres",
          "Tires": "185/65 R15 Styled Flex / Alloy Wheels"
      },
      "variants": [
          {
              "name": "Authentic 1.0L MT",
              "engine": "1.0L Energy Petrol (72 PS)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "20.0 kmpl",
              "exShowroom": 580875,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "6 Airbags, ESP, Hill Start Assist, Traction Control & TPMS",
              "keyFeatures": [
                  "6 Airbags, ESP, Hill Start Assist (HSA), Traction Control System (TCS) & TPMS",
                  "Slide & Recline 2nd Row with One-Touch Fold & Tumble + EasyFix Removable 3rd Row",
                  "All 4 Power Windows, Remote Central Locking & LED Instrument Cluster",
                  "Projector Headlamps, 182 mm Ground Clearance & Rear Parking Sensors"
              ]
          },
          {
              "name": "Evolution 1.0L MT",
              "engine": "1.0L Energy Petrol (72 PS)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "20.0 kmpl",
              "exShowroom": 673605,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "6 Airbags, ESP, Hill Start Assist, TPMS & Rear View Camera",
              "keyFeatures": [
                  "20.32 cm Touchscreen MediaNAV Evolution with Android Auto & Apple CarPlay",
                  "Twin AC with Dedicated 2nd & 3rd Row Roof-Mounted Vents",
                  "Reverse Parking Camera with Guidelines & Electrically Adjustable ORVMs",
                  "Roof Rails (50 kg Load Capacity), Wheel Arch Cladding & 4 Speakers"
              ]
          },
          {
              "name": "Techno 1.0L MT",
              "engine": "1.0L Energy Petrol (72 PS)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "20.0 kmpl",
              "exShowroom": 744120,
              "isVFM": true,
              "vfmBadge": "Best Value 7-Seater Family Pick",
              "ADASSafety": "6 Airbags, ESP, Hill Start Assist, TPMS & Rear Camera",
              "keyFeatures": [
                  "17.78 cm (7-inch) TFT Digital Instrument Cluster & Steering-Mounted Controls",
                  "Cooled Center Console, Cooled Lower Glovebox & Driver Seat Height Adjust",
                  "R15 Dual-Tone Styled Flex Wheels, Skid Plates & LED Turn Indicators on ORVMs",
                  "Rear Wiper & Defogger, Day/Night IRVM & 2 Front Tweeters"
              ]
          },
          {
              "name": "Evolution 1.0L Turbo MT",
              "engine": "1.0L Turbo Petrol (100 PS / 180 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "19.5 kmpl",
              "exShowroom": 784900,
              "isVFM": true,
              "vfmBadge": "Most Affordable 100 PS Turbo 7-Seater",
              "ADASSafety": "6 Airbags, ESP, Hill Start Assist, Traction Control & TPMS",
              "keyFeatures": [
                  "New 100 PS & 180 Nm 1.0L Turbocharged Petrol Engine with 5-Speed Manual",
                  "20.32 cm Touchscreen MediaNAV, Rear View Camera & Twin AC with 3-Row Vents",
                  "6 Airbags, Electronic Stability Program (ESP) & Hill Start Assist",
                  "EasyFix Modular 7-Seat Cabin with 625-Litre Boot in 5-Seat Mode"
              ]
          },
          {
              "name": "Emotion 1.0L MT",
              "engine": "1.0L Energy Petrol (72 PS)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "20.0 kmpl",
              "exShowroom": 805350,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "6 Airbags, ESP, Hill Start Assist, Front Parking Sensors & Rear Camera",
              "keyFeatures": [
                  "Wireless Smartphone Charger, Walk-Away Lock / Approach Unlock Smart Access Card",
                  "Push Button Start/Stop, Auto Headlamps, Rain-Sensing Wipers & Cruise Control",
                  "LED DRLs, Front Parking Sensors, Driver Seat Armrest & PM2.5 Air Filter",
                  "Optional Dual-Tone Mystery Black Roof & Chrome Exterior Highlights"
              ]
          },
          {
              "name": "Emotion 1.0L Easy-R AMT",
              "engine": "1.0L Energy Petrol (72 PS)",
              "fuel": "Petrol",
              "trans": "AMT",
              "mileage": "19.6 kmpl",
              "exShowroom": 852950,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "6 Airbags, ESP, Hill Start Assist, Front Sensors & Rear Camera",
              "keyFeatures": [
                  "5-Speed Easy-R AMT with Traffic Crawl Assist & Hill Start Assist",
                  "Wireless Charger, Smart Access Card, Push Button Start & Cruise Control",
                  "20.32 cm Touchscreen with Wireless Smartphone Replication & 17.78 cm TFT Cluster",
                  "Auto Headlamps, Rain-Sensing Wipers & Twin AC for All 3 Rows"
              ]
          },
          {
              "name": "Techno 1.0L Turbo MT",
              "engine": "1.0L Turbo Petrol (100 PS / 180 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "19.5 kmpl",
              "exShowroom": 853900,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "6 Airbags, ESP, Hill Start Assist, TPMS & Rear Camera",
              "keyFeatures": [
                  "100 PS / 180 Nm 1.0L Turbo Engine for Effortless Full-Load Highway Cruising",
                  "17.78 cm Digital TFT Cluster, 20.32 cm Touchscreen & 6-Speaker Arkamys Audio",
                  "Cooled Lower Glovebox, Cooled Center Console & Height-Adjustable Driver Seat",
                  "R15 Styled Wheels, Functional 50 kg Roof Rails & Rear Wiper/Washer"
              ]
          },
          {
              "name": "Emotion 1.0L Turbo MT",
              "engine": "1.0L Turbo Petrol (100 PS / 180 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "19.5 kmpl",
              "exShowroom": 899900,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "6 Airbags, ESP, Hill Start Assist, Front & Rear Parking Sensors + Camera",
              "keyFeatures": [
                  "Flagship 100 PS / 180 Nm Turbo 7-Seater with Multi-Sense Driving Modes",
                  "Wireless Charger, Smart Access Card, Push Start, Auto Headlamps & Rain Wipers",
                  "Cruise Control, Front Parking Sensors, Rear Camera & 17.78 cm TFT Cluster",
                  "Dual-Tone Mystery Black Roof Options & Quilted Premium Upholstery"
              ]
          }
      ]
  },
  {
      "id": "renault-kiger",
      "name": "Renault Kiger",
      "brand": "Renault",
      "tagline": "Sporty Compact SUV with 100 PS 1.0L Turbo X-Tronic CVT, 205 mm Ground Clearance, 6 Airbags & 3D Arkamys Audio",
      "launchDate": "2026 (MY26 Phase 2 Range)",
      "bodyType": "SUV",
      "fuelTypes": [
          "Petrol"
      ],
      "priceRange": "₹5.81 - ₹10.40 Lakh",
      "minPrice": 581000,
      "maxPrice": 1040000,
      "safetyRating": "4.0 ★ (Global NCAP 4-Star + 6 Airbags Standard)",
      "groundClearance": "205 mm",
      "bootSpace": "405 Litres (879L Expanded)",
      "waitingPeriod": "2 - 4 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/colors/caspian-blue.webp",
      "summary": "Updated for MY26 with 6 airbags standard across the range, Renault's new diamond emblem, semi-leatherette ventilated seats/upholstery, auto headlamps, and rain-sensing wipers, the Renault Kiger offers segment-leading 405-litre boot space, 205 mm ground clearance, Multi-Sense drive modes (Eco, Normal, Sport), 3D Sound by Arkamys (8 speakers), wireless Android Auto & Apple CarPlay, and a choice of 72 PS 1.0L Energy and 100 PS 1.0L Turbo petrol engines.",
      "colors": [
          {
              "id": "caspian-blue",
              "name": "Caspian Blue",
              "hex": "#13528A",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/colors/caspian-blue.webp"
          },
          {
              "id": "shadow-grey",
              "name": "Shadow Grey",
              "hex": "#5C6168",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/colors/shadow-grey.webp"
          },
          {
              "id": "moonlight-silver",
              "name": "Moonlight Silver",
              "hex": "#A3A8AE",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/colors/moonlight-silver.webp"
          },
          {
              "id": "oasis-yellow",
              "name": "Oasis Yellow",
              "hex": "#D8A31A",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/colors/oasis-yellow.webp"
          },
          {
              "id": "outback-bronze",
              "name": "Outback Bronze",
              "hex": "#6D543E",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/colors/outback-bronze.webp"
          },
          {
              "id": "stealth-black",
              "name": "Stealth Black",
              "hex": "#181A1D",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/colors/stealth-black.webp"
          },
          {
              "id": "ice-cool-white",
              "name": "Ice Cool White",
              "hex": "#F4F5F7",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/colors/ice-cool-white.webp"
          },
          {
              "id": "oasis-yellow-with-mystery-black-roof",
              "name": "Oasis Yellow With Mystery Black Roof",
              "hex": "#D8A31A",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/colors/oasis-yellow-with-mystery-black-roof.webp"
          },
          {
              "id": "shadow-grey-with-mystery-black-roof",
              "name": "Shadow Grey with Mystery Black Roof",
              "hex": "#5C6168",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/colors/shadow-grey-with-mystery-black-roof.webp"
          },
          {
              "id": "radiant-red-with-mystery-black-roof",
              "name": "Radiant Red With Mystery Black Roof",
              "hex": "#C41E24",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/colors/radiant-red-with-mystery-black-roof.webp"
          },
          {
              "id": "moonlight-silver-with-mystery-black-roof",
              "name": "Moonlight Silver With Mystery Black Roof",
              "hex": "#A3A8AE",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/colors/moonlight-silver-with-mystery-black-roof.webp"
          },
          {
              "id": "ice-cool-white-with-mystery-black-roof",
              "name": "Ice Cool White With Mystery Black Roof",
              "hex": "#F4F5F7",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/colors/ice-cool-white-with-mystery-black-roof.webp"
          },
          {
              "id": "caspian-blue-with-mystery-black-roof",
              "name": "Caspian Blue With Mystery Black Roof",
              "hex": "#13528A",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/colors/caspian-blue-with-mystery-black-roof.webp"
          }
      ],
      "gallery": [
          {
              "id": "kiger-hero-banner",
              "title": "Renault Kiger MY26 with New Renault Emblem & Muscular SUV Stance",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/gallery/kiger-hero-banner.webp"
          },
          {
              "id": "kiger-exterior-front",
              "title": "Tri-Octa Pure Vision LED Headlamps & Winged Front Grille",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/gallery/kiger-exterior-front.webp"
          },
          {
              "id": "kiger-exterior-profile",
              "title": "205 mm High Ground Clearance & Coupe-Like Floating Roofline",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/gallery/kiger-exterior-profile.webp"
          },
          {
              "id": "kiger-alloys-calipers",
              "title": "R16 Diamond-Cut Alloy Wheels with Sporty Red Brake Calipers",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/gallery/kiger-alloys-calipers.webp"
          },
          {
              "id": "kiger-led-taillamps",
              "title": "Signature C-Shaped Double-Extractor LED Tail Lamps",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/gallery/kiger-led-taillamps.webp"
          },
          {
              "id": "kiger-roof-bars",
              "title": "Functional 50 kg Roof Bars & Shark Fin Antenna",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/gallery/kiger-roof-bars.webp"
          },
          {
              "id": "kiger-cockpit-interior",
              "title": "Smart Cockpit with 20.32 cm Floating Touchscreen & Center Console",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/gallery/kiger-cockpit-interior.webp"
          },
          {
              "id": "kiger-tft-cluster",
              "title": "17.78 cm Multi-Skin Reconfigurable TFT Digital Cluster",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/gallery/kiger-tft-cluster.webp"
          },
          {
              "id": "kiger-multisense-dial",
              "title": "Multi-Sense Rotary Drive Mode Selector (Normal, Eco & Sport)",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/gallery/kiger-multisense-dial.webp"
          },
          {
              "id": "kiger-arkamys-audio",
              "title": "Auditorium 3D Sound by Arkamys (4 Speakers + 4 Tweeters)",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/gallery/kiger-arkamys-audio.webp"
          },
          {
              "id": "kiger-boot-space",
              "title": "Segment-Leading 405-Litre Boot Space (Expandable to 879 Litres)",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/gallery/kiger-boot-space.webp"
          },
          {
              "id": "kiger-safety-airbags",
              "title": "6 Airbags, ESP, Hill Start Assist & Traction Control",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-kiger/gallery/kiger-safety-airbags.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "999 cc 1.0L Energy 3-Cylinder Petrol (72 PS @ 6250 rpm, 96 Nm @ 3500 rpm) – 5MT / 5-Speed Easy-R AMT",
              "999 cc 1.0L Turbo 3-Cylinder Petrol (100 PS @ 5000 rpm, 160 Nm MT / 152 Nm CVT) – 5MT / X-Tronic CVT"
          ],
          "dimensions": "3991 mm L x 1750 mm W x 1605 mm H",
          "wheelbase": "2500 mm",
          "FuelTank": "40 Litres",
          "Tires": "195/60 R16 Diamond-Cut Alloy / Styled Flex Wheels"
      },
      "variants": [
          {
              "name": "Authentic 1.0L MT",
              "engine": "1.0L Energy Petrol (72 PS)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "19.17 kmpl",
              "exShowroom": 581000,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "6 Airbags, ESP, Hill Start Assist, Traction Control & TPMS",
              "keyFeatures": [
                  "6 Airbags (Front, Side & Curtain), ESP, Hill Start Assist, TCS & TPMS Standard",
                  "LED DRLs, C-Shaped Signature LED Tail Lamps & Rear Spoiler",
                  "All 4 Power Windows, Remote Keyless Entry & 3.5-inch LED Instrument Cluster",
                  "405-Litre Boot Space, 205 mm Ground Clearance & R16 Steel Wheels with Covers"
              ]
          },
          {
              "name": "Evolution 1.0L MT",
              "engine": "1.0L Energy Petrol (72 PS)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "19.17 kmpl",
              "exShowroom": 659000,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "6 Airbags, ESP, Hill Start Assist, TPMS & Rear Parking Sensors",
              "keyFeatures": [
                  "Rear AC Vents, Electrically Adjustable ORVMs & Shark Fin Antenna",
                  "R400 Audio System with Bluetooth, USB, 4 Speakers & Steering Audio Controls",
                  "60:40 Split Folding Rear Seats with Adjustable Headrests & Center Armrest",
                  "Height-Adjustable Tilt Steering & Front Center Armrest with Storage"
              ]
          },
          {
              "name": "Evolution 1.0L Easy-R AMT",
              "engine": "1.0L Energy Petrol (72 PS)",
              "fuel": "Petrol",
              "trans": "AMT",
              "mileage": "19.03 kmpl",
              "exShowroom": 703000,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "6 Airbags, ESP, Hill Start Assist, TPMS & Traffic Assist",
              "keyFeatures": [
                  "5-Speed Easy-R AMT Automatic with Traffic Crawl Assist & Hill Start Assist",
                  "Rear AC Vents, Electric ORVMs, Shark Fin Antenna & 4-Speaker Audio",
                  "6 Airbags, Electronic Stability Program (ESP) & Real-Time TPMS",
                  "60:40 Split Rear Seats & 405-Litre Boot"
              ]
          },
          {
              "name": "Evolution+ 1.0L MT",
              "engine": "1.0L Energy Petrol (72 PS)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "19.17 kmpl",
              "exShowroom": 703000,
              "isVFM": true,
              "vfmBadge": "Best Sub-7.5L Compact SUV Value Pick",
              "ADASSafety": "6 Airbags, ESP, Hill Start Assist, TPMS & Rear View Camera",
              "keyFeatures": [
                  "20.32 cm (8-inch) Floating Touchscreen with Android Auto & Apple CarPlay",
                  "Reverse Parking Camera with Guidelines & Functional 50 kg Roof Bars",
                  "Rear AC Vents, Electric ORVMs, Shark Fin Antenna & Steering Controls",
                  "6 Airbags, ESP, Hill Start Assist & TPMS"
              ]
          },
          {
              "name": "Evolution+ 1.0L Easy-R AMT",
              "engine": "1.0L Energy Petrol (72 PS)",
              "fuel": "Petrol",
              "trans": "AMT",
              "mileage": "19.03 kmpl",
              "exShowroom": 749000,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "6 Airbags, ESP, Hill Start Assist, TPMS & Rear View Camera",
              "keyFeatures": [
                  "5-Speed Easy-R AMT Automatic with 20.32 cm Floating Touchscreen",
                  "Reverse Parking Camera, Android Auto, Apple CarPlay & Functional Roof Bars",
                  "Rear AC Vents, Electric ORVMs & 6 Airbags Standard"
              ]
          },
          {
              "name": "Techno 1.0L MT",
              "engine": "1.0L Energy Petrol (72 PS)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "19.17 kmpl",
              "exShowroom": 760000,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "6 Airbags, ESP, Hill Start Assist, TPMS & Rear Camera",
              "keyFeatures": [
                  "Tri-Octa Pure Vision LED Headlamps & R16 Dual-Tone Flex Wheels",
                  "Smart Access Card with Walk-Away Lock & Push Button Start/Stop",
                  "Auto AC, Rear Wiper & Washer, Driver Seat Height Adjust & Upper Glovebox",
                  "20.32 cm Touchscreen with Wireless Smartphone Replication & 4 Speakers + 2 Tweeters"
              ]
          },
          {
              "name": "Evolution+ 1.0L Turbo MT",
              "engine": "1.0L Turbo Petrol (100 PS / 160 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "20.5 kmpl",
              "exShowroom": 793000,
              "isVFM": true,
              "vfmBadge": "Most Affordable 100 PS Turbo SUV in India",
              "ADASSafety": "6 Airbags, ESP, Hill Start Assist, TPMS & Rear View Camera",
              "keyFeatures": [
                  "100 PS & 160 Nm 1.0L Turbocharged Petrol Engine with 5-Speed Manual",
                  "20.32 cm Floating Touchscreen, Rear View Camera & Functional Roof Bars",
                  "6 Airbags, ESP, Hill Start Assist, Traction Control & TPMS"
              ]
          },
          {
              "name": "Techno 1.0L Easy-R AMT",
              "engine": "1.0L Energy Petrol (72 PS)",
              "fuel": "Petrol",
              "trans": "AMT",
              "mileage": "19.03 kmpl",
              "exShowroom": 810000,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "6 Airbags, ESP, Hill Start Assist, TPMS & Rear Camera",
              "keyFeatures": [
                  "5-Speed Easy-R AMT with Tri-Octa Pure Vision LED Headlamps & Auto AC",
                  "Smart Access Card, Push Button Start & Wireless Android Auto / Apple CarPlay",
                  "R16 Dual-Tone Flex Wheels, Rear Wiper/Washer & 6-Speaker Audio"
              ]
          },
          {
              "name": "Techno 1.0L Turbo MT",
              "engine": "1.0L Turbo Petrol (100 PS / 160 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "20.5 kmpl",
              "exShowroom": 850000,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "6 Airbags, ESP, Hill Start Assist, TPMS & Rear Camera",
              "keyFeatures": [
                  "100 PS / 160 Nm 1.0L Turbo Engine with Tri-Octa Pure Vision LED Headlamps",
                  "Smart Access Card, Push Start, Auto AC & Wireless Smartphone Replication",
                  "R16 Dual-Tone Flex Wheels & 6 Airbags"
              ]
          },
          {
              "name": "Emotion 1.0L MT",
              "engine": "1.0L Energy Petrol (72 PS)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "19.17 kmpl",
              "exShowroom": 850000,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "6 Airbags, ESP, Hill Start Assist, TPMS & Auto Headlamps",
              "keyFeatures": [
                  "R16 Diamond-Cut Alloy Wheels, Auto Headlamps & Rain-Sensing Wipers",
                  "17.78 cm Multi-Skin TFT Digital Cluster & 3D Sound by Arkamys (8 Speakers)",
                  "Multi-Sense Drive Modes, Cruise Control, Cooled Lower Glovebox & Ambient Lighting",
                  "Leatherette Steering Wheel, Semi-Leatherette Seats & Power-Folding ORVMs"
              ]
          },
          {
              "name": "Techno 1.0L Turbo X-Tronic CVT",
              "engine": "1.0L Turbo Petrol (100 PS / 152 Nm)",
              "fuel": "Petrol",
              "trans": "CVT",
              "mileage": "18.24 kmpl",
              "exShowroom": 940000,
              "isVFM": true,
              "vfmBadge": "Best Sub-9.5L Turbo CVT Automatic Pick",
              "ADASSafety": "6 Airbags, ESP, Hill Start Assist, TPMS & Rear Camera",
              "keyFeatures": [
                  "100 PS 1.0L Turbo Engine with Smooth X-Tronic D-Step CVT Automatic",
                  "Tri-Octa Pure Vision LED Headlamps, Auto AC & Smart Access Card",
                  "20.32 cm Touchscreen with Wireless Android Auto & Apple CarPlay"
              ]
          },
          {
              "name": "Emotion 1.0L Turbo MT",
              "engine": "1.0L Turbo Petrol (100 PS / 160 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "20.5 kmpl",
              "exShowroom": 940000,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "6 Airbags, ESP, Hill Start Assist, TPMS & Auto Headlamps",
              "keyFeatures": [
                  "100 PS / 160 Nm Turbo MT with R16 Diamond-Cut Alloys & Red Brake Calipers",
                  "Wireless Smartphone Charger, Cruise Control, Auto Headlamps & Rain Wipers",
                  "17.78 cm Multi-Skin TFT Cluster, 8-Speaker 3D Arkamys Audio & Multi-Sense Modes"
              ]
          },
          {
              "name": "Emotion 1.0L Turbo X-Tronic CVT",
              "engine": "1.0L Turbo Petrol (100 PS / 152 Nm)",
              "fuel": "Petrol",
              "trans": "CVT",
              "mileage": "18.24 kmpl",
              "exShowroom": 1040000,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "6 Airbags, ESP, Hill Start Assist, TPMS & Auto Headlamps",
              "keyFeatures": [
                  "Flagship 100 PS Turbo X-Tronic CVT with Multi-Sense Drive Modes (Eco, Normal, Sport)",
                  "R16 Diamond-Cut Alloys with Red Calipers, Wireless Charger & Remote Engine Start",
                  "17.78 cm TFT Digital Cluster, 8-Speaker 3D Arkamys Sound & Dual-Tone Roof Options"
              ]
          }
      ]
  },
  {
      "id": "renault-duster",
      "name": "Renault Duster",
      "brand": "Renault",
      "tagline": "The Icon Reborn – 5-Star Bharat NCAP SUV with 163 PS Turbo TCe, Strong Hybrid E-Tech 160, 212 mm Ground Clearance & Panoramic Sunroof",
      "launchDate": "2026 (All-New 3rd Generation)",
      "bodyType": "SUV",
      "fuelTypes": [
          "Petrol",
          "Hybrid"
      ],
      "priceRange": "₹10.49 - ₹19.49 Lakh",
      "minPrice": 1049000,
      "maxPrice": 1949000,
      "safetyRating": "5.0 ★ (Bharat NCAP 5-Star + 6 Airbags + Level 2 ADAS)",
      "groundClearance": "212 mm",
      "bootSpace": "517 Litres",
      "waitingPeriod": "4 - 8 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/renault-duster/colors/sunset-red.webp",
      "summary": "The legendary SUV returns to India in its all-new 2026 generation with a 5-Star Bharat NCAP safety rating, rugged 212 mm ground clearance, electric panoramic sunroof, dual OpenR Link screens (25.65 cm touchscreen + 26.03 cm digital cluster with Google built-in), Level 2 ADAS (17 autonomous features), 360° Around View Camera, ventilated front seats, Arkamys 3D audio, and three advanced powertrains: 100 PS Turbo TCe 100, 163 PS / 280 Nm 1.3L Turbo TCe 160 (6MT / 6DCT), and 160 PS 1.6L Strong Hybrid E-Tech 160.",
      "colors": [
          {
              "id": "sunset-red",
              "name": "Sunset Red",
              "hex": "#A8261E",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-duster/colors/sunset-red.webp"
          },
          {
              "id": "moonlight-silver",
              "name": "Moonlight Silver",
              "hex": "#A3A8AE",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-duster/colors/moonlight-silver.webp"
          },
          {
              "id": "mountain-jade-green",
              "name": "Mountain Jade Green",
              "hex": "#3C4F29",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-duster/colors/mountain-jade-green.webp"
          },
          {
              "id": "river-blue",
              "name": "River Blue",
              "hex": "#2D5A7B",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-duster/colors/river-blue.webp"
          },
          {
              "id": "stealth-black",
              "name": "Stealth Black",
              "hex": "#181A1D",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-duster/colors/stealth-black.webp"
          },
          {
              "id": "pearl-white",
              "name": "Pearl White",
              "hex": "#ECEBE6",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-duster/colors/pearl-white.webp"
          },
          {
              "id": "mountain-jade-green-with-stealth-black-roof",
              "name": "Mountain Jade Green With Stealth Black Roof",
              "hex": "#3C4F29",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-duster/colors/mountain-jade-green-with-stealth-black-roof.webp"
          },
          {
              "id": "river-blue-with-stealth-black-roof",
              "name": "River Blue With Stealth Black Roof",
              "hex": "#2D5A7B",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-duster/colors/river-blue-with-stealth-black-roof.webp"
          },
          {
              "id": "sunset-red-with-stealth-black-roof",
              "name": "Sunset Red With Stealth Black Roof",
              "hex": "#A8261E",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-duster/colors/sunset-red-with-stealth-black-roof.webp"
          },
          {
              "id": "pearl-white-with-stealth-black-roof",
              "name": "Pearl White With Stealth Black Roof",
              "hex": "#ECEBE6",
              "image": "https://ik.imagekit.io/2908vvlod/cars/renault-duster/colors/pearl-white-with-stealth-black-roof.webp"
          }
      ],
      "gallery": [
          {
              "id": "duster-reveal-hero",
              "title": "All-New 2026 Renault Duster – Bold SUV Stance with DUSTER Front Grille",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-duster/gallery/duster-reveal-hero.webp"
          },
          {
              "id": "duster-adventure-hero",
              "title": "Rugged Adventure Edition with 212 mm Ground Clearance & Skid Plates",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-duster/gallery/duster-adventure-hero.webp"
          },
          {
              "id": "duster-bncap-5star",
              "title": "5-Star Bharat NCAP Safety Rating with 6 Airbags & High-Strength CMF-B Structure",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-duster/gallery/duster-bncap-5star.webp"
          },
          {
              "id": "duster-full-led-headlamps",
              "title": "Full-LED Headlamps with Y-Shaped Signature LED DRLs",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-duster/gallery/duster-full-led-headlamps.webp"
          },
          {
              "id": "duster-led-rear-bar",
              "title": "Connected Horizontal LED Rear Light Bar & Sculpted Tailgate",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-duster/gallery/duster-led-rear-bar.webp"
          },
          {
              "id": "duster-alloy-wheels",
              "title": "R18 Diamond-Cut Adventure Alloy Wheels & Starkle Side Cladding",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-duster/gallery/duster-alloy-wheels.webp"
          },
          {
              "id": "duster-roof-bars",
              "title": "Modular Roof Bars with 80 kg Dynamic Load Capacity",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-duster/gallery/duster-roof-bars.webp"
          },
          {
              "id": "duster-openr-cockpit",
              "title": "Dual OpenR Link Digital Cockpit (25.65 cm Touchscreen + 26.03 cm Driver Display)",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-duster/gallery/duster-openr-cockpit.webp"
          },
          {
              "id": "duster-iconic-seats",
              "title": "Iconic Upholstery with Duster Emblem & Contrast Yellow Stitching",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-duster/gallery/duster-iconic-seats.webp"
          },
          {
              "id": "duster-cabin-space",
              "title": "Generous 5-Seater Cabin with Ventilated Front Seats & Dual-Zone Climate Control",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-duster/gallery/duster-cabin-space.webp"
          },
          {
              "id": "duster-boot-capacity",
              "title": "Massive 517-Litre Luggage Compartment with YouClip Modular Accessories",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-duster/gallery/duster-boot-capacity.webp"
          },
          {
              "id": "duster-adas-safety",
              "title": "Level 2 ADAS with 17 Autonomous Safety Features & 360° Around View Monitor",
              "url": "https://ik.imagekit.io/2908vvlod/cars/renault-duster/gallery/duster-adas-safety.webp"
          }
      ],
      "specs": {
          "engineOptions": [
              "999 cc Turbo TCe 100 Petrol (100 PS @ 5000 rpm, 166 Nm @ 2800 rpm) – 6-Speed MT",
              "1332 cc 1.3L Turbo TCe 160 Direct-Injection Petrol (163 PS @ 5500 rpm, 280 Nm @ 1800 rpm) – 6MT / 6-Speed Wet DCT",
              "1598 cc 1.6L Strong Hybrid E-Tech 160 (160 PS Combined, 208 Nm + 1.4 kWh Battery) – Multi-Mode Automatic"
          ],
          "dimensions": "4346 mm L x 1815 mm W x 1701 mm H",
          "wheelbase": "2657 mm",
          "FuelTank": "50 Litres",
          "Tires": "215/65 R17 & 215/60 R18 Diamond-Cut Alloy Wheels"
      },
      "variants": [
          {
              "name": "Authentic Turbo TCe 100 6MT",
              "engine": "1.0L Turbo TCe 100 (100 PS / 166 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "17.5 kmpl",
              "exShowroom": 1049000,
              "isVFM": true,
              "vfmBadge": "Best Sub-10.5L Mid-Size SUV Entry Pick",
              "ADASSafety": "5-Star Bharat NCAP, 6 Airbags, ESP, Hill Start Assist & TPMS",
              "keyFeatures": [
                  "5-Star Bharat NCAP Safety Rating with 6 Airbags, ESP, Hill Start Assist & TPMS",
                  "100 PS & 166 Nm Turbo TCe 100 Engine with 6-Speed Manual Transmission",
                  "Full-LED Headlamps with Y-Shaped LED DRLs, 212 mm Ground Clearance & Roof Bars",
                  "All 4 Power Windows, Rear Parking Sensors, Auto Headlamps & Digital Cluster"
              ]
          },
          {
              "name": "Evolution Turbo TCe 100 6MT",
              "engine": "1.0L Turbo TCe 100 (100 PS / 166 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "17.5 kmpl",
              "exShowroom": 1169000,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "5-Star Bharat NCAP, 6 Airbags, ESP, Hill Start Assist & Rear Camera",
              "keyFeatures": [
                  "25.65 cm (10.1-inch) OpenR Touchscreen with Wireless Android Auto & Apple CarPlay",
                  "17.78 cm Digital Driver Display, Reverse Parking Camera & Rear AC Vents",
                  "Electrically Adjustable ORVMs, Steering Controls & YouClip Attachment Points",
                  "Connected LED Tail Lamps & 517-Litre Boot Space"
              ]
          },
          {
              "name": "Adventure Turbo TCe 100 6MT",
              "engine": "1.0L Turbo TCe 100 (100 PS / 166 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "17.5 kmpl",
              "exShowroom": 1299000,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "5-Star Bharat NCAP, 6 Airbags, ESP, Hill Descent Control & Rear Camera",
              "keyFeatures": [
                  "R17 Adventure Alloy Wheels, Modular Roof Bars & Starkle Protective Cladding",
                  "Auto Climate Control, Smart Keyless Entry, Push Button Start & Cruise Control",
                  "25.65 cm OpenR Touchscreen, 6-Speaker Arkamys 3D Audio & Washable Adventure Upholstery"
              ]
          },
          {
              "name": "Evolution Turbo TCe 160 6MT",
              "engine": "1.3L Turbo TCe 160 (163 PS / 280 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "16.8 kmpl",
              "exShowroom": 1299000,
              "isVFM": true,
              "vfmBadge": "Most Powerful 163 PS Turbo SUV at ₹12.99L",
              "ADASSafety": "5-Star Bharat NCAP, 6 Airbags, ESP, All-4 Disc Brakes & Rear Camera",
              "keyFeatures": [
                  "163 PS & 280 Nm 1.3L Direct-Injection Turbo TCe 160 Engine with 6-Speed Manual",
                  "25.65 cm OpenR Touchscreen with Wireless Smartphone Replication & Rear Camera",
                  "All-4 Disc Brakes, 6 Airbags, ESP, Hill Start Assist & Rear AC Vents"
              ]
          },
          {
              "name": "Adventure Turbo TCe 160 6MT",
              "engine": "1.3L Turbo TCe 160 (163 PS / 280 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "16.8 kmpl",
              "exShowroom": 1399000,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "5-Star Bharat NCAP, 6 Airbags, ESP, Hill Descent Control & All-4 Discs",
              "keyFeatures": [
                  "163 PS / 280 Nm 1.3L Turbo TCe 160 with R17 Adventure Alloy Wheels",
                  "Modular Roof Bars (80 kg), Auto Climate Control, Smart Card & Push Start",
                  "25.65 cm OpenR Touchscreen, 6-Speaker Arkamys 3D Audio & Electronic Parking Brake"
              ]
          },
          {
              "name": "Evolution Turbo TCe 160 6DCT",
              "engine": "1.3L Turbo TCe 160 (163 PS / 280 Nm)",
              "fuel": "Petrol",
              "trans": "DCT",
              "mileage": "16.5 kmpl",
              "exShowroom": 1449000,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "5-Star Bharat NCAP, 6 Airbags, ESP, Hill Start Assist & All-4 Discs",
              "keyFeatures": [
                  "163 PS / 280 Nm 1.3L Turbo Engine with 6-Speed Wet Dual-Clutch Automatic (DCT)",
                  "25.65 cm OpenR Touchscreen, Wireless Android Auto/CarPlay & Reverse Camera",
                  "Paddle Shifters, Electronic Parking Brake with Auto Hold & Rear AC Vents"
              ]
          },
          {
              "name": "Techno+ Turbo TCe 160 6MT",
              "engine": "1.3L Turbo TCe 160 (163 PS / 280 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "16.8 kmpl",
              "exShowroom": 1529000,
              "isVFM": true,
              "vfmBadge": "Best Feature-Loaded 163 PS SUV Pick",
              "ADASSafety": "5-Star Bharat NCAP, 6 Airbags, 360° Camera & Blind Spot Warning",
              "keyFeatures": [
                  "Electric Panoramic Sunroof & 26.03 cm (10.25-inch) Full Digital Driver Display",
                  "25.65 cm OpenR Link Touchscreen with Google Built-In & Wireless Charger",
                  "R18 Diamond-Cut Alloy Wheels, 360° Around View Camera & Front/Rear Sensors",
                  "Dual-Zone Auto Climate Control, Power-Folding ORVMs & Arkamys 3D Sound"
              ]
          },
          {
              "name": "Adventure Turbo TCe 160 6DCT",
              "engine": "1.3L Turbo TCe 160 (163 PS / 280 Nm)",
              "fuel": "Petrol",
              "trans": "DCT",
              "mileage": "16.5 kmpl",
              "exShowroom": 1539000,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "5-Star Bharat NCAP, 6 Airbags, ESP, Hill Descent Control & All-4 Discs",
              "keyFeatures": [
                  "163 PS / 280 Nm 1.3L Turbo with 6-Speed Wet DCT & Multi-Sense Drive Modes",
                  "R17 Adventure Alloy Wheels, Modular Roof Bars & Washable MicroCloud Upholstery",
                  "25.65 cm OpenR Touchscreen, Wireless Charger & Electronic Parking Brake"
              ]
          },
          {
              "name": "Techno+ Turbo TCe 160 6DCT",
              "engine": "1.3L Turbo TCe 160 (163 PS / 280 Nm)",
              "fuel": "Petrol",
              "trans": "DCT",
              "mileage": "16.5 kmpl",
              "exShowroom": 1669000,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "5-Star Bharat NCAP, 6 Airbags, 360° Camera & Blind Spot Warning",
              "keyFeatures": [
                  "163 PS / 280 Nm 1.3L Turbo 6-Speed DCT with Electric Panoramic Sunroof",
                  "Dual OpenR Link Screens (25.65 cm + 26.03 cm), 360° Camera & R18 Alloys",
                  "Wireless Smartphone Charger, Dual-Zone AC & Arkamys 3D Sound System"
              ]
          },
          {
              "name": "Evolution Strong Hybrid E-Tech 160",
              "engine": "1.6L Strong Hybrid E-Tech 160 (160 PS)",
              "fuel": "Hybrid",
              "trans": "Automatic",
              "mileage": "24.5 kmpl",
              "exShowroom": 1699000,
              "isVFM": true,
              "vfmBadge": "Most Accessible Strong Hybrid SUV",
              "ADASSafety": "5-Star Bharat NCAP, 6 Airbags, ESP, E-Save Mode & All-4 Discs",
              "keyFeatures": [
                  "160 PS 1.6L Strong Hybrid E-Tech Powertrain with 1.4 kWh Battery & Up to 80% City EV Drive",
                  "Multi-Mode Clutchless Dog-Box Automatic Transmission with Regenerative Braking",
                  "25.65 cm OpenR Touchscreen, 26.03 cm Digital Cluster & Electronic Parking Brake"
              ]
          },
          {
              "name": "Iconic Launch Edition Turbo TCe 160 6MT",
              "engine": "1.3L Turbo TCe 160 (163 PS / 280 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "16.8 kmpl",
              "exShowroom": 1719000,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "Level 2 ADAS (17 Features), 5-Star Bharat NCAP, 6 Airbags & 360° Camera",
              "keyFeatures": [
                  "Level 2 ADAS Suite (Adaptive Cruise Control, AEB, Lane Keep Assist, Blind Spot Warning)",
                  "Electric Panoramic Sunroof, Ventilated Front Seats & 6-Way Power Driver Seat",
                  "Iconic Yellow-Stitched Leatherette Interior, Powered Tailgate & R18 Diamond-Cut Alloys"
              ]
          },
          {
              "name": "Iconic Turbo TCe 160 6DCT",
              "engine": "1.3L Turbo TCe 160 (163 PS / 280 Nm)",
              "fuel": "Petrol",
              "trans": "DCT",
              "mileage": "16.5 kmpl",
              "exShowroom": 1849000,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "Level 2 ADAS (17 Features), 5-Star Bharat NCAP, 6 Airbags & 360° Camera",
              "keyFeatures": [
                  "163 PS / 280 Nm 1.3L Turbo 6-Speed DCT with Level 2 ADAS (17 Autonomous Features)",
                  "Electric Panoramic Sunroof, Ventilated Front Seats, Powered Tailgate & R18 Alloys",
                  "Dual OpenR Link Screens with Google Built-In, 360° Camera & Arkamys 3D Sound"
              ]
          },
          {
              "name": "Iconic Launch Edition Turbo TCe 160 6DCT",
              "engine": "1.3L Turbo TCe 160 (163 PS / 280 Nm)",
              "fuel": "Petrol",
              "trans": "DCT",
              "mileage": "16.5 kmpl",
              "exShowroom": 1869000,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "Level 2 ADAS (17 Features), 5-Star Bharat NCAP, 6 Airbags & 360° Camera",
              "keyFeatures": [
                  "Exclusive Iconic Launch Edition Decals, Dual-Tone Stealth Black Roof & Yellow Accents",
                  "163 PS Turbo 6DCT, Level 2 ADAS, Panoramic Sunroof & Ventilated Front Seats",
                  "Powered Tailgate, 360° Around View Camera & Dual OpenR Link Screens"
              ]
          },
          {
              "name": "Iconic Turbo TCe 160 6MT",
              "engine": "1.3L Turbo TCe 160 (163 PS / 280 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "16.8 kmpl",
              "exShowroom": 1899000,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "Level 2 ADAS (17 Features), 5-Star Bharat NCAP, 6 Airbags & 360° Camera",
              "keyFeatures": [
                  "Top-Spec Iconic Trim with 163 PS / 280 Nm 6-Speed Manual & Level 2 ADAS",
                  "Electric Panoramic Sunroof, Ventilated Leatherette Seats & Powered Tailgate",
                  "Dual OpenR Link Screens, 360° Camera & R18 Diamond-Cut Alloys"
              ]
          },
          {
              "name": "Techno Strong Hybrid E-Tech 160",
              "engine": "1.6L Strong Hybrid E-Tech 160 (160 PS)",
              "fuel": "Hybrid",
              "trans": "Automatic",
              "mileage": "24.5 kmpl",
              "exShowroom": 1899000,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "5-Star Bharat NCAP, 6 Airbags, 360° Camera & Blind Spot Warning",
              "keyFeatures": [
                  "160 PS Strong Hybrid E-Tech Powertrain with Electric Panoramic Sunroof",
                  "Dual OpenR Link Screens (25.65 cm + 26.03 cm), 360° Camera & R18 Alloys",
                  "Wireless Charger, Dual-Zone Auto Climate Control & Arkamys 3D Sound"
              ]
          },
          {
              "name": "Emotion Strong Hybrid E-Tech 160",
              "engine": "1.6L Strong Hybrid E-Tech 160 (160 PS)",
              "fuel": "Hybrid",
              "trans": "Automatic",
              "mileage": "24.5 kmpl",
              "exShowroom": 1949000,
              "isVFM": false,
              "vfmBadge": "",
              "ADASSafety": "Level 2 ADAS (17 Features), 5-Star Bharat NCAP, 6 Airbags & 360° Camera",
              "keyFeatures": [
                  "Flagship 160 PS Strong Hybrid E-Tech 160 with Level 2 ADAS (17 Autonomous Features)",
                  "Electric Panoramic Sunroof, Ventilated Front Seats, 6-Way Power Seat & Powered Tailgate",
                  "Dual OpenR Link Screens with Google Built-In, 360° Camera & Dual-Tone Roof Options"
              ]
          }
      ]
  },
  {
      "id": "citroen-basalt",
      "name": "Citroën Basalt",
      "brand": "Citroën",
      "tagline": "India's First Mainstream SUV Coupe with Advanced Flying Carpet Comfort & 4-Star Safety",
      "launchDate": "2024 / 2025",
      "bodyType": "SUV Coupe",
      "fuelTypes": [
          "Petrol"
      ],
      "priceRange": "₹7.99 – ₹13.83 Lakh",
      "minPrice": 799000,
      "maxPrice": 1383000,
      "safetyRating": "4.0 ★ (Bharat NCAP 4-Star — Adult 26.19/32, Child 35.90/49)",
      "groundClearance": "180 mm",
      "bootSpace": "470 Litres",
      "waitingPeriod": "2 - 4 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/citroen-basalt/colors/garnet-red.webp",
      "summary": "The Citroën Basalt is India's first mainstream coupe SUV, combining a sweeping aerodynamic fastback silhouette with Citroën's signature Advanced Comfort suspension with Progressive Hydraulic Cushions, 26 cm floating touchscreen, wireless phone charging, 6 airbags standard, and spirited PureTech 110 turbo petrol engines.",
      "colors": [
          {
              "id": "polar-white",
              "name": "Polar White",
              "hex": "#E3E3E3",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-basalt/colors/polar-white.webp"
          },
          {
              "id": "steel-grey",
              "name": "Steel Grey",
              "hex": "#A3A3A3",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-basalt/colors/steel-grey.webp"
          },
          {
              "id": "galaxy-blue",
              "name": "Galaxy Blue",
              "hex": "#172B4D",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-basalt/colors/galaxy-blue.webp"
          },
          {
              "id": "garnet-red",
              "name": "Garnet Red",
              "hex": "#D54638",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-basalt/colors/garnet-red.webp"
          },
          {
              "id": "perla-nera-black",
              "name": "Perla Nera Black",
              "hex": "#1C1C1C",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-basalt/colors/perla-nera-black.webp"
          },
          {
              "id": "polar-white-black-roof",
              "name": "Polar White & Black Roof",
              "hex": "#E3E3E3",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-basalt/colors/polar-white-black-roof.webp"
          },
          {
              "id": "garnet-red-black-roof",
              "name": "Garnet Red & Black Roof",
              "hex": "#D54638",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-basalt/colors/garnet-red-black-roof.webp"
          }
      ],
      "gallery": [
          {
              "id": "ext-1",
              "title": "Coupe Silhouette & Aerodynamics",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-basalt/gallery/ext-1.webp"
          },
          {
              "id": "ext-2",
              "title": "Aggressive Front Grille & LED DRLs",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-basalt/gallery/ext-2.webp"
          },
          {
              "id": "ext-3",
              "title": "Sweeping Fastback Roofline",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-basalt/gallery/ext-3.webp"
          },
          {
              "id": "ext-4",
              "title": "Muscular Rear Stance & 3D Taillamps",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-basalt/gallery/ext-4.webp"
          },
          {
              "id": "ext-5",
              "title": "Citroën Comfort Heritage",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-basalt/gallery/ext-5.webp"
          },
          {
              "id": "ext-6",
              "title": "Advanced Comfort Cockpit & 26cm Screen",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-basalt/gallery/ext-6.webp"
          },
          {
              "id": "int-1",
              "title": "Citroën Advanced Comfort Cockpit",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-basalt/gallery/int-1.webp"
          },
          {
              "id": "int-2",
              "title": "26 cm Floating Infotainment Touchscreen",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-basalt/gallery/int-2.webp"
          },
          {
              "id": "int-3",
              "title": "Ergonomic Center Console & Wireless Charger",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-basalt/gallery/int-3.webp"
          },
          {
              "id": "int-4",
              "title": "Spacious Rear Bench with Adjustable Headrests",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-basalt/gallery/int-4.webp"
          },
          {
              "id": "comf-1",
              "title": "Plush Flying Carpet Ride Comfort",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-basalt/gallery/comf-1.webp"
          },
          {
              "id": "tech-1",
              "title": "Digital Driver Cluster with Multi-Mode View",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-basalt/gallery/tech-1.webp"
          }
      ],
      "specs": {
          "engine": "1.2L PureTech 82 NA / 1.2L PureTech 110 Turbo Petrol",
          "power": "82 PS @ 5750 rpm / 110 PS @ 5500 rpm",
          "torque": "115 Nm @ 3750 rpm / 205 Nm @ 1750-2500 rpm",
          "transmission": "5-Speed MT / 6-Speed MT / 6-Speed AISIN Torque Converter AT",
          "mileage": "18.0 – 19.5 km/l",
          "fuelTank": "45 Litres",
          "dimensions": "4352 mm L x 1765 mm W x 1593 mm H",
          "wheelbase": "2651 mm",
          "groundClearance": "180 mm",
          "bootSpace": "470 Litres",
          "brakes": "Front Disc, Rear Drum",
          "suspension": "MacPherson Strut with Flying Carpet Progressive Cushions (Front) / Twist Beam (Rear)"
      },
      "variants": [
          {
              "name": "You 1.2 NA Petrol",
              "engine": "1.2L PureTech 82 (82 PS / 115 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "18.0 km/l",
              "exShowroom": 799000,
              "isVFM": false,
              "vfmBadge": "",
              "keyFeatures": [
                  "6 Airbags Standard",
                  "ESC & Hill Hold Assist",
                  "Rear Parking Sensors",
                  "Front Power Windows",
                  "High Ground Clearance"
              ]
          },
          {
              "name": "Plus 1.2 NA Petrol",
              "engine": "1.2L PureTech 82 (82 PS / 115 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "18.0 km/l",
              "exShowroom": 999000,
              "isVFM": true,
              "vfmBadge": "Best Value Petrol",
              "keyFeatures": [
                  "26 cm Touchscreen Infotainment",
                  "Wireless Android Auto & Apple CarPlay",
                  "Automatic Climate Control",
                  "LED DRLs",
                  "Steering Mounted Controls"
              ]
          },
          {
              "name": "Plus Turbo 1.2 Petrol MT",
              "engine": "1.2L PureTech 110 Turbo (110 PS / 190 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "19.5 km/l",
              "exShowroom": 1157000,
              "isVFM": false,
              "vfmBadge": "",
              "keyFeatures": [
                  "110 PS Turbo Petrol Punch",
                  "6-Speed Manual Transmission",
                  "Rear AC Vents",
                  "Dual Tone Roof Option",
                  "Rear Camera with Guidelines"
              ]
          },
          {
              "name": "Plus Turbo 1.2 Petrol AT",
              "engine": "1.2L PureTech 110 Turbo (110 PS / 205 Nm)",
              "fuel": "Petrol",
              "trans": "Automatic",
              "mileage": "18.7 km/l",
              "exShowroom": 1282000,
              "isVFM": true,
              "vfmBadge": "Top Pick Automatic",
              "keyFeatures": [
                  "6-Speed AISIN Torque Converter AT",
                  "205 Nm Peak Torque",
                  "Cruise Control with Speed Limiter",
                  "Wireless Phone Charging",
                  "Leatherette Armrest"
              ]
          },
          {
              "name": "Max Turbo 1.2 Petrol MT",
              "engine": "1.2L PureTech 110 Turbo (110 PS / 190 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "19.5 km/l",
              "exShowroom": 1243000,
              "isVFM": false,
              "vfmBadge": "",
              "keyFeatures": [
                  "16-inch Diamond Cut Alloys",
                  "LED Projector Headlamps",
                  "Advanced Comfort Ventilated Seats",
                  "MyCitroën Connect Telematics",
                  "Shark Fin Antenna"
              ]
          },
          {
              "name": "Max Turbo 1.2 Petrol AT",
              "engine": "1.2L PureTech 110 Turbo (110 PS / 205 Nm)",
              "fuel": "Petrol",
              "trans": "Automatic",
              "mileage": "18.7 km/l",
              "exShowroom": 1383000,
              "isVFM": false,
              "vfmBadge": "",
              "keyFeatures": [
                  "Fully Loaded Automatic Coupe",
                  "6-Speed AT with Paddle Shifters",
                  "360-View Camera System",
                  "Premium Dual-Tone Upholstery",
                  "Automatic Temperature Control"
              ]
          }
      ]
  },
  {
      "id": "citroen-aircross",
      "name": "Citroën Aircross",
      "brand": "Citroën",
      "tagline": "The Ultra-Modular 5 & 5+2 Seater SUV with Supreme Ride Comfort",
      "launchDate": "2024 / 2025",
      "bodyType": "SUV",
      "fuelTypes": [
          "Petrol"
      ],
      "priceRange": "₹8.89 – ₹14.54 Lakh",
      "minPrice": 889000,
      "maxPrice": 1454000,
      "safetyRating": "4.0 ★ (Bharat NCAP 4-Star — Adult 26.19/32, Child 35.90/49)",
      "groundClearance": "200 mm",
      "bootSpace": "444 – 511 Litres",
      "waitingPeriod": "2 - 4 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/citroen-aircross/colors/deep-forest-green.webp",
      "summary": "The Citroën Aircross is a highly versatile mid-size SUV offering class-exclusive 5-seater and 5+2 modular seating with removable third-row seats, best-in-segment suspension ride quality, 200 mm ground clearance, and punchy 110 PS turbo petrol power.",
      "colors": [
          {
              "id": "polar-white",
              "name": "Polar White",
              "hex": "#E3E3E3",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-aircross/colors/polar-white.webp"
          },
          {
              "id": "steel-grey",
              "name": "Steel Grey",
              "hex": "#A3A3A3",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-aircross/colors/steel-grey.webp"
          },
          {
              "id": "deep-forest-green",
              "name": "Deep Forest Green",
              "hex": "#14221A",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-aircross/colors/deep-forest-green.webp"
          },
          {
              "id": "galaxy-blue",
              "name": "Galaxy Blue",
              "hex": "#172B4D",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-aircross/colors/galaxy-blue.webp"
          },
          {
              "id": "perla-nera-black",
              "name": "Perla Nera Black",
              "hex": "#1C1C1C",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-aircross/colors/perla-nera-black.webp"
          },
          {
              "id": "garnet-red",
              "name": "Garnet Red",
              "hex": "#D54638",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-aircross/colors/garnet-red.webp"
          },
          {
              "id": "polar-white-black-roof",
              "name": "Polar White & Black Roof",
              "hex": "#E3E3E3",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-aircross/colors/polar-white-black-roof.webp"
          },
          {
              "id": "deep-forest-green-black-roof",
              "name": "Deep Forest Green & Black Roof",
              "hex": "#14221A",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-aircross/colors/deep-forest-green-black-roof.webp"
          },
          {
              "id": "galaxy-blue-polar-white-roof",
              "name": "Galaxy Blue & Polar White Roof",
              "hex": "#172B4D",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-aircross/colors/galaxy-blue-polar-white-roof.webp"
          },
          {
              "id": "garnet-red-black-roof",
              "name": "Garnet Red & Black Roof",
              "hex": "#D54638",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-aircross/colors/garnet-red-black-roof.webp"
          }
      ],
      "gallery": [
          {
              "id": "ext-1",
              "title": "Bold Modern Citroën Front Facia",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-aircross/gallery/ext-1.webp"
          },
          {
              "id": "ext-2",
              "title": "Rugged SUV Stance & High Clearance",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-aircross/gallery/ext-2.webp"
          },
          {
              "id": "ext-3",
              "title": "Floating Roofline & Dual Tone Accents",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-aircross/gallery/ext-3.webp"
          },
          {
              "id": "ext-4",
              "title": "Chiseled Rear Profile with Distinct Badging",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-aircross/gallery/ext-4.webp"
          },
          {
              "id": "ext-5",
              "title": "Projector Headlamps with Signature DRLs",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-aircross/gallery/ext-5.webp"
          },
          {
              "id": "ext-6",
              "title": "Robust Roof Rails for Practical Adventure",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-aircross/gallery/ext-6.webp"
          },
          {
              "id": "int-1",
              "title": "Ergonomic Dashboard with Premium Injected Gray",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-aircross/gallery/int-1.webp"
          },
          {
              "id": "int-2",
              "title": "Leatherette Wrapped Steering with Mounted Controls",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-aircross/gallery/int-2.webp"
          },
          {
              "id": "seat-1",
              "title": "Class-Exclusive 5+2 Removable 3rd Row",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-aircross/gallery/seat-1.webp"
          },
          {
              "id": "seat-2",
              "title": "Expansive 511-Litre Boot Capacity",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-aircross/gallery/seat-2.webp"
          },
          {
              "id": "seat-3",
              "title": "Modular Flat Fold Outdoor Configuration",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-aircross/gallery/seat-3.webp"
          },
          {
              "id": "tech-1",
              "title": "26 cm Citroën Connect Touchscreen with Wireless AA/CP",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-aircross/gallery/tech-1.webp"
          }
      ],
      "specs": {
          "engine": "1.2L PureTech 82 NA / 1.2L PureTech 110 Turbo Petrol",
          "power": "82 PS @ 5750 rpm / 110 PS @ 5500 rpm",
          "torque": "115 Nm @ 3750 rpm / 205 Nm @ 1750-2500 rpm",
          "transmission": "5-Speed MT / 6-Speed MT / 6-Speed AISIN Torque Converter AT",
          "mileage": "17.6 – 18.5 km/l",
          "fuelTank": "45 Litres",
          "dimensions": "4323 mm L x 1796 mm W x 1669 mm H",
          "wheelbase": "2671 mm",
          "groundClearance": "200 mm",
          "bootSpace": "444 Litres (5-Seater) / 511 Litres (with 3rd row removed)",
          "brakes": "Front Disc, Rear Drum",
          "suspension": "MacPherson Strut with Progressive Hydraulic Cushions (Front) / Twist Beam (Rear)"
      },
      "variants": [
          {
              "name": "You 1.2 NA 5-Seater",
              "engine": "1.2L PureTech 82 (82 PS / 115 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "18.5 km/l",
              "exShowroom": 889000,
              "isVFM": false,
              "vfmBadge": "",
              "keyFeatures": [
                  "6 Airbags Standard",
                  "ESC & Hill Hold Assist",
                  "TPMS (Tyre Pressure Monitor)",
                  "High Ground Clearance (200mm)",
                  "Front Power Windows"
              ]
          },
          {
              "name": "Plus 1.2 NA 5-Seater",
              "engine": "1.2L PureTech 82 (82 PS / 115 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "18.5 km/l",
              "exShowroom": 999000,
              "isVFM": true,
              "vfmBadge": "Best Value SUV",
              "keyFeatures": [
                  "26 cm Touchscreen Infotainment",
                  "Wireless Android Auto & Apple CarPlay",
                  "Roof Mounted Rear AC Vents",
                  "LED DRLs",
                  "Steering Audio Controls"
              ]
          },
          {
              "name": "Plus Turbo 1.2 5+2 Seater",
              "engine": "1.2L PureTech 110 Turbo (110 PS / 190 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "18.5 km/l",
              "exShowroom": 1161400,
              "isVFM": true,
              "vfmBadge": "Best Value 7-Seater",
              "keyFeatures": [
                  "Modular 7-Seater with Removable 3rd Row",
                  "110 PS Turbo Petrol Power",
                  "Dedicated Blower for 3rd Row",
                  "Rear Camera with Sensors",
                  "16-inch Steel Wheels with Caps"
              ]
          },
          {
              "name": "Max Turbo 1.2 5-Seater MT",
              "engine": "1.2L PureTech 110 Turbo (110 PS / 190 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "18.5 km/l",
              "exShowroom": 1260500,
              "isVFM": false,
              "vfmBadge": "",
              "keyFeatures": [
                  "17-inch Diamond Cut Alloy Wheels",
                  "Front Fog Lamps",
                  "Leatherette Seat Upholstery",
                  "MyCitroën Connect App",
                  "Shark Fin Antenna"
              ]
          },
          {
              "name": "Max Turbo 1.2 5+2 Seater MT",
              "engine": "1.2L PureTech 110 Turbo (110 PS / 190 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "18.5 km/l",
              "exShowroom": 1295000,
              "isVFM": false,
              "vfmBadge": "",
              "keyFeatures": [
                  "Full 7-Seater Configuration",
                  "17-inch Diamond Cut Alloys",
                  "Auto Climate Control",
                  "Power Folding ORVMs",
                  "Rear Defogger & Wiper"
              ]
          },
          {
              "name": "Max Turbo 1.2 5-Seater AT",
              "engine": "1.2L PureTech 110 Turbo (110 PS / 205 Nm)",
              "fuel": "Petrol",
              "trans": "Automatic",
              "mileage": "17.6 km/l",
              "exShowroom": 1399000,
              "isVFM": true,
              "vfmBadge": "Top Pick Automatic",
              "keyFeatures": [
                  "6-Speed AISIN Torque Converter AT",
                  "205 Nm Punchy Torque",
                  "Cruise Control with Speed Limiter",
                  "Telescopic Steering Adjust",
                  "Wireless Charger"
              ]
          },
          {
              "name": "Max Turbo 1.2 5+2 Seater AT",
              "engine": "1.2L PureTech 110 Turbo (110 PS / 205 Nm)",
              "fuel": "Petrol",
              "trans": "Automatic",
              "mileage": "17.6 km/l",
              "exShowroom": 1454000,
              "isVFM": false,
              "vfmBadge": "",
              "keyFeatures": [
                  "Top-Spec 7-Seater Automatic",
                  "Removable Third-Row Chairs",
                  "Full Safety Suite (6 Airbags + ESP)",
                  "Connected Car Telematics",
                  "Dual Tone Roof Fitment"
              ]
          }
      ]
  },
  {
      "id": "citroen-c3",
      "name": "Citroën C3",
      "brand": "Citroën",
      "tagline": "The Expressive Hatchback with Genuine SUV Stance & Segment-Best Performance",
      "launchDate": "2024 / 2025",
      "bodyType": "Hatchback",
      "fuelTypes": [
          "Petrol"
      ],
      "priceRange": "₹4.99 – ₹9.45 Lakh",
      "minPrice": 499000,
      "maxPrice": 945000,
      "safetyRating": "4.0 ★ (Bharat NCAP 4-Star — Adult 26.19/32, Child 35.90/49)",
      "groundClearance": "180 mm",
      "bootSpace": "315 Litres",
      "waitingPeriod": "1 - 3 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/citroen-c3/colors/citroen-c3-garnet-red.webp",
      "summary": "The Citroën C3 redefines the Indian hatchback space with an elevated driving stance, best-in-class 110 PS Turbo petrol option, 10.25-inch wireless infotainment, exceptional road-eating ride quality, and 6 standard airbags across all MY2025/2026 variants.",
      "colors": [
          {
              "id": "polar-white",
              "name": "Polar White",
              "hex": "#E3E3E3",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-c3/colors/polar-white.webp"
          },
          {
              "id": "steel-grey",
              "name": "Steel Grey",
              "hex": "#A3A3A3",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-c3/colors/steel-grey.webp"
          },
          {
              "id": "galaxy-blue",
              "name": "Galaxy Blue",
              "hex": "#172B4D",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-c3/colors/galaxy-blue.webp"
          },
          {
              "id": "perla-nera-black",
              "name": "Perla Nera Black",
              "hex": "#1C1C1C",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-c3/colors/perla-nera-black.webp"
          },
          {
              "id": "garnet-red",
              "name": "Garnet Red",
              "hex": "#D54638",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-c3/colors/garnet-red.webp"
          }
      ],
      "gallery": [
          {
              "id": "ext-1",
              "title": "Bold Chevron Double Grille Front",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c3/gallery/ext-1.webp"
          },
          {
              "id": "ext-2",
              "title": "High Ground Clearance & Stance",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c3/gallery/ext-2.webp"
          },
          {
              "id": "ext-3",
              "title": "Aerodynamic Roof Rails & Side Cladding",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c3/gallery/ext-3.webp"
          },
          {
              "id": "ext-4",
              "title": "Sculpted Rear Profile with Skid Plates",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c3/gallery/ext-4.webp"
          },
          {
              "id": "ext-5",
              "title": "Dual-Tone Wheels & Sporty Wheel Arches",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c3/gallery/ext-5.webp"
          },
          {
              "id": "int-1",
              "title": "Dual-Tone Modern Cockpit with Anodized Trim",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c3/gallery/int-1.webp"
          },
          {
              "id": "int-2",
              "title": "Metropolitan Leatherette Wrapped Dashboard",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c3/gallery/int-2.webp"
          },
          {
              "id": "comf-1",
              "title": "Supple Advanced Comfort Seats",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c3/gallery/comf-1.webp"
          },
          {
              "id": "comf-2",
              "title": "Roomy Rear Legroom & Generous Headroom",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c3/gallery/comf-2.webp"
          },
          {
              "id": "comf-3",
              "title": "Useful Storage Consoles & Cable Organizers",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c3/gallery/comf-3.webp"
          },
          {
              "id": "safe-1",
              "title": "6 Airbags Standard Safety Shield",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c3/gallery/safe-1.webp"
          },
          {
              "id": "tech-1",
              "title": "10-inch Infotainment with Wireless Phone Mirroring",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c3/gallery/tech-1.webp"
          }
      ],
      "specs": {
          "engine": "1.2L PureTech 82 NA / 1.2L PureTech 110 Turbo Petrol",
          "power": "82 PS @ 5750 rpm / 110 PS @ 5500 rpm",
          "torque": "115 Nm @ 3750 rpm / 205 Nm @ 1750-2500 rpm",
          "transmission": "5-Speed MT / 6-Speed MT / 6-Speed AISIN Torque Converter AT",
          "mileage": "18.5 – 19.3 km/l",
          "fuelTank": "30 Litres",
          "dimensions": "3981 mm L x 1733 mm W x 1586 mm H",
          "wheelbase": "2540 mm",
          "groundClearance": "180 mm",
          "bootSpace": "315 Litres",
          "brakes": "Front Disc, Rear Drum",
          "suspension": "MacPherson Strut with Coil Spring (Front) / Rear Twist Beam"
      },
      "variants": [
          {
              "name": "Live 1.2 Petrol MT",
              "engine": "1.2L PureTech 82 (82 PS / 115 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "19.3 km/l",
              "exShowroom": 499000,
              "isVFM": false,
              "vfmBadge": "",
              "keyFeatures": [
                  "6 Airbags Standard",
                  "ESC & Hill Start Assist",
                  "Manual AC with Pollen Filter",
                  "Digital Speedometer Cluster",
                  "Front Power Windows"
              ]
          },
          {
              "name": "Live with Vibe Pack 1.2 MT",
              "engine": "1.2L PureTech 82 (82 PS / 115 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "19.3 km/l",
              "exShowroom": 553000,
              "isVFM": false,
              "vfmBadge": "",
              "keyFeatures": [
                  "Exterior Orange Accent Trim",
                  "Body Side Moldings",
                  "Fog Lamp Bezel Accents",
                  "6 Airbags Standard",
                  "Central Door Locking"
              ]
          },
          {
              "name": "Feel 1.2 Petrol MT",
              "engine": "1.2L PureTech 82 (82 PS / 115 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "19.3 km/l",
              "exShowroom": 585000,
              "isVFM": true,
              "vfmBadge": "Best Budget Choice",
              "keyFeatures": [
                  "26 cm Touchscreen Infotainment",
                  "Wireless Apple CarPlay & Android Auto",
                  "4 Speakers Audio System",
                  "Steering Mounted Controls",
                  "Roof Rails & Skid Plates"
              ]
          },
          {
              "name": "Shine 1.2 Petrol MT",
              "engine": "1.2L PureTech 82 (82 PS / 115 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "19.3 km/l",
              "exShowroom": 763000,
              "isVFM": true,
              "vfmBadge": "Most Popular",
              "keyFeatures": [
                  "15-inch Diamond Cut Alloys",
                  "Electrically Adjustable ORVMs",
                  "Rear Defogger & Wiper",
                  "Rear Parking Camera",
                  "Day/Night IRVM"
              ]
          },
          {
              "name": "Shine Turbo 1.2 Petrol MT",
              "engine": "1.2L PureTech 110 Turbo (110 PS / 190 Nm)",
              "fuel": "Petrol",
              "trans": "Manual",
              "mileage": "19.3 km/l",
              "exShowroom": 874000,
              "isVFM": false,
              "vfmBadge": "",
              "keyFeatures": [
                  "110 PS Hot-Hatch Performance",
                  "6-Speed Manual Gearbox",
                  "190 Nm Peak Torque",
                  "Leatherette Steering Wrap",
                  "MyCitroën Connect Telematics"
              ]
          },
          {
              "name": "Shine Turbo 1.2 Petrol AT",
              "engine": "1.2L PureTech 110 Turbo (110 PS / 205 Nm)",
              "fuel": "Petrol",
              "trans": "Automatic",
              "mileage": "18.5 km/l",
              "exShowroom": 945000,
              "isVFM": true,
              "vfmBadge": "Top Pick Turbo AT",
              "keyFeatures": [
                  "6-Speed AISIN Torque Converter Automatic",
                  "205 Nm Massive Torque",
                  "Cruise Control with Speed Limiter",
                  "Diamond Cut Alloy Wheels",
                  "Automatic Climate Control"
              ]
          }
      ]
  },
  {
      "id": "citroen-ec3",
      "name": "Citroën ë-C3",
      "brand": "Citroën",
      "tagline": "All-Electric Urban SUV with 320 km Range & DC Fast Charging",
      "launchDate": "2024 / 2025",
      "bodyType": "Electric SUV",
      "fuelTypes": [
          "Electric"
      ],
      "priceRange": "₹11.99 – ₹13.36 Lakh",
      "minPrice": 1199000,
      "maxPrice": 1336300,
      "safetyRating": "4.0 ★ (Bharat NCAP 4-Star — Adult 26.19/32, Child 35.90/49)",
      "groundClearance": "170 mm",
      "bootSpace": "315 Litres",
      "waitingPeriod": "1 - 3 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/citroen-ec3/colors/citroen-ec3-galaxy-blue.webp",
      "summary": "The Citroën ë-C3 is a practical, comfortable 100% electric SUV featuring a 29.2 kWh battery pack, certified 320 km MIDC range, CCS2 DC fast charging (10% to 80% in 57 mins), regenerative braking, and unmatched city suspension comfort.",
      "colors": [
          {
              "id": "polar-white",
              "name": "Polar White",
              "hex": "#E3E3E3",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-ec3/colors/polar-white.webp"
          },
          {
              "id": "perla-nera-black",
              "name": "Perla Nera Black",
              "hex": "#1C1C1C",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-ec3/colors/perla-nera-black.webp"
          },
          {
              "id": "galaxy-blue",
              "name": "Galaxy Blue",
              "hex": "#172B4D",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-ec3/colors/galaxy-blue.webp"
          }
      ],
      "gallery": [
          {
              "id": "ext-1",
              "title": "Clean Front Grille with Flush Charging Port",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-ec3/gallery/ext-1.webp"
          },
          {
              "id": "ext-2",
              "title": "Electric Blue Accent Trims & Badges",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-ec3/gallery/ext-2.webp"
          },
          {
              "id": "ext-3",
              "title": "Elevated Stance with 170 mm Clearance",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-ec3/gallery/ext-3.webp"
          },
          {
              "id": "ext-4",
              "title": "Aerodynamic Wheels & Underbody Battery Shield",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-ec3/gallery/ext-4.webp"
          },
          {
              "id": "int-1",
              "title": "Anodized Blue Themed Modern Interior",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-ec3/gallery/int-1.webp"
          },
          {
              "id": "int-2",
              "title": "e-Toggle Electronic Drive Selector",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-ec3/gallery/int-2.webp"
          },
          {
              "id": "tech-1",
              "title": "29.2 kWh Battery with 320 km Range",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-ec3/gallery/tech-1.webp"
          },
          {
              "id": "tech-2",
              "title": "DC Fast Charging: 10% to 80% in 57 min",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-ec3/gallery/tech-2.webp"
          },
          {
              "id": "tech-3",
              "title": "CCS2 Charging Gun Compatibility",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-ec3/gallery/tech-3.webp"
          },
          {
              "id": "tech-4",
              "title": "Wireless Smartphone Charging Deck",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-ec3/gallery/tech-4.webp"
          },
          {
              "id": "tech-5",
              "title": "Connected Car Navigation & Range Monitor",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-ec3/gallery/tech-5.webp"
          },
          {
              "id": "hero-1",
              "title": "Citroën ë-C3 Electric SUV Panorama",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-ec3/gallery/hero-1.webp"
          }
      ],
      "specs": {
          "engine": "Permanent Magnet Synchronous Electric Motor",
          "battery": "29.2 kWh Advanced Lithium-ion",
          "power": "57 PS (42 kW)",
          "torque": "143 Nm instantaneous torque",
          "transmission": "Single Speed Automatic (e-Toggle)",
          "range": "320 km (MIDC Certified)",
          "chargingTime": "10% to 80% in 57 mins (DC Fast Charger) / 10.5 hrs (3.3 kW Home AC)",
          "dimensions": "3981 mm L x 1733 mm W x 1586 mm H",
          "wheelbase": "2540 mm",
          "groundClearance": "170 mm",
          "bootSpace": "315 Litres",
          "brakes": "Front Disc, Rear Drum with Regenerative Braking",
          "suspension": "MacPherson Strut (Front) / Rear Twist Beam"
      },
      "variants": [
          {
              "name": "Live Electric AT",
              "engine": "Permanent Magnet Synchronous Motor (57 PS / 143 Nm)",
              "fuel": "Electric",
              "trans": "Automatic",
              "mileage": "320 km Range",
              "exShowroom": 1209000,
              "isVFM": false,
              "vfmBadge": "",
              "keyFeatures": [
                  "29.2 kWh Battery Pack",
                  "320 km Certified Range",
                  "6 Airbags Standard",
                  "e-Toggle Shift by Wire",
                  "Regenerative Braking"
              ]
          },
          {
              "name": "Live (O) Electric AT",
              "engine": "Permanent Magnet Synchronous Motor (57 PS / 143 Nm)",
              "fuel": "Electric",
              "trans": "Automatic",
              "mileage": "320 km Range",
              "exShowroom": 1245000,
              "isVFM": true,
              "vfmBadge": "Best Value EV",
              "keyFeatures": [
                  "DC Fast Charging (CCS2)",
                  "26 cm Touchscreen Infotainment",
                  "Wireless Android Auto & Apple CarPlay",
                  "Front Power Windows",
                  "Speed Sensing Door Locks"
              ]
          },
          {
              "name": "Shine Electric AT",
              "engine": "Permanent Magnet Synchronous Motor (57 PS / 143 Nm)",
              "fuel": "Electric",
              "trans": "Automatic",
              "mileage": "320 km Range",
              "exShowroom": 1336300,
              "isVFM": true,
              "vfmBadge": "Top Spec EV",
              "keyFeatures": [
                  "15-inch Diamond Cut Alloys",
                  "Rear Parking Camera",
                  "Electrically Folding Mirrors",
                  "Leatherette Wrapped Steering",
                  "MyCitroën Connect EV Telematics"
              ]
          }
      ]
  },
  {
      "id": "citroen-c5-aircross",
      "name": "Citroën C5 Aircross",
      "brand": "Citroën",
      "tagline": "The Ultra-Comfort Flagship SUV with Progressive Hydraulic Cushions & Pure French Luxury",
      "launchDate": "2024 / 2025",
      "bodyType": "SUV",
      "fuelTypes": [
          "Diesel"
      ],
      "priceRange": "₹37.32 – ₹39.99 Lakh",
      "minPrice": 3732400,
      "maxPrice": 3999000,
      "safetyRating": "5.0 ★ (Euro NCAP 5-Star — Adult 89%, Child 86%)",
      "groundClearance": "230 mm",
      "bootSpace": "580 – 720 Litres",
      "waitingPeriod": "3 - 6 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/citroen-c5-aircross/colors/citroen-c5-aircross-eclipse-blue.webp",
      "summary": "The Citroën C5 Aircross is Citroën's flagship premium SUV in India, boasting unmatched ride plushness via Progressive Hydraulic Cushions, acoustic double-laminated glass, 3 independent reclining rear seats, a panoramic sunroof, and a muscular 2.0L diesel engine paired with an 8-speed automatic.",
      "colors": [
          {
              "id": "pearl-white",
              "name": "Pearl White",
              "hex": "#ECECEC",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-c5-aircross/colors/pearl-white.webp"
          },
          {
              "id": "pearl-nera-black",
              "name": "Pearl Nera Black",
              "hex": "#1C1C1C",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-c5-aircross/colors/pearl-nera-black.webp"
          },
          {
              "id": "eclipse-blue",
              "name": "Eclipse Blue",
              "hex": "#1D2D5F",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-c5-aircross/colors/eclipse-blue.webp"
          },
          {
              "id": "cumulus-grey",
              "name": "Cumulus Grey",
              "hex": "#8B8D8E",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-c5-aircross/colors/cumulus-grey.webp"
          },
          {
              "id": "pearl-white-black-roof",
              "name": "Pearl White & Black Roof",
              "hex": "#ECECEC",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-c5-aircross/colors/pearl-white-black-roof.webp"
          },
          {
              "id": "eclipse-blue-black-roof",
              "name": "Eclipse Blue & Black Roof",
              "hex": "#1D2D5F",
              "image": "https://ik.imagekit.io/2908vvlod/cars/citroen-c5-aircross/colors/eclipse-blue-black-roof.webp"
          }
      ],
      "gallery": [
          {
              "id": "ext-1",
              "title": "Stately Flagship European SUV Front",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c5-aircross/gallery/ext-1.webp"
          },
          {
              "id": "ext-2",
              "title": "Aerodynamic Profile with Chrome Window C-Signature",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c5-aircross/gallery/ext-2.webp"
          },
          {
              "id": "ext-3",
              "title": "18-inch Two-Tone Pulsar Diamond-Cut Alloy Wheels",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c5-aircross/gallery/ext-3.webp"
          },
          {
              "id": "ext-4",
              "title": "3D LED Vision Headlamps with Integrated DRLs",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c5-aircross/gallery/ext-4.webp"
          },
          {
              "id": "int-1",
              "title": "Advanced Comfort Lounge with High-Density Foam Seats",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c5-aircross/gallery/int-1.webp"
          },
          {
              "id": "int-2",
              "title": "3 Individual Reclining & Sliding Rear Seats",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c5-aircross/gallery/int-2.webp"
          },
          {
              "id": "int-3",
              "title": "Panoramic Sunroof with Electric Blind",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c5-aircross/gallery/int-3.webp"
          },
          {
              "id": "tech-1",
              "title": "10-inch High-Definition Floating Central Screen",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c5-aircross/gallery/tech-1.webp"
          },
          {
              "id": "tech-2",
              "title": "12.3-inch Fully Customizable Digital Driver Display",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c5-aircross/gallery/tech-2.webp"
          },
          {
              "id": "safe-1",
              "title": "Blind Spot Monitoring & Park Assist Suite",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c5-aircross/gallery/safe-1.webp"
          },
          {
              "id": "banner-1",
              "title": "Citroën C5 Aircross High-Speed Highway Stance",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c5-aircross/gallery/banner-1.webp"
          },
          {
              "id": "banner-2",
              "title": "Flagship Luxury & Road Dominance",
              "url": "https://ik.imagekit.io/2908vvlod/cars/citroen-c5-aircross/gallery/banner-2.webp"
          }
      ],
      "specs": {
          "engine": "2.0L 4-Cylinder Turbo Diesel (DW10 FC)",
          "power": "177 PS (130 kW) @ 3750 rpm",
          "torque": "400 Nm @ 2000 rpm",
          "transmission": "8-Speed Torque Converter Automatic with Electronic Selector & Paddle Shifters",
          "mileage": "17.5 km/l (ARAI Certified)",
          "fuelTank": "52.5 Litres",
          "dimensions": "4500 mm L x 1969 mm W x 1710 mm H",
          "wheelbase": "2730 mm",
          "groundClearance": "230 mm",
          "bootSpace": "580 Litres (expandable to 720L with seats slid forward / 1630L folded)",
          "brakes": "Front & Rear Ventilated Discs with Electronic Parking Brake",
          "suspension": "MacPherson Strut with Progressive Hydraulic Cushions (Front) / Multi-Arm Double Cushions (Rear)"
      },
      "variants": [
          {
              "name": "Feel 2.0 Diesel 8AT",
              "engine": "2.0L DW10 FC Turbo Diesel (177 PS / 400 Nm)",
              "fuel": "Diesel",
              "trans": "Automatic",
              "mileage": "17.5 km/l",
              "exShowroom": 3732400,
              "isVFM": true,
              "vfmBadge": "Flagship Value",
              "keyFeatures": [
                  "177 PS / 400 Nm DW10 FC Engine",
                  "8-Speed Automatic with Paddle Shifters",
                  "Progressive Hydraulic Cushions Suspension",
                  "Panoramic Sunroof",
                  "Hands-Free Electric Tailgate"
              ]
          },
          {
              "name": "Shine 2.0 Diesel 8AT",
              "engine": "2.0L DW10 FC Turbo Diesel (177 PS / 400 Nm)",
              "fuel": "Diesel",
              "trans": "Automatic",
              "mileage": "17.5 km/l",
              "exShowroom": 3999000,
              "isVFM": true,
              "vfmBadge": "Top Luxury",
              "keyFeatures": [
                  "Acoustic Double-Laminated Glass",
                  "3 Independent Sliding Rear Seats",
                  "Blind Spot Monitoring System",
                  "Park Assist with 360 Camera",
                  "Dual-Tone Contrast Black Roof"
              ]
          }
      ]
  },
  {
      "id": "nissan-magnite",
      "name": "Nissan Magnite",
      "brand": "Nissan",
      "tagline": "Bold, Premium & Advanced Compact SUV with 320+ Upgrades & 5-Star Safety",
      "launchDate": "2024 / 2025",
      "bodyType": "Compact SUV",
      "fuelTypes": [
          "Petrol",
          "CNG"
      ],
      "priceRange": "₹5.99 – ₹11.50 Lakh",
      "minPrice": 599000,
      "maxPrice": 1150000,
      "safetyRating": "5.0 ★ (Global NCAP 5-Star Adult Safety / 6 Airbags Standard)",
      "groundClearance": "205 mm",
      "bootSpace": "336 – 690 Litres",
      "waitingPeriod": "2 - 4 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/colors/sunrise-copper-orange.webp",
      "summary": "The New Nissan Magnite comes packed with over 320 upgrades, featuring an aggressive commanding front grille, LED Bi-Projector headlamps with L-shaped DRLs, 3D honeycomb LED tail lamps, best-in-segment 205 mm ground clearance, 6 airbags standard across all variants, wireless Android Auto & Apple CarPlay, 360-degree Around View Monitor, and a choice of responsive 1.0L naturally aspirated and 100 PS HRA0 turbo petrol engines with X-TRONIC CVT and EZ-Shift AMT.",
      "colors": [
          {
              "id": "sunrise-copper-orange",
              "name": "Sunrise Copper Orange",
              "hex": "#D86B27",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/colors/sunrise-copper-orange.webp"
          },
          {
              "id": "flare-garnet-red",
              "name": "Flare Garnet Red",
              "hex": "#BA1C24",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/colors/flare-garnet-red.webp"
          },
          {
              "id": "blade-silver",
              "name": "Blade Silver",
              "hex": "#BCC0C4",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/colors/blade-silver.webp"
          },
          {
              "id": "onyx-black",
              "name": "Onyx Black",
              "hex": "#1A1A1A",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/colors/onyx-black.webp"
          },
          {
              "id": "storm-white",
              "name": "Storm White",
              "hex": "#F4F4F4",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/colors/storm-white.webp"
          },
          {
              "id": "pearl-white",
              "name": "Pearl White",
              "hex": "#FAF8F5",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/colors/pearl-white.webp"
          },
          {
              "id": "metallic-grey",
              "name": "Metallic Grey",
              "hex": "#4F5459",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/colors/metallic-grey.webp"
          },
          {
              "id": "olive-bronze",
              "name": "Olive Bronze",
              "hex": "#4D4428",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/colors/olive-bronze.webp"
          },
          {
              "id": "sunrise-copper-orange-onyx-black",
              "name": "Sunrise Copper Orange & Onyx Black",
              "hex": "#D86B27",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/colors/sunrise-copper-orange-onyx-black.webp"
          },
          {
              "id": "flare-garnet-red-onyx-black",
              "name": "Flare Garnet Red & Onyx Black",
              "hex": "#BA1C24",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/colors/flare-garnet-red-onyx-black.webp"
          },
          {
              "id": "blade-silver-onyx-black",
              "name": "Blade Silver & Onyx Black",
              "hex": "#BCC0C4",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/colors/blade-silver-onyx-black.webp"
          },
          {
              "id": "pearl-white-onyx-black",
              "name": "Pearl White & Onyx Black",
              "hex": "#FAF8F5",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/colors/pearl-white-onyx-black.webp"
          }
      ],
      "gallery": [
          {
              "id": "gal-1",
              "title": "Bold Front Facia with Bi-Projector LED Headlamps",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/gallery/gal-1.webp"
          },
          {
              "id": "gal-2",
              "title": "Dynamic Side Profile & 205 mm Ground Clearance",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/gallery/gal-2.webp"
          },
          {
              "id": "gal-3",
              "title": "Cruise Control & Ergonomic Driver Seating",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/gallery/gal-3.webp"
          },
          {
              "id": "gal-4",
              "title": "Premium Dual-Tone Interior Cockpit Theme",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/gallery/gal-4.webp"
          },
          {
              "id": "gal-5",
              "title": "Tri-Tone Interior Ambience with Continuous Ambient Light",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/gallery/gal-5.webp"
          },
          {
              "id": "gal-6",
              "title": "First-in-Segment Premium MODURE Quilted Leatherette Seats",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/gallery/gal-6.webp"
          },
          {
              "id": "gal-7",
              "title": "Multi-Colour Ambient Mood Lighting Across Dash & Doors",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/gallery/gal-7.webp"
          },
          {
              "id": "gal-8",
              "title": "Class-Leading Spacious Couple Distance & Cabin Width",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/gallery/gal-8.webp"
          },
          {
              "id": "gal-9",
              "title": "Full Leather-Wrapped Dashboard & Instrument Panel",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/gallery/gal-9.webp"
          },
          {
              "id": "gal-10",
              "title": "Electronic Frameless Auto-Dimming Rear View Mirror",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/gallery/gal-10.webp"
          },
          {
              "id": "gal-11",
              "title": "16-inch Diamond Cut Precision Alloy Wheels",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/gallery/gal-11.webp"
          },
          {
              "id": "gal-12",
              "title": "L-Shaped LED DRLs & Split 3D Honeycomb LED Tail Lamps",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-magnite/gallery/gal-12.webp"
          }
      ],
      "specs": {
          "engine": "1.0L B4D Petrol (72 PS) / 1.0L HRA0 Turbo (100 PS)",
          "power": "72 PS @ 6250 rpm / 100 PS @ 5000 rpm",
          "torque": "96 Nm @ 3500 rpm / 160 Nm @ 2800 rpm (152 Nm CVT)",
          "transmission": "5-Speed Manual / 5-Speed EZ-Shift AMT / X-TRONIC CVT",
          "mileage": "17.9 – 19.9 km/l (ARAI)",
          "seating": "5 Seater",
          "fuelTank": "40 Litres",
          "length": "3994 mm",
          "width": "1758 mm",
          "height": "1572 mm",
          "wheelbase": "2500 mm",
          "groundClearance": "205 mm",
          "bootSpace": "336 Litres (690L Folded)"
      },
      "variants": [
          {
              "name": "Visia 1.0 NA MT",
              "exShowroom": 599000,
              "engine": "1.0L NA Petrol",
              "trans": "Manual",
              "mileage": "19.4 km/l",
              "fuel": "Petrol",
              "isVFM": false,
              "keyFeatures": [
                  "6 Airbags Standard",
                  "ABS with EBD & Brake Assist",
                  "ESP & Traction Control",
                  "Hill Start Assist",
                  "Rear Parking Sensors",
                  "14-inch Steel Wheels with Caps",
                  "Halogen Headlamps",
                  "Manual AC with Filter"
              ]
          },
          {
              "name": "Visia+ 1.0 NA MT",
              "exShowroom": 649000,
              "engine": "1.0L NA Petrol",
              "trans": "Manual",
              "mileage": "19.4 km/l",
              "fuel": "Petrol",
              "isVFM": false,
              "keyFeatures": [
                  "All Visia Features",
                  "2-DIN Audio System with Bluetooth",
                  "Front & Rear Speakers",
                  "Rear Power Windows",
                  "Remote Keyless Entry",
                  "Speed Sensing Door Lock"
              ]
          },
          {
              "name": "Acenta 1.0 NA MT",
              "exShowroom": 714000,
              "engine": "1.0L NA Petrol",
              "trans": "Manual",
              "mileage": "19.4 km/l",
              "fuel": "Petrol",
              "isVFM": false,
              "keyFeatures": [
                  "8-inch Touchscreen Infotainment",
                  "Wireless Android Auto & Apple CarPlay",
                  "16-inch Dual-Tone Wheel Covers",
                  "Steering Mounted Audio Controls",
                  "Driver Seat Height Adjust",
                  "Electrically Foldable ORVMs"
              ]
          },
          {
              "name": "Acenta 1.0 NA EZ-Shift AMT",
              "exShowroom": 764000,
              "engine": "1.0L NA Petrol",
              "trans": "Automatic",
              "mileage": "19.7 km/l",
              "fuel": "Petrol",
              "isVFM": false,
              "keyFeatures": [
                  "5-Speed EZ-Shift AMT",
                  "Creep Function",
                  "8-inch Wireless Touchscreen",
                  "Steering Mounted Controls",
                  "Driver Seat Height Adjust",
                  "Electrically Foldable ORVMs"
              ]
          },
          {
              "name": "N-Connecta 1.0 NA MT",
              "exShowroom": 786000,
              "engine": "1.0L NA Petrol",
              "trans": "Manual",
              "mileage": "19.4 km/l",
              "fuel": "Petrol",
              "isVFM": false,
              "keyFeatures": [
                  "16-inch Diamond Cut Alloys",
                  "7-inch TFT Advanced Driver Display",
                  "LED Signature DRLs",
                  "Automatic Climate Control",
                  "Rear AC Vents",
                  "Rear View Camera with Guidelines"
              ]
          },
          {
              "name": "N-Connecta 1.0 Turbo MT",
              "exShowroom": 910000,
              "engine": "1.0L Turbo Petrol (100 PS)",
              "trans": "Manual",
              "mileage": "19.9 km/l",
              "fuel": "Petrol",
              "isVFM": true,
              "vfmBadge": "Best Value Turbo",
              "keyFeatures": [
                  "100 PS HRA0 Turbo Engine",
                  "16-inch Diamond Cut Alloys",
                  "7-inch TFT Display",
                  "Rear View Camera",
                  "Auto AC with Rear Vents",
                  "Push Button Start with Smart i-Key"
              ]
          },
          {
              "name": "Tekna 1.0 Turbo MT",
              "exShowroom": 999000,
              "engine": "1.0L Turbo Petrol (100 PS)",
              "trans": "Manual",
              "mileage": "19.9 km/l",
              "fuel": "Petrol",
              "isVFM": false,
              "keyFeatures": [
                  "LED Bi-Projector Headlamps",
                  "3D Honeycomb LED Tail Lamps",
                  "Around View 360-Degree Camera",
                  "Cruise Control",
                  "Ambient Mood Lighting",
                  "Leather Wrapped Steering"
              ]
          },
          {
              "name": "Tekna 1.0 Turbo X-Tronic CVT",
              "exShowroom": 1075000,
              "engine": "1.0L Turbo Petrol (100 PS)",
              "trans": "CVT",
              "mileage": "17.9 km/l",
              "fuel": "Petrol",
              "isVFM": false,
              "keyFeatures": [
                  "X-TRONIC Stepped D-Step CVT",
                  "Around View 360 Monitor",
                  "LED Bi-Projector Lights",
                  "Cruise Control",
                  "Smart Keyless Walk-Away Lock",
                  "Hill Descent Assist"
              ]
          },
          {
              "name": "Tekna+ 1.0 Turbo X-Tronic CVT",
              "exShowroom": 1150000,
              "engine": "1.0L Turbo Petrol (100 PS)",
              "trans": "CVT",
              "mileage": "17.9 km/l",
              "fuel": "Petrol",
              "isVFM": false,
              "keyFeatures": [
                  "Tri-Tone Leatherette Cabin",
                  "Wireless Phone Charging",
                  "PlasmaCluster Air Ionizer",
                  "Around View 360 Monitor",
                  "LED Bi-Projector Lights",
                  "X-TRONIC Stepped CVT"
              ]
          }
      ]
  },
  {
      "id": "nissan-gravite",
      "name": "Nissan Gravite",
      "brand": "Nissan",
      "tagline": "The All-New 7-Seater Modular Family SUV Inspired by 1.4 Billion Indians",
      "launchDate": "2025 / 2026",
      "bodyType": "7-Seater MPV",
      "fuelTypes": [
          "Petrol",
          "CNG"
      ],
      "priceRange": "₹5.65 – ₹8.90 Lakh",
      "minPrice": 565000,
      "maxPrice": 890000,
      "safetyRating": "4.0 ★ (6 Airbags Standard, ESP, HSA, TPMS)",
      "groundClearance": "182 mm",
      "bootSpace": "625 Litres (5-Seater Mode) / 320L (6-Seater)",
      "waitingPeriod": "2 - 4 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/nissan-gravite/colors/forest-green.webp",
      "summary": "The All-New Nissan Gravite is a class-defining modular 7-seater designed for Indian families, offering class-leading 625-litre flexible boot space with independent removable 3rd-row seats, dual-tone cabin with wooden finish, 20.32 cm touchscreen with wireless smartphone mirroring, independent 3-row tropicalised AC vents, and high-efficiency 1.0L petrol and factory twin-cylinder CNG powertrains returning up to 19.6 km/l.",
      "colors": [
          {
              "id": "forest-green",
              "name": "Forest Green",
              "hex": "#1E3B2F",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-gravite/colors/forest-green.webp"
          },
          {
              "id": "onyx-black",
              "name": "Onyx Black",
              "hex": "#1A1A1A",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-gravite/colors/onyx-black.webp"
          },
          {
              "id": "blade-silver",
              "name": "Blade Silver",
              "hex": "#BCC0C4",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-gravite/colors/blade-silver.webp"
          },
          {
              "id": "storm-white",
              "name": "Storm White",
              "hex": "#F4F4F4",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-gravite/colors/storm-white.webp"
          },
          {
              "id": "metallic-grey",
              "name": "Metallic Grey",
              "hex": "#4F5459",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-gravite/colors/metallic-grey.webp"
          }
      ],
      "gallery": [
          {
              "id": "grav-1",
              "title": "The All-New Nissan Gravite 7-Seater Family SUV",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-gravite/gallery/grav-1.webp"
          },
          {
              "id": "grav-2",
              "title": "Spacious Modular 7-Seater Inspired by 1.4 Billion Indians",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-gravite/gallery/grav-2.webp"
          },
          {
              "id": "grav-3",
              "title": "182 mm High Ground Clearance & Robust Exterior Stance",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-gravite/gallery/grav-3.webp"
          },
          {
              "id": "grav-4",
              "title": "Signature V-Motion Grille with Satin Silver Accents",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-gravite/gallery/grav-4.webp"
          },
          {
              "id": "grav-5",
              "title": "Commanding Road Presence with Protective C-Accents",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-gravite/gallery/grav-5.webp"
          },
          {
              "id": "grav-6",
              "title": "Functional Roof Rails with 50 kg Dynamic Load Capacity",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-gravite/gallery/grav-6.webp"
          },
          {
              "id": "grav-7",
              "title": "Class-Leading 625L Flexible Boot with Removable 3rd Row",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-gravite/gallery/grav-7.webp"
          },
          {
              "id": "grav-8",
              "title": "Dual-Tone Dashboard with Elegant Wooden Hairline Finish",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-gravite/gallery/grav-8.webp"
          },
          {
              "id": "grav-9",
              "title": "Independent 3-Row Tropicalised Air Conditioning Vents",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-gravite/gallery/grav-9.webp"
          },
          {
              "id": "grav-10",
              "title": "20.32 cm Touchscreen with Wireless Apple CarPlay & Android Auto",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-gravite/gallery/grav-10.webp"
          },
          {
              "id": "grav-11",
              "title": "Active Modular Seating Modes (Life, Surf, Camp & Tribe)",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-gravite/gallery/grav-11.webp"
          },
          {
              "id": "grav-12",
              "title": "High Efficiency 1.0L Energy Petrol & Twin-Cylinder CNG Power",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-gravite/gallery/grav-12.webp"
          }
      ],
      "specs": {
          "engine": "1.0L B4D Dual VVT Petrol / 1.0L Bi-Fuel CNG",
          "power": "72 PS @ 6250 rpm (Petrol)",
          "torque": "96 Nm @ 3500 rpm",
          "transmission": "5-Speed Manual / 5-Speed EZ-Shift AMT",
          "mileage": "19.3 – 19.6 km/l (ARAI)",
          "seating": "7 Seater (Modular 5+2)",
          "fuelTank": "40 Litres",
          "length": "3987 mm",
          "width": "1734 mm",
          "height": "1643 mm",
          "wheelbase": "2636 mm",
          "groundClearance": "182 mm",
          "bootSpace": "625 Litres (5-Seater) / 320L (6-Seater)"
      },
      "variants": [
          {
              "name": "Visia 1.0 NA MT",
              "exShowroom": 565000,
              "engine": "1.0L NA Petrol",
              "trans": "Manual",
              "mileage": "19.3 km/l",
              "fuel": "Petrol",
              "isVFM": false,
              "keyFeatures": [
                  "6 Airbags Standard",
                  "ESP with Hill Start Assist",
                  "Traction Control System",
                  "3rd Row Removable Seats",
                  "8.89 cm LED Digital Cluster",
                  "Front Power Windows",
                  "ISOFIX Child Anchors"
              ]
          },
          {
              "name": "Acenta 1.0 NA MT",
              "exShowroom": 655000,
              "engine": "1.0L NA Petrol",
              "trans": "Manual",
              "mileage": "19.3 km/l",
              "fuel": "Petrol",
              "isVFM": false,
              "keyFeatures": [
                  "8-inch Touchscreen Infotainment",
                  "Wireless Smartphone Mirroring",
                  "Independent 2nd & 3rd Row AC Vents",
                  "Remote Central Locking",
                  "Rear Room Lamps",
                  "Speed Sensing Door Lock"
              ]
          },
          {
              "name": "N-Connecta 1.0 NA MT",
              "exShowroom": 735000,
              "engine": "1.0L NA Petrol",
              "trans": "Manual",
              "mileage": "19.3 km/l",
              "fuel": "Petrol",
              "isVFM": true,
              "vfmBadge": "Top Family Value",
              "keyFeatures": [
                  "Rear Camera with Guidelines",
                  "Roof Rails with 50kg Capacity",
                  "Suede & Fabric Hexagon Seats",
                  "Center Console with Cooled Storage",
                  "Rear Wiper & Defogger",
                  "Electrically Foldable ORVMs"
              ]
          },
          {
              "name": "N-Connecta 1.0 NA EZ-Shift AMT",
              "exShowroom": 785000,
              "engine": "1.0L NA Petrol",
              "trans": "Automatic",
              "mileage": "19.6 km/l",
              "fuel": "Petrol",
              "isVFM": false,
              "keyFeatures": [
                  "5-Speed EZ-Shift AMT",
                  "Rear Camera with Guidelines",
                  "Roof Rails (50kg Load)",
                  "Cooled Center Console",
                  "Independent 3-Row AC Vents"
              ]
          },
          {
              "name": "Tekna 1.0 NA MT",
              "exShowroom": 825000,
              "engine": "1.0L NA Petrol",
              "trans": "Manual",
              "mileage": "19.3 km/l",
              "fuel": "Petrol",
              "isVFM": false,
              "keyFeatures": [
                  "Signature LED DRLs & LED Fog Lamps",
                  "15-inch Dual-Tone Flex Wheels",
                  "17.78 cm Full Digital Cluster",
                  "Smart i-Key with Push Button Start",
                  "Cruise Control",
                  "Front Parking Sensors",
                  "Rain Sensing Wipers"
              ]
          },
          {
              "name": "Tekna 1.0 NA EZ-Shift AMT",
              "exShowroom": 875000,
              "engine": "1.0L NA Petrol",
              "trans": "Automatic",
              "mileage": "19.6 km/l",
              "fuel": "Petrol",
              "isVFM": false,
              "keyFeatures": [
                  "5-Speed EZ-Shift AMT",
                  "15-inch Dual-Tone Wheels",
                  "17.78 cm Digital Cluster",
                  "Push Button Start",
                  "Front Parking Sensors",
                  "Rain Sensing Wipers"
              ]
          },
          {
              "name": "Tekna Launch Edition 1.0 NA MT",
              "exShowroom": 890000,
              "engine": "1.0L NA Petrol",
              "trans": "Manual",
              "mileage": "19.3 km/l",
              "fuel": "Petrol",
              "isVFM": false,
              "keyFeatures": [
                  "Dual Dash Cam Installed",
                  "Premium Audio by JBL",
                  "Air Purifier with PM2.5 Filter",
                  "Wireless Smartphone Charging",
                  "Ambient Cabin Mood Light",
                  "Protective C-Shaped Aero Accents"
              ]
          }
      ]
  },
  {
      "id": "nissan-tekton",
      "name": "Nissan Tekton",
      "brand": "Nissan",
      "tagline": "Premium Midsize SUV Inspired by 75 Years of Legendary Patrol Heritage",
      "launchDate": "2025 / 2026",
      "bodyType": "Midsize SUV",
      "fuelTypes": [
          "Petrol"
      ],
      "priceRange": "₹10.99 – ₹18.59 Lakh",
      "minPrice": 1099000,
      "maxPrice": 1859000,
      "safetyRating": "5.0 ★ (6 Airbags Standard, Level 2 ADAS, All-Wheel Disc Brakes)",
      "groundClearance": "212 mm",
      "bootSpace": "700 Litres (518L Parcel Shelf)",
      "waitingPeriod": "4 - 6 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/nissan-tekton/colors/moonbow-gray.webp",
      "summary": "The Nissan Tekton is a rugged yet sophisticated midsize SUV inspired by Nissan's iconic Patrol heritage. Built on a rigid high-tensile architecture with best-in-class 212 mm ground clearance and 700-litre luggage capacity, it features a tri-tone beige burgundy leatherette interior with rose gold accents, dual 10.25-inch panoramic cockpit screens, E-Shifter, Level 2 ADAS, and potent Turbo T160 and 163 PS Turbo T280 engines paired with 6-speed wet-clutch DCT.",
      "colors": [
          {
              "id": "moonbow-gray",
              "name": "Moonbow Gray",
              "hex": "#5A646E",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-tekton/colors/moonbow-gray.webp"
          },
          {
              "id": "blade-silver",
              "name": "Blade Silver",
              "hex": "#BCC0C4",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-tekton/colors/blade-silver.webp"
          },
          {
              "id": "pearl-white",
              "name": "Pearl White",
              "hex": "#FAF8F5",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-tekton/colors/pearl-white.webp"
          },
          {
              "id": "onyx-black",
              "name": "Onyx Black",
              "hex": "#1A1A1A",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-tekton/colors/onyx-black.webp"
          },
          {
              "id": "flare-garnet-red",
              "name": "Flare Garnet Red",
              "hex": "#BA1C24",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-tekton/colors/flare-garnet-red.webp"
          },
          {
              "id": "indigo-blue",
              "name": "Indigo Blue",
              "hex": "#1C2E4C",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-tekton/colors/indigo-blue.webp"
          }
      ],
      "gallery": [
          {
              "id": "tek-1",
              "title": "Patrol-Inspired Imposing Grille & Commanding Silhouette",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-tekton/gallery/tek-1.webp"
          },
          {
              "id": "tek-2",
              "title": "75 Years of Legendary Nissan SUV Heritage",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-tekton/gallery/tek-2.webp"
          },
          {
              "id": "tek-3",
              "title": "Connected Horizon LED DRLs & Split Bi-Beam Projectors",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-tekton/gallery/tek-3.webp"
          },
          {
              "id": "tek-4",
              "title": "Muscular Flared Wheel Arches & 212 mm Ground Clearance",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-tekton/gallery/tek-4.webp"
          },
          {
              "id": "tek-5",
              "title": "Dual-Tone Floating Roof & Satin Aluminum Roof Bars",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-tekton/gallery/tek-5.webp"
          },
          {
              "id": "tek-6",
              "title": "Sculpted Tailgate with Full-Width Connected LED Light Bar",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-tekton/gallery/tek-6.webp"
          },
          {
              "id": "tek-7",
              "title": "Tri-Tone Burgundy Beige & Rose Gold Leather Cockpit",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-tekton/gallery/tek-7.webp"
          },
          {
              "id": "tek-8",
              "title": "Dual 10.25-inch Panoramic Floating Digital Screens",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-tekton/gallery/tek-8.webp"
          },
          {
              "id": "tek-9",
              "title": "Electronic Shift-by-Wire E-Shifter with 6-Speed Wet DCT",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-tekton/gallery/tek-9.webp"
          },
          {
              "id": "tek-10",
              "title": "Panoramic Dual-Pane Sunroof with Electric Blind",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-tekton/gallery/tek-10.webp"
          },
          {
              "id": "tek-11",
              "title": "Class-Leading 700 Litre Cavernous Boot Capacity",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-tekton/gallery/tek-11.webp"
          },
          {
              "id": "tek-12",
              "title": "163 PS 1.33L Turbo GDi T280 High-Performance Engine",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-tekton/gallery/tek-12.webp"
          }
      ],
      "specs": {
          "engine": "1.0L Turbo T160 (100 PS) / 1.33L Turbo T280 (163 PS)",
          "power": "100 PS @ 5000 rpm / 163 PS @ 5250 rpm",
          "torque": "166 Nm @ 2000-3750 rpm / 280 Nm @ 2000-3500 rpm",
          "transmission": "6-Speed Manual / 6-Speed Wet Clutch DCT",
          "mileage": "16.8 – 18.2 km/l (ARAI)",
          "seating": "5 Seater",
          "fuelTank": "50 Litres",
          "length": "4349 mm",
          "width": "1815 mm",
          "height": "1674 mm",
          "wheelbase": "2657 mm",
          "groundClearance": "212 mm",
          "bootSpace": "700 Litres (518L Parcel Shelf)"
      },
      "variants": [
          {
              "name": "Visia Turbo T160 MT",
              "exShowroom": 1099000,
              "engine": "1.0L Turbo T160",
              "trans": "Manual",
              "mileage": "18.2 km/l",
              "fuel": "Petrol",
              "isVFM": false,
              "keyFeatures": [
                  "6 Airbags Standard",
                  "All-Wheel Disc Brakes",
                  "ESP with Traction Control",
                  "17-inch Steel Wheels with Hub Caps",
                  "LED Daytime Running Lights",
                  "Auto AC",
                  "Rear Parking Sensors"
              ]
          },
          {
              "name": "Visia+ Turbo T160 MT",
              "exShowroom": 1199000,
              "engine": "1.0L Turbo T160",
              "trans": "Manual",
              "mileage": "18.2 km/l",
              "fuel": "Petrol",
              "isVFM": false,
              "keyFeatures": [
                  "All Visia Features",
                  "8-inch Touchscreen Infotainment",
                  "Wireless Android Auto & Apple CarPlay",
                  "Rear View Camera",
                  "Steering Controls",
                  "Electric ORVMs"
              ]
          },
          {
              "name": "Acenta Turbo T160 MT",
              "exShowroom": 1349000,
              "engine": "1.0L Turbo T160",
              "trans": "Manual",
              "mileage": "18.2 km/l",
              "fuel": "Petrol",
              "isVFM": false,
              "keyFeatures": [
                  "17-inch Dual-Tone Flex Wheels",
                  "10.25-inch Touchscreen Infotainment",
                  "Push Button Start with Smart i-Key",
                  "Cruise Control",
                  "Rear AC Vents",
                  "LED Headlamps"
              ]
          },
          {
              "name": "N-Connecta Turbo T160 MT",
              "exShowroom": 1479000,
              "engine": "1.0L Turbo T160",
              "trans": "Manual",
              "mileage": "18.2 km/l",
              "fuel": "Petrol",
              "isVFM": true,
              "vfmBadge": "Best Value Mid-SUV",
              "keyFeatures": [
                  "18-inch Painted Alloy Wheels",
                  "Dual 10.25-inch Panoramic Cockpit",
                  "Around View 360-Degree Camera",
                  "Wireless Charger",
                  "Auto Dimming IRVM",
                  "Ambient Lighting"
              ]
          },
          {
              "name": "N-Connecta Turbo T280 DCT",
              "exShowroom": 1619000,
              "engine": "1.33L Turbo T280 (163 PS)",
              "trans": "DCT",
              "mileage": "16.8 km/l",
              "fuel": "Petrol",
              "isVFM": false,
              "keyFeatures": [
                  "163 PS T280 4-Cylinder Turbo Engine",
                  "6-Speed Wet-Clutch DCT with E-Shifter",
                  "18-inch Alloys",
                  "360 Camera",
                  "Dual 10.25-inch Screens",
                  "Paddle Shifters"
              ]
          },
          {
              "name": "Tekna Turbo T280 MT",
              "exShowroom": 1649000,
              "engine": "1.33L Turbo T280 (163 PS)",
              "trans": "Manual",
              "mileage": "17.4 km/l",
              "fuel": "Petrol",
              "isVFM": false,
              "keyFeatures": [
                  "Tri-Tone Leatherette Cabin",
                  "Panoramic Sunroof with Electric Blind",
                  "18-inch Diamond Cut Alloys",
                  "Level 2 ADAS Suite",
                  "Ventilated Front Seats",
                  "BOSE Premium 8-Speaker Audio"
              ]
          },
          {
              "name": "Tekna+ Turbo T280 DCT",
              "exShowroom": 1859000,
              "engine": "1.33L Turbo T280 (163 PS)",
              "trans": "DCT",
              "mileage": "16.8 km/l",
              "fuel": "Petrol",
              "isVFM": false,
              "keyFeatures": [
                  "Full Level 2 ADAS with Lane Keep & Adaptive Cruise",
                  "6-Speed Wet-Clutch DCT",
                  "Panoramic Sunroof",
                  "Ventilated Front Seats",
                  "Powered Driver Seat",
                  "Dual 10.25-inch Displays",
                  "BOSE 8-Speaker Audio"
              ]
          }
      ]
  },
  {
      "id": "nissan-x-trail",
      "name": "Nissan X-Trail",
      "brand": "Nissan",
      "tagline": "Flagship 7-Seater Luxury SUV with 1.5L VC-Turbo Mild Hybrid & 7 Airbags",
      "launchDate": "2024 / 2025",
      "bodyType": "Luxury SUV",
      "fuelTypes": [
          "Petrol"
      ],
      "priceRange": "₹49.92 Lakh",
      "minPrice": 4992000,
      "maxPrice": 4992000,
      "safetyRating": "5.0 ★ (Euro NCAP 5-Star / 7 Airbags Standard)",
      "groundClearance": "210 mm",
      "bootSpace": "585 – 1424 Litres",
      "waitingPeriod": "4 - 8 Weeks",
      "heroImage": "https://ik.imagekit.io/2908vvlod/cars/nissan-x-trail/colors/champagne-silver.webp",
      "summary": "The 4th-generation Nissan X-Trail is Nissan's flagship global SUV in India, engineered with the world's first production Variable Compression Turbo (1.5L KR15 VC-Turbo) engine paired with 12V ALiS mild-hybrid tech and an advanced X-Tronic CVT. Boasting 7-seater flexible seating, a panoramic electric sunroof, 360-degree Around View Monitor, electronic shift-by-wire gear selector, limited slip differential, 20-inch diamond-cut alloys, and a 5-star Euro NCAP safety rating.",
      "colors": [
          {
              "id": "champagne-silver",
              "name": "Champagne Silver",
              "hex": "#D2C4B1",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-x-trail/colors/champagne-silver.webp"
          },
          {
              "id": "diamond-black",
              "name": "Diamond Black",
              "hex": "#1B1B1B",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-x-trail/colors/diamond-black.webp"
          },
          {
              "id": "pearl-white",
              "name": "Pearl White",
              "hex": "#FAF8F5",
              "image": "https://ik.imagekit.io/2908vvlod/cars/nissan-x-trail/colors/pearl-white.webp"
          }
      ],
      "gallery": [
          {
              "id": "xt-1",
              "title": "Commanding V-Motion Front Architecture & Split LED Lights",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-x-trail/gallery/xt-1.webp"
          },
          {
              "id": "xt-2",
              "title": "Global Tough-Gear SUV Design Philosophy",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-x-trail/gallery/xt-2.webp"
          },
          {
              "id": "xt-3",
              "title": "Variable Compression KR15 VC-Turbo Engine Innovation",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-x-trail/gallery/xt-3.webp"
          },
          {
              "id": "xt-4",
              "title": "ALiS 12V Advanced Lithium-ion Mild Hybrid System",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-x-trail/gallery/xt-4.webp"
          },
          {
              "id": "xt-5",
              "title": "XTRONIC Stepped Continuously Variable Transmission",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-x-trail/gallery/xt-5.webp"
          },
          {
              "id": "xt-6",
              "title": "Brake Actuated Limited Slip Differential & Dynamic Control",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-x-trail/gallery/xt-6.webp"
          },
          {
              "id": "xt-7",
              "title": "Shift-by-Wire Electronic E-Shifter Control Center",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-x-trail/gallery/xt-7.webp"
          },
          {
              "id": "xt-8",
              "title": "Around View 360-Degree Monitor with Moving Object Detection",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-x-trail/gallery/xt-8.webp"
          },
          {
              "id": "xt-9",
              "title": "12.3-inch High Definition Electronic Multi-Functional Cluster",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-x-trail/gallery/xt-9.webp"
          },
          {
              "id": "xt-10",
              "title": "85-Degree Wide Opening Rear Doors for Effortless Ingress",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-x-trail/gallery/xt-10.webp"
          },
          {
              "id": "xt-11",
              "title": "7-Seater Flexible Cabin with 16 Versatile Seat Modes",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-x-trail/gallery/xt-11.webp"
          },
          {
              "id": "xt-12",
              "title": "20-inch Diamond Cut Machined Alloys & Panoramic Sunroof",
              "url": "https://ik.imagekit.io/2908vvlod/cars/nissan-x-trail/gallery/xt-12.webp"
          }
      ],
      "specs": {
          "engine": "1.5L KR15 VC-Turbo (Variable Compression) Mild Hybrid",
          "power": "163 PS @ 4800 rpm",
          "torque": "300 Nm @ 2800-3600 rpm",
          "transmission": "X-TRONIC Stepped CVT Automatic",
          "mileage": "13.7 km/l (ARAI)",
          "seating": "7 Seater",
          "fuelTank": "55 Litres",
          "length": "4680 mm",
          "width": "1840 mm",
          "height": "1725 mm",
          "wheelbase": "2705 mm",
          "groundClearance": "210 mm",
          "bootSpace": "177 Litres (585L Behind 2nd Row / 1424L Max)"
      },
      "variants": [
          {
              "name": "1.5 VC-Turbo Mild Hybrid 2WD X-Tronic CVT",
              "exShowroom": 4992000,
              "engine": "1.5L VC-Turbo Mild Hybrid",
              "trans": "CVT",
              "mileage": "13.7 km/l",
              "fuel": "Petrol",
              "isVFM": true,
              "vfmBadge": "Flagship Luxury",
              "keyFeatures": [
                  "163 PS 1.5L Variable Compression Turbo Engine",
                  "12V ALiS Mild Hybrid System",
                  "X-TRONIC Stepped CVT with Paddle Shifters",
                  "7 Airbags Standard with Euro NCAP 5-Star Safety",
                  "Dual Panoramic Sunroof",
                  "20-inch Diamond Cut Alloy Wheels",
                  "12.3-inch Full Digital Driver Display",
                  "Around View 360-Degree Monitor with MOD",
                  "Limited Slip Differential (Brake Actuated)",
                  "Electronic E-Shifter Gear Selector",
                  "7-Seater Modular Cabin with 16 Versatile Layouts",
                  "Wireless Smartphone Charger & Dual-Zone Climate Control"
              ]
          }
      ]
  },
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
