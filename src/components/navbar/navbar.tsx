import React from "react"
import Logo from "../logo/logo"
import "./navbar.scss"
import { Button, Menu, MenuItem } from "@mui/material"
import {
    LocalMallOutlined,
    KeyboardArrowDownOutlined,
} from "@mui/icons-material"

interface Props {
    showCategories?: boolean
}

const Navbar: React.FC<Props> = ({ showCategories }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div className="navbar">
            <Logo color="white" marginLeft="4rem" mobileMarginLeft="1rem" />
            {showCategories && (
                <div style={{ marginLeft: 20 }}>
                    <Button
                        variant="outlined"
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        endIcon={
                            <KeyboardArrowDownOutlined
                                style={{ color: "white" }}
                            />
                        }
                        style={{
                            color: "white",
                            borderColor: "grey",
                            fontSize: ".75rem",
                        }}
                    >
                        Categories
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            "aria-labelledby": "basic-button",
                        }}
                    >
                        <MenuItem onClick={handleClose}>
                            Women's Fashion
                        </MenuItem>
                        <MenuItem onClick={handleClose}>Men's Fashion</MenuItem>
                    </Menu>
                </div>
            )}
            <div className="navbarshoppinglogo">
                <LocalMallOutlined style={{ color: "white" }} />
            </div>
        </div>
    )
}

export default Navbar
