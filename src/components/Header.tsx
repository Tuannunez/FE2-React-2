import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Avatar } from "antd"

function Header() {
    const context = useContext(UserContext)
    if(!context) return

    const {user} = context

  return (
    <div style={{display: "flex", gap:10, padding: 20}}>
        {user ? (
            <>
            <Avatar src={user.avatar} />
            <span>{user.name}</span>
            </>
        ) : (
            <span>Chua dang nhap</span>
        )}
    </div>
  )
}

export default Header