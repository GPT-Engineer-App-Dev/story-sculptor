import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 HN Reader. All rights reserved.</p>
          <a
            href="https://github.com/yourusername/hn-reader"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-muted-foreground hover:text-primary"
          >
            <Github className="h-5 w-5 mr-2" />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
