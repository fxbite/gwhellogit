
class SiteController {
    
    // [GET] /
    home(req, res) {
        res.send('home');
    }
}

module.exports = new SiteController;