"use client";
// import dynamic from "next/dynamic";
/* const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false,
  loading: () => <p>Loading..</p>,
}); */
// import HeavyComponent from "./components/HeavyComponent";
// import _ from "lodash";
// import { useState } from "react";

export default function Home() {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <main className="relative h-screen">
      <h1>Hello WOrld</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>
      {/* {isVisible && <HeavyComponent />} */}
    </main>
  );
}
/* 

export const metadata: Metadata = {
  title: "page yash",
}; */

/* export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch("");
  return {
    title:"product.title"
  }
} */
