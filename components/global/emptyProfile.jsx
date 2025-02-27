import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { GithubIcon } from "lucide-react";

function EmptyProfile() {
  return (
    <Card className="shadow-none border-0 py-4 bg-accent/50 dark:bg-accent/40">
      <CardHeader className="w-full flex items-center">
        <GithubIcon className="size-24 text-[#171515] dark:text-[#e8eaea]" />
      </CardHeader>
      <CardContent className="">
        <CardTitle className="text-center text-3xl uppercase mb-3 font-oswald font-bold">
          No user searched yet
        </CardTitle>
        <CardDescription className="text-center text-lg max-w-md mx-auto font-sourceSans">
          Enter a GitHub username in the search bar above to see their profile
          information.
        </CardDescription>
      </CardContent>
    </Card>
  );
}
export default EmptyProfile;
