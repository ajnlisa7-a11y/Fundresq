'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionReveal } from '@/components/ui/section-reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { 
  Mail, 
  ShieldCheck, 
  Building, 
  Loader2,
  Lock,
  MapPin
} from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DIVISIONS = [
  "Stolen Cryptocurrency Investigation",
  "Investment Scam & Fraudulent Platform Investigation",
  "Romance Scam (Pig Butchering) Investigation",
  "Wallet & Address Analysis",
  "Following Funds Across Blockchains",
  "Reports for Police & Legal Counsel",
  "Institutional & Commercial Support"
];

export default function ContactPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    country: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service) {
      toast({
        variant: 'destructive',
        title: "Missing Information",
        description: "Please fill in all required fields.",
      });
      return;
    }
    
    setLoading(true);

    try {
      const generatedId = `INQ-${Math.floor(10000 + Math.random() * 90000)}`;
      
      const payload = {
        case_id: generatedId,
        case_type: formData.service,
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        user_country: formData.country,
        description: formData.message,
        status: 'Review Pending',
        risk_level: 'Initial Inquiry',
        evidence_integrity: 'Pending Review',
        form_values: { source: 'Contact Portal' }
      };

      const { error } = await supabase
        .from('cases')
        .insert([payload]);

      if (error) throw error;

      toast({
        title: "Request Sent",
        description: "Your request has been securely sent to our team.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        country: '',
        message: ''
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: "Transmission Failed",
        description: error.message || "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#090B0C] text-[#F2EFE9]">
      <Navbar />
      
      <section className="relative pt-32 pb-20 border-b border-[#252B2F] bg-[#111416]/50 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <SectionReveal className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111416] border border-[#252B2F] text-[#E15D44] text-[10px] font-mono font-bold mb-6 tracking-widest uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              Confidential Review
            </div>
            <h1 className="text-3xl md:text-6xl font-headline font-bold mb-4 tracking-tight">
              Tell Us What <br />
              <span className="text-[#E15D44] italic">Happened.</span>
            </h1>
            <p className="text-sm md:text-base text-[#9FA3A3] max-w-xl mx-auto leading-relaxed">
              Tell us what happened. We look at the public blockchain records, determine where your funds moved, and provide clear written reports that police and lawyers can use.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            
            <div className="lg:col-span-2 space-y-8">
              <SectionReveal>
                <h2 className="text-2xl font-headline font-bold mb-6 text-[#F2EFE9]">Direct Contacts</h2>
                <div className="space-y-6">
                  <Card className="bg-[#111416] border border-[#252B2F] p-7 group rounded-xl">
                    <div className="flex items-start gap-5">
                      <div className="w-11 h-11 rounded-lg bg-[#191D20] flex items-center justify-center shrink-0 border border-[#252B2F]">
                        <Mail className="w-5 h-5 text-[#E15D44]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-[#E15D44] mb-1 font-bold">Confidential Email</p>
                        <p className="text-lg font-bold text-[#F2EFE9] group-hover:text-[#E15D44] transition-colors">forensics@fundoraid.com</p>
                      </div>
                    </div>
                  </Card>

                  <div className="grid grid-cols-1 gap-3.5">
                    <Card className="bg-[#111416] border border-[#E15D44]/40 p-5 rounded-xl shadow-lg relative overflow-hidden">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#E15D44]/15 flex items-center justify-center shrink-0 border border-[#E15D44]/30 mt-0.5">
                          <MapPin className="w-5 h-5 text-[#E15D44]" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-xs font-bold text-[#F2EFE9] uppercase tracking-wider">Company Headquarters</p>
                            <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-[#E15D44]/20 text-[#E15D44] font-semibold border border-[#E15D44]/30">
                              Switzerland
                            </span>
                          </div>
                          <address className="not-italic text-sm text-[#F2EFE9] font-medium leading-relaxed font-mono pt-1">
                            Zug<br />
                            Baarerstrasse 43<br />
                            6300 Zug<br />
                            Switzerland
                          </address>
                        </div>
                      </div>
                    </Card>

                    {[
                      { city: "London", region: "UK & European Enquiries", icon: Building },
                      { city: "Delaware", region: "US Corporate Entity", icon: Building },
                      { city: "Singapore", region: "Asia-Pacific Region", icon: Building }
                    ].map((hub, idx) => (
                      <Card key={idx} className="bg-[#111416] border border-[#252B2F] p-5 rounded-xl">
                        <div className="flex items-center gap-3.5">
                          <hub.icon className="w-4 h-4 text-[#9FA3A3]" />
                          <div>
                            <p className="text-xs font-bold text-[#F2EFE9]">{hub.city}</p>
                            <p className="text-[10px] font-mono text-[#9FA3A3]">{hub.region}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-[#111416] border border-[#252B2F] text-xs text-[#9FA3A3] leading-relaxed">
                    <strong className="text-[#F2EFE9] block mb-1">Our Standard:</strong>
                    We never promise guaranteed recovery and we never charge upfront recovery percentages. We follow the verified evidence.
                  </div>
                </div>
              </SectionReveal>
            </div>

            <div className="lg:col-span-3">
              <SectionReveal delay={200}>
                <Card className="bg-[#111416] border border-[#252B2F] rounded-2xl p-8 md:p-10 shadow-2xl">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold uppercase text-[#9FA3A3]">Your Name*</label>
                      <Input 
                        placeholder="Jane Doe or Solicitor Name" 
                        className="bg-[#090B0C] border-[#252B2F] rounded-lg h-12 text-sm text-[#F2EFE9] placeholder:text-[#9FA3A3]/40 focus:border-[#E15D44]" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required 
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold uppercase text-[#9FA3A3]">Email Address*</label>
                      <Input 
                        type="email" 
                        placeholder="yourname@email.com" 
                        className="bg-[#090B0C] border-[#252B2F] rounded-lg h-12 text-sm text-[#F2EFE9] placeholder:text-[#9FA3A3]/40 focus:border-[#E15D44]" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required 
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold uppercase text-[#9FA3A3]">Phone Number (Optional)</label>
                      <Input 
                        type="tel" 
                        placeholder="+44 7000 000000" 
                        className="bg-[#090B0C] border-[#252B2F] rounded-lg h-12 text-sm text-[#F2EFE9] placeholder:text-[#9FA3A3]/40 focus:border-[#E15D44]" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold uppercase text-[#9FA3A3]">What happened?*</label>
                      <Select 
                        value={formData.service} 
                        onValueChange={(val) => setFormData({...formData, service: val})}
                      >
                        <SelectTrigger className="bg-[#090B0C] border-[#252B2F] rounded-lg h-12 text-sm text-[#F2EFE9] focus:border-[#E15D44]">
                          <SelectValue placeholder="Select Category*" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#111416] border-[#252B2F] text-[#F2EFE9]">
                          {DIVISIONS.map((service) => (
                            <SelectItem key={service} value={service} className="text-xs font-medium focus:bg-[#E15D44] focus:text-[#F2EFE9]">
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold uppercase text-[#9FA3A3]">Your Country</label>
                      <Input 
                        placeholder="United Kingdom, United States, Germany..." 
                        className="bg-[#090B0C] border-[#252B2F] rounded-lg h-12 text-sm text-[#F2EFE9] placeholder:text-[#9FA3A3]/40 focus:border-[#E15D44]" 
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold uppercase text-[#9FA3A3]">Incident Details / Transaction IDs*</label>
                      <Textarea 
                        placeholder="Tell us what happened. You can paste transaction IDs (TxIDs) or wallet addresses here..." 
                        className="min-h-[130px] bg-[#090B0C] border-[#252B2F] rounded-lg text-sm text-[#F2EFE9] placeholder:text-[#9FA3A3]/40 focus:border-[#E15D44]" 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      />
                    </div>

                    <div className="pt-2">
                      <Button 
                        disabled={loading} 
                        className="bg-[#E15D44] hover:bg-[#F0836D] hover:text-[#090B0C] text-[#F2EFE9] font-bold text-xs uppercase tracking-widest h-12 px-8 rounded-lg transition-all w-full md:w-auto shadow-lg shadow-[#E15D44]/20"
                      >
                        {loading ? (
                          <div className="flex items-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Submitting...
                          </div>
                        ) : 'Submit Case for Review'}
                      </Button>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#252B2F] flex items-center justify-center gap-2 text-[#9FA3A3] text-xs">
                      <Lock className="w-3.5 h-3.5 text-[#E15D44]" />
                      <span className="font-mono text-[10px] uppercase tracking-wider">Confidential & Encrypted Intake</span>
                    </div>
                  </form>
                </Card>
              </SectionReveal>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
