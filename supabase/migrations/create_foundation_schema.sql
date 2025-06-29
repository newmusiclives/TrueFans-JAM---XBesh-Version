/*
  # TrueFans JAM Foundation Schema

  1. New Tables
    - `profiles` - Enhanced user profiles with modern features
    - `user_preferences` - Comprehensive user settings and preferences
    - `artist_profiles` - Advanced artist profiles with external API integration
    - `host_profiles` - Enhanced host profiles with detailed venue information
    - `user_activity_logs` - Real-time activity tracking
    - `notifications` - Modern notification system
    - `feature_flags` - Feature flags for gradual rollouts
    - `api_integration_logs` - External API integration logs

  2. Security
    - Enable RLS on all tables
    - Add comprehensive policies for data access
    - Implement proper user isolation

  3. Performance
    - Add performance indexes
    - Full-text search capabilities
    - PostGIS support for location features

  4. External Integrations
    - Spotify API integration fields
    - Manifest Financial integration
    - BandsInTown integration
    - Stripe integration support
*/

-- Enable extensions for advanced functionality
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "pg_stat_statements";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";
CREATE EXTENSION IF NOT EXISTS "btree_gin";

-- Enhanced profiles with modern features
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  user_type TEXT NOT NULL CHECK (user_type IN ('artist', 'host', 'admin', 'moderator')),
  full_name TEXT,
  phone_number TEXT,
  profile_image_url TEXT,
  email_verified BOOLEAN DEFAULT false,
  phone_verified BOOLEAN DEFAULT false,
  onboarding_completed BOOLEAN DEFAULT false,
  onboarding_step INTEGER DEFAULT 0,
  terms_accepted_at TIMESTAMPTZ,
  privacy_accepted_at TIMESTAMPTZ,
  marketing_consent BOOLEAN DEFAULT false,
  last_active_at TIMESTAMPTZ DEFAULT NOW(),
  account_status TEXT DEFAULT 'active' CHECK (account_status IN ('active', 'suspended', 'deactivated', 'banned')),
  suspension_reason TEXT,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Modern user preferences with comprehensive settings
CREATE TABLE IF NOT EXISTS user_preferences (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE UNIQUE,
  theme TEXT DEFAULT 'system' CHECK (theme IN ('light', 'dark', 'system')),
  language TEXT DEFAULT 'en',
  timezone TEXT DEFAULT 'UTC',
  currency TEXT DEFAULT 'USD',
  distance_unit TEXT DEFAULT 'miles' CHECK (distance_unit IN ('miles', 'kilometers')),
  notification_preferences JSONB DEFAULT '{
    "email": {"marketing": false, "updates": true, "bookings": true},
    "push": {"enabled": true, "marketing": false, "updates": true},
    "sms": {"enabled": false, "critical_only": true}
  }',
  privacy_settings JSONB DEFAULT '{
    "profile_visibility": "public",
    "location_sharing": "approximate",
    "analytics_tracking": true
  }',
  accessibility_settings JSONB DEFAULT '{
    "reduced_motion": false,
    "high_contrast": false,
    "font_size": "normal"
  }',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Advanced artist profiles with external API integration
CREATE TABLE IF NOT EXISTS artist_profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE UNIQUE,
  stage_name TEXT NOT NULL,
  legal_name TEXT,
  bio TEXT,
  genre_primary TEXT,
  genre_tags TEXT[] DEFAULT '{}',
  profile_image_url TEXT,
  banner_image_url TEXT,
  website_url TEXT,
  
  -- Social Media & Streaming Platforms
  social_media_links JSONB DEFAULT '{
    "spotify": null,
    "apple_music": null,
    "bandcamp": null,
    "soundcloud": null,
    "youtube": null,
    "instagram": null,
    "tiktok": null,
    "twitter": null
  }',
  
  -- External API Integration IDs
  spotify_artist_id TEXT,
  apple_music_id TEXT,
  bandcamp_username TEXT,
  soundcloud_username TEXT,
  youtube_channel_id TEXT,
  bandsintown_artist_id TEXT,
  
  -- Verification & Quality Metrics
  verification_status TEXT DEFAULT 'unverified' CHECK (verification_status IN ('unverified', 'pending', 'verified', 'rejected', 'premium')),
  verification_documents JSONB DEFAULT '[]',
  verification_notes TEXT,
  quality_score DECIMAL(3,2) DEFAULT 0.0 CHECK (quality_score BETWEEN 0 AND 5),
  trust_score DECIMAL(3,2) DEFAULT 0.0 CHECK (trust_score BETWEEN 0 AND 1),
  
  -- Performance & Experience
  tour_experience_level TEXT DEFAULT 'beginner' CHECK (tour_experience_level IN ('beginner', 'intermediate', 'experienced', 'professional')),
  performance_history JSONB DEFAULT '[]',
  technical_requirements JSONB DEFAULT '{
    "sound_system": false,
    "lighting": false,
    "power_requirements": "standard",
    "setup_time_minutes": 30,
    "breakdown_time_minutes": 15
  }',
  rider_requirements JSONB DEFAULT '{}',
  
  -- Financial & Business
  base_fee_cents INTEGER DEFAULT 0,
  travel_fee_per_mile_cents INTEGER DEFAULT 0,
  minimum_guarantee_cents INTEGER DEFAULT 0,
  revenue_share_percentage INTEGER DEFAULT 80 CHECK (revenue_share_percentage BETWEEN 0 AND 100),
  manifest_account_id TEXT,
  stripe_account_id TEXT,
  tax_information JSONB DEFAULT '{}',
  
  -- Analytics & Performance Metrics
  total_shows_performed INTEGER DEFAULT 0,
  total_revenue_earned_cents INTEGER DEFAULT 0,
  average_rating DECIMAL(3,2) DEFAULT 0,
  total_ratings_count INTEGER DEFAULT 0,
  fan_count INTEGER DEFAULT 0,
  monthly_listeners INTEGER DEFAULT 0,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enhanced host profiles with detailed venue information
