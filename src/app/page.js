import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/app/components/Header/Header"));
const Announcement = dynamic(() =>
  import("@/app/components/Announcement/Announcement")
);
const Introduction = dynamic(() =>
  import("@/app/components/Introduction/Introduction")
);
const TimerComponent = dynamic(() =>
  import("@/app/components/TimerComponent/TimerComponent")
);

export default function Home() {
  return (
    <main className="">
      <div>
        <Announcement />
        <Header />
        <Introduction />
        <TimerComponent />
      </div>
    </main>
  );
}
