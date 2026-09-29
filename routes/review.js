const express = require("express");
const router = express.Router({ mergeParams: true });

const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listings.js");
const Review = require("../models/review.js");

const {
  validatereview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");

const reviewController=require("../controllers/reviews.js");

//reviews POST route
router.post(
  "/",
  isLoggedIn,
  validatereview,
  wrapAsync(reviewController.createReview),
);

//reviews delete route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.deleteReview),
);

module.exports = router;
