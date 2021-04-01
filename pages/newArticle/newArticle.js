import HeaderMain from "../../components/HeaderMain"
import Form from "../../components/Form"
import Footer from "../../components/Footer"
import { ContainerTwo } from "../../styles/Container"
import { StyledHeadingTwoCenter } from "../../styles/StyledHeadingTags"

const newArticle = () => {
    return (
        <ContainerTwo>
            <HeaderMain>
                <StyledHeadingTwoCenter>
                    Add a new Article
                </StyledHeadingTwoCenter>
            </HeaderMain>
            <Form />
            <Footer />
        </ContainerTwo>
    )
}

export default newArticle
