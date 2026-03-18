import { useEffect } from 'react';
import { addLog } from '../data/LogsData';
import { Phone, Mail, MapPin, Globe, Clock } from 'lucide-react';
import { BackButton } from '../components/BackButton';

export function ContactPage() {
  useEffect(() => {
    addLog({ action: 'page_view', page: 'contact' });
  }, []);

return (
  <div className="min-h-screen bg-linear-to-b from-green-50 to-white">
 
    {/* Hero Section */}
    <div className="relative overflow-hidden bg-linear-to-br from-green-800 via-green-700 to-green-600 text-white py-12">
 
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1695376686770-5480909cc1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600)",
        }}
      />
 
      <div className="absolute inset-0 bg-green-900/70 pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
 
        {/* Back Button */}
        <div className="mb-6">
          <BackButton
            to="/"
            label="Back to Home"
            className="text-green-100 hover:text-white"
          />
        </div>
 
        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl mb-4">Contact Us</h1>
 
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Bendigo TAFE&apos;s involvement in the Melbourne International Flower and Garden Show
          </p>
        </div>
 
      </div>
 
  
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* General Enquiries */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-green-800 mb-6">General Enquiries</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <div className="text-gray-600 mb-1">Phone</div>
                  <a 
                    href="tel:+61 13 8233" 
                    className="text-gray-900 hover:text-green-700 transition-colors"
                  >
                    13 TAFE (13 8233)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <div className="text-gray-600 mb-1">Email</div>
                  <a 
                    href="mailto:admissions@bendigotafe.edu.au" 
                    className="text-gray-900 hover:text-green-700 transition-colors break-all"
                  >
                    admissions@bendigotafe.edu.au 
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg flex-shrink-0">
                  <Globe className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <div className="text-gray-600 mb-1">Website</div>
                  <a 
                    href="https://www.bendigotafe.edu.au/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-green-700 transition-colors"
                  >
                    www.bendigotafe.edu.au
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <div className="text-gray-600 mb-1">Office Hours</div>
                  <div className="text-gray-900">
                    Monday - Friday: 8:30am - 5:00pm<br />
                    Closed weekends and public holidays
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Campus Locations */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-green-800 mb-6">Campus Locations</h2>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-green-700" />
                  <h3 className="text-gray-900">Bendigo TAFE Campus</h3>
                </div>
                <div className="text-gray-700 pl-7">
                  <p>Charleston Road</p>
                  <p>Bendigo VIC 3550</p>
                  <p className="mt-2">
                    <a 
                      href="tel:+61354345100" 
                      className="text-green-700 hover:text-green-800"
                    >
                      (03) 5434 5100
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-green-700" />
                  <h3 className="text-gray-900">Cremorne Campus</h3>
                </div>
                <div className="text-gray-700 pl-7">
                  <p>225 - 245 Cremorne Street</p>
                  <p>Cremorne VIC 3121</p>
                  <p className="mt-2">
                    <a 
                      href="tel:+61392797777" 
                      className="text-green-700 hover:text-green-800"
                    >
                      (03) 9279 7777
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-green-700" />
                  <h3 className="text-gray-900">Richmond Campus</h3>
                </div>
                <div className="text-gray-700 pl-7">
                  <p>Private Bag 299</p>
                  <p>Heidelberg West VIC 3081</p>
                  <p className="mt-2">
                    <a 
                      href="tel:+61394684300" 
                      className="text-green-700 hover:text-green-800"
                    >
                      (03) 9468 4300
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-green-700" />
                  <h3 className="text-gray-900">Broadmeadows Campus</h3>
                </div>
                <div className="text-gray-700 pl-7">
                  <p>Pearcedale Parade</p>
                  <p>Broadmeadows VIC 3047</p>
                  <p className="mt-2">
                    <a 
                      href="tel:+61393594000" 
                      className="text-green-700 hover:text-green-800"
                    >
                      (03) 9359 4000
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-green-700" />
                  <h3 className="text-gray-900">Docklands Campus</h3>
                </div>
                <div className="text-gray-700 pl-7">
                  <p>211 La Trobe Street</p>
                  <p>Docklands VIC 3008</p>
                  <p className="mt-2">
                    <a 
                      href="tel:+61396061300" 
                      className="text-green-700 hover:text-green-800"
                    >
                      (03) 9606 1300
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horticulture Department */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-green-800 mb-6">Horticulture Department</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-gray-900 mb-3">Course Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Interested in studying horticulture? We offer a range of courses from Certificate II 
                through to Diploma level, covering:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Native Plant Cultivation</li>
                <li>Landscape Horticulture</li>
                <li>Parks and Gardens Management</li>
                <li>Arboriculture</li>
                <li>Sustainable Gardening Practices</li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-900 mb-3">Connect With Us</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Follow our social media channels to stay updated on student projects, 
                upcoming events, and participation in shows like MIFGS.
              </p>
              <div className="space-y-3">
                <a 
                  href="https://www.facebook.com/BendigoTAFEonline" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-green-700 hover:text-green-800 transition-colors"
                >
                  Facebook: Bendigo TAFE
                </a>
                <a 
                  href="https://www.instagram.com/bendigo.tafe" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-green-700 hover:text-green-800 transition-colors"
                >
                  Instagram: @bendigo.tafe
                </a>
                <a 
                 
                  href="https://au.linkedin.com/company/bendigo-regional-institute-of-tafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-green-700 hover:text-green-800 transition-colors"
                >
                  LinkedIn: Bendigo TAFE
                </a>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
}