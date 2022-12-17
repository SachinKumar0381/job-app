const express = require("express");
const jobModel = require("../model/job.model");

const jobRoute = express.Router();

jobRoute.post("/post",async(req,res)=>{
    const data = new jobModel(req.body);
    await data.save();
    res.send("job added");
})

jobRoute.get("/",async(req,res)=>{
    const limit = req.query.limit;
    const page = req.query.page;
    const data = await jobModel.find().skip(page>0?((page-1)*limit):0).limit(limit);
    res.send(data);
})

jobRoute.get("/filter",async(req,res)=>{
    const tech = req.query.filter;
    var filterjobs=await jobModel.find({language:tech})
    res.send(filterjobs);
})
jobRoute.get("/sort",async(req,res)=>{
    const sort = req.query.sort;
    var jobs=await jobModel.find();
    if(sort=="asc")
    {
        
    }
    else if(sort=="desc")
    {

    }
    res.send(jobs);
})

jobRoute.get("/search",async(req,res)=>{
    const search = req.query.search?req.query.search:"";
    var jobs = await jobModel.find({language:{$regex:search,$options:"i"}});
    res.send(jobs);
})

module.exports = jobRoute;