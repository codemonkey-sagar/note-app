/**
 * GET /
 * Dashboard
 */
exports.dashboard = async (req, res) => {
  const locals = {
    title: 'Dashboard',
    description: 'Write Notes here',
  };

  res.render('dashboard', locals);
};
