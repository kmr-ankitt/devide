import { SignOutButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return <div>
    
      <SignUpButton>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign up
        </button>
      </SignUpButton>
      <SignOutButton>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Sign out
        </button>
      </SignOutButton>
  </div>;
}
