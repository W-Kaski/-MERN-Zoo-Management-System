const router = require('express').Router();

// const {
//     adminRegister,
//     adminLogIn,
//     getAdminDetail
// } = require('./controllers/AdminController.js');
//
// const {
//     zookeeperRegister,
//     zookeeperLogIn,
//     getZookeepers,
//     getZookeeperDetail,
//     deleteZookeepers,
//     deleteZookeeper,
//     updateZookeeperSpecies,
//     updateZookeeperVenue,
//     zookeeperAttendance
// } = require('./controllers/ZookeeperController.js');

const {
    noticeCreate,
    noticeList,
    deleteNotices,
    deleteNotice,
    updateNotice
} = require('./controllers/NoticeController.js')

// // Admin
// router.post('/AdminRegiser', adminRegister);
// router.post('/AdminLogin', adminLogIn);
//
// router.get("/Admin/:id", getAdminDetail)
//
// // Zookeeper
// router.post('/ZookeeperRegister', zookeeperRegister);
// router.post('/ZookeeperLogin', zookeeperLogIn)
//
// router.get("/Zookeepers/:id", getZookeepers)
// router.get("/Zookeeper/:id", getZookeeperDetail)
//
// router.delete("/Zookeepers/:id", deleteZookeepers)
// router.delete("/Zookeeper/:id", deleteZookeeper)
//
// router.put("/ZookeeperSpecies", updateZookeeperSpecies)
// router.put("/ZookeeperVenue", updateZookeeperVenue)
//
// router.post('/ZookeeperAttendance/:id', zookeeperAttendance)

// Notice
router.post('/NoticeCreate', noticeCreate);

router.get('/NoticeList/:id', noticeList);

router.delete("/Notices/:id", deleteNotices)
router.delete("/Notice/:id", deleteNotice)

router.put("/Notice/:id", updateNotice)

module.exports = router;
