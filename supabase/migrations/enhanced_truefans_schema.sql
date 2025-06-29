/*
  # TrueFans JAM - Enhanced Database Schema with Financial Integration

  1. New Tables
    - Enhanced `profiles` with financial integration (Manifest, Stripe)
    - `artist_profiles` with Spotify API integration and performance metrics
    - `host_profiles` with PostGIS location support and venue details
    - `tours` with geographic scope and financial terms
    - `tour_media` for promotional content storage
    - `show_applications` for booking management
    - `financial_transactions` with Manifest Financial integration
    - `api_integration_logs` for external service monitoring

  2. PostGIS Integration
    - Geographic coordinates for hosts and tours
    - Spatial queries for location-based matching
    - Distance calculations for tour routing

  3. Financial Features
    - Manifest Financial customer integration
    - Stripe payment processing
    - Revenue split calculations
    - Transaction status tracking

  4. External API Integration
    - Spotify artist profiles and playlists
    - BandsInTown tour management
    - Google Maps geocoding support

  5. Security
    - Comprehensive RLS policies
    - User data isolation
    - Public tour visibility controls
*/

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Enhanced profiles with financial integration
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  user_type TEXT NOT NULL CHECK (user_type IN ('artist', 'host', 'admin')),
  full_name TEXT,
  phone_number TEXT,
  profile_image_url TEXT,
  email_verified BOOLEAN DEFAULT false,
  phone_verified BOOLEAN DEFAULT false,
  onboarding_completed BOOLEAN DEFAULT false,
  
  -- Financial Integration
  manifest_customer_id TEXT UNIQUE,
  stripe_customer_id TEXT UNIQUE,
  payout_preferences JSONB DEFAULT '{
    "method": "bank_transfer",
    "frequency": "weekly",
    "minimum_amount": 2500
  }',
  
  -- Platform Analytics
  last_active_at TIMESTAMPTZ DEFAULT NOW(),
  total_tours_created INTEGER DEFAULT 0,
  total_revenue_earned DECIMAL(12,2) DEFAULT 0,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Artist profiles with Spotify integration
CREATE TABLE IF NOT EXISTS artist_profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE UNIQUE,
  stage_name TEXT NOT NULL,
  bio TEXT,
  genre_primary TEXT,
  genre_tags TEXT[] DEFAULT '{}',
  
  -- External Platform IDs
  spotify_artist_id TEXT,
  spotify_access_token TEXT,
  spotify_refresh_token TEXT,
  spotify_token_expires_at TIMESTAMPTZ,
  bandsintown_artist_id TEXT,
  
  -- Performance Metrics
  experience_level TEXT DEFAULT 'beginner' CHECK (experience_level IN ('beginner', 'intermediate', 'experienced', 'professional')),
  average_performance_rating DECIMAL(3,2) DEFAULT 0,
  total_shows_performed INTEGER DEFAULT 0,
  monthly_listeners INTEGER DEFAULT 0,
  
  -- Media
  profile_image_url TEXT,
  banner_image_url TEXT,
  sample_tracks JSONB DEFAULT '[]',
  social_media_links JSONB DEFAULT '{
    "instagram": null,
    "tiktok": null,
    "youtube": null,
    "website": null
  }',
  
  -- Technical Requirements
  technical_requirements JSONB DEFAULT '{
    "sound_system_required": false,
    "lighting_required": false,
    "power_requirements": "standard",
    "setup_time_minutes": 30
  }',
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Host profiles with enhanced location data
CREATE TABLE IF NOT EXISTS host_profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE UNIQUE,
  display_name TEXT NOT NULL,
  bio TEXT,
  
  -- Location with PostGIS support
  address_line1 TEXT NOT NULL,
  address_line2 TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  country TEXT DEFAULT 'USA',
  coordinates GEOGRAPHY(POINT, 4326),
  location_accuracy TEXT DEFAULT 'approximate' CHECK (location_accuracy IN ('exact', 'approximate', 'city_only')),
  
  -- Venue Details
  venue_name TEXT,
  venue_type TEXT DEFAULT 'living_room' CHECK (venue_type IN (
    'living_room', 'backyard', 'basement', 'garage', 'studio', 
    'barn', 'rooftop', 'patio', 'music_room', 'other'
  )),
  venue_description TEXT,
  max_capacity INTEGER DEFAULT 20 CHECK (max_capacity > 0),
  preferred_capacity INTEGER DEFAULT 15,
  venue_amenities TEXT[] DEFAULT ARRAY['seating', 'restroom', 'parking'],
  venue_images JSONB DEFAULT '[]',
  
  -- Technical Capabilities
  technical_specs JSONB DEFAULT '{
    "sound_system": {"available": false, "details": ""},
    "lighting": {"available": false, "details": ""},
    "power_outlets": 2,
    "wifi_available": true,
    "recording_friendly": false
  }',
  
  -- Host Preferences
  preferred_genres TEXT[] DEFAULT '{}',
  hosting_frequency TEXT DEFAULT 'monthly' CHECK (hosting_frequency IN ('weekly', 'monthly', 'quarterly', 'occasionally')),
  max_volume_level INTEGER DEFAULT 7 CHECK (max_volume_level BETWEEN 1 AND 10),
  house_rules JSONB DEFAULT '{
    "alcohol_allowed": true,
    "smoking_allowed": false,
    "food_provided": false,
    "pets_allowed": false
  }',
  
  -- Availability
  availability_calendar JSONB DEFAULT '{
    "friday": {"available": true, "preferred_time": "19:00-22:00"},
    "saturday": {"available": true, "preferred_time": "19:00-22:00"},
    "sunday": {"available": true, "preferred_time": "17:00-21:00"}
  }',
  
  -- Platform Metrics
  total_shows_hosted INTEGER DEFAULT 0,
  average_host_rating DECIMAL(3,2) DEFAULT 0,
  response_rate DECIMAL(5,2) DEFAULT 100,
  response_time_hours INTEGER DEFAULT 24,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enhanced tours table
