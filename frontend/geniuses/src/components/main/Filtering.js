const Filtering = ({ posts, searchTerm, sortType }) => {
  const sortedPosts = posts.sort((a, b) => {
    if (sortType === 'popularity') {
      return b.interests - a.interests;
    }
    return new Date(b.post_at) - new Date(a.post_at);
  });

  const filteredPosts = sortedPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return filteredPosts;
};

export default Filtering;
