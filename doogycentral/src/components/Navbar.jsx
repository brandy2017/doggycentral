import NavButton from "./NavButton";

const Navbar = () => {
    return(
        <div>
            <h1>
                <NavButton text="Home" />
                <NavButton text="About Us" />
                <NavButton text="Contact" />
                <NavButton text="Sign In" />
                Navbar
            </h1>
        </div>
    )
}
export default Navbar;