CREATE TABLE IF NOT EXISTS tours (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  artist_id UUID REFERENCES artist_profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  
  -- Dates and Geographic Scope
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  geographic_center GEOGRAPHY(POINT, 4326),
  max_radius_miles INTEGER DEFAULT 500,
  target_cities TEXT[] DEFAULT '{}',
  target_states TEXT[] DEFAULT '{}',
  
  -- Tour Specifications
  min_capacity INTEGER DEFAULT 10,
  max_capacity INTEGER DEFAULT 50,
  expected_shows INTEGER DEFAULT 10,
  max_daily_miles INTEGER DEFAULT 300,
  preferred_show_duration_minutes INTEGER DEFAULT 90,
  
  -- Financial Terms
  base_guarantee DECIMAL(10,2) DEFAULT 0,
  revenue_split_percentage INTEGER DEFAULT 80 CHECK (revenue_split_percentage BETWEEN 0 AND 100),
  ticket_price_suggested DECIMAL(8,2) DEFAULT 25.00,
  merchandise_split_percentage INTEGER DEFAULT 90,
  
  -- Platform Integration IDs
  spotify_playlist_id TEXT,
  bandsintown_tour_id TEXT,
  manifest_payment_link TEXT,
  
  -- Status Management
  status TEXT DEFAULT 'planning' CHECK (status IN (
    'planning', 'seeking_hosts', 'confirmed', 'in_progress', 'completed', 'cancelled'
  )),
  visibility TEXT DEFAULT 'private' CHECK (visibility IN ('private', 'public', 'unlisted')),
  
  -- Requirements and Preferences
  genre_requirements TEXT[] DEFAULT '{}',
  venue_type_preferences TEXT[] DEFAULT '{}',
  special_requirements TEXT,
  
  -- Analytics
  total_applications INTEGER DEFAULT 0,
  confirmed_shows INTEGER DEFAULT 0,
  total_projected_revenue DECIMAL(12,2) DEFAULT 0,
  total_actual_revenue DECIMAL(12,2) DEFAULT 0,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  CONSTRAINT valid_date_range CHECK (end_date >= start_date),
  CONSTRAINT valid_capacity_range CHECK (max_capacity >= min_capacity)
);

