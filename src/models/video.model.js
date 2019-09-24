const mongoose = require('mongoose');
const moment = require('moment-timezone');

/**
 * Video Schema
 * @private
 */
const videoSchema = new mongoose.Schema(
	{
		url: {
			type: String,
			trim: true
		},
		likes: {
			type: Number,
			default: 0,
			required: true
		},
		comments: [{
			author: {
				type: String,
				require: true,
				trim: true
			},
			comment: {
				type: String,
				required: true,
				trim: true,
				maxlength: 160
			}
		}]
	},
	{
		timestamps: true
	}
);