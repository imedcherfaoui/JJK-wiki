const { ObjectId } = require('mongodb');
const Character = require('../models/Character');

exports.getCharacters = async (req,res) => {
  try {
    const characters = await Character.find({ });
    return res.status(200).send(characters);
  } catch(err){
    return res.status(400).json({success:false, message: err});
  }
};

exports.save = async (req,res) => {  
  const newCharacter = new Character({
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    age: Number(req.body.age),
    gender: req.body.gender,
    birthday: req.body.birthday,
    skill: req.body.skill,
    height: Number(req.body.height),
    weight: Number(req.body.weight),
    description: req.body.description
  });
  await newCharacter.save({}).then((character) => {
    return res.status(200).json({success: true});
  }).catch((err) => {
    return res.status(400).json({success:false, message: err});
  });
};

exports.updateCharacter = async (req,res) => {
  await Character.findOneAndUpdate({ firstname: req.params.firstname }, {$set: {lastname: req.body.lastname, firstname: req.body.firstname, age: Number(req.body.age), gender: req.body.gender, birthday: req.body.birthday, skill: req.body.skill, height: Number(req.body.height), weight: Number(req.body.weight), description: req.body.description}}).then((updatedCharacter) => {
    return res.status(200).json({success:true, message: updatedCharacter});
  }).catch((err) => {
    return res.status(400).json({success: false, message: err});
  });
};

exports.getCharacter = async (req,res) => {
  await Character.find({firstname: req.params.firstname}).then((characterFound) => {
    return res.status(200).json({success: true, message: characterFound});
  }).catch((err) => {
    return res.status(400).json({success: false, message: err});
  });
      
};

exports.deleteCharacter = async (req,res) => {
  await Character.findOneAndRemove({ _id: new ObjectId(req.body._id) }).then(async (characterFound) => {
    return res.status(200).json({success: true, message: "Character Removed."});
  }).catch((err) => {
    return res.status(400).json({success: false, message: err});
  });
};