-- Tour media storage
CREATE TABLE IF NOT EXISTS tour_media (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  tour_id UUID REFERENCES tours(id) ON DELETE CASCADE,
  media_type TEXT NOT NULL CHECK (media_type IN ('image', 'video', 'audio', 'document')),
  file_url TEXT NOT NULL,
  file_name TEXT,
  file_size BIGINT,
  mime_type TEXT,
  category TEXT DEFAULT 'general' CHECK (category IN ('promotional', 'sample_music', 'press_kit', 'rider', 'general')),
  display_order INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  alt_text TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Show applications and bookings
CREATE TABLE IF NOT EXISTS show_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  tour_id UUID REFERENCES tours(id) ON DELETE CASCADE,
  host_id UUID REFERENCES host_profiles(id) ON DELETE CASCADE,
  proposed_date DATE NOT NULL,
  proposed_time TIME DEFAULT '19:00',
  
  -- Application Details
  message TEXT,
  expected_attendance INTEGER,
  ticket_price DECIMAL(8,2),
  special_requirements TEXT,
  catering_offered BOOLEAN DEFAULT false,
  accommodation_offered BOOLEAN DEFAULT false,
  
  -- Status and Response
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'declined', 'cancelled', 'completed')),
  artist_response TEXT,
  host_response TEXT,
  decline_reason TEXT,
  
  -- Logistics
  setup_time TIME DEFAULT '18:00',
  show_start_time TIME DEFAULT '19:30',
  show_end_time TIME DEFAULT '21:30',
  breakdown_time TIME DEFAULT '22:00',
  load_in_notes TEXT,
  parking_details TEXT,
  contact_day_of_show TEXT,
  
  -- Financial
  guaranteed_amount DECIMAL(10,2) DEFAULT 0,
  revenue_split_agreed INTEGER DEFAULT 80,
  merchandise_allowed BOOLEAN DEFAULT true,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  UNIQUE(tour_id, host_id, proposed_date)
);

-- Financial transactions with Manifest integration
CREATE TABLE IF NOT EXISTS financial_transactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  show_application_id UUID REFERENCES show_applications(id) ON DELETE CASCADE,
  tour_id UUID REFERENCES tours(id) ON DELETE CASCADE,
  
  -- Parties involved
  payer_profile_id UUID REFERENCES profiles(id),
  payee_profile_id UUID REFERENCES profiles(id),
  
  -- Transaction Details
  transaction_type TEXT NOT NULL CHECK (transaction_type IN (
    'show_payment', 'platform_fee', 'artist_payout', 'host_tip', 'refund', 'merchandise_sale'
  )),
  amount_cents INTEGER NOT NULL,
  currency TEXT DEFAULT 'USD',
  description TEXT,
  
  -- External IDs
  manifest_transaction_id TEXT UNIQUE,
  stripe_payment_intent_id TEXT,
  stripe_transfer_id TEXT,
  
  -- Status Tracking
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed', 'cancelled', 'refunded')),
  processed_at TIMESTAMPTZ,
  failed_reason TEXT,
  
  -- Revenue Split Details
  gross_amount_cents INTEGER,
  artist_amount_cents INTEGER,
  platform_fee_cents INTEGER,
  host_tip_cents INTEGER DEFAULT 0,
  processing_fee_cents INTEGER DEFAULT 0,
  
  -- Metadata
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Reviews and ratings
CREATE TABLE IF NOT EXISTS reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  show_application_id UUID REFERENCES show_applications(id) ON DELETE CASCADE,
  reviewer_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  reviewee_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  
  -- Review Content
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  title TEXT,
  content TEXT,
  
  -- Review Categories
  performance_rating INTEGER CHECK (performance_rating BETWEEN 1 AND 5),
  communication_rating INTEGER CHECK (communication_rating BETWEEN 1 AND 5),
  venue_rating INTEGER CHECK (venue_rating BETWEEN 1 AND 5),
  hospitality_rating INTEGER CHECK (hospitality_rating BETWEEN 1 AND 5),
  
  -- Moderation
  is_public BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  moderation_status TEXT DEFAULT 'approved' CHECK (moderation_status IN ('pending', 'approved', 'rejected')),
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  
  UNIQUE(show_application_id, reviewer_id)
);

