// Props destructuring is a way to extract the props from the component

// in order to use javascript in the return we use { }
// the prop text bellow is the name of the prop that we are passing in the component
// it contains the value of the prop that we are passing in the component
// text is the variable name that we are using to access the value of the prop we created
const NavButton = ({ text }) => {
    return(
        <button>{text}</button>
    )
}

export default NavButton;