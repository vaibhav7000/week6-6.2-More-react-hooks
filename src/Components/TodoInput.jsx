import TodoWrapper from "./TodoWrapper";

export default function TodoInput({ title, updateTitle }) {

    return (
        <TodoWrapper>
                <label htmlFor="title">Enter title</label>
                <input value={title} onInput={updateTitle} id="title" placeholder="Enter the todo title for search" />
        </TodoWrapper>
    )
}