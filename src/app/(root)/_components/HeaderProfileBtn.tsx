"use client"

import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import React from "react";

export default function HeaderProfileBtn() {
  return (
    <>
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            label="Profile"
            labelIcon={<User className="size-4"/>}
            href="/profile"
          />
        </UserButton.MenuItems>
      </UserButton>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  );
}
