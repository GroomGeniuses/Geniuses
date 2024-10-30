const Filtering = ({ posts, searchTerm, sortType }) => {
  const sortedPosts = posts.sort((a, b) => {
    if (sortType === 'popularity') {
      return b.rating - a.rating;
    }
    return new Date(b.date) - new Date(a.date);
  });

  const filteredPosts = sortedPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return filteredPosts;
};

export default Filtering;
