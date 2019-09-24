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
			authorId: {
				type: ObjectId,
				require: true,
				trim: true
			},
			comment: {
				type: String,
				required: true,
				trim: true,
				maxlength: 160
			},
			shares: {
				facebook: {
					count: {
						type: Number,
						trim: true,
						default: 0
					}
				},
				instagram: {
					count: {
						type: Number,
						trim: true,
						default: 0
					}
				},
				twitter: {
					count: {
						type: Number,
						trim: true,
						default: 0
					}
				},
				band: {
					count: {
						type: Number,
						trim: true,
						default: 0
					}
				},
				stories: {
					count: {
						type: Number,
						trim: true,
						default: 0
					}
				},
				kakao: {
					count: {
						type: Number,
						trim: true,
						default: 0
					}
				}
			}
		}]
	},
	{
		timestamps: true
	}
);