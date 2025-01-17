import { useState, useEffect } from 'react';
import axios from 'axios';
import { ExternalLink } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const HackerNews = ({ searchTerm }) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=100'
        );
        setStories(response.data.hits);
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
      setLoading(false);
    };

    fetchStories();
  }, []);

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {filteredStories.map((story) => (
        <li key={story.objectID} className="bg-card p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-foreground">{story.title}</h2>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              {story.points} upvotes
            </span>
            <Button
              variant="secondary"
              size="sm"
              asChild
              className="bg-pink-500 hover:bg-pink-600 text-white"
            >
              <a
                href={story.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Read more <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HackerNews;
