const { response } = require('express');
var User = require('../models/User');

var csv= require('csvtojson');

const importUser = async(req,res)=>{
    try {

        var userData = [];
        csv()
        .fromFile(req.file.path)
        .then(async(response)=>{
            
            for(var x = 0; x < response.length; x++)
            {
                userData.push({
                    Accident_Index: response[x].Accident_Index,
                    Accident_Date: response[x].Accident_Date,
                    Day_of_Week: response[x].Day_of_Week,
                    Junction_Control: response[x].Junction_Control,
                    Junction_Detail: response[x].Junction_Detail,
                    Accident_Severity: response[x].Accident_Severity,
                    Latitude: response[x].Latitude,
                    Light_Conditions: response[x].Light_Conditions,
                    Local_Authority_District: response[x].Local_Authority_District,
                    Carriageway_Hazards: response[x].Carriageway_Hazards,
                    Longitude: response[x].Longitude,
                    Number_of_Casualties: response[x].Number_of_Casualties,
                    Number_of_Vehicles: response[x].Number_of_Vehicles,
                    Police_Force: response[x].Police_Force,
                    Road_Surface_Conditions: response[x].Road_Surface_Conditions,
                    Road_Type: response[x].Road_Type,
                    Speed_limit: response[x].Speed_limit,
                    Time: response[x].Time,
                    Urban_or_Rural_Area: response[x].Urban_or_Rural_Area,
                    Weather_Conditions: response[x].Weather_Conditions,
                    Vehicle_Type: response[x].Vehicle_Type,
                });
            }

           await User.insertMany(userData);
        });

        res.send({status:200, success:true, msg:'CSV Imported'});
    } catch (error) {
        res.send({status:400, success:false, msg:error.message});
    }
}

module.exports ={
    importUser
}