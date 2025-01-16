const router = require('express').Router();

const {
    adminRegister,
    adminLogIn,
    getAdminDetail
} = require('./controllers/AdminController.js');

const {
    zookeeperRegister,
    zookeeperLogIn,
    getZookeeperDetail
} = require('./controllers/ZookeeperController.js');

const {
    noticeCreate,
    noticeList,
    deleteNotices,
    deleteNotice,
    updateNotice
} = require('./controllers/NoticeController.js')

// Admin
router.post('/AdminRegister', adminRegister);
router.post('/AdminLogin', adminLogIn);

router.get("/Admin/:id", getAdminDetail)

// Zookeeper
router.post('/ZookeeperRegister', zookeeperRegister);
router.post('/ZookeeperLogin', zookeeperLogIn)

router.get("/Zookeeper/:id", getZookeeperDetail)

// Notice
router.post('/NoticeCreate', noticeCreate);

router.get('/NoticeList/:id', noticeList);

router.delete("/Notices/:id", deleteNotices)
router.delete("/Notice/:id", deleteNotice)

router.put("/Notice/:id", updateNotice)

module.exports = router;