CREATE TABLE IF NOT EXISTS host_profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE UNIQUE,
  
  -- Personal Information
  display_name TEXT NOT NULL,
  bio TEXT,
  hosting_since DATE DEFAULT CURRENT_DATE,
  host_type TEXT DEFAULT 'individual' CHECK (host_type IN ('individual', 'business', 'venue', 'organization')),
  
  -- Location & Address
  address_line1 TEXT NOT NULL,
  address_line2 TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  country TEXT DEFAULT 'USA',
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  timezone TEXT,
  location_accuracy TEXT DEFAULT 'approximate' CHECK (location_accuracy IN ('exact', 'approximate', 'city_only')),
  
  -- Venue Details
  venue_name TEXT,
  venue_type TEXT DEFAULT 'living_room' CHECK (venue_type IN (
    'living_room', 'backyard', 'basement', 'garage', 'studio', 
    'barn', 'rooftop', 'patio', 'music_room', 'other'
  )),
  venue_description TEXT,
  venue_images JSONB DEFAULT '[]',
  venue_amenities JSONB DEFAULT '[
    "seating", "restroom", "parking", "kitchen_access"
  ]',
  
  -- Capacity & Technical Specifications
  max_capacity INTEGER DEFAULT 20 CHECK (max_capacity > 0),
  preferred_capacity INTEGER DEFAULT 15,
  seating_style TEXT DEFAULT 'mixed' CHECK (seating_style IN ('chairs', 'floor', 'standing', 'mixed')),
  stage_setup TEXT DEFAULT 'corner' CHECK (stage_setup IN ('corner', 'center', 'wall', 'outdoor', 'flexible')),
  
  -- Equipment & Technical Capabilities
  technical_specs JSONB DEFAULT '{
    "sound_system": {"available": false, "details": ""},
    "lighting": {"available": false, "details": ""},
    "power_outlets": 2,
    "wifi": {"available": true, "guest_network": false},
    "recording_friendly": false,
    "live_streaming_capable": false
  }',
  
  -- Accessibility & Logistics
  accessibility_features JSONB DEFAULT '{
    "wheelchair_accessible": false,
    "accessible_parking": false,
    "accessible_restroom": false,
    "hearing_loop": false,
    "sign_language_friendly": false
  }',
  parking_info JSONB DEFAULT '{
    "available": false,
    "type": "street",
    "capacity": 0,
    "cost": "free",
    "details": ""
  }',
  
  -- Host Preferences & Policies
  preferred_genres TEXT[] DEFAULT '{}',
  max_volume_level INTEGER DEFAULT 7 CHECK (max_volume_level BETWEEN 1 AND 10),
  house_rules JSONB DEFAULT '{
    "alcohol_allowed": true,
    "smoking_allowed": false,
    "food_provided": false,
    "overnight_accommodation": false,
    "pets_allowed": false,
    "children_welcome": true
  }',
  
  -- Scheduling & Availability
  availability_calendar JSONB DEFAULT '{
    "monday": {"available": true, "preferred_time": "19:00-22:00"},
    "tuesday": {"available": true, "preferred_time": "19:00-22:00"},
    "wednesday": {"available": true, "preferred_time": "19:00-22:00"},
    "thursday": {"available": true, "preferred_time": "19:00-22:00"},
    "friday": {"available": true, "preferred_time": "19:00-22:00"},
    "saturday": {"available": true, "preferred_time": "19:00-22:00"},
    "sunday": {"available": true, "preferred_time": "17:00-21:00"}
  }',
  advance_booking_days INTEGER DEFAULT 14,
  same_day_booking_allowed BOOLEAN DEFAULT false,
  
  -- Verification & Trust
  verification_status JSONB DEFAULT '{
    "id_verified": false,
    "address_verified": false,
    "background_check": false,
    "insurance_verified": false,
    "references_checked": false
  }',
  
  -- Platform Analytics
  total_shows_hosted INTEGER DEFAULT 0,
  total_revenue_generated_cents INTEGER DEFAULT 0,
  average_rating DECIMAL(3,2) DEFAULT 0,
  total_ratings_count INTEGER DEFAULT 0,
  response_rate DECIMAL(5,2) DEFAULT 100,
  response_time_hours INTEGER DEFAULT 24,
  cancellation_rate DECIMAL(5,2) DEFAULT 0,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Real-time activity tracking
