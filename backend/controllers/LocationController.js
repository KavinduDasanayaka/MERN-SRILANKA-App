import Location from "../models/Location.js";//PUT .JS

const createLocation = async (req, res) => {
  try {
    const newLoc = new Location(req.body);
    const saved = await newLoc.save();
    res.json(saved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllLocations = async (req, res) => {
  try {
    const loc = await Location.find();
    res.json(loc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSpecificLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const specificLocation = await Location.findById(id);
    if (!specificLocation) {
      return res.status(404).json({ message: "Location not found" });
    }
    res.json(specificLocation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const locationReview = async (req, res) => {
  try {
    const { comment} = req.body;
    console.log(req.body)
    const loc = await Location.findById(req.params.id);
    
    if (loc) {
      const alreadyReviewed = loc.reviews.find(
        (x) =>{
          console.log(x.user._id);
          x.user.toString() === req.user._id.toString()
        }
      );

      if (alreadyReviewed) {
        res.status(400);
        throw new Error("Location already reviewed");
      }

      const review = {
        name: req.user.username,
        comment,
        user: req.user._id,
        usercountry: req.user.country,

      };

      loc.reviews.push(review);

      await loc.save();
      res.status(201).json({ message: "Review Added" });
    } else {
      res.status(404);
      throw new Error("Location not found");
    }
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
};


export {
createLocation,
getAllLocations,
getSpecificLocation,
locationReview,
};