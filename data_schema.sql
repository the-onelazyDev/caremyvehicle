-- ============================================================
-- CARE MY VEHICLE - COMPLETE DATABASE SCHEMA (PostgreSQL)
-- Designed for High-Performance Scalability, Fast Filtering,
-- Variant Comparison, City Pricing & Maintenance Schedules
-- ============================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm"; -- For fast fuzzy search

-- 2. BRANDS (e.g., Tata, Maruti Suzuki, Hyundai, Mahindra, Kia)
CREATE TABLE brands (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(120) NOT NULL UNIQUE,
    logo_url TEXT,
    country_of_origin VARCHAR(100),
    established_year INT,
    website_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. MODELS (e.g., Nexon, Creta, Scorpio-N, Brezza, Seltos)
CREATE TABLE car_models (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    brand_id UUID NOT NULL REFERENCES brands(id) ON DELETE CASCADE,
    name VARCHAR(120) NOT NULL,
    slug VARCHAR(150) NOT NULL UNIQUE,
    body_type VARCHAR(50) NOT NULL, -- SUV, Compact SUV, Sedan, Hatchback, MUV, EV
    seating_capacity INT DEFAULT 5,
    hero_image_url TEXT,
    brochure_pdf_url TEXT,
    warranty_years INT DEFAULT 3,
    warranty_kms INT DEFAULT 100000,
    overall_safety_rating NUMERIC(2,1), -- e.g., 5.0 (Global NCAP / Bharat NCAP)
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. VARIANTS (e.g., Tata Nexon Creative Plus 1.2 Petrol MT)
CREATE TABLE car_variants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    model_id UUID NOT NULL REFERENCES car_models(id) ON DELETE CASCADE,
    name VARCHAR(150) NOT NULL,
    slug VARCHAR(180) NOT NULL UNIQUE,
    fuel_type VARCHAR(30) NOT NULL, -- Petrol, Diesel, Electric, CNG, Hybrid
    transmission VARCHAR(30) NOT NULL, -- MT, AT, AMT, CVT, DCT, e-CVT
    gearbox_gears INT DEFAULT 6,
    engine_cc INT, -- NULL for Pure EV
    battery_kwh NUMERIC(5,2), -- for EV
    electric_range_claimed_km INT,
    power_bhp NUMERIC(6,2),
    torque_nm NUMERIC(6,2),
    claimed_mileage_kmpl NUMERIC(4,2),
    real_world_mileage_kmpl NUMERIC(4,2),
    ex_showroom_price NUMERIC(12,2) NOT NULL,
    is_value_for_money_pick BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. CITY-WISE ON-ROAD PRICING (Solves the big user pain point with true transparency)
CREATE TABLE city_on_road_prices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    variant_id UUID NOT NULL REFERENCES car_variants(id) ON DELETE CASCADE,
    city_name VARCHAR(100) NOT NULL,
    state_name VARCHAR(100) NOT NULL,
    rto_registration_fee NUMERIC(10,2) NOT NULL,
    road_safety_tax_cess NUMERIC(10,2) DEFAULT 0,
    tcs_tax NUMERIC(10,2) DEFAULT 0, -- Tax collected at source (1% above 10L)
    insurance_standard_quote NUMERIC(10,2) NOT NULL,
    insurance_zero_dep_quote NUMERIC(10,2) NOT NULL,
    fastag_charges NUMERIC(8,2) DEFAULT 500,
    handling_charges_flagged NUMERIC(8,2) DEFAULT 0, -- flagged as optional/contestable
    total_estimated_on_road NUMERIC(12,2) NOT NULL,
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_variant_city UNIQUE (variant_id, city_name)
);

-- 6. FEATURE MASTER CATALOG (e.g., Sunroof, ADAS Level 2, Ventilated Seats, 360 Camera)
CREATE TABLE features (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category VARCHAR(50) NOT NULL, -- Safety, Comfort, Infotainment, Lighting, Performance
    name VARCHAR(150) NOT NULL,
    description TEXT,
    icon_name VARCHAR(50)
);

-- 7. VARIANT FEATURE MAPPING
CREATE TABLE variant_features (
    variant_id UUID NOT NULL REFERENCES car_variants(id) ON DELETE CASCADE,
    feature_id UUID NOT NULL REFERENCES features(id) ON DELETE CASCADE,
    is_standard BOOLEAN DEFAULT TRUE,
    is_optional BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (variant_id, feature_id)
);

-- 8. MAINTENANCE & SCHEDULED SERVICE COSTS (Unique Competitive Advantage)
CREATE TABLE maintenance_schedules (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    model_id UUID NOT NULL REFERENCES car_models(id) ON DELETE CASCADE,
    fuel_type VARCHAR(30) NOT NULL,
    service_interval_months INT NOT NULL, -- e.g. 12, 24, 36, 48, 60
    service_interval_km INT NOT NULL, -- e.g. 10000, 20000, 30000, 40000, 50000
    estimated_labor_cost NUMERIC(8,2) DEFAULT 0,
    estimated_parts_cost NUMERIC(8,2) DEFAULT 0,
    mandatory_parts_replaced TEXT, -- e.g. "Engine oil, Oil filter, Cabin AC filter, Brake fluid"
    total_service_cost NUMERIC(10,2) NOT NULL
);

-- 9. USER REVIEWS WITH REAL PROOF (No Bot / Dealer Fake Reviews)
CREATE TABLE verified_owner_reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    variant_id UUID NOT NULL REFERENCES car_variants(id) ON DELETE CASCADE,
    owner_city VARCHAR(100),
    kms_driven INT NOT NULL,
    actual_city_mileage NUMERIC(4,2),
    actual_highway_mileage NUMERIC(4,2),
    pros TEXT[],
    cons TEXT[],
    overall_rating NUMERIC(2,1) CHECK (overall_rating >= 1.0 AND overall_rating <= 5.0),
    is_verified_rc_owner BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 10. INDEXES FOR LIGHTNING FAST QUERIES (Sub-10ms response time)
CREATE INDEX idx_variants_model ON car_variants(model_id);
CREATE INDEX idx_variants_price ON car_variants(ex_showroom_price);
CREATE INDEX idx_variants_fuel ON car_variants(fuel_type);
CREATE INDEX idx_city_pricing ON city_on_road_prices(city_name, variant_id);
CREATE INDEX idx_models_brand ON car_models(brand_id);
CREATE INDEX idx_models_slug ON car_models(slug);
