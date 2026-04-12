const posts = [
  {
    id: 1,
    title: "Thinking in React",
    content:
      "React can change how you think about the designs you look at and the apps you build. When you build a user interface with React, you will first break it apart into pieces called components. Then, you will describe the different visual states for each of your components. Finally, you will connect your components together so that the data flows through them. In this tutorial, we’ll guide you through the thought process of building a searchable product data table with React.",
    datePublished: "2026-03-30T00:01:01.000Z",
  },
  {
    id: 2,
    title: "2Thinking in React",
    content:
      "2React can change how you think about the designs you look at and the apps you build. When you build a user interface with React, you will first break it apart into pieces called components. Then, you will describe the different visual states for each of your components. Finally, you will connect your components together so that the data flows through them. In this tutorial, we’ll guide you through the thought process of building a searchable product data table with React.",
    datePublished: "2026-03-30T00:01:01.000Z",
  },
];

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <h1>Mr Mine Blog API</h1>
      {/* home or post */}
      <Home />
      <Footer />
    </>
  );
}

// compenent static, state, proptype, css, tests/snapshot

function Home() {
  return (
    <div>
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </div>
  );
}

function PostItem({ post }) {
  const date = dateDisplay(post.datePublished);

  return (
    // Link to post
    <div>
      <h2>{post.title}</h2>
      <h3>{date}</h3>
      <p>{post.content}</p>
    </div>
  );
}

function dateDisplay(datePublished) {
  const timestamp = Date.parse(datePublished);
  const date = new Date(timestamp);
  return date.toDateString();
}

export default App;
