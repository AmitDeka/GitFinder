"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

function SearchBox({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    if (username.trim()) {
      onSearch(username);
    }
  };

  return (
    <div className="flex w-full items-center space-x-2 mb-6">
      <Input
        type="text"
        placeholder="Enter Github Username"
        className="shadow-none h-10 relative"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button
        type="submit"
        className="shadow-none inline-flex items-center px-4 md:px-6 lg:px-8"
        size="lg"
        onClick={handleSearch}>
        <SearchIcon className="h-6 w-6" />
        Search
      </Button>
    </div>
  );
}
export default SearchBox;
