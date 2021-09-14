import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { getPosts } from "../../api/postsAPI"
import { Post } from "../../types/postType"

type initialStateType = {
  posts: Post[]
  status: string
}
const initialState: initialStateType = {
  posts: [],
  status: ""
}

export const getPostsThunk = createAsyncThunk(
  "posts/getPosts",
  async (obj, { dispatch, getState }) => (await getPosts()).data
)

export const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(getPostsThunk.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getPostsThunk.fulfilled, (state, { payload }) => {
        state.status = 'success'
        state.posts = payload
      }).addCase(getPostsThunk.rejected, (state, action) => {
        state.status = 'failed'
      })
  }
})

export default postsSlice.reducer;