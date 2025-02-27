"use client";
import EmptyProfile from "@/components/global/emptyProfile";
import ErrorProfile from "@/components/global/errorProfile";
import Footer from "@/components/global/footer";
import SearchBox from "@/components/global/searchBox";
import { ThemeToggle } from "@/components/global/theme-toggle";
import UserProfile from "@/components/global/userProfile";
import { useState } from "react";

export default function Home() {
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchGitHubUser = async (username) => {
    setLoading(true);
    setError(false);
    setUserData(null);
    setRepoData([]);

    try {
      const resUser = await fetch(`https://api.github.com/users/${username}`);

      if (!resUser.ok) {
        throw new Error("User not found");
      }

      const dataUser = await resUser.json();
      setUserData(dataUser);

      const resRepo = await fetch(
        `https://api.github.com/users/${username}/repos?sort=created&per_page=5`
      );

      if (resRepo.ok) {
        const dataRepo = await resRepo.json();
        setRepoData(dataRepo);
      } else {
        setRepoData([]);
      }
    } catch (error) {
      setError(true);
      setUserData(null);
      setRepoData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="w-full min-h-screen bg-background text-foreground flex items-center justify-center py-24">
        <ThemeToggle />
        <div className="container px-6 max-w-screen-lg">
          <h1 className="text-4xl font-oswald font-bold mb-2">Git Finder</h1>
          <p className="text-lg font-sourceSans text-muted-foreground mb-6">
            Find your favorite GitHub users and repositories.
          </p>
          <SearchBox onSearch={fetchGitHubUser} />
          {error && <ErrorProfile />}
          {!userData && !error && <EmptyProfile />}
          {userData && !error && (
            <UserProfile user={userData} repo={repoData} />
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
