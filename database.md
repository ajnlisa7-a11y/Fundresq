# Fundoraid Investigation Database Schema

This document outlines the database structure, storage bucket configurations, and Row Level Security (RLS) policies required for the Fundoraid platform.

---

## 1. SQL Setup (Run in Supabase SQL Editor)

Execute the following complete script in your Supabase SQL Editor to initialize all tables, storage buckets, and security policies:

```sql
-- ========================================================
-- 1. Create the 'cases' table (Client Intake & Inquiries)
-- ========================================================
CREATE TABLE IF NOT EXISTS cases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id text UNIQUE,
  case_type text,                     -- Incident Category / Division
  user_name text,
  user_email text,
  user_phone text,
  user_country text,
  risk_level text,                    -- Estimated loss or priority tier
  evidence_integrity text,            -- e.g. 'Has Transaction Hashes', 'Pending Review'
  status text DEFAULT 'Review Pending', -- 'Review Pending', 'Under Investigation', 'Resolved', 'Closed'
  description text,                   -- Incident narrative, TxIDs, or addresses
  result_data jsonb,                  -- Forensic analysis or AI preliminary findings
  form_values jsonb,                  -- Form metadata (timeline, loss bracket, source)
  evidence_files jsonb DEFAULT '[]',  -- Array of uploaded files: [{name, path, url}]
  is_blocked boolean DEFAULT false,
  has_access boolean DEFAULT true,
  best_contact_time text,
  preferred_method text,
  created_at timestamptz DEFAULT now()
);

-- ========================================================
-- 2. Create the 'success_stories' table (Case Scenarios / Insights)
-- ========================================================
CREATE TABLE IF NOT EXISTS success_stories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id text,
  case_type text,                     -- Division / Practice Area
  amount text,                        -- Sum involved (e.g. '$484,500 USDT')
  status text DEFAULT 'Resolved',     -- 'Resolved', 'Documented', 'Evidentiary Packet Delivered'
  challenge text,                     -- Technical challenge (peel chains, bridges)
  focus text,                         -- Investigative methodology
  outcome text,                       -- Terminal endpoint or exchange identification
  narrative text,                     -- Public case walkthrough summary
  icon_name text DEFAULT 'TrendingUp',
  created_at timestamptz DEFAULT now()
);

-- ========================================================
-- 3. Enable Row Level Security (RLS)
-- ========================================================
ALTER TABLE cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE success_stories ENABLE ROW LEVEL SECURITY;

-- ========================================================
-- 4. RLS Policies for 'cases'
-- ========================================================
-- Allow public visitors to submit confidential case intakes
DROP POLICY IF EXISTS "Allow public insert" ON cases;
CREATE POLICY "Allow public insert" ON cases 
FOR INSERT WITH CHECK (true);

-- Restrict case viewing exclusively to authenticated investigators/admins
DROP POLICY IF EXISTS "Allow authenticated select" ON cases;
CREATE POLICY "Allow authenticated select" ON cases 
FOR SELECT TO authenticated USING (true);

-- Allow authenticated investigators to update case status and findings
DROP POLICY IF EXISTS "Allow authenticated update" ON cases;
CREATE POLICY "Allow authenticated update" ON cases 
FOR UPDATE TO authenticated USING (true);

-- Allow authenticated investigators to delete records
DROP POLICY IF EXISTS "Allow authenticated delete" ON cases;
CREATE POLICY "Allow authenticated delete" ON cases 
FOR DELETE TO authenticated USING (true);

-- ========================================================
-- 5. RLS Policies for 'success_stories'
-- ========================================================
-- Public visitors can read published anonymized case scenarios
DROP POLICY IF EXISTS "Allow public select stories" ON success_stories;
CREATE POLICY "Allow public select stories" ON success_stories 
FOR SELECT USING (true);

-- Authenticated admins can manage stories
DROP POLICY IF EXISTS "Allow authenticated all stories" ON success_stories;
CREATE POLICY "Allow authenticated all stories" ON success_stories 
FOR ALL TO authenticated USING (true);

-- ========================================================
-- 6. Storage Buckets Setup
-- ========================================================
INSERT INTO storage.buckets (id, name, public) 
VALUES ('assets', 'assets', true) 
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public) 
VALUES ('evidence', 'evidence', false) 
ON CONFLICT (id) DO NOTHING;

-- Public read for assets (brand logos, team images)
DROP POLICY IF EXISTS "Public Access Assets" ON storage.objects;
CREATE POLICY "Public Access Assets" ON storage.objects
FOR SELECT USING (bucket_id = 'assets');

-- Authenticated admin upload for assets
DROP POLICY IF EXISTS "Admin Upload Assets" ON storage.objects;
CREATE POLICY "Admin Upload Assets" ON storage.objects
FOR ALL TO authenticated USING (bucket_id = 'assets');

-- Public insert for evidence uploads during case intake
DROP POLICY IF EXISTS "Public Upload Evidence" ON storage.objects;
CREATE POLICY "Public Upload Evidence" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'evidence');

-- Authenticated read for evidence
DROP POLICY IF EXISTS "Admin Read Evidence" ON storage.objects;
CREATE POLICY "Admin Read Evidence" ON storage.objects
FOR SELECT TO authenticated USING (bucket_id = 'evidence');
```

---

## 2. Standard Case Types & Divisions

When cases are submitted via the **Confidential Case Intake Modal** or **Contact Portal**, the `case_type` field maps to one of the following standard practice areas:

| Case Type Value | Practice Area | Description |
|---|---|---|
| `Investment Scam / Fake Platform` | Investment Scams | Fraudulent trading platforms, fake yield schemes, unapproved brokers. |
| `Romance Scam / Deceptive Contact` | Romance Scams | Deceptive relationships, dating app solicitations, "pig-butchering" schemes. |
| `Stolen Cryptocurrency` | Stolen Crypto | Unauthorized wallet drains, private key theft, malicious permit transfers. |
| `Locked or Frozen Account` | Platform Freezes | Disputed platform freezes, fake withdrawal tax fees, dark exchanges. |
| `Wallet or Transaction Investigation` | Wallet & Address Analysis | Transaction history tracing, counterparty clustering, balance auditing. |
| `Business or Legal Matter` | Commercial & Legal | Partnership disputes, insolvency discovery, court-admissible reporting. |

---

## 3. Storage Buckets Overview

### Bucket: `assets` (Public)
* **Access**: Public
* **Purpose**: Hosts site imagery, team member profile pictures (`team-1.png`, etc.), and administrative uploads.

### Bucket: `evidence` (Private)
* **Access**: Restricted / Private (Encrypted)
* **Purpose**: Secure repository for client-submitted evidence files (blockchain screenshots, CSV transaction exports, conversation logs). Only authenticated investigators can read or download these files.

---

## 4. Environment Variables Configuration

Ensure the following environment variables are set in `.env.local` and `.env`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```
