const mongoose = require('mongoose');
// const { workout } = require('.');
const Schema = mongoose.Schema

const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },

        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: 'Please enter an exercise type'
                },
                name: {
                    type: String,
                    trim: true,
                    required: 'Please enter a name'
                },
                duration: {
                    type: Number,
                    trim: true,
                    required: 'Please enter the time spent'
                },
                weight: {
                    type: Number,
                    trim: true,
                },

                reps: {
                    type: Number,
                    trim: true,
                },
                sets: {
                    type:Number,
                    trim: true,
                },
                distance: {
                    type: Number,
                    trim: true,
                }
            }
            
        ]
    }
)
const Workout = mongoose.model('workout', WorkoutSchema)
module.exports = Workout;