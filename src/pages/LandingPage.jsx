import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4">Welcome to HN Reader</h1>
      <p className="text-xl mb-8 text-center max-w-md">
        Stay up-to-date with the latest tech news and discussions from Hacker News.
      </p>
      <Button 
        onClick={() => navigate('/app')} 
        className="px-6 py-3 text-lg"
      >
        Enter App
      </Button>
    </div>
  );
};

export default LandingPage;