-- API integration logs
CREATE TABLE IF NOT EXISTS api_integration_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  service_name TEXT NOT NULL CHECK (service_name IN ('spotify', 'bandsintown', 'manifest', 'google_maps', 'stripe')),
  endpoint TEXT NOT NULL,
  request_type TEXT NOT NULL,
  request_data JSONB DEFAULT '{}',
  response_status INTEGER,
  response_data JSONB DEFAULT '{}',
  response_time_ms INTEGER,
  error_message TEXT,
  user_id UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Performance indexes (non-concurrent for transaction compatibility)
CREATE INDEX IF NOT EXISTS idx_profiles_user_type ON profiles(user_type);
CREATE INDEX IF NOT EXISTS idx_profiles_last_active ON profiles(last_active_at DESC);
CREATE INDEX IF NOT EXISTS idx_artist_profiles_user_id ON artist_profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_host_profiles_user_id ON host_profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_host_profiles_location ON host_profiles USING GIST(coordinates) WHERE coordinates IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_tours_artist_status ON tours(artist_id, status);
CREATE INDEX IF NOT EXISTS idx_tours_dates ON tours(start_date, end_date);
CREATE INDEX IF NOT EXISTS idx_tours_status_visibility ON tours(status, visibility);
CREATE INDEX IF NOT EXISTS idx_show_applications_tour_status ON show_applications(tour_id, status);
CREATE INDEX IF NOT EXISTS idx_show_applications_host_status ON show_applications(host_id, status);
CREATE INDEX IF NOT EXISTS idx_financial_transactions_show ON financial_transactions(show_application_id);
CREATE INDEX IF NOT EXISTS idx_financial_transactions_status ON financial_transactions(status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_reviews_reviewee ON reviews(reviewee_id, is_public);

-- Full-text search indexes
CREATE INDEX IF NOT EXISTS idx_artist_search ON artist_profiles 
  USING GIN(to_tsvector('english', stage_name || ' ' || COALESCE(bio, '') || ' ' || array_to_string(genre_tags, ' ')));
CREATE INDEX IF NOT EXISTS idx_host_search ON host_profiles 
  USING GIN(to_tsvector('english', display_name || ' ' || COALESCE(venue_description, '') || ' ' || city));
CREATE INDEX IF NOT EXISTS idx_tour_search ON tours 
  USING GIN(to_tsvector('english', title || ' ' || COALESCE(description, '') || ' ' || array_to_string(target_cities, ' ')));

-- Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE artist_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE host_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE tours ENABLE ROW LEVEL SECURITY;
ALTER TABLE tour_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE show_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE financial_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE api_integration_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can read own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- RLS Policies for artist_profiles
CREATE POLICY "Artists can manage own profile"
  ON artist_profiles
  FOR ALL
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Public can read artist profiles"
  ON artist_profiles
  FOR SELECT
  TO authenticated
  USING (true);

-- RLS Policies for host_profiles
CREATE POLICY "Hosts can manage own profile"
  ON host_profiles
  FOR ALL
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Public can read host profiles"
  ON host_profiles
  FOR SELECT
  TO authenticated
  USING (true);

-- RLS Policies for tours
CREATE POLICY "Artists can manage own tours"
  ON tours
  FOR ALL
  TO authenticated
  USING (
    artist_id IN (
      SELECT id FROM artist_profiles WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Public can read public tours"
  ON tours
  FOR SELECT
  TO authenticated
  USING (visibility = 'public');

-- RLS Policies for tour_media
CREATE POLICY "Artists can manage tour media"
  ON tour_media
  FOR ALL
  TO authenticated
  USING (
    tour_id IN (
      SELECT t.id FROM tours t
      JOIN artist_profiles ap ON t.artist_id = ap.id
      WHERE ap.user_id = auth.uid()
    )
  );

CREATE POLICY "Public can read tour media"
  ON tour_media
  FOR SELECT
  TO authenticated
  USING (
    tour_id IN (
      SELECT id FROM tours WHERE visibility = 'public'
    )
  );

-- RLS Policies for show_applications
CREATE POLICY "Artists can read applications for their tours"
  ON show_applications
  FOR SELECT
  TO authenticated
  USING (
    tour_id IN (
      SELECT t.id FROM tours t
      JOIN artist_profiles ap ON t.artist_id = ap.id
      WHERE ap.user_id = auth.uid()
    )
  );

CREATE POLICY "Hosts can read their own applications"
  ON show_applications
  FOR SELECT
  TO authenticated
  USING (
    host_id IN (
      SELECT id FROM host_profiles WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Hosts can create applications"
  ON show_applications
  FOR INSERT
  TO authenticated
  WITH CHECK (
    host_id IN (
      SELECT id FROM host_profiles WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Artists can update applications for their tours"
  ON show_applications
  FOR UPDATE
  TO authenticated
  USING (
    tour_id IN (
      SELECT t.id FROM tours t
      JOIN artist_profiles ap ON t.artist_id = ap.id
      WHERE ap.user_id = auth.uid()
    )
  );

-- RLS Policies for financial_transactions
CREATE POLICY "Users can read their own transactions"
  ON financial_transactions
  FOR SELECT
  TO authenticated
  USING (
    payer_profile_id = auth.uid() OR 
    payee_profile_id = auth.uid()
  );

-- RLS Policies for reviews
CREATE POLICY "Users can read public reviews"
  ON reviews
  FOR SELECT
  TO authenticated
  USING (is_public = true);

CREATE POLICY "Users can create reviews for their shows"
  ON reviews
  FOR INSERT
  TO authenticated
  WITH CHECK (reviewer_id = auth.uid());

CREATE POLICY "Users can update their own reviews"
  ON reviews
  FOR UPDATE
  TO authenticated
  USING (reviewer_id = auth.uid());

-- RLS Policies for api_integration_logs
CREATE POLICY "Users can read their own API logs"
  ON api_integration_logs
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Functions for updating timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at 
  BEFORE UPDATE ON profiles 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_artist_profiles_updated_at 
  BEFORE UPDATE ON artist_profiles 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_host_profiles_updated_at 
  BEFORE UPDATE ON host_profiles 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tours_updated_at 
  BEFORE UPDATE ON tours 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_show_applications_updated_at 
  BEFORE UPDATE ON show_applications 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to update tour application counts
CREATE OR REPLACE FUNCTION update_tour_application_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE tours 
    SET total_applications = total_applications + 1
    WHERE id = NEW.tour_id;
    
    IF NEW.status = 'accepted' THEN
      UPDATE tours 
      SET confirmed_shows = confirmed_shows + 1
      WHERE id = NEW.tour_id;
    END IF;
    
    RETURN NEW;
  ELSIF TG_OP = 'UPDATE' THEN
    IF OLD.status != NEW.status THEN
      IF NEW.status = 'accepted' AND OLD.status != 'accepted' THEN
        UPDATE tours 
        SET confirmed_shows = confirmed_shows + 1
        WHERE id = NEW.tour_id;
      ELSIF OLD.status = 'accepted' AND NEW.status != 'accepted' THEN
        UPDATE tours 
        SET confirmed_shows = confirmed_shows - 1
        WHERE id = NEW.tour_id;
      END IF;
    END IF;
    
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE tours 
    SET total_applications = total_applications - 1
    WHERE id = OLD.tour_id;
    
    IF OLD.status = 'accepted' THEN
      UPDATE tours 
      SET confirmed_shows = confirmed_shows - 1
      WHERE id = OLD.tour_id;
    END IF;
    
    RETURN OLD;
  END IF;
  
  RETURN NULL;
END;
$$ language 'plpgsql';

-- Trigger for tour application counts
CREATE TRIGGER update_tour_counts
  AFTER INSERT OR UPDATE OR DELETE ON show_applications
  FOR EACH ROW EXECUTE FUNCTION update_tour_application_count();

-- Create storage bucket for tour media
INSERT INTO storage.buckets (id, name, public) 
VALUES ('tour-media', 'tour-media', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies
CREATE POLICY "Authenticated users can upload tour media"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'tour-media');

CREATE POLICY "Public can view tour media"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'tour-media');

CREATE POLICY "Users can update their own tour media"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'tour-media' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own tour media"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'tour-media' AND auth.uid()::text = (storage.foldername(name))[1]);
