"use client";
import {
  Building2Icon,
  CodeIcon,
  LinkIcon,
  MapPinIcon,
  ScaleIcon,
  StarIcon,
  TwitterIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";

function UserProfile({ user, repo }) {
  console.log(user);
  console.log(repo);

  return (
    <Card className="shadow-none border-0 py-4 bg-accent/50 dark:bg-accent/40">
      <CardContent className="flex !pb-4 flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div>
          <Avatar className="h-24 w-24">
            <AvatarImage
              src={user.avatar_url}
              alt={user.name || "Github User"}
            />
            <AvatarFallback>
              {user.name?.toUpperCase() || "Github User"}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="grid gap-y-3 w-full">
          <div className="w-full flex flex-col-reverse md:flex-row">
            <div className="md:w-2/3 space-y-1">
              <CardTitle className="text-2xl font-oswald font-bold">
                {user.name || "Github User"}
              </CardTitle>
              <Link href={user.html_url}>
                <p className="text-lg font-sourceSans">@{user.login}</p>
              </Link>
              <CardDescription className="font-sourceSans font-normal text-base">
                {user.bio || "No Bio available"}
              </CardDescription>
            </div>
            <div className="md:w-1/3">
              <p className="font-sourceSans md:text-end font-medium">
                Joined{" "}
                {new Date(user.created_at).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
          <div className="w-full bg-accent dark:bg-accent/60 grid grid-cols-3 py-3 lg:py-4 px-1 rounded-md">
            <div className="flex w-full flex-col items-center">
              <h3 className="text-sm mb-1 font-sourceSans text-muted-foreground">
                Repos
              </h3>
              <p className="text-xl font-oswald font-semibold">
                {user.public_repos || "🤷‍♂️"}
              </p>
            </div>
            <div className="flex w-full flex-col items-center">
              <h3 className="text-sm mb-1 font-sourceSans text-muted-foreground">
                Followers
              </h3>
              <p className="text-xl font-oswald font-semibold">
                {user.followers || "🤷‍♂️"}
              </p>
            </div>
            <div className="flex w-full flex-col items-center">
              <h3 className="text-sm mb-1 font-sourceSans text-muted-foreground">
                Followings
              </h3>
              <p className="text-xl font-oswald font-semibold">
                {user.following || "🤷‍♂️"}
              </p>
            </div>
          </div>
          <div className="w-full grid md:grid-cols-2 gap-x-3">
            <div className="inline-flex items-center space-x-2 py-1.5">
              <div className="w-5 h-5">
                <MapPinIcon className="size-5" />
              </div>
              <p className="text-lg line-clamp-1 font-sourceSans">
                {user.location || "Not available"}
              </p>
            </div>
            <div className="inline-flex items-center space-x-2 py-1.5">
              <div className="w-5 h-5">
                <TwitterIcon className="size-5" />
              </div>
              <p className="text-lg line-clamp-1 font-sourceSans">
                {user.twitter_username || "Not available"}
              </p>
            </div>
            <div className="inline-flex items-center space-x-2 py-1.5">
              <div className="w-5 h-5">
                <LinkIcon className="size-5" />
              </div>
              <p className="text-lg line-clamp-1 font-sourceSans">
                {user.blog || "Not available"}
              </p>
            </div>
            <div className="inline-flex items-center space-x-2 py-1.5">
              <div className="w-5 h-5">
                <Building2Icon className="size-5" />
              </div>
              <p className="text-lg line-clamp-1 font-sourceSans">
                {user.company || "Not available"}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="grid gap-y-3">
        <h2 className="text-lg md:text-xl lg:text-2xl font-oswald font-bold mb-1">
          Latest Repository
        </h2>
        {repo.length > 0 ? (
          repo.map((item) => (
            <Card
              key={item.id}
              className="w-full shadow-none transition-all duration-300 ease-linear bg-accent/50 dark:bg-accent/30 hover:bg-accent dark:hover:bg-accent/80 mb-2">
              <CardHeader className="pb-3">
                <Link
                  href={item.html_url}
                  target="_blank"
                  className="hover:underline">
                  <CardTitle className="font-oswald font-semibold text-lg md:text-xl">
                    {item.name}
                  </CardTitle>
                </Link>
                <CardDescription className="font-sourceSans text-base line-clamp-2">
                  {item.description || "No Description"}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex space-x-6">
                <div className="inline-flex items-center space-x-2">
                  <StarIcon className="size-5 md:size-4 text-muted-foreground" />
                  <p className="text-base text-muted-foreground font-sourceSans">
                    {item.stargazers_count}
                  </p>
                </div>
                <div className="inline-flex items-center space-x-2">
                  <CodeIcon className="size-5 md:size-4 text-muted-foreground" />
                  <p className="text-base text-muted-foreground font-sourceSans">
                    {item.language}
                  </p>
                </div>
                <div className="inline-flex items-center space-x-2">
                  <ScaleIcon className="size-5 md:size-4 text-muted-foreground" />
                  <p className="text-base text-muted-foreground font-sourceSans">
                    {item.license?.name || "No License"}
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p className="text-lg text-muted-foreground font-sourceSans">
            No repositories found for this user. Please check back later.
          </p>
        )}
      </CardFooter>
    </Card>
  );
}
export default UserProfile;