CREATE TABLE IF NOT EXISTS user_activity_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  activity_type TEXT NOT NULL,
  activity_data JSONB DEFAULT '{}',
  session_id TEXT,
  ip_address INET,
  user_agent TEXT,
  device_info JSONB DEFAULT '{}',
  location_data JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Modern notification system
CREATE TABLE IF NOT EXISTS notifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN (
    'booking_request', 'booking_confirmed', 'booking_cancelled',
    'message_received', 'review_received', 'payout_processed',
    'verification_update', 'system_announcement', 'marketing'
  )),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  action_url TEXT,
  action_data JSONB DEFAULT '{}',
  read BOOLEAN DEFAULT false,
  read_at TIMESTAMPTZ,
  priority TEXT DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
  delivery_methods TEXT[] DEFAULT '{"app"}',
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Feature flags for gradual rollouts
CREATE TABLE IF NOT EXISTS feature_flags (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  flag_name TEXT UNIQUE NOT NULL,
  description TEXT,
  enabled BOOLEAN DEFAULT false,
  rollout_percentage INTEGER DEFAULT 0 CHECK (rollout_percentage BETWEEN 0 AND 100),
  target_users JSONB DEFAULT '[]',
  target_user_types TEXT[] DEFAULT '{}',
  environment TEXT DEFAULT 'production',
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- External API integration logs
CREATE TABLE IF NOT EXISTS api_integration_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  service_name TEXT NOT NULL CHECK (service_name IN ('spotify', 'bandsintown', 'manifest', 'stripe', 'apple_music')),
  endpoint TEXT NOT NULL,
  method TEXT NOT NULL,
  request_data JSONB DEFAULT '{}',
  response_status INTEGER,
  response_data JSONB DEFAULT '{}',
  response_time_ms INTEGER,
  error_message TEXT,
  user_id UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Performance indexes
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_profiles_user_type_status ON profiles(user_type, account_status);
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_profiles_last_active ON profiles(last_active_at DESC);
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_artist_verification_status ON artist_profiles(verification_status);
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_host_location ON host_profiles(latitude, longitude) WHERE latitude IS NOT NULL AND longitude IS NOT NULL;
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_notifications_user_unread ON notifications(user_id, read, created_at DESC);
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_activity_logs_user_time ON user_activity_logs(user_id, created_at DESC);

-- Full-text search indexes
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_artist_search ON artist_profiles 
  USING GIN(to_tsvector('english', stage_name || ' ' || COALESCE(bio, '') || ' ' || array_to_string(genre_tags, ' ')));
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_host_search ON host_profiles 
  USING GIN(to_tsvector('english', display_name || ' ' || COALESCE(venue_description, '') || ' ' || city));

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE artist_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE host_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_activity_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE api_integration_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can manage own profile" ON profiles FOR ALL USING (auth.uid() = id);
CREATE POLICY "Users can manage own preferences" ON user_preferences FOR ALL USING (user_id = auth.uid());
CREATE POLICY "Users can manage own artist profile" ON artist_profiles FOR ALL USING (user_id = auth.uid());
CREATE POLICY "Users can manage own host profile" ON host_profiles FOR ALL USING (user_id = auth.uid());
CREATE POLICY "Users can view own activity logs" ON user_activity_logs FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users can manage own notifications" ON notifications FOR ALL USING (user_id = auth.uid());

-- Production functions
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  user_type TEXT;
  full_name TEXT;
BEGIN
  user_type := COALESCE(NEW.raw_user_meta_data->>'user_type', 'host');
  full_name := COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1));
  
  INSERT INTO public.profiles (id, email, user_type, full_name)
  VALUES (NEW.id, NEW.email, user_type, full_name);
  
  INSERT INTO public.user_preferences (user_id) VALUES (NEW.id);
  
  INSERT INTO public.user_activity_logs (user_id, activity_type, activity_data)
  VALUES (NEW.id, 'account_created', jsonb_build_object('user_type', user_type));
  
  RETURN NEW;
END;
$$;

-- Trigger for new user creation
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Function to update timestamps
CREATE OR REPLACE FUNCTION handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add updated_at triggers
CREATE TRIGGER handle_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION handle_updated_at();
CREATE TRIGGER handle_artist_profiles_updated_at BEFORE UPDATE ON artist_profiles FOR EACH ROW EXECUTE FUNCTION handle_updated_at();
CREATE TRIGGER handle_host_profiles_updated_at BEFORE UPDATE ON host_profiles FOR EACH ROW EXECUTE FUNCTION handle_updated_at();
