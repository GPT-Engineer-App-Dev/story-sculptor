import { useState } from 'react';
import HackerNews from '../components/HackerNews';
import { Input } from "@/components/ui/input";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Top 100 Hacker News Stories</h1>
      <Input
        type="text"
        placeholder="Search stories..."
        className="mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <HackerNews searchTerm={searchTerm} />
    </div>
  );
};

export default Index;
