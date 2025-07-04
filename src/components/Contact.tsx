import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Contact & Accès
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Retrouvez-nous au cœur du 9e arrondissement de Paris
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Nos Coordonnées
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Adresse</h4>
                    <p className="text-gray-600">
                      56 bis, rue de Clichy<br />
                      75009 Paris, France
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Métro : Liège (Ligne 13) - 3 min à pied
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Téléphone</h4>
                    <p className="text-gray-600">01 45 78 90 12</p>
                    <p className="text-sm text-gray-500">Réservations et renseignements</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">contact@glaz.paris</p>
                    <p className="text-sm text-gray-500">Nous vous répondons sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Horaires</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Lun - Ven : 12h00-14h30 / 19h00-22h30</p>
                      <p>Samedi : 19h00 - 22h30</p>
                      <p className="text-sm text-red-600 font-medium">Dimanche : fermé</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">Suivez-nous</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:scale-110 transition-transform duration-200"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-blue-600 text-white p-3 rounded-full hover:scale-110 transition-transform duration-200"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  @glaz_paris - Découvrez nos créations et actualités
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Une question ? Un événement privé ?
              </h3>
              <p className="mb-6 opacity-90">
                N'hésitez pas à nous contacter pour organiser vos repas d'affaires, 
                anniversaires ou événements spéciaux.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:0145789012"
                  className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Nous Appeler
                </a>
                <a
                  href="mailto:contact@glaz.paris"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Nous Écrire
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Comment nous trouver
              </h3>
              
              {/* Embedded Google Maps */}
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps?q=56+bis+rue+de+Clichy+75009+Paris&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Glaz"
                ></iframe>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🚇 Transports</h4>
                  <p className="text-sm text-gray-600">
                    <strong>Métro :</strong> Convention (L12) - 2 min à pied<br />
                    <strong>Bus :</strong> Lignes 39, 70, 89<br />
                    <strong>Vélib :</strong> Station à 50m
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🚗 Stationnement</h4>
                  <p className="text-sm text-gray-600">
                    Parking payant dans la rue<br />
                    Parking Beaugrenelle à 5 min à pied
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;