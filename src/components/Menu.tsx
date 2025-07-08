import React from 'react';
import { FileText, Star, Utensils } from 'lucide-react';

const Menu = () => {
  const menuItems = [
    {
      category: 'Entrées',
      image:
        'https://i.postimg.cc/QtzxxHdC/Asperges-sarrasin.jpg',
      items: [
        { name: 'Œuf meurette revisité', price: '7€' },
        { name: 'Asperges blanches, cresson, agrumes', price: '9€' },
        {
          name: 'Velouté de petits pois, lard fumé et straciatella',
          price: '11€'
        },
        { name: 'Raviolo langoustine et poireaux', price: '14€' },
        { name: 'Carpaccio de la pêche du jour', price: '15€' }
      ]
    },
    {
      category: 'Plats',
      image:
        'https://i.postimg.cc/6qG67t80/ballotine-de-poulet.jpg',
      items: [
        { name: 'Ballotine de poulet basse température', price: '21€' },
        {
          name: 'Gnocchis de patate douce, émulsion vin jaune et cancoillotte',
          price: '23€'
        },
        { name: 'Joue de bœuf confite 10 heures', price: '25€' },
        { name: 'Pêche du jour rôtie au beurre', price: '29€' }
      ]
    },
    {
      category: 'Desserts',
      image:
        'https://i.postimg.cc/s1dj7qSR/Millefeuille-vanille-pe-can.jpg',
      items: [
        { name: 'Crème brulée au sésame noir', price: '8€' },
        { name: 'Mille-feuilles vanille et noix de pécan', price: '12€' },
        {
          name: 'Pavlova ananas, verveine et citron vert',
          price: '14€'
        },
        {
          name: 'Tartelette chocolat noir et poire, ganache montée fève de tonka',
          price: '14€'
        }
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
        <div className="text-center bg-[#0080ff] text-white rounded-2xl p-12">
          <Utensils className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">
            Envie de découvrir toute notre carte ?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Consultez notre menu complet avec tous nos plats, vins et desserts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#0080ff] hover:bg-[#0080ff]/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>Télécharger la Carte (PDF)</span>
            </button>
            <button
              onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#0080ff] hover:bg-[#0080ff]/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
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