import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { User } from "lucide-react";

export const ClerkAuth = () => {
  return (
    <div className="ml-3">
      <SignedOut>
        <SignInButton>
          <Button
            className="rounded-xl 
          bg-[#252525] 
          text-white 
          hover:bg-[#252525]/70
          "
          >
            <User />
            Login
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton>
          <UserButton.UserProfileLink
            label="Dashboard"
            url={`/dashboard`}
            labelIcon={<User size={12} />}
          />
        </UserButton>
      </SignedIn>
    </div>
  );
};
