import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/app/components/Header/Header"));
const Announcement = dynamic(() =>
  import("@/app/components/Announcement/Announcement")
);

export default function Home() {
  return (
    <main className="">
      <div>
        <Announcement />
        <Header />
        <p>Home Page</p>
      </div>
    </main>
  );
}
