import { createSlice } from "@reduxjs/toolkit";


function formatDate(date) {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Intl.DateTimeFormat('en-GB', options).format(date);
}

const date = formatDate(new Date('2024-07-25'))

const initialState = {
    notes: [
        {
            tag: 'Life',
            date: date,
            content: {
                title: 'This Is My Life...',
                excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                description: ''
            }
        },
        {
            tag: 'Life',
            date: date,
            content: {
                title: 'This Is My Life...',
                excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                description: ''
            }
        },
        {
            tag: 'Life',
            date: date,
            content: {
                title: 'This Is My Life...',
                excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                description: ''
            }
        },
        {
            tag: 'Life',
            date: date,
            content: {
                title: 'This Is My Life...',
                excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                description: ''
            }
        },
        {
            tag: 'Life',
            date: date,
            content: {
                title: 'This Is My Life...',
                excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                description: ''
            }
        },
        {
            tag: 'Life',
            date: date,
            content: {
                title: 'This Is My Life...',
                excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                description: ''
            }
        },
        {
            tag: 'Life',
            date: date,
            content: {
                title: 'This Is My Life...',
                excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                description: ''
            }
        },
    ]
}

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.notes.unshift(action.payload)
        }
    }
})


export const allNotes = (state) => state.notes.notes
export const {addPost} = notesSlice.actions
export default notesSlice.reducer;