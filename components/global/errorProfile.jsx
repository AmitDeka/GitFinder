import { InfoIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

function ErrorProfile() {
  return (
    <Card className="shadow-none border-0 py-4 bg-accent/50 dark:bg-accent/40">
      <CardHeader className="w-full flex items-center">
        <InfoIcon className="size-24 text-destructive" />
      </CardHeader>
      <CardContent className="">
        <CardTitle className="text-center text-3xl uppercase mb-3 font-oswald font-bold">
          User not found
        </CardTitle>
        <CardDescription className="text-center text-lg max-w-md mx-auto font-sourceSans">
          We couldn't find a GitHub user with that username. Please check the
          spelling and try again.
        </CardDescription>
      </CardContent>
    </Card>
  );
}
export default ErrorProfile;
