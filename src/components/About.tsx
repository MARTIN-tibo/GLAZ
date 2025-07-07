import React from 'react';
import { Heart, Users, ChefHat, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="histoire" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Notre Histoire
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Glaz est une pépite culinaire nichée à Paris, offrant une expérience gastronomique raffinée et conviviale
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                L'authenticité avant tout
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Situé rue de Clichy, Glaz propose une cuisine française moderne inspirée par les produits locaux et de saison.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Chaque assiette est pensée comme une création gourmande, accompagnée d'une sélection soignée de vins.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <Heart className="w-8 h-8 text-blue-700 mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Passion Culinaire</h4>
                <p className="text-sm text-gray-600">Créations inspirées par les saisons</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-xl">
                <ChefHat className="w-8 h-8 text-amber-700 mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Produits Locaux</h4>
                <p className="text-sm text-gray-600">Sélection des meilleurs producteurs</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <Users className="w-8 h-8 text-slate-700 mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Ambiance Conviviale</h4>
                <p className="text-sm text-gray-600">Un accueil chaleureux et décontracté</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-xl">
                <Award className="w-8 h-8 text-emerald-700 mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Accords Mets & Vins</h4>
                <p className="text-sm text-gray-600">Suggestion de vins pour chaque plat</p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src="https://i.postimg.cc/WzKDK5k9/Tataki-mais-tomate-horizontale.jpg"
                alt="Intérieur du restaurant"
                loading="lazy"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://i.postimg.cc/g21DRKtH/oeuf-parfait-e-mulsion-ve-ge-tale.jpg"
                alt="Préparation des desserts"
                loading="lazy"
                className="w-full h-40 object-cover rounded-xl shadow-md"
              />
              <img
                src="https://i.postimg.cc/wj127r2B/fraises-confit-miel-crumnle-thym.jpg"
                alt="Pâtes fraîches"
                loading="lazy"
                className="w-full h-40 object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
