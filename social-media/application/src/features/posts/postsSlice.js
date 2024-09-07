import {createSlice} from '@reduxjs/toolkit'

const initialState=[
    {
        id: '1',
        title: 'First Post',
        content:'This is the first ever Post of this app',
    
    },{
        id: '2',
        title: 'Second Post',
        content:'This is the second Post of this app',
    }
]
const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{

    }
})

export default postsSlice.reducer
export const selectAllPost = (state=> state.posts)