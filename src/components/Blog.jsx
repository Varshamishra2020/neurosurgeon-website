// components/Blog.jsx
import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Best Doctor for Complex Brain Tumor in Delhi",
      date: "November 24, 2025",
      excerpt:
        "Understanding the latest advancements in brain tumor treatment and surgical options.",
      image: "/Doctor.jpg",
      link: "/blog/brain-tumor-doctor",
    },
    {
      title: "Cervical Spinal Cord Stimulation: A Revolutionary Treatment",
      date: "October 29, 2025",
      excerpt:
        "Exploring innovative approaches to chronic pain management through spinal stimulation.",
      image: "/Spinalcord.jpg",
      link: "/blog/spinal-stimulation",
    },
    {
      title: "Minimally Invasive Spine Surgery Benefits",
      date: "September 15, 2025",
      excerpt:
        "How advanced techniques are changing recovery outcomes for spine patients.",
      image: "/Surgery.jpg",
      link: "/blog/minimally-invasive",
    },
  ];

  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="section-header">
          <h2>Latest from Our Blog</h2>
          <p>Insights on Brain and Spine Health</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-date">
                  <span>{post.date}</span>
                </div>
              </div>

              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href={post.link} className="blog-link">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <a href="/blog" className="btn-outline">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
