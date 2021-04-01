import { StyledButton } from '../styles/StyledButton'

const Button = ({ children }) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    )
}

export default Button
