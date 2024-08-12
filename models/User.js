const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        Accident_Index: {
            type:String
        },
        Accident_Date: {
            type:String
        },
        Day_of_Week: {
            type:String 
        },
        Junction_Control: {
            type:String
        },
        Junction_Detail: {
            type:String 
        },
        Accident_Severity: {
            type:String
        },
        Latitude: {
            type:String
        },
        Light_Conditions: {
            type:String
        },
        Local_Authority_District: {
            type:String
        },
        Carriageway_Hazards: {
            type:String
        },
        Longitude: {
            type:String
        },
        Number_of_Casualties: {
            type:String
        },
        Number_of_Vehicles: {
            type:String
        },
        Police_Force: {
            type:String
        },
        Road_Surface_Conditions: {
            type:String 
        },
        Road_Type: {
            type:String 
        },
        Speed_limit: {
            type:String
        },
        Time: {
            type:String
        },
        Urban_or_Rural_Area: {
            type:String
        },
        Weather_Conditions: {
            type:String
        },
        Vehicle_Type: {
            type:String
        }
    });

module.exports = mongoose.model('User', userSchema)