function TodoWrapper({ children }) {

    return (
        <div style={{
            display:"flex", flexDirection:"column", padding: 30, boxShadow:"0px 0px 10px 15px rgba(176, 176, 176, 0.55)", color:"black", borderRadius: 10, gap: 10, margin: 20
        }}>
            {children}
        </div>
    )
}

export default TodoWrapper;