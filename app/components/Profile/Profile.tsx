import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { auth, signOut } from "@/auth";
import Image from "next/image";

const ProfileSection = async () => {
  const session = await auth();
 

  return (
    <>
      {session ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="h-8 w-8 rounded-full overflow-hidden border-2 border-gray-300">
              <Image
                src={session?.user?.image || "/user-profile.png"}
                alt="Profile"
                width={40}
                height={40}
                className="object-cover h-full w-full"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span className="text-gray-700 font-medium text-sm">
                {session?.user?.name || "Guest"}
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "" });
              }}
            >
              <DropdownMenuItem asChild>
                <button type="submit">Log out</button>
              </DropdownMenuItem>
            </form>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProfileSection;
