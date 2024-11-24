import React from 'react';
import { FiPlay, FiCalendar, FiUser, FiExternalLink } from 'react-icons/fi';

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  videoId: string;
  description: string;
}

const getYouTubeId = (url: string): string => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&\?]{10,12})/);
  return match?.[1] || '';
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Cebu-Singapore-Dubai -Tourist Visa',
    author: 'Chelty',
    date: 'July 3, 2023',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=ZPY1g0OfO8g'),
    description: 'Click to watch the video on YouTube.'
  },
  {
    id: 2,
    title: 'Manila-Thailand-Dubai to Accommodation',
    author: 'Chelty',
    date: 'July 4, 2023',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=5UG16Ab9hAk'),
    description: 'Click to watch the video on YouTube.'
  },
  {
    id: 3,
    title: 'Hongkong to Dubai',
    author: 'Chelty',
    date: 'July 5, 2023',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=bhtOFBo3W5U'),
    description: 'Click to watch the video on YouTube.'
  },
  {
    id: 4,
    title: 'UAE Family Visa Processing',
    author: 'Chelty',
    date: 'July 8, 2023',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=-6cTjqm2ZSQ'),
    description: 'Click to watch the video on YouTube.'
  },
  {
    id: 5,
    title: 'Processing of Husband Residence Visa (Family Visa)',
    author: 'Chelty',
    date: 'July 24, 2023',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=Y9NGnm8kzCg'),
    description: 'Click to watch the video on YouTube.'
  },
  {
    id: 6,
    title: 'Manila to UAE visa success story',
    author: 'Chelty',
    date: 'August 2, 2023',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=Hnbt0lyH-jI'),
    description: 'Click to watch the video on YouTube.'
  },
  {
    id: 7,
    title: 'Philippines to UAE Visit Visa',
    author: 'Chelty',
    date: 'August 4, 2023',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=QFzOZUHHboo'),
    description: 'Click to watch the video on YouTube.'
  },
  {
    id: 8,
    title: 'Successful Cross-Country Visa arrival',
    author: 'Chelty',
    date: 'August 11, 2023',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=T14O2njidlY'),
    description: 'Click to watch the video on YouTube.'
  },
  {
    id: 9,
    title: "The Arrival | Husband's Residence Visa (UAE Family Visa)",
    author: 'Chelty',
    date: 'September 4, 2023',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=dKIuYLE-wlc'),
    description: 'Click to watch the video on YouTube.'
  },
  {
    id: 10,
    title: 'From Offload to Touchdown UAE!',
    author: 'Chelty',
    date: 'September 11, 2023',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=xPaVFd5YEps'),
    description: 'Click to watch the video on YouTube.'
  },
  {
    id: 11,
    title: 'Spouse Sponsored Visa | UAE Family Visa',
    author: 'Chelty',
    date: 'October 2, 2023',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=5fmbi5zr5Zs'),
    description: 'Click to watch the video on YouTube.'
  },
  {
    id: 12,
    title: 'MANILA - DUBAI Direct Flight',
    author: 'Chelty',
    date: 'October 2, 2023',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=HR5cOeEQG74'),
    description: 'Click to watch the video on YouTube.'
  },
  {
    id: 13,
    title: 'Cross-Country Visa | HK-BKK-UAE',
    author: 'Chelty',
    date: 'October 27, 2023',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=TmoH4TCglhY'),
    description: 'Click to watch the video on YouTube.'
  },
  {
    id: 14,
    title: 'No Affidavit of Support | Visit Visa',
    author: 'Chelty',
    date: 'November 11, 2023',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=_3hYJR5Kytk'),
    description: 'Click to watch the video on YouTube.'
  },
  {
    id: 15,
    title: 'MANILA - DUBAI Employment Visa (First Timer)',
    author: 'Chelty',
    date: 'November 22, 2023',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=4-YbHoOPqxM'),
    description: 'Click to watch the video on YouTube.'
  },
  {
    id: 16,
    title: 'MANILA to DUBAI - Smoothly Processed Employment Visa',
    author: 'Chelty',
    date: 'November 22, 2023',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=aL3XAYN7Bc8'),
    description: 'Click to watch the video on YouTube.'
  },
  {
    id: 17,
    title: 'Manila to Dubai | Direct Flight',
    author: 'Chelty',
    date: 'December 18, 2023',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=HuToPLTGumw'),
    description: 'Click to watch the video on YouTube.'
  },
  {
    id: 18,
    title: 'Spouse Visa | Direct Flight PH to UAE',
    author: 'Chelty',
    date: 'December 23, 2023',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=T_NvJ1YDJWM'),
    description: 'Click to watch the video on YouTube.'
  },
  {
    id: 19,
    title: 'Manila to Dubai | Employment Visa',
    author: 'Chelty',
    date: 'January 18, 2024',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=uhdVcW6tru8'),
    description: 'Click to watch the video on YouTube.'
  },
  {
    id: 20,
    title: 'Employment Visa | Philippines to UAE',
    author: 'Chelty',
    date: 'January 18, 2024',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=zEAH3UJfIAY'),
    description: 'Click to watch the video on YouTube.'
  },
  {
    id: 21,
    title: 'Previous Offload successful travel from Philippines to UAE',
    author: 'Chelty',
    date: 'April 3, 2024',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=ZSLp_SFU2fw'),
    description: 'Click to watch the video on YouTube.'
  },
  {
    id: 22,
    title: 'Saudi Arabia to Dubai Flight',
    author: 'Chelty',
    date: 'April 5, 2024',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=5gCyC0FyELY'),
    description: 'Click to watch the video on YouTube.'
  },
  {
    id: 23,
    title: 'Remarkable Journey from Saudi to UAE!',
    author: 'Chelty',
    date: 'May 10, 2024',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=5aexqDgrEhg'),
    description: 'Click to watch the video on YouTube.'
  }
].sort((a, b) => b.id - a.id); // Sort in descending order by ID

function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Journey-Makers Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our adventures through client stories and travel videos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              onClick={() => window.open(`https://www.youtube.com/watch?v=${post.videoId}`, '_blank')}
            >
              <div className="relative group">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={`https://img.youtube.com/vi/${post.videoId}/maxresdefault.jpg`}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to medium quality thumbnail if maxresdefault is not available
                      const target = e.target as HTMLImageElement;
                      target.src = `https://img.youtube.com/vi/${post.videoId}/mqdefault.jpg`;
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <FiPlay className="w-8 h-8 text-primary-600 ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </h2>
                  <FiExternalLink className="text-gray-400 w-5 h-5" />
                </div>
                <p className="text-gray-600 mb-4">
                  {post.description}
                </p>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <FiUser className="mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <FiCalendar className="mr-2" />
                    {post.date}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;