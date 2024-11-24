
import { Link } from 'react-router-dom';
import { FiMapPin, FiCalendar, FiArrowRight } from 'react-icons/fi';

interface Client {
  id: number;
  title: string;
  image: string;
  location: string;
  date: string;
  service: string;
  description: string;
}

const clients: Client[] = [
  {
    id: 1,
    title: '2X OFFLOAD record but now successful Direct Flight from Manila to Dubai UAE!',
    image: '/assets/clients/1/1.jpg',
    location: 'Dubai International Airport',
    date: 'November 19, 2024',
    service: 'Visa Assistance Service',
    description:
      'Thanks again Sir. Ervin for choosing and trusting Journey Makers! Thanks for letting us assist your travel journey to Dubai, UAE!',
  },
  {
    id: 2,
    title: 'Successful Direct Flight from Manila to Dubai UAE via Employment Visa with a previous 4x offload record!',
    image: '/assets/clients/2/1.jpg',
    location: 'Dubai International Airport',
    date: 'November 10, 2024',
    service: 'Visa Assistance Service',
    description:
      'Thank you again Sir Marlon! We at Journey Makers are truly grateful that you chose us to process your journey to Dubai, UAE. Your trust in our expertise means the world to us. Welcome to Dubai!',
  },
  {
    id: 3,
    title: 'From 2X Offload to TOUCHDOWN Dubai!  Thank you for trusting us with  processing the documents needed  and welcome to Dubai!',
    image: '/assets/clients/3/1.jpg',
    location: 'Dubai International Airport',
    date: 'November 3, 2024',
    service: 'Visa Assistance Service',
    description:
      "Don't let visa hurdles stand in the way of your UAE Dubai adventures. Trust Journey Makers to be your reliable partner in securing the necessary documentation for your international travels. Contact us today and embark on your journey with confidence and peace of mind.",
  },
];

export function RecentClients() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Recent Clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client) => (
            <Link
              key={client.id}
              to={`/clients/${client.id}`}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64">
                <img
                  src={client.image}
                  alt={client.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">{client.title}</h3>
                  <div className="flex items-center text-sm">
                    <FiMapPin className="mr-1" />
                    {client.location}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <FiCalendar className="mr-1" />
                  {client.date}
                </div>
                <h4 className="font-semibold text-primary-600 mb-2">
                  {client.service}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {client.description}
                </p>
                <div className="flex items-center text-primary-600 text-sm font-medium">
                  View Details
                  <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}