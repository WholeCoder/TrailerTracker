"use strict";
var feed_actions_1 = require("./feed.actions");
exports.feedReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case feed_actions_1.FEED_ADD_SUCCESS:
            return state.concat([Object.assign({}, action.payload, {
                    comments: []
                })]);
        case feed_actions_1.FEED_REMOVE_SUCCESS:
            return state.filter(function (feed) { return action.payload.id !== feed.id; });
        case feed_actions_1.FEED_ADD_COMMENT_SUCCESS:
            var feed = state.filter(function (item) { return action.payload.id === item.id; })[0];
            var index = state.indexOf(feed);
            var newFeed = Object.assign({}, feed, {
                comments: feed.comments.concat([action.payload.comment])
            });
            return state.slice(0, index).concat([newFeed], state.slice(index + 1));
        default:
            return state;
    }
};
