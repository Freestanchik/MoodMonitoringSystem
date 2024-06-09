import mongoose from "mongoose";

const MoodReportSchema = mongoose.Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        rate: {
            type: Number,
            required: [true],
        },
        reportDate: {
            type: Date,
            required: [true],
        },
        isCrunch: {
            type: Boolean,
        },
        isSick: {
            type: Boolean,
        },
        isConflict: {
            type: Boolean,
        },
        IsPersonal: {
            type: Boolean,
        },
        additionalInfo: {
            type: String
        }

    },
    {
        timestamps: true,
    }
);

export default mongoose.model("MoodReport", MoodReportSchema);

