/*
  # Create Demo Login Accounts

  1. Demo Users
    - Artist Demo: demo.artist@truefansjam.com
    - Host Demo: demo.host@truefansjam.com  
    - Admin Demo: demo.admin@truefansjam.com
    - Password for all: DemoPass123!

  2. Complete Profiles
    - Full artist profile with Spotify integration placeholders
    - Complete host profile with venue details and location
    - Admin profile with elevated permissions

  3. Sample Data
    - Sample tour for artist demo
    - Sample show applications
    - Sample reviews and ratings
*/

-- Insert demo profiles (these will be linked to auth users created separately)
INSERT INTO profiles (id, email, user_type, full_name, phone_number, profile_image_url, email_verified, phone_verified, onboarding_completed, last_active_at, total_tours_created, total_revenue_earned) VALUES
  -- Artist Demo Account
  ('550e8400-e29b-41d4-a716-446655440001', 'demo.artist@truefansjam.com', 'artist', 'Luna Rivers', '+1-555-0101', 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop', true, true, true, NOW(), 3, 2450.00),
  
  -- Host Demo Account  
  ('550e8400-e29b-41d4-a716-446655440002', 'demo.host@truefansjam.com', 'host', 'Marcus Rodriguez', '+1-555-0102', 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop', true, true, true, NOW(), 0, 0),
  
  -- Admin Demo Account
  ('550e8400-e29b-41d4-a716-446655440003', 'demo.admin@truefansjam.com', 'admin', 'Emma Thompson', '+1-555-0103', 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop', true, true, true, NOW(), 0, 0)
ON CONFLICT (id) DO UPDATE SET
  email = EXCLUDED.email,
  user_type = EXCLUDED.user_type,
  full_name = EXCLUDED.full_name,
  phone_number = EXCLUDED.phone_number,
  profile_image_url = EXCLUDED.profile_image_url,
  email_verified = EXCLUDED.email_verified,
  phone_verified = EXCLUDED.phone_verified,
  onboarding_completed = EXCLUDED.onboarding_completed,
  updated_at = NOW();

-- Insert artist profile for demo artist
INSERT INTO artist_profiles (id, user_id, stage_name, bio, genre_primary, genre_tags, experience_level, average_performance_rating, total_shows_performed, monthly_listeners, profile_image_url, banner_image_url, social_media_links, technical_requirements) VALUES
  ('650e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440001', 'Luna Rivers', 'Indie folk singer-songwriter with a passion for intimate storytelling through music. Known for haunting melodies and poetic lyrics that connect deeply with audiences in small venue settings.', 'Indie Folk', ARRAY['indie', 'folk', 'acoustic', 'singer-songwriter', 'alternative'], 'experienced', 4.8, 47, 12500, 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop', '{"instagram": "@lunariversmusic", "tiktok": "@lunariversofficial", "youtube": "Luna Rivers Music", "website": "https://lunariversmusic.com"}', '{"sound_system_required": false, "lighting_required": true, "power_requirements": "standard", "setup_time_minutes": 45}')
ON CONFLICT (user_id) DO UPDATE SET
  stage_name = EXCLUDED.stage_name,
  bio = EXCLUDED.bio,
  genre_primary = EXCLUDED.genre_primary,
  genre_tags = EXCLUDED.genre_tags,
  experience_level = EXCLUDED.experience_level,
  average_performance_rating = EXCLUDED.average_performance_rating,
  total_shows_performed = EXCLUDED.total_shows_performed,
  monthly_listeners = EXCLUDED.monthly_listeners,
  profile_image_url = EXCLUDED.profile_image_url,
  banner_image_url = EXCLUDED.banner_image_url,
  social_media_links = EXCLUDED.social_media_links,
  technical_requirements = EXCLUDED.technical_requirements,
  updated_at = NOW();

-- Insert host profile for demo host
INSERT INTO host_profiles (id, user_id, display_name, bio, address_line1, address_line2, city, state, zip_code, country, coordinates, venue_name, venue_type, venue_description, max_capacity, preferred_capacity, venue_amenities, venue_images, technical_specs, preferred_genres, hosting_frequency, max_volume_level, house_rules, availability_calendar, total_shows_hosted, average_host_rating, response_rate, response_time_hours) VALUES
  ('750e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440002', 'Marcus Rodriguez', 'Music enthusiast and community builder who loves bringing people together through intimate live performances. My living room has hosted dozens of incredible shows over the past two years.', '1234 Maple Street', 'Unit 2B', 'Portland', 'OR', '97201', 'USA', ST_GeogFromText('POINT(-122.6765 45.5152)'), 'The Listening Room', 'living_room', 'Cozy living room with excellent acoustics, comfortable seating for 25, and a warm, welcoming atmosphere perfect for intimate performances.', 25, 20, ARRAY['seating', 'restroom', 'parking', 'kitchen', 'wifi', 'sound_system'], '["https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop", "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"]', '{"sound_system": {"available": true, "details": "Yamaha PA system with wireless mics"}, "lighting": {"available": true, "details": "Adjustable ambient lighting"}, "power_outlets": 6, "wifi_available": true, "recording_friendly": true}', ARRAY['indie', 'folk', 'acoustic', 'jazz', 'alternative'], 'monthly', 7, '{"alcohol_allowed": true, "smoking_allowed": false, "food_provided": true, "pets_allowed": false}', '{"friday": {"available": true, "preferred_time": "19:00-22:00"}, "saturday": {"available": true, "preferred_time": "19:00-22:30"}, "sunday": {"available": true, "preferred_time": "17:00-21:00"}}', 12, 4.9, 95.5, 4)
ON CONFLICT (user_id) DO UPDATE SET
  display_name = EXCLUDED.display_name,
  bio = EXCLUDED.bio,
  address_line1 = EXCLUDED.address_line1,
  address_line2 = EXCLUDED.address_line2,
  city = EXCLUDED.city,
  state = EXCLUDED.state,
  zip_code = EXCLUDED.zip_code,
  country = EXCLUDED.country,
  coordinates = EXCLUDED.coordinates,
  venue_name = EXCLUDED.venue_name,
  venue_type = EXCLUDED.venue_type,
  venue_description = EXCLUDED.venue_description,
  max_capacity = EXCLUDED.max_capacity,
  preferred_capacity = EXCLUDED.preferred_capacity,
  venue_amenities = EXCLUDED.venue_amenities,
  venue_images = EXCLUDED.venue_images,
  technical_specs = EXCLUDED.technical_specs,
  preferred_genres = EXCLUDED.preferred_genres,
  hosting_frequency = EXCLUDED.hosting_frequency,
  max_volume_level = EXCLUDED.max_volume_level,
  house_rules = EXCLUDED.house_rules,
  availability_calendar = EXCLUDED.availability_calendar,
  total_shows_hosted = EXCLUDED.total_shows_hosted,
  average_host_rating = EXCLUDED.average_host_rating,
  response_rate = EXCLUDED.response_rate,
  response_time_hours = EXCLUDED.response_time_hours,
  updated_at = NOW();

-- Insert sample tour for demo artist
INSERT INTO tours (id, artist_id, title, description, start_date, end_date, geographic_center, max_radius_miles, target_cities, target_states, min_capacity, max_capacity, expected_shows, max_daily_miles, preferred_show_duration_minutes, base_guarantee, revenue_split_percentage, ticket_price_suggested, merchandise_split_percentage, status, visibility, genre_requirements, venue_type_preferences, special_requirements, total_applications, confirmed_shows, total_projected_revenue, total_actual_revenue) VALUES
  ('850e8400-e29b-41d4-a716-446655440001', '650e8400-e29b-41d4-a716-446655440001', 'Pacific Northwest Intimate Sessions', 'A collection of intimate acoustic performances across cozy living rooms and small venues throughout the Pacific Northwest. Featuring new songs from my upcoming album plus fan favorites.', '2024-03-15', '2024-04-15', ST_GeogFromText('POINT(-122.6765 45.5152)'), 300, ARRAY['Portland', 'Seattle', 'Eugene', 'Bellingham', 'Olympia'], ARRAY['OR', 'WA'], 15, 35, 8, 250, 90, 200.00, 75, 25.00, 85, 'seeking_hosts', 'public', ARRAY['indie', 'folk', 'acoustic'], ARRAY['living_room', 'music_room', 'studio'], 'Prefer venues with good natural acoustics and intimate atmosphere. Happy to provide acoustic performance with minimal amplification needed.', 3, 1, 1800.00, 450.00)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  start_date = EXCLUDED.start_date,
  end_date = EXCLUDED.end_date,
  status = EXCLUDED.status,
  visibility = EXCLUDED.visibility,
  updated_at = NOW();

-- Insert sample show application
INSERT INTO show_applications (id, tour_id, host_id, proposed_date, proposed_time, message, expected_attendance, ticket_price, special_requirements, catering_offered, accommodation_offered, status, artist_response, setup_time, show_start_time, show_end_time, breakdown_time, load_in_notes, parking_details, contact_day_of_show, guaranteed_amount, revenue_split_agreed, merchandise_allowed) VALUES
  ('950e8400-e29b-41d4-a716-446655440001', '850e8400-e29b-41d4-a716-446655440001', '750e8400-e29b-41d4-a716-446655440002', '2024-03-22', '19:30', 'Would love to host Luna at The Listening Room! We have a great community of music lovers and the acoustics are perfect for intimate folk performances.', 22, 25.00, 'None - our space is perfect for acoustic performances', true, false, 'accepted', 'Excited to perform at The Listening Room! The space looks perfect for the intimate vibe I am going for.', '18:30', '19:30', '21:30', '22:00', 'Easy load-in through front door, parking available on street and in driveway', 'Street parking available, plus 2 spots in driveway. Load-in is easy through the front door.', '+1-555-0102', 200.00, 75, true)
ON CONFLICT (tour_id, host_id, proposed_date) DO UPDATE SET
  message = EXCLUDED.message,
  expected_attendance = EXCLUDED.expected_attendance,
  ticket_price = EXCLUDED.ticket_price,
  status = EXCLUDED.status,
  artist_response = EXCLUDED.artist_response,
  updated_at = NOW();

-- Insert sample reviews
INSERT INTO reviews (id, show_application_id, reviewer_id, reviewee_id, rating, title, content, performance_rating, communication_rating, venue_rating, hospitality_rating, is_public, is_featured) VALUES
  -- Host reviewing Artist
  ('a50e8400-e29b-41d4-a716-446655440001', '950e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440001', 5, 'Absolutely Magical Performance', 'Luna delivered an incredible intimate performance that had everyone mesmerized. Her stage presence and connection with the audience was remarkable. Professional, punctual, and a joy to work with!', 5, 5, 5, 5, true, true),
  
  -- Artist reviewing Host  
  ('a50e8400-e29b-41d4-a716-446655440002', '950e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', 5, 'Perfect Venue and Wonderful Host', 'Marcus created the perfect atmosphere for an intimate show. The Listening Room has amazing acoustics and the audience was so engaged. Great communication throughout the booking process!', 5, 5, 5, 5, true, true)
ON CONFLICT (show_application_id, reviewer_id) DO UPDATE SET
  rating = EXCLUDED.rating,
  title = EXCLUDED.title,
  content = EXCLUDED.content,
  performance_rating = EXCLUDED.performance_rating,
  communication_rating = EXCLUDED.communication_rating,
  venue_rating = EXCLUDED.venue_rating,
  hospitality_rating = EXCLUDED.hospitality_rating;
