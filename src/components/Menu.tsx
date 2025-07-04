import React from 'react';
import { FileText, Star, Utensils } from 'lucide-react';

const Menu = () => {
  const menuItems = [
    {
      category: 'Entrées',
      image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      items: [
        { name: 'Oeuf parfait', price: '9€', description: 'Émulsion de topinambour' },
        { name: 'Gravlax de saumon', price: '12€', description: 'Crème d\'aneth fraîche' }
      ]
    },
    {
      category: 'Plats',
      image: 'https://images.pexels.com/photos/3296275/pexels-photo-3296275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      items: [
        { name: 'Cabillaud rôti', price: '22€', description: 'Mousseline de panais, beurre blanc' },
        { name: 'Filet de canette', price: '24€', description: 'Purée maison, jus réduit' }
      ]
    },
    {
      category: 'Desserts',
      image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      items: [
        { name: 'Fondant chocolat', price: '8€', description: 'Cœur coulant' },
        { name: 'Tarte fine aux pommes', price: '7€', description: 'Pommes caramélisées' }
      ]
    }
  ];

  return (
    <section id="carte" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Notre Carte
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre carte de saison et nos accords mets & vins
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {menuItems.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={category.image}
                  alt={category.category}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                  {category.category}
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-800">{item.name}</h4>
                        <span className="text-blue-700 font-bold text-lg">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-2xl p-12">
          <Utensils className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">
            Envie de découvrir toute notre carte ?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Consultez notre menu complet avec tous nos plats, vins et desserts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>Télécharger la Carte (PDF)</span>
            </button>
            <button 
              onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Star className="w-5 h-5" />
              <span>Réserver Maintenant</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;