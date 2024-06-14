/**
 * GET /
 * Dashboard
 */
exports.dashboard = async (req, res) => {
  const locals = {
    title: 'Dashboard',
    description: 'Write Notes here',
    layout: 'layouts/dashboard',
  };
  res.render('dashboard/index', locals);
};
