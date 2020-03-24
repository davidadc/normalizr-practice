import { postsReducer as posts } from './modules/posts.reducer';
import { commentsReducer as comments } from './modules/comments.reducer';
import { usersReducer as users } from './modules/users.reducer';

const reducer = {
  reducer: {
    posts,
    comments,
    users
  }
};

export default reducer